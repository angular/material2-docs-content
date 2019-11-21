import { NgForOf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵstyleSanitizer, ɵɵdefaultStyleSanitizer, ɵɵstyleProp, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineComponent, ɵɵtemplate, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatGridList, MatGridTile, MatGridListModule } from '@angular/material/grid-list';

function GridListDynamicExample_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-grid-tile", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var tile_r1 = ctx.$implicit;
    ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
    ɵɵstyleProp("background", tile_r1.color);
    ɵɵproperty("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", tile_r1.text, " ");
} }
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
        { type: Component, args: [{
                    selector: 'grid-list-dynamic-example',
                    templateUrl: 'grid-list-dynamic-example.html',
                    styleUrls: ['grid-list-dynamic-example.css'],
                },] },
    ];
    GridListDynamicExample.ɵfac = function GridListDynamicExample_Factory(t) { return new (t || GridListDynamicExample)(); };
    GridListDynamicExample.ɵcmp = ɵɵdefineComponent({ type: GridListDynamicExample, selectors: [["grid-list-dynamic-example"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]], template: function GridListDynamicExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-grid-list", 0);
            ɵɵtemplate(1, GridListDynamicExample_mat_grid_tile_1_Template, 2, 4, "mat-grid-tile", 1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.tiles);
        } }, directives: [MatGridList, NgForOf, MatGridTile], styles: [""] });
    return GridListDynamicExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridListDynamicExample, [{
        type: Component,
        args: [{
                selector: 'grid-list-dynamic-example',
                templateUrl: 'grid-list-dynamic-example.html',
                styleUrls: ['grid-list-dynamic-example.css'],
            }]
    }], null, null); })();

/**
 * @title Basic grid-list
 */
var GridListOverviewExample = /** @class */ (function () {
    function GridListOverviewExample() {
    }
    GridListOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'grid-list-overview-example',
                    styleUrls: ['grid-list-overview-example.css'],
                    templateUrl: 'grid-list-overview-example.html',
                },] },
    ];
    GridListOverviewExample.ɵfac = function GridListOverviewExample_Factory(t) { return new (t || GridListOverviewExample)(); };
    GridListOverviewExample.ɵcmp = ɵɵdefineComponent({ type: GridListOverviewExample, selectors: [["grid-list-overview-example"]], decls: 9, vars: 0, consts: [["cols", "2", "rowHeight", "2:1"]], template: function GridListOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-grid-list", 0);
            ɵɵelementStart(1, "mat-grid-tile");
            ɵɵtext(2, "1");
            ɵɵelementEnd();
            ɵɵelementStart(3, "mat-grid-tile");
            ɵɵtext(4, "2");
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-grid-tile");
            ɵɵtext(6, "3");
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-grid-tile");
            ɵɵtext(8, "4");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatGridList, MatGridTile], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}"] });
    return GridListOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridListOverviewExample, [{
        type: Component,
        args: [{
                selector: 'grid-list-overview-example',
                styleUrls: ['grid-list-overview-example.css'],
                templateUrl: 'grid-list-overview-example.html',
            }]
    }], null, null); })();

var EXAMPLES = [
    GridListDynamicExample,
    GridListOverviewExample,
];
var GridListExamplesModule = /** @class */ (function () {
    function GridListExamplesModule() {
    }
    GridListExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatGridListModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    GridListExamplesModule.ɵmod = ɵɵdefineNgModule({ type: GridListExamplesModule });
    GridListExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function GridListExamplesModule_Factory(t) { return new (t || GridListExamplesModule)(); }, imports: [[
                CommonModule,
                MatGridListModule,
            ]] });
    return GridListExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GridListExamplesModule, { declarations: [GridListDynamicExample,
        GridListOverviewExample], imports: [CommonModule,
        MatGridListModule], exports: [GridListDynamicExample,
        GridListOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { GridListDynamicExample, GridListExamplesModule, GridListOverviewExample };
//# sourceMappingURL=grid-list.js.map
