import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FileDropzone } from "@/app/dashboard/_components/file-dropzone";
import { UploadHeader } from "@/app/dashboard/_components/upload-header";
import { UploadProgress } from "@/app/dashboard/_components/upload-progress";

export default function DashboardPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, lg: 12 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "64rem",
        }}
      >
        <UploadHeader />
        <FileDropzone />
        <UploadProgress />
      </Box>
    </Container>
  );
}
