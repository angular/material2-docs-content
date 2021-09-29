import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i2$1 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i4 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

/**
 * @title Card with multiple sections
 */
class CardFancyExample {
}
CardFancyExample.ɵfac = function CardFancyExample_Factory(t) { return new (t || CardFancyExample)(); };
CardFancyExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardFancyExample, selectors: [["card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function CardFancyExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatCard, i1.MatCardHeader, i1.MatCardAvatar, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardImage, i1.MatCardContent, i1.MatCardActions, i2.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardFancyExample, [{
        type: Component,
        args: [{ selector: 'card-fancy-example', template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
    }], null, null); })();

/**
 * @title Basic cards
 */
class CardOverviewExample {
}
CardOverviewExample.ɵfac = function CardOverviewExample_Factory(t) { return new (t || CardOverviewExample)(); };
CardOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardOverviewExample, selectors: [["card-overview-example"]], decls: 2, vars: 0, template: function CardOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵtext(1, "Simple card");
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatCard], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardOverviewExample, [{
        type: Component,
        args: [{ selector: 'card-overview-example', template: "<mat-card>Simple card</mat-card>\n" }]
    }], null, null); })();

/**
 * @title Testing with MatCardHarness
 */
class CardHarnessExample {
}
CardHarnessExample.ɵfac = function CardHarnessExample_Factory(t) { return new (t || CardHarnessExample)(); };
CardHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardHarnessExample, selectors: [["card-harness-example"]], decls: 17, vars: 0, consts: [["mat-card-avatar", ""], ["mat-card-image", ""], ["mat-button", ""]], template: function CardHarnessExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatCard, i1.MatCardHeader, i1.MatCardAvatar, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardImage, i1.MatCardContent, i1.MatCardActions, i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardHarnessExample, [{
        type: Component,
        args: [{ selector: 'card-harness-example', template: "<mat-card>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <div mat-card-image></div>\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n      Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu\n      was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n" }]
    }], null, null); })();

/**
 * @title Card with actions alignment option
 */
class CardActionsExample {
}
CardActionsExample.ɵfac = function CardActionsExample_Factory(t) { return new (t || CardActionsExample)(); };
CardActionsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardActionsExample, selectors: [["card-actions-example"]], decls: 21, vars: 0, consts: [["mat-button", ""], ["align", "end"]], template: function CardActionsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-title");
        i0.ɵɵtext(2, "Actions Buttons");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-card-subtitle");
        i0.ɵɵtext(4, "Start");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-actions");
        i0.ɵɵelementStart(6, "button", 0);
        i0.ɵɵtext(7, "LIKE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 0);
        i0.ɵɵtext(9, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "br");
        i0.ɵɵelementStart(11, "mat-card");
        i0.ɵɵelementStart(12, "mat-card-title");
        i0.ɵɵtext(13, "Actions Buttons");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-card-subtitle");
        i0.ɵɵtext(15, "End");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-card-actions", 1);
        i0.ɵɵelementStart(17, "button", 0);
        i0.ɵɵtext(18, "Like");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "button", 0);
        i0.ɵɵtext(20, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatCard, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardActions, i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardActionsExample, [{
        type: Component,
        args: [{ selector: 'card-actions-example', template: "<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>Start</mat-card-subtitle>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>End</mat-card-subtitle>\n  <mat-card-actions align=\"end\">\n    <button mat-button>Like</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>" }]
    }], null, null); })();

/**
 * @title Card with media size
 */
class CardMediaSizeExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardMediaSizeExample.ɵfac = function CardMediaSizeExample_Factory(t) { return new (t || CardMediaSizeExample)(); };
CardMediaSizeExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardMediaSizeExample, selectors: [["card-media-size-example"]], decls: 36, vars: 4, consts: [[1, "example-card"], ["mat-card-sm-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], ["mat-card-md-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], ["mat-card-lg-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], ["mat-card-xl-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"]], template: function CardMediaSizeExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "mat-card-title-group");
        i0.ɵɵelementStart(2, "mat-card-title");
        i0.ɵɵtext(3, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-card-subtitle");
        i0.ɵɵtext(5, "Small");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "img", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-card-content");
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-card", 0);
        i0.ɵɵelementStart(10, "mat-card-title-group");
        i0.ɵɵelementStart(11, "mat-card-title");
        i0.ɵɵtext(12, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-card-subtitle");
        i0.ɵɵtext(14, "Medium");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-card-content");
        i0.ɵɵtext(17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-card", 0);
        i0.ɵɵelementStart(19, "mat-card-title-group");
        i0.ɵɵelementStart(20, "mat-card-title");
        i0.ɵɵtext(21, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-card-subtitle");
        i0.ɵɵtext(23, "Large");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(24, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "mat-card-content");
        i0.ɵɵtext(26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "mat-card", 0);
        i0.ɵɵelementStart(28, "mat-card-title-group");
        i0.ɵɵelementStart(29, "mat-card-title");
        i0.ɵɵtext(30, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "mat-card-subtitle");
        i0.ɵɵtext(32, "Extra large");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "img", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "mat-card-content");
        i0.ɵɵtext(35);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1(" ", ctx.longText, " ");
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", ctx.longText, " ");
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", ctx.longText, " ");
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", ctx.longText, " ");
    } }, directives: [i1.MatCard, i1.MatCardTitleGroup, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardSmImage, i1.MatCardContent, i1.MatCardMdImage, i1.MatCardLgImage, i1.MatCardXlImage], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin-bottom: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardMediaSizeExample, [{
        type: Component,
        args: [{ selector: 'card-media-size-example', template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Small</mat-card-subtitle>\n    <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Medium</mat-card-subtitle>\n    <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Large</mat-card-subtitle>\n    <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Extra large</mat-card-subtitle>\n    <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"] }]
    }], null, null); })();

/**
 * @title Card with sub-title
 */
class CardSubtitleExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardSubtitleExample.ɵfac = function CardSubtitleExample_Factory(t) { return new (t || CardSubtitleExample)(); };
CardSubtitleExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardSubtitleExample, selectors: [["card-subtitle-example"]], decls: 15, vars: 1, consts: [[1, "example-card"], ["mat-button", ""]], template: function CardSubtitleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "mat-card-title");
        i0.ɵɵtext(2, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-card-subtitle");
        i0.ɵɵtext(4, "Dog Breed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-content");
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, "This card indeterminates progress bar.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-card-actions");
        i0.ɵɵelementStart(11, "button", 1);
        i0.ɵɵtext(12, "LIKE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 1);
        i0.ɵɵtext(14, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate(ctx.longText);
    } }, directives: [i1.MatCard, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardContent, i1.MatCardActions, i2.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardSubtitleExample, [{
        type: Component,
        args: [{ selector: 'card-subtitle-example', template: "<mat-card class=\"example-card\">\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n"] }]
    }], null, null); })();

/**
 * @title Card with footer
 */
class CardFooterExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardFooterExample.ɵfac = function CardFooterExample_Factory(t) { return new (t || CardFooterExample)(); };
CardFooterExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardFooterExample, selectors: [["card-footer-example"]], decls: 18, vars: 1, consts: [[1, "example-card"], ["inset", ""], ["mat-button", ""], ["mode", "indeterminate"]], template: function CardFooterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "mat-card-subtitle");
        i0.ɵɵtext(2, "Dog Breed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-card-title");
        i0.ɵɵtext(4, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-content");
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, "This card has divider and indeterminate progress as footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "mat-divider", 1);
        i0.ɵɵelementStart(11, "mat-card-actions");
        i0.ɵɵelementStart(12, "button", 2);
        i0.ɵɵtext(13, "LIKE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 2);
        i0.ɵɵtext(15, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-card-footer");
        i0.ɵɵelement(17, "mat-progress-bar", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate(ctx.longText);
    } }, directives: [i1.MatCard, i1.MatCardSubtitle, i1.MatCardTitle, i1.MatCardContent, i2$1.MatDivider, i1.MatCardActions, i2.MatButton, i1.MatCardFooter, i4.MatProgressBar], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardFooterExample, [{
        type: Component,
        args: [{ selector: 'card-footer-example', template: "<mat-card class=\"example-card\">\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n  </mat-card-content>\n  <mat-divider inset></mat-divider>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n\n"] }]
    }], null, null); })();

const EXAMPLES = [
    CardFancyExample,
    CardOverviewExample,
    CardHarnessExample,
    CardActionsExample,
    CardMediaSizeExample,
    CardSubtitleExample,
    CardFooterExample
];
class CardExamplesModule {
}
CardExamplesModule.ɵfac = function CardExamplesModule_Factory(t) { return new (t || CardExamplesModule)(); };
CardExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CardExamplesModule });
CardExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatCardModule,
            MatDividerModule,
            MatProgressBarModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatCardModule,
                    MatDividerModule,
                    MatProgressBarModule
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CardExamplesModule, { declarations: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample,
        CardActionsExample,
        CardMediaSizeExample,
        CardSubtitleExample,
        CardFooterExample], imports: [MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatProgressBarModule], exports: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample,
        CardActionsExample,
        CardMediaSizeExample,
        CardSubtitleExample,
        CardFooterExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CardActionsExample, CardExamplesModule, CardFancyExample, CardFooterExample, CardHarnessExample, CardMediaSizeExample, CardOverviewExample, CardSubtitleExample };
//# sourceMappingURL=card.js.map
