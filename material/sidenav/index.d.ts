import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as _angular_forms from '@angular/forms';
import { FormControl } from '@angular/forms';

/**
 * @title Autosize sidenav
 */
declare class SidenavAutosizeExample {
    showFiller: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavAutosizeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavAutosizeExample, "sidenav-autosize-example", never, {}, {}, never, never, true, never>;
}

/** @title Drawer with explicit backdrop setting */
declare class SidenavBackdropExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavBackdropExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavBackdropExample, "sidenav-backdrop-example", never, {}, {}, never, never, true, never>;
}

/** @title Sidenav with custom escape and backdrop click behavior */
declare class SidenavDisableCloseExample {
    sidenav: MatSidenav;
    reason: string;
    close(reason: string): void;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavDisableCloseExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavDisableCloseExample, "sidenav-disable-close-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic drawer */
declare class SidenavDrawerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavDrawerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavDrawerOverviewExample, "sidenav-drawer-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Fixed sidenav */
declare class SidenavFixedExample {
    private _formBuilder;
    options: _angular_forms.FormGroup<{
        bottom: _angular_forms.FormControl<number | null>;
        fixed: _angular_forms.FormControl<boolean | null>;
        top: _angular_forms.FormControl<number | null>;
    }>;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavFixedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavFixedExample, "sidenav-fixed-example", never, {}, {}, never, never, true, never>;
}

/** @title Sidenav using injected ConfigurableFocusTrap */
declare class SidenavConfigurableFocusTrapExample {
    mode: FormControl<"push" | "over" | "side" | null>;
    hasBackdrop: FormControl<boolean | null>;
    position: FormControl<"start" | "end" | null>;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavConfigurableFocusTrapExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavConfigurableFocusTrapExample, "sidenav-configurable-focus-trap-example", never, {}, {}, never, never, true, never>;
}

/** @title Sidenav open & close behavior */
declare class SidenavOpenCloseExample {
    events: string[];
    opened: boolean;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavOpenCloseExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavOpenCloseExample, "sidenav-open-close-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic sidenav */
declare class SidenavOverviewExample {
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavOverviewExample, "sidenav-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Implicit main content with two sidenavs */
declare class SidenavPositionExample {
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavPositionExample, "sidenav-position-example", never, {}, {}, never, never, true, never>;
}

/** @title Responsive sidenav */
declare class SidenavResponsiveExample implements OnDestroy {
    protected readonly fillerNav: string[];
    protected readonly fillerContent: string[];
    protected readonly isMobile: i0.WritableSignal<boolean>;
    private readonly _mobileQuery;
    private readonly _mobileQueryListener;
    constructor();
    ngOnDestroy(): void;
    protected readonly shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavResponsiveExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavResponsiveExample, "sidenav-responsive-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatSidenavHarness
 */
declare class SidenavHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavHarnessExample, "sidenav-harness-example", never, {}, {}, never, never, true, never>;
}

export { SidenavAutosizeExample, SidenavBackdropExample, SidenavConfigurableFocusTrapExample, SidenavDisableCloseExample, SidenavDrawerOverviewExample, SidenavFixedExample, SidenavHarnessExample, SidenavOpenCloseExample, SidenavOverviewExample, SidenavPositionExample, SidenavResponsiveExample };
