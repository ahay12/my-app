import Link from "next/link";
import Image from "next/image";

// const myLoader = ({ src, width, quality }) => {
//   return `${src}?w=${width}&q=${quality || 75}`;
// };
export default function CardHero({ title, description, con, link, discount, selector }) {
  return (
    <div id={selector} className="ml-4 mt-10">
      <Link href={link}>
        <div className="lg:w-36 h-36 relative py-3 bg-white rounded-lg shadow-lg hover:bg-orange-400 hover:text-white">
          <div className="bg-green-300 text-sm lg:w-24 h-8 rounded-lg -mt-11 lg:ml-6 text-center font-bold text-black">
            <h1 className="mt-2">{discount}</h1>
          </div>
          <div className="flex flex-col justify-around text-center items-center pt-2">
            <Image src={con} width={50} height={100} alt="icon" />
            <h4>{title}</h4>
            <h4 className="font-bold">{description}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}
