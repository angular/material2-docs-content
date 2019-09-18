import { Component, NgModule } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Bottom Sheet Overview
 */
class BottomSheetOverviewExample {
    /**
     * @param {?} _bottomSheet
     */
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    /**
     * @return {?}
     */
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
}
BottomSheetOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet-overview-example',
                template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
BottomSheetOverviewExample.ctorParameters = () => [
    { type: MatBottomSheet }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheetOverviewExample.prototype._bottomSheet;
}
class BottomSheetOverviewExampleSheet {
    /**
     * @param {?} _bottomSheetRef
     */
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
BottomSheetOverviewExampleSheet.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n"
            }] }
];
/** @nocollapse */
BottomSheetOverviewExampleSheet.ctorParameters = () => [
    { type: MatBottomSheetRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheetOverviewExampleSheet.prototype._bottomSheetRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
];
class BottomSheetExamplesModule {
}
BottomSheetExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: [BottomSheetOverviewExampleSheet],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, BottomSheetExamplesModule };
//# sourceMappingURL=bottom-sheet.js.map
