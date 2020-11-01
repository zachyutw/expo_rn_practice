export type InputProps = {
    value?: string;
    onChangeText?: Function;
    onBlur?: Function;
    onFocus?: Function;
    label?: string;
    placeholder?: string;
    caption?: string;
    style?: any;
};

export type CountryCodeDropdownProps = {
    value?: string;
    onSelect?: string;
    label?: string;
    placeholder?: string;
    caption?: string;
    style?: any;
    [key: string]: any;
};
