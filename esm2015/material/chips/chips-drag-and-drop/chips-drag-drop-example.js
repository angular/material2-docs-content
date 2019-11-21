/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1kcmFnLWFuZC1kcm9wL2NoaXBzLWRyYWctZHJvcC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtZHJhZy1hbmQtZHJvcC9jaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDSXRDLG1DQUlFO0lBQUEsWUFDRjtJQUFBLGlCQUFXOzs7SUFEVCxlQUNGO0lBREUsbURBQ0Y7Ozs7O0FEUEYsK0JBRUM7OztJQURDLHlCQUFhOzs7OztBQVdmLE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFNRSxlQUFVLEdBQWdCO1lBQ3hCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztZQUNmLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDcEIsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUNkLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztTQUNqQixDQUFDO0tBS0g7Ozs7O0lBSEMsSUFBSSxDQUFDLEtBQStCO1FBQ2xDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7O3dGQUNZLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDZmpDLHdDQUtFO1FBREEsd0lBQXNCLGdCQUFZLElBQUM7UUFDbkMsK0VBSUU7UUFFSixpQkFBZ0I7O1FBSFosZUFBb0M7UUFBcEMsd0NBQW9DOztrRERPM0Isb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7OztJQUVDLDBDQU9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBWZWdldGFibGUge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIERyYWcgYW5kIERyb3BcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWRyYWctZHJvcC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNEcmFnRHJvcEV4YW1wbGUge1xuICB2ZWdldGFibGVzOiBWZWdldGFibGVbXSA9IFtcbiAgICB7bmFtZTogJ2FwcGxlJ30sXG4gICAge25hbWU6ICdiYW5hbmEnfSxcbiAgICB7bmFtZTogJ3N0cmF3YmVycnknfSxcbiAgICB7bmFtZTogJ29yYW5nZSd9LFxuICAgIHtuYW1lOiAna2l3aSd9LFxuICAgIHtuYW1lOiAnY2hlcnJ5J30sXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8VmVnZXRhYmxlW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMudmVnZXRhYmxlcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIiwiPG1hdC1jaGlwLWxpc3RcbiAgY2xhc3M9XCJleGFtcGxlLWNoaXBcIlxuICBjZGtEcm9wTGlzdCBcbiAgY2RrRHJvcExpc3RPcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICA8bWF0LWNoaXBcbiAgICBjbGFzcz1cImV4YW1wbGUtYm94XCJcbiAgICBjZGtEcmFnXG4gICAgKm5nRm9yPVwibGV0IHZlZ2V0YWJsZSBvZiB2ZWdldGFibGVzXCI+XG4gICAge3t2ZWdldGFibGUubmFtZX19XG4gIDwvbWF0LWNoaXA+XG48L21hdC1jaGlwLWxpc3Q+XG4iXX0=