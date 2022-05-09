import React from "react";

type Props = {};

const Form = (props: Props) => {
  return (
    <form>
      <div className="form__inner row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col">
          <input
            type="tel"
            maxLength={11}
            className="form-control"
            placeholder="Phone number"
          />
        </div>
        <button className="form__btn btn btn-primary btn-block">Добавить новый контакт</button>
      </div>
    </form>
  );
};

export default Form;
