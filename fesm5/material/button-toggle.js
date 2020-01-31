import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, ɵɵreference, ɵɵadvance, ɵɵtextInterpolate1, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon, MatIconModule } from '@angular/material/icon';

/**
 * @title Button toggle appearance
 */
var ButtonToggleAppearanceExample = /** @class */ (function () {
    function ButtonToggleAppearanceExample() {
    }
    ButtonToggleAppearanceExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-toggle-appearance-example',
                    templateUrl: 'button-toggle-appearance-example.html',
                    styleUrls: ['button-toggle-appearance-example.css'],
                },] },
    ];
    ButtonToggleAppearanceExample.ɵfac = function ButtonToggleAppearanceExample_Factory(t) { return new (t || ButtonToggleAppearanceExample)(); };
    ButtonToggleAppearanceExample.ɵcmp = ɵɵdefineComponent({ type: ButtonToggleAppearanceExample, selectors: [["button-toggle-appearance-example"]], decls: 18, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style"]], template: function ButtonToggleAppearanceExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " Default appearance: ");
            ɵɵelementStart(2, "mat-button-toggle-group", 0);
            ɵɵelementStart(3, "mat-button-toggle", 1);
            ɵɵtext(4, "Bold");
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-button-toggle", 2);
            ɵɵtext(6, "Italic");
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-button-toggle", 3);
            ɵɵtext(8, "Underline");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "p");
            ɵɵtext(10, " Legacy appearance: ");
            ɵɵelementStart(11, "mat-button-toggle-group", 4);
            ɵɵelementStart(12, "mat-button-toggle", 1);
            ɵɵtext(13, "Bold");
            ɵɵelementEnd();
            ɵɵelementStart(14, "mat-button-toggle", 2);
            ɵɵtext(15, "Italic");
            ɵɵelementEnd();
            ɵɵelementStart(16, "mat-button-toggle", 3);
            ɵɵtext(17, "Underline");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatButtonToggleGroup, MatButtonToggle], styles: ["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}"] });
    return ButtonToggleAppearanceExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonToggleAppearanceExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-appearance-example',
                templateUrl: 'button-toggle-appearance-example.html',
                styleUrls: ['button-toggle-appearance-example.css'],
            }]
    }], null, null); })();

/**
 * @title Exclusive selection
 */
var ButtonToggleExclusiveExample = /** @class */ (function () {
    function ButtonToggleExclusiveExample() {
    }
    ButtonToggleExclusiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-toggle-exclusive-example',
                    templateUrl: 'button-toggle-exclusive-example.html',
                    styleUrls: ['button-toggle-exclusive-example.css'],
                },] },
    ];
    ButtonToggleExclusiveExample.ɵfac = function ButtonToggleExclusiveExample_Factory(t) { return new (t || ButtonToggleExclusiveExample)(); };
    ButtonToggleExclusiveExample.ɵcmp = ɵɵdefineComponent({ type: ButtonToggleExclusiveExample, selectors: [["button-toggle-exclusive-example"]], decls: 16, vars: 1, consts: [["group", "matButtonToggleGroup"], ["value", "left", "aria-label", "Text align left"], ["value", "center", "aria-label", "Text align center"], ["value", "right", "aria-label", "Text align right"], ["value", "justify", "disabled", "", "aria-label", "Text align justify"], [1, "example-selected-value"]], template: function ButtonToggleExclusiveExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-button-toggle-group", null, 0);
            ɵɵelementStart(2, "mat-button-toggle", 1);
            ɵɵelementStart(3, "mat-icon");
            ɵɵtext(4, "format_align_left");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-button-toggle", 2);
            ɵɵelementStart(6, "mat-icon");
            ɵɵtext(7, "format_align_center");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "mat-button-toggle", 3);
            ɵɵelementStart(9, "mat-icon");
            ɵɵtext(10, "format_align_right");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(11, "mat-button-toggle", 4);
            ɵɵelementStart(12, "mat-icon");
            ɵɵtext(13, "format_align_justify");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(14, "div", 5);
            ɵɵtext(15);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = ɵɵreference(1);
            ɵɵadvance(15);
            ɵɵtextInterpolate1("Selected value: ", _r0.value, "");
        } }, directives: [MatButtonToggleGroup, MatButtonToggle, MatIcon], styles: [".example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}"] });
    return ButtonToggleExclusiveExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonToggleExclusiveExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-exclusive-example',
                templateUrl: 'button-toggle-exclusive-example.html',
                styleUrls: ['button-toggle-exclusive-example.css'],
            }]
    }], null, null); })();

/**
 * @title Basic button-toggles
 */
var ButtonToggleOverviewExample = /** @class */ (function () {
    function ButtonToggleOverviewExample() {
    }
    ButtonToggleOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-toggle-overview-example',
                    templateUrl: 'button-toggle-overview-example.html',
                    styleUrls: ['button-toggle-overview-example.css'],
                },] },
    ];
    ButtonToggleOverviewExample.ɵfac = function ButtonToggleOverviewExample_Factory(t) { return new (t || ButtonToggleOverviewExample)(); };
    ButtonToggleOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ButtonToggleOverviewExample, selectors: [["button-toggle-overview-example"]], decls: 7, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"]], template: function ButtonToggleOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-button-toggle-group", 0);
            ɵɵelementStart(1, "mat-button-toggle", 1);
            ɵɵtext(2, "Bold");
            ɵɵelementEnd();
            ɵɵelementStart(3, "mat-button-toggle", 2);
            ɵɵtext(4, "Italic");
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-button-toggle", 3);
            ɵɵtext(6, "Underline");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatButtonToggleGroup, MatButtonToggle], styles: [""] });
    return ButtonToggleOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonToggleOverviewExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-overview-example',
                templateUrl: 'button-toggle-overview-example.html',
                styleUrls: ['button-toggle-overview-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
];
var ButtonToggleExamplesModule = /** @class */ (function () {
    function ButtonToggleExamplesModule() {
    }
    ButtonToggleExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonToggleModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    ButtonToggleExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
    ButtonToggleExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); }, imports: [[
                MatButtonToggleModule,
                MatIconModule,
            ]] });
    return ButtonToggleExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonToggleExamplesModule, { declarations: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample], imports: [MatButtonToggleModule,
        MatIconModule], exports: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonToggleExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonToggleModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { ButtonToggleAppearanceExample, ButtonToggleExamplesModule, ButtonToggleExclusiveExample, ButtonToggleOverviewExample };
//# sourceMappingURL=button-toggle.js.map
