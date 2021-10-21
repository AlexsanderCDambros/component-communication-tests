import { salvarNumero } from './../../state-management/actions/actions';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-component-um',
  templateUrl: './component-um.component.html',
  styleUrls: ['./component-um.component.css']
})
export class ComponentUmComponent implements OnInit {

  constructor(
    private store: Store<any>,
    private router: Router,
    private numberService: NumberService
  ) { }

  ngOnInit(): void {
  }

  enviaNgrx(i: number) {
    this.store.dispatch(salvarNumero({ numero: i }))
    this.router.navigate(['/dois']);
  }

  enviaService(i: number) {
    this.numberService.setNumero(i);
    this.router.navigate(['/dois']);
  }
}
