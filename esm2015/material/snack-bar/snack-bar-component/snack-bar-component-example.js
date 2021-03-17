import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
/**
 * @title Snack-bar with a custom component
 */
export class SnackBarComponentExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
    }
    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
}
SnackBarComponentExample.ɵfac = function SnackBarComponentExample_Factory(t) { return new (t || SnackBarComponentExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
SnackBarComponentExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackBarComponentExample, selectors: [["snack-bar-component-example"]], decls: 6, vars: 1, consts: [["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarComponentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Snack bar duration (seconds)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 0);
        i0.ɵɵlistener("ngModelChange", function SnackBarComponentExample_Template_input_ngModelChange_3_listener($event) { return ctx.durationInSeconds = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 1);
        i0.ɵɵlistener("click", function SnackBarComponentExample_Template_button_click_4_listener() { return ctx.openSnackBar(); });
        i0.ɵɵtext(5, " Pizza party\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.durationInSeconds);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.NumberValueAccessor, i4.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i5.MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarComponentExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example',
                templateUrl: 'snack-bar-component-example.html',
                styleUrls: ['snack-bar-component-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
export class PizzaPartyComponent {
}
PizzaPartyComponent.ɵfac = function PizzaPartyComponent_Factory(t) { return new (t || PizzaPartyComponent)(); };
PizzaPartyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PizzaPartyComponent, selectors: [["snack-bar-component-example-snack"]], decls: 2, vars: 0, consts: [[1, "example-pizza-party"]], template: function PizzaPartyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtext(1, " Pizza party!!! \uD83C\uDF55\n");
        i0.ɵɵelementEnd();
    } }, styles: [".example-pizza-party[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PizzaPartyComponent, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example-snack',
                templateUrl: 'snack-bar-component-example-snack.html',
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLWNvbXBvbmVudC9zbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2suaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQUV4RDs7R0FFRztBQU1ILE1BQU0sT0FBTyx3QkFBd0I7SUFHbkMsWUFBb0IsU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUYxQyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFFdUIsQ0FBQztJQUU5QyxZQUFZO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRTtZQUNwRCxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUk7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0dBVFUsd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNYckMsc0NBQWdCO1FBQ2QsaUNBQVc7UUFBQSw0Q0FBNEI7UUFBQSxpQkFBWTtRQUNuRCxnQ0FBOEQ7UUFBekMsNEpBQStCO1FBQXBELGlCQUE4RDtRQUNoRSxpQkFBaUI7UUFFakIsaUNBQTJGO1FBQWhFLHFHQUFTLGtCQUFjLElBQUM7UUFDakQsOEJBQ0Y7UUFBQSxpQkFBUzs7UUFMYyxlQUErQjtRQUEvQiwrQ0FBK0I7O3VGRFN6Qyx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOztBQXVCRCxNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3NFQUFuQixtQkFBbUI7UUVqQ2hDLCtCQUFrQztRQUNoQyw4Q0FDRjtRQUFBLGlCQUFPOzt1RkYrQk0sbUJBQW1CO2NBVC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxNQUFNLEVBQUUsQ0FBQzs7OztHQUlSLENBQUM7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIFNuYWNrLWJhciB3aXRoIGEgY3VzdG9tIGNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlIHtcbiAgZHVyYXRpb25JblNlY29uZHMgPSA1O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoUGl6emFQYXJ0eUNvbXBvbmVudCwge1xuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb25JblNlY29uZHMgKiAxMDAwLFxuICAgIH0pO1xuICB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2suaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAuZXhhbXBsZS1waXp6YS1wYXJ0eSB7XG4gICAgICBjb2xvcjogaG90cGluaztcbiAgICB9XG4gIGBdLFxufSlcbmV4cG9ydCBjbGFzcyBQaXp6YVBhcnR5Q29tcG9uZW50IHt9XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U25hY2sgYmFyIGR1cmF0aW9uIChzZWNvbmRzKTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwiZHVyYXRpb25JblNlY29uZHNcIiBtYXRJbnB1dD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIChjbGljayk9XCJvcGVuU25hY2tCYXIoKVwiIGFyaWEtbGFiZWw9XCJTaG93IGFuIGV4YW1wbGUgc25hY2stYmFyXCI+XG4gIFBpenphIHBhcnR5XG48L2J1dHRvbj5cbiIsIjxzcGFuIGNsYXNzPVwiZXhhbXBsZS1waXp6YS1wYXJ0eVwiPlxuICBQaXp6YSBwYXJ0eSEhISDwn42VXG48L3NwYW4+XG4iXX0=