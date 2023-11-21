"use client";

import {
  QueryClientProvider as ClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  return <ClientProvider client={queryClient}>{children}</ClientProvider>;
};

export default QueryClientProvider;
