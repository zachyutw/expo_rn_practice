/**
 * @copyright © Copyright 2020 zachyu.tw@gmail.com. All rights reserved.
 */
import React, { FunctionComponent } from 'react';
import { Layout, Input, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import PasswordInput from '../../components/Input/PasswordInput';
import { useForm, Controller } from 'react-hook-form';
import {
    getFieldPropsWithUseForm,
    FormField,
    FormProps,
    accountField,
    passwordField,
    confirmPasswordField,
    ACCOUNT,
    PASSWORD,
    CONFIRM_PASSWORD,
} from './utils';

export const fieldsProps: Array<FormField> = [
    accountField,
    passwordField,
    confirmPasswordField,
];

const styles = StyleSheet.create({
    form: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    input: {
        flex: 1,
        flexBasis: '80%',
        flexGrow: 1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 14,
        marginBottom: 14,
    },
});

type SignUpValues = {
    account?: any;
    password?: any;
    confirmPassword?: any;
    [key: string]: any;
};

const SignUpForm: FunctionComponent<FormProps> = ({ onSubmit }) => {
    const { getValues, errors, control, handleSubmit, formState } = useForm<
        SignUpValues
    >({ mode: 'onBlur', reValidateMode: 'onBlur' });

    const fieldPropsWithUseForm: SignUpValues = getFieldPropsWithUseForm(
        fieldsProps,
        formState,
        errors
    );

    return (
        <Layout style={styles.form}>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <Input
                        {...fieldPropsWithUseForm.account}
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name={ACCOUNT}
                rules={{
                    required: `${ACCOUNT} field is required`,
                    maxLength: { value: 8, message: `can't over 8 character` },
                }}
                defaultValue=""
            />
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <PasswordInput
                        {...fieldPropsWithUseForm.password}
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value: any) => onChange(value)}
                        value={value}
                    />
                )}
                name={PASSWORD}
                rules={{ required: `${PASSWORD} field is required` }}
                defaultValue=""
            />
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <PasswordInput
                        {...fieldPropsWithUseForm.confirmPassword}
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value: any) => onChange(value)}
                        value={value}
                    />
                )}
                name={CONFIRM_PASSWORD}
                rules={{
                    required: `${CONFIRM_PASSWORD} field is required`,
                    validate: (value) =>
                        value === getValues(PASSWORD)
                            ? true
                            : 'confirmed password should the same as password',
                }}
                defaultValue=""
            />
            <Button
                style={styles.input}
                disabled={!formState.isValid}
                onPress={handleSubmit(onSubmit)}
            >
                Submit
            </Button>
        </Layout>
    );
};

export default SignUpForm;
