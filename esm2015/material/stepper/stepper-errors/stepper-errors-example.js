import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
function StepperErrorsExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperErrorsExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperErrorsExample_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper that displays errors in the steps
 */
let StepperErrorsExample = /** @class */ (() => {
    class StepperErrorsExample {
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
    StepperErrorsExample.ɵfac = function StepperErrorsExample_Factory(t) { return new (t || StepperErrorsExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperErrorsExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperErrorsExample, selectors: [["stepper-errors-example"]], features: [i0.ɵɵProvidersFeature([{
                    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                }])], decls: 37, vars: 4, consts: [["stepper", ""], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Ex. 1 Main St, New York, NY", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperErrorsExample_Template(rf, ctx) { if (rf & 1) {
            const _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
            i0.ɵɵelementStart(2, "mat-step", 1);
            i0.ɵɵelementStart(3, "form", 2);
            i0.ɵɵtemplate(4, StepperErrorsExample_ng_template_4_Template, 1, 0, "ng-template", 3);
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div");
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "Go to a different step to see the error state");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 5);
            i0.ɵɵtext(13, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-step", 6);
            i0.ɵɵelementStart(15, "form", 2);
            i0.ɵɵtemplate(16, StepperErrorsExample_ng_template_16_Template, 1, 0, "ng-template", 3);
            i0.ɵɵelementStart(17, "mat-form-field");
            i0.ɵɵelementStart(18, "mat-label");
            i0.ɵɵtext(19, "Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div");
            i0.ɵɵelementStart(22, "p");
            i0.ɵɵtext(23, "Go to a different step to see the error state");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 8);
            i0.ɵɵtext(25, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "button", 5);
            i0.ɵɵtext(27, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "mat-step");
            i0.ɵɵtemplate(29, StepperErrorsExample_ng_template_29_Template, 1, 0, "ng-template", 3);
            i0.ɵɵelementStart(30, "p");
            i0.ɵɵtext(31, "You are now done.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div");
            i0.ɵɵelementStart(33, "button", 8);
            i0.ɵɵtext(34, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "button", 9);
            i0.ɵɵlistener("click", function StepperErrorsExample_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(1); return _r0.reset(); });
            i0.ɵɵtext(36, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [i2.MatHorizontalStepper, i2.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatStepLabel, i3.MatFormField, i3.MatLabel, i4.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i5.MatButton, i2.MatStepperNext, i2.MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    return StepperErrorsExample;
})();
export { StepperErrorsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperErrorsExample, [{
        type: Component,
        args: [{
                selector: 'stepper-errors-example',
                templateUrl: 'stepper-errors-example.html',
                styleUrls: ['stepper-errors-example.css'],
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                    }]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1lcnJvcnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1lcnJvcnMvc3RlcHBlci1lcnJvcnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1lcnJvcnMvc3RlcHBlci1lcnJvcnMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7SUNDNUIsa0NBQWtCOzs7SUFhbEIscUNBQXFCOzs7SUFjdkIsb0JBQUk7O0FEMUJsQzs7R0FFRztBQUNIO0lBQUEsTUFRYSxvQkFBb0I7UUFJL0IsWUFBb0IsWUFBeUI7WUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBRyxDQUFDO1FBRWpELFFBQVE7WUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQzthQUNyQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQzthQUN0QyxDQUFDLENBQUM7UUFDTCxDQUFDOzs0RkFiVSxvQkFBb0I7NkRBQXBCLG9CQUFvQiw0RUFKcEIsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQztpQkFDN0QsQ0FBQzs7WUNiSix1REFDRTtZQUFBLG1DQUNFO1lBQUEsK0JBQ0U7WUFBQSxxRkFBMEI7WUFDMUIsc0NBQ0U7WUFBQSxpQ0FBVztZQUFBLG9CQUFJO1lBQUEsaUJBQVk7WUFDM0IsMkJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIsMkJBQ0U7WUFBQSwwQkFBRztZQUFBLDhEQUE2QztZQUFBLGlCQUFJO1lBQ3BELGtDQUFrQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDakQsaUJBQU07WUFDUixpQkFBTztZQUNULGlCQUFXO1lBQ1gsb0NBQ0U7WUFBQSxnQ0FDRTtZQUFBLHVGQUEwQjtZQUMxQix1Q0FDRTtZQUFBLGtDQUFXO1lBQUEsd0JBQU87WUFBQSxpQkFBWTtZQUM5Qiw0QkFFRjtZQUFBLGlCQUFpQjtZQUNqQiw0QkFDRTtZQUFBLDBCQUFHO1lBQUEsOERBQTZDO1lBQUEsaUJBQUk7WUFDcEQsa0NBQXNDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNuRCxrQ0FBa0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ2pELGlCQUFNO1lBQ1IsaUJBQU87WUFDVCxpQkFBVztZQUNYLGlDQUNFO1lBQUEsdUZBQTBCO1lBQzFCLDBCQUFHO1lBQUEsa0NBQWlCO1lBQUEsaUJBQUk7WUFDeEIsNEJBQ0U7WUFBQSxrQ0FBc0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ25ELGtDQUE2QztZQUExQix3SkFBUyxXQUFlLElBQUM7WUFBQyxzQkFBSztZQUFBLGlCQUFTO1lBQzdELGlCQUFNO1lBQ1IsaUJBQVc7WUFDYixpQkFBeUI7O1lBcENiLGVBQThCO1lBQTlCLGdEQUE4QjtZQUNoQyxlQUE0QjtZQUE1Qiw4Q0FBNEI7WUFZMUIsZ0JBQStCO1lBQS9CLGlEQUErQjtZQUNqQyxlQUE2QjtZQUE3QiwrQ0FBNkI7OytCRGZ2QztLQTZCQztTQWRZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBUmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUM7cUJBQzdELENBQUM7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1NURVBQRVJfR0xPQkFMX09QVElPTlN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciB0aGF0IGRpc3BsYXlzIGVycm9ycyBpbiB0aGUgc3RlcHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RlcHBlci1lcnJvcnMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1lcnJvcnMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXItZXJyb3JzLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBTVEVQUEVSX0dMT0JBTF9PUFRJT05TLCB1c2VWYWx1ZToge3Nob3dFcnJvcjogdHJ1ZX1cbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckVycm9yc0V4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuc2Vjb25kRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG59XG4iLCI8bWF0LWhvcml6b250YWwtc3RlcHBlciAjc3RlcHBlcj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiIGVycm9yTWVzc2FnZT1cIk5hbWUgaXMgcmVxdWlyZWQuXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIG5hbWU8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPk5hbWU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lLCBGaXJzdCBuYW1lXCIgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+R28gdG8gYSBkaWZmZXJlbnQgc3RlcCB0byBzZWUgdGhlIGVycm9yIHN0YXRlPC9wPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiIGVycm9yTWVzc2FnZT1cIkFkZHJlc3MgaXMgcmVxdWlyZWQuXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBhZGRyZXNzPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiAxIE1haW4gU3QsIE5ldyBZb3JrLCBOWVwiIGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIlxuICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+R28gdG8gYSBkaWZmZXJlbnQgc3RlcCB0byBzZWUgdGhlIGVycm9yIHN0YXRlPC9wPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgPHA+WW91IGFyZSBub3cgZG9uZS48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtaG9yaXpvbnRhbC1zdGVwcGVyPlxuIl19