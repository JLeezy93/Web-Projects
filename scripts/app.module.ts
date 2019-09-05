import angular from 'angular';
import { OutputComponent } from "./output.component";



export const AppModule = angular
  .module('AppModule', [])
  .component('output', OutputComponent)
  .transclude = 'true';
