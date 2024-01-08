import "./App.css";
import Table from "./components/Table";

const DATA = [
  {
    id: 1,
    name: "выручка, руб",
    current_day: "500 521",
    yesterday: "480 521",
    week: "4 805 121",
  },
  {
    id: 2,
    name: "наличные",
    current_day: "300 000",
    yesterday: "300 000",
    week: "300 000",
  },
  {
    id: 3,
    name: "безналичный расчёт",
    current_day: "100 000",
    yesterday: "100 000",
    week: "100 000",
  },
  {
    id: 4,
    name: "Кредитные карты",
    current_day: "100 521",
    yesterday: "100 521",
    week: "100 521",
  },
  {
    id: 5,
    name: "средний чек, руб",
    current_day: "1 300",
    yesterday: "900",
    week: "900",
  },
  {
    id: 6,
    name: "средний гость, руб",
    current_day: "1 200",
    yesterday: "800",
    week: "800",
  },
  {
    id: 7,
    name: "удвление из чека (после оплаты), руб",
    current_day: "1 000",
    yesterday: "1 100",
    week: "900",
  },
  {
    id: 8,
    name: "удаление из чека (до оплаты), руб",
    current_day: "1 300",
    yesterday: "1 300",
    week: "900",
  },
  {
    id: 9,
    name: "количестов чеков",
    current_day: "34",
    yesterday: "36",
    week: "34",
  },
  {
    id: 10,
    name: "количество гостей",
    current_day: "34",
    yesterday: "36",
    week: "32",
  },
];

function App() {
  return (
    <>
      <Table data={DATA} />
    </>
  );
}

export default App;
