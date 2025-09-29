import * as i0 from '@angular/core';
import * as _angular_material_snack_bar from '@angular/material/snack-bar';
import { MatSnackBarRef, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

/**
 * @title Snack-bar with a custom component
 */
declare class SnackBarComponentExample {
    private _snackBar;
    durationInSeconds: number;
    openSnackBar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarComponentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarComponentExample, "snack-bar-component-example", never, {}, {}, never, never, true, never>;
}
declare class PizzaPartyComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<PizzaPartyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PizzaPartyComponent, "snack-bar-component-example-snack", never, {}, {}, never, never, true, never>;
}

/**
 * @title Snack-bar with an annotated custom component
 */
declare class SnackBarAnnotatedComponentExample {
    private _snackBar;
    durationInSeconds: number;
    openSnackBar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarAnnotatedComponentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarAnnotatedComponentExample, "snack-bar-annotated-component-example", never, {}, {}, never, never, true, never>;
}
declare class PizzaPartyAnnotatedComponent {
    snackBarRef: MatSnackBarRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PizzaPartyAnnotatedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PizzaPartyAnnotatedComponent, "snack-bar-annotated-component-example-snack", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic snack-bar
 */
declare class SnackBarOverviewExample {
    private _snackBar;
    openSnackBar(message: string, action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarOverviewExample, "snack-bar-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Snack-bar with configurable position
 */
declare class SnackBarPositionExample {
    private _snackBar;
    horizontalPosition: MatSnackBarHorizontalPosition;
    verticalPosition: MatSnackBarVerticalPosition;
    openSnackBar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarPositionExample, "snack-bar-position-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatSnackBarHarness
 */
declare class SnackBarHarnessExample {
    readonly snackBar: MatSnackBar;
    open(message: string, action?: string, config?: MatSnackBarConfig): _angular_material_snack_bar.MatSnackBarRef<_angular_material_snack_bar.TextOnlySnackBar>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarHarnessExample, "snack-bar-harness-example", never, {}, {}, never, never, true, never>;
}

export { PizzaPartyAnnotatedComponent, PizzaPartyComponent, SnackBarAnnotatedComponentExample, SnackBarComponentExample, SnackBarHarnessExample, SnackBarOverviewExample, SnackBarPositionExample };
