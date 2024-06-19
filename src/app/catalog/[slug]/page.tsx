import { ProductService } from '@/services/product.service';
import { useParams } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  async function getProducts() {
    const data = await ProductService.getOneProduct(params.slug);
    return data;
  }
  const data = await getProducts();

  return (
    <div>
      <h1>{data.title}</h1>My Post: {params.slug}
    </div>
  );
}
