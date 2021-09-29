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
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatCheckbox, i1.NgControlStatus, i1.FormControlDirective, i3.MatRadioGroup, i3.MatRadioButton, i4.MatFormField, i5.MatInput, i4.MatLabel, i6.MatSelect, i7.MatOption, i8.MatIcon], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldLabelExample, [{
        type: Component,
        args: [{ selector: 'form-field-label-example', template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <mat-form-field appearance=\"fill\"\n        [hideRequiredMarker]=\"hideRequiredControl.value\"\n        [floatLabel]=\"floatLabelControl.value\">\n      <input matInput placeholder=\"Simple placeholder\" required>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\" [floatLabel]=\"floatLabelControl.value\">\n      <mat-label>Both a label and a placeholder</mat-label>\n      <input matInput placeholder=\"Simple placeholder\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\"\n        [hideRequiredMarker]=\"hideRequiredControl.value\"\n        [floatLabel]=\"floatLabelControl.value\">\n      <mat-select required>\n        <mat-option>-- None --</mat-option>\n        <mat-option value=\"option\">Option</mat-option>\n      </mat-select>\n      <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n    </mat-form-field>\n  </form>\n</div>\n", styles: [".example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container .mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7QUFFbkUsbUNBQW1DO0FBTW5DLE1BQU0sT0FBTyxxQkFBcUI7SUFLaEMsWUFBWSxFQUFlO1FBSDNCLHdCQUFtQixHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDOzswRkFWVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ1RsQyw4QkFBK0I7UUFDN0IsK0JBQTRCO1FBQzFCLHVDQUFrRDtRQUFBLG9DQUFvQjtRQUFBLGlCQUFlO1FBQ3JGLDJCQUFLO1FBQ0gsNkJBQU87UUFBQSw2QkFBYTtRQUFBLGlCQUFRO1FBQzVCLDBDQUFtRDtRQUNqRCwyQ0FBK0I7UUFBQSxvQkFBSTtRQUFBLGlCQUFtQjtRQUN0RCw0Q0FBaUM7UUFBQSx1QkFBTTtRQUFBLGlCQUFtQjtRQUM1RCxpQkFBa0I7UUFDcEIsaUJBQU07UUFFTiwwQ0FFMkM7UUFDekMsNEJBQTBEO1FBQzVELGlCQUFpQjtRQUVqQiwwQ0FBeUU7UUFDdkUsa0NBQVc7UUFBQSwrQ0FBOEI7UUFBQSxpQkFBWTtRQUNyRCw0QkFBaUQ7UUFDbkQsaUJBQWlCO1FBRWpCLDBDQUUyQztRQUN6QyxzQ0FBcUI7UUFDbkIsbUNBQVk7UUFBQSwyQkFBVTtRQUFBLGlCQUFhO1FBQ25DLHVDQUEyQjtRQUFBLHVCQUFNO1FBQUEsaUJBQWE7UUFDaEQsaUJBQWE7UUFDYixrQ0FBVztRQUFBLGlDQUFVO1FBQUEseUJBQVE7UUFBQSxpQkFBVztRQUFDLDBCQUFHO1FBQUMsdUJBQUs7UUFBQSxpQkFBSTtRQUFDLDBCQUFHO1FBQUMsdUJBQUs7UUFBQSxpQkFBSTtRQUFBLGlCQUFZO1FBQ2xGLGlCQUFpQjtRQUNuQixpQkFBTztRQUNULGlCQUFNOztRQS9CRSxlQUFxQjtRQUFyQix1Q0FBcUI7UUFDWCxlQUFtQztRQUFuQyxxREFBbUM7UUFHOUIsZUFBaUM7UUFBakMsbURBQWlDO1FBT2hELGVBQWdEO1FBQWhELGtFQUFnRCwyQ0FBQTtRQUtsQixlQUFzQztRQUF0Qyx3REFBc0M7UUFNcEUsZUFBZ0Q7UUFBaEQsa0VBQWdELDJDQUFBOzt1RkRkM0MscUJBQXFCO2NBTGpDLFNBQVM7MkJBQ0UsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBsYWJlbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZExhYmVsRXhhbXBsZSB7XG4gIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgaGlkZVJlcXVpcmVkQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSk7XG4gIGZsb2F0TGFiZWxDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdhdXRvJyk7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gZmIuZ3JvdXAoe1xuICAgICAgaGlkZVJlcXVpcmVkOiB0aGlzLmhpZGVSZXF1aXJlZENvbnRyb2wsXG4gICAgICBmbG9hdExhYmVsOiB0aGlzLmZsb2F0TGFiZWxDb250cm9sLFxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJvcHRpb25zXCI+XG4gICAgPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xdPVwiaGlkZVJlcXVpcmVkQ29udHJvbFwiPkhpZGUgcmVxdWlyZWQgbWFya2VyPC9tYXQtY2hlY2tib3g+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD5GbG9hdCBsYWJlbDogPC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sXT1cImZsb2F0TGFiZWxDb250cm9sXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYXV0b1wiPkF1dG88L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYWx3YXlzXCI+QWx3YXlzPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIlxuICAgICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cImhpZGVSZXF1aXJlZENvbnRyb2wudmFsdWVcIlxuICAgICAgICBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsQ29udHJvbC52YWx1ZVwiPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCIgcmVxdWlyZWQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxDb250cm9sLnZhbHVlXCI+XG4gICAgICA8bWF0LWxhYmVsPkJvdGggYSBsYWJlbCBhbmQgYSBwbGFjZWhvbGRlcjwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiXG4gICAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwiaGlkZVJlcXVpcmVkQ29udHJvbC52YWx1ZVwiXG4gICAgICAgIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxDb250cm9sLnZhbHVlXCI+XG4gICAgICA8bWF0LXNlbGVjdCByZXF1aXJlZD5cbiAgICAgICAgPG1hdC1vcHRpb24+LS0gTm9uZSAtLTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb25cIj5PcHRpb248L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICA8bWF0LWxhYmVsPjxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+IDxiPiBGYW5jeTwvYj4gPGk+IGxhYmVsPC9pPjwvbWF0LWxhYmVsPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZm9ybT5cbjwvZGl2PlxuIl19