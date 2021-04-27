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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL21hdC1zZWxlY3Rpb24tbGlzdC9tYXQtc2VsZWN0aW9uLWxpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24vbWF0LXNlbGVjdGlvbi1saXN0L21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ010QywwQkFBOEI7SUFDNUIscUNBQ2lFO0lBQTNCLCtKQUFTLFlBQWdCLElBQUM7O0lBRGhFLGlCQUNpRTtJQUNqRSxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFIcUUsZUFBZ0M7SUFBaEMsaURBQWdDLDhDQUFBO0lBRXhHLGVBQ0Y7SUFERSx3Q0FDRjs7O0lBT0EsMEJBQThCO0lBQzVCLG1DQUFpRjtJQUNqRixZQUNGO0lBQUEsaUJBQUs7OztJQUY4QixlQUFnQztJQUFoQyxrREFBZ0M7SUFDakUsZUFDRjtJQURFLHlDQUNGOzs7SUFNQSwwQkFBOEI7SUFDNUIsbUNBQWlGO0lBQ2pGLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBRjhCLGVBQWdDO0lBQWhDLGtEQUFnQztJQUNqRSxlQUNGO0lBREUseUNBQ0Y7OztJQU9BLDBCQUE4RDtJQUM1RCxtQ0FBK0c7SUFDL0csWUFDRjtJQUFBLGlCQUFLOzs7O0lBRjhCLGVBQWdDO0lBQWhDLGtEQUFnQyxrQ0FBQTtJQUNqRSxlQUNGO0lBREUseUNBQ0Y7O0FEckNGOztHQUVHO0FBS0gsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQUtF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RUFBRSxTQUFTO0lBQ3JGLFlBQVksRUFBRSxRQUFRLEVBQUksVUFBVSxFQUFFLE9BQU8sRUFBTSxXQUFXLEVBQUUsU0FBUztDQUMxRSxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUc7SUFDdEIsR0FBRyxFQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFHLEdBQUcsRUFBRyxHQUFHLEVBQUUsSUFBSTtJQUN2RCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJO0NBQ3hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlbGVjdGlvbkNoYW5nZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBNYXQgU2VsZWN0aW9uIG9uIGEgc2ltcGxlIGxpc3QuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtYXQtc2VsZWN0aW9uLWxpc3QtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0aW9uTGlzdEV4YW1wbGUge1xuICBkYXRhID0gRUxFTUVOVF9OQU1FUztcbiAgc2VsZWN0ZWQxOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDI6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkMzogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQ0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIGdldEN1cnJlbnRTZWxlY3RlZChldmVudDogU2VsZWN0aW9uQ2hhbmdlPHN0cmluZz4pIHtcbiAgICByZXR1cm4gZXZlbnQuYWZ0ZXIubWFwKChzZWxlY3QpID0+IHNlbGVjdC52YWx1ZSk7XG4gIH1cblxuICB0cmFja0J5Rm4oaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGNoYW5nZUVsZW1lbnROYW1lKCkge1xuICAgIHRoaXMuZGF0YSA9IEVMRU1FTlRfU1lNQk9MUztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZGF0YSA9IEVMRU1FTlRfTkFNRVM7XG4gIH1cbn1cblxuY29uc3QgRUxFTUVOVF9OQU1FUyA9IFtcbiAgJ0h5ZHJvZ2VuJywgICAnSGVsaXVtJywgICAnTGl0aGl1bScsICAnQmVyeWxsaXVtJywgJ0Jvcm9uJywgICAgICdDYXJib24nLCAgICdOaXRyb2dlbicsXG4gICdPeHlnZW4nLCAgICAgJ0ZsdW9yaW5lJywgJ05lb24nLCAgICAgJ1NvZGl1bScsICAgICdNYWduZXNpdW0nLCAnQWx1bWludW0nLCAnU2lsaWNvbicsXG4gICdQaG9zcGhvcnVzJywgJ1N1bGZ1cicsICAgJ0NobG9yaW5lJywgJ0FyZ29uJywgICAgICdQb3Rhc3NpdW0nLCAnQ2FsY2l1bScsXG5dO1xuXG5jb25zdCBFTEVNRU5UX1NZTUJPTFMgPSBbXG4gICdIJywgICdIZScsICdMaScsICdCZScsICdCJywgJ0MnLCAnTicsICAnTycsICAnRicsICdOZScsXG4gICdOYScsICdNZycsICdBbCcsICdTaScsICdQJywgJ1MnLCAnQ2wnLCAnQXInLCAnSycsICdDYSdcbl07XG4iLCI8aDM+PGNvZGU+bmF0aXZlIGlucHV0PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDF9fVxuPHVsIG1hdFNlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW21hdFNlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiAobWF0U2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMSA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBtYXRTZWxlY3RBbGwgI2FsbFRvZ2dsZXI9XCJtYXRTZWxlY3RBbGxcIlxuICAgICAgW2NoZWNrZWRdPVwiYWxsVG9nZ2xlci5jaGVja2VkIHwgYXN5bmNcIlxuICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiYWxsVG9nZ2xlci5pbmRldGVybWluYXRlIHwgYXN5bmNcIlxuICAgICAgKGNsaWNrKT1cImFsbFRvZ2dsZXIudG9nZ2xlKCRldmVudClcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbWF0U2VsZWN0aW9uVG9nZ2xlICN0b2dnbGVyPVwibWF0U2VsZWN0aW9uVG9nZ2xlXCIgW21hdFNlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIlxuICAgICAgW2NoZWNrZWRdPVwidG9nZ2xlci5jaGVja2VkIHwgYXN5bmNcIiAoY2xpY2spPVwidG9nZ2xlci50b2dnbGUoKVwiPlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48aDM+PGNvZGU+bWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDJ9fVxuPHVsIG1hdFNlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW21hdFNlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiAobWF0U2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMiA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0QWxsICN0b2dnbGUxPVwibWF0U2VsZWN0QWxsXCIgW2luZGV0ZXJtaW5hdGVdPVwidG9nZ2xlMS5pbmRldGVybWluYXRlIHwgYXN5bmNcIj48L21hdC1jaGVja2JveD5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cbiAgICA8bWF0LWNoZWNrYm94IG1hdFNlbGVjdGlvblRvZ2dsZSBbbWF0U2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48aDM+PGNvZGU+U2luZ2xlIHNlbGVjdCB3aXRoIG1hdC1jaGVja2JveDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQzfX1cbjx1bCBtYXRTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFttYXRTZWxlY3Rpb25NdWx0aXBsZV09XCJmYWxzZVwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQzID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cbiAgICA8bWF0LWNoZWNrYm94IG1hdFNlbGVjdGlvblRvZ2dsZSBbbWF0U2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48aDM+PGNvZGU+d2l0aCB0cmFja0J5PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDR9fVxuPHVsIG1hdFNlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW21hdFNlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiBbdHJhY2tCeV09XCJ0cmFja0J5Rm5cIiAobWF0U2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkNCA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0QWxsICN0b2dnbGUyPVwibWF0U2VsZWN0QWxsXCIgW2luZGV0ZXJtaW5hdGVdPVwidG9nZ2xlMi5pbmRldGVybWluYXRlIHwgYXN5bmNcIj48L21hdC1jaGVja2JveD5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGE7IGluZGV4IGFzIGk7IHRyYWNrQnk6IHRyYWNrQnlGblwiPlxuICAgIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0aW9uVG9nZ2xlIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCIgW21hdFNlbGVjdGlvblRvZ2dsZUluZGV4XT1cImlcIj48L21hdC1jaGVja2JveD5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlRWxlbWVudE5hbWUoKVwiPkNoYW5nZSBlbGVtZW50IG5hbWVzIGFuZCB0aGUgYWxyZWFkeSBzZWxlY3RlZCBzdGF5czwvYnV0dG9uPlxuPGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiPnJlc2V0PC9idXR0b24+XG4iXX0=