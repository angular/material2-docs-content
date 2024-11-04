import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/material/grid-list';
import { MatGridListModule } from '@angular/material/grid-list';

/**
 * @title Dynamic grid-list
 */
class GridListDynamicExample {
    tiles = [
        { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    ];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: GridListDynamicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.0.0-rc.0", type: GridListDynamicExample, isStandalone: true, selector: "grid-list-dynamic-example", ngImport: i0, template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  @for (tile of tiles; track tile) {\n    <mat-grid-tile\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">{{tile.text}}</mat-grid-tile>\n  }\n</mat-grid-list>\n", dependencies: [{ kind: "ngmodule", type: MatGridListModule }, { kind: "component", type: i1.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i1.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: GridListDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'grid-list-dynamic-example', imports: [MatGridListModule], template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  @for (tile of tiles; track tile) {\n    <mat-grid-tile\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">{{tile.text}}</mat-grid-tile>\n  }\n</mat-grid-list>\n" }]
        }] });

/**
 * @title Basic grid-list
 */
class GridListOverviewExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: GridListOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-rc.0", type: GridListOverviewExample, isStandalone: true, selector: "grid-list-overview-example", ngImport: i0, template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n", styles: ["mat-grid-tile {\n  background: lightblue;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatGridListModule }, { kind: "component", type: i1.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i1.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: GridListOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'grid-list-overview-example', imports: [MatGridListModule], template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n", styles: ["mat-grid-tile {\n  background: lightblue;\n}\n"] }]
        }] });

/**
 * @title Testing with MatGridListHarness
 */
class GridListHarnessExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: GridListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-rc.0", type: GridListHarnessExample, isStandalone: true, selector: "grid-list-harness-example", ngImport: i0, template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n", dependencies: [{ kind: "ngmodule", type: MatGridListModule }, { kind: "component", type: i1.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i1.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }, { kind: "component", type: i1.MatGridTileText, selector: "mat-grid-tile-header, mat-grid-tile-footer" }, { kind: "directive", type: i1.MatGridTileHeaderCssMatStyler, selector: "mat-grid-tile-header" }, { kind: "directive", type: i1.MatGridTileFooterCssMatStyler, selector: "mat-grid-tile-footer" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: GridListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'grid-list-harness-example', imports: [MatGridListModule], template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { GridListDynamicExample, GridListHarnessExample, GridListOverviewExample };
//# sourceMappingURL=grid-list.mjs.map
