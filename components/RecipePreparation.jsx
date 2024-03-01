import Image from "next/image";
import image from "../public/assets/images/bowl.png";

const RecipePreparation = () => {
  return (
    <div className="flex flex-col gap-10 pt-12 tablet:gap-12 desktop:flex-row desktop:justify-between desktop:pt-24">
      <div className="max-w-[757px]">
        <h3 className="mb-8 text-2xl font-semibold">Recipe Preparation</h3>
        <ul className="flex flex-col gap-3.5 tablet:gap-4">
          <li className="flex gap-3.5">
            <div>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-color text-xs font-semibold text-primary-text-color tablet:text-sm ">
                1
              </div>
            </div>
            <p className="text-xs leading-3 tablet:text-sm tablet:leading-5">
              Halve, stone, peel and slice the avocados. Halve and quarter the
              cucumber lengthways, then cut into slices. Halve, stone, peel and
              slice the avocados. Halve and quarter the cucumber lengthways,
              then cut into slices.
            </p>
          </li>
          <li className="flex gap-3.5">
            <div>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-color text-xs font-semibold text-primary-text-color tablet:text-sm ">
                2
              </div>
            </div>
            <p className="text-xs leading-3 tablet:text-sm tablet:leading-5">
              Halve, stone, peel and slice the avocados. Halve and quarter the
              cucumber lengthways, then cut into slices.
            </p>
          </li>
          <li className="flex gap-3.5">
            <div>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-color text-xs font-semibold text-primary-text-color tablet:text-sm ">
                3
              </div>
            </div>
            <p className="text-xs leading-3 tablet:text-sm tablet:leading-5">
              Halve, stone, peel and slice the avocados. Halve and quarter the
              cucumber lengthways, then cut into slices.
            </p>
          </li>
        </ul>
      </div>

      <div>
        <Image
          src={image}
          className="h-[250px] w-auto bg-primary-color"
          alt="img"
        />
      </div>
    </div>
  );
};

export default RecipePreparation;
