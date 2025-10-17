"use client";
import { useEffect, useState, use } from "react";
import Image from "next/image";

export default function ProductDetail({ params }) {
    const { id } = use(params);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((p) => p._id === id);
                setProduct(found);
            });
    }, [id]);

    if (!product) return <p className="text-white p-10">Loading...</p>;

    return (
        <div className="p-10 max-w-5xl mx-auto items-center flex flex-col md:flex-row gap-10 bg-gray-900 text-white rounded shadow">


            <div className="flex-1">
                {product.image && (
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={800}
                        height={400}
                        className="rounded-lg object-cover w-full"
                        unoptimized
                    />
                )}
            </div>


            <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-blue-400 font-semibold mb-2">
                    Price: ${product.price}
                </p>
                <p className="text-gray-300 mb-2">Category: {product.category}</p>
                <p className="text-gray-400">{product.desc}</p>
            </div>
        </div>
    );
}