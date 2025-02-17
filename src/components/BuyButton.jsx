import { useState } from "react";

export default function BuyButton({
  setMyCookies,
  myCookies,
  cps,
  setCps,
  cost,
  increase,
  id,
}) {
  let [owned, setOwned] = useState(
    Number(localStorage.getItem(`owned${id}`)) || 0
  );
  function handleClick() {
    if (cost <= myCookies) {
      setMyCookies(myCookies - cost);
      setCps(cps + increase);
      localStorage.setItem("cookiesps", cps + increase);
      setOwned((owned = owned + 1));
      localStorage.setItem(`owned${id}`, owned);
    } else {
      setTimeout(() => {}, 2000);
    }
  }
  return (
    <div>
      <button onClick={handleClick} className="hover:cursor-pointer">
        Buy
      </button>
      <p>Own: {owned}</p>
    </div>
  );
}
