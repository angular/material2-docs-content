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
var DatepickerViewsSelectionExample = /** @class */ (function () {
    function DatepickerViewsSelectionExample() {
        this.date = new FormControl(moment());
    }
    DatepickerViewsSelectionExample.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    };
    DatepickerViewsSelectionExample.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    };
    DatepickerViewsSelectionExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-views-selection-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Month and Year\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (yearSelected)=\"chosenYearHandler($event)\"\n                  (monthSelected)=\"chosenMonthHandler($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n",
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ],
                    styles: [".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"]
                }] }
    ];
    return DatepickerViewsSelectionExample;
}());
export { DatepickerViewsSelectionExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItdmlld3Mtc2VsZWN0aW9uL2RhdGVwaWNrZXItdmlld3Mtc2VsZWN0aW9uLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUd0RixnRkFBZ0Y7QUFDaEYsNkZBQTZGO0FBQzdGLGlHQUFpRztBQUNqRywyQkFBMkI7QUFDM0IsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsZ0RBQWdEO0FBQ2hELE9BQU8sRUFBQyxPQUFPLElBQUksYUFBYSxFQUFTLE1BQU0sUUFBUSxDQUFDO0FBRXhELElBQU0sTUFBTSxHQUFHLGFBQWEsSUFBSSxPQUFPLENBQUM7QUFFeEMsMkRBQTJEO0FBQzNELGlEQUFpRDtBQUNqRCxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLFNBQVM7S0FDckI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsU0FBUztRQUNwQixjQUFjLEVBQUUsVUFBVTtRQUMxQixhQUFhLEVBQUUsSUFBSTtRQUNuQixrQkFBa0IsRUFBRSxXQUFXO0tBQ2hDO0NBQ0YsQ0FBQztBQUVGLDBEQUEwRDtBQUMxRDtJQUFBO1FBY0UsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFjbkMsQ0FBQztJQVpDLDJEQUFpQixHQUFqQixVQUFrQixjQUFzQjtRQUN0QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw0REFBa0IsR0FBbEIsVUFBbUIsZUFBdUIsRUFBRSxVQUFpQztRQUMzRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQ0FBb0M7b0JBQzlDLGtmQUFzRDtvQkFFdEQsU0FBUyxFQUFFO3dCQUNULDRGQUE0Rjt3QkFDNUYsOEZBQThGO3dCQUM5RixpQ0FBaUM7d0JBQ2pDLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUM7d0JBRTVFLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7cUJBQ2xEOztpQkFDRjs7SUFnQkQsc0NBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQWZZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TW9tZW50RGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG4vLyBEZXBlbmRpbmcgb24gd2hldGhlciByb2xsdXAgaXMgdXNlZCwgbW9tZW50IG5lZWRzIHRvIGJlIGltcG9ydGVkIGRpZmZlcmVudGx5LlxuLy8gU2luY2UgTW9tZW50LmpzIGRvZXNuJ3QgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0LCB3ZSBub3JtYWxseSBuZWVkIHRvIGltcG9ydCB1c2luZyB0aGUgYCogYXNgXG4vLyBzeW50YXguIEhvd2V2ZXIsIHJvbGx1cCBjcmVhdGVzIGEgc3ludGhldGljIGRlZmF1bHQgbW9kdWxlIGFuZCB3ZSB0aHVzIG5lZWQgdG8gaW1wb3J0IGl0IHVzaW5nXG4vLyB0aGUgYGRlZmF1bHQgYXNgIHN5bnRheC5cbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHtkZWZhdWx0IGFzIF9yb2xsdXBNb21lbnQsIE1vbWVudH0gZnJvbSAnbW9tZW50JztcblxuY29uc3QgbW9tZW50ID0gX3JvbGx1cE1vbWVudCB8fCBfbW9tZW50O1xuXG4vLyBTZWUgdGhlIE1vbWVudC5qcyBkb2NzIGZvciB0aGUgbWVhbmluZyBvZiB0aGVzZSBmb3JtYXRzOlxuLy8gaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvZm9ybWF0L1xuZXhwb3J0IGNvbnN0IE1ZX0ZPUk1BVFMgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiAnTU0vWVlZWScsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdNTS9ZWVlZJyxcbiAgICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG59O1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgZW11bGF0aW5nIGEgWWVhciBhbmQgbW9udGggcGlja2VyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLXZpZXdzLXNlbGVjdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXZpZXdzLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gYE1vbWVudERhdGVBZGFwdGVyYCBjYW4gYmUgYXV0b21hdGljYWxseSBwcm92aWRlZCBieSBpbXBvcnRpbmcgYE1vbWVudERhdGVNb2R1bGVgIGluIHlvdXJcbiAgICAvLyBhcHBsaWNhdGlvbidzIHJvb3QgbW9kdWxlLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mXG4gICAgLy8gb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge3Byb3ZpZGU6IERhdGVBZGFwdGVyLCB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdfSxcblxuICAgIHtwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLCB1c2VWYWx1ZTogTVlfRk9STUFUU30sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJWaWV3c1NlbGVjdGlvbkV4YW1wbGUge1xuICBkYXRlID0gbmV3IEZvcm1Db250cm9sKG1vbWVudCgpKTtcblxuICBjaG9zZW5ZZWFySGFuZGxlcihub3JtYWxpemVkWWVhcjogTW9tZW50KSB7XG4gICAgY29uc3QgY3RybFZhbHVlID0gdGhpcy5kYXRlLnZhbHVlO1xuICAgIGN0cmxWYWx1ZS55ZWFyKG5vcm1hbGl6ZWRZZWFyLnllYXIoKSk7XG4gICAgdGhpcy5kYXRlLnNldFZhbHVlKGN0cmxWYWx1ZSk7XG4gIH1cblxuICBjaG9zZW5Nb250aEhhbmRsZXIobm9ybWFsaXplZE1vbnRoOiBNb21lbnQsIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8TW9tZW50Pikge1xuICAgIGNvbnN0IGN0cmxWYWx1ZSA9IHRoaXMuZGF0ZS52YWx1ZTtcbiAgICBjdHJsVmFsdWUubW9udGgobm9ybWFsaXplZE1vbnRoLm1vbnRoKCkpO1xuICAgIHRoaXMuZGF0ZS5zZXRWYWx1ZShjdHJsVmFsdWUpO1xuICAgIGRhdGVwaWNrZXIuY2xvc2UoKTtcbiAgfVxufVxuIl19