import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import * as i0 from '@angular/core';
import { model, signal, computed, inject, Component, ChangeDetectionStrategy } from '@angular/core';
import * as i3$1 from '@angular/forms';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import * as i4 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i2 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Chips Autocomplete
 */
class ChipsAutocompleteExample {
    separatorKeysCodes = [ENTER, COMMA];
    currentFruit = model('');
    fruits = signal(['Lemon']);
    allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
    filteredFruits = computed(() => {
        const currentFruit = this.currentFruit().toLowerCase();
        return currentFruit
            ? this.allFruits.filter(fruit => fruit.toLowerCase().includes(currentFruit))
            : this.allFruits.slice();
    });
    announcer = inject(LiveAnnouncer);
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.update(fruits => [...fruits, value]);
        }
        // Clear the input value
        this.currentFruit.set('');
    }
    remove(fruit) {
        this.fruits.update(fruits => {
            const index = fruits.indexOf(fruit);
            if (index < 0) {
                return fruits;
            }
            fruits.splice(index, 1);
            this.announcer.announce(`Removed ${fruit}`);
            return [...fruits];
        });
    }
    selected(event) {
        this.fruits.update(fruits => [...fruits, event.option.viewValue]);
        this.currentFruit.set('');
        event.option.deselect();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsAutocompleteExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: ChipsAutocompleteExample, isStandalone: true, selector: "chips-autocomplete-example", inputs: { currentFruit: { classPropertyName: "currentFruit", publicName: "currentFruit", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentFruit: "currentFruitChange" }, ngImport: i0, template: "<form>\n  <mat-form-field class=\"example-chip-list\">\n    <mat-label>Favorite Fruits</mat-label>\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\n      @for (fruit of fruits(); track $index) {\n        <mat-chip-row (removed)=\"remove(fruit)\">\n          {{fruit}}\n          <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\n            <mat-icon>cancel</mat-icon>\n          </button>\n        </mat-chip-row>\n      }\n    </mat-chip-grid>\n    <input\n      name=\"currentFruit\"\n      placeholder=\"New Fruit...\"\n      #fruitInput\n      [(ngModel)]=\"currentFruit\"\n      [matChipInputFor]=\"chipGrid\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      (matChipInputTokenEnd)=\"add($event)\"\n    />\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event); fruitInput.value = ''\">\n      @for (fruit of filteredFruits(); track fruit) {\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n      }\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled", "readonly", "matChipInputDisabledInteractive"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3$1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsAutocompleteExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-autocomplete-example', imports: [MatFormFieldModule, MatChipsModule, MatIconModule, MatAutocompleteModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<form>\n  <mat-form-field class=\"example-chip-list\">\n    <mat-label>Favorite Fruits</mat-label>\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\n      @for (fruit of fruits(); track $index) {\n        <mat-chip-row (removed)=\"remove(fruit)\">\n          {{fruit}}\n          <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\n            <mat-icon>cancel</mat-icon>\n          </button>\n        </mat-chip-row>\n      }\n    </mat-chip-grid>\n    <input\n      name=\"currentFruit\"\n      placeholder=\"New Fruit...\"\n      #fruitInput\n      [(ngModel)]=\"currentFruit\"\n      [matChipInputFor]=\"chipGrid\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      (matChipInputTokenEnd)=\"add($event)\"\n    />\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event); fruitInput.value = ''\">\n      @for (fruit of filteredFruits(); track fruit) {\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n      }\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }] });

/**
 * @title Chips Drag and Drop
 */
class ChipsDragDropExample {
    vegetables = signal([
        { name: 'apple' },
        { name: 'banana' },
        { name: 'strawberry' },
        { name: 'orange' },
        { name: 'kiwi' },
        { name: 'cherry' },
    ]);
    drop(event) {
        this.vegetables.update(vegetables => {
            moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
            return [...vegetables];
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsDragDropExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: ChipsDragDropExample, isStandalone: true, selector: "chips-drag-drop-example", ngImport: i0, template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList\n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\"\n>\n  @for (vegetable of vegetables(); track vegetable.name) {\n    <mat-chip class=\"example-box\" cdkDrag>{{vegetable.name}}</mat-chip>\n  }\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["role", "id", "aria-label", "aria-description", "value", "color", "removable", "highlighted", "disableRipple", "disabled"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "component", type: i2.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role", "tabIndex"] }, { kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep", "cdkDropListElementContainer"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer", "cdkDragScale"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsDragDropExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-drag-drop-example', imports: [MatChipsModule, CdkDropList, CdkDrag], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList\n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\"\n>\n  @for (vegetable of vegetables(); track vegetable.name) {\n    <mat-chip class=\"example-box\" cdkDrag>{{vegetable.name}}</mat-chip>\n  }\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });

/**
 * @title Chips with input
 */
class ChipsInputExample {
    addOnBlur = true;
    separatorKeysCodes = [ENTER, COMMA];
    fruits = signal([{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }]);
    announcer = inject(LiveAnnouncer);
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.update(fruits => [...fruits, { name: value }]);
        }
        // Clear the input value
        event.chipInput.clear();
    }
    remove(fruit) {
        this.fruits.update(fruits => {
            const index = fruits.indexOf(fruit);
            if (index < 0) {
                return fruits;
            }
            fruits.splice(index, 1);
            this.announcer.announce(`Removed ${fruit.name}`);
            return [...fruits];
        });
    }
    edit(fruit, event) {
        const value = event.value.trim();
        // Remove fruit if it no longer has a name
        if (!value) {
            this.remove(fruit);
            return;
        }
        // Edit existing fruit
        this.fruits.update(fruits => {
            const index = fruits.indexOf(fruit);
            if (index >= 0) {
                fruits[index].name = value;
                return [...fruits];
            }
            return fruits;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: ChipsInputExample, isStandalone: true, selector: "chips-input-example", ngImport: i0, template: "<mat-form-field class=\"example-chip-list\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    @for (fruit of fruits(); track fruit) {\n      <mat-chip-row\n        (removed)=\"remove(fruit)\"\n        [editable]=\"true\"\n        (edited)=\"edit(fruit, $event)\"\n        [aria-description]=\"'press enter to edit ' + fruit.name\"\n      >\n        {{fruit.name}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n    <input\n      placeholder=\"New fruit...\"\n      [matChipInputFor]=\"chipGrid\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\"\n    />\n  </mat-chip-grid>\n</mat-form-field>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled", "readonly", "matChipInputDisabledInteractive"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-input-example', imports: [MatFormFieldModule, MatChipsModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field class=\"example-chip-list\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    @for (fruit of fruits(); track fruit) {\n      <mat-chip-row\n        (removed)=\"remove(fruit)\"\n        [editable]=\"true\"\n        (edited)=\"edit(fruit, $event)\"\n        [aria-description]=\"'press enter to edit ' + fruit.name\"\n      >\n        {{fruit.name}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n    <input\n      placeholder=\"New fruit...\"\n      [matChipInputFor]=\"chipGrid\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\"\n    />\n  </mat-chip-grid>\n</mat-form-field>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }] });

/**
 * @title Basic chips
 */
class ChipsOverviewExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: ChipsOverviewExample, isStandalone: true, selector: "chips-overview-example", ngImport: i0, template: "<mat-chip-set aria-label=\"Fish selection\">\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip>Three fish</mat-chip>\n  <mat-chip disabled>Four fish</mat-chip>\n</mat-chip-set>", dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["role", "id", "aria-label", "aria-description", "value", "color", "removable", "highlighted", "disableRipple", "disabled"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "component", type: i2.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role", "tabIndex"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-overview-example', imports: [MatChipsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-chip-set aria-label=\"Fish selection\">\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip>Three fish</mat-chip>\n  <mat-chip disabled>Four fish</mat-chip>\n</mat-chip-set>" }]
        }] });

/**
 * @title Stacked chips
 */
class ChipsStackedExample {
    bestBoys = ['Samoyed', 'Akita Inu', 'Alaskan Malamute', 'Siberian Husky'];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsStackedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: ChipsStackedExample, isStandalone: true, selector: "chips-stacked-example", ngImport: i0, template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Cutest dog breeds\">\n  @for (dog of bestBoys; track dog) {\n    <mat-chip-option selected>{{dog}}</mat-chip-option>\n  }\n</mat-chip-listbox>\n", styles: [".mat-mdc-chip-set {\n  max-width: 200px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChipListbox, selector: "mat-chip-listbox", inputs: ["multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i2.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["selectable", "selected"], outputs: ["selectionChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsStackedExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-stacked-example', imports: [MatChipsModule], template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Cutest dog breeds\">\n  @for (dog of bestBoys; track dog) {\n    <mat-chip-option selected>{{dog}}</mat-chip-option>\n  }\n</mat-chip-listbox>\n", styles: [".mat-mdc-chip-set {\n  max-width: 200px;\n}\n"] }]
        }] });

