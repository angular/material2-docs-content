import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/forms";
/**
 * @title Button-toggles with forms
 */
export class ButtonToggleFormsExample {
    constructor() {
        this.fontStyleControl = new FormControl();
    }
}
ButtonToggleFormsExample.ɵfac = function ButtonToggleFormsExample_Factory(t) { return new (t || ButtonToggleFormsExample)(); };
ButtonToggleFormsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonToggleFormsExample, selectors: [["button-toggle-forms-example"]], decls: 24, vars: 4, consts: [["aria-label", "Font Style", 3, "ngModel", "ngModelChange"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["aria-label", "Font Style", 3, "formControl"]], template: function ButtonToggleFormsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "Button Toggle inside of a Template-driven form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-button-toggle-group", 0);
        i0.ɵɵlistener("ngModelChange", function ButtonToggleFormsExample_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { return ctx.fontStyle = $event; });
        i0.ɵɵelementStart(4, "mat-button-toggle", 1);
        i0.ɵɵtext(5, "Bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-button-toggle", 2);
        i0.ɵɵtext(7, "Italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-button-toggle", 3);
        i0.ɵɵtext(9, "Underline");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "section");
        i0.ɵɵelementStart(13, "h4");
        i0.ɵɵtext(14, "Button Toggle inside of a Reactive form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-button-toggle-group", 4);
        i0.ɵɵelementStart(16, "mat-button-toggle", 1);
        i0.ɵɵtext(17, "Bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-button-toggle", 2);
        i0.ɵɵtext(19, "Italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-button-toggle", 3);
        i0.ɵɵtext(21, "Underline");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "p");
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.fontStyle);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1("Chosen value is ", ctx.fontStyle, "");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.fontStyleControl);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1("Chosen value is ", ctx.fontStyleControl.value, "");
    } }, directives: [i1.MatButtonToggleGroup, i2.NgControlStatus, i2.NgModel, i1.MatButtonToggle, i2.FormControlDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleFormsExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-forms-example',
                templateUrl: 'button-toggle-forms-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZS9idXR0b24tdG9nZ2xlLWZvcm1zL2J1dHRvbi10b2dnbGUtZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1mb3Jtcy9idXR0b24tdG9nZ2xlLWZvcm1zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUzQzs7R0FFRztBQUtILE1BQU0sT0FBTyx3QkFBd0I7SUFKckM7UUFLRSxxQkFBZ0IsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0tBRXRDOztnR0FIWSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1ZyQywrQkFBUztRQUNQLDBCQUFJO1FBQUEsOERBQThDO1FBQUEsaUJBQUs7UUFDdkQsa0RBQXlFO1FBQWhELHNLQUF1QjtRQUM5Qyw0Q0FBZ0M7UUFBQSxvQkFBSTtRQUFBLGlCQUFvQjtRQUN4RCw0Q0FBa0M7UUFBQSxzQkFBTTtRQUFBLGlCQUFvQjtRQUM1RCw0Q0FBcUM7UUFBQSx5QkFBUztRQUFBLGlCQUFvQjtRQUNwRSxpQkFBMEI7UUFDMUIsMEJBQUc7UUFBQSxhQUE2QjtRQUFBLGlCQUFJO1FBQ3RDLGlCQUFVO1FBRVYsZ0NBQVM7UUFDUCwyQkFBSTtRQUFBLHdEQUF1QztRQUFBLGlCQUFLO1FBQ2hELG1EQUFrRjtRQUNoRiw2Q0FBZ0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFvQjtRQUN4RCw2Q0FBa0M7UUFBQSx1QkFBTTtRQUFBLGlCQUFvQjtRQUM1RCw2Q0FBcUM7UUFBQSwwQkFBUztRQUFBLGlCQUFvQjtRQUNwRSxpQkFBMEI7UUFDMUIsMEJBQUc7UUFBQSxhQUEwQztRQUFBLGlCQUFJO1FBQ25ELGlCQUFVOztRQWhCaUIsZUFBdUI7UUFBdkIsdUNBQXVCO1FBSzdDLGVBQTZCO1FBQTdCLDREQUE2QjtRQUtQLGVBQWdDO1FBQWhDLGtEQUFnQztRQUt0RCxlQUEwQztRQUExQyx5RUFBMEM7O3VGRFBsQyx3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIEJ1dHRvbi10b2dnbGVzIHdpdGggZm9ybXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXRvZ2dsZS1mb3Jtcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tdG9nZ2xlLWZvcm1zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZUZvcm1zRXhhbXBsZSB7XG4gIGZvbnRTdHlsZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgZm9udFN0eWxlPzogc3RyaW5nO1xufVxuIiwiPHNlY3Rpb24+XG4gIDxoND5CdXR0b24gVG9nZ2xlIGluc2lkZSBvZiBhIFRlbXBsYXRlLWRyaXZlbiBmb3JtPC9oND5cbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIFsobmdNb2RlbCldPVwiZm9udFN0eWxlXCIgYXJpYS1sYWJlbD1cIkZvbnQgU3R5bGVcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJib2xkXCI+Qm9sZDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiaXRhbGljXCI+SXRhbGljPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJ1bmRlcmxpbmVcIj5VbmRlcmxpbmU8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuICA8cD5DaG9zZW4gdmFsdWUgaXMge3tmb250U3R5bGV9fTwvcD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG4gIDxoND5CdXR0b24gVG9nZ2xlIGluc2lkZSBvZiBhIFJlYWN0aXZlIGZvcm08L2g0PlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgW2Zvcm1Db250cm9sXT1cImZvbnRTdHlsZUNvbnRyb2xcIiBhcmlhLWxhYmVsPVwiRm9udCBTdHlsZVwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImJvbGRcIj5Cb2xkPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJpdGFsaWNcIj5JdGFsaWM8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInVuZGVybGluZVwiPlVuZGVybGluZTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4gIDxwPkNob3NlbiB2YWx1ZSBpcyB7e2ZvbnRTdHlsZUNvbnRyb2wudmFsdWV9fTwvcD5cbjwvc2VjdGlvbj5cblxuIl19