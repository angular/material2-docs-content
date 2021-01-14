import { ɵɵdefineComponent, ɵɵelementStart, ɵɵelement, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material-experimental/mdc-button';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent, MatCardActions, MatCardModule } from '@angular/material-experimental/mdc-card';

/**
 * @title Card with multiple sections
 */
class MdcCardFancyExample {
}
MdcCardFancyExample.ɵfac = function MdcCardFancyExample_Factory(t) { return new (t || MdcCardFancyExample)(); };
MdcCardFancyExample.ɵcmp = ɵɵdefineComponent({ type: MdcCardFancyExample, selectors: [["mdc-card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function MdcCardFancyExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MdcCardFancyExample, [{
        type: Component,
        args: [{
                selector: 'mdc-card-fancy-example',
                templateUrl: 'mdc-card-fancy-example.html',
                styleUrls: ['mdc-card-fancy-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [
    MdcCardFancyExample,
];
class MdcCardExamplesModule {
}
MdcCardExamplesModule.ɵmod = ɵɵdefineNgModule({ type: MdcCardExamplesModule });
MdcCardExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function MdcCardExamplesModule_Factory(t) { return new (t || MdcCardExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatCardModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MdcCardExamplesModule, { declarations: [MdcCardFancyExample], imports: [MatButtonModule,
        MatCardModule], exports: [MdcCardFancyExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MdcCardExamplesModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { MdcCardExamplesModule, MdcCardFancyExample };
//# sourceMappingURL=mdc-card.js.map
