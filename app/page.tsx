import { Suspense } from 'react';
import About from './components/About'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  );
}