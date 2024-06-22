import { useEffect, useState } from 'react';
import {
  useGetDatabasesQuery,
  useCreateDatabaseMutation,
  useSelectDatabaseMutation,
} from '../../api/apiSlice.js';

import { v4 as uuidv4 } from 'uuid';

import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { BsGear } from 'react-icons/bs';

function SettingsModal() {
  const { data: databases, error, isLoading } = useGetDatabasesQuery();
  const [createDatabase] = useCreateDatabaseMutation();
  const [createDatabaseMessage, setCreateDatabaseMessage] = useState();
  // const [selectDatabase] = useSelectDatabaseMutation();

  const [newDatabaseName, setNewDatabaseName] = useState('');
  const [selectedDatabaseId, setSelectedDatabaseId] = useState(null);

  const defaultDatabaseId =
    selectedDatabaseId || databases?.find((db) => db.active)?.id || '';
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSelectDatabase = async (id) => {
    try {
      // await selectDatabase({ id }).unwrap();
      setSelectedDatabaseId(id);
      console.log('Database selected successfully', 'id:', id);
    } catch (err) {
      console.error('Failed to select database: ', err);
    }
  };

  const handleDatabaseChange = (event) => {
    const id = event.target.value;
    handleSelectDatabase(id);
  };

  const handleNewNameChange = (e) => {
    setNewDatabaseName(e.target.value);
  };

  const handleCreateDatabase = async () => {
    try {
      const newDatabase = {
        id: uuidv4(),
        name: newDatabaseName,
        active: false,
      };

      const result = await createDatabase(newDatabase).unwrap();
      setCreateDatabaseMessage('Database created successfully!');
      console.log('Database created successfully!', result);
      setNewDatabaseName('');
    } catch (err) {
      console.error('Failed to create database: ', err);
      setCreateDatabaseMessage('Failed to create database!');
    }
    setTimeout(() => {
      setCreateDatabaseMessage('');
    }, 5000);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading databases</div>;

  const renderDatabase = (arr) => {
    if (arr.length === 0) {
      return <option>Database not found</option>;
    }

    return databases.map((db) => (
      <option key={db.id} value={db.id}>
        {db.name}
      </option>
    ));
  };

  const elements = renderDatabase(databases);

  return (
    <>
      <div onClick={handleShow}>
        <BsGear size={24} />
        <span className="p-2">Settings</span>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        animation={true}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputPassword5">Selected Database</Form.Label>
          <InputGroup className="mb-3">
            <Form.Select
              aria-label="Default select example"
              value={defaultDatabaseId}
              onChange={handleDatabaseChange}
            >
              {elements}
            </Form.Select>
          </InputGroup>
          <InputGroup className="justify-content-end mb-2 mt-5">
            <Form.Control
              placeholder="Enter new database name"
              onChange={handleNewNameChange}
              value={newDatabaseName}
            />
            <Button onClick={handleCreateDatabase}>Add New Database</Button>
          </InputGroup>
          <span>{createDatabaseMessage}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsModal;
