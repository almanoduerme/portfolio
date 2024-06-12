import React from "react";
import Link from "next/link";
import { config } from "@/lib/config";

export default function Header() {
  return (
    <header className="pt-8 border-b-2 pb-3">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold hover:text-orange-500">
          {config.name}
        </Link>
          <p className="font-ligh text-sm">EN / ES</p>
      </div>

      <p className="text-md text-muted-foreground leading-tight font-light mt-1">
        I am <span className="text-orange-500 font-medium">Full Stack Developer</span> based in Buenos Aires, Argentina. I have a passion for web development and love to create new things. I am always looking for new challenges and opportunities to grow as a professional.
      </p>
    </header>
  );
}
