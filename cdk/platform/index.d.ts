import * as i0 from '@angular/core';
import { Platform } from '@angular/cdk/platform';

export declare class CdkPlatformExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPlatformExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkPlatformExamplesModule, [typeof i1.CdkPlatformOverviewExample], never, [typeof i1.CdkPlatformOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkPlatformExamplesModule>;
}

/**
 * @title Platform overview
 */
export declare class CdkPlatformOverviewExample {
    platform: Platform;
    supportedInputTypes: string;
    supportsPassiveEventListeners: boolean;
    supportsScrollBehavior: boolean;
    constructor(platform: Platform);
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPlatformOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPlatformOverviewExample, "cdk-platform-overview-example", never, {}, {}, never, never, false>;
}

declare namespace i1 {
    export {
        CdkPlatformOverviewExample
    }
}

export { }
