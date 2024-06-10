import { useSelector } from 'react-redux';
import { useGetStudentsQuery } from '../api/apiSlice';
import { selectFilteredStudents } from '../Navbar/SearchPanel/SearchPanelSlice';

import Card from './Card/Card';

const CardList = () => {
  const { isLoading, isError } = useGetStudentsQuery();
  const filteredStudents = useSelector(selectFilteredStudents);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred: {isError.message}</div>;

  const renderStudentsList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Student is not found !</h5>;
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
