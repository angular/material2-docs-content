import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i1 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';

/**
 * @title Basic divider
 */
class DividerOverviewExample {
}
DividerOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: DividerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DividerOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.9", type: DividerOverviewExample, selector: "divider-overview-example", ngImport: i0, template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n", components: [{ type: i1.MatList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }, { type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }, { type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: DividerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'divider-overview-example', template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n" }]
        }] });

/**
 * @title Testing with MatDividerHarness
 */
class DividerHarnessExample {
}
DividerHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: DividerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DividerHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.9", type: DividerHarnessExample, selector: "divider-harness-example", ngImport: i0, template: "<mat-divider></mat-divider>\n<mat-divider inset vertical></mat-divider>\n", components: [{ type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: DividerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'divider-harness-example', template: "<mat-divider></mat-divider>\n<mat-divider inset vertical></mat-divider>\n" }]
        }] });

const EXAMPLES = [DividerHarnessExample, DividerOverviewExample];
class DividerExamplesModule {
}
DividerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: DividerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DividerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: DividerExamplesModule, declarations: [DividerHarnessExample, DividerOverviewExample], imports: [MatDividerModule, MatListModule], exports: [DividerHarnessExample, DividerOverviewExample] });
DividerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: DividerExamplesModule, imports: [[MatDividerModule, MatListModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: DividerExamplesModule, decorators: [{
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
