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
function TabGroupDynamicExample_mat_tab_12_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 7);
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
    TabGroupDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 13, vars: 3, consts: [[1, "example-input-label"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelementStart(8, "mat-checkbox", null, 3);
            i0.ɵɵtext(10, " Select tab after adding ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-tab-group", 4);
            i0.ɵɵlistener("selectedIndexChange", function TabGroupDynamicExample_Template_mat_tab_group_selectedIndexChange_11_listener($event) { return ctx.selected.setValue($event); });
            i0.ɵɵtemplate(12, TabGroupDynamicExample_mat_tab_12_Template, 4, 3, "mat-tab", 5);
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztJQ2lCekMsa0NBQ0U7SUFBQSxZQUVBO0lBQUEsaUNBSUU7SUFETSx5T0FBMEI7SUFDaEMsNEJBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFVOzs7O0lBVDJDLCtCQUFhO0lBQ2hFLGVBRUE7SUFGQSx5REFFQTtJQUVRLGVBQThCO0lBQTlCLG1EQUE4Qjs7QURwQjFDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFNBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEMsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBYS9CO0lBWEMsdUNBQU0sR0FBTixVQUFPLGlCQUEwQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELDBDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7Z0dBQ1ksc0JBQXNCOytEQUF0QixzQkFBc0I7O1lDWG5DLDJCQUNFO1lBQUEsK0JBQW1DO1lBQUEscUNBQW9CO1lBQUEsaUJBQU87WUFDOUQsc0NBQ0U7WUFBQSwyQkFDRjtZQUFBLGlCQUFpQjtZQUNuQixpQkFBTTtZQUVOLDJCQUNFO1lBQUEsaUNBR0U7WUFETSw4SkFBUyx1QkFBaUMsSUFBQztZQUNqRCw2QkFDRjtZQUFBLGlCQUFTO1lBQ1QsNkNBQWtDO1lBQUEsMENBQXdCO1lBQUEsaUJBQWU7WUFDM0UsaUJBQU07WUFFTix5Q0FFRTtZQURhLDZJQUF1Qiw2QkFBeUIsSUFBQztZQUM5RCxpRkFDRTtZQVNKLGlCQUFnQjs7WUF6QmtCLGVBQXdCO1lBQXhCLDBDQUF3QjtZQWEzQyxlQUFnQztZQUFoQyxrREFBZ0M7WUFFcEMsZUFBMkM7WUFBM0Msa0NBQTJDOztpQ0RsQnREO0NBMEJDLEFBcEJELElBb0JDO1NBZlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBkeW5hbWljYWxseSBjaGFuZ2luZyB0YWJzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cER5bmFtaWNFeGFtcGxlIHtcbiAgdGFicyA9IFsnRmlyc3QnLCAnU2Vjb25kJywgJ1RoaXJkJ107XG4gIHNlbGVjdGVkID0gbmV3IEZvcm1Db250cm9sKDApO1xuXG4gIGFkZFRhYihzZWxlY3RBZnRlckFkZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMudGFicy5wdXNoKCdOZXcnKTtcblxuICAgIGlmIChzZWxlY3RBZnRlckFkZGluZykge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zZXRWYWx1ZSh0aGlzLnRhYnMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGFiKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuIiwiPGRpdj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWlucHV0LWxhYmVsXCI+IFNlbGVjdGVkIHRhYiBpbmRleDogPC9zcGFuPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbZm9ybUNvbnRyb2xdPVwic2VsZWN0ZWRcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG48ZGl2PlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFkZC10YWItYnV0dG9uXCJcbiAgICAgICAgICAoY2xpY2spPVwiYWRkVGFiKHNlbGVjdEFmdGVyQWRkaW5nLmNoZWNrZWQpXCI+XG4gICAgQWRkIG5ldyB0YWJcbiAgPC9idXR0b24+XG4gIDxtYXQtY2hlY2tib3ggI3NlbGVjdEFmdGVyQWRkaW5nPiBTZWxlY3QgdGFiIGFmdGVyIGFkZGluZyA8L21hdC1jaGVja2JveD5cbjwvZGl2PlxuXG48bWF0LXRhYi1ncm91cCBbc2VsZWN0ZWRJbmRleF09XCJzZWxlY3RlZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XCJzZWxlY3RlZC5zZXRWYWx1ZSgkZXZlbnQpXCI+XG4gIDxtYXQtdGFiICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiczsgbGV0IGluZGV4ID0gaW5kZXhcIiBbbGFiZWxdPVwidGFiXCI+XG4gICAgQ29udGVudHMgZm9yIHt7dGFifX0gdGFiXG5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtZGVsZXRlLXRhYi1idXR0b25cIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRhYnMubGVuZ3RoID09PSAxXCJcbiAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVUYWIoaW5kZXgpXCI+XG4gICAgICBEZWxldGUgVGFiXG4gICAgPC9idXR0b24+XG4gIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==