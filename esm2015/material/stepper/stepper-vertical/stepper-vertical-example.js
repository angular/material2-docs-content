/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/stepper";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
function StepperVerticalExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperVerticalExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperVerticalExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * \@title Stepper vertical
 */
export class StepperVerticalExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
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
StepperVerticalExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-vertical-example',
                templateUrl: 'stepper-vertical-example.html',
                styleUrls: ['stepper-vertical-example.css']
            },] },
];
/** @nocollapse */
StepperVerticalExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ StepperVerticalExample.ɵfac = function StepperVerticalExample_Factory(t) { return new (t || StepperVerticalExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ StepperVerticalExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperVerticalExample, selectors: [["stepper-vertical-example"]], decls: 30, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperVerticalExample_Template(rf, ctx) { if (rf & 1) {
        const _r36 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_0_listener($event) { return ctx.isLinear = !ctx.isLinear; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-vertical-stepper", 1, 2);
        i0.ɵɵelementStart(4, "mat-step", 3);
        i0.ɵɵelementStart(5, "form", 4);
        i0.ɵɵtemplate(6, StepperVerticalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
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
        i0.ɵɵelementStart(12, "mat-step", 3);
        i0.ɵɵelementStart(13, "form", 4);
        i0.ɵɵtemplate(14, StepperVerticalExample_ng_template_14_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(15, "mat-form-field");
        i0.ɵɵelement(16, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div");
        i0.ɵɵelementStart(18, "button", 9);
        i0.ɵɵtext(19, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "button", 7);
        i0.ɵɵtext(21, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-step");
        i0.ɵɵtemplate(23, StepperVerticalExample_ng_template_23_Template, 1, 0, "ng-template", 5);
        i0.ɵɵtext(24, " You are now done. ");
        i0.ɵɵelementStart(25, "div");
        i0.ɵɵelementStart(26, "button", 9);
        i0.ɵɵtext(27, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "button", 10);
        i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_28_listener($event) { i0.ɵɵrestoreView(_r36); const _r32 = i0.ɵɵreference(3); return _r32.reset(); });
        i0.ɵɵtext(29, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("linear", ctx.isLinear);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2.MatButton, i3.MatVerticalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperVerticalExample, [{
        type: Component,
        args: [{
                selector: 'stepper-vertical-example',
                templateUrl: 'stepper-vertical-example.html',
                styleUrls: ['stepper-vertical-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
if (false) {
    /** @type {?} */
    StepperVerticalExample.prototype.isLinear;
    /** @type {?} */
    StepperVerticalExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperVerticalExample.prototype.secondFormGroup;
    /**
     * @type {?}
     * @private
     */
    StepperVerticalExample.prototype._formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci12ZXJ0aWNhbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLXZlcnRpY2FsL3N0ZXBwZXItdmVydGljYWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci12ZXJ0aWNhbC9zdGVwcGVyLXZlcnRpY2FsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0tsQyxrQ0FBa0I7OztJQVdsQixxQ0FBcUI7OztJQVd2QixvQkFBSTs7Ozs7QURqQmxDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFLakMsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFKN0MsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUkrQixDQUFDOzs7O0lBRWpELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDN0MsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7OztZQVRPLFdBQVc7OzRGQVVOLHNCQUFzQjsyREFBdEIsc0JBQXNCOztRQ1huQyxpQ0FDRTtRQUR3Qix5SUFBOEI7UUFDdEQsWUFDRjtRQUFBLGlCQUFTO1FBQ1Qsa0RBQ0U7UUFBQSxtQ0FDRTtRQUFBLCtCQUNFO1FBQUEsdUZBQTBCO1FBQzFCLHNDQUNFO1FBQUEsMkJBQ0Y7UUFBQSxpQkFBaUI7UUFDakIsMkJBQ0U7UUFBQSxrQ0FBa0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2pELGlCQUFNO1FBQ1IsaUJBQU87UUFDVCxpQkFBVztRQUNYLG9DQUNFO1FBQUEsZ0NBQ0U7UUFBQSx5RkFBMEI7UUFDMUIsdUNBQ0U7UUFBQSw0QkFDRjtRQUFBLGlCQUFpQjtRQUNqQiw0QkFDRTtRQUFBLGtDQUFzQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDbkQsa0NBQWtDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNqRCxpQkFBTTtRQUNSLGlCQUFPO1FBQ1QsaUJBQVc7UUFDWCxpQ0FDRTtRQUFBLHlGQUEwQjtRQUMxQixvQ0FDQTtRQUFBLDRCQUNFO1FBQUEsa0NBQXNDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNuRCxtQ0FBNkM7UUFBMUIsa0tBQVMsWUFBZSxJQUFDO1FBQUMsc0JBQUs7UUFBQSxpQkFBUztRQUM3RCxpQkFBTTtRQUNSLGlCQUFXO1FBQ2IsaUJBQXVCOztRQWxDckIsZUFDRjtRQURFLDhGQUNGO1FBQ3NCLGVBQW1CO1FBQW5CLHFDQUFtQjtRQUM3QixlQUE4QjtRQUE5QixnREFBOEI7UUFDaEMsZUFBNEI7UUFBNUIsOENBQTRCO1FBVTFCLGVBQStCO1FBQS9CLGlEQUErQjtRQUNqQyxlQUE2QjtRQUE3QiwrQ0FBNkI7O2tEREwxQixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOzs7O0lBRUMsMENBQWlCOztJQUNqQixnREFBMEI7O0lBQzFCLGlEQUEyQjs7Ozs7SUFFZiw4Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIHZlcnRpY2FsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItdmVydGljYWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci12ZXJ0aWNhbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci12ZXJ0aWNhbC1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJWZXJ0aWNhbEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0xpbmVhciA9IGZhbHNlO1xuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuc2Vjb25kRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG59XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJpc0xpbmVhciA9ICFpc0xpbmVhclwiIGlkPVwidG9nZ2xlLWxpbmVhclwiPlxuICB7eyFpc0xpbmVhciA/ICdFbmFibGUgbGluZWFyIG1vZGUnIDogJ0Rpc2FibGUgbGluZWFyIG1vZGUnfX1cbjwvYnV0dG9uPlxuPG1hdC12ZXJ0aWNhbC1zdGVwcGVyIFtsaW5lYXJdPVwiaXNMaW5lYXJcIiAjc3RlcHBlcj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lLCBGaXJzdCBuYW1lXCIgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIGFkZHJlc3M8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5Eb25lPC9uZy10ZW1wbGF0ZT5cbiAgICBZb3UgYXJlIG5vdyBkb25lLlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LXZlcnRpY2FsLXN0ZXBwZXI+XG4iXX0=