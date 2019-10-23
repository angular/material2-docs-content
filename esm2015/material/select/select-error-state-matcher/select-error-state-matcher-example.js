/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectErrorStateMatcherExample_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "You must make a selection");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Your selection is invalid ");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "You must make a selection");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Your selection is invalid ");
    i0.ɵɵelementEnd();
} }
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
export class MyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/**
 * \@title Select with a custom ErrorStateMatcher
 */
export class SelectErrorStateMatcherExample {
    constructor() {
        this.selected = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.selectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.nativeSelectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
SelectErrorStateMatcherExample.decorators = [
    { type: Component, args: [{
                selector: 'select-error-state-matcher-example',
                templateUrl: 'select-error-state-matcher-example.html',
                styleUrls: ['select-error-state-matcher-example.css'],
            },] },
];
/** @nocollapse */ SelectErrorStateMatcherExample.ɵfac = function SelectErrorStateMatcherExample_Factory(t) { return new (t || SelectErrorStateMatcherExample)(); };
/** @nocollapse */ SelectErrorStateMatcherExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectErrorStateMatcherExample, selectors: [["select-error-state-matcher-example"]], decls: 29, vars: 8, consts: [[3, "formControl", "errorStateMatcher"], ["value", "valid"], ["value", "invalid"], [4, "ngIf"], [1, "demo-full-width"], ["matNativeControl", "", 3, "formControl", "errorStateMatcher"], ["value", ""], ["value", "valid", "selected", ""]], template: function SelectErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Choose one");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 0);
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "Clear");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 1);
        i0.ɵɵtext(9, "Valid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 2);
        i0.ɵɵtext(11, "Invalid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-hint");
        i0.ɵɵtext(13, "Errors appear instantly!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, SelectErrorStateMatcherExample_mat_error_14_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(15, SelectErrorStateMatcherExample_mat_error_15_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "h4");
        i0.ɵɵtext(17, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-form-field", 4);
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Choose one");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "select", 5);
        i0.ɵɵelement(22, "option", 6);
        i0.ɵɵelementStart(23, "option", 7);
        i0.ɵɵtext(24, "Valid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "option", 2);
        i0.ɵɵtext(26, "Invalid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, SelectErrorStateMatcherExample_mat_error_27_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(28, SelectErrorStateMatcherExample_mat_error_28_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.selected)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.selected.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selected.hasError("pattern") && !ctx.selected.hasError("required"));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.nativeSelectFormControl)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("pattern") && !ctx.nativeSelectFormControl.hasError("required"));
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i1.MatHint, i5.NgIf, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i1.MatError], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SelectErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'select-error-state-matcher-example',
                templateUrl: 'select-error-state-matcher-example.html',
                styleUrls: ['select-error-state-matcher-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    SelectErrorStateMatcherExample.prototype.selected;
    /** @type {?} */
    SelectErrorStateMatcherExample.prototype.selectFormControl;
    /** @type {?} */
    SelectErrorStateMatcherExample.prototype.nativeSelectFormControl;
    /** @type {?} */
    SelectErrorStateMatcherExample.prototype.matcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXIvc2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXIvc2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQThCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNRakYsaUNBQWlEO0lBQUEseUNBQXlCO0lBQUEsaUJBQVk7OztJQUN0RixpQ0FDRTtJQUFBLDJDQUNGO0lBQUEsaUJBQVk7OztJQVdaLGlDQUFnRTtJQUFBLHlDQUF5QjtJQUFBLGlCQUFZOzs7SUFDckcsaUNBQ0U7SUFBQSwyQ0FDRjtJQUFBLGlCQUFZOzs7OztBRHJCZCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFDOUIsWUFBWSxDQUFDLE9BQTJCLEVBQUUsSUFBd0M7O2NBQzFFLFdBQVcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVM7UUFDMUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Q0FDRjs7OztBQVFELE1BQU0sT0FBTyw4QkFBOEI7SUFMM0M7UUFNRSxhQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ2xDLFVBQVUsQ0FBQyxRQUFRO1lBQ25CLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUMzQyxVQUFVLENBQUMsUUFBUTtZQUNuQixVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUM1QixDQUFDLENBQUM7UUFFSCw0QkFBdUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDakQsVUFBVSxDQUFDLFFBQVE7WUFDbkIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsWUFBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztLQUNyQzs7O1lBdEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RDs7NEdBQ1ksOEJBQThCO21FQUE5Qiw4QkFBOEI7UUNsQjNDLDBCQUFJO1FBQUEsMEJBQVU7UUFBQSxpQkFBSztRQUNuQixzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsMEJBQVU7UUFBQSxpQkFBWTtRQUNqQyxxQ0FDRTtRQUFBLGtDQUFZO1FBQUEscUJBQUs7UUFBQSxpQkFBYTtRQUM5QixxQ0FBMEI7UUFBQSw0QkFBWTtRQUFBLGlCQUFhO1FBQ25ELHNDQUE0QjtRQUFBLCtCQUFjO1FBQUEsaUJBQWE7UUFDekQsaUJBQWE7UUFDYixpQ0FBVTtRQUFBLHlDQUF3QjtRQUFBLGlCQUFXO1FBQzdDLDZGQUFpRDtRQUNqRCw2RkFDRTtRQUVKLGlCQUFpQjtRQUVqQiwyQkFBSTtRQUFBLG1DQUFrQjtRQUFBLGlCQUFLO1FBQzNCLDBDQUNFO1FBQUEsa0NBQVc7UUFBQSwyQkFBVTtRQUFBLGlCQUFZO1FBQ2pDLGtDQUNFO1FBQUEsNkJBQTBCO1FBQzFCLGtDQUErQjtRQUFBLDZCQUFZO1FBQUEsaUJBQVM7UUFDcEQsa0NBQXdCO1FBQUEsK0JBQWM7UUFBQSxpQkFBUztRQUNqRCxpQkFBUztRQUNULDZGQUFnRTtRQUNoRSw2RkFDRTtRQUVKLGlCQUFpQjs7UUF4QkgsZUFBd0I7UUFBeEIsMENBQXdCLGtDQUFBO1FBTXpCLGVBQXFDO1FBQXJDLHdEQUFxQztRQUNyQyxlQUFzRTtRQUF0RSw2RkFBc0U7UUFReEQsZUFBdUM7UUFBdkMseURBQXVDLGtDQUFBO1FBS3JELGVBQW9EO1FBQXBELHVFQUFvRDtRQUNwRCxlQUFvRztRQUFwRywySEFBb0c7O21DRE5wRyw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REOzs7O0lBRUMsa0RBR0c7O0lBRUgsMkRBR0c7O0lBRUgsaUVBR0c7O0lBRUgsaURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKiogRXJyb3Igd2hlbiBpbnZhbGlkIGNvbnRyb2wgaXMgZGlydHksIHRvdWNoZWQsIG9yIHN1Ym1pdHRlZC4gKi9cbmV4cG9ydCBjbGFzcyBNeUVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTdWJtaXR0ZWQgPSBmb3JtICYmIGZvcm0uc3VibWl0dGVkO1xuICAgIHJldHVybiAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQgfHwgaXNTdWJtaXR0ZWQpKTtcbiAgfVxufVxuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIGEgY3VzdG9tIEVycm9yU3RhdGVNYXRjaGVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlIHtcbiAgc2VsZWN0ZWQgPSBuZXcgRm9ybUNvbnRyb2woJ3ZhbGlkJywgW1xuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgVmFsaWRhdG9ycy5wYXR0ZXJuKCd2YWxpZCcpLFxuICBdKTtcblxuICBzZWxlY3RGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgndmFsaWQnLCBbXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICBWYWxpZGF0b3JzLnBhdHRlcm4oJ3ZhbGlkJyksXG4gIF0pO1xuXG4gIG5hdGl2ZVNlbGVjdEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCd2YWxpZCcsIFtcbiAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgIFZhbGlkYXRvcnMucGF0dGVybigndmFsaWQnKSxcbiAgXSk7XG5cbiAgbWF0Y2hlciA9IG5ldyBNeUVycm9yU3RhdGVNYXRjaGVyKCk7XG59XG4iLCI8aDQ+bWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIG9uZTwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwic2VsZWN0ZWRcIiBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiPlxuICAgIDxtYXQtb3B0aW9uPkNsZWFyPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidmFsaWRcIj5WYWxpZCBvcHRpb248L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJpbnZhbGlkXCI+SW52YWxpZCBvcHRpb248L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbiAgPG1hdC1oaW50PkVycm9ycyBhcHBlYXIgaW5zdGFudGx5ITwvbWF0LWhpbnQ+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJzZWxlY3RlZC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPllvdSBtdXN0IG1ha2UgYSBzZWxlY3Rpb248L21hdC1lcnJvcj5cbiAgPG1hdC1lcnJvciAqbmdJZj1cInNlbGVjdGVkLmhhc0Vycm9yKCdwYXR0ZXJuJykgJiYgIXNlbGVjdGVkLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgWW91ciBzZWxlY3Rpb24gaXMgaW52YWxpZFxuICA8L21hdC1lcnJvcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZGVtby1mdWxsLXdpZHRoXCI+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIG9uZTwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgW2Zvcm1Db250cm9sXT1cIm5hdGl2ZVNlbGVjdEZvcm1Db250cm9sXCIgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInZhbGlkXCIgc2VsZWN0ZWQ+VmFsaWQgb3B0aW9uPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImludmFsaWRcIj5JbnZhbGlkIG9wdGlvbjwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbiAgPG1hdC1lcnJvciAqbmdJZj1cIm5hdGl2ZVNlbGVjdEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+WW91IG11c3QgbWFrZSBhIHNlbGVjdGlvbjwvbWF0LWVycm9yPlxuICA8bWF0LWVycm9yICpuZ0lmPVwibmF0aXZlU2VsZWN0Rm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3BhdHRlcm4nKSAmJiAhbmF0aXZlU2VsZWN0Rm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICBZb3VyIHNlbGVjdGlvbiBpcyBpbnZhbGlkXG4gIDwvbWF0LWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==