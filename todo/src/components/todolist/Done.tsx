type DoneProps = {
  text: string;
};

import Image from 'next/image';
import btn from '../../../public/images/donebtn.png';

export default function Done({ text }: DoneProps) {
  return (
    <div className="flex items-center justify-between rounded-full px-4 py-2 text-sm bg-purple-100 text-purple-900">
      <div className="flex items-center gap-2">
        <Image
          src={btn}
          alt="완료 체크 버튼"
          width={20}
          height={20}
          className="object-contain"
        />
        {text}
      </div>
    </div>
  );
}
