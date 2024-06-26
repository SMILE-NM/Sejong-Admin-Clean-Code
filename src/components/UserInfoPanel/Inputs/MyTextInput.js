import { useField } from 'formik';

const MyTextInput = ({
  isReadOnly,
  inputWidth,
  label,
  classTajFont,
  ...props
}) => {
  const [field, meta] = useField(props);
  let errorClass = '';
  if (meta.touched && meta.error && !isReadOnly) {
    errorClass = 'errorSolid';
  }
  return (
    <div className="d-flex flex-column form-printer">
      <label htmlFor={props.id || props.name} className="label-printer">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`print-input ${errorClass} ${classTajFont} `}
        style={{ width: inputWidth }}
        disabled={isReadOnly}
      />
      {meta.touched && meta.error && !isReadOnly ? (
        <small className={`error ${classTajFont}`}>{meta.error}</small>
      ) : null}
    </div>
  );
};

export default MyTextInput;
