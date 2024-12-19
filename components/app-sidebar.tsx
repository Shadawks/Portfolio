"use client";
import { BrainCircuit, FileUser, Home, Library, TerminalSquare } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: FileUser,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: Library,
  },
  {
    title: "Terminal",
    url: "/terminal",
    icon: TerminalSquare,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="bg-sidebar-primary">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex items-center gap-2 p-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
  
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="active:bg-transparent hover:bg-transparent focus:bg-transparent flex items-center justify-center gap-4">
              <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-primary text-sidebar">
                  <BrainCircuit className="size-6" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-lg">Kynda's Home</span>
                </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg" className={pathname === item.url ? 'bg-accent' : ''}>
                    <Link href={item.url} prefetch={true}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
