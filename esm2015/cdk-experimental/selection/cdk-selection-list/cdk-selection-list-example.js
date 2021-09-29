import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/selection";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
function CdkSelectionListExample_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "input", 10, 11);
    i0.ɵɵlistener("click", function CdkSelectionListExample_li_9_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r10); const _r8 = i0.ɵɵreference(2); return _r8.toggle(); });
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkSelectionToggleValue", item_r7)("checked", i0.ɵɵpipeBind1(3, 3, _r8.checked));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r7, " ");
} }
function CdkSelectionListExample_li_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "mat-checkbox", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkSelectionToggleValue", item_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r11, " ");
} }
function CdkSelectionListExample_li_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "mat-checkbox", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkSelectionToggleValue", item_r12);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r12, " ");
} }
function CdkSelectionListExample_li_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "mat-checkbox", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkSelectionToggleValue", item_r13)("cdkSelectionToggleIndex", i_r14);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r13, " ");
} }
/**
 * @title CDK Selection on a simple list.
 */
export class CdkSelectionListExample {
    constructor() {
        this.data = ELEMENT_NAMES;
        this.selected1 = [];
        this.selected2 = [];
        this.selected3 = [];
        this.selected4 = [];
    }
    getCurrentSelected(event) {
        return event.after.map((select) => select.value);
    }
    trackByFn(index) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
}
CdkSelectionListExample.ɵfac = function CdkSelectionListExample_Factory(t) { return new (t || CdkSelectionListExample)(); };
CdkSelectionListExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkSelectionListExample, selectors: [["cdk-selection-list-example"]], decls: 38, vars: 30, consts: [["cdkSelection", "", 3, "dataSource", "cdkSelectionMultiple", "cdkSelectionChange"], ["type", "checkbox", "cdkSelectAll", "", 3, "checked", "indeterminate", "click"], ["allToggler", "cdkSelectAll"], [4, "ngFor", "ngForOf"], ["cdkSelectAll", "", 3, "indeterminate"], ["toggle1", "cdkSelectAll"], ["cdkSelection", "", 3, "dataSource", "cdkSelectionMultiple", "trackBy", "cdkSelectionChange"], ["toggle2", "cdkSelectAll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], ["type", "checkbox", "cdkSelectionToggle", "", 3, "cdkSelectionToggleValue", "checked", "click"], ["toggler", "cdkSelectionToggle"], ["cdkSelectionToggle", "", 3, "cdkSelectionToggleValue"], ["cdkSelectionToggle", "", 3, "cdkSelectionToggleValue", "cdkSelectionToggleIndex"]], template: function CdkSelectionListExample_Template(rf, ctx) { if (rf & 1) {
        const _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "h3");
        i0.ɵɵelementStart(1, "code");
        i0.ɵɵtext(2, "native input");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(3);
        i0.ɵɵelementStart(4, "ul", 0);
        i0.ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_4_listener($event) { return ctx.selected1 = ctx.getCurrentSelected($event); });
        i0.ɵɵelementStart(5, "input", 1, 2);
        i0.ɵɵlistener("click", function CdkSelectionListExample_Template_input_click_5_listener($event) { i0.ɵɵrestoreView(_r15); const _r0 = i0.ɵɵreference(6); return _r0.toggle($event); });
        i0.ɵɵpipe(7, "async");
        i0.ɵɵpipe(8, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, CdkSelectionListExample_li_9_Template, 5, 5, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h3");
        i0.ɵɵelementStart(11, "code");
        i0.ɵɵtext(12, "mat-checkbox");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(13);
        i0.ɵɵelementStart(14, "ul", 0);
        i0.ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_14_listener($event) { return ctx.selected2 = ctx.getCurrentSelected($event); });
        i0.ɵɵelement(15, "mat-checkbox", 4, 5);
        i0.ɵɵpipe(17, "async");
        i0.ɵɵtemplate(18, CdkSelectionListExample_li_18_Template, 3, 2, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "h3");
        i0.ɵɵelementStart(20, "code");
        i0.ɵɵtext(21, "Single select with mat-checkbox");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(22);
        i0.ɵɵelementStart(23, "ul", 0);
        i0.ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_23_listener($event) { return ctx.selected3 = ctx.getCurrentSelected($event); });
        i0.ɵɵtemplate(24, CdkSelectionListExample_li_24_Template, 3, 2, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "h3");
        i0.ɵɵelementStart(26, "code");
        i0.ɵɵtext(27, "with trackBy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(28);
        i0.ɵɵelementStart(29, "ul", 6);
        i0.ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_29_listener($event) { return ctx.selected4 = ctx.getCurrentSelected($event); });
        i0.ɵɵelement(30, "mat-checkbox", 4, 7);
        i0.ɵɵpipe(32, "async");
        i0.ɵɵtemplate(33, CdkSelectionListExample_li_33_Template, 3, 3, "li", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "button", 9);
        i0.ɵɵlistener("click", function CdkSelectionListExample_Template_button_click_34_listener() { return ctx.changeElementName(); });
        i0.ɵɵtext(35, "Change element names and the already selected stays");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "button", 9);
        i0.ɵɵlistener("click", function CdkSelectionListExample_Template_button_click_36_listener() { return ctx.reset(); });
        i0.ɵɵtext(37, "reset");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        const _r2 = i0.ɵɵreference(16);
        const _r5 = i0.ɵɵreference(31);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("\nSelected: ", ctx.selected1, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", i0.ɵɵpipeBind1(7, 22, _r0.checked))("indeterminate", i0.ɵɵpipeBind1(8, 24, _r0.indeterminate));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.data);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("\nSelected: ", ctx.selected2, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("indeterminate", i0.ɵɵpipeBind1(17, 26, _r2.indeterminate));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.data);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("\nSelected: ", ctx.selected3, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.data);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("\nSelected: ", ctx.selected4, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", true)("trackBy", ctx.trackByFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("indeterminate", i0.ɵɵpipeBind1(32, 28, _r5.indeterminate));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i1.CdkSelection, i1.CdkSelectAll, i2.NgForOf, i3.MatCheckbox, i1.CdkSelectionToggle], pipes: [i2.AsyncPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkSelectionListExample, [{
        type: Component,
        args: [{ selector: 'cdk-selection-list-example', template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
    }], null, null); })();
