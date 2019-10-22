/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/tabs";
import * as i7 from "@angular/common";
const _c0 = ["selectAfterAdding", ""];
function TabGroupDynamicExample_mat_tab_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 6);
    i0.ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_12_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r13); const index_r11 = ctx.index; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.removeTab(index_r11); });
    i0.ɵɵtext(3, " Delete Tab ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("label", tab_r10);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Contents for ", tab_r10, " tab ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r9.tabs.length === 1);
} }
/**
 * \@title Tab group with dynamically changing tabs
 */
export class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    /**
     * @param {?} selectAfterAdding
     * @return {?}
     */
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
}
TabGroupDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            },] },
];
/** @nocollapse */ TabGroupDynamicExample.ngFactoryDef = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
/** @nocollapse */ TabGroupDynamicExample.ngComponentDef = i0.ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 13, vars: 3, consts: [[1, "example-input-label"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
        const _r14 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "span", 0);
        i0.ɵɵtext(2, " Selected tab index: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field");
        i0.ɵɵelement(4, "input", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵelementStart(6, "button", 2);
        i0.ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r14); const _r8 = i0.ɵɵreference(9); return ctx.addTab(_r8.checked); });
        i0.ɵɵtext(7, " Add new tab ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-checkbox", null, _c0);
        i0.ɵɵtext(10, " Select tab after adding ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-tab-group", 3);
        i0.ɵɵlistener("selectedIndexChange", function TabGroupDynamicExample_Template_mat_tab_group_selectedIndexChange_11_listener($event) { return ctx.selected.setValue($event); });
        i0.ɵɵtemplate(12, TabGroupDynamicExample_mat_tab_12_Template, 4, 3, "mat-tab", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.selected);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("selectedIndex", ctx.selected.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.MatButton, i5.MatCheckbox, i6.MatTabGroup, i7.NgForOf, i6.MatTab], styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TabGroupDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TabGroupDynamicExample.prototype.tabs;
    /** @type {?} */
    TabGroupDynamicExample.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1keW5hbWljL3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtZHluYW1pYy90YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7SUNpQnpDLGtDQUNFO0lBQUEsWUFFQTtJQUFBLGlDQUlFO0lBRE0sNk9BQTBCO0lBQ2hDLDRCQUNGO0lBQUEsaUJBQVM7SUFDWCxpQkFBVTs7OztJQVQyQywrQkFBYTtJQUNoRSxlQUVBO0lBRkEseURBRUE7SUFFUSxlQUE4QjtJQUE5QixtREFBOEI7Ozs7O0FEWjFDLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFNRSxTQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQWEvQjs7Ozs7SUFYQyxNQUFNLENBQUMsaUJBQTBCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOztvR0FDWSxzQkFBc0I7cUVBQXRCLHNCQUFzQjs7UUNYbkMsMkJBQ0U7UUFBQSwrQkFBbUM7UUFBQSxxQ0FBb0I7UUFBQSxpQkFBTztRQUM5RCxzQ0FDRTtRQUFBLDJCQUNGO1FBQUEsaUJBQWlCO1FBQ25CLGlCQUFNO1FBRU4sMkJBQ0U7UUFBQSxpQ0FHRTtRQURNLGdLQUFTLHVCQUFpQyxJQUFDO1FBQ2pELDZCQUNGO1FBQUEsaUJBQVM7UUFDVCwrQ0FBa0M7UUFBQSwwQ0FBd0I7UUFBQSxpQkFBZTtRQUMzRSxpQkFBTTtRQUVOLHlDQUVFO1FBRGEsNklBQXVCLDZCQUF5QixJQUFDO1FBQzlELGlGQUNFO1FBU0osaUJBQWdCOztRQXpCa0IsZUFBd0I7UUFBeEIsMENBQXdCO1FBYTNDLGVBQWdDO1FBQWhDLGtEQUFnQztRQUVwQyxlQUEyQztRQUEzQyxrQ0FBMkM7O21DRFB6QyxzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs7O0lBRUMsc0NBQW9DOztJQUNwQywwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGR5bmFtaWNhbGx5IGNoYW5naW5nIHRhYnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwRHluYW1pY0V4YW1wbGUge1xuICB0YWJzID0gWydGaXJzdCcsICdTZWNvbmQnLCAnVGhpcmQnXTtcbiAgc2VsZWN0ZWQgPSBuZXcgRm9ybUNvbnRyb2woMCk7XG5cbiAgYWRkVGFiKHNlbGVjdEFmdGVyQWRkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy50YWJzLnB1c2goJ05ldycpO1xuXG4gICAgaWYgKHNlbGVjdEFmdGVyQWRkaW5nKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnNldFZhbHVlKHRoaXMudGFicy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iLCI8ZGl2PlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtaW5wdXQtbGFiZWxcIj4gU2VsZWN0ZWQgdGFiIGluZGV4OiA8L3NwYW4+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFtmb3JtQ29udHJvbF09XCJzZWxlY3RlZFwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cbjxkaXY+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYWRkLXRhYi1idXR0b25cIlxuICAgICAgICAgIChjbGljayk9XCJhZGRUYWIoc2VsZWN0QWZ0ZXJBZGRpbmcuY2hlY2tlZClcIj5cbiAgICBBZGQgbmV3IHRhYlxuICA8L2J1dHRvbj5cbiAgPG1hdC1jaGVja2JveCAjc2VsZWN0QWZ0ZXJBZGRpbmc+IFNlbGVjdCB0YWIgYWZ0ZXIgYWRkaW5nIDwvbWF0LWNoZWNrYm94PlxuPC9kaXY+XG5cbjxtYXQtdGFiLWdyb3VwIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkLnZhbHVlXCJcbiAgICAgICAgICAgICAgIChzZWxlY3RlZEluZGV4Q2hhbmdlKT1cInNlbGVjdGVkLnNldFZhbHVlKCRldmVudClcIj5cbiAgPG1hdC10YWIgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzOyBsZXQgaW5kZXggPSBpbmRleFwiIFtsYWJlbF09XCJ0YWJcIj5cbiAgICBDb250ZW50cyBmb3Ige3t0YWJ9fSB0YWJcblxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1kZWxldGUtdGFiLWJ1dHRvblwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwidGFicy5sZW5ndGggPT09IDFcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZVRhYihpbmRleClcIj5cbiAgICAgIERlbGV0ZSBUYWJcbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19