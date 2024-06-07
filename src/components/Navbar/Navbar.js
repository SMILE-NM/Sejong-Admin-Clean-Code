import sejongLogo from '../../assets/images/logo.png';
import './navbar.css';
import Form from 'react-bootstrap/Form';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { BsGear } from 'react-icons/bs';
import SearchPanel from './SearchPanel/SearchPanel';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-brand px-lg-3 d-flex flex-column align-items-center">
            <img src={sejongLogo} className="logo-sejong" alt="..." />
          </div>
          <SearchPanel />
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
