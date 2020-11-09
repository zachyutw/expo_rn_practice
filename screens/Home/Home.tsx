import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Box, Text } from '../../components/Basic';
import { fetchRoomsThunk } from '../../redux/slices/roomSlice';
import { Calendar } from '@ui-kitten/components';
import { useAppDispatch, useAppSelector } from '../../redux/store';

import { fetchEventsThunk } from '../../redux/slices/bookingSlice';

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
    console.log(entities);
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
                        Rooms Booking
                    </Text>
                </Box>

                <Box
                    backgroundColor="background"
                    width="100%"
                    flex={1}
                    alignItems="center"
                >
                    <Calendar
                        filter={(date) => {
                            // console.log(date.toLocaleDateString());
                            return !entities.some(
                                ({ startDate }) =>
                                    startDate === date.toLocaleDateString()
                            );
                        }}
                        style={{ borderColor: 'transparent' }}
                        date={new Date()}
                    />
                </Box>

                <Box>
                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/QUqUuHk.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        Guanxi is a longevity village, with good mountains and
                        rivers, beautiful views of Dong'an ancient bridge,
                        trails in the water park, fresh air and beautiful
                        scenery.
                    </Text>
                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/maLnufA.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        The small hillside house is just one kilometer from the
                        Kansai Interchange, and the transportation is
                        convenient. It is only about a 10-minute drive from
                        Leofoo Village. There are strawberry gardens and tomato
                        farms nearby, and the Sencao Factory of the Kansai
                        Farmers’ Association is also opposite. It is very
                        suitable for the whole family. Sightseeing and traveling
                        together.
                    </Text>
                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/JCzDVbW.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        The homestay is mainly a private house for the
                        accommodation experience. You can enjoy the facilities
                        of our overall house without worrying about being
                        disturbed by other guests.
                    </Text>
                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/GccibaV.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        The public space includes a living room and a kitchen.
                        The living room has a bar table and a combined dining
                        table and chairs. The kitchen has a refrigerator, a
                        water dispenser, and tableware. It is equipped with a
                        gas stove, a microwave, an electric cooker, an induction
                        cooker and an oven.
                    </Text>
                    <Box>
                        <Image
                            resizeMode="cover"
                            source={{ uri: 'https://i.imgur.com/5ZM1Exj.jpg' }}
                            style={styles.cover}
                        />
                    </Box>
                    <Text padding="s" variant="body">
                        There is a barbecue area outdoors, and there is plenty
                        of space for activities in the courtyard. Children can
                        cycle and play in the courtyard. When there is no wind
                        or rain, there are equipment to provide badminton and
                        other activities, which is very pleasant.
                    </Text>
                </Box>
            </Box>
        </ScrollView>
    );
};

export default Home;
