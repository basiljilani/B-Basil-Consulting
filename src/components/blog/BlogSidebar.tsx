
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
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">Latest Articles</h1>
            <p className="text-muted-foreground text-sm mb-4">
              Discover our most recent insights, case studies, and thought leadership content
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 h-11 text-base rounded-full bg-gray-50 border-gray-200"
              />
            </div>
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category}>
                  <SidebarMenuButton>
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
