import { IProduct } from '@/types/product.interface';
import { convertPrice } from '@/utils/convert-price';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

export interface IProductItem {
  product: IProduct;
}
const ProductItem: FC<IProductItem> = ({ product }) => {
  return (
    <Link href={`/catalog/${product.id}`}>
      <div className="group relative">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray group-hover:opacity-75 lg:h-80 ">
          <Image
            src={'/honey-demo.jpg'}
            alt={product.name}
            className="w-full h-full object-cover object-center lg:h-full lg:w-full"
            width={300}
            height={300}
          />
        </div>

        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-smt text-gray-700">
              <Link href={`/products/${product?.slug}`}>{product.title}</Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.body}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
