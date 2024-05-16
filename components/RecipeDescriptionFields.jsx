"use client";

import {
  Autocomplete,
  CircularProgress,
  MenuItem,
  TextField,
} from "@mui/material";
import { fetchCategories } from "@utils/fetchers";
import Image from "next/image";
import { useEffect, useState } from "react";
import IMAGE_PLACEHOLDER from "../public/assets/images/image_placeholder.png";
import PropTypes from "prop-types";

const cookingTime = [];
for (let i = 5; i <= 120; i += 5) {
  cookingTime.push(i);
}

const ITEM_HEIGHT = 37;
const ITEM_PADDING_TOP = 8;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const RecipeDescriptionFields = ({ theme, formik }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  const formStyling = {
    "& .MuiInputBase-input": {
      color: theme === "dark" ? "white" : "inherit",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme === "dark" ? "white !important" : "inherit",
    },
    "& .MuiInputLabel-root": {
      color: theme === "dark" ? "white" : "inherit",
    },
    "& .MuiInput-root::before": {
      borderBottom:
        theme === "dark" ? "1px solid white" : "1px solid rgba(0, 0, 0, 0.42)",
      opacity: theme === "dark" ? "30%" : "inherit",
    },
    "& .MuiSvgIcon-root": {
      color: theme === "dark" ? "white" : "inherit",
    },
  };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetchCategories();

      if (active) {
        setOptions([...response]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <>
      <div className="flex flex-col items-center gap-8 tablet:flex-row desktop:items-start desktop:gap-12">
        <Image
          src={IMAGE_PLACEHOLDER}
          width={279}
          height={268}
          alt="image placeholder"
          className="h-auto desktop:w-[357px]"
        />

        <div className="flex w-[343px] flex-col gap-6 tablet:w-[393px] tablet:gap-8 desktop:gap-10">
          <TextField
            id="title"
            name="title"
            label="Enter item title"
            variant="standard"
            onChange={(e) => formik.handleChange(e)}
            sx={formStyling}
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            onBlur={formik.handleBlur}
          />
          <TextField
            id="description"
            name="description"
            label="Enter about recipe"
            variant="standard"
            onChange={(e) => formik.handleChange(e)}
            sx={formStyling}
            value={formik.values.description}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            onBlur={formik.handleBlur}
          />
          <Autocomplete
            id="category"
            name="category"
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option === value}
            getOptionLabel={(option) => option}
            options={options}
            loading={loading}
            onChange={(e, newValue) =>
              formik.setFieldValue("category", newValue)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                id="category"
                name="category"
                label="Category"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
                sx={formStyling}
                value={formik.values.category}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
                onBlur={formik.handleBlur}
              />
            )}
          />
          <TextField
            id="time"
            name="time"
            select
            label="Cooking time"
            variant="standard"
            SelectProps={{ MenuProps }}
            onChange={(e) => formik.handleChange(e)}
            sx={formStyling}
            value={formik.values.time}
            error={formik.touched.time && Boolean(formik.errors.time)}
            helperText={formik.touched.time && formik.errors.time}
            onBlur={formik.handleBlur}
          >
            {cookingTime.map((option) => (
              <MenuItem key={option} value={option}>
                {option} min
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
    </>
  );
};

RecipeDescriptionFields.propTypes = {
  theme: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
};

export default RecipeDescriptionFields;
