import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/** @title Datepicker selected value */
var DatepickerValueExample = /** @class */ (function () {
    function DatepickerValueExample() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
    DatepickerValueExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-value-example',
            template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n",
            styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
        })
    ], DatepickerValueExample);
    return DatepickerValueExample;
}());
export { DatepickerValueExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2RhdGVwaWNrZXItdmFsdWUvZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyx1Q0FBdUM7QUFNdkM7SUFMQTtRQU1FLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFIWSxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyw4MEJBQTRDOztTQUU3QyxDQUFDO09BQ1csc0JBQXNCLENBR2xDO0lBQUQsNkJBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBzZWxlY3RlZCB2YWx1ZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJWYWx1ZUV4YW1wbGUge1xuICBkYXRlID0gbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKCkpO1xuICBzZXJpYWxpemVkRGF0ZSA9IG5ldyBGb3JtQ29udHJvbCgobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSk7XG59XG4iXX0=