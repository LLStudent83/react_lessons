import LiveCodeEditor from "@/components/ui/LiveCodeEditor";

const useStateAsyncCode = `
function AsyncUseState() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    const newNumber = number + 1;
    setNumber(newNumber);

    showLastNumber();
  };

  const showLastNumber = () => {
    console.log("Старое значение", number);
  };

  return (
    <div className="flex items-center content-center">
      <Button className="mr-10" onClick={increment}>
        Увеличить на 1
      </Button>
      <p>{number}</p>
    </div>
  );
}
`;

export default function UseStateBase() {
  return (
    <>
      <LiveCodeEditor txtCode={useStateAsyncCode} />
      <div className="mt-10">
        <strong>Для просмотра примера откройте консоль браузера!</strong>
        <br />{" "}
        <p>
          Здесь показана асинхронная природа useState. Изменяя состояние вызвав
          showNewNumber(newNumber) вы измените number но только на следующем
          рендере. В текущем рендере в функции showLastNumber вы увидите старое
          значение. Правильный подход это передать новое значение как аргумент в
          другие функции как например в showNewNumber. Далее рассмотрим как
          получить актуальное состояние.
        </p>
      </div>
    </>
  );
}
