import { Component, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatNavList, MatListItem, MatListModule } from '@angular/material/list';
import { MatLine } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                templateUrl: 'bottom-sheet-overview-example.html',
                styleUrls: ['bottom-sheet-overview-example.css'],
            },] },
];
/** @nocollapse */
BottomSheetOverviewExample.ctorParameters = () => [
    { type: MatBottomSheet }
];
/** @nocollapse */ BottomSheetOverviewExample.ɵfac = function BottomSheetOverviewExample_Factory(t) { return new (t || BottomSheetOverviewExample)(ɵɵdirectiveInject(MatBottomSheet)); };
/** @nocollapse */ BottomSheetOverviewExample.ɵcmp = ɵɵdefineComponent({ type: BottomSheetOverviewExample, selectors: [["bottom-sheet-overview-example"]], decls: 4, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function BottomSheetOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "You have received a file called \"cat-picture.jpeg\".");
        ɵɵelementEnd();
        ɵɵelementStart(2, "button", 0);
        ɵɵlistener("click", function BottomSheetOverviewExample_Template_button_click_2_listener($event) { return ctx.openBottomSheet(); });
        ɵɵtext(3, "Open file");
        ɵɵelementEnd();
    } }, directives: [MatButton], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BottomSheetOverviewExample, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet-overview-example',
                templateUrl: 'bottom-sheet-overview-example.html',
                styleUrls: ['bottom-sheet-overview-example.css'],
            }]
    }], function () { return [{ type: MatBottomSheet }]; }, null); })();
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
                templateUrl: 'bottom-sheet-overview-example-sheet.html',
            },] },
];
/** @nocollapse */
BottomSheetOverviewExampleSheet.ctorParameters = () => [
    { type: MatBottomSheetRef }
];
/** @nocollapse */ BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) { return new (t || BottomSheetOverviewExampleSheet)(ɵɵdirectiveInject(MatBottomSheetRef)); };
/** @nocollapse */ BottomSheetOverviewExampleSheet.ɵcmp = ɵɵdefineComponent({ type: BottomSheetOverviewExampleSheet, selectors: [["bottom-sheet-overview-example-sheet"]], decls: 21, vars: 0, consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]], template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-nav-list");
        ɵɵelementStart(1, "a", 0);
        ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_1_listener($event) { return ctx.openLink($event); });
        ɵɵelementStart(2, "span", 1);
        ɵɵtext(3, "Google Keep");
        ɵɵelementEnd();
        ɵɵelementStart(4, "span", 1);
        ɵɵtext(5, "Add to a note");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "a", 2);
        ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_6_listener($event) { return ctx.openLink($event); });
        ɵɵelementStart(7, "span", 1);
        ɵɵtext(8, "Google Docs");
        ɵɵelementEnd();
        ɵɵelementStart(9, "span", 1);
        ɵɵtext(10, "Embed in a document");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "a", 3);
        ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_11_listener($event) { return ctx.openLink($event); });
        ɵɵelementStart(12, "span", 1);
        ɵɵtext(13, "Google Plus");
        ɵɵelementEnd();
        ɵɵelementStart(14, "span", 1);
        ɵɵtext(15, "Share with your friends");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "a", 4);
        ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_16_listener($event) { return ctx.openLink($event); });
        ɵɵelementStart(17, "span", 1);
        ɵɵtext(18, "Google Hangouts");
        ɵɵelementEnd();
        ɵɵelementStart(19, "span", 1);
        ɵɵtext(20, "Show to your coworkers");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatNavList, MatListItem, MatLine], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BottomSheetOverviewExampleSheet, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                templateUrl: 'bottom-sheet-overview-example-sheet.html',
            }]
    }], function () { return [{ type: MatBottomSheetRef }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheetOverviewExampleSheet.prototype._bottomSheetRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            },] },
];
/** @nocollapse */ BottomSheetExamplesModule.ɵmod = ɵɵdefineNgModule({ type: BottomSheetExamplesModule });
/** @nocollapse */ BottomSheetExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function BottomSheetExamplesModule_Factory(t) { return new (t || BottomSheetExamplesModule)(); }, imports: [[
            MatBottomSheetModule,
            MatButtonModule,
            MatListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BottomSheetExamplesModule, { declarations: [BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet], imports: [MatBottomSheetModule,
        MatButtonModule,
        MatListModule], exports: [BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(BottomSheetExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: [BottomSheetOverviewExampleSheet],
            }]
    }], null, null); })();

export { BottomSheetExamplesModule, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet };
//# sourceMappingURL=bottom-sheet.js.map
