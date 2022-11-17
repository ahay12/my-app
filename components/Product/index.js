import Link from "next/link";

export default function CardProduct({ click, children }) {
  return (
    <button onClick={click}>
      <div className="px-5 py-10">
        <div className="text-black w-44 h-44 shadow-lg bg-white rounded-lg transition hover:bg-white hover:text-orange-400">
          {children}
        </div>
      </div>
    </button>
  );
}
