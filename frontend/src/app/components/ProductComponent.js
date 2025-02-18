'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Button from "./Button";

export default function ProductComponent() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/product/allproduct');
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-red-500 text-center p-4">Error:Something went Wrong</div>;

    return (
        <section className="flex flex-col items-center py-1 px-1 sm:px-6 lg:px-8 font-mono">
    <section className="flex flex-col items-center py-9">
    <span className="text-5xl p-2 mb-7 font-bold text-btn_color flex text-center">Our Popular Residences</span>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
            <div key={product._id} className="max-w-xs bg-card_color border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full h-56 overflow-hidden rounded-t-lg">
                    <Image 
                        className="object-cover w-full h-full"
                        src={`http://localhost:5000/uploads/${product.imagePath.split('\\').pop()}`}
                        width={289}
                        height={200}
                        alt={product.description}
                    />
                </div>
                <div className="p-5">
                    <div className="flex items-center space-x-1">
                        <Image src='/location-information.svg' width={20} height={20} alt="location"/>
                        <span className="font-semibold">{product.place}</span>
                    </div>
                    <div className="flex space-x-14 pt-3">
                        <div className="flex items-center space-x-1">
                            <Image src='/measuring-tape.svg' width={20} height={20} alt="size"/>
                            <span className="font-semibold">{product.size} sq ft</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Image src='/price.svg' width={20} height={20} alt="price"/>
                            <span className="font-semibold">${product.price}</span>
                        </div>
                    </div>
                    <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
                        {product.description}
                    </p>
                    <Button className="px-6 py-3 w-full text-center bg-btn_color text-white hover:bg-btn_color-dark">
                        Book Now
                    </Button>
                </div>
            </div>
        ))}
    </section>
</section>

</section>
    )
}
