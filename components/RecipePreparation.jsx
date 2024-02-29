import Image from "next/image";
import image from "../public/assets/images/bowl.png";

const RecipePreparation = () => {
  return (
    <>
      <h3 className="mb-8 pt-12 text-2xl font-semibold">Recipe Preparation</h3>
      <ul className="flex flex-col gap-3.5">
        <li className="flex gap-3.5">
          <div>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-color text-xs font-semibold text-primary-text-color">
              1
            </div>
          </div>
          <p className="text-xs leading-3">
            Halve, stone, peel and slice the avocados. Halve and quarter the
            cucumber lengthways, then cut into slices.
          </p>
        </li>
        <li className="flex gap-3.5">
          <div>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-color text-xs font-semibold text-primary-text-color">
              2
            </div>
          </div>
          <p className="text-xs leading-3">
            Heat a non-stick pan. Add the salmon and fry for 3-4 mins on each
            side until crisp but still moist inside.
          </p>
        </li>
        <li className="flex gap-3.5">
          <div>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-color text-xs font-semibold text-primary-text-color">
              3
            </div>
          </div>
          <p className="text-xs leading-3">
            Mix the dressing ingredients together.
          </p>
        </li>
      </ul>

      <Image src={image} className="mt-10 h-[250px] w-auto bg-primary-color" />
    </>
  );
};

export default RecipePreparation;
