import { Component, NgModule } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @title Basic icons
 */
var IconOverviewExample = /** @class */ (function () {
    function IconOverviewExample() {
    }
    IconOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'icon-overview-example',
                    template: "<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">home</mat-icon>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return IconOverviewExample;
}());

/**
 * @title SVG icons
 */
var IconSvgExample = /** @class */ (function () {
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    IconSvgExample.decorators = [
        { type: Component, args: [{
                    selector: 'icon-svg-example',
                    template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    /** @nocollapse */
    IconSvgExample.ctorParameters = function () { return [
        { type: MatIconRegistry },
        { type: DomSanitizer }
    ]; };
    return IconSvgExample;
}());

var EXAMPLES = [
    IconOverviewExample,
    IconSvgExample,
];
var IconExamplesModule = /** @class */ (function () {
    function IconExamplesModule() {
    }
    IconExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return IconExamplesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { IconOverviewExample, IconSvgExample, IconExamplesModule };
//# sourceMappingURL=icon.js.map
