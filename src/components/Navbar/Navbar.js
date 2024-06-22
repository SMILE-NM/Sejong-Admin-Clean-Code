import SearchPanel from './SearchPanel/SearchPanel';
import SettingsModal from './SettingsModal/SettingsModal';

import Form from 'react-bootstrap/Form';
import { DropdownButton, Dropdown } from 'react-bootstrap';

import { BsGear } from 'react-icons/bs';

import sejongLogo from '../../assets/images/logo.png';
import './navbar.css';

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
            <Dropdown.Item href="#/action-1" className="mb-2">
              <Form.Check
                type="switch"
                id="switch-button"
                label="registration"
                className="switch-input"
              />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="mb-2">
              <SettingsModal />
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
