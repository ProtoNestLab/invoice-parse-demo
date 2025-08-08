"use client";

import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";

type VouchersSearchProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export const VouchersSearch = ({
  searchQuery,
  onSearchChange,
}: VouchersSearchProps) => {
  return (
    <Box
      sx={{
        width: "960px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: "12px",
        paddingBottom: "12px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Box
        sx={{
          height: "48px",
          minWidth: "160px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            height: "48px",
            width: "928px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              width: "928px",
              height: "48px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: "8px 0px 0px 8px",
                backgroundColor: "rgba(240,242,245,1)",
                height: "48px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "16px",
              }}
            >
              <SearchIcon
                sx={{
                  width: "24px",
                  height: "24px",
                  color: "rgba(97,117,138,1)",
                }}
              />
            </Box>

            <Box
              sx={{
                width: "888px",
                overflow: "hidden",
                borderRadius: "0px 8px 8px 0px",
                backgroundColor: "rgba(240,242,245,1)",
                height: "48px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingRight: "16px",
                paddingLeft: "8px",
              }}
            >
              <InputBase
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search"
                sx={{
                  fontSize: "16px",
                  color: "rgba(97,117,138,1)",
                  lineHeight: "24px",
                  fontWeight: 400,
                  width: "100%",
                  "& .MuiInputBase-input": {
                    padding: 0,
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(97,117,138,1)",
                    opacity: 1,
                  },
                }}
                value={searchQuery}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
