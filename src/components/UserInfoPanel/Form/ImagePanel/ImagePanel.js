import { useEffect, useState } from 'react';

import { Form } from 'react-bootstrap';

import { Field } from 'formik';

import CameraIcon from './CameraIcon';
import { UserImage } from '../../images/index';
import './imagePanel.css';

const ImagePanel = ({ isReadOnly, studentImg = UserImage }) => {
  const [imageSrc, setImageSrc] = useState(UserImage);

  useEffect(() => {
    if (studentImg) setImageSrc(studentImg);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReadOnly]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form.Group className="mb-2 image-panel">
      <img src={imageSrc} alt="" className="circle-img-printer" />
      {!isReadOnly && (
        <div>
          <label htmlFor="image">
            <CameraIcon size={64} />
          </label>
          <Field name="image">
            {({ field }) => (
              <input
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  handleFileChange(event);
                  field.onChange(event);
                }}
                className="d-none"
              />
            )}
          </Field>
        </div>
      )}
    </Form.Group>
  );
};

export default ImagePanel;
