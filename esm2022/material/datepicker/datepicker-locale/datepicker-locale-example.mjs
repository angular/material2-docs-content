import { Component, Inject } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import 'moment/locale/ja';
import 'moment/locale/fr';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/datepicker";
import * as i5 from "@angular/material/button";
/** @title Datepicker with different locale */
export class DatepickerLocaleExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: DatepickerLocaleExample, deps: [{ token: i1.DateAdapter }, { token: MAT_DATE_LOCALE }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: DatepickerLocaleExample, isStandalone: true, selector: "datepicker-locale-example", providers: [
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
        ], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i4.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i4.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i4.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: DatepickerLocaleExample, decorators: [{
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
                    ], standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule], template: "<mat-form-field>\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLCtCQUErQixHQUNoQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sa0JBQWtCLENBQUM7Ozs7Ozs7QUFFMUIsOENBQThDO0FBc0I5QyxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQ1UsUUFBMEIsRUFDRCxPQUFlO1FBRHhDLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQ0QsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUMvQyxDQUFDO0lBRUosTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDNUIsT0FBTyxZQUFZLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2hDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzhHQWxCVSx1QkFBdUIsNkNBR3hCLGVBQWU7a0dBSGQsdUJBQXVCLHdFQWpCdkI7WUFDVCw2RkFBNkY7WUFDN0YsaUZBQWlGO1lBQ2pGLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO1lBQzdDLCtGQUErRjtZQUMvRiwrRkFBK0Y7WUFDL0YsNkRBQTZEO1lBQzdEO2dCQUNFLE9BQU8sRUFBRSxXQUFXO2dCQUNwQixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7YUFDekQ7WUFDRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7U0FDL0QsMEJDaENILHFYQVFBLHFHRDBCWSxrQkFBa0IsbWdCQUFFLGNBQWMsMFdBQUUsbUJBQW1CLGlnQkFBRSxlQUFlOzsyRkFFdkUsdUJBQXVCO2tCQXJCbkMsU0FBUzsrQkFDRSwyQkFBMkIsYUFHMUI7d0JBQ1QsNkZBQTZGO3dCQUM3RixpRkFBaUY7d0JBQ2pGLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO3dCQUM3QywrRkFBK0Y7d0JBQy9GLCtGQUErRjt3QkFDL0YsNkRBQTZEO3dCQUM3RDs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixDQUFDO3lCQUN6RDt3QkFDRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7cUJBQy9ELGNBQ1csSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQzs7MEJBS2hGLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTUFUX01PTUVOVF9EQVRFX0ZPUk1BVFMsXG4gIE1vbWVudERhdGVBZGFwdGVyLFxuICBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2phJztcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9mcic7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB3aXRoIGRpZmZlcmVudCBsb2NhbGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItbG9jYWxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItbG9jYWxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBUaGUgbG9jYWxlIHdvdWxkIHR5cGljYWxseSBiZSBwcm92aWRlZCBvbiB0aGUgcm9vdCBtb2R1bGUgb2YgeW91ciBhcHBsaWNhdGlvbi4gV2UgZG8gaXQgYXRcbiAgICAvLyB0aGUgY29tcG9uZW50IGxldmVsIGhlcmUsIGR1ZSB0byBsaW1pdGF0aW9ucyBvZiBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfTE9DQUxFLCB1c2VWYWx1ZTogJ2phLUpQJ30sXG4gICAgLy8gYE1vbWVudERhdGVBZGFwdGVyYCBhbmQgYE1BVF9NT01FTlRfREFURV9GT1JNQVRTYCBjYW4gYmUgYXV0b21hdGljYWxseSBwcm92aWRlZCBieSBpbXBvcnRpbmdcbiAgICAvLyBgTWF0TW9tZW50RGF0ZU1vZHVsZWAgaW4geW91ciBhcHBsaWNhdGlvbnMgcm9vdCBtb2R1bGUuIFdlIHByb3ZpZGUgaXQgYXQgdGhlIGNvbXBvbmVudCBsZXZlbFxuICAgIC8vIGhlcmUsIGR1ZSB0byBsaW1pdGF0aW9ucyBvZiBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNdLFxuICAgIH0sXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU30sXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyTG9jYWxlRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2FkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT4sXG4gICAgQEluamVjdChNQVRfREFURV9MT0NBTEUpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nLFxuICApIHt9XG5cbiAgZnJlbmNoKCkge1xuICAgIHRoaXMuX2xvY2FsZSA9ICdmcic7XG4gICAgdGhpcy5fYWRhcHRlci5zZXRMb2NhbGUodGhpcy5fbG9jYWxlKTtcbiAgfVxuXG4gIGdldERhdGVGb3JtYXRTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fbG9jYWxlID09PSAnamEtSlAnKSB7XG4gICAgICByZXR1cm4gJ1lZWVkvTU0vREQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbG9jYWxlID09PSAnZnInKSB7XG4gICAgICByZXR1cm4gJ0REL01NL1lZWVknO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5EaWZmZXJlbnQgbG9jYWxlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcFwiPlxuICA8bWF0LWhpbnQ+e3tnZXREYXRlRm9ybWF0U3RyaW5nKCl9fTwvbWF0LWhpbnQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cImRwXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjZHA+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImZyZW5jaCgpXCI+RHluYW1pY2FsbHkgc3dpdGNoIHRvIEZyZW5jaDwvYnV0dG9uPlxuIl19