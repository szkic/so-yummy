import Image from "next/image";
import PLACEHOLDER_IMAGE from "../public/assets/images/img_placeholder.png";

const RecipePreparation = ({ instructions, preview }) => {
  const instructionsArr = instructions.split("\r");

  return (
    <div className="flex flex-col gap-10 pt-12 tablet:gap-12 desktop:flex-row desktop:justify-between desktop:pt-24">
      <div className="max-w-[757px]">
        <h3 className="mb-8 text-2xl font-semibold">Recipe Preparation</h3>
        <ul className="flex flex-col gap-3.5 tablet:gap-4">
          {instructionsArr.map((instruction, index) => (
            <li className="flex gap-3.5" key={index}>
              <div>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-color text-xs font-semibold text-primary-text-color tablet:text-sm ">
                  {index + 1}
                </div>
              </div>
              <p className="text-xs leading-3 tablet:text-sm tablet:leading-5">
                {instruction}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {!preview ? (
          <Image
            src={PLACEHOLDER_IMAGE}
            width={343}
            height={250}
            className="rounded-lg tablet:h-auto tablet:w-[433px]"
            alt="img"
          />
        ) : (
          <Image
            src={preview}
            width={343}
            height={250}
            className="rounded-lg tablet:h-auto tablet:w-[433px]"
            alt="img"
          />
        )}
      </div>
    </div>
  );
};

export default RecipePreparation;
