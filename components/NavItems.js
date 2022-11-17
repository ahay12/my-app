import Link from "next/link";

export default function NavItems({ textLink, linkPage, style }) {
  return (
    <Link
      href={linkPage}
      className={`text-base text-black py-2 mx-8 flex group-hover:text-orange-500 ${style}`}
    >
      <div className="px-2">{textLink}</div>
    </Link>
  );
}
