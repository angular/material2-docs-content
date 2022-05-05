import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/platform-browser';

/**
 * @title Basic icons
 */
class IconOverviewExample {
}
IconOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-next.16", type: IconOverviewExample, selector: "icon-overview-example", ngImport: i0, template: "<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">home</mat-icon>\n", dependencies: [{ kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-overview-example', template: "<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">home</mat-icon>\n" }]
        }] });

const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
    `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
    `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
/**
 * @title SVG icons
 */
class IconSvgExample {
    constructor(iconRegistry, sanitizer) {
        // Note that we provide the icon here as a string literal here due to a limitation in
        // Stackblitz. If you want to provide the icon from a URL, you can use:
        // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
        iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    }
}
IconSvgExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconSvgExample, deps: [{ token: i1.MatIconRegistry }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
IconSvgExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-next.16", type: IconSvgExample, selector: "icon-svg-example", ngImport: i0, template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n", dependencies: [{ kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconSvgExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-svg-example', template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; } });

/**
 * @title Testing with MatIconHarness
 */
class IconHarnessExample {
}
IconHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-next.16", type: IconHarnessExample, selector: "icon-harness-example", ngImport: i0, template: "<mat-icon fontSet=\"fontIcons\" fontIcon=\"fontIcon\"></mat-icon>\n<mat-icon svgIcon=\"svgIcons:svgIcon\"></mat-icon>\n<mat-icon inline>ligature_icon</mat-icon>\n", dependencies: [{ kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-harness-example', template: "<mat-icon fontSet=\"fontIcons\" fontIcon=\"fontIcon\"></mat-icon>\n<mat-icon svgIcon=\"svgIcons:svgIcon\"></mat-icon>\n<mat-icon inline>ligature_icon</mat-icon>\n" }]
        }] });

const EXAMPLES = [IconHarnessExample, IconOverviewExample, IconSvgExample];
class IconExamplesModule {
}
IconExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IconExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconExamplesModule, declarations: [IconHarnessExample, IconOverviewExample, IconSvgExample], imports: [MatIconModule], exports: [IconHarnessExample, IconOverviewExample, IconSvgExample] });
IconExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconExamplesModule, imports: [MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: IconExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { IconExamplesModule, IconHarnessExample, IconOverviewExample, IconSvgExample };
//# sourceMappingURL=icon.mjs.map
