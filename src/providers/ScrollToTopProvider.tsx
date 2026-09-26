"use client";

import React from "react";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function ScrollToTopProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollToTop();
  return <>{children}</>;
}