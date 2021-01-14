import { ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵsetClassMetadata, Component, ɵɵviewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplate, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatNavList, MatListItem, MatListModule } from '@angular/material/list';
import { MatLine } from '@angular/material/core';

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
}
BottomSheetOverviewExample.ɵfac = function BottomSheetOverviewExample_Factory(t) { return new (t || BottomSheetOverviewExample)(ɵɵdirectiveInject(MatBottomSheet)); };
BottomSheetOverviewExample.ɵcmp = ɵɵdefineComponent({ type: BottomSheetOverviewExample, selectors: [["bottom-sheet-overview-example"]], decls: 4, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function BottomSheetOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "You have received a file called \"cat-picture.jpeg\".");
        ɵɵelementEnd();
        ɵɵelementStart(2, "button", 0);
        ɵɵlistener("click", function BottomSheetOverviewExample_Template_button_click_2_listener() { return ctx.openBottomSheet(); });
        ɵɵtext(3, "Open file");
        ɵɵelementEnd();
    } }, directives: [MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BottomSheetOverviewExample, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet-overview-example',
                templateUrl: 'bottom-sheet-overview-example.html',
            }]
    }], function () { return [{ type: MatBottomSheet }]; }, null); })();
class BottomSheetOverviewExampleSheet {
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) { return new (t || BottomSheetOverviewExampleSheet)(ɵɵdirectiveInject(MatBottomSheetRef)); };
BottomSheetOverviewExampleSheet.ɵcmp = ɵɵdefineComponent({ type: BottomSheetOverviewExampleSheet, selectors: [["bottom-sheet-overview-example-sheet"]], decls: 21, vars: 0, consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]], template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BottomSheetOverviewExampleSheet, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                templateUrl: 'bottom-sheet-overview-example-sheet.html',
            }]
    }], function () { return [{ type: MatBottomSheetRef }]; }, null); })();

function BottomSheetHarnessExample_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " Hello from the bottom sheet!\n");
} }
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
}
BottomSheetHarnessExample.ɵfac = function BottomSheetHarnessExample_Factory(t) { return new (t || BottomSheetHarnessExample)(ɵɵdirectiveInject(MatBottomSheet)); };
BottomSheetHarnessExample.ɵcmp = ɵɵdefineComponent({ type: BottomSheetHarnessExample, selectors: [["bottom-sheet-harness-example"]], viewQuery: function BottomSheetHarnessExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, decls: 1, vars: 0, template: function BottomSheetHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, BottomSheetHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BottomSheetHarnessExample, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet-harness-example',
                templateUrl: 'bottom-sheet-harness-example.html',
            }]
    }], function () { return [{ type: MatBottomSheet }]; }, { template: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();

const EXAMPLES = [
    BottomSheetHarnessExample,
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
];
class BottomSheetExamplesModule {
}
BottomSheetExamplesModule.ɵmod = ɵɵdefineNgModule({ type: BottomSheetExamplesModule });
BottomSheetExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function BottomSheetExamplesModule_Factory(t) { return new (t || BottomSheetExamplesModule)(); }, imports: [[
            MatBottomSheetModule,
            MatButtonModule,
            MatListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BottomSheetExamplesModule, { declarations: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet], imports: [MatBottomSheetModule,
        MatButtonModule,
        MatListModule], exports: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BottomSheetExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BottomSheetExamplesModule, BottomSheetHarnessExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet };
//# sourceMappingURL=bottom-sheet.js.map
