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
/** @title Form field with label */
var FormFieldLabelExample = /** @class */ (function () {
    function FormFieldLabelExample(fb) {
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = fb.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }
    FormFieldLabelExample.ɵfac = function FormFieldLabelExample_Factory(t) { return new (t || FormFieldLabelExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    FormFieldLabelExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldLabelExample, selectors: [["form-field-label-example"]], decls: 31, vars: 8, consts: [[1, "example-container"], [3, "formGroup"], [3, "formControl"], ["value", "auto"], ["value", "always"], ["appearance", "fill", 3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], ["appearance", "fill", 3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["value", "option"]], template: function FormFieldLabelExample_Template(rf, ctx) { if (rf & 1) {
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
}());
export { FormFieldLabelExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldLabelExample, [{
        type: Component,
        args: [{
                selector: 'form-field-label-example',
                templateUrl: 'form-field-label-example.html',
                styleUrls: ['form-field-label-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7QUFFbkUsbUNBQW1DO0FBQ25DO0lBVUUsK0JBQVksRUFBZTtRQUgzQix3QkFBbUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUcxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDdEMsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4RkFWVSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ1RsQyw4QkFDRTtZQUFBLCtCQUNFO1lBQUEsdUNBQWtEO1lBQUEsb0NBQW9CO1lBQUEsaUJBQWU7WUFDckYsMkJBQ0U7WUFBQSw2QkFBTztZQUFBLDZCQUFhO1lBQUEsaUJBQVE7WUFDNUIsMENBQ0U7WUFBQSwyQ0FBK0I7WUFBQSxvQkFBSTtZQUFBLGlCQUFtQjtZQUN0RCw0Q0FBaUM7WUFBQSx1QkFBTTtZQUFBLGlCQUFtQjtZQUM1RCxpQkFBa0I7WUFDcEIsaUJBQU07WUFFTiwwQ0FHRTtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLDBDQUNFO1lBQUEsa0NBQVc7WUFBQSwrQ0FBOEI7WUFBQSxpQkFBWTtZQUNyRCw0QkFDRjtZQUFBLGlCQUFpQjtZQUVqQiwwQ0FHRTtZQUFBLHNDQUNFO1lBQUEsbUNBQVk7WUFBQSwyQkFBVTtZQUFBLGlCQUFhO1lBQ25DLHVDQUEyQjtZQUFBLHVCQUFNO1lBQUEsaUJBQWE7WUFDaEQsaUJBQWE7WUFDYixrQ0FBVztZQUFBLGlDQUFVO1lBQUEseUJBQVE7WUFBQSxpQkFBVztZQUFDLDBCQUFJO1lBQUEsdUJBQUs7WUFBQSxpQkFBSTtZQUFDLDBCQUFJO1lBQUEsdUJBQUs7WUFBQSxpQkFBSTtZQUFBLGlCQUFZO1lBQ2xGLGlCQUFpQjtZQUNuQixpQkFBTztZQUNULGlCQUFNOztZQS9CRSxlQUFxQjtZQUFyQix1Q0FBcUI7WUFDWCxlQUFtQztZQUFuQyxxREFBbUM7WUFHOUIsZUFBaUM7WUFBakMsbURBQWlDO1lBT2hELGVBQWdEO1lBQWhELGtFQUFnRCwyQ0FBQTtZQUtsQixlQUFzQztZQUF0Qyx3REFBc0M7WUFNcEUsZUFBZ0Q7WUFBaEQsa0VBQWdELDJDQUFBOztnQ0R2QnhEO0NBb0JDLEFBaEJELElBZ0JDO1NBWFkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBsYWJlbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZExhYmVsRXhhbXBsZSB7XG4gIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgaGlkZVJlcXVpcmVkQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSk7XG4gIGZsb2F0TGFiZWxDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdhdXRvJyk7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gZmIuZ3JvdXAoe1xuICAgICAgaGlkZVJlcXVpcmVkOiB0aGlzLmhpZGVSZXF1aXJlZENvbnRyb2wsXG4gICAgICBmbG9hdExhYmVsOiB0aGlzLmZsb2F0TGFiZWxDb250cm9sLFxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJvcHRpb25zXCI+XG4gICAgPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xdPVwiaGlkZVJlcXVpcmVkQ29udHJvbFwiPkhpZGUgcmVxdWlyZWQgbWFya2VyPC9tYXQtY2hlY2tib3g+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD5GbG9hdCBsYWJlbDogPC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sXT1cImZsb2F0TGFiZWxDb250cm9sXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYXV0b1wiPkF1dG88L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYWx3YXlzXCI+QWx3YXlzPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIlxuICAgICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cImhpZGVSZXF1aXJlZENvbnRyb2wudmFsdWVcIlxuICAgICAgICBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsQ29udHJvbC52YWx1ZVwiPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCIgcmVxdWlyZWQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxDb250cm9sLnZhbHVlXCI+XG4gICAgICA8bWF0LWxhYmVsPkJvdGggYSBsYWJlbCBhbmQgYSBwbGFjZWhvbGRlcjwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiXG4gICAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwiaGlkZVJlcXVpcmVkQ29udHJvbC52YWx1ZVwiXG4gICAgICAgIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxDb250cm9sLnZhbHVlXCI+XG4gICAgICA8bWF0LXNlbGVjdCByZXF1aXJlZD5cbiAgICAgICAgPG1hdC1vcHRpb24+LS0gTm9uZSAtLTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb25cIj5PcHRpb248L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICA8bWF0LWxhYmVsPjxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+IDxiPiBGYW5jeTwvYj4gPGk+IGxhYmVsPC9pPjwvbWF0LWxhYmVsPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZm9ybT5cbjwvZGl2PlxuIl19