// import { useState } from "react";
import { useState, createContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import asset from './assets/stays.json';

// Context to Global State
const Context = createContext()

function App() {
  // Global States
  const [listItems, setListItems] = useState(asset)
  const [listArr, setListArr] = useState(asset)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Context.Provider 
        value={{
          listItems,
          setListItems,
          listArr,
          setListArr,
          isOpen,
          setIsOpen
        }}>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    </>
  );
}

export  {App, Context};