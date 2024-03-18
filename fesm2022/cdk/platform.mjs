import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/cdk/platform';
import { getSupportedInputTypes, supportsPassiveEventListeners, supportsScrollBehavior } from '@angular/cdk/platform';

/**
 * @title Platform overview
 */
class CdkPlatformOverviewExample {
    constructor(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkPlatformOverviewExample, deps: [{ token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: CdkPlatformOverviewExample, isStandalone: true, selector: "cdk-platform-overview-example", ngImport: i0, template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkPlatformOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-platform-overview-example', standalone: true, template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" }]
        }], ctorParameters: () => [{ type: i1.Platform }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkPlatformOverviewExample };
//# sourceMappingURL=platform.mjs.map
