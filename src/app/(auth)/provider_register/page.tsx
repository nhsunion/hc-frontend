// Import necessary modules and components
import { useState, FormEvent } from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { button_style } from '../../utils/Styling';

export default function RegisterForm() {
    const router = useRouter();
    // State for form fields
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // State for error and loading
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Basic client-side validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        // API call
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register/patient`, {
                body: JSON.stringify({ fullName, email, password }),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            });

            if (response.ok) {
                router.push('/patient_login');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'An error occurred');
            }
        } catch (error) {
            setError('Failed to connect to the server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Full Name" />
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Email" />
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Password" />
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Confirm Password" />
                        <Button
                            variant="contained"
                            disabled={isLoading}
                            onClick={handleSubmit}
                            style={button_style}
                            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </Button>
                    </form>
                </div>
                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link href="/login">
                        <a className="no-underline border-b border-blue text-blue">Log in</a>
                    </Link>.
                </div>
            </div>
        </div>
    );
}
