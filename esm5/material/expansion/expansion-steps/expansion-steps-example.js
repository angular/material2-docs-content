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
    ExpansionStepsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 48, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["mat-button", "", "color", "primary", 3, "click"], ["matInput", "", "placeholder", "Country"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_40_listener($event) { i0.ɵɵrestoreView(_r3); var _r2 = i0.ɵɵreference(42); return _r2.open(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(41, "mat-datepicker", null, 8);
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
            var _r2 = i0.ɵɵreference(42);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("expanded", ctx.step === 0);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("expanded", ctx.step === 1);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("expanded", ctx.step === 2);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("matDatepicker", _r2);
        } }, directives: [i1.MatAccordion, i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i1.MatExpansionPanelDescription, i2.MatIcon, i3.MatFormField, i4.MatInput, i1.MatExpansionPanelActionRow, i5.MatButton, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLXN0ZXBzL2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1zdGVwcy9leHBhbnNpb24tc3RlcHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFNBQUksR0FBRyxDQUFDLENBQUM7S0FhVjtJQVhDLHVDQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUMzQzs7OEZBQ1kscUJBQXFCOzhEQUFyQixxQkFBcUI7O1lDVmxDLHdDQUNFO1lBQUEsOENBQ0U7WUFEMkMsdUhBQVUsWUFBUSxDQUFDLENBQUMsSUFBQztZQUNoRSxrREFDRTtZQUFBLHVDQUNFO1lBQUEsK0JBQ0Y7WUFBQSxpQkFBa0I7WUFDbEIsNkNBQ0U7WUFBQSx3Q0FDQTtZQUFBLGdDQUFVO1lBQUEsOEJBQWM7WUFBQSxpQkFBVztZQUNyQyxpQkFBd0I7WUFDMUIsaUJBQTZCO1lBRTdCLHNDQUNFO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsdUNBQ0U7WUFBQSw0QkFDRjtZQUFBLGlCQUFpQjtZQUVqQix1Q0FDRTtZQUFBLGtDQUF3RDtZQUFyQix5R0FBUyxjQUFVLElBQUM7WUFBQyxxQkFBSTtZQUFBLGlCQUFTO1lBQ3ZFLGlCQUFpQjtZQUNuQixpQkFBc0I7WUFFdEIsK0NBQ0U7WUFEMkMsd0hBQVUsWUFBUSxDQUFDLENBQUMsSUFBQztZQUNoRSxtREFDRTtZQUFBLHdDQUNFO1lBQUEsOEJBQ0Y7WUFBQSxpQkFBa0I7WUFDbEIsOENBQ0U7WUFBQSx3Q0FDQTtZQUFBLGlDQUFVO1lBQUEsb0JBQUc7WUFBQSxpQkFBVztZQUMxQixpQkFBd0I7WUFDMUIsaUJBQTZCO1lBRTdCLHVDQUNFO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsdUNBQ0U7WUFBQSxrQ0FBcUQ7WUFBckIseUdBQVMsY0FBVSxJQUFDO1lBQUMseUJBQVE7WUFBQSxpQkFBUztZQUN0RSxrQ0FBd0Q7WUFBckIseUdBQVMsY0FBVSxJQUFDO1lBQUMscUJBQUk7WUFBQSxpQkFBUztZQUN2RSxpQkFBaUI7WUFDbkIsaUJBQXNCO1lBRXRCLCtDQUNFO1lBRDJDLHdIQUFVLFlBQVEsQ0FBQyxDQUFDLElBQUM7WUFDaEUsbURBQ0U7WUFBQSx3Q0FDRTtZQUFBLGtDQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDhDQUNFO1lBQUEscURBQ0E7WUFBQSxpQ0FBVTtZQUFBLDJCQUFVO1lBQUEsaUJBQVc7WUFDakMsaUJBQXdCO1lBQzFCLGlCQUE2QjtZQUU3Qix1Q0FDRTtZQUFBLGlDQUNGO1lBRDhELDZKQUFTLFVBQWEsSUFBQztZQUFuRixpQkFDRjtZQUFBLGlCQUFpQjtZQUNqQiwyQ0FBeUM7WUFFekMsdUNBQ0U7WUFBQSxrQ0FBcUQ7WUFBckIseUdBQVMsY0FBVSxJQUFDO1lBQUMseUJBQVE7WUFBQSxpQkFBUztZQUN0RSxrQ0FBd0Q7WUFBckIseUdBQVMsY0FBVSxJQUFDO1lBQUMsb0JBQUc7WUFBQSxpQkFBUztZQUN0RSxpQkFBaUI7WUFDbkIsaUJBQXNCO1lBRXhCLGlCQUFnQjs7O1lBbkVPLGVBQXVCO1lBQXZCLHlDQUF1QjtZQXdCdkIsZ0JBQXVCO1lBQXZCLHlDQUF1QjtZQXFCdkIsZ0JBQXVCO1lBQXZCLHlDQUF1QjtZQVlMLGVBQXdCO1lBQXhCLG1DQUF3Qjs7Z0NEMURqRTtDQXdCQyxBQW5CRCxJQW1CQztTQWRZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgRXhwYW5zaW9uIHBhbmVsIGFzIGFjY29yZGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHBhbnNpb24tc3RlcHMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tc3RlcHMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uU3RlcHNFeGFtcGxlIHtcbiAgc3RlcCA9IDA7XG5cbiAgc2V0U3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGVwID0gaW5kZXg7XG4gIH1cblxuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLnN0ZXArKztcbiAgfVxuXG4gIHByZXZTdGVwKCkge1xuICAgIHRoaXMuc3RlcC0tO1xuICB9XG59XG4iLCI8bWF0LWFjY29yZGlvbiBjbGFzcz1cImV4YW1wbGUtaGVhZGVycy1hbGlnblwiPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbZXhwYW5kZWRdPVwic3RlcCA9PT0gMFwiIChvcGVuZWQpPVwic2V0U3RlcCgwKVwiIGhpZGVUb2dnbGU+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgUGVyc29uYWwgZGF0YVxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHlvdXIgbmFtZSBhbmQgYWdlXG4gICAgICAgIDxtYXQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBwbGFjZWhvbGRlcj1cIkFnZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWFjdGlvbi1yb3c+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5OZXh0PC9idXR0b24+XG4gICAgPC9tYXQtYWN0aW9uLXJvdz5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuXG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIFtleHBhbmRlZF09XCJzdGVwID09PSAxXCIgKG9wZW5lZCk9XCJzZXRTdGVwKDEpXCIgaGlkZVRvZ2dsZT5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBEZXN0aW5hdGlvblxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHRoZSBjb3VudHJ5IG5hbWVcbiAgICAgICAgPG1hdC1pY29uPm1hcDwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWFjdGlvbi1yb3c+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cInByZXZTdGVwKClcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+TmV4dDwvYnV0dG9uPlxuICAgIDwvbWF0LWFjdGlvbi1yb3c+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cblxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbZXhwYW5kZWRdPVwic3RlcCA9PT0gMlwiIChvcGVuZWQpPVwic2V0U3RlcCgyKVwiIGhpZGVUb2dnbGU+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGF5IG9mIHRoZSB0cmlwXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIEluZm9ybSB0aGUgZGF0ZSB5b3Ugd2lzaCB0byB0cmF2ZWxcbiAgICAgICAgPG1hdC1pY29uPmRhdGVfcmFuZ2U8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkRhdGVcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiAoZm9jdXMpPVwicGlja2VyLm9wZW4oKVwiIHJlYWRvbmx5PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cblxuICAgIDxtYXQtYWN0aW9uLXJvdz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIiAoY2xpY2spPVwicHJldlN0ZXAoKVwiPlByZXZpb3VzPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5FbmQ8L2J1dHRvbj5cbiAgICA8L21hdC1hY3Rpb24tcm93PlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbjwvbWF0LWFjY29yZGlvbj5cbiJdfQ==