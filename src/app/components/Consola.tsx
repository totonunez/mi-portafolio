import { useState, useEffect } from "react";

export default function Consola() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Efecto", count);
  });
  return <div onClick={() => setCount(count + 1)}>Click me</div>;
}
