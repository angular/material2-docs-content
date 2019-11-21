/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/core";
import * as i8 from "@angular/material/icon";
/**
 * \@title Form field with label
 */
export class FormFieldLabelExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
}
FormFieldLabelExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-label-example',
                templateUrl: 'form-field-label-example.html',
                styleUrls: ['form-field-label-example.css'],
            },] },
];
/** @nocollapse */
FormFieldLabelExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ FormFieldLabelExample.ɵfac = function FormFieldLabelExample_Factory(t) { return new (t || FormFieldLabelExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ FormFieldLabelExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldLabelExample, selectors: [["form-field-label-example"]], decls: 33, vars: 6, consts: [[1, "example-container"], [1, "example-container", 3, "formGroup"], ["formControlName", "hideRequired"], ["formControlName", "floatLabel"], ["value", "auto"], ["value", "always"], ["value", "never"], [3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], [3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["value", "option"]], template: function FormFieldLabelExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "form", 1);
        i0.ɵɵelementStart(2, "mat-checkbox", 2);
        i0.ɵɵtext(3, "Hide required marker");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "label");
        i0.ɵɵtext(6, "Float label: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-radio-group", 3);
        i0.ɵɵelementStart(8, "mat-radio-button", 4);
        i0.ɵɵtext(9, "Auto");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-radio-button", 5);
        i0.ɵɵtext(11, "Always");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-radio-button", 6);
        i0.ɵɵtext(13, "Never");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field", 7);
        i0.ɵɵelement(15, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-form-field", 9);
        i0.ɵɵelementStart(17, "mat-label");
        i0.ɵɵtext(18, "Both a label and a placeholder");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(19, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-form-field", 7);
        i0.ɵɵelementStart(21, "mat-select", 11);
        i0.ɵɵelementStart(22, "mat-option");
        i0.ɵɵtext(23, "-- None --");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-option", 12);
        i0.ɵɵtext(25, "Option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-label");
        i0.ɵɵelementStart(27, "mat-icon");
        i0.ɵɵtext(28, "favorite");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "b");
        i0.ɵɵtext(30, " Fancy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "i");
        i0.ɵɵtext(32, " label");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.options);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("hideRequiredMarker", ctx.options.value.hideRequired)("floatLabel", ctx.options.value.floatLabel);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("floatLabel", ctx.options.value.floatLabel);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("hideRequiredMarker", ctx.options.value.hideRequired)("floatLabel", ctx.options.value.floatLabel);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatCheckbox, i1.NgControlStatus, i1.FormControlName, i3.MatRadioGroup, i3.MatRadioButton, i4.MatFormField, i5.MatInput, i4.MatLabel, i6.MatSelect, i7.MatOption, i8.MatIcon], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldLabelExample, [{
        type: Component,
        args: [{
                selector: 'form-field-label-example',
                templateUrl: 'form-field-label-example.html',
                styleUrls: ['form-field-label-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
if (false) {
    /** @type {?} */
    FormFieldLabelExample.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFRdEQsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUdoQyxZQUFZLEVBQWU7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7OztZQVBPLFdBQVc7OzBGQVFOLHFCQUFxQjswREFBckIscUJBQXFCO1FDVGxDLDhCQUNFO1FBQUEsK0JBQ0U7UUFBQSx1Q0FBNkM7UUFBQSxvQ0FBb0I7UUFBQSxpQkFBZTtRQUNoRiwyQkFDRTtRQUFBLDZCQUFPO1FBQUEsNkJBQWE7UUFBQSxpQkFBUTtRQUM1QiwwQ0FDRTtRQUFBLDJDQUErQjtRQUFBLG9CQUFJO1FBQUEsaUJBQW1CO1FBQ3RELDRDQUFpQztRQUFBLHVCQUFNO1FBQUEsaUJBQW1CO1FBQzFELDRDQUFnQztRQUFBLHNCQUFLO1FBQUEsaUJBQW1CO1FBQzFELGlCQUFrQjtRQUNwQixpQkFBTTtRQUNSLGlCQUFPO1FBRVAsMENBR0U7UUFBQSw0QkFDRjtRQUFBLGlCQUFpQjtRQUVqQiwwQ0FDRTtRQUFBLGtDQUFXO1FBQUEsK0NBQThCO1FBQUEsaUJBQVk7UUFDckQsNkJBQ0Y7UUFBQSxpQkFBaUI7UUFFakIsMENBR0U7UUFBQSx1Q0FDRTtRQUFBLG1DQUFZO1FBQUEsMkJBQVU7UUFBQSxpQkFBYTtRQUNuQyx1Q0FBMkI7UUFBQSx1QkFBTTtRQUFBLGlCQUFhO1FBQ2hELGlCQUFhO1FBQ2Isa0NBQVc7UUFBQSxpQ0FBVTtRQUFBLHlCQUFRO1FBQUEsaUJBQVc7UUFBQywwQkFBSTtRQUFBLHVCQUFLO1FBQUEsaUJBQUk7UUFBQywwQkFBSTtRQUFBLHVCQUFLO1FBQUEsaUJBQUk7UUFBQSxpQkFBWTtRQUNsRixpQkFBaUI7UUFDbkIsaUJBQU07O1FBaEM0QixlQUFxQjtRQUFyQix1Q0FBcUI7UUFhakQsZ0JBQWlEO1FBQWpELG1FQUFpRCw0Q0FBQTtRQUtyQyxlQUF1QztRQUF2Qyx5REFBdUM7UUFNbkQsZUFBaUQ7UUFBakQsbUVBQWlELDRDQUFBOztrRERoQjFDLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Ozs7SUFFQyx3Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggbGFiZWwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRMYWJlbEV4YW1wbGUge1xuICBvcHRpb25zOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gZmIuZ3JvdXAoe1xuICAgICAgaGlkZVJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIGZsb2F0TGFiZWw6ICdhdXRvJyxcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxmb3JtIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBbZm9ybUdyb3VwXT1cIm9wdGlvbnNcIj5cbiAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImhpZGVSZXF1aXJlZFwiPkhpZGUgcmVxdWlyZWQgbWFya2VyPC9tYXQtY2hlY2tib3g+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD5GbG9hdCBsYWJlbDogPC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZm9ybUNvbnRyb2xOYW1lPVwiZmxvYXRMYWJlbFwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImF1dG9cIj5BdXRvPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImFsd2F5c1wiPkFsd2F5czwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJuZXZlclwiPk5ldmVyPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cblxuICA8bWF0LWZvcm0tZmllbGRcbiAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwib3B0aW9ucy52YWx1ZS5oaWRlUmVxdWlyZWRcIlxuICAgICAgW2Zsb2F0TGFiZWxdPVwib3B0aW9ucy52YWx1ZS5mbG9hdExhYmVsXCI+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCIgcmVxdWlyZWQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPG1hdC1mb3JtLWZpZWxkIFtmbG9hdExhYmVsXT1cIm9wdGlvbnMudmFsdWUuZmxvYXRMYWJlbFwiPlxuICAgIDxtYXQtbGFiZWw+Qm90aCBhIGxhYmVsIGFuZCBhIHBsYWNlaG9sZGVyPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPG1hdC1mb3JtLWZpZWxkXG4gICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cIm9wdGlvbnMudmFsdWUuaGlkZVJlcXVpcmVkXCJcbiAgICAgIFtmbG9hdExhYmVsXT1cIm9wdGlvbnMudmFsdWUuZmxvYXRMYWJlbFwiPlxuICAgIDxtYXQtc2VsZWN0IHJlcXVpcmVkPlxuICAgICAgPG1hdC1vcHRpb24+LS0gTm9uZSAtLTwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uXCI+T3B0aW9uPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8bWF0LWxhYmVsPjxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+IDxiPiBGYW5jeTwvYj4gPGk+IGxhYmVsPC9pPjwvbWF0LWxhYmVsPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG4iXX0=