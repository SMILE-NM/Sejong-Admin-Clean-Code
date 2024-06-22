import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOption, setSelectedId } from '../../api/studentSlice';

import imageUser from '../../../assets/images/Female.png';

import './card.css';

const Card = ({
  id,
  name_en,
  last_name_en,
  phone,
  email,
  student_group,
  topik,
  photo = imageUser,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let studentImg = photo;
  if (process.env.REACT_APP_IP) {
    studentImg = process.env.REACT_APP_IP + '/' + photo;
  }

  const option = useSelector(getOption);

  let selectionType = 'id';
  let selectionInfo = id;
  switch (option) {
    case 'student_group':
      selectionType = 'group';
      selectionInfo = student_group;
      break;
    case 'topik':
      selectionType = 'topik';
      selectionInfo = topik;
      break;
    default:
      selectionType = 'id';
      selectionInfo = id;
      break;
  }

  return (
    <div className="card">
      <div className="filter-search">
        {selectionType} : <span>{selectionInfo}</span>
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
        className="btn-more"
        onClick={() => {
          dispatch(setSelectedId(id));
          navigate('/student');
        }}
      >
        More
      </button>
    </div>
  );
};

export default Card;
