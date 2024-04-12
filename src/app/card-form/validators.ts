import { AbstractControl, ValidationErrors } from '@angular/forms';

export function numbersOnly(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  return control.value.match(/^[0-9 ]+$/) == null
    ? { numbersOnly: true }
    : null;
}

export function month(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  return Number.parseInt(control.value) < 1 ||
    Number.parseInt(control.value) > 12
    ? { month: true }
    : null;
}

export function isName(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  return control.value.match(/^[A-Za-z -]+$/) == null ? { isName: true } : null;
}
