"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const addAge = () => {
  console.log("пересчитался");
  return 10;
};

export default function useStateInit() {
  const [age, setAge] = useState(addAge);

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
