# Card

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Create Credit/Debit Card using `ngx-card`
Install through npm:
   `npm install --save ngx-card`
   
## Usage

Once installed you need to import our main module into yours. You should end up with code similar to this:
```
import { NgModule } from '@angular/core';
import { CardModule } from 'ngx-card/ngx-card';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    ....,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## add card.css and card.js inside `angular.json` following code:

```
"styles": [
      ...,
      "node_modules/card/dist/card.css"
 ],
 "scripts": [
      "node_modules/card/dist/card.js"
 ],
 ```
## Functionality overview
1) if user eneter any card details automatically detect card type.
2) all required validation in card details.

## Some screenshot

![Screenshot (94)](https://user-images.githubusercontent.com/29365336/57570215-54609480-741d-11e9-896d-b5bf198399b6.png)
![Screenshot (95)](https://user-images.githubusercontent.com/29365336/57570217-5aef0c00-741d-11e9-8d3f-f484f1764bf3.png)
![Screenshot (96)](https://user-images.githubusercontent.com/29365336/57570226-65a9a100-741d-11e9-9c41-635d5d4233fb.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
