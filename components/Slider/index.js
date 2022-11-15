import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export default function Slider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div ref={sliderRef} className="keen-slider rounded-lg shadow-lg">
        <div className="keen-slider__slide number-slide1 flex flex-col items-start">
          <div>
            <p className="text-base font-bold text-white text-left pl-5 pt-10">
              Beli asuransi dengan produk pilihan dapatkan hadiah
            </p>
            <h1 className="text-4xl font-bold text-white text-left pl-5 pt-5">
              Our Insurance Lucky Draw
            </h1>
            <button className="mt-20 -ml-64">
              <p className="text-base w-32 h-10 pt-2 text-center font-bold bg-white text-orange-400">
                Lihat Hadiah
              </p>
            </button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 flex flex-col items-start">
          <div>
            <p className="text-base font-bold text-white text-left pl-5 pt-10">
              Beli asuransi dengan produk pilihan dapatkan hadiah
            </p>
            <h1 className="text-4xl font-bold text-white text-left pl-5 pt-5">
              Our Insurance Lucky Draw
            </h1>
            <button className="mt-20 -ml-64">
              <p className="text-base w-32 h-10 pt-2 text-center font-bold bg-white text-orange-400">
                Lihat Hadiah
              </p>
            </button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 flex flex-col items-start">
          <div>
            <p className="text-base font-bold text-white text-left pl-5 pt-10">
              Beli asuransi dengan produk pilihan dapatkan hadiah
            </p>
            <h1 className="text-4xl font-bold text-white text-left pl-5 pt-5">
              Our Insurance Lucky Draw
            </h1>
            <button className="mt-20 -ml-64">
              <p className="text-base w-32 h-10 pt-2 text-center font-bold bg-white text-orange-400">
                Lihat Hadiah
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
