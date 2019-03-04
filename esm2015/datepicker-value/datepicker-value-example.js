/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * \@title Datepicker selected value
 */
export class DatepickerValueExample {
    constructor() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
}
DatepickerValueExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-value-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    DatepickerValueExample.prototype.date;
    /** @type {?} */
    DatepickerValueExample.prototype.serializedDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2RhdGVwaWNrZXItdmFsdWUvZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVEzQyxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLDgwQkFBNEM7O2FBRTdDOzs7O0lBRUMsc0NBQW1DOztJQUNuQyxnREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBzZWxlY3RlZCB2YWx1ZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJWYWx1ZUV4YW1wbGUge1xuICBkYXRlID0gbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKCkpO1xuICBzZXJpYWxpemVkRGF0ZSA9IG5ldyBGb3JtQ29udHJvbCgobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSk7XG59XG4iXX0=