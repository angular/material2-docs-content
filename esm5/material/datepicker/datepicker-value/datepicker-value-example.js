import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/** @title Datepicker selected value */
var DatepickerValueExample = /** @class */ (function () {
    function DatepickerValueExample() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
    DatepickerValueExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-value-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    return DatepickerValueExample;
}());
export { DatepickerValueExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsdUNBQXVDO0FBQ3ZDO0lBQUE7UUFNRSxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsODBCQUE0Qzs7aUJBRTdDOztJQUlELDZCQUFDO0NBQUEsQUFSRCxJQVFDO1NBSFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgc2VsZWN0ZWQgdmFsdWUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyVmFsdWVFeGFtcGxlIHtcbiAgZGF0ZSA9IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSgpKTtcbiAgc2VyaWFsaXplZERhdGUgPSBuZXcgRm9ybUNvbnRyb2woKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkpO1xufVxuIl19