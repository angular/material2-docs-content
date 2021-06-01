import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
function StepperIntlExample_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const optionalLabelTextChoice_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", optionalLabelTextChoice_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", optionalLabelTextChoice_r4, " ");
} }
function StepperIntlExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperIntlExample_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
export class StepperIntl extends MatStepperIntl {
    constructor() {
        super(...arguments);
        // the default optional label text, if unspecified is "Optional"
        this.optionalLabel = 'Optional Label';
    }
}
StepperIntl.ɵfac = /*@__PURE__*/ function () { let ɵStepperIntl_BaseFactory; return function StepperIntl_Factory(t) { return (ɵStepperIntl_BaseFactory || (ɵStepperIntl_BaseFactory = i0.ɵɵgetInheritedFactory(StepperIntl)))(t || StepperIntl); }; }();
StepperIntl.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StepperIntl, factory: StepperIntl.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperIntl, [{
        type: Injectable
    }], null, null); })();
/**
 * @title Stepper that uses the MatStepperIntl service
 */
export class StepperIntlExample {
    constructor(_formBuilder, _matStepperIntl) {
        this._formBuilder = _formBuilder;
        this._matStepperIntl = _matStepperIntl;
        this.optionalLabelTextChoices = ['Option 1', 'Option 2', 'Option 3'];
    }
    updateOptionalLabel() {
        this._matStepperIntl.optionalLabel = this.optionalLabelText;
        // Required for the optional label text to be updated
        // Notifies the MatStepperIntl service that a change has been made
        this._matStepperIntl.changes.next();
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
StepperIntlExample.ɵfac = function StepperIntlExample_Factory(t) { return new (t || StepperIntlExample)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.MatStepperIntl)); };
StepperIntlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperIntlExample, selectors: [["stepper-intl-example"]], features: [i0.ɵɵProvidersFeature([{ provide: MatStepperIntl, useClass: StepperIntl }])], decls: 36, vars: 6, consts: [["for", "demo-optional-label-group"], ["id", "demo-optional-label-group", 1, "demo-radio-group", 3, "ngModel", "ngModelChange"], ["class", "demo-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "demo-stepper"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill", 1, "demo-form-field"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", "optional", "", 3, "stepControl"], ["appearance", "fill"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], [1, "demo-radio-button", 3, "value"]], template: function StepperIntlExample_Template(rf, ctx) { if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "label", 0);
        i0.ɵɵtext(1, "Pick the text for the optional label");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-radio-group", 1);
        i0.ɵɵlistener("ngModelChange", function StepperIntlExample_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.optionalLabelText = $event; })("ngModelChange", function StepperIntlExample_Template_mat_radio_group_ngModelChange_2_listener() { return ctx.updateOptionalLabel(); });
        i0.ɵɵtemplate(3, StepperIntlExample_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-horizontal-stepper", 3, 4);
        i0.ɵɵelementStart(6, "mat-step", 5);
        i0.ɵɵelementStart(7, "form", 6);
        i0.ɵɵtemplate(8, StepperIntlExample_ng_template_8_Template, 1, 0, "ng-template", 7);
        i0.ɵɵelementStart(9, "mat-form-field", 8);
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵelementStart(14, "button", 10);
        i0.ɵɵtext(15, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-step", 11);
        i0.ɵɵelementStart(17, "form", 6);
        i0.ɵɵelementStart(18, "mat-form-field", 12);
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div");
        i0.ɵɵelementStart(23, "button", 14);
        i0.ɵɵtext(24, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "button", 10);
        i0.ɵɵtext(26, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "mat-step");
        i0.ɵɵtemplate(28, StepperIntlExample_ng_template_28_Template, 1, 0, "ng-template", 7);
        i0.ɵɵelementStart(29, "p");
        i0.ɵɵtext(30, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "div");
        i0.ɵɵelementStart(32, "button", 14);
        i0.ɵɵtext(33, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "button", 15);
        i0.ɵɵlistener("click", function StepperIntlExample_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r5); const _r1 = i0.ɵɵreference(5); return _r1.reset(); });
        i0.ɵɵtext(35, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.optionalLabelText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.optionalLabelTextChoices);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i3.MatRadioGroup, i1.NgControlStatus, i1.NgModel, i4.NgForOf, i2.MatStepper, i2.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatStepLabel, i5.MatFormField, i5.MatLabel, i6.MatInput, i1.DefaultValueAccessor, i1.FormControlName, i1.RequiredValidator, i7.MatButton, i2.MatStepperNext, i2.MatStepperPrevious, i3.MatRadioButton], styles: [".demo-stepper[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.demo-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.demo-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperIntlExample, [{
        type: Component,
        args: [{
                selector: 'stepper-intl-example',
                templateUrl: 'stepper-intl-example.html',
                styleUrls: ['stepper-intl-example.css'],
                providers: [{ provide: MatStepperIntl, useClass: StepperIntl }]
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.MatStepperIntl }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaW50bC9zdGVwcGVyLWludGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1pbnRsL3N0ZXBwZXItaW50bC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7SUNJdkQsNENBR29DO0lBQ2xDLFlBQ0Y7SUFBQSxpQkFBbUI7OztJQUZqQixrREFBaUM7SUFDakMsZUFDRjtJQURFLDJEQUNGOzs7SUFLOEIsa0NBQWtCOzs7SUFtQ3BCLG9CQUFJOztBRDlDbEMsTUFBTSxPQUFPLFdBQVksU0FBUSxjQUFjO0lBRC9DOztRQUVFLGdFQUFnRTtRQUNoRSxrQkFBYSxHQUFHLGdCQUFnQixDQUFDO0tBQ2xDOzsrTUFIWSxXQUFXLFNBQVgsV0FBVztpRUFBWCxXQUFXLFdBQVgsV0FBVzt1RkFBWCxXQUFXO2NBRHZCLFVBQVU7O0FBTVg7O0dBRUc7QUFPSCxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCLFlBQ1UsWUFBeUIsRUFDekIsZUFBK0I7UUFEL0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBSnpDLDZCQUF3QixHQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUt2RSxDQUFDO0lBRUosbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxxREFBcUQ7UUFDckQsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7O29GQXpCVSxrQkFBa0I7cUVBQWxCLGtCQUFrQiwwRUFGbEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDOztRQ2pCakUsZ0NBQXVDO1FBQUEsb0RBQW9DO1FBQUEsaUJBQVE7UUFDbkYsMENBSTBDO1FBRHhDLGdLQUErQiwyR0FDZCx5QkFBcUIsSUFEUDtRQUUvQiw2RkFLbUI7UUFDckIsaUJBQWtCO1FBQ2xCLG9EQUFzRDtRQUNwRCxtQ0FBeUM7UUFDdkMsK0JBQW1DO1FBQ2pDLG1GQUEwRDtRQUMxRCx5Q0FBMEQ7UUFDeEQsa0NBQVc7UUFBQSxxQkFBSTtRQUFBLGlCQUFZO1FBQzNCLDRCQUtFO1FBQ0osaUJBQWlCO1FBQ2pCLDRCQUFLO1FBQ0gsbUNBQWtDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNqRCxpQkFBTTtRQUNSLGlCQUFPO1FBQ1QsaUJBQVc7UUFDWCxxQ0FHVztRQUNULGdDQUFvQztRQUNsQywyQ0FBa0M7UUFDaEMsa0NBQVc7UUFBQSx3QkFBTztRQUFBLGlCQUFZO1FBQzlCLDZCQUlFO1FBQ0osaUJBQWlCO1FBQ2pCLDRCQUFLO1FBQ0gsbUNBQXNDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNuRCxtQ0FBa0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2pELGlCQUFNO1FBQ1IsaUJBQU87UUFDVCxpQkFBVztRQUNYLGlDQUFVO1FBQ1IscUZBQTRDO1FBQzVDLDBCQUFHO1FBQUEsa0NBQWlCO1FBQUEsaUJBQUk7UUFDeEIsNEJBQUs7UUFDSCxtQ0FBc0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ25ELG1DQUE2QztRQUExQixzSkFBUyxXQUFlLElBQUM7UUFBQyxzQkFBSztRQUFBLGlCQUFTO1FBQzdELGlCQUFNO1FBQ1IsaUJBQVc7UUFDYixpQkFBeUI7O1FBdER2QixlQUErQjtRQUEvQiwrQ0FBK0I7UUFJTyxlQUEyQjtRQUEzQixzREFBMkI7UUFNdkQsZUFBOEI7UUFBOUIsZ0RBQThCO1FBQ2hDLGVBQTRCO1FBQTVCLDhDQUE0QjtRQWlCbEMsZUFBK0I7UUFBL0IsaURBQStCO1FBR3pCLGVBQTZCO1FBQTdCLCtDQUE2Qjs7dUZEaEIxQixrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ2hFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGUsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0U3RlcHBlckludGx9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RlcHBlckludGwgZXh0ZW5kcyBNYXRTdGVwcGVySW50bCB7XG4gIC8vIHRoZSBkZWZhdWx0IG9wdGlvbmFsIGxhYmVsIHRleHQsIGlmIHVuc3BlY2lmaWVkIGlzIFwiT3B0aW9uYWxcIlxuICBvcHRpb25hbExhYmVsID0gJ09wdGlvbmFsIExhYmVsJztcbn1cblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciB0aGF0IHVzZXMgdGhlIE1hdFN0ZXBwZXJJbnRsIHNlcnZpY2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RlcHBlci1pbnRsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItaW50bC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci1pbnRsLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTWF0U3RlcHBlckludGwsIHVzZUNsYXNzOiBTdGVwcGVySW50bCB9XVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVySW50bEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgb3B0aW9uYWxMYWJlbFRleHQ6IHN0cmluZztcbiAgb3B0aW9uYWxMYWJlbFRleHRDaG9pY2VzOiBzdHJpbmdbXSA9IFsnT3B0aW9uIDEnLCAnT3B0aW9uIDInLCAnT3B0aW9uIDMnXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBfbWF0U3RlcHBlckludGw6IE1hdFN0ZXBwZXJJbnRsXG4gICkge31cblxuICB1cGRhdGVPcHRpb25hbExhYmVsKCkge1xuICAgIHRoaXMuX21hdFN0ZXBwZXJJbnRsLm9wdGlvbmFsTGFiZWwgPSB0aGlzLm9wdGlvbmFsTGFiZWxUZXh0O1xuICAgIC8vIFJlcXVpcmVkIGZvciB0aGUgb3B0aW9uYWwgbGFiZWwgdGV4dCB0byBiZSB1cGRhdGVkXG4gICAgLy8gTm90aWZpZXMgdGhlIE1hdFN0ZXBwZXJJbnRsIHNlcnZpY2UgdGhhdCBhIGNoYW5nZSBoYXMgYmVlbiBtYWRlXG4gICAgdGhpcy5fbWF0U3RlcHBlckludGwuY2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpcnN0Rm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZmlyc3RDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5zZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBzZWNvbmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxsYWJlbCBmb3I9XCJkZW1vLW9wdGlvbmFsLWxhYmVsLWdyb3VwXCI+UGljayB0aGUgdGV4dCBmb3IgdGhlIG9wdGlvbmFsIGxhYmVsPC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgaWQ9XCJkZW1vLW9wdGlvbmFsLWxhYmVsLWdyb3VwXCJcbiAgY2xhc3M9XCJkZW1vLXJhZGlvLWdyb3VwXCJcbiAgWyhuZ01vZGVsKV09XCJvcHRpb25hbExhYmVsVGV4dFwiXG4gIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZU9wdGlvbmFsTGFiZWwoKVwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvblxuICAgIGNsYXNzPVwiZGVtby1yYWRpby1idXR0b25cIlxuICAgICpuZ0Zvcj1cImxldCBvcHRpb25hbExhYmVsVGV4dENob2ljZSBvZiBvcHRpb25hbExhYmVsVGV4dENob2ljZXNcIlxuICAgIFt2YWx1ZV09XCJvcHRpb25hbExhYmVsVGV4dENob2ljZVwiPlxuICAgIHt7b3B0aW9uYWxMYWJlbFRleHRDaG9pY2V9fVxuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjxtYXQtaG9yaXpvbnRhbC1zdGVwcGVyIGNsYXNzPVwiZGVtby1zdGVwcGVyXCIgI3N0ZXBwZXI+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJkZW1vLWZvcm0tZmllbGRcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICA8bWF0LWxhYmVsPk5hbWU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcFxuICAgIFtzdGVwQ29udHJvbF09XCJzZWNvbmRGb3JtR3JvdXBcIlxuICAgIGxhYmVsPVwiRmlsbCBvdXQgeW91ciBhZGRyZXNzXCJcbiAgICBvcHRpb25hbD5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+QWRkcmVzczwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIDEgTWFpbiBTdCwgTmV3IFlvcmssIE5ZXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgPHA+WW91IGFyZSBub3cgZG9uZS48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtaG9yaXpvbnRhbC1zdGVwcGVyPlxuIl19