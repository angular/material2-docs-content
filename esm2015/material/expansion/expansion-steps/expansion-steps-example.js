import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/datepicker";
/**
 * @title Expansion panel as accordion
 */
export class ExpansionStepsExample {
    constructor() {
        this.step = 0;
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
}
ExpansionStepsExample.ɵfac = function ExpansionStepsExample_Factory(t) { return new (t || ExpansionStepsExample)(); };
ExpansionStepsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 56, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["appearance", "fill"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-accordion", 0);
        i0.ɵɵelementStart(1, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_1_listener() { return ctx.setStep(0); });
        i0.ɵɵelementStart(2, "mat-expansion-panel-header");
        i0.ɵɵelementStart(3, "mat-panel-title");
        i0.ɵɵtext(4, " Personal data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-panel-description");
        i0.ɵɵtext(6, " Type your name and age ");
        i0.ɵɵelementStart(7, "mat-icon");
        i0.ɵɵtext(8, "account_circle");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-form-field", 2);
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-form-field", 2);
        i0.ɵɵelementStart(14, "mat-label");
        i0.ɵɵtext(15, "Age");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-action-row");
        i0.ɵɵelementStart(18, "button", 5);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_18_listener() { return ctx.nextStep(); });
        i0.ɵɵtext(19, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_20_listener() { return ctx.setStep(1); });
        i0.ɵɵelementStart(21, "mat-expansion-panel-header");
        i0.ɵɵelementStart(22, "mat-panel-title");
        i0.ɵɵtext(23, " Destination ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-panel-description");
        i0.ɵɵtext(25, " Type the country name ");
        i0.ɵɵelementStart(26, "mat-icon");
        i0.ɵɵtext(27, "map");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "mat-form-field", 2);
        i0.ɵɵelementStart(29, "mat-label");
        i0.ɵɵtext(30, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(31, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "mat-action-row");
        i0.ɵɵelementStart(33, "button", 6);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_33_listener() { return ctx.prevStep(); });
        i0.ɵɵtext(34, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "button", 5);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_35_listener() { return ctx.nextStep(); });
        i0.ɵɵtext(36, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_37_listener() { return ctx.setStep(2); });
        i0.ɵɵelementStart(38, "mat-expansion-panel-header");
        i0.ɵɵelementStart(39, "mat-panel-title");
        i0.ɵɵtext(40, " Day of the trip ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "mat-panel-description");
        i0.ɵɵtext(42, " Inform the date you wish to travel ");
        i0.ɵɵelementStart(43, "mat-icon");
        i0.ɵɵtext(44, "date_range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "mat-form-field", 2);
        i0.ɵɵelementStart(46, "mat-label");
        i0.ɵɵtext(47, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "input", 7);
        i0.ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_48_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(50); return _r0.open(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(49, "mat-datepicker", null, 8);
        i0.ɵɵelementStart(51, "mat-action-row");
        i0.ɵɵelementStart(52, "button", 6);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_52_listener() { return ctx.prevStep(); });
        i0.ɵɵtext(53, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "button", 5);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_54_listener() { return ctx.nextStep(); });
        i0.ɵɵtext(55, "End");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(50);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("expanded", ctx.step === 0);
        i0.ɵɵadvance(19);
        i0.ɵɵproperty("expanded", ctx.step === 1);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("expanded", ctx.step === 2);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("matDatepicker", _r0);
    } }, directives: [i1.MatAccordion, i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i1.MatExpansionPanelDescription, i2.MatIcon, i3.MatFormField, i3.MatLabel, i4.MatInput, i1.MatExpansionPanelActionRow, i5.MatButton, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpansionStepsExample, [{
        type: Component,
        args: [{ selector: 'expansion-steps-example', template: "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Age</mat-label>\n      <input matInput type=\"number\" min=\"1\">\n    </mat-form-field>\n<!-- #docregion action-bar -->\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n<!-- #enddocregion action-bar -->\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Country</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n", styles: [".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLXN0ZXBzL2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1zdGVwcy9leHBhbnNpb24tc3RlcHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU1FLFNBQUksR0FBRyxDQUFDLENBQUM7S0FhVjtJQVhDLE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzswRkFiVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjs7UUNWbEMsd0NBQTZDO1FBQzNDLDhDQUE4RTtRQUFqQyxpSEFBVSxZQUFRLENBQUMsQ0FBQyxJQUFDO1FBQ2hFLGtEQUE0QjtRQUMxQix1Q0FBaUI7UUFDZiwrQkFDRjtRQUFBLGlCQUFrQjtRQUNsQiw2Q0FBdUI7UUFDckIsd0NBQ0E7UUFBQSxnQ0FBVTtRQUFBLDhCQUFjO1FBQUEsaUJBQVc7UUFDckMsaUJBQXdCO1FBQzFCLGlCQUE2QjtRQUU3Qix5Q0FBa0M7UUFDaEMsa0NBQVc7UUFBQSwyQkFBVTtRQUFBLGlCQUFZO1FBQ2pDLDRCQUFnQjtRQUNsQixpQkFBaUI7UUFFakIsMENBQWtDO1FBQ2hDLGtDQUFXO1FBQUEsb0JBQUc7UUFBQSxpQkFBWTtRQUMxQiw0QkFBc0M7UUFDeEMsaUJBQWlCO1FBRWpCLHVDQUFnQjtRQUNkLGtDQUF3RDtRQUFyQixtR0FBUyxjQUFVLElBQUM7UUFBQyxxQkFBSTtRQUFBLGlCQUFTO1FBQ3ZFLGlCQUFpQjtRQUVuQixpQkFBc0I7UUFFdEIsK0NBQThFO1FBQWpDLGtIQUFVLFlBQVEsQ0FBQyxDQUFDLElBQUM7UUFDaEUsbURBQTRCO1FBQzFCLHdDQUFpQjtRQUNmLDhCQUNGO1FBQUEsaUJBQWtCO1FBQ2xCLDhDQUF1QjtRQUNyQix3Q0FDQTtRQUFBLGlDQUFVO1FBQUEsb0JBQUc7UUFBQSxpQkFBVztRQUMxQixpQkFBd0I7UUFDMUIsaUJBQTZCO1FBRTdCLDBDQUFrQztRQUNoQyxrQ0FBVztRQUFBLHdCQUFPO1FBQUEsaUJBQVk7UUFDOUIsNEJBQWdCO1FBQ2xCLGlCQUFpQjtRQUVqQix1Q0FBZ0I7UUFDZCxrQ0FBcUQ7UUFBckIsbUdBQVMsY0FBVSxJQUFDO1FBQUMseUJBQVE7UUFBQSxpQkFBUztRQUN0RSxrQ0FBd0Q7UUFBckIsbUdBQVMsY0FBVSxJQUFDO1FBQUMscUJBQUk7UUFBQSxpQkFBUztRQUN2RSxpQkFBaUI7UUFDbkIsaUJBQXNCO1FBRXRCLCtDQUE4RTtRQUFqQyxrSEFBVSxZQUFRLENBQUMsQ0FBQyxJQUFDO1FBQ2hFLG1EQUE0QjtRQUMxQix3Q0FBaUI7UUFDZixrQ0FDRjtRQUFBLGlCQUFrQjtRQUNsQiw4Q0FBdUI7UUFDckIscURBQ0E7UUFBQSxpQ0FBVTtRQUFBLDJCQUFVO1FBQUEsaUJBQVc7UUFDakMsaUJBQXdCO1FBQzFCLGlCQUE2QjtRQUU3QiwwQ0FBa0M7UUFDaEMsa0NBQVc7UUFBQSxxQkFBSTtRQUFBLGlCQUFZO1FBQzNCLGlDQUEwRTtRQUFqQyx5SkFBUyxVQUFhLElBQUM7UUFBaEUsaUJBQTBFO1FBQzVFLGlCQUFpQjtRQUNqQiwyQ0FBeUM7UUFFekMsdUNBQWdCO1FBQ2Qsa0NBQXFEO1FBQXJCLG1HQUFTLGNBQVUsSUFBQztRQUFDLHlCQUFRO1FBQUEsaUJBQVM7UUFDdEUsa0NBQXdEO1FBQXJCLG1HQUFTLGNBQVUsSUFBQztRQUFDLG9CQUFHO1FBQUEsaUJBQVM7UUFDdEUsaUJBQWlCO1FBQ25CLGlCQUFzQjtRQUV4QixpQkFBZ0I7OztRQXhFTyxlQUF1QjtRQUF2Qix5Q0FBdUI7UUEyQnZCLGdCQUF1QjtRQUF2Qix5Q0FBdUI7UUFzQnZCLGdCQUF1QjtRQUF2Qix5Q0FBdUI7UUFheEIsZ0JBQXdCO1FBQXhCLG1DQUF3Qjs7dUZEckRqQyxxQkFBcUI7Y0FMakMsU0FBUzsyQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEV4cGFuc2lvbiBwYW5lbCBhcyBhY2NvcmRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvblN0ZXBzRXhhbXBsZSB7XG4gIHN0ZXAgPSAwO1xuXG4gIHNldFN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc3RlcCA9IGluZGV4O1xuICB9XG5cbiAgbmV4dFN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwKys7XG4gIH1cblxuICBwcmV2U3RlcCgpIHtcbiAgICB0aGlzLnN0ZXAtLTtcbiAgfVxufVxuIiwiPG1hdC1hY2NvcmRpb24gY2xhc3M9XCJleGFtcGxlLWhlYWRlcnMtYWxpZ25cIj5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgW2V4cGFuZGVkXT1cInN0ZXAgPT09IDBcIiAob3BlbmVkKT1cInNldFN0ZXAoMClcIiBoaWRlVG9nZ2xlPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFBlcnNvbmFsIGRhdGFcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgVHlwZSB5b3VyIG5hbWUgYW5kIGFnZVxuICAgICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5BZ2U8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG48IS0tICNkb2NyZWdpb24gYWN0aW9uLWJhciAtLT5cbiAgICA8bWF0LWFjdGlvbi1yb3c+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5OZXh0PC9idXR0b24+XG4gICAgPC9tYXQtYWN0aW9uLXJvdz5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBhY3Rpb24tYmFyIC0tPlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgW2V4cGFuZGVkXT1cInN0ZXAgPT09IDFcIiAob3BlbmVkKT1cInNldFN0ZXAoMSlcIiBoaWRlVG9nZ2xlPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIERlc3RpbmF0aW9uXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFR5cGUgdGhlIGNvdW50cnkgbmFtZVxuICAgICAgICA8bWF0LWljb24+bWFwPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+Q291bnRyeTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWFjdGlvbi1yb3c+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cInByZXZTdGVwKClcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+TmV4dDwvYnV0dG9uPlxuICAgIDwvbWF0LWFjdGlvbi1yb3c+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cblxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbZXhwYW5kZWRdPVwic3RlcCA9PT0gMlwiIChvcGVuZWQpPVwic2V0U3RlcCgyKVwiIGhpZGVUb2dnbGU+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGF5IG9mIHRoZSB0cmlwXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIEluZm9ybSB0aGUgZGF0ZSB5b3Ugd2lzaCB0byB0cmF2ZWxcbiAgICAgICAgPG1hdC1pY29uPmRhdGVfcmFuZ2U8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5EYXRlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgKGZvY3VzKT1cInBpY2tlci5vcGVuKClcIiByZWFkb25seT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG5cbiAgICA8bWF0LWFjdGlvbi1yb3c+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cInByZXZTdGVwKClcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+RW5kPC9idXR0b24+XG4gICAgPC9tYXQtYWN0aW9uLXJvdz5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuXG48L21hdC1hY2NvcmRpb24+XG4iXX0=