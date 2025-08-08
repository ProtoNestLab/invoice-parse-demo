"use client";

import { Box, Button } from "@mui/material";

export type FilterType = "all" | "draft" | "published";

type VouchersFiltersProps = {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

export const VouchersFilters = ({
  activeFilter,
  onFilterChange,
}: VouchersFiltersProps) => {
  const handleFilterClick = (filter: FilterType) => {
    onFilterChange(filter);
  };

  const getFilterStyle = (filter: FilterType) => ({
    borderRadius: 0,
    borderColor: "rgba(219,224,229,1)",
    borderStyle: "solid",
    borderWidth: "0px 0px 1px 0px",
    borderBottom:
      activeFilter === filter
        ? "3px solid rgba(229,232,235,1)"
        : "1px solid rgba(219,224,229,1)",
    paddingTop: "16px",
    paddingBottom: "13px",
    marginLeft: filter !== "all" ? "32px" : 0,
    backgroundColor: "transparent",
    color: activeFilter === filter ? "rgba(18,20,23,1)" : "rgba(97,117,138,1)",
    fontWeight: 500,
    fontSize: "14px",
    textTransform: "none" as const,
    whiteSpace: "nowrap" as const,
    lineHeight: "21px",
    "&:hover": {
      backgroundColor: "transparent",
      color: "rgba(18,20,23,1)",
    },
  });

  return (
    <Box
      sx={{
        width: "960px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingBottom: "12px",
      }}
    >
      <Box
        sx={{
          width: "928px",
          borderColor: "rgba(219,224,229,1)",
          borderWidth: "0px 0px 1px 0px",
          borderStyle: "solid",
          paddingLeft: "16px",
          paddingRight: "16px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "266px",
            height: "53px",
            color: "rgba(97,117,138,1)",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => handleFilterClick("all")}
            sx={getFilterStyle("all")}
          >
            All
          </Button>

          <Button
            onClick={() => handleFilterClick("draft")}
            sx={getFilterStyle("draft")}
          >
            Draft
          </Button>

          <Button
            onClick={() => handleFilterClick("published")}
            sx={getFilterStyle("published")}
          >
            Published
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
