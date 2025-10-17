"use client";

export default function Contact() {
    return (
        <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36rem] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72rem]"
                />
            </div>

            {/* Title */}
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Contact Us
                </h2>
                <p className="mt-2 text-lg text-gray-400">
                    Have questions or inquiries? Send us a message and we’ll get back to you.
                </p>
            </div>

            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-y-6">

                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-white">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-white">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Your message"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                        </div>
                    </div>
                </div>


                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}
