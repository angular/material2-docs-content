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
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.getErrorMessage());
} }
/** @title Form field with error messages */
var FormFieldErrorExample = /** @class */ (function () {
    function FormFieldErrorExample() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
    }
    FormFieldErrorExample.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormFieldErrorExample.ɵfac = function FormFieldErrorExample_Factory(t) { return new (t || FormFieldErrorExample)(); };
    FormFieldErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldErrorExample, selectors: [["form-field-error-example"]], decls: 6, vars: 2, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", "placeholder", "pat@example.com", "required", "", 3, "formControl"], [4, "ngIf"]], template: function FormFieldErrorExample_Template(rf, ctx) { if (rf & 1) {
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
}());
export { FormFieldErrorExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldErrorExample, [{
        type: Component,
        args: [{
                selector: 'form-field-error-example',
                templateUrl: 'form-field-error-example.html',
                styleUrls: ['form-field-error-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1lcnJvci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWVycm9yL2Zvcm0tZmllbGQtZXJyb3ItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1lcnJvci9mb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNHbkQsaUNBQWlDO0lBQUEsWUFBcUI7SUFBQSxpQkFBWTs7O0lBQWpDLGVBQXFCO0lBQXJCLDhDQUFxQjs7QUREMUQsNENBQTRDO0FBQzVDO0lBQUE7UUFNRSxVQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQU90RTtJQUxDLCtDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNoRCxFQUFFLENBQUM7SUFDYixDQUFDOzhGQVBVLHFCQUFxQjs4REFBckIscUJBQXFCO1lDVGxDLDhCQUNFO1lBQUEseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLGdDQUFnQjtZQUFBLGlCQUFZO1lBQ3ZDLDJCQUNBO1lBQUEsa0ZBQWlDO1lBQ25DLGlCQUFpQjtZQUNuQixpQkFBTTs7WUFINEMsZUFBcUI7WUFBckIsdUNBQXFCO1lBQ3hELGVBQXFCO1lBQXJCLHdDQUFxQjs7Z0NESnBDO0NBaUJDLEFBYkQsSUFhQztTQVJZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggZXJyb3IgbWVzc2FnZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtZXJyb3ItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1lcnJvci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1lcnJvci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRFcnJvckV4YW1wbGUge1xuICBlbWFpbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKTtcblxuICBnZXRFcnJvck1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1haWwuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgICB0aGlzLmVtYWlsLmhhc0Vycm9yKCdlbWFpbCcpID8gJ05vdCBhIHZhbGlkIGVtYWlsJyA6XG4gICAgICAgICAgICAnJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RW50ZXIgeW91ciBlbWFpbDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInBhdEBleGFtcGxlLmNvbVwiIFtmb3JtQ29udHJvbF09XCJlbWFpbFwiIHJlcXVpcmVkPlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJlbWFpbC5pbnZhbGlkXCI+e3tnZXRFcnJvck1lc3NhZ2UoKX19PC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiJdfQ==