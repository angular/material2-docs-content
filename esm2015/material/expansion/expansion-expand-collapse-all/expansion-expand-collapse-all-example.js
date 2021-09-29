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
export class ExpansionExpandCollapseAllExample {
}
ExpansionExpandCollapseAllExample.ɵfac = function ExpansionExpandCollapseAllExample_Factory(t) { return new (t || ExpansionExpandCollapseAllExample)(); };
ExpansionExpandCollapseAllExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpansionExpandCollapseAllExample, selectors: [["expansion-expand-collapse-all-example"]], viewQuery: function ExpansionExpandCollapseAllExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatAccordion, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.accordion = _t.first);
    } }, decls: 48, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["appearance", "fill"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["disabled", ""], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(14, "mat-form-field", 3);
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(17, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-form-field", 3);
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Age");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-expansion-panel", 6);
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
        i0.ɵɵelementStart(30, "mat-form-field", 3);
        i0.ɵɵelementStart(31, "mat-label");
        i0.ɵɵtext(32, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "input", 4);
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
        i0.ɵɵelementStart(42, "mat-form-field", 3);
        i0.ɵɵelementStart(43, "mat-label");
        i0.ɵɵtext(44, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "input", 7);
        i0.ɵɵlistener("focus", function ExpansionExpandCollapseAllExample_Template_input_focus_45_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(47); return _r0.open(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(46, "mat-datepicker", null, 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(47);
        i0.ɵɵadvance(45);
        i0.ɵɵproperty("matDatepicker", _r0);
    } }, directives: [i1.MatButton, i2.MatAccordion, i2.MatExpansionPanel, i2.MatExpansionPanelHeader, i2.MatExpansionPanelTitle, i2.MatExpansionPanelDescription, i3.MatIcon, i4.MatFormField, i4.MatLabel, i5.MatInput, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpansionExpandCollapseAllExample, [{
        type: Component,
        args: [{ selector: 'expansion-expand-collapse-all-example', template: "<div class=\"example-action-buttons\">\n  <button mat-button (click)=\"accordion.openAll()\">Expand All</button>\n  <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button>\n</div>\n<!-- #docregion multi -->\n<mat-accordion class=\"example-headers-align\" multi>\n<!-- #enddocregion multi -->\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Age</mat-label>\n      <input matInput type=\"number\" min=\"1\">\n    </mat-form-field>\n\n  </mat-expansion-panel>\n<!-- #docregion disabled -->\n  <mat-expansion-panel disabled>\n<!-- #enddocregion disabled -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Country</mat-label>\n      <input matInput>\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n"] }]
    }], null, { accordion: [{
            type: ViewChild,
            args: [MatAccordion]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2V4cGFuc2lvbi9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7O0FBRXpEOztHQUVHO0FBTUgsTUFBTSxPQUFPLGlDQUFpQzs7a0hBQWpDLGlDQUFpQztvRkFBakMsaUNBQWlDO3VCQUNqQyxZQUFZOzs7Ozs7UUNaekIsOEJBQW9DO1FBQ2xDLGlDQUFpRDtRQUE5Qiw4R0FBUyx1QkFBbUIsSUFBQztRQUFDLDBCQUFVO1FBQUEsaUJBQVM7UUFDcEUsaUNBQWtEO1FBQS9CLDhHQUFTLHdCQUFvQixJQUFDO1FBQUMsNEJBQVk7UUFBQSxpQkFBUztRQUN6RSxpQkFBTTtRQUVOLHdDQUFtRDtRQUVqRCwyQ0FBcUI7UUFDbkIsa0RBQTRCO1FBQzFCLHVDQUFpQjtRQUNmLCtCQUNGO1FBQUEsaUJBQWtCO1FBQ2xCLDhDQUF1QjtRQUNyQix5Q0FDQTtRQUFBLGlDQUFVO1FBQUEsK0JBQWM7UUFBQSxpQkFBVztRQUNyQyxpQkFBd0I7UUFDMUIsaUJBQTZCO1FBRTdCLDBDQUFrQztRQUNoQyxrQ0FBVztRQUFBLDJCQUFVO1FBQUEsaUJBQVk7UUFDakMsNEJBQWdCO1FBQ2xCLGlCQUFpQjtRQUVqQiwwQ0FBa0M7UUFDaEMsa0NBQVc7UUFBQSxvQkFBRztRQUFBLGlCQUFZO1FBQzFCLDRCQUFzQztRQUN4QyxpQkFBaUI7UUFFbkIsaUJBQXNCO1FBRXRCLCtDQUE4QjtRQUU1QixtREFBNEI7UUFDMUIsd0NBQWlCO1FBQ2YsOEJBQ0Y7UUFBQSxpQkFBa0I7UUFDbEIsOENBQXVCO1FBQ3JCLHdDQUNBO1FBQUEsaUNBQVU7UUFBQSxvQkFBRztRQUFBLGlCQUFXO1FBQzFCLGlCQUF3QjtRQUMxQixpQkFBNkI7UUFFN0IsMENBQWtDO1FBQ2hDLGtDQUFXO1FBQUEsd0JBQU87UUFBQSxpQkFBWTtRQUM5Qiw0QkFBZ0I7UUFDbEIsaUJBQWlCO1FBQ25CLGlCQUFzQjtRQUV0Qiw0Q0FBcUI7UUFDbkIsbURBQTRCO1FBQzFCLHdDQUFpQjtRQUNmLGtDQUNGO1FBQUEsaUJBQWtCO1FBQ2xCLDhDQUF1QjtRQUNyQixxREFDQTtRQUFBLGlDQUFVO1FBQUEsMkJBQVU7UUFBQSxpQkFBVztRQUNqQyxpQkFBd0I7UUFDMUIsaUJBQTZCO1FBRTdCLDBDQUFrQztRQUNoQyxrQ0FBVztRQUFBLHFCQUFJO1FBQUEsaUJBQVk7UUFDM0IsaUNBQTBFO1FBQWpDLHFLQUFTLFVBQWEsSUFBQztRQUFoRSxpQkFBMEU7UUFDNUUsaUJBQWlCO1FBQ2pCLDJDQUF5QztRQUMzQyxpQkFBc0I7UUFDeEIsaUJBQWdCOzs7UUFKTSxnQkFBd0I7UUFBeEIsbUNBQXdCOzt1RkRsRGpDLGlDQUFpQztjQUw3QyxTQUFTOzJCQUNFLHVDQUF1QztnQkFLeEIsU0FBUztrQkFBakMsU0FBUzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEFjY29yZGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcblxuLyoqXG4gKiBAdGl0bGUgQWNjb3JkaW9uIHdpdGggZXhwYW5kL2NvbGxhcHNlIGFsbCB0b2dnbGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGUge1xuICBAVmlld0NoaWxkKE1hdEFjY29yZGlvbikgYWNjb3JkaW9uOiBNYXRBY2NvcmRpb247XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uc1wiPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImFjY29yZGlvbi5vcGVuQWxsKClcIj5FeHBhbmQgQWxsPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiYWNjb3JkaW9uLmNsb3NlQWxsKClcIj5Db2xsYXBzZSBBbGw8L2J1dHRvbj5cbjwvZGl2PlxuPCEtLSAjZG9jcmVnaW9uIG11bHRpIC0tPlxuPG1hdC1hY2NvcmRpb24gY2xhc3M9XCJleGFtcGxlLWhlYWRlcnMtYWxpZ25cIiBtdWx0aT5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtdWx0aSAtLT5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWw+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgUGVyc29uYWwgZGF0YVxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHlvdXIgbmFtZSBhbmQgYWdlXG4gICAgICAgIDxtYXQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkFnZTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG48IS0tICNkb2NyZWdpb24gZGlzYWJsZWQgLS0+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIGRpc2FibGVkPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGRpc2FibGVkIC0tPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIERlc3RpbmF0aW9uXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFR5cGUgdGhlIGNvdW50cnkgbmFtZVxuICAgICAgICA8bWF0LWljb24+bWFwPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+Q291bnRyeTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cblxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbD5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBEYXkgb2YgdGhlIHRyaXBcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgSW5mb3JtIHRoZSBkYXRlIHlvdSB3aXNoIHRvIHRyYXZlbFxuICAgICAgICA8bWF0LWljb24+ZGF0ZV9yYW5nZTwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkRhdGU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiAoZm9jdXMpPVwicGlja2VyLm9wZW4oKVwiIHJlYWRvbmx5PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPC9tYXQtYWNjb3JkaW9uPlxuIl19