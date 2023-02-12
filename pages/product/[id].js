import Layout from "@/components/Layout";
import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductScreen() {
  const { query } = useRouter();
  const { id } = query;
  const product = data.productes.find((f) => f.id === id);

  if (!product) {
    return <div>Product not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image src={product.image} width={640} height={640} />
        </div>
        <div>
          <ul>
            <li>
              Product name:{" "}
              <span className="text-orange-500 font-semibold">
                {product.name}
              </span>
            </li>
            <li>
              Category:{" "}
              <span className="text-orange-500 font-semibold">
                {product.category}
              </span>
            </li>
            <li>
              Brand:{" "}
              <span className="text-orange-500 font-semibold">
                {product.brand}
              </span>
            </li>
            <li>
              {" "}
              Review:{" "}
              <span className="text-orange-500 font-semibold">
                {product.rating} of {product.numReviews}
              </span>
            </li>
            <li className="flex">description: {product.description}</li>
          </ul>
        </div>
        <div className=" card flex gap-2">
          <div>Price: </div>
          <div> ${product.price}</div>
          <div className="mb-2 flex gap-2">
            <div>Status:</div>
            <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
