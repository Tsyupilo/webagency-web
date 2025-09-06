import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// Define input size variants
const inputVariants = cva(
  `
    flex w-full bg-background border border-white/20 shadow-xs shadow-black/5 oi transition-[color,box-shadow] text-foreground placeholder:text-muted-foreground/80 
    focus-visible:ring-ring/0  focus-visible:border-white/20 focus-visible:outline-none focus-visible:ring-[0px]     
    disabled:cursor-not-allowed disabled:opacity-60 
    [&[readonly]]:bg-muted/80 [&[readonly]]:cursor-not-allowed
    file:h-full [&[type=file]]:py-0 file:border-solid file:border-white/20 file:bg-transparent 
    file:font-medium file:not-italic file:text-foreground file:p-0 file:border-0 file:border-e
    aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20
  `,
  {
    variants: {
      variant: {
        lg: "h-11 px-4 text-sm rounded-full file:pe-4 file:me-4",
        md: "h-9 px-3 text-[0.8125rem] leading-(--text-sm--line-height) rounded-full file:pe-3 file:me-3",
        sm: "h-7 px-2.5 text-xs rounded-full file:pe-2.5 file:me-2.5",
      },
    },
    defaultVariants: {
      variant: "lg",
    },
  },
);

const inputAddonVariants = cva(
  "flex items-center shrink-0 justify-center bg-muted border border-white/20 shadow-xs shadow-[rgba(0,0,0,0.05)] text-secondary-foreground [&_svg]:text-secondary-foreground/60",
  {
    variants: {
      variant: {
        sm: "rounded-md h-7 min-w-7 text-xs px-2.5 [&_svg:not([class*=size-])]:size-3.5",
        md: "rounded-md h-9 min-w-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) [&_svg:not([class*=size-])]:size-4.5",
        lg: "rounded-md h-10 min-w-10 px-4 text-sm [&_svg:not([class*=size-])]:size-4.5",
      },
      mode: {
        default: "",
        icon: "px-0 justify-center",
      },
    },
    defaultVariants: {
      variant: "md",
      mode: "default",
    },
  },
);

const inputGroupVariants = cva(
  `
    flex items-stretch
    [&_[data-slot=input]]:grow
    [&_[data-slot=input-addon]:has(+[data-slot=input])]:rounded-e-none [&_[data-slot=input-addon]:has(+[data-slot=input])]:border-e-0
    [&_[data-slot=input-addon]:has(+[data-slot=datefield])]:rounded-e-none [&_[data-slot=input-addon]:has(+[data-slot=datefield])]:border-e-0 
    [&_[data-slot=input]+[data-slot=input-addon]]:rounded-s-none [&_[data-slot=input]+[data-slot=input-addon]]:border-s-0
    [&_[data-slot=input-addon]:has(+[data-slot=button])]:rounded-e-none
    [&_[data-slot=input]+[data-slot=button]]:rounded-s-none
    [&_[data-slot=button]+[data-slot=input]]:rounded-s-none
    [&_[data-slot=input-addon]+[data-slot=input]]:rounded-s-none
    [&_[data-slot=input-addon]+[data-slot=datefield]]:[&_[data-slot=input]]:rounded-s-none
    [&_[data-slot=datefield]:has(+[data-slot=input-addon])]:[&_[data-slot=input]]:rounded-e-none
    [&_[data-slot=input]:has(+[data-slot=button])]:rounded-e-none
    [&_[data-slot=input]:has(+[data-slot=input-addon])]:rounded-e-none
    [&_[data-slot=datefield]]:grow
    [&_[data-slot=datefield]+[data-slot=input-addon]]:rounded-s-none [&_[data-slot=datefield]+[data-slot=input-addon]]:border-s-0
  `,
  {
    variants: {},
    defaultVariants: {},
  },
);

