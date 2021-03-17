import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
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
        this._destroyed = new ReplaySubject(1);
        this.data = ELEMENT_NAMES;
        this.selected1 = [];
        this.selected2 = [];
        this.selected3 = [];
        this.selected4 = [];
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
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
        args: [{
                selector: 'mat-selection-list-example',
                templateUrl: 'mat-selection-list-example.html',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL21hdC1zZWxlY3Rpb24tbGlzdC9tYXQtc2VsZWN0aW9uLWxpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24vbWF0LXNlbGVjdGlvbi1saXN0L21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0lDS2pDLDBCQUE4QjtJQUM1QixxQ0FDaUU7SUFBM0IsK0pBQVMsWUFBZ0IsSUFBQzs7SUFEaEUsaUJBQ2lFO0lBQ2pFLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUhxRSxlQUFnQztJQUFoQyxpREFBZ0MsOENBQUE7SUFFeEcsZUFDRjtJQURFLHdDQUNGOzs7SUFPQSwwQkFBOEI7SUFDNUIsbUNBQWlGO0lBQ2pGLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBRjhCLGVBQWdDO0lBQWhDLGtEQUFnQztJQUNqRSxlQUNGO0lBREUseUNBQ0Y7OztJQU1BLDBCQUE4QjtJQUM1QixtQ0FBaUY7SUFDakYsWUFDRjtJQUFBLGlCQUFLOzs7SUFGOEIsZUFBZ0M7SUFBaEMsa0RBQWdDO0lBQ2pFLGVBQ0Y7SUFERSx5Q0FDRjs7O0lBT0EsMEJBQThEO0lBQzVELG1DQUErRztJQUMvRyxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFGOEIsZUFBZ0M7SUFBaEMsa0RBQWdDLGtDQUFBO0lBQ2pFLGVBQ0Y7SUFERSx5Q0FDRjs7QURw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NEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2FBQy9DOztBQWlDRCxNQUFNLGFBQWEsR0FBRztJQUNwQixVQUFVLEVBQUksUUFBUSxFQUFJLFNBQVMsRUFBRyxXQUFXLEVBQUUsT0FBTyxFQUFNLFFBQVEsRUFBSSxVQUFVO0lBQ3RGLFFBQVEsRUFBTSxVQUFVLEVBQUUsTUFBTSxFQUFNLFFBQVEsRUFBSyxXQUFXLEVBQUUsVUFBVSxFQUFFLFNBQVM7SUFDckYsWUFBWSxFQUFFLFFBQVEsRUFBSSxVQUFVLEVBQUUsT0FBTyxFQUFNLFdBQVcsRUFBRSxTQUFTO0NBQzFFLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRztJQUN0QixHQUFHLEVBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUcsR0FBRyxFQUFHLEdBQUcsRUFBRSxJQUFJO0lBQ3ZELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUk7Q0FDeEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbic7XG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVwbGF5U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQHRpdGxlIE1hdCBTZWxlY3Rpb24gb24gYSBzaW1wbGUgbGlzdC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRTZWxlY3Rpb25MaXN0RXhhbXBsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3llZCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuXG4gIGRhdGEgPSBFTEVNRU5UX05BTUVTO1xuXG4gIHNlbGVjdGVkMTogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQyOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDM6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkNDogc3RyaW5nW10gPSBbXTtcblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFNlbGVjdGVkKGV2ZW50OiBTZWxlY3Rpb25DaGFuZ2U8c3RyaW5nPikge1xuICAgIHJldHVybiBldmVudC5hZnRlci5tYXAoKHNlbGVjdCkgPT4gc2VsZWN0LnZhbHVlKTtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgY2hhbmdlRWxlbWVudE5hbWUoKSB7XG4gICAgdGhpcy5kYXRhID0gRUxFTUVOVF9TWU1CT0xTO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhID0gRUxFTUVOVF9OQU1FUztcbiAgfVxufVxuXG5jb25zdCBFTEVNRU5UX05BTUVTID0gW1xuICAnSHlkcm9nZW4nLCAgICdIZWxpdW0nLCAgICdMaXRoaXVtJywgICdCZXJ5bGxpdW0nLCAnQm9yb24nLCAgICAgJ0NhcmJvbicsICAgJ05pdHJvZ2VuJyxcbiAgJ094eWdlbicsICAgICAnRmx1b3JpbmUnLCAnTmVvbicsICAgICAnU29kaXVtJywgICAgJ01hZ25lc2l1bScsICdBbHVtaW51bScsICdTaWxpY29uJyxcbiAgJ1Bob3NwaG9ydXMnLCAnU3VsZnVyJywgICAnQ2hsb3JpbmUnLCAnQXJnb24nLCAgICAgJ1BvdGFzc2l1bScsICdDYWxjaXVtJyxcbl07XG5cbmNvbnN0IEVMRU1FTlRfU1lNQk9MUyA9IFtcbiAgJ0gnLCAgJ0hlJywgJ0xpJywgJ0JlJywgJ0InLCAnQycsICdOJywgICdPJywgICdGJywgJ05lJyxcbiAgJ05hJywgJ01nJywgJ0FsJywgJ1NpJywgJ1AnLCAnUycsICdDbCcsICdBcicsICdLJywgJ0NhJ1xuXTtcbiIsIjxoMz48Y29kZT5uYXRpdmUgaW5wdXQ8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkMX19XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQxID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG1hdFNlbGVjdEFsbCAjYWxsVG9nZ2xlcj1cIm1hdFNlbGVjdEFsbFwiXG4gICAgICBbY2hlY2tlZF09XCJhbGxUb2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiXG4gICAgICBbaW5kZXRlcm1pbmF0ZV09XCJhbGxUb2dnbGVyLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiXG4gICAgICAoY2xpY2spPVwiYWxsVG9nZ2xlci50b2dnbGUoJGV2ZW50KVwiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBtYXRTZWxlY3Rpb25Ub2dnbGUgI3RvZ2dsZXI9XCJtYXRTZWxlY3Rpb25Ub2dnbGVcIiBbbWF0U2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiXG4gICAgICBbY2hlY2tlZF09XCJ0b2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiIChjbGljayk9XCJ0b2dnbGVyLnRvZ2dsZSgpXCI+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT5tYXQtY2hlY2tib3g8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkMn19XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQyID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3RBbGwgI3RvZ2dsZTE9XCJtYXRTZWxlY3RBbGxcIiBbaW5kZXRlcm1pbmF0ZV09XCJ0b2dnbGUxLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiPjwvbWF0LWNoZWNrYm94PlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0aW9uVG9nZ2xlIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT5TaW5nbGUgc2VsZWN0IHdpdGggbWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDN9fVxuPHVsIG1hdFNlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW21hdFNlbGVjdGlvbk11bHRpcGxlXT1cImZhbHNlXCIgKG1hdFNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDMgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0aW9uVG9nZ2xlIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT53aXRoIHRyYWNrQnk8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkNH19XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIFt0cmFja0J5XT1cInRyYWNrQnlGblwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQ0ID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3RBbGwgI3RvZ2dsZTI9XCJtYXRTZWxlY3RBbGxcIiBbaW5kZXRlcm1pbmF0ZV09XCJ0b2dnbGUyLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiPjwvbWF0LWNoZWNrYm94PlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgaW5kZXggYXMgaTsgdHJhY2tCeTogdHJhY2tCeUZuXCI+XG4gICAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3Rpb25Ub2dnbGUgW21hdFNlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIiBbbWF0U2VsZWN0aW9uVG9nZ2xlSW5kZXhdPVwiaVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbGVtZW50TmFtZSgpXCI+Q2hhbmdlIGVsZW1lbnQgbmFtZXMgYW5kIHRoZSBhbHJlYWR5IHNlbGVjdGVkIHN0YXlzPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+cmVzZXQ8L2J1dHRvbj5cbiJdfQ==