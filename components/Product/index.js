import Link from "next/link";

export default function CardProduct({ link, children }) {
  return (
    <div className="px-5 py-10">
      <Link href={link}>
        <div className="text-white w-44 h-44 bg-white rounded-lg transition hover:bg-white hover:text-orange-400">
          {children}
        </div>
      </Link>
    </div>
  );
}
