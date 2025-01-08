
type PrimaryBtnProps = {
  children: React.ReactNode;
  onClick: () => void;
  size: "sm" | "lg"
  color: "blue" | "red"
}

const SIZE_MAPPING = {
  sm: "p-2 text-sm",
  lg: "p-4 text-lg"
}

const COLOR_MAPPING = {
  blue: "bg-blue-800 text-white",
  red: "bg-red-500 text-white"
}

export const PrimaryBtn = ({ children, onClick, size, color }: PrimaryBtnProps) => {
  return (
    <button className={`${COLOR_MAPPING[color]} ${SIZE_MAPPING[size]} rounded-lg`} onClick={onClick}>{children}</button>
  )
}
