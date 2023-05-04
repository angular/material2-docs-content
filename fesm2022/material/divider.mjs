import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i2 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';

/**
 * @title Basic divider
 */
class DividerOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DividerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: DividerOverviewExample, selector: "divider-overview-example", ngImport: i0, template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n", dependencies: [{ kind: "component", type: i1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i2.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i2.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DividerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'divider-overview-example', template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n" }]
        }] });

/**
 * @title Testing with MatDividerHarness
 */
class DividerHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DividerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: DividerHarnessExample, selector: "divider-harness-example", ngImport: i0, template: "<mat-divider></mat-divider>\n<mat-divider inset vertical></mat-divider>\n", dependencies: [{ kind: "component", type: i1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DividerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'divider-harness-example', template: "<mat-divider></mat-divider>\n<mat-divider inset vertical></mat-divider>\n" }]
        }] });

const EXAMPLES = [DividerHarnessExample, DividerOverviewExample];
class DividerExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DividerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: DividerExamplesModule, declarations: [DividerHarnessExample, DividerOverviewExample], imports: [MatDividerModule, MatListModule], exports: [DividerHarnessExample, DividerOverviewExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DividerExamplesModule, imports: [MatDividerModule, MatListModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DividerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDividerModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DividerExamplesModule, DividerHarnessExample, DividerOverviewExample };
//# sourceMappingURL=divider.mjs.map
