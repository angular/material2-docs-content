import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i2 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i1 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';

/**
 * @title Basic divider
 */
class DividerOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: DividerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: DividerOverviewExample, isStandalone: true, selector: "divider-overview-example", ngImport: i0, template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "ngmodule", type: MatDividerModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: DividerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'divider-overview-example', standalone: true, imports: [MatListModule, MatDividerModule], template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n" }]
        }] });

/**
 * @title Testing with MatDividerHarness
 */
class DividerHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: DividerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: DividerHarnessExample, isStandalone: true, selector: "divider-harness-example", ngImport: i0, template: "<mat-divider></mat-divider>\n<mat-divider inset vertical></mat-divider>\n", dependencies: [{ kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: DividerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'divider-harness-example', standalone: true, imports: [MatDividerModule], template: "<mat-divider></mat-divider>\n<mat-divider inset vertical></mat-divider>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DividerHarnessExample, DividerOverviewExample };
//# sourceMappingURL=divider.mjs.map
