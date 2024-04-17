'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count >= 1)
      console.log('The count is:', count);

  },[count]);

  return (
    <main className="">
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(count+1)}>Increment</button>
      </div>
    </main>
  );
}
