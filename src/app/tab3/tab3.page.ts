import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  primeraFecha: string = ''; 
  fechaFinal: string = '';  
  diferencia: string = '';

  constructor() {}

  calcularDiferencia() {
    const fecha1 = new Date(this.primeraFecha);
    const fecha2 = new Date(this.fechaFinal);
    if (fecha1 && fecha2) {
      const diferencia = fecha2.getTime() - fecha1.getTime();
      const diferenciaFin = diferencia / (1000 * 3600 * 24);
      this.diferencia = diferenciaFin.toString();
    } else {
      this.diferencia = '';
    }
  }
}

