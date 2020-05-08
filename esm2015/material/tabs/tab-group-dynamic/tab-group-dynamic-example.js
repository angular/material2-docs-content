/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tabs/tab-group-dynamic/tab-group-dynamic-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
function TabGroupDynamicExample_mat_tab_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 6);
    i0.ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_11_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const index_r3 = ctx.index; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.removeTab(index_r3); });
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
/** @nocollapse */ TabGroupDynamicExample.ɵfac = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
/** @nocollapse */ TabGroupDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 12, vars: 3, consts: [["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Selected tab index");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "button", 1);
        i0.ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r6); const _r0 = i0.ɵɵreference(8); return ctx.addTab(_r0.checked); });
        i0.ɵɵtext(6, " Add new tab ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-checkbox", null, 2);
        i0.ɵɵtext(9, " Select tab after adding ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-tab-group", 3);
        i0.ɵɵlistener("selectedIndexChange", function TabGroupDynamicExample_Template_mat_tab_group_selectedIndexChange_10_listener($event) { return ctx.selected.setValue($event); });
        i0.ɵɵtemplate(11, TabGroupDynamicExample_mat_tab_11_Template, 4, 3, "mat-tab", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.selected);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("selectedIndex", ctx.selected.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.MatButton, i5.MatCheckbox, i6.MatTabGroup, i7.NgForOf, i6.MatTab], styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TabGroupDynamicExample.prototype.tabs;
    /** @type {?} */
    TabGroupDynamicExample.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0lDZXpDLGtDQUNFO0lBQUEsWUFFQTtJQUFBLGlDQUlFO0lBRE0sa09BQTBCO0lBQ2hDLDRCQUNGO0lBQUEsaUJBQVM7SUFDWCxpQkFBVTs7OztJQVQyQyw4QkFBYTtJQUNoRSxlQUVBO0lBRkEsd0RBRUE7SUFFUSxlQUE4QjtJQUE5QixtREFBOEI7Ozs7O0FEVjFDLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFNRSxTQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQWEvQjs7Ozs7SUFYQyxNQUFNLENBQUMsaUJBQTBCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzsrR0FDWSxzQkFBc0I7OEVBQXRCLHNCQUFzQjs7UUNYbkMsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLGtDQUFrQjtRQUFBLGlCQUFZO1FBQ3pDLDJCQUNGO1FBQUEsaUJBQWlCO1FBRWpCLDJCQUNFO1FBQUEsaUNBR0U7UUFETSx5SkFBUyx1QkFBaUMsSUFBQztRQUNqRCw2QkFDRjtRQUFBLGlCQUFTO1FBQ1QsNkNBQWtDO1FBQUEseUNBQXdCO1FBQUEsaUJBQWU7UUFDM0UsaUJBQU07UUFFTix5Q0FFRTtRQURhLDZJQUF1Qiw2QkFBeUIsSUFBQztRQUM5RCxpRkFDRTtRQVNKLGlCQUFnQjs7UUF4QmdCLGVBQXdCO1FBQXhCLDBDQUF3QjtRQVl6QyxlQUFnQztRQUFoQyxrREFBZ0M7UUFFcEMsZUFBMkM7UUFBM0Msa0NBQTJDOztrRERMekMsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7OztJQUVDLHNDQUFvQzs7SUFDcEMsMENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBkeW5hbWljYWxseSBjaGFuZ2luZyB0YWJzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cER5bmFtaWNFeGFtcGxlIHtcbiAgdGFicyA9IFsnRmlyc3QnLCAnU2Vjb25kJywgJ1RoaXJkJ107XG4gIHNlbGVjdGVkID0gbmV3IEZvcm1Db250cm9sKDApO1xuXG4gIGFkZFRhYihzZWxlY3RBZnRlckFkZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMudGFicy5wdXNoKCdOZXcnKTtcblxuICAgIGlmIChzZWxlY3RBZnRlckFkZGluZykge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zZXRWYWx1ZSh0aGlzLnRhYnMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGFiKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNlbGVjdGVkIHRhYiBpbmRleDwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFtmb3JtQ29udHJvbF09XCJzZWxlY3RlZFwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGRpdj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hZGQtdGFiLWJ1dHRvblwiXG4gICAgICAgICAgKGNsaWNrKT1cImFkZFRhYihzZWxlY3RBZnRlckFkZGluZy5jaGVja2VkKVwiPlxuICAgIEFkZCBuZXcgdGFiXG4gIDwvYnV0dG9uPlxuICA8bWF0LWNoZWNrYm94ICNzZWxlY3RBZnRlckFkZGluZz4gU2VsZWN0IHRhYiBhZnRlciBhZGRpbmcgPC9tYXQtY2hlY2tib3g+XG48L2Rpdj5cblxuPG1hdC10YWItZ3JvdXAgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWQudmFsdWVcIlxuICAgICAgICAgICAgICAgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVwic2VsZWN0ZWQuc2V0VmFsdWUoJGV2ZW50KVwiPlxuICA8bWF0LXRhYiAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpbmRleCA9IGluZGV4XCIgW2xhYmVsXT1cInRhYlwiPlxuICAgIENvbnRlbnRzIGZvciB7e3RhYn19IHRhYlxuXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWRlbGV0ZS10YWItYnV0dG9uXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWJzLmxlbmd0aCA9PT0gMVwiXG4gICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlVGFiKGluZGV4KVwiPlxuICAgICAgRGVsZXRlIFRhYlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=