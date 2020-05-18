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
let FormFieldLabelExample = /** @class */ (() => {
    /**
     * \@title Form field with label
     */
    class FormFieldLabelExample {
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
    return FormFieldLabelExample;
})();
export { FormFieldLabelExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQUduRTs7OztJQUFBLE1BS2EscUJBQXFCOzs7O1FBS2hDLFlBQVksRUFBZTtZQUgzQix3QkFBbUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUcxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CO2dCQUN0QyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDOzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1Qzs7OztnQkFQTyxXQUFXOztpSEFRTixxQkFBcUI7aUZBQXJCLHFCQUFxQjtZQ1RsQyw4QkFDRTtZQUFBLCtCQUNFO1lBQUEsdUNBQWtEO1lBQUEsb0NBQW9CO1lBQUEsaUJBQWU7WUFDckYsMkJBQ0U7WUFBQSw2QkFBTztZQUFBLDZCQUFhO1lBQUEsaUJBQVE7WUFDNUIsMENBQ0U7WUFBQSwyQ0FBK0I7WUFBQSxvQkFBSTtZQUFBLGlCQUFtQjtZQUN0RCw0Q0FBaUM7WUFBQSx1QkFBTTtZQUFBLGlCQUFtQjtZQUM1RCxpQkFBa0I7WUFDcEIsaUJBQU07WUFFTiwwQ0FHRTtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLDBDQUNFO1lBQUEsa0NBQVc7WUFBQSwrQ0FBOEI7WUFBQSxpQkFBWTtZQUNyRCw0QkFDRjtZQUFBLGlCQUFpQjtZQUVqQiwwQ0FHRTtZQUFBLHNDQUNFO1lBQUEsbUNBQVk7WUFBQSwyQkFBVTtZQUFBLGlCQUFhO1lBQ25DLHVDQUEyQjtZQUFBLHVCQUFNO1lBQUEsaUJBQWE7WUFDaEQsaUJBQWE7WUFDYixrQ0FBVztZQUFBLGlDQUFVO1lBQUEseUJBQVE7WUFBQSxpQkFBVztZQUFDLDBCQUFJO1lBQUEsdUJBQUs7WUFBQSxpQkFBSTtZQUFDLDBCQUFJO1lBQUEsdUJBQUs7WUFBQSxpQkFBSTtZQUFBLGlCQUFZO1lBQ2xGLGlCQUFpQjtZQUNuQixpQkFBTztZQUNULGlCQUFNOztZQS9CRSxlQUFxQjtZQUFyQix1Q0FBcUI7WUFDWCxlQUFtQztZQUFuQyxxREFBbUM7WUFHOUIsZUFBaUM7WUFBakMsbURBQWlDO1lBT2hELGVBQWdEO1lBQWhELGtFQUFnRCwyQ0FBQTtZQUtsQixlQUFzQztZQUF0Qyx3REFBc0M7WUFNcEUsZUFBZ0Q7WUFBaEQsa0VBQWdELDJDQUFBOztnQ0R2QnhEO0tBb0JDO1NBWFkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOzs7O0lBRUMsd0NBQW1COztJQUNuQixvREFBNkM7O0lBQzdDLGtEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggbGFiZWwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRMYWJlbEV4YW1wbGUge1xuICBvcHRpb25zOiBGb3JtR3JvdXA7XG4gIGhpZGVSZXF1aXJlZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xuICBmbG9hdExhYmVsQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnYXV0bycpO1xuXG4gIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMub3B0aW9ucyA9IGZiLmdyb3VwKHtcbiAgICAgIGhpZGVSZXF1aXJlZDogdGhpcy5oaWRlUmVxdWlyZWRDb250cm9sLFxuICAgICAgZmxvYXRMYWJlbDogdGhpcy5mbG9hdExhYmVsQ29udHJvbCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwib3B0aW9uc1wiPlxuICAgIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sXT1cImhpZGVSZXF1aXJlZENvbnRyb2xcIj5IaWRlIHJlcXVpcmVkIG1hcmtlcjwvbWF0LWNoZWNrYm94PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+RmxvYXQgbGFiZWw6IDwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbF09XCJmbG9hdExhYmVsQ29udHJvbFwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImF1dG9cIj5BdXRvPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImFsd2F5c1wiPkFsd2F5czwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvZGl2PlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCJcbiAgICAgICAgW2hpZGVSZXF1aXJlZE1hcmtlcl09XCJoaWRlUmVxdWlyZWRDb250cm9sLnZhbHVlXCJcbiAgICAgICAgW2Zsb2F0TGFiZWxdPVwiZmxvYXRMYWJlbENvbnRyb2wudmFsdWVcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpbXBsZSBwbGFjZWhvbGRlclwiIHJlcXVpcmVkPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsQ29udHJvbC52YWx1ZVwiPlxuICAgICAgPG1hdC1sYWJlbD5Cb3RoIGEgbGFiZWwgYW5kIGEgcGxhY2Vob2xkZXI8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpbXBsZSBwbGFjZWhvbGRlclwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIlxuICAgICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cImhpZGVSZXF1aXJlZENvbnRyb2wudmFsdWVcIlxuICAgICAgICBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsQ29udHJvbC52YWx1ZVwiPlxuICAgICAgPG1hdC1zZWxlY3QgcmVxdWlyZWQ+XG4gICAgICAgIDxtYXQtb3B0aW9uPi0tIE5vbmUgLS08L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uXCI+T3B0aW9uPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPG1hdC1sYWJlbD48bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPiA8Yj4gRmFuY3k8L2I+IDxpPiBsYWJlbDwvaT48L21hdC1sYWJlbD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Zvcm0+XG48L2Rpdj5cbiJdfQ==