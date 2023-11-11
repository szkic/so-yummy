import React from "react";
import Image from "next/image";

const FollowUs = () => {
  return (
    <div className="flex justify-center tablet:basis-full">
      <ul className="flex items-center gap-3.5 text-primary-text-color">
        <li>
          <a href="http://facebook.com" rel="noopener" target="_blank">
            <Image
              src="/../assets/images/fb.svg"
              width={20}
              height={21}
              alt="facebook"
            />
          </a>
        </li>
        <li>
          <a href="http://youtube.com" rel="noopener" target="_blank">
            <Image
              src="/../assets/images/yt.svg"
              width={20}
              height={15}
              alt="youtube"
            />
          </a>
        </li>
        <li>
          <a href="http://twitter.com" rel="noopener" target="_blank">
            <Image
              src="/../assets/images/tt.svg"
              width={20}
              height={17}
              alt="twitter"
            />
          </a>
        </li>
        <li>
          <a href="http://instagram.com" rel="noopener" target="_blank">
            <Image
              src="/../assets/images/insta.svg"
              width={17}
              height={17}
              alt="instagram"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FollowUs;
