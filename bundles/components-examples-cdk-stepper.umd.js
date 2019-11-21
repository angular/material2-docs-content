(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/stepper'), require('@angular/common'), require('@angular/core'), require('tslib')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/stepper', ['exports', '@angular/cdk/stepper', '@angular/common', '@angular/core', 'tslib'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.stepper = {}), global.ng.cdk.stepper, global.ng.common, global.ng.core, global.tslib));
}(this, (function (exports, i1, i2, i0, tslib) { 'use strict';

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
            { type: i0.Component, args: [{
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
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkCustomStepperWithoutFormExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-custom-stepper-without-form-example',
                    templateUrl: './cdk-custom-stepper-without-form-example.html',
                    styleUrls: ['./cdk-custom-stepper-without-form-example.css']
                }]
        }], null, null); })();
    /** Custom CDK stepper component */
    var CustomStepper = /** @class */ (function (_super) {
        tslib.__extends(CustomStepper, _super);
        function CustomStepper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomStepper.prototype.onClick = function (index) {
            this.selectedIndex = index;
        };
        CustomStepper.decorators = [
            { type: i0.Component, args: [{
                        selector: 'example-custom-stepper',
                        templateUrl: './example-custom-stepper.html',
                        styleUrls: ['./example-custom-stepper.css'],
                        providers: [{ provide: i1.CdkStepper, useExisting: CustomStepper }]
                    },] },
        ];
        CustomStepper.ɵfac = function CustomStepper_Factory(t) { return ɵCustomStepper_BaseFactory(t || CustomStepper); };
        CustomStepper.ɵcmp = i0.ɵɵdefineComponent({ type: CustomStepper, selectors: [["example-custom-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: i1.CdkStepper, useExisting: CustomStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 5, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "ngClass", "click"]], template: function CustomStepper_Template(rf, ctx) { if (rf & 1) {
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
    }(i1.CdkStepper));
    var ɵCustomStepper_BaseFactory = i0.ɵɵgetInheritedFactory(CustomStepper);
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomStepper, [{
            type: i0.Component,
            args: [{
                    selector: 'example-custom-stepper',
                    templateUrl: './example-custom-stepper.html',
                    styleUrls: ['./example-custom-stepper.css'],
                    providers: [{ provide: i1.CdkStepper, useExisting: CustomStepper }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CdkStepperModule,
                            i2.CommonModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        CdkStepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
        CdkStepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkStepperExamplesModule_Factory(t) { return new (t || CdkStepperExamplesModule)(); }, imports: [[
                    i1.CdkStepperModule,
                    i2.CommonModule,
                ]] });
        return CdkStepperExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkStepperExamplesModule, { declarations: [CdkCustomStepperWithoutFormExample,
            CustomStepper], imports: [i1.CdkStepperModule,
            i2.CommonModule], exports: [CdkCustomStepperWithoutFormExample,
            CustomStepper] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkStepperExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.CdkStepperModule,
                        i2.CommonModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.CdkCustomStepperWithoutFormExample = CdkCustomStepperWithoutFormExample;
    exports.CdkStepperExamplesModule = CdkStepperExamplesModule;
    exports.CustomStepper = CustomStepper;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-stepper.umd.js.map
