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
        i0.ɵɵelementStart(4, "mat-stepper", 3, 4);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaW50bC9zdGVwcGVyLWludGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1pbnRsL3N0ZXBwZXItaW50bC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7SUNJdkQsNENBR29DO0lBQ2xDLFlBQ0Y7SUFBQSxpQkFBbUI7OztJQUZqQixrREFBaUM7SUFDakMsZUFDRjtJQURFLDJEQUNGOzs7SUFLOEIsa0NBQWtCOzs7SUFtQ3BCLG9CQUFJOztBRDlDbEMsTUFBTSxPQUFPLFdBQVksU0FBUSxjQUFjO0lBRC9DOztRQUVFLGdFQUFnRTtRQUNoRSxrQkFBYSxHQUFHLGdCQUFnQixDQUFDO0tBQ2xDOzsrTUFIWSxXQUFXLFNBQVgsV0FBVztpRUFBWCxXQUFXLFdBQVgsV0FBVzt1RkFBWCxXQUFXO2NBRHZCLFVBQVU7O0FBTVg7O0dBRUc7QUFPSCxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCLFlBQ1UsWUFBeUIsRUFDekIsZUFBK0I7UUFEL0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBSnpDLDZCQUF3QixHQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUt2RSxDQUFDO0lBRUosbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxxREFBcUQ7UUFDckQsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7O29GQXpCVSxrQkFBa0I7cUVBQWxCLGtCQUFrQiwwRUFGbEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDOztRQ2pCakUsZ0NBQXVDO1FBQUEsb0RBQW9DO1FBQUEsaUJBQVE7UUFDbkYsMENBSTBDO1FBRHhDLGdLQUErQiwyR0FDZCx5QkFBcUIsSUFEUDtRQUUvQiw2RkFLbUI7UUFDckIsaUJBQWtCO1FBQ2xCLHlDQUEyQztRQUN6QyxtQ0FBeUM7UUFDdkMsK0JBQW1DO1FBQ2pDLG1GQUEwRDtRQUMxRCx5Q0FBMEQ7UUFDeEQsa0NBQVc7UUFBQSxxQkFBSTtRQUFBLGlCQUFZO1FBQzNCLDRCQUtFO1FBQ0osaUJBQWlCO1FBQ2pCLDRCQUFLO1FBQ0gsbUNBQWtDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNqRCxpQkFBTTtRQUNSLGlCQUFPO1FBQ1QsaUJBQVc7UUFDWCxxQ0FHVztRQUNULGdDQUFvQztRQUNsQywyQ0FBa0M7UUFDaEMsa0NBQVc7UUFBQSx3QkFBTztRQUFBLGlCQUFZO1FBQzlCLDZCQUlFO1FBQ0osaUJBQWlCO1FBQ2pCLDRCQUFLO1FBQ0gsbUNBQXNDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNuRCxtQ0FBa0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2pELGlCQUFNO1FBQ1IsaUJBQU87UUFDVCxpQkFBVztRQUNYLGlDQUFVO1FBQ1IscUZBQTRDO1FBQzVDLDBCQUFHO1FBQUEsa0NBQWlCO1FBQUEsaUJBQUk7UUFDeEIsNEJBQUs7UUFDSCxtQ0FBc0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ25ELG1DQUE2QztRQUExQixzSkFBUyxXQUFlLElBQUM7UUFBQyxzQkFBSztRQUFBLGlCQUFTO1FBQzdELGlCQUFNO1FBQ1IsaUJBQVc7UUFDYixpQkFBYzs7UUF0RFosZUFBK0I7UUFBL0IsK0NBQStCO1FBSU8sZUFBMkI7UUFBM0Isc0RBQTJCO1FBTXZELGVBQThCO1FBQTlCLGdEQUE4QjtRQUNoQyxlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFpQmxDLGVBQStCO1FBQS9CLGlEQUErQjtRQUd6QixlQUE2QjtRQUE3QiwrQ0FBNkI7O3VGRGhCMUIsa0JBQWtCO2NBTjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUNoRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFN0ZXBwZXJJbnRsfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJJbnRsIGV4dGVuZHMgTWF0U3RlcHBlckludGwge1xuICAvLyB0aGUgZGVmYXVsdCBvcHRpb25hbCBsYWJlbCB0ZXh0LCBpZiB1bnNwZWNpZmllZCBpcyBcIk9wdGlvbmFsXCJcbiAgb3B0aW9uYWxMYWJlbCA9ICdPcHRpb25hbCBMYWJlbCc7XG59XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgdGhhdCB1c2VzIHRoZSBNYXRTdGVwcGVySW50bCBzZXJ2aWNlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItaW50bC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLWludGwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXItaW50bC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1hdFN0ZXBwZXJJbnRsLCB1c2VDbGFzczogU3RlcHBlckludGwgfV1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckludGxFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmlyc3RGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2Vjb25kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIG9wdGlvbmFsTGFiZWxUZXh0OiBzdHJpbmc7XG4gIG9wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlczogc3RyaW5nW10gPSBbJ09wdGlvbiAxJywgJ09wdGlvbiAyJywgJ09wdGlvbiAzJ107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgX21hdFN0ZXBwZXJJbnRsOiBNYXRTdGVwcGVySW50bFxuICApIHt9XG5cbiAgdXBkYXRlT3B0aW9uYWxMYWJlbCgpIHtcbiAgICB0aGlzLl9tYXRTdGVwcGVySW50bC5vcHRpb25hbExhYmVsID0gdGhpcy5vcHRpb25hbExhYmVsVGV4dDtcbiAgICAvLyBSZXF1aXJlZCBmb3IgdGhlIG9wdGlvbmFsIGxhYmVsIHRleHQgdG8gYmUgdXBkYXRlZFxuICAgIC8vIE5vdGlmaWVzIHRoZSBNYXRTdGVwcGVySW50bCBzZXJ2aWNlIHRoYXQgYSBjaGFuZ2UgaGFzIGJlZW4gbWFkZVxuICAgIHRoaXMuX21hdFN0ZXBwZXJJbnRsLmNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuc2Vjb25kRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG59XG4iLCI8bGFiZWwgZm9yPVwiZGVtby1vcHRpb25hbC1sYWJlbC1ncm91cFwiPlBpY2sgdGhlIHRleHQgZm9yIHRoZSBvcHRpb25hbCBsYWJlbDwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG4gIGlkPVwiZGVtby1vcHRpb25hbC1sYWJlbC1ncm91cFwiXG4gIGNsYXNzPVwiZGVtby1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwib3B0aW9uYWxMYWJlbFRleHRcIlxuICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVPcHRpb25hbExhYmVsKClcIj5cbiAgPG1hdC1yYWRpby1idXR0b25cbiAgICBjbGFzcz1cImRlbW8tcmFkaW8tYnV0dG9uXCJcbiAgICAqbmdGb3I9XCJsZXQgb3B0aW9uYWxMYWJlbFRleHRDaG9pY2Ugb2Ygb3B0aW9uYWxMYWJlbFRleHRDaG9pY2VzXCJcbiAgICBbdmFsdWVdPVwib3B0aW9uYWxMYWJlbFRleHRDaG9pY2VcIj5cbiAgICB7e29wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlfX1cbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48bWF0LXN0ZXBwZXIgY2xhc3M9XCJkZW1vLXN0ZXBwZXJcIiAjc3RlcHBlcj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRlbW8tZm9ybS1maWVsZFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+TmFtZTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lLCBGaXJzdCBuYW1lXCJcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwXG4gICAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiXG4gICAgbGFiZWw9XCJGaWxsIG91dCB5b3VyIGFkZHJlc3NcIlxuICAgIG9wdGlvbmFsPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ3RybFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeC4gMSBNYWluIFN0LCBOZXcgWW9yaywgTllcIlxuICAgICAgICAvPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5Eb25lPC9uZy10ZW1wbGF0ZT5cbiAgICA8cD5Zb3UgYXJlIG5vdyBkb25lLjwvcD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInN0ZXBwZXIucmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXN0ZXA+XG48L21hdC1zdGVwcGVyPlxuIl19