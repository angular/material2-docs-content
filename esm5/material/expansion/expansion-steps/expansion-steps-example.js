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
var ExpansionStepsExample = /** @class */ (function () {
    function ExpansionStepsExample() {
        this.step = 0;
    }
    ExpansionStepsExample.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionStepsExample.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionStepsExample.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionStepsExample.decorators = [
        { type: Component, args: [{
                    selector: 'expansion-steps-example',
                    templateUrl: 'expansion-steps-example.html',
                    styleUrls: ['expansion-steps-example.css'],
                },] },
    ];
    ExpansionStepsExample.ɵfac = function ExpansionStepsExample_Factory(t) { return new (t || ExpansionStepsExample)(); };
    ExpansionStepsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 56, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
            var _r3 = i0.ɵɵgetCurrentView();
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
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_18_listener($event) { return ctx.nextStep(); });
            i0.ɵɵtext(19, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-expansion-panel", 1);
            i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_20_listener($event) { return ctx.setStep(1); });
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
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_33_listener($event) { return ctx.prevStep(); });
            i0.ɵɵtext(34, "Previous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "button", 4);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_35_listener($event) { return ctx.nextStep(); });
            i0.ɵɵtext(36, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "mat-expansion-panel", 1);
            i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_37_listener($event) { return ctx.setStep(2); });
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
            i0.ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_48_listener($event) { i0.ɵɵrestoreView(_r3); var _r2 = i0.ɵɵreference(50); return _r2.open(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "mat-datepicker", null, 7);
            i0.ɵɵelementStart(51, "mat-action-row");
            i0.ɵɵelementStart(52, "button", 5);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_52_listener($event) { return ctx.prevStep(); });
            i0.ɵɵtext(53, "Previous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "button", 4);
            i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_54_listener($event) { return ctx.nextStep(); });
            i0.ɵɵtext(55, "End");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(50);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("expanded", ctx.step === 0);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("expanded", ctx.step === 1);
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("expanded", ctx.step === 2);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("matDatepicker", _r2);
        } }, directives: [i1.MatAccordion, i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i1.MatExpansionPanelDescription, i2.MatIcon, i3.MatFormField, i3.MatLabel, i4.MatInput, i1.MatExpansionPanelActionRow, i5.MatButton, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return ExpansionStepsExample;
}());
export { ExpansionStepsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionStepsExample, [{
        type: Component,
        args: [{
                selector: 'expansion-steps-example',
                templateUrl: 'expansion-steps-example.html',
                styleUrls: ['expansion-steps-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLXN0ZXBzL2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1zdGVwcy9leHBhbnNpb24tc3RlcHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFNBQUksR0FBRyxDQUFDLENBQUM7S0FhVjtJQVhDLHVDQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUMzQzs7OEZBQ1kscUJBQXFCOzhEQUFyQixxQkFBcUI7O1lDVmxDLHdDQUNFO1lBQUEsOENBQ0U7WUFEMkMsdUhBQVUsWUFBUSxDQUFDLENBQUMsSUFBQztZQUNoRSxrREFDRTtZQUFBLHVDQUNFO1lBQUEsK0JBQ0Y7WUFBQSxpQkFBa0I7WUFDbEIsNkNBQ0U7WUFBQSx3Q0FDQTtZQUFBLGdDQUFVO1lBQUEsOEJBQWM7WUFBQSxpQkFBVztZQUNyQyxpQkFBd0I7WUFDMUIsaUJBQTZCO1lBRTdCLHNDQUNFO1lBQUEsa0NBQVc7WUFBQSwyQkFBVTtZQUFBLGlCQUFZO1lBQ2pDLDRCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSxvQkFBRztZQUFBLGlCQUFZO1lBQzFCLDRCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLHVDQUNFO1lBQUEsa0NBQXdEO1lBQXJCLHlHQUFTLGNBQVUsSUFBQztZQUFDLHFCQUFJO1lBQUEsaUJBQVM7WUFDdkUsaUJBQWlCO1lBQ25CLGlCQUFzQjtZQUV0QiwrQ0FDRTtZQUQyQyx3SEFBVSxZQUFRLENBQUMsQ0FBQyxJQUFDO1lBQ2hFLG1EQUNFO1lBQUEsd0NBQ0U7WUFBQSw4QkFDRjtZQUFBLGlCQUFrQjtZQUNsQiw4Q0FDRTtZQUFBLHdDQUNBO1lBQUEsaUNBQVU7WUFBQSxvQkFBRztZQUFBLGlCQUFXO1lBQzFCLGlCQUF3QjtZQUMxQixpQkFBNkI7WUFFN0IsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLHdCQUFPO1lBQUEsaUJBQVk7WUFDOUIsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsdUNBQ0U7WUFBQSxrQ0FBcUQ7WUFBckIseUdBQVMsY0FBVSxJQUFDO1lBQUMseUJBQVE7WUFBQSxpQkFBUztZQUN0RSxrQ0FBd0Q7WUFBckIseUdBQVMsY0FBVSxJQUFDO1lBQUMscUJBQUk7WUFBQSxpQkFBUztZQUN2RSxpQkFBaUI7WUFDbkIsaUJBQXNCO1lBRXRCLCtDQUNFO1lBRDJDLHdIQUFVLFlBQVEsQ0FBQyxDQUFDLElBQUM7WUFDaEUsbURBQ0U7WUFBQSx3Q0FDRTtZQUFBLGtDQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDhDQUNFO1lBQUEscURBQ0E7WUFBQSxpQ0FBVTtZQUFBLDJCQUFVO1lBQUEsaUJBQVc7WUFDakMsaUJBQXdCO1lBQzFCLGlCQUE2QjtZQUU3Qix1Q0FDRTtZQUFBLGtDQUFXO1lBQUEscUJBQUk7WUFBQSxpQkFBWTtZQUMzQixpQ0FDRjtZQUQyQyw2SkFBUyxVQUFhLElBQUM7WUFBaEUsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIsMkNBQXlDO1lBRXpDLHVDQUNFO1lBQUEsa0NBQXFEO1lBQXJCLHlHQUFTLGNBQVUsSUFBQztZQUFDLHlCQUFRO1lBQUEsaUJBQVM7WUFDdEUsa0NBQXdEO1lBQXJCLHlHQUFTLGNBQVUsSUFBQztZQUFDLG9CQUFHO1lBQUEsaUJBQVM7WUFDdEUsaUJBQWlCO1lBQ25CLGlCQUFzQjtZQUV4QixpQkFBZ0I7OztZQXZFTyxlQUF1QjtZQUF2Qix5Q0FBdUI7WUEwQnZCLGdCQUF1QjtZQUF2Qix5Q0FBdUI7WUFzQnZCLGdCQUF1QjtZQUF2Qix5Q0FBdUI7WUFheEIsZ0JBQXdCO1lBQXhCLG1DQUF3Qjs7Z0NEOUQ5QztDQXdCQyxBQW5CRCxJQW1CQztTQWRZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgRXhwYW5zaW9uIHBhbmVsIGFzIGFjY29yZGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHBhbnNpb24tc3RlcHMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tc3RlcHMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uU3RlcHNFeGFtcGxlIHtcbiAgc3RlcCA9IDA7XG5cbiAgc2V0U3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGVwID0gaW5kZXg7XG4gIH1cblxuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLnN0ZXArKztcbiAgfVxuXG4gIHByZXZTdGVwKCkge1xuICAgIHRoaXMuc3RlcC0tO1xuICB9XG59XG4iLCI8bWF0LWFjY29yZGlvbiBjbGFzcz1cImV4YW1wbGUtaGVhZGVycy1hbGlnblwiPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbZXhwYW5kZWRdPVwic3RlcCA9PT0gMFwiIChvcGVuZWQpPVwic2V0U3RlcCgwKVwiIGhpZGVUb2dnbGU+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgUGVyc29uYWwgZGF0YVxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHlvdXIgbmFtZSBhbmQgYWdlXG4gICAgICAgIDxtYXQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+QWdlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1hY3Rpb24tcm93PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+TmV4dDwvYnV0dG9uPlxuICAgIDwvbWF0LWFjdGlvbi1yb3c+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cblxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbZXhwYW5kZWRdPVwic3RlcCA9PT0gMVwiIChvcGVuZWQpPVwic2V0U3RlcCgxKVwiIGhpZGVUb2dnbGU+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGVzdGluYXRpb25cbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgVHlwZSB0aGUgY291bnRyeSBuYW1lXG4gICAgICAgIDxtYXQtaWNvbj5tYXA8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+Q291bnRyeTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWFjdGlvbi1yb3c+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cInByZXZTdGVwKClcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+TmV4dDwvYnV0dG9uPlxuICAgIDwvbWF0LWFjdGlvbi1yb3c+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cblxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbZXhwYW5kZWRdPVwic3RlcCA9PT0gMlwiIChvcGVuZWQpPVwic2V0U3RlcCgyKVwiIGhpZGVUb2dnbGU+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGF5IG9mIHRoZSB0cmlwXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIEluZm9ybSB0aGUgZGF0ZSB5b3Ugd2lzaCB0byB0cmF2ZWxcbiAgICAgICAgPG1hdC1pY29uPmRhdGVfcmFuZ2U8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+RGF0ZTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIChmb2N1cyk9XCJwaWNrZXIub3BlbigpXCIgcmVhZG9ubHk+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuXG4gICAgPG1hdC1hY3Rpb24tcm93PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiIChjbGljayk9XCJwcmV2U3RlcCgpXCI+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwibmV4dFN0ZXAoKVwiPkVuZDwvYnV0dG9uPlxuICAgIDwvbWF0LWFjdGlvbi1yb3c+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cblxuPC9tYXQtYWNjb3JkaW9uPlxuIl19