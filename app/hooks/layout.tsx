import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useStateFeatures } from "./config";
import ListItem from "@/components/ui/ListItem";

export default function featureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 self-stretch h-full pr-5 py-5">
      <NavigationMenu className="border-r border-r-black px-5 w-1/5">
        <NavigationMenuList>
          <ul className="[&>li:not(:last-child)]:pb-4">
            {useStateFeatures.map((link) => (
              <ListItem
                key={link.title}
                title={link.title}
                href={link.href}
                className="hover:underline "
              />
            ))}
          </ul>
        </NavigationMenuList>
      </NavigationMenu>
      <section className="w-full">{children}</section>
    </div>
  );
}
