import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/material/input";
/** @title Disabled select */
export class SelectDisabledExample {
    constructor() {
        this.disableSelect = new FormControl(false);
    }
}
SelectDisabledExample.ɵfac = function SelectDisabledExample_Factory(t) { return new (t || SelectDisabledExample)(); };
SelectDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectDisabledExample, selectors: [["select-disabled-example"]], decls: 30, vars: 3, consts: [[3, "formControl"], ["appearance", "fill"], [3, "disabled"], ["value", "option1"], ["value", "option2", "disabled", ""], ["value", "option3"], ["matNativeControl", "", 3, "disabled"], ["value", "", "selected", ""], ["value", "volvo"], ["value", "saab", "disabled", ""], ["value", "mercedes"], ["value", "audi"]], template: function SelectDisabledExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "mat-checkbox", 0);
        i0.ɵɵtext(2, "Disable select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "h4");
        i0.ɵɵtext(4, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field", 1);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Choose an option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-select", 2);
        i0.ɵɵelementStart(9, "mat-option", 3);
        i0.ɵɵtext(10, "Option 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-option", 4);
        i0.ɵɵtext(12, "Option 2 (disabled)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-option", 5);
        i0.ɵɵtext(14, "Option 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "h4");
        i0.ɵɵtext(16, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-form-field", 1);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Choose an option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "select", 6);
        i0.ɵɵelement(21, "option", 7);
        i0.ɵɵelementStart(22, "option", 8);
        i0.ɵɵtext(23, "Volvo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "option", 9);
        i0.ɵɵtext(25, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "option", 10);
        i0.ɵɵtext(27, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "option", 11);
        i0.ɵɵtext(29, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.disableSelect);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("disabled", ctx.disableSelect.value);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("disabled", ctx.disableSelect.value);
    } }, directives: [i1.MatCheckbox, i2.NgControlStatus, i2.FormControlDirective, i3.MatFormField, i3.MatLabel, i4.MatSelect, i5.MatOption, i6.MatInput, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectDisabledExample, [{
        type: Component,
        args: [{
                selector: 'select-disabled-example',
                templateUrl: 'select-disabled-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWRpc2FibGVkL3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1kaXNhYmxlZC9zZWxlY3QtZGlzYWJsZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUUzQyw2QkFBNkI7QUFLN0IsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQztRQUtFLGtCQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEM7OzBGQUZZLHFCQUFxQjswREFBckIscUJBQXFCO1FDUmxDLHlCQUNFO1FBQUEsdUNBQTRDO1FBQUEsOEJBQWM7UUFBQSxpQkFBZTtRQUMzRSxpQkFBSTtRQUVKLDBCQUFJO1FBQUEsMEJBQVU7UUFBQSxpQkFBSztRQUNuQix5Q0FDRTtRQUFBLGlDQUFXO1FBQUEsZ0NBQWdCO1FBQUEsaUJBQVk7UUFDdkMscUNBQ0U7UUFBQSxxQ0FBNEI7UUFBQSx5QkFBUTtRQUFBLGlCQUFhO1FBQ2pELHNDQUFxQztRQUFBLG9DQUFtQjtRQUFBLGlCQUFhO1FBQ3JFLHNDQUE0QjtRQUFBLHlCQUFRO1FBQUEsaUJBQWE7UUFDbkQsaUJBQWE7UUFDZixpQkFBaUI7UUFFakIsMkJBQUk7UUFBQSxtQ0FBa0I7UUFBQSxpQkFBSztRQUMzQiwwQ0FDRTtRQUFBLGtDQUFXO1FBQUEsaUNBQWdCO1FBQUEsaUJBQVk7UUFDdkMsa0NBQ0U7UUFBQSw2QkFBbUM7UUFDbkMsa0NBQXNCO1FBQUEsc0JBQUs7UUFBQSxpQkFBUztRQUNwQyxrQ0FBOEI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQzNDLG1DQUF5QjtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDMUMsbUNBQXFCO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNwQyxpQkFBUztRQUNYLGlCQUFpQjs7UUF2QkQsZUFBNkI7UUFBN0IsK0NBQTZCO1FBTS9CLGVBQWdDO1FBQWhDLGtEQUFnQztRQVVuQixnQkFBZ0M7UUFBaEMsa0RBQWdDOzt1RkRUOUMscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIERpc2FibGVkIHNlbGVjdCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWRpc2FibGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REaXNhYmxlZEV4YW1wbGUge1xuICBkaXNhYmxlU2VsZWN0ID0gbmV3IEZvcm1Db250cm9sKGZhbHNlKTtcbn1cbiIsIjxwPlxuICA8bWF0LWNoZWNrYm94IFtmb3JtQ29udHJvbF09XCJkaXNhYmxlU2VsZWN0XCI+RGlzYWJsZSBzZWxlY3Q8L21hdC1jaGVja2JveD5cbjwvcD5cblxuPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIGFuIG9wdGlvbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZGlzYWJsZWRdPVwiZGlzYWJsZVNlbGVjdC52YWx1ZVwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uMVwiPk9wdGlvbiAxPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uMlwiIGRpc2FibGVkPk9wdGlvbiAyIChkaXNhYmxlZCk8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24zXCI+T3B0aW9uIDM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIGFuIG9wdGlvbjwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgW2Rpc2FibGVkXT1cImRpc2FibGVTZWxlY3QudmFsdWVcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+Vm9sdm88L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiIGRpc2FibGVkPlNhYWI8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwibWVyY2VkZXNcIj5NZXJjZWRlczwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbiJdfQ==