type TodoProps = {
  text: string;
};

import Image from 'next/image';
import btn from '../../../public/images/todobtn.png';

export default function Todo({ text }: TodoProps) {
  return (
    <div className="flex items-center justify-between border border-black rounded-full px-4 py-2 text-sm bg-white">
      <div className="flex items-center gap-2">
        <Image
          src={btn}
          alt="할 일 체크 버튼"
          width={20}
          height={20}
          className="object-contain"
        />
        {text}
      </div>
    </div>
  );
}
