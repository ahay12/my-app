export default function Card({children}) {
  return (
    <div className="flex flex-col p-4 w-1/2">
        <div>{children}</div>
    </div>
  );
}
