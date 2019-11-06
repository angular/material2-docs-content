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
var _c0 = ["selectAfterAdding", ""];
function TabGroupDynamicExample_mat_tab_12_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 6);
    i0.ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_12_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r13); var index_r11 = ctx.index; var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.removeTab(index_r11); });
    i0.ɵɵtext(3, " Delete Tab ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r10 = ctx.$implicit;
    var ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("label", tab_r10);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Contents for ", tab_r10, " tab ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r9.tabs.length === 1);
} }
/**
 * @title Tab group with dynamically changing tabs
 */
var TabGroupDynamicExample = /** @class */ (function () {
    function TabGroupDynamicExample() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    TabGroupDynamicExample.prototype.addTab = function (selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    };
    TabGroupDynamicExample.prototype.removeTab = function (index) {
        this.tabs.splice(index, 1);
    };
    TabGroupDynamicExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-dynamic-example',
                    templateUrl: 'tab-group-dynamic-example.html',
                    styleUrls: ['tab-group-dynamic-example.css'],
                },] },
    ];
    TabGroupDynamicExample.ɵfac = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
    TabGroupDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 13, vars: 3, consts: [[1, "example-input-label"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
            var _r14 = i0.ɵɵgetCurrentView();
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
            i0.ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r14); var _r8 = i0.ɵɵreference(9); return ctx.addTab(_r8.checked); });
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
    return TabGroupDynamicExample;
}());
export { TabGroupDynamicExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(TabGroupDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7SUNpQnpDLGtDQUNFO0lBQUEsWUFFQTtJQUFBLGlDQUlFO0lBRE0seU9BQTBCO0lBQ2hDLDRCQUNGO0lBQUEsaUJBQVM7SUFDWCxpQkFBVTs7OztJQVQyQywrQkFBYTtJQUNoRSxlQUVBO0lBRkEseURBRUE7SUFFUSxlQUE4QjtJQUE5QixtREFBOEI7O0FEcEIxQzs7R0FFRztBQUNIO0lBQUE7UUFNRSxTQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQWEvQjtJQVhDLHVDQUFNLEdBQU4sVUFBTyxpQkFBMEI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEIsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRCwwQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7O2dHQUNZLHNCQUFzQjsrREFBdEIsc0JBQXNCOztZQ1huQywyQkFDRTtZQUFBLCtCQUFtQztZQUFBLHFDQUFvQjtZQUFBLGlCQUFPO1lBQzlELHNDQUNFO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBaUI7WUFDbkIsaUJBQU07WUFFTiwyQkFDRTtZQUFBLGlDQUdFO1lBRE0sOEpBQVMsdUJBQWlDLElBQUM7WUFDakQsNkJBQ0Y7WUFBQSxpQkFBUztZQUNULCtDQUFrQztZQUFBLDBDQUF3QjtZQUFBLGlCQUFlO1lBQzNFLGlCQUFNO1lBRU4seUNBRUU7WUFEYSw2SUFBdUIsNkJBQXlCLElBQUM7WUFDOUQsaUZBQ0U7WUFTSixpQkFBZ0I7O1lBekJrQixlQUF3QjtZQUF4QiwwQ0FBd0I7WUFhM0MsZUFBZ0M7WUFBaEMsa0RBQWdDO1lBRXBDLGVBQTJDO1lBQTNDLGtDQUEyQzs7aUNEbEJ0RDtDQTBCQyxBQXBCRCxJQW9CQztTQWZZLHNCQUFzQjttQ0FBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggZHluYW1pY2FsbHkgY2hhbmdpbmcgdGFic1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBEeW5hbWljRXhhbXBsZSB7XG4gIHRhYnMgPSBbJ0ZpcnN0JywgJ1NlY29uZCcsICdUaGlyZCddO1xuICBzZWxlY3RlZCA9IG5ldyBGb3JtQ29udHJvbCgwKTtcblxuICBhZGRUYWIoc2VsZWN0QWZ0ZXJBZGRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRhYnMucHVzaCgnTmV3Jyk7XG5cbiAgICBpZiAoc2VsZWN0QWZ0ZXJBZGRpbmcpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc2V0VmFsdWUodGhpcy50YWJzLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRhYihpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1pbnB1dC1sYWJlbFwiPiBTZWxlY3RlZCB0YWIgaW5kZXg6IDwvc3Bhbj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgW2Zvcm1Db250cm9sXT1cInNlbGVjdGVkXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hZGQtdGFiLWJ1dHRvblwiXG4gICAgICAgICAgKGNsaWNrKT1cImFkZFRhYihzZWxlY3RBZnRlckFkZGluZy5jaGVja2VkKVwiPlxuICAgIEFkZCBuZXcgdGFiXG4gIDwvYnV0dG9uPlxuICA8bWF0LWNoZWNrYm94ICNzZWxlY3RBZnRlckFkZGluZz4gU2VsZWN0IHRhYiBhZnRlciBhZGRpbmcgPC9tYXQtY2hlY2tib3g+XG48L2Rpdj5cblxuPG1hdC10YWItZ3JvdXAgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWQudmFsdWVcIlxuICAgICAgICAgICAgICAgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVwic2VsZWN0ZWQuc2V0VmFsdWUoJGV2ZW50KVwiPlxuICA8bWF0LXRhYiAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpbmRleCA9IGluZGV4XCIgW2xhYmVsXT1cInRhYlwiPlxuICAgIENvbnRlbnRzIGZvciB7e3RhYn19IHRhYlxuXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWRlbGV0ZS10YWItYnV0dG9uXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWJzLmxlbmd0aCA9PT0gMVwiXG4gICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlVGFiKGluZGV4KVwiPlxuICAgICAgRGVsZXRlIFRhYlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=