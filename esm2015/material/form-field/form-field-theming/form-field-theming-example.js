/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/form-field/form-field-theming/form-field-theming-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * \@title Form field theming
 */
export class FormFieldThemingExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, Validators.min(10)],
        });
    }
    /**
     * @return {?}
     */
    getFontSize() {
        return Math.max(10, this.options.value.fontSize);
    }
}
FormFieldThemingExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            },] },
];
/** @nocollapse */
FormFieldThemingExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ FormFieldThemingExample.ɵfac = function FormFieldThemingExample_Factory(t) { return new (t || FormFieldThemingExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ FormFieldThemingExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldThemingExample, selectors: [["form-field-theming-example"]], decls: 12, vars: 5, consts: [[1, "example-container", 3, "formGroup"], [3, "color"], ["placeholder", "Color", "formControlName", "color"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "type", "number", "placeholder", "Font size (px)", "formControlName", "fontSize", "min", "10"], [4, "ngIf"]], template: function FormFieldThemingExample_Template(rf, ctx) { if (rf & 1) {
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
        const currVal_4 = (tmp_4_0 = ctx.options.get("fontSize")) == null ? null : tmp_4_0.invalid;
        i0.ɵɵstyleProp("font-size", ctx.getFontSize(), "px");
        i0.ɵɵproperty("formGroup", ctx.options);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.options.value.color);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("color", ctx.options.value.color);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", currVal_4);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i3.MatSelect, i1.NgControlStatus, i1.FormControlName, i4.MatOption, i5.MatInput, i1.NumberValueAccessor, i1.DefaultValueAccessor, i6.NgIf, i2.MatError], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldThemingExample, [{
        type: Component,
        args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
if (false) {
    /** @type {?} */
    FormFieldThemingExample.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ1U5RCxpQ0FBb0Q7SUFBQSw4QkFBYztJQUFBLGlCQUFZOzs7OztBREZsRixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBR2xDLFlBQVksRUFBZTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7WUFQTyxXQUFXOzs4RkFRTix1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1RwQywrQkFDRTtRQUFBLHlDQUNFO1FBQUEscUNBQ0U7UUFBQSxxQ0FBNEI7UUFBQSx1QkFBTztRQUFBLGlCQUFhO1FBQ2hELHFDQUEyQjtRQUFBLHNCQUFNO1FBQUEsaUJBQWE7UUFDOUMscUNBQXlCO1FBQUEsb0JBQUk7UUFBQSxpQkFBYTtRQUM1QyxpQkFBYTtRQUNmLGlCQUFpQjtRQUVqQix5Q0FDRTtRQUFBLDRCQUNBO1FBQUEsc0ZBQW9EO1FBQ3RELGlCQUFpQjtRQUNuQixpQkFBTzs7OztRQWIrQyxvREFBbUM7UUFBekQsdUNBQXFCO1FBQ25DLGVBQTZCO1FBQTdCLCtDQUE2QjtRQVE3QixlQUE2QjtRQUE3QiwrQ0FBNkI7UUFFaEMsZUFBd0M7UUFBeEMsZ0NBQXdDOztrRERGMUMsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzs7OztJQUVDLDBDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgdGhlbWluZyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZFRoZW1pbmdFeGFtcGxlIHtcbiAgb3B0aW9uczogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMub3B0aW9ucyA9IGZiLmdyb3VwKHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBmb250U2l6ZTogWzE2LCBWYWxpZGF0b3JzLm1pbigxMCldLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Rm9udFNpemUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDEwLCB0aGlzLm9wdGlvbnMudmFsdWUuZm9udFNpemUpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgW2Zvcm1Hcm91cF09XCJvcHRpb25zXCIgW3N0eWxlLmZvbnRTaXplLnB4XT1cImdldEZvbnRTaXplKClcIj5cbiAgPG1hdC1mb3JtLWZpZWxkIFtjb2xvcl09XCJvcHRpb25zLnZhbHVlLmNvbG9yXCI+XG4gICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJDb2xvclwiIGZvcm1Db250cm9sTmFtZT1cImNvbG9yXCI+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInByaW1hcnlcIj5QcmltYXJ5PC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJhY2NlbnRcIj5BY2NlbnQ8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIndhcm5cIj5XYXJuPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgW2NvbG9yXT1cIm9wdGlvbnMudmFsdWUuY29sb3JcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRm9udCBzaXplIChweClcIiBmb3JtQ29udHJvbE5hbWU9XCJmb250U2l6ZVwiIG1pbj1cIjEwXCI+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cIm9wdGlvbnMuZ2V0KCdmb250U2l6ZScpPy5pbnZhbGlkXCI+TWluIHNpemU6IDEwcHg8L21hdC1lcnJvcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==