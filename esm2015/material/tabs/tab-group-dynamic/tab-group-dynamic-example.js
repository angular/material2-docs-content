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
function TabGroupDynamicExample_mat_tab_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 7);
    i0.ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_11_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const index_r3 = restoredCtx.index; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.removeTab(index_r3); });
    i0.ɵɵtext(3, " Delete Tab ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("label", tab_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Contents for ", tab_r2, " tab ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r1.tabs.length === 1);
} }
/**
 * @title Tab group with dynamically changing tabs
 */
export class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
}
TabGroupDynamicExample.ɵfac = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
TabGroupDynamicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 12, vars: 3, consts: [["appearance", "fill"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Selected tab index");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r6); const _r0 = i0.ɵɵreference(8); return ctx.addTab(_r0.checked); });
        i0.ɵɵtext(6, " Add new tab ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-checkbox", null, 3);
        i0.ɵɵtext(9, " Select tab after adding ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-tab-group", 4);
        i0.ɵɵlistener("selectedIndexChange", function TabGroupDynamicExample_Template_mat_tab_group_selectedIndexChange_10_listener($event) { return ctx.selected.setValue($event); });
        i0.ɵɵtemplate(11, TabGroupDynamicExample_mat_tab_11_Template, 4, 3, "mat-tab", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.selected);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("selectedIndex", ctx.selected.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.MatButton, i5.MatCheckbox, i6.MatTabGroup, i7.NgForOf, i6.MatTab], styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupDynamicExample, [{
        type: Component,
        args: [{ selector: 'tab-group-dynamic-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Selected tab index</mat-label>\n  <input matInput type=\"number\" [formControl]=\"selected\">\n</mat-form-field>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n    Contents for {{tab}} tab\n\n    <button mat-raised-button\n            class=\"example-delete-tab-button\"\n            [disabled]=\"tabs.length === 1\"\n            (click)=\"removeTab(index)\">\n      Delete Tab\n    </button>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztJQ2V6QyxrQ0FBbUU7SUFDakUsWUFFQTtJQUFBLGlDQUdtQztJQUEzQixnT0FBUywwQkFBZ0IsSUFBQztJQUNoQyw0QkFDRjtJQUFBLGlCQUFTO0lBQ1gsaUJBQVU7Ozs7SUFUMkMsOEJBQWE7SUFDaEUsZUFFQTtJQUZBLHdEQUVBO0lBRVEsZUFBOEI7SUFBOUIsbURBQThCOztBRGxCMUM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxhQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FhL0I7SUFYQyxNQUFNLENBQUMsaUJBQTBCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7OzRGQWRVLHNCQUFzQjt5RUFBdEIsc0JBQXNCOztRQ1huQyx5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSxrQ0FBa0I7UUFBQSxpQkFBWTtRQUN6QywyQkFBdUQ7UUFDekQsaUJBQWlCO1FBRWpCLDJCQUFLO1FBQ0gsaUNBRW9EO1FBQTVDLHlKQUFTLHVCQUFpQyxJQUFDO1FBQ2pELDZCQUNGO1FBQUEsaUJBQVM7UUFDVCw2Q0FBaUM7UUFBQyx5Q0FBd0I7UUFBQSxpQkFBZTtRQUMzRSxpQkFBTTtRQUVOLHlDQUNpRTtRQUFsRCw2SUFBdUIsNkJBQXlCLElBQUM7UUFDOUQsaUZBU1U7UUFDWixpQkFBZ0I7O1FBeEJnQixlQUF3QjtRQUF4QiwwQ0FBd0I7UUFZekMsZUFBZ0M7UUFBaEMsa0RBQWdDO1FBRXBCLGVBQVM7UUFBVCxrQ0FBUzs7dUZETHZCLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggZHluYW1pY2FsbHkgY2hhbmdpbmcgdGFic1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBEeW5hbWljRXhhbXBsZSB7XG4gIHRhYnMgPSBbJ0ZpcnN0JywgJ1NlY29uZCcsICdUaGlyZCddO1xuICBzZWxlY3RlZCA9IG5ldyBGb3JtQ29udHJvbCgwKTtcblxuICBhZGRUYWIoc2VsZWN0QWZ0ZXJBZGRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRhYnMucHVzaCgnTmV3Jyk7XG5cbiAgICBpZiAoc2VsZWN0QWZ0ZXJBZGRpbmcpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc2V0VmFsdWUodGhpcy50YWJzLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRhYihpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlNlbGVjdGVkIHRhYiBpbmRleDwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFtmb3JtQ29udHJvbF09XCJzZWxlY3RlZFwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGRpdj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hZGQtdGFiLWJ1dHRvblwiXG4gICAgICAgICAgKGNsaWNrKT1cImFkZFRhYihzZWxlY3RBZnRlckFkZGluZy5jaGVja2VkKVwiPlxuICAgIEFkZCBuZXcgdGFiXG4gIDwvYnV0dG9uPlxuICA8bWF0LWNoZWNrYm94ICNzZWxlY3RBZnRlckFkZGluZz4gU2VsZWN0IHRhYiBhZnRlciBhZGRpbmcgPC9tYXQtY2hlY2tib3g+XG48L2Rpdj5cblxuPG1hdC10YWItZ3JvdXAgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWQudmFsdWVcIlxuICAgICAgICAgICAgICAgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVwic2VsZWN0ZWQuc2V0VmFsdWUoJGV2ZW50KVwiPlxuICA8bWF0LXRhYiAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpbmRleCA9IGluZGV4XCIgW2xhYmVsXT1cInRhYlwiPlxuICAgIENvbnRlbnRzIGZvciB7e3RhYn19IHRhYlxuXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWRlbGV0ZS10YWItYnV0dG9uXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWJzLmxlbmd0aCA9PT0gMVwiXG4gICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlVGFiKGluZGV4KVwiPlxuICAgICAgRGVsZXRlIFRhYlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=