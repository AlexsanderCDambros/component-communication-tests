import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private numero: number = 0;

  constructor() { }

  public setNumero(numero: number): void {
    this.numero = numero;
  }

  public getNumero(): number {
    return this.numero;
  }
}
