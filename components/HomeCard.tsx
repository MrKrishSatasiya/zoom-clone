'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between min-h-[240px] rounded-[14px] cursor-pointer shrink-0 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-12px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-12px)]',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
        <p className="text-base sm:text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
