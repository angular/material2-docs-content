/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material-experimental/column-resize/default-enabled/default-enabled-column-resize-demo.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/column-resize";
import * as i2 from "@angular/material/table";
function DefaultEnabledColumnResizeDemo_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matResizableMaxWidthPx", 100);
} }
function DefaultEnabledColumnResizeDemo_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r25.position, " ");
} }
function DefaultEnabledColumnResizeDemo_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matResizableMinWidthPx", 100);
} }
function DefaultEnabledColumnResizeDemo_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r26.name, " ");
} }
function DefaultEnabledColumnResizeDemo_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Weight (Not resizable) ");
    i0.ɵɵelementEnd();
} }
function DefaultEnabledColumnResizeDemo_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r27.weight, " ");
} }
function DefaultEnabledColumnResizeDemo_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function DefaultEnabledColumnResizeDemo_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r28.symbol, " ");
} }
function DefaultEnabledColumnResizeDemo_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function DefaultEnabledColumnResizeDemo_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 18);
} }
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @record
 */
export function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/**
 * \@title Default-enabled column resize with a table-based mat-table.
 */
export class DefaultEnabledColumnResizeDemo {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
}
DefaultEnabledColumnResizeDemo.decorators = [
    { type: Component, args: [{
                selector: 'default-enabled-column-resize-demo',
                templateUrl: 'default-enabled-column-resize-demo.html',
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */ DefaultEnabledColumnResizeDemo.ɵfac = function DefaultEnabledColumnResizeDemo_Factory(t) { return new (t || DefaultEnabledColumnResizeDemo)(); };
/** @nocollapse */ DefaultEnabledColumnResizeDemo.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultEnabledColumnResizeDemo, selectors: [["default-enabled-column-resize-demo"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", 3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", "disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 3, "matResizableMaxWidthPx"], ["mat-cell", ""], ["mat-header-cell", "", 3, "matResizableMinWidthPx"], ["mat-header-cell", "", "disableResize", ""], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DefaultEnabledColumnResizeDemo_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, DefaultEnabledColumnResizeDemo_th_2_Template, 2, 1, "th", 2);
        i0.ɵɵtemplate(3, DefaultEnabledColumnResizeDemo_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, DefaultEnabledColumnResizeDemo_th_5_Template, 2, 1, "th", 5);
        i0.ɵɵtemplate(6, DefaultEnabledColumnResizeDemo_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 6);
        i0.ɵɵtemplate(8, DefaultEnabledColumnResizeDemo_th_8_Template, 2, 0, "th", 7);
        i0.ɵɵtemplate(9, DefaultEnabledColumnResizeDemo_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 8);
        i0.ɵɵtemplate(11, DefaultEnabledColumnResizeDemo_th_11_Template, 2, 0, "th", 9);
        i0.ɵɵtemplate(12, DefaultEnabledColumnResizeDemo_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, DefaultEnabledColumnResizeDemo_tr_13_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(14, DefaultEnabledColumnResizeDemo_tr_14_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatDefaultEnabledColumnResize, i2.MatTable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i1.MatDefaultResizable, i2.MatHeaderCell, i2.MatCell, i2.MatHeaderRow, i2.MatRow], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeDemo, [{
        type: Component,
        args: [{
                selector: 'default-enabled-column-resize-demo',
                templateUrl: 'default-enabled-column-resize-demo.html',
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DefaultEnabledColumnResizeDemo.prototype.displayedColumns;
    /** @type {?} */
    DefaultEnabledColumnResizeDemo.prototype.dataSource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplL2RlZmF1bHQtZW5hYmxlZC9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1kZW1vLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUvZGVmYXVsdC1lbmFibGVkL2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWRlbW8uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDTHZELDhCQUFzRTtJQUFBLHFCQUFJO0lBQUEsaUJBQUs7O0lBQXpDLDRDQUE4Qjs7O0lBQ3BFLDhCQUF3QztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixxREFBcUI7OztJQUs3RCw4QkFBc0U7SUFBQSxzQkFBSztJQUFBLGlCQUFLOztJQUExQyw0Q0FBOEI7OztJQUNwRSw4QkFBd0M7SUFBQSxZQUFpQjtJQUFBLGlCQUFLOzs7SUFBdEIsZUFBaUI7SUFBakIsaURBQWlCOzs7SUFLekQsOEJBQXFEO0lBQUEsd0NBQXVCO0lBQUEsaUJBQUs7OztJQUNqRiw4QkFBd0M7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBeEIsZUFBbUI7SUFBbkIsbURBQW1COzs7SUFLM0QsOEJBQXVDO0lBQUEsd0JBQU87SUFBQSxpQkFBSzs7O0lBQ25ELDhCQUF3QztJQUFBLFlBQW1CO0lBQUEsaUJBQUs7OztJQUF4QixlQUFtQjtJQUFuQixtREFBbUI7OztJQUc3RCx5QkFBNEQ7OztJQUM1RCx5QkFBa0U7Ozs7Ozs7Ozs7OztBRGhCcEUscUNBS0M7OztJQUpDLCtCQUFhOztJQUNiLG1DQUFpQjs7SUFDakIsaUNBQWU7O0lBQ2YsaUNBQWU7OztNQUdYLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDaEUsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM5RDs7OztBQVVELE1BQU0sT0FBTyw4QkFBOEI7SUFMM0M7UUFNRSxxQkFBZ0IsR0FBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBRyxZQUFZLENBQUM7S0FDM0I7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7NEdBQ1ksOEJBQThCO21FQUE5Qiw4QkFBOEI7UUNoRDNDLGdDQUNFO1FBQ0EsZ0NBQ0U7UUFBQSw2RUFBc0U7UUFDdEUsNkVBQXdDO1FBQzFDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSw2RUFBc0U7UUFDdEUsNkVBQXdDO1FBQzFDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSw2RUFBcUQ7UUFDckQsNkVBQXdDO1FBQzFDLDBCQUFlO1FBR2YsaUNBQ0U7UUFBQSwrRUFBdUM7UUFDdkMsK0VBQXdDO1FBQzFDLDBCQUFlO1FBRWYsZ0ZBQXVEO1FBQ3ZELGdGQUE2RDtRQUMvRCxpQkFBUTs7UUEzQlMsMkNBQXlCO1FBeUJyQixnQkFBbUM7UUFBbkMsc0RBQW1DO1FBQzFDLGVBQWdEO1FBQWhELHVEQUFnRDs7a0REc0JqRCw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O0lBRUMsMERBQXNFOztJQUN0RSxvREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG4gIHtwb3NpdGlvbjogMTEsIG5hbWU6ICdTb2RpdW0nLCB3ZWlnaHQ6IDIyLjk4OTcsIHN5bWJvbDogJ05hJ30sXG4gIHtwb3NpdGlvbjogMTIsIG5hbWU6ICdNYWduZXNpdW0nLCB3ZWlnaHQ6IDI0LjMwNSwgc3ltYm9sOiAnTWcnfSxcbiAge3Bvc2l0aW9uOiAxMywgbmFtZTogJ0FsdW1pbnVtJywgd2VpZ2h0OiAyNi45ODE1LCBzeW1ib2w6ICdBbCd9LFxuICB7cG9zaXRpb246IDE0LCBuYW1lOiAnU2lsaWNvbicsIHdlaWdodDogMjguMDg1NSwgc3ltYm9sOiAnU2knfSxcbiAge3Bvc2l0aW9uOiAxNSwgbmFtZTogJ1Bob3NwaG9ydXMnLCB3ZWlnaHQ6IDMwLjk3MzgsIHN5bWJvbDogJ1AnfSxcbiAge3Bvc2l0aW9uOiAxNiwgbmFtZTogJ1N1bGZ1cicsIHdlaWdodDogMzIuMDY1LCBzeW1ib2w6ICdTJ30sXG4gIHtwb3NpdGlvbjogMTcsIG5hbWU6ICdDaGxvcmluZScsIHdlaWdodDogMzUuNDUzLCBzeW1ib2w6ICdDbCd9LFxuICB7cG9zaXRpb246IDE4LCBuYW1lOiAnQXJnb24nLCB3ZWlnaHQ6IDM5Ljk0OCwgc3ltYm9sOiAnQXInfSxcbiAge3Bvc2l0aW9uOiAxOSwgbmFtZTogJ1BvdGFzc2l1bScsIHdlaWdodDogMzkuMDk4Mywgc3ltYm9sOiAnSyd9LFxuICB7cG9zaXRpb246IDIwLCBuYW1lOiAnQ2FsY2l1bScsIHdlaWdodDogNDAuMDc4LCBzeW1ib2w6ICdDYSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgRGVmYXVsdC1lbmFibGVkIGNvbHVtbiByZXNpemUgd2l0aCBhIHRhYmxlLWJhc2VkIG1hdC10YWJsZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZGVtbycsXG4gIHRlbXBsYXRlVXJsOiAnZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZGVtby5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVEZW1vIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4IGV4YW1wbGUtdGFibGVcIj5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIFttYXRSZXNpemFibGVNYXhXaWR0aFB4XT1cIjEwMFwiPiBOby4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIFttYXRSZXNpemFibGVNaW5XaWR0aFB4XT1cIjEwMFwiPiBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gKG5vdCByZXNpemFibGUpIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgZGlzYWJsZVJlc2l6ZT4gV2VpZ2h0IChOb3QgcmVzaXphYmxlKSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuIl19