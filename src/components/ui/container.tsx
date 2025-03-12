
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "default" | "small" | "large";
}

const Container = ({ 
  children, 
  className, 
  as: Component = "div",
  size = "default",
  ...props 
}: ContainerProps) => {
  return (
    <Component 
      className={cn(
        "w-full mx-auto",
        size === "small" && "max-w-screen-md px-3 sm:px-4",
        size === "default" && "max-w-screen-xl px-3 sm:px-4 lg:px-6",
        size === "large" && "max-w-screen-2xl px-4 sm:px-6 lg:px-8",
        className
      )} 
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
