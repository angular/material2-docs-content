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
    i0.ɵɵelementStart(0, "mat-radio-button", 15);
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
StepperIntlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperIntlExample, selectors: [["stepper-intl-example"]], features: [i0.ɵɵProvidersFeature([{ provide: MatStepperIntl, useClass: StepperIntl }])], decls: 36, vars: 6, consts: [["for", "demo-optional-label-group"], ["id", "demo-optional-label-group", 1, "demo-radio-group", 3, "ngModel", "ngModelChange"], ["class", "demo-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "demo-stepper"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "demo-form-field"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", "optional", "", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], [1, "demo-radio-button", 3, "value"]], template: function StepperIntlExample_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(18, "mat-form-field");
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div");
        i0.ɵɵelementStart(23, "button", 13);
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
        i0.ɵɵelementStart(32, "button", 13);
        i0.ɵɵtext(33, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "button", 14);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaW50bC9zdGVwcGVyLWludGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1pbnRsL3N0ZXBwZXItaW50bC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7SUNJdkQsNENBR29DO0lBQ2xDLFlBQ0Y7SUFBQSxpQkFBbUI7OztJQUZqQixrREFBaUM7SUFDakMsZUFDRjtJQURFLDJEQUNGOzs7SUFLOEIsa0NBQWtCOzs7SUFtQ3BCLG9CQUFJOztBRDlDbEMsTUFBTSxPQUFPLFdBQVksU0FBUSxjQUFjO0lBRC9DOztRQUVFLGdFQUFnRTtRQUNoRSxrQkFBYSxHQUFHLGdCQUFnQixDQUFDO0tBQ2xDOzsrTUFIWSxXQUFXLFNBQVgsV0FBVztpRUFBWCxXQUFXLFdBQVgsV0FBVzt1RkFBWCxXQUFXO2NBRHZCLFVBQVU7O0FBTVg7O0dBRUc7QUFPSCxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCLFlBQ1UsWUFBeUIsRUFDekIsZUFBK0I7UUFEL0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBSnpDLDZCQUF3QixHQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUt2RSxDQUFDO0lBRUosbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxxREFBcUQ7UUFDckQsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7O29GQXpCVSxrQkFBa0I7cUVBQWxCLGtCQUFrQiwwRUFGbEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDOztRQ2pCakUsZ0NBQXVDO1FBQUEsb0RBQW9DO1FBQUEsaUJBQVE7UUFDbkYsMENBSTBDO1FBRHhDLGdLQUErQiwyR0FDZCx5QkFBcUIsSUFEUDtRQUUvQiw2RkFLbUI7UUFDckIsaUJBQWtCO1FBQ2xCLG9EQUFzRDtRQUNwRCxtQ0FBeUM7UUFDdkMsK0JBQW1DO1FBQ2pDLG1GQUEwRDtRQUMxRCx5Q0FBd0M7UUFDdEMsa0NBQVc7UUFBQSxxQkFBSTtRQUFBLGlCQUFZO1FBQzNCLDRCQUtFO1FBQ0osaUJBQWlCO1FBQ2pCLDRCQUFLO1FBQ0gsbUNBQWtDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNqRCxpQkFBTTtRQUNSLGlCQUFPO1FBQ1QsaUJBQVc7UUFDWCxxQ0FHVztRQUNULGdDQUFvQztRQUNsQyx1Q0FBZ0I7UUFDZCxrQ0FBVztRQUFBLHdCQUFPO1FBQUEsaUJBQVk7UUFDOUIsNkJBSUU7UUFDSixpQkFBaUI7UUFDakIsNEJBQUs7UUFDSCxtQ0FBc0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ25ELG1DQUFrQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDakQsaUJBQU07UUFDUixpQkFBTztRQUNULGlCQUFXO1FBQ1gsaUNBQVU7UUFDUixxRkFBNEM7UUFDNUMsMEJBQUc7UUFBQSxrQ0FBaUI7UUFBQSxpQkFBSTtRQUN4Qiw0QkFBSztRQUNILG1DQUFzQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDbkQsbUNBQTZDO1FBQTFCLHNKQUFTLFdBQWUsSUFBQztRQUFDLHNCQUFLO1FBQUEsaUJBQVM7UUFDN0QsaUJBQU07UUFDUixpQkFBVztRQUNiLGlCQUF5Qjs7UUF0RHZCLGVBQStCO1FBQS9CLCtDQUErQjtRQUlPLGVBQTJCO1FBQTNCLHNEQUEyQjtRQU12RCxlQUE4QjtRQUE5QixnREFBOEI7UUFDaEMsZUFBNEI7UUFBNUIsOENBQTRCO1FBaUJsQyxlQUErQjtRQUEvQixpREFBK0I7UUFHekIsZUFBNkI7UUFBN0IsK0NBQTZCOzt1RkRoQjFCLGtCQUFrQjtjQU45QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDaEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRTdGVwcGVySW50bH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGVwcGVySW50bCBleHRlbmRzIE1hdFN0ZXBwZXJJbnRsIHtcbiAgLy8gdGhlIGRlZmF1bHQgb3B0aW9uYWwgbGFiZWwgdGV4dCwgaWYgdW5zcGVjaWZpZWQgaXMgXCJPcHRpb25hbFwiXG4gIG9wdGlvbmFsTGFiZWwgPSAnT3B0aW9uYWwgTGFiZWwnO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIHRoYXQgdXNlcyB0aGUgTWF0U3RlcHBlckludGwgc2VydmljZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLWludGwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1pbnRsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWludGwtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNYXRTdGVwcGVySW50bCwgdXNlQ2xhc3M6IFN0ZXBwZXJJbnRsIH1dXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJJbnRsRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpcnN0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHNlY29uZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBvcHRpb25hbExhYmVsVGV4dDogc3RyaW5nO1xuICBvcHRpb25hbExhYmVsVGV4dENob2ljZXM6IHN0cmluZ1tdID0gWydPcHRpb24gMScsICdPcHRpb24gMicsICdPcHRpb24gMyddO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIF9tYXRTdGVwcGVySW50bDogTWF0U3RlcHBlckludGxcbiAgKSB7fVxuXG4gIHVwZGF0ZU9wdGlvbmFsTGFiZWwoKSB7XG4gICAgdGhpcy5fbWF0U3RlcHBlckludGwub3B0aW9uYWxMYWJlbCA9IHRoaXMub3B0aW9uYWxMYWJlbFRleHQ7XG4gICAgLy8gUmVxdWlyZWQgZm9yIHRoZSBvcHRpb25hbCBsYWJlbCB0ZXh0IHRvIGJlIHVwZGF0ZWRcbiAgICAvLyBOb3RpZmllcyB0aGUgTWF0U3RlcHBlckludGwgc2VydmljZSB0aGF0IGEgY2hhbmdlIGhhcyBiZWVuIG1hZGVcbiAgICB0aGlzLl9tYXRTdGVwcGVySW50bC5jaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLnNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlY29uZEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxufVxuIiwiPGxhYmVsIGZvcj1cImRlbW8tb3B0aW9uYWwtbGFiZWwtZ3JvdXBcIj5QaWNrIHRoZSB0ZXh0IGZvciB0aGUgb3B0aW9uYWwgbGFiZWw8L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuICBpZD1cImRlbW8tb3B0aW9uYWwtbGFiZWwtZ3JvdXBcIlxuICBjbGFzcz1cImRlbW8tcmFkaW8tZ3JvdXBcIlxuICBbKG5nTW9kZWwpXT1cIm9wdGlvbmFsTGFiZWxUZXh0XCJcbiAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlT3B0aW9uYWxMYWJlbCgpXCI+XG4gIDxtYXQtcmFkaW8tYnV0dG9uXG4gICAgY2xhc3M9XCJkZW1vLXJhZGlvLWJ1dHRvblwiXG4gICAgKm5nRm9yPVwibGV0IG9wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlIG9mIG9wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlc1wiXG4gICAgW3ZhbHVlXT1cIm9wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlXCI+XG4gICAge3tvcHRpb25hbExhYmVsVGV4dENob2ljZX19XG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPG1hdC1ob3Jpem9udGFsLXN0ZXBwZXIgY2xhc3M9XCJkZW1vLXN0ZXBwZXJcIiAjc3RlcHBlcj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRlbW8tZm9ybS1maWVsZFwiPlxuICAgICAgICA8bWF0LWxhYmVsPk5hbWU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcFxuICAgIFtzdGVwQ29udHJvbF09XCJzZWNvbmRGb3JtR3JvdXBcIlxuICAgIGxhYmVsPVwiRmlsbCBvdXQgeW91ciBhZGRyZXNzXCJcbiAgICBvcHRpb25hbD5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiAxIE1haW4gU3QsIE5ldyBZb3JrLCBOWVwiXG4gICAgICAgIC8+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIDxwPllvdSBhcmUgbm93IGRvbmUuPC9wPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiJdfQ==