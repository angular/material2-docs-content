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
ButtonHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonHarnessExample, selectors: [["button-harness-example"]], decls: 2, vars: 0, consts: [["id", "basic", "type", "button", "mat-button", "", 3, "click"]], template: function ButtonHarnessExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi9idXR0b24taGFybmVzcy9idXR0b24taGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1oYXJuZXNzL2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBS0UsWUFBTyxHQUFHLEtBQUssQ0FBQztLQUNqQjs7d0ZBRlksb0JBQW9CO3lEQUFwQixvQkFBb0I7UUNUakMsaUNBQ0U7UUFEMEMsK0dBQW1CLElBQUksSUFBQztRQUNsRSwrQkFDRjtRQUFBLGlCQUFTOzt1RkRPSSxvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRCdXR0b25IYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkhhcm5lc3NFeGFtcGxlICB7XG4gIGNsaWNrZWQgPSBmYWxzZTtcbn1cbiIsIjxidXR0b24gaWQ9XCJiYXNpY1wiIHR5cGU9XCJidXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJjbGlja2VkID0gdHJ1ZVwiPlxuICBCYXNpYyBidXR0b25cbjwvYnV0dG9uPlxuIl19