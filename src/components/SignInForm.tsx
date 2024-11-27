import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address');
        }

        if (!password) {
            setPasswordError('Password is required');
        }

        if (!emailError && !passwordError) {
            console.log('Form submitted:', { email, password });
            navigate('/transaction-table');

        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto">
            <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${emailError ? 'border-red-500' : 'border-gray-300'
                        }`}
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${passwordError ? 'border-red-500' : 'border-gray-300'
                        }`}
                />
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;
