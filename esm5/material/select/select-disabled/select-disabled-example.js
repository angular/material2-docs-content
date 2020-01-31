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
var SelectDisabledExample = /** @class */ (function () {
    function SelectDisabledExample() {
        this.disableSelect = new FormControl(false);
    }
    SelectDisabledExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-disabled-example',
                    templateUrl: 'select-disabled-example.html',
                    styleUrls: ['select-disabled-example.css'],
                },] },
    ];
    SelectDisabledExample.ɵfac = function SelectDisabledExample_Factory(t) { return new (t || SelectDisabledExample)(); };
    SelectDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectDisabledExample, selectors: [["select-disabled-example"]], decls: 30, vars: 3, consts: [[3, "formControl"], [3, "disabled"], ["value", "option1"], ["value", "option2", "disabled", ""], ["value", "option3"], ["matNativeControl", "", 3, "disabled"], ["value", "", "selected", ""], ["value", "volvo"], ["value", "saab", "disabled", ""], ["value", "mercedes"], ["value", "audi"]], template: function SelectDisabledExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "mat-checkbox", 0);
            i0.ɵɵtext(2, "Disable select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h4");
            i0.ɵɵtext(4, "mat-select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Choose an option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-select", 1);
            i0.ɵɵelementStart(9, "mat-option", 2);
            i0.ɵɵtext(10, "Option 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-option", 3);
            i0.ɵɵtext(12, "Option 2 (disabled)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-option", 4);
            i0.ɵɵtext(14, "Option 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "h4");
            i0.ɵɵtext(16, "native html select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-form-field");
            i0.ɵɵelementStart(18, "mat-label");
            i0.ɵɵtext(19, "Choose an option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "select", 5);
            i0.ɵɵelement(21, "option", 6);
            i0.ɵɵelementStart(22, "option", 7);
            i0.ɵɵtext(23, "Volvo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "option", 8);
            i0.ɵɵtext(25, "Saab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "option", 9);
            i0.ɵɵtext(27, "Mercedes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "option", 10);
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
        } }, directives: [i1.MatCheckbox, i2.NgControlStatus, i2.FormControlDirective, i3.MatFormField, i3.MatLabel, i4.MatSelect, i5.MatOption, i6.MatInput, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], styles: [""] });
    return SelectDisabledExample;
}());
export { SelectDisabledExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectDisabledExample, [{
        type: Component,
        args: [{
                selector: 'select-disabled-example',
                templateUrl: 'select-disabled-example.html',
                styleUrls: ['select-disabled-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWRpc2FibGVkL3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1kaXNhYmxlZC9zZWxlY3QtZGlzYWJsZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUUzQyw2QkFBNkI7QUFDN0I7SUFBQTtRQU1FLGtCQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7OzhGQUNZLHFCQUFxQjs4REFBckIscUJBQXFCO1lDVGxDLHlCQUNFO1lBQUEsdUNBQTRDO1lBQUEsOEJBQWM7WUFBQSxpQkFBZTtZQUMzRSxpQkFBSTtZQUVKLDBCQUFJO1lBQUEsMEJBQVU7WUFBQSxpQkFBSztZQUNuQixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsZ0NBQWdCO1lBQUEsaUJBQVk7WUFDdkMscUNBQ0U7WUFBQSxxQ0FBNEI7WUFBQSx5QkFBUTtZQUFBLGlCQUFhO1lBQ2pELHNDQUFxQztZQUFBLG9DQUFtQjtZQUFBLGlCQUFhO1lBQ3JFLHNDQUE0QjtZQUFBLHlCQUFRO1lBQUEsaUJBQWE7WUFDbkQsaUJBQWE7WUFDZixpQkFBaUI7WUFFakIsMkJBQUk7WUFBQSxtQ0FBa0I7WUFBQSxpQkFBSztZQUMzQix1Q0FDRTtZQUFBLGtDQUFXO1lBQUEsaUNBQWdCO1lBQUEsaUJBQVk7WUFDdkMsa0NBQ0U7WUFBQSw2QkFBbUM7WUFDbkMsa0NBQXNCO1lBQUEsc0JBQUs7WUFBQSxpQkFBUztZQUNwQyxrQ0FBOEI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQzNDLGtDQUF5QjtZQUFBLHlCQUFRO1lBQUEsaUJBQVM7WUFDMUMsbUNBQXFCO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNwQyxpQkFBUztZQUNYLGlCQUFpQjs7WUF2QkQsZUFBNkI7WUFBN0IsK0NBQTZCO1lBTS9CLGVBQWdDO1lBQWhDLGtEQUFnQztZQVVuQixnQkFBZ0M7WUFBaEMsa0RBQWdDOztnQ0RqQjNEO0NBV0MsQUFQRCxJQU9DO1NBRlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIERpc2FibGVkIHNlbGVjdCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWRpc2FibGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERpc2FibGVkRXhhbXBsZSB7XG4gIGRpc2FibGVTZWxlY3QgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xufVxuIiwiPHA+XG4gIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sXT1cImRpc2FibGVTZWxlY3RcIj5EaXNhYmxlIHNlbGVjdDwvbWF0LWNoZWNrYm94PlxuPC9wPlxuXG48aDQ+bWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIGFuIG9wdGlvbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZGlzYWJsZWRdPVwiZGlzYWJsZVNlbGVjdC52YWx1ZVwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uMVwiPk9wdGlvbiAxPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uMlwiIGRpc2FibGVkPk9wdGlvbiAyIChkaXNhYmxlZCk8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24zXCI+T3B0aW9uIDM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkNob29zZSBhbiBvcHRpb248L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFtkaXNhYmxlZF09XCJkaXNhYmxlU2VsZWN0LnZhbHVlXCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPlZvbHZvPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIiBkaXNhYmxlZD5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG4iXX0=