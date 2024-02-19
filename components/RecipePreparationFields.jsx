import { TextField } from "@mui/material";
import React from "react";

const RecipePreparationFields = () => {
  return (
    <div className="mt-11">
      <h3 className="text-2xl font-semibold">Recipe Preparation</h3>
      <TextField
        id="recipe"
        label="Enter recipe"
        multiline
        rows={5}
        fullWidth
        className="mt-6"
      />
    </div>
  );
};

export default RecipePreparationFields;
