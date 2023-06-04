import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { OnDestroy } from '@angular/core';

/**
 * @title Autosize sidenav
 */
export declare class SidenavAutosizeExample {
    showFiller: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavAutosizeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavAutosizeExample, "sidenav-autosize-example", never, {}, {}, never, never, true, never, false>;
}

/** @title Drawer with explicit backdrop setting */
export declare class SidenavBackdropExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavBackdropExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavBackdropExample, "sidenav-backdrop-example", never, {}, {}, never, never, true, never, false>;
}

/** @title Sidenav with custom escape and backdrop click behavior */
export declare class SidenavDisableCloseExample {
    sidenav: MatSidenav;
    reason: string;
    close(reason: string): void;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavDisableCloseExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavDisableCloseExample, "sidenav-disable-close-example", never, {}, {}, never, never, true, never, false>;
}

/** @title Basic drawer */
export declare class SidenavDrawerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavDrawerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavDrawerOverviewExample, "sidenav-drawer-overview-example", never, {}, {}, never, never, true, never, false>;
}

/** @title Fixed sidenav */
export declare class SidenavFixedExample {
    private _formBuilder;
    options: FormGroup<    {
    bottom: FormControl<number | null>;
    fixed: FormControl<boolean | null>;
    top: FormControl<number | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavFixedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavFixedExample, "sidenav-fixed-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Testing with MatSidenavHarness
 */
export declare class SidenavHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavHarnessExample, "sidenav-harness-example", never, {}, {}, never, never, true, never, false>;
}

/** @title Sidenav with configurable mode */
export declare class SidenavModeExample {
    mode: FormControl<"over" | "push" | "side" | null>;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavModeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavModeExample, "sidenav-mode-example", never, {}, {}, never, never, true, never, false>;
}

/** @title Sidenav open & close behavior */
export declare class SidenavOpenCloseExample {
    events: string[];
    opened: boolean;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavOpenCloseExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavOpenCloseExample, "sidenav-open-close-example", never, {}, {}, never, never, true, never, false>;
}

/** @title Basic sidenav */
export declare class SidenavOverviewExample {
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavOverviewExample, "sidenav-overview-example", never, {}, {}, never, never, true, never, false>;
}

/** @title Implicit main content with two sidenavs */
export declare class SidenavPositionExample {
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavPositionExample, "sidenav-position-example", never, {}, {}, never, never, true, never, false>;
}

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
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavResponsiveExample, "sidenav-responsive-example", never, {}, {}, never, never, true, never, false>;
}

export { }
