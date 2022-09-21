import { FormGroup } from '@angular/forms';
export function usuarioSenhaIguaisValidator(formGroup: FormGroup ) {
  console.log(formGroup)
  const userName = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('senha')?.value ?? '';

  if(userName.trim() + password.trim()) {
    return userName !== password ? null : {senhaIgualUsuario: true};
  }else {
    return null
  }
}
