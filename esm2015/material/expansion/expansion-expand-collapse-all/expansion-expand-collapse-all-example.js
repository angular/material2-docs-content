/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const _c0 = ["picker", ""];
/**
 * \@title Accordion with expand/collapse all toggles
 */
export class ExpansionExpandCollapseAllExample {
}
ExpansionExpandCollapseAllExample.decorators = [
    { type: Component, args: [{
                selector: 'expansion-toggle-all-example',
                templateUrl: 'expansion-expand-collapse-all-example.html',
                styleUrls: ['expansion-expand-collapse-all-example.css'],
            },] },
];
ExpansionExpandCollapseAllExample.propDecorators = {
    accordion: [{ type: ViewChild, args: [MatAccordion, { static: false },] }]
};
/** @nocollapse */ ExpansionExpandCollapseAllExample.ngFactoryDef = function ExpansionExpandCollapseAllExample_Factory(t) { return new (t || ExpansionExpandCollapseAllExample)(); };
/** @nocollapse */ ExpansionExpandCollapseAllExample.ngComponentDef = i0.ɵɵdefineComponent({ type: ExpansionExpandCollapseAllExample, selectors: [["expansion-toggle-all-example"]], viewQuery: function ExpansionExpandCollapseAllExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatAccordion, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.accordion = _t.first);
    } }, decls: 40, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["disabled", ""], ["matInput", "", "placeholder", "Country"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_1_listener($event) { return ctx.accordion.openAll(); });
        i0.ɵɵtext(2, "Expand All");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_3_listener($event) { return ctx.accordion.closeAll(); });
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
        i0.ɵɵelement(15, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-form-field");
        i0.ɵɵelement(17, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-expansion-panel", 5);
        i0.ɵɵelementStart(19, "mat-expansion-panel-header");
        i0.ɵɵelementStart(20, "mat-panel-title");
        i0.ɵɵtext(21, " Destination ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-panel-description");
        i0.ɵɵtext(23, " Type the country name ");
        i0.ɵɵelementStart(24, "mat-icon");
        i0.ɵɵtext(25, "map");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-form-field");
        i0.ɵɵelement(27, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "mat-expansion-panel");
        i0.ɵɵelementStart(29, "mat-expansion-panel-header");
        i0.ɵɵelementStart(30, "mat-panel-title");
        i0.ɵɵtext(31, " Day of the trip ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "mat-panel-description");
        i0.ɵɵtext(33, " Inform the date you wish to travel ");
        i0.ɵɵelementStart(34, "mat-icon");
        i0.ɵɵtext(35, "date_range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "mat-form-field");
        i0.ɵɵelementStart(37, "input", 7);
        i0.ɵɵlistener("focus", function ExpansionExpandCollapseAllExample_Template_input_focus_37_listener($event) { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(39); return _r0.open(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(38, "mat-datepicker", null, _c0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(39);
        i0.ɵɵadvance(37);
        i0.ɵɵproperty("matDatepicker", _r0);
    } }, directives: [i1.MatButton, i2.MatAccordion, i2.MatExpansionPanel, i2.MatExpansionPanelHeader, i2.MatExpansionPanelTitle, i2.MatExpansionPanelDescription, i3.MatIcon, i4.MatFormField, i5.MatInput, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(ExpansionExpandCollapseAllExample, [{
        type: Component,
        args: [{
                selector: 'expansion-toggle-all-example',
                templateUrl: 'expansion-expand-collapse-all-example.html',
                styleUrls: ['expansion-expand-collapse-all-example.css'],
            }]
    }], null, { accordion: [{
            type: ViewChild,
            args: [MatAccordion, { static: false }]
        }] });
if (false) {
    /** @type {?} */
    ExpansionExpandCollapseAllExample.prototype.accordion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwvZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwvZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7OztBQVV6RCxNQUFNLE9BQU8saUNBQWlDOzs7WUFMN0MsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOzs7d0JBRUUsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7OzBIQUQ3QixpQ0FBaUM7Z0ZBQWpDLGlDQUFpQzt1QkFDakMsWUFBWTs7Ozs7O1FDWnpCLDhCQUNFO1FBQUEsaUNBQWlEO1FBQTlCLG9IQUFTLHVCQUFtQixJQUFDO1FBQUMsMEJBQVU7UUFBQSxpQkFBUztRQUNwRSxpQ0FBa0Q7UUFBL0Isb0hBQVMsd0JBQW9CLElBQUM7UUFBQyw0QkFBWTtRQUFBLGlCQUFTO1FBQ3pFLGlCQUFNO1FBQ04sd0NBQ0U7UUFBQSwyQ0FDRTtRQUFBLGtEQUNFO1FBQUEsdUNBQ0U7UUFBQSwrQkFDRjtRQUFBLGlCQUFrQjtRQUNsQiw4Q0FDRTtRQUFBLHlDQUNBO1FBQUEsaUNBQVU7UUFBQSwrQkFBYztRQUFBLGlCQUFXO1FBQ3JDLGlCQUF3QjtRQUMxQixpQkFBNkI7UUFFN0IsdUNBQ0U7UUFBQSw0QkFDRjtRQUFBLGlCQUFpQjtRQUVqQix1Q0FDRTtRQUFBLDRCQUNGO1FBQUEsaUJBQWlCO1FBRW5CLGlCQUFzQjtRQUV0QiwrQ0FDRTtRQUFBLG1EQUNFO1FBQUEsd0NBQ0U7UUFBQSw4QkFDRjtRQUFBLGlCQUFrQjtRQUNsQiw4Q0FDRTtRQUFBLHdDQUNBO1FBQUEsaUNBQVU7UUFBQSxvQkFBRztRQUFBLGlCQUFXO1FBQzFCLGlCQUF3QjtRQUMxQixpQkFBNkI7UUFFN0IsdUNBQ0U7UUFBQSw0QkFDRjtRQUFBLGlCQUFpQjtRQUNuQixpQkFBc0I7UUFFdEIsNENBQ0U7UUFBQSxtREFDRTtRQUFBLHdDQUNFO1FBQUEsa0NBQ0Y7UUFBQSxpQkFBa0I7UUFDbEIsOENBQ0U7UUFBQSxxREFDQTtRQUFBLGlDQUFVO1FBQUEsMkJBQVU7UUFBQSxpQkFBVztRQUNqQyxpQkFBd0I7UUFDMUIsaUJBQTZCO1FBRTdCLHVDQUNFO1FBQUEsaUNBQ0Y7UUFEOEQsMktBQVMsVUFBYSxJQUFDO1FBQW5GLGlCQUNGO1FBQUEsaUJBQWlCO1FBQ2pCLDZDQUF5QztRQUMzQyxpQkFBc0I7UUFDeEIsaUJBQWdCOzs7UUFKeUIsZ0JBQXdCO1FBQXhCLG1DQUF3Qjs7bUNEM0NwRCxpQ0FBaUM7Y0FMN0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOztrQkFFRSxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Ozs7SUFBeEMsc0RBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEFjY29yZGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcblxuLyoqXG4gKiBAdGl0bGUgQWNjb3JkaW9uIHdpdGggZXhwYW5kL2NvbGxhcHNlIGFsbCB0b2dnbGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi10b2dnbGUtYWxsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGUge1xuICBAVmlld0NoaWxkKE1hdEFjY29yZGlvbiwge3N0YXRpYzogZmFsc2V9KSBhY2NvcmRpb246IE1hdEFjY29yZGlvbjtcbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25zXCI+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiYWNjb3JkaW9uLm9wZW5BbGwoKVwiPkV4cGFuZCBBbGw8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJhY2NvcmRpb24uY2xvc2VBbGwoKVwiPkNvbGxhcHNlIEFsbDwvYnV0dG9uPlxuPC9kaXY+XG48bWF0LWFjY29yZGlvbiBjbGFzcz1cImV4YW1wbGUtaGVhZGVycy1hbGlnblwiIG11bHRpPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbD5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBQZXJzb25hbCBkYXRhXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFR5cGUgeW91ciBuYW1lIGFuZCBhZ2VcbiAgICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIHBsYWNlaG9sZGVyPVwiQWdlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgZGlzYWJsZWQ+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGVzdGluYXRpb25cbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgVHlwZSB0aGUgY291bnRyeSBuYW1lXG4gICAgICAgIDxtYXQtaWNvbj5tYXA8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkNvdW50cnlcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWw+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGF5IG9mIHRoZSB0cmlwXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIEluZm9ybSB0aGUgZGF0ZSB5b3Ugd2lzaCB0byB0cmF2ZWxcbiAgICAgICAgPG1hdC1pY29uPmRhdGVfcmFuZ2U8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkRhdGVcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiAoZm9jdXMpPVwicGlja2VyLm9wZW4oKVwiIHJlYWRvbmx5PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPC9tYXQtYWNjb3JkaW9uPlxuIl19