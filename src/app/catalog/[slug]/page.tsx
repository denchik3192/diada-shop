import Button from '@/components/button/Button';
import { ProductService } from '@/services/product.service';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  async function getProducts() {
    const data = await ProductService.getOneProduct(params.slug);
    return data;
  }
  const data = await getProducts();

  return (
    <div className="flex items-center justify-between mx-auto py-6 lg:max-w-7xl">
      <Image src={'/honey-demo.jpg'} width={800} height={500} alt="product image" />
      <div className="pl-8 align-start">
        <h1 className="text-4xl">{data.title}</h1>
        <p className="text-lg">{data.body}</p>
        <Link href={'/catalog'}>
          <Button>Вернуться</Button>
        </Link>
      </div>
    </div>
  );
}
