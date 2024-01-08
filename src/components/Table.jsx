import { v4 as uuidv4 } from "uuid";
import styles from "./Table.module.css";
import { useState } from "react";
import LineChart from "./LineChart";

const Tr = (props) => {
  const { data, onClick, isOpen } = props;
  const current = parseInt(data.current_day.replace(/\s/g, ""), 10);
  const yesterday = parseInt(data.yesterday.replace(/\s/g, ""), 10);

  let yesterdayClass = styles["normal-state"];

  if (current > yesterday) {
    yesterdayClass = styles["increase-state"];
  } else if (current < yesterday) {
    yesterdayClass = styles["decrease-state"];
  }

  const percent = Math.round(((current - yesterday) / yesterday) * 100);
  const handleRowClick = () => {
    onClick(data.id);
  };

  const dataLine = {
    labels: ["Сегодня", "Вчера"],
    datasets: [
      {
        label: "",
        data: [current, yesterday],
        borderColor: "rgb(47, 124, 80)",
        backgroundColor: "rgb(47, 124, 80)",
      },
    ],
  };

  return (
    <>
      <tr onClick={handleRowClick} key={uuidv4()}>
        <td className={styles["normal-state"]}>{data.name}</td>
        <td className={styles["current-state"]}>{data.current_day}</td>
        <td className={yesterdayClass}>
          <span>
            {data.yesterday}{" "}
            <span className={styles["percent-state"]}>{percent} %</span>
          </span>
        </td>
        <td className={styles["normal-state"]}>{data.week}</td>
      </tr>
      {isOpen && (
        <tr>
          <td colSpan="4">
            <LineChart dataLine={dataLine} />
          </td>
        </tr>
      )}
    </>
  );
};

const Table = (props) => {
  const data = props.data;
  const [openRowId, setOpenRowId] = useState(null);

  const clickHandler = (rowId) => {
    if (openRowId === rowId) {
      setOpenRowId(null);
    } else {
      setOpenRowId(rowId);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th className={styles["normal-state"]}>Показатель</th>
          <th className={styles["current-state"]}>Текущий день</th>
          <th className={styles["normal-state"]}>Вчера</th>
          <th className={styles["normal-state"]}>Неделя</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <Tr
            key={uuidv4()}
            data={item}
            isOpen={openRowId === item.id}
            onClick={clickHandler}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
