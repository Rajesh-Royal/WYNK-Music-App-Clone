import React, { useState} from "react";
import Header from "./components/Header/Header";

const App = (props: any) => {
  const [ dark, setDark ] = useState<boolean>(true);
  const toggleTheme = () => setDark(!dark);
  console.log(dark);
  return (
    <main>
      <Header />
    </main>
  );
};

export default App;
