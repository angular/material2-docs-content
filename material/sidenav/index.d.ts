import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i12 from '@angular/common';
import * as i13 from '@angular/forms';
import * as i14 from '@angular/material/legacy-button';
import * as i15 from '@angular/material/legacy-checkbox';
import * as i16 from '@angular/material/icon';
import * as i17 from '@angular/material/legacy-list';
import * as i18 from '@angular/material/legacy-radio';
import * as i19 from '@angular/material/sidenav';
import * as i20 from '@angular/material/legacy-select';
import * as i21 from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { OnDestroy } from '@angular/core';

declare namespace i1 {
    export {
        SidenavAutosizeExample
    }
}

declare namespace i10 {
    export {
        SidenavPositionExample
    }
}

declare namespace i11 {
    export {
        SidenavResponsiveExample
    }
}

declare namespace i2 {
    export {
        SidenavBackdropExample
    }
}

declare namespace i3 {
    export {
        SidenavDisableCloseExample
    }
}

declare namespace i4 {
    export {
        SidenavDrawerOverviewExample
    }
}

declare namespace i5 {
    export {
        SidenavHarnessExample
    }
}

declare namespace i6 {
    export {
        SidenavFixedExample
    }
}

declare namespace i7 {
    export {
        SidenavModeExample
    }
}

declare namespace i8 {
    export {
        SidenavOpenCloseExample
    }
}

declare namespace i9 {
    export {
        SidenavOverviewExample
    }
}

/**
 * @title Autosize sidenav
 */
export declare class SidenavAutosizeExample {
    showFiller: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavAutosizeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavAutosizeExample, "sidenav-autosize-example", never, {}, {}, never, never, false, never>;
}

/** @title Drawer with explicit backdrop setting */
export declare class SidenavBackdropExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavBackdropExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavBackdropExample, "sidenav-backdrop-example", never, {}, {}, never, never, false, never>;
}

/** @title Sidenav with custom escape and backdrop click behavior */
export declare class SidenavDisableCloseExample {
    sidenav: MatSidenav;
    reason: string;
    close(reason: string): void;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavDisableCloseExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavDisableCloseExample, "sidenav-disable-close-example", never, {}, {}, never, never, false, never>;
}

/** @title Basic drawer */
export declare class SidenavDrawerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavDrawerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavDrawerOverviewExample, "sidenav-drawer-overview-example", never, {}, {}, never, never, false, never>;
}

export declare class SidenavExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SidenavExamplesModule, [typeof i1.SidenavAutosizeExample, typeof i2.SidenavBackdropExample, typeof i3.SidenavDisableCloseExample, typeof i4.SidenavDrawerOverviewExample, typeof i5.SidenavHarnessExample, typeof i6.SidenavFixedExample, typeof i7.SidenavModeExample, typeof i8.SidenavOpenCloseExample, typeof i9.SidenavOverviewExample, typeof i10.SidenavPositionExample, typeof i11.SidenavResponsiveExample], [typeof i12.CommonModule, typeof i13.FormsModule, typeof i14.MatLegacyButtonModule, typeof i15.MatLegacyCheckboxModule, typeof i16.MatIconModule, typeof i17.MatLegacyListModule, typeof i18.MatLegacyRadioModule, typeof i19.MatSidenavModule, typeof i20.MatLegacySelectModule, typeof i21.MatToolbarModule, typeof i13.ReactiveFormsModule], [typeof i1.SidenavAutosizeExample, typeof i2.SidenavBackdropExample, typeof i3.SidenavDisableCloseExample, typeof i4.SidenavDrawerOverviewExample, typeof i5.SidenavHarnessExample, typeof i6.SidenavFixedExample, typeof i7.SidenavModeExample, typeof i8.SidenavOpenCloseExample, typeof i9.SidenavOverviewExample, typeof i10.SidenavPositionExample, typeof i11.SidenavResponsiveExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SidenavExamplesModule>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavFixedExample, "sidenav-fixed-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Testing with MatSidenavHarness
 */
export declare class SidenavHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavHarnessExample, "sidenav-harness-example", never, {}, {}, never, never, false, never>;
}

/** @title Sidenav with configurable mode */
export declare class SidenavModeExample {
    mode: FormControl<"over" | "push" | "side" | null>;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavModeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavModeExample, "sidenav-mode-example", never, {}, {}, never, never, false, never>;
}

/** @title Sidenav open & close behavior */
export declare class SidenavOpenCloseExample {
    events: string[];
    opened: boolean;
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavOpenCloseExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavOpenCloseExample, "sidenav-open-close-example", never, {}, {}, never, never, false, never>;
}

/** @title Basic sidenav */
export declare class SidenavOverviewExample {
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavOverviewExample, "sidenav-overview-example", never, {}, {}, never, never, false, never>;
}

/** @title Implicit main content with two sidenavs */
export declare class SidenavPositionExample {
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavPositionExample, "sidenav-position-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavResponsiveExample, "sidenav-responsive-example", never, {}, {}, never, never, false, never>;
}

export { }
