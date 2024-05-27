'use client';
import Image from 'next/image';
import s from './products.module.scss';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Metadata } from 'next';
import Card from '@/components/card/Card';
export const metadata: Metadata = {
  title: 'Products',
};

//ssr/isr/ssg

export default function Products({ data }: any) {
  //   const { replace } = useRouter;
  //   const pathname = usePathname();
  //   const params = useParams(); //for[slug]
  //   const params = useSearchParams(); //query

  return (
    <div className={s.products}>
      <h1>Products</h1>
      <Image src="/next.svg" alt="next" width={200} height={50} />
      <div className="grid grid-cols-4 ">
        {data.map((el: any) => (
          <Card key={el.id} el={el}></Card>
        ))}
      </div>
    </div>
  );
}
