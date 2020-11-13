/**
 * @copyright © Copyright 2020 zachyu.tw@gmail.com. All rights reserved.
 */

import _ from 'lodash';
import { FormField } from './form';

// fields
export const ACCOUNT = 'account';
export const PASSWORD = 'password';
export const CONFIRM_PASSWORD = 'confirmPassword';
export const EMAIL = 'email';
export const COUNTRY_CODE = 'countryCode';
export const PHONE_NUMBER = 'phoneNumber';

export const accountField: FormField = {
    nativeID: ACCOUNT,
    testID: ACCOUNT,
    label: _.startCase(ACCOUNT),
    placeholder: 'Type your email or account name over here',
};

export const passwordField: FormField = {
    nativeID: PASSWORD,
    testID: PASSWORD,
    label: _.startCase(PASSWORD),
    placeholder: 'Set up the password',
    caption: 'Should contain at least 4 symbols',
};

export const confirmPasswordField: FormField = {
    nativeID: CONFIRM_PASSWORD,
    testID: CONFIRM_PASSWORD,
    label: _.startCase(CONFIRM_PASSWORD),
    placeholder: 'confirm the password',
    caption: 'Should contain at least 4 symbols',
};

export const emailField: FormField = {
    nativeID: EMAIL,
    testID: EMAIL,
    label: _.startCase(EMAIL),
    placeholder: 'Please enter your email',
};

export const countryCodeField: FormField = {
    nativeID: COUNTRY_CODE,
    testID: COUNTRY_CODE,
};

export const phoneNumberField: FormField = {
    nativeID: PHONE_NUMBER,
    testID: PHONE_NUMBER,
    placeholder: 'Please enter your phoneNumber',
};
