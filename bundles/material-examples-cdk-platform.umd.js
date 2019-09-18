(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/cdk/platform', ['exports', '@angular/cdk/platform', '@angular/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.cdk = global.ng.materialExamples.cdk || {}, global.ng.materialExamples.cdk.platform = {}), global.ng.cdk.platform, global.ng.core));
}(this, function (exports, platform, core) { 'use strict';

    /**
     * @title Platform overview
     */
    var CdkPlatformOverviewExample = /** @class */ (function () {
        function CdkPlatformOverviewExample(platform$1) {
            this.platform = platform$1;
            this.supportedInputTypes = Array.from(platform.getSupportedInputTypes()).join(', ');
            this.supportsPassiveEventListeners = platform.supportsPassiveEventListeners();
            this.supportsScrollBehavior = platform.supportsScrollBehavior();
        }
        CdkPlatformOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-platform-overview-example',
                        template: "<h3>Platform information:</h3>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        CdkPlatformOverviewExample.ctorParameters = function () { return [
            { type: platform.Platform }
        ]; };
        return CdkPlatformOverviewExample;
    }());

    var EXAMPLES = [CdkPlatformOverviewExample];
    var CdkPlatformExamplesModule = /** @class */ (function () {
        function CdkPlatformExamplesModule() {
        }
        CdkPlatformExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            platform.PlatformModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CdkPlatformExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkPlatformOverviewExample = CdkPlatformOverviewExample;
    exports.CdkPlatformExamplesModule = CdkPlatformExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-cdk-platform.umd.js.map
