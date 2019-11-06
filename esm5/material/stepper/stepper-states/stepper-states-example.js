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
var _c0 = ["stepper", ""];
function StepperStatesExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperStatesExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperStatesExample_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
function StepperStatesExample_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "call_end");
    i0.ɵɵelementEnd();
} }
function StepperStatesExample_ng_template_47_Template(rf, ctx) { if (rf & 1) {
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
                }])], decls: 48, vars: 4, consts: [[3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["label", "Step 1", "state", "phone"], ["label", "Step 2", "state", "chat"], ["label", "Step 3"], ["matStepperIcon", "phone"], ["matStepperIcon", "chat"]], template: function StepperStatesExample_Template(rf, ctx) { if (rf & 1) {
            var _r31 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-horizontal-stepper", null, _c0);
            i0.ɵɵelementStart(2, "mat-step", 0);
            i0.ɵɵelementStart(3, "form", 1);
            i0.ɵɵtemplate(4, StepperStatesExample_ng_template_4_Template, 1, 0, "ng-template", 2);
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelement(6, "input", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵtext(9, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-step", 0);
            i0.ɵɵelementStart(11, "form", 1);
            i0.ɵɵtemplate(12, StepperStatesExample_ng_template_12_Template, 1, 0, "ng-template", 2);
            i0.ɵɵelementStart(13, "mat-form-field");
            i0.ɵɵelement(14, "input", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div");
            i0.ɵɵelementStart(16, "button", 6);
            i0.ɵɵtext(17, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 4);
            i0.ɵɵtext(19, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-step");
            i0.ɵɵtemplate(21, StepperStatesExample_ng_template_21_Template, 1, 0, "ng-template", 2);
            i0.ɵɵtext(22, " You are now done. ");
            i0.ɵɵelementStart(23, "div");
            i0.ɵɵelementStart(24, "button", 6);
            i0.ɵɵtext(25, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "button", 7);
            i0.ɵɵlistener("click", function StepperStatesExample_Template_button_click_26_listener($event) { i0.ɵɵrestoreView(_r31); var _r25 = i0.ɵɵreference(1); return _r25.reset(); });
            i0.ɵɵtext(27, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "mat-horizontal-stepper");
            i0.ɵɵelementStart(29, "mat-step", 8);
            i0.ɵɵelementStart(30, "p");
            i0.ɵɵtext(31, "Put down your phones.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div");
            i0.ɵɵelementStart(33, "button", 4);
            i0.ɵɵtext(34, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "mat-step", 9);
            i0.ɵɵelementStart(36, "p");
            i0.ɵɵtext(37, "Socialize with each other.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div");
            i0.ɵɵelementStart(39, "button", 6);
            i0.ɵɵtext(40, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "button", 4);
            i0.ɵɵtext(42, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "mat-step", 10);
            i0.ɵɵelementStart(44, "p");
            i0.ɵɵtext(45, "You're welcome.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(46, StepperStatesExample_ng_template_46_Template, 2, 0, "ng-template", 11);
            i0.ɵɵtemplate(47, StepperStatesExample_ng_template_47_Template, 2, 0, "ng-template", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [i2.MatHorizontalStepper, i2.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatStepLabel, i3.MatFormField, i4.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i5.MatButton, i2.MatStepperNext, i2.MatStepperPrevious, i2.MatStepperIcon, i6.MatIcon], styles: [""] });
    return StepperStatesExample;
}());
export { StepperStatesExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(StepperStatesExample, [{
        type: Component,
        args: [{
                selector: 'stepper-states-example',
                templateUrl: 'stepper-states-example.html',
                styleUrls: ['stepper-states-example.css'],
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                    }]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7OztJQ0M1QixrQ0FBa0I7OztJQVdsQixxQ0FBcUI7OztJQVd2QixvQkFBSTs7O0lBNkI5QixnQ0FBVTtJQUFBLHdCQUFRO0lBQUEsaUJBQVc7OztJQUc3QixnQ0FBVTtJQUFBLHFCQUFLO0lBQUEsaUJBQVc7O0FEckQ5Qjs7R0FFRztBQUNIO0lBWUUsOEJBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUVqRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsRUFBQywyQkFBMkIsRUFBRSxLQUFLLEVBQUM7eUJBQ2hGLENBQUM7aUJBQ0g7Ozs7Z0JBYk8sV0FBVzs7NEZBY04sb0JBQW9COzZEQUFwQixvQkFBb0IsNEVBSnBCLENBQUM7b0JBQ1YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxFQUFDLDJCQUEyQixFQUFFLEtBQUssRUFBQztpQkFDaEYsQ0FBQzs7WUNiSix5REFDRTtZQUFBLG1DQUNFO1lBQUEsK0JBQ0U7WUFBQSxxRkFBMEI7WUFDMUIsc0NBQ0U7WUFBQSwyQkFDRjtZQUFBLGlCQUFpQjtZQUNqQiwyQkFDRTtZQUFBLGlDQUFrQztZQUFBLG9CQUFJO1lBQUEsaUJBQVM7WUFDakQsaUJBQU07WUFDUixpQkFBTztZQUNULGlCQUFXO1lBQ1gsb0NBQ0U7WUFBQSxnQ0FDRTtZQUFBLHVGQUEwQjtZQUMxQix1Q0FDRTtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBQ2pCLDRCQUNFO1lBQUEsa0NBQXNDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNuRCxrQ0FBa0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ2pELGlCQUFNO1lBQ1IsaUJBQU87WUFDVCxpQkFBVztZQUNYLGlDQUNFO1lBQUEsdUZBQTBCO1lBQzFCLG9DQUNBO1lBQUEsNEJBQ0U7WUFBQSxrQ0FBc0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ25ELGtDQUE2QztZQUExQiw4SkFBUyxZQUFlLElBQUM7WUFBQyxzQkFBSztZQUFBLGlCQUFTO1lBQzdELGlCQUFNO1lBQ1IsaUJBQVc7WUFDYixpQkFBeUI7WUFFekIsK0NBQ0U7WUFBQSxvQ0FDRTtZQUFBLDBCQUFHO1lBQUEsc0NBQXFCO1lBQUEsaUJBQUk7WUFDNUIsNEJBQ0U7WUFBQSxrQ0FBa0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ2pELGlCQUFNO1lBQ1IsaUJBQVc7WUFDWCxvQ0FDRTtZQUFBLDBCQUFHO1lBQUEsMkNBQTBCO1lBQUEsaUJBQUk7WUFDakMsNEJBQ0U7WUFBQSxrQ0FBc0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ25ELGtDQUFrQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDakQsaUJBQU07WUFDUixpQkFBVztZQUNYLHFDQUNFO1lBQUEsMEJBQUc7WUFBQSxnQ0FBZTtZQUFBLGlCQUFJO1lBQ3hCLGlCQUFXO1lBR1gsd0ZBQ0U7WUFFRix3RkFDRTtZQUVKLGlCQUF5Qjs7WUExRGIsZUFBOEI7WUFBOUIsZ0RBQThCO1lBQ2hDLGVBQTRCO1lBQTVCLDhDQUE0QjtZQVUxQixlQUErQjtZQUEvQixpREFBK0I7WUFDakMsZUFBNkI7WUFBN0IsK0NBQTZCOzsrQkRidkM7Q0E2QkMsQUF0QkQsSUFzQkM7U0FkWSxvQkFBb0I7bUNBQXBCLG9CQUFvQjtjQVJoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsRUFBQywyQkFBMkIsRUFBRSxLQUFLLEVBQUM7cUJBQ2hGLENBQUM7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1NURVBQRVJfR0xPQkFMX09QVElPTlN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciB3aXRoIGN1c3RvbWl6ZWQgc3RhdGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItc3RhdGVzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItc3RhdGVzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLXN0YXRlcy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogU1RFUFBFUl9HTE9CQUxfT1BUSU9OUywgdXNlVmFsdWU6IHtkaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGU6IGZhbHNlfVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyU3RhdGVzRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpcnN0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHNlY29uZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpcnN0Rm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZmlyc3RDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5zZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBzZWNvbmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtaG9yaXpvbnRhbC1zdGVwcGVyICNzdGVwcGVyPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIG5hbWU8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgYWRkcmVzczwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIiBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIFlvdSBhcmUgbm93IGRvbmUuXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtaG9yaXpvbnRhbC1zdGVwcGVyPlxuXG48bWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiAgPG1hdC1zdGVwIGxhYmVsPVwiU3RlcCAxXCIgc3RhdGU9XCJwaG9uZVwiPlxuICAgIDxwPlB1dCBkb3duIHlvdXIgcGhvbmVzLjwvcD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIGxhYmVsPVwiU3RlcCAyXCIgc3RhdGU9XCJjaGF0XCI+XG4gICAgPHA+U29jaWFsaXplIHdpdGggZWFjaCBvdGhlci48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIGxhYmVsPVwiU3RlcCAzXCI+XG4gICAgPHA+WW91J3JlIHdlbGNvbWUuPC9wPlxuICA8L21hdC1zdGVwPlxuXG4gIDwhLS0gSWNvbiBvdmVycmlkZXMuIC0tPlxuICA8bmctdGVtcGxhdGUgbWF0U3RlcHBlckljb249XCJwaG9uZVwiPlxuICAgIDxtYXQtaWNvbj5jYWxsX2VuZDwvbWF0LWljb24+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSBtYXRTdGVwcGVySWNvbj1cImNoYXRcIj5cbiAgICA8bWF0LWljb24+Zm9ydW08L21hdC1pY29uPlxuICA8L25nLXRlbXBsYXRlPlxuPC9tYXQtaG9yaXpvbnRhbC1zdGVwcGVyPlxuIl19