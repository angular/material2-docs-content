/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropHorizontalSortingExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const timePeriod_r28 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(timePeriod_r28);
} }
/**
 * \@title Drag&Drop horizontal sorting
 */
export class CdkDragDropHorizontalSortingExample {
    constructor() {
        this.timePeriods = [
            'Bronze age',
            'Iron age',
            'Middle ages',
            'Early modern period',
            'Long nineteenth century'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropHorizontalSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-horizontal-sorting-example',
                templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
                styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropHorizontalSortingExample.ɵfac = function CdkDragDropHorizontalSortingExample_Factory(t) { return new (t || CdkDragDropHorizontalSortingExample)(); };
/** @nocollapse */ CdkDragDropHorizontalSortingExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropHorizontalSortingExample, selectors: [["cdk-drag-drop-horizontal-sorting-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropHorizontalSortingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropHorizontalSortingExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(1, CdkDragDropHorizontalSortingExample_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.timePeriods);
    } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropHorizontalSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-horizontal-sorting-example',
                templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
                styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    CdkDragDropHorizontalSortingExample.prototype.timePeriods;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy9jZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFjLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztJQ0FsRSw4QkFBd0U7SUFBQSxZQUFjO0lBQUEsaUJBQU07OztJQUFwQixlQUFjO0lBQWQsb0NBQWM7Ozs7O0FEVXhGLE1BQU0sT0FBTyxtQ0FBbUM7SUFMaEQ7UUFNRSxnQkFBVyxHQUFHO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixhQUFhO1lBQ2IscUJBQXFCO1lBQ3JCLHlCQUF5QjtTQUMxQixDQUFDO0tBS0g7Ozs7O0lBSEMsSUFBSSxDQUFDLEtBQTRCO1FBQy9CLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdFLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBDQUEwQztnQkFDcEQsV0FBVyxFQUFFLCtDQUErQztnQkFDNUQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7YUFDNUQ7O3NIQUNZLG1DQUFtQzt3RUFBbkMsbUNBQW1DO1FDWGhELDhCQUNFO1FBRHdFLDZJQUFzQixnQkFBWSxJQUFDO1FBQzNHLG9GQUF3RTtRQUMxRSxpQkFBTTs7UUFEcUIsZUFBc0M7UUFBdEMseUNBQXNDOzttQ0RVcEQsbUNBQW1DO2NBTC9DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMENBQTBDO2dCQUNwRCxXQUFXLEVBQUUsK0NBQStDO2dCQUM1RCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQzthQUM1RDs7OztJQUVDLDBEQU1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGhvcml6b250YWwgc29ydGluZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BIb3Jpem9udGFsU29ydGluZ0V4YW1wbGUge1xuICB0aW1lUGVyaW9kcyA9IFtcbiAgICAnQnJvbnplIGFnZScsXG4gICAgJ0lyb24gYWdlJyxcbiAgICAnTWlkZGxlIGFnZXMnLFxuICAgICdFYXJseSBtb2Rlcm4gcGVyaW9kJyxcbiAgICAnTG9uZyBuaW5ldGVlbnRoIGNlbnR1cnknXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMudGltZVBlcmlvZHMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cbn1cbiIsIjxkaXYgY2RrRHJvcExpc3QgY2RrRHJvcExpc3RPcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cImV4YW1wbGUtbGlzdFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiICpuZ0Zvcj1cImxldCB0aW1lUGVyaW9kIG9mIHRpbWVQZXJpb2RzXCIgY2RrRHJhZz57e3RpbWVQZXJpb2R9fTwvZGl2PlxuPC9kaXY+XG4iXX0=