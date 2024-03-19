import Ingredient from "@models/ingredient";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { data } = await req.json();

  console.log(data);

  console.log("user", data.user);
  // UWAGA - w przesyłanym obiekcie data powinna być flaga czy usuwam czy dodaje???
  // { id: "640c2dd963a319ea671e373a", measure: "1", action: "add" }
  // { id: "640c2dd963a319ea671e373a", measure: "1", action: "remove"}

  try {
    await connectToDB();

    const user = await User.findOne({ email: data.user });
    const ingredients = await Ingredient.find({
      _id: { $in: user.shoppingList },
    });

    const filter = { email: data.user };
    const update = {};

    if (data.action === "add") {
      update.$push = { shoppingList: { _id: data.id, measure: data.measure } };
    }

    if (data.action === "remove") {
      update.$pull = { shoppingList: { _id: data.id } };
    }

    await User.findOneAndUpdate(filter, update, { new: true });

    // 1. przesłać ID i measure jako obiekt
    // 2. zapisać go do usera
    // 3. przemapować się po userze -> zwrócić obiekt z ingredients i dodać do niego measure
    // 4. zwrócić obiekt z ID i measure

    // 5. dodać możliwość usuwania z listy zakupów po przesłanym ID

    return new Response(JSON.stringify(ingredients), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to retrieve shopping list", { status: 500 });
  }
};
// export const PUT = async (req, res) => {};
