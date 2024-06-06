import React from 'react';
import imageUser from '../../assets/images/Female.png';
// import { useDispatch } from 'react-redux';
// import { setId } from '../store/action';

import './card.css';

const UserCard = ({
  index,
  name,
  last_name,
  phone,
  email,
  typeSelect = 'id',
  typeSelectInfo = 'null',
  photo = imageUser,
}) => {
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
        {typeSelect} : <span>{typeSelectInfo}</span>
      </div>
      <div className="circle-image">
        <img src={studentImg} className="student-card-img" alt="..." />
      </div>
      <h5 className="card-title">
        {/* {name} {last_name} */} Nematov Muhammadjon
      </h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>Phone: </span>
          {/* {phone} */}
          501010120
        </li>
        <li className="list-group-item">
          <span>Email: </span>
          {email}nematovmz2003@gmail.com
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
