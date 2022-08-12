import * as i0 from '@angular/core';
import * as i3 from '@angular/material/legacy-button';
import * as i4 from '@angular/material/legacy-checkbox';
import * as i5 from '@angular/material/legacy-input';
import * as i6 from '@angular/material/core';
import * as i7 from '@angular/forms';

export declare class CoreExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CoreExamplesModule, [typeof i1.ElevationOverviewExample, typeof i2.RippleOverviewExample], [typeof i3.MatLegacyButtonModule, typeof i4.MatLegacyCheckboxModule, typeof i5.MatLegacyInputModule, typeof i6.MatRippleModule, typeof i7.FormsModule], [typeof i1.ElevationOverviewExample, typeof i2.RippleOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CoreExamplesModule>;
}

/**
 * @title Elevation CSS classes
 */
export declare class ElevationOverviewExample {
    isActive: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElevationOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ElevationOverviewExample, "elevation-overview-example", never, {}, {}, never, never, false>;
}

declare namespace i1 {
    export {
        ElevationOverviewExample
    }
}

declare namespace i2 {
    export {
        RippleOverviewExample
    }
}

/**
 * @title MatRipple basic usage
 */
export declare class RippleOverviewExample {
    centered: boolean;
    disabled: boolean;
    unbounded: boolean;
    radius: number;
    color: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RippleOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RippleOverviewExample, "ripple-overview-example", never, {}, {}, never, never, false>;
}

export { }
