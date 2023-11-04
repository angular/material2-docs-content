import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/platform-browser';

/**
 * @title Basic icons
 */
class IconOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: IconOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: IconOverviewExample, isStandalone: true, selector: "icon-overview-example", ngImport: i0, template: "<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" fontIcon=\"home\"></mat-icon>\n", dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: IconOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-overview-example', standalone: true, imports: [MatIconModule], template: "<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" fontIcon=\"home\"></mat-icon>\n" }]
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: IconSvgExample, deps: [{ token: i1.MatIconRegistry }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: IconSvgExample, isStandalone: true, selector: "icon-svg-example", ngImport: i0, template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n", dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: IconSvgExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-svg-example', standalone: true, imports: [MatIconModule], template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n" }]
        }], ctorParameters: () => [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }] });

/**
 * @title Testing with MatIconHarness
 */
class IconHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: IconHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: IconHarnessExample, isStandalone: true, selector: "icon-harness-example", ngImport: i0, template: "<mat-icon fontSet=\"fontIcons\" fontIcon=\"fontIcon\"></mat-icon>\n<mat-icon svgIcon=\"svgIcons:svgIcon\"></mat-icon>\n<mat-icon inline>ligature_icon</mat-icon>\n<mat-icon fontIcon=\"ligature_icon_by_attribute\"></mat-icon>\n", dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: IconHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-harness-example', standalone: true, imports: [MatIconModule], template: "<mat-icon fontSet=\"fontIcons\" fontIcon=\"fontIcon\"></mat-icon>\n<mat-icon svgIcon=\"svgIcons:svgIcon\"></mat-icon>\n<mat-icon inline>ligature_icon</mat-icon>\n<mat-icon fontIcon=\"ligature_icon_by_attribute\"></mat-icon>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { IconHarnessExample, IconOverviewExample, IconSvgExample };
//# sourceMappingURL=icon.mjs.map