const inputWrapperVariants = cva(
  `
    flex items-center gap-1.5 group
    has-[:focus-visible]:ring-ring/30 
    has-[:focus-visible]:border-white/20
    has-[:focus-visible]:outline-none 
    has-[:focus-visible]:ring-[3px]

    [&_[data-slot=datefield]]:grow 
    [&_[data-slot=input]]:data-focus-within:ring-transparent  
    [&_[data-slot=input]]:data-focus-within:ring-0 
    [&_[data-slot=input]]:data-focus-within:border-0 
    [&_[data-slot=input]]:flex 
    [&_[data-slot=input]]:w-full 
    [&_[data-slot=input]]:outline-none 
    [&_[data-slot=input]]:transition-colors 
    [&_[data-slot=input]]:text-foreground
    [&_[data-slot=input]]:placeholder:text-muted-foreground 
    [&_[data-slot=input]]:border-0 
    [&_[data-slot=input]]:bg-transparent 
    [&_[data-slot=input]]:p-0
    [&_[data-slot=input]]:rounded-sm
    [&_[data-slot=input]]:shadow-none 
    [&_[data-slot=input]]:focus-visible:ring-0 
    [&_[data-slot=input]]:h-auto 
    [&_[data-slot=input]]:disabled:cursor-not-allowed
    [&_[data-slot=input]]:disabled:opacity-50    

    [&_svg]:text-muted-foreground 
    [&_svg]:shrink-0

    has-[[aria-invalid=true]]:border-destructive/60 
    has-[[aria-invalid=true]]:ring-destructive/10 
    dark:has-[[aria-invalid=true]]:border-destructive 
    dark:has-[[aria-invalid=true]]:ring-destructive/20    
  `,
  {
    variants: {
      variant: {
        sm: "gap-1.25 [&_svg:not([class*=size-])]:size-3.5",
        md: "gap-1.5 [&_svg:not([class*=size-])]:size-4",
        lg: "gap-1.5 [&_svg:not([class*=size-])]:size-4",
      },
    },
    defaultVariants: {
      variant: "md",
    },
  },
);

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
}

