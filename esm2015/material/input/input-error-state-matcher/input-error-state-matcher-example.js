/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
function InputErrorStateMatcherExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Please enter a valid email address ");
    i0.ɵɵelementEnd();
} }
function InputErrorStateMatcherExample_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Email is ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
export class MyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/**
 * \@title Input with a custom ErrorStateMatcher
 */
export class InputErrorStateMatcherExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
InputErrorStateMatcherExample.decorators = [
    { type: Component, args: [{
                selector: 'input-error-state-matcher-example',
                templateUrl: './input-error-state-matcher-example.html',
                styleUrls: ['./input-error-state-matcher-example.css'],
            },] },
];
/** @nocollapse */ InputErrorStateMatcherExample.ɵfac = function InputErrorStateMatcherExample_Factory(t) { return new (t || InputErrorStateMatcherExample)(); };
/** @nocollapse */ InputErrorStateMatcherExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 7, vars: 4, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵelementStart(3, "mat-hint");
        i0.ɵɵtext(4, "Errors appear instantly!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, InputErrorStateMatcherExample_mat_error_5_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(6, InputErrorStateMatcherExample_mat_error_6_Template, 4, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.MatHint, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'input-error-state-matcher-example',
                templateUrl: './input-error-state-matcher-example.html',
                styleUrls: ['./input-error-state-matcher-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    InputErrorStateMatcherExample.prototype.emailFormControl;
    /** @type {?} */
    InputErrorStateMatcherExample.prototype.matcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQThCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0lDSS9FLGlDQUNFO0lBQUEsb0RBQ0Y7SUFBQSxpQkFBWTs7O0lBQ1osaUNBQ0U7SUFBQSwwQkFBUztJQUFBLDhCQUFRO0lBQUEsd0JBQVE7SUFBQSxpQkFBUztJQUNwQyxpQkFBWTs7Ozs7QURMaEIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBQzlCLFlBQVksQ0FBQyxPQUEyQixFQUFFLElBQXdDOztjQUMxRSxXQUFXLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTO1FBQzFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0NBQ0Y7Ozs7QUFRRCxNQUFNLE9BQU8sNkJBQTZCO0lBTDFDO1FBTUUscUJBQWdCLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFO1lBQ3JDLFVBQVUsQ0FBQyxRQUFRO1lBQ25CLFVBQVUsQ0FBQyxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUVILFlBQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7S0FDckM7OztZQVpBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsMENBQTBDO2dCQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQzthQUN2RDs7MEdBQ1ksNkJBQTZCO2tFQUE3Qiw2QkFBNkI7UUNsQjFDLCtCQUNFO1FBQUEseUNBQ0U7UUFBQSwyQkFFQTtRQUFBLGdDQUFVO1FBQUEsd0NBQXdCO1FBQUEsaUJBQVc7UUFDN0MsMEZBQ0U7UUFFRiwwRkFDRTtRQUVKLGlCQUFpQjtRQUNuQixpQkFBTzs7UUFWaUMsZUFBZ0M7UUFBaEMsa0RBQWdDLGtDQUFBO1FBR3pELGVBQW9GO1FBQXBGLDJHQUFvRjtRQUdwRixlQUE2QztRQUE3QyxnRUFBNkM7O2tERFUvQyw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSwwQ0FBMEM7Z0JBQ3ZELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2FBQ3ZEOzs7O0lBRUMseURBR0c7O0lBRUgsZ0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKiogRXJyb3Igd2hlbiBpbnZhbGlkIGNvbnRyb2wgaXMgZGlydHksIHRvdWNoZWQsIG9yIHN1Ym1pdHRlZC4gKi9cbmV4cG9ydCBjbGFzcyBNeUVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTdWJtaXR0ZWQgPSBmb3JtICYmIGZvcm0uc3VibWl0dGVkO1xuICAgIHJldHVybiAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQgfHwgaXNTdWJtaXR0ZWQpKTtcbiAgfVxufVxuXG4vKiogQHRpdGxlIElucHV0IHdpdGggYSBjdXN0b20gRXJyb3JTdGF0ZU1hdGNoZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGUge1xuICBlbWFpbEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICBWYWxpZGF0b3JzLmVtYWlsLFxuICBdKTtcblxuICBtYXRjaGVyID0gbmV3IE15RXJyb3JTdGF0ZU1hdGNoZXIoKTtcbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgW2Zvcm1Db250cm9sXT1cImVtYWlsRm9ybUNvbnRyb2xcIlxuICAgICAgICAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiPlxuICAgIDxtYXQtaGludD5FcnJvcnMgYXBwZWFyIGluc3RhbnRseSE8L21hdC1oaW50PlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJlbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdlbWFpbCcpICYmICFlbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXG4gICAgPC9tYXQtZXJyb3I+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgIEVtYWlsIGlzIDxzdHJvbmc+cmVxdWlyZWQ8L3N0cm9uZz5cbiAgICA8L21hdC1lcnJvcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==