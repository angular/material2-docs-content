import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';

/**
 * @title Overlay basic example
 */
class CdkOverlayBasicExample {
    constructor() {
        this.isOpen = false;
    }
}
CdkOverlayBasicExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CdkOverlayBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkOverlayBasicExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: CdkOverlayBasicExample, selector: "cdk-overlay-basic-example", ngImport: i0, template: "<!-- This button triggers the overlay and is it's origin -->\n<button (click)=\"isOpen = !isOpen\" type=\"button\" cdkOverlayOrigin #trigger=\"cdkOverlayOrigin\">\n  {{isOpen ? \"Close\" : \"Open\"}}\n</button>\n\n<!-- This template displays the overlay content and is connected to the button -->\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"trigger\"\n  [cdkConnectedOverlayOpen]=\"isOpen\"\n>\n  <ul class=\"example-list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</ng-template>\n", styles: [".example-list {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list > li {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list > li:last-child {\n  border-bottom: none;\n}\n"], directives: [{ type: i1.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { type: i1.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CdkOverlayBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-overlay-basic-example', template: "<!-- This button triggers the overlay and is it's origin -->\n<button (click)=\"isOpen = !isOpen\" type=\"button\" cdkOverlayOrigin #trigger=\"cdkOverlayOrigin\">\n  {{isOpen ? \"Close\" : \"Open\"}}\n</button>\n\n<!-- This template displays the overlay content and is connected to the button -->\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"trigger\"\n  [cdkConnectedOverlayOpen]=\"isOpen\"\n>\n  <ul class=\"example-list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</ng-template>\n", styles: [".example-list {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list > li {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list > li:last-child {\n  border-bottom: none;\n}\n"] }]
        }] });

const EXAMPLES = [CdkOverlayBasicExample];
class CdkOverlayExamplesModule {
}
CdkOverlayExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CdkOverlayExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkOverlayExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CdkOverlayExamplesModule, declarations: [CdkOverlayBasicExample], imports: [OverlayModule], exports: [CdkOverlayBasicExample] });
CdkOverlayExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CdkOverlayExamplesModule, imports: [[OverlayModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CdkOverlayExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [OverlayModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkOverlayBasicExample, CdkOverlayExamplesModule };
//# sourceMappingURL=overlay.mjs.map
