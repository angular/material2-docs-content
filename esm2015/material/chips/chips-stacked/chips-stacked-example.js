/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
import * as i2 from "@angular/common";
function ChipsStackedExample_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chip_r19 = ctx.$implicit;
    i0.ɵɵproperty("color", chip_r19.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", chip_r19.name, " ");
} }
/**
 * @record
 */
export function ChipColor() { }
if (false) {
    /** @type {?} */
    ChipColor.prototype.name;
    /** @type {?} */
    ChipColor.prototype.color;
}
/**
 * \@title Stacked chips
 */
export class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
}
ChipsStackedExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-stacked-example',
                templateUrl: 'chips-stacked-example.html',
                styleUrls: ['chips-stacked-example.css'],
            },] },
];
/** @nocollapse */ ChipsStackedExample.ɵfac = function ChipsStackedExample_Factory(t) { return new (t || ChipsStackedExample)(); };
/** @nocollapse */ ChipsStackedExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsStackedExample, selectors: [["chips-stacked-example"]], decls: 2, vars: 1, consts: [["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", 3, "color", 4, "ngFor", "ngForOf"], ["selected", "", 3, "color"]], template: function ChipsStackedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-chip-list", 0);
        i0.ɵɵtemplate(1, ChipsStackedExample_mat_chip_1_Template, 2, 2, "mat-chip", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.availableColors);
    } }, directives: [i1.MatChipList, i2.NgForOf, i1.MatChip], styles: ["mat-chip[_ngcontent-%COMP%] {\n  max-width: 200px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(ChipsStackedExample, [{
        type: Component,
        args: [{
                selector: 'chips-stacked-example',
                templateUrl: 'chips-stacked-example.html',
                styleUrls: ['chips-stacked-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ChipsStackedExample.prototype.availableColors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLXN0YWNrZWQvY2hpcHMtc3RhY2tlZC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLXN0YWNrZWQvY2hpcHMtc3RhY2tlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQ3RDLG1DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFXOzs7SUFGNkMsc0NBQW9CO0lBQzFFLGVBQ0Y7SUFERSw4Q0FDRjs7Ozs7QURBRiwrQkFHQzs7O0lBRkMseUJBQWE7O0lBQ2IsMEJBQW9COzs7OztBQVd0QixNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTUUsb0JBQWUsR0FBZ0I7WUFDN0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDakMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7U0FDOUIsQ0FBQztLQUNIOzs7WUFaQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekM7O3NGQUNZLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDaEJoQyx3Q0FDRTtRQUFBLDhFQUNFO1FBRUosaUJBQWdCOztRQUhKLGVBQW9DO1FBQXBDLDZDQUFvQzs7bUNEZW5DLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekM7Ozs7SUFFQyw4Q0FLRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGlwQ29sb3Ige1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG59XG5cbi8qKlxuICogQHRpdGxlIFN0YWNrZWQgY2hpcHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtc3RhY2tlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1zdGFja2VkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1zdGFja2VkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzU3RhY2tlZEV4YW1wbGUge1xuICBhdmFpbGFibGVDb2xvcnM6IENoaXBDb2xvcltdID0gW1xuICAgIHtuYW1lOiAnbm9uZScsIGNvbG9yOiB1bmRlZmluZWR9LFxuICAgIHtuYW1lOiAnUHJpbWFyeScsIGNvbG9yOiAncHJpbWFyeSd9LFxuICAgIHtuYW1lOiAnQWNjZW50JywgY29sb3I6ICdhY2NlbnQnfSxcbiAgICB7bmFtZTogJ1dhcm4nLCBjb2xvcjogJ3dhcm4nfVxuICBdO1xufVxuIiwiPG1hdC1jaGlwLWxpc3QgY2xhc3M9XCJtYXQtY2hpcC1saXN0LXN0YWNrZWRcIiBhcmlhLWxhYmVsPVwiQ29sb3Igc2VsZWN0aW9uXCI+XG4gIDxtYXQtY2hpcCAqbmdGb3I9XCJsZXQgY2hpcCBvZiBhdmFpbGFibGVDb2xvcnNcIiBzZWxlY3RlZCBbY29sb3JdPVwiY2hpcC5jb2xvclwiPlxuICAgIHt7Y2hpcC5uYW1lfX1cbiAgPC9tYXQtY2hpcD5cbjwvbWF0LWNoaXAtbGlzdD5cbiJdfQ==