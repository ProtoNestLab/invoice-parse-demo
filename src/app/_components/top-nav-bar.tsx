"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
		<header className="flex w-full items-center justify-center border-b border-gray-200 px-10 py-2">
			<div className="flex w-full max-w-7xl items-center justify-between font-sans">
				<Link href="/" className="flex items-center">
					<div className="relative size-6">
						<Image
							src="/images/top-nav/brand-logo.svg"
							alt="Fintegra Logo"
							fill
							className="object-contain"
						/>
					</div>
					<span className="ml-2 text-lg font-bold">Fintegra</span>
				</Link>
				<div className="flex items-center">
					<nav className="hidden h-10 items-center md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="ml-9 text-sm font-medium"
							>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="relative ml-8 hidden size-8 md:block">
						<Image
							src="/images/top-nav/user-avatar.svg"
							alt="User Avatar"
							fill
							className="rounded-full object-cover"
						/>
					</div>
					<button
						type="button"
						className="ml-4 md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						<Menu className="size-6" />
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			<div
				className={cn(
					"fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 md:hidden",
					isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
				)}
				onClick={() => setIsMenuOpen(false)}
			/>
			<div
				className={cn(
					"fixed right-0 top-0 z-50 flex h-full w-64 transform flex-col bg-white p-6 shadow-lg transition-transform duration-300 md:hidden",
					isMenuOpen ? "translate-x-0" : "translate-x-full",
				)}
			>
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold">Menu</h2>
					<button
						type="button"
						onClick={() => setIsMenuOpen(false)}
						aria-label="Close menu"
					>
						<X className="size-6" />
					</button>
				</div>
				<nav className="mt-8 flex flex-grow flex-col space-y-4">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-base font-medium"
							onClick={() => setIsMenuOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</nav>
				<div className="mt-auto flex items-center">
					<div className="relative size-8">
						<Image
							src="/images/top-nav/user-avatar.svg"
							alt="User Avatar"
							fill
							className="rounded-full object-cover"
						/>
					</div>
					<span className="ml-3 font-medium">William</span>
				</div>
			</div>
		</header>
	);
}
