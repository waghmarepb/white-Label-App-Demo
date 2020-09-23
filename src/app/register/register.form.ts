import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function formGroup(fb: FormBuilder): FormGroup {

    const formGroupObject = {
        name: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required],
        dob: [null, Validators.required],
        address: [null, Validators.required],
        status: ['Active'],
    };

    return fb.group(formGroupObject);
}

export function RegisterFormConfig(fb: FormBuilder): FormGroup {
    return formGroup(fb);
}
