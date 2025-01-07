
type PrimaryBtnProps = {
  children: React.ReactNode;
  onClick: () => void;
  size: "sm" | "lg"
}

const SIZE_MAPPING = {
  sm: "p-2 text-sm",
  lg: "p-4 text-lg"
}

export const PrimaryBtn = ({ children, onClick, size }: PrimaryBtnProps) => {
  return (
    <button className={`bg-blue-800 text-white ${SIZE_MAPPING[size]} rounded-lg`} onClick={onClick}>{children}</button>
  )
}
