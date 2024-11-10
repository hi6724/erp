import React from 'react';
import { ReservationTable } from './ReservationTable';
import { Button } from '../ui/button';

function ContentHeader() {
  return (
    <div className='flex gap-4 items-center justify-center mb-4'>
      <Button>이전</Button>
      <h2>2024-11-10</h2>
      <Button>다음</Button>
    </div>
  );
}

function Content() {
  return (
    <>
      <ContentHeader />
      <ReservationTable />
    </>
  );
}

export default Content;
