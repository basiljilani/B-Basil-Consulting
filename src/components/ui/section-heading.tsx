
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
  withLine?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = false,
  withLine = false,
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight",
        titleClassName
      )}>
        {title}
        {withLine && (
          <div className="h-1 w-16 bg-basil-500 mt-4 rounded-full" />
        )}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground max-w-3xl",
          centered && "mx-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
