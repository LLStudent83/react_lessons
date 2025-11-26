"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const LiveProvider = dynamic(
  () => import("react-live").then((mod) => ({ default: mod.LiveProvider })),
  { ssr: false }
);
const LiveEditor = dynamic(
  () => import("react-live").then((mod) => ({ default: mod.LiveEditor })),
  { ssr: false }
);
const LiveError = dynamic(
  () => import("react-live").then((mod) => ({ default: mod.LiveError })),
  { ssr: false }
);
const LivePreview = dynamic(
  () => import("react-live").then((mod) => ({ default: mod.LivePreview })),
  { ssr: false }
);

const LiveCodeEditor = ({ txtCode }: { txtCode: string }) => {
  const [code, setCode] = useState(txtCode);

  return (
    <div className="flex bg-gray-100">
      <div className="w-1/2 border-r border-gray-300 p-4">
        <h3 className="font-bold mb-2">Код</h3>
        <LiveProvider
          code={code}
          scope={{ useState: React.useState, Button: Button }}
        >
          {" "}
          {/* Scope для импортов */}
          <LiveEditor className="font-mono text-sm" onChange={setCode} />
          <LiveError className="text-red-500 text-sm mt-2" />
        </LiveProvider>
      </div>
      <div className="w-1/2 p-4">
        <h3 className="font-bold mb-2">Превью</h3>
        <LiveProvider
          code={code}
          scope={{ useState: React.useState, Button: Button }}
        >
          <LivePreview className="border p-4 bg-white rounded" />
        </LiveProvider>
      </div>
    </div>
  );
};

export default LiveCodeEditor;
