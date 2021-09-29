(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material-experimental/mdc-button'), require('@angular/material-experimental/mdc-card')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/mdc-card', ['exports', '@angular/core', '@angular/material-experimental/mdc-button', '@angular/material-experimental/mdc-card'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.mdcCard = {}), global.ng.core, global.ng.materialExperimental.mdcButton, global.ng.materialExperimental.mdcCard));
}(this, (function (exports, i0, i2, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /**
     * @title Card with multiple sections
     */
    var MdcCardFancyExample = /** @class */ (function () {
        function MdcCardFancyExample() {
        }
        return MdcCardFancyExample;
    }());
    MdcCardFancyExample.ɵfac = function MdcCardFancyExample_Factory(t) { return new (t || MdcCardFancyExample)(); };
    MdcCardFancyExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MdcCardFancyExample, selectors: [["mdc-card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function MdcCardFancyExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card", 0);
                i0__namespace.ɵɵelementStart(1, "mat-card-header");
                i0__namespace.ɵɵelement(2, "div", 1);
                i0__namespace.ɵɵelementStart(3, "mat-card-title");
                i0__namespace.ɵɵtext(4, "Shiba Inu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-card-subtitle");
                i0__namespace.ɵɵtext(6, "Dog Breed");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(7, "img", 2);
                i0__namespace.ɵɵelementStart(8, "mat-card-content");
                i0__namespace.ɵɵelementStart(9, "p");
                i0__namespace.ɵɵtext(10, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "mat-card-actions");
                i0__namespace.ɵɵelementStart(12, "button", 3);
                i0__namespace.ɵɵtext(13, "LIKE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "button", 3);
                i0__namespace.ɵɵtext(15, "SHARE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardHeader, i1__namespace.MatCardAvatar, i1__namespace.MatCardTitle, i1__namespace.MatCardSubtitle, i1__namespace.MatCardImage, i1__namespace.MatCardContent, i1__namespace.MatCardActions, i2__namespace.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MdcCardFancyExample, [{
                type: i0.Component,
                args: [{ selector: 'mdc-card-fancy-example', template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
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
    MdcCardExamplesModule.ɵfac = function MdcCardExamplesModule_Factory(t) { return new (t || MdcCardExamplesModule)(); };
    MdcCardExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: MdcCardExamplesModule });
    MdcCardExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.MatButtonModule,
                i1.MatCardModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MdcCardExamplesModule, [{
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
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(MdcCardExamplesModule, { declarations: [MdcCardFancyExample], imports: [i2.MatButtonModule,
                i1.MatCardModule], exports: [MdcCardFancyExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MdcCardExamplesModule = MdcCardExamplesModule;
    exports.MdcCardFancyExample = MdcCardFancyExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-mdc-card.umd.js.map
