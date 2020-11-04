import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Text, Box } from '../../components/Basic';
import Button from '../../components/Button/Button';
import { AuthNavigationProps } from './index';
import TextInput from '../../components/Form/TextInput';

import { createUserByEmailPassword } from '../../redux/slices/authorizationSlice';
import { CommonActions } from '@react-navigation/native';
import * as Facebook from 'expo-facebook';
import * as GoogleSignIn from 'expo-google-sign-in';
import Footer from './components/Footer';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    passwordConfirmation: Yup.string()
        .equals([Yup.ref('password')], "Passwords don't match")
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = ({ navigation }: AuthNavigationProps<'SignUp'>) => {
    const dispatch = useAppDispatch();
    const error: any = useAppSelector(
        ({ authorization }) => authorization.error
    );
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: {
            email: 'rntest001@test.com',
            password: 'Qwer1234',
            passwordConfirmation: 'Qwer1234',
            remember: true,
        },
        onSubmit: ({ email, password }) => {
            // actions({email,password});
            console.log('signUp');

            dispatch<any>(createUserByEmailPassword({ email, password }))
                .then(unwrapResult)
                .then(() => {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        })
                    );
                });
        },
    });
    const password = useRef<RNTextInput>(null);
    const passwordConfirmation = useRef<RNTextInput>(null);
    const footer = (
        <Footer
            title="Already have an account?"
            action="Login here"
            onPress={() => navigation.navigate('Login')}
        />
    );
    return (
        <Container pattern={1} {...{ footer }}>
            <Text variant="title1" textAlign="center" marginBottom="l">
                Create account
            </Text>
            <Text variant="body" textAlign="center" marginBottom="l">
                Let’s us know what your name, email, and your password
            </Text>
            <Box>
                <Box marginBottom="m">
                    <TextInput
                        icon="mail"
                        placeholder="Enter your Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => password.current?.focus()}
                    />
                </Box>

                <Box marginBottom="m">
                    <TextInput
                        ref={password}
                        icon="lock"
                        placeholder="Enter your Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() =>
                            passwordConfirmation.current?.focus()
                        }
                        secureTextEntry
                    />
                </Box>

                <Box marginBottom="m">
                    <TextInput
                        ref={passwordConfirmation}
                        icon="lock"
                        placeholder="Confirm your Password"
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        error={errors.passwordConfirmation}
                        touched={touched.passwordConfirmation}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                </Box>
                {error.message && (
                    <Box marginVertical="s">
                        <Text color="danger">{error.message}</Text>
                    </Box>
                )}
                <Box alignItems="center" marginTop="m">
                    <Button
                        variant="primary"
                        onPress={handleSubmit}
                        label="Create your account"
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;
