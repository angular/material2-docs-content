import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/** @title Respond to viewport changes with BreakpointObserver */
declare class BreakpointObserverOverviewExample implements OnDestroy {
    destroyed: Subject<void>;
    currentScreenSize: string;
    displayNameMap: Map<string, string>;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreakpointObserverOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreakpointObserverOverviewExample, "breakpoint-observer-overview-example", never, {}, {}, never, never, true, never>;
}

export { BreakpointObserverOverviewExample };
