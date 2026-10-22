"use client";

import { Toaster } from "sonner";

export default function Toasts() {
  return (
    <Toaster
      position="top-center"
      theme="light"
      toastOptions={{
        style: {
          borderRadius: 0,
          border: "1px solid rgba(31,31,31,0.18)",
          fontFamily: "Manrope, sans-serif",
        },
      }}
    />
  );
}
