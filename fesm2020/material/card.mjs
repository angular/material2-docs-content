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
CardFancyExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardFancyExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardFancyExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CardFancyExample, selector: "card-fancy-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1.MatCardHeader, selector: "mat-card-header" }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { type: i1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardFancyExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-fancy-example', template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
        }] });

/**
 * @title Basic cards
 */
class CardOverviewExample {
}
CardOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CardOverviewExample, selector: "card-overview-example", ngImport: i0, template: "<mat-card>Simple card</mat-card>\n", components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-overview-example', template: "<mat-card>Simple card</mat-card>\n" }]
        }] });

/**
 * @title Testing with MatCardHarness
 */
class CardHarnessExample {
}
CardHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CardHarnessExample, selector: "card-harness-example", ngImport: i0, template: "<mat-card>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <div mat-card-image></div>\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n      Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu\n      was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1.MatCardHeader, selector: "mat-card-header" }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { type: i1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-harness-example', template: "<mat-card>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <div mat-card-image></div>\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n      Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu\n      was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n" }]
        }] });

/**
 * @title Card with actions alignment option
 */
class CardActionsExample {
}
CardActionsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardActionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardActionsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CardActionsExample, selector: "card-actions-example", ngImport: i0, template: "<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>Start</mat-card-subtitle>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>End</mat-card-subtitle>\n  <mat-card-actions align=\"end\">\n    <button mat-button>Like</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>", components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardActionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-actions-example', template: "<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>Start</mat-card-subtitle>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>End</mat-card-subtitle>\n  <mat-card-actions align=\"end\">\n    <button mat-button>Like</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>" }]
        }] });

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
CardMediaSizeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardMediaSizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardMediaSizeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CardMediaSizeExample, selector: "card-media-size-example", ngImport: i0, template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Small</mat-card-subtitle>\n    <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Medium</mat-card-subtitle>\n    <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Large</mat-card-subtitle>\n    <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Extra large</mat-card-subtitle>\n    <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1.MatCardTitleGroup, selector: "mat-card-title-group" }], directives: [{ type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardSmImage, selector: "[mat-card-sm-image], [matCardImageSmall]" }, { type: i1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i1.MatCardMdImage, selector: "[mat-card-md-image], [matCardImageMedium]" }, { type: i1.MatCardLgImage, selector: "[mat-card-lg-image], [matCardImageLarge]" }, { type: i1.MatCardXlImage, selector: "[mat-card-xl-image], [matCardImageXLarge]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardMediaSizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-media-size-example', template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Small</mat-card-subtitle>\n    <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Medium</mat-card-subtitle>\n    <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Large</mat-card-subtitle>\n    <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Extra large</mat-card-subtitle>\n    <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"] }]
        }] });

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
CardSubtitleExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardSubtitleExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardSubtitleExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CardSubtitleExample, selector: "card-subtitle-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardSubtitleExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-subtitle-example', template: "<mat-card class=\"example-card\">\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n"] }]
        }] });

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
CardFooterExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardFooterExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardFooterExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CardFooterExample, selector: "card-footer-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n  </mat-card-content>\n  <mat-divider inset></mat-divider>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n\n"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2$1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }], directives: [{ type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { type: i1.MatCardFooter, selector: "mat-card-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardFooterExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-footer-example', template: "<mat-card class=\"example-card\">\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n  </mat-card-content>\n  <mat-divider inset></mat-divider>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n\n"] }]
        }] });

const EXAMPLES = [
    CardFancyExample,
    CardOverviewExample,
    CardHarnessExample,
    CardActionsExample,
    CardMediaSizeExample,
    CardSubtitleExample,
    CardFooterExample,
];
class CardExamplesModule {
}
CardExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardExamplesModule, declarations: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample,
        CardActionsExample,
        CardMediaSizeExample,
        CardSubtitleExample,
        CardFooterExample], imports: [MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule], exports: [CardFancyExample,
        CardOverviewExample,
        CardHarnessExample,
        CardActionsExample,
        CardMediaSizeExample,
        CardSubtitleExample,
        CardFooterExample] });
CardExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardExamplesModule, imports: [[MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CardExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CardActionsExample, CardExamplesModule, CardFancyExample, CardFooterExample, CardHarnessExample, CardMediaSizeExample, CardOverviewExample, CardSubtitleExample };
//# sourceMappingURL=card.mjs.map
