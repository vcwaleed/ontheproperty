'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        setError("");
        try {
            const res = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (res.ok) {
                router.push("/");
            } else {
                setError(data.message || "Invalid email or password");
                setEmail("");
                setPassword("");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-lg flex flex-col lg:flex-row p-6 sm:p-10">
                <div className="lg:w-1/2 p-6 sm:p-12 flex flex-col items-center">
                    <img src="/images/logo.png" className="mx-auto w-40" alt="Company logo" />
                    <div className="w-full flex-1 mt-8">
                        <div className="my-6 border-b text-center">
                            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                Sign in with Cartesian Email
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <div className="mx-auto max-w-xs">
                            <TextField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <TextField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Button onClick={handleLogin} className="mt-5 tracking-wide font-semibold text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                </svg>
                                <span className="ml-3">Sign In</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 hidden lg:flex items-center justify-center bg-navcolor">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/loginimage.png')" }} />
                </div>
            </div>
        </div>
    );
}
