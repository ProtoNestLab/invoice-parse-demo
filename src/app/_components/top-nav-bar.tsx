"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/documents", label: "Documents" },
  { href: "/tasks", label: "Tasks" },
  { href: "/clients", label: "Clients" },
  { href: "/reports", label: "Reports" },
  { href: "/integrations", label: "Integrations" },
];

export function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex w-full items-center justify-center border-gray-200 border-b px-10 py-2">
      <div className="flex w-full max-w-7xl items-center justify-between font-sans">
        <Link className="flex items-center" href="/">
          <div className="relative size-6">
            <Image
              alt="Fintegra Logo"
              className="object-contain"
              fill
              src="/images/top-nav/brand-logo.svg"
            />
          </div>
          <span className="ml-2 font-bold text-lg">Fintegra</span>
        </Link>
        <div className="flex items-center">
          <nav className="hidden h-10 items-center md:flex">
            {navLinks.map((link) => (
              <Link
                className="ml-9 font-medium text-sm"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="relative ml-8 hidden size-8 md:block">
            <Image
              alt="User Avatar"
              className="rounded-full object-cover"
              fill
              src="/images/top-nav/user-avatar.svg"
            />
          </div>
          <button
            aria-label="Toggle menu"
            className="ml-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={cn(
          "fixed top-0 right-0 z-50 flex h-full w-64 transform flex-col bg-white p-6 shadow-lg transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">Menu</h2>
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            <X className="size-6" />
          </button>
        </div>
        <nav className="mt-8 flex flex-grow flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              className="font-medium text-base"
              href={link.href}
              key={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex items-center">
          <div className="relative size-8">
            <Image
              alt="User Avatar"
              className="rounded-full object-cover"
              fill
              src="/images/top-nav/user-avatar.svg"
            />
          </div>
          <span className="ml-3 font-medium">William</span>
        </div>
      </div>
    </header>
  );
}
