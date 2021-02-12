import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Testing with MatChipsHarness
 */
export class ChipsHarnessExample {
    constructor() {
        this.isDisabled = false;
        this.remove = jasmine.createSpy('remove spy');
        this.add = jasmine.createSpy('add spy');
    }
}
ChipsHarnessExample.ɵfac = function ChipsHarnessExample_Factory(t) { return new (t || ChipsHarnessExample)(); };
ChipsHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsHarnessExample, selectors: [["chips-harness-example"]], decls: 11, vars: 2, consts: [[3, "disabled", "aria-orientation"], [3, "removed"], ["matChipRemove", ""]], template: function ChipsHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-chip-list", 0);
        i0.ɵɵelementStart(1, "mat-chip", 1);
        i0.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_1_listener() { return ctx.remove(); });
        i0.ɵɵtext(2, "Chip 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-chip", 1);
        i0.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_3_listener() { return ctx.remove(); });
        i0.ɵɵtext(4, "Chip 2 ");
        i0.ɵɵelementStart(5, "span", 2);
        i0.ɵɵtext(6, "remove_icon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-chip", 1);
        i0.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_7_listener() { return ctx.remove(); });
        i0.ɵɵelementStart(8, "mat-chip-avatar");
        i0.ɵɵtext(9, "C");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(10, "Chip 4");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.isDisabled)("aria-orientation", "horizontal");
    } }, directives: [i1.MatChipList, i1.MatChip, i1.MatChipRemove, i1.MatChipAvatar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsHarnessExample, [{
        type: Component,
        args: [{
                selector: 'chips-harness-example',
                templateUrl: 'chips-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtaGFybmVzcy9jaGlwcy1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1oYXJuZXNzL2NoaXBzLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxtQkFBbUI7SUFKaEM7UUFLRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFdBQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLFFBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3BDOztzRkFKWSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ1RoQyx3Q0FFc0M7UUFDcEMsbUNBQStCO1FBQXJCLHNHQUFXLFlBQVEsSUFBQztRQUFDLHNCQUFNO1FBQUEsaUJBQVc7UUFDaEQsbUNBQStCO1FBQXJCLHNHQUFXLFlBQVEsSUFBQztRQUFDLHVCQUFPO1FBQUEsK0JBQW9CO1FBQUEsMkJBQVc7UUFBQSxpQkFBTztRQUFBLGlCQUFXO1FBQ3ZGLG1DQUErQjtRQUFyQixzR0FBVyxZQUFRLElBQUM7UUFBQyx1Q0FBaUI7UUFBQSxpQkFBQztRQUFBLGlCQUFrQjtRQUFBLHVCQUFNO1FBQUEsaUJBQVc7UUFDdEYsaUJBQWdCOztRQUxaLHlDQUF1QixrQ0FBQTs7dUZEUWQsbUJBQW1CO2NBSi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0Q2hpcHNIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0hhcm5lc3NFeGFtcGxlIHtcbiAgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICByZW1vdmUgPSBqYXNtaW5lLmNyZWF0ZVNweSgncmVtb3ZlIHNweScpO1xuICBhZGQgPSBqYXNtaW5lLmNyZWF0ZVNweSgnYWRkIHNweScpO1xufVxuIiwiPG1hdC1jaGlwLWxpc3RcbiAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgW2FyaWEtb3JpZW50YXRpb25dPVwiJ2hvcml6b250YWwnXCI+XG4gIDxtYXQtY2hpcCAocmVtb3ZlZCk9XCJyZW1vdmUoKVwiPkNoaXAgMTwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcCAocmVtb3ZlZCk9XCJyZW1vdmUoKVwiPkNoaXAgMiA8c3BhbiBtYXRDaGlwUmVtb3ZlPnJlbW92ZV9pY29uPC9zcGFuPjwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcCAocmVtb3ZlZCk9XCJyZW1vdmUoKVwiPjxtYXQtY2hpcC1hdmF0YXI+QzwvbWF0LWNoaXAtYXZhdGFyPkNoaXAgNDwvbWF0LWNoaXA+XG48L21hdC1jaGlwLWxpc3Q+XG4iXX0=