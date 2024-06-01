import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
  return (
    <>
      <div className="p-5 ">
        <div className="container-fluid">
          <Stack spacing={2} alignItems={"center"}>
            <Pagination count={5} />
          </Stack>
        </div>
      </div>
    </>
  );
}
