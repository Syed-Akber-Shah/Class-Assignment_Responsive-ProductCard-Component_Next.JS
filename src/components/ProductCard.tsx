import React from 'react';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <main className="flex flex-wrap justify-center gap-4 p-4">
      <div className="flex flex-col items-center border border-spacing-0 border-lime-400 p-4 
                      basis-full sm:basis-1/2 lg:basis-1/3">
        <Image src={'/product1jpg1.jpg'} alt="product1" width={300} height={300} />
        <b>Price: Rs 300</b>
      </div>
      <div className="flex flex-col items-center border border-spacing-0 border-lime-400 p-4 
                      basis-full sm:basis-1/2 lg:basis-1/3">
        <Image src={'/product2jpg2.jpg'} alt="product2" width={300} height={300} />
        <b>Price: Rs 300</b>
      </div>
      <div className="flex flex-col items-center border border-spacing-0 border-lime-400 p-4 
                      basis-full sm:basis-1/2 lg:basis-1/3">
        <Image src={'/product3jpg3.jpg'} alt="product3" width={300} height={300} />
        <b>Price: Rs 300</b>
      </div>
    </main>
  );
}

