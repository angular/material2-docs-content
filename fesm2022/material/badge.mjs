import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/badge';
import { MatBadgeModule } from '@angular/material/badge';

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: BadgeOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: BadgeOverviewExample, isStandalone: true, selector: "badge-overview-example", ngImport: i0, template: "<!-- #docregion mat-badge-overlap -->\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\n<!-- #enddocregion mat-badge-overlap -->\n\n<!-- #docregion mat-badge-size -->\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\n<!-- #enddocregion mat-badge-size -->\n\n<div class=\"demo-section\">\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</div>\n\n<div class=\"demo-section\">\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n  </div>\n\n<div class=\"demo-section\">\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.demo-section + .demo-section {\n  margin-top: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeColor", "matBadgeOverlap", "matBadgeDisabled", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: BadgeOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-overview-example', standalone: true, imports: [MatBadgeModule, MatButtonModule, MatIconModule], template: "<!-- #docregion mat-badge-overlap -->\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\n<!-- #enddocregion mat-badge-overlap -->\n\n<!-- #docregion mat-badge-size -->\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\n<!-- #enddocregion mat-badge-size -->\n\n<div class=\"demo-section\">\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</div>\n\n<div class=\"demo-section\">\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n  </div>\n\n<div class=\"demo-section\">\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.demo-section + .demo-section {\n  margin-top: 16px;\n}\n"] }]
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: BadgeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: BadgeHarnessExample, isStandalone: true, selector: "badge-harness-example", ngImport: i0, template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeColor", "matBadgeOverlap", "matBadgeDisabled", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: BadgeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-harness-example', standalone: true, imports: [MatButtonModule, MatBadgeModule], template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeHarnessExample, BadgeOverviewExample };
//# sourceMappingURL=badge.mjs.map
