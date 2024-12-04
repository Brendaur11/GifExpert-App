import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

  const [counter, setCounter] = useState(10)

  useEffect(() => {
    getGifs(category);
  }, [ ])

  return (
    <>
      <h2>{category}</h2>

      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  )
}
