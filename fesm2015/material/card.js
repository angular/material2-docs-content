import { ɵɵdefineComponent, ɵɵelementStart, ɵɵelement, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent, MatCardActions, MatCardModule } from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
class CardFancyExample {
}
CardFancyExample.ɵfac = function CardFancyExample_Factory(t) { return new (t || CardFancyExample)(); };
CardFancyExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CardFancyExample, selectors: [["card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function CardFancyExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CardFancyExample, [{
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
class CardOverviewExample {
}
CardOverviewExample.ɵfac = function CardOverviewExample_Factory(t) { return new (t || CardOverviewExample)(); };
CardOverviewExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CardOverviewExample, selectors: [["card-overview-example"]], decls: 2, vars: 0, template: function CardOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-card");
        ɵɵtext(1, "Simple card");
        ɵɵelementEnd();
    } }, directives: [MatCard], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CardOverviewExample, [{
        type: Component,
        args: [{
                selector: 'card-overview-example',
                templateUrl: 'card-overview-example.html',
            }]
    }], null, null); })();

/**
 * @title Testing with MatCardHarness
 */
class CardHarnessExample {
}
CardHarnessExample.ɵfac = function CardHarnessExample_Factory(t) { return new (t || CardHarnessExample)(); };
CardHarnessExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CardHarnessExample, selectors: [["card-harness-example"]], decls: 17, vars: 0, consts: [["mat-card-avatar", ""], ["mat-card-image", ""], ["mat-button", ""]], template: function CardHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-card");
        ɵɵelementStart(1, "mat-card");
        ɵɵelementStart(2, "mat-card-header");
        ɵɵelement(3, "div", 0);
        ɵɵelementStart(4, "mat-card-title");
        ɵɵtext(5, "Shiba Inu");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-card-subtitle");
        ɵɵtext(7, "Dog Breed");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(8, "div", 1);
        ɵɵelementStart(9, "mat-card-content");
        ɵɵelementStart(10, "p");
        ɵɵtext(11, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-card-actions");
        ɵɵelementStart(13, "button", 2);
        ɵɵtext(14, "LIKE");
        ɵɵelementEnd();
        ɵɵelementStart(15, "button", 2);
        ɵɵtext(16, "SHARE");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent, MatCardActions, MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CardHarnessExample, [{
        type: Component,
        args: [{
                selector: 'card-harness-example',
                templateUrl: 'card-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    CardFancyExample,
    CardOverviewExample,
    CardHarnessExample,
];
class CardExamplesModule {
}
CardExamplesModule.ɵfac = function CardExamplesModule_Factory(t) { return new (t || CardExamplesModule)(); };
CardExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: CardExamplesModule });
CardExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatCardModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatCardModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardExamplesModule, { declarations: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample], imports: [MatButtonModule,
        MatCardModule], exports: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CardExamplesModule, CardFancyExample, CardHarnessExample, CardOverviewExample };
//# sourceMappingURL=card.js.map
