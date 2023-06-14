import * as i0 from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TextOnlySnackBar } from '@angular/material/snack-bar';

export declare class PizzaPartyAnnotatedComponent {
    snackBarRef: MatSnackBarRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PizzaPartyAnnotatedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PizzaPartyAnnotatedComponent, "snack-bar-annotated-component-example-snack", never, {}, {}, never, never, true, never>;
}

export declare class PizzaPartyComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<PizzaPartyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PizzaPartyComponent, "snack-bar-component-example-snack", never, {}, {}, never, never, true, never>;
}

/**
 * @title Snack-bar with an annotated custom component
 */
export declare class SnackBarAnnotatedComponentExample {
    private _snackBar;
    durationInSeconds: number;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarAnnotatedComponentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarAnnotatedComponentExample, "snack-bar-annotated-component-example", never, {}, {}, never, never, true, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarComponentExample, "snack-bar-component-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatSnackBarHarness
 */
export declare class SnackBarHarnessExample {
    readonly snackBar: MatSnackBar;
    constructor(snackBar: MatSnackBar);
    open(message: string, action?: string, config?: MatSnackBarConfig): MatSnackBarRef<TextOnlySnackBar>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarHarnessExample, "snack-bar-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic snack-bar
 */
export declare class SnackBarOverviewExample {
    private _snackBar;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(message: string, action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarOverviewExample, "snack-bar-overview-example", never, {}, {}, never, never, true, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarPositionExample, "snack-bar-position-example", never, {}, {}, never, never, true, never>;
}

export { }
