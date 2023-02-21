import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/datepicker";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/forms";
const moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker emulating a Year and month picker */
export class DatepickerViewsSelectionExample {
    constructor() {
        this.date = new FormControl(moment());
    }
    setMonthAndYear(normalizedMonthAndYear, datepicker) {
        const ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonthAndYear.month());
        ctrlValue.year(normalizedMonthAndYear.year());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }
}
DatepickerViewsSelectionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: DatepickerViewsSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerViewsSelectionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: DatepickerViewsSelectionExample, selector: "datepicker-views-selection-example", providers: [
        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
        // application's root module. We provide it at the component level here, due to limitations of
        // our example generation script.
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Month and Year</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-hint>MM/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (monthSelected)=\"setMonthAndYear($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n", styles: [".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"], dependencies: [{ kind: "component", type: i1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: DatepickerViewsSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-views-selection-example', providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ], encapsulation: ViewEncapsulation.None, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Month and Year</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-hint>MM/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (monthSelected)=\"setMonthAndYear($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n", styles: [".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24vZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24vZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSwrQkFBK0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFHdEYsZ0ZBQWdGO0FBQ2hGLDZGQUE2RjtBQUM3RixpR0FBaUc7QUFDakcsMkJBQTJCO0FBQzNCLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLGdEQUFnRDtBQUNoRCxPQUFPLEVBQUMsT0FBTyxJQUFJLGFBQWEsRUFBUyxNQUFNLFFBQVEsQ0FBQzs7Ozs7O0FBRXhELE1BQU0sTUFBTSxHQUFHLGFBQWEsSUFBSSxPQUFPLENBQUM7QUFFeEMsMkRBQTJEO0FBQzNELGlEQUFpRDtBQUNqRCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLFNBQVM7S0FDckI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsU0FBUztRQUNwQixjQUFjLEVBQUUsVUFBVTtRQUMxQixhQUFhLEVBQUUsSUFBSTtRQUNuQixrQkFBa0IsRUFBRSxXQUFXO0tBQ2hDO0NBQ0YsQ0FBQztBQUVGLDBEQUEwRDtBQW1CMUQsTUFBTSxPQUFPLCtCQUErQjtJQWxCNUM7UUFtQkUsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FTbEM7SUFQQyxlQUFlLENBQUMsc0JBQThCLEVBQUUsVUFBaUM7UUFDL0UsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFNLENBQUM7UUFDbkMsU0FBUyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7aUlBVFUsK0JBQStCO3FIQUEvQiwrQkFBK0IsNkRBZC9CO1FBQ1QsNEZBQTRGO1FBQzVGLDhGQUE4RjtRQUM5RixpQ0FBaUM7UUFDakM7WUFDRSxPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQztTQUN6RDtRQUVELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7S0FDbEQsMEJDOUNILHVlQVdBO2dHRHNDYSwrQkFBK0I7a0JBbEIzQyxTQUFTOytCQUNFLG9DQUFvQyxhQUduQzt3QkFDVCw0RkFBNEY7d0JBQzVGLDhGQUE4Rjt3QkFDOUYsaUNBQWlDO3dCQUNqQzs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixDQUFDO3lCQUN6RDt3QkFFRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO3FCQUNsRCxpQkFDYyxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TW9tZW50RGF0ZUFkYXB0ZXIsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG4vLyBEZXBlbmRpbmcgb24gd2hldGhlciByb2xsdXAgaXMgdXNlZCwgbW9tZW50IG5lZWRzIHRvIGJlIGltcG9ydGVkIGRpZmZlcmVudGx5LlxuLy8gU2luY2UgTW9tZW50LmpzIGRvZXNuJ3QgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0LCB3ZSBub3JtYWxseSBuZWVkIHRvIGltcG9ydCB1c2luZyB0aGUgYCogYXNgXG4vLyBzeW50YXguIEhvd2V2ZXIsIHJvbGx1cCBjcmVhdGVzIGEgc3ludGhldGljIGRlZmF1bHQgbW9kdWxlIGFuZCB3ZSB0aHVzIG5lZWQgdG8gaW1wb3J0IGl0IHVzaW5nXG4vLyB0aGUgYGRlZmF1bHQgYXNgIHN5bnRheC5cbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHtkZWZhdWx0IGFzIF9yb2xsdXBNb21lbnQsIE1vbWVudH0gZnJvbSAnbW9tZW50JztcblxuY29uc3QgbW9tZW50ID0gX3JvbGx1cE1vbWVudCB8fCBfbW9tZW50O1xuXG4vLyBTZWUgdGhlIE1vbWVudC5qcyBkb2NzIGZvciB0aGUgbWVhbmluZyBvZiB0aGVzZSBmb3JtYXRzOlxuLy8gaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvZm9ybWF0L1xuZXhwb3J0IGNvbnN0IE1ZX0ZPUk1BVFMgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiAnTU0vWVlZWScsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdNTS9ZWVlZJyxcbiAgICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG59O1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgZW11bGF0aW5nIGEgWWVhciBhbmQgbW9udGggcGlja2VyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLXZpZXdzLXNlbGVjdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXZpZXdzLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gYE1vbWVudERhdGVBZGFwdGVyYCBjYW4gYmUgYXV0b21hdGljYWxseSBwcm92aWRlZCBieSBpbXBvcnRpbmcgYE1vbWVudERhdGVNb2R1bGVgIGluIHlvdXJcbiAgICAvLyBhcHBsaWNhdGlvbidzIHJvb3QgbW9kdWxlLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mXG4gICAgLy8gb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge1xuICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsXG4gICAgICBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFLCBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TXSxcbiAgICB9LFxuXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNWV9GT1JNQVRTfSxcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlclZpZXdzU2VsZWN0aW9uRXhhbXBsZSB7XG4gIGRhdGUgPSBuZXcgRm9ybUNvbnRyb2wobW9tZW50KCkpO1xuXG4gIHNldE1vbnRoQW5kWWVhcihub3JtYWxpemVkTW9udGhBbmRZZWFyOiBNb21lbnQsIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8TW9tZW50Pikge1xuICAgIGNvbnN0IGN0cmxWYWx1ZSA9IHRoaXMuZGF0ZS52YWx1ZSE7XG4gICAgY3RybFZhbHVlLm1vbnRoKG5vcm1hbGl6ZWRNb250aEFuZFllYXIubW9udGgoKSk7XG4gICAgY3RybFZhbHVlLnllYXIobm9ybWFsaXplZE1vbnRoQW5kWWVhci55ZWFyKCkpO1xuICAgIHRoaXMuZGF0ZS5zZXRWYWx1ZShjdHJsVmFsdWUpO1xuICAgIGRhdGVwaWNrZXIuY2xvc2UoKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+TW9udGggYW5kIFllYXI8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwXCIgW2Zvcm1Db250cm9sXT1cImRhdGVcIj5cbiAgPG1hdC1oaW50Pk1NL1lZWVk8L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJkcFwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI2RwXG4gICAgICAgICAgICAgICAgICBzdGFydFZpZXc9XCJtdWx0aS15ZWFyXCJcbiAgICAgICAgICAgICAgICAgIChtb250aFNlbGVjdGVkKT1cInNldE1vbnRoQW5kWWVhcigkZXZlbnQsIGRwKVwiXG4gICAgICAgICAgICAgICAgICBwYW5lbENsYXNzPVwiZXhhbXBsZS1tb250aC1waWNrZXJcIj5cbiAgPC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=