import Link from 'next/link'

export default function ProductItem(product) {
    console.log(product.product.name)
  return (
    <div className='card border shadow-md'>
    <Link href={`/product/${product.slug}`}>
   
    
    <img src={product.product.image} alt="" 
    className='rounded shadow-md w-[200px] h-[200px]'/>
    </Link>
    <div className='flex flex-col items-center justify-center p-4'>
      <Link href={`/product/${product.product.slug}`}>

       
        <h2 className='text-lg cursor-pointer'>
            {product.product.name}
        </h2>
      
      </Link>
      <p className='mb-2'>
        {
            product.product.brand
        }
      </p>
      <p className="mb-2">
        ${
          product.product.price
        }
      </p>
      <button className='bg-blue-500 text-white p-4'>
        Add to cart
      </button>
    </div>
    </div>
  )
}
