
import { Search } from "lucide-react";
import { categories } from "@/data/blog-data";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

interface BlogSidebarProps {
  className?: string;
}

const BlogSidebar = ({ className }: BlogSidebarProps) => {
  return (
    <Sidebar className="border-r border-gray-100">
      <SidebarContent>
        <SidebarGroup>
          <div className="px-4 py-6">
            <p className="text-sm text-gray-600 mb-5">
              Discover our most recent insights, case studies, and thought leadership content
            </p>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-9 h-9 text-sm rounded-md border-gray-200 bg-white shadow-sm"
              />
            </div>
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs text-gray-500 font-medium">Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-sm py-1.5 font-medium">
                  <span>All</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {categories.map((category) => (
                <SidebarMenuItem key={category}>
                  <SidebarMenuButton className="text-sm py-1.5 text-gray-600 hover:text-gray-900">
                    <span>{category}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default BlogSidebar;
