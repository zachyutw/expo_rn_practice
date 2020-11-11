export default {
    container: {
        skip: 'Skip',
    },
    welcome: {
        title1: "Let's get started",
        title3: 'Login to your account below or sign up',
        loginButton: 'Have an account? Login',
        signUpButton: 'Join us, it’s Free',
    },
    login: {
        title1: 'Welcome back',
        body: 'Use your credentials below and login to your account',
        form: {
            email: {
                placeholder: 'Enter your Email',
                errors: {
                    invalid: 'Invalid email',
                    required: 'Required',
                },
            },
            password: {
                placeholder: 'Enter your Password',
                errors: {
                    min: 'Too Short!',
                    max: 'Too Long!',
                    required: 'Required',
                },
            },
            remember: {
                label: 'Remember me',
            },
        },
        forgotPassword: 'Forgot password',
        loginButton: 'Have an account? Login',
        signUpButton: 'Join us, it’s Free',
        footer: {
            title: 'Don’t have an account?',
            action: 'Sign Up here',
        },
    },
    signUp: {
        title1: 'Create account',
        body: 'Let’s us know what your name, email, and your password',
        form: {
            email: {
                placeholder: 'Enter your Email',
                errors: {
                    invalid: 'Invalid email',
                    required: 'Required',
                },
            },
            password: {
                placeholder: 'Enter your Password',
                errors: {
                    min: 'Too Short!',
                    max: 'Too Long!',
                    required: 'Required',
                },
            },
            passwordConfirmation: {
                placeholder: 'Confirm your Password',
                errors: {
                    equals: "Passwords don't match",
                    required: 'Required',
                },
            },
            remember: {
                label: 'Remember me',
            },
        },
        submitButton: 'Create your account',
        footer: {
            title: 'Already have an account?',
            action: 'Login here',
        },
    },
};
