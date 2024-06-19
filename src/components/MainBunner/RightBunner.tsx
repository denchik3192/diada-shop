import Image from 'next/image';
import { FC } from 'react';

const RightBunner: FC = () => {
  return (
    <div className="mb-12 flex w-full md:md-16 lg:w-2/3">
      <div className=" relative left-12 top-12 z-10 -ml-12 overflow-hidden px-2 py-2 bg-gray-100 shadow-lg md:left-10 md:top-16 lg:ml-0 -rotate-6">
        <Image
          src="/tea.jpeg"
          alt="Banner"
          className="w-full h-full object-cover object-center priority"
          width={400}
          height={400}
        />
      </div>
      <div className=" overflow-hidden px-2 py-2 rounded-lg bg-gray-100 shadow-lg rotate-12">
        <Image
          src="/barsuk.jpg"
          alt="Banner"
          className=" w-full h-full object-cover object-center priority "
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default RightBunner;