const ELEMENT_NAMES = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen',
    'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon',
    'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium',
];
const ELEMENT_SYMBOLS = [
    'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne',
    'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca'
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDTXRDLDBCQUE4QjtJQUM1QixxQ0FDaUU7SUFBM0IsK0pBQVMsWUFBZ0IsSUFBQzs7SUFEaEUsaUJBQ2lFO0lBQ2pFLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUhxRSxlQUFnQztJQUFoQyxpREFBZ0MsOENBQUE7SUFFeEcsZUFDRjtJQURFLHdDQUNGOzs7SUFPQSwwQkFBOEI7SUFDNUIsbUNBQWlGO0lBQ2pGLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBRjhCLGVBQWdDO0lBQWhDLGtEQUFnQztJQUNqRSxlQUNGO0lBREUseUNBQ0Y7OztJQU1BLDBCQUE4QjtJQUM1QixtQ0FBaUY7SUFDakYsWUFDRjtJQUFBLGlCQUFLOzs7SUFGOEIsZUFBZ0M7SUFBaEMsa0RBQWdDO0lBQ2pFLGVBQ0Y7SUFERSx5Q0FDRjs7O0lBT0EsMEJBQThEO0lBQzVELG1DQUErRztJQUMvRyxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFGOEIsZUFBZ0M7SUFBaEMsa0RBQWdDLGtDQUFBO0lBQ2pFLGVBQ0Y7SUFERSx5Q0FDRjs7QURyQ0Y7O0dBRUc7QUFLSCxNQUFNLE9BQU8sdUJBQXVCO0lBSnBDO1FBS0UsU0FBSSxHQUFH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RSxTQUFTO0NBQzFFLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRztJQUN0QixHQUFHLEVBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUcsR0FBRyxFQUFHLEdBQUcsRUFBRSxJQUFJO0lBQ3ZELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUk7Q0FDeEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbic7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENESyBTZWxlY3Rpb24gb24gYSBzaW1wbGUgbGlzdC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTZWxlY3Rpb25MaXN0RXhhbXBsZSB7XG4gIGRhdGEgPSBFTEVNRU5UX05BTUVTO1xuICBzZWxlY3RlZDE6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkMjogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQzOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDQ6IHN0cmluZ1tdID0gW107XG5cbiAgZ2V0Q3VycmVudFNlbGVjdGVkKGV2ZW50OiBTZWxlY3Rpb25DaGFuZ2U8c3RyaW5nPikge1xuICAgIHJldHVybiBldmVudC5hZnRlci5tYXAoKHNlbGVjdCkgPT4gc2VsZWN0LnZhbHVlKTtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgY2hhbmdlRWxlbWVudE5hbWUoKSB7XG4gICAgdGhpcy5kYXRhID0gRUxFTUVOVF9TWU1CT0xTO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhID0gRUxFTUVOVF9OQU1FUztcbiAgfVxufVxuXG5jb25zdCBFTEVNRU5UX05BTUVTID0gW1xuICAnSHlkcm9nZW4nLCAgICdIZWxpdW0nLCAgICdMaXRoaXVtJywgICdCZXJ5bGxpdW0nLCAnQm9yb24nLCAgICAgJ0NhcmJvbicsICAgJ05pdHJvZ2VuJyxcbiAgJ094eWdlbicsICAgICAnRmx1b3JpbmUnLCAnTmVvbicsICAgICAnU29kaXVtJywgICAgJ01hZ25lc2l1bScsICdBbHVtaW51bScsICdTaWxpY29uJyxcbiAgJ1Bob3NwaG9ydXMnLCAnU3VsZnVyJywgICAnQ2hsb3JpbmUnLCAnQXJnb24nLCAgICAgJ1BvdGFzc2l1bScsICdDYWxjaXVtJyxcbl07XG5cbmNvbnN0IEVMRU1FTlRfU1lNQk9MUyA9IFtcbiAgJ0gnLCAgJ0hlJywgJ0xpJywgJ0JlJywgJ0InLCAnQycsICdOJywgICdPJywgICdGJywgJ05lJyxcbiAgJ05hJywgJ01nJywgJ0FsJywgJ1NpJywgJ1AnLCAnUycsICdDbCcsICdBcicsICdLJywgJ0NhJ1xuXTtcbiIsIjxoMz48Y29kZT5uYXRpdmUgaW5wdXQ8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkMX19XG48dWwgY2RrU2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbY2RrU2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIChjZGtTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQxID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNka1NlbGVjdEFsbCAjYWxsVG9nZ2xlcj1cImNka1NlbGVjdEFsbFwiXG4gICAgICBbY2hlY2tlZF09XCJhbGxUb2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiXG4gICAgICBbaW5kZXRlcm1pbmF0ZV09XCJhbGxUb2dnbGVyLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiXG4gICAgICAoY2xpY2spPVwiYWxsVG9nZ2xlci50b2dnbGUoJGV2ZW50KVwiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjZGtTZWxlY3Rpb25Ub2dnbGUgI3RvZ2dsZXI9XCJjZGtTZWxlY3Rpb25Ub2dnbGVcIiBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiXG4gICAgICBbY2hlY2tlZF09XCJ0b2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiIChjbGljayk9XCJ0b2dnbGVyLnRvZ2dsZSgpXCI+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT5tYXQtY2hlY2tib3g8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkMn19XG48dWwgY2RrU2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbY2RrU2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIChjZGtTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQyID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPG1hdC1jaGVja2JveCBjZGtTZWxlY3RBbGwgI3RvZ2dsZTE9XCJjZGtTZWxlY3RBbGxcIiBbaW5kZXRlcm1pbmF0ZV09XCJ0b2dnbGUxLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiPjwvbWF0LWNoZWNrYm94PlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0aW9uVG9nZ2xlIFtjZGtTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT5TaW5nbGUgc2VsZWN0IHdpdGggbWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDN9fVxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cImZhbHNlXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDMgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0aW9uVG9nZ2xlIFtjZGtTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT53aXRoIHRyYWNrQnk8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkNH19XG48dWwgY2RrU2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbY2RrU2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIFt0cmFja0J5XT1cInRyYWNrQnlGblwiIChjZGtTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQ0ID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPG1hdC1jaGVja2JveCBjZGtTZWxlY3RBbGwgI3RvZ2dsZTI9XCJjZGtTZWxlY3RBbGxcIiBbaW5kZXRlcm1pbmF0ZV09XCJ0b2dnbGUyLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiPjwvbWF0LWNoZWNrYm94PlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgaW5kZXggYXMgaTsgdHJhY2tCeTogdHJhY2tCeUZuXCI+XG4gICAgPG1hdC1jaGVja2JveCBjZGtTZWxlY3Rpb25Ub2dnbGUgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIiBbY2RrU2VsZWN0aW9uVG9nZ2xlSW5kZXhdPVwiaVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbGVtZW50TmFtZSgpXCI+Q2hhbmdlIGVsZW1lbnQgbmFtZXMgYW5kIHRoZSBhbHJlYWR5IHNlbGVjdGVkIHN0YXlzPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+cmVzZXQ8L2J1dHRvbj5cbiJdfQ==