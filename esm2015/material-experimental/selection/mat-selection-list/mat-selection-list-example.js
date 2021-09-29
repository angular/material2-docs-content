import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/selection";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
function MatSelectionListExample_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "input", 10, 11);
    i0.ɵɵlistener("click", function MatSelectionListExample_li_9_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r10); const _r8 = i0.ɵɵreference(2); return _r8.toggle(); });
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matSelectionToggleValue", item_r7)("checked", i0.ɵɵpipeBind1(3, 3, _r8.checked));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r7, " ");
} }
function MatSelectionListExample_li_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "mat-checkbox", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matSelectionToggleValue", item_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r11, " ");
} }
function MatSelectionListExample_li_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "mat-checkbox", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matSelectionToggleValue", item_r12);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r12, " ");
} }
function MatSelectionListExample_li_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "mat-checkbox", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matSelectionToggleValue", item_r13)("matSelectionToggleIndex", i_r14);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r13, " ");
} }
/**
 * @title Mat Selection on a simple list.
 */
export class MatSelectionListExample {
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
    trackByFn(index, value) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
}
MatSelectionListExample.ɵfac = function MatSelectionListExample_Factory(t) { return new (t || MatSelectionListExample)(); };
MatSelectionListExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatSelectionListExample, selectors: [["mat-selection-list-example"]], decls: 38, vars: 30, consts: [["matSelection", "", 3, "dataSource", "matSelectionMultiple", "matSelectionChange"], ["type", "checkbox", "matSelectAll", "", 3, "checked", "indeterminate", "click"], ["allToggler", "matSelectAll"], [4, "ngFor", "ngForOf"], ["matSelectAll", "", 3, "indeterminate"], ["toggle1", "matSelectAll"], ["matSelection", "", 3, "dataSource", "matSelectionMultiple", "trackBy", "matSelectionChange"], ["toggle2", "matSelectAll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], ["type", "checkbox", "matSelectionToggle", "", 3, "matSelectionToggleValue", "checked", "click"], ["toggler", "matSelectionToggle"], ["matSelectionToggle", "", 3, "matSelectionToggleValue"], ["matSelectionToggle", "", 3, "matSelectionToggleValue", "matSelectionToggleIndex"]], template: function MatSelectionListExample_Template(rf, ctx) { if (rf & 1) {
        const _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "h3");
        i0.ɵɵelementStart(1, "code");
        i0.ɵɵtext(2, "native input");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(3);
        i0.ɵɵelementStart(4, "ul", 0);
        i0.ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_4_listener($event) { return ctx.selected1 = ctx.getCurrentSelected($event); });
        i0.ɵɵelementStart(5, "input", 1, 2);
        i0.ɵɵlistener("click", function MatSelectionListExample_Template_input_click_5_listener($event) { i0.ɵɵrestoreView(_r15); const _r0 = i0.ɵɵreference(6); return _r0.toggle($event); });
        i0.ɵɵpipe(7, "async");
        i0.ɵɵpipe(8, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, MatSelectionListExample_li_9_Template, 5, 5, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h3");
        i0.ɵɵelementStart(11, "code");
        i0.ɵɵtext(12, "mat-checkbox");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(13);
        i0.ɵɵelementStart(14, "ul", 0);
        i0.ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_14_listener($event) { return ctx.selected2 = ctx.getCurrentSelected($event); });
        i0.ɵɵelement(15, "mat-checkbox", 4, 5);
        i0.ɵɵpipe(17, "async");
        i0.ɵɵtemplate(18, MatSelectionListExample_li_18_Template, 3, 2, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "h3");
        i0.ɵɵelementStart(20, "code");
        i0.ɵɵtext(21, "Single select with mat-checkbox");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(22);
        i0.ɵɵelementStart(23, "ul", 0);
        i0.ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_23_listener($event) { return ctx.selected3 = ctx.getCurrentSelected($event); });
        i0.ɵɵtemplate(24, MatSelectionListExample_li_24_Template, 3, 2, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "h3");
        i0.ɵɵelementStart(26, "code");
        i0.ɵɵtext(27, "with trackBy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(28);
        i0.ɵɵelementStart(29, "ul", 6);
        i0.ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_29_listener($event) { return ctx.selected4 = ctx.getCurrentSelected($event); });
        i0.ɵɵelement(30, "mat-checkbox", 4, 7);
        i0.ɵɵpipe(32, "async");
        i0.ɵɵtemplate(33, MatSelectionListExample_li_33_Template, 3, 3, "li", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "button", 9);
        i0.ɵɵlistener("click", function MatSelectionListExample_Template_button_click_34_listener() { return ctx.changeElementName(); });
        i0.ɵɵtext(35, "Change element names and the already selected stays");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "button", 9);
        i0.ɵɵlistener("click", function MatSelectionListExample_Template_button_click_36_listener() { return ctx.reset(); });
        i0.ɵɵtext(37, "reset");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        const _r2 = i0.ɵɵreference(16);
        const _r5 = i0.ɵɵreference(31);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("\nSelected: ", ctx.selected1, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", i0.ɵɵpipeBind1(7, 22, _r0.checked))("indeterminate", i0.ɵɵpipeBind1(8, 24, _r0.indeterminate));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.data);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("\nSelected: ", ctx.selected2, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("indeterminate", i0.ɵɵpipeBind1(17, 26, _r2.indeterminate));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.data);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("\nSelected: ", ctx.selected3, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.data);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("\nSelected: ", ctx.selected4, "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", true)("trackBy", ctx.trackByFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("indeterminate", i0.ɵɵpipeBind1(32, 28, _r5.indeterminate));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i1.MatSelection, i1.MatSelectAll, i2.NgForOf, i3.MatCheckbox, i1.MatSelectionToggle], pipes: [i2.AsyncPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSelectionListExample, [{
        type: Component,
        args: [{ selector: 'mat-selection-list-example', template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" matSelectAll #allToggler=\"matSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" matSelectionToggle #toggler=\"matSelectionToggle\" [matSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle1=\"matSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"false\" (matSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (matSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle2=\"matSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\" [matSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL21hdC1zZWxlY3Rpb24tbGlzdC9tYXQtc2VsZWN0aW9uLWxpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24vbWF0LXNlbGVjdGlvbi1saXN0L21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ010QywwQkFBOEI7SUFDNUIscUNBQ2lFO0lBQTNCLCtKQUFTLFlBQWdCLElBQUM7O0lBRGhFLGlCQUNpRTtJQUNqRSxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFIcUUsZUFBZ0M7SUFBaEMsaURBQWdDLDhDQUFBO0lBRXhHLGVBQ0Y7SUFERSx3Q0FDRjs7O0lBT0EsMEJBQThCO0lBQzVCLG1DQUFpRjtJQUNqRixZQUNGO0lBQUEsaUJBQUs7OztJQUY4QixlQUFnQztJQUFoQyxrREFBZ0M7SUFDakUsZUFDRjtJQURFLHlDQUNGOzs7SUFNQSwwQkFBOEI7SUFDNUIsbUNBQWlGO0lBQ2pGLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBRjhCLGVBQWdDO0lBQWhDLGtEQUFnQztJQUNqRSxlQUNGO0lBREUseUNBQ0Y7OztJQU9BLDBCQUE4RDtJQUM1RCxtQ0FBK0c7SUFDL0csWUFDRjtJQUFBLGlCQUFLOzs7O0lBRjhCLGVBQWdDO0lBQWhDLGtEQUFnQyxrQ0FBQTtJQUNqRSxlQUNGO0lBREUseUNBQ0Y7O0FEckNGOztHQUVHO0FBS0gsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQUtF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RSxPQUFPLEVBQU0sV0FBVyxFQUFFLFNBQVM7Q0FDMUUsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLEdBQUcsRUFBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRyxHQUFHLEVBQUcsR0FBRyxFQUFFLElBQUk7SUFDdkQsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSTtDQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25DaGFuZ2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvc2VsZWN0aW9uJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTWF0IFNlbGVjdGlvbiBvbiBhIHNpbXBsZSBsaXN0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtc2VsZWN0aW9uLWxpc3QtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNlbGVjdGlvbkxpc3RFeGFtcGxlIHtcbiAgZGF0YSA9IEVMRU1FTlRfTkFNRVM7XG4gIHNlbGVjdGVkMTogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQyOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDM6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkNDogc3RyaW5nW10gPSBbXTtcblxuICBnZXRDdXJyZW50U2VsZWN0ZWQoZXZlbnQ6IFNlbGVjdGlvbkNoYW5nZTxzdHJpbmc+KSB7XG4gICAgcmV0dXJuIGV2ZW50LmFmdGVyLm1hcCgoc2VsZWN0KSA9PiBzZWxlY3QudmFsdWUpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBjaGFuZ2VFbGVtZW50TmFtZSgpIHtcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX1NZTUJPTFM7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX05BTUVTO1xuICB9XG59XG5cbmNvbnN0IEVMRU1FTlRfTkFNRVMgPSBbXG4gICdIeWRyb2dlbicsICAgJ0hlbGl1bScsICAgJ0xpdGhpdW0nLCAgJ0JlcnlsbGl1bScsICdCb3JvbicsICAgICAnQ2FyYm9uJywgICAnTml0cm9nZW4nLFxuICAnT3h5Z2VuJywgICAgICdGbHVvcmluZScsICdOZW9uJywgICAgICdTb2RpdW0nLCAgICAnTWFnbmVzaXVtJywgJ0FsdW1pbnVtJywgJ1NpbGljb24nLFxuICAnUGhvc3Bob3J1cycsICdTdWxmdXInLCAgICdDaGxvcmluZScsICdBcmdvbicsICAgICAnUG90YXNzaXVtJywgJ0NhbGNpdW0nLFxuXTtcblxuY29uc3QgRUxFTUVOVF9TWU1CT0xTID0gW1xuICAnSCcsICAnSGUnLCAnTGknLCAnQmUnLCAnQicsICdDJywgJ04nLCAgJ08nLCAgJ0YnLCAnTmUnLFxuICAnTmEnLCAnTWcnLCAnQWwnLCAnU2knLCAnUCcsICdTJywgJ0NsJywgJ0FyJywgJ0snLCAnQ2EnXG5dO1xuIiwiPGgzPjxjb2RlPm5hdGl2ZSBpbnB1dDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQxfX1cbjx1bCBtYXRTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFttYXRTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKG1hdFNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDEgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbWF0U2VsZWN0QWxsICNhbGxUb2dnbGVyPVwibWF0U2VsZWN0QWxsXCJcbiAgICAgIFtjaGVja2VkXT1cImFsbFRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCJcbiAgICAgIFtpbmRldGVybWluYXRlXT1cImFsbFRvZ2dsZXIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCJcbiAgICAgIChjbGljayk9XCJhbGxUb2dnbGVyLnRvZ2dsZSgkZXZlbnQpXCI+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG1hdFNlbGVjdGlvblRvZ2dsZSAjdG9nZ2xlcj1cIm1hdFNlbGVjdGlvblRvZ2dsZVwiIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCJcbiAgICAgIFtjaGVja2VkXT1cInRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCIgKGNsaWNrKT1cInRvZ2dsZXIudG9nZ2xlKClcIj5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGgzPjxjb2RlPm1hdC1jaGVja2JveDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQyfX1cbjx1bCBtYXRTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFttYXRTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKG1hdFNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDIgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bWF0LWNoZWNrYm94IG1hdFNlbGVjdEFsbCAjdG9nZ2xlMT1cIm1hdFNlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTEuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XG4gICAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3Rpb25Ub2dnbGUgW21hdFNlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIj48L21hdC1jaGVja2JveD5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGgzPjxjb2RlPlNpbmdsZSBzZWxlY3Qgd2l0aCBtYXQtY2hlY2tib3g8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkM319XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwiZmFsc2VcIiAobWF0U2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMyA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XG4gICAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3Rpb25Ub2dnbGUgW21hdFNlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIj48L21hdC1jaGVja2JveD5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGgzPjxjb2RlPndpdGggdHJhY2tCeTwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQ0fX1cbjx1bCBtYXRTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFttYXRTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgW3RyYWNrQnldPVwidHJhY2tCeUZuXCIgKG1hdFNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDQgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bWF0LWNoZWNrYm94IG1hdFNlbGVjdEFsbCAjdG9nZ2xlMj1cIm1hdFNlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhOyBpbmRleCBhcyBpOyB0cmFja0J5OiB0cmFja0J5Rm5cIj5cbiAgICA8bWF0LWNoZWNrYm94IG1hdFNlbGVjdGlvblRvZ2dsZSBbbWF0U2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiIFttYXRTZWxlY3Rpb25Ub2dnbGVJbmRleF09XCJpXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxidXR0b24gKGNsaWNrKT1cImNoYW5nZUVsZW1lbnROYW1lKClcIj5DaGFuZ2UgZWxlbWVudCBuYW1lcyBhbmQgdGhlIGFscmVhZHkgc2VsZWN0ZWQgc3RheXM8L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cInJlc2V0KClcIj5yZXNldDwvYnV0dG9uPlxuIl19