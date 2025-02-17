'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Verify() {
    const searchParams = useSearchParams();
    const [email, setEmail] = useState(null);
    useEffect(() => {
        const emailParam = searchParams.get('email');
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [searchParams]);
    if (email === null) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-gray-600">Loading...</p>
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12 px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="text-2xl font-extrabold text-gray-900 text-center">
                    Check Your Email
                </h2>
                <p className="mt-2 text-center text-lg text-gray-600">
                    We’ve sent an email to <span className="font-semibold">{email}</span>. Please check your inbox to verify your account.
                </p>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                       Go to login<a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
