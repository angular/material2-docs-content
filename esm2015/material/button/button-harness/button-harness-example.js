import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * @title Testing with MatButtonHarness
 */
export class ButtonHarnessExample {
    constructor() {
        this.clicked = false;
    }
}
ButtonHarnessExample.ɵfac = function ButtonHarnessExample_Factory(t) { return new (t || ButtonHarnessExample)(); };
ButtonHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonHarnessExample, selectors: [["button-harness-example"]], decls: 2, vars: 0, consts: [["id", "basic", "type", "button", "mat-button", "", 3, "click"]], template: function ButtonHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ButtonHarnessExample_Template_button_click_0_listener() { return ctx.clicked = true; });
        i0.ɵɵtext(1, " Basic button\n");
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonHarnessExample, [{
        type: Component,
        args: [{
                selector: 'button-harness-example',
                templateUrl: 'button-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi9idXR0b24taGFybmVzcy9idXR0b24taGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1oYXJuZXNzL2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBS0UsWUFBTyxHQUFHLEtBQUssQ0FBQztLQUNqQjs7d0ZBRlksb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNUakMsaUNBQXFFO1FBQXpCLCtHQUFtQixJQUFJLElBQUM7UUFDbEUsK0JBQ0Y7UUFBQSxpQkFBUzs7dUZET0ksb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsNkJBQTZCO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0QnV0dG9uSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24taGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24taGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25IYXJuZXNzRXhhbXBsZSAge1xuICBjbGlja2VkID0gZmFsc2U7XG59XG4iLCI8YnV0dG9uIGlkPVwiYmFzaWNcIiB0eXBlPVwiYnV0dG9uXCIgbWF0LWJ1dHRvbiAoY2xpY2spPVwiY2xpY2tlZCA9IHRydWVcIj5cbiAgQmFzaWMgYnV0dG9uXG48L2J1dHRvbj5cbiJdfQ==