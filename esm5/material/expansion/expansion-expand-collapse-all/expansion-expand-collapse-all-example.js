import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/expansion";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/datepicker";
var _c0 = ["picker", ""];
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
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.accordion = _t.first);
        } }, decls: 40, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["disabled", ""], ["matInput", "", "placeholder", "Country"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelement(38, "mat-datepicker", null, _c0);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(ExpansionExpandCollapseAllExample, [{
        type: Component,
        args: [{
                selector: 'expansion-toggle-all-example',
                templateUrl: 'expansion-expand-collapse-all-example.html',
                styleUrls: ['expansion-expand-collapse-all-example.css'],
            }]
    }], null, { accordion: [{
            type: ViewChild,
            args: [MatAccordion]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2V4cGFuc2lvbi9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7OztBQUV6RDs7R0FFRztBQUNIO0lBQUE7S0FPQzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFdBQVcsRUFBRSw0Q0FBNEM7b0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2lCQUN6RDs7OzRCQUVFLFNBQVMsU0FBQyxZQUFZOztzSEFEWixpQ0FBaUM7MEVBQWpDLGlDQUFpQzsyQkFDakMsWUFBWTs7Ozs7O1lDWnpCLDhCQUNFO1lBQUEsaUNBQWlEO1lBQTlCLG9IQUFTLHVCQUFtQixJQUFDO1lBQUMsMEJBQVU7WUFBQSxpQkFBUztZQUNwRSxpQ0FBa0Q7WUFBL0Isb0hBQVMsd0JBQW9CLElBQUM7WUFBQyw0QkFBWTtZQUFBLGlCQUFTO1lBQ3pFLGlCQUFNO1lBQ04sd0NBQ0U7WUFBQSwyQ0FDRTtZQUFBLGtEQUNFO1lBQUEsdUNBQ0U7WUFBQSwrQkFDRjtZQUFBLGlCQUFrQjtZQUNsQiw4Q0FDRTtZQUFBLHlDQUNBO1lBQUEsaUNBQVU7WUFBQSwrQkFBYztZQUFBLGlCQUFXO1lBQ3JDLGlCQUF3QjtZQUMxQixpQkFBNkI7WUFFN0IsdUNBQ0U7WUFBQSw0QkFDRjtZQUFBLGlCQUFpQjtZQUVqQix1Q0FDRTtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBRW5CLGlCQUFzQjtZQUV0QiwrQ0FDRTtZQUFBLG1EQUNFO1lBQUEsd0NBQ0U7WUFBQSw4QkFDRjtZQUFBLGlCQUFrQjtZQUNsQiw4Q0FDRTtZQUFBLHdDQUNBO1lBQUEsaUNBQVU7WUFBQSxvQkFBRztZQUFBLGlCQUFXO1lBQzFCLGlCQUF3QjtZQUMxQixpQkFBNkI7WUFFN0IsdUNBQ0U7WUFBQSw0QkFDRjtZQUFBLGlCQUFpQjtZQUNuQixpQkFBc0I7WUFFdEIsNENBQ0U7WUFBQSxtREFDRTtZQUFBLHdDQUNFO1lBQUEsa0NBQ0Y7WUFBQSxpQkFBa0I7WUFDbEIsOENBQ0U7WUFBQSxxREFDQTtZQUFBLGlDQUFVO1lBQUEsMkJBQVU7WUFBQSxpQkFBVztZQUNqQyxpQkFBd0I7WUFDMUIsaUJBQTZCO1lBRTdCLHVDQUNFO1lBQUEsaUNBQ0Y7WUFEOEQseUtBQVMsVUFBYSxJQUFDO1lBQW5GLGlCQUNGO1lBQUEsaUJBQWlCO1lBQ2pCLDZDQUF5QztZQUMzQyxpQkFBc0I7WUFDeEIsaUJBQWdCOzs7WUFKeUIsZ0JBQXdCO1lBQXhCLG1DQUF3Qjs7NENEdERqRTtDQWFDLEFBUEQsSUFPQztTQUZZLGlDQUFpQzttQ0FBakMsaUNBQWlDO2NBTDdDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsNENBQTRDO2dCQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUN6RDs7a0JBRUUsU0FBUzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEFjY29yZGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcblxuLyoqXG4gKiBAdGl0bGUgQWNjb3JkaW9uIHdpdGggZXhwYW5kL2NvbGxhcHNlIGFsbCB0b2dnbGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi10b2dnbGUtYWxsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGUge1xuICBAVmlld0NoaWxkKE1hdEFjY29yZGlvbikgYWNjb3JkaW9uOiBNYXRBY2NvcmRpb247XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uc1wiPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImFjY29yZGlvbi5vcGVuQWxsKClcIj5FeHBhbmQgQWxsPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiYWNjb3JkaW9uLmNsb3NlQWxsKClcIj5Db2xsYXBzZSBBbGw8L2J1dHRvbj5cbjwvZGl2PlxuPG1hdC1hY2NvcmRpb24gY2xhc3M9XCJleGFtcGxlLWhlYWRlcnMtYWxpZ25cIiBtdWx0aT5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWw+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgUGVyc29uYWwgZGF0YVxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHlvdXIgbmFtZSBhbmQgYWdlXG4gICAgICAgIDxtYXQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBwbGFjZWhvbGRlcj1cIkFnZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuXG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIGRpc2FibGVkPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIERlc3RpbmF0aW9uXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFR5cGUgdGhlIGNvdW50cnkgbmFtZVxuICAgICAgICA8bWF0LWljb24+bWFwPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuXG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIERheSBvZiB0aGUgdHJpcFxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBJbmZvcm0gdGhlIGRhdGUgeW91IHdpc2ggdG8gdHJhdmVsXG4gICAgICAgIDxtYXQtaWNvbj5kYXRlX3JhbmdlPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJEYXRlXCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgKGZvY3VzKT1cInBpY2tlci5vcGVuKClcIiByZWFkb25seT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbjwvbWF0LWFjY29yZGlvbj5cbiJdfQ==