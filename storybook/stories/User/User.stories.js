/* eslint-disable react/prop-types */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Layout } from '@ui-kitten/components';
import { View } from 'react-native';

import UserCoverCard from '../../../components/User/UserCoverCard';
import CenterView from '../CenterView';

const ScreenView = ({ children }) => (
    <Layout
        style={{
            flex: 1,
            width: '100%',
            height: 300,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',

            paddingBottom: 100,
            paddingTop: 100,
            color: 'black',
        }}
    >
        {children}
    </Layout>
);

storiesOf('User', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('User Cover Card', () => (
        <ScreenView>
            <UserCoverCard />
        </ScreenView>
    ));
