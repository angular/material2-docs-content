import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
function StepperStatesExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperStatesExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperStatesExample_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
function StepperStatesExample_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "call_end");
    i0.ɵɵelementEnd();
} }
function StepperStatesExample_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "forum");
    i0.ɵɵelementEnd();
} }
/**
 * @title Stepper with customized states
 */
var StepperStatesExample = /** @class */ (function () {
    function StepperStatesExample(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    StepperStatesExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperStatesExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-states-example',
                    templateUrl: 'stepper-states-example.html',
                    styleUrls: ['stepper-states-example.css'],
                    providers: [{
                            provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                        }]
                },] },
    ];
    /** @nocollapse */
    StepperStatesExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperStatesExample.ɵfac = function StepperStatesExample_Factory(t) { return new (t || StepperStatesExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperStatesExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperStatesExample, selectors: [["stepper-states-example"]], features: [i0.ɵɵProvidersFeature([{
                    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                }])], decls: 53, vars: 4, consts: [["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["label", "Step 1", "state", "phone"], ["label", "Step 2", "state", "chat"], ["label", "Step 3"], ["matStepperIcon", "phone"], ["matStepperIcon", "chat"]], template: function StepperStatesExample_Template(rf, ctx) { if (rf & 1) {
            var _r31 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
            i0.ɵɵelementStart(2, "mat-step", 1);
            i0.ɵɵelementStart(3, "form", 2);
            i0.ɵɵtemplate(4, StepperStatesExample_ng_template_4_Template, 1, 0, "ng-template", 3);
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div");
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵtext(11, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-step", 1);
            i0.ɵɵelementStart(13, "form", 2);
            i0.ɵɵtemplate(14, StepperStatesExample_ng_template_14_Template, 1, 0, "ng-template", 3);
            i0.ɵɵelementStart(15, "mat-form-field");
            i0.ɵɵelementStart(16, "mat-label");
            i0.ɵɵtext(17, "Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div");
            i0.ɵɵelementStart(20, "button", 7);
            i0.ɵɵtext(21, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 5);
            i0.ɵɵtext(23, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "mat-step");
            i0.ɵɵtemplate(25, StepperStatesExample_ng_template_25_Template, 1, 0, "ng-template", 3);
            i0.ɵɵelementStart(26, "p");
            i0.ɵɵtext(27, "You are now done.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div");
            i0.ɵɵelementStart(29, "button", 7);
            i0.ɵɵtext(30, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "button", 8);
            i0.ɵɵlistener("click", function StepperStatesExample_Template_button_click_31_listener($event) { i0.ɵɵrestoreView(_r31); var _r25 = i0.ɵɵreference(1); return _r25.reset(); });
            i0.ɵɵtext(32, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "mat-horizontal-stepper");
            i0.ɵɵelementStart(34, "mat-step", 9);
            i0.ɵɵelementStart(35, "p");
            i0.ɵɵtext(36, "Put down your phones.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div");
            i0.ɵɵelementStart(38, "button", 5);
            i0.ɵɵtext(39, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "mat-step", 10);
            i0.ɵɵelementStart(41, "p");
            i0.ɵɵtext(42, "Socialize with each other.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div");
            i0.ɵɵelementStart(44, "button", 7);
            i0.ɵɵtext(45, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "button", 5);
            i0.ɵɵtext(47, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "mat-step", 11);
            i0.ɵɵelementStart(49, "p");
            i0.ɵɵtext(50, "You're welcome.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(51, StepperStatesExample_ng_template_51_Template, 2, 0, "ng-template", 12);
            i0.ɵɵtemplate(52, StepperStatesExample_ng_template_52_Template, 2, 0, "ng-template", 13);
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
        } }, directives: [i2.MatHorizontalStepper, i2.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatStepLabel, i3.MatFormField, i3.MatLabel, i4.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i5.MatButton, i2.MatStepperNext, i2.MatStepperPrevious, i2.MatStepperIcon, i6.MatIcon], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    return StepperStatesExample;
}());
export { StepperStatesExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperStatesExample, [{
        type: Component,
        args: [{
                selector: 'stepper-states-example',
                templateUrl: 'stepper-states-example.html',
                styleUrls: ['stepper-states-example.css'],
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                    }]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7O0lDQzVCLGtDQUFrQjs7O0lBWWxCLHFDQUFxQjs7O0lBYXZCLG9CQUFJOzs7SUE2QjlCLGdDQUFVO0lBQUEsd0JBQVE7SUFBQSxpQkFBVzs7O0lBRzdCLGdDQUFVO0lBQUEscUJBQUs7SUFBQSxpQkFBVzs7QUR4RDlCOztHQUVHO0FBQ0g7SUFZRSw4QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRWpELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDN0MsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDekMsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxFQUFDLDJCQUEyQixFQUFFLEtBQUssRUFBQzt5QkFDaEYsQ0FBQztpQkFDSDs7OztnQkFiTyxXQUFXOzs0RkFjTixvQkFBb0I7NkRBQXBCLG9CQUFvQiw0RUFKcEIsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQUMsMkJBQTJCLEVBQUUsS0FBSyxFQUFDO2lCQUNoRixDQUFDOztZQ2JKLHVEQUNFO1lBQUEsbUNBQ0U7WUFBQSwrQkFDRTtZQUFBLHFGQUEwQjtZQUMxQixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsb0JBQUk7WUFBQSxpQkFBWTtZQUMzQiwyQkFDRjtZQUFBLGlCQUFpQjtZQUNqQiwyQkFDRTtZQUFBLGtDQUFrQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDakQsaUJBQU07WUFDUixpQkFBTztZQUNULGlCQUFXO1lBQ1gsb0NBQ0U7WUFBQSxnQ0FDRTtZQUFBLHVGQUEwQjtZQUMxQix1Q0FDRTtZQUFBLGtDQUFXO1lBQUEsd0JBQU87WUFBQSxpQkFBWTtZQUM5Qiw0QkFFRjtZQUFBLGlCQUFpQjtZQUNqQiw0QkFDRTtZQUFBLGtDQUFzQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDbkQsa0NBQWtDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNqRCxpQkFBTTtZQUNSLGlCQUFPO1lBQ1QsaUJBQVc7WUFDWCxpQ0FDRTtZQUFBLHVGQUEwQjtZQUMxQiwwQkFBRztZQUFBLGtDQUFpQjtZQUFBLGlCQUFJO1lBQ3hCLDRCQUNFO1lBQUEsa0NBQXNDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNuRCxrQ0FBNkM7WUFBMUIsOEpBQVMsWUFBZSxJQUFDO1lBQUMsc0JBQUs7WUFBQSxpQkFBUztZQUM3RCxpQkFBTTtZQUNSLGlCQUFXO1lBQ2IsaUJBQXlCO1lBRXpCLCtDQUNFO1lBQUEsb0NBQ0U7WUFBQSwwQkFBRztZQUFBLHNDQUFxQjtZQUFBLGlCQUFJO1lBQzVCLDRCQUNFO1lBQUEsa0NBQWtDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNqRCxpQkFBTTtZQUNSLGlCQUFXO1lBQ1gscUNBQ0U7WUFBQSwwQkFBRztZQUFBLDJDQUEwQjtZQUFBLGlCQUFJO1lBQ2pDLDRCQUNFO1lBQUEsa0NBQXNDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNuRCxrQ0FBa0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ2pELGlCQUFNO1lBQ1IsaUJBQVc7WUFDWCxxQ0FDRTtZQUFBLDBCQUFHO1lBQUEsZ0NBQWU7WUFBQSxpQkFBSTtZQUN4QixpQkFBVztZQUdYLHdGQUNFO1lBRUYsd0ZBQ0U7WUFFSixpQkFBeUI7O1lBN0RiLGVBQThCO1lBQTlCLGdEQUE4QjtZQUNoQyxlQUE0QjtZQUE1Qiw4Q0FBNEI7WUFXMUIsZUFBK0I7WUFBL0IsaURBQStCO1lBQ2pDLGVBQTZCO1lBQTdCLCtDQUE2Qjs7K0JEZHZDO0NBNkJDLEFBdEJELElBc0JDO1NBZFksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FSaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQUMsMkJBQTJCLEVBQUUsS0FBSyxFQUFDO3FCQUNoRixDQUFDO2FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTVEVQUEVSX0dMT0JBTF9PUFRJT05TfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgd2l0aCBjdXN0b21pemVkIHN0YXRlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLXN0YXRlcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLXN0YXRlcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFNURVBQRVJfR0xPQkFMX09QVElPTlMsIHVzZVZhbHVlOiB7ZGlzcGxheURlZmF1bHRJbmRpY2F0b3JUeXBlOiBmYWxzZX1cbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlclN0YXRlc0V4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuc2Vjb25kRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG59XG4iLCI8bWF0LWhvcml6b250YWwtc3RlcHBlciAjc3RlcHBlcj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5OYW1lPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBhZGRyZXNzPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCIgcGxhY2Vob2xkZXI9XCJFeC4gMSBNYWluIFN0LCBOZXcgWW9yaywgTllcIlxuICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIDxwPllvdSBhcmUgbm93IGRvbmUuPC9wPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cblxuPG1hdC1ob3Jpem9udGFsLXN0ZXBwZXI+XG4gIDxtYXQtc3RlcCBsYWJlbD1cIlN0ZXAgMVwiIHN0YXRlPVwicGhvbmVcIj5cbiAgICA8cD5QdXQgZG93biB5b3VyIHBob25lcy48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBsYWJlbD1cIlN0ZXAgMlwiIHN0YXRlPVwiY2hhdFwiPlxuICAgIDxwPlNvY2lhbGl6ZSB3aXRoIGVhY2ggb3RoZXIuPC9wPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBsYWJlbD1cIlN0ZXAgM1wiPlxuICAgIDxwPllvdSdyZSB3ZWxjb21lLjwvcD5cbiAgPC9tYXQtc3RlcD5cblxuICA8IS0tIEljb24gb3ZlcnJpZGVzLiAtLT5cbiAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBwZXJJY29uPVwicGhvbmVcIj5cbiAgICA8bWF0LWljb24+Y2FsbF9lbmQ8L21hdC1pY29uPlxuICA8L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgbWF0U3RlcHBlckljb249XCJjaGF0XCI+XG4gICAgPG1hdC1pY29uPmZvcnVtPC9tYXQtaWNvbj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiJdfQ==