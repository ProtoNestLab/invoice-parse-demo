"use client";

import { Box } from "@mui/material";
import { DocumentDetails } from "@/app/documents/_components/document-details";
import { DocumentList } from "@/app/documents/_components/document-list";

const DocumentsPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <DocumentList />
      <DocumentDetails />
    </Box>
  );
};

export default DocumentsPage;
