import { Button, Title } from "@banks-nx/design-system";
import { useState } from "react";


const Home = () => {
  const [primes, setPrimes] = useState<number[]>([]);

  const fetchPrimes = async () => {
    const res = await fetch('/api/primes');
    const json = await res.json() as { primes: number[] };
    setPrimes(json.primes);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Title>Hello, World</Title>
      <Button type="primary" onClick={fetchPrimes}>Click me</Button>
      <p>primes: {primes.join(', ')}</p>
      
    </div>
  )
}


export default Home;