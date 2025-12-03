import { Instagram, Search, Facebook, Twitter, Twitch } from "lucide-react";

export default function App() {
  return (
    <div
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage:
          'url("https://vastphotos.com/files/uploads/photos/12268/peaceful-tranquil-lake-photo-m.jpg?v=20250916092037")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay with circular mask */}
      {/* component basically ! */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,oklch(70.4% 0.14 182.503),oklch(77.7% 0.152 181.912),oklch(95.3% 0.051 180.801)   )",
          WebkitMaskImage:
            "radial-gradient(ellipse 500px at 80% 50%, transparent 40%, black 41%)",
          maskImage:
            "radial-gradient(circle 500px at 80% 50%, transparent 40%, black 41%)",
        }}
      ></div>

      {/* Navbar */}
      <div className="relative px-25 py-10  uppercase flex justify-between items-center text-black z-10">
        {["Home", "Services", "ABOUT", "Contact", "faq"].map((item) => (
          <h1 key={item} className="font- text-xl">
            {item}
          </h1>
        ))}
        <div className="flex gap-10 mr-20">
          <div className="rounded-3xl shadow-xl bg-neutral-100 py-1 px-2 w-[300px] flex items-center justify-end">
            <input
              type="text"
              placeholder="SEARCH"
              className="focus:outline-none"
            />
            <div className="bg-green-700 rounded-full p-2 ml-2">
              <Search />
            </div>
          </div>
          <button className="uppercase bg-green-900 text-white px-6 py-2 rounded-3xl">
            sign up
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col px-25 items-start justify-start gap-5 text-white z-10">
        <div className="text-5xl leading-none font-bold">
          <h1>
            TRAVEL <br />
            THE WORLD
          </h1>
        </div>
        <div className="text-3xl font-light tracking-tighter italic max-w-xl">
          <h1>
            "Discover new destinations,
            <br />
            unforgettable experiences <br />& endless adventures"
          </h1>
        </div>
        <p className="max-w-xl leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod
          atque veniam recusandae autem maiores facilis natus sequi optio sed
          molestias ut quo sunt reiciendis praesentium excepturi culpa! Tempora,
          voluptas!
        </p>
        <button className="bg-white text-teal-800 rounded-3xl w-[130px] uppercase px-2 font-bold py-2">
          BOOK NOW
        </button>
        <div className="flex gap-4 mt-5">
          {[Instagram, Facebook, Twitter, Twitch].map((Icon, index) => (
            <div key={index} className="bg-white p-1 rounded-xl text-teal-800">
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
