import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeCost,
  changeDescription,
} from "../store/slices/formSlice";
import { addCourse } from '../store/slices/courseSlice';

export default function CourseForm() {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCourse({ name, description, cost }));
  }

  console.log(name, description, cost);
  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              className="input is-expanded"
              onChange={(event) => {
                dispatch(changeName(event.target.value));
              }}
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              className="input is-expanded"
              onChange={(event) => {
                dispatch(changeDescription(event.target.value));
              }}
              value={description}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              className="input is-expanded"
              onChange={(event) => {
                dispatch(changeCost(parseInt(event.target.value)));
              }}
              type="number"
              value={cost}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
}
