// import Image from "next/image";
'use client';

import useMediaQuery from '@/utils/useMediaQuery';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width: 639px)');

  return (
    <>
      {isDesktop && (
        <>
          <div></div>
        </>
      )}
      {isTablet && <div>태블릿 사이즈</div>}
      {isMobile && <div>모바일 사이즈</div>}
    </>
  );
}
