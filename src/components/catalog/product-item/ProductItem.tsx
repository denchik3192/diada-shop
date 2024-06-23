'use client';
import { IProduct } from '@/types/product.interface';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
export interface IProductItem {
  product: IProduct;
}
const ProductItem: FC<IProductItem> = ({ product }) => {
  return (
    <div className="group relative">
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="aspect-square w-full overflow-hidden rounded-md bg-gray group-hover:opacity-75 lg:h-80 hover:shadow-lg ">
        <Link href={`/catalog/${product.id}`}>
          <Image
            src={'/honey-demo.jpg'}
            alt={product.name}
            className="w-full h-full object-cover object-center lg:h-full lg:w-full"
            width={300}
            height={300}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-smt text-gray-700">
            <Link href={`/products/${product?.slug}`}>{product.title}</Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
