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
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 6);
    i0.ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_11_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r13); var index_r11 = ctx.index; var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.removeTab(index_r11); });
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
    TabGroupDynamicExample.ɵfac = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
    TabGroupDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 12, vars: 3, consts: [["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
            var _r14 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Selected tab index");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵelementStart(5, "button", 1);
            i0.ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r14); var _r8 = i0.ɵɵreference(8); return ctx.addTab(_r8.checked); });
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
    return TabGroupDynamicExample;
}());
export { TabGroupDynamicExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztJQ2V6QyxrQ0FDRTtJQUFBLFlBRUE7SUFBQSxpQ0FJRTtJQURNLHlPQUEwQjtJQUNoQyw0QkFDRjtJQUFBLGlCQUFTO0lBQ1gsaUJBQVU7Ozs7SUFUMkMsK0JBQWE7SUFDaEUsZUFFQTtJQUZBLHlEQUVBO0lBRVEsZUFBOEI7SUFBOUIsbURBQThCOztBRGxCMUM7O0dBRUc7QUFDSDtJQUFBO1FBTUUsU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxhQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FhL0I7SUFYQyx1Q0FBTSxHQUFOLFVBQU8saUJBQTBCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsMENBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Z0dBZFUsc0JBQXNCOytEQUF0QixzQkFBc0I7O1lDWG5DLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxrQ0FBa0I7WUFBQSxpQkFBWTtZQUN6QywyQkFDRjtZQUFBLGlCQUFpQjtZQUVqQiwyQkFDRTtZQUFBLGlDQUdFO1lBRE0sOEpBQVMsdUJBQWlDLElBQUM7WUFDakQsNkJBQ0Y7WUFBQSxpQkFBUztZQUNULDZDQUFrQztZQUFBLHlDQUF3QjtZQUFBLGlCQUFlO1lBQzNFLGlCQUFNO1lBRU4seUNBRUU7WUFEYSw2SUFBdUIsNkJBQXlCLElBQUM7WUFDOUQsaUZBQ0U7WUFTSixpQkFBZ0I7O1lBeEJnQixlQUF3QjtZQUF4QiwwQ0FBd0I7WUFZekMsZUFBZ0M7WUFBaEMsa0RBQWdDO1lBRXBDLGVBQTJDO1lBQTNDLGtDQUEyQzs7aUNEaEJ0RDtDQTBCQyxBQXBCRCxJQW9CQztTQWZZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggZHluYW1pY2FsbHkgY2hhbmdpbmcgdGFic1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBEeW5hbWljRXhhbXBsZSB7XG4gIHRhYnMgPSBbJ0ZpcnN0JywgJ1NlY29uZCcsICdUaGlyZCddO1xuICBzZWxlY3RlZCA9IG5ldyBGb3JtQ29udHJvbCgwKTtcblxuICBhZGRUYWIoc2VsZWN0QWZ0ZXJBZGRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRhYnMucHVzaCgnTmV3Jyk7XG5cbiAgICBpZiAoc2VsZWN0QWZ0ZXJBZGRpbmcpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc2V0VmFsdWUodGhpcy50YWJzLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRhYihpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TZWxlY3RlZCB0YWIgaW5kZXg8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbZm9ybUNvbnRyb2xdPVwic2VsZWN0ZWRcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxkaXY+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYWRkLXRhYi1idXR0b25cIlxuICAgICAgICAgIChjbGljayk9XCJhZGRUYWIoc2VsZWN0QWZ0ZXJBZGRpbmcuY2hlY2tlZClcIj5cbiAgICBBZGQgbmV3IHRhYlxuICA8L2J1dHRvbj5cbiAgPG1hdC1jaGVja2JveCAjc2VsZWN0QWZ0ZXJBZGRpbmc+IFNlbGVjdCB0YWIgYWZ0ZXIgYWRkaW5nIDwvbWF0LWNoZWNrYm94PlxuPC9kaXY+XG5cbjxtYXQtdGFiLWdyb3VwIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkLnZhbHVlXCJcbiAgICAgICAgICAgICAgIChzZWxlY3RlZEluZGV4Q2hhbmdlKT1cInNlbGVjdGVkLnNldFZhbHVlKCRldmVudClcIj5cbiAgPG1hdC10YWIgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzOyBsZXQgaW5kZXggPSBpbmRleFwiIFtsYWJlbF09XCJ0YWJcIj5cbiAgICBDb250ZW50cyBmb3Ige3t0YWJ9fSB0YWJcblxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1kZWxldGUtdGFiLWJ1dHRvblwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwidGFicy5sZW5ndGggPT09IDFcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZVRhYihpbmRleClcIj5cbiAgICAgIERlbGV0ZSBUYWJcbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19