import Image from "next/image";
import React from "react";
import vegetables from "../../../public/assets/images/vegetables.png";

const page = () => {
  return (
    <>
      <Image
        src={vegetables}
        alt="vegetables"
        // style={{ objectFit: "cover", top: "-100px", wid }}
        className="absolute left-0 top-0 -z-10 h-[455px] w-full object-cover tablet:h-[495px]"
        // fill={true}
      />

      <div className="h-96">
        <p>dsadsa</p>
        <p>dsadasgfds</p>
      </div>
    </>
  );
};

export default page;
