/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/form-field/form-field-label/form-field-label-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = fb.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
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
/** @nocollapse */ FormFieldLabelExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldLabelExample, selectors: [["form-field-label-example"]], decls: 31, vars: 8, consts: [[1, "example-container"], [3, "formGroup"], [3, "formControl"], ["value", "auto"], ["value", "always"], ["appearance", "fill", 3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], ["appearance", "fill", 3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["value", "option"]], template: function FormFieldLabelExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "form", 1);
        i0.ɵɵelementStart(2, "mat-checkbox", 2);
        i0.ɵɵtext(3, "Hide required marker");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "label");
        i0.ɵɵtext(6, "Float label: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-radio-group", 2);
        i0.ɵɵelementStart(8, "mat-radio-button", 3);
        i0.ɵɵtext(9, "Auto");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-radio-button", 4);
        i0.ɵɵtext(11, "Always");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field", 5);
        i0.ɵɵelement(13, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field", 7);
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "Both a label and a placeholder");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(17, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-form-field", 5);
        i0.ɵɵelementStart(19, "mat-select", 9);
        i0.ɵɵelementStart(20, "mat-option");
        i0.ɵɵtext(21, "-- None --");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-option", 10);
        i0.ɵɵtext(23, "Option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-label");
        i0.ɵɵelementStart(25, "mat-icon");
        i0.ɵɵtext(26, "favorite");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "b");
        i0.ɵɵtext(28, " Fancy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "i");
        i0.ɵɵtext(30, " label");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.options);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.hideRequiredControl);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.floatLabelControl);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("hideRequiredMarker", ctx.hideRequiredControl.value)("floatLabel", ctx.floatLabelControl.value);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("floatLabel", ctx.floatLabelControl.value);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("hideRequiredMarker", ctx.hideRequiredControl.value)("floatLabel", ctx.floatLabelControl.value);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatCheckbox, i1.NgControlStatus, i1.FormControlDirective, i3.MatRadioGroup, i3.MatRadioButton, i4.MatFormField, i5.MatInput, i4.MatLabel, i6.MatSelect, i7.MatOption, i8.MatIcon], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
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
    /** @type {?} */
    FormFieldLabelExample.prototype.hideRequiredControl;
    /** @type {?} */
    FormFieldLabelExample.prototype.floatLabelControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVFuRSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBS2hDLFlBQVksRUFBZTtRQUgzQix3QkFBbUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUcxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDdEMsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOzs7O1lBUE8sV0FBVzs7NkdBUU4scUJBQXFCOzZFQUFyQixxQkFBcUI7UUNUbEMsOEJBQ0U7UUFBQSwrQkFDRTtRQUFBLHVDQUFrRDtRQUFBLG9DQUFvQjtRQUFBLGlCQUFlO1FBQ3JGLDJCQUNFO1FBQUEsNkJBQU87UUFBQSw2QkFBYTtRQUFBLGlCQUFRO1FBQzVCLDBDQUNFO1FBQUEsMkNBQStCO1FBQUEsb0JBQUk7UUFBQSxpQkFBbUI7UUFDdEQsNENBQWlDO1FBQUEsdUJBQU07UUFBQSxpQkFBbUI7UUFDNUQsaUJBQWtCO1FBQ3BCLGlCQUFNO1FBRU4sMENBR0U7UUFBQSw0QkFDRjtRQUFBLGlCQUFpQjtRQUVqQiwwQ0FDRTtRQUFBLGtDQUFXO1FBQUEsK0NBQThCO1FBQUEsaUJBQVk7UUFDckQsNEJBQ0Y7UUFBQSxpQkFBaUI7UUFFakIsMENBR0U7UUFBQSxzQ0FDRTtRQUFBLG1DQUFZO1FBQUEsMkJBQVU7UUFBQSxpQkFBYTtRQUNuQyx1Q0FBMkI7UUFBQSx1QkFBTTtRQUFBLGlCQUFhO1FBQ2hELGlCQUFhO1FBQ2Isa0NBQVc7UUFBQSxpQ0FBVTtRQUFBLHlCQUFRO1FBQUEsaUJBQVc7UUFBQywwQkFBSTtRQUFBLHVCQUFLO1FBQUEsaUJBQUk7UUFBQywwQkFBSTtRQUFBLHVCQUFLO1FBQUEsaUJBQUk7UUFBQSxpQkFBWTtRQUNsRixpQkFBaUI7UUFDbkIsaUJBQU87UUFDVCxpQkFBTTs7UUEvQkUsZUFBcUI7UUFBckIsdUNBQXFCO1FBQ1gsZUFBbUM7UUFBbkMscURBQW1DO1FBRzlCLGVBQWlDO1FBQWpDLG1EQUFpQztRQU9oRCxlQUFnRDtRQUFoRCxrRUFBZ0QsMkNBQUE7UUFLbEIsZUFBc0M7UUFBdEMsd0RBQXNDO1FBTXBFLGVBQWdEO1FBQWhELGtFQUFnRCwyQ0FBQTs7a0REZDNDLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Ozs7SUFFQyx3Q0FBbUI7O0lBQ25CLG9EQUE2Qzs7SUFDN0Msa0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBsYWJlbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZExhYmVsRXhhbXBsZSB7XG4gIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgaGlkZVJlcXVpcmVkQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSk7XG4gIGZsb2F0TGFiZWxDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdhdXRvJyk7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gZmIuZ3JvdXAoe1xuICAgICAgaGlkZVJlcXVpcmVkOiB0aGlzLmhpZGVSZXF1aXJlZENvbnRyb2wsXG4gICAgICBmbG9hdExhYmVsOiB0aGlzLmZsb2F0TGFiZWxDb250cm9sLFxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJvcHRpb25zXCI+XG4gICAgPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xdPVwiaGlkZVJlcXVpcmVkQ29udHJvbFwiPkhpZGUgcmVxdWlyZWQgbWFya2VyPC9tYXQtY2hlY2tib3g+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD5GbG9hdCBsYWJlbDogPC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sXT1cImZsb2F0TGFiZWxDb250cm9sXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYXV0b1wiPkF1dG88L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYWx3YXlzXCI+QWx3YXlzPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIlxuICAgICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cImhpZGVSZXF1aXJlZENvbnRyb2wudmFsdWVcIlxuICAgICAgICBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsQ29udHJvbC52YWx1ZVwiPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCIgcmVxdWlyZWQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxDb250cm9sLnZhbHVlXCI+XG4gICAgICA8bWF0LWxhYmVsPkJvdGggYSBsYWJlbCBhbmQgYSBwbGFjZWhvbGRlcjwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiXG4gICAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwiaGlkZVJlcXVpcmVkQ29udHJvbC52YWx1ZVwiXG4gICAgICAgIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxDb250cm9sLnZhbHVlXCI+XG4gICAgICA8bWF0LXNlbGVjdCByZXF1aXJlZD5cbiAgICAgICAgPG1hdC1vcHRpb24+LS0gTm9uZSAtLTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb25cIj5PcHRpb248L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICA8bWF0LWxhYmVsPjxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+IDxiPiBGYW5jeTwvYj4gPGk+IGxhYmVsPC9pPjwvbWF0LWxhYmVsPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZm9ybT5cbjwvZGl2PlxuIl19