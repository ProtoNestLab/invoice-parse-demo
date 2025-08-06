import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function UploadHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "56rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Typography sx={{ color: "text.primary" }} variant="h1">
        Upload Documents
      </Typography>
      <Typography
        sx={{
          marginTop: 1.5,
          color: "text.secondary",
        }}
        variant="body2"
      >
        Drag and drop files here or browse to upload. Supported formats: PDF,
        JPG, PNG. Max file size: 20MB.
      </Typography>
    </Box>
  );
}
