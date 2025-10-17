"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px]">
      <Image
        src="/images/headphones.jpg"
        alt="Hero Background"
        fill
        className="object-cover"
        unoptimized
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to ElectroShop
        </h1>
        <p className="text-gray-200 text-lg max-w-2xl mb-6">
          Explore the latest electronics with unbeatable prices. Fast shipping and top quality guaranteed.
        </p>
        <Link href="/products">
          <button className="px-8 py-4 bg-blue-800 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}
