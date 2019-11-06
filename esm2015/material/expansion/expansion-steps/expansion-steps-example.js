/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/datepicker";
const _c0 = ["picker", ""];
/**
 * \@title Expansion panel as accordion
 */
export class ExpansionStepsExample {
    constructor() {
        this.step = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setStep(index) {
        this.step = index;
    }
    /**
     * @return {?}
     */
    nextStep() {
        this.step++;
    }
    /**
     * @return {?}
     */
    prevStep() {
        this.step--;
    }
}
ExpansionStepsExample.decorators = [
    { type: Component, args: [{
                selector: 'expansion-steps-example',
                templateUrl: 'expansion-steps-example.html',
                styleUrls: ['expansion-steps-example.css'],
            },] },
];
/** @nocollapse */ ExpansionStepsExample.ɵfac = function ExpansionStepsExample_Factory(t) { return new (t || ExpansionStepsExample)(); };
/** @nocollapse */ ExpansionStepsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 48, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["mat-button", "", "color", "primary", 3, "click"], ["matInput", "", "placeholder", "Country"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-accordion", 0);
        i0.ɵɵelementStart(1, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_1_listener($event) { return ctx.setStep(0); });
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
        i0.ɵɵelementStart(9, "mat-form-field");
        i0.ɵɵelement(10, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-form-field");
        i0.ɵɵelement(12, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-action-row");
        i0.ɵɵelementStart(14, "button", 4);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_14_listener($event) { return ctx.nextStep(); });
        i0.ɵɵtext(15, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_16_listener($event) { return ctx.setStep(1); });
        i0.ɵɵelementStart(17, "mat-expansion-panel-header");
        i0.ɵɵelementStart(18, "mat-panel-title");
        i0.ɵɵtext(19, " Destination ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-panel-description");
        i0.ɵɵtext(21, " Type the country name ");
        i0.ɵɵelementStart(22, "mat-icon");
        i0.ɵɵtext(23, "map");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-form-field");
        i0.ɵɵelement(25, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-action-row");
        i0.ɵɵelementStart(27, "button", 6);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_27_listener($event) { return ctx.prevStep(); });
        i0.ɵɵtext(28, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "button", 4);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_29_listener($event) { return ctx.nextStep(); });
        i0.ɵɵtext(30, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_31_listener($event) { return ctx.setStep(2); });
        i0.ɵɵelementStart(32, "mat-expansion-panel-header");
        i0.ɵɵelementStart(33, "mat-panel-title");
        i0.ɵɵtext(34, " Day of the trip ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "mat-panel-description");
        i0.ɵɵtext(36, " Inform the date you wish to travel ");
        i0.ɵɵelementStart(37, "mat-icon");
        i0.ɵɵtext(38, "date_range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "mat-form-field");
        i0.ɵɵelementStart(40, "input", 7);
        i0.ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_40_listener($event) { i0.ɵɵrestoreView(_r3); const _r2 = i0.ɵɵreference(42); return _r2.open(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(41, "mat-datepicker", null, _c0);
        i0.ɵɵelementStart(43, "mat-action-row");
        i0.ɵɵelementStart(44, "button", 6);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_44_listener($event) { return ctx.prevStep(); });
        i0.ɵɵtext(45, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "button", 4);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_46_listener($event) { return ctx.nextStep(); });
        i0.ɵɵtext(47, "End");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(42);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("expanded", ctx.step === 0);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("expanded", ctx.step === 1);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("expanded", ctx.step === 2);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matDatepicker", _r2);
    } }, directives: [i1.MatAccordion, i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i1.MatExpansionPanelDescription, i2.MatIcon, i3.MatFormField, i4.MatInput, i1.MatExpansionPanelActionRow, i5.MatButton, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(ExpansionStepsExample, [{
        type: Component,
        args: [{
                selector: 'expansion-steps-example',
                templateUrl: 'expansion-steps-example.html',
                styleUrls: ['expansion-steps-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ExpansionStepsExample.prototype.step;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLXN0ZXBzL2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1zdGVwcy9leHBhbnNpb24tc3RlcHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7QUFVeEMsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU1FLFNBQUksR0FBRyxDQUFDLENBQUM7S0FhVjs7Ozs7SUFYQyxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7MEZBQ1kscUJBQXFCOzBEQUFyQixxQkFBcUI7O1FDVmxDLHdDQUNFO1FBQUEsOENBQ0U7UUFEMkMsdUhBQVUsWUFBUSxDQUFDLENBQUMsSUFBQztRQUNoRSxrREFDRTtRQUFBLHVDQUNFO1FBQUEsK0JBQ0Y7UUFBQSxpQkFBa0I7UUFDbEIsNkNBQ0U7UUFBQSx3Q0FDQTtRQUFBLGdDQUFVO1FBQUEsOEJBQWM7UUFBQSxpQkFBVztRQUNyQyxpQkFBd0I7UUFDMUIsaUJBQTZCO1FBRTdCLHNDQUNFO1FBQUEsNEJBQ0Y7UUFBQSxpQkFBaUI7UUFFakIsdUNBQ0U7UUFBQSw0QkFDRjtRQUFBLGlCQUFpQjtRQUVqQix1Q0FDRTtRQUFBLGtDQUF3RDtRQUFyQix5R0FBUyxjQUFVLElBQUM7UUFBQyxxQkFBSTtRQUFBLGlCQUFTO1FBQ3ZFLGlCQUFpQjtRQUNuQixpQkFBc0I7UUFFdEIsK0NBQ0U7UUFEMkMsd0hBQVUsWUFBUSxDQUFDLENBQUMsSUFBQztRQUNoRSxtREFDRTtRQUFBLHdDQUNFO1FBQUEsOEJBQ0Y7UUFBQSxpQkFBa0I7UUFDbEIsOENBQ0U7UUFBQSx3Q0FDQTtRQUFBLGlDQUFVO1FBQUEsb0JBQUc7UUFBQSxpQkFBVztRQUMxQixpQkFBd0I7UUFDMUIsaUJBQTZCO1FBRTdCLHVDQUNFO1FBQUEsNEJBQ0Y7UUFBQSxpQkFBaUI7UUFFakIsdUNBQ0U7UUFBQSxrQ0FBcUQ7UUFBckIseUdBQVMsY0FBVSxJQUFDO1FBQUMseUJBQVE7UUFBQSxpQkFBUztRQUN0RSxrQ0FBd0Q7UUFBckIseUdBQVMsY0FBVSxJQUFDO1FBQUMscUJBQUk7UUFBQSxpQkFBUztRQUN2RSxpQkFBaUI7UUFDbkIsaUJBQXNCO1FBRXRCLCtDQUNFO1FBRDJDLHdIQUFVLFlBQVEsQ0FBQyxDQUFDLElBQUM7UUFDaEUsbURBQ0U7UUFBQSx3Q0FDRTtRQUFBLGtDQUNGO1FBQUEsaUJBQWtCO1FBQ2xCLDhDQUNFO1FBQUEscURBQ0E7UUFBQSxpQ0FBVTtRQUFBLDJCQUFVO1FBQUEsaUJBQVc7UUFDakMsaUJBQXdCO1FBQzFCLGlCQUE2QjtRQUU3Qix1Q0FDRTtRQUFBLGlDQUNGO1FBRDhELCtKQUFTLFVBQWEsSUFBQztRQUFuRixpQkFDRjtRQUFBLGlCQUFpQjtRQUNqQiw2Q0FBeUM7UUFFekMsdUNBQ0U7UUFBQSxrQ0FBcUQ7UUFBckIseUdBQVMsY0FBVSxJQUFDO1FBQUMseUJBQVE7UUFBQSxpQkFBUztRQUN0RSxrQ0FBd0Q7UUFBckIseUdBQVMsY0FBVSxJQUFDO1FBQUMsb0JBQUc7UUFBQSxpQkFBUztRQUN0RSxpQkFBaUI7UUFDbkIsaUJBQXNCO1FBRXhCLGlCQUFnQjs7O1FBbkVPLGVBQXVCO1FBQXZCLHlDQUF1QjtRQXdCdkIsZ0JBQXVCO1FBQXZCLHlDQUF1QjtRQXFCdkIsZ0JBQXVCO1FBQXZCLHlDQUF1QjtRQVlMLGVBQXdCO1FBQXhCLG1DQUF3Qjs7bUNEaERwRCxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7O0lBRUMscUNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEV4cGFuc2lvbiBwYW5lbCBhcyBhY2NvcmRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvblN0ZXBzRXhhbXBsZSB7XG4gIHN0ZXAgPSAwO1xuXG4gIHNldFN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc3RlcCA9IGluZGV4O1xuICB9XG5cbiAgbmV4dFN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwKys7XG4gIH1cblxuICBwcmV2U3RlcCgpIHtcbiAgICB0aGlzLnN0ZXAtLTtcbiAgfVxufVxuIiwiPG1hdC1hY2NvcmRpb24gY2xhc3M9XCJleGFtcGxlLWhlYWRlcnMtYWxpZ25cIj5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgW2V4cGFuZGVkXT1cInN0ZXAgPT09IDBcIiAob3BlbmVkKT1cInNldFN0ZXAoMClcIiBoaWRlVG9nZ2xlPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFBlcnNvbmFsIGRhdGFcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgVHlwZSB5b3VyIG5hbWUgYW5kIGFnZVxuICAgICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkZpcnN0IG5hbWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgcGxhY2Vob2xkZXI9XCJBZ2VcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1hY3Rpb24tcm93PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+TmV4dDwvYnV0dG9uPlxuICAgIDwvbWF0LWFjdGlvbi1yb3c+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cblxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbZXhwYW5kZWRdPVwic3RlcCA9PT0gMVwiIChvcGVuZWQpPVwic2V0U3RlcCgxKVwiIGhpZGVUb2dnbGU+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGVzdGluYXRpb25cbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgVHlwZSB0aGUgY291bnRyeSBuYW1lXG4gICAgICAgIDxtYXQtaWNvbj5tYXA8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkNvdW50cnlcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1hY3Rpb24tcm93PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiIChjbGljayk9XCJwcmV2U3RlcCgpXCI+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwibmV4dFN0ZXAoKVwiPk5leHQ8L2J1dHRvbj5cbiAgICA8L21hdC1hY3Rpb24tcm93PlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgW2V4cGFuZGVkXT1cInN0ZXAgPT09IDJcIiAob3BlbmVkKT1cInNldFN0ZXAoMilcIiBoaWRlVG9nZ2xlPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIERheSBvZiB0aGUgdHJpcFxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBJbmZvcm0gdGhlIGRhdGUgeW91IHdpc2ggdG8gdHJhdmVsXG4gICAgICAgIDxtYXQtaWNvbj5kYXRlX3JhbmdlPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJEYXRlXCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgKGZvY3VzKT1cInBpY2tlci5vcGVuKClcIiByZWFkb25seT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG5cbiAgICA8bWF0LWFjdGlvbi1yb3c+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cInByZXZTdGVwKClcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+RW5kPC9idXR0b24+XG4gICAgPC9tYXQtYWN0aW9uLXJvdz5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuXG48L21hdC1hY2NvcmRpb24+XG4iXX0=