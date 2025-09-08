import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HeadingProps {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
  color?: "primary" | "secondary" | "accent";
  toCenter?: boolean;
}

const Heading = ({
  tag,
  title,
  description,
  className,
  color = "primary",
  toCenter = false,
}: HeadingProps) => {
  let badgeVariant: "default" | "secondary" | "outline";
  let titleColor: "text-primary" | "text-secondary" | "text-foreground";
  switch (color) {
    case "primary":
      badgeVariant = "default";
      titleColor = "text-primary";
      break;
    case "secondary":
      badgeVariant = "secondary";
      titleColor = "text-secondary";
      break;
    case "accent":
      badgeVariant = "outline";
      titleColor = "text-foreground";
      break;
  }

  return (
    <div
      className={cn(
        "flex w-fit flex-col gap-4",
        toCenter && "items-center",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-0.5", toCenter && "items-center")}>
        {tag && (
          <Badge className="w-fit text-sm" variant={badgeVariant}>
            {tag}
          </Badge>
        )}
        <h2
          className={cn(
            "font-heading text-5xl tracking-tight",
            titleColor,
            toCenter && "text-center",
          )}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
      </div>
      {description && (
        <p
          className={cn(
            "max-w-4xl text-lg font-bold leading-none text-accent-foreground",
            toCenter && "text-center",
          )}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      )}
    </div>
  );
};

export default Heading;
