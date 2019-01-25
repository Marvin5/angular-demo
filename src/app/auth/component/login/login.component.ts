import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OauthResponseDto } from '../../dto/oauth.dto';
import { RequestParam } from '../../constant/oauth.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let formValue = this.validateForm.getRawValue();

    let formData = new FormData();
    formData.set(RequestParam.clientId, clientId);
    formData.set(RequestParam.clientSecret, 'secret');
    formData.set(RequestParam.grantType, grantTypePassword);
    formData.set(RequestParam.username, formValue.userName);
    formData.set(RequestParam.password, formValue.password);
    this.http.post('//localhost:7070/oauth/token', formData).subscribe((data: OauthResponseDto) => {
      localStorage.setItem('refresh_token', data.refresh_token);
      console.log(data);
    });
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    // 模拟自动登陆
    let refreshToken = localStorage.getItem('refresh_token');
    let formData = new FormData();

  }
}
