import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";
import "./SelectField.scss";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};
SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
  const { field, form, options, type, label, placeholder, disabled } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const selectedOption = options.find((option) => option.value === value);

  const handleSelectOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      {/* <Input id={name} name={name}  value={value} onChange={onChange} onBlur={onBlur} placeholder="Eg: Wow nature ..." /> */}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        className={showError ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
