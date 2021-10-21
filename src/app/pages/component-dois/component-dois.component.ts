import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-component-dois',
  templateUrl: './component-dois.component.html',
  styleUrls: ['./component-dois.component.css']
})
export class ComponentDoisComponent implements OnInit {

  valorNgrx: number = 0;
  valorRota: number = 0;
  valorService: number =0;

  constructor(
    private store: Store<{
      numeroReducer: any
    }>,
    private router: Router,
    private numberService: NumberService
  ) { 
    this.store.select('numeroReducer').subscribe(
      res => this.valorNgrx = res.numero
    )
    this.valorRota = this.router.getCurrentNavigation()?.extras.state?.valorRota;
    this.valorService = this.numberService.getNumero();
  }

  ngOnInit(): void {
  }

}
