import React, { useRef } from 'react';
import { TextInput as RNTextInput, SafeAreaView } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { t } from 'i18n-js';

import { Text, Box } from '../../components/Basic';
import Container from './components/Container';
import Button from '../../components/Button/Button';
import { AuthNavigationProps } from './navigation';
import TextInput from '../../components/Form/TextInput';

import { createUserByEmailPasswordThunk } from '../../redux/slices/authorizationSlice';
import { CommonActions } from '@react-navigation/native';
import * as Facebook from 'expo-facebook';
import * as GoogleSignIn from 'expo-google-sign-in';
import Footer from './components/Footer';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';
import constants from './constants';

const { signUp: Constants } = constants;

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, t(Constants.form.password.errors.min))
        .max(50, t(Constants.form.password.errors.max))
        .required(t(Constants.form.password.errors.required)),
    passwordConfirmation: Yup.string()
        .equals(
            [Yup.ref('password')],
            t(Constants.form.passwordConfirmation.errors.equals)
        )
        .required(t(Constants.form.passwordConfirmation.errors.required)),
    email: Yup.string()
        .email(t(Constants.form.email.errors.invalid))
        .required(t(Constants.form.email.errors.required)),
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
            email: '',
            password: '',
            passwordConfirmation: '',
            remember: true,
        },
        onSubmit: ({ email, password }) => {
            dispatch<any>(createUserByEmailPasswordThunk({ email, password }))
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
            title={t(Constants.footer.title)}
            action={t(Constants.footer.action)}
            onPress={() => navigation.navigate('Login')}
        />
    );
    return (
        <Container pattern={1} {...{ footer }}>
            <Text variant="title1" textAlign="center" marginBottom="l">
                {t(Constants.title1)}
            </Text>
            <Text variant="body" textAlign="center" marginBottom="l">
                {t(Constants.body)}
            </Text>
            <Box>
                <Box marginBottom="m">
                    <TextInput
                        icon="mail"
                        placeholder={t(Constants.form.email.placeholder)}
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
                        placeholder={t(Constants.form.password.placeholder)}
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
                        placeholder={t(
                            Constants.form.passwordConfirmation.placeholder
                        )}
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
                        label={t(Constants.submitButton)}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;
