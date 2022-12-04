import CardProduct from "../Product";
import Image from "next/image";

export default function CardBox({ cb_img, cb_title }) {
  return (
    <CardProduct link={""}>
      <div className="flex flex-col items-center pt-10 font-semibold">
        <Image src={cb_img} width={70} height={100} />
        <h1>{cb_title}</h1>
      </div>
    </CardProduct>
  );
}