/// <reference types="jasmine" />
/**
 * @title Testing with MatChipsHarness
 */
class ChipsHarnessExample {
    isDisabled = signal(false);
    remove = jasmine.createSpy('remove spy');
    add = jasmine.createSpy('add spy');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: ChipsHarnessExample, isStandalone: true, selector: "chips-harness-example", ngImport: i0, template: "<mat-chip-listbox\n    [disabled]=\"isDisabled()\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>\n", dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "directive", type: i2.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i2.MatChipListbox, selector: "mat-chip-listbox", inputs: ["multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i2.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["selectable", "selected"], outputs: ["selectionChange"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-harness-example', imports: [MatChipsModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-chip-listbox\n    [disabled]=\"isDisabled()\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>\n" }]
        }] });

/**
 * @title Chips with form control
 */
class ChipsFormControlExample {
    keywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);
    formControl = new FormControl(['angular']);
    announcer = inject(LiveAnnouncer);
    removeKeyword(keyword) {
        this.keywords.update(keywords => {
            const index = keywords.indexOf(keyword);
            if (index < 0) {
                return keywords;
            }
            keywords.splice(index, 1);
            this.announcer.announce(`removed ${keyword}`);
            return [...keywords];
        });
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our keyword
        if (value) {
            this.keywords.update(keywords => [...keywords, value]);
        }
        // Clear the input value
        event.chipInput.clear();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsFormControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: ChipsFormControlExample, isStandalone: true, selector: "chips-form-control-example", ngImport: i0, template: "<div class=\"example-button-container\">\n  <button matButton=\"elevated\" (click)=\"formControl.disable()\">Disable form control</button>\n  <button matButton=\"elevated\" (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <em>Enter video keywords</em>\n</p>\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\">\n    @for (keyword of keywords(); track keyword) {\n      <mat-chip-row (removed)=\"removeKeyword(keyword)\">\n        {{keyword}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + keyword\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n  </mat-chip-grid>\n  <input\n    placeholder=\"New keyword...\"\n    [matChipInputFor]=\"chipGrid\"\n    (matChipInputTokenEnd)=\"add($event)\"\n  />\n</mat-form-field>\n\n<p><strong>The following keywords are entered:</strong> {{formControl.value}}</p>\n", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled", "readonly", "matChipInputDisabledInteractive"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsFormControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-form-control-example', imports: [
                        MatButtonModule,
                        MatFormFieldModule,
                        MatChipsModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-button-container\">\n  <button matButton=\"elevated\" (click)=\"formControl.disable()\">Disable form control</button>\n  <button matButton=\"elevated\" (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <em>Enter video keywords</em>\n</p>\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\">\n    @for (keyword of keywords(); track keyword) {\n      <mat-chip-row (removed)=\"removeKeyword(keyword)\">\n        {{keyword}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + keyword\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n  </mat-chip-grid>\n  <input\n    placeholder=\"New keyword...\"\n    [matChipInputFor]=\"chipGrid\"\n    (matChipInputTokenEnd)=\"add($event)\"\n  />\n</mat-form-field>\n\n<p><strong>The following keywords are entered:</strong> {{formControl.value}}</p>\n", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"] }]
        }] });

