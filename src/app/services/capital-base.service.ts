import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapitalBaseService {

  constructor() {}

  Get(): number {
    const local = localStorage.getItem('capitalMonto') as unknown as number;
    return +local;
  }

  Set(capitalMonto: number): void {
    localStorage.setItem('capitalMonto', capitalMonto.toString());
  }
}
