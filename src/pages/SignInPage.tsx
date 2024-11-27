import React from 'react';
import SignInForm from '../components/SignInForm';

const SignInPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <SignInForm />
        </div>
    );
};

export default SignInPage;
