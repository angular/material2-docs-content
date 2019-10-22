/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    const vegetable_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vegetable_r11.name, " ");
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
export class ChipsDragDropExample {
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
/** @nocollapse */ ChipsDragDropExample.ngFactoryDef = function ChipsDragDropExample_Factory(t) { return new (t || ChipsDragDropExample)(); };
/** @nocollapse */ ChipsDragDropExample.ngComponentDef = i0.ɵɵdefineComponent({ type: ChipsDragDropExample, selectors: [["chips-drag-drop-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function ChipsDragDropExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-chip-list", 0);
        i0.ɵɵlistener("cdkDropListDropped", function ChipsDragDropExample_Template_mat_chip_list_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(1, ChipsDragDropExample_mat_chip_1_Template, 2, 1, "mat-chip", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.vegetables);
    } }, directives: [i1.MatChipList, i2.CdkDropList, i3.NgForOf, i1.MatChip, i2.CdkDrag], styles: [".example-box.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(ChipsDragDropExample, [{
        type: Component,
        args: [{
                selector: 'chips-drag-drop-example',
                templateUrl: 'chips-drag-drop-example.html',
                styleUrls: ['chips-drag-drop-example.css']
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ChipsDragDropExample.prototype.vegetables;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtZHJhZy1hbmQtZHJvcC9jaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1kcmFnLWFuZC1kcm9wL2NoaXBzLWRyYWctZHJvcC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNJdEMsbUNBSUU7SUFBQSxZQUNGO0lBQUEsaUJBQVc7OztJQURULGVBQ0Y7SUFERSxtREFDRjs7Ozs7QURQRiwrQkFFQzs7O0lBREMseUJBQWE7Ozs7O0FBV2YsTUFBTSxPQUFPLG9CQUFvQjtJQUxqQztRQU1FLGVBQVUsR0FBZ0I7WUFDeEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQztZQUNwQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDaEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO1lBQ2QsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1NBQ2pCLENBQUM7S0FLSDs7Ozs7SUFIQyxJQUFJLENBQUMsS0FBK0I7UUFDbEMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7Z0dBQ1ksb0JBQW9CO21FQUFwQixvQkFBb0I7UUNmakMsd0NBS0U7UUFEQSx3SUFBc0IsZ0JBQVksSUFBQztRQUNuQywrRUFJRTtRQUVKLGlCQUFnQjs7UUFIWixlQUFvQztRQUFwQyx3Q0FBb0M7O21DRE8zQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7O0lBRUMsMENBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZlZ2V0YWJsZSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgRHJhZyBhbmQgRHJvcFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1kcmFnLWRyb3AtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0RyYWdEcm9wRXhhbXBsZSB7XG4gIHZlZ2V0YWJsZXM6IFZlZ2V0YWJsZVtdID0gW1xuICAgIHtuYW1lOiAnYXBwbGUnfSxcbiAgICB7bmFtZTogJ2JhbmFuYSd9LFxuICAgIHtuYW1lOiAnc3RyYXdiZXJyeSd9LFxuICAgIHtuYW1lOiAnb3JhbmdlJ30sXG4gICAge25hbWU6ICdraXdpJ30sXG4gICAge25hbWU6ICdjaGVycnknfSxcbiAgXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxWZWdldGFibGVbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy52ZWdldGFibGVzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iLCI8bWF0LWNoaXAtbGlzdFxuICBjbGFzcz1cImV4YW1wbGUtY2hpcFwiXG4gIGNka0Ryb3BMaXN0IFxuICBjZGtEcm9wTGlzdE9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gIDxtYXQtY2hpcFxuICAgIGNsYXNzPVwiZXhhbXBsZS1ib3hcIlxuICAgIGNka0RyYWdcbiAgICAqbmdGb3I9XCJsZXQgdmVnZXRhYmxlIG9mIHZlZ2V0YWJsZXNcIj5cbiAgICB7e3ZlZ2V0YWJsZS5uYW1lfX1cbiAgPC9tYXQtY2hpcD5cbjwvbWF0LWNoaXAtbGlzdD5cbiJdfQ==