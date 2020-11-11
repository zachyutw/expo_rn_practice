import React from 'react';
import Box from '../../../components/Basic/Box';

const PaletteItem = ({ color }) => {
    return (
        <Box
            padding="s"
            marginHorizontal="s"
            style={{ backgroundColor: color }}
            width={25}
            height={25}
            borderRadius="xl"
        />
    );
};

export default PaletteItem;
