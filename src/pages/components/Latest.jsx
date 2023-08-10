import Yle from "./Yle";
import Bearit from "./Bearit";

export default function Latest() {
  return (
    <>
      <div className="bg-[#FBF6F3] mx-auto my-10 ">
        <div className="w-[100%] flex flex-col  md:flex-row  justify-between px-8 ">
          <Yle />
          <Bearit />
        </div>
      </div>
    </>
  );
}
