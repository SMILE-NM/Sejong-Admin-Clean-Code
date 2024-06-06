import sejongLogo from '../../assets/images/logo.png';
import './navbar.css';
import Form from 'react-bootstrap/Form';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { BsGear } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-brand px-lg-3 d-flex flex-column align-items-center">
            <img src={sejongLogo} className="logo-sejong" alt="..." />
          </div>
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <div className="text-center">
              <h1 className="search-text">Search Students</h1>
              <input
                className="form-control me-2 search-inputBox"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
                // value={searchValue}
                // onChange={handleSearchChange}
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
        </div>

        <div className="ms-auto px-lg-3">
          <DropdownButton
            id="dropdown-basic"
            title={<BsGear size={24} />}
            variant="light"
          >
            <Dropdown.Item href="#/action-1">
              <Form.Check
                type="switch"
                id="switch-button"
                label="registration"
                className="switch-input"
              />
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
