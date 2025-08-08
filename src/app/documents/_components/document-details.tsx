"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { type Dayjs } from "dayjs";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const lineItems = [
  {
    id: 1,
    description: "Software License",
    quantity: 1,
    unitPrice: "$500.00",
    total: "$500.00",
  },
  {
    id: 2,
    description: "Consulting Services",
    quantity: 2,
    unitPrice: "$100.00",
    total: "$200.00",
  },
  {
    id: 3,
    description: "Training",
    quantity: 1,
    unitPrice: "$300.00",
    total: "$300.00",
  },
];

const formSchema = z
  .object({
    vendor: z.string().min(1, "Vendor is required"),
    date: z.instanceof(dayjs as unknown as typeof Dayjs),
    dueDate: z.instanceof(dayjs as unknown as typeof Dayjs),
    currency: z.string().min(1, "Currency is required"),
    category: z.string().min(1, "Category is required"),
    vatRate: z.coerce.number().min(0, "VAT Rate must be a positive number"),
    vatAmount: z.coerce.number().min(0, "VAT Amount must be a positive number"),
    totalAmount: z.coerce
      .number()
      .min(0, "Total Amount must be a positive number"),
  })
  .refine((data) => data.dueDate.isAfter(data.date), {
    message: "Due Date cannot be before the Date",
    path: ["dueDate"],
  });

type FormSchema = z.infer<typeof formSchema>;

export const DocumentDetails = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vendor: "Vendor Name",
      date: dayjs(),
      dueDate: dayjs(),
      currency: "USD",
      category: "Software",
      vatRate: 20,
      vatAmount: 100,
      totalAmount: 600,
    },
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    const formData = {
      ...data,
      date: data.date.format("YYYY-MM-DD"),
      dueDate: data.dueDate.format("YYYY-MM-DD"),
      lineItems,
    };
    console.log(formData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          flexGrow: 1,
          padding: "40px",
          borderLeft: "1px solid #e0e0e0",
        }}
      >
        <Box sx={{ marginBottom: "20px" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h4">
            Invoice #12345
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Uploaded on 2024-01-20
          </Typography>
        </Box>

        <Typography
          sx={{ marginBottom: "10px", fontWeight: "bold" }}
          variant="h6"
        >
          Extracted Information
        </Typography>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Controller
              control={control}
              name="vendor"
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.vendor}
                  helperText={errors.vendor?.message}
                  label="Vendor"
                  sx={{ width: "50%" }}
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid size={3}>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Date"
                  onChange={(date) => field.onChange(date)}
                  sx={{ width: "100%" }}
                  value={field.value}
                />
              )}
            />
          </Grid>
          <Grid size={3}>
            <Controller
              control={control}
              name="dueDate"
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Due Date"
                  onChange={(date) => field.onChange(date)}
                  slotProps={{
                    textField: {
                      error: !!errors.dueDate,
                      helperText: errors.dueDate?.message,
                    },
                  }}
                  sx={{ width: "100%" }}
                  value={field.value}
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              control={control}
              name="currency"
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.currency}
                  helperText={errors.currency?.message}
                  label="Currency"
                  sx={{ width: "50%" }}
                  variant="outlined"
                />
              )}
            />
          </Grid>
        </Grid>

        <Typography
          sx={{ marginTop: "30px", marginBottom: "10px", fontWeight: "bold" }}
          variant="h6"
        >
          Line Items
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "rgba(240,242,245,1)" }}>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Unit Price</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lineItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.unitPrice}</TableCell>
                  <TableCell>{item.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography
          sx={{ marginTop: "30px", marginBottom: "10px", fontWeight: "bold" }}
          variant="h6"
        >
          AI Categorization
        </Typography>
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.category}
              helperText={errors.category?.message}
              label="Category"
              sx={{ width: "50%" }}
              variant="outlined"
            />
          )}
        />

        <Typography
          sx={{ marginTop: "30px", marginBottom: "10px", fontWeight: "bold" }}
          variant="h6"
        >
          VAT Allocation
        </Typography>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Controller
              control={control}
              name="vatRate"
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.vatRate}
                  helperText={errors.vatRate?.message}
                  label="VAT Rate"
                  sx={{ width: "50%" }}
                  type="number"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              control={control}
              name="vatAmount"
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.vatAmount}
                  helperText={errors.vatAmount?.message}
                  label="VAT Amount"
                  sx={{ width: "50%" }}
                  type="number"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              control={control}
              name="totalAmount"
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.totalAmount}
                  helperText={errors.totalAmount?.message}
                  label="Total Amount"
                  sx={{ width: "50%" }}
                  type="number"
                  variant="outlined"
                />
              )}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <Button
            sx={{
              marginRight: "12px",
              backgroundColor: "rgba(13, 128, 242, 1)",
              color: "#fff",
              textTransform: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "rgba(13, 128, 242, 0.8)",
              },
            }}
            type="submit"
            variant="contained"
          >
            Approve
          </Button>
          <Button
            sx={{
              backgroundColor: "rgba(240,242,245,1)",
              color: "rgba(18,20,23,1)",
              borderColor: "rgba(219,224,229,1)",
              "&:hover": {
                backgroundColor: "rgba(229,232,235,1)",
                borderColor: "rgba(219,224,229,1)",
              },
              textTransform: "none",
              borderRadius: "8px",
              padding: "10px 20px",
            }}
            variant="outlined"
          >
            Reject
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};