/**
 * @title Chips in reactive forms
 */
class ChipsReactiveFormExample {
    reactiveKeywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);
    formControl = new FormControl(['angular']);
    announcer = inject(LiveAnnouncer);
    removeReactiveKeyword(keyword) {
        this.reactiveKeywords.update(keywords => {
            const index = keywords.indexOf(keyword);
            if (index < 0) {
                return keywords;
            }
            keywords.splice(index, 1);
            this.announcer.announce(`removed ${keyword} from reactive form`);
            return [...keywords];
        });
    }
    addReactiveKeyword(event) {
        const value = (event.value || '').trim();
        // Add our keyword
        if (value) {
            this.reactiveKeywords.update(keywords => [...keywords, value]);
            this.announcer.announce(`added ${value} to reactive form`);
        }
        // Clear the input value
        event.chipInput.clear();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsReactiveFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: ChipsReactiveFormExample, isStandalone: true, selector: "chips-reactive-form-example", ngImport: i0, template: "<section>\n  <h4>Chips inside of a Reactive form</h4>\n  <mat-form-field class=\"example-form-field\">\n    <mat-label>Video keywords</mat-label>\n    <mat-chip-grid #reactiveChipGrid aria-label=\"Enter reactive form keywords\" [formControl]=\"formControl\">\n    @for (keyword of reactiveKeywords(); track keyword) {\n      <mat-chip-row (removed)=\"removeReactiveKeyword(keyword)\">\n        {{keyword}}\n      <button matChipRemove [attr.aria-label]=\"'remove reactive form' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n      </mat-chip-row>\n    }\n    </mat-chip-grid>\n    <input\n      placeholder=\"New keyword...\"\n      [matChipInputFor]=\"reactiveChipGrid\"\n      (matChipInputTokenEnd)=\"addReactiveKeyword($event)\"\n    />\n  </mat-form-field>\n</section>\n", styles: [".example-form-field {\n    width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled", "readonly", "matChipInputDisabledInteractive"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsReactiveFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-reactive-form-example', imports: [
                        MatButtonModule,
                        MatFormFieldModule,
                        MatChipsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section>\n  <h4>Chips inside of a Reactive form</h4>\n  <mat-form-field class=\"example-form-field\">\n    <mat-label>Video keywords</mat-label>\n    <mat-chip-grid #reactiveChipGrid aria-label=\"Enter reactive form keywords\" [formControl]=\"formControl\">\n    @for (keyword of reactiveKeywords(); track keyword) {\n      <mat-chip-row (removed)=\"removeReactiveKeyword(keyword)\">\n        {{keyword}}\n      <button matChipRemove [attr.aria-label]=\"'remove reactive form' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n      </mat-chip-row>\n    }\n    </mat-chip-grid>\n    <input\n      placeholder=\"New keyword...\"\n      [matChipInputFor]=\"reactiveChipGrid\"\n      (matChipInputTokenEnd)=\"addReactiveKeyword($event)\"\n    />\n  </mat-form-field>\n</section>\n", styles: [".example-form-field {\n    width: 100%;\n}\n"] }]
        }] });

