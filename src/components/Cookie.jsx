export default function Cookie({ setMyCookies, myCookies }) {
  function clickHandle() {
    setMyCookies((myCookies) => myCookies + 1);
  }

  return (
    <section className="w-100 justify-self-center active:scale-90 pt-10 pb-10">
      <img
        src="./src/assets/PerfectCookie.webp"
        alt="Cookie Clicker cookie"
        onClick={clickHandle}
      />
    </section>
  );
}
