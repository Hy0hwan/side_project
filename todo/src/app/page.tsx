// import Image from "next/image";
'use client';

import Header from '@/components/Header';
import useMediaQuery from '@/utils/useMediaQuery';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width: 639px)');

  return (
    <>
      {isDesktop && (
        <div>
          <Header />
        </div>
      )}
      {isTablet && <div>태블릿 사이즈</div>}
      {isMobile && <div>모바일 사이즈</div>}
    </>
  );
}
