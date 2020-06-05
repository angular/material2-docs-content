import { __extends } from "tslib";
import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/stepper";
import * as i3 from "@angular/common";
function CustomLinearStepper_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function CustomLinearStepper_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); var i_r7 = ctx.index; var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.selectStepByIndex(i_r7); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r7 = ctx.index;
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("example-active", ctx_r5.selectedIndex === i_r7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Step ", i_r7 + 1, " ");
} }
/** @title A custom CDK linear stepper with forms */
var CdkLinearStepperWithFormExample = /** @class */ (function () {
    function CdkLinearStepperWithFormExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.firstFormGroup = this._formBuilder.group({
            firstControl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondControl: ['', Validators.required]
        });
    }
    CdkLinearStepperWithFormExample.prototype.toggleLinearity = function () {
        this.isLinear = !this.isLinear;
    };
    CdkLinearStepperWithFormExample.ɵfac = function CdkLinearStepperWithFormExample_Factory(t) { return new (t || CdkLinearStepperWithFormExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    CdkLinearStepperWithFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkLinearStepperWithFormExample, selectors: [["cdk-linear-stepper-with-form"]], decls: 13, vars: 6, consts: [[3, "linear"], [3, "stepControl"], ["for", "stepOneInput"], [3, "formGroup"], ["placeholder", "Input", "formControlName", "firstControl", "id", "stepOneInput", "required", ""], ["for", "stepTwoInput"], ["placeholder", "Input", "formControlName", "secondControl", "id", "stepTwoInput", "required", ""], [1, "example-toggle-linear-button", 3, "click"]], template: function CdkLinearStepperWithFormExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "example-custom-linear-stepper", 0);
            i0.ɵɵelementStart(1, "cdk-step", 1);
            i0.ɵɵelementStart(2, "label", 2);
            i0.ɵɵtext(3, "Step 1 input");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "form", 3);
            i0.ɵɵelement(5, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "cdk-step", 1);
            i0.ɵɵelementStart(7, "label", 5);
            i0.ɵɵtext(8, "Step 2 input");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "form", 3);
            i0.ɵɵelement(10, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵlistener("click", function CdkLinearStepperWithFormExample_Template_button_click_11_listener() { return ctx.toggleLinearity(); });
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("linear", ctx.isLinear);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.isLinear ? "Disable linear mode" : "Enable linear mode", "\n");
        } }, directives: function () { return [CustomLinearStepper, i2.CdkStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator]; }, styles: [".example-toggle-linear-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}"] });
    return CdkLinearStepperWithFormExample;
}());
export { CdkLinearStepperWithFormExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkLinearStepperWithFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-linear-stepper-with-form',
                templateUrl: './cdk-linear-stepper-with-form-example.html',
                styleUrls: ['./cdk-linear-stepper-with-form-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
/** Custom CDK linear stepper component */
var CustomLinearStepper = /** @class */ (function (_super) {
    __extends(CustomLinearStepper, _super);
    function CustomLinearStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomLinearStepper.prototype.selectStepByIndex = function (index) {
        this.selectedIndex = index;
    };
    CustomLinearStepper.ɵfac = function CustomLinearStepper_Factory(t) { return ɵCustomLinearStepper_BaseFactory(t || CustomLinearStepper); };
    CustomLinearStepper.ɵcmp = i0.ɵɵdefineComponent({ type: CustomLinearStepper, selectors: [["example-custom-linear-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomLinearStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 4, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "example-active", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "click"]], template: function CustomLinearStepper_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelementStart(1, "header");
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "div", 1);
            i0.ɵɵelementStart(5, "footer", 2);
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵtext(7, "\u2190");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, CustomLinearStepper_button_8_Template, 2, 3, "button", 4);
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵtext(10, "\u2192");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.selected ? ctx.selected.content : null);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.steps);
        } }, directives: [i3.NgTemplateOutlet, i2.CdkStepperPrevious, i3.NgForOf, i2.CdkStepperNext], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid blue;\n  color: blue;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n}"] });
    return CustomLinearStepper;
}(CdkStepper));
export { CustomLinearStepper };
var ɵCustomLinearStepper_BaseFactory = i0.ɵɵgetInheritedFactory(CustomLinearStepper);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomLinearStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-linear-stepper',
                templateUrl: './example-custom-linear-stepper.html',
                styleUrls: ['./example-custom-linear-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2V4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0lDTzlELGlDQU1FO0lBRkEseU5BQThCO0lBRTlCLFlBQ0Y7SUFBQSxpQkFBUzs7OztJQUxQLCtEQUE0QztJQUk1QyxlQUNGO0lBREUsOENBQ0Y7O0FEWkosb0RBQW9EO0FBQ3BEO0lBVUUseUNBQTZCLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBSnRELGFBQVEsR0FBRyxJQUFJLENBQUM7UUFLWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQzFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDM0MsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlEQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO2tIQWhCVSwrQkFBK0I7d0VBQS9CLCtCQUErQjtZRVY1Qyx3REFDRTtZQUFBLG1DQUNFO1lBQUEsZ0NBQTBCO1lBQUEsNEJBQVk7WUFBQSxpQkFBUTtZQUM5QywrQkFDRTtZQUFBLDJCQUNGO1lBQUEsaUJBQU87WUFDVCxpQkFBVztZQUNYLG1DQUNFO1lBQUEsZ0NBQTBCO1lBQUEsNEJBQVk7WUFBQSxpQkFBUTtZQUM5QywrQkFDRTtZQUFBLDRCQUNGO1lBQUEsaUJBQU87WUFDVCxpQkFBVztZQUNiLGlCQUFnQztZQUNoQyxrQ0FDRTtZQUQyQyw2R0FBUyxxQkFBaUIsSUFBQztZQUN0RSxhQUNGO1lBQUEsaUJBQVM7O1lBaEJzQixxQ0FBbUI7WUFDdEMsZUFBOEI7WUFBOUIsZ0RBQThCO1lBRWhDLGVBQTRCO1lBQTVCLDhDQUE0QjtZQUkxQixlQUErQjtZQUEvQixpREFBK0I7WUFFakMsZUFBNkI7WUFBN0IsK0NBQTZCO1lBTXJDLGVBQ0Y7WUFERSw2RkFDRjsrQ0ZvQmEsbUJBQW1COzBDQXBDaEM7Q0EyQkMsQUF0QkQsSUFzQkM7U0FqQlksK0JBQStCO2tEQUEvQiwrQkFBK0I7Y0FMM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2FBQzFEOztBQW9CRCwwQ0FBMEM7QUFDMUM7SUFNeUMsdUNBQVU7SUFObkQ7O0tBVUM7SUFIQywrQ0FBaUIsR0FBakIsVUFBa0IsS0FBYTtRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO3NIQUhVLG1CQUFtQjs0REFBbkIsbUJBQW1CLG1GQUZuQixDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztZQ2xDdEUsa0NBQ0U7WUFBQSw4QkFDRTtZQUFBLDBCQUFJO1lBQUEsWUFBMkM7WUFBQSxpQkFBSztZQUN0RCxpQkFBUztZQUVULHlCQUFtRTtZQUVuRSxpQ0FDRTtZQUFBLGlDQUFzRDtZQUFBLHNCQUFNO1lBQUEsaUJBQVM7WUFDckUsMEVBTUU7WUFFRixpQ0FBa0Q7WUFBQSx1QkFBTTtZQUFBLGlCQUFTO1lBQ25FLGlCQUFTO1lBQ1gsaUJBQVU7O1lBakJGLGVBQTJDO1lBQTNDLGdGQUEyQztZQUc1QyxlQUF1RDtZQUF2RCw2RUFBdUQ7WUFPeEQsZUFBeUM7WUFBekMsbUNBQXlDOzs4QkRaL0M7Q0F3Q0MsQUFWRCxDQU15QyxVQUFVLEdBSWxEO1NBSlksbUJBQW1CO2dFQUFuQixtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQU4vQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQzthQUNyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrU3RlcHBlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgQSBjdXN0b20gQ0RLIGxpbmVhciBzdGVwcGVyIHdpdGggZm9ybXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2RrTGluZWFyU3RlcHBlcldpdGhGb3JtRXhhbXBsZSB7XG4gIGlzTGluZWFyID0gdHJ1ZTtcbiAgZmlyc3RGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2Vjb25kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICB0aGlzLmZpcnN0Rm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgIGZpcnN0Q29udHJvbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICBzZWNvbmRDb250cm9sOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZUxpbmVhcml0eSgpIHtcbiAgICAgIHRoaXMuaXNMaW5lYXIgPSAhdGhpcy5pc0xpbmVhcjtcbiAgfVxufVxuXG4vKiogQ3VzdG9tIENESyBsaW5lYXIgc3RlcHBlciBjb21wb25lbnQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlci5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka1N0ZXBwZXIsIHVzZUV4aXN0aW5nOiBDdXN0b21MaW5lYXJTdGVwcGVyfV1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tTGluZWFyU3RlcHBlciBleHRlbmRzIENka1N0ZXBwZXIge1xuICBzZWxlY3RTdGVwQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGhlYWRlcj5cbiAgICA8aDI+U3RlcCB7e3NlbGVjdGVkSW5kZXggKyAxfX0ve3tzdGVwcy5sZW5ndGh9fTwvaDI+XG4gIDwvaGVhZGVyPlxuXG4gIDxkaXYgW25nVGVtcGxhdGVPdXRsZXRdPVwic2VsZWN0ZWQgPyBzZWxlY3RlZC5jb250ZW50IDogbnVsbFwiPjwvZGl2PlxuXG4gIDxmb290ZXIgY2xhc3M9XCJleGFtcGxlLXN0ZXAtbmF2aWdhdGlvbi1iYXJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlclByZXZpb3VzPiZsYXJyOzwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGVwXCJcbiAgICAgIFtjbGFzcy5leGFtcGxlLWFjdGl2ZV09XCJzZWxlY3RlZEluZGV4ID09PSBpXCJcbiAgICAgICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgIChjbGljayk9XCJzZWxlY3RTdGVwQnlJbmRleChpKVwiXG4gICAgPlxuICAgICAgU3RlcCB7eyBpICsgMSB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW5hdi1idXR0b25cIiBjZGtTdGVwcGVyTmV4dD4mcmFycjs8L2J1dHRvbj5cbiAgPC9mb290ZXI+XG48L3NlY3Rpb24+XG4iLCI8ZXhhbXBsZS1jdXN0b20tbGluZWFyLXN0ZXBwZXIgW2xpbmVhcl09XCJpc0xpbmVhclwiPlxuICA8Y2RrLXN0ZXAgW3N0ZXBDb250cm9sXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgPGxhYmVsIGZvcj1cInN0ZXBPbmVJbnB1dFwiPlN0ZXAgMSBpbnB1dDwvbGFiZWw+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXRcIiBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdENvbnRyb2xcIiBpZD1cInN0ZXBPbmVJbnB1dFwiIHJlcXVpcmVkPlxuICAgIDwvZm9ybT5cbiAgPC9jZGstc3RlcD5cbiAgPGNkay1zdGVwIFtzdGVwQ29udHJvbF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICA8bGFiZWwgZm9yPVwic3RlcFR3b0lucHV0XCI+U3RlcCAyIGlucHV0PC9sYWJlbD5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXRcIiBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDb250cm9sXCIgaWQ9XCJzdGVwVHdvSW5wdXRcIiByZXF1aXJlZD5cbiAgICA8L2Zvcm0+XG4gIDwvY2RrLXN0ZXA+XG48L2V4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyPlxuPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtdG9nZ2xlLWxpbmVhci1idXR0b25cIiAoY2xpY2spPVwidG9nZ2xlTGluZWFyaXR5KClcIj5cbiAge3tpc0xpbmVhciA/ICdEaXNhYmxlIGxpbmVhciBtb2RlJyA6ICdFbmFibGUgbGluZWFyIG1vZGUnfX1cbjwvYnV0dG9uPlxuIl19