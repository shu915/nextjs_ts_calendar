import { ComponentProps } from "react";

export const TextArea = (props: ComponentProps<"textarea">) => {
  return (
    <textarea
      {...props}
      className="w-full border-4 border-solid border-blue-800 p-2"
    />
  );
};
