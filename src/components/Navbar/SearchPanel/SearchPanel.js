import { useGetStudentsQuery } from '../../api/apiSlice';
import { useDispatch } from 'react-redux';
import { filtersChanged } from './SearchPanelSlice';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const { data: students, isError, isLoading } = useGetStudentsQuery();

  const handleSearchChange = (e) => {
    if (students) {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = students.filter((student) =>
        (student.name_en + student.last_name_en)
          .toLowerCase()
          .includes(searchTerm),
      );
      dispatch(filtersChanged(filtered));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1">
      <div className="text-center">
        <h1 className="search-text">Search Students</h1>
        <input
          className="form-control me-2 search-inputBox"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="search"
          onChange={handleSearchChange}
        />
      </div>
      <select
        className="search-select"
        // value={select[0]}
        // onChange={handleSelectChange}
      >
        <option value="id">id</option>
        <option value="topik">Topic lvl</option>
        <option value="student_group">Group</option>
        <option value="name_en">Name</option>
        <option value="phone">phone</option>
        <option value="email">email</option>
      </select>
    </div>
  );
};

export default SearchPanel;
