import * as i0 from '@angular/core';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';
import * as _angular_forms_signals from '@angular/forms/signals';
import { FormControl } from '@angular/forms';

/**
 * @title Button toggle appearance
 */
declare class ButtonToggleAppearanceExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleAppearanceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleAppearanceExample, "button-toggle-appearance-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic button-toggles
 */
declare class ButtonToggleOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleOverviewExample, "button-toggle-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatButtonToggleHarness
 */
declare class ButtonToggleHarnessExample {
    disabled: i0.WritableSignal<boolean>;
    appearance: i0.WritableSignal<MatButtonToggleAppearance>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleHarnessExample, "button-toggle-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Button-toggles with forms
 */
declare class ButtonToggleFormsExample {
    readonly fontStyleControl: FormControl<string | null>;
    readonly fontStyle: i0.WritableSignal<string | undefined>;
    readonly fontStyleForm: _angular_forms_signals.FieldTree<string, string | number, "writable">;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleFormsExample, "button-toggle-forms-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Button toggle selection mode
 */
declare class ButtonToggleModeExample {
    hideSingleSelectionIndicator: i0.WritableSignal<boolean>;
    hideMultipleSelectionIndicator: i0.WritableSignal<boolean>;
    toggleSingleSelectionIndicator(): void;
    toggleMultipleSelectionIndicator(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonToggleModeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonToggleModeExample, "button-toggle-mode-example", never, {}, {}, never, never, true, never>;
}

export { ButtonToggleAppearanceExample, ButtonToggleFormsExample, ButtonToggleHarnessExample, ButtonToggleModeExample, ButtonToggleOverviewExample };
