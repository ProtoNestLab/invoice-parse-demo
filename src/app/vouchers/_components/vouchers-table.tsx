import { Box, Paper, Typography } from "@mui/material";

export type VoucherData = {
  date: string;
  client: string;
  vendor: string;
  amount: string;
  status: "Published" | "Draft";
  externalId: string;
};

type VouchersTableProps = {
  vouchers: VoucherData[];
};

export const VouchersTable = ({ vouchers }: VouchersTableProps) => {
  return (
    <Box
      sx={{
        width: "960px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: "12px",
        paddingBottom: "12px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Paper
        sx={{
          width: "928px",
          borderRadius: "8px",
          overflow: "hidden",
          borderColor: "rgba(219,224,229,1)",
          borderStyle: "solid",
          borderWidth: "1px",
          backgroundColor: "rgba(255,255,255,1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "927px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              height: "767px",
              width: "927px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {/* Table Header */}
            <Box
              sx={{
                width: "927px",
                height: "46px",
                backgroundColor: "rgba(255,255,255,1)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  height: "46px",
                  width: "927px",
                  color: "rgba(18,20,23,1)",
                  fontWeight: 500,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "32px",
                    minHeight: "46px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                />

                <Box
                  sx={{
                    width: "153px",
                    height: "46px",
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "121px",
                      whiteSpace: "nowrap",
                      lineHeight: "21px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Date
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "159px",
                    height: "46px",
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "127px",
                      whiteSpace: "nowrap",
                      lineHeight: "21px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Client
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "159px",
                    height: "46px",
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "127px",
                      whiteSpace: "nowrap",
                      lineHeight: "21px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Vendor
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "145px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "113px",
                      whiteSpace: "nowrap",
                      lineHeight: "21px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Amount
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "146px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "114px",
                      whiteSpace: "nowrap",
                      lineHeight: "21px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Status
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "133px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "101px",
                      whiteSpace: "nowrap",
                      lineHeight: "21px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    External&nbsp;ID
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Table Body */}
            <Box
              sx={{
                width: "927px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "927px",
                  height: "721px",
                  position: "relative",
                  color: "rgba(97,117,138,1)",
                  fontWeight: 400,
                }}
              >
                {vouchers.map((voucher, index) => (
                  <Box
                    key={voucher.externalId}
                    sx={{
                      position: "absolute",
                      top: `${index * 72}px`,
                      width: "927px",
                      height: "73px",
                      borderColor: "rgba(229,232,235,1)",
                      borderWidth: "1px 0px 0px 0px",
                      borderStyle: "solid",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        height: "72px",
                        width: "927px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "32px",
                          minHeight: "72px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />

                      <Box
                        sx={{
                          width: "153px",
                          height: "72px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            width: "121px",
                            whiteSpace: "nowrap",
                            lineHeight: "21px",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          {voucher.date}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          width: "159px",
                          height: "72px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            width: "127px",
                            lineHeight: "21px",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          {voucher.client}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          width: "159px",
                          height: "72px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            width: "127px",
                            lineHeight: "21px",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          {voucher.vendor}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          width: "145px",
                          height: "72px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            width: "113px",
                            whiteSpace: "nowrap",
                            lineHeight: "21px",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          {voucher.amount}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          width: "146px",
                          height: "72px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "start",
                        }}
                      >
                        <Box
                          sx={{
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
                          <Typography
                            sx={{
                              color: "rgba(18,20,23,1)",
                              fontSize: "14px",
                              fontWeight: 500,
                              whiteSpace: "nowrap",
                              textAlign: "center",
                              lineHeight: "21px",
                              paddingX: 2,
                            }}
                          >
                            {voucher.status}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          width: "115px",
                          height: "72px",
                          display: "flex",
                          alignItems: "center",
                          flexFlow: "row-reverse",
                        }}
                      >
                        <Typography
                          sx={{
                            width: "101px",
                            whiteSpace: "nowrap",
                            lineHeight: "21px",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          {voucher.externalId}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
