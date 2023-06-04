import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
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
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxConfigurableExample, "checkbox-configurable-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Testing with MatCheckboxHarness
 */
export declare class CheckboxHarnessExample {
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxHarnessExample, "checkbox-harness-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxOverviewExample, "checkbox-overview-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxReactiveFormsExample, "checkbox-reactive-forms-example", never, {}, {}, never, never, true, never, false>;
}

declare interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
}

export { }
