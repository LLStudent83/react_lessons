import LiveCodeEditor from "@/components/ui/LiveCodeEditor";

const useStateBaseCode = `
function UseStateBase() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
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
      <LiveCodeEditor txtCode={useStateBaseCode} />
      <div className="mt-10">
        <p>
          Кликая по кнопке вы меняете состояние. Смена состояния вызывает
          рерэндер компонента с новым состоянием
        </p>
      </div>
    </>
  );
}
