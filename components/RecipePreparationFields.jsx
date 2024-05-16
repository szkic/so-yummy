import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const RecipePreparationFields = ({ theme, formik }) => {
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
        id="instructions"
        name="instructions"
        label="Enter recipe"
        multiline
        rows={5}
        fullWidth
        className="mt-6"
        onChange={(e) => formik.handleChange(e)}
        sx={formStyling}
        value={formik.values.instructions}
        error={
          formik.touched.instructions && Boolean(formik.errors.instructions)
        }
        helperText={formik.touched.instructions && formik.errors.instructions}
        onBlur={formik.handleBlur}
      />
    </div>
  );
};

RecipePreparationFields.propTypes = {
  theme: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
};

export default RecipePreparationFields;
