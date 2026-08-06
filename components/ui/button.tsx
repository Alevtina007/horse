import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 shadow-sm hover:shadow-md hover:-translate-y-0.5 ring-ring",
  secondary:
    "bg-secondary text-secondary-foreground hover:brightness-110 shadow-sm hover:shadow-md hover:-translate-y-0.5 ring-ring",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted ring-ring",
  ghost: "bg-transparent text-foreground hover:bg-muted ring-ring",
};

const sizes: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
