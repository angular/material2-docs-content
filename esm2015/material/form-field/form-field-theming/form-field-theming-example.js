/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/form-field/form-field-theming/form-field-theming-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/common";
function FormFieldThemingExample_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Min size: 10px");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Form field theming
 */
export class FormFieldThemingExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.colorControl = new FormControl('primary');
        this.fontSizeControl = new FormControl(16, Validators.min(10));
        this.options = fb.group({
            color: this.colorControl,
            fontSize: this.fontSizeControl,
        });
    }
    /**
     * @return {?}
     */
    getFontSize() {
        return Math.max(10, this.fontSizeControl.value);
    }
}
FormFieldThemingExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            },] },
];
/** @nocollapse */
FormFieldThemingExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ FormFieldThemingExample.ɵfac = function FormFieldThemingExample_Factory(t) { return new (t || FormFieldThemingExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ FormFieldThemingExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldThemingExample, selectors: [["form-field-theming-example"]], decls: 18, vars: 8, consts: [[1, "example-container", 3, "formGroup"], ["appearance", "fill", 3, "color"], [3, "formControl"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "type", "number", "placeholder", "Ex. 12", "min", "10", 3, "formControl"], ["matSuffix", ""], [4, "ngIf"]], template: function FormFieldThemingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Color");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-select", 2);
        i0.ɵɵelementStart(5, "mat-option", 3);
        i0.ɵɵtext(6, "Primary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-option", 4);
        i0.ɵɵtext(8, "Accent");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-option", 5);
        i0.ɵɵtext(10, "Warn");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-form-field", 1);
        i0.ɵɵelementStart(12, "mat-label");
        i0.ɵɵtext(13, "Font size");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "input", 6);
        i0.ɵɵelementStart(15, "span", 7);
        i0.ɵɵtext(16, "px");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, FormFieldThemingExample_mat_error_17_Template, 2, 0, "mat-error", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("font-size", ctx.getFontSize(), "px");
        i0.ɵɵproperty("formGroup", ctx.options);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.colorControl.value);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.colorControl);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("color", ctx.colorControl.value);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.fontSizeControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.fontSizeControl.invalid);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.FormControlDirective, i4.MatOption, i5.MatInput, i1.NumberValueAccessor, i1.DefaultValueAccessor, i2.MatSuffix, i6.NgIf, i2.MatError], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldThemingExample, [{
        type: Component,
        args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
if (false) {
    /** @type {?} */
    FormFieldThemingExample.prototype.options;
    /** @type {?} */
    FormFieldThemingExample.prototype.colorControl;
    /** @type {?} */
    FormFieldThemingExample.prototype.fontSizeControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNhM0UsaUNBQTJDO0lBQUEsOEJBQWM7SUFBQSxpQkFBWTs7Ozs7QURMekUsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUtsQyxZQUFZLEVBQWU7UUFIM0IsaUJBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzs7OztZQVBPLFdBQVc7OzhGQVFOLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDVHBDLCtCQUNFO1FBQUEseUNBQ0U7UUFBQSxpQ0FBVztRQUFBLHFCQUFLO1FBQUEsaUJBQVk7UUFDNUIscUNBQ0U7UUFBQSxxQ0FBNEI7UUFBQSx1QkFBTztRQUFBLGlCQUFhO1FBQ2hELHFDQUEyQjtRQUFBLHNCQUFNO1FBQUEsaUJBQWE7UUFDOUMscUNBQXlCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUM1QyxpQkFBYTtRQUNmLGlCQUFpQjtRQUVqQiwwQ0FDRTtRQUFBLGtDQUFXO1FBQUEsMEJBQVM7UUFBQSxpQkFBWTtRQUNoQyw0QkFDQTtRQUFBLGdDQUFnQjtRQUFBLG1CQUFFO1FBQUEsaUJBQU87UUFDekIsc0ZBQTJDO1FBQzdDLGlCQUFpQjtRQUNuQixpQkFBTzs7UUFoQitDLG9EQUFtQztRQUF6RCx1Q0FBcUI7UUFDakIsZUFBNEI7UUFBNUIsOENBQTRCO1FBRWhELGVBQTRCO1FBQTVCLDhDQUE0QjtRQU9SLGVBQTRCO1FBQTVCLDhDQUE0QjtRQUVULGVBQStCO1FBQS9CLGlEQUErQjtRQUV2RSxlQUErQjtRQUEvQixrREFBK0I7O2tERExqQyx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOzs7O0lBRUMsMENBQW1COztJQUNuQiwrQ0FBMEM7O0lBQzFDLGtEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHRoZW1pbmcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRUaGVtaW5nRXhhbXBsZSB7XG4gIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgY29sb3JDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdwcmltYXJ5Jyk7XG4gIGZvbnRTaXplQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgxNiwgVmFsaWRhdG9ycy5taW4oMTApKTtcblxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBmYi5ncm91cCh7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvckNvbnRyb2wsXG4gICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZUNvbnRyb2wsXG4gICAgfSk7XG4gIH1cblxuICBnZXRGb250U2l6ZSgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMTAsIHRoaXMuZm9udFNpemVDb250cm9sLnZhbHVlKTtcbiAgfVxufVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiIFtmb3JtR3JvdXBdPVwib3B0aW9uc1wiIFtzdHlsZS5mb250U2l6ZS5weF09XCJnZXRGb250U2l6ZSgpXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIFtjb2xvcl09XCJjb2xvckNvbnRyb2wudmFsdWVcIj5cbiAgICA8bWF0LWxhYmVsPkNvbG9yPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImNvbG9yQ29udHJvbFwiPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwcmltYXJ5XCI+UHJpbWFyeTwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiYWNjZW50XCI+QWNjZW50PC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ3YXJuXCI+V2FybjwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgW2NvbG9yXT1cImNvbG9yQ29udHJvbC52YWx1ZVwiPlxuICAgIDxtYXQtbGFiZWw+Rm9udCBzaXplPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkV4LiAxMlwiIFtmb3JtQ29udHJvbF09XCJmb250U2l6ZUNvbnRyb2xcIiBtaW49XCIxMFwiPlxuICAgIDxzcGFuIG1hdFN1ZmZpeD5weDwvc3Bhbj5cbiAgICA8bWF0LWVycm9yICpuZ0lmPVwiZm9udFNpemVDb250cm9sLmludmFsaWRcIj5NaW4gc2l6ZTogMTBweDwvbWF0LWVycm9yPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19