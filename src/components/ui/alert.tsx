import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const alertVariants = cva(
  "nrelative nw-full nrounded-lg nborder nborder-slate-200 np-4 [&>svg~*]:npl-7 [&>svg+div]:ntranslate-y-[-3px] [&>svg]:nabsolute [&>svg]:nleft-4 [&>svg]:ntop-4 [&>svg]:ntext-slate-950 dark:nborder-slate-800 dark:[&>svg]:ntext-slate-50",
  {
    variants: {
      variant: {
        default: "nbg-white ntext-slate-950 dark:nbg-slate-950 dark:ntext-slate-50",
        destructive:
          "nborder-red-500/50 ntext-red-500 dark:nborder-red-500 [&>svg]:ntext-red-500 dark:nborder-red-900/50 dark:ntext-red-900 dark:dark:nborder-red-900 dark:[&>svg]:ntext-red-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("nmb-1 nfont-medium nleading-none ntracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("ntext-sm [&_p]:nleading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertTitle className="font-bold text-xl text-center">Oops! Nenhum resultado encontrado</AlertTitle>
      <AlertDescription className="text-center">
        Desculpe, não conseguimos encontrar nenhum resultado que corresponda à sua pesquisa.
      </AlertDescription>
    </Alert>
  )
}

export { Alert, AlertTitle, AlertDescription }
