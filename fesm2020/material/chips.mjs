import * as i2$1 from '@angular/cdk/drag-drop';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewChild, NgModule } from '@angular/core';
import * as i7 from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i1$1 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i6 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i5 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';
import * as i3 from '@angular/material/core';
import * as i2$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Chips Autocomplete
 */
class ChipsAutocompleteExample {
    constructor() {
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl('');
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map((fruit) => (fruit ? this._filter(fruit) : this.allFruits.slice())));
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
        this.fruitCtrl.setValue(null);
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    selected(event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
    }
}
ChipsAutocompleteExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsAutocompleteExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsAutocompleteExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ChipsAutocompleteExample, selector: "chips-autocomplete-example", viewQueries: [{ propertyName: "fruitInput", first: true, predicate: ["fruitInput"], descendants: true }], ngImport: i0, template: "<form>\n  <mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n    <mat-label>Favorite Fruits</mat-label>\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\n      <mat-chip-row *ngFor=\"let fruit of fruits\" (removed)=\"remove(fruit)\">\n        {{fruit}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    </mat-chip-grid>\n    <input placeholder=\"New Fruit...\" #fruitInput [formControl]=\"fruitCtrl\"\n      [matChipInputFor]=\"chipGrid\" [matAutocomplete]=\"auto\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      (matChipInputTokenEnd)=\"add($event)\"/>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n        {{fruit}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "component", type: i1$1.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i1$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i1$1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i1$1.MatChipRow, selector: "mat-chip-row, mat-basic-chip-row", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i6.MatLabel, selector: "mat-label" }, { kind: "directive", type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i7.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsAutocompleteExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-autocomplete-example', template: "<form>\n  <mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n    <mat-label>Favorite Fruits</mat-label>\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\n      <mat-chip-row *ngFor=\"let fruit of fruits\" (removed)=\"remove(fruit)\">\n        {{fruit}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    </mat-chip-grid>\n    <input placeholder=\"New Fruit...\" #fruitInput [formControl]=\"fruitCtrl\"\n      [matChipInputFor]=\"chipGrid\" [matAutocomplete]=\"auto\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      (matChipInputTokenEnd)=\"add($event)\"/>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n        {{fruit}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { fruitInput: [{
                type: ViewChild,
                args: ['fruitInput']
            }] } });

/**
 * @title Chips Drag and Drop
 */
class ChipsDragDropExample {
    constructor() {
        this.vegetables = [
            { name: 'apple' },
            { name: 'banana' },
            { name: 'strawberry' },
            { name: 'orange' },
            { name: 'kiwi' },
            { name: 'cherry' },
        ];
    }
    drop(event) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    }
}
ChipsDragDropExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsDragDropExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsDragDropExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ChipsDragDropExample, selector: "chips-drag-drop-example", ngImport: i0, template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i2$1.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "component", type: i1$1.MatChip, selector: "mat-basic-chip, mat-chip", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "component", type: i1$1.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsDragDropExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-drag-drop-example', template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });

/**
 * @title Chips with input
 */
class ChipsInputExample {
    constructor() {
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push({ name: value });
        }
        // Clear the input value
        event.chipInput.clear();
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    edit(fruit, event) {
        const value = event.value.trim();
        // Remove fruit if it no longer has a name
        if (!value) {
            this.remove(fruit);
            return;
        }
        // Edit existing fruit
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits[index].name = value;
        }
    }
}
ChipsInputExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsInputExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ChipsInputExample, selector: "chips-input-example", ngImport: i0, template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    <mat-chip-row *ngFor=\"let fruit of fruits\"\n                  (removed)=\"remove(fruit)\"\n                  [editable]=\"true\"\n                  (edited)=\"edit(fruit, $event)\"\n                  [aria-description]=\"'press enter to edit ' + fruit.name\">\n      {{fruit.name}}\n      <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipGrid\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\"/>\n  </mat-chip-grid>\n</mat-form-field>", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i1$1.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i1$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i1$1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i1$1.MatChipRow, selector: "mat-chip-row, mat-basic-chip-row", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i6.MatLabel, selector: "mat-label" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-input-example', template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    <mat-chip-row *ngFor=\"let fruit of fruits\"\n                  (removed)=\"remove(fruit)\"\n                  [editable]=\"true\"\n                  (edited)=\"edit(fruit, $event)\"\n                  [aria-description]=\"'press enter to edit ' + fruit.name\">\n      {{fruit.name}}\n      <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipGrid\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\"/>\n  </mat-chip-grid>\n</mat-form-field>", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }] });

/**
 * @title Basic chips
 */
class ChipsOverviewExample {
}
ChipsOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ChipsOverviewExample, selector: "chips-overview-example", ngImport: i0, template: "<mat-chip-listbox aria-label=\"Fish selection\">\n  <mat-chip-option>One fish</mat-chip-option>\n  <mat-chip-option>Two fish</mat-chip-option>\n  <mat-chip-option color=\"accent\" selected>Accent fish</mat-chip-option>\n  <mat-chip-option color=\"warn\">Warn fish</mat-chip-option>\n</mat-chip-listbox>", dependencies: [{ kind: "component", type: i1$1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "value"], outputs: ["change"] }, { kind: "component", type: i1$1.MatChipOption, selector: "mat-basic-chip-option, mat-chip-option", inputs: ["color", "disabled", "disableRipple", "tabIndex", "selectable", "selected"], outputs: ["selectionChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-overview-example', template: "<mat-chip-listbox aria-label=\"Fish selection\">\n  <mat-chip-option>One fish</mat-chip-option>\n  <mat-chip-option>Two fish</mat-chip-option>\n  <mat-chip-option color=\"accent\" selected>Accent fish</mat-chip-option>\n  <mat-chip-option color=\"warn\">Warn fish</mat-chip-option>\n</mat-chip-listbox>" }]
        }] });

