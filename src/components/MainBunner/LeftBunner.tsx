import { FC } from 'react';

const LeftBunner: FC = () => {
  return (
    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40">
      <h1 className="mb-4 text-4xl font-bald text-lime-900 sm:text-5xl md:mb-8 md:text-6xl">
        ДАРЫ ПРИРОДЫ
      </h1>
      <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio deleniti at fuga id
        quae, corporis eaque voluptas quas eum saepe dicta quia doloremque voluptates, laudantium
        minima nemo modi nulla?
      </p>
    </div>
  );
};

export default LeftBunner;
