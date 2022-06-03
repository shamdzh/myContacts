import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { editForm } from "../store/action-creators/form";
import { FormState } from "../types/form";

type Props = FormState;

const Add = ({ visible }: Props) => {
  const { showForm, hideForm } = useActions();
  const { edited } = useTypedSelector(state => state.form)

  useEffect(() => {
    console.log('Edited:', edited)
  })

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
