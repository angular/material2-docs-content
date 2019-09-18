(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button-toggle'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/button-toggle', ['exports', '@angular/core', '@angular/material/button-toggle', '@angular/material/icon'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.buttonToggle = {}), global.ng.core, global.ng.material['button-toggle'], global.ng.material.icon));
}(this, function (exports, core, buttonToggle, icon) { 'use strict';

    /**
     * @title Button toggle appearance
     */
    var ButtonToggleAppearanceExample = /** @class */ (function () {
        function ButtonToggleAppearanceExample() {
        }
        ButtonToggleAppearanceExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'button-toggle-appearance-example',
                        template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n",
                        styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"]
                    }] }
        ];
        return ButtonToggleAppearanceExample;
    }());

    /**
     * @title Exclusive selection
     */
    var ButtonToggleExclusiveExample = /** @class */ (function () {
        function ButtonToggleExclusiveExample() {
        }
        ButtonToggleExclusiveExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'button-toggle-exclusive-example',
                        template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n",
                        styles: [".example-selected-value {\n  margin: 15px 0;\n}\n"]
                    }] }
        ];
        return ButtonToggleExclusiveExample;
    }());

    /**
     * @title Basic button-toggles
     */
    var ButtonToggleOverviewExample = /** @class */ (function () {
        function ButtonToggleOverviewExample() {
        }
        ButtonToggleOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'button-toggle-overview-example',
                        template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return ButtonToggleOverviewExample;
    }());

    var EXAMPLES = [
        ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
    ];
    var ButtonToggleExamplesModule = /** @class */ (function () {
        function ButtonToggleExamplesModule() {
        }
        ButtonToggleExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            buttonToggle.MatButtonToggleModule,
                            icon.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return ButtonToggleExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ButtonToggleAppearanceExample = ButtonToggleAppearanceExample;
    exports.ButtonToggleExclusiveExample = ButtonToggleExclusiveExample;
    exports.ButtonToggleOverviewExample = ButtonToggleOverviewExample;
    exports.ButtonToggleExamplesModule = ButtonToggleExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-button-toggle.umd.js.map
