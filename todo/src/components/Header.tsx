'use client';

import Image from 'next/image';
import logo from '../../public/images/logo.png';
// import logo_m from '../../public/images/logo_m.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-white text-black flex items-center px-6 shadow-md">
      <Image
        src={logo}
        alt="Logo"
        width={120}
        height={40}
        className="object-contain"
      />
    </header>
  );
}
