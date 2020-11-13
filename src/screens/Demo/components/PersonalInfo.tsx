import React, { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Box, Text } from '../../../components/Basic';
import TextInput from '../../../components/Form/TextInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import CheckboxGroup from "./CheckboxGroup";
import { unwrapResult } from '@reduxjs/toolkit';
import Button from '../../../components/Button/RectButton';
import { useAppSelector, useAppDispatch } from '../../../redux/store';
import { updateProfileThunk } from '../../../redux/slices/userSlice';
const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
];

const UserSchema = Yup.object().shape({
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
});

const PersonalInfo = () => {
    const user = useAppSelector(({ user }) => user.data);
    const { email, photoURL, emailVerified, displayName, address } = user;
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
        enableReinitialize: true,
        validationSchema: UserSchema,
        initialValues: { displayName, address },
        onSubmit: (submitValues) => {
            dispatch<any>(updateProfileThunk(submitValues));
            // dispatch<any>(signInWithEmailAndPassword({ email, password }))
            //     .then(unwrapResult)
            //     .then(() => {
            //         navigation.dispatch(
            //             CommonActions.reset({
            //                 index: 0,
            //                 routes: [{ name: 'Home' }],
            //             })
            //         );
            //     });
        },
    });

    // console.log(values, 'persona');
    return (
        <ScrollView>
            <Box padding="m">
                <Text variant="body" marginBottom="m">
                    Account Information
                </Text>
                <Box marginBottom="m">
                    <TextInput
                        onChangeText={handleChange('displayName')}
                        icon="user"
                        placeholder="Name"
                        autoCapitalize="none"
                        autoCompleteType="name"
                        defaultValue={values['displayName']}
                    />
                </Box>
                {/* <Box marginBottom="m">
                    <TextInput
                        onChangeText={handleChange('password')}
                        icon="lock"
                        placeholder="Enter your Password"
                        autoCompleteType="password"
                        autoCapitalize="none"
                        secureTextEntry
                    />
                </Box> */}
                <Box marginBottom="m">
                    <TextInput
                        onChangeText={handleChange('address')}
                        icon="map-pin"
                        placeholder="Address"
                        autoCapitalize="none"
                        autoCompleteType="street-address"
                        defaultValue={values['address']}
                    />
                </Box>
                <Box
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    marginVertical="m"
                >
                    <Button
                        variant="primary"
                        label="submit"
                        onPress={handleSubmit}
                    />
                </Box>
                {/* <CheckboxGroup options={genders} radio /> */}
            </Box>
        </ScrollView>
    );
};

export default PersonalInfo;
