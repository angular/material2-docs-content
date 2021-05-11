import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
function InputErrorStateMatcherExample_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Please enter a valid email address ");
    i0.ɵɵelementEnd();
} }
function InputErrorStateMatcherExample_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Email is ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title Input with a custom ErrorStateMatcher */
export class InputErrorStateMatcherExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
InputErrorStateMatcherExample.ɵfac = function InputErrorStateMatcherExample_Factory(t) { return new (t || InputErrorStateMatcherExample)(); };
InputErrorStateMatcherExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 9, vars: 4, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelementStart(5, "mat-hint");
        i0.ɵɵtext(6, "Errors appear instantly!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, InputErrorStateMatcherExample_mat_error_7_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(8, InputErrorStateMatcherExample_mat_error_8_Template, 4, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.MatHint, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'input-error-state-matcher-example',
                templateUrl: './input-error-state-matcher-example.html',
                styleUrls: ['./input-error-state-matcher-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBOEIsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNLL0UsaUNBQWdHO0lBQzlGLG9EQUNGO0lBQUEsaUJBQVk7OztJQUNaLGlDQUF5RDtJQUN2RCwwQkFBUztJQUFBLDhCQUFRO0lBQUEsd0JBQVE7SUFBQSxpQkFBUztJQUNwQyxpQkFBWTs7QURQaEIsa0VBQWtFO0FBQ2xFLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBWSxDQUFDLE9BQTJCLEVBQUUsSUFBd0M7UUFDaEYsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Q0FDRjtBQUVELG1EQUFtRDtBQU1uRCxNQUFNLE9BQU8sNkJBQTZCO0lBTDFDO1FBTUUscUJBQWdCLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFO1lBQ3JDLFVBQVUsQ0FBQyxRQUFRO1lBQ25CLFVBQVUsQ0FBQyxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUVILFlBQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7S0FDckM7OzBHQVBZLDZCQUE2QjtnRkFBN0IsNkJBQTZCO1FDbEIxQywrQkFBMkI7UUFDekIseUNBQTJDO1FBQ3pDLGlDQUFXO1FBQUEscUJBQUs7UUFBQSxpQkFBWTtRQUM1QiwyQkFDeUM7UUFDekMsZ0NBQVU7UUFBQSx3Q0FBd0I7UUFBQSxpQkFBVztRQUM3QywwRkFFWTtRQUNaLDBGQUVZO1FBQ2QsaUJBQWlCO1FBQ25CLGlCQUFPOztRQVYwQixlQUFnQztRQUFoQyxrREFBZ0Msa0NBQUE7UUFHakQsZUFBa0Y7UUFBbEYsMkdBQWtGO1FBR2xGLGVBQTJDO1FBQTNDLGdFQUEyQzs7dUZEUzlDLDZCQUE2QjtjQUx6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsV0FBVyxFQUFFLDBDQUEwQztnQkFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7YUFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtFcnJvclN0YXRlTWF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8qKiBFcnJvciB3aGVuIGludmFsaWQgY29udHJvbCBpcyBkaXJ0eSwgdG91Y2hlZCwgb3Igc3VibWl0dGVkLiAqL1xuZXhwb3J0IGNsYXNzIE15RXJyb3JTdGF0ZU1hdGNoZXIgaW1wbGVtZW50cyBFcnJvclN0YXRlTWF0Y2hlciB7XG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1N1Ym1pdHRlZCA9IGZvcm0gJiYgZm9ybS5zdWJtaXR0ZWQ7XG4gICAgcmV0dXJuICEhKGNvbnRyb2wgJiYgY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCB8fCBpc1N1Ym1pdHRlZCkpO1xuICB9XG59XG5cbi8qKiBAdGl0bGUgSW5wdXQgd2l0aCBhIGN1c3RvbSBFcnJvclN0YXRlTWF0Y2hlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZSB7XG4gIGVtYWlsRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtcbiAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgIFZhbGlkYXRvcnMuZW1haWwsXG4gIF0pO1xuXG4gIG1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpO1xufVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPG1hdC1sYWJlbD5FbWFpbDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBtYXRJbnB1dCBbZm9ybUNvbnRyb2xdPVwiZW1haWxGb3JtQ29udHJvbFwiIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeC4gcGF0QGV4YW1wbGUuY29tXCI+XG4gICAgPG1hdC1oaW50PkVycm9ycyBhcHBlYXIgaW5zdGFudGx5ITwvbWF0LWhpbnQ+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ2VtYWlsJykgJiYgIWVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcbiAgICA8L21hdC1lcnJvcj5cbiAgICA8bWF0LWVycm9yICpuZ0lmPVwiZW1haWxGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgRW1haWwgaXMgPHN0cm9uZz5yZXF1aXJlZDwvc3Ryb25nPlxuICAgIDwvbWF0LWVycm9yPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19