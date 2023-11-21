"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  route: string;
  children: ReactNode;
}

const LoadOnExactRoute = ({ route, children }: Props) => {
  const pathname = usePathname();
  const routeRegex = new RegExp(`^${route.replace(/:[^/]+/g, "[^/]+")}$`);

  return routeRegex.test(pathname) ? children : null;
};

export default LoadOnExactRoute;
