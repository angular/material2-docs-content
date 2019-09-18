(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/drag-drop'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/autocomplete'), require('@angular/material/chips'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/cdk/keycodes'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/chips', ['exports', '@angular/cdk/drag-drop', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/autocomplete', '@angular/material/chips', '@angular/material/form-field', '@angular/material/icon', '@angular/cdk/keycodes', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.chips = {}), global.ng.cdk['drag-drop'], global.ng.common, global.ng.core, global.ng.forms, global.ng.material.autocomplete, global.ng.material.chips, global.ng.material['form-field'], global.ng.material.icon, global.ng.cdk.keycodes, global.rxjs.operators));
}(this, function (exports, dragDrop, common, core, forms, autocomplete, chips, formField, icon, keycodes, operators) { 'use strict';

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
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
            this.fruitCtrl = new forms.FormControl();
            this.fruits = ['Lemon'];
            this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
            this.filteredFruits = this.fruitCtrl.valueChanges.pipe(operators.startWith(null), operators.map(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
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
            { type: core.Component, args: [{
                        selector: 'chips-autocomplete-example',
                        template: "<mat-form-field class=\"example-chip-list\">\n  <mat-chip-list #chipList aria-label=\"Fruit selection\">\n    <mat-chip\n      *ngFor=\"let fruit of fruits\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(fruit)\">\n      {{fruit}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input\n      placeholder=\"New fruit...\"\n      #fruitInput\n      [formControl]=\"fruitCtrl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\">\n  </mat-chip-list>\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n    <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n      {{fruit}}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n",
                        styles: [".example-chip-list {\n  width: 100%;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        ChipsAutocompleteExample.ctorParameters = function () { return []; };
        ChipsAutocompleteExample.propDecorators = {
            fruitInput: [{ type: core.ViewChild, args: ['fruitInput', { static: false },] }],
            matAutocomplete: [{ type: core.ViewChild, args: ['auto', { static: false },] }]
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
            dragDrop.moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
        };
        ChipsDragDropExample.decorators = [
            { type: core.Component, args: [{
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
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            chips.MatChipsModule,
                            icon.MatIconModule,
                            formField.MatFormFieldModule,
                            forms.ReactiveFormsModule,
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

    exports.ChipsAutocompleteExample = ChipsAutocompleteExample;
    exports.ChipsDragDropExample = ChipsDragDropExample;
    exports.ChipsInputExample = ChipsInputExample;
    exports.ChipsOverviewExample = ChipsOverviewExample;
    exports.ChipsStackedExample = ChipsStackedExample;
    exports.ChipsExamplesModule = ChipsExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-chips.umd.js.map
