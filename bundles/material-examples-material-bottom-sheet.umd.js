(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/bottom-sheet', ['exports', '@angular/core', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/list'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.bottomSheet = {}), global.ng.core, global.ng.material['bottom-sheet'], global.ng.material.button, global.ng.material.list));
}(this, function (exports, core, bottomSheet, button, list) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'bottom-sheet-overview-example',
                        template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        BottomSheetOverviewExample.ctorParameters = function () { return [
            { type: bottomSheet.MatBottomSheet }
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
            { type: core.Component, args: [{
                        selector: 'bottom-sheet-overview-example-sheet',
                        template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n"
                    }] }
        ];
        /** @nocollapse */
        BottomSheetOverviewExampleSheet.ctorParameters = function () { return [
            { type: bottomSheet.MatBottomSheetRef }
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
            { type: core.NgModule, args: [{
                        imports: [
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            list.MatListModule,
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

    exports.BottomSheetOverviewExample = BottomSheetOverviewExample;
    exports.BottomSheetOverviewExampleSheet = BottomSheetOverviewExampleSheet;
    exports.BottomSheetExamplesModule = BottomSheetExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-bottom-sheet.umd.js.map
