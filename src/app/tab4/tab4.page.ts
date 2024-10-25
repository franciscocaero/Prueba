import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  solucion: string = '';

  constructor() {}

  discrim(a: number, b: number, c: number): number {
    return (b * b - 4 * a * c);
  }

  solucionar(a: number, b: number, c: number): string {
    let disc = this.discrim(a, b, c);
    let sol: number[] = [];
    if (disc < 0) {
      return "Sin solución real";
    } else {
      sol[0] = (-b + Math.sqrt(disc)) / (2 * a);
      sol[1] = (-b - Math.sqrt(disc)) / (2 * a);
      return sol.join(', ');
    }
  }

  actualizarSolucion() {
    this.solucion = this.solucionar(this.a, this.b, this.c);
  }
}