function InputAddon({
  className,
  variant,
  mode,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputAddonVariants>) {
  return (
    <div
      data-slot="input-addon"
      className={cn(inputAddonVariants({ variant, mode }), className)}
      {...props}
    />
  );
}

function InputGroup({
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupVariants>) {
  return (
    <div
      data-slot="input-group"
      className={cn(inputGroupVariants(), className)}
      {...props}
    />
  );
}

function InputWrapper({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputWrapperVariants>) {
  return (
    <div
      data-slot="input-wrapper"
      className={cn(
        inputVariants({ variant }),
        inputWrapperVariants({ variant }),
        className,
      )}
      {...props}
    />
  );
}

// Phone format configurations for different countries
const PHONE_FORMATS = {
  RU: {
    code: "+7",
    format: "+7 (999) 999-99-99",
    placeholder: "+7 (999) 999-99-99",
    maxLength: 10,
    areaCodeLength: 3,
    firstPartLength: 3,
    secondPartLength: 2,
    thirdPartLength: 2,
  },
  US: {
    code: "+1",
    format: "+1 (999) 999-9999",
    placeholder: "+1 (999) 999-9999",
    maxLength: 10,
    areaCodeLength: 3,
    firstPartLength: 3,
    secondPartLength: 4,
    thirdPartLength: 0,
  },
  UA: {
    code: "+380",
    format: "+380 (99) 999-99-99",
    placeholder: "+380 (99) 999-99-99",
    maxLength: 9,
    areaCodeLength: 2,
    firstPartLength: 3,
    secondPartLength: 2,
    thirdPartLength: 2,
  },
  DE: {
    code: "+49",
    format: "+49 999 99999999",
    placeholder: "+49 999 99999999",
    maxLength: 11,
    areaCodeLength: 3,
    firstPartLength: 8,
    secondPartLength: 0,
    thirdPartLength: 0,
  },
  FR: {
    code: "+33",
    format: "+33 9 99 99 99 99",
    placeholder: "+33 9 99 99 99 99",
    maxLength: 9,
    areaCodeLength: 1,
    firstPartLength: 2,
    secondPartLength: 2,
    thirdPartLength: 2,
  },
} as const;

type CountryCode = keyof typeof PHONE_FORMATS;

// Custom phone input with mask
const PhoneInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
    onChange?: (value: string) => void;
    country?: CountryCode;
  } & VariantProps<typeof inputVariants>
>((props, ref) => {
  const {
    className,
    variant,
    onChange,
    value,
    country = "RU",
    ...rest
  } = props;
  const [displayValue, setDisplayValue] = React.useState("");
  const format = PHONE_FORMATS[country];

  // Format phone number based on country
  const formatPhoneNumber = (input: string) => {
    // Extract only digits
    let numbers = input.replace(/\D/g, "");

    // Remove country code digits if they match the expected code
    const codeDigits = format.code.replace("+", "");
    if (numbers.startsWith(codeDigits)) {
      numbers = numbers.substring(codeDigits.length);
    }

    // Start with the country code
    let formatted = format.code;

    // Add area code
    if (numbers.length > 0) {
      if (format.areaCodeLength > 0) {
        formatted +=
          " (" +
          numbers.substring(0, Math.min(format.areaCodeLength, numbers.length));

        // Add first part of number
        if (numbers.length > format.areaCodeLength) {
          const firstPart = numbers.substring(
            format.areaCodeLength,
            Math.min(
              format.areaCodeLength + format.firstPartLength,
              numbers.length,
            ),
          );
          formatted += ") " + firstPart;

          // Add second part with hyphen
          if (
            format.secondPartLength > 0 &&
            numbers.length > format.areaCodeLength + format.firstPartLength
          ) {
            const secondPart = numbers.substring(
              format.areaCodeLength + format.firstPartLength,
              Math.min(
                format.areaCodeLength +
                  format.firstPartLength +
                  format.secondPartLength,
                numbers.length,
              ),
            );
            formatted += "-" + secondPart;

            // Add third part with hyphen
            if (
              format.thirdPartLength > 0 &&
              numbers.length >
                format.areaCodeLength +
                  format.firstPartLength +
                  format.secondPartLength
            ) {
              const thirdPart = numbers.substring(
                format.areaCodeLength +
                  format.firstPartLength +
                  format.secondPartLength,
                Math.min(
                  format.areaCodeLength +
                    format.firstPartLength +
                    format.secondPartLength +
                    format.thirdPartLength,
                  numbers.length,
                ),
              );
              formatted += "-" + thirdPart;
            }
          }
        }
      } else {
        // For formats without area code (like Germany)
        formatted +=
          " " +
          numbers.substring(0, Math.min(format.maxLength, numbers.length));
      }
    }

    return formatted;
  };

  // Extract raw value for form validation
  const extractRawValue = (input: string) => {
    const digitsOnly = input.replace(/\D/g, "");
    const codeDigits = format.code.replace("+", "");

    // If the number already starts with the country code, return as is
    if (digitsOnly.startsWith(codeDigits)) {
      return "+" + digitsOnly;
    }

    // Otherwise, prepend the country code
    return format.code + digitsOnly;
  };

  // Initialize display value from props value
  React.useEffect(() => {
    if (typeof value === "string" && value) {
      setDisplayValue(formatPhoneNumber(value));
    } else {
      setDisplayValue(format.code + " ");
    }
  }, [value, country]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Always ensure at least the country code prefix is present
    if (!input || input === "+" || input === format.code) {
      setDisplayValue(format.code + " ");
      if (onChange) onChange(format.code);
      return;
    }

    // Format the phone number
    const formatted = formatPhoneNumber(input);
    setDisplayValue(formatted);

    // Call onChange with raw value
    if (onChange) {
      const rawValue = extractRawValue(input);
      onChange(rawValue);
    }
  };

  return (
    <input
      data-slot="input"
      type="tel"
      ref={ref}
      className={cn(inputVariants({ variant }), className)}
      value={displayValue}
      onChange={handleChange}
      placeholder={format.placeholder}
      {...rest}
    />
  );
});

PhoneInput.displayName = "PhoneInput";

export {
  Input,
  InputAddon,
  inputAddonVariants,
  InputGroup,
  inputVariants,
  InputWrapper,
  PhoneInput,
};
