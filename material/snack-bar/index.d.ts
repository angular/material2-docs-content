import * as i0 from '@angular/core';
import * as i5 from '@angular/forms';
import * as i6 from '@angular/material/button';
import * as i7 from '@angular/material/legacy-input';
import * as i8 from '@angular/material/select';
import * as i9 from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TextOnlySnackBar } from '@angular/material/snack-bar';

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
    constructor(_snackBar: MatSnackBar);
    openSnackBar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarComponentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarComponentExample, "snack-bar-component-example", never, {}, {}, never, never, false>;
}

export declare class SnackBarExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SnackBarExamplesModule, [typeof i1.SnackBarComponentExample, typeof i2.SnackBarHarnessExample, typeof i3.SnackBarOverviewExample, typeof i4.SnackBarPositionExample, typeof i1.PizzaPartyComponent], [typeof i5.FormsModule, typeof i6.MatButtonModule, typeof i7.MatLegacyInputModule, typeof i8.MatSelectModule, typeof i9.MatSnackBarModule], [typeof i1.SnackBarComponentExample, typeof i2.SnackBarHarnessExample, typeof i3.SnackBarOverviewExample, typeof i4.SnackBarPositionExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SnackBarExamplesModule>;
}

/**
 * @title Testing with MatSnackBarHarness
 */
export declare class SnackBarHarnessExample {
    readonly snackBar: MatSnackBar;
    constructor(snackBar: MatSnackBar);
    open(message: string, action?: string, config?: MatSnackBarConfig): MatSnackBarRef<TextOnlySnackBar>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarHarnessExample, "snack-bar-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic snack-bar
 */
export declare class SnackBarOverviewExample {
    private _snackBar;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(message: string, action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarOverviewExample, "snack-bar-overview-example", never, {}, {}, never, never, false>;
}

/**
 * @title Snack-bar with configurable position
 */
export declare class SnackBarPositionExample {
    private _snackBar;
    horizontalPosition: MatSnackBarHorizontalPosition;
    verticalPosition: MatSnackBarVerticalPosition;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarPositionExample, "snack-bar-position-example", never, {}, {}, never, never, false>;
}

export { }
