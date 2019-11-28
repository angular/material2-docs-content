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
function FormFieldErrorExample_mat_error_3_Template(rf, ctx) { if (rf & 1) {
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
export class FormFieldErrorExample {
    constructor() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
    }
    /**
     * @return {?}
     */
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
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
/** @nocollapse */ FormFieldErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldErrorExample, selectors: [["form-field-error-example"]], decls: 4, vars: 2, consts: [[1, "example-container"], ["matInput", "", "placeholder", "Enter your email", "required", "", 3, "formControl"], [4, "ngIf"]], template: function FormFieldErrorExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelement(2, "input", 1);
        i0.ɵɵtemplate(3, FormFieldErrorExample_mat_error_3_Template, 2, 1, "mat-error", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControl", ctx.email);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.email.invalid);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.NgIf, i1.MatError], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1lcnJvci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWVycm9yL2Zvcm0tZmllbGQtZXJyb3ItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1lcnJvci9mb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ0VuRCxpQ0FBaUM7SUFBQSxZQUFxQjtJQUFBLGlCQUFZOzs7SUFBakMsZUFBcUI7SUFBckIsOENBQXFCOzs7OztBRE0xRCxNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTUUsVUFBSyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FPdEU7Ozs7SUFMQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDaEQsRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOzswRkFDWSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1RsQyw4QkFDRTtRQUFBLHNDQUNFO1FBQUEsMkJBQ0E7UUFBQSxrRkFBaUM7UUFDbkMsaUJBQWlCO1FBQ25CLGlCQUFNOztRQUg2QyxlQUFxQjtRQUFyQix1Q0FBcUI7UUFDekQsZUFBcUI7UUFBckIsd0NBQXFCOztrRERNdkIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7OztJQUVDLHNDQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggZXJyb3IgbWVzc2FnZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtZXJyb3ItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1lcnJvci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1lcnJvci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRFcnJvckV4YW1wbGUge1xuICBlbWFpbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKTtcblxuICBnZXRFcnJvck1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1haWwuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgICB0aGlzLmVtYWlsLmhhc0Vycm9yKCdlbWFpbCcpID8gJ05vdCBhIHZhbGlkIGVtYWlsJyA6XG4gICAgICAgICAgICAnJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgW2Zvcm1Db250cm9sXT1cImVtYWlsXCIgcmVxdWlyZWQ+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImVtYWlsLmludmFsaWRcIj57e2dldEVycm9yTWVzc2FnZSgpfX08L21hdC1lcnJvcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19