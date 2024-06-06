import { Button, Form, Stack, Col, Container, Row } from 'react-bootstrap';
import { BsPrinter } from 'react-icons/bs';

import './searchPanel.css';

function SearchPanel({ isReadOnly, setIsReadyOnly, handlePrint }) {
  return (
    <div className="user-search-panel">
      <h4>Search Student</h4>
      <div>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Find student by name ..."
          />
          <Button variant="secondary">Search</Button>
        </Stack>
      </div>

      <Container style={{ marginTop: '140px' }}>
        <Row>
          <Col sm={8}>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={isReadOnly ? 'Read mode' : 'Edit mode !!!'}
              checked={isReadOnly}
              onChange={() => setIsReadyOnly(!isReadOnly)}
            />
          </Col>
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
        </Row>
      </Container>
    </div>
  );
}

export default SearchPanel;
