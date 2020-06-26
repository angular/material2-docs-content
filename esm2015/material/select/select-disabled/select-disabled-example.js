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
let SelectDisabledExample = /** @class */ (() => {
    class SelectDisabledExample {
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
        } }, directives: [i1.MatCheckbox, i2.NgControlStatus, i2.FormControlDirective, i3.MatFormField, i3.MatLabel, i4.MatSelect, i5.MatOption, i6.MatInput, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], styles: [""] });
    return SelectDisabledExample;
})();
export { SelectDisabledExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectDisabledExample, [{
        type: Component,
        args: [{
                selector: 'select-disabled-example',
                templateUrl: 'select-disabled-example.html',
                styleUrls: ['select-disabled-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWRpc2FibGVkL3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1kaXNhYmxlZC9zZWxlY3QtZGlzYWJsZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUUzQyw2QkFBNkI7QUFDN0I7SUFBQSxNQUthLHFCQUFxQjtRQUxsQztZQU1FLGtCQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7OzhGQUZZLHFCQUFxQjs4REFBckIscUJBQXFCO1lDVGxDLHlCQUNFO1lBQUEsdUNBQTRDO1lBQUEsOEJBQWM7WUFBQSxpQkFBZTtZQUMzRSxpQkFBSTtZQUVKLDBCQUFJO1lBQUEsMEJBQVU7WUFBQSxpQkFBSztZQUNuQix5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsZ0NBQWdCO1lBQUEsaUJBQVk7WUFDdkMscUNBQ0U7WUFBQSxxQ0FBNEI7WUFBQSx5QkFBUTtZQUFBLGlCQUFhO1lBQ2pELHNDQUFxQztZQUFBLG9DQUFtQjtZQUFBLGlCQUFhO1lBQ3JFLHNDQUE0QjtZQUFBLHlCQUFRO1lBQUEsaUJBQWE7WUFDbkQsaUJBQWE7WUFDZixpQkFBaUI7WUFFakIsMkJBQUk7WUFBQSxtQ0FBa0I7WUFBQSxpQkFBSztZQUMzQiwwQ0FDRTtZQUFBLGtDQUFXO1lBQUEsaUNBQWdCO1lBQUEsaUJBQVk7WUFDdkMsa0NBQ0U7WUFBQSw2QkFBbUM7WUFDbkMsa0NBQXNCO1lBQUEsc0JBQUs7WUFBQSxpQkFBUztZQUNwQyxrQ0FBOEI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQzNDLG1DQUF5QjtZQUFBLHlCQUFRO1lBQUEsaUJBQVM7WUFDMUMsbUNBQXFCO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNwQyxpQkFBUztZQUNYLGlCQUFpQjs7WUF2QkQsZUFBNkI7WUFBN0IsK0NBQTZCO1lBTS9CLGVBQWdDO1lBQWhDLGtEQUFnQztZQVVuQixnQkFBZ0M7WUFBaEMsa0RBQWdDOztnQ0RqQjNEO0tBV0M7U0FGWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGlzYWJsZWQgc2VsZWN0ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtZGlzYWJsZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RGlzYWJsZWRFeGFtcGxlIHtcbiAgZGlzYWJsZVNlbGVjdCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSk7XG59XG4iLCI8cD5cbiAgPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xdPVwiZGlzYWJsZVNlbGVjdFwiPkRpc2FibGUgc2VsZWN0PC9tYXQtY2hlY2tib3g+XG48L3A+XG5cbjxoND5tYXQtc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBhbiBvcHRpb248L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Rpc2FibGVkXT1cImRpc2FibGVTZWxlY3QudmFsdWVcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvbjFcIj5PcHRpb24gMTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvbjJcIiBkaXNhYmxlZD5PcHRpb24gMiAoZGlzYWJsZWQpPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uM1wiPk9wdGlvbiAzPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBhbiBvcHRpb248L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFtkaXNhYmxlZF09XCJkaXNhYmxlU2VsZWN0LnZhbHVlXCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPlZvbHZvPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIiBkaXNhYmxlZD5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG4iXX0=