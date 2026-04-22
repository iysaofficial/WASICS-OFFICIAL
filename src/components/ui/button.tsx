import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-[#2a7a5f] text-primary-foreground shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.5)] hover:-translate-y-1",
        destructive: "bg-gradient-to-r from-destructive to-[#e11d48] text-destructive-foreground shadow-lg shadow-destructive/30 hover:shadow-xl hover:shadow-destructive/50 hover:-translate-y-1",
        outline: "border-2 border-primary/30 bg-background/50 backdrop-blur-md text-primary shadow-sm hover:border-primary hover:bg-primary/5 hover:shadow-md hover:-translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground shadow-md hover:bg-[#e2e8f0] hover:shadow-lg hover:-translate-y-1 border border-border/50",
        ghost: "hover:bg-primary/10 hover:text-primary transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:bg-[position:right_center] text-primary-foreground shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.6)] hover:-translate-y-1.5 border border-white/20",
        heroOutline: "border-2 border-primary/50 text-foreground bg-background/30 backdrop-blur-xl hover:border-primary hover:bg-primary/10 shadow-lg hover:shadow-xl hover:-translate-y-1",
        nav: "bg-secondary/60 backdrop-blur-md text-foreground hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-border/40",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-2xl px-10 text-base",
        xl: "h-16 rounded-[1.5rem] px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
