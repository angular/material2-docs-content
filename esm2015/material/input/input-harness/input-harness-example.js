import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
/**
 * @title Testing with MatInputHarness
 */
export class InputHarnessExample {
    constructor() {
        this.inputType = 'number';
        this.disabled = false;
    }
}
InputHarnessExample.ɵfac = function InputHarnessExample_Factory(t) { return new (t || InputHarnessExample)(); };
InputHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputHarnessExample, selectors: [["input-harness-example"]], decls: 10, vars: 2, consts: [["matInput", "", "value", "Sushi", "name", "favorite-food"], ["matInput", "", 3, "type", "disabled"], ["matInput", ""]], template: function InputHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelement(5, "input", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelementStart(7, "mat-label");
        i0.ɵɵtext(8, "Leave a comment");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "textarea", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("type", ctx.inputType)("disabled", ctx.disabled);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputHarnessExample, [{
        type: Component,
        args: [{
                selector: 'input-harness-example',
                templateUrl: 'input-harness-example.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtaGFybmVzcy9pbnB1dC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1oYXJuZXNzL2lucHV0LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBS0UsY0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNyQixhQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ2xCOztzRkFIWSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1RoQyxzQ0FBZ0I7UUFDZCxpQ0FBVztRQUFBLDZCQUFhO1FBQUEsaUJBQVk7UUFDcEMsMkJBQW1EO1FBQ3JELGlCQUFpQjtRQUVqQixzQ0FBZ0I7UUFDZCwyQkFDNkI7UUFDL0IsaUJBQWlCO1FBRWpCLHNDQUFnQjtRQUNkLGlDQUFXO1FBQUEsK0JBQWU7UUFBQSxpQkFBWTtRQUN0Qyw4QkFBOEI7UUFDaEMsaUJBQWlCOztRQVBDLGVBQWtCO1FBQWxCLG9DQUFrQiwwQkFBQTs7dUZER3ZCLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdElucHV0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LWhhcm5lc3MtZXhhbXBsZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEhhcm5lc3NFeGFtcGxlIHtcbiAgaW5wdXRUeXBlID0gJ251bWJlcic7XG4gIGRpc2FibGVkID0gZmFsc2U7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdmFsdWU9XCJTdXNoaVwiIG5hbWU9XCJmYXZvcml0ZS1mb29kXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJpbnB1dFR5cGVcIlxuICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+TGVhdmUgYSBjb21tZW50PC9tYXQtbGFiZWw+XG4gIDx0ZXh0YXJlYSBtYXRJbnB1dD48L3RleHRhcmVhPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==