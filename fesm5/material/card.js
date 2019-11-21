import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵelement, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent, MatCardActions, MatCardModule } from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
var CardFancyExample = /** @class */ (function () {
    function CardFancyExample() {
    }
    CardFancyExample.decorators = [
        { type: Component, args: [{
                    selector: 'card-fancy-example',
                    templateUrl: 'card-fancy-example.html',
                    styleUrls: ['card-fancy-example.css'],
                },] },
    ];
    CardFancyExample.ɵfac = function CardFancyExample_Factory(t) { return new (t || CardFancyExample)(); };
    CardFancyExample.ɵcmp = ɵɵdefineComponent({ type: CardFancyExample, selectors: [["card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function CardFancyExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-card", 0);
            ɵɵelementStart(1, "mat-card-header");
            ɵɵelement(2, "div", 1);
            ɵɵelementStart(3, "mat-card-title");
            ɵɵtext(4, "Shiba Inu");
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-card-subtitle");
            ɵɵtext(6, "Dog Breed");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(7, "img", 2);
            ɵɵelementStart(8, "mat-card-content");
            ɵɵelementStart(9, "p");
            ɵɵtext(10, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(11, "mat-card-actions");
            ɵɵelementStart(12, "button", 3);
            ɵɵtext(13, "LIKE");
            ɵɵelementEnd();
            ɵɵelementStart(14, "button", 3);
            ɵɵtext(15, "SHARE");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent, MatCardActions, MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}"] });
    return CardFancyExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardFancyExample, [{
        type: Component,
        args: [{
                selector: 'card-fancy-example',
                templateUrl: 'card-fancy-example.html',
                styleUrls: ['card-fancy-example.css'],
            }]
    }], null, null); })();

/**
 * @title Basic cards
 */
var CardOverviewExample = /** @class */ (function () {
    function CardOverviewExample() {
    }
    CardOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'card-overview-example',
                    templateUrl: 'card-overview-example.html',
                    styleUrls: ['card-overview-example.css'],
                },] },
    ];
    CardOverviewExample.ɵfac = function CardOverviewExample_Factory(t) { return new (t || CardOverviewExample)(); };
    CardOverviewExample.ɵcmp = ɵɵdefineComponent({ type: CardOverviewExample, selectors: [["card-overview-example"]], decls: 2, vars: 0, template: function CardOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-card");
            ɵɵtext(1, "Simple card");
            ɵɵelementEnd();
        } }, directives: [MatCard], styles: [""] });
    return CardOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardOverviewExample, [{
        type: Component,
        args: [{
                selector: 'card-overview-example',
                templateUrl: 'card-overview-example.html',
                styleUrls: ['card-overview-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    CardFancyExample,
    CardOverviewExample,
];
var CardExamplesModule = /** @class */ (function () {
    function CardExamplesModule() {
    }
    CardExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatCardModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CardExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CardExamplesModule });
    CardExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CardExamplesModule_Factory(t) { return new (t || CardExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatCardModule,
            ]] });
    return CardExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardExamplesModule, { declarations: [CardFancyExample,
        CardOverviewExample], imports: [MatButtonModule,
        MatCardModule], exports: [CardFancyExample,
        CardOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatCardModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { CardExamplesModule, CardFancyExample, CardOverviewExample };
//# sourceMappingURL=card.js.map
