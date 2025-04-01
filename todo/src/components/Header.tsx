'use client';

import Image from 'next/image';
import logo from '../../public/images/logo.png';
import logo_m from '../../public/images/logo_m.png';
import useMediaQuery from '@/utils/useMediaQuery';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <header className="sticky top-0 z-50 h-16 bg-white text-black flex items-center px-6 shadow-md">
      {isDesktop && (
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      )}
      {isTablet && (
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      )}
      {isMobile && (
        <Image
          src={logo_m}
          alt="Logo_m"
          width={80}
          height={30}
          className="object-contain"
        />
      )}
    </header>
  );
}
