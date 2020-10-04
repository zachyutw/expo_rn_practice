// ./expobook.js
import React from 'react';
import createExpobook from 'expobook';
import SignUpForm from './features/Authorization/SignUpForm.tsx';

const expobook = createExpobook();

expobook.add('My SignUpForm', () => <SignUpForm />);

export default expobook.build();
