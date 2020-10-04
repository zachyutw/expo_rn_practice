/**
 * @copyright © Copyright 2020 zachyu.tw@gmail.com. All rights reserved.
 */
import React, { FunctionComponent, useEffect } from 'react';
import { Layout, Input, Button, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CountryPicker from 'react-native-country-picker-modal';
import {
    getFieldPropsWithUseForm,
    FormField,
    COUNTRY_CODE,
    PHONE_NUMBER,
    countryCodeField,
    phoneNumberField,
} from './utils';

export const fieldsProps: Array<FormField> = [
    countryCodeField,
    phoneNumberField,
];

const styles = StyleSheet.create({
    signUpForm: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    input: {
        flexDirection: 'row',
        flex: 1,
        flexBasis: '80%',
        justifyContent: 'space-between',
        flexGrow: 1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 14,
        marginBottom: 14,
    },
    phoneInput: {
        width: '70%',
    },
    countryCode: {
        borderColor: '#333',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 0,
    },
});

type FindPasswordByPhoneValues = {
    phoneNumber?: any;
    [key: string]: any;
};

type FormProps = {
    onSubmit: any;
};

const FindPasswordByPhoneForm: FunctionComponent<FormProps> = ({
    onSubmit,
}) => {
    const { errors, control, handleSubmit, formState } = useForm<
        FindPasswordByPhoneValues
    >({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        defaultValues: { [COUNTRY_CODE]: 'TW', [PHONE_NUMBER]: undefined },
    });

    const fieldPropsWithUseForm: FindPasswordByPhoneValues = getFieldPropsWithUseForm(
        fieldsProps,
        formState,
        errors
    );

    useEffect(() => {}, []);
    console.log(formState);
    console.log(errors);
    return (
        <Layout style={styles.signUpForm}>
            <Layout style={styles.input}>
                <Controller
                    control={control}
                    render={({ onChange, value }) => (
                        <CountryPicker
                            countryCode={value}
                            containerButtonStyle={{
                                borderColor: '#EAEAEA',
                                borderWidth: 1,
                                borderRadius: 3,
                                paddingVertical: 1,
                                paddingHorizontal: 3,
                            }}
                            withCallingCode
                            withAlphaFilter
                            withCallingCodeButton
                            onSelect={(country) => {
                                onChange(country.cca2);
                            }}
                        />
                    )}
                    name={COUNTRY_CODE}
                    defaultValue="TW"
                />

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            {...fieldPropsWithUseForm[PHONE_NUMBER]}
                            style={styles.phoneInput}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                    name={PHONE_NUMBER}
                    rules={{
                        required: `${PHONE_NUMBER} field is required`,
                        maxLength: {
                            value: 8,
                            message: `can't over 8 character`,
                        },
                    }}
                    defaultValue=""
                />
            </Layout>
            <Button style={styles.input} onPress={handleSubmit(onSubmit)}>
                Submit
            </Button>
        </Layout>
    );
};

export default FindPasswordByPhoneForm;
