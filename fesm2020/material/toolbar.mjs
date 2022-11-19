import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2$1 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * @title Basic toolbar
 */
class ToolbarBasicExample {
}
ToolbarBasicExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToolbarBasicExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ToolbarBasicExample, selector: "toolbar-basic-example", ngImport: i0, template: "<mat-toolbar>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n    <mat-icon>share</mat-icon>\n  </button>\n</mat-toolbar>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"], dependencies: [{ kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2$1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-basic-example', template: "<mat-toolbar>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n    <mat-icon>share</mat-icon>\n  </button>\n</mat-toolbar>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
        }] });

/**
 * @title Multi-row toolbar
 */
class ToolbarMultirowExample {
}
ToolbarMultirowExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarMultirowExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToolbarMultirowExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ToolbarMultirowExample, selector: "toolbar-multirow-example", ngImport: i0, template: "<mat-toolbar color=\"primary\">\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"], dependencies: [{ kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2$1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i2$1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarMultirowExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-multirow-example', template: "<mat-toolbar color=\"primary\">\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"] }]
        }] });

/**
 * @title Toolbar overview
 */
class ToolbarOverviewExample {
}
ToolbarOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToolbarOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ToolbarOverviewExample, selector: "toolbar-overview-example", ngImport: i0, template: "<p>\n<!-- #docregion toolbar-simple -->\n  <mat-toolbar>\n    <span>My Application</span>\n  </mat-toolbar>\n<!-- #enddocregion toolbar-simple -->\n</p>\n\n<p>\n  <mat-toolbar>\n   <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n   <mat-icon>share</mat-icon>\n </button>\n</mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>My App</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button>\n  </mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>My App</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <span>Second Line</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n        <mat-icon>share</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</p>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"], dependencies: [{ kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2$1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i2$1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-overview-example', template: "<p>\n<!-- #docregion toolbar-simple -->\n  <mat-toolbar>\n    <span>My Application</span>\n  </mat-toolbar>\n<!-- #enddocregion toolbar-simple -->\n</p>\n\n<p>\n  <mat-toolbar>\n   <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n   <mat-icon>share</mat-icon>\n </button>\n</mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>My App</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button>\n  </mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>My App</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <span>Second Line</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n        <mat-icon>share</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</p>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
        }] });

/**
 * @title Testing with MatToolbarHarness
 */
class ToolbarHarnessExample {
}
ToolbarHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToolbarHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ToolbarHarnessExample, selector: "toolbar-harness-example", ngImport: i0, template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button mat-button>\n      Button 1\n    </button>\n    <button mat-button>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n", dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2$1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i2$1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-harness-example', template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button mat-button>\n      Button 1\n    </button>\n    <button mat-button>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n" }]
        }] });

const EXAMPLES = [
    ToolbarBasicExample,
    ToolbarHarnessExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
class ToolbarExamplesModule {
}
ToolbarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToolbarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: ToolbarExamplesModule, declarations: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatButtonModule, MatIconModule, MatToolbarModule], exports: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample] });
ToolbarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarExamplesModule, imports: [MatButtonModule, MatIconModule, MatToolbarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ToolbarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatIconModule, MatToolbarModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ToolbarBasicExample, ToolbarExamplesModule, ToolbarHarnessExample, ToolbarMultirowExample, ToolbarOverviewExample };
//# sourceMappingURL=toolbar.mjs.map
