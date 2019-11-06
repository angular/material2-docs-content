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
const _c0 = ["stepper", ""];
function StepperEditableExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperEditableExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperEditableExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * \@title Stepper with editable steps
 */
export class StepperEditableExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
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
StepperEditableExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-editable-example',
                templateUrl: 'stepper-editable-example.html',
                styleUrls: ['stepper-editable-example.css']
            },] },
];
/** @nocollapse */
StepperEditableExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ StepperEditableExample.ɵfac = function StepperEditableExample_Factory(t) { return new (t || StepperEditableExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ StepperEditableExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperEditableExample, selectors: [["stepper-editable-example"]], decls: 30, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperEditableExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_0_listener($event) { return ctx.isEditable = !ctx.isEditable; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, _c0);
        i0.ɵɵelementStart(4, "mat-step", 2);
        i0.ɵɵelementStart(5, "form", 3);
        i0.ɵɵtemplate(6, StepperEditableExample_ng_template_6_Template, 1, 0, "ng-template", 4);
        i0.ɵɵelementStart(7, "mat-form-field");
        i0.ɵɵelement(8, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵtext(11, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-step", 2);
        i0.ɵɵelementStart(13, "form", 3);
        i0.ɵɵtemplate(14, StepperEditableExample_ng_template_14_Template, 1, 0, "ng-template", 4);
        i0.ɵɵelementStart(15, "mat-form-field");
        i0.ɵɵelement(16, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div");
        i0.ɵɵelementStart(18, "button", 8);
        i0.ɵɵtext(19, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "button", 6);
        i0.ɵɵtext(21, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-step");
        i0.ɵɵtemplate(23, StepperEditableExample_ng_template_23_Template, 1, 0, "ng-template", 4);
        i0.ɵɵtext(24, " You are now done. ");
        i0.ɵɵelementStart(25, "div");
        i0.ɵɵelementStart(26, "button", 8);
        i0.ɵɵtext(27, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "button", 9);
        i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_28_listener($event) { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(3); return _r0.reset(); });
        i0.ɵɵtext(29, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", !ctx.isEditable ? "Enable edit mode" : "Disable edit mode", "\n");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup)("editable", ctx.isEditable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(StepperEditableExample, [{
        type: Component,
        args: [{
                selector: 'stepper-editable-example',
                templateUrl: 'stepper-editable-example.html',
                styleUrls: ['stepper-editable-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
if (false) {
    /** @type {?} */
    StepperEditableExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperEditableExample.prototype.secondFormGroup;
    /** @type {?} */
    StepperEditableExample.prototype.isEditable;
    /**
     * @type {?}
     * @private
     */
    StepperEditableExample.prototype._formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1lZGl0YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLWVkaXRhYmxlL3N0ZXBwZXItZWRpdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1lZGl0YWJsZS9zdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNNbEMsa0NBQWtCOzs7SUFXbEIscUNBQXFCOzs7SUFXdkIsb0JBQUk7Ozs7O0FEbEJsQyxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBS2pDLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRjdDLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFFNkIsQ0FBQzs7OztJQUVqRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Ozs7WUFUTyxXQUFXOzs0RkFVTixzQkFBc0I7MkRBQXRCLHNCQUFzQjs7UUNYbkMsaUNBQ0U7UUFEd0IsNklBQWtDO1FBQzFELFlBQ0Y7UUFBQSxpQkFBUztRQUVULHNEQUNFO1FBQUEsbUNBQ0U7UUFBQSwrQkFDRTtRQUFBLHVGQUEwQjtRQUMxQixzQ0FDRTtRQUFBLDJCQUNGO1FBQUEsaUJBQWlCO1FBQ2pCLDJCQUNFO1FBQUEsa0NBQWtDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNqRCxpQkFBTTtRQUNSLGlCQUFPO1FBQ1QsaUJBQVc7UUFDWCxvQ0FDRTtRQUFBLGdDQUNFO1FBQUEseUZBQTBCO1FBQzFCLHVDQUNFO1FBQUEsNEJBQ0Y7UUFBQSxpQkFBaUI7UUFDakIsNEJBQ0U7UUFBQSxrQ0FBc0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ25ELGtDQUFrQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDakQsaUJBQU07UUFDUixpQkFBTztRQUNULGlCQUFXO1FBQ1gsaUNBQ0U7UUFBQSx5RkFBMEI7UUFDMUIsb0NBQ0E7UUFBQSw0QkFDRTtRQUFBLGtDQUFzQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDbkQsa0NBQTZDO1FBQTFCLGdLQUFTLFdBQWUsSUFBQztRQUFDLHNCQUFLO1FBQUEsaUJBQVM7UUFDN0QsaUJBQU07UUFDUixpQkFBVztRQUNiLGlCQUF5Qjs7UUFuQ3ZCLGVBQ0Y7UUFERSw0RkFDRjtRQUdZLGVBQThCO1FBQTlCLGdEQUE4Qiw0QkFBQTtRQUNoQyxlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFVMUIsZUFBK0I7UUFBL0IsaURBQStCLDRCQUFBO1FBQ2pDLGVBQTZCO1FBQTdCLCtDQUE2Qjs7bUNETjFCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Ozs7SUFFQyxnREFBMEI7O0lBQzFCLGlEQUEyQjs7SUFDM0IsNENBQW1COzs7OztJQUVQLDhDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgd2l0aCBlZGl0YWJsZSBzdGVwc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItZWRpdGFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXItZWRpdGFibGUtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyRWRpdGFibGVFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmlyc3RGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2Vjb25kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIGlzRWRpdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuc2Vjb25kRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG59XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJpc0VkaXRhYmxlID0gIWlzRWRpdGFibGVcIj5cbiAge3shaXNFZGl0YWJsZSA/ICdFbmFibGUgZWRpdCBtb2RlJyA6ICdEaXNhYmxlIGVkaXQgbW9kZSd9fVxuPC9idXR0b24+XG5cbjxtYXQtaG9yaXpvbnRhbC1zdGVwcGVyIGxpbmVhciAjc3RlcHBlcj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiIFtlZGl0YWJsZV09XCJpc0VkaXRhYmxlXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIG5hbWU8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiIFtlZGl0YWJsZV09XCJpc0VkaXRhYmxlXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBhZGRyZXNzPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiIGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgWW91IGFyZSBub3cgZG9uZS5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInN0ZXBwZXIucmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXN0ZXA+XG48L21hdC1ob3Jpem9udGFsLXN0ZXBwZXI+XG4iXX0=