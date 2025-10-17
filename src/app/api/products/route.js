import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
    await connectDB();
    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const newProduct = await Product.create(body);
        return new Response(JSON.stringify(newProduct), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
export async function DELETE() {
    await connectDB();
    await Product.deleteMany({});
    return new Response(JSON.stringify({ message: "All products deleted" }), { status: 200 });
}
