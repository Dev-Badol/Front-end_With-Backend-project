import Layout from '@/components/Layout'
import data from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProductScreen() {
    const {query} = useRouter()
    const {slug} = query
    const product = data.productes.find(f => f.slug === slug)
    if(!product){
        return <div>Product not Found</div>
    }
  return (
   <Layout 
   title={product.name}>
    
        <div className='py-2'>
            <Link href="/" >back to products</Link>
        </div>
        <div className='grid md:grid-cols-4 md:gap-3'>
                <div className="md:col-span-2">
                    <Image 
                    src={product.image}
                    width={640}
                    height={640}
                    />
                </div>
        </div>

   </Layout>
  )
}
