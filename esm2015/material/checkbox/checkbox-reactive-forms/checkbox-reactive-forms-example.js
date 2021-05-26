import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/common";
/** @title Checkboxes with reactive forms */
export class CheckboxReactiveFormsExample {
    constructor(fb) {
        this.toppings = fb.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false
        });
    }
}
CheckboxReactiveFormsExample.ɵfac = function CheckboxReactiveFormsExample_Factory(t) { return new (t || CheckboxReactiveFormsExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
CheckboxReactiveFormsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxReactiveFormsExample, selectors: [["checkbox-reactive-forms-example"]], decls: 17, vars: 5, consts: [[1, "example-section", 3, "formGroup"], ["formControlName", "pepperoni"], ["formControlName", "extracheese"], ["formControlName", "mushroom"]], template: function CheckboxReactiveFormsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "Select your toppings:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵelementStart(4, "mat-checkbox", 1);
        i0.ɵɵtext(5, "Pepperoni");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵelementStart(7, "mat-checkbox", 2);
        i0.ɵɵtext(8, "Extra Cheese");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵelementStart(10, "mat-checkbox", 3);
        i0.ɵɵtext(11, "Mushroom");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "section", 0);
        i0.ɵɵelementStart(13, "h4");
        i0.ɵɵtext(14, "You chose:");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(15);
        i0.ɵɵpipe(16, "json");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.toppings);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("formGroup", ctx.toppings);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 3, ctx.toppings.value), "\n");
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatCheckbox, i1.NgControlStatus, i1.FormControlName], pipes: [i3.JsonPipe], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxReactiveFormsExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-reactive-forms-example',
                templateUrl: 'checkbox-reactive-forms-example.html',
                styleUrls: ['checkbox-reactive-forms-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zL2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXRELDRDQUE0QztBQU01QyxNQUFNLE9BQU8sNEJBQTRCO0lBR3ZDLFlBQVksRUFBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7d0dBVFUsNEJBQTRCOytFQUE1Qiw0QkFBNEI7UUNUekMsa0NBQXdEO1FBQ3RELDBCQUFJO1FBQUEscUNBQXFCO1FBQUEsaUJBQUs7UUFDOUIseUJBQUc7UUFBQSx1Q0FBMEM7UUFBQSx5QkFBUztRQUFBLGlCQUFlO1FBQUEsaUJBQUk7UUFDekUseUJBQUc7UUFBQSx1Q0FBNEM7UUFBQSw0QkFBWTtRQUFBLGlCQUFlO1FBQUEsaUJBQUk7UUFDOUUseUJBQUc7UUFBQSx3Q0FBeUM7UUFBQSx5QkFBUTtRQUFBLGlCQUFlO1FBQUEsaUJBQUk7UUFDekUsaUJBQVU7UUFFVixtQ0FBd0Q7UUFDdEQsMkJBQUk7UUFBQSwyQkFBVTtRQUFBLGlCQUFLO1FBQ25CLGFBQ0Y7O1FBQUEsaUJBQVU7O1FBVnVCLHdDQUFzQjtRQU90QixnQkFBc0I7UUFBdEIsd0NBQXNCO1FBRXJELGVBQ0Y7UUFERSwyRUFDRjs7dUZERGEsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIENoZWNrYm94ZXMgd2l0aCByZWFjdGl2ZSBmb3JtcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZSB7XG4gIHRvcHBpbmdzOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy50b3BwaW5ncyA9IGZiLmdyb3VwKHtcbiAgICAgIHBlcHBlcm9uaTogZmFsc2UsXG4gICAgICBleHRyYWNoZWVzZTogZmFsc2UsXG4gICAgICBtdXNocm9vbTogZmFsc2VcbiAgICB9KTtcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIiBbZm9ybUdyb3VwXT1cInRvcHBpbmdzXCI+XG4gIDxoND5TZWxlY3QgeW91ciB0b3BwaW5nczo8L2g0PlxuICA8cD48bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cInBlcHBlcm9uaVwiPlBlcHBlcm9uaTwvbWF0LWNoZWNrYm94PjwvcD5cbiAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJleHRyYWNoZWVzZVwiPkV4dHJhIENoZWVzZTwvbWF0LWNoZWNrYm94PjwvcD5cbiAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJtdXNocm9vbVwiPk11c2hyb29tPC9tYXQtY2hlY2tib3g+PC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiIFtmb3JtR3JvdXBdPVwidG9wcGluZ3NcIj5cbiAgPGg0PllvdSBjaG9zZTo8L2g0PlxuICB7e3RvcHBpbmdzLnZhbHVlIHwganNvbn19XG48L3NlY3Rpb24+XG4iXX0=