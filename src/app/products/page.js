"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [filterCategory, setFilterCategory] = useState("All");
    // ==============pagination=============
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    // ======================

    useEffect(() => {
        fetch("/api/products")
            .then(async (res) => {
                if (!res.ok) {
                    const errorText = await res.text();
                    throw new Error(errorText || "Failed to fetch products");
                }

                const text = await res.text();
                if (!text) return [];

                return JSON.parse(text);
            })
            .then((data) => {
                if (!Array.isArray(data)) {
                    console.error("API did not return an array:", data);
                    return;
                }

                const uniqueProducts = Array.from(
                    new Map(data.map((item) => [item._id, item])).values()
                );
                setProducts(uniqueProducts);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
            });
    }, []);

    const categories = ["All", ...new Set(products.map((p) => p.category).filter(Boolean))];
    // =================filter===============
    const filteredProducts =
        filterCategory === "All"
            ? products
            : products.filter((p) => p.category === filterCategory);

    // ================================
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <div className="min-h-screen bg-gray-950 text-white px-6 py-10 max-w-7xl mx-auto  flex flex-col items-center align-middle">
            <h1 className="text-5xl font-bold mb-6 ">Products</h1>

            {/* ==============filter btn------ */}
            <div className="flex gap-4 mb-8 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`px-4 py-2 rounded-lg transition-colors duration-300 font-semibold ${filterCategory === cat
                            ? "bg-gray-600 text-white"
                            : "bg-gray-700 hover:bg-gray-600 text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {!products.length && (
                <p className="text-white p-10 my-10 flex justify-center">Loading...</p>
            )}
            {/* card=============== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentProducts.map((product) => {
                    console.log("Category:", product.category);
                    console.log("Image:", product.image);
                    console.log("Name:", product.name);

                    return (
                        <div
                            key={product._id || product.name}
                            className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors duration-300 shadow-md flex flex-col items-center"
                        >
                            {product.image && (
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={200}
                                    className="rounded-lg mb-4 object-cover"
                                />
                            )}
                            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-300 text-center mb-2">${product.price}</p>
                            <p className="text-gray-400 text-center mb-4">{product.category}</p>
                            <Link href={`/products/${product._id}`}>
                                <button className="px-5 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-300 font-semibold">
                                    View Product
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </div>
            {/* Pagination btns-==================*/}
            <div className="flex justify-center mt-8 gap-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <button
                    disabled={indexOfLastItem >= filteredProducts.length}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

        </div>
    );
}
