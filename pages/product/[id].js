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
        <div className="  h-[150px]">
    
          <div class="flex justify-center w-full">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
           price : {product.price}
              </h5>
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Status: {product.countInStock > 0 ? "In stock" : "Unavailable"}
              </h5>
             
              <button
                type="button"
                className=" inline-block px-6 py-2.5 text-center bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
            Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
