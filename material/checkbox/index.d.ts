import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i5 from '@angular/common';
import * as i6 from '@angular/material/legacy-card';
import * as i7 from '@angular/material/legacy-checkbox';
import * as i8 from '@angular/material/legacy-radio';
import * as i9 from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

/**
 * @title Configurable checkbox
 */
export declare class CheckboxConfigurableExample {
    checked: boolean;
    indeterminate: boolean;
    labelPosition: 'before' | 'after';
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxConfigurableExample, "checkbox-configurable-example", never, {}, {}, never, never, false>;
}

export declare class CheckboxExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CheckboxExamplesModule, [typeof i1.CheckboxConfigurableExample, typeof i2.CheckboxOverviewExample, typeof i3.CheckboxHarnessExample, typeof i4.CheckboxReactiveFormsExample], [typeof i5.CommonModule, typeof i6.MatLegacyCardModule, typeof i7.MatLegacyCheckboxModule, typeof i8.MatLegacyRadioModule, typeof i9.FormsModule, typeof i9.ReactiveFormsModule], [typeof i1.CheckboxConfigurableExample, typeof i2.CheckboxOverviewExample, typeof i3.CheckboxHarnessExample, typeof i4.CheckboxReactiveFormsExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CheckboxExamplesModule>;
}

/**
 * @title Testing with MatCheckboxHarness
 */
export declare class CheckboxHarnessExample {
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxHarnessExample, "checkbox-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic checkboxes
 */
export declare class CheckboxOverviewExample {
    task: Task;
    allComplete: boolean;
    updateAllComplete(): void;
    someComplete(): boolean;
    setAll(completed: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxOverviewExample, "checkbox-overview-example", never, {}, {}, never, never, false>;
}

/** @title Checkboxes with reactive forms */
export declare class CheckboxReactiveFormsExample {
    private _formBuilder;
    toppings: FormGroup<    {
    pepperoni: FormControl<boolean | null>;
    extracheese: FormControl<boolean | null>;
    mushroom: FormControl<boolean | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxReactiveFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxReactiveFormsExample, "checkbox-reactive-forms-example", never, {}, {}, never, never, false>;
}

declare namespace i1 {
    export {
        CheckboxConfigurableExample
    }
}

declare namespace i2 {
    export {
        Task,
        CheckboxOverviewExample
    }
}

declare namespace i3 {
    export {
        CheckboxHarnessExample
    }
}

declare namespace i4 {
    export {
        CheckboxReactiveFormsExample
    }
}

declare interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
}

export { }
