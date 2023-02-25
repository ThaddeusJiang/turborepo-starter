import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import React, { FC } from "react";
import axios from "axios";
import { MainLayout } from "../components/layouts/MainLayout";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../mocks");
}

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";
axios.defaults.baseURL = API_HOST;

const queryClient = new QueryClient();

const App: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
