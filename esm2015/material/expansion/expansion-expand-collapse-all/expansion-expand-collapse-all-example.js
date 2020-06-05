/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/expansion/expansion-expand-collapse-all/expansion-expand-collapse-all-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/expansion";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/datepicker";
/**
 * \@title Accordion with expand/collapse all toggles
 */
export class ExpansionExpandCollapseAllExample {
}
ExpansionExpandCollapseAllExample.decorators = [
    { type: Component, args: [{
                selector: 'expansion-expand-collapse-all-example',
                templateUrl: 'expansion-expand-collapse-all-example.html',
                styleUrls: ['expansion-expand-collapse-all-example.css'],
            },] },
];
ExpansionExpandCollapseAllExample.propDecorators = {
    accordion: [{ type: ViewChild, args: [MatAccordion,] }]
};
/** @nocollapse */ ExpansionExpandCollapseAllExample.ɵfac = function ExpansionExpandCollapseAllExample_Factory(t) { return new (t || ExpansionExpandCollapseAllExample)(); };
/** @nocollapse */ ExpansionExpandCollapseAllExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionExpandCollapseAllExample, selectors: [["expansion-expand-collapse-all-example"]], viewQuery: function ExpansionExpandCollapseAllExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatAccordion, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.accordion = _t.first);
    } }, decls: 48, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["disabled", ""], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_1_listener() { return ctx.accordion.openAll(); });
        i0.ɵɵtext(2, "Expand All");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_3_listener() { return ctx.accordion.closeAll(); });
        i0.ɵɵtext(4, "Collapse All");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-accordion", 2);
        i0.ɵɵelementStart(6, "mat-expansion-panel");
        i0.ɵɵelementStart(7, "mat-expansion-panel-header");
        i0.ɵɵelementStart(8, "mat-panel-title");
        i0.ɵɵtext(9, " Personal data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-panel-description");
        i0.ɵɵtext(11, " Type your name and age ");
        i0.ɵɵelementStart(12, "mat-icon");
        i0.ɵɵtext(13, "account_circle");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field");
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(17, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-form-field");
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Age");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-expansion-panel", 5);
        i0.ɵɵelementStart(23, "mat-expansion-panel-header");
        i0.ɵɵelementStart(24, "mat-panel-title");
        i0.ɵɵtext(25, " Destination ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-panel-description");
        i0.ɵɵtext(27, " Type the country name ");
        i0.ɵɵelementStart(28, "mat-icon");
        i0.ɵɵtext(29, "map");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "mat-form-field");
        i0.ɵɵelementStart(31, "mat-label");
        i0.ɵɵtext(32, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "mat-expansion-panel");
        i0.ɵɵelementStart(35, "mat-expansion-panel-header");
        i0.ɵɵelementStart(36, "mat-panel-title");
        i0.ɵɵtext(37, " Day of the trip ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "mat-panel-description");
        i0.ɵɵtext(39, " Inform the date you wish to travel ");
        i0.ɵɵelementStart(40, "mat-icon");
        i0.ɵɵtext(41, "date_range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "mat-form-field");
        i0.ɵɵelementStart(43, "mat-label");
        i0.ɵɵtext(44, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "input", 6);
        i0.ɵɵlistener("focus", function ExpansionExpandCollapseAllExample_Template_input_focus_45_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(47); return _r0.open(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(46, "mat-datepicker", null, 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(47);
        i0.ɵɵadvance(45);
        i0.ɵɵproperty("matDatepicker", _r0);
    } }, directives: [i1.MatButton, i2.MatAccordion, i2.MatExpansionPanel, i2.MatExpansionPanelHeader, i2.MatExpansionPanelTitle, i2.MatExpansionPanelDescription, i3.MatIcon, i4.MatFormField, i4.MatLabel, i5.MatInput, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionExpandCollapseAllExample, [{
        type: Component,
        args: [{
                selector: 'expansion-expand-collapse-all-example',
                templateUrl: 'expansion-expand-collapse-all-example.html',
                styleUrls: ['expansion-expand-collapse-all-example.css'],
            }]
    }], null, { accordion: [{
            type: ViewChild,
            args: [MatAccordion]
        }] }); })();
if (false) {
    /** @type {?} */
    ExpansionExpandCollapseAllExample.prototype.accordion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2V4cGFuc2lvbi9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7QUFVekQsTUFBTSxPQUFPLGlDQUFpQzs7O1lBTDdDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxXQUFXLEVBQUUsNENBQTRDO2dCQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUN6RDs7O3dCQUVFLFNBQVMsU0FBQyxZQUFZOztrSEFEWixpQ0FBaUM7c0VBQWpDLGlDQUFpQzt1QkFDakMsWUFBWTs7Ozs7O1FDWnpCLDhCQUNFO1FBQUEsaUNBQWlEO1FBQTlCLDhHQUFTLHVCQUFtQixJQUFDO1FBQUMsMEJBQVU7UUFBQSxpQkFBUztRQUNwRSxpQ0FBa0Q7UUFBL0IsOEdBQVMsd0JBQW9CLElBQUM7UUFBQyw0QkFBWTtRQUFBLGlCQUFTO1FBQ3pFLGlCQUFNO1FBQ04sd0NBQ0U7UUFBQSwyQ0FDRTtRQUFBLGtEQUNFO1FBQUEsdUNBQ0U7UUFBQSwrQkFDRjtRQUFBLGlCQUFrQjtRQUNsQiw4Q0FDRTtRQUFBLHlDQUNBO1FBQUEsaUNBQVU7UUFBQSwrQkFBYztRQUFBLGlCQUFXO1FBQ3JDLGlCQUF3QjtRQUMxQixpQkFBNkI7UUFFN0IsdUNBQ0U7UUFBQSxrQ0FBVztRQUFBLDJCQUFVO1FBQUEsaUJBQVk7UUFDakMsNEJBQ0Y7UUFBQSxpQkFBaUI7UUFFakIsdUNBQ0U7UUFBQSxrQ0FBVztRQUFBLG9CQUFHO1FBQUEsaUJBQVk7UUFDMUIsNEJBQ0Y7UUFBQSxpQkFBaUI7UUFFbkIsaUJBQXNCO1FBRXRCLCtDQUNFO1FBQUEsbURBQ0U7UUFBQSx3Q0FDRTtRQUFBLDhCQUNGO1FBQUEsaUJBQWtCO1FBQ2xCLDhDQUNFO1FBQUEsd0NBQ0E7UUFBQSxpQ0FBVTtRQUFBLG9CQUFHO1FBQUEsaUJBQVc7UUFDMUIsaUJBQXdCO1FBQzFCLGlCQUE2QjtRQUU3Qix1Q0FDRTtRQUFBLGtDQUFXO1FBQUEsd0JBQU87UUFBQSxpQkFBWTtRQUM5Qiw0QkFDRjtRQUFBLGlCQUFpQjtRQUNuQixpQkFBc0I7UUFFdEIsNENBQ0U7UUFBQSxtREFDRTtRQUFBLHdDQUNFO1FBQUEsa0NBQ0Y7UUFBQSxpQkFBa0I7UUFDbEIsOENBQ0U7UUFBQSxxREFDQTtRQUFBLGlDQUFVO1FBQUEsMkJBQVU7UUFBQSxpQkFBVztRQUNqQyxpQkFBd0I7UUFDMUIsaUJBQTZCO1FBRTdCLHVDQUNFO1FBQUEsa0NBQVc7UUFBQSxxQkFBSTtRQUFBLGlCQUFZO1FBQzNCLGlDQUNGO1FBRDJDLHFLQUFTLFVBQWEsSUFBQztRQUFoRSxpQkFDRjtRQUFBLGlCQUFpQjtRQUNqQiwyQ0FBeUM7UUFDM0MsaUJBQXNCO1FBQ3hCLGlCQUFnQjs7O1FBSk0sZ0JBQXdCO1FBQXhCLG1DQUF3Qjs7a0REL0NqQyxpQ0FBaUM7Y0FMN0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOztrQkFFRSxTQUFTO21CQUFDLFlBQVk7Ozs7SUFBdkIsc0RBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEFjY29yZGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcblxuLyoqXG4gKiBAdGl0bGUgQWNjb3JkaW9uIHdpdGggZXhwYW5kL2NvbGxhcHNlIGFsbCB0b2dnbGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGUge1xuICBAVmlld0NoaWxkKE1hdEFjY29yZGlvbikgYWNjb3JkaW9uOiBNYXRBY2NvcmRpb247XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uc1wiPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImFjY29yZGlvbi5vcGVuQWxsKClcIj5FeHBhbmQgQWxsPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiYWNjb3JkaW9uLmNsb3NlQWxsKClcIj5Db2xsYXBzZSBBbGw8L2J1dHRvbj5cbjwvZGl2PlxuPG1hdC1hY2NvcmRpb24gY2xhc3M9XCJleGFtcGxlLWhlYWRlcnMtYWxpZ25cIiBtdWx0aT5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWw+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgUGVyc29uYWwgZGF0YVxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHlvdXIgbmFtZSBhbmQgYWdlXG4gICAgICAgIDxtYXQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+QWdlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cblxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBkaXNhYmxlZD5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBEZXN0aW5hdGlvblxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHRoZSBjb3VudHJ5IG5hbWVcbiAgICAgICAgPG1hdC1pY29uPm1hcDwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5Db3VudHJ5PC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuXG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIERheSBvZiB0aGUgdHJpcFxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBJbmZvcm0gdGhlIGRhdGUgeW91IHdpc2ggdG8gdHJhdmVsXG4gICAgICAgIDxtYXQtaWNvbj5kYXRlX3JhbmdlPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPkRhdGU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiAoZm9jdXMpPVwicGlja2VyLm9wZW4oKVwiIHJlYWRvbmx5PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPC9tYXQtYWNjb3JkaW9uPlxuIl19