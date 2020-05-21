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
let FormFieldLabelExample = /** @class */ (() => {
    class FormFieldLabelExample {
        constructor(fb) {
            this.hideRequiredControl = new FormControl(false);
            this.floatLabelControl = new FormControl('auto');
            this.options = fb.group({
                hideRequired: this.hideRequiredControl,
                floatLabel: this.floatLabelControl,
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7QUFFbkUsbUNBQW1DO0FBQ25DO0lBQUEsTUFLYSxxQkFBcUI7UUFLaEMsWUFBWSxFQUFlO1lBSDNCLHdCQUFtQixHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7Z0JBQ3RDLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCO2FBQ25DLENBQUMsQ0FBQztRQUNMLENBQUM7OzhGQVZVLHFCQUFxQjs4REFBckIscUJBQXFCO1lDVGxDLDhCQUNFO1lBQUEsK0JBQ0U7WUFBQSx1Q0FBa0Q7WUFBQSxvQ0FBb0I7WUFBQSxpQkFBZTtZQUNyRiwyQkFDRTtZQUFBLDZCQUFPO1lBQUEsNkJBQWE7WUFBQSxpQkFBUTtZQUM1QiwwQ0FDRTtZQUFBLDJDQUErQjtZQUFBLG9CQUFJO1lBQUEsaUJBQW1CO1lBQ3RELDRDQUFpQztZQUFBLHVCQUFNO1lBQUEsaUJBQW1CO1lBQzVELGlCQUFrQjtZQUNwQixpQkFBTTtZQUVOLDBDQUdFO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsMENBQ0U7WUFBQSxrQ0FBVztZQUFBLCtDQUE4QjtZQUFBLGlCQUFZO1lBQ3JELDRCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLDBDQUdFO1lBQUEsc0NBQ0U7WUFBQSxtQ0FBWTtZQUFBLDJCQUFVO1lBQUEsaUJBQWE7WUFDbkMsdUNBQTJCO1lBQUEsdUJBQU07WUFBQSxpQkFBYTtZQUNoRCxpQkFBYTtZQUNiLGtDQUFXO1lBQUEsaUNBQVU7WUFBQSx5QkFBUTtZQUFBLGlCQUFXO1lBQUMsMEJBQUk7WUFBQSx1QkFBSztZQUFBLGlCQUFJO1lBQUMsMEJBQUk7WUFBQSx1QkFBSztZQUFBLGlCQUFJO1lBQUEsaUJBQVk7WUFDbEYsaUJBQWlCO1lBQ25CLGlCQUFPO1lBQ1QsaUJBQU07O1lBL0JFLGVBQXFCO1lBQXJCLHVDQUFxQjtZQUNYLGVBQW1DO1lBQW5DLHFEQUFtQztZQUc5QixlQUFpQztZQUFqQyxtREFBaUM7WUFPaEQsZUFBZ0Q7WUFBaEQsa0VBQWdELDJDQUFBO1lBS2xCLGVBQXNDO1lBQXRDLHdEQUFzQztZQU1wRSxlQUFnRDtZQUFoRCxrRUFBZ0QsMkNBQUE7O2dDRHZCeEQ7S0FvQkM7U0FYWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB3aXRoIGxhYmVsICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkTGFiZWxFeGFtcGxlIHtcbiAgb3B0aW9uczogRm9ybUdyb3VwO1xuICBoaWRlUmVxdWlyZWRDb250cm9sID0gbmV3IEZvcm1Db250cm9sKGZhbHNlKTtcbiAgZmxvYXRMYWJlbENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ2F1dG8nKTtcblxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBmYi5ncm91cCh7XG4gICAgICBoaWRlUmVxdWlyZWQ6IHRoaXMuaGlkZVJlcXVpcmVkQ29udHJvbCxcbiAgICAgIGZsb2F0TGFiZWw6IHRoaXMuZmxvYXRMYWJlbENvbnRyb2wsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cIm9wdGlvbnNcIj5cbiAgICA8bWF0LWNoZWNrYm94IFtmb3JtQ29udHJvbF09XCJoaWRlUmVxdWlyZWRDb250cm9sXCI+SGlkZSByZXF1aXJlZCBtYXJrZXI8L21hdC1jaGVja2JveD5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPkZsb2F0IGxhYmVsOiA8L2xhYmVsPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xdPVwiZmxvYXRMYWJlbENvbnRyb2xcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJhdXRvXCI+QXV0bzwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJhbHdheXNcIj5BbHdheXM8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L2Rpdj5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiXG4gICAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwiaGlkZVJlcXVpcmVkQ29udHJvbC52YWx1ZVwiXG4gICAgICAgIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxDb250cm9sLnZhbHVlXCI+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaW1wbGUgcGxhY2Vob2xkZXJcIiByZXF1aXJlZD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgW2Zsb2F0TGFiZWxdPVwiZmxvYXRMYWJlbENvbnRyb2wudmFsdWVcIj5cbiAgICAgIDxtYXQtbGFiZWw+Qm90aCBhIGxhYmVsIGFuZCBhIHBsYWNlaG9sZGVyPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaW1wbGUgcGxhY2Vob2xkZXJcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCJcbiAgICAgICAgW2hpZGVSZXF1aXJlZE1hcmtlcl09XCJoaWRlUmVxdWlyZWRDb250cm9sLnZhbHVlXCJcbiAgICAgICAgW2Zsb2F0TGFiZWxdPVwiZmxvYXRMYWJlbENvbnRyb2wudmFsdWVcIj5cbiAgICAgIDxtYXQtc2VsZWN0IHJlcXVpcmVkPlxuICAgICAgICA8bWF0LW9wdGlvbj4tLSBOb25lIC0tPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvblwiPk9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDxtYXQtbGFiZWw+PG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj4gPGI+IEZhbmN5PC9iPiA8aT4gbGFiZWw8L2k+PC9tYXQtbGFiZWw+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=