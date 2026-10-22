import React from "react";
import { cn } from "@/lib/utils";
import STUDIO42_LOGO from "../../images/3.png?no-inline";

export default function Studio42Logo({ className = "" }) {
  return (
    <img
      src={STUDIO42_LOGO}
      alt="Studio 42"
      className={cn("h-10 w-auto object-contain", className)}
    />
  );
}