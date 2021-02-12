import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Testing with MatButtonToggleHarness
 */
export class ButtonToggleHarnessExample {
    constructor() {
        this.disabled = false;
        this.appearance = 'standard';
    }
}
ButtonToggleHarnessExample.ɵfac = function ButtonToggleHarnessExample_Factory(t) { return new (t || ButtonToggleHarnessExample)(); };
ButtonToggleHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonToggleHarnessExample, selectors: [["button-toggle-harness-example"]], decls: 5, vars: 2, consts: [[3, "disabled", "appearance"], ["value", "1"], ["value", "2"]], template: function ButtonToggleHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-button-toggle-group", 0);
        i0.ɵɵelementStart(1, "mat-button-toggle", 1);
        i0.ɵɵtext(2, "One");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-button-toggle", 2);
        i0.ɵɵtext(4, "Two");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled)("appearance", ctx.appearance);
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleHarnessExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-harness-example',
                templateUrl: 'button-toggle-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtaGFybmVzcy9idXR0b24tdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1oYXJuZXNzL2J1dHRvbi10b2dnbGUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBR3hDOztHQUVHO0FBS0gsTUFBTSxPQUFPLDBCQUEwQjtJQUp2QztRQUtFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUE4QixVQUFVLENBQUM7S0FDcEQ7O29HQUhZLDBCQUEwQjsrREFBMUIsMEJBQTBCO1FDVnZDLGtEQUF5RTtRQUN2RSw0Q0FBNkI7UUFBQSxtQkFBRztRQUFBLGlCQUFvQjtRQUNwRCw0Q0FBNkI7UUFBQSxtQkFBRztRQUFBLGlCQUFvQjtRQUN0RCxpQkFBMEI7O1FBSEQsdUNBQXFCLDhCQUFBOzt1RkRVakMsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVBcHBlYXJhbmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEJ1dHRvblRvZ2dsZUhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi10b2dnbGUtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVIYXJuZXNzRXhhbXBsZSB7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGFwcGVhcmFuY2U6IE1hdEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2UgPSAnc3RhbmRhcmQnO1xufVxuIiwiPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiMVwiPk9uZTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIjJcIj5Ud288L21hdC1idXR0b24tdG9nZ2xlPlxuPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiJdfQ==