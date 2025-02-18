'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Loading from "../components/Loading";
import Link from "next/link";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleSignup = async () => {
        setError("");
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/auth/signup", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (res.ok) {
                router.push(`/verify?email=${encodeURIComponent(email)}`);
            } else {
                setError(data.message || "User already exists");
                setEmail("");
                setPassword("");
            }
        } catch (err) {
            setError("some time you went wrong");
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-mono">
            <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-lg flex flex-col lg:flex-row p-6 sm:p-10">
                <div className="lg:w-1/2 p-6 sm:p-12 flex flex-col items-center">
                    <img src="/images/logo.png" className="mx-auto w-40" alt="Company logo" />
                    <div className="w-full flex-1 mt-8">
                        <div className="my-6 border-b text-center">
                        <div className=" leading-none px-2 flex items-center  justify-center  text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                               <span className="pr-2"> SignUp with</span>  <img src="google.svg" width={15} height={20} />  
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <div className="mx-auto max-w-xs">
                            <TextField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <TextField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Button onClick={handleSignup} className="mt-5 tracking-wide font-semibold text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                </svg>
                                <span className="ml-3">Sign Up</span>
                            </Button>
                        </div>
                        <Link href='/login' className="flex justify-center mt-4 ">
                        <span className=" text-gray-500 pr-3 hover:text-blue-400"> Login With</span>
                        <img src="google.svg" width={20} height={20} />  
                       
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 hidden lg:flex items-center justify-center bg-navcolor">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/signup.jpg')" }} />
                </div>
            </div>
        </div>
    )
}
