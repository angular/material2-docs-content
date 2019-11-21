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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldLabelExample, [{
        type: Component,
        args: [{
                selector: 'form-field-label-example',
                templateUrl: 'form-field-label-example.html',
                styleUrls: ['form-field-label-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztBQUV0RCxtQ0FBbUM7QUFDbkM7SUFRRSwrQkFBWSxFQUFlO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QixZQUFZLEVBQUUsS0FBSztZQUNuQixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzVDOzs7O2dCQVBPLFdBQVc7OzhGQVFOLHFCQUFxQjs4REFBckIscUJBQXFCO1lDVGxDLDhCQUNFO1lBQUEsK0JBQ0U7WUFBQSx1Q0FBNkM7WUFBQSxvQ0FBb0I7WUFBQSxpQkFBZTtZQUNoRiwyQkFDRTtZQUFBLDZCQUFPO1lBQUEsNkJBQWE7WUFBQSxpQkFBUTtZQUM1QiwwQ0FDRTtZQUFBLDJDQUErQjtZQUFBLG9CQUFJO1lBQUEsaUJBQW1CO1lBQ3RELDRDQUFpQztZQUFBLHVCQUFNO1lBQUEsaUJBQW1CO1lBQzFELDRDQUFnQztZQUFBLHNCQUFLO1lBQUEsaUJBQW1CO1lBQzFELGlCQUFrQjtZQUNwQixpQkFBTTtZQUNSLGlCQUFPO1lBRVAsMENBR0U7WUFBQSw0QkFDRjtZQUFBLGlCQUFpQjtZQUVqQiwwQ0FDRTtZQUFBLGtDQUFXO1lBQUEsK0NBQThCO1lBQUEsaUJBQVk7WUFDckQsNkJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsMENBR0U7WUFBQSx1Q0FDRTtZQUFBLG1DQUFZO1lBQUEsMkJBQVU7WUFBQSxpQkFBYTtZQUNuQyx1Q0FBMkI7WUFBQSx1QkFBTTtZQUFBLGlCQUFhO1lBQ2hELGlCQUFhO1lBQ2Isa0NBQVc7WUFBQSxpQ0FBVTtZQUFBLHlCQUFRO1lBQUEsaUJBQVc7WUFBQywwQkFBSTtZQUFBLHVCQUFLO1lBQUEsaUJBQUk7WUFBQywwQkFBSTtZQUFBLHVCQUFLO1lBQUEsaUJBQUk7WUFBQSxpQkFBWTtZQUNsRixpQkFBaUI7WUFDbkIsaUJBQU07O1lBaEM0QixlQUFxQjtZQUFyQix1Q0FBcUI7WUFhakQsZ0JBQWlEO1lBQWpELG1FQUFpRCw0Q0FBQTtZQUtyQyxlQUF1QztZQUF2Qyx5REFBdUM7WUFNbkQsZUFBaUQ7WUFBakQsbUVBQWlELDRDQUFBOztnQ0R6QnZEO0NBa0JDLEFBZEQsSUFjQztTQVRZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBsYWJlbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZExhYmVsRXhhbXBsZSB7XG4gIG9wdGlvbnM6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBmYi5ncm91cCh7XG4gICAgICBoaWRlUmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgZmxvYXRMYWJlbDogJ2F1dG8nLFxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGZvcm0gY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiIFtmb3JtR3JvdXBdPVwib3B0aW9uc1wiPlxuICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiaGlkZVJlcXVpcmVkXCI+SGlkZSByZXF1aXJlZCBtYXJrZXI8L21hdC1jaGVja2JveD5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPkZsb2F0IGxhYmVsOiA8L2xhYmVsPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBmb3JtQ29udHJvbE5hbWU9XCJmbG9hdExhYmVsXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYXV0b1wiPkF1dG88L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYWx3YXlzXCI+QWx3YXlzPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIm5ldmVyXCI+TmV2ZXI8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuXG4gIDxtYXQtZm9ybS1maWVsZFxuICAgICAgW2hpZGVSZXF1aXJlZE1hcmtlcl09XCJvcHRpb25zLnZhbHVlLmhpZGVSZXF1aXJlZFwiXG4gICAgICBbZmxvYXRMYWJlbF09XCJvcHRpb25zLnZhbHVlLmZsb2F0TGFiZWxcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaW1wbGUgcGxhY2Vob2xkZXJcIiByZXF1aXJlZD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgW2Zsb2F0TGFiZWxdPVwib3B0aW9ucy52YWx1ZS5mbG9hdExhYmVsXCI+XG4gICAgPG1hdC1sYWJlbD5Cb3RoIGEgbGFiZWwgYW5kIGEgcGxhY2Vob2xkZXI8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaW1wbGUgcGxhY2Vob2xkZXJcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGRcbiAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwib3B0aW9ucy52YWx1ZS5oaWRlUmVxdWlyZWRcIlxuICAgICAgW2Zsb2F0TGFiZWxdPVwib3B0aW9ucy52YWx1ZS5mbG9hdExhYmVsXCI+XG4gICAgPG1hdC1zZWxlY3QgcmVxdWlyZWQ+XG4gICAgICA8bWF0LW9wdGlvbj4tLSBOb25lIC0tPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb25cIj5PcHRpb248L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICAgIDxtYXQtbGFiZWw+PG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj4gPGI+IEZhbmN5PC9iPiA8aT4gbGFiZWw8L2k+PC9tYXQtbGFiZWw+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiJdfQ==