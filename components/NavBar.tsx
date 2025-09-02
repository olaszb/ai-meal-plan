"use client";

import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, useUser, SignOutButton} from '@clerk/nextjs'
export default function NavBar() {
    const {isSignedIn, user} = useUser();

    return (
        <nav className="fixed top-0 left-0 w-full bg-zinc-900 shadowm-sm z-50 text-white"> 
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between">
                <Link href="/" className="-ml-25">
                    <Image className="text-xl font-bold text-emerald-700 cursor-pointer"
                        src="/logo.png" width={60} height={60} alt="Logo"
                    />
                </Link>
                <div className="space-x-6 flex items-center">
                    <SignedIn>
                        <Link className="hover:text-emerald-500 transition-colors" href="/mealplan">Meal Plan</Link>
                        {/* <Link className="hover:text-emerald-500 transition-colors" href={isSignedIn ? "/subscribe" : "/sign-up"}>Subscribe</Link> */}
                        {user?.imageUrl ? 
                        (<Link href="/profile" className="text-gray-700 hover:text-emerald-500 transition-colors">
                            <Image className="rounded-full" src={user.imageUrl} alt="Profile Picture" width={40} height={40}></Image>
                        </Link>) 
                        : 
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>}

                        <SignOutButton>
                            <button className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors">
                                Sign Out
                            </button>
                        </SignOutButton>

                    </SignedIn>
                    
                    <SignedOut>
                        <Link className="hover:text-emerald-500 transition-colors" href="/">Home</Link>
                        <Link className="hover:text-emerald-500 transition-colors" href={isSignedIn ? "/subscribe" : "/sign-up"}>Subscribe</Link>
                        <Link className="px-4 py-2 border-white border-1 rounded text-white hover:bg-gray-50 hover:text-black transition-colors" href="/sign-in">Sign In</Link>
                        <Link className="px-4 py-2 bg-emerald-500 rounded text-white hover:bg-emerald-600 transition-colors" href="/sign-up">Sign Up</Link>
                    </SignedOut>
                </div>
            </div> 
        </nav>
    );
}