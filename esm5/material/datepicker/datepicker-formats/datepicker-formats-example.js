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
var _c0 = ["dp", ""];
var moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export var MY_FORMATS = {
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
/** @title Datepicker with custom formats */
var DatepickerFormatsExample = /** @class */ (function () {
    function DatepickerFormatsExample() {
        this.date = new FormControl(moment());
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
    DatepickerFormatsExample.ɵfac = function DatepickerFormatsExample_Factory(t) { return new (t || DatepickerFormatsExample)(); };
    DatepickerFormatsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFormatsExample, selectors: [["datepicker-formats-example"]], features: [i0.ɵɵProvidersFeature([
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Verbose datepicker", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"]], template: function DatepickerFormatsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelement(1, "input", 0);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(3, "mat-datepicker", null, _c0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r14 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r14)("formControl", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r14);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerFormatsExample;
}());
export { DatepickerFormatsExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerFormatsExample, [{
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
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1mb3JtYXRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZm9ybWF0cy9kYXRlcGlja2VyLWZvcm1hdHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1mb3JtYXRzL2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFFLCtCQUErQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDcEcsT0FBTyxFQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RixnRkFBZ0Y7QUFDaEYsNkZBQTZGO0FBQzdGLGlHQUFpRztBQUNqRywyQkFBMkI7QUFDM0IsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsZ0RBQWdEO0FBQ2hELE9BQU8sRUFBQyxPQUFPLElBQUksYUFBYSxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0FBRWhELElBQU0sTUFBTSxHQUFHLGFBQWEsSUFBSSxPQUFPLENBQUM7QUFFeEMsMkRBQTJEO0FBQzNELGlEQUFpRDtBQUNqRCxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLElBQUk7S0FDaEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsSUFBSTtRQUNmLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7Q0FDRixDQUFDO0FBRUYsNENBQTRDO0FBQzVDO0lBQUE7UUFrQkUsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDbEM7O2dCQW5CQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzdDLFNBQVMsRUFBRTt3QkFDVCw0RkFBNEY7d0JBQzVGLDhGQUE4Rjt3QkFDOUYsaUNBQWlDO3dCQUNqQzs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixDQUFDO3lCQUN6RDt3QkFFRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO3FCQUNsRDtpQkFDRjs7b0dBQ1ksd0JBQXdCO2lFQUF4Qix3QkFBd0IsZ0ZBYnhCO2dCQUNULDRGQUE0RjtnQkFDNUYsOEZBQThGO2dCQUM5RixpQ0FBaUM7Z0JBQ2pDO29CQUNFLE9BQU8sRUFBRSxXQUFXO29CQUNwQixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7aUJBQ3pEO2dCQUVELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7YUFDbEQ7WUM3Q0gsc0NBQ0U7WUFBQSwyQkFDQTtZQUFBLDJDQUFvRTtZQUNwRSw0Q0FBcUM7WUFDdkMsaUJBQWlCOzs7WUFIQyxlQUFvQjtZQUFwQixvQ0FBb0IseUJBQUE7WUFDSCxlQUFVO1lBQVYsMEJBQVU7O21DREY3QztDQWlEQyxBQW5CRCxJQW1CQztTQUZZLHdCQUF3QjttQ0FBeEIsd0JBQXdCO2NBakJwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzdDLFNBQVMsRUFBRTtvQkFDVCw0RkFBNEY7b0JBQzVGLDhGQUE4RjtvQkFDOUYsaUNBQWlDO29CQUNqQzt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixDQUFDO3FCQUN6RDtvQkFFRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO2lCQUNsRDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNb21lbnREYXRlQWRhcHRlciwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLy8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgcm9sbHVwIGlzIHVzZWQsIG1vbWVudCBuZWVkcyB0byBiZSBpbXBvcnRlZCBkaWZmZXJlbnRseS5cbi8vIFNpbmNlIE1vbWVudC5qcyBkb2Vzbid0IGhhdmUgYSBkZWZhdWx0IGV4cG9ydCwgd2Ugbm9ybWFsbHkgbmVlZCB0byBpbXBvcnQgdXNpbmcgdGhlIGAqIGFzYFxuLy8gc3ludGF4LiBIb3dldmVyLCByb2xsdXAgY3JlYXRlcyBhIHN5bnRoZXRpYyBkZWZhdWx0IG1vZHVsZSBhbmQgd2UgdGh1cyBuZWVkIHRvIGltcG9ydCBpdCB1c2luZ1xuLy8gdGhlIGBkZWZhdWx0IGFzYCBzeW50YXguXG5pbXBvcnQgKiBhcyBfbW9tZW50IGZyb20gJ21vbWVudCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7ZGVmYXVsdCBhcyBfcm9sbHVwTW9tZW50fSBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb21lbnQgPSBfcm9sbHVwTW9tZW50IHx8IF9tb21lbnQ7XG5cbi8vIFNlZSB0aGUgTW9tZW50LmpzIGRvY3MgZm9yIHRoZSBtZWFuaW5nIG9mIHRoZXNlIGZvcm1hdHM6XG4vLyBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9mb3JtYXQvXG5leHBvcnQgY29uc3QgTVlfRk9STUFUUyA9IHtcbiAgcGFyc2U6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXG4gICAgZGF0ZUExMXlMYWJlbDogJ0xMJyxcbiAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxuICB9LFxufTtcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGZvcm1hdHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWZvcm1hdHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBgTW9tZW50RGF0ZUFkYXB0ZXJgIGNhbiBiZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5IGltcG9ydGluZyBgTW9tZW50RGF0ZU1vZHVsZWAgaW4geW91clxuICAgIC8vIGFwcGxpY2F0aW9uJ3Mgcm9vdCBtb2R1bGUuIFdlIHByb3ZpZGUgaXQgYXQgdGhlIGNvbXBvbmVudCBsZXZlbCBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2ZcbiAgICAvLyBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNdXG4gICAgfSxcblxuICAgIHtwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLCB1c2VWYWx1ZTogTVlfRk9STUFUU30sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJGb3JtYXRzRXhhbXBsZSB7XG4gIGRhdGUgPSBuZXcgRm9ybUNvbnRyb2wobW9tZW50KCkpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHBcIiBwbGFjZWhvbGRlcj1cIlZlcmJvc2UgZGF0ZXBpY2tlclwiIFtmb3JtQ29udHJvbF09XCJkYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZHBcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNkcD48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==