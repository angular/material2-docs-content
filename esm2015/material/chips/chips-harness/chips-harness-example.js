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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtaGFybmVzcy9jaGlwcy1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1oYXJuZXNzL2NoaXBzLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxtQkFBbUI7SUFKaEM7UUFLRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFdBQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLFFBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3BDOztzRkFKWSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ1RoQyx3Q0FHRTtRQUFBLG1DQUErQjtRQUFyQixzR0FBVyxZQUFRLElBQUM7UUFBQyxzQkFBTTtRQUFBLGlCQUFXO1FBQ2hELG1DQUErQjtRQUFyQixzR0FBVyxZQUFRLElBQUM7UUFBQyx1QkFBTztRQUFBLCtCQUFvQjtRQUFBLDJCQUFXO1FBQUEsaUJBQU87UUFBQSxpQkFBVztRQUN2RixtQ0FBK0I7UUFBckIsc0dBQVcsWUFBUSxJQUFDO1FBQUMsdUNBQWlCO1FBQUEsaUJBQUM7UUFBQSxpQkFBa0I7UUFBQSx1QkFBTTtRQUFBLGlCQUFXO1FBQ3RGLGlCQUFnQjs7UUFMWix5Q0FBdUIsa0NBQUE7O3VGRFFkLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdENoaXBzSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNIYXJuZXNzRXhhbXBsZSB7XG4gIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgcmVtb3ZlID0gamFzbWluZS5jcmVhdGVTcHkoJ3JlbW92ZSBzcHknKTtcbiAgYWRkID0gamFzbWluZS5jcmVhdGVTcHkoJ2FkZCBzcHknKTtcbn1cbiIsIjxtYXQtY2hpcC1saXN0XG4gICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgIFthcmlhLW9yaWVudGF0aW9uXT1cIidob3Jpem9udGFsJ1wiPlxuICA8bWF0LWNoaXAgKHJlbW92ZWQpPVwicmVtb3ZlKClcIj5DaGlwIDE8L21hdC1jaGlwPlxuICA8bWF0LWNoaXAgKHJlbW92ZWQpPVwicmVtb3ZlKClcIj5DaGlwIDIgPHNwYW4gbWF0Q2hpcFJlbW92ZT5yZW1vdmVfaWNvbjwvc3Bhbj48L21hdC1jaGlwPlxuICA8bWF0LWNoaXAgKHJlbW92ZWQpPVwicmVtb3ZlKClcIj48bWF0LWNoaXAtYXZhdGFyPkM8L21hdC1jaGlwLWF2YXRhcj5DaGlwIDQ8L21hdC1jaGlwPlxuPC9tYXQtY2hpcC1saXN0PlxuIl19