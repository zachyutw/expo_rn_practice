import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { t } from 'i18n-js';

import { Box, Text } from '../../components/Basic';
import { fetchRoomsThunk } from '../../redux/slices/roomSlice';
import { Calendar } from '@ui-kitten/components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchEventsThunk } from '../../redux/slices/bookingSlice';
import constants from './constants';

const { home: Constants } = constants;

import moment from 'moment';
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
    const { entities } = useAppSelector(({ booking }) => booking);

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
                        filter={(date) =>
                            !entities.some(({ startDate }) =>
                                moment(date).isSame(startDate)
                            )
                        }
                        style={{ borderColor: 'transparent' }}
                        date={new Date()}
                    />
                </Box>

                <Box>
                    <Text variant="title2" padding="m">
                        {t(Constants.title2)}
                    </Text>
                    <Box paddingVertical="l" paddingHorizontal="m">
                        <Text variant="body" marginVertical="m">
                            小山坡屋仔位於關西交流道下附近，步行就可到附近草莓園，民宿斜對面就是「關西農會仙草加工廠」，距離六福村約10分鐘車程、小人國約15分鐘車程。
                        </Text>
                        <Text variant="title3" marginVertical="m">
                            The space
                        </Text>
                        <Text variant="body">
                            每間臥房都各有特色，一共有五間臥房：
                            一樓有一間「招牌雙人房」、一間「玲瓏雙人房」，二樓有一間「新古典四人房」、一間「四人親子房」，以及三樓「超大四人房」為觀景房。
                        </Text>
                        <Text variant="title3" marginVertical="m">
                            Guest access
                        </Text>
                        <Text variant="body">
                            可使用的公共空間包含戶外院子、烤肉區、客廳、廚房，客廳有餐桌、吧台桌，還有各個樓層的衛浴空間
                        </Text>
                        <Text variant="title3" marginVertical="m">
                            Other things to note
                        </Text>
                        <Text>
                            「三樓景觀房」未開放飲食，可在公共區域或一、二層樓用餐。
                            響應環保，垃圾須做好基本分類、傢俱、電器物品請勿任意移動或攜出。
                            洗衣機、烘衣機洗滌設備，使用前請先告知房東
                        </Text>
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
