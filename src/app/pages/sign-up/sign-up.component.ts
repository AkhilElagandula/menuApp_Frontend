import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  firstNameRequired = 'First name is required'
  public errorMsgList: any = [
    { firstNameRequired: 'First name is required' },
    { firstNameMinLength: 'First name should be atleast 3 charecters' },
    { lastNameRequired: 'Last name is required' },
    { lastNameMinLength: 'Last name should be atleast 3 charecters' },
    { emailRequired: 'Email is required' },
    { emailPattern: 'Please enter valid email id' },
    { mobileRequired: 'Mobile number is required' },
    { mobilePattern: 'Please enter valid mobile number' },
    { roleRequired: 'Role is required' },
    { passwordRequired: 'Password is required' },
    { passwordMinLength: 'Password is should be atleast 6 charecters' },
    { confirmPasswordRequired: 'Confirm password is required' },
    { passwordMismatch: 'Password and confirm password does not match' },
  ]

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern(/^(\+\d{1,2}\s?)?(\d{10})$/),
        Validators.minLength(10)
      ]],
      role: ['Select Role', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
      {
        validators: this.passwordMatchValidator
      }
    )
  }

  ngOnInit(): void {

  }

  //Function to convert error list into a single object
  public errorMessageObject: any = this.errorMsgList.reduce((acc: any, curr: any) => {
    const key = Object.keys(curr)[0];
    acc[key] = curr[key];
    return acc;
  }, {})

  isFieldValid(field: string) {
    const control = this.getFormControl(field);
    // Check if the control is invalid and has been touched
    const isInvalid = !control?.valid && control?.touched;
    // Check if the control has a 'required' error
    const isRequiredError = control?.errors?.['required'];
    // Check if the control has a 'minlength' error
    const isMinlengthError = control?.errors?.['minlength'];
    // Check if the control has a 'pattern' error
    const isPatternError = control?.errors?.['pattern'];
    const isEmailError = control?.errors?.['email'];
    return isInvalid && (isRequiredError || (isMinlengthError && !isPatternError) || isEmailError);
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    }
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  // Check for alphabets (both lowercase and uppercase)
  isAlphabet(event: any) {
    let key = event.key;
    if (!/^[a-zA-Z\s]$/.test(key)) { event.preventDefault(); }
  }
  // Check for numbers
  isNumber(event: any) {
    let key = event.charCode;
    if ((key < 48 || key > 57)) { event.preventDefault(); }
  }

  // Helper function to mark all form controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    })
  }

  getFormControl(controlName: string) {
    return this.signUpForm.get(controlName);
  }
}