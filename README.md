![first](https://github.com/Gerarca/angular-redux-material/blob/main/docs/angular-redux.png?raw=true)

# Redux

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

This project(counter) is a simple example how we can use [Redux](https://ngrx.io/) on Angular.
![capture](https://github.com/Gerarca/angular-redux-material/blob/main/docs/capture.png?raw=true)

## Angular Material

This Project contains [Angular Material](https://material.angular.io/), you can install in your project using this command:

```
ng add @angular/material
```

then, to organize and outline your proyect, you can use one module specific for configure and add all components that you want, using this command for create one module:
```
ng g m material
```

this command will generate one module in your project

![material](https://github.com/Gerarca/angular-redux-material/blob/main/docs/material.module.png?raw=true)

inside you can configure the commponet [Angular Material](https://material.angular.io/components/categories)

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
```

then, you have to call  `MaterialModule` on `app.module.ts`
```
  imports: [
    MaterialModule
  ],
```

for configure [Redux](https://ngrx.io/) you can do it, first of all creating one folder with name `store` inside of it, you are going to create the actions and reducers files:

```
//counter.actions.ts
import {createAction ,props} from '@ngrx/store'

export const increment = createAction('increment',  props<{payload: {incrementNumber : any;}}>());
export const decrement = createAction('decrement');

export const reset = createAction('reset');
```

```
//counter.reducers.ts
import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from './counter.actions'

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state ,action)=> state + action.payload.incrementNumber),
    on(decrement, (state)=> state -1 ),
    on(reset, (state)=> 0)
)
export function counterReducer(state: any, action: any){
    return _counterReducer(state, action)
}
```

then inside of your `app.module.ts` you call `counter.reducers.ts` file, also you are going to use [StoreModule](https://ngrx.io/api/store/StoreModule), this one's for store the current state of counter:
```
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducers';

@NgModule({
    imports: [
    StoreModule.forRoot({count: counterReducer}),
  ],
})
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
