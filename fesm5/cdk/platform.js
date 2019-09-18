import { getSupportedInputTypes, supportsPassiveEventListeners, supportsScrollBehavior, Platform, PlatformModule } from '@angular/cdk/platform';
import { Component, NgModule } from '@angular/core';

/**
 * @title Platform overview
 */
var CdkPlatformOverviewExample = /** @class */ (function () {
    function CdkPlatformOverviewExample(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
    CdkPlatformOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-platform-overview-example',
                    template: "<h3>Platform information:</h3>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    /** @nocollapse */
    CdkPlatformOverviewExample.ctorParameters = function () { return [
        { type: Platform }
    ]; };
    return CdkPlatformOverviewExample;
}());

var EXAMPLES = [CdkPlatformOverviewExample];
var CdkPlatformExamplesModule = /** @class */ (function () {
    function CdkPlatformExamplesModule() {
    }
    CdkPlatformExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        PlatformModule,
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

export { CdkPlatformOverviewExample, CdkPlatformExamplesModule };
//# sourceMappingURL=platform.js.map
