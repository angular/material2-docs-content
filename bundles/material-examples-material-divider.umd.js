(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/divider'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/divider', ['exports', '@angular/core', '@angular/material/divider', '@angular/material/list'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.divider = {}), global.ng.core, global.ng.material.divider, global.ng.material.list));
}(this, function (exports, core, divider, list) { 'use strict';

    /**
     * @title Basic divider
     */
    var DividerOverviewExample = /** @class */ (function () {
        function DividerOverviewExample() {
        }
        DividerOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'divider-overview-example',
                        template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return DividerOverviewExample;
    }());

    var EXAMPLES = [
        DividerOverviewExample,
    ];
    var DividerExamplesModule = /** @class */ (function () {
        function DividerExamplesModule() {
        }
        DividerExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            divider.MatDividerModule,
                            list.MatListModule,
                        ],
                        declarations: EXAMPLES,
                    },] }
        ];
        return DividerExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DividerOverviewExample = DividerOverviewExample;
    exports.DividerExamplesModule = DividerExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-divider.umd.js.map
