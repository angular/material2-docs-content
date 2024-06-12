import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipEditedEvent } from '@angular/material/chips';
import { MatChipInputEvent } from '@angular/material/chips';
import { ModelSignal } from '@angular/core';
import { Signal } from '@angular/core';
import { WritableSignal } from '@angular/core';

/**
 * @title Chips Autocomplete
 */
export declare class ChipsAutocompleteExample {
    readonly separatorKeysCodes: number[];
    readonly currentFruit: ModelSignal<string>;
    readonly fruits: WritableSignal<string[]>;
    readonly allFruits: string[];
    readonly filteredFruits: Signal<string[]>;
    readonly announcer: LiveAnnouncer;
    add(event: MatChipInputEvent): void;
    remove(fruit: string): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsAutocompleteExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsAutocompleteExample, "chips-autocomplete-example", never, { "currentFruit": { "alias": "currentFruit"; "required": false; "isSignal": true; }; }, { "currentFruit": "currentFruitChange"; }, never, never, true, never>;
}

/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
export declare class ChipsAvatarExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsAvatarExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsAvatarExample, "chips-avatar-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Chips Drag and Drop
 */
export declare class ChipsDragDropExample {
    readonly vegetables: WritableSignal<Vegetable[]>;
    drop(event: CdkDragDrop<Vegetable[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsDragDropExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsDragDropExample, "chips-drag-drop-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Chips with form control
 */
export declare class ChipsFormControlExample {
    readonly keywords: WritableSignal<string[]>;
    readonly formControl: FormControl<string[] | null>;
    announcer: LiveAnnouncer;
    removeKeyword(keyword: string): void;
    add(event: MatChipInputEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsFormControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsFormControlExample, "chips-form-control-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatChipsHarness
 */
export declare class ChipsHarnessExample {
    isDisabled: WritableSignal<boolean>;
    remove: () => void;
    add: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsHarnessExample, "chips-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Chips with input
 */
export declare class ChipsInputExample {
    readonly addOnBlur = true;
    readonly separatorKeysCodes: readonly [13, 188];
    readonly fruits: WritableSignal<Fruit[]>;
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
export declare class ChipsOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsOverviewExample, "chips-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stacked chips
 */
export declare class ChipsStackedExample {
    readonly bestBoys: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsStackedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsStackedExample, "chips-stacked-example", never, {}, {}, never, never, true, never>;
}

declare interface Fruit {
    name: string;
}

declare interface Vegetable {
    name: string;
}

export { }
