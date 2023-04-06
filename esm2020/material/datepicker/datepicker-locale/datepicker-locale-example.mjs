import { Component, Inject } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import 'moment/locale/ja';
import 'moment/locale/fr';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/form-field";
/** @title Datepicker with different locale */
class DatepickerLocaleExample {
    constructor(_adapter, _locale) {
        this._adapter = _adapter;
        this._locale = _locale;
    }
    french() {
        this._locale = 'fr';
        this._adapter.setLocale(this._locale);
    }
    getDateFormatString() {
        if (this._locale === 'ja-JP') {
            return 'YYYY/MM/DD';
        }
        else if (this._locale === 'fr') {
            return 'DD/MM/YYYY';
        }
        return '';
    }
}
DatepickerLocaleExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: DatepickerLocaleExample, deps: [{ token: i1.DateAdapter }, { token: MAT_DATE_LOCALE }], target: i0.ɵɵFactoryTarget.Component });
DatepickerLocaleExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: DatepickerLocaleExample, selector: "datepicker-locale-example", providers: [
        // The locale would typically be provided on the root module of your application. We do it at
        // the component level here, due to limitations of our example generation script.
        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }] });
export { DatepickerLocaleExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: DatepickerLocaleExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-locale-example', providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLCtCQUErQixHQUNoQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEYsT0FBTyxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLGtCQUFrQixDQUFDOzs7Ozs7O0FBRTFCLDhDQUE4QztBQUM5QyxNQW9CYSx1QkFBdUI7SUFDbEMsWUFDVSxRQUEwQixFQUNELE9BQWU7UUFEeEMsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDRCxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQy9DLENBQUM7SUFFSixNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUM1QixPQUFPLFlBQVksQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDaEMsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7OzJIQWxCVSx1QkFBdUIsNkNBR3hCLGVBQWU7K0dBSGQsdUJBQXVCLG9EQWhCdkI7UUFDVCw2RkFBNkY7UUFDN0YsaUZBQWlGO1FBQ2pGLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO1FBRTdDLCtGQUErRjtRQUMvRiwrRkFBK0Y7UUFDL0YsNkRBQTZEO1FBQzdEO1lBQ0UsT0FBTyxFQUFFLFdBQVc7WUFDcEIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7U0FDekQ7UUFDRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7S0FDL0QsMEJDN0JILHlZQVFBO1NEdUJhLHVCQUF1QjtrR0FBdkIsdUJBQXVCO2tCQXBCbkMsU0FBUzsrQkFDRSwyQkFBMkIsYUFHMUI7d0JBQ1QsNkZBQTZGO3dCQUM3RixpRkFBaUY7d0JBQ2pGLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO3dCQUU3QywrRkFBK0Y7d0JBQy9GLCtGQUErRjt3QkFDL0YsNkRBQTZEO3dCQUM3RDs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixDQUFDO3lCQUN6RDt3QkFDRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7cUJBQy9EOzswQkFLRSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1BVF9NT01FTlRfREFURV9GT1JNQVRTLFxuICBNb21lbnREYXRlQWRhcHRlcixcbiAgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9qYSc7XG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZnInO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBkaWZmZXJlbnQgbG9jYWxlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gVGhlIGxvY2FsZSB3b3VsZCB0eXBpY2FsbHkgYmUgcHJvdmlkZWQgb24gdGhlIHJvb3QgbW9kdWxlIG9mIHlvdXIgYXBwbGljYXRpb24uIFdlIGRvIGl0IGF0XG4gICAgLy8gdGhlIGNvbXBvbmVudCBsZXZlbCBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2Ygb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0xPQ0FMRSwgdXNlVmFsdWU6ICdqYS1KUCd9LFxuXG4gICAgLy8gYE1vbWVudERhdGVBZGFwdGVyYCBhbmQgYE1BVF9NT01FTlRfREFURV9GT1JNQVRTYCBjYW4gYmUgYXV0b21hdGljYWxseSBwcm92aWRlZCBieSBpbXBvcnRpbmdcbiAgICAvLyBgTWF0TW9tZW50RGF0ZU1vZHVsZWAgaW4geW91ciBhcHBsaWNhdGlvbnMgcm9vdCBtb2R1bGUuIFdlIHByb3ZpZGUgaXQgYXQgdGhlIGNvbXBvbmVudCBsZXZlbFxuICAgIC8vIGhlcmUsIGR1ZSB0byBsaW1pdGF0aW9ucyBvZiBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNdLFxuICAgIH0sXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU30sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJMb2NhbGVFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55PixcbiAgICBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcsXG4gICkge31cblxuICBmcmVuY2goKSB7XG4gICAgdGhpcy5fbG9jYWxlID0gJ2ZyJztcbiAgICB0aGlzLl9hZGFwdGVyLnNldExvY2FsZSh0aGlzLl9sb2NhbGUpO1xuICB9XG5cbiAgZ2V0RGF0ZUZvcm1hdFN0cmluZygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9sb2NhbGUgPT09ICdqYS1KUCcpIHtcbiAgICAgIHJldHVybiAnWVlZWS9NTS9ERCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9sb2NhbGUgPT09ICdmcicpIHtcbiAgICAgIHJldHVybiAnREQvTU0vWVlZWSc7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+RGlmZmVyZW50IGxvY2FsZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHBcIj5cbiAgPG1hdC1oaW50Pnt7Z2V0RGF0ZUZvcm1hdFN0cmluZygpfX08L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJkcFwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI2RwPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJmcmVuY2goKVwiPkR5bmFtaWNhbGx5IHN3aXRjaCB0byBGcmVuY2g8L2J1dHRvbj5cbiJdfQ==