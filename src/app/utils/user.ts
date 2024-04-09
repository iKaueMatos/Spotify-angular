import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserUtils {
  constructor(private router: Router) { }

  logout(): void {
    this.router.navigate(['/login'])
    localStorage.removeItem('token');
  }
}
