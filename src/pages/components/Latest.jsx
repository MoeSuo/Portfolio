import Yle from "./Yle";
import Bearit from "./Bearit";

export default function Latest() {
  return (
    <>
      <div className="bg-[#FBF6F3] max-w-[100%] ">
      <div className=" max-w-[90%] m-auto mt-10  px-8 text-left ">
        <div className="flex flex-col  md:flex-row  justify-between  ">
          <Yle />
          <Bearit />
        </div>
      </div>
      </div>
    </>
  );
}
