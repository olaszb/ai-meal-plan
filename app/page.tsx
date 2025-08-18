import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 py-8 mt-8 sm:py-12 lg:py-16 max-w-7xl mx-auto text-gray-50">
        <section className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-lg mb-12 p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Personalized AI Meal Plans</h1>
            <p>
                Let our AI do the planning. You focus on cooking and enjoying!
            </p>
            <Link href="/sign-up" className="mt-4 inline-block bg-white text-emerald-500 font-medium px-5 py-3 rounded hover:bg-gray100 transition-colors">
                Get Started
            </Link>
        </section>

        <section id="how-it-works" className="mb-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold">How It Works</h2>
                <p className="mt-2 text-gray-600">
                    Follow these simple steps to get your personalized meal plan
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center">
                    <div className="bg-emerald-500 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14v7m-3-3h6"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Create an Account</h3>
                    <p className="text-center">
                        Sign up or sign in to access your personalized meal plans.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-emerald-500 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Set your Preferences</h3>
                    <p className="text-center">
                        Input your dietary preferences and goals to tailor your meal plans.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-emerald-500 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Receive Your Meal Plan</h3>
                    <p className="text-center">
                        Get your customized meal plan delivered weekly to your account.
                    </p>
                </div>

                
            </div>
        </section>
    </div>
  );
}
