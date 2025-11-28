"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const BatchingDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // Инкремент счётчика рендеров
  console.log("Render");

  const handleSync = () => {
    // Синхронные обновления: батчинг объединит в один ререндер
    setCount(count + 1);
    setFlag(!flag);
  };

  const handleAsync = () => {
    // Асинхронные: в React 18+ батчинг работает (setTimeout в контексте)
    setTimeout(() => {
      setCount(count + 1);
      setFlag(!flag);
    }, 0);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Демо батчинга в React 19</h2>

      <Button onClick={handleSync} style={{ marginRight: "10px" }}>
        Синхронная кнопка (батчинг: 1 рендер)
      </Button>

      <Button onClick={handleAsync}>
        Асинхронная кнопка (батчинг: 1 рендер в React 18+)
      </Button>

      <p>
        Проверь консоль: после клика — один лог рендера, но два обновления
        состояния.
      </p>
    </div>
  );
};

export default BatchingDemo;
