/**
 * @copyright © Copyright 2020 zachyu.tw@gmail.com. All rights reserved.
 */

export type FormField = {
    nativeID: string;
    testID: string;
    label?: string;
    placeholder?: string;
    caption?: string;
    status?: string | undefined;
};

export type FormProps = {
    onSubmit: any;
};

export const getFieldPropsWithUseForm = (
    fieldsProps: FormField[],
    formState: any,
    errors: any
) => {
    return Object.fromEntries(
        fieldsProps.map((field) => {
            let fieldName: string = field.nativeID;
            let newField = { ...field };
            if (formState.touched[fieldName]) {
                if (Boolean(errors[fieldName])) {
                    newField = {
                        ...field,
                        status: 'danger',
                        caption: errors[fieldName].message,
                    };
                } else {
                    newField = { ...field, status: undefined };
                }
            }

            return [fieldName, newField];
        })
    );
};
