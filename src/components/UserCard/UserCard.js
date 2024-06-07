import React from 'react';
import imageUser from '../../assets/images/Female.png';
import './card.css';

const UserCard = ({
  id,
  name_en,
  last_name_en,
  phone,
  email,
  typeSelect = 'id',
  typeSelectInfo = id,
  photo = imageUser,
}) => {
  // console.log(
  //   id,
  //   name_en,
  //   last_name_en,
  //   phone,
  //   email,
  //   (typeSelect = 'id'),
  //   (typeSelectInfo = id),
  //   (photo = imageUser),
  // );
  let studentImg = photo;
  if (process.env.REACT_APP_IP) {
    studentImg = process.env.REACT_APP_IP + '/' + photo;
  }

  if (typeSelect === 'student_group') {
    typeSelect = 'group';
  }

  return (
    <div className="card">
      <div className="filter-search">
        {typeSelect} : <span>{id}</span>
      </div>
      <div className="circle-image">
        <img src={studentImg} className="student-card-img" alt="..." />
      </div>
      <h5 className="card-title">
        {name_en} {last_name_en}
      </h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>Phone: </span>
          {phone}
        </li>
        <li className="list-group-item">
          <span>Email: </span>
          {email}
        </li>
      </ul>
      <button
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="btn-more"
        onClick={() => {
          // dispatch(setId(index - 1));
        }}
      >
        More
      </button>
    </div>
  );
};

export default UserCard;
