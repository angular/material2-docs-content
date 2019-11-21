import { CdkStep, CdkStepper, CdkStepperPrevious, CdkStepperNext, CdkStepperModule } from '@angular/cdk/stepper';
import { NgTemplateOutlet, NgForOf, NgClass, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵpureFunction1, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineComponent, ɵsetClassMetadata, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵelementContainer, ɵɵtemplate, ɵɵtextInterpolate2, ɵɵstyleProp, ɵɵgetInheritedFactory, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { __extends } from 'tslib';

var _c0 = function (a0) { return { "example-active": a0 }; };
function CustomStepper_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function CustomStepper_button_9_Template_button_click_0_listener($event) { ɵɵrestoreView(_r4); var i_r2 = ctx.index; var ctx_r3 = ɵɵnextContext(); return ctx_r3.onClick(i_r2); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var i_r2 = ctx.index;
    var ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c0, ctx_r0.selectedIndex === i_r2));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
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
    CdkCustomStepperWithoutFormExample.ɵcmp = ɵɵdefineComponent({ type: CdkCustomStepperWithoutFormExample, selectors: [["cdk-custom-stepper-without-form-example"]], decls: 7, vars: 0, template: function CdkCustomStepperWithoutFormExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "example-custom-stepper");
            ɵɵelementStart(1, "cdk-step");
            ɵɵelementStart(2, "p");
            ɵɵtext(3, "This is any content of \"Step 1\"");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(4, "cdk-step");
            ɵɵelementStart(5, "p");
            ɵɵtext(6, "This is any content of \"Step 2\"");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: function () { return [CustomStepper, CdkStep]; }, styles: [""] });
    return CdkCustomStepperWithoutFormExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkCustomStepperWithoutFormExample, [{
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
    CustomStepper.ɵcmp = ɵɵdefineComponent({ type: CustomStepper, selectors: [["example-custom-stepper"]], features: [ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomStepper }]), ɵɵInheritDefinitionFeature], decls: 12, vars: 5, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "ngClass", "click"]], template: function CustomStepper_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "section", 0);
            ɵɵelementStart(1, "header");
            ɵɵelementStart(2, "h2");
            ɵɵtext(3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(4, "div");
            ɵɵelementContainer(5, 1);
            ɵɵelementEnd();
            ɵɵelementStart(6, "footer", 2);
            ɵɵelementStart(7, "button", 3);
            ɵɵtext(8, "\u2190");
            ɵɵelementEnd();
            ɵɵtemplate(9, CustomStepper_button_9_Template, 2, 4, "button", 4);
            ɵɵelementStart(10, "button", 5);
            ɵɵtext(11, "\u2192");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(3);
            ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
            ɵɵadvance(1);
            ɵɵstyleProp("display", ctx.selected ? "block" : "none");
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.selected.content);
            ɵɵadvance(4);
            ɵɵproperty("ngForOf", ctx._stepsArray);
        } }, directives: [NgTemplateOutlet, CdkStepperPrevious, NgForOf, CdkStepperNext, NgClass], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-active[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  color: blue;\n  border-bottom: 1px solid blue;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n}"] });
    return CustomStepper;
}(CdkStepper));
var ɵCustomStepper_BaseFactory = ɵɵgetInheritedFactory(CustomStepper);
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-stepper',
                templateUrl: './example-custom-stepper.html',
                styleUrls: ['./example-custom-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomStepper }]
            }]
    }], null, null); })();

var EXAMPLES = [
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
];
var CdkStepperExamplesModule = /** @class */ (function () {
    function CdkStepperExamplesModule() {
    }
    CdkStepperExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CdkStepperModule,
                        CommonModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CdkStepperExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
    CdkStepperExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkStepperExamplesModule_Factory(t) { return new (t || CdkStepperExamplesModule)(); }, imports: [[
                CdkStepperModule,
                CommonModule,
            ]] });
    return CdkStepperExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkStepperExamplesModule, { declarations: [CdkCustomStepperWithoutFormExample,
        CustomStepper], imports: [CdkStepperModule,
        CommonModule], exports: [CdkCustomStepperWithoutFormExample,
        CustomStepper] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkStepperExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkStepperModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { CdkCustomStepperWithoutFormExample, CdkStepperExamplesModule, CustomStepper };
//# sourceMappingURL=stepper.js.map
