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
        args: [{
                selector: 'cdk-selection-list-example',
                templateUrl: 'cdk-selection-list-example.html',
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDTXRDLDBCQUE4QjtJQUM1QixxQ0FDaUU7SUFBM0IsK0pBQVMsWUFBZ0IsSUFBQzs7SUFEaEUsaUJBQ2lFO0lBQ2pFLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUhxRSxlQUFnQztJQUFoQyxpREFBZ0MsOENBQUE7SUFFeEcsZUFDRjtJQURFLHdDQUNGOzs7SUFPQSwwQkFBOEI7SUFDNUIsbUNBQWlGO0lBQ2pGLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBRjhCLGVBQWdDO0lBQWhDLGtEQUFnQztJQUNqRSxlQUNGO0lBREUseUNBQ0Y7OztJQU1BLDBCQUE4QjtJQUM1QixtQ0FBaUY7SUFDakYsWUFDRjtJQUFBLGlCQUFLOzs7SUFGOEIsZUFBZ0M7SUFBaEMsa0RBQWdDO0lBQ2pFLGVBQ0Y7SUFERSx5Q0FDRjs7O0lBT0EsMEJBQThEO0lBQzVELG1DQUErRztJQUMvRyxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFGOEIsZUFBZ0M7SUFBaEMsa0RBQWdDLGtDQUFBO0lBQ2pFLGVBQ0Y7SUFERSx5Q0FDRjs7QURyQ0Y7O0dBRUc7QUFLSCxNQUFNLE9BQU8sdUJBQXVCO0lBSnBDO1FBS0UsU0FBSSxHQUFH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LEVBQUUsUUFBUSxFQUFJLFVBQVUsRUFBRSxPQUFPLEVBQU0sV0FBVyxFQUFFLFNBQVM7Q0FDMUUsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLEdBQUcsRUFBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRyxHQUFHLEVBQUcsR0FBRyxFQUFFLElBQUk7SUFDdkQsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSTtDQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25DaGFuZ2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvc2VsZWN0aW9uJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ0RLIFNlbGVjdGlvbiBvbiBhIHNpbXBsZSBsaXN0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstc2VsZWN0aW9uLWxpc3QtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka1NlbGVjdGlvbkxpc3RFeGFtcGxlIHtcbiAgZGF0YSA9IEVMRU1FTlRfTkFNRVM7XG4gIHNlbGVjdGVkMTogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQyOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDM6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkNDogc3RyaW5nW10gPSBbXTtcblxuICBnZXRDdXJyZW50U2VsZWN0ZWQoZXZlbnQ6IFNlbGVjdGlvbkNoYW5nZTxzdHJpbmc+KSB7XG4gICAgcmV0dXJuIGV2ZW50LmFmdGVyLm1hcCgoc2VsZWN0KSA9PiBzZWxlY3QudmFsdWUpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBjaGFuZ2VFbGVtZW50TmFtZSgpIHtcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX1NZTUJPTFM7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX05BTUVTO1xuICB9XG59XG5cbmNvbnN0IEVMRU1FTlRfTkFNRVMgPSBbXG4gICdIeWRyb2dlbicsICAgJ0hlbGl1bScsICAgJ0xpdGhpdW0nLCAgJ0JlcnlsbGl1bScsICdCb3JvbicsICAgICAnQ2FyYm9uJywgICAnTml0cm9nZW4nLFxuICAnT3h5Z2VuJywgICAgICdGbHVvcmluZScsICdOZW9uJywgICAgICdTb2RpdW0nLCAgICAnTWFnbmVzaXVtJywgJ0FsdW1pbnVtJywgJ1NpbGljb24nLFxuICAnUGhvc3Bob3J1cycsICdTdWxmdXInLCAgICdDaGxvcmluZScsICdBcmdvbicsICAgICAnUG90YXNzaXVtJywgJ0NhbGNpdW0nLFxuXTtcblxuY29uc3QgRUxFTUVOVF9TWU1CT0xTID0gW1xuICAnSCcsICAnSGUnLCAnTGknLCAnQmUnLCAnQicsICdDJywgJ04nLCAgJ08nLCAgJ0YnLCAnTmUnLFxuICAnTmEnLCAnTWcnLCAnQWwnLCAnU2knLCAnUCcsICdTJywgJ0NsJywgJ0FyJywgJ0snLCAnQ2EnXG5dO1xuIiwiPGgzPjxjb2RlPm5hdGl2ZSBpbnB1dDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQxfX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDEgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2RrU2VsZWN0QWxsICNhbGxUb2dnbGVyPVwiY2RrU2VsZWN0QWxsXCJcbiAgICAgIFtjaGVja2VkXT1cImFsbFRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCJcbiAgICAgIFtpbmRldGVybWluYXRlXT1cImFsbFRvZ2dsZXIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCJcbiAgICAgIChjbGljayk9XCJhbGxUb2dnbGVyLnRvZ2dsZSgkZXZlbnQpXCI+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNka1NlbGVjdGlvblRvZ2dsZSAjdG9nZ2xlcj1cImNka1NlbGVjdGlvblRvZ2dsZVwiIFtjZGtTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCJcbiAgICAgIFtjaGVja2VkXT1cInRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCIgKGNsaWNrKT1cInRvZ2dsZXIudG9nZ2xlKClcIj5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGgzPjxjb2RlPm1hdC1jaGVja2JveDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQyfX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDIgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdEFsbCAjdG9nZ2xlMT1cImNka1NlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTEuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XG4gICAgPG1hdC1jaGVja2JveCBjZGtTZWxlY3Rpb25Ub2dnbGUgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIj48L21hdC1jaGVja2JveD5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGgzPjxjb2RlPlNpbmdsZSBzZWxlY3Qgd2l0aCBtYXQtY2hlY2tib3g8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkM319XG48dWwgY2RrU2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbY2RrU2VsZWN0aW9uTXVsdGlwbGVdPVwiZmFsc2VcIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMyA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XG4gICAgPG1hdC1jaGVja2JveCBjZGtTZWxlY3Rpb25Ub2dnbGUgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIj48L21hdC1jaGVja2JveD5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGgzPjxjb2RlPndpdGggdHJhY2tCeTwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQ0fX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgW3RyYWNrQnldPVwidHJhY2tCeUZuXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDQgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdEFsbCAjdG9nZ2xlMj1cImNka1NlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhOyBpbmRleCBhcyBpOyB0cmFja0J5OiB0cmFja0J5Rm5cIj5cbiAgICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdGlvblRvZ2dsZSBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiIFtjZGtTZWxlY3Rpb25Ub2dnbGVJbmRleF09XCJpXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxidXR0b24gKGNsaWNrKT1cImNoYW5nZUVsZW1lbnROYW1lKClcIj5DaGFuZ2UgZWxlbWVudCBuYW1lcyBhbmQgdGhlIGFscmVhZHkgc2VsZWN0ZWQgc3RheXM8L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cInJlc2V0KClcIj5yZXNldDwvYnV0dG9uPlxuIl19