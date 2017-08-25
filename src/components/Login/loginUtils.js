import Validator from 'Validator';

export default function validateInput(data) {
  const errors = {};

  if (Validator.isNull(data.username)) {
    errors.identifier = 'This field is required';
  }

  if (Validator.isNull(data.password)) {
    errors.identifier = 'This field is required';
  }
}
