import { ComponentProps } from "react";

export const Input = (props: ComponentProps<"input">) => {
  return (
    <input {...props} className="w-full border-4 border-solid border-blue-800 rounded-md  p-2" />
  )
}
