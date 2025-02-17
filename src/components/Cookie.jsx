export default function Cookie({ setMyCookies, myCookies }) {
  function clickHandle() {
    setMyCookies((myCookies) => myCookies + 1);
  }

  return (
    <section className="w-100 justify-self-center active:scale-90 pt-10 pb-10">
      <img
        src="https://static.wikia.nocookie.net/cookieclicker/images/5/5a/PerfectCookie.png/revision/latest?cb=20130827014912"
        alt="Cookie Clicker cookie"
        onClick={clickHandle}
      />
    </section>
  );
}
