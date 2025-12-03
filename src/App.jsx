export default function App() {
  return (
    <div className="bg-teal-400">
      <div id="navbar" className="px-5 py-8 uppercase flex justify-between items-center"> {["Home", "Services", "ABOUT", "Contact", "faq"].map((item) => (<h1 className="font-bold">{item}</h1>))}
       <div id='search' className="rounded-3xl bg-neutral-100 h-full p-1  w-[250px] flex items-center justify-end">
    <h1>search</h1>
    <div></div>
       </div>
      </div>
    </div>
  );  
}
