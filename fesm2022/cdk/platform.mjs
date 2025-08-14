import * as i0 from '@angular/core';
import { inject, Component } from '@angular/core';
import { Platform, getSupportedInputTypes, supportsPassiveEventListeners, supportsScrollBehavior } from '@angular/cdk/platform';

/**
 * @title Platform overview
 */
class CdkPlatformOverviewExample {
    platform = inject(Platform);
    supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
    supportsPassiveEventListeners = supportsPassiveEventListeners();
    supportsScrollBehavior = supportsScrollBehavior();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: i0, type: CdkPlatformOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-rc.1", type: CdkPlatformOverviewExample, isStandalone: true, selector: "cdk-platform-overview-example", ngImport: i0, template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-rc.1", ngImport: i0, type: CdkPlatformOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-platform-overview-example', template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" }]
        }] });

export { CdkPlatformOverviewExample };
//# sourceMappingURL=platform.mjs.map
