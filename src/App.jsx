import { Search } from "lucide-react";

export default function App() {
  return (
    <div
      className="bg-linear-to-r from-teal-600 h-screen"
      style={{
        backgroundImage:
          "https://vastphotos.com/files/uploads/photos/12268/peaceful-tranquil-lake-photo-m.jpg?v=20250916092037",
      }}
    >
      <div
        id="navbar"
        className="px-5 py-10  uppercase flex justify-between items-center"
      >
        {" "}
        {["Home", "Services", "ABOUT", "Contact", "faq"].map((item) => (
          <h1 className="font-bold text-xl">{item}</h1>
        ))}
        <div className="flex gap-10 mr-20 ">
          <div
            id="search"
            className="rounded-3xl shadow-xl bg-neutral-100 h-full py-1 px-2  w-[300px] flex items-center justify-end"
          >
            <input
              type="text"
              placeholder="SEARCH"
              onFocus={"border border-white"}
            />
            <div className="bg-green-700 rounded-full p-2 ml-2">
              <Search />
            </div>
          </div>
          <button
            id="signupbutton"
            className="uppercase  bg-green-900 text-white px-6 py-2 rounded-3xl"
          >
            sign up
          </button>
        </div>
      </div>
      <div id="hero" className="flex flex-col  ml-5 items-start justify-start gap-5">
        <div className="text-[6vw] leading-none text-white font-bold">
          <h1>
            TRAVEL <br />
            THE WORLD
          </h1>
        </div>
        <div className=" text-6xl leading-18 text-white font-light tracking-tighter italic">
          <h1>
            "Discover new destinations,
            <br />
            unforgettable experiences <br />& endless adventures"
          </h1>
        </div>
        <div>
          <p className="text-white leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod <br />
            atque veniam recusandae autem maiores facilis natus sequi optio sed <br />
            molestias ut quo sunt reiciendis praesentium excepturi culpa! <br />
            Tempora, voluptas!
          </p>
        </div>
        <button className="bg-white text-teal-800 rounded-3xl w-[130px]  uppercase px-2 font-bold py-2">
BOOK NOW 
        </button>
      </div>
    </div>
  );
}
