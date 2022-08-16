import * as i0 from '@angular/core';
import * as i5 from '@angular/forms';
import * as i6 from '@angular/material/legacy-button';
import * as i7 from '@angular/material/legacy-input';
import * as i8 from '@angular/material/legacy-select';
import * as i9 from '@angular/material/legacy-snack-bar';
import { LegacyTextOnlySnackBar } from '@angular/material/legacy-snack-bar';
import { MatLegacySnackBar } from '@angular/material/legacy-snack-bar';
import { MatLegacySnackBarConfig } from '@angular/material/legacy-snack-bar';
import { MatLegacySnackBarHorizontalPosition } from '@angular/material/legacy-snack-bar';
import { MatLegacySnackBarRef } from '@angular/material/legacy-snack-bar';
import { MatLegacySnackBarVerticalPosition } from '@angular/material/legacy-snack-bar';

declare namespace i1 {
    export {
        SnackBarComponentExample,
        PizzaPartyComponent
    }
}

declare namespace i2 {
    export {
        SnackBarHarnessExample
    }
}

declare namespace i3 {
    export {
        SnackBarOverviewExample
    }
}

declare namespace i4 {
    export {
        SnackBarPositionExample
    }
}

export declare class PizzaPartyComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<PizzaPartyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PizzaPartyComponent, "snack-bar-component-example-snack", never, {}, {}, never, never, false>;
}

/**
 * @title Snack-bar with a custom component
 */
export declare class SnackBarComponentExample {
    private _snackBar;
    durationInSeconds: number;
    constructor(_snackBar: MatLegacySnackBar);
    openSnackBar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarComponentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarComponentExample, "snack-bar-component-example", never, {}, {}, never, never, false>;
}

export declare class SnackBarExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SnackBarExamplesModule, [typeof i1.SnackBarComponentExample, typeof i2.SnackBarHarnessExample, typeof i3.SnackBarOverviewExample, typeof i4.SnackBarPositionExample, typeof i1.PizzaPartyComponent], [typeof i5.FormsModule, typeof i6.MatLegacyButtonModule, typeof i7.MatLegacyInputModule, typeof i8.MatLegacySelectModule, typeof i9.MatLegacySnackBarModule], [typeof i1.SnackBarComponentExample, typeof i2.SnackBarHarnessExample, typeof i3.SnackBarOverviewExample, typeof i4.SnackBarPositionExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SnackBarExamplesModule>;
}

/**
 * @title Testing with MatSnackBarHarness
 */
export declare class SnackBarHarnessExample {
    readonly snackBar: MatLegacySnackBar;
    constructor(snackBar: MatLegacySnackBar);
    open(message: string, action?: string, config?: MatLegacySnackBarConfig): MatLegacySnackBarRef<LegacyTextOnlySnackBar>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarHarnessExample, "snack-bar-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic snack-bar
 */
export declare class SnackBarOverviewExample {
    private _snackBar;
    constructor(_snackBar: MatLegacySnackBar);
    openSnackBar(message: string, action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarOverviewExample, "snack-bar-overview-example", never, {}, {}, never, never, false>;
}

/**
 * @title Snack-bar with configurable position
 */
export declare class SnackBarPositionExample {
    private _snackBar;
    horizontalPosition: MatLegacySnackBarHorizontalPosition;
    verticalPosition: MatLegacySnackBarVerticalPosition;
    constructor(_snackBar: MatLegacySnackBar);
    openSnackBar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarPositionExample, "snack-bar-position-example", never, {}, {}, never, never, false>;
}

export { }
