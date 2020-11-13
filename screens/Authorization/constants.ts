export default {
    container: {
        skip: 'container_skip',
    },
    welcome: {
        title1: 'welcome_title1',
        title3: 'welcome_title3',
        loginButton: 'welcome_loginButton',
        signUpButton: 'welcome_signUpButton',
    },
    login: {
        title1: 'login_title1',
        body: 'login_body',
        form: {
            email: {
                placeholder: 'form_email_placeholder',
                errors: {
                    invalid: 'Invalid email',
                    required: 'form_errors_required',
                },
            },
            password: {
                placeholder: 'form_password_placeholder',
                errors: {
                    min: 'form_errors_min',
                    max: 'form_errors_max',
                    required: 'form_errors_required',
                },
            },
            remember: {
                label: 'form_password_label',
            },
        },
        forgotPassword: 'login_forgotPassword',
        loginButton: 'login_loginButton',
        signUpButton: 'login_signUpButton',
        footer: {
            title: 'login_footer_title',
            action: 'login_footer_action',
        },
    },
    signUp: {
        title1: 'signUp_title1',
        body: 'signUp_body',
        form: {
            email: {
                placeholder: 'form_email_placeholder',
                errors: {
                    invalid: 'Invalid email',
                    required: 'form_errors_required',
                },
            },
            password: {
                placeholder: 'form_password_placeholder',
                errors: {
                    min: 'form_errors_min',
                    max: 'form_errors_max',
                    required: 'form_errors_required',
                },
            },
            passwordConfirmation: {
                placeholder: 'form_passwordConfirmation_placeholder',
                errors: {
                    equals: 'form_passwordConfirmation_errors_equals',
                    required: 'form_errors_required',
                },
            },
            remember: {
                label: 'form_password_label',
            },
        },
        submitButton: 'signUp_submitButton',
        footer: {
            title: 'signUp_footer_title',
            action: 'signUp_footer_action',
        },
    },
};
