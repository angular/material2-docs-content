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
 * @title Accordion with expand/collapse all toggles
 */
var ExpansionExpandCollapseAllExample = /** @class */ (function () {
    function ExpansionExpandCollapseAllExample() {
    }
    ExpansionExpandCollapseAllExample.decorators = [
        { type: Component, args: [{
                    selector: 'expansion-toggle-all-example',
                    templateUrl: 'expansion-expand-collapse-all-example.html',
                    styleUrls: ['expansion-expand-collapse-all-example.css'],
                },] },
    ];
    ExpansionExpandCollapseAllExample.propDecorators = {
        accordion: [{ type: ViewChild, args: [MatAccordion,] }]
    };
    ExpansionExpandCollapseAllExample.ɵfac = function ExpansionExpandCollapseAllExample_Factory(t) { return new (t || ExpansionExpandCollapseAllExample)(); };
    ExpansionExpandCollapseAllExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionExpandCollapseAllExample, selectors: [["expansion-toggle-all-example"]], viewQuery: function ExpansionExpandCollapseAllExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatAccordion, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.accordion = _t.first);
        } }, decls: 40, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["disabled", ""], ["matInput", "", "placeholder", "Country"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
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
            i0.ɵɵlistener("focus", function ExpansionExpandCollapseAllExample_Template_input_focus_37_listener($event) { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(39); return _r0.open(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "mat-datepicker", null, 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(39);
            i0.ɵɵadvance(37);
            i0.ɵɵproperty("matDatepicker", _r0);
        } }, directives: [i1.MatButton, i2.MatAccordion, i2.MatExpansionPanel, i2.MatExpansionPanelHeader, i2.MatExpansionPanelTitle, i2.MatExpansionPanelDescription, i3.MatIcon, i4.MatFormField, i5.MatInput, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}"] });
    return ExpansionExpandCollapseAllExample;
}());
export { ExpansionExpandCollapseAllExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionExpandCollapseAllExample, [{
        type: Component,
        args: [{
                selector: 'expansion-toggle-all-example',
                templateUrl: 'expansion-expand-collapse-all-example.html',
                styleUrls: ['expansion-expand-collapse-all-example.css'],
            }]
    }], null, { accordion: [{
            type: ViewChild,
            args: [MatAccordion]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2V4cGFuc2lvbi9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7O0FBRXpEOztHQUVHO0FBQ0g7SUFBQTtLQU9DOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsV0FBVyxFQUFFLDRDQUE0QztvQkFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7aUJBQ3pEOzs7NEJBRUUsU0FBUyxTQUFDLFlBQVk7O3NIQURaLGlDQUFpQzswRUFBakMsaUNBQWlDOzJCQUNqQyxZQUFZOzs7Ozs7WUNaekIsOEJBQ0U7WUFBQSxpQ0FBaUQ7WUFBOUIsb0hBQVMsdUJBQW1CLElBQUM7WUFBQywwQkFBVTtZQUFBLGlCQUFTO1lBQ3BFLGlDQUFrRDtZQUEvQixvSEFBUyx3QkFBb0IsSUFBQztZQUFDLDRCQUFZO1lBQUEsaUJBQVM7WUFDekUsaUJBQU07WUFDTix3Q0FDRTtZQUFBLDJDQUNFO1lBQUEsa0RBQ0U7WUFBQSx1Q0FDRTtZQUFBLCtCQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDhDQUNFO1lBQUEseUNBQ0E7WUFBQSxpQ0FBVTtZQUFBLCtCQUFjO1lBQUEsaUJBQVc7WUFDckMsaUJBQXdCO1lBQzFCLGlCQUE2QjtZQUU3Qix1Q0FDRTtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLHVDQUNFO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFFbkIsaUJBQXNCO1lBRXRCLCtDQUNFO1lBQUEsbURBQ0U7WUFBQSx3Q0FDRTtZQUFBLDhCQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDhDQUNFO1lBQUEsd0NBQ0E7WUFBQSxpQ0FBVTtZQUFBLG9CQUFHO1lBQUEsaUJBQVc7WUFDMUIsaUJBQXdCO1lBQzFCLGlCQUE2QjtZQUU3Qix1Q0FDRTtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBQ25CLGlCQUFzQjtZQUV0Qiw0Q0FDRTtZQUFBLG1EQUNFO1lBQUEsd0NBQ0U7WUFBQSxrQ0FDRjtZQUFBLGlCQUFrQjtZQUNsQiw4Q0FDRTtZQUFBLHFEQUNBO1lBQUEsaUNBQVU7WUFBQSwyQkFBVTtZQUFBLGlCQUFXO1lBQ2pDLGlCQUF3QjtZQUMxQixpQkFBNkI7WUFFN0IsdUNBQ0U7WUFBQSxpQ0FDRjtZQUQ4RCx5S0FBUyxVQUFhLElBQUM7WUFBbkYsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIsMkNBQXlDO1lBQzNDLGlCQUFzQjtZQUN4QixpQkFBZ0I7OztZQUp5QixnQkFBd0I7WUFBeEIsbUNBQXdCOzs0Q0R0RGpFO0NBYUMsQUFQRCxJQU9DO1NBRlksaUNBQWlDO2tEQUFqQyxpQ0FBaUM7Y0FMN0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOztrQkFFRSxTQUFTO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QWNjb3JkaW9ufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xuXG4vKipcbiAqIEB0aXRsZSBBY2NvcmRpb24gd2l0aCBleHBhbmQvY29sbGFwc2UgYWxsIHRvZ2dsZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhwYW5zaW9uLXRvZ2dsZS1hbGwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvbkV4cGFuZENvbGxhcHNlQWxsRXhhbXBsZSB7XG4gIEBWaWV3Q2hpbGQoTWF0QWNjb3JkaW9uKSBhY2NvcmRpb246IE1hdEFjY29yZGlvbjtcbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25zXCI+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiYWNjb3JkaW9uLm9wZW5BbGwoKVwiPkV4cGFuZCBBbGw8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJhY2NvcmRpb24uY2xvc2VBbGwoKVwiPkNvbGxhcHNlIEFsbDwvYnV0dG9uPlxuPC9kaXY+XG48bWF0LWFjY29yZGlvbiBjbGFzcz1cImV4YW1wbGUtaGVhZGVycy1hbGlnblwiIG11bHRpPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbD5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBQZXJzb25hbCBkYXRhXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFR5cGUgeW91ciBuYW1lIGFuZCBhZ2VcbiAgICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIHBsYWNlaG9sZGVyPVwiQWdlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgZGlzYWJsZWQ+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGVzdGluYXRpb25cbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgVHlwZSB0aGUgY291bnRyeSBuYW1lXG4gICAgICAgIDxtYXQtaWNvbj5tYXA8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkNvdW50cnlcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWw+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGF5IG9mIHRoZSB0cmlwXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIEluZm9ybSB0aGUgZGF0ZSB5b3Ugd2lzaCB0byB0cmF2ZWxcbiAgICAgICAgPG1hdC1pY29uPmRhdGVfcmFuZ2U8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkRhdGVcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiAoZm9jdXMpPVwicGlja2VyLm9wZW4oKVwiIHJlYWRvbmx5PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPC9tYXQtYWNjb3JkaW9uPlxuIl19