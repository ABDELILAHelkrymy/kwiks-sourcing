
import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/page";
import Banner from "./layout/banner/page";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-wrapper">
      
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <div className="page-wrapper">
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        <Header />
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Banner />
        <Container
          maxWidth="xl"
          sx={{
            paddingTop: "20px",
          }}
        >
          {/* ------------------------------------------- */}
          {/* Page Route */}
          {/* ------------------------------------------- */}
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}

          {/* ------------------------------------------- */}
          {/* Footer */}
          {/* ------------------------------------------- */}
          <Footer />
        </Container>
      </div>
    </div>
  );
}
