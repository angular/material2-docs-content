import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import { InputSignal } from '@angular/core';
import { ModelSignal } from '@angular/core';
import { Signal } from '@angular/core';
import { WritableSignal } from '@angular/core';

/**
 * @title Configurable checkbox
 */
export declare class CheckboxConfigurableExample {
    readonly checked: ModelSignal<boolean>;
    readonly indeterminate: ModelSignal<boolean>;
    readonly labelPosition: ModelSignal<"before" | "after">;
    readonly disabled: ModelSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxConfigurableExample, "checkbox-configurable-example", never, { "checked": { "alias": "checked"; "required": false; "isSignal": true; }; "indeterminate": { "alias": "indeterminate"; "required": false; "isSignal": true; }; "labelPosition": { "alias": "labelPosition"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "checked": "checkedChange"; "indeterminate": "indeterminateChange"; "labelPosition": "labelPositionChange"; "disabled": "disabledChange"; }, never, never, true, never>;
}

/**
 * @title Testing with MatCheckboxHarness
 */
export declare class CheckboxHarnessExample {
    readonly disabled: InputSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxHarnessExample, "checkbox-harness-example", never, { "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

/**
 * @title Basic checkboxes
 */
export declare class CheckboxOverviewExample {
    readonly task: WritableSignal<Task>;
    readonly partiallyComplete: Signal<boolean>;
    update(completed: boolean, index?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxOverviewExample, "checkbox-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Checkboxes with reactive forms */
export declare class CheckboxReactiveFormsExample {
    private readonly _formBuilder;
    readonly toppings: FormGroup<    {
    pepperoni: FormControl<boolean | null>;
    extracheese: FormControl<boolean | null>;
    mushroom: FormControl<boolean | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxReactiveFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxReactiveFormsExample, "checkbox-reactive-forms-example", never, {}, {}, never, never, true, never>;
}

declare interface Task {
    name: string;
    completed: boolean;
    subtasks?: Task[];
}

export { }
