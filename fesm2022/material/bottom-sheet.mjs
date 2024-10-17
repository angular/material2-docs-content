import * as i0 from '@angular/core';
import { inject, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as i2 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Bottom Sheet Overview
 */
class BottomSheetOverviewExample {
    constructor() {
        this._bottomSheet = inject(MatBottomSheet);
    }
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: BottomSheetOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.10", type: BottomSheetOverviewExample, isStandalone: true, selector: "bottom-sheet-overview-example", ngImport: i0, template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatBottomSheetModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: BottomSheetOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example', imports: [MatButtonModule, MatBottomSheetModule], template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n" }]
        }] });
class BottomSheetOverviewExampleSheet {
    constructor() {
        this._bottomSheetRef = inject(MatBottomSheetRef);
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: BottomSheetOverviewExampleSheet, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.10", type: BottomSheetOverviewExampleSheet, isStandalone: true, selector: "bottom-sheet-overview-example-sheet", ngImport: i0, template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Keep</span>\n    <span matLine>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Docs</span>\n    <span matLine>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Plus</span>\n    <span matLine>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Hangouts</span>\n    <span matLine>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i2.MatNavList, selector: "mat-nav-list", exportAs: ["matNavList"] }, { kind: "component", type: i2.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i2.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: BottomSheetOverviewExampleSheet, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example-sheet', imports: [MatListModule], template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Keep</span>\n    <span matLine>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Docs</span>\n    <span matLine>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Plus</span>\n    <span matLine>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Hangouts</span>\n    <span matLine>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n" }]
        }] });

/**
 * @title Testing with MatBottomSheetHarness
 */
class BottomSheetHarnessExample {
    constructor() {
        this.bottomSheet = inject(MatBottomSheet);
    }
    open(config) {
        return this.bottomSheet.open(this.template, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: BottomSheetHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.10", type: BottomSheetHarnessExample, isStandalone: true, selector: "bottom-sheet-harness-example", viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: MatBottomSheetModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: BottomSheetHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-harness-example', imports: [MatBottomSheetModule], template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n" }]
        }], propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { BottomSheetHarnessExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet };
//# sourceMappingURL=bottom-sheet.mjs.map
