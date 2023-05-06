import { useState, useEffect } from "react";

export default function Input({ add, edit, editedList }) {
  const [inputText, setInputText] = useState("");
  const content = edit?.content;
  function handleSubmit(e) {
    if (inputText) {
      setInputText(inputText);
      if (edit?.isEditable) {
        editedList(edit.id, inputText);
        setInputText("");
        return;
      }
      add(inputText);
    } else {
      alert("Input text cannot be empty");
    }
    setInputText("");
  }
  useEffect(() => {
    if (edit?.content) {
      setInputText(edit.content);
    }
  }, [content]);
  return (
    <div>
      <input
        type="text"
        placeholder="Your Task For Today"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {edit?.isEditable ? "Edit" : "Add"}
      </button>
    </div>
  );
}
