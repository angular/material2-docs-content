(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/card')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/card', ['exports', '@angular/core', '@angular/material/button', '@angular/material/card'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.card = {}), global.ng.core, global.ng.material.button, global.ng.material.card));
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
    var CardFancyExample = /** @class */ (function () {
        function CardFancyExample() {
        }
        return CardFancyExample;
    }());
    CardFancyExample.ɵfac = function CardFancyExample_Factory(t) { return new (t || CardFancyExample)(); };
    CardFancyExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CardFancyExample, selectors: [["card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function CardFancyExample_Template(rf, ctx) {
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
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardFancyExample, [{
                type: i0.Component,
                args: [{
                        selector: 'card-fancy-example',
                        templateUrl: 'card-fancy-example.html',
                        styleUrls: ['card-fancy-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Basic cards
     */
    var CardOverviewExample = /** @class */ (function () {
        function CardOverviewExample() {
        }
        return CardOverviewExample;
    }());
    CardOverviewExample.ɵfac = function CardOverviewExample_Factory(t) { return new (t || CardOverviewExample)(); };
    CardOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CardOverviewExample, selectors: [["card-overview-example"]], decls: 2, vars: 0, template: function CardOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card");
                i0__namespace.ɵɵtext(1, "Simple card");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatCard], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'card-overview-example',
                        templateUrl: 'card-overview-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatCardHarness
     */
    var CardHarnessExample = /** @class */ (function () {
        function CardHarnessExample() {
        }
        return CardHarnessExample;
    }());
    CardHarnessExample.ɵfac = function CardHarnessExample_Factory(t) { return new (t || CardHarnessExample)(); };
    CardHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CardHarnessExample, selectors: [["card-harness-example"]], decls: 17, vars: 0, consts: [["mat-card-avatar", ""], ["mat-card-image", ""], ["mat-button", ""]], template: function CardHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-card");
                i0__namespace.ɵɵelementStart(1, "mat-card");
                i0__namespace.ɵɵelementStart(2, "mat-card-header");
                i0__namespace.ɵɵelement(3, "div", 0);
                i0__namespace.ɵɵelementStart(4, "mat-card-title");
                i0__namespace.ɵɵtext(5, "Shiba Inu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "mat-card-subtitle");
                i0__namespace.ɵɵtext(7, "Dog Breed");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(8, "div", 1);
                i0__namespace.ɵɵelementStart(9, "mat-card-content");
                i0__namespace.ɵɵelementStart(10, "p");
                i0__namespace.ɵɵtext(11, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-card-actions");
                i0__namespace.ɵɵelementStart(13, "button", 2);
                i0__namespace.ɵɵtext(14, "LIKE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "button", 2);
                i0__namespace.ɵɵtext(16, "SHARE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardHeader, i1__namespace.MatCardAvatar, i1__namespace.MatCardTitle, i1__namespace.MatCardSubtitle, i1__namespace.MatCardImage, i1__namespace.MatCardContent, i1__namespace.MatCardActions, i2__namespace.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'card-harness-example',
                        templateUrl: 'card-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        CardFancyExample,
        CardOverviewExample,
        CardHarnessExample,
    ];
    var CardExamplesModule = /** @class */ (function () {
        function CardExamplesModule() {
        }
        return CardExamplesModule;
    }());
    CardExamplesModule.ɵfac = function CardExamplesModule_Factory(t) { return new (t || CardExamplesModule)(); };
    CardExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CardExamplesModule });
    CardExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.MatButtonModule,
                i1.MatCardModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardExamplesModule, [{
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
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CardExamplesModule, { declarations: [CardFancyExample,
                CardOverviewExample,
                CardHarnessExample], imports: [i2.MatButtonModule,
                i1.MatCardModule], exports: [CardFancyExample,
                CardOverviewExample,
                CardHarnessExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardExamplesModule = CardExamplesModule;
    exports.CardFancyExample = CardFancyExample;
    exports.CardHarnessExample = CardHarnessExample;
    exports.CardOverviewExample = CardOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-card.umd.js.map
