(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/icon'), require('@angular/material/toolbar')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/toolbar', ['exports', '@angular/core', '@angular/material/icon', '@angular/material/toolbar'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.toolbar = {}), global.ng.core, global.ng.material.icon, global.ng.material.toolbar));
}(this, function (exports, core, icon, toolbar) { 'use strict';

    /**
     * @title Multi-row toolbar
     */
    var ToolbarMultirowExample = /** @class */ (function () {
        function ToolbarMultirowExample() {
        }
        ToolbarMultirowExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'toolbar-multirow-example',
                        template: "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
                        styles: [".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n"]
                    }] }
        ];
        return ToolbarMultirowExample;
    }());

    /**
     * @title Basic toolbar
     */
    var ToolbarOverviewExample = /** @class */ (function () {
        function ToolbarOverviewExample() {
        }
        ToolbarOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'toolbar-overview-example',
                        template: "<mat-toolbar>My App</mat-toolbar>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return ToolbarOverviewExample;
    }());

    var EXAMPLES = [
        ToolbarMultirowExample,
        ToolbarOverviewExample,
    ];
    var ToolbarExamplesModule = /** @class */ (function () {
        function ToolbarExamplesModule() {
        }
        ToolbarExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            icon.MatIconModule,
                            toolbar.MatToolbarModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return ToolbarExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ToolbarMultirowExample = ToolbarMultirowExample;
    exports.ToolbarOverviewExample = ToolbarOverviewExample;
    exports.ToolbarExamplesModule = ToolbarExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-toolbar.umd.js.map
