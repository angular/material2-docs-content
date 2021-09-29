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
        args: [{ selector: 'checkbox-reactive-forms-example', template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zL2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXRELDRDQUE0QztBQU01QyxNQUFNLE9BQU8sNEJBQTRCO0lBR3ZDLFlBQVksRUFBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7d0dBVFUsNEJBQTRCOytFQUE1Qiw0QkFBNEI7UUNUekMsa0NBQXdEO1FBQ3RELDBCQUFJO1FBQUEscUNBQXFCO1FBQUEsaUJBQUs7UUFDOUIseUJBQUc7UUFBQSx1Q0FBMEM7UUFBQSx5QkFBUztRQUFBLGlCQUFlO1FBQUEsaUJBQUk7UUFDekUseUJBQUc7UUFBQSx1Q0FBNEM7UUFBQSw0QkFBWTtRQUFBLGlCQUFlO1FBQUEsaUJBQUk7UUFDOUUseUJBQUc7UUFBQSx3Q0FBeUM7UUFBQSx5QkFBUTtRQUFBLGlCQUFlO1FBQUEsaUJBQUk7UUFDekUsaUJBQVU7UUFFVixtQ0FBd0Q7UUFDdEQsMkJBQUk7UUFBQSwyQkFBVTtRQUFBLGlCQUFLO1FBQ25CLGFBQ0Y7O1FBQUEsaUJBQVU7O1FBVnVCLHdDQUFzQjtRQU90QixnQkFBc0I7UUFBdEIsd0NBQXNCO1FBRXJELGVBQ0Y7UUFERSwyRUFDRjs7dUZERGEsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0UsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgQ2hlY2tib3hlcyB3aXRoIHJlYWN0aXZlIGZvcm1zICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFJlYWN0aXZlRm9ybXNFeGFtcGxlIHtcbiAgdG9wcGluZ3M6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLnRvcHBpbmdzID0gZmIuZ3JvdXAoe1xuICAgICAgcGVwcGVyb25pOiBmYWxzZSxcbiAgICAgIGV4dHJhY2hlZXNlOiBmYWxzZSxcbiAgICAgIG11c2hyb29tOiBmYWxzZVxuICAgIH0pO1xuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiIFtmb3JtR3JvdXBdPVwidG9wcGluZ3NcIj5cbiAgPGg0PlNlbGVjdCB5b3VyIHRvcHBpbmdzOjwvaDQ+XG4gIDxwPjxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwicGVwcGVyb25pXCI+UGVwcGVyb25pPC9tYXQtY2hlY2tib3g+PC9wPlxuICA8cD48bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImV4dHJhY2hlZXNlXCI+RXh0cmEgQ2hlZXNlPC9tYXQtY2hlY2tib3g+PC9wPlxuICA8cD48bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cIm11c2hyb29tXCI+TXVzaHJvb208L21hdC1jaGVja2JveD48L3A+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCIgW2Zvcm1Hcm91cF09XCJ0b3BwaW5nc1wiPlxuICA8aDQ+WW91IGNob3NlOjwvaDQ+XG4gIHt7dG9wcGluZ3MudmFsdWUgfCBqc29ufX1cbjwvc2VjdGlvbj5cbiJdfQ==