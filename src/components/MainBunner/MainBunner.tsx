import React, { FC } from 'react';
import LeftBunner from './LeftBunner';
import RightBunner from './RightBunner';

const MainBunner: FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:pb-6 lg:max-w7xl">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16 pt-12">
        <LeftBunner />
        <RightBunner />
      </div>
    </section>
  );
};

export default MainBunner;
