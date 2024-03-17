
'use client';

import { Carousel } from 'flowbite-react';
import { customTheme } from "@/components/CustomFlowbiteThemeComponent";
function SliderComponent() {

  return (
    <div className="w-full h-[600px]">
      <Carousel theme={customTheme.carousel} onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src="./istad logo.png" alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-green-400 dark:bg-gray-700 dark:text-white">
          <img src="./next.svg" alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src="./vercel.svg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}
export default SliderComponent;