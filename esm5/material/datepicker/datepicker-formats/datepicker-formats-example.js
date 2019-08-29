import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
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
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n",
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ],
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerFormatsExample;
}());
export { DatepickerFormatsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1mb3JtYXRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWZvcm1hdHMvZGF0ZXBpY2tlci1mb3JtYXRzLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RixnRkFBZ0Y7QUFDaEYsNkZBQTZGO0FBQzdGLGlHQUFpRztBQUNqRywyQkFBMkI7QUFDM0IsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsZ0RBQWdEO0FBQ2hELE9BQU8sRUFBQyxPQUFPLElBQUksYUFBYSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRWhELElBQU0sTUFBTSxHQUFHLGFBQWEsSUFBSSxPQUFPLENBQUM7QUFFeEMsMkRBQTJEO0FBQzNELGlEQUFpRDtBQUNqRCxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLElBQUk7S0FDaEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsSUFBSTtRQUNmLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7Q0FDRixDQUFDO0FBRUYsNENBQTRDO0FBQzVDO0lBQUE7UUFjRSxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFmQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMseVFBQThDO29CQUU5QyxTQUFTLEVBQUU7d0JBQ1QsNEZBQTRGO3dCQUM1Riw4RkFBOEY7d0JBQzlGLGlDQUFpQzt3QkFDakMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBQzt3QkFFNUUsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztxQkFDbEQ7O2lCQUNGOztJQUdELCtCQUFDO0NBQUEsQUFmRCxJQWVDO1NBRlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNb21lbnREYXRlQWRhcHRlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLy8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgcm9sbHVwIGlzIHVzZWQsIG1vbWVudCBuZWVkcyB0byBiZSBpbXBvcnRlZCBkaWZmZXJlbnRseS5cbi8vIFNpbmNlIE1vbWVudC5qcyBkb2Vzbid0IGhhdmUgYSBkZWZhdWx0IGV4cG9ydCwgd2Ugbm9ybWFsbHkgbmVlZCB0byBpbXBvcnQgdXNpbmcgdGhlIGAqIGFzYFxuLy8gc3ludGF4LiBIb3dldmVyLCByb2xsdXAgY3JlYXRlcyBhIHN5bnRoZXRpYyBkZWZhdWx0IG1vZHVsZSBhbmQgd2UgdGh1cyBuZWVkIHRvIGltcG9ydCBpdCB1c2luZ1xuLy8gdGhlIGBkZWZhdWx0IGFzYCBzeW50YXguXG5pbXBvcnQgKiBhcyBfbW9tZW50IGZyb20gJ21vbWVudCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7ZGVmYXVsdCBhcyBfcm9sbHVwTW9tZW50fSBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb21lbnQgPSBfcm9sbHVwTW9tZW50IHx8IF9tb21lbnQ7XG5cbi8vIFNlZSB0aGUgTW9tZW50LmpzIGRvY3MgZm9yIHRoZSBtZWFuaW5nIG9mIHRoZXNlIGZvcm1hdHM6XG4vLyBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9mb3JtYXQvXG5leHBvcnQgY29uc3QgTVlfRk9STUFUUyA9IHtcbiAgcGFyc2U6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXG4gICAgZGF0ZUExMXlMYWJlbDogJ0xMJyxcbiAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxuICB9LFxufTtcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGZvcm1hdHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWZvcm1hdHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBgTW9tZW50RGF0ZUFkYXB0ZXJgIGNhbiBiZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5IGltcG9ydGluZyBgTW9tZW50RGF0ZU1vZHVsZWAgaW4geW91clxuICAgIC8vIGFwcGxpY2F0aW9uJ3Mgcm9vdCBtb2R1bGUuIFdlIHByb3ZpZGUgaXQgYXQgdGhlIGNvbXBvbmVudCBsZXZlbCBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2ZcbiAgICAvLyBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7cHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlciwgZGVwczogW01BVF9EQVRFX0xPQ0FMRV19LFxuXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNWV9GT1JNQVRTfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckZvcm1hdHNFeGFtcGxlIHtcbiAgZGF0ZSA9IG5ldyBGb3JtQ29udHJvbChtb21lbnQoKSk7XG59XG4iXX0=