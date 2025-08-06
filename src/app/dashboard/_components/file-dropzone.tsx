"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDropzone } from "react-dropzone";

export function FileDropzone() {
  const onDrop = (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        width: "100%",
        maxWidth: "56rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        {...getRootProps()}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: "0.5rem",
          border: "2px dashed",
          borderColor: isDragActive ? "primary.main" : "grey.300",
          backgroundColor: isDragActive ? "action.hover" : "white",
          px: 3,
          py: 7,
          cursor: "pointer",
          transition: "background-color 0.2s ease-in-out",
        }}
      >
        <input {...getInputProps()} />
        <Box
          sx={{
            display: "flex",
            maxWidth: "24rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "text.primary",
                fontSize: "1.125rem",
              }}
            >
              {isDragActive
                ? "Drop the files here ..."
                : "Drag and drop files here"}
            </Typography>
            <Typography
              sx={{
                marginTop: 1,
                color: "text.secondary",
                fontSize: "0.875rem",
              }}
            >
              Or
            </Typography>
          </Box>
          <Box component="form" sx={{ mt: 3 }}>
            <Button
              component="label"
              sx={{
                cursor: "pointer",
                borderRadius: "0.5rem",
                backgroundColor: "grey.100",
                px: 2.5,
                py: 1.25,
                textAlign: "center",
                fontWeight: 500,
                color: "text.primary",
                fontSize: "0.875rem",
                "&:hover": {
                  backgroundColor: "grey.200",
                },
                textTransform: "none",
              }}
              variant="contained"
            >
              Browse Files
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
