import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from '@angular/core';
import * as i2 from '@angular/cdk/layout';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/** @title Respond to viewport changes with BreakpointObserver */
export declare class BreakpointObserverOverviewExample implements OnDestroy {
    destroyed: Subject<void>;
    currentScreenSize: string;
    displayNameMap: Map<string, string>;
    constructor(breakpointObserver: BreakpointObserver);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreakpointObserverOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreakpointObserverOverviewExample, "breakpoint-observer-overview-example", never, {}, {}, never, never, false, never>;
}

export declare class CdkLayoutExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkLayoutExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkLayoutExamplesModule, [typeof i1.BreakpointObserverOverviewExample], [typeof i2.LayoutModule], [typeof i1.BreakpointObserverOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkLayoutExamplesModule>;
}

declare namespace i1 {
    export {
        BreakpointObserverOverviewExample
    }
}

export { }
