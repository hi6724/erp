import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

function getTimeFromIndex(index: number) {
  // 시작 시간 설정
  const startTime = new Date();
  startTime.setHours(9, 0, 0, 0); // 9:00

  // 30분씩 더하기
  const newTime = new Date(startTime.getTime() + index * 30 * 60 * 1000);

  // 시간 형식 반환 (HH:MM)
  const hours = newTime.getHours().toString().padStart(2, '0');
  const minutes = newTime.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

function MyTableRow({ data }: any) {
  return (
    <TableRow className={cn('divide-x-[1px]')}>
      <TableCell>{getTimeFromIndex(data.index)}</TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
}

function MyTable() {
  const repeatList = Array.from({ length: 20 });
  return (
    <Table className='border'>
      <TableHeader>
        <TableRow className={cn('divide-x-[1px]', '*:text-accent *:bg-accent-foreground')}>
          <TableHead>시간</TableHead>
          <TableHead>강의실 1</TableHead>
          <TableHead>강의실 2</TableHead>
          <TableHead>강의실 3</TableHead>
          <TableHead>강의실 4</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {repeatList.map((el: any, i: number) => {
          return <MyTableRow key={i} data={{ ...el, index: i }} />;
        })}
      </TableBody>
    </Table>
  );
}

function ContentHeader() {
  return (
    <div className='flex gap-4 items-center justify-center mb-4'>
      <Button>이전</Button>
      <h2>2024-11-10</h2>
      <Button>다음</Button>
    </div>
  );
}

function Controller() {
  const reservations = [1, 2, 3, 4, 5];
  return (
    <>
      <div className='h-[2.25rem] flex justify-center items-center relative mb-4'>
        <div className='flex-grow text-center'>다음 예약</div>
        <Button>자동배치</Button>
      </div>

      <div className='flex flex-col gap-4'>
        <ScrollArea className='h-[calc(50vh-60px)]'>
          {reservations.map((el, i) => (
            <div key={i} className='h-32 bg-slate-500 mt-2 first:mt-0'>
              <div className='flex justify-between px-4 py-2'>
                <div>홍길동</div>
                <div>010-1234-1234</div>
              </div>
              <div>저번 시간 진도</div>
            </div>
          ))}
        </ScrollArea>

        <ScrollArea className='h-[calc(50vh-60px)]'>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex-grow text-center'>예약 시간 11:00 ~ 12:00</div>
            <Button>저장</Button>
          </div>
          <div className='flex mb-4'>
            <div className='flex-1 mr-4'>
              <AspectRatio ratio={7 / 9} className='bg-teal-200'>
                <img
                  src='https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Frobohash.org%2Fmail%40ashallendesign.co.uk'
                  alt='Image'
                  className='rounded-md object-cover h-full'
                />
              </AspectRatio>
            </div>
            <div className='flex flex-col flex-1 gap-2'>
              <div>이름</div>
              <div>전화번호</div>
              <div>이용권</div>
              <div>이용권 종료기간 + 잔여시간</div>
            </div>
          </div>
          <div className='mb-4'>회원 메모</div>
          <div>진도표</div>
        </ScrollArea>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className='p-2 flex justify-center'>
      <div className='container flex p-2 gap-4 2xl:max-w-[1820px]'>
        <div className='flex-[2_0_0] max-w-96 bg-red-100'></div>
        <div className='flex-[9_0_0]'>
          <ContentHeader />
          <MyTable />
        </div>
        <div className='flex-[4_0_0] max-w-96 flex-col'>
          <Controller />
        </div>
      </div>
    </div>
  );
}
