/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/chips/chips-drag-and-drop/chips-drag-drop-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "@angular/common";
function ChipsDragDropExample_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vegetable_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vegetable_r1.name, " ");
} }
/**
 * @record
 */
export function Vegetable() { }
if (false) {
    /** @type {?} */
    Vegetable.prototype.name;
}
/**
 * \@title Chips Drag and Drop
 */
let ChipsDragDropExample = /** @class */ (() => {
    /**
     * \@title Chips Drag and Drop
     */
    class ChipsDragDropExample {
        constructor() {
            this.vegetables = [
                { name: 'apple' },
                { name: 'banana' },
                { name: 'strawberry' },
                { name: 'orange' },
                { name: 'kiwi' },
                { name: 'cherry' },
            ];
        }
        /**
         * @param {?} event
         * @return {?}
         */
        drop(event) {
            moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
        }
    }
    ChipsDragDropExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-drag-drop-example',
                    templateUrl: 'chips-drag-drop-example.html',
                    styleUrls: ['chips-drag-drop-example.css']
                },] },
    ];
    /** @nocollapse */ ChipsDragDropExample.ɵfac = function ChipsDragDropExample_Factory(t) { return new (t || ChipsDragDropExample)(); };
    /** @nocollapse */ ChipsDragDropExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsDragDropExample, selectors: [["chips-drag-drop-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function ChipsDragDropExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-chip-list", 0);
            i0.ɵɵlistener("cdkDropListDropped", function ChipsDragDropExample_Template_mat_chip_list_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(1, ChipsDragDropExample_mat_chip_1_Template, 2, 1, "mat-chip", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.vegetables);
        } }, directives: [i1.MatChipList, i2.CdkDropList, i3.NgForOf, i1.MatChip, i2.CdkDrag], styles: [".example-box.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    return ChipsDragDropExample;
})();
export { ChipsDragDropExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChipsDragDropExample, [{
        type: Component,
        args: [{
                selector: 'chips-drag-drop-example',
                templateUrl: 'chips-drag-drop-example.html',
                styleUrls: ['chips-drag-drop-example.css']
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ChipsDragDropExample.prototype.vegetables;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1kcmFnLWFuZC1kcm9wL2NoaXBzLWRyYWctZHJvcC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtZHJhZy1hbmQtZHJvcC9jaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0l0QyxtQ0FJRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBVzs7O0lBRFQsZUFDRjtJQURFLGtEQUNGOzs7OztBRFBGLCtCQUVDOzs7SUFEQyx5QkFBYTs7Ozs7QUFNZjs7OztJQUFBLE1BS2Esb0JBQW9CO1FBTGpDO1lBTUUsZUFBVSxHQUFnQjtnQkFDeEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO2dCQUNmLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztnQkFDaEIsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDO2dCQUNwQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7Z0JBQ2hCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztnQkFDZCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7YUFDakIsQ0FBQztTQUtIOzs7OztRQUhDLElBQUksQ0FBQyxLQUErQjtZQUNsQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1RSxDQUFDOzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7OytHQUNZLG9CQUFvQjtnRkFBcEIsb0JBQW9CO1lDZmpDLHdDQUtFO1lBREEsd0lBQXNCLGdCQUFZLElBQUM7WUFDbkMsK0VBSUU7WUFFSixpQkFBZ0I7O1lBSFosZUFBb0M7WUFBcEMsd0NBQW9DOzsrQkRSeEM7S0E0QkM7U0FiWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7SUFFQywwQ0FPRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmVnZXRhYmxlIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyBEcmFnIGFuZCBEcm9wXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWRyYWctZHJvcC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWRyYWctZHJvcC1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRHJhZ0Ryb3BFeGFtcGxlIHtcbiAgdmVnZXRhYmxlczogVmVnZXRhYmxlW10gPSBbXG4gICAge25hbWU6ICdhcHBsZSd9LFxuICAgIHtuYW1lOiAnYmFuYW5hJ30sXG4gICAge25hbWU6ICdzdHJhd2JlcnJ5J30sXG4gICAge25hbWU6ICdvcmFuZ2UnfSxcbiAgICB7bmFtZTogJ2tpd2knfSxcbiAgICB7bmFtZTogJ2NoZXJyeSd9LFxuICBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPFZlZ2V0YWJsZVtdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLnZlZ2V0YWJsZXMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cbn1cbiIsIjxtYXQtY2hpcC1saXN0XG4gIGNsYXNzPVwiZXhhbXBsZS1jaGlwXCJcbiAgY2RrRHJvcExpc3QgXG4gIGNka0Ryb3BMaXN0T3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgPG1hdC1jaGlwXG4gICAgY2xhc3M9XCJleGFtcGxlLWJveFwiXG4gICAgY2RrRHJhZ1xuICAgICpuZ0Zvcj1cImxldCB2ZWdldGFibGUgb2YgdmVnZXRhYmxlc1wiPlxuICAgIHt7dmVnZXRhYmxlLm5hbWV9fVxuICA8L21hdC1jaGlwPlxuPC9tYXQtY2hpcC1saXN0PlxuIl19