import { useState, useEffect } from "react";
import "./App.css";
import Shop from "./components/Shop.jsx";
import Cookie from "./components/Cookie.jsx";

export default function App() {
  const cookies = localStorage.getItem("cookies");
  const cookiesps = localStorage.getItem("cookiesps");
  const [myCookies, setMyCookies] = useState(Number(cookies) || 0);
  const [cps, setCps] = useState(Number(cookiesps) || 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyCookies((myCookies) => myCookies + cps);
      localStorage.setItem("cookies", myCookies + cps);
    }, 1000);

    return () => clearInterval(interval);
  }, [myCookies, cps]);

  return (
    <>
      <main className="">
        <section className="justify-self-center">
          <div className="justify-self-center text-center font-bold text-3xl">
            <p className="">You have {myCookies}</p>
            <p>Your cps is {cps}</p>
          </div>
          <Cookie myCookies={myCookies} setMyCookies={setMyCookies} />

          <div className="">
            <Shop
              myCookies={myCookies}
              setMyCookies={setMyCookies}
              cps={cps}
              setCps={setCps}
            />
          </div>
        </section>
        <button
          onClick={() => {
            localStorage.clear();
            setMyCookies(0);
            localStorage.setItem("cookies", 0);
            window.location.reload(false);
          }}
          className="absolute top-5 right-5 bg-pink-400 rounded-md p-1 hover:cursor-pointer"
        >
          Rest
        </button>
      </main>
    </>
  );
}
