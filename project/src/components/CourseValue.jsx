import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function CourseValue() {

  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) => {
    return data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).reduce((acc,course)=>acc+course.cost,0)


  });

  return (
    <div>
      Toplam Tutar: {totalCost} TL
    </div>
  )
}