/**
 * @title Chips in template-driven forms
 */
class ChipsTemplateFormExample {
    templateKeywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);
    announcer = inject(LiveAnnouncer);
    removeTemplateKeyword(keyword) {
        this.templateKeywords.update(keywords => {
            const index = keywords.indexOf(keyword);
            if (index < 0) {
                return keywords;
            }
            keywords.splice(index, 1);
            this.announcer.announce(`removed ${keyword} from template form`);
            return [...keywords];
        });
    }
    addTemplateKeyword(event) {
        const value = (event.value || '').trim();
        // Add our keyword
        if (value) {
            this.templateKeywords.update(keywords => [...keywords, value]);
            this.announcer.announce(`added ${value} to template form`);
        }
        // Clear the input value
        event.chipInput.clear();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsTemplateFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: ChipsTemplateFormExample, isStandalone: true, selector: "chips-template-form-example", ngImport: i0, template: "<section>\n  <h4>Chips inside of a Template-driven form</h4>\n  <mat-form-field class=\"example-form-field\">\n    <mat-label>Video keywords</mat-label>\n    <mat-chip-grid #templateChipGrid aria-label=\"Enter template form keywords\" [(ngModel)]=\"templateKeywords\">\n    @for (keyword of templateKeywords(); track keyword) {\n      <mat-chip-row (removed)=\"removeTemplateKeyword(keyword)\">\n        {{keyword}}\n      <button matChipRemove [attr.aria-label]=\"'remove template form' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n      </mat-chip-row>\n    }\n    </mat-chip-grid>\n    <input\n      placeholder=\"New keyword...\"\n      [matChipInputFor]=\"templateChipGrid\"\n      (matChipInputTokenEnd)=\"addTemplateKeyword($event)\"\n    />\n  </mat-form-field>\n</section>\n", styles: [".example-form-field {\n    width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled", "readonly", "matChipInputDisabledInteractive"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsTemplateFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-template-form-example', imports: [MatButtonModule, MatFormFieldModule, MatChipsModule, FormsModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section>\n  <h4>Chips inside of a Template-driven form</h4>\n  <mat-form-field class=\"example-form-field\">\n    <mat-label>Video keywords</mat-label>\n    <mat-chip-grid #templateChipGrid aria-label=\"Enter template form keywords\" [(ngModel)]=\"templateKeywords\">\n    @for (keyword of templateKeywords(); track keyword) {\n      <mat-chip-row (removed)=\"removeTemplateKeyword(keyword)\">\n        {{keyword}}\n      <button matChipRemove [attr.aria-label]=\"'remove template form' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n      </mat-chip-row>\n    }\n    </mat-chip-grid>\n    <input\n      placeholder=\"New keyword...\"\n      [matChipInputFor]=\"templateChipGrid\"\n      (matChipInputTokenEnd)=\"addTemplateKeyword($event)\"\n    />\n  </mat-form-field>\n</section>\n", styles: [".example-form-field {\n    width: 100%;\n}\n"] }]
        }] });

/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
class ChipsAvatarExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsAvatarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: ChipsAvatarExample, isStandalone: true, selector: "chips-avatar-example", ngImport: i0, template: "<mat-chip-set aria-label=\"Dog selection\">\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.dev/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog one\n  </mat-chip>\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.dev/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog two\n  </mat-chip>\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.dev/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog three\n  </mat-chip>\n</mat-chip-set>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["role", "id", "aria-label", "aria-description", "value", "color", "removable", "highlighted", "disableRipple", "disabled"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "directive", type: i2.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i2.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role", "tabIndex"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipsAvatarExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-avatar-example', imports: [MatChipsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-chip-set aria-label=\"Dog selection\">\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.dev/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog one\n  </mat-chip>\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.dev/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog two\n  </mat-chip>\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.dev/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog three\n  </mat-chip>\n</mat-chip-set>\n" }]
        }] });

export { ChipsAutocompleteExample, ChipsAvatarExample, ChipsDragDropExample, ChipsFormControlExample, ChipsHarnessExample, ChipsInputExample, ChipsOverviewExample, ChipsReactiveFormExample, ChipsStackedExample, ChipsTemplateFormExample };
//# sourceMappingURL=chips.mjs.map
