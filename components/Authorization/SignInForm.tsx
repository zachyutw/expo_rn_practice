/**
 * @copyright © Copyright 2020 zachyu.tw@gmail.com. All rights reserved.
 */
import React, { FunctionComponent } from 'react';
import { Layout, Input, Button, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import PasswordInput from '../Form/PasswordInput';
import { useForm, Controller } from 'react-hook-form';
import {
    getFieldPropsWithUseForm,
    FormField,
    FormProps,
    accountField,
    passwordField,
    ACCOUNT,
    PASSWORD,
} from './utils';

export const fieldsProps: Array<FormField> = [accountField, passwordField];

const styles = StyleSheet.create({
    form: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    input: {
        flex: 1,
        flexBasis: '100%',
        flexGrow: 1,
        marginTop: 14,
        marginBottom: 14,
    },
});

type SignInValues = {
    account?: any;
    password?: any;
    [key: string]: any;
};

const SignInForm: FunctionComponent<FormProps> = ({ onSubmit }) => {
    const { errors, control, handleSubmit, formState } = useForm<SignInValues>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    });

    const fieldPropsWithUseForm: SignInValues = getFieldPropsWithUseForm(
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
            <Layout style={styles.input}>
                <Button
                    style={styles.input}
                    disabled={!formState.isValid}
                    onPress={handleSubmit(onSubmit)}
                >
                    Submit
                </Button>
            </Layout>

            <Layout style={styles.input}>
                <Text>Forget Password?</Text>
            </Layout>
        </Layout>
    );
};

export default SignInForm;
