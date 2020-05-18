/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/form-field/form-field-error/form-field-error-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function FormFieldErrorExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.getErrorMessage());
} }
/**
 * \@title Form field with error messages
 */
let FormFieldErrorExample = /** @class */ (() => {
    /**
     * \@title Form field with error messages
     */
    class FormFieldErrorExample {
        constructor() {
            this.email = new FormControl('', [Validators.required, Validators.email]);
        }
        /**
         * @return {?}
         */
        getErrorMessage() {
            if (this.email.hasError('required')) {
                return 'You must enter a value';
            }
            return this.email.hasError('email') ? 'Not a valid email' : '';
        }
    }
    FormFieldErrorExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-error-example',
                    templateUrl: 'form-field-error-example.html',
                    styleUrls: ['form-field-error-example.css'],
                },] },
    ];
    /** @nocollapse */ FormFieldErrorExample.ɵfac = function FormFieldErrorExample_Factory(t) { return new (t || FormFieldErrorExample)(); };
    /** @nocollapse */ FormFieldErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldErrorExample, selectors: [["form-field-error-example"]], decls: 6, vars: 2, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", "placeholder", "pat@example.com", "required", "", 3, "formControl"], [4, "ngIf"]], template: function FormFieldErrorExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Enter your email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵtemplate(5, FormFieldErrorExample_mat_error_5_Template, 2, 1, "mat-error", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formControl", ctx.email);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.email.invalid);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.NgIf, i1.MatError], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return FormFieldErrorExample;
})();
export { FormFieldErrorExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldErrorExample, [{
        type: Component,
        args: [{
                selector: 'form-field-error-example',
                templateUrl: 'form-field-error-example.html',
                styleUrls: ['form-field-error-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    FormFieldErrorExample.prototype.email;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1lcnJvci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWVycm9yL2Zvcm0tZmllbGQtZXJyb3ItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1lcnJvci9mb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ0duRCxpQ0FBaUM7SUFBQSxZQUFxQjtJQUFBLGlCQUFZOzs7SUFBakMsZUFBcUI7SUFBckIsOENBQXFCOzs7OztBREExRDs7OztJQUFBLE1BS2EscUJBQXFCO1FBTGxDO1lBTUUsVUFBSyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FTdEU7Ozs7UUFQQyxlQUFlO1lBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDbkMsT0FBTyx3QkFBd0IsQ0FBQzthQUNqQztZQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakUsQ0FBQzs7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDNUM7O2lIQUNZLHFCQUFxQjtpRkFBckIscUJBQXFCO1lDVGxDLDhCQUNFO1lBQUEseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLGdDQUFnQjtZQUFBLGlCQUFZO1lBQ3ZDLDJCQUNBO1lBQUEsa0ZBQWlDO1lBQ25DLGlCQUFpQjtZQUNuQixpQkFBTTs7WUFINEMsZUFBcUI7WUFBckIsdUNBQXFCO1lBQ3hELGVBQXFCO1lBQXJCLHdDQUFxQjs7Z0NESnBDO0tBbUJDO1NBVlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOzs7O0lBRUMsc0NBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBlcnJvciBtZXNzYWdlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1lcnJvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZEVycm9yRXhhbXBsZSB7XG4gIGVtYWlsID0gbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pO1xuXG4gIGdldEVycm9yTWVzc2FnZSgpIHtcbiAgICBpZiAodGhpcy5lbWFpbC5oYXNFcnJvcigncmVxdWlyZWQnKSkge1xuICAgICAgcmV0dXJuICdZb3UgbXVzdCBlbnRlciBhIHZhbHVlJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbWFpbC5oYXNFcnJvcignZW1haWwnKSA/ICdOb3QgYSB2YWxpZCBlbWFpbCcgOiAnJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RW50ZXIgeW91ciBlbWFpbDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInBhdEBleGFtcGxlLmNvbVwiIFtmb3JtQ29udHJvbF09XCJlbWFpbFwiIHJlcXVpcmVkPlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJlbWFpbC5pbnZhbGlkXCI+e3tnZXRFcnJvck1lc3NhZ2UoKX19PC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiJdfQ==