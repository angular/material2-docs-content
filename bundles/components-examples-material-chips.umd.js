(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/drag-drop'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/autocomplete'), require('@angular/material/chips'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/cdk/keycodes'), require('rxjs/operators'), require('@angular/material/core'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/chips', ['exports', '@angular/cdk/drag-drop', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/autocomplete', '@angular/material/chips', '@angular/material/form-field', '@angular/material/icon', '@angular/cdk/keycodes', 'rxjs/operators', '@angular/material/core', '@angular/material/button'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.chips = {}), global.ng.cdk.dragDrop, global.ng.common, global.ng.core, global.ng.forms, global.ng.material.autocomplete, global.ng.material.chips, global.ng.material.formField, global.ng.material.icon, global.ng.cdk.keycodes, global.rxjs.operators, global.ng.material.core, global.ng.material.button));
}(this, (function (exports, i2, i3, i0, i4, i5, i1$1, i1, i6, keycodes, operators, i7, i1$2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);

    var _c0 = ["fruitInput"];
    function ChipsAutocompleteExample_mat_chip_5_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon", 11);
            i0__namespace.ɵɵtext(1, "cancel");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function ChipsAutocompleteExample_mat_chip_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-chip", 9);
            i0__namespace.ɵɵlistener("removed", function ChipsAutocompleteExample_mat_chip_5_Template_mat_chip_removed_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r8_1); var fruit_r5 = restoredCtx.$implicit; var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.remove(fruit_r5); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵtemplate(2, ChipsAutocompleteExample_mat_chip_5_mat_icon_2_Template, 2, 0, "mat-icon", 10);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var fruit_r5 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", fruit_r5, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.removable);
        }
    }
    function ChipsAutocompleteExample_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 12);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var fruit_r9 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", fruit_r9);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", fruit_r9, " ");
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
            return this.allFruits.filter(function (fruit) { return fruit.toLowerCase().includes(filterValue); });
        };
        return ChipsAutocompleteExample;
    }());
    ChipsAutocompleteExample.ɵfac = function ChipsAutocompleteExample_Factory(t) { return new (t || ChipsAutocompleteExample)(); };
    ChipsAutocompleteExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ChipsAutocompleteExample, selectors: [["chips-autocomplete-example"]], viewQuery: function ChipsAutocompleteExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.fruitInput = _t.first);
            }
        }, decls: 12, vars: 8, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["fruitInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function ChipsAutocompleteExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Favorite Fruits");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-chip-list", 1, 2);
                i0__namespace.ɵɵtemplate(5, ChipsAutocompleteExample_mat_chip_5_Template, 3, 4, "mat-chip", 3);
                i0__namespace.ɵɵelementStart(6, "input", 4, 5);
                i0__namespace.ɵɵlistener("matChipInputTokenEnd", function ChipsAutocompleteExample_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-autocomplete", 6, 7);
                i0__namespace.ɵɵlistener("optionSelected", function ChipsAutocompleteExample_Template_mat_autocomplete_optionSelected_8_listener($event) { return ctx.selected($event); });
                i0__namespace.ɵɵtemplate(10, ChipsAutocompleteExample_mat_option_10_Template, 2, 2, "mat-option", 8);
                i0__namespace.ɵɵpipe(11, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(4);
                var _r3 = i0__namespace.ɵɵreference(9);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngForOf", ctx.fruits);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formControl", ctx.fruitCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(11, 6, ctx.filteredFruits));
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i1__namespace$1.MatChipList, i3__namespace.NgForOf, i4__namespace.DefaultValueAccessor, i5__namespace.MatAutocompleteTrigger, i1__namespace$1.MatChipInput, i4__namespace.NgControlStatus, i4__namespace.FormControlDirective, i5__namespace.MatAutocomplete, i1__namespace$1.MatChip, i3__namespace.NgIf, i6__namespace.MatIcon, i1__namespace$1.MatChipRemove, i7__namespace.MatOption], pipes: [i3__namespace.AsyncPipe], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ChipsAutocompleteExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-autocomplete-example',
                        templateUrl: 'chips-autocomplete-example.html',
                        styleUrls: ['chips-autocomplete-example.css'],
                    }]
            }], function () { return []; }, { fruitInput: [{
                    type: i0.ViewChild,
                    args: ['fruitInput']
                }] });
    })();

    function ChipsDragDropExample_mat_chip_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-chip", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var vegetable_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", vegetable_r1.name, " ");
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
    ChipsDragDropExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ChipsDragDropExample, selectors: [["chips-drag-drop-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function ChipsDragDropExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-chip-list", 0);
                i0__namespace.ɵɵlistener("cdkDropListDropped", function ChipsDragDropExample_Template_mat_chip_list_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
                i0__namespace.ɵɵtemplate(1, ChipsDragDropExample_mat_chip_1_Template, 2, 1, "mat-chip", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.vegetables);
            }
        }, directives: [i1__namespace$1.MatChipList, i2__namespace.CdkDropList, i3__namespace.NgForOf, i1__namespace$1.MatChip, i2__namespace.CdkDrag], styles: [".example-box.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ChipsDragDropExample, [{
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
            i0__namespace.ɵɵelementStart(0, "mat-icon", 7);
            i0__namespace.ɵɵtext(1, "cancel");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function ChipsInputExample_mat_chip_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-chip", 5);
            i0__namespace.ɵɵlistener("removed", function ChipsInputExample_mat_chip_5_Template_mat_chip_removed_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var fruit_r2 = restoredCtx.$implicit; var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.remove(fruit_r2); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵtemplate(2, ChipsInputExample_mat_chip_5_mat_icon_2_Template, 2, 0, "mat-icon", 6);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var fruit_r2 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", fruit_r2.name, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.removable);
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
    ChipsInputExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ChipsInputExample, selectors: [["chips-input-example"]], decls: 7, vars: 4, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function ChipsInputExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Favorite Fruits");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-chip-list", 1, 2);
                i0__namespace.ɵɵtemplate(5, ChipsInputExample_mat_chip_5_Template, 3, 4, "mat-chip", 3);
                i0__namespace.ɵɵelementStart(6, "input", 4);
                i0__namespace.ɵɵlistener("matChipInputTokenEnd", function ChipsInputExample_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(4);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngForOf", ctx.fruits);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i1__namespace$1.MatChipList, i3__namespace.NgForOf, i1__namespace$1.MatChipInput, i1__namespace$1.MatChip, i3__namespace.NgIf, i6__namespace.MatIcon, i1__namespace$1.MatChipRemove], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ChipsInputExample, [{
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
    ChipsOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ChipsOverviewExample, selectors: [["chips-overview-example"]], decls: 9, vars: 0, consts: [["aria-label", "Fish selection"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""]], template: function ChipsOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-chip-list", 0);
                i0__namespace.ɵɵelementStart(1, "mat-chip");
                i0__namespace.ɵɵtext(2, "One fish");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-chip");
                i0__namespace.ɵɵtext(4, "Two fish");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-chip", 1);
                i0__namespace.ɵɵtext(6, "Primary fish");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-chip", 2);
                i0__namespace.ɵɵtext(8, "Accent fish");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace$1.MatChipList, i1__namespace$1.MatChip], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ChipsOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-overview-example',
                        templateUrl: 'chips-overview-example.html',
                    }]
            }], null, null);
    })();

    function ChipsStackedExample_mat_chip_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-chip", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var chip_r1 = ctx.$implicit;
            i0__namespace.ɵɵproperty("color", chip_r1.color);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", chip_r1.name, " ");
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
    ChipsStackedExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ChipsStackedExample, selectors: [["chips-stacked-example"]], decls: 2, vars: 1, consts: [["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", 3, "color", 4, "ngFor", "ngForOf"], ["selected", "", 3, "color"]], template: function ChipsStackedExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-chip-list", 0);
                i0__namespace.ɵɵtemplate(1, ChipsStackedExample_mat_chip_1_Template, 2, 2, "mat-chip", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.availableColors);
            }
        }, directives: [i1__namespace$1.MatChipList, i3__namespace.NgForOf, i1__namespace$1.MatChip], styles: ["mat-chip[_ngcontent-%COMP%] {\n  max-width: 200px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ChipsStackedExample, [{
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
    ChipsHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ChipsHarnessExample, selectors: [["chips-harness-example"]], decls: 11, vars: 2, consts: [[3, "disabled", "aria-orientation"], [3, "removed"], ["matChipRemove", ""]], template: function ChipsHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-chip-list", 0);
                i0__namespace.ɵɵelementStart(1, "mat-chip", 1);
                i0__namespace.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_1_listener() { return ctx.remove(); });
                i0__namespace.ɵɵtext(2, "Chip 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-chip", 1);
                i0__namespace.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_3_listener() { return ctx.remove(); });
                i0__namespace.ɵɵtext(4, "Chip 2 ");
                i0__namespace.ɵɵelementStart(5, "span", 2);
                i0__namespace.ɵɵtext(6, "remove_icon");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-chip", 1);
                i0__namespace.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_7_listener() { return ctx.remove(); });
                i0__namespace.ɵɵelementStart(8, "mat-chip-avatar");
                i0__namespace.ɵɵtext(9, "C");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(10, "Chip 4");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("disabled", ctx.isDisabled)("aria-orientation", "horizontal");
            }
        }, directives: [i1__namespace$1.MatChipList, i1__namespace$1.MatChip, i1__namespace$1.MatChipRemove, i1__namespace$1.MatChipAvatar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ChipsHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-harness-example',
                        templateUrl: 'chips-harness-example.html',
                    }]
            }], null, null);
    })();

    function ChipsFormControlExample_mat_chip_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-chip", 7);
            i0__namespace.ɵɵlistener("removed", function ChipsFormControlExample_mat_chip_12_Template_mat_chip_removed_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r4_1); var keyword_r2 = restoredCtx.$implicit; var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.removeKeyword(keyword_r2); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var keyword_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", keyword_r2, " ");
        }
    }
    /**
     * @title Chips with form control
     */
    var ChipsFormControlExample = /** @class */ (function () {
        function ChipsFormControlExample() {
            this.keywords = new Set(['angular', 'how-to', 'tutorial']);
            this.formControl = new i4.FormControl();
        }
        ChipsFormControlExample.prototype.addKeywordFromInput = function (event) {
            if (event.value) {
                this.keywords.add(event.value);
                event.chipInput.clear();
            }
        };
        ChipsFormControlExample.prototype.removeKeyword = function (keyword) {
            this.keywords.delete(keyword);
        };
        return ChipsFormControlExample;
    }());
    ChipsFormControlExample.ɵfac = function ChipsFormControlExample_Factory(t) { return new (t || ChipsFormControlExample)(); };
    ChipsFormControlExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ChipsFormControlExample, selectors: [["chips-form-control-example"]], decls: 14, vars: 4, consts: [[1, "example-button-container"], ["mat-raised-button", "", 3, "click"], [1, "example-chip-list"], ["aria-label", "Video keywords", "multiple", "", 3, "formControl"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New keyword...", 3, "matChipInputFor", "matChipInputTokenEnd"], [3, "removed"]], template: function ChipsFormControlExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", 1);
                i0__namespace.ɵɵlistener("click", function ChipsFormControlExample_Template_button_click_1_listener() { return ctx.formControl.disable(); });
                i0__namespace.ɵɵtext(2, "Disable form control");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "button", 1);
                i0__namespace.ɵɵlistener("click", function ChipsFormControlExample_Template_button_click_3_listener() { return ctx.formControl.enable(); });
                i0__namespace.ɵɵtext(4, "Enable form control");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "p");
                i0__namespace.ɵɵtext(6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(8, "mat-label");
                i0__namespace.ɵɵtext(9, "Video keywords");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-chip-list", 3, 4);
                i0__namespace.ɵɵtemplate(12, ChipsFormControlExample_mat_chip_12_Template, 2, 1, "mat-chip", 5);
                i0__namespace.ɵɵelementStart(13, "input", 6);
                i0__namespace.ɵɵlistener("matChipInputTokenEnd", function ChipsFormControlExample_Template_input_matChipInputTokenEnd_13_listener($event) { return ctx.addKeywordFromInput($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(11);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵtextInterpolate1(" Selected keywords: ", ctx.formControl.value, "\n");
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("formControl", ctx.formControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.keywords);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matChipInputFor", _r0);
            }
        }, directives: [i1__namespace$2.MatButton, i1__namespace.MatFormField, i1__namespace.MatLabel, i1__namespace$1.MatChipList, i4__namespace.NgControlStatus, i4__namespace.FormControlDirective, i3__namespace.NgForOf, i1__namespace$1.MatChipInput, i1__namespace$1.MatChip], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-button-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ChipsFormControlExample, [{
                type: i0.Component,
                args: [{
                        selector: 'chips-form-control-example',
                        templateUrl: 'chips-form-control-example.html',
                        styleUrls: ['chips-form-control-example.css'],
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
        ChipsFormControlExample,
    ];
    var ChipsExamplesModule = /** @class */ (function () {
        function ChipsExamplesModule() {
        }
        return ChipsExamplesModule;
    }());
    ChipsExamplesModule.ɵfac = function ChipsExamplesModule_Factory(t) { return new (t || ChipsExamplesModule)(); };
    ChipsExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ChipsExamplesModule });
    ChipsExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i3.CommonModule,
                i2.DragDropModule,
                i5.MatAutocompleteModule,
                i1$2.MatButtonModule,
                i1$1.MatChipsModule,
                i6.MatIconModule,
                i1.MatFormFieldModule,
                i4.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ChipsExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i2.DragDropModule,
                            i5.MatAutocompleteModule,
                            i1$2.MatButtonModule,
                            i1$1.MatChipsModule,
                            i6.MatIconModule,
                            i1.MatFormFieldModule,
                            i4.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ChipsExamplesModule, { declarations: [ChipsAutocompleteExample,
                ChipsDragDropExample,
                ChipsInputExample,
                ChipsOverviewExample,
                ChipsStackedExample,
                ChipsHarnessExample,
                ChipsFormControlExample], imports: [i3.CommonModule,
                i2.DragDropModule,
                i5.MatAutocompleteModule,
                i1$2.MatButtonModule,
                i1$1.MatChipsModule,
                i6.MatIconModule,
                i1.MatFormFieldModule,
                i4.ReactiveFormsModule], exports: [ChipsAutocompleteExample,
                ChipsDragDropExample,
                ChipsInputExample,
                ChipsOverviewExample,
                ChipsStackedExample,
                ChipsHarnessExample,
                ChipsFormControlExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ChipsAutocompleteExample = ChipsAutocompleteExample;
    exports.ChipsDragDropExample = ChipsDragDropExample;
    exports.ChipsExamplesModule = ChipsExamplesModule;
    exports.ChipsFormControlExample = ChipsFormControlExample;
    exports.ChipsHarnessExample = ChipsHarnessExample;
    exports.ChipsInputExample = ChipsInputExample;
    exports.ChipsOverviewExample = ChipsOverviewExample;
    exports.ChipsStackedExample = ChipsStackedExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-chips.umd.js.map
