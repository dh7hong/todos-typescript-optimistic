import React from "react";
import { useFormStatus } from "react-dom";


export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-blue-500 rounded px-4 py-2 text-white font-semibold"
    >
      Add
    </button>
  );
}
