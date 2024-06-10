import { useGetStudentsQuery } from '../../api/apiSlice';
import { useDispatch } from 'react-redux';
import { setFilteredStudents, setOption } from './SearchPanelSlice';
import { useState } from 'react';

const SearchPanel = () => {
  const [selectedValue, setSelectedValue] = useState('name_en');

  const dispatch = useDispatch();
  const { data: students } = useGetStudentsQuery();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (selectedValue === 'name_en') {
      const filtered = students.filter((student) =>
        (student.name_en + student.last_name_en)
          .toLowerCase()
          .includes(searchTerm),
      );
      dispatch(setFilteredStudents(filtered));
    } else {
      const filtered = students.filter((student) =>
        student[selectedValue].toLowerCase().includes(searchTerm),
      );
      dispatch(setFilteredStudents(filtered));
    }
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    dispatch(setOption(e.target.value));
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
        value={selectedValue}
        onChange={handleSelectChange}
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
