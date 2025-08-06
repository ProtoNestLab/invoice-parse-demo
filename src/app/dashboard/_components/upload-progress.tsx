import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export function UploadProgress() {
  const progress = 60;
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        width: "100%",
        maxWidth: "56rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{ fontWeight: 500, fontSize: "1rem", color: "text.primary" }}
        >
          Uploading 3 files
        </Typography>
        <LinearProgress
          sx={{
            marginTop: 1.5,
            height: "0.5rem",
            width: "100%",
            borderRadius: "9999px",
            backgroundColor: "grey.200",
            "& .MuiLinearProgress-bar": {
              borderRadius: "9999px",
              backgroundColor: "grey.900",
            },
          }}
          value={progress}
          variant="determinate"
        />
        <Typography
          sx={{
            marginTop: 1.5,
            width: "100%",
            color: "text.secondary",
            fontSize: "0.875rem",
          }}
        >
          {`${progress}% complete`}
        </Typography>
      </Box>
    </Box>
  );
}
