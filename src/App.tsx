import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import { Nav } from "./components/Nav";
import type { Istack } from "./types";
import Stacks from "./components/stacks/Stacks";
import Footer from "./components/Footer";

const stacksFetch = async (): Promise<Istack[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [stacksPromise] = useState(() => stacksFetch());
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading......</h2>}>
        <Stacks stacksPromise={stacksPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
