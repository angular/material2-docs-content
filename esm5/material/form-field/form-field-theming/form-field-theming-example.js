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
var FormFieldThemingExample = /** @class */ (function () {
    function FormFieldThemingExample(fb) {
        this.colorControl = new FormControl('primary');
        this.fontSizeControl = new FormControl(16, Validators.min(10));
        this.options = fb.group({
            color: this.colorControl,
            fontSize: this.fontSizeControl,
        });
    }
    FormFieldThemingExample.prototype.getFontSize = function () {
        return Math.max(10, this.fontSizeControl.value);
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
    FormFieldThemingExample.ɵfac = function FormFieldThemingExample_Factory(t) { return new (t || FormFieldThemingExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    FormFieldThemingExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldThemingExample, selectors: [["form-field-theming-example"]], decls: 18, vars: 8, consts: [[1, "example-container", 3, "formGroup"], ["appearance", "fill", 3, "color"], [3, "formControl"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "type", "number", "placeholder", "Ex. 12", "min", "10", 3, "formControl"], ["matSuffix", ""], [4, "ngIf"]], template: function FormFieldThemingExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.FormControlDirective, i4.MatOption, i5.MatInput, i1.NumberValueAccessor, i1.DefaultValueAccessor, i2.MatSuffix, i6.NgIf, i2.MatError], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return FormFieldThemingExample;
}());
export { FormFieldThemingExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldThemingExample, [{
        type: Component,
        args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDYTNFLGlDQUEyQztJQUFBLDhCQUFjO0lBQUEsaUJBQVk7O0FEWHpFLGdDQUFnQztBQUNoQztJQVVFLGlDQUFZLEVBQWU7UUFIM0IsaUJBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxXQUFXLEVBQUUsaUNBQWlDO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDOUM7Ozs7Z0JBUE8sV0FBVzs7a0dBUU4sdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUNUcEMsK0JBQ0U7WUFBQSx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEscUJBQUs7WUFBQSxpQkFBWTtZQUM1QixxQ0FDRTtZQUFBLHFDQUE0QjtZQUFBLHVCQUFPO1lBQUEsaUJBQWE7WUFDaEQscUNBQTJCO1lBQUEsc0JBQU07WUFBQSxpQkFBYTtZQUM5QyxxQ0FBeUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFhO1lBQzVDLGlCQUFhO1lBQ2YsaUJBQWlCO1lBRWpCLDBDQUNFO1lBQUEsa0NBQVc7WUFBQSwwQkFBUztZQUFBLGlCQUFZO1lBQ2hDLDRCQUNBO1lBQUEsZ0NBQWdCO1lBQUEsbUJBQUU7WUFBQSxpQkFBTztZQUN6QixzRkFBMkM7WUFDN0MsaUJBQWlCO1lBQ25CLGlCQUFPOztZQWhCK0Msb0RBQW1DO1lBQXpELHVDQUFxQjtZQUNqQixlQUE0QjtZQUE1Qiw4Q0FBNEI7WUFFaEQsZUFBNEI7WUFBNUIsOENBQTRCO1lBT1IsZUFBNEI7WUFBNUIsOENBQTRCO1lBRVQsZUFBK0I7WUFBL0IsaURBQStCO1lBRXZFLGVBQStCO1lBQS9CLGtEQUErQjs7a0NEZDlDO0NBd0JDLEFBcEJELElBb0JDO1NBZlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgdGhlbWluZyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZFRoZW1pbmdFeGFtcGxlIHtcbiAgb3B0aW9uczogRm9ybUdyb3VwO1xuICBjb2xvckNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3ByaW1hcnknKTtcbiAgZm9udFNpemVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKDE2LCBWYWxpZGF0b3JzLm1pbigxMCkpO1xuXG4gIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMub3B0aW9ucyA9IGZiLmdyb3VwKHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yQ29udHJvbCxcbiAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplQ29udHJvbCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZvbnRTaXplKCkge1xuICAgIHJldHVybiBNYXRoLm1heCgxMCwgdGhpcy5mb250U2l6ZUNvbnRyb2wudmFsdWUpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgW2Zvcm1Hcm91cF09XCJvcHRpb25zXCIgW3N0eWxlLmZvbnRTaXplLnB4XT1cImdldEZvbnRTaXplKClcIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgW2NvbG9yXT1cImNvbG9yQ29udHJvbC52YWx1ZVwiPlxuICAgIDxtYXQtbGFiZWw+Q29sb3I8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiY29sb3JDb250cm9sXCI+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInByaW1hcnlcIj5QcmltYXJ5PC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJhY2NlbnRcIj5BY2NlbnQ8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIndhcm5cIj5XYXJuPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBbY29sb3JdPVwiY29sb3JDb250cm9sLnZhbHVlXCI+XG4gICAgPG1hdC1sYWJlbD5Gb250IHNpemU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRXguIDEyXCIgW2Zvcm1Db250cm9sXT1cImZvbnRTaXplQ29udHJvbFwiIG1pbj1cIjEwXCI+XG4gICAgPHNwYW4gbWF0U3VmZml4PnB4PC9zcGFuPlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJmb250U2l6ZUNvbnRyb2wuaW52YWxpZFwiPk1pbiBzaXplOiAxMHB4PC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=