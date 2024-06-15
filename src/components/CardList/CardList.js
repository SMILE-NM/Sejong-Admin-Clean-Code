import { useSelector } from 'react-redux';
import { useGetStudentsQuery } from '../api/apiSlice';
import { selectFilteredStudents } from '../Navbar/SearchPanel/SearchPanelSlice';

import Spinner from '../Messages/Spinner';
import Error from '../Messages/Error.gif';
import Card from './Card/Card';
import NotFound from '../../assets/images/not_Found.png';
import './cadrList.css';

const CardList = () => {
  const { isLoading, isError } = useGetStudentsQuery();
  const filteredStudents = useSelector(selectFilteredStudents);

  if (isLoading)
    return (
      <div className="spinner-loading-message">
        <Spinner />
      </div>
    );
  if (isError)
    return (
      <div className="spinner-loading-message">
        {<img width={'300px'} src={Error} alt="Error" />}
      </div>
    );

  const renderStudentsList = (arr) => {
    if (arr.length === 0) {
      return (
        <h5 className="text-center not-found-message">
          <img width={'450px'} src={NotFound} alt="Not found" />
          <h3>Student is not found !</h3>
        </h5>
      );
    }

    return arr.map(({ id, ...props }) => {
      return <Card {...props} id={id} key={id} />;
    });
  };
  const elements = renderStudentsList(filteredStudents);
  return (
    <div className="container">
      <div className="card-list" id="card_list">
        {elements}
      </div>
    </div>
  );
};

export default CardList;
