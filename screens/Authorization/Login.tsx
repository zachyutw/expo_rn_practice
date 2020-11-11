import React, { useRef, useState } from 'react';
import { TextInput as RNTextInput, SafeAreaView } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BorderlessButton } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';
import { t } from 'i18n-js';
import Button from '../../components/Button/Button';
import { Text, Box } from '../../components/Basic';
import Container from './components/Container';
import { AuthNavigationProps } from './navigation';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';
import Footer from './components/Footer';
import { signInWithEmailAndPassword } from '../../redux/slices/authorizationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';
import constants from './constants';

const { login: Constants } = constants;

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, Constants.form.password.errors.min)
        .max(50, Constants.form.password.errors.max)
        .required(Constants.form.password.errors.required),
    email: Yup.string()
        .email(Constants.form.email.errors.invalid)
        .required(Constants.form.email.errors.required),
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
            title={t(Constants.footer.title)}
            action={t(Constants.footer.action)}
            onPress={() => navigation.navigate('SignUp')}
        />
    );
    return (
        <Container pattern={0} {...{ footer }}>
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
                        label={t(Constants.form.remember.label)}
                        checked={values.remember}
                        onChange={() =>
                            setFieldValue('remember', !values.remember)
                        }
                    />
                    <BorderlessButton
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        <Text variant="button" color="primary">
                            {t(Constants.forgotPassword)}
                        </Text>
                    </BorderlessButton>
                </Box>
                {error.message && (
                    <Box marginVertical="s">
                        <Text color="danger">{t(error.message)}</Text>
                    </Box>
                )}

                <Box alignItems="center" marginTop="m">
                    <Button
                        variant="primary"
                        onPress={handleSubmit}
                        label={t(Constants.loginButton)}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
