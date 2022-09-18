import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/material/badge';
import { MatBadgeModule } from '@angular/material/badge';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Badge overview
 */
class BadgeOverviewExample {
    constructor() {
        this.hidden = false;
    }
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
}
BadgeOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: BadgeOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: BadgeOverviewExample, selector: "badge-overview-example", ngImport: i0, template: "<p>\n<!-- #docregion mat-badge-overlap -->\n  <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n<!-- #enddocregion mat-badge-overlap -->\n</p>\n\n<p>\n<!-- #docregion mat-badge-size -->\n    <span matBadge=\"1\" matBadgeSize=\"large\">Text with large badge</span>\n<!-- #enddocregion mat-badge-size -->\n</p>\n\n<p>\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</p>\n\n<p>\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n</p>\n\n<p>\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</p>\n\n\n", dependencies: [{ kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: BadgeOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-overview-example', template: "<p>\n<!-- #docregion mat-badge-overlap -->\n  <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n<!-- #enddocregion mat-badge-overlap -->\n</p>\n\n<p>\n<!-- #docregion mat-badge-size -->\n    <span matBadge=\"1\" matBadgeSize=\"large\">Text with large badge</span>\n<!-- #enddocregion mat-badge-size -->\n</p>\n\n<p>\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</p>\n\n<p>\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n</p>\n\n<p>\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</p>\n\n\n" }]
        }] });

/**
 * @title Testing with MatBadgeHarness
 */
class BadgeHarnessExample {
    constructor() {
        this.simpleContent = 'S';
        this.overlap = true;
        this.disabled = true;
    }
}
BadgeHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: BadgeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: BadgeHarnessExample, selector: "badge-harness-example", ngImport: i0, template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n", dependencies: [{ kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: BadgeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-harness-example', template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n" }]
        }] });

const EXAMPLES = [BadgeOverviewExample, BadgeHarnessExample];
class BadgeExamplesModule {
}
BadgeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: BadgeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BadgeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-next.1", ngImport: i0, type: BadgeExamplesModule, declarations: [BadgeOverviewExample, BadgeHarnessExample], imports: [MatBadgeModule, MatButtonModule, MatIconModule], exports: [BadgeOverviewExample, BadgeHarnessExample] });
BadgeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: BadgeExamplesModule, imports: [MatBadgeModule, MatButtonModule, MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: BadgeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatBadgeModule, MatButtonModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeExamplesModule, BadgeHarnessExample, BadgeOverviewExample };
//# sourceMappingURL=badge.mjs.map
