// Importing Modules

import Buttons from "../Component/Buttons/Buttons";
import "./Recommended.css";

// Recommended Function

function Recommended({ handleClick }) {
  return (
    <>
      <section className="fixed top-9 mt-6 z-50 bg-sky-300 flex  w-full flex-col items-center justify-center">
        <h1 className="recommended-title text-2xl font-sans font-normal pb-2">
          Recommended
        </h1>
        <div className="btns">
          <Buttons title="All Wears" value="" handleClick={handleClick} />

          <Buttons title="Men" value="men" handleClick={handleClick} />

          <Buttons title="Women" value="women" handleClick={handleClick} />

          <Buttons
            title="Children"
            value="children"
            handleClick={handleClick}
          />
        </div>
      </section>
    </>
  );
}

export default Recommended;
