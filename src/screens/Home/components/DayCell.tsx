import React, { useMemo } from 'react';
import { useAppSelector } from '../../../redux/store';
import { Box, Text } from '../../../components/Basic';
import moment, { Moment } from 'moment';
import { palette } from '../../../styles/Theme';
const DayCell = (props) => {
    const { entities } = useAppSelector(({ booking }) => booking);
    const { style, date } = props;

    // console.log(date);
    const isBookedDate = useMemo(
        () => entities.includes(moment(date).format('YYYY-MM-DD')),
        [date, entities]
    );

    const isToday = useMemo(() => moment(date).isSame(new Date(), 'day'), [
        date,
    ]);

    const textStyle = useMemo(() => {
        let color = style.text.color;

        if (isToday && isBookedDate) {
            color = palette.lightBlue;
        } else if (isToday) {
            color = palette.blue100;
        } else if (isBookedDate) {
            color = palette.transparentBlue100;
        }

        return { color };
    }, [isToday, isBookedDate, style]);

    return (
        <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            aspectRatio={1}
            borderRadius="s"
            backgroundColor={isToday ? 'background3' : 'background'}
        >
            <Text style={[style.text, textStyle]}>{`${date.date()}`}</Text>
            {isBookedDate && <Text fontSize={8}>Booked</Text>}
        </Box>
    );
};

export default DayCell;
