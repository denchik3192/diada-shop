'use client';
import { FC } from 'react';
import { Caveat } from 'next/font/google';
import { motion } from 'framer-motion';

const marckScript = Caveat({
  subsets: ['cyrillic'],
});

const LeftBunner: FC = () => {
  return (
    <motion.div
      initial={{ x: 180 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5 }}
      className="relative  mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40">
      <h1
        className={`${marckScript.className} mb-4 text-7xl font-bold text-lime-900 sm:text-5xl md:mb-8 md:text-8xl`}>
        ДАРЫ ПРИРОДЫ
      </h1>
      <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
        Cокровища солнечного Кавказа и не только: Изысканные чаи, дивный мёд, переливающийся яркими
        оттенками натуральный урбеч, полный заботы и традиций. Эти дары природы воплощают в
        себетеплоту солнечных дней и ароматы весенних лугов.
      </p>
    </motion.div>
  );
};

export default LeftBunner;
