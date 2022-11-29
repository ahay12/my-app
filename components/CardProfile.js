import Image from "next/image";

export default function CardProfile({ pic, f_nama, f_nim, b_title }) {
  return (
    <div className="container">
      <div className="pt-36">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="grid justify-items-center">
                <Image
                  src={pic}
                  width={100}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="title font-semibold">{f_nama}</p>
                <p>{f_nim}</p>
              </div>
            </div>
            <div className="flip-card-back">
              <p className="title">{b_title}</p>
              <ul>
                <li>
                  <Image src={""} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
