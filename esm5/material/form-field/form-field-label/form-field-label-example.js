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
/** @title Form field with label */
var FormFieldLabelExample = /** @class */ (function () {
    function FormFieldLabelExample(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    FormFieldLabelExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-label-example',
                    templateUrl: 'form-field-label-example.html',
                    styleUrls: ['form-field-label-example.css'],
                },] },
    ];
    /** @nocollapse */
    FormFieldLabelExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    FormFieldLabelExample.ɵfac = function FormFieldLabelExample_Factory(t) { return new (t || FormFieldLabelExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    FormFieldLabelExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldLabelExample, selectors: [["form-field-label-example"]], decls: 33, vars: 6, consts: [[1, "example-container"], [1, "example-container", 3, "formGroup"], ["formControlName", "hideRequired"], ["formControlName", "floatLabel"], ["value", "auto"], ["value", "always"], ["value", "never"], [3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], [3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["value", "option"]], template: function FormFieldLabelExample_Template(rf, ctx) { if (rf & 1) {
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
    return FormFieldLabelExample;
}());
export { FormFieldLabelExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(FormFieldLabelExample, [{
        type: Component,
        args: [{
                selector: 'form-field-label-example',
                templateUrl: 'form-field-label-example.html',
                styleUrls: ['form-field-label-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7O0FBRXRELG1DQUFtQztBQUNuQztJQVFFLCtCQUFZLEVBQWU7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDNUM7Ozs7Z0JBUE8sV0FBVzs7OEZBUU4scUJBQXFCOzhEQUFyQixxQkFBcUI7WUNUbEMsOEJBQ0U7WUFBQSwrQkFDRTtZQUFBLHVDQUE2QztZQUFBLG9DQUFvQjtZQUFBLGlCQUFlO1lBQ2hGLDJCQUNFO1lBQUEsNkJBQU87WUFBQSw2QkFBYTtZQUFBLGlCQUFRO1lBQzVCLDBDQUNFO1lBQUEsMkNBQStCO1lBQUEsb0JBQUk7WUFBQSxpQkFBbUI7WUFDdEQsNENBQWlDO1lBQUEsdUJBQU07WUFBQSxpQkFBbUI7WUFDMUQsNENBQWdDO1lBQUEsc0JBQUs7WUFBQSxpQkFBbUI7WUFDMUQsaUJBQWtCO1lBQ3BCLGlCQUFNO1lBQ1IsaUJBQU87WUFFUCwwQ0FHRTtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLDBDQUNFO1lBQUEsa0NBQVc7WUFBQSwrQ0FBOEI7WUFBQSxpQkFBWTtZQUNyRCw2QkFDRjtZQUFBLGlCQUFpQjtZQUVqQiwwQ0FHRTtZQUFBLHVDQUNFO1lBQUEsbUNBQVk7WUFBQSwyQkFBVTtZQUFBLGlCQUFhO1lBQ25DLHVDQUEyQjtZQUFBLHVCQUFNO1lBQUEsaUJBQWE7WUFDaEQsaUJBQWE7WUFDYixrQ0FBVztZQUFBLGlDQUFVO1lBQUEseUJBQVE7WUFBQSxpQkFBVztZQUFDLDBCQUFJO1lBQUEsdUJBQUs7WUFBQSxpQkFBSTtZQUFDLDBCQUFJO1lBQUEsdUJBQUs7WUFBQSxpQkFBSTtZQUFBLGlCQUFZO1lBQ2xGLGlCQUFpQjtZQUNuQixpQkFBTTs7WUFoQzRCLGVBQXFCO1lBQXJCLHVDQUFxQjtZQWFqRCxnQkFBaUQ7WUFBakQsbUVBQWlELDRDQUFBO1lBS3JDLGVBQXVDO1lBQXZDLHlEQUF1QztZQU1uRCxlQUFpRDtZQUFqRCxtRUFBaUQsNENBQUE7O2dDRHpCdkQ7Q0FrQkMsQUFkRCxJQWNDO1NBVFkscUJBQXFCO21DQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB3aXRoIGxhYmVsICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkTGFiZWxFeGFtcGxlIHtcbiAgb3B0aW9uczogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMub3B0aW9ucyA9IGZiLmdyb3VwKHtcbiAgICAgIGhpZGVSZXF1aXJlZDogZmFsc2UsXG4gICAgICBmbG9hdExhYmVsOiAnYXV0bycsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8Zm9ybSBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgW2Zvcm1Hcm91cF09XCJvcHRpb25zXCI+XG4gICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJoaWRlUmVxdWlyZWRcIj5IaWRlIHJlcXVpcmVkIG1hcmtlcjwvbWF0LWNoZWNrYm94PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+RmxvYXQgbGFiZWw6IDwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGZvcm1Db250cm9sTmFtZT1cImZsb2F0TGFiZWxcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJhdXRvXCI+QXV0bzwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJhbHdheXNcIj5BbHdheXM8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwibmV2ZXJcIj5OZXZlcjwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG5cbiAgPG1hdC1mb3JtLWZpZWxkXG4gICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cIm9wdGlvbnMudmFsdWUuaGlkZVJlcXVpcmVkXCJcbiAgICAgIFtmbG9hdExhYmVsXT1cIm9wdGlvbnMudmFsdWUuZmxvYXRMYWJlbFwiPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpbXBsZSBwbGFjZWhvbGRlclwiIHJlcXVpcmVkPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBbZmxvYXRMYWJlbF09XCJvcHRpb25zLnZhbHVlLmZsb2F0TGFiZWxcIj5cbiAgICA8bWF0LWxhYmVsPkJvdGggYSBsYWJlbCBhbmQgYSBwbGFjZWhvbGRlcjwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpbXBsZSBwbGFjZWhvbGRlclwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZFxuICAgICAgW2hpZGVSZXF1aXJlZE1hcmtlcl09XCJvcHRpb25zLnZhbHVlLmhpZGVSZXF1aXJlZFwiXG4gICAgICBbZmxvYXRMYWJlbF09XCJvcHRpb25zLnZhbHVlLmZsb2F0TGFiZWxcIj5cbiAgICA8bWF0LXNlbGVjdCByZXF1aXJlZD5cbiAgICAgIDxtYXQtb3B0aW9uPi0tIE5vbmUgLS08L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvblwiPk9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gICAgPG1hdC1sYWJlbD48bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPiA8Yj4gRmFuY3k8L2I+IDxpPiBsYWJlbDwvaT48L21hdC1sYWJlbD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19