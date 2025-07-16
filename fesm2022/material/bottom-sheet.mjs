import * as i0 from '@angular/core';
import { inject, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as i1$1 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Bottom Sheet Overview
 */
class BottomSheetOverviewExample {
    _bottomSheet = inject(MatBottomSheet);
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: i0, type: BottomSheetOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.1.0", type: BottomSheetOverviewExample, isStandalone: true, selector: "bottom-sheet-overview-example", ngImport: i0, template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button matButton=\"elevated\" (click)=\"openBottomSheet()\">Open file</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatBottomSheetModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: i0, type: BottomSheetOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example', imports: [MatButtonModule, MatBottomSheetModule], template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button matButton=\"elevated\" (click)=\"openBottomSheet()\">Open file</button>\n" }]
        }] });
class BottomSheetOverviewExampleSheet {
    _bottomSheetRef = inject(MatBottomSheetRef);
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: i0, type: BottomSheetOverviewExampleSheet, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.1.0", type: BottomSheetOverviewExampleSheet, isStandalone: true, selector: "bottom-sheet-overview-example-sheet", ngImport: i0, template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Keep</span>\n    <span matLine>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Docs</span>\n    <span matLine>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Plus</span>\n    <span matLine>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Hangouts</span>\n    <span matLine>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1$1.MatNavList, selector: "mat-nav-list", exportAs: ["matNavList"] }, { kind: "component", type: i1$1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1$1.MatListItemTitle, selector: "[matListItemTitle]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: i0, type: BottomSheetOverviewExampleSheet, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example-sheet', imports: [MatListModule], template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Keep</span>\n    <span matLine>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Docs</span>\n    <span matLine>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Plus</span>\n    <span matLine>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Hangouts</span>\n    <span matLine>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n" }]
        }] });

/**
 * @title Testing with MatBottomSheetHarness
 */
class BottomSheetHarnessExample {
    bottomSheet = inject(MatBottomSheet);
    template;
    open(config) {
        return this.bottomSheet.open(this.template, config);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: i0, type: BottomSheetHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.1.0", type: BottomSheetHarnessExample, isStandalone: true, selector: "bottom-sheet-harness-example", viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: MatBottomSheetModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: i0, type: BottomSheetHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-harness-example', imports: [MatBottomSheetModule], template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n" }]
        }], propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });

export { BottomSheetHarnessExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet };
//# sourceMappingURL=bottom-sheet.mjs.map
