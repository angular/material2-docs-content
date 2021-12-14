import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/material-experimental/mdc-button';
import { MatButtonModule } from '@angular/material-experimental/mdc-button';
import * as i1 from '@angular/material-experimental/mdc-card';
import { MatCardModule } from '@angular/material-experimental/mdc-card';

/**
 * @title Card with multiple sections
 */
class MdcCardFancyExample {
}
MdcCardFancyExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcCardFancyExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
MdcCardFancyExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: MdcCardFancyExample, selector: "mdc-card-fancy-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"], components: [{ type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { type: i1.MatCardHeader, selector: "mat-card-header" }, { type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { type: i1.MatCardContent, selector: "mat-card-content" }, { type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcCardFancyExample, decorators: [{
            type: Component,
            args: [{ selector: 'mdc-card-fancy-example', template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
        }] });

const EXAMPLES = [MdcCardFancyExample];
class MdcCardExamplesModule {
}
MdcCardExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcCardExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdcCardExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcCardExamplesModule, declarations: [MdcCardFancyExample], imports: [MatButtonModule, MatCardModule], exports: [MdcCardFancyExample] });
MdcCardExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcCardExamplesModule, imports: [[MatButtonModule, MatCardModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcCardExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatCardModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MdcCardExamplesModule, MdcCardFancyExample };
//# sourceMappingURL=mdc-card.mjs.map
