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
SelectDisabledExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectDisabledExample, selectors: [["select-disabled-example"]], decls: 30, vars: 3, consts: [[3, "formControl"], ["appearance", "fill"], [3, "disabled"], ["value", "option1"], ["value", "option2", "disabled", ""], ["value", "option3"], ["matNativeControl", "", 3, "disabled"], ["value", "", "selected", ""], ["value", "volvo"], ["value", "saab", "disabled", ""], ["value", "mercedes"], ["value", "audi"]], template: function SelectDisabledExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatCheckbox, i2.NgControlStatus, i2.FormControlDirective, i3.MatFormField, i3.MatLabel, i4.MatSelect, i5.MatOption, i6.MatInput, i2.NgSelectOption, i2.ɵNgSelectMultipleOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectDisabledExample, [{
        type: Component,
        args: [{ selector: 'select-disabled-example', template: "<p>\n  <mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox>\n</p>\n\n<h4>mat-select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Choose an option</mat-label>\n  <mat-select [disabled]=\"disableSelect.value\">\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Choose an option</mat-label>\n  <select matNativeControl [disabled]=\"disableSelect.value\">\n    <option value=\"\" selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\" disabled>Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWRpc2FibGVkL3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1kaXNhYmxlZC9zZWxlY3QtZGlzYWJsZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUUzQyw2QkFBNkI7QUFLN0IsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQztRQUtFLGtCQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEM7OzBGQUZZLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUmxDLHlCQUFHO1FBQ0QsdUNBQTRDO1FBQUEsOEJBQWM7UUFBQSxpQkFBZTtRQUMzRSxpQkFBSTtRQUVKLDBCQUFJO1FBQUEsMEJBQVU7UUFBQSxpQkFBSztRQUNuQix5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSxnQ0FBZ0I7UUFBQSxpQkFBWTtRQUN2QyxxQ0FBNkM7UUFDM0MscUNBQTRCO1FBQUEseUJBQVE7UUFBQSxpQkFBYTtRQUNqRCxzQ0FBcUM7UUFBQSxvQ0FBbUI7UUFBQSxpQkFBYTtRQUNyRSxzQ0FBNEI7UUFBQSx5QkFBUTtRQUFBLGlCQUFhO1FBQ25ELGlCQUFhO1FBQ2YsaUJBQWlCO1FBRWpCLDJCQUFJO1FBQUEsbUNBQWtCO1FBQUEsaUJBQUs7UUFDM0IsMENBQWtDO1FBQ2hDLGtDQUFXO1FBQUEsaUNBQWdCO1FBQUEsaUJBQVk7UUFDdkMsa0NBQTBEO1FBQ3hELDZCQUFtQztRQUNuQyxrQ0FBc0I7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQ3BDLGtDQUE4QjtRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDM0MsbUNBQXlCO1FBQUEseUJBQVE7UUFBQSxpQkFBUztRQUMxQyxtQ0FBcUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ3BDLGlCQUFTO1FBQ1gsaUJBQWlCOztRQXZCRCxlQUE2QjtRQUE3QiwrQ0FBNkI7UUFNL0IsZUFBZ0M7UUFBaEMsa0RBQWdDO1FBVW5CLGdCQUFnQztRQUFoQyxrREFBZ0M7O3VGRFQ5QyxxQkFBcUI7Y0FKakMsU0FBUzsyQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGlzYWJsZWQgc2VsZWN0ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERpc2FibGVkRXhhbXBsZSB7XG4gIGRpc2FibGVTZWxlY3QgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xufVxuIiwiPHA+XG4gIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sXT1cImRpc2FibGVTZWxlY3RcIj5EaXNhYmxlIHNlbGVjdDwvbWF0LWNoZWNrYm94PlxuPC9wPlxuXG48aDQ+bWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5DaG9vc2UgYW4gb3B0aW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtkaXNhYmxlZF09XCJkaXNhYmxlU2VsZWN0LnZhbHVlXCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24xXCI+T3B0aW9uIDE8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24yXCIgZGlzYWJsZWQ+T3B0aW9uIDIgKGRpc2FibGVkKTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj5PcHRpb24gMzwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5DaG9vc2UgYW4gb3B0aW9uPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbZGlzYWJsZWRdPVwiZGlzYWJsZVNlbGVjdC52YWx1ZVwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD48L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5Wb2x2bzwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCIgZGlzYWJsZWQ+U2FhYjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuIl19