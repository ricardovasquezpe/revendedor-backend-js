import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import * as moment from "moment";

@ValidatorConstraint({ name: 'IsValidDate', async: true })
export class ValidateDate implements ValidatorConstraintInterface {
  async validate(value: string,  args: ValidationArguments) {
    try {
        console.log(value);
        
        moment(value, "DD/MM/YYYY").toDate();
        return true;
    } catch (e) {
      return false;
    }
  }

  defaultMessage() {
    return "Error!";
  }
}