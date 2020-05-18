/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-error-state-matcher/input-error-state-matcher-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
function InputErrorStateMatcherExample_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Please enter a valid email address ");
    i0.ɵɵelementEnd();
} }
function InputErrorStateMatcherExample_mat_error_8_Template(rf, ctx) { if (rf & 1) {
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
let InputErrorStateMatcherExample = /** @class */ (() => {
    /**
     * \@title Input with a custom ErrorStateMatcher
     */
    class InputErrorStateMatcherExample {
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
    /** @nocollapse */ InputErrorStateMatcherExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 9, vars: 4, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵelementStart(5, "mat-hint");
            i0.ɵɵtext(6, "Errors appear instantly!");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, InputErrorStateMatcherExample_mat_error_7_Template, 2, 0, "mat-error", 3);
            i0.ɵɵtemplate(8, InputErrorStateMatcherExample_mat_error_8_Template, 4, 0, "mat-error", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.MatHint, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputErrorStateMatcherExample;
})();
export { InputErrorStateMatcherExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUE4QixVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ0svRSxpQ0FDRTtJQUFBLG9EQUNGO0lBQUEsaUJBQVk7OztJQUNaLGlDQUNFO0lBQUEsMEJBQVM7SUFBQSw4QkFBUTtJQUFBLHdCQUFRO0lBQUEsaUJBQVM7SUFDcEMsaUJBQVk7Ozs7O0FETmhCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQUM5QixZQUFZLENBQUMsT0FBMkIsRUFBRSxJQUF3Qzs7Y0FDMUUsV0FBVyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUztRQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztDQUNGOzs7O0FBR0Q7Ozs7SUFBQSxNQUthLDZCQUE2QjtRQUwxQztZQU1FLHFCQUFnQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRTtnQkFDckMsVUFBVSxDQUFDLFFBQVE7Z0JBQ25CLFVBQVUsQ0FBQyxLQUFLO2FBQ2pCLENBQUMsQ0FBQztZQUVILFlBQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7U0FDckM7OztnQkFaQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsV0FBVyxFQUFFLDBDQUEwQztvQkFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7aUJBQ3ZEOztpSUFDWSw2QkFBNkI7eUZBQTdCLDZCQUE2QjtZQ2xCMUMsK0JBQ0U7WUFBQSx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEscUJBQUs7WUFBQSxpQkFBWTtZQUM1QiwyQkFFQTtZQUFBLGdDQUFVO1lBQUEsd0NBQXdCO1lBQUEsaUJBQVc7WUFDN0MsMEZBQ0U7WUFFRiwwRkFDRTtZQUVKLGlCQUFpQjtZQUNuQixpQkFBTzs7WUFWYSxlQUFnQztZQUFoQyxrREFBZ0Msa0NBQUE7WUFHckMsZUFBb0Y7WUFBcEYsMkdBQW9GO1lBR3BGLGVBQTZDO1lBQTdDLGdFQUE2Qzs7d0NEVDVEO0tBeUJDO1NBUFksNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSwwQ0FBMEM7Z0JBQ3ZELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2FBQ3ZEOzs7O0lBRUMseURBR0c7O0lBRUgsZ0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKiogRXJyb3Igd2hlbiBpbnZhbGlkIGNvbnRyb2wgaXMgZGlydHksIHRvdWNoZWQsIG9yIHN1Ym1pdHRlZC4gKi9cbmV4cG9ydCBjbGFzcyBNeUVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTdWJtaXR0ZWQgPSBmb3JtICYmIGZvcm0uc3VibWl0dGVkO1xuICAgIHJldHVybiAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQgfHwgaXNTdWJtaXR0ZWQpKTtcbiAgfVxufVxuXG4vKiogQHRpdGxlIElucHV0IHdpdGggYSBjdXN0b20gRXJyb3JTdGF0ZU1hdGNoZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGUge1xuICBlbWFpbEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICBWYWxpZGF0b3JzLmVtYWlsLFxuICBdKTtcblxuICBtYXRjaGVyID0gbmV3IE15RXJyb3JTdGF0ZU1hdGNoZXIoKTtcbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxtYXQtbGFiZWw+RW1haWw8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW2Zvcm1Db250cm9sXT1cImVtYWlsRm9ybUNvbnRyb2xcIiBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIHBhdEBleGFtcGxlLmNvbVwiPlxuICAgIDxtYXQtaGludD5FcnJvcnMgYXBwZWFyIGluc3RhbnRseSE8L21hdC1oaW50PlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJlbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdlbWFpbCcpICYmICFlbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXG4gICAgPC9tYXQtZXJyb3I+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgIEVtYWlsIGlzIDxzdHJvbmc+cmVxdWlyZWQ8L3N0cm9uZz5cbiAgICA8L21hdC1lcnJvcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==