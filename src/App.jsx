import { useState } from "react";

import Content from "./components/Content";
import Header from "./components/Header";


function App() {
  const [err, setErr] = useState("");

  return (
    <>
      <Header></Header>
      {err && <p className=" bg-red-600 text-center w-fit mx-auto my-4 hover:bg-red-800 text-white p-2 rounded-lg">{err}</p>}
      <Content setErr={setErr}></Content>
   
    </>
  )

}

export default App;
