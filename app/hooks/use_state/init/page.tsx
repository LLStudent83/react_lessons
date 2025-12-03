"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

let count = 0;

const addAge = () => {
  count++;
  console.log("пересчитался", count);
  return 10;
};

export default function useStateInit() {
  const [age, setAge] = useState(addAge); // Нет повторного вызова
  // const [age, setAge] = useState(addAge()); // Есть повторный вызов

  // const [age, setAge] = useState(() => addAge()); // нет повторного вызова

  return (
    <section>
      <div>
        <span>Имя: </span>
        <span>Ann</span>
      </div>
      <div>
        <span>Возраст: </span>
        <span>{age}</span>
      </div>
      <Button onClick={() => setAge((prev) => prev + 1)}>Состарить</Button>
    </section>
  );
}
