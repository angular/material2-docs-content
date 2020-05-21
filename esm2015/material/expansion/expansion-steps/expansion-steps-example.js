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
let ExpansionStepsExample = /** @class */ (() => {
    class ExpansionStepsExample {
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
    ExpansionStepsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 56, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelementStart(9, "mat-form-field");
            i0.ɵɵelementStart(10, "mat-label");
            i0.ɵɵtext(11, "First name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-form-field");
            i0.ɵɵelementStart(14, "mat-label");
            i0.ɵɵtext(15, "Age");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "input", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-action-row");
            i0.ɵɵelementStart(18, "button", 4);
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
            i0.ɵɵelementStart(28, "mat-form-field");
            i0.ɵɵelementStart(29, "mat-label");
            i0.ɵɵtext(30, "Country");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "mat-action-row");
            i0.ɵɵelementStart(33, "button", 5);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_33_listener() { return ctx.prevStep(); });
            i0.ɵɵtext(34, "Previous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "button", 4);
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
            i0.ɵɵelementStart(45, "mat-form-field");
            i0.ɵɵelementStart(46, "mat-label");
            i0.ɵɵtext(47, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "input", 6);
            i0.ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_48_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(50); return _r0.open(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "mat-datepicker", null, 7);
            i0.ɵɵelementStart(51, "mat-action-row");
            i0.ɵɵelementStart(52, "button", 5);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_52_listener() { return ctx.prevStep(); });
            i0.ɵɵtext(53, "Previous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "button", 4);
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
    return ExpansionStepsExample;
})();
export { ExpansionStepsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionStepsExample, [{
        type: Component,
        args: [{
                selector: 'expansion-steps-example',
                templateUrl: 'expansion-steps-example.html',
                styleUrls: ['expansion-steps-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLXN0ZXBzL2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1zdGVwcy9leHBhbnNpb24tc3RlcHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQSxNQUthLHFCQUFxQjtRQUxsQztZQU1FLFNBQUksR0FBRyxDQUFDLENBQUM7U0FhVjtRQVhDLE9BQU8sQ0FBQyxLQUFhO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUM7UUFFRCxRQUFRO1lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUVELFFBQVE7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDOzs4RkFiVSxxQkFBcUI7OERBQXJCLHFCQUFxQjs7WUNWbEMsd0NBQ0U7WUFBQSw4Q0FDRTtZQUQyQyxpSEFBVSxZQUFRLENBQUMsQ0FBQyxJQUFDO1lBQ2hFLGtEQUNFO1lBQUEsdUNBQ0U7WUFBQSwrQkFDRjtZQUFBLGlCQUFrQjtZQUNsQiw2Q0FDRTtZQUFBLHdDQUNBO1lBQUEsZ0NBQVU7WUFBQSw4QkFBYztZQUFBLGlCQUFXO1lBQ3JDLGlCQUF3QjtZQUMxQixpQkFBNkI7WUFFN0Isc0NBQ0U7WUFBQSxrQ0FBVztZQUFBLDJCQUFVO1lBQUEsaUJBQVk7WUFDakMsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLG9CQUFHO1lBQUEsaUJBQVk7WUFDMUIsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsdUNBQ0U7WUFBQSxrQ0FBd0Q7WUFBckIsbUdBQVMsY0FBVSxJQUFDO1lBQUMscUJBQUk7WUFBQSxpQkFBUztZQUN2RSxpQkFBaUI7WUFDbkIsaUJBQXNCO1lBRXRCLCtDQUNFO1lBRDJDLGtIQUFVLFlBQVEsQ0FBQyxDQUFDLElBQUM7WUFDaEUsbURBQ0U7WUFBQSx3Q0FDRTtZQUFBLDhCQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDhDQUNFO1lBQUEsd0NBQ0E7WUFBQSxpQ0FBVTtZQUFBLG9CQUFHO1lBQUEsaUJBQVc7WUFDMUIsaUJBQXdCO1lBQzFCLGlCQUE2QjtZQUU3Qix1Q0FDRTtZQUFBLGtDQUFXO1lBQUEsd0JBQU87WUFBQSxpQkFBWTtZQUM5Qiw0QkFDRjtZQUFBLGlCQUFpQjtZQUVqQix1Q0FDRTtZQUFBLGtDQUFxRDtZQUFyQixtR0FBUyxjQUFVLElBQUM7WUFBQyx5QkFBUTtZQUFBLGlCQUFTO1lBQ3RFLGtDQUF3RDtZQUFyQixtR0FBUyxjQUFVLElBQUM7WUFBQyxxQkFBSTtZQUFBLGlCQUFTO1lBQ3ZFLGlCQUFpQjtZQUNuQixpQkFBc0I7WUFFdEIsK0NBQ0U7WUFEMkMsa0hBQVUsWUFBUSxDQUFDLENBQUMsSUFBQztZQUNoRSxtREFDRTtZQUFBLHdDQUNFO1lBQUEsa0NBQ0Y7WUFBQSxpQkFBa0I7WUFDbEIsOENBQ0U7WUFBQSxxREFDQTtZQUFBLGlDQUFVO1lBQUEsMkJBQVU7WUFBQSxpQkFBVztZQUNqQyxpQkFBd0I7WUFDMUIsaUJBQTZCO1lBRTdCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSxxQkFBSTtZQUFBLGlCQUFZO1lBQzNCLGlDQUNGO1lBRDJDLHlKQUFTLFVBQWEsSUFBQztZQUFoRSxpQkFDRjtZQUFBLGlCQUFpQjtZQUNqQiwyQ0FBeUM7WUFFekMsdUNBQ0U7WUFBQSxrQ0FBcUQ7WUFBckIsbUdBQVMsY0FBVSxJQUFDO1lBQUMseUJBQVE7WUFBQSxpQkFBUztZQUN0RSxrQ0FBd0Q7WUFBckIsbUdBQVMsY0FBVSxJQUFDO1lBQUMsb0JBQUc7WUFBQSxpQkFBUztZQUN0RSxpQkFBaUI7WUFDbkIsaUJBQXNCO1lBRXhCLGlCQUFnQjs7O1lBdkVPLGVBQXVCO1lBQXZCLHlDQUF1QjtZQTBCdkIsZ0JBQXVCO1lBQXZCLHlDQUF1QjtZQXNCdkIsZ0JBQXVCO1lBQXZCLHlDQUF1QjtZQWF4QixnQkFBd0I7WUFBeEIsbUNBQXdCOztnQ0Q5RDlDO0tBd0JDO1NBZFkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBFeHBhbnNpb24gcGFuZWwgYXMgYWNjb3JkaW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tc3RlcHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25TdGVwc0V4YW1wbGUge1xuICBzdGVwID0gMDtcblxuICBzZXRTdGVwKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0ZXAgPSBpbmRleDtcbiAgfVxuXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuc3RlcCsrO1xuICB9XG5cbiAgcHJldlN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwLS07XG4gIH1cbn1cbiIsIjxtYXQtYWNjb3JkaW9uIGNsYXNzPVwiZXhhbXBsZS1oZWFkZXJzLWFsaWduXCI+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIFtleHBhbmRlZF09XCJzdGVwID09PSAwXCIgKG9wZW5lZCk9XCJzZXRTdGVwKDApXCIgaGlkZVRvZ2dsZT5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBQZXJzb25hbCBkYXRhXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFR5cGUgeW91ciBuYW1lIGFuZCBhZ2VcbiAgICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5BZ2U8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWFjdGlvbi1yb3c+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5OZXh0PC9idXR0b24+XG4gICAgPC9tYXQtYWN0aW9uLXJvdz5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuXG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIFtleHBhbmRlZF09XCJzdGVwID09PSAxXCIgKG9wZW5lZCk9XCJzZXRTdGVwKDEpXCIgaGlkZVRvZ2dsZT5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBEZXN0aW5hdGlvblxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHRoZSBjb3VudHJ5IG5hbWVcbiAgICAgICAgPG1hdC1pY29uPm1hcDwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5Db3VudHJ5PC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtYWN0aW9uLXJvdz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIiAoY2xpY2spPVwicHJldlN0ZXAoKVwiPlByZXZpb3VzPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5OZXh0PC9idXR0b24+XG4gICAgPC9tYXQtYWN0aW9uLXJvdz5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuXG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIFtleHBhbmRlZF09XCJzdGVwID09PSAyXCIgKG9wZW5lZCk9XCJzZXRTdGVwKDIpXCIgaGlkZVRvZ2dsZT5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBEYXkgb2YgdGhlIHRyaXBcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgSW5mb3JtIHRoZSBkYXRlIHlvdSB3aXNoIHRvIHRyYXZlbFxuICAgICAgICA8bWF0LWljb24+ZGF0ZV9yYW5nZTwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5EYXRlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgKGZvY3VzKT1cInBpY2tlci5vcGVuKClcIiByZWFkb25seT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG5cbiAgICA8bWF0LWFjdGlvbi1yb3c+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cInByZXZTdGVwKClcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+RW5kPC9idXR0b24+XG4gICAgPC9tYXQtYWN0aW9uLXJvdz5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuXG48L21hdC1hY2NvcmRpb24+XG4iXX0=