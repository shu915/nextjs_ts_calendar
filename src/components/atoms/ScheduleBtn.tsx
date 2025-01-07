type Props = {
  children: React.ReactNode;
  onClick: () => void;
}

export const ScheduleBtn = ({children, onClick}: Props) => {
  return (
    <button className="block bg-blue-800 text-white rounded-sm w-[94%] px-2" onClick={onClick}>
      {children}
    </button>
  )
}
