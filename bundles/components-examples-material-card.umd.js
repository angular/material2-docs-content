(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/divider'), require('@angular/material/progress-bar')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/card', ['exports', '@angular/core', '@angular/material/button', '@angular/material/card', '@angular/material/divider', '@angular/material/progress-bar'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.card = {}), global.ng.core, global.ng.material.button, global.ng.material.card, global.ng.material.divider, global.ng.material.progressBar));
}(this, (function (exports, i0, i2, i1, i2$1, i4) { 'use strict';

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
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

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
                args: [{ selector: 'card-fancy-example', template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
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
                args: [{ selector: 'card-overview-example', template: "<mat-card>Simple card</mat-card>\n" }]
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
                args: [{ selector: 'card-harness-example', template: "<mat-card>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <div mat-card-image></div>\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n      Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu\n      was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n" }]
            }], null, null);
    })();

    /**
     * @title Card with actions alignment option
     */
    var CardActionsExample = /** @class */ (function () {
        function CardActionsExample() {
        }
        return CardActionsExample;
    }());
    CardActionsExample.ɵfac = function CardActionsExample_Factory(t) { return new (t || CardActionsExample)(); };
    CardActionsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CardActionsExample, selectors: [["card-actions-example"]], decls: 21, vars: 0, consts: [["mat-button", ""], ["align", "end"]], template: function CardActionsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card");
                i0__namespace.ɵɵelementStart(1, "mat-card-title");
                i0__namespace.ɵɵtext(2, "Actions Buttons");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-card-subtitle");
                i0__namespace.ɵɵtext(4, "Start");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-card-actions");
                i0__namespace.ɵɵelementStart(6, "button", 0);
                i0__namespace.ɵɵtext(7, "LIKE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "button", 0);
                i0__namespace.ɵɵtext(9, "SHARE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(10, "br");
                i0__namespace.ɵɵelementStart(11, "mat-card");
                i0__namespace.ɵɵelementStart(12, "mat-card-title");
                i0__namespace.ɵɵtext(13, "Actions Buttons");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-card-subtitle");
                i0__namespace.ɵɵtext(15, "End");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "mat-card-actions", 1);
                i0__namespace.ɵɵelementStart(17, "button", 0);
                i0__namespace.ɵɵtext(18, "Like");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "button", 0);
                i0__namespace.ɵɵtext(20, "SHARE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardTitle, i1__namespace.MatCardSubtitle, i1__namespace.MatCardActions, i2__namespace.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardActionsExample, [{
                type: i0.Component,
                args: [{ selector: 'card-actions-example', template: "<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>Start</mat-card-subtitle>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>End</mat-card-subtitle>\n  <mat-card-actions align=\"end\">\n    <button mat-button>Like</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>" }]
            }], null, null);
    })();

    /**
     * @title Card with media size
     */
    var CardMediaSizeExample = /** @class */ (function () {
        function CardMediaSizeExample() {
            this.longText = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog\n  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n  originally bred for hunting.";
        }
        return CardMediaSizeExample;
    }());
    CardMediaSizeExample.ɵfac = function CardMediaSizeExample_Factory(t) { return new (t || CardMediaSizeExample)(); };
    CardMediaSizeExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CardMediaSizeExample, selectors: [["card-media-size-example"]], decls: 36, vars: 4, consts: [[1, "example-card"], ["mat-card-sm-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], ["mat-card-md-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], ["mat-card-lg-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], ["mat-card-xl-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"]], template: function CardMediaSizeExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card", 0);
                i0__namespace.ɵɵelementStart(1, "mat-card-title-group");
                i0__namespace.ɵɵelementStart(2, "mat-card-title");
                i0__namespace.ɵɵtext(3, "Shiba Inu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-card-subtitle");
                i0__namespace.ɵɵtext(5, "Small");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(6, "img", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-card-content");
                i0__namespace.ɵɵtext(8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "mat-card", 0);
                i0__namespace.ɵɵelementStart(10, "mat-card-title-group");
                i0__namespace.ɵɵelementStart(11, "mat-card-title");
                i0__namespace.ɵɵtext(12, "Shiba Inu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "mat-card-subtitle");
                i0__namespace.ɵɵtext(14, "Medium");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(15, "img", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "mat-card-content");
                i0__namespace.ɵɵtext(17);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "mat-card", 0);
                i0__namespace.ɵɵelementStart(19, "mat-card-title-group");
                i0__namespace.ɵɵelementStart(20, "mat-card-title");
                i0__namespace.ɵɵtext(21, "Shiba Inu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "mat-card-subtitle");
                i0__namespace.ɵɵtext(23, "Large");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(24, "img", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(25, "mat-card-content");
                i0__namespace.ɵɵtext(26);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(27, "mat-card", 0);
                i0__namespace.ɵɵelementStart(28, "mat-card-title-group");
                i0__namespace.ɵɵelementStart(29, "mat-card-title");
                i0__namespace.ɵɵtext(30, "Shiba Inu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(31, "mat-card-subtitle");
                i0__namespace.ɵɵtext(32, "Extra large");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(33, "img", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(34, "mat-card-content");
                i0__namespace.ɵɵtext(35);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.longText, " ");
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.longText, " ");
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.longText, " ");
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.longText, " ");
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardTitleGroup, i1__namespace.MatCardTitle, i1__namespace.MatCardSubtitle, i1__namespace.MatCardSmImage, i1__namespace.MatCardContent, i1__namespace.MatCardMdImage, i1__namespace.MatCardLgImage, i1__namespace.MatCardXlImage], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin-bottom: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardMediaSizeExample, [{
                type: i0.Component,
                args: [{ selector: 'card-media-size-example', template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Small</mat-card-subtitle>\n    <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Medium</mat-card-subtitle>\n    <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Large</mat-card-subtitle>\n    <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Extra large</mat-card-subtitle>\n    <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Card with sub-title
     */
    var CardSubtitleExample = /** @class */ (function () {
        function CardSubtitleExample() {
            this.longText = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog\n  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n  originally bred for hunting.";
        }
        return CardSubtitleExample;
    }());
    CardSubtitleExample.ɵfac = function CardSubtitleExample_Factory(t) { return new (t || CardSubtitleExample)(); };
    CardSubtitleExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CardSubtitleExample, selectors: [["card-subtitle-example"]], decls: 15, vars: 1, consts: [[1, "example-card"], ["mat-button", ""]], template: function CardSubtitleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card", 0);
                i0__namespace.ɵɵelementStart(1, "mat-card-title");
                i0__namespace.ɵɵtext(2, "Shiba Inu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-card-subtitle");
                i0__namespace.ɵɵtext(4, "Dog Breed");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-card-content");
                i0__namespace.ɵɵelementStart(6, "p");
                i0__namespace.ɵɵtext(7, "This card indeterminates progress bar.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "p");
                i0__namespace.ɵɵtext(9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-card-actions");
                i0__namespace.ɵɵelementStart(11, "button", 1);
                i0__namespace.ɵɵtext(12, "LIKE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "button", 1);
                i0__namespace.ɵɵtext(14, "SHARE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵtextInterpolate(ctx.longText);
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardTitle, i1__namespace.MatCardSubtitle, i1__namespace.MatCardContent, i1__namespace.MatCardActions, i2__namespace.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardSubtitleExample, [{
                type: i0.Component,
                args: [{ selector: 'card-subtitle-example', template: "<mat-card class=\"example-card\">\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Card with footer
     */
    var CardFooterExample = /** @class */ (function () {
        function CardFooterExample() {
            this.longText = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog\n  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n  originally bred for hunting.";
        }
        return CardFooterExample;
    }());
    CardFooterExample.ɵfac = function CardFooterExample_Factory(t) { return new (t || CardFooterExample)(); };
    CardFooterExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CardFooterExample, selectors: [["card-footer-example"]], decls: 18, vars: 1, consts: [[1, "example-card"], ["inset", ""], ["mat-button", ""], ["mode", "indeterminate"]], template: function CardFooterExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card", 0);
                i0__namespace.ɵɵelementStart(1, "mat-card-subtitle");
                i0__namespace.ɵɵtext(2, "Dog Breed");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-card-title");
                i0__namespace.ɵɵtext(4, "Shiba Inu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-card-content");
                i0__namespace.ɵɵelementStart(6, "p");
                i0__namespace.ɵɵtext(7, "This card has divider and indeterminate progress as footer");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "p");
                i0__namespace.ɵɵtext(9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(10, "mat-divider", 1);
                i0__namespace.ɵɵelementStart(11, "mat-card-actions");
                i0__namespace.ɵɵelementStart(12, "button", 2);
                i0__namespace.ɵɵtext(13, "LIKE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "button", 2);
                i0__namespace.ɵɵtext(15, "SHARE");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "mat-card-footer");
                i0__namespace.ɵɵelement(17, "mat-progress-bar", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵtextInterpolate(ctx.longText);
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardSubtitle, i1__namespace.MatCardTitle, i1__namespace.MatCardContent, i2__namespace$1.MatDivider, i1__namespace.MatCardActions, i2__namespace.MatButton, i1__namespace.MatCardFooter, i4__namespace.MatProgressBar], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardFooterExample, [{
                type: i0.Component,
                args: [{ selector: 'card-footer-example', template: "<mat-card class=\"example-card\">\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n  </mat-card-content>\n  <mat-divider inset></mat-divider>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n\n"] }]
            }], null, null);
    })();

    var EXAMPLES = [
        CardFancyExample,
        CardOverviewExample,
        CardHarnessExample,
        CardActionsExample,
        CardMediaSizeExample,
        CardSubtitleExample,
        CardFooterExample
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
                i2$1.MatDividerModule,
                i4.MatProgressBarModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.MatButtonModule,
                            i1.MatCardModule,
                            i2$1.MatDividerModule,
                            i4.MatProgressBarModule
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
                CardHarnessExample,
                CardActionsExample,
                CardMediaSizeExample,
                CardSubtitleExample,
                CardFooterExample], imports: [i2.MatButtonModule,
                i1.MatCardModule,
                i2$1.MatDividerModule,
                i4.MatProgressBarModule], exports: [CardFancyExample,
                CardOverviewExample,
                CardHarnessExample,
                CardActionsExample,
                CardMediaSizeExample,
                CardSubtitleExample,
                CardFooterExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardActionsExample = CardActionsExample;
    exports.CardExamplesModule = CardExamplesModule;
    exports.CardFancyExample = CardFancyExample;
    exports.CardFooterExample = CardFooterExample;
    exports.CardHarnessExample = CardHarnessExample;
    exports.CardMediaSizeExample = CardMediaSizeExample;
    exports.CardOverviewExample = CardOverviewExample;
    exports.CardSubtitleExample = CardSubtitleExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-card.umd.js.map
