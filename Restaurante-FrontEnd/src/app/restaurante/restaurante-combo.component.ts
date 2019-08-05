import {Component, Input, OnInit} from '@angular/core';
import {forwardRef} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors,Validator} from '@angular/forms';

// Provider
import {ApiService} from '../api.service';

@Component({
  selector: 'app-restaurante-combo',
  templateUrl: './restaurante-combo.component.html',
  exportAs: 'ngModel',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RestauranteComboComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RestauranteComboComponent),
      multi: true,
    }]
})
export class RestauranteComboComponent implements OnInit, ControlValueAccessor, Validator {
  protected restaurantes
  protected restaurante: number;

  constructor(private restaurantService: ApiService) { }

  ngOnInit() {
    this.restaurantService.getRestaurantes().subscribe(
      (data) => {
        this.restaurantes = data;
      }
    );
  }

  onChange(select) {
    this.propagateChange( select.value );
  }

  writeValue(obj: any): void {
    if (obj) {
      this.restaurante = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  validate(c: AbstractControl): ValidationErrors | any {
    return this.restaurante !== undefined;
  }

  private propagateChange = (_: any) => { };
}