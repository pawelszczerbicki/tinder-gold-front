import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('token') token: ElementRef;
  loading;
  error;
  users;

  constructor(private http: HttpClient) {
  }

  fetchUsers() {
    this.loading = true;
    const token = this.token.nativeElement.value;
    this.http.post(`${environment.apiUrl}/tinder`, {token}).toPromise()
      .then(res => this.users = res)
      .catch(() => this.error = true)
      .finally(() => this.loading = false);
  }
}
