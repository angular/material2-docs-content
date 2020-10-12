import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
function InputErrorsExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Please enter a valid email address ");
    i0.ɵɵelementEnd();
} }
function InputErrorsExample_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Email is ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * @title Input with error messages
 */
export class InputErrorsExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
    }
}
InputErrorsExample.ɵfac = function InputErrorsExample_Factory(t) { return new (t || InputErrorsExample)(); };
InputErrorsExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputErrorsExample, selectors: [["input-errors-example"]], decls: 7, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl"], [4, "ngIf"]], template: function InputErrorsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵtemplate(5, InputErrorsExample_mat_error_5_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(6, InputErrorsExample_mat_error_6_Template, 4, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.emailFormControl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputErrorsExample, [{
        type: Component,
        args: [{
                selector: 'input-errors-example',
                templateUrl: 'input-errors-example.html',
                styleUrls: ['input-errors-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3JzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1lcnJvcnMvaW5wdXQtZXJyb3JzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1lcnJvcnMvaW5wdXQtZXJyb3JzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNHbkQsaUNBQ0U7SUFBQSxvREFDRjtJQUFBLGlCQUFZOzs7SUFDWixpQ0FDRTtJQUFBLDBCQUFTO0lBQUEsOEJBQVE7SUFBQSx3QkFBUTtJQUFBLGlCQUFTO0lBQ3BDLGlCQUFZOztBRE5oQjs7R0FFRztBQU1ILE1BQU0sT0FBTyxrQkFBa0I7SUFML0I7UUFNRSxxQkFBZ0IsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDckMsVUFBVSxDQUFDLFFBQVE7WUFDbkIsVUFBVSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0tBQ0o7O29GQUxZLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FDWC9CLCtCQUNFO1FBQUEseUNBQ0U7UUFBQSxpQ0FBVztRQUFBLHFCQUFLO1FBQUEsaUJBQVk7UUFDNUIsMkJBQ0E7UUFBQSwrRUFFWTtRQUNaLCtFQUVZO1FBQ2QsaUJBQWlCO1FBQ25CLGlCQUFPOztRQVJhLGVBQWdDO1FBQWhDLGtEQUFnQztRQUNwQyxlQUFrRjtRQUFsRiwyR0FBa0Y7UUFHbEYsZUFBMkM7UUFBM0MsZ0VBQTJDOztrRERJOUMsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXQgd2l0aCBlcnJvciBtZXNzYWdlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1lcnJvcnMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtZXJyb3JzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbnB1dC1lcnJvcnMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRFcnJvcnNFeGFtcGxlIHtcbiAgZW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgVmFsaWRhdG9ycy5lbWFpbCxcbiAgXSk7XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8bWF0LWxhYmVsPkVtYWlsPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFtmb3JtQ29udHJvbF09XCJlbWFpbEZvcm1Db250cm9sXCIgcGxhY2Vob2xkZXI9XCJFeC4gcGF0QGV4YW1wbGUuY29tXCI+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ2VtYWlsJykgJiYgIWVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcbiAgICA8L21hdC1lcnJvcj5cbiAgICA8bWF0LWVycm9yICpuZ0lmPVwiZW1haWxGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgRW1haWwgaXMgPHN0cm9uZz5yZXF1aXJlZDwvc3Ryb25nPlxuICAgIDwvbWF0LWVycm9yPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19