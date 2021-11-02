import * as i1 from '@angular/cdk/platform';
import { getSupportedInputTypes, supportsPassiveEventListeners, supportsScrollBehavior, PlatformModule } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

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
}
CdkPlatformOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkPlatformOverviewExample, deps: [{ token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component });
CdkPlatformOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: CdkPlatformOverviewExample, selector: "cdk-platform-overview-example", ngImport: i0, template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkPlatformOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-platform-overview-example', template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Platform }]; } });

const EXAMPLES = [CdkPlatformOverviewExample];
class CdkPlatformExamplesModule {
}
CdkPlatformExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkPlatformExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkPlatformExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkPlatformExamplesModule, declarations: [CdkPlatformOverviewExample], imports: [PlatformModule], exports: [CdkPlatformOverviewExample] });
CdkPlatformExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkPlatformExamplesModule, imports: [[PlatformModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkPlatformExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PlatformModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkPlatformExamplesModule, CdkPlatformOverviewExample };
//# sourceMappingURL=platform.mjs.map
