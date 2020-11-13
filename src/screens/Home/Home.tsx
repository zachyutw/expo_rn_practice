import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { t } from 'i18n-js';
import { Calendar } from '@ui-kitten/components';
import { MomentDateService } from '@ui-kitten/moment';
import moment from 'moment';

import { Box, Text } from '../../components/Basic';
import { useAppDispatch } from '../../redux/store';
import { fetchEventsThunk } from '../../redux/slices/bookingSlice';
import constants from './constants';
import DayCell from './components/DayCell';

const { home: Constants } = constants;

const dateService = new MomentDateService();

const styles = StyleSheet.create({
    cover: {
        width: '100%',
        height: 250,
    },
});

const Home = ({ navigation }) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch<any>(fetchEventsThunk());
    }, []);

    // console.log(entities);
    return (
        <ScrollView>
            <Box flex={1} justifyContent="flex-start" alignItems="center">
                <Box
                    flex={1}
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    backgroundColor="background"
                >
                    <Text padding="s" variant="title1">
                        {t(Constants.title1)}
                    </Text>
                </Box>

                <Box
                    backgroundColor="background"
                    width="100%"
                    flex={1}
                    alignItems="center"
                >
                    <Calendar
                        dateService={dateService}
                        // filter={(date) =>
                        //     !entities.some(({ startDate }) =>
                        //         moment(date).isSame(startDate)
                        //     )
                        // }
                        renderDay={(props, style) => (
                            <DayCell {...props} style={style} />
                        )}
                        boundingMonth
                        style={{ borderColor: 'transparent' }}
                        date={moment()}
                    />
                </Box>

                <Box padding="s">
                    <Text variant="title2" padding="m">
                        {t(Constants.title2)}
                    </Text>
                    <Box paddingVertical="l" paddingHorizontal="m">
                        <Text variant="body" marginVertical="m">
                            {t(Constants.introductions[0])}
                        </Text>
                        <Text variant="title3" marginVertical="m">
                            {t(Constants.labels[0])}
                        </Text>
                        <Text variant="body">
                            {t(Constants.introductions[1])}
                        </Text>
                        <Text variant="title3" marginVertical="m">
                            {t(Constants.labels[1])}
                        </Text>
                        <Text variant="body">
                            {t(Constants.introductions[2])}
                        </Text>
                        <Text variant="title3" marginVertical="m">
                            {t(Constants.labels[2])}
                        </Text>
                        <Text>{t(Constants.introductions[3])}</Text>
                    </Box>

                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/QUqUuHk.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        {t(Constants.descriptions[0])}
                    </Text>
                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/maLnufA.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        {t(Constants.descriptions[1])}
                    </Text>
                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/JCzDVbW.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        {t(Constants.descriptions[2])}
                    </Text>
                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/GccibaV.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        {t(Constants.descriptions[3])}
                    </Text>
                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/5ZM1Exj.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        {t(Constants.descriptions[4])}
                    </Text>
                </Box>
            </Box>
        </ScrollView>
    );
};

export default Home;
