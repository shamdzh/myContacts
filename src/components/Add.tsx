import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { FormState } from "../types/form";

type Props = FormState;

const Add = ({ visible }: Props) => {
  const { showForm, hideForm } = useActions();

  if (!visible)
    return (
      <div className="addBtn">
        <button
          className="btn btn-sm"
          onClick={() => {
            showForm();
          }}
        >
          Добавить новый контакт
        </button>
      </div>
    );
  else return null;
};

export default Add;
