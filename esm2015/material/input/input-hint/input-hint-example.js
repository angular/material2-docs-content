/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * \@title Input with hints
 */
export class InputHintExample {
}
InputHintExample.decorators = [
    { type: Component, args: [{
                selector: 'input-hint-example',
                templateUrl: 'input-hint-example.html',
                styleUrls: ['input-hint-example.css'],
            },] },
];
/** @nocollapse */ InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
/** @nocollapse */ InputHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 9, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Message"], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelement(2, "input", 2, 3);
        i0.ɵɵelementStart(4, "mat-hint", 4);
        i0.ɵɵelementStart(5, "strong");
        i0.ɵɵtext(6, "Don't disclose personal info");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-hint", 5);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r8 = i0.ɵɵreference(3);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1("", _r8.value.length, " / 256");
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(InputHintExample, [{
        type: Component,
        args: [{
                selector: 'input-hint-example',
                templateUrl: 'input-hint-example.html',
                styleUrls: ['input-hint-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGludC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtaGludC9pbnB1dC1oaW50LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1oaW50L2lucHV0LWhpbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVV4QyxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFMNUIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztnRkFDWSxnQkFBZ0I7cURBQWhCLGdCQUFnQjtRQ1Y3QiwrQkFFRTtRQUFBLHlDQUNFO1FBQUEsOEJBQ0E7UUFBQSxtQ0FBd0I7UUFBQSw4QkFBUTtRQUFBLDRDQUE0QjtRQUFBLGlCQUFTO1FBQUMsaUJBQVc7UUFDakYsbUNBQXNCO1FBQUEsWUFBOEI7UUFBQSxpQkFBVztRQUNqRSxpQkFBaUI7UUFFbkIsaUJBQU87OztRQUhtQixlQUE4QjtRQUE5QixxREFBOEI7O21DREszQyxnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dCB3aXRoIGhpbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWhpbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtaGludC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtaGludC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEhpbnRFeGFtcGxlIHt9XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxpbnB1dCBtYXRJbnB1dCAjbWVzc2FnZSBtYXhsZW5ndGg9XCIyNTZcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIj5cbiAgICA8bWF0LWhpbnQgYWxpZ249XCJzdGFydFwiPjxzdHJvbmc+RG9uJ3QgZGlzY2xvc2UgcGVyc29uYWwgaW5mbzwvc3Ryb25nPiA8L21hdC1oaW50PlxuICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPnt7bWVzc2FnZS52YWx1ZS5sZW5ndGh9fSAvIDI1NjwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIFxuPC9mb3JtPlxuIl19