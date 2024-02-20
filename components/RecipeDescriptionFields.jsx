"use client";

import {
  Autocomplete,
  CircularProgress,
  FormControl,
  MenuItem,
  TextField,
} from "@mui/material";
import { fetchCategories } from "@utils/fetchers";
import Image from "next/image";
import { useEffect, useState } from "react";

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

const RecipeDescriptionFields = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

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
          src="/../assets/images/image_placeholder.png"
          width={279}
          height={268}
          alt="image placeholder"
          className="h-auto desktop:w-[357px]"
        />

        <FormControl className="flex w-[343px] flex-col gap-6 tablet:w-[393px] tablet:gap-8 desktop:gap-10">
          <TextField
            required
            id="item-title"
            label="Enter item title"
            defaultValue=""
            variant="standard"
          />
          <TextField
            required
            id="about-recipe"
            label="Enter about recipe"
            defaultValue=""
            variant="standard"
          />
          <Autocomplete
            id="category"
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
            renderInput={(params) => (
              <TextField
                {...params}
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
              />
            )}
          />
          <TextField
            id="recipe-cooking-time"
            select
            label="Cooking time"
            variant="standard"
            defaultValue=""
            required
            SelectProps={{ MenuProps }}
          >
            {cookingTime.map((option) => (
              <MenuItem key={option} value={option}>
                {option} min
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </div>
    </>
  );
};

export default RecipeDescriptionFields;
