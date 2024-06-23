import { notFound, redirect } from 'next/navigation';
import Products from './Products';
import Catalog from '@/components/catalog/Catalog';
import { ProductService } from '@/services/product.service';

const fetchData = async () => {
  const response = await ProductService.getAll();
  return response;
};

export default async function Page() {
  const data = await fetchData();

  if (!data) redirect('/404');

  return (
    <div>
      <Catalog isFull products={data} />
    </div>
  );
}
