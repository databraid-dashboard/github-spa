import Validator from 'Validator';
import isEmpty from 'lodash/isEmpty';


export default validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.username)) {
    errors.identifier = 'This field is required';
  }

  if (Validator.isNull(data.password)) {
    errors.identifier = 'This field is required';
  }
}
