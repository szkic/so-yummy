import { Pagination, Stack } from "@mui/material";
import React from "react";

const Paginator = () => {
  return (
    <>
      <div className="mx-auto mt-10 max-w-max rounded-[26px] bg-input-primary px-7 py-4 shadow-md tablet:mt-12">
        <Stack spacing={2}>
          <Pagination
            count={10}
            boundaryCount={0}
            sx={{
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#EBF3D4",
              },
            }}
          />
        </Stack>
      </div>
    </>
  );
};

export default Paginator;
