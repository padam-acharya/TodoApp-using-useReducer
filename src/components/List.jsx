import { FaTrash, FaEdit } from "react-icons/fa";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

export default function List({ list, done, deleteItem, editItem }) {
  function handleDeletion(e) {
    e.stopPropagation();
    deleteItem(list.id);
  }

  function handleEdit(e) {
    e.stopPropagation();

    editItem(list.id, list.content);
  }
  function handleDone(e) {
    done(list.id);
  }
  return (
    <li
      // style={list.done ? style : "null"}
      className={list.done ? "done" : ""}
    >
      <button onClick={handleDone}>
        {list.done ? <GrCheckboxSelected /> : <GrCheckbox />}
      </button>
      {list.content}
      <button onClick={handleDeletion}>
        <FaTrash />
      </button>
      <button onClick={handleEdit} disabled={list.done}>
        <FaEdit />
      </button>
    </li>
  );
}
