
const Featurestwo = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container mb-2 border border-dark rounded text-dark">
          <p className="ms-5 mt-2" style={{ "fontSize": "24px" }}><b>The printer Software will help you</b></p>
          <br />
          <ul>
            <li>🖨️ Install printer software and drivers. </li>  <br />
            <li>🖨️ Create a HP account and register your printer .</li>  <br />
            <li className="mb-2">🖨️ After setup, you can use, the HP Smart Software to print , scan and copy files , print remotely , <br /> and more. </li>
          </ul>

        </div>

        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className=" max-w-full px-4 xl:mr-12 mt-3 text-dark">
              <p>Install HP Smart software and drivers on each mobile device or computer you want to print from. Add the printer <br />
                on the new device.</p>
              <br />
              <p>Need additional help with setup? Visit <a href="/" style={{ "color": "blue" }}>HP Support</a></p>
            </div></div>
        </div>
      </section>
    </>
  );
};

export default Featurestwo;
