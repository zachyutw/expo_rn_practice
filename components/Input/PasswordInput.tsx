/**
 * @copyright © Copyright 2020 zachyu.tw@gmail.com. All rights reserved.
 */
import React, { useState, forwardRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';

const AlertIcon = (props: any) => (
    <Icon {...props} name="alert-circle-outline" />
);

type InputProps = {
    value?: string;
    onChangeText: Function;
    onBlur?: Function;
    onFocus?: Function;
    label?: string;
    placeholder?: string;
    caption?: string;
    style?: any;
};

const PasswordInput = forwardRef<Input, InputProps>(
    (
        {
            value,
            onChangeText,
            label,
            placeholder,
            caption,
            onBlur = () => {},
            onFocus = () => {},
            style,
            ...rest
        },
        forwardRef
    ) => {
        const [secureTextEntry, setSecureTextEntry] = useState(true);

        const toggleSecureEntry = () => {
            setSecureTextEntry(!secureTextEntry);
        };

        const renderIcon = (props: any) => (
            <TouchableWithoutFeedback onPress={toggleSecureEntry}>
                <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
            </TouchableWithoutFeedback>
        );

        return (
            <Input
                {...rest}
                ref={forwardRef}
                style={style}
                value={value}
                label={label}
                placeholder={placeholder}
                caption={caption}
                accessoryRight={renderIcon}
                captionIcon={AlertIcon}
                secureTextEntry={secureTextEntry}
                onBlur={(nextValue) => onBlur(nextValue)}
                onFocus={(nextValue) => onFocus(nextValue)}
                onChangeText={(nextValue) => onChangeText(nextValue)}
            />
        );
    }
);

export default PasswordInput;
