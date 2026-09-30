"use client";

import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];

  return (
    <nav className="w-full ">
      <header className="mx-auto flex h-30 w-full max-w-360 items-center justify-between px-6 lg:px-12">
        <div className="flex flex-1 items-center gap-2">
          <Image src="/logo.png" alt="ByteSpace Logo" width={30} height={30} />
          <span className="text-2xl font-extrabold tracking-tight text-white">
            ByteSpace
          </span>
        </div>

        <ul className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-[15px] transition-all hover:text-white ${
                  isActive(link.href)
                    ? "font-medium text-white underline decoration-2 underline-offset-8"
                    : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-6">
          <Link
            href="/login"
            className="hidden text-[15px] text-white/80 transition-colors hover:text-white sm:block"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="hidden text-[15px] text-white/80 transition-colors hover:text-white sm:block"
          >
            Join Us
          </Link>

          <Button className="bg-transparent min-w-0 p-2">
            <MdOutlineShoppingBag className="h-6 w-6 text-white" />
          </Button>
        </div>
      </header>
    </nav>
  );
}
