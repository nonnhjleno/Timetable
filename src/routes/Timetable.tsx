import React from 'react'
import { useParams } from 'react-router-dom';

const Timetable = () => {
  const { semesterId } = useParams<{ semesterId?: string }>();

  const id = semesterId ? parseInt(semesterId) : 1;
  const label = `${Math.ceil(id / 2)}年${id % 2 === 1 ? '前期' : '後期'}`;
  
  return (
    <div>{label}</div>
  )
}

export default Timetable