import { notFound, redirect } from 'next/navigation';
import Products from './Products';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = response.json();
  return data;
};

export default async function Page() {
  const data = await fetchData();

  if (!data) redirect('/404');

  return (
    <div>
      <Products data={data} />
    </div>
  );
}
