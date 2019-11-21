import { __extends } from "tslib";
import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/stepper";
import * as i2 from "@angular/common";
var _c0 = function (a0) { return { "example-active": a0 }; };
function CustomStepper_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function CustomStepper_button_9_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r4); var i_r2 = ctx.index; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onClick(i_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r2 = ctx.index;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.selectedIndex === i_r2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
} }
/** @title A custom CDK stepper without a form */
var CdkCustomStepperWithoutFormExample = /** @class */ (function () {
    function CdkCustomStepperWithoutFormExample() {
    }
    CdkCustomStepperWithoutFormExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-custom-stepper-without-form-example',
                    templateUrl: './cdk-custom-stepper-without-form-example.html',
                    styleUrls: ['./cdk-custom-stepper-without-form-example.css']
                },] },
    ];
    CdkCustomStepperWithoutFormExample.ɵfac = function CdkCustomStepperWithoutFormExample_Factory(t) { return new (t || CdkCustomStepperWithoutFormExample)(); };
    CdkCustomStepperWithoutFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkCustomStepperWithoutFormExample, selectors: [["cdk-custom-stepper-without-form-example"]], decls: 7, vars: 0, template: function CdkCustomStepperWithoutFormExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "example-custom-stepper");
            i0.ɵɵelementStart(1, "cdk-step");
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "This is any content of \"Step 1\"");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "cdk-step");
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "This is any content of \"Step 2\"");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: function () { return [CustomStepper, i1.CdkStep]; }, styles: [""] });
    return CdkCustomStepperWithoutFormExample;
}());
export { CdkCustomStepperWithoutFormExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkCustomStepperWithoutFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-custom-stepper-without-form-example',
                templateUrl: './cdk-custom-stepper-without-form-example.html',
                styleUrls: ['./cdk-custom-stepper-without-form-example.css']
            }]
    }], null, null); })();
