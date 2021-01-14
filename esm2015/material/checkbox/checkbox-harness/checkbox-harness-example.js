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
CheckboxHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxHarnessExample, selectors: [["checkbox-harness-example"]], decls: 4, vars: 2, consts: [["required", "", "name", "first-name", "value", "first-value", "aria-label", "First checkbox", 3, "checked"], ["indeterminate", "true", "aria-label", "Second checkbox", 3, "disabled"]], template: function CheckboxHarnessExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{
                selector: 'checkbox-harness-example',
                templateUrl: 'checkbox-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3gtaGFybmVzcy9jaGVja2JveC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1oYXJuZXNzL2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxzQkFBc0I7SUFKbkM7UUFLRSxhQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ2pCOzs0RkFGWSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ1RuQyx1Q0FNRTtRQUFBLHdCQUNGO1FBQUEsaUJBQWU7UUFDZix1Q0FDRTtRQUFBLHlCQUNGO1FBQUEsaUJBQWU7O1FBUlgsOEJBQWdCO1FBTWUsZUFBcUI7UUFBckIsdUNBQXFCOzt1RkRDM0Msc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0Q2hlY2tib3hIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveEhhcm5lc3NFeGFtcGxlIHtcbiAgZGlzYWJsZWQgPSB0cnVlO1xufVxuIiwiPG1hdC1jaGVja2JveFxuICAgIHJlcXVpcmVkXG4gICAgW2NoZWNrZWRdPVwidHJ1ZVwiXG4gICAgbmFtZT1cImZpcnN0LW5hbWVcIlxuICAgIHZhbHVlPVwiZmlyc3QtdmFsdWVcIlxuICAgIGFyaWEtbGFiZWw9XCJGaXJzdCBjaGVja2JveFwiPlxuICBGaXJzdFxuPC9tYXQtY2hlY2tib3g+XG48bWF0LWNoZWNrYm94IGluZGV0ZXJtaW5hdGU9XCJ0cnVlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgYXJpYS1sYWJlbD1cIlNlY29uZCBjaGVja2JveFwiPlxuICBTZWNvbmRcbjwvbWF0LWNoZWNrYm94PlxuIl19