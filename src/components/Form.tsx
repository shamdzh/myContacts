import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { FormState } from "../types/form";
import Add from "./Add";

type Props = FormState;

const Form = ({ visible }: Props) => {
  const { hideForm, addUser } = useActions();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  console.log(visible);

  if (visible)
    return (
      <div className="form">
        <div className="form__inner row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="col">
            <input
              type="tel"
              maxLength={11}
              className="form-control"
              placeholder="Phone number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
          <div className="form_btn-group">
            <div className="form__btn">
              <button
                className="btn btn-md"
                onClick={() => {
                  addUser({ name: name, number: number });
                }}
              >
                Сохранить данные
              </button>
            </div>
            <div className="form__btn btn-cancel">
              <button className="btn btn-md" onClick={hideForm}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default Form;
