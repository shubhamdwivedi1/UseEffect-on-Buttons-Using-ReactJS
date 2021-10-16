import React, { useEffect, useState } from 'react'
import './index.css'

const App = () => {
  const [num, updatedNum] = useState(0);
  const [nums, updatedNums] = useState(0);

  useEffect(
    () => {
      alert("Welcome to CountDown Game!!!!");
      console.log("i am clicked");
    },[num]
  );
  return (
    <>
      <button onClick={
        () => {
          updatedNum(num + 1)
        }
      }>CountDown {num}</button>

      <button onClick={
        () => {
          updatedNums(nums + 1)
        }
      }>CountDown {nums}</button>
    </>
  )
};

export default App