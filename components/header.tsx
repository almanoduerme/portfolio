import React from "react";
import Link from "next/link";
import { config } from "@/lib/config";

export default function Header() {
  return (
    <header className="pt-8">
      <Link href="/" className="text-3xl font-bold hover:text-orange-500">
        {config.name}
      </Link>
      <p className="text-md text-muted-foreground leading-tight font-light mt-1">
        {config.bio}
      </p>
    </header>
  );
}
