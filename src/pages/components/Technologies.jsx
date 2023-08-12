import Link from "next/link";
import Image from "next/image";
export default function Technologies() {
  return (
    <>
      {/* <h1 className="text-gray-900 font-bold   my-5 text-center"> Learning Technologies</h1> */}
      <div className="flex m-auto flex-col md:flex-row justify-center items-center max-w-[90%] mt-10 px-8 text-left">
        <div className="flex  justify-evenly items-center gap-7 my-3 mx-3">
          <Image src="/swagger.webp" alt="tech" width={75} height={75} style={{ width: 'auto', height: 'auto' }}/>
          <Image src="/prisma-logo_sm.jpg" alt="tech" width={75} height={75} style={{ width: 'auto', height: 'auto' }}/>
          <Image src="/tailwindcss.png" alt="tech" width={120} height={120} style={{ width: 'auto', height: 'auto' }}/>
        </div>
        <div className="flex  justify-evenly items-center gap-7 my-3 mx-3">
          <Image src="/nextjs-logo.png" alt="tech" width={75} height={75} style={{ width: 'auto', height: 'auto' }}/>
          <Image src="/js.png" alt="tech" width={35} height={35} style={{ width: 'auto', height: 'auto' }}/>
          <Image src="/MongoDB-Logo.jpg" alt="tech" width={75} height={75}style={{ width: 'auto', height: 'auto' }} />
        </div>
      </div>
    </>
  );
}
