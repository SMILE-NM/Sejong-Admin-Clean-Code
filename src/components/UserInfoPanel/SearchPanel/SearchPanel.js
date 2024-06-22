import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllStudents, setSelectedId } from '../../api/studentSlice';

import { Button, Form, Stack, Col, Container, Row } from 'react-bootstrap';
import { BsPrinter } from 'react-icons/bs';

import './searchPanel.css';

function SearchPanel({ isReadOnly, setIsReadyOnly, handlePrint, resetValues }) {
  const dispatch = useDispatch();
  const students = useSelector(selectAllStudents);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    const searchValueToLowerCase = e.target.value;
    setSearchValue(searchValueToLowerCase.toLowerCase());
  };

  const renderElements = (arr, searchTerm) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Student is not found !</h5>;
    }
    const filtered = arr.filter((student) =>
      (student.name_en + student.last_name_en)
        .toLowerCase()
        .includes(searchTerm),
    );

    return filtered.map(({ id, name_en, last_name_en }) => {
      return (
        <li
          key={id}
          onClick={() => dispatch(setSelectedId(id))}
          className="student-item"
        >
          {name_en + ' ' + last_name_en}
        </li>
      );
    });
  };

  const elements = renderElements(students, searchValue);

  return (
    <div className="user-search-panel">
      <h4>Search Student</h4>
      <div>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Find student by name ..."
            onChange={handleSearchChange}
          />
          <Button variant="secondary">Search</Button>
        </Stack>
        <ul className="student-list-item">{elements}</ul>
      </div>

      <Container>
        <Row>
          <Col sm={8}>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={isReadOnly ? 'Read mode is on' : 'Edit mode is on'}
              checked={isReadOnly}
              onChange={() => {
                setIsReadyOnly(!isReadOnly);
                resetValues();
              }}
            />
          </Col>
          {isReadOnly && (
            <Col sm={4}>
              <div
                onClick={handlePrint}
                className="add-pointer printer-icon d-flex"
              >
                <div>
                  <BsPrinter size={32} />
                </div>
                <span style={{ marginLeft: '8px', width: '250px' }}>
                  Click to print
                </span>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default SearchPanel;
