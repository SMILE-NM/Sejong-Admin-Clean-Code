import { useField } from 'formik';

const MySelectInput = ({ isReadOnly, inputWidth = '', label, ...props }) => {
  const [field, meta] = useField(props);
  let errorClass = '';
  if (meta.touched && meta.error && !isReadOnly) {
    errorClass = 'errorSolid';
  }
  return (
    <div>
      <label htmlFor={props.id || props.name} className="label-printer">
        {label}
      </label>
      <select
        {...field}
        {...props}
        className={`print-input ${errorClass}`}
        style={{ width: inputWidth }}
        disabled={isReadOnly}
      />
      {meta.touched && meta.error && !isReadOnly ? (
        <small className="error">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default MySelectInput;
