import { TextField } from "@mui/material";
import React from "react";

const RecipePreparationFields = ({ instructions, setInstructions, theme }) => {
  const formStyling = {
    "& .MuiInputBase-input": {
      color: theme === "dark" ? "white" : "inherit",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme === "dark" ? "white !important" : "black", 
      opacity: "30%",
    },
    "& .MuiInputLabel-root": {
      color: theme === "dark" ? "white" : "inherit", 
    },
  };

  return (
    <div className="mt-11 tablet:mt-24">
      <h3 className="text-2xl font-semibold">Recipe Preparation</h3>
      <TextField
        id="recipe"
        label="Enter recipe"
        multiline
        rows={5}
        fullWidth
        className="mt-6"
        onChange={(e) => setInstructions(e.target.value)}
        value={instructions}
        sx={formStyling}
      />
    </div>
  );
};

export default RecipePreparationFields;