/** Custom CDK stepper component */
var CustomStepper = /** @class */ (function (_super) {
    __extends(CustomStepper, _super);
    function CustomStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomStepper.prototype.onClick = function (index) {
        this.selectedIndex = index;
    };
    CustomStepper.decorators = [
        { type: Component, args: [{
                    selector: 'example-custom-stepper',
                    templateUrl: './example-custom-stepper.html',
                    styleUrls: ['./example-custom-stepper.css'],
                    providers: [{ provide: CdkStepper, useExisting: CustomStepper }]
                },] },
    ];
    CustomStepper.ɵfac = function CustomStepper_Factory(t) { return ɵCustomStepper_BaseFactory(t || CustomStepper); };
    CustomStepper.ɵcmp = i0.ɵɵdefineComponent({ type: CustomStepper, selectors: [["example-custom-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 5, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "ngClass", "click"]], template: function CustomStepper_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelementStart(1, "header");
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵelementContainer(5, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "footer", 2);
            i0.ɵɵelementStart(7, "button", 3);
            i0.ɵɵtext(8, "\u2190");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, CustomStepper_button_9_Template, 2, 4, "button", 4);
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵtext(11, "\u2192");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("display", ctx.selected ? "block" : "none");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.selected.content);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx._stepsArray);
        } }, directives: [i2.NgTemplateOutlet, i1.CdkStepperPrevious, i2.NgForOf, i1.CdkStepperNext, i2.NgClass], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-active[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  color: blue;\n  border-bottom: 1px solid blue;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n}"] });
    return CustomStepper;
}(CdkStepper));
export { CustomStepper };
var ɵCustomStepper_BaseFactory = i0.ɵɵgetInheritedFactory(CustomStepper);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-stepper',
                templateUrl: './example-custom-stepper.html',
                styleUrls: ['./example-custom-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomStepper }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zdGVwcGVyL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0lDVTVDLGlDQU1FO0lBRkEsK01BQW9CO0lBRXBCLFlBQ0Y7SUFBQSxpQkFBUzs7OztJQUpQLG1GQUFxRDtJQUdyRCxlQUNGO0lBREUsOENBQ0Y7O0FEZkosaURBQWlEO0FBQ2pEO0lBQUE7S0FLa0Q7O2dCQUxqRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztvQkFDbkQsV0FBVyxFQUFFLGdEQUFnRDtvQkFDN0QsU0FBUyxFQUFFLENBQUMsK0NBQStDLENBQUM7aUJBQzdEOzt3SEFDWSxrQ0FBa0M7MkVBQWxDLGtDQUFrQztZRVQvQyw4Q0FDRTtZQUFBLGdDQUFXO1lBQUEseUJBQUc7WUFBQSxpREFBK0I7WUFBQSxpQkFBSTtZQUFDLGlCQUFXO1lBQzdELGdDQUFXO1lBQUEseUJBQUc7WUFBQSxpREFBK0I7WUFBQSxpQkFBSTtZQUFDLGlCQUFXO1lBQy9ELGlCQUF5QjsrQ0ZlWixhQUFhOzZDQWxCMUI7Q0FTa0QsQUFMbEQsSUFLa0Q7U0FBckMsa0NBQWtDO2tEQUFsQyxrQ0FBa0M7Y0FMOUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELFdBQVcsRUFBRSxnREFBZ0Q7Z0JBQzdELFNBQVMsRUFBRSxDQUFDLCtDQUErQyxDQUFDO2FBQzdEOztBQUdELG1DQUFtQztBQUNuQztJQU1tQyxpQ0FBVTtJQU43Qzs7S0FnQkM7SUFUQywrQkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOztnQkFURixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLENBQUM7aUJBQ2pFOztvR0FDWSxhQUFhO3NEQUFiLGFBQWEsNEVBRmIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO1lDaEJsRSxrQ0FDRTtZQUFBLDhCQUNFO1lBQUEsMEJBQUk7WUFBQSxZQUErQztZQUFBLGlCQUFLO1lBQzFELGlCQUFTO1lBRVQsMkJBQ0U7WUFBQSwyQkFBbUU7WUFDckUsaUJBQU07WUFFTixpQ0FDRTtZQUFBLGlDQUFzRDtZQUFBLHNCQUFNO1lBQUEsaUJBQVM7WUFDckUsb0VBTUU7WUFFRixrQ0FBa0Q7WUFBQSx1QkFBTTtZQUFBLGlCQUFTO1lBQ25FLGlCQUFTO1lBQ1gsaUJBQVU7O1lBbkJGLGVBQStDO1lBQS9DLGdGQUErQztZQUdoRCxlQUE2QztZQUE3QywwREFBNkM7WUFDbEMsZUFBcUM7WUFBckMsdURBQXFDO1lBT2pELGVBQStDO1lBQS9DLHlDQUErQzs7d0JEYnJEO0NBNEJDLEFBaEJELENBTW1DLFVBQVUsR0FVNUM7U0FWWSxhQUFhOzBEQUFiLGFBQWE7a0RBQWIsYUFBYTtjQU56QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLENBQUM7YUFDakUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1N0ZXBwZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcblxuLyoqIEB0aXRsZSBBIGN1c3RvbSBDREsgc3RlcHBlciB3aXRob3V0IGEgZm9ybSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUge31cblxuLyoqIEN1c3RvbSBDREsgc3RlcHBlciBjb21wb25lbnQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtTdGVwcGVyLCB1c2VFeGlzdGluZzogQ3VzdG9tU3RlcHBlciB9XVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21TdGVwcGVyIGV4dGVuZHMgQ2RrU3RlcHBlciB7XG4gIG9uQ2xpY2soaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgLy8gVGhlc2UgcHJvcGVydGllcyBhcmUgcmVxdWlyZWQgc28gdGhhdCB0aGUgSXZ5IHRlbXBsYXRlIHR5cGUgY2hlY2tlciBpbiBzdHJpY3QgbW9kZSBrbm93c1xuICAvLyB3aGF0IGtpbmQgb2YgdmFsdWVzIGFyZSBhY2NlcHRlZCBieSB0aGUgYGxpbmVhcmAgYW5kIGBzZWxlY3RlZEluZGV4YCBpbnB1dHMgd2hpY2hcbiAgLy8gYXJlIGluaGVyaXRlZCBmcm9tIGBDZGtTdGVwcGVyYC5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmVhcjogYm9vbGVhbiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8aGVhZGVyPlxuICAgIDxoMj5TdGVwIHt7IHNlbGVjdGVkSW5kZXggKyAxIH19L3t7IHN0ZXBzLmxlbmd0aCB9fTwvaDI+XG4gIDwvaGVhZGVyPlxuXG4gIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwic2VsZWN0ZWQgPyAnYmxvY2snIDogJ25vbmUnXCI+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJzZWxlY3RlZC5jb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxmb290ZXIgY2xhc3M9XCJleGFtcGxlLXN0ZXAtbmF2aWdhdGlvbi1iYXJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlclByZXZpb3VzPiZsYXJyOzwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGVwXCJcbiAgICAgICpuZ0Zvcj1cImxldCBzdGVwIG9mIF9zdGVwc0FycmF5OyBsZXQgaSA9IGluZGV4XCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ2V4YW1wbGUtYWN0aXZlJzogc2VsZWN0ZWRJbmRleCA9PT0gaSB9XCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrKGkpXCJcbiAgICA+XG4gICAgICBTdGVwIHt7IGkgKyAxIH19XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJOZXh0PiZyYXJyOzwvYnV0dG9uPlxuICA8L2Zvb3Rlcj5cbjwvc2VjdGlvbj5cbiIsIjxleGFtcGxlLWN1c3RvbS1zdGVwcGVyPlxuICA8Y2RrLXN0ZXA+IDxwPlRoaXMgaXMgYW55IGNvbnRlbnQgb2YgXCJTdGVwIDFcIjwvcD4gPC9jZGstc3RlcD5cbiAgPGNkay1zdGVwPiA8cD5UaGlzIGlzIGFueSBjb250ZW50IG9mIFwiU3RlcCAyXCI8L3A+IDwvY2RrLXN0ZXA+XG48L2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXI+XG4iXX0=