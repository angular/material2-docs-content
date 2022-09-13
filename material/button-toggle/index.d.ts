import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i7 from '@angular/forms';
import * as i8 from '@angular/material/button-toggle';
import * as i9 from '@angular/material/icon';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';

/**
 * @title Button toggle appearance
 */
export declare class ButtonToggleAppearanceExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleAppearanceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleAppearanceExample, "button-toggle-appearance-example", never, {}, {}, never, never, false, never>;
}

export declare class ButtonToggleExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ButtonToggleExamplesModule, [typeof i1.ButtonToggleAppearanceExample, typeof i2.ButtonToggleExclusiveExample, typeof i3.ButtonToggleOverviewExample, typeof i4.ButtonToggleHarnessExample, typeof i5.ButtonToggleFormsExample, typeof i6.ButtonToggleModeExample], [typeof i7.FormsModule, typeof i8.MatButtonToggleModule, typeof i9.MatIconModule, typeof i7.ReactiveFormsModule], [typeof i1.ButtonToggleAppearanceExample, typeof i2.ButtonToggleExclusiveExample, typeof i3.ButtonToggleOverviewExample, typeof i4.ButtonToggleHarnessExample, typeof i5.ButtonToggleFormsExample, typeof i6.ButtonToggleModeExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ButtonToggleExamplesModule>;
}

/**
 * @title Exclusive selection
 */
export declare class ButtonToggleExclusiveExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleExclusiveExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleExclusiveExample, "button-toggle-exclusive-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Button-toggles with forms
 */
export declare class ButtonToggleFormsExample {
    fontStyleControl: FormControl<string | null>;
    fontStyle?: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleFormsExample, "button-toggle-forms-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Testing with MatButtonToggleHarness
 */
export declare class ButtonToggleHarnessExample {
    disabled: boolean;
    appearance: MatButtonToggleAppearance;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleHarnessExample, "button-toggle-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Button toggle selection mode
 */
export declare class ButtonToggleModeExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleModeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleModeExample, "button-toggle-mode-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic button-toggles
 */
export declare class ButtonToggleOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleOverviewExample, "button-toggle-overview-example", never, {}, {}, never, never, false, never>;
}

declare namespace i1 {
    export {
        ButtonToggleAppearanceExample
    }
}

declare namespace i2 {
    export {
        ButtonToggleExclusiveExample
    }
}

declare namespace i3 {
    export {
        ButtonToggleOverviewExample
    }
}

declare namespace i4 {
    export {
        ButtonToggleHarnessExample
    }
}

declare namespace i5 {
    export {
        ButtonToggleFormsExample
    }
}

declare namespace i6 {
    export {
        ButtonToggleModeExample
    }
}

export { }
