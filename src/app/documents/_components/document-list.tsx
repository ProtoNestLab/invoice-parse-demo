import { Description, Search } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

const documents = [
  {
    id: 1,
    name: "Invoice #12345",
    createdAt: "2024-01-20",
  },
  {
    id: 2,
    name: "Receipt #67890",
    createdAt: "2024-01-21",
  },
  {
    id: 3,
    name: "Bill #11223",
    createdAt: "2024-01-22",
  },
  {
    id: 4,
    name: "Invoice #44556",
    createdAt: "2024-01-23",
  },
  {
    id: 5,
    name: "Receipt #77889",
    createdAt: "2024-01-24",
  },
];

export const DocumentList = () => {
  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
        padding: "20px",
      }}
    >
      <TextField
        fullWidth
        placeholder="Search"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },
        }}
        sx={{ marginBottom: "20px" }}
        variant="outlined"
      />
      <Typography
        sx={{ marginBottom: "10px", fontWeight: "bold" }}
        variant="h6"
      >
        Documents
      </Typography>
      <List>
        {documents.map((doc, index) => (
          <ListItem disablePadding key={doc.id}>
            <ListItemButton
              sx={{
                borderRadius: "8px",
                backgroundColor:
                  index === 0 ? "rgba(240,242,245,0.5)" : "transparent",
              }}
            >
              <ListItemIcon>
                <Description />
              </ListItemIcon>
              <ListItemText
                primary={doc.name}
                secondary={`Uploaded on ${doc.createdAt}`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
