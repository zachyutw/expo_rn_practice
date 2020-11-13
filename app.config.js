import 'dotenv/config';

export default {
    name: 'expo_rn_practice',
    version: '1.1.4',
    extra: {
        testId: process.env.EXPO_TEST_ID,
    },
    android: {
        package: 'com.zachyutw.expo_rn_practice',
    },
    description: 'Use Expo Rn to build a hostel App',
    githubUrl: 'https://github.com/zachyutw/expo_rn_practice',
    icon: './assets/images/icon.png',
};
