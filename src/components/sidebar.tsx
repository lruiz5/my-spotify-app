"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Playlist } from "@/data/playlists";
import { discoverNavItems, libraryNavItems } from "@/constants/nav-items";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  const pathname = usePathname();
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {discoverNavItems.map(({ title, Icon, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full",
                  pathname === href
                    ? "bg-gray-100 hover:bg-gray-100"
                    : "hover:bg-gray-100",
                  "justify-start"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            {libraryNavItems.map(({ title, Icon, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full",
                  pathname === href
                    ? "bg-gray-100 hover:bg-gray-100"
                    : "hover:bg-gray-100",
                  "justify-start"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
