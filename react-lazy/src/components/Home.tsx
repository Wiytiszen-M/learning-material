import { Suspense, lazy } from "react";
import Loading from "./Loading";

const LazyList = lazy(() => delayForDemo(import("./List")));

function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        repellendus distinctio vero aspernatur atque quaerat tempora eaque
        eveniet doloremque, odit recusandae molestiae iusto a deserunt
        laboriosam voluptates maxime dolorem labore?
      </p>
      <h2>List</h2>
      <Suspense fallback={<Loading />}>
        <LazyList />
      </Suspense>
    </>
  );
}

export default Home;

async function delayForDemo<T>(promise: Promise<T>): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(promise), 2000);
  }).then((result) => result);
}
