import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/common";
function FormFieldThemingExample_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Min size: 10px");
    i0.ɵɵelementEnd();
} }
/** @title Form field theming */
var FormFieldThemingExample = /** @class */ (function () {
    function FormFieldThemingExample(fb) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, Validators.min(10)],
        });
    }
    FormFieldThemingExample.prototype.getFontSize = function () {
        return Math.max(10, this.options.value.fontSize);
    };
    FormFieldThemingExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-theming-example',
                    templateUrl: 'form-field-theming-example.html',
                    styleUrls: ['form-field-theming-example.css'],
                },] },
    ];
    /** @nocollapse */
    FormFieldThemingExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    FormFieldThemingExample.ngFactoryDef = function FormFieldThemingExample_Factory(t) { return new (t || FormFieldThemingExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    FormFieldThemingExample.ngComponentDef = i0.ɵɵdefineComponent({ type: FormFieldThemingExample, selectors: [["form-field-theming-example"]], decls: 12, vars: 5, consts: [[1, "example-container", 3, "formGroup"], [3, "color"], ["placeholder", "Color", "formControlName", "color"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "type", "number", "placeholder", "Font size (px)", "formControlName", "fontSize", "min", "10"], [4, "ngIf"]], template: function FormFieldThemingExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-select", 2);
            i0.ɵɵelementStart(3, "mat-option", 3);
            i0.ɵɵtext(4, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-option", 4);
            i0.ɵɵtext(6, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-option", 5);
            i0.ɵɵtext(8, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-form-field", 1);
            i0.ɵɵelement(10, "input", 6);
            i0.ɵɵtemplate(11, FormFieldThemingExample_mat_error_11_Template, 2, 0, "mat-error", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var tmp_4_0 = null;
            var currVal_4 = (tmp_4_0 = ctx.options.get("fontSize")) == null ? null : tmp_4_0.invalid;
            i0.ɵɵstyleProp("font-size", ctx.getFontSize(), "px");
            i0.ɵɵproperty("formGroup", ctx.options);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("color", ctx.options.value.color);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("color", ctx.options.value.color);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", currVal_4);
        } }, directives: [i1.ɵangular_packages_forms_forms_z, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i3.MatSelect, i1.NgControlStatus, i1.FormControlName, i4.MatOption, i5.MatInput, i1.NumberValueAccessor, i1.DefaultValueAccessor, i6.NgIf, i2.MatError], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return FormFieldThemingExample;
}());
export { FormFieldThemingExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(FormFieldThemingExample, [{
        type: Component,
        args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLXRoZW1pbmcvZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLXRoZW1pbmcvZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ1U5RCxpQ0FBb0Q7SUFBQSw4QkFBYztJQUFBLGlCQUFZOztBRFJsRixnQ0FBZ0M7QUFDaEM7SUFRRSxpQ0FBWSxFQUFlO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QixLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxXQUFXLEVBQUUsaUNBQWlDO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDOUM7Ozs7Z0JBUE8sV0FBVzs7MEdBUU4sdUJBQXVCOzBFQUF2Qix1QkFBdUI7WUNUcEMsK0JBQ0U7WUFBQSx5Q0FDRTtZQUFBLHFDQUNFO1lBQUEscUNBQTRCO1lBQUEsdUJBQU87WUFBQSxpQkFBYTtZQUNoRCxxQ0FBMkI7WUFBQSxzQkFBTTtZQUFBLGlCQUFhO1lBQzlDLHFDQUF5QjtZQUFBLG9CQUFJO1lBQUEsaUJBQWE7WUFDNUMsaUJBQWE7WUFDZixpQkFBaUI7WUFFakIseUNBQ0U7WUFBQSw0QkFDQTtZQUFBLHNGQUFvRDtZQUN0RCxpQkFBaUI7WUFDbkIsaUJBQU87Ozs7WUFiK0Msb0RBQW1DO1lBQXpELHVDQUFxQjtZQUNuQyxlQUE2QjtZQUE3QiwrQ0FBNkI7WUFRN0IsZUFBNkI7WUFBN0IsK0NBQTZCO1lBRWhDLGVBQXdDO1lBQXhDLGdDQUF3Qzs7a0NEWHZEO0NBc0JDLEFBbEJELElBa0JDO1NBYlksdUJBQXVCO21DQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB0aGVtaW5nICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUge1xuICBvcHRpb25zOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gZmIuZ3JvdXAoe1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGZvbnRTaXplOiBbMTYsIFZhbGlkYXRvcnMubWluKDEwKV0sXG4gICAgfSk7XG4gIH1cblxuICBnZXRGb250U2l6ZSgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMTAsIHRoaXMub3B0aW9ucy52YWx1ZS5mb250U2l6ZSk7XG4gIH1cbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBbZm9ybUdyb3VwXT1cIm9wdGlvbnNcIiBbc3R5bGUuZm9udFNpemUucHhdPVwiZ2V0Rm9udFNpemUoKVwiPlxuICA8bWF0LWZvcm0tZmllbGQgW2NvbG9yXT1cIm9wdGlvbnMudmFsdWUuY29sb3JcIj5cbiAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbG9yXCIgZm9ybUNvbnRyb2xOYW1lPVwiY29sb3JcIj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicHJpbWFyeVwiPlByaW1hcnk8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImFjY2VudFwiPkFjY2VudDwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwid2FyblwiPldhcm48L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBbY29sb3JdPVwib3B0aW9ucy52YWx1ZS5jb2xvclwiPlxuICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJGb250IHNpemUgKHB4KVwiIGZvcm1Db250cm9sTmFtZT1cImZvbnRTaXplXCIgbWluPVwiMTBcIj5cbiAgICA8bWF0LWVycm9yICpuZ0lmPVwib3B0aW9ucy5nZXQoJ2ZvbnRTaXplJyk/LmludmFsaWRcIj5NaW4gc2l6ZTogMTBweDwvbWF0LWVycm9yPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19