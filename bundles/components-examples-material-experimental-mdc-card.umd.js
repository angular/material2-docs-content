(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material-experimental/mdc-button'), require('@angular/material-experimental/mdc-card')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/mdc-card', ['exports', '@angular/core', '@angular/material-experimental/mdc-button', '@angular/material-experimental/mdc-card'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.mdcCard = {}), global.ng.core, global.ng.materialExperimental.mdcButton, global.ng.materialExperimental.mdcCard));
}(this, (function (exports, i0, i2, i1) { 'use strict';

    /**
     * @title Card with multiple sections
     */
    var MdcCardFancyExample = /** @class */ (function () {
        function MdcCardFancyExample() {
        }
        return MdcCardFancyExample;
    }());
    MdcCardFancyExample.ɵfac = function MdcCardFancyExample_Factory(t) { return new (t || MdcCardFancyExample)(); };
    MdcCardFancyExample.ɵcmp = i0.ɵɵdefineComponent({ type: MdcCardFancyExample, selectors: [["mdc-card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function MdcCardFancyExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-card", 0);
                i0.ɵɵelementStart(1, "mat-card-header");
                i0.ɵɵelement(2, "div", 1);
                i0.ɵɵelementStart(3, "mat-card-title");
                i0.ɵɵtext(4, "Shiba Inu");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-card-subtitle");
                i0.ɵɵtext(6, "Dog Breed");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(7, "img", 2);
                i0.ɵɵelementStart(8, "mat-card-content");
                i0.ɵɵelementStart(9, "p");
                i0.ɵɵtext(10, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-card-actions");
                i0.ɵɵelementStart(12, "button", 3);
                i0.ɵɵtext(13, "LIKE");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "button", 3);
                i0.ɵɵtext(15, "SHARE");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatCard, i1.MatCardHeader, i1.MatCardAvatar, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardImage, i1.MatCardContent, i1.MatCardActions, i2.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdcCardFancyExample, [{
                type: i0.Component,
                args: [{
                        selector: 'mdc-card-fancy-example',
                        templateUrl: 'mdc-card-fancy-example.html',
                        styleUrls: ['mdc-card-fancy-example.css'],
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        MdcCardFancyExample,
    ];
    var MdcCardExamplesModule = /** @class */ (function () {
        function MdcCardExamplesModule() {
        }
        return MdcCardExamplesModule;
    }());
    MdcCardExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MdcCardExamplesModule });
    MdcCardExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MdcCardExamplesModule_Factory(t) { return new (t || MdcCardExamplesModule)(); }, imports: [[
                i2.MatButtonModule,
                i1.MatCardModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdcCardExamplesModule, { declarations: [MdcCardFancyExample], imports: [i2.MatButtonModule,
                i1.MatCardModule], exports: [MdcCardFancyExample] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdcCardExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.MatButtonModule,
                            i1.MatCardModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MdcCardExamplesModule = MdcCardExamplesModule;
    exports.MdcCardFancyExample = MdcCardFancyExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-mdc-card.umd.js.map
