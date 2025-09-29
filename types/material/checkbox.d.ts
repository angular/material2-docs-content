import * as i0 from '@angular/core';
import * as _angular_forms from '@angular/forms';

/**
 * @title Configurable checkbox
 */
declare class CheckboxConfigurableExample {
    readonly checked: i0.ModelSignal<boolean>;
    readonly indeterminate: i0.ModelSignal<boolean>;
    readonly labelPosition: i0.ModelSignal<"before" | "after">;
    readonly disabled: i0.ModelSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxConfigurableExample, "checkbox-configurable-example", never, { "checked": { "alias": "checked"; "required": false; "isSignal": true; }; "indeterminate": { "alias": "indeterminate"; "required": false; "isSignal": true; }; "labelPosition": { "alias": "labelPosition"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "checked": "checkedChange"; "indeterminate": "indeterminateChange"; "labelPosition": "labelPositionChange"; "disabled": "disabledChange"; }, never, never, true, never>;
}

/**
 * @title Testing with MatCheckboxHarness
 */
declare class CheckboxHarnessExample {
    readonly disabled: i0.InputSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxHarnessExample, "checkbox-harness-example", never, { "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

interface Task {
    name: string;
    completed: boolean;
    subtasks?: Task[];
}
/**
 * @title Basic checkboxes
 */
declare class CheckboxOverviewExample {
    readonly task: i0.WritableSignal<Task>;
    readonly partiallyComplete: i0.Signal<boolean>;
    update(completed: boolean, index?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxOverviewExample, "checkbox-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Checkboxes with reactive forms */
declare class CheckboxReactiveFormsExample {
    private readonly _formBuilder;
    readonly toppings: _angular_forms.FormGroup<{
        pepperoni: _angular_forms.FormControl<boolean | null>;
        extracheese: _angular_forms.FormControl<boolean | null>;
        mushroom: _angular_forms.FormControl<boolean | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxReactiveFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxReactiveFormsExample, "checkbox-reactive-forms-example", never, {}, {}, never, never, true, never>;
}

export { CheckboxConfigurableExample, CheckboxHarnessExample, CheckboxOverviewExample, CheckboxReactiveFormsExample };
