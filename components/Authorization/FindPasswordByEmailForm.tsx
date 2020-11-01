/**
 * @copyright © Copyright 2020 zachyu.tw@gmail.com. All rights reserved.
 */
import React, { FunctionComponent } from 'react';
import { Layout, Input, Button, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {
    getFieldPropsWithUseForm,
    FormField,
    EMAIL,
    emailField,
} from './utils';

export const fieldsProps: Array<FormField> = [emailField];

const styles = StyleSheet.create({
    signUpForm: {
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

type FindPasswordByEmailValues = {
    email?: any;
    [key: string]: any;
};

type FormProps = {
    onSubmit: any;
};

const FindPasswordByEmailForm: FunctionComponent<FormProps> = ({
    onSubmit,
}) => {
    const { errors, control, handleSubmit, formState } = useForm<
        FindPasswordByEmailValues
    >({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    });

    const fieldPropsWithUseForm: FindPasswordByEmailValues = getFieldPropsWithUseForm(
        fieldsProps,
        formState,
        errors
    );

    return (
        <Layout style={styles.signUpForm}>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <Input
                        {...fieldPropsWithUseForm[EMAIL]}
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name={EMAIL}
                rules={{
                    required: `${EMAIL} field is required`,
                    maxLength: { value: 8, message: `can't over 8 character` },
                }}
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
        </Layout>
    );
};

export default FindPasswordByEmailForm;
