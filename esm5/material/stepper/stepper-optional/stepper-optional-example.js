import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/stepper";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
function StepperOptionalExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperOptionalExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperOptionalExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper with optional steps
 */
var StepperOptionalExample = /** @class */ (function () {
    function StepperOptionalExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
    }
    StepperOptionalExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
    };
    StepperOptionalExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-optional-example',
                    templateUrl: 'stepper-optional-example.html',
                    styleUrls: ['stepper-optional-example.css']
                },] },
    ];
    /** @nocollapse */
    StepperOptionalExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperOptionalExample.ɵfac = function StepperOptionalExample_Factory(t) { return new (t || StepperOptionalExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperOptionalExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperOptionalExample, selectors: [["stepper-optional-example"]], decls: 30, vars: 6, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], [3, "stepControl", "optional"], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOptionalExample_Template(rf, ctx) { if (rf & 1) {
            var _r19 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_0_listener($event) { return ctx.isOptional = !ctx.isOptional; });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
            i0.ɵɵelementStart(4, "mat-step", 3);
            i0.ɵɵelementStart(5, "form", 4);
            i0.ɵɵtemplate(6, StepperOptionalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelement(8, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div");
            i0.ɵɵelementStart(10, "button", 7);
            i0.ɵɵtext(11, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-step", 8);
            i0.ɵɵelementStart(13, "form", 4);
            i0.ɵɵtemplate(14, StepperOptionalExample_ng_template_14_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(15, "mat-form-field");
            i0.ɵɵelement(16, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div");
            i0.ɵɵelementStart(18, "button", 10);
            i0.ɵɵtext(19, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 7);
            i0.ɵɵtext(21, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "mat-step");
            i0.ɵɵtemplate(23, StepperOptionalExample_ng_template_23_Template, 1, 0, "ng-template", 5);
            i0.ɵɵtext(24, " You are now done. ");
            i0.ɵɵelementStart(25, "div");
            i0.ɵɵelementStart(26, "button", 10);
            i0.ɵɵtext(27, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 11);
            i0.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_28_listener($event) { i0.ɵɵrestoreView(_r19); var _r15 = i0.ɵɵreference(3); return _r15.reset(); });
            i0.ɵɵtext(29, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", !ctx.isOptional ? "Enable optional steps" : "Disable optional steps", "\n");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("optional", ctx.isOptional);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
    return StepperOptionalExample;
}());
export { StepperOptionalExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperOptionalExample, [{
        type: Component,
        args: [{
                selector: 'stepper-optional-example',
                templateUrl: 'stepper-optional-example.html',
                styleUrls: ['stepper-optional-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1vcHRpb25hbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLW9wdGlvbmFsL3N0ZXBwZXItb3B0aW9uYWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1vcHRpb25hbC9zdGVwcGVyLW9wdGlvbmFsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0lDTWxDLGtDQUFrQjs7O0lBV2xCLHFDQUFxQjs7O0lBV3ZCLG9CQUFJOztBRDFCbEM7O0dBRUc7QUFDSDtJQVVFLGdDQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUY3QyxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRTZCLENBQUM7SUFFakQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDNUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM3QyxVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzVDOzs7O2dCQVRPLFdBQVc7O2dHQVVOLHNCQUFzQjsrREFBdEIsc0JBQXNCOztZQ1huQyxpQ0FDRTtZQUR3Qiw2SUFBa0M7WUFDMUQsWUFDRjtZQUFBLGlCQUFTO1lBRVQsb0RBQ0U7WUFBQSxtQ0FDRTtZQUFBLCtCQUNFO1lBQUEsdUZBQTBCO1lBQzFCLHNDQUNFO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIsMkJBQ0U7WUFBQSxrQ0FBa0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ2pELGlCQUFNO1lBQ1IsaUJBQU87WUFDVCxpQkFBVztZQUNYLG9DQUNFO1lBQUEsZ0NBQ0U7WUFBQSx5RkFBMEI7WUFDMUIsdUNBQ0U7WUFBQSw0QkFDRjtZQUFBLGlCQUFpQjtZQUNqQiw0QkFDRTtZQUFBLG1DQUFzQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDbkQsa0NBQWtDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNqRCxpQkFBTTtZQUNSLGlCQUFPO1lBQ1QsaUJBQVc7WUFDWCxpQ0FDRTtZQUFBLHlGQUEwQjtZQUMxQixvQ0FDQTtZQUFBLDRCQUNFO1lBQUEsbUNBQXNDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNuRCxtQ0FBNkM7WUFBMUIsZ0tBQVMsWUFBZSxJQUFDO1lBQUMsc0JBQUs7WUFBQSxpQkFBUztZQUM3RCxpQkFBTTtZQUNSLGlCQUFXO1lBQ2IsaUJBQXlCOztZQW5DdkIsZUFDRjtZQURFLHNHQUNGO1lBR1ksZUFBOEI7WUFBOUIsZ0RBQThCO1lBQ2hDLGVBQTRCO1lBQTVCLDhDQUE0QjtZQVUxQixlQUErQjtZQUEvQixpREFBK0IsNEJBQUE7WUFDakMsZUFBNkI7WUFBN0IsK0NBQTZCOztpQ0RqQnZDO0NBMEJDLEFBcEJELElBb0JDO1NBZlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciB3aXRoIG9wdGlvbmFsIHN0ZXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItb3B0aW9uYWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1vcHRpb25hbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci1vcHRpb25hbC1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJPcHRpb25hbEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgaXNPcHRpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpcnN0Rm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZmlyc3RDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5zZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBzZWNvbmRDdHJsOiAnJ1xuICAgIH0pO1xuICB9XG59XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJpc09wdGlvbmFsID0gIWlzT3B0aW9uYWxcIj5cbiAge3shaXNPcHRpb25hbCA/ICdFbmFibGUgb3B0aW9uYWwgc3RlcHMnIDogJ0Rpc2FibGUgb3B0aW9uYWwgc3RlcHMnfX1cbjwvYnV0dG9uPlxuXG48bWF0LWhvcml6b250YWwtc3RlcHBlciBsaW5lYXIgI3N0ZXBwZXI+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCIgW29wdGlvbmFsXT1cImlzT3B0aW9uYWxcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIGFkZHJlc3M8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5Eb25lPC9uZy10ZW1wbGF0ZT5cbiAgICBZb3UgYXJlIG5vdyBkb25lLlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiJdfQ==