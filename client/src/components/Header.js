import React from 'react';
import { IoIosSend } from "react-icons/io"


const Header = ({handleSend})=> {
  return (
      <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
           <div>
             <h1 className="font-bold uppercase text-4xl mb-3">Invoice</h1>
           </div>
           <div>
             <ul className="flex flex-row items-center justify-between flex-wrap">
                <li><button onClick={handleSend} className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent haver:text-blue-500 hover:bg-transaparent hover:text-green-500 transition-all duration-300">Send <IoIosSend className="ml-2" /></button></li>
             </ul>
           </div>
         </header>
      </>
  );
}

export default  Header
