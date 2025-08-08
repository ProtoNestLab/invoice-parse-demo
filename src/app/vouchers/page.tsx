"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { VouchersActions } from "@/app/vouchers/_components/vouchers-actions";
import {
  type FilterType,
  VouchersFilters,
} from "@/app/vouchers/_components/vouchers-filters";
import { VouchersHeader } from "@/app/vouchers/_components/vouchers-header";
import { VouchersSearch } from "@/app/vouchers/_components/vouchers-search";
import {
  type VoucherData,
  VouchersTable,
} from "@/app/vouchers/_components/vouchers-table";

const allVouchers: VoucherData[] = [
  {
    date: "07/15/2024",
    client: "Tech Solutions Inc.",
    vendor: "Office Supplies Co.",
    amount: "$250.00",
    status: "Published",
    externalId: "XRO-12345",
  },
  {
    date: "07/14/2024",
    client: "Marketing Pros LLC",
    vendor: "Digital Ads Inc.",
    amount: "$500.00",
    status: "Draft",
    externalId: "XRO-67890",
  },
  {
    date: "07/13/2024",
    client: "Retail Group Ltd.",
    vendor: "Inventory Suppliers",
    amount: "$1,200.00",
    status: "Published",
    externalId: "XRO-11223",
  },
  {
    date: "07/12/2024",
    client: "Consulting Services Co.",
    vendor: "Travel Agency",
    amount: "$300.00",
    status: "Draft",
    externalId: "XRO-33445",
  },
  {
    date: "07/11/2024",
    client: "Healthcare Providers Inc.",
    vendor: "Medical Supplies Ltd.",
    amount: "$750.00",
    status: "Published",
    externalId: "XRO-55667",
  },
  {
    date: "07/10/2024",
    client: "Financial Advisors LLC",
    vendor: "Software Solutions Co.",
    amount: "$1,500.00",
    status: "Draft",
    externalId: "XRO-77889",
  },
  {
    date: "07/09/2024",
    client: "Construction Group Ltd.",
    vendor: "Building Materials Inc.",
    amount: "$2,000.00",
    status: "Published",
    externalId: "XRO-99001",
  },
  {
    date: "07/08/2024",
    client: "Legal Services Co.",
    vendor: "Research Database",
    amount: "$400.00",
    status: "Draft",
    externalId: "XRO-22446",
  },
  {
    date: "07/07/2024",
    client: "Educational Institute Inc.",
    vendor: "Textbook Publishers",
    amount: "$900.00",
    status: "Published",
    externalId: "XRO-44668",
  },
  {
    date: "07/06/2024",
    client: "Real Estate Agency LLC",
    vendor: "Property Maintenance Co.",
    amount: "$600.00",
    status: "Draft",
    externalId: "XRO-66880",
  },
];

export default function VouchersPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const getFilteredVouchers = () => {
    let filtered = allVouchers;

    if (activeFilter === "draft") {
      filtered = filtered.filter((voucher) => voucher.status === "Draft");
    } else if (activeFilter === "published") {
      filtered = filtered.filter((voucher) => voucher.status === "Published");
    }

    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (voucher) =>
          voucher.client.toLowerCase().includes(lowercasedQuery) ||
          voucher.vendor.toLowerCase().includes(lowercasedQuery) ||
          voucher.externalId.toLowerCase().includes(lowercasedQuery)
      );
    }

    return filtered;
  };

  const filteredVouchers = getFilteredVouchers();

  return (
    <Box
      sx={{
        maxWidth: "960px",
        width: "960px",
        height: "1066px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        fontWeight: 700,
        fontFamily: '"Inter", sans-serif',
        fontSize: "14px",
        margin: "0 auto",
      }}
    >
      <VouchersHeader />
      <VouchersFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <VouchersSearch
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />
      <VouchersTable vouchers={filteredVouchers} />
      <VouchersActions />
    </Box>
  );
}
