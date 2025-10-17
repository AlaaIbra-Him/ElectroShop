"use client";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alaa Ibrahim",
      feedback:
        "Amazing service! The products arrived on time and the quality is excellent.",
      avatar: "/images/conan.jpg",
    },
    {
      id: 2,
      name: "Ayman Fayed",
      feedback:
        "Great prices and fast delivery. I love shopping at ElectroShop!",
      avatar: "/images/conan.jpg",
    },
    {
      id: 3,
      name: "Eman Ahmed",
      feedback:
        "Customer support is fantastic. They helped me choose the perfect laptop.",
      avatar: "/images/conan.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">What Our Customers Say</h2>
        <p className="text-gray-300 mt-4">
          Real reviews from our happy clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((test) => (
          <div
            key={test.id}
            className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center"
          >
            <div className="w-24 h-24 mb-4 relative">
              <Image
                src={test.avatar}
                alt={test.name}
                fill
                className="rounded-full object-cover"
                unoptimized
              />
            </div>
            <p className="text-gray-300 text-center mb-4">&quot;{test.feedback}&quot;</p>
            <h3 className="text-xl font-semibold">{test.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
