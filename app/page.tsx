import Image from "next/image";

export default function landingPage() {
  return (
    <>
      <div className="font-semibold flex justify-between font-sans m-4  w-w-10/12 h-15 p-2 px-4  text-center text-violet-700 hover:bg-transparent">
        <h2 className="animate-pulse"> hello</h2>
        <div className="searchbar mr-2 ">
          <input
            className=" animate-pulse font-sans ring-2 ring-blue-500/50 rounded-md border-slate-200 outline-cyan-500 px-4 text-xs h-6 text-slate-600"
            type="search "
            placeholder="search here "
          ></input>
        </div>
      </div>

      <div className="h-96 flex flex-col justify-center items-center font-sans text-3xl font-bold text-center text-slate-600 ">
        <h1>
          I'm
          <span className=" text-indigo-700 animate-pulse inline-block ">
            Ajmal
          </span>
          and I builddd websites !
        </h1>
        <button className="m-8 font-sans ring-2 ring-blue-500/50 rounded-md border-slate-200 hover:bg-violet-500 hover:text-slate-50 px-4 text-xs h-6 text-slate-600">
          Connect
        </button>
      </div>
      <div className=" mix-of-2-box justify-center flex flex-col md:flex-row md:text-transparent">
        <div className="m-6 p-6 ring-2 ring-blue-500/50 rounded-md border-slate-200 w-80 h-80">
          <h2 className="text-xl font-bold text-center text-slate-500">
            Projects
          </h2>
          <ul className="list-disc m-2 my-6 text-base font-semibold  text-slate-400">
            <li>AI Vehicle time table genarator</li>
            <li>Academic performance analysis </li>
            <li>Todos</li>
            <li>Portfolios</li>
          </ul>
        </div>
        <div className="m-6 p-6 ring-2 ring-blue-500/50 rounded-md border-slate-200 w-80 h-80 ">
          <h2 className="text-xl font-bold text-center text-slate-500">
            Connect
          </h2>
          <div className="w-full h-full flex justify-around items-center">
            <Image
              className=" hover:animate-bounce"
              src="/twitter.png"
              alt="My Image"
              width={50}
              height={50}
            />
            <Image
              className=" hover:animate-bounce"
              src="/linkedin.png"
              alt="My Image"
              width={50}
              height={50}
            />
            <Image
              className=" hover:animate-bounce"
              src="/github.png"
              alt="My Image"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
}
