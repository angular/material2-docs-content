import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/** @title Responsive sidenav */
export declare class SidenavResponsiveExample implements OnDestroy {
    mobileQuery: MediaQueryList;
    fillerNav: string[];
    fillerContent: string[];
    private _mobileQueryListener;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher);
    ngOnDestroy(): void;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDef<SidenavResponsiveExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SidenavResponsiveExample, "sidenav-responsive-example", never, {}, {}, never>;
}
