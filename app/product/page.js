import React from 'react'
import Card from "../components/Card";
import Link from 'next/link';
export default async function page() {
    const getData = await fetch('https://fakestoreapi.com/products');
  const products = await getData.json();
  return (
    <div className='mx-[50px]'>
        <div className=''>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => {
            return <div key={product.id}>
                <Link href={`product/${product.id}`}>
                <Card 
                    
                    title={product.title} 
                    image={product.image} 
                    price={product.price} 
                    category={product.category}
                />
                </Link>
            
            </div>
            
            
          })}
        </div>
        
      </div>
    </div>
  )
}
