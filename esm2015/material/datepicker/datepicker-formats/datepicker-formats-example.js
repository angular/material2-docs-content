/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/datepicker-formats/datepicker-formats-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/forms";
/** @type {?} */
const moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
/** @type {?} */
export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/**
 * \@title Datepicker with custom formats
 */
export class DatepickerFormatsExample {
    constructor() {
        this.date = new FormControl(moment());
    }
}
DatepickerFormatsExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-formats-example',
                templateUrl: 'datepicker-formats-example.html',
                styleUrls: ['datepicker-formats-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ],
            },] },
];
/** @nocollapse */ DatepickerFormatsExample.ɵfac = function DatepickerFormatsExample_Factory(t) { return new (t || DatepickerFormatsExample)(); };
/** @nocollapse */ DatepickerFormatsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFormatsExample, selectors: [["datepicker-formats-example"]], features: [i0.ɵɵProvidersFeature([
            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
            // application's root module. We provide it at the component level here, due to limitations of
            // our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        ])], decls: 7, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerFormatsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Verbose datepicker");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 0);
        i0.ɵɵelement(4, "mat-datepicker-toggle", 1);
        i0.ɵɵelement(5, "mat-datepicker", null, 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r21 = i0.ɵɵreference(6);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matDatepicker", _r21)("formControl", ctx.date);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r21);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerFormatsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-formats-example',
                templateUrl: 'datepicker-formats-example.html',
                styleUrls: ['datepicker-formats-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerFormatsExample.prototype.date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1mb3JtYXRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZm9ybWF0cy9kYXRlcGlja2VyLWZvcm1hdHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1mb3JtYXRzL2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsK0JBQStCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRyxPQUFPLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU10RixPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7QUFFbEMsT0FBTyxFQUFDLE9BQU8sSUFBSSxhQUFhLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7TUFFMUMsTUFBTSxHQUFHLGFBQWEsSUFBSSxPQUFPOzs7O0FBSXZDLE1BQU0sT0FBTyxVQUFVLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLElBQUk7S0FDaEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsSUFBSTtRQUNmLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7Q0FDRjs7OztBQW9CRCxNQUFNLE9BQU8sd0JBQXdCO0lBakJyQztRQWtCRSxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUNsQzs7O1lBbkJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsU0FBUyxFQUFFO29CQUNULDRGQUE0RjtvQkFDNUYsOEZBQThGO29CQUM5RixpQ0FBaUM7b0JBQ2pDO3dCQUNFLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7cUJBQ3pEO29CQUVELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7aUJBQ2xEO2FBQ0Y7O2dHQUNZLHdCQUF3Qjs2REFBeEIsd0JBQXdCLGdGQWJ4QjtZQUNULDRGQUE0RjtZQUM1Riw4RkFBOEY7WUFDOUYsaUNBQWlDO1lBQ2pDO2dCQUNFLE9BQU8sRUFBRSxXQUFXO2dCQUNwQixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7YUFDekQ7WUFFRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO1NBQ2xEO1FDN0NILHNDQUNFO1FBQUEsaUNBQVc7UUFBQSxrQ0FBa0I7UUFBQSxpQkFBWTtRQUN6QywyQkFDQTtRQUFBLDJDQUFvRTtRQUNwRSwwQ0FBcUM7UUFDdkMsaUJBQWlCOzs7UUFIQyxlQUFvQjtRQUFwQixvQ0FBb0IseUJBQUE7UUFDSCxlQUFVO1FBQVYsMEJBQVU7O2tERDRDaEMsd0JBQXdCO2NBakJwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzdDLFNBQVMsRUFBRTtvQkFDVCw0RkFBNEY7b0JBQzVGLDhGQUE4RjtvQkFDOUYsaUNBQWlDO29CQUNqQzt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixDQUFDO3FCQUN6RDtvQkFFRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO2lCQUNsRDthQUNGOzs7O0lBRUMsd0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNb21lbnREYXRlQWRhcHRlciwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLy8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgcm9sbHVwIGlzIHVzZWQsIG1vbWVudCBuZWVkcyB0byBiZSBpbXBvcnRlZCBkaWZmZXJlbnRseS5cbi8vIFNpbmNlIE1vbWVudC5qcyBkb2Vzbid0IGhhdmUgYSBkZWZhdWx0IGV4cG9ydCwgd2Ugbm9ybWFsbHkgbmVlZCB0byBpbXBvcnQgdXNpbmcgdGhlIGAqIGFzYFxuLy8gc3ludGF4LiBIb3dldmVyLCByb2xsdXAgY3JlYXRlcyBhIHN5bnRoZXRpYyBkZWZhdWx0IG1vZHVsZSBhbmQgd2UgdGh1cyBuZWVkIHRvIGltcG9ydCBpdCB1c2luZ1xuLy8gdGhlIGBkZWZhdWx0IGFzYCBzeW50YXguXG5pbXBvcnQgKiBhcyBfbW9tZW50IGZyb20gJ21vbWVudCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7ZGVmYXVsdCBhcyBfcm9sbHVwTW9tZW50fSBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb21lbnQgPSBfcm9sbHVwTW9tZW50IHx8IF9tb21lbnQ7XG5cbi8vIFNlZSB0aGUgTW9tZW50LmpzIGRvY3MgZm9yIHRoZSBtZWFuaW5nIG9mIHRoZXNlIGZvcm1hdHM6XG4vLyBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9mb3JtYXQvXG5leHBvcnQgY29uc3QgTVlfRk9STUFUUyA9IHtcbiAgcGFyc2U6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXG4gICAgZGF0ZUExMXlMYWJlbDogJ0xMJyxcbiAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxuICB9LFxufTtcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGZvcm1hdHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWZvcm1hdHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBgTW9tZW50RGF0ZUFkYXB0ZXJgIGNhbiBiZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5IGltcG9ydGluZyBgTW9tZW50RGF0ZU1vZHVsZWAgaW4geW91clxuICAgIC8vIGFwcGxpY2F0aW9uJ3Mgcm9vdCBtb2R1bGUuIFdlIHByb3ZpZGUgaXQgYXQgdGhlIGNvbXBvbmVudCBsZXZlbCBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2ZcbiAgICAvLyBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNdXG4gICAgfSxcblxuICAgIHtwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLCB1c2VWYWx1ZTogTVlfRk9STUFUU30sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJGb3JtYXRzRXhhbXBsZSB7XG4gIGRhdGUgPSBuZXcgRm9ybUNvbnRyb2wobW9tZW50KCkpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlZlcmJvc2UgZGF0ZXBpY2tlcjwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHBcIiBbZm9ybUNvbnRyb2xdPVwiZGF0ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImRwXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjZHA+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=