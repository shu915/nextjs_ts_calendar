import Modal from "react-modal";
import { Schedule } from "../../types/calendar";
import { format } from "date-fns";
import { PrimaryBtn } from "../atoms/PrimaryBtn";

type Props = {
  closeModal: () => void;
  selectedSchedule: Schedule | null;
  setSelectedSchedule: React.Dispatch<React.SetStateAction<Schedule | null>>;
  scheduleList: Schedule[];
  setScheduleList: React.Dispatch<React.SetStateAction<Schedule[]>>;
}

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    width: "30%",
    transform: "translate(-50%, -50%)",
  }
}

const app = document.createElement("div");
app.id = "root";
document.body.appendChild(app);
Modal.setAppElement("#root");

export const ScheduleDetailModal = ({ closeModal, selectedSchedule, setSelectedSchedule, scheduleList, setScheduleList }: Props) => {

  const onClickDeleteSchedule = () => {
    if (window.confirm("本当に削除しますか？")) {
      const newScheduleList = [...scheduleList];
      const filteredScheduleList = newScheduleList.filter((schedule) => schedule.id !== selectedSchedule?.id);
      setScheduleList(filteredScheduleList);
      setSelectedSchedule(null);
    }
  }

  const onClickEditSchedule = () => {
    console.log("編集");
  }
  return (
    <Modal isOpen={!!selectedSchedule} onRequestClose={closeModal} style={modalStyle}>
      {selectedSchedule && (
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-center text-3xl font-bold pb-5">{selectedSchedule.title}</h3>
          <p className="text-lg">{format(selectedSchedule.date, "yyyy年MM月dd日")}</p>
          <p className="text-lg">{selectedSchedule.description}</p>
        <div className="flex gap-4">
            <PrimaryBtn size="lg" color="blue" onClick={onClickEditSchedule}>編集</PrimaryBtn>
            <PrimaryBtn size="lg" color="red" onClick={onClickDeleteSchedule}>削除</PrimaryBtn>
        </div>
        </div>
      )}

    </Modal>
  )
}