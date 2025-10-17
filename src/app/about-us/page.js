"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 relative h-64 md:h-96">
          <Image
            src="/images/headphones.jpg" 
            alt="About Us"
            fill
            className="rounded-lg object-cover"
            unoptimized
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-white">About ElectroShop</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            ElectroShop is your trusted partner for the latest electronics. 
            We provide top-quality products, unbeatable prices, and fast shipping 
            to ensure our customers are always satisfied.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our mission is to bring technology closer to you with exceptional service and a seamless shopping experience. 
            Join thousands of happy customers who trust ElectroShop for their tech needs.
          </p>
        </div>
      </div>
    </section>
  );
}
