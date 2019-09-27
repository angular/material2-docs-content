(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/grid-list')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/grid-list', ['exports', '@angular/common', '@angular/core', '@angular/material/grid-list'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.gridList = {}), global.ng.common, global.ng.core, global.ng.material.gridList));
}(this, function (exports, common, core, gridList) { 'use strict';

    /**
     * @title Dynamic grid-list
     */
    var GridListDynamicExample = /** @class */ (function () {
        function GridListDynamicExample() {
            this.tiles = [
                { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
                { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
                { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
                { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
            ];
        }
        GridListDynamicExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'grid-list-dynamic-example',
                        template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return GridListDynamicExample;
    }());

    /**
     * @title Basic grid-list
     */
    var GridListOverviewExample = /** @class */ (function () {
        function GridListOverviewExample() {
        }
        GridListOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'grid-list-overview-example',
                        template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n",
                        styles: ["mat-grid-tile {\n  background: lightblue;\n}\n"]
                    }] }
        ];
        return GridListOverviewExample;
    }());

    var EXAMPLES = [
        GridListDynamicExample,
        GridListOverviewExample,
    ];
    var GridListExamplesModule = /** @class */ (function () {
        function GridListExamplesModule() {
        }
        GridListExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            gridList.MatGridListModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return GridListExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GridListDynamicExample = GridListDynamicExample;
    exports.GridListOverviewExample = GridListOverviewExample;
    exports.GridListExamplesModule = GridListExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-grid-list.umd.js.map
