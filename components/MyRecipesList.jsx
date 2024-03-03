import React from "react";
import image from "../public/assets/images/bowl.png";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

const myRecipes = [
  {
    _id: {
      $oid: "640cd5ac2d9fecf12e8897fc",
    },
    title: "Spaghetti Bolognese",
    category: "Beef",
    area: "Italian",
    instructions:
      "Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.",
    description:
      "An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
    time: "45",
    favorites: [],
    youtube: "https://www.youtube.com/watch?v=-gF8d-fitkU",
    tags: ["Pasta", "Meat"],
    createdAt: {
      $date: {
        $numberLong: "1678562733240",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1679567316572",
      },
    },
    ingredients: [
      {
        id: {
          $oid: "640c2dd963a319ea671e372e",
        },
        measure: "2",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e372c",
        },
        measure: "1tbsp",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e36e3",
        },
        measure: "1 clove",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e370f",
        },
        measure: "500g",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e3726",
        },
        measure: "90g",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e36c4",
        },
        measure: "1tsp",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e377f",
        },
        measure: "400g can",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e36ff",
        },
        measure: "300ml",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e377e",
        },
        measure: "1tbsp",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e3798",
        },
        measure: "1tbsp",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e376e",
        },
        measure: "350g",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e3735",
        },
        measure: "Topping",
      },
    ],
  },
  {
    _id: {
      $oid: "640cd5ac2d9fecf12e8897ee",
    },
    title: "Bakewell tart",
    category: "Dessert",
    area: "British",
    instructions:
      "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.",
    description:
      "A British dessert consisting of a shortcrust pastry shell filled with raspberry jam, frangipane, and topped with almonds.",
    thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
    time: "85",
    favorites: [],
    youtube: "https://www.youtube.com/watch?v=1ahpSTf_Pvk",
    tags: ["Tart", "Baking", "Alcoholic"],
    createdAt: {
      $date: {
        $numberLong: "1678562733239",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1679485087552",
      },
    },
    ingredients: [
      {
        id: {
          $oid: "640c2dd963a319ea671e3743",
        },
        measure: "175g/6oz",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e369a",
        },
        measure: "75g/2½oz",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e36ad",
        },
        measure: "2-3 tbsp",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e3749",
        },
        measure: "1 tbsp",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e367e",
        },
        measure: "125g/4½oz",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e3687",
        },
        measure: "125g/4½oz",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e36f6",
        },
        measure: "125g/4½oz",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e36da",
        },
        measure: "1",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e3861",
        },
        measure: "½ tsp",
      },
      {
        id: {
          $oid: "640c2dd963a319ea671e36d5",
        },
        measure: "50g/1¾oz",
      },
    ],
  },
];

const MyRecipesList = ({ theme }) => {
  return (
    <div className="flex flex-col gap-4 tablet:gap-10 desktop:gap-12">
      {myRecipes.map((recipe) => (
        <div
          className="rounded-lg bg-input-primary px-3.5 py-2.5 tablet:px-6 tablet:py-7 desktop:p-10"
          key={recipe.title}
        >
          <div className="relative flex gap-4 tablet:gap-6 desktop:gap-14">
            <Image
              src={recipe.thumb}
              width={124}
              height={124}
              alt="img"
              className="h-auto rounded-lg tablet:w-[228px] desktop:w-[318px]"
            />
            <div
              className={`absolute right-0 top-0 rounded  ${
                theme === "my" && "bg-primary-color"
              } ${
                theme === "favorites" && "bg-light-primary-color"
              } p-1.5 tablet:p-2 desktop:p-2.5`}
            >
              <FaRegTrashAlt
                className={`${
                  theme === "my" && "text-input-primary"
                } tablet:h-5 tablet:w-5 desktop:h-6 desktop:w-6`}
                size="14px"
              />
            </div>

            <div className="relative">
              <div className="max-w-[163px] tablet:max-w-[404px] desktop:max-w-[806px]">
                <h4 className="max-w-[143px] overflow-hidden text-ellipsis whitespace-nowrap pt-1.5 text-sm font-medium tablet:max-w-none tablet:pt-0 tablet:text-2xl">
                  {recipe.title}
                </h4>
                <p className="mt-3.5 h-10 overflow-hidden text-[8px] leading-[10px] tablet:mt-7 tablet:h-32 tablet:text-sm tablet:leading-5 desktop:mt-10 desktop:h-40 desktop:text-lg desktop:leading-6">
                  <span className="line-clamp-4 tablet:line-clamp-5 desktop:line-clamp-6">
                    {recipe.description}
                  </span>
                </p>
              </div>
              <span className="absolute bottom-0 left-0 text-[10px] tablet:text-sm">
                20 min
              </span>
            </div>
            <button
              className={`absolute bottom-0 right-0 rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] ${
                theme === "my" && "bg-primary-color"
              } ${
                theme === "favorites" && "bg-secondary-color"
              } px-4 py-1.5 text-[10px] text-white hover:bg-secondary-light-color focus:outline-none focus:ring-4 focus:ring-secondary-light-color tablet:px-8 tablet:py-3 tablet:text-sm desktop:px-11 desktop:py-4 desktop:text-base`}
            >
              See recipe
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyRecipesList;
