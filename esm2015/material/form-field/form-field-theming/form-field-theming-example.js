import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/common";
function FormFieldThemingExample_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Min size: 10px");
    i0.ɵɵelementEnd();
} }
/** @title Form field theming */
export class FormFieldThemingExample {
    constructor(fb) {
        this.colorControl = new FormControl('primary');
        this.fontSizeControl = new FormControl(16, Validators.min(10));
        this.options = fb.group({
            color: this.colorControl,
            fontSize: this.fontSizeControl,
        });
    }
    getFontSize() {
        return Math.max(10, this.fontSizeControl.value);
    }
}
FormFieldThemingExample.ɵfac = function FormFieldThemingExample_Factory(t) { return new (t || FormFieldThemingExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
FormFieldThemingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldThemingExample, selectors: [["form-field-theming-example"]], decls: 18, vars: 8, consts: [[1, "example-container", 3, "formGroup"], ["appearance", "fill", 3, "color"], [3, "formControl"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "type", "number", "placeholder", "Ex. 12", "min", "10", 3, "formControl"], ["matSuffix", ""], [4, "ngIf"]], template: function FormFieldThemingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Color");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-select", 2);
        i0.ɵɵelementStart(5, "mat-option", 3);
        i0.ɵɵtext(6, "Primary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-option", 4);
        i0.ɵɵtext(8, "Accent");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-option", 5);
        i0.ɵɵtext(10, "Warn");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-form-field", 1);
        i0.ɵɵelementStart(12, "mat-label");
        i0.ɵɵtext(13, "Font size");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "input", 6);
        i0.ɵɵelementStart(15, "span", 7);
        i0.ɵɵtext(16, "px");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, FormFieldThemingExample_mat_error_17_Template, 2, 0, "mat-error", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("font-size", ctx.getFontSize(), "px");
        i0.ɵɵproperty("formGroup", ctx.options);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.colorControl.value);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.colorControl);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("color", ctx.colorControl.value);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.fontSizeControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.fontSizeControl.invalid);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.FormControlDirective, i4.MatOption, i5.MatInput, i1.MinValidator, i1.NumberValueAccessor, i1.DefaultValueAccessor, i2.MatSuffix, i6.NgIf, i2.MatError], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldThemingExample, [{
        type: Component,
        args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDYTNFLGlDQUEyQztJQUFBLDhCQUFjO0lBQUEsaUJBQVk7O0FEWHpFLGdDQUFnQztBQU1oQyxNQUFNLE9BQU8sdUJBQXVCO0lBS2xDLFlBQVksRUFBZTtRQUgzQixpQkFBWSxHQUFHLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUd4RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs4RkFkVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ1RwQywrQkFBMEY7UUFDeEYseUNBQStEO1FBQzdELGlDQUFXO1FBQUEscUJBQUs7UUFBQSxpQkFBWTtRQUM1QixxQ0FBeUM7UUFDdkMscUNBQTRCO1FBQUEsdUJBQU87UUFBQSxpQkFBYTtRQUNoRCxxQ0FBMkI7UUFBQSxzQkFBTTtRQUFBLGlCQUFhO1FBQzlDLHFDQUF5QjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDNUMsaUJBQWE7UUFDZixpQkFBaUI7UUFFakIsMENBQStEO1FBQzdELGtDQUFXO1FBQUEsMEJBQVM7UUFBQSxpQkFBWTtRQUNoQyw0QkFBNEY7UUFDNUYsZ0NBQWdCO1FBQUEsbUJBQUU7UUFBQSxpQkFBTztRQUN6QixzRkFBcUU7UUFDdkUsaUJBQWlCO1FBQ25CLGlCQUFPOztRQWhCK0Msb0RBQW1DO1FBQXpELHVDQUFxQjtRQUNqQixlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFFaEQsZUFBNEI7UUFBNUIsOENBQTRCO1FBT1IsZUFBNEI7UUFBNUIsOENBQTRCO1FBRVQsZUFBK0I7UUFBL0IsaURBQStCO1FBRXRFLGVBQTZCO1FBQTdCLGtEQUE2Qjs7dUZETGhDLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB0aGVtaW5nICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUge1xuICBvcHRpb25zOiBGb3JtR3JvdXA7XG4gIGNvbG9yQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgncHJpbWFyeScpO1xuICBmb250U2l6ZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woMTYsIFZhbGlkYXRvcnMubWluKDEwKSk7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gZmIuZ3JvdXAoe1xuICAgICAgY29sb3I6IHRoaXMuY29sb3JDb250cm9sLFxuICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemVDb250cm9sLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Rm9udFNpemUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDEwLCB0aGlzLmZvbnRTaXplQ29udHJvbC52YWx1ZSk7XG4gIH1cbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBbZm9ybUdyb3VwXT1cIm9wdGlvbnNcIiBbc3R5bGUuZm9udFNpemUucHhdPVwiZ2V0Rm9udFNpemUoKVwiPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBbY29sb3JdPVwiY29sb3JDb250cm9sLnZhbHVlXCI+XG4gICAgPG1hdC1sYWJlbD5Db2xvcjwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJjb2xvckNvbnRyb2xcIj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicHJpbWFyeVwiPlByaW1hcnk8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImFjY2VudFwiPkFjY2VudDwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwid2FyblwiPldhcm48L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIFtjb2xvcl09XCJjb2xvckNvbnRyb2wudmFsdWVcIj5cbiAgICA8bWF0LWxhYmVsPkZvbnQgc2l6ZTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJFeC4gMTJcIiBbZm9ybUNvbnRyb2xdPVwiZm9udFNpemVDb250cm9sXCIgbWluPVwiMTBcIj5cbiAgICA8c3BhbiBtYXRTdWZmaXg+cHg8L3NwYW4+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImZvbnRTaXplQ29udHJvbC5pbnZhbGlkXCI+TWluIHNpemU6IDEwcHg8L21hdC1lcnJvcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==