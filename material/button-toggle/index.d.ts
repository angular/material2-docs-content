import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';
import { WritableSignal } from '@angular/core';

/**
 * @title Button toggle appearance
 */
export declare class ButtonToggleAppearanceExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleAppearanceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleAppearanceExample, "button-toggle-appearance-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Button-toggles with forms
 */
export declare class ButtonToggleFormsExample {
    fontStyleControl: FormControl<string | null>;
    fontStyle?: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleFormsExample, "button-toggle-forms-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatButtonToggleHarness
 */
export declare class ButtonToggleHarnessExample {
    disabled: WritableSignal<boolean>;
    appearance: WritableSignal<MatButtonToggleAppearance>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleHarnessExample, "button-toggle-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Button toggle selection mode
 */
export declare class ButtonToggleModeExample {
    hideSingleSelectionIndicator: WritableSignal<boolean>;
    hideMultipleSelectionIndicator: WritableSignal<boolean>;
    toggleSingleSelectionIndicator(): void;
    toggleMultipleSelectionIndicator(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleModeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleModeExample, "button-toggle-mode-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic button-toggles
 */
export declare class ButtonToggleOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleOverviewExample, "button-toggle-overview-example", never, {}, {}, never, never, true, never>;
}

export { }
