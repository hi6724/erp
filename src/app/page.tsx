import Content from '@/components/main/Content';
import LNB from '@/components/main/LNB';
import { ReservationInfo } from '@/components/main/ReservationInfo';

export default function Home() {
  return (
    <div className='flex  gap-4'>
      <div className='flex-[2_0_0] max-w-96'>
        <LNB />
      </div>
      <div className='flex-[9_0_0]'>
        <Content />
      </div>
      <div className='flex-[4_0_0] max-w-96 flex-col'>
        <ReservationInfo />
      </div>
    </div>
  );
}
