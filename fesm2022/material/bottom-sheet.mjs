import * as i0 from '@angular/core';
import { Component, TemplateRef, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/material/bottom-sheet';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';

/**
 * @title Bottom Sheet Overview
 */
class BottomSheetOverviewExample {
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetOverviewExample, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: BottomSheetOverviewExample, selector: "bottom-sheet-overview-example", ngImport: i0, template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n", dependencies: [{ kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example', template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatBottomSheet }]; } });
class BottomSheetOverviewExampleSheet {
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetOverviewExampleSheet, deps: [{ token: i1.MatBottomSheetRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: BottomSheetOverviewExampleSheet, selector: "bottom-sheet-overview-example-sheet", ngImport: i0, template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Keep</span>\n    <span matLine>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Docs</span>\n    <span matLine>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Plus</span>\n    <span matLine>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Hangouts</span>\n    <span matLine>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n", dependencies: [{ kind: "component", type: i3.MatNavList, selector: "mat-nav-list", exportAs: ["matNavList"] }, { kind: "component", type: i3.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i3.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetOverviewExampleSheet, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example-sheet', template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Keep</span>\n    <span matLine>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Docs</span>\n    <span matLine>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Plus</span>\n    <span matLine>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Hangouts</span>\n    <span matLine>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatBottomSheetRef }]; } });

/**
 * @title Testing with MatBottomSheetHarness
 */
class BottomSheetHarnessExample {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    open(config) {
        return this.bottomSheet.open(this.template, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetHarnessExample, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: BottomSheetHarnessExample, selector: "bottom-sheet-harness-example", viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-harness-example', template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatBottomSheet }]; }, propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });

const EXAMPLES = [
    BottomSheetHarnessExample,
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
];
class BottomSheetExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetExamplesModule, declarations: [BottomSheetHarnessExample,
            BottomSheetOverviewExample,
            BottomSheetOverviewExampleSheet], imports: [MatBottomSheetModule, MatButtonModule, MatListModule], exports: [BottomSheetHarnessExample,
            BottomSheetOverviewExample,
            BottomSheetOverviewExampleSheet] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetExamplesModule, imports: [MatBottomSheetModule, MatButtonModule, MatListModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: BottomSheetExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatBottomSheetModule, MatButtonModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BottomSheetExamplesModule, BottomSheetHarnessExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet };
//# sourceMappingURL=bottom-sheet.mjs.map