/**
 * @title Stacked chips
 */
class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' },
        ];
    }
}
ChipsStackedExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsStackedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsStackedExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ChipsStackedExample, selector: "chips-stacked-example", ngImport: i0, template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\n  <mat-chip-option *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip-option>\n</mat-chip-listbox>", styles: ["mat-chip {\n  max-width: 200px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i1$1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "value"], outputs: ["change"] }, { kind: "component", type: i1$1.MatChipOption, selector: "mat-basic-chip-option, mat-chip-option", inputs: ["color", "disabled", "disableRipple", "tabIndex", "selectable", "selected"], outputs: ["selectionChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsStackedExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-stacked-example', template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\n  <mat-chip-option *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip-option>\n</mat-chip-listbox>", styles: ["mat-chip {\n  max-width: 200px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatChipsHarness
 */
class ChipsHarnessExample {
    constructor() {
        this.isDisabled = false;
        this.remove = jasmine.createSpy('remove spy');
        this.add = jasmine.createSpy('add spy');
    }
}
ChipsHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ChipsHarnessExample, selector: "chips-harness-example", ngImport: i0, template: "<mat-chip-listbox\n    [disabled]=\"isDisabled\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>", dependencies: [{ kind: "directive", type: i1$1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1$1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "value"], outputs: ["change"] }, { kind: "component", type: i1$1.MatChipOption, selector: "mat-basic-chip-option, mat-chip-option", inputs: ["color", "disabled", "disableRipple", "tabIndex", "selectable", "selected"], outputs: ["selectionChange"] }, { kind: "directive", type: i1$1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-harness-example', template: "<mat-chip-listbox\n    [disabled]=\"isDisabled\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>" }]
        }] });

/**
 * @title Chips with form control
 */
class ChipsFormControlExample {
    constructor() {
        this.keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
        this.formControl = new FormControl(['angular']);
    }
    removeKeyword(keyword) {
        const index = this.keywords.indexOf(keyword);
        if (index >= 0) {
            this.keywords.splice(index, 1);
        }
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our keyword
        if (value) {
            this.keywords.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
    }
}
ChipsFormControlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsFormControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsFormControlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ChipsFormControlExample, selector: "chips-form-control-example", ngImport: i0, template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <i>Enter video keywords</i>\n</p>\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\n    <mat-chip-row *ngFor=\"let keyword of keywords\" (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n      <button matChipRemove aria-label=\"'remove ' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n  </mat-chip-grid>\n  <input placeholder=\"New keyword...\"\n          [matChipInputFor]=\"chipGrid\"\n          (matChipInputTokenEnd)=\"add($event)\"/>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are entered:</b> {{formControl.value}}\n</p>", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1$1.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i1$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i1$1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i1$1.MatChipRow, selector: "mat-chip-row, mat-basic-chip-row", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i6.MatLabel, selector: "mat-label" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsFormControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-form-control-example', template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <i>Enter video keywords</i>\n</p>\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\n    <mat-chip-row *ngFor=\"let keyword of keywords\" (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n      <button matChipRemove aria-label=\"'remove ' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n  </mat-chip-grid>\n  <input placeholder=\"New keyword...\"\n          [matChipInputFor]=\"chipGrid\"\n          (matChipInputTokenEnd)=\"add($event)\"/>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are entered:</b> {{formControl.value}}\n</p>", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"] }]
        }] });

/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
class ChipsAvatarExample {
}
ChipsAvatarExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsAvatarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsAvatarExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ChipsAvatarExample, selector: "chips-avatar-example", ngImport: i0, template: "<mat-chip-listbox aria-label=\"Dog selection\">\n  <mat-chip>\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog three\n  </mat-chip>\n</mat-chip-listbox>", styles: [""], dependencies: [{ kind: "component", type: i1$1.MatChip, selector: "mat-basic-chip, mat-chip", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "directive", type: i1$1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1$1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "value"], outputs: ["change"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsAvatarExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-avatar-example', template: "<mat-chip-listbox aria-label=\"Dog selection\">\n  <mat-chip>\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog three\n  </mat-chip>\n</mat-chip-listbox>" }]
        }] });

const EXAMPLES = [
    ChipsAutocompleteExample,
    ChipsDragDropExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    ChipsHarnessExample,
    ChipsFormControlExample,
    ChipsAvatarExample,
];
class ChipsExamplesModule {
}
ChipsExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChipsExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: ChipsExamplesModule, declarations: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
        ChipsFormControlExample,
        ChipsAvatarExample], imports: [CommonModule,
        DragDropModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule], exports: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
        ChipsFormControlExample,
        ChipsAvatarExample] });
ChipsExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsExamplesModule, imports: [CommonModule,
        DragDropModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChipsExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatButtonModule,
                        MatChipsModule,
                        MatIconModule,
                        MatFormFieldModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ChipsAutocompleteExample, ChipsAvatarExample, ChipsDragDropExample, ChipsExamplesModule, ChipsFormControlExample, ChipsHarnessExample, ChipsInputExample, ChipsOverviewExample, ChipsStackedExample };
//# sourceMappingURL=chips.mjs.map
