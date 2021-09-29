import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
/**
 * @title Testing with MatFormFieldHarness
 */
export class FormFieldHarnessExample {
    constructor() {
        this.requiredControl = new FormControl('Initial value', [Validators.required]);
    }
}
FormFieldHarnessExample.ɵfac = function FormFieldHarnessExample_Factory(t) { return new (t || FormFieldHarnessExample)(); };
FormFieldHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldHarnessExample, selectors: [["form-field-harness-example"]], decls: 8, vars: 1, consts: [["id", "with-errors", "appearance", "fill"], [1, "custom-control"], ["matInput", "", 3, "formControl"], ["align", "start"]], template: function FormFieldHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtext(2, "Custom control harness");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵelementStart(4, "mat-error");
        i0.ɵɵtext(5, "Error");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-hint", 3);
        i0.ɵɵtext(7, "Hint");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.requiredControl);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1.MatError, i1.MatHint], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldHarnessExample, [{
        type: Component,
        args: [{ selector: 'form-field-harness-example', template: "<mat-form-field id=\"with-errors\" appearance=\"fill\">\n  <span class=\"custom-control\">Custom control harness</span>\n  <input matInput [formControl]=\"requiredControl\">\n\n  <mat-error>Error</mat-error>\n  <mat-hint align=\"start\">Hint</mat-hint>\n</mat-form-field>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtaGFybmVzcy9mb3JtLWZpZWxkLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1oYXJuZXNzL2Zvcm0tZmllbGQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUV2RDs7R0FFRztBQUtILE1BQU0sT0FBTyx1QkFBdUI7SUFKcEM7UUFLRSxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzNFOzs4RkFGWSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ1ZwQyx5Q0FBbUQ7UUFDakQsK0JBQTZCO1FBQUEsc0NBQXNCO1FBQUEsaUJBQU87UUFDMUQsMkJBQWdEO1FBRWhELGlDQUFXO1FBQUEscUJBQUs7UUFBQSxpQkFBWTtRQUM1QixtQ0FBd0I7UUFBQSxvQkFBSTtRQUFBLGlCQUFXO1FBQ3pDLGlCQUFpQjs7UUFKQyxlQUErQjtRQUEvQixpREFBK0I7O3VGRFFwQyx1QkFBdUI7Y0FKbkMsU0FBUzsyQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRGb3JtRmllbGRIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkSGFybmVzc0V4YW1wbGUge1xuICByZXF1aXJlZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ0luaXRpYWwgdmFsdWUnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGlkPVwid2l0aC1lcnJvcnNcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8c3BhbiBjbGFzcz1cImN1c3RvbS1jb250cm9sXCI+Q3VzdG9tIGNvbnRyb2wgaGFybmVzczwvc3Bhbj5cbiAgPGlucHV0IG1hdElucHV0IFtmb3JtQ29udHJvbF09XCJyZXF1aXJlZENvbnRyb2xcIj5cblxuICA8bWF0LWVycm9yPkVycm9yPC9tYXQtZXJyb3I+XG4gIDxtYXQtaGludCBhbGlnbj1cInN0YXJ0XCI+SGludDwvbWF0LWhpbnQ+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19