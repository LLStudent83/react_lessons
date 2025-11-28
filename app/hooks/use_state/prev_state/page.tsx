import LiveCodeEditor from "@/components/ui/LiveCodeEditor";

const useStateAsyncCode = `
function AsyncUseState() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    const newNumber = number + 1;
    setNumber(newNumber);

    showActualNumber();

    chainIncrement()
  };

  // Получаем актуальное состояние как аргумент функции
  const showActualNumber = () => {
    setNumber((prev) => {
      console.log("Значение соответствует новому значению", prev);
      return prev;
    })
  };

// функции chainIncrement показывают что актуальное значение состояния пробрасывается между вызовами setNumber
  const chainIncrement = () => {
    setNumber((prev) => {
      console.log("Первое значение цепочки", prev);
      return prev + 1;
    })

    chainIncrement2();
  };

  const chainIncrement2 = () => {
    setNumber((prev) => {
      console.log("Второе значение цепочки", prev);
      return prev;
    })
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
          Здесь показано как можно получить актуальное состояние в цепочке
          вызова функций. Это так же работает если бы ваше состояние было
          объектом. Учтите, что если состояние это объект, то функция переданная
          в setState всегда должна возвращать новое значение.
        </p>
      </div>
    </>
  );
}
