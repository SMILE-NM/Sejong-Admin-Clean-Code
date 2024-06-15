import { SejongLogo } from '../images';
import Form from 'react-bootstrap/Form';
import { BsFiletypePdf, BsBan } from 'react-icons/bs';
import './logoAndPanel.css';

const LogoAndDocPanel = ({ isReadOnly }) => {
  return (
    <div className="logo-sejong-printer d-flex ">
      <div>
        <img src={SejongLogo} alt="Sejong-logo" />
      </div>
      <div className=" document-panel no-print">
        <Mode isReadOnly={isReadOnly} />
      </div>
    </div>
  );
};

const Mode = ({ isReadOnly }) => {
  return isReadOnly ? (
    <div>
      <Form.Label className="mb-3">Click to download file</Form.Label>
      <CheckFile url="1" textName="Passport Scan File" key={1} />
      <hr />
      <CheckFile url="1" textName="Checklist Scan File" key={2} />
    </div>
  ) : (
    <div>
      <Form.Group controlId="passport_scan" className="mb-3">
        <Form.Label size={'sm'}>Passport Scan</Form.Label>
        <Form.Control type="file" size={'sm'} name="passport_scan" />
      </Form.Group>
      <Form.Group controlId="checklist_scan" className="mb-3">
        <Form.Label>Checklist Scan</Form.Label>
        <Form.Control type="file" size={'sm'} name="checklist_scan" />
      </Form.Group>
    </div>
  );
};

const CheckFile = ({ url, textName, errorText = 'Not found file' }) => {
  if (url) {
    return (
      <div className="add-pointer">
        <BsFiletypePdf size={32} />
        <span style={{ marginLeft: '8px' }}>{textName}</span>
      </div>
    );
  } else {
    return (
      <div>
        <BsBan size={30} />
        <span style={{ marginLeft: '8px', color: '#e74c3c' }}>{errorText}</span>
      </div>
    );
  }
};

export default LogoAndDocPanel;
