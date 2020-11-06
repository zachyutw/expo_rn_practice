import React from 'react';
import Box from '../Basic/Box';
import { Spinner as KittenSpinner } from '@ui-kitten/components';
const Spinner = () => (
    <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        position="absolute"
        backgroundColor="backgroundSpinner"
        top={0}
        left={0}
        right={0}
        bottom={0}
        width="100%"
        height="100%"
    >
        <KittenSpinner />
    </Box>
);

export default Spinner;
