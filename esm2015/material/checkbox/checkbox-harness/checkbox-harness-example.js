import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
/**
 * @title Testing with MatCheckboxHarness
 */
export class CheckboxHarnessExample {
    constructor() {
        this.disabled = true;
    }
}
CheckboxHarnessExample.ɵfac = function CheckboxHarnessExample_Factory(t) { return new (t || CheckboxHarnessExample)(); };
CheckboxHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxHarnessExample, selectors: [["checkbox-harness-example"]], decls: 4, vars: 2, consts: [["required", "", "name", "first-name", "value", "first-value", "aria-label", "First checkbox", 3, "checked"], ["indeterminate", "true", "aria-label", "Second checkbox", 3, "disabled"]], template: function CheckboxHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-checkbox", 0);
        i0.ɵɵtext(1, " First\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-checkbox", 1);
        i0.ɵɵtext(3, " Second\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("checked", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled);
    } }, directives: [i1.MatCheckbox], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxHarnessExample, [{
        type: Component,
        args: [{ selector: 'checkbox-harness-example', template: "<mat-checkbox\n    required\n    [checked]=\"true\"\n    name=\"first-name\"\n    value=\"first-value\"\n    aria-label=\"First checkbox\">\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3gtaGFybmVzcy9jaGVja2JveC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1oYXJuZXNzL2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxzQkFBc0I7SUFKbkM7UUFLRSxhQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ2pCOzs0RkFGWSxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQ1RuQyx1Q0FLZ0M7UUFDOUIsd0JBQ0Y7UUFBQSxpQkFBZTtRQUNmLHVDQUFzRjtRQUNwRix5QkFDRjtRQUFBLGlCQUFlOztRQVJYLDhCQUFnQjtRQU1lLGVBQXFCO1FBQXJCLHVDQUFxQjs7dUZEQzNDLHNCQUFzQjtjQUpsQyxTQUFTOzJCQUNFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdENoZWNrYm94SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVja2JveC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hIYXJuZXNzRXhhbXBsZSB7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbn1cbiIsIjxtYXQtY2hlY2tib3hcbiAgICByZXF1aXJlZFxuICAgIFtjaGVja2VkXT1cInRydWVcIlxuICAgIG5hbWU9XCJmaXJzdC1uYW1lXCJcbiAgICB2YWx1ZT1cImZpcnN0LXZhbHVlXCJcbiAgICBhcmlhLWxhYmVsPVwiRmlyc3QgY2hlY2tib3hcIj5cbiAgRmlyc3RcbjwvbWF0LWNoZWNrYm94PlxuPG1hdC1jaGVja2JveCBpbmRldGVybWluYXRlPVwidHJ1ZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIGFyaWEtbGFiZWw9XCJTZWNvbmQgY2hlY2tib3hcIj5cbiAgU2Vjb25kXG48L21hdC1jaGVja2JveD5cbiJdfQ==