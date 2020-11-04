import React, { useRef, useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BorderlessButton } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';

import Button from '../../components/Button/Button';
import { Container, Text, Box } from '../../components/Basic';
import { AuthNavigationProps } from './index';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';
import Footer from './components/Footer';
import { signInWithEmailAndPassword } from '../../redux/slices/authorizationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const Login = ({ navigation }: AuthNavigationProps<'Login'>) => {
    const error: any = useAppSelector(
        ({ authorization }) => authorization.error
    );
    const dispatch = useAppDispatch();
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        values,
        setFieldValue,
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '', remember: true },
        onSubmit: ({ email, password }) => {
            dispatch<any>(signInWithEmailAndPassword({ email, password }))
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
    const footer = (
        <Footer
            title="Don’t have an account?"
            action="Sign Up here"
            onPress={() => navigation.navigate('SignUp')}
        />
    );
    return (
        <Container pattern={0} {...{ footer }}>
            <Text variant="title1" textAlign="center" marginBottom="l">
                Welcome back
            </Text>
            <Text variant="body" textAlign="center" marginBottom="l">
                Use your credentials below and login to your account
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
                    onSubmitEditing={() => handleSubmit()}
                    secureTextEntry
                />
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginVertical="s"
                >
                    <Checkbox
                        label="Remember me"
                        checked={values.remember}
                        onChange={() =>
                            setFieldValue('remember', !values.remember)
                        }
                    />
                    <BorderlessButton
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        <Text variant="button" color="primary">
                            Forgot password
                        </Text>
                    </BorderlessButton>
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
                        label="Log into your account"
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
