import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image src="/medal.svg" width={25} height={25} alt="1 icon" />
        <h1 className="sm:text-3xl text-2xl font-bold ml-2 tracking-tight">
          Better Prompts
        </h1>
      </Link>
      
      {/*       <Link href="/Templates" className="flex space-x-3">
        <h3 className="sm:text-1xl text-1xl font-bold ml-2 tracking-tight">
        Templates
        </h3>
      </Link>
      <Link href="/About" className="flex space-x-3">
      <h3 className="sm:text-1xl text-1xl font-bold ml-2 tracking-tight"> 
        About
        </h3>
      </Link>
      <Link href="/Blog" className="flex space-x-3">
      <h3 className="sm:text-1xl text-1xl font-bold ml-2 tracking-tight">
          Blog
        </h3>
      </Link> */}
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
        href="https://github.com/JalelTounsi/PromptBuilder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/love.svg" width={25} height={25} alt="1 icon" />
        <p>Sharing is caring</p>
      </a>
    </header>
  );
}
