import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/badge";
/**
 * @title Testing with MatBadgeHarness
 */
export class BadgeHarnessExample {
    constructor() {
        this.simpleContent = 'S';
        this.overlap = true;
        this.disabled = true;
    }
}
BadgeHarnessExample.ɵfac = function BadgeHarnessExample_Factory(t) { return new (t || BadgeHarnessExample)(); };
BadgeHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: BadgeHarnessExample, selectors: [["badge-harness-example"]], decls: 6, vars: 3, consts: [["mat-button", "", "id", "simple", 3, "matBadge"], ["mat-button", "", "id", "overlapping", "matBadge", "O", 3, "matBadgeOverlap"], ["mat-button", "", "id", "disabled", "matBadge", "D", 3, "matBadgeDisabled"]], template: function BadgeHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Simple");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵtext(3, "Overlapping");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵtext(5, "Disabled");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matBadge", ctx.simpleContent);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matBadgeOverlap", ctx.overlap);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matBadgeDisabled", ctx.disabled);
    } }, directives: [i1.MatButton, i2.MatBadge], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BadgeHarnessExample, [{
        type: Component,
        args: [{
                selector: 'badge-harness-example',
                templateUrl: 'badge-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYmFkZ2UvYmFkZ2UtaGFybmVzcy9iYWRnZS1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1oYXJuZXNzL2JhZGdlLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBS0Usa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFDcEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLENBQUM7S0FDakI7O3NGQUpZLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDVGhDLGlDQUEwRDtRQUFBLHNCQUFNO1FBQUEsaUJBQVM7UUFDekUsaUNBR2dDO1FBQUEsMkJBQVc7UUFBQSxpQkFBUztRQUNwRCxpQ0FJa0M7UUFBQSx3QkFBUTtRQUFBLGlCQUFTOztRQVRwQiw0Q0FBMEI7UUFJckQsZUFBMkI7UUFBM0IsNkNBQTJCO1FBSzNCLGVBQTZCO1FBQTdCLCtDQUE2Qjs7dUZEQXBCLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEJhZGdlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYWRnZS1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JhZGdlLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VIYXJuZXNzRXhhbXBsZSB7XG4gIHNpbXBsZUNvbnRlbnQgPSAnUyc7XG4gIG92ZXJsYXAgPSB0cnVlO1xuICBkaXNhYmxlZCA9IHRydWU7XG59XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gaWQ9XCJzaW1wbGVcIiBbbWF0QmFkZ2VdPVwic2ltcGxlQ29udGVudFwiPlNpbXBsZTwvYnV0dG9uPlxuPGJ1dHRvbiBtYXQtYnV0dG9uXG4gICAgaWQ9XCJvdmVybGFwcGluZ1wiXG4gICAgbWF0QmFkZ2U9XCJPXCJcbiAgICBbbWF0QmFkZ2VPdmVybGFwXT1cIm92ZXJsYXBcIj5PdmVybGFwcGluZzwvYnV0dG9uPlxuPGJ1dHRvblxuICAgIG1hdC1idXR0b25cbiAgICBpZD1cImRpc2FibGVkXCJcbiAgICBtYXRCYWRnZT1cIkRcIlxuICAgIFttYXRCYWRnZURpc2FibGVkXT1cImRpc2FibGVkXCI+RGlzYWJsZWQ8L2J1dHRvbj5cbiJdfQ==