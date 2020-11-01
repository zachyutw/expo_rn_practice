/* eslint-disable react/prop-types */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import SignUpForm from '../../../components/Authorization/SignUpForm';
import SignInForm from '../../../components/Authorization/SignInForm';
import FindPasswordByEmailForm from '../../../components/Authorization/FindPasswordByEmailForm';
import FindPasswordByPhoneForm from '../../../components/Authorization/FindPasswordByPhoneForm';
import CenterView from '../CenterView';

const ScreenView = ({ children }) => <View style={{ padding: 50 }}>{children}</View>;

storiesOf('Authorization', module)
    .addDecorator((getStory) => (
        <CenterView>
            <ScreenView>{getStory()}</ScreenView>
        </CenterView>
    ))
    .add('Sign Up', () => <SignUpForm />)
    .add('Sign In', () => <SignInForm />)
    .add('Find Password By Email', () => <FindPasswordByEmailForm />)
    .add('Find Password By Phone', () => <FindPasswordByPhoneForm />);
