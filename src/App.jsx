import { Search } from "lucide-react";

export default function App() {
  return (
    <div className="bg-teal-400 ">
      <div id="navbar" className="px-5 py-10  uppercase flex justify-between items-center"> {["Home", "Services", "ABOUT", "Contact", "faq"].map((item) => (<h1 className="font-bold text-xl">{item}</h1>))}
       <div className="flex gap-10 mr-20 ">
         <div id='search' className="rounded-3xl shadow-xl bg-neutral-100 h-full p-1  w-[300px] flex items-center justify-end"><h1>search</h1> <div className="bg-green-700 rounded-full p-2 ml-2" ><Search/></div>
         </div>
         <button id='signupbutton' className="uppercase  bg-green-900 text-white px-6 py-2 rounded-3xl">
          sign up
          </button>
               </div>
       </div>
    </div>
  );  
}
