import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Minus } from "lucide-react"

import { cn } from "@/lib/utils"

/** @typedef {import("input-otp").OTPInputProps} OTPInputProps */

/** @type {React.ForwardRefRenderFunction<HTMLInputElement, OTPInputProps>} */
const InputOTPComponent = ({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props} />
)
const InputOTP = React.forwardRef(InputOTPComponent)
InputOTP.displayName = "InputOTP"

/** @type {React.ForwardRefRenderFunction<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>} */
const InputOTPGroupComponent = ({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
)
const InputOTPGroup = React.forwardRef(InputOTPGroupComponent)
InputOTPGroup.displayName = "InputOTPGroup"

/** @typedef {React.ComponentPropsWithoutRef<"div"> & { index: number }} InputOTPSlotProps */

/** @type {React.ForwardRefRenderFunction<HTMLDivElement, InputOTPSlotProps>} */
const InputOTPSlotComponent = ({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    (<div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className
      )}
      {...props}>
      {char}
      {hasFakeCaret && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>)
  );
}
const InputOTPSlot = React.forwardRef(InputOTPSlotComponent)
InputOTPSlot.displayName = "InputOTPSlot"

/** @type {React.ForwardRefRenderFunction<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>} */
const InputOTPSeparatorComponent = (props, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
)
const InputOTPSeparator = React.forwardRef(InputOTPSeparatorComponent)
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
