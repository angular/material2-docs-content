import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';

/**
 * @title Chips Autocomplete
 */
var ChipsAutocompleteExample = /** @class */ (function () {
    function ChipsAutocompleteExample() {
        var _this = this;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
    }
    ChipsAutocompleteExample.prototype.add = function (event) {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our fruit
            if ((value || '').trim()) {
                this.fruits.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.fruitCtrl.setValue(null);
        }
    };
    ChipsAutocompleteExample.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsAutocompleteExample.prototype.selected = function (event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    ChipsAutocompleteExample.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allFruits.filter(function (fruit) { return fruit.toLowerCase().indexOf(filterValue) === 0; });
    };
    ChipsAutocompleteExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-autocomplete-example',
                    template: "<mat-form-field class=\"example-chip-list\">\n  <mat-chip-list #chipList aria-label=\"Fruit selection\">\n    <mat-chip\n      *ngFor=\"let fruit of fruits\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(fruit)\">\n      {{fruit}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input\n      placeholder=\"New fruit...\"\n      #fruitInput\n      [formControl]=\"fruitCtrl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\">\n  </mat-chip-list>\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n    <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n      {{fruit}}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n",
                    styles: [".example-chip-list {\n  width: 100%;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    ChipsAutocompleteExample.ctorParameters = function () { return []; };
    ChipsAutocompleteExample.propDecorators = {
        fruitInput: [{ type: ViewChild, args: ['fruitInput', { static: false },] }],
        matAutocomplete: [{ type: ViewChild, args: ['auto', { static: false },] }]
    };
    return ChipsAutocompleteExample;
}());

/**
 * @title Chips Drag and Drop
 */
var ChipsDragDropExample = /** @class */ (function () {
    function ChipsDragDropExample() {
        this.vegetables = [
            { name: 'apple' },
            { name: 'banana' },
            { name: 'strawberry' },
            { name: 'orange' },
            { name: 'kiwi' },
            { name: 'cherry' },
        ];
    }
    ChipsDragDropExample.prototype.drop = function (event) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    };
    ChipsDragDropExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-drag-drop-example',
                    template: "<mat-chip-list\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-list>\n",
                    styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                }] }
    ];
    return ChipsDragDropExample;
}());

/**
 * @title Chips with input
 */
var ChipsInputExample = /** @class */ (function () {
    function ChipsInputExample() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
    }
    ChipsInputExample.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipsInputExample.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsInputExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-input-example',
                    template: "<mat-form-field class=\"example-chip-list\">\n  <mat-chip-list #chipList aria-label=\"Fruit selection\">\n    <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\n             [removable]=\"removable\" (removed)=\"remove(fruit)\">\n      {{fruit.name}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipList\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\">\n  </mat-chip-list>\n</mat-form-field>\n",
                    styles: [".example-chip-list {\n  width: 100%;\n}\n"]
                }] }
    ];
    return ChipsInputExample;
}());

/**
 * @title Basic chips
 */
var ChipsOverviewExample = /** @class */ (function () {
    function ChipsOverviewExample() {
    }
    ChipsOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-overview-example',
                    template: "<mat-chip-list aria-label=\"Fish selection\">\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n  <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\n</mat-chip-list>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return ChipsOverviewExample;
}());

/**
 * @title Stacked chips
 */
var ChipsStackedExample = /** @class */ (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsStackedExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-stacked-example',
                    template: "<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n",
                    styles: ["mat-chip {\n  max-width: 200px;\n}\n"]
                }] }
    ];
    return ChipsStackedExample;
}());

var EXAMPLES = [
    ChipsAutocompleteExample,
    ChipsDragDropExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
];
var ChipsExamplesModule = /** @class */ (function () {
    function ChipsExamplesModule() {
    }
    ChipsExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatChipsModule,
                        MatIconModule,
                        MatFormFieldModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return ChipsExamplesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { ChipsAutocompleteExample, ChipsDragDropExample, ChipsInputExample, ChipsOverviewExample, ChipsStackedExample, ChipsExamplesModule };
//# sourceMappingURL=chips.js.map
