import { IProduct } from '@/types/product.interface';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import ProductItem from './product-item/ProductItem';

interface ICatalog {
  isFull?: boolean;
  products: IProduct[];
}

export const Catalog: FC<ICatalog> = ({ products, isFull = true }) => {
  const data = isFull ? products : products.slice(0, 4);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Новейшие товары:</h2>
        {!isFull && (
          <Link href={'/catalog'} className="text-violet-600 flex items-center gap-x-1">
            Больше товаров
            <span>
              <ArrowRight />
            </span>
          </Link>
        )}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 ml:gap-x-8">
          {data.map((p) => (
            <ProductItem key={p._id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
