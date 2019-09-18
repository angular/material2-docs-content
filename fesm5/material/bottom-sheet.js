import { Component, NgModule } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

/**
 * @title Bottom Sheet Overview
 */
var BottomSheetOverviewExample = /** @class */ (function () {
    function BottomSheetOverviewExample(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    BottomSheetOverviewExample.prototype.openBottomSheet = function () {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    };
    BottomSheetOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'bottom-sheet-overview-example',
                    template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    /** @nocollapse */
    BottomSheetOverviewExample.ctorParameters = function () { return [
        { type: MatBottomSheet }
    ]; };
    return BottomSheetOverviewExample;
}());
var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet.decorators = [
        { type: Component, args: [{
                    selector: 'bottom-sheet-overview-example-sheet',
                    template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n"
                }] }
    ];
    /** @nocollapse */
    BottomSheetOverviewExampleSheet.ctorParameters = function () { return [
        { type: MatBottomSheetRef }
    ]; };
    return BottomSheetOverviewExampleSheet;
}());

var EXAMPLES = [
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
];
var BottomSheetExamplesModule = /** @class */ (function () {
    function BottomSheetExamplesModule() {
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
    return BottomSheetExamplesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, BottomSheetExamplesModule };
//# sourceMappingURL=bottom-sheet.js.map
