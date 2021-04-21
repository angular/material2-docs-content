import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
function StepperLabelPositionBottomExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperLabelPositionBottomExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperLabelPositionBottomExample_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper label bottom position
 */
export class StepperLabelPositionBottomExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperLabelPositionBottomExample.ɵfac = function StepperLabelPositionBottomExample_Factory(t) { return new (t || StepperLabelPositionBottomExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
StepperLabelPositionBottomExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperLabelPositionBottomExample, selectors: [["stepper-label-position-bottom-example"]], decls: 33, vars: 4, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["optional", "", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperLabelPositionBottomExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-horizontal-stepper", 0, 1);
        i0.ɵɵelementStart(2, "mat-step", 2);
        i0.ɵɵelementStart(3, "form", 3);
        i0.ɵɵtemplate(4, StepperLabelPositionBottomExample_ng_template_4_Template, 1, 0, "ng-template", 4);
        i0.ɵɵelementStart(5, "mat-form-field");
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵtext(11, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-step", 7);
        i0.ɵɵelementStart(13, "form", 3);
        i0.ɵɵtemplate(14, StepperLabelPositionBottomExample_ng_template_14_Template, 1, 0, "ng-template", 4);
        i0.ɵɵelementStart(15, "mat-form-field");
        i0.ɵɵelementStart(16, "mat-label");
        i0.ɵɵtext(17, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div");
        i0.ɵɵelementStart(20, "button", 9);
        i0.ɵɵtext(21, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 6);
        i0.ɵɵtext(23, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-step");
        i0.ɵɵtemplate(25, StepperLabelPositionBottomExample_ng_template_25_Template, 1, 0, "ng-template", 4);
        i0.ɵɵelementStart(26, "p");
        i0.ɵɵtext(27, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div");
        i0.ɵɵelementStart(29, "button", 9);
        i0.ɵɵtext(30, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "button", 10);
        i0.ɵɵlistener("click", function StepperLabelPositionBottomExample_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(1); return _r0.reset(); });
        i0.ɵɵtext(32, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2.MatStepper, i2.MatStep, i1.ɵangular_packages_forms_forms_bb, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatStepLabel, i3.MatFormField, i3.MatLabel, i4.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i5.MatButton, i2.MatStepperNext, i2.MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperLabelPositionBottomExample, [{
        type: Component,
        args: [{
                selector: 'stepper-label-position-bottom-example',
                templateUrl: 'stepper-label-position-bottom-example.html',
                styleUrls: ['stepper-label-position-bottom-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20vc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20vc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNJbEMsa0NBQWtCOzs7SUFZbEIscUNBQXFCOzs7SUFldkIsb0JBQUk7O0FEN0JsQzs7R0FFRztBQU1ILE1BQU0sT0FBTyxpQ0FBaUM7SUFJNUMsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRWpELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDN0MsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7a0hBYlUsaUNBQWlDO29GQUFqQyxpQ0FBaUM7O1FDVjlDLG9EQUF3RDtRQUV0RCxtQ0FBeUM7UUFDdkMsK0JBQW1DO1FBQ2pDLGtHQUEwRDtRQUMxRCxzQ0FBZ0I7UUFDZCxpQ0FBVztRQUFBLG9CQUFJO1FBQUEsaUJBQVk7UUFDM0IsMkJBQXlGO1FBQzNGLGlCQUFpQjtRQUNqQiwyQkFBSztRQUNILGtDQUFrQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDakQsaUJBQU07UUFDUixpQkFBTztRQUNULGlCQUFXO1FBQ1gsb0NBQW1EO1FBQ2pELGdDQUFvQztRQUNsQyxvR0FBNkQ7UUFDN0QsdUNBQWdCO1FBQ2Qsa0NBQVc7UUFBQSx3QkFBTztRQUFBLGlCQUFZO1FBQzlCLDRCQUNnQjtRQUNsQixpQkFBaUI7UUFDakIsNEJBQUs7UUFFSCxrQ0FBc0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ25ELGtDQUFrQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFFakQsaUJBQU07UUFDUixpQkFBTztRQUNULGlCQUFXO1FBQ1gsaUNBQVU7UUFDUixvR0FBNEM7UUFDNUMsMEJBQUc7UUFBQSxrQ0FBaUI7UUFBQSxpQkFBSTtRQUN4Qiw0QkFBSztRQUNILGtDQUFzQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDbkQsbUNBQTZDO1FBQTFCLHFLQUFTLFdBQWUsSUFBQztRQUFDLHNCQUFLO1FBQUEsaUJBQVM7UUFDN0QsaUJBQU07UUFDUixpQkFBVztRQUNiLGlCQUF5Qjs7UUFwQ2IsZUFBOEI7UUFBOUIsZ0RBQThCO1FBQ2hDLGVBQTRCO1FBQTVCLDhDQUE0QjtRQVcxQixlQUErQjtRQUEvQixpREFBK0I7UUFDakMsZUFBNkI7UUFBN0IsK0NBQTZCOzt1RkRMMUIsaUNBQWlDO2NBTDdDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxXQUFXLEVBQUUsNENBQTRDO2dCQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUN6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgbGFiZWwgYm90dG9tIHBvc2l0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyTGFiZWxQb3NpdGlvbkJvdHRvbUV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuc2Vjb25kRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG59XG4iLCI8IS0tICNkb2NyZWdpb24gbGFiZWwtcG9zaXRpb24gLS0+XG48bWF0LWhvcml6b250YWwtc3RlcHBlciBsYWJlbFBvc2l0aW9uPVwiYm90dG9tXCIgI3N0ZXBwZXI+XG48IS0tICNlbmRkb2NyZWdpb24gbGFiZWwtcG9zaXRpb24gLS0+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+TmFtZTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiIG9wdGlvbmFsPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgYWRkcmVzczwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+QWRkcmVzczwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ3RybFwiIHBsYWNlaG9sZGVyPVwiRXguIDEgTWFpbiBTdCwgTmV3IFlvcmssIE5ZXCJcbiAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG48IS0tICNkb2NyZWdpb24gYnV0dG9ucyAtLT5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG48IS0tICNlbmRkb2NyZWdpb24gYnV0dG9ucyAtLT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgPHA+WW91IGFyZSBub3cgZG9uZS48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtaG9yaXpvbnRhbC1zdGVwcGVyPlxuIl19