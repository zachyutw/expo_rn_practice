import React from 'react';
import { Box } from '../../../components/Basic';

const Container = ({ children }) => {
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="background">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius="xl"
                    backgroundColor="secondary"
                ></Box>
            </Box>
            <Box flex={0.6}>{children}</Box>
            <Box flex={0.2} backgroundColor="background">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderTopLeftRadius="xl"
                    backgroundColor="secondary"
                ></Box>
            </Box>
        </Box>
    );
};

export default Container;
