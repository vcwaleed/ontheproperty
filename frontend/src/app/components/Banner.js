'use client'
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Button from "./Button"
import Image from "next/image";

export default function Banner() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const token = Cookies.get("token"); 
        setIsLoggedIn(!!token); 
    }, []);

    const handleLogout = () => {
        Cookies.remove("token"); 
        setIsLoggedIn(false);
        router.push("/login"); 
    };

    return (
        <section className="bg-navcolor w-full">
            <div className="max-w-7xl mx-auto px-4 py-14 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-btn_color text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 max-w-[600px]">
                        Find Your Dream House
                    </h1>
                    <p className="text-btn_color text-lg md:text-xl mb-8 md:mb-12 max-w-[500px]">
                        Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
                    </p>
                    <div className="w-full md:w-auto">
                        {isLoggedIn ? (
                            <Button 
                                onClick={handleLogout} 
                                className="w-full md:w-auto hover:bg-btn_color px-8 md:px-14 py-3 text-lg"
                            >
                                Logout
                            </Button>
                        ) : (
                            <Button 
                                href="/login" 
                                className="w-full md:w-auto hover:bg-btn_color px-8 md:px-14 py-3 text-lg"
                            >
                                Login
                            </Button>
                        )}
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        <Image
                            src='/images/banner.png'
                            alt="Dream House Illustration"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
