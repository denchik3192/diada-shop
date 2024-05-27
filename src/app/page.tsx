import Image from 'next/image';
import Link from 'next/link';
import Footer from './../components/footer/Footer';
import Header from '@/components/Header/Header';
import Button from '@/components/button/Button';
import MainBunner from '@/components/MainBunner/MainBunner';
import Catalog from '@/components/catalog/Catalog';
import { ProductService } from '@/services/product.service';

async function getProducts() {
  const data = await ProductService.getAll();
  return data;
}

export default async function Home() {
  const data = await getProducts();
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <MainBunner />
      <Catalog products={data} isFull={false} />
      {/* <main className="flex items-center justify-between px-20">
        <div className="title-section py-20">
          <Button>
            Купить - Узнать больше
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </Button>
          <div className="text-5xl font-bold uppercase py-10 max-w-lg tracking-wider text-lime-800">
            вкус природных даров
          </div>
          <p className="text-stone-500 pb-10 max-w-md">
            Откройте для себя наш тщательно подобранный выбор изысканных чаев, сырого меда и
            питательного урбетча – вашего путешествие к естественному здоровью начинается здесь.
          </p>

          <Button>Товары</Button>
          <Button>Story</Button>
        </div>
        <Image src={'/tea.jpeg'} width={500} height={300} alt="tea-img" />
      </main>

      <div className="flex min-h-screen flex-col items-center justify-between p-10">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className="mb-3 text-2xl font-semibold">
              Чай{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className="mb-3 text-2xl font-semibold">
              Животные Жиры{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className="mb-3 text-2xl font-semibold">
              Мёд{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className="mb-3 text-2xl font-semibold">
              Варенье{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className="mb-3 text-2xl font-semibold">
              Урбеч{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}
