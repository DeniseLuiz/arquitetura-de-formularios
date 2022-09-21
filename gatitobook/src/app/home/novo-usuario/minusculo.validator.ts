import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl) {
  const controlValue = control.value as string;

  if(controlValue !== controlValue.toLocaleLowerCase()) {
    return {
      minusculo: true,
    };
  }else {
    return null
  }
}
