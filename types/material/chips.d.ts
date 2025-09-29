import * as i0 from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

/**
 * @title Chips Autocomplete
 */
declare class ChipsAutocompleteExample {
    readonly separatorKeysCodes: number[];
    readonly currentFruit: i0.ModelSignal<string>;
    readonly fruits: i0.WritableSignal<string[]>;
    readonly allFruits: string[];
    readonly filteredFruits: i0.Signal<string[]>;
    readonly announcer: LiveAnnouncer;
    add(event: MatChipInputEvent): void;
    remove(fruit: string): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsAutocompleteExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsAutocompleteExample, "chips-autocomplete-example", never, { "currentFruit": { "alias": "currentFruit"; "required": false; "isSignal": true; }; }, { "currentFruit": "currentFruitChange"; }, never, never, true, never>;
}

interface Vegetable {
    name: string;
}
/**
 * @title Chips Drag and Drop
 */
declare class ChipsDragDropExample {
    readonly vegetables: i0.WritableSignal<Vegetable[]>;
    drop(event: CdkDragDrop<Vegetable[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsDragDropExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsDragDropExample, "chips-drag-drop-example", never, {}, {}, never, never, true, never>;
}

interface Fruit {
    name: string;
}
/**
 * @title Chips with input
 */
declare class ChipsInputExample {
    readonly addOnBlur = true;
    readonly separatorKeysCodes: readonly [13, 188];
    readonly fruits: i0.WritableSignal<Fruit[]>;
    readonly announcer: LiveAnnouncer;
    add(event: MatChipInputEvent): void;
    remove(fruit: Fruit): void;
    edit(fruit: Fruit, event: MatChipEditedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsInputExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsInputExample, "chips-input-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic chips
 */
declare class ChipsOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsOverviewExample, "chips-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stacked chips
 */
declare class ChipsStackedExample {
    readonly bestBoys: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsStackedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsStackedExample, "chips-stacked-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatChipsHarness
 */
declare class ChipsHarnessExample {
    isDisabled: i0.WritableSignal<boolean>;
    remove: () => void;
    add: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsHarnessExample, "chips-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Chips with form control
 */
declare class ChipsFormControlExample {
    readonly keywords: i0.WritableSignal<string[]>;
    readonly formControl: FormControl<string[] | null>;
    announcer: LiveAnnouncer;
    removeKeyword(keyword: string): void;
    add(event: MatChipInputEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsFormControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsFormControlExample, "chips-form-control-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Chips in reactive forms
 */
declare class ChipsReactiveFormExample {
    readonly reactiveKeywords: i0.WritableSignal<string[]>;
    readonly formControl: FormControl<string[] | null>;
    announcer: LiveAnnouncer;
    removeReactiveKeyword(keyword: string): void;
    addReactiveKeyword(event: MatChipInputEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsReactiveFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsReactiveFormExample, "chips-reactive-form-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Chips in template-driven forms
 */
declare class ChipsTemplateFormExample {
    readonly templateKeywords: i0.WritableSignal<string[]>;
    announcer: LiveAnnouncer;
    removeTemplateKeyword(keyword: string): void;
    addTemplateKeyword(event: MatChipInputEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsTemplateFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsTemplateFormExample, "chips-template-form-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
declare class ChipsAvatarExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsAvatarExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsAvatarExample, "chips-avatar-example", never, {}, {}, never, never, true, never>;
}

export { ChipsAutocompleteExample, ChipsAvatarExample, ChipsDragDropExample, ChipsFormControlExample, ChipsHarnessExample, ChipsInputExample, ChipsOverviewExample, ChipsReactiveFormExample, ChipsStackedExample, ChipsTemplateFormExample };
