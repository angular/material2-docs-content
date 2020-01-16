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
            i0.ɵɵproperty("ngForOf", ctx.steps);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zdGVwcGVyL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0lDVTVDLGlDQU1FO0lBRkEsK01BQW9CO0lBRXBCLFlBQ0Y7SUFBQSxpQkFBUzs7OztJQUpQLG1GQUFxRDtJQUdyRCxlQUNGO0lBREUsOENBQ0Y7O0FEZkosaURBQWlEO0FBQ2pEO0lBQUE7S0FLa0Q7d0hBQXJDLGtDQUFrQzsyRUFBbEMsa0NBQWtDO1lFVC9DLDhDQUNFO1lBQUEsZ0NBQVc7WUFBQSx5QkFBRztZQUFBLGlEQUErQjtZQUFBLGlCQUFJO1lBQUMsaUJBQVc7WUFDN0QsZ0NBQVc7WUFBQSx5QkFBRztZQUFBLGlEQUErQjtZQUFBLGlCQUFJO1lBQUMsaUJBQVc7WUFDL0QsaUJBQXlCOytDRmVaLGFBQWE7NkNBbEIxQjtDQVNrRCxBQUxsRCxJQUtrRDtTQUFyQyxrQ0FBa0M7a0RBQWxDLGtDQUFrQztjQUw5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsV0FBVyxFQUFFLGdEQUFnRDtnQkFDN0QsU0FBUyxFQUFFLENBQUMsK0NBQStDLENBQUM7YUFDN0Q7O0FBR0QsbUNBQW1DO0FBQ25DO0lBTW1DLGlDQUFVO0lBTjdDOztLQWdCQztJQVRDLCtCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7b0dBSFUsYUFBYTtzREFBYixhQUFhLDRFQUZiLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsQ0FBQztZQ2hCbEUsa0NBQ0U7WUFBQSw4QkFDRTtZQUFBLDBCQUFJO1lBQUEsWUFBK0M7WUFBQSxpQkFBSztZQUMxRCxpQkFBUztZQUVULDJCQUNFO1lBQUEsMkJBQW1FO1lBQ3JFLGlCQUFNO1lBRU4saUNBQ0U7WUFBQSxpQ0FBc0Q7WUFBQSxzQkFBTTtZQUFBLGlCQUFTO1lBQ3JFLG9FQU1FO1lBRUYsa0NBQWtEO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUNuRSxpQkFBUztZQUNYLGlCQUFVOztZQW5CRixlQUErQztZQUEvQyxnRkFBK0M7WUFHaEQsZUFBNkM7WUFBN0MsMERBQTZDO1lBQ2xDLGVBQXFDO1lBQXJDLHVEQUFxQztZQU9qRCxlQUF5QztZQUF6QyxtQ0FBeUM7O3dCRGIvQztDQTRCQyxBQWhCRCxDQU1tQyxVQUFVLEdBVTVDO1NBVlksYUFBYTswREFBYixhQUFhO2tEQUFiLGFBQWE7Y0FOekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO2FBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtTdGVwcGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5cbi8qKiBAdGl0bGUgQSBjdXN0b20gQ0RLIHN0ZXBwZXIgd2l0aG91dCBhIGZvcm0gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlIHt9XG5cbi8qKiBDdXN0b20gQ0RLIHN0ZXBwZXIgY29tcG9uZW50ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLWN1c3RvbS1zdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuY3NzJ10sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrU3RlcHBlciwgdXNlRXhpc3Rpbmc6IEN1c3RvbVN0ZXBwZXIgfV1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3RlcHBlciBleHRlbmRzIENka1N0ZXBwZXIge1xuICBvbkNsaWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIC8vIFRoZXNlIHByb3BlcnRpZXMgYXJlIHJlcXVpcmVkIHNvIHRoYXQgdGhlIEl2eSB0ZW1wbGF0ZSB0eXBlIGNoZWNrZXIgaW4gc3RyaWN0IG1vZGUga25vd3NcbiAgLy8gd2hhdCBraW5kIG9mIHZhbHVlcyBhcmUgYWNjZXB0ZWQgYnkgdGhlIGBsaW5lYXJgIGFuZCBgc2VsZWN0ZWRJbmRleGAgaW5wdXRzIHdoaWNoXG4gIC8vIGFyZSBpbmhlcml0ZWQgZnJvbSBgQ2RrU3RlcHBlcmAuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saW5lYXI6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGhlYWRlcj5cbiAgICA8aDI+U3RlcCB7eyBzZWxlY3RlZEluZGV4ICsgMSB9fS97eyBzdGVwcy5sZW5ndGggfX08L2gyPlxuICA8L2hlYWRlcj5cblxuICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cInNlbGVjdGVkID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwic2VsZWN0ZWQuY29udGVudFwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8Zm9vdGVyIGNsYXNzPVwiZXhhbXBsZS1zdGVwLW5hdmlnYXRpb24tYmFyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJQcmV2aW91cz4mbGFycjs8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImV4YW1wbGUtc3RlcFwiXG4gICAgICAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICBbbmdDbGFzc109XCJ7ICdleGFtcGxlLWFjdGl2ZSc6IHNlbGVjdGVkSW5kZXggPT09IGkgfVwiXG4gICAgICAoY2xpY2spPVwib25DbGljayhpKVwiXG4gICAgPlxuICAgICAgU3RlcCB7eyBpICsgMSB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW5hdi1idXR0b25cIiBjZGtTdGVwcGVyTmV4dD4mcmFycjs8L2J1dHRvbj5cbiAgPC9mb290ZXI+XG48L3NlY3Rpb24+XG4iLCI8ZXhhbXBsZS1jdXN0b20tc3RlcHBlcj5cbiAgPGNkay1zdGVwPiA8cD5UaGlzIGlzIGFueSBjb250ZW50IG9mIFwiU3RlcCAxXCI8L3A+IDwvY2RrLXN0ZXA+XG4gIDxjZGstc3RlcD4gPHA+VGhpcyBpcyBhbnkgY29udGVudCBvZiBcIlN0ZXAgMlwiPC9wPiA8L2Nkay1zdGVwPlxuPC9leGFtcGxlLWN1c3RvbS1zdGVwcGVyPlxuIl19