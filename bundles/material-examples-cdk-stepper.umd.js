(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/stepper'), require('@angular/common'), require('@angular/core'), require('tslib')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/cdk/stepper', ['exports', '@angular/cdk/stepper', '@angular/common', '@angular/core', 'tslib'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.cdk = global.ng.materialExamples.cdk || {}, global.ng.materialExamples.cdk.stepper = {}), global.ng.cdk.stepper, global.ng.common, global.ng.core, global.tslib));
}(this, function (exports, stepper, common, core, tslib_1) { 'use strict';

    /** @title A custom CDK stepper without a form */
    var CdkCustomStepperWithoutFormExample = /** @class */ (function () {
        function CdkCustomStepperWithoutFormExample() {
        }
        CdkCustomStepperWithoutFormExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-custom-stepper-without-form-example',
                        template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n",
                        styles: [""]
                    }] }
        ];
        return CdkCustomStepperWithoutFormExample;
    }());
    /** Custom CDK stepper component */
    var CustomStepper = /** @class */ (function (_super) {
        tslib_1.__extends(CustomStepper, _super);
        function CustomStepper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomStepper.prototype.onClick = function (index) {
            this.selectedIndex = index;
        };
        CustomStepper.decorators = [
            { type: core.Component, args: [{
                        selector: 'example-custom-stepper',
                        template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [style.display]=\"selected ? 'block' : 'none'\">\n    <ng-container [ngTemplateOutlet]=\"selected.content\"></ng-container>\n  </div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      *ngFor=\"let step of steps; let i = index\"\n      [ngClass]=\"{ 'example-active': selectedIndex === i }\"\n      (click)=\"onClick(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n",
                        providers: [{ provide: stepper.CdkStepper, useExisting: CustomStepper }],
                        styles: [".example-container {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-active {\n  color: blue;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active {\n  color: blue;\n  border-bottom: 1px solid blue;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n}\n"]
                    }] }
        ];
        return CustomStepper;
    }(stepper.CdkStepper));

    var EXAMPLES = [
        CdkCustomStepperWithoutFormExample,
        CustomStepper,
    ];
    var CdkStepperExamplesModule = /** @class */ (function () {
        function CdkStepperExamplesModule() {
        }
        CdkStepperExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            stepper.CdkStepperModule,
                            common.CommonModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CdkStepperExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkCustomStepperWithoutFormExample = CdkCustomStepperWithoutFormExample;
    exports.CustomStepper = CustomStepper;
    exports.CdkStepperExamplesModule = CdkStepperExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-cdk-stepper.umd.js.map
