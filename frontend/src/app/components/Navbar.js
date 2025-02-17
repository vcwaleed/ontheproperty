"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token"); 
    console.log(token)
    setIsLoggedIn(!!token); 
  }, []);
  
  const handleLogout = () => {
    Cookies.remove("token"); 
    setIsLoggedIn(false);
    router.push("/login"); 
  };

  return (
    <nav className="bg-navcolor text-gray-800 shadow-md font-mono font-semibold">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 py-3">
        <a href="/" className="flex items-center space-x-3">
          <img src="/images/logo.png" className="h-16 w-20" alt="Logo" />
        </a>
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="/services" className="hover:text-blue-400">Services</a></li>
          <li><a href="/upload" className="hover:text-blue-400">Upload</a></li>
          <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
        <div className="hidden md:block">
          {isLoggedIn ? (
            <Button onClick={handleLogout} className="hover:bg-btn_color  px-6 py-3">
              Logout
            </Button>
          ) : (
            <Button href="/login" className="hover:bg-btn_color  px-6 py-3">
              Login
            </Button>
          )}
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-btn_color focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white border-t border-gray-300`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="/services" className="hover:text-blue-400">Services</a></li>
          <li><a href="/upload" className="hover:text-blue-400">Upload</a></li>
          <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          <div>
            {isLoggedIn ? (
              <Button onClick={handleLogout} className="hover:bg-red-600">
                Logout
              </Button>
            ) : (
              <Button href="/login" className="hover:bg-blue-600">
                Login
              </Button>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}
