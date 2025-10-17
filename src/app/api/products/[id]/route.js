import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(req, { params }) {
    await connectDB();
    const product = await Product.findById(params.id);

    if (!product) {
        return Response.json({ error: "Not found" }, { status: 404 });
    }

    return Response.json(product);
}
