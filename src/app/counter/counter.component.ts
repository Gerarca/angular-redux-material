import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {increment , decrement , reset} from '../store/counter.actions'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$ : Observable<number>;
  constructor(private store: Store<{count : number}>) { 
    this.count$ = store.pipe(select('count')); console.log("Counter: ", this.count$ );
  }
  increment(){
    this.store.dispatch(increment({payload: {incrementNumber : 99999999}}));
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }

  ngOnInit(): void {
  }
}
