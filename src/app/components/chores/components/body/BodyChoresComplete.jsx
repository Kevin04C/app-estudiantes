import React, { useEffect } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BodyChoresCompleteDetail } from './BodyChoresCompleteDetail';

export const BodyChoresComplete = () => {
  const { choresComplete } = useSelector((state) => state.chores);

  const normal = useMemo(() => choresComplete.slice(-5).reverse(), [choresComplete]);

  return (
    <>
      {normal.map((chore) => (
        <BodyChoresCompleteDetail key={chore._id} {...chore} />
      ))}
    </>
  );
};
