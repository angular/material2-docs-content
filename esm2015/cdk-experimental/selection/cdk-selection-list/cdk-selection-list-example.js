import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
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
CdkSelectionListExample.ɵfac = function CdkSelectionListExample_Factory(t) { return new (t || CdkSelectionListExample)(); };
CdkSelectionListExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkSelectionListExample, selectors: [["cdk-selection-list-example"]], decls: 38, vars: 30, consts: [["cdkSelection", "", 3, "dataSource", "cdkSelectionMultiple", "cdkSelectionChange"], ["type", "checkbox", "cdkSelectAll", "", 3, "checked", "indeterminate", "click"], ["allToggler", "cdkSelectAll"], [4, "ngFor", "ngForOf"], ["cdkSelectAll", "", 3, "indeterminate"], ["toggle1", "cdkSelectAll"], ["cdkSelection", "", 3, "dataSource", "cdkSelectionMultiple", "trackBy", "cdkSelectionChange"], ["toggle2", "cdkSelectAll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], ["type", "checkbox", "cdkSelectionToggle", "", 3, "cdkSelectionToggleValue", "checked", "click"], ["toggler", "cdkSelectionToggle"], ["cdkSelectionToggle", "", 3, "cdkSelectionToggleValue"], ["cdkSelectionToggle", "", 3, "cdkSelectionToggleValue", "cdkSelectionToggleIndex"]], template: function CdkSelectionListExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7SUNLakMsMEJBQ0U7SUFBQSxxQ0FFQTtJQURzQywrSkFBUyxZQUFnQixJQUFDOztJQURoRSxpQkFFQTtJQUFBLFlBQ0Y7SUFBQSxpQkFBSzs7OztJQUhxRSxlQUFnQztJQUFoQyxpREFBZ0MsOENBQUE7SUFFeEcsZUFDRjtJQURFLHdDQUNGOzs7SUFPQSwwQkFDRTtJQUFBLG1DQUFpRjtJQUNqRixZQUNGO0lBQUEsaUJBQUs7OztJQUY4QixlQUFnQztJQUFoQyxrREFBZ0M7SUFDakUsZUFDRjtJQURFLHlDQUNGOzs7SUFNQSwwQkFDRTtJQUFBLG1DQUFpRjtJQUNqRixZQUNGO0lBQUEsaUJBQUs7OztJQUY4QixlQUFnQztJQUFoQyxrREFBZ0M7SUFDakUsZUFDRjtJQURFLHlDQUNGOzs7SUFPQSwwQkFDRTtJQUFBLG1DQUErRztJQUMvRyxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFGOEIsZUFBZ0M7SUFBaEMsa0RBQWdDLGtDQUFBO0lBQ2pFLGVBQ0Y7SUFERSx5Q0FDRjs7QURwQ0Y7O0dBRUc7QUFLSCxNQUFNLE9B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QzthQUMvQzs7QUFpQ0QsTUFBTSxhQUFhLEdBQUc7SUFDcEIsVUFBVSxFQUFJLFFBQVEsRUFBSSxTQUFTLEVBQUcsV0FBVyxFQUFFLE9BQU8sRUFBTSxRQUFRLEVBQUksVUFBVTtJQUN0RixRQUFRLEVBQU0sVUFBVSxFQUFFLE1BQU0sRUFBTSxRQUFRLEVBQUssV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTO0lBQ3JGLFlBQVksRUFBRSxRQUFRLEVBQUksVUFBVSxFQUFFLE9BQU8sRUFBTSxXQUFXLEVBQUUsU0FBUztDQUMxRSxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUc7SUFDdEIsR0FBRyxFQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFHLEdBQUcsRUFBRyxHQUFHLEVBQUUsSUFBSTtJQUN2RCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJO0NBQ3hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlbGVjdGlvbkNoYW5nZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlcGxheVN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEB0aXRsZSBDREsgU2VsZWN0aW9uIG9uIGEgc2ltcGxlIGxpc3QuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1zZWxlY3Rpb24tbGlzdC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstc2VsZWN0aW9uLWxpc3QtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU2VsZWN0aW9uTGlzdEV4YW1wbGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ZWQgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcblxuICBkYXRhID0gRUxFTUVOVF9OQU1FUztcblxuICBzZWxlY3RlZDE6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkMjogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQzOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDQ6IHN0cmluZ1tdID0gW107XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRTZWxlY3RlZChldmVudDogU2VsZWN0aW9uQ2hhbmdlPHN0cmluZz4pIHtcbiAgICByZXR1cm4gZXZlbnQuYWZ0ZXIubWFwKChzZWxlY3QpID0+IHNlbGVjdC52YWx1ZSk7XG4gIH1cblxuICB0cmFja0J5Rm4oaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGNoYW5nZUVsZW1lbnROYW1lKCkge1xuICAgIHRoaXMuZGF0YSA9IEVMRU1FTlRfU1lNQk9MUztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZGF0YSA9IEVMRU1FTlRfTkFNRVM7XG4gIH1cbn1cblxuY29uc3QgRUxFTUVOVF9OQU1FUyA9IFtcbiAgJ0h5ZHJvZ2VuJywgICAnSGVsaXVtJywgICAnTGl0aGl1bScsICAnQmVyeWxsaXVtJywgJ0Jvcm9uJywgICAgICdDYXJib24nLCAgICdOaXRyb2dlbicsXG4gICdPeHlnZW4nLCAgICAgJ0ZsdW9yaW5lJywgJ05lb24nLCAgICAgJ1NvZGl1bScsICAgICdNYWduZXNpdW0nLCAnQWx1bWludW0nLCAnU2lsaWNvbicsXG4gICdQaG9zcGhvcnVzJywgJ1N1bGZ1cicsICAgJ0NobG9yaW5lJywgJ0FyZ29uJywgICAgICdQb3Rhc3NpdW0nLCAnQ2FsY2l1bScsXG5dO1xuXG5jb25zdCBFTEVNRU5UX1NZTUJPTFMgPSBbXG4gICdIJywgICdIZScsICdMaScsICdCZScsICdCJywgJ0MnLCAnTicsICAnTycsICAnRicsICdOZScsXG4gICdOYScsICdNZycsICdBbCcsICdTaScsICdQJywgJ1MnLCAnQ2wnLCAnQXInLCAnSycsICdDYSdcbl07XG4iLCI8aDM+PGNvZGU+bmF0aXZlIGlucHV0PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDF9fVxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMSA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjZGtTZWxlY3RBbGwgI2FsbFRvZ2dsZXI9XCJjZGtTZWxlY3RBbGxcIlxuICAgICAgW2NoZWNrZWRdPVwiYWxsVG9nZ2xlci5jaGVja2VkIHwgYXN5bmNcIlxuICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiYWxsVG9nZ2xlci5pbmRldGVybWluYXRlIHwgYXN5bmNcIlxuICAgICAgKGNsaWNrKT1cImFsbFRvZ2dsZXIudG9nZ2xlKCRldmVudClcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2RrU2VsZWN0aW9uVG9nZ2xlICN0b2dnbGVyPVwiY2RrU2VsZWN0aW9uVG9nZ2xlXCIgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIlxuICAgICAgW2NoZWNrZWRdPVwidG9nZ2xlci5jaGVja2VkIHwgYXN5bmNcIiAoY2xpY2spPVwidG9nZ2xlci50b2dnbGUoKVwiPlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48aDM+PGNvZGU+bWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDJ9fVxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMiA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0QWxsICN0b2dnbGUxPVwiY2RrU2VsZWN0QWxsXCIgW2luZGV0ZXJtaW5hdGVdPVwidG9nZ2xlMS5pbmRldGVybWluYXRlIHwgYXN5bmNcIj48L21hdC1jaGVja2JveD5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cbiAgICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdGlvblRvZ2dsZSBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48aDM+PGNvZGU+U2luZ2xlIHNlbGVjdCB3aXRoIG1hdC1jaGVja2JveDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQzfX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJmYWxzZVwiIChjZGtTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQzID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cbiAgICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdGlvblRvZ2dsZSBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48aDM+PGNvZGU+d2l0aCB0cmFja0J5PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDR9fVxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiBbdHJhY2tCeV09XCJ0cmFja0J5Rm5cIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkNCA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0QWxsICN0b2dnbGUyPVwiY2RrU2VsZWN0QWxsXCIgW2luZGV0ZXJtaW5hdGVdPVwidG9nZ2xlMi5pbmRldGVybWluYXRlIHwgYXN5bmNcIj48L21hdC1jaGVja2JveD5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGE7IGluZGV4IGFzIGk7IHRyYWNrQnk6IHRyYWNrQnlGblwiPlxuICAgIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0aW9uVG9nZ2xlIFtjZGtTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCIgW2Nka1NlbGVjdGlvblRvZ2dsZUluZGV4XT1cImlcIj48L21hdC1jaGVja2JveD5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlRWxlbWVudE5hbWUoKVwiPkNoYW5nZSBlbGVtZW50IG5hbWVzIGFuZCB0aGUgYWxyZWFkeSBzZWxlY3RlZCBzdGF5czwvYnV0dG9uPlxuPGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiPnJlc2V0PC9idXR0b24+XG4iXX0=