import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CompDirective } from './comp.directive';
import { initialConfig, NgxMaskModule } from 'ngx-mask';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [AppComponent, TestComponent, CompDirective],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    IMaskModule,
    NgxMaskModule.forRoot({
      ...initialConfig,
      patterns: {
        ...initialConfig.patterns,
        // NOTE: optional letter
        O: { pattern: new RegExp(/[a-zA-Z ]/), optional: true },
        // NOTE: everything but ' and "
        Q: { pattern: new RegExp(/[^'"]/) },
        // NOTE: everything but ' and " and space
        T: { pattern: new RegExp(/[^'" ]/) },
        N: { pattern: new RegExp(/[1-9]/) },
      },
      // separatorLimit: '1' + '0'.repeat(15),
    }),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
