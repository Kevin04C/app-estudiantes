import React from 'react'
import { useSelector } from 'react-redux'
import { BodyChoresCompleteDetail } from './BodyChoresCompleteDetail';

export const BodyChoresComplete = () => {

    const {choresComplete} = useSelector(state=>state.chores);

    console.log(choresComplete);

  return (
    <>
        {
            choresComplete.map((chore)=>(
                <BodyChoresCompleteDetail key={chore._id} {...chore}/>
            ))
        }
    </>
  )
}
