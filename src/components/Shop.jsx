import { useState, useEffect } from "react";
import BuyButton from "./BuyButton";
export default function Shop({ setMyCookies, myCookies, cps, setCps }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div className="font-bold w-50vw bg-blue p-2 border-black border-2 rounded-lg">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-self-center justify-between w-150 gap-10 p-2 hover:bg-red-300 "
        >
          <h2>{item.name}</h2>
          <p>cost: {item.cost}</p>
          <p>cps: +{item.increase}</p>
          <BuyButton
            cost={item.cost}
            increase={item.increase}
            myCookies={myCookies}
            setMyCookies={setMyCookies}
            cps={cps}
            setCps={setCps}
            id={item.id}
          />
        </div>
      ))}
    </div>
  );
}
