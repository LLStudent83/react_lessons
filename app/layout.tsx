import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { hooks } from "./config/navItems";
import "./globals.css";
import ListItem from "@/components/ui/ListItem";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React lessons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-gray-500 h-15 flex items-center px-5">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="mr-8">
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Hooks</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    {hooks.map((link) => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
        <div className="bg-zinc-50 font-sans dark:bg-black flex-1">
          <main className=" w-full bg-white dark:bg-black sm:items-start h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
