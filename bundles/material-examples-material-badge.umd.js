(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/badge'), require('@angular/material/button'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/badge', ['exports', '@angular/core', '@angular/material/badge', '@angular/material/button', '@angular/material/icon'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.badge = {}), global.ng.core, global.ng.material.badge, global.ng.material.button, global.ng.material.icon));
}(this, function (exports, core, badge, button, icon) { 'use strict';

    /**
     * @title Badge overview
     */
    var BadgeOverviewExample = /** @class */ (function () {
        function BadgeOverviewExample() {
        }
        BadgeOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'badge-overview-example',
                        template: "<p>\n  <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n</p>\n\n<p>\n  Button with a badge on the left\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n</p>\n\n<p>\n  Icon with a badge\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</p>\n\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return BadgeOverviewExample;
    }());

    var EXAMPLES = [
        BadgeOverviewExample,
    ];
    var BadgeExamplesModule = /** @class */ (function () {
        function BadgeExamplesModule() {
        }
        BadgeExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            badge.MatBadgeModule,
                            button.MatButtonModule,
                            icon.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return BadgeExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BadgeOverviewExample = BadgeOverviewExample;
    exports.BadgeExamplesModule = BadgeExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-badge.umd.js.map
