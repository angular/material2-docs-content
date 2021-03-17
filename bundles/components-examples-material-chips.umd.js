(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/drag-drop'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/autocomplete'), require('@angular/material/chips'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/cdk/keycodes'), require('rxjs/operators'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/chips', ['exports', '@angular/cdk/drag-drop', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/autocomplete', '@angular/material/chips', '@angular/material/form-field', '@angular/material/icon', '@angular/cdk/keycodes', 'rxjs/operators', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.chips = {}), global.ng.cdk.dragDrop, global.ng.common, global.ng.core, global.ng.forms, global.ng.material.autocomplete, global.ng.material.chips, global.ng.material.formField, global.ng.material.icon, global.ng.cdk.keycodes, global.rxjs.operators, global.ng.material.core));
}(this, (function (exports, i2, i3, i0, i4, i5, i1, i1$1, i6, keycodes, operators, i7) { 'use strict';

    var _c0 = ["fruitInput"];
    var _c1 = ["auto"];
    function ChipsAutocompleteExample_mat_chip_5_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon", 11);
            i0.ɵɵtext(1, "cancel");
            i0.ɵɵelementEnd();
        }
    }
    function ChipsAutocompleteExample_mat_chip_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-chip", 9);
            i0.ɵɵlistener("removed", function ChipsAutocompleteExample_mat_chip_5_Template_mat_chip_removed_0_listener() { var restoredCtx = i0.ɵɵrestoreView(_r8_1); var fruit_r5 = restoredCtx.$implicit; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.remove(fruit_r5); });
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, ChipsAutocompleteExample_mat_chip_5_mat_icon_2_Template, 2, 0, "mat-icon", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var fruit_r5 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", fruit_r5, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.removable);
        }
    }
    function ChipsAutocompleteExample_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 12);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var fruit_r9 = ctx.$implicit;
            i0.ɵɵproperty("value", fruit_r9);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", fruit_r9, " ");
        }
    }
    /**
     * @title Chips Autocomplete
     */
    var ChipsAutocompleteExample = /** @class */ (function () {
        function ChipsAutocompleteExample() {
            var _this = this;
            this.visible = true;
            this.selectable = true;
            this.removable = true;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
            this.fruitCtrl = new i4.FormControl();
            this.fruits = ['Lemon'];
            this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
            this.filteredFruits = this.fruitCtrl.valueChanges.pipe(operators.startWith(null), operators.map(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
        }
        ChipsAutocompleteExample.prototype.add = function (event) {
            var value = (event.value || '').trim();
            // Add our fruit
            if (value) {
                this.fruits.push(value);
            }
            // Clear the input value
            event.chipInput.clear();
            this.fruitCtrl.setValue(null);
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
        return ChipsAutocompleteExample;
    }());
    ChipsAutocompleteExample.ɵfac = function ChipsAutocompleteExample_Factory(t) { return new (t || ChipsAutocompleteExample)(); };
    ChipsAutocompleteExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsAutocompleteExample, selectors: [["chips-autocomplete-example"]], viewQuery: function ChipsAutocompleteExample_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 5);
                i0.ɵɵviewQuery(_c1, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fruitInput = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.matAutocomplete = _t.first);
            }
        }, decls: 12, vars: 8, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["fruitInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function ChipsAutocompleteExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Favorite Fruits");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-chip-list", 1, 2);
                i0.ɵɵtemplate(5, ChipsAutocompleteExample_mat_chip_5_Template, 3, 4, "mat-chip", 3);
                i0.ɵɵelementStart(6, "input", 4, 5);
                i0.ɵɵlistener("matChipInputTokenEnd", function ChipsAutocompleteExample_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-autocomplete", 6, 7);
                i0.ɵɵlistener("optionSelected", function ChipsAutocompleteExample_Template_mat_autocomplete_optionSelected_8_listener($event) { return ctx.selected($event); });
                i0.ɵɵtemplate(10, ChipsAutocompleteExample_mat_option_10_Template, 2, 2, "mat-option", 8);
                i0.ɵɵpipe(11, "async");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(4);
                var _r3 = i0.ɵɵreference(9);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngForOf", ctx.fruits);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formControl", ctx.fruitCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 6, ctx.filteredFruits));
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i1.MatChipList, i3.NgForOf, i4.DefaultValueAccessor, i5.MatAutocompleteTrigger, i1.MatChipInput, i4.NgControlStatus, i4.FormControlDirective, i5.MatAutocomplete, i1.MatChip, i3.NgIf, i6.MatIcon, i1.MatChipRemove, i7.MatOption], pipes: [i3.AsyncPipe], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsAutocompleteExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-autocomplete-example',
                        templateUrl: 'chips-autocomplete-example.html',
                        styleUrls: ['chips-autocomplete-example.css'],
                    }]
            }], function () { return []; }, { fruitInput: [{
                    type: i0.ViewChild,
                    args: ['fruitInput']
                }], matAutocomplete: [{
                    type: i0.ViewChild,
                    args: ['auto']
                }] });
    })();

    function ChipsDragDropExample_mat_chip_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-chip", 2);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var vegetable_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", vegetable_r1.name, " ");
        }
    }
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
            i2.moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
        };
        return ChipsDragDropExample;
    }());
    ChipsDragDropExample.ɵfac = function ChipsDragDropExample_Factory(t) { return new (t || ChipsDragDropExample)(); };
    ChipsDragDropExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsDragDropExample, selectors: [["chips-drag-drop-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function ChipsDragDropExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-chip-list", 0);
                i0.ɵɵlistener("cdkDropListDropped", function ChipsDragDropExample_Template_mat_chip_list_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(1, ChipsDragDropExample_mat_chip_1_Template, 2, 1, "mat-chip", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.vegetables);
            }
        }, directives: [i1.MatChipList, i2.CdkDropList, i3.NgForOf, i1.MatChip, i2.CdkDrag], styles: [".example-box.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsDragDropExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-drag-drop-example',
                        templateUrl: 'chips-drag-drop-example.html',
                        styleUrls: ['chips-drag-drop-example.css']
                    }]
            }], null, null);
    })();

    function ChipsInputExample_mat_chip_5_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon", 7);
            i0.ɵɵtext(1, "cancel");
            i0.ɵɵelementEnd();
        }
    }
    function ChipsInputExample_mat_chip_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-chip", 5);
            i0.ɵɵlistener("removed", function ChipsInputExample_mat_chip_5_Template_mat_chip_removed_0_listener() { var restoredCtx = i0.ɵɵrestoreView(_r5_1); var fruit_r2 = restoredCtx.$implicit; var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.remove(fruit_r2); });
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, ChipsInputExample_mat_chip_5_mat_icon_2_Template, 2, 0, "mat-icon", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var fruit_r2 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", fruit_r2.name, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.removable);
        }
    }
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
            var value = (event.value || '').trim();
            // Add our fruit
            if (value) {
                this.fruits.push({ name: value });
            }
            // Clear the input value
            event.chipInput.clear();
        };
        ChipsInputExample.prototype.remove = function (fruit) {
            var index = this.fruits.indexOf(fruit);
            if (index >= 0) {
                this.fruits.splice(index, 1);
            }
        };
        return ChipsInputExample;
    }());
    ChipsInputExample.ɵfac = function ChipsInputExample_Factory(t) { return new (t || ChipsInputExample)(); };
    ChipsInputExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsInputExample, selectors: [["chips-input-example"]], decls: 7, vars: 4, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function ChipsInputExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Favorite Fruits");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-chip-list", 1, 2);
                i0.ɵɵtemplate(5, ChipsInputExample_mat_chip_5_Template, 3, 4, "mat-chip", 3);
                i0.ɵɵelementStart(6, "input", 4);
                i0.ɵɵlistener("matChipInputTokenEnd", function ChipsInputExample_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(4);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngForOf", ctx.fruits);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i1.MatChipList, i3.NgForOf, i1.MatChipInput, i1.MatChip, i3.NgIf, i6.MatIcon, i1.MatChipRemove], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsInputExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-input-example',
                        templateUrl: 'chips-input-example.html',
                        styleUrls: ['chips-input-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Basic chips
     */
    var ChipsOverviewExample = /** @class */ (function () {
        function ChipsOverviewExample() {
        }
        return ChipsOverviewExample;
    }());
    ChipsOverviewExample.ɵfac = function ChipsOverviewExample_Factory(t) { return new (t || ChipsOverviewExample)(); };
    ChipsOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsOverviewExample, selectors: [["chips-overview-example"]], decls: 9, vars: 0, consts: [["aria-label", "Fish selection"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""]], template: function ChipsOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-chip-list", 0);
                i0.ɵɵelementStart(1, "mat-chip");
                i0.ɵɵtext(2, "One fish");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-chip");
                i0.ɵɵtext(4, "Two fish");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-chip", 1);
                i0.ɵɵtext(6, "Primary fish");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-chip", 2);
                i0.ɵɵtext(8, "Accent fish");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatChipList, i1.MatChip], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-overview-example',
                        templateUrl: 'chips-overview-example.html',
                    }]
            }], null, null);
    })();

    function ChipsStackedExample_mat_chip_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-chip", 2);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var chip_r1 = ctx.$implicit;
            i0.ɵɵproperty("color", chip_r1.color);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", chip_r1.name, " ");
        }
    }
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
        return ChipsStackedExample;
    }());
    ChipsStackedExample.ɵfac = function ChipsStackedExample_Factory(t) { return new (t || ChipsStackedExample)(); };
    ChipsStackedExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsStackedExample, selectors: [["chips-stacked-example"]], decls: 2, vars: 1, consts: [["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", 3, "color", 4, "ngFor", "ngForOf"], ["selected", "", 3, "color"]], template: function ChipsStackedExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-chip-list", 0);
                i0.ɵɵtemplate(1, ChipsStackedExample_mat_chip_1_Template, 2, 2, "mat-chip", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.availableColors);
            }
        }, directives: [i1.MatChipList, i3.NgForOf, i1.MatChip], styles: ["mat-chip[_ngcontent-%COMP%] {\n  max-width: 200px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsStackedExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-stacked-example',
                        templateUrl: 'chips-stacked-example.html',
                        styleUrls: ['chips-stacked-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatChipsHarness
     */
    var ChipsHarnessExample = /** @class */ (function () {
        function ChipsHarnessExample() {
            this.isDisabled = false;
            this.remove = jasmine.createSpy('remove spy');
            this.add = jasmine.createSpy('add spy');
        }
        return ChipsHarnessExample;
    }());
    ChipsHarnessExample.ɵfac = function ChipsHarnessExample_Factory(t) { return new (t || ChipsHarnessExample)(); };
    ChipsHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsHarnessExample, selectors: [["chips-harness-example"]], decls: 11, vars: 2, consts: [[3, "disabled", "aria-orientation"], [3, "removed"], ["matChipRemove", ""]], template: function ChipsHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-chip-list", 0);
                i0.ɵɵelementStart(1, "mat-chip", 1);
                i0.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_1_listener() { return ctx.remove(); });
                i0.ɵɵtext(2, "Chip 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-chip", 1);
                i0.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_3_listener() { return ctx.remove(); });
                i0.ɵɵtext(4, "Chip 2 ");
                i0.ɵɵelementStart(5, "span", 2);
                i0.ɵɵtext(6, "remove_icon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-chip", 1);
                i0.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_7_listener() { return ctx.remove(); });
                i0.ɵɵelementStart(8, "mat-chip-avatar");
                i0.ɵɵtext(9, "C");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(10, "Chip 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("disabled", ctx.isDisabled)("aria-orientation", "horizontal");
            }
        }, directives: [i1.MatChipList, i1.MatChip, i1.MatChipRemove, i1.MatChipAvatar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-harness-example',
                        templateUrl: 'chips-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
    ];
    var ChipsExamplesModule = /** @class */ (function () {
        function ChipsExamplesModule() {
        }
        return ChipsExamplesModule;
    }());
    ChipsExamplesModule.ɵfac = function ChipsExamplesModule_Factory(t) { return new (t || ChipsExamplesModule)(); };
    ChipsExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ChipsExamplesModule });
    ChipsExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
                i3.CommonModule,
                i2.DragDropModule,
                i5.MatAutocompleteModule,
                i1.MatChipsModule,
                i6.MatIconModule,
                i1$1.MatFormFieldModule,
                i4.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i2.DragDropModule,
                            i5.MatAutocompleteModule,
                            i1.MatChipsModule,
                            i6.MatIconModule,
                            i1$1.MatFormFieldModule,
                            i4.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChipsExamplesModule, { declarations: [ChipsAutocompleteExample,
                ChipsDragDropExample,
                ChipsInputExample,
                ChipsOverviewExample,
                ChipsStackedExample,
                ChipsHarnessExample], imports: [i3.CommonModule,
                i2.DragDropModule,
                i5.MatAutocompleteModule,
                i1.MatChipsModule,
                i6.MatIconModule,
                i1$1.MatFormFieldModule,
                i4.ReactiveFormsModule], exports: [ChipsAutocompleteExample,
                ChipsDragDropExample,
                ChipsInputExample,
                ChipsOverviewExample,
                ChipsStackedExample,
                ChipsHarnessExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ChipsAutocompleteExample = ChipsAutocompleteExample;
    exports.ChipsDragDropExample = ChipsDragDropExample;
    exports.ChipsExamplesModule = ChipsExamplesModule;
    exports.ChipsHarnessExample = ChipsHarnessExample;
    exports.ChipsInputExample = ChipsInputExample;
    exports.ChipsOverviewExample = ChipsOverviewExample;
    exports.ChipsStackedExample = ChipsStackedExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-chips.umd.js.map
