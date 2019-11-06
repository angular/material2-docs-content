/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
const _c0 = ["stepper", ""];
function StepperErrorsExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperErrorsExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperErrorsExample_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * \@title Stepper that displays errors in the steps
 */
export class StepperErrorsExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperErrorsExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-errors-example',
                templateUrl: 'stepper-errors-example.html',
                styleUrls: ['stepper-errors-example.css'],
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                    }]
            },] },
];
/** @nocollapse */
StepperErrorsExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ StepperErrorsExample.ɵfac = function StepperErrorsExample_Factory(t) { return new (t || StepperErrorsExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ StepperErrorsExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperErrorsExample, selectors: [["stepper-errors-example"]], features: [i0.ɵɵProvidersFeature([{
                provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
            }])], decls: 28, vars: 4, consts: [["linear", ""], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperErrorsExample_Template(rf, ctx) { if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-horizontal-stepper", 0, _c0);
        i0.ɵɵelementStart(2, "mat-step", 1);
        i0.ɵɵelementStart(3, "form", 2);
        i0.ɵɵtemplate(4, StepperErrorsExample_ng_template_4_Template, 1, 0, "ng-template", 3);
        i0.ɵɵelementStart(5, "mat-form-field");
        i0.ɵɵelement(6, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div");
        i0.ɵɵelementStart(8, "button", 5);
        i0.ɵɵtext(9, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-step", 6);
        i0.ɵɵelementStart(11, "form", 2);
        i0.ɵɵtemplate(12, StepperErrorsExample_ng_template_12_Template, 1, 0, "ng-template", 3);
        i0.ɵɵelementStart(13, "mat-form-field");
        i0.ɵɵelement(14, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div");
        i0.ɵɵelementStart(16, "button", 8);
        i0.ɵɵtext(17, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 5);
        i0.ɵɵtext(19, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-step");
        i0.ɵɵtemplate(21, StepperErrorsExample_ng_template_21_Template, 1, 0, "ng-template", 3);
        i0.ɵɵtext(22, " You are now done. ");
        i0.ɵɵelementStart(23, "div");
        i0.ɵɵelementStart(24, "button", 8);
        i0.ɵɵtext(25, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "button", 9);
        i0.ɵɵlistener("click", function StepperErrorsExample_Template_button_click_26_listener($event) { i0.ɵɵrestoreView(_r9); const _r5 = i0.ɵɵreference(1); return _r5.reset(); });
        i0.ɵɵtext(27, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
    } }, directives: [i2.MatHorizontalStepper, i2.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatStepLabel, i3.MatFormField, i4.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i5.MatButton, i2.MatStepperNext, i2.MatStepperPrevious], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(StepperErrorsExample, [{
        type: Component,
        args: [{
                selector: 'stepper-errors-example',
                templateUrl: 'stepper-errors-example.html',
                styleUrls: ['stepper-errors-example.css'],
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                    }]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
if (false) {
    /** @type {?} */
    StepperErrorsExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperErrorsExample.prototype.secondFormGroup;
    /**
     * @type {?}
     * @private
     */
    StepperErrorsExample.prototype._formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1lcnJvcnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1lcnJvcnMvc3RlcHBlci1lcnJvcnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1lcnJvcnMvc3RlcHBlci1lcnJvcnMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7OztJQ0M1QixrQ0FBa0I7OztJQVdsQixxQ0FBcUI7OztJQVd2QixvQkFBSTs7Ozs7QURWbEMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUkvQixZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7Ozs7SUFFakQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDNUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM3QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQztxQkFDN0QsQ0FBQzthQUNIOzs7O1lBYk8sV0FBVzs7d0ZBY04sb0JBQW9CO3lEQUFwQixvQkFBb0IsNEVBSnBCLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUM7YUFDN0QsQ0FBQzs7UUNiSixzREFDRTtRQUFBLG1DQUNFO1FBQUEsK0JBQ0U7UUFBQSxxRkFBMEI7UUFDMUIsc0NBQ0U7UUFBQSwyQkFDRjtRQUFBLGlCQUFpQjtRQUNqQiwyQkFDRTtRQUFBLGlDQUFrQztRQUFBLG9CQUFJO1FBQUEsaUJBQVM7UUFDakQsaUJBQU07UUFDUixpQkFBTztRQUNULGlCQUFXO1FBQ1gsb0NBQ0U7UUFBQSxnQ0FDRTtRQUFBLHVGQUEwQjtRQUMxQix1Q0FDRTtRQUFBLDRCQUNGO1FBQUEsaUJBQWlCO1FBQ2pCLDRCQUNFO1FBQUEsa0NBQXNDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNuRCxrQ0FBa0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2pELGlCQUFNO1FBQ1IsaUJBQU87UUFDVCxpQkFBVztRQUNYLGlDQUNFO1FBQUEsdUZBQTBCO1FBQzFCLG9DQUNBO1FBQUEsNEJBQ0U7UUFBQSxrQ0FBc0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ25ELGtDQUE2QztRQUExQiw4SkFBUyxXQUFlLElBQUM7UUFBQyxzQkFBSztRQUFBLGlCQUFTO1FBQzdELGlCQUFNO1FBQ1IsaUJBQVc7UUFDYixpQkFBeUI7O1FBL0JiLGVBQThCO1FBQTlCLGdEQUE4QjtRQUNoQyxlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFVMUIsZUFBK0I7UUFBL0IsaURBQStCO1FBQ2pDLGVBQTZCO1FBQTdCLCtDQUE2Qjs7bUNERTFCLG9CQUFvQjtjQVJoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDO3FCQUM3RCxDQUFDO2FBQ0g7Ozs7SUFFQyw4Q0FBMEI7O0lBQzFCLCtDQUEyQjs7Ozs7SUFFZiw0Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTVEVQUEVSX0dMT0JBTF9PUFRJT05TfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgdGhhdCBkaXNwbGF5cyBlcnJvcnMgaW4gdGhlIHN0ZXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItZXJyb3JzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItZXJyb3JzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWVycm9ycy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogU1RFUFBFUl9HTE9CQUxfT1BUSU9OUywgdXNlVmFsdWU6IHtzaG93RXJyb3I6IHRydWV9XG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJFcnJvcnNFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmlyc3RGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2Vjb25kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLnNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlY29uZEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxufVxuIiwiPG1hdC1ob3Jpem9udGFsLXN0ZXBwZXIgbGluZWFyICNzdGVwcGVyPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cImZpcnN0Rm9ybUdyb3VwXCIgZXJyb3JNZXNzYWdlPVwiTmFtZSBpcyByZXF1aXJlZC5cIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCIgZXJyb3JNZXNzYWdlPVwiQWRkcmVzcyBpcyByZXF1aXJlZC5cIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIGFkZHJlc3M8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5Eb25lPC9uZy10ZW1wbGF0ZT5cbiAgICBZb3UgYXJlIG5vdyBkb25lLlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiJdfQ==