import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { FormState } from "../types/form";
import Add from "./Add";

type Props = FormState;

const Form = ({ visible }: Props) => {
  const { hideForm, addUser, setName, setPhone, editUser } = useActions();
  const { name, phone, edited, editId} = useTypedSelector(state => state.form)

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
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="form_btn-group">
            <div className="form__btn">
              <button
                className="btn btn-md"
                onClick={() => {
                 edited ? editUser({id: editId, name: name!, number: phone!}) : addUser({ name: name!, number: phone! })  
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
