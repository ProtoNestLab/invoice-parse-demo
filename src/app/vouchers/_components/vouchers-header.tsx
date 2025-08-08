import { Box, Button, Typography } from "@mui/material";

export const VouchersHeader = () => {
  return (
    <Box
      sx={{
        width: "960px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Box
        sx={{
          width: "928px",
          height: "40px",
          color: "rgba(18,20,23,1)",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            minWidth: "288px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              width: "288px",
              fontSize: "32px",
              whiteSpace: "nowrap",
              lineHeight: "40px",
              fontWeight: 700,
              fontFamily: '"Inter", sans-serif',
            }}
            variant="h4"
          >
            Vouchers
          </Typography>
        </Box>

        <Box
          sx={{
            marginLeft: "518px",
            height: "32px",
            maxWidth: "480px",
            minWidth: "84px",
            overflow: "hidden",
            borderRadius: "8px",
            backgroundColor: "rgba(240,242,245,1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "rgba(240,242,245,1)",
              color: "rgba(18,20,23,1)",
              fontSize: "14px",
              fontWeight: 500,
              textAlign: "center",
              lineHeight: "21px",
              whiteSpace: "nowrap",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgba(230,232,235,1)",
                boxShadow: "none",
              },
            }}
            variant="contained"
          >
            New&nbsp;Voucher
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
