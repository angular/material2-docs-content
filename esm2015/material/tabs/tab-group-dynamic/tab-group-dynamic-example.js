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
TabGroupDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 12, vars: 3, consts: [["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztJQ2V6QyxrQ0FBbUU7SUFDakUsWUFFQTtJQUFBLGlDQUdtQztJQUEzQixrT0FBMEI7SUFDaEMsNEJBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFVOzs7O0lBVDJDLDhCQUFhO0lBQ2hFLGVBRUE7SUFGQSx3REFFQTtJQUVRLGVBQThCO0lBQTlCLG1EQUE4Qjs7QURsQjFDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLFNBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEMsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBYS9CO0lBWEMsTUFBTSxDQUFDLGlCQUEwQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDOzs0RkFkVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjs7UUNYbkMsc0NBQWdCO1FBQ2QsaUNBQVc7UUFBQSxrQ0FBa0I7UUFBQSxpQkFBWTtRQUN6QywyQkFBdUQ7UUFDekQsaUJBQWlCO1FBRWpCLDJCQUFLO1FBQ0gsaUNBRW9EO1FBQTVDLHlKQUFTLHVCQUFpQyxJQUFDO1FBQ2pELDZCQUNGO1FBQUEsaUJBQVM7UUFDVCw2Q0FBaUM7UUFBQyx5Q0FBd0I7UUFBQSxpQkFBZTtRQUMzRSxpQkFBTTtRQUVOLHlDQUNpRTtRQUFsRCw2SUFBdUIsNkJBQXlCLElBQUM7UUFDOUQsaUZBU1U7UUFDWixpQkFBZ0I7O1FBeEJnQixlQUF3QjtRQUF4QiwwQ0FBd0I7UUFZekMsZUFBZ0M7UUFBaEMsa0RBQWdDO1FBRXBCLGVBQVM7UUFBVCxrQ0FBUzs7dUZETHZCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGR5bmFtaWNhbGx5IGNoYW5naW5nIHRhYnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwRHluYW1pY0V4YW1wbGUge1xuICB0YWJzID0gWydGaXJzdCcsICdTZWNvbmQnLCAnVGhpcmQnXTtcbiAgc2VsZWN0ZWQgPSBuZXcgRm9ybUNvbnRyb2woMCk7XG5cbiAgYWRkVGFiKHNlbGVjdEFmdGVyQWRkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy50YWJzLnB1c2goJ05ldycpO1xuXG4gICAgaWYgKHNlbGVjdEFmdGVyQWRkaW5nKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnNldFZhbHVlKHRoaXMudGFicy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U2VsZWN0ZWQgdGFiIGluZGV4PC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgW2Zvcm1Db250cm9sXT1cInNlbGVjdGVkXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48ZGl2PlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFkZC10YWItYnV0dG9uXCJcbiAgICAgICAgICAoY2xpY2spPVwiYWRkVGFiKHNlbGVjdEFmdGVyQWRkaW5nLmNoZWNrZWQpXCI+XG4gICAgQWRkIG5ldyB0YWJcbiAgPC9idXR0b24+XG4gIDxtYXQtY2hlY2tib3ggI3NlbGVjdEFmdGVyQWRkaW5nPiBTZWxlY3QgdGFiIGFmdGVyIGFkZGluZyA8L21hdC1jaGVja2JveD5cbjwvZGl2PlxuXG48bWF0LXRhYi1ncm91cCBbc2VsZWN0ZWRJbmRleF09XCJzZWxlY3RlZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XCJzZWxlY3RlZC5zZXRWYWx1ZSgkZXZlbnQpXCI+XG4gIDxtYXQtdGFiICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiczsgbGV0IGluZGV4ID0gaW5kZXhcIiBbbGFiZWxdPVwidGFiXCI+XG4gICAgQ29udGVudHMgZm9yIHt7dGFifX0gdGFiXG5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtZGVsZXRlLXRhYi1idXR0b25cIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRhYnMubGVuZ3RoID09PSAxXCJcbiAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVUYWIoaW5kZXgpXCI+XG4gICAgICBEZWxldGUgVGFiXG4gICAgPC9idXR0b24+XG4gIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==