(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/icon'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/icon', ['exports', '@angular/core', '@angular/material/icon', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.icon = {}), global.ng.core, global.ng.material.icon, global.ng.platformBrowser));
}(this, function (exports, core, icon, platformBrowser) { 'use strict';

    /**
     * @title Basic icons
     */
    var IconOverviewExample = /** @class */ (function () {
        function IconOverviewExample() {
        }
        IconOverviewExample.decorators = [
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'icon-svg-example',
                        template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        IconSvgExample.ctorParameters = function () { return [
            { type: icon.MatIconRegistry },
            { type: platformBrowser.DomSanitizer }
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
            { type: core.NgModule, args: [{
                        imports: [
                            icon.MatIconModule,
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

    exports.IconOverviewExample = IconOverviewExample;
    exports.IconSvgExample = IconSvgExample;
    exports.IconExamplesModule = IconExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-icon.umd.js.map
