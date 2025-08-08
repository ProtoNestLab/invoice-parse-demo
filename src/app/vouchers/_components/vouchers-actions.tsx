import { Box, Button } from "@mui/material";

export const VouchersActions = () => {
  return (
    <Box
      sx={{
        width: "960px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          paddingTop: "12px",
          paddingBottom: "12px",
          paddingLeft: "16px",
          paddingRight: "16px",
          width: "928px",
        }}
      >
        <Box
          sx={{
            width: "180px",
            height: "40px",
            fontWeight: 700,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              height: "40px",
              maxWidth: "480px",
              minWidth: "84px",
              overflow: "hidden",
              borderRadius: "8px",
              backgroundColor: "rgba(240,242,245,1)",
              borderColor: "rgba(240,242,245,1)",
              color: "rgba(18,20,23,1)",
              fontSize: "14px",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: "21px",
              textTransform: "none",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "rgba(230,232,235,1)",
                borderColor: "rgba(230,232,235,1)",
              },
            }}
            variant="outlined"
          >
            Cancel
          </Button>

          <Button
            sx={{
              height: "40px",
              backgroundColor: "rgba(13,128,242,1)",
              marginLeft: "12px",
              maxWidth: "480px",
              minWidth: "84px",
              overflow: "hidden",
              borderRadius: "8px",
              color: "rgba(255,255,255,1)",
              fontSize: "14px",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: "21px",
              textTransform: "none",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "rgba(11,110,220,1)",
              },
            }}
            variant="contained"
          >
            Publish
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
