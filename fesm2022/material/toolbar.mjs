import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * @title Basic toolbar
 */
class ToolbarBasicExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: ToolbarBasicExample, isStandalone: true, selector: "toolbar-basic-example", ngImport: i0, template: "<mat-toolbar>\n  <button matIconButton class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button matIconButton class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button matIconButton class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n    <mat-icon>share</mat-icon>\n  </button>\n</mat-toolbar>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-basic-example', imports: [MatToolbarModule, MatButtonModule, MatIconModule], template: "<mat-toolbar>\n  <button matIconButton class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button matIconButton class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button matIconButton class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n    <mat-icon>share</mat-icon>\n  </button>\n</mat-toolbar>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
        }] });

/**
 * @title Multi-row toolbar
 */
class ToolbarMultirowExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarMultirowExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: ToolbarMultirowExample, isStandalone: true, selector: "toolbar-multirow-example", ngImport: i0, template: "<mat-toolbar>\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarMultirowExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-multirow-example', imports: [MatToolbarModule, MatIconModule], template: "<mat-toolbar>\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"] }]
        }] });

/**
 * @title Toolbar with just text
 */
class ToolbarSimpleExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarSimpleExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: ToolbarSimpleExample, isStandalone: true, selector: "toolbar-simple-example", ngImport: i0, template: "<mat-toolbar>\n  <span>My Application</span>\n</mat-toolbar>\n", dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarSimpleExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-simple-example', imports: [MatToolbarModule], template: "<mat-toolbar>\n  <span>My Application</span>\n</mat-toolbar>\n" }]
        }] });

/**
 * @title Toolbar overview
 */
class ToolbarOverviewExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: ToolbarOverviewExample, isStandalone: true, selector: "toolbar-overview-example", ngImport: i0, template: "<mat-toolbar>\n  <button matIconButton class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button matIconButton class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button matIconButton class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n    <mat-icon>share</mat-icon>\n  </button>\n</mat-toolbar>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-overview-example', imports: [MatToolbarModule, MatButtonModule, MatIconModule], template: "<mat-toolbar>\n  <button matIconButton class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button matIconButton class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button matIconButton class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n    <mat-icon>share</mat-icon>\n  </button>\n</mat-toolbar>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
        }] });

/**
 * @title Testing with MatToolbarHarness
 */
class ToolbarHarnessExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: ToolbarHarnessExample, isStandalone: true, selector: "toolbar-harness-example", ngImport: i0, template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button matButton>\n      Button 1\n    </button>\n    <button matButton>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n", dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ToolbarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-harness-example', imports: [MatToolbarModule, MatButtonModule], template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button matButton>\n      Button 1\n    </button>\n    <button matButton>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n" }]
        }] });

export { ToolbarBasicExample, ToolbarHarnessExample, ToolbarMultirowExample, ToolbarOverviewExample, ToolbarSimpleExample };
//# sourceMappingURL=toolbar.mjs.map
