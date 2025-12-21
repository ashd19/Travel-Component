import { Instagram, Search, Facebook, Twitter, Twitch } from "lucide-react";

export default function App() {
  const bgImage = 'url("https://vastphotos.com/files/uploads/photos/12268/peaceful-tranquil-lake-photo-m.jpg?v=20250916092037")';

  return (
    <div
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right,oklch(70.4% 0.14 182.503),oklch(77.7% 0.152 181.912),oklch(95.3% 0.051 180.801))",
        }}
      ></div>

      {/* Background Clipped Shapes revealing original BG */}
      {["bottom-0 left-0", "top-0 right-10"].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-[690px] h-[267px] z-5`}
          style={{
            clipPath:
              "path('M1.86617 231.405C-5.41886 205.999 9.27103 179.497 34.6769 172.212L628.745 1.86618C654.151 -5.41884 680.652 9.27101 687.937 34.6769C695.222 60.0828 680.532 86.5841 655.126 93.8691L61.0584 264.215C35.6525 271.5 9.1512 256.81 1.86617 231.405Z')",
            WebkitClipPath:
              "path('M1.86617 231.405C-5.41886 205.999 9.27103 179.497 34.6769 172.212L628.745 1.86618C654.151 -5.41884 680.652 9.27101 687.937 34.6769C695.222 60.0828 680.532 86.5841 655.126 93.8691L61.0584 264.215C35.6525 271.5 9.1512 256.81 1.86617 231.405Z')",
            backgroundImage: bgImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      ))}

      {/* Navbar */}
      <div className="relative px-25 py-10 inter-nav uppercase flex justify-between items-center text-black z-100">
        <div className="flex gap-15">
          {["Home", "Services", "ABOUT", "Contact", "faq"].map((item) => (
            <h1 key={item} className="inter-nav text-xl cursor-pointer">
              {item}
            </h1>
          ))}
        </div>
        <div className="flex gap-10 mr-20">
          <div className="rounded-3xl shadow-xl  bg-neutral-100 py-1 px-2 w-[320px] flex items-center justify-end">
            <input
              type="text"
              placeholder="SEARCH"
              className="focus:outline-none"
            />
            <div className="bg-green-700 rounded-full p-2 ml-2">
              <Search />
            </div>
          </div>
          <button className="uppercase bg-green-900 cursor-pointer text-white px-6 py-2 rounded-3xl">
            sign up
          </button>
        </div>
      </div>

      <div className="relative flex flex-col px-25 items-start justify-start gap-5 text-white z-10">
        <div className="text-5xl leading-none font-bold">
          <h1 className="inter-bold">
            TRAVEL <br />
            THE WORLD
          </h1>
        </div>
        <div className="text-3xl inter-slant   font-light tracking-tight italic max-w-xl">
          <h1>
            "Discover new destinations,
            <br />
            unforgettable experiences <br />& endless adventures"
          </h1>
        </div>
        <p className="max-w-xl leading-5 inter-nav">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod
          atque veniam recusandae autem maiores facilis natus sequi optio sed
          molestias ut quo sunt reiciendis praesentium excepturi culpa! Tempora,
          voluptas!
        </p>
        <button className="bg-white text-teal-800 cursor-pointer rounded-3xl w-[130px] uppercase px-2 font-bold py-2">
          BOOK NOW
        </button>
        <div className="flex gap-4 mt-5">
          {[Instagram, Facebook, Twitter, Twitch].map((Icon, index) => (
            <div key={index} className="bg-white p-2 rounded-full text-teal-800">
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
