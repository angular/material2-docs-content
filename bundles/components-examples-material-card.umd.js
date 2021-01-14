(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/card')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/card', ['exports', '@angular/core', '@angular/material/button', '@angular/material/card'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.card = {}), global.ng.core, global.ng.material.button, global.ng.material.card));
}(this, (function (exports, i0, i2, i1) { 'use strict';

    /**
     * @title Card with multiple sections
     */
    var CardFancyExample = /** @class */ (function () {
        function CardFancyExample() {
        }
        return CardFancyExample;
    }());
    CardFancyExample.ɵfac = function CardFancyExample_Factory(t) { return new (t || CardFancyExample)(); };
    CardFancyExample.ɵcmp = i0.ɵɵdefineComponent({ type: CardFancyExample, selectors: [["card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function CardFancyExample_Template(rf, ctx) {
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
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardFancyExample, [{
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
    CardOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CardOverviewExample, selectors: [["card-overview-example"]], decls: 2, vars: 0, template: function CardOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-card");
                i0.ɵɵtext(1, "Simple card");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatCard], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardOverviewExample, [{
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
    CardHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: CardHarnessExample, selectors: [["card-harness-example"]], decls: 17, vars: 0, consts: [["mat-card-avatar", ""], ["mat-card-image", ""], ["mat-button", ""]], template: function CardHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-card");
                i0.ɵɵelementStart(1, "mat-card");
                i0.ɵɵelementStart(2, "mat-card-header");
                i0.ɵɵelement(3, "div", 0);
                i0.ɵɵelementStart(4, "mat-card-title");
                i0.ɵɵtext(5, "Shiba Inu");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-card-subtitle");
                i0.ɵɵtext(7, "Dog Breed");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "div", 1);
                i0.ɵɵelementStart(9, "mat-card-content");
                i0.ɵɵelementStart(10, "p");
                i0.ɵɵtext(11, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-card-actions");
                i0.ɵɵelementStart(13, "button", 2);
                i0.ɵɵtext(14, "LIKE");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "button", 2);
                i0.ɵɵtext(16, "SHARE");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatCard, i1.MatCardHeader, i1.MatCardAvatar, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardImage, i1.MatCardContent, i1.MatCardActions, i2.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardHarnessExample, [{
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
    CardExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CardExamplesModule });
    CardExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CardExamplesModule_Factory(t) { return new (t || CardExamplesModule)(); }, imports: [[
                i2.MatButtonModule,
                i1.MatCardModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CardExamplesModule, { declarations: [CardFancyExample,
                CardOverviewExample,
                CardHarnessExample], imports: [i2.MatButtonModule,
                i1.MatCardModule], exports: [CardFancyExample,
                CardOverviewExample,
                CardHarnessExample] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardExamplesModule, [{
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

    exports.CardExamplesModule = CardExamplesModule;
    exports.CardFancyExample = CardFancyExample;
    exports.CardHarnessExample = CardHarnessExample;
    exports.CardOverviewExample = CardOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-card.umd.js.map
