/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/common";
function FormFieldThemingExample_mat_error_11_Template(rf, ctx) { if (rf & 1) {
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
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, Validators.min(10)],
        });
    }
    /**
     * @return {?}
     */
    getFontSize() {
        return Math.max(10, this.options.value.fontSize);
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
/** @nocollapse */ FormFieldThemingExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldThemingExample, selectors: [["form-field-theming-example"]], decls: 12, vars: 5, consts: [[1, "example-container", 3, "formGroup"], [3, "color"], ["placeholder", "Color", "formControlName", "color"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "type", "number", "placeholder", "Font size (px)", "formControlName", "fontSize", "min", "10"], [4, "ngIf"]], template: function FormFieldThemingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-select", 2);
        i0.ɵɵelementStart(3, "mat-option", 3);
        i0.ɵɵtext(4, "Primary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-option", 4);
        i0.ɵɵtext(6, "Accent");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-option", 5);
        i0.ɵɵtext(8, "Warn");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-form-field", 1);
        i0.ɵɵelement(10, "input", 6);
        i0.ɵɵtemplate(11, FormFieldThemingExample_mat_error_11_Template, 2, 0, "mat-error", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var tmp_4_0 = null;
        const currVal_4 = (tmp_4_0 = ctx.options.get("fontSize")) == null ? null : tmp_4_0.invalid;
        i0.ɵɵstyleProp("font-size", ctx.getFontSize(), "px");
        i0.ɵɵproperty("formGroup", ctx.options);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.options.value.color);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("color", ctx.options.value.color);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", currVal_4);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i3.MatSelect, i1.NgControlStatus, i1.FormControlName, i4.MatOption, i5.MatInput, i1.NumberValueAccessor, i1.DefaultValueAccessor, i6.NgIf, i2.MatError], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(FormFieldThemingExample, [{
        type: Component,
        args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
if (false) {
    /** @type {?} */
    FormFieldThemingExample.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLXRoZW1pbmcvZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLXRoZW1pbmcvZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNVOUQsaUNBQW9EO0lBQUEsOEJBQWM7SUFBQSxpQkFBWTs7Ozs7QURGbEYsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUdsQyxZQUFZLEVBQWU7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25DLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOzs7O1lBUE8sV0FBVzs7OEZBUU4sdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNUcEMsK0JBQ0U7UUFBQSx5Q0FDRTtRQUFBLHFDQUNFO1FBQUEscUNBQTRCO1FBQUEsdUJBQU87UUFBQSxpQkFBYTtRQUNoRCxxQ0FBMkI7UUFBQSxzQkFBTTtRQUFBLGlCQUFhO1FBQzlDLHFDQUF5QjtRQUFBLG9CQUFJO1FBQUEsaUJBQWE7UUFDNUMsaUJBQWE7UUFDZixpQkFBaUI7UUFFakIseUNBQ0U7UUFBQSw0QkFDQTtRQUFBLHNGQUFvRDtRQUN0RCxpQkFBaUI7UUFDbkIsaUJBQU87Ozs7UUFiK0Msb0RBQW1DO1FBQXpELHVDQUFxQjtRQUNuQyxlQUE2QjtRQUE3QiwrQ0FBNkI7UUFRN0IsZUFBNkI7UUFBN0IsK0NBQTZCO1FBRWhDLGVBQXdDO1FBQXhDLGdDQUF3Qzs7bUNERjFDLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7SUFFQywwQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHRoZW1pbmcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRUaGVtaW5nRXhhbXBsZSB7XG4gIG9wdGlvbnM6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBmYi5ncm91cCh7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgZm9udFNpemU6IFsxNiwgVmFsaWRhdG9ycy5taW4oMTApXSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZvbnRTaXplKCkge1xuICAgIHJldHVybiBNYXRoLm1heCgxMCwgdGhpcy5vcHRpb25zLnZhbHVlLmZvbnRTaXplKTtcbiAgfVxufVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiIFtmb3JtR3JvdXBdPVwib3B0aW9uc1wiIFtzdHlsZS5mb250U2l6ZS5weF09XCJnZXRGb250U2l6ZSgpXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBbY29sb3JdPVwib3B0aW9ucy52YWx1ZS5jb2xvclwiPlxuICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29sb3JcIiBmb3JtQ29udHJvbE5hbWU9XCJjb2xvclwiPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwcmltYXJ5XCI+UHJpbWFyeTwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiYWNjZW50XCI+QWNjZW50PC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ3YXJuXCI+V2FybjwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPG1hdC1mb3JtLWZpZWxkIFtjb2xvcl09XCJvcHRpb25zLnZhbHVlLmNvbG9yXCI+XG4gICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkZvbnQgc2l6ZSAocHgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiZm9udFNpemVcIiBtaW49XCIxMFwiPlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJvcHRpb25zLmdldCgnZm9udFNpemUnKT8uaW52YWxpZFwiPk1pbiBzaXplOiAxMHB4PC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=