import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <div>
      <app-auth-form (submitted)="registerUser($event)">
        <h1>Register</h1>
        <a routerLink="/auth/login">Already have an account?</a>
        <button type="submit">
          Create account
        </button>
        <div class="error" *ngIf="error">{{error}}</div>
      </app-auth-form>
    </div>`
})
export class RegisterComponent {
  error = '';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  async registerUser(event: FormGroup): Promise<void> {
    const {email, password} = event.value;
    try {
      await this.authService.createUser(email, password);
      await this.router.navigate(['/']);
    } catch (err) {
      this.error = err.message;
    }
  }
}
