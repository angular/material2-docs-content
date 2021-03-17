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
export class FormFieldLabelExample {
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
FormFieldLabelExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldLabelExample, selectors: [["form-field-label-example"]], decls: 31, vars: 8, consts: [[1, "example-container"], [3, "formGroup"], [3, "formControl"], ["value", "auto"], ["value", "always"], ["appearance", "fill", 3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], ["appearance", "fill", 3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["value", "option"]], template: function FormFieldLabelExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.ɵangular_packages_forms_forms_ba, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatCheckbox, i1.NgControlStatus, i1.FormControlDirective, i3.MatRadioGroup, i3.MatRadioButton, i4.MatFormField, i5.MatInput, i4.MatLabel, i6.MatSelect, i7.MatOption, i8.MatIcon], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldLabelExample, [{
        type: Component,
        args: [{
                selector: 'form-field-label-example',
                templateUrl: 'form-field-label-example.html',
                styleUrls: ['form-field-label-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7QUFFbkUsbUNBQW1DO0FBTW5DLE1BQU0sT0FBTyxxQkFBcUI7SUFLaEMsWUFBWSxFQUFlO1FBSDNCLHdCQUFtQixHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDOzswRkFWVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ1RsQyw4QkFBK0I7UUFDN0IsK0JBQTRCO1FBQzFCLHVDQUFrRDtRQUFBLG9DQUFvQjtRQUFBLGlCQUFlO1FBQ3JGLDJCQUFLO1FBQ0gsNkJBQU87UUFBQSw2QkFBYTtRQUFBLGlCQUFRO1FBQzVCLDBDQUFtRDtRQUNqRCwyQ0FBK0I7UUFBQSxvQkFBSTtRQUFBLGlCQUFtQjtRQUN0RCw0Q0FBaUM7UUFBQSx1QkFBTTtRQUFBLGlCQUFtQjtRQUM1RCxpQkFBa0I7UUFDcEIsaUJBQU07UUFFTiwwQ0FFMkM7UUFDekMsNEJBQTBEO1FBQzVELGlCQUFpQjtRQUVqQiwwQ0FBeUU7UUFDdkUsa0NBQVc7UUFBQSwrQ0FBOEI7UUFBQSxpQkFBWTtRQUNyRCw0QkFBaUQ7UUFDbkQsaUJBQWlCO1FBRWpCLDBDQUUyQztRQUN6QyxzQ0FBcUI7UUFDbkIsbUNBQVk7UUFBQSwyQkFBVTtRQUFBLGlCQUFhO1FBQ25DLHVDQUEyQjtRQUFBLHVCQUFNO1FBQUEsaUJBQWE7UUFDaEQsaUJBQWE7UUFDYixrQ0FBVztRQUFBLGlDQUFVO1FBQUEseUJBQVE7UUFBQSxpQkFBVztRQUFDLDBCQUFHO1FBQUMsdUJBQUs7UUFBQSxpQkFBSTtRQUFDLDBCQUFHO1FBQUMsdUJBQUs7UUFBQSxpQkFBSTtRQUFBLGlCQUFZO1FBQ2xGLGlCQUFpQjtRQUNuQixpQkFBTztRQUNULGlCQUFNOztRQS9CRSxlQUFxQjtRQUFyQix1Q0FBcUI7UUFDWCxlQUFtQztRQUFuQyxxREFBbUM7UUFHOUIsZUFBaUM7UUFBakMsbURBQWlDO1FBT2hELGVBQWdEO1FBQWhELGtFQUFnRCwyQ0FBQTtRQUtsQixlQUFzQztRQUF0Qyx3REFBc0M7UUFNcEUsZUFBZ0Q7UUFBaEQsa0VBQWdELDJDQUFBOzt1RkRkM0MscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggbGFiZWwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRMYWJlbEV4YW1wbGUge1xuICBvcHRpb25zOiBGb3JtR3JvdXA7XG4gIGhpZGVSZXF1aXJlZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xuICBmbG9hdExhYmVsQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnYXV0bycpO1xuXG4gIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMub3B0aW9ucyA9IGZiLmdyb3VwKHtcbiAgICAgIGhpZGVSZXF1aXJlZDogdGhpcy5oaWRlUmVxdWlyZWRDb250cm9sLFxuICAgICAgZmxvYXRMYWJlbDogdGhpcy5mbG9hdExhYmVsQ29udHJvbCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwib3B0aW9uc1wiPlxuICAgIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sXT1cImhpZGVSZXF1aXJlZENvbnRyb2xcIj5IaWRlIHJlcXVpcmVkIG1hcmtlcjwvbWF0LWNoZWNrYm94PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+RmxvYXQgbGFiZWw6IDwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbF09XCJmbG9hdExhYmVsQ29udHJvbFwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImF1dG9cIj5BdXRvPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImFsd2F5c1wiPkFsd2F5czwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvZGl2PlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCJcbiAgICAgICAgW2hpZGVSZXF1aXJlZE1hcmtlcl09XCJoaWRlUmVxdWlyZWRDb250cm9sLnZhbHVlXCJcbiAgICAgICAgW2Zsb2F0TGFiZWxdPVwiZmxvYXRMYWJlbENvbnRyb2wudmFsdWVcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpbXBsZSBwbGFjZWhvbGRlclwiIHJlcXVpcmVkPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsQ29udHJvbC52YWx1ZVwiPlxuICAgICAgPG1hdC1sYWJlbD5Cb3RoIGEgbGFiZWwgYW5kIGEgcGxhY2Vob2xkZXI8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpbXBsZSBwbGFjZWhvbGRlclwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIlxuICAgICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cImhpZGVSZXF1aXJlZENvbnRyb2wudmFsdWVcIlxuICAgICAgICBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsQ29udHJvbC52YWx1ZVwiPlxuICAgICAgPG1hdC1zZWxlY3QgcmVxdWlyZWQ+XG4gICAgICAgIDxtYXQtb3B0aW9uPi0tIE5vbmUgLS08L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uXCI+T3B0aW9uPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPG1hdC1sYWJlbD48bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPiA8Yj4gRmFuY3k8L2I+IDxpPiBsYWJlbDwvaT48L21hdC1sYWJlbD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Zvcm0+XG48L2Rpdj5cbiJdfQ==