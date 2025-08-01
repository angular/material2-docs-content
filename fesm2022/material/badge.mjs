import * as i0 from '@angular/core';
import { Component, signal } from '@angular/core';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/badge';
import { MatBadgeModule } from '@angular/material/badge';

/**
 * @title Badge overview
 */
class BadgeOverviewExample {
    hidden = false;
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: BadgeOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: BadgeOverviewExample, isStandalone: true, selector: "badge-overview-example", ngImport: i0, template: "<!-- #docregion mat-badge-overlap -->\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\n<!-- #enddocregion mat-badge-overlap -->\n\n<!-- #docregion mat-badge-size -->\n  <div matBadge=\"1\" matBadgeSize=\"small\" class=\"demo-section\">Text with small badge</div>\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\n<!-- #enddocregion mat-badge-size -->\n\n<div class=\"demo-section\">\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button matButton=\"elevated\" matBadge=\"8\" matBadgePosition=\"before\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</div>\n\n<div class=\"demo-section\">\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button matButton=\"elevated\" matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n  </div>\n\n<div class=\"demo-section\">\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.demo-section + .demo-section {\n  margin-top: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeColor", "matBadgeOverlap", "matBadgeDisabled", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: BadgeOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-overview-example', imports: [MatBadgeModule, MatButtonModule, MatIconModule], template: "<!-- #docregion mat-badge-overlap -->\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\n<!-- #enddocregion mat-badge-overlap -->\n\n<!-- #docregion mat-badge-size -->\n  <div matBadge=\"1\" matBadgeSize=\"small\" class=\"demo-section\">Text with small badge</div>\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\n<!-- #enddocregion mat-badge-size -->\n\n<div class=\"demo-section\">\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button matButton=\"elevated\" matBadge=\"8\" matBadgePosition=\"before\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</div>\n\n<div class=\"demo-section\">\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button matButton=\"elevated\" matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n  </div>\n\n<div class=\"demo-section\">\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.demo-section + .demo-section {\n  margin-top: 16px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatBadgeHarness
 */
class BadgeHarnessExample {
    simpleContent = signal('S', ...(ngDevMode ? [{ debugName: "simpleContent" }] : []));
    overlap = signal(true, ...(ngDevMode ? [{ debugName: "overlap" }] : []));
    disabled = signal(true, ...(ngDevMode ? [{ debugName: "disabled" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: BadgeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: BadgeHarnessExample, isStandalone: true, selector: "badge-harness-example", ngImport: i0, template: "<button matButton id=\"simple\" [matBadge]=\"simpleContent()\">Simple</button>\n<button matButton\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap()\">Overlapping</button>\n<button\n    matButton\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled()\">Disabled</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeColor", "matBadgeOverlap", "matBadgeDisabled", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: BadgeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-harness-example', imports: [MatButtonModule, MatBadgeModule], template: "<button matButton id=\"simple\" [matBadge]=\"simpleContent()\">Simple</button>\n<button matButton\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap()\">Overlapping</button>\n<button\n    matButton\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled()\">Disabled</button>\n" }]
        }] });

export { BadgeHarnessExample, BadgeOverviewExample };
//# sourceMappingURL=badge.mjs.map
