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
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavResponsiveExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavResponsiveExample, "sidenav-responsive-example", never, {}, {}, never, never>;
}
