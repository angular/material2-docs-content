(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material-experimental/selection'), require('@angular/material/table'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/checkbox')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/selection', ['exports', '@angular/material-experimental/selection', '@angular/material/table', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/checkbox'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.selection = {}), global.ng.materialExperimental.selection, global.ng.material.table, global.ng.common, global.ng.core, global.ng.forms, global.ng.material.checkbox));
}(this, (function (exports, i2, i1, i2$1, i0, forms, i3) { 'use strict';

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
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    function MatSelectionColumnExample_th_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 10);
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function MatSelectionColumnExample_td_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 11);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function MatSelectionColumnExample_th_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 10);
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function MatSelectionColumnExample_td_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 11);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function MatSelectionColumnExample_th_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 10);
            i0__namespace.ɵɵtext(1, " Weight ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function MatSelectionColumnExample_td_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 11);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function MatSelectionColumnExample_th_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 10);
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function MatSelectionColumnExample_td_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 11);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function MatSelectionColumnExample_tr_15_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 12);
        }
    }
    function MatSelectionColumnExample_tr_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 13);
        }
        if (rf & 2) {
            var row_r14 = ctx.$implicit;
            i0__namespace.ɵɵproperty("matRowSelectionValue", row_r14);
        }
    }
    /**
     * @title Table that uses `matSelectionColumn` which allows users to select rows.
     */
    var MatSelectionColumnExample = /** @class */ (function () {
        function MatSelectionColumnExample() {
            this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA;
            this.selected = [];
        }
        MatSelectionColumnExample.prototype.selectionChanged = function (event) {
            this.selected = event.after.map(function (select) { return select.value.name; });
        };
        return MatSelectionColumnExample;
    }());
    MatSelectionColumnExample.ɵfac = function MatSelectionColumnExample_Factory(t) { return new (t || MatSelectionColumnExample)(); };
    MatSelectionColumnExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MatSelectionColumnExample, selectors: [["mat-selection-column-example"]], decls: 17, vars: 5, consts: [["mat-table", "", "matSelection", "", 1, "example-table", 3, "dataSource", "matSelectionMultiple", "matSelectionChange"], ["name", "select"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "matRowSelection", "", 3, "matRowSelectionValue", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", "matRowSelection", "", 3, "matRowSelectionValue"]], template: function MatSelectionColumnExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtext(0);
                i0__namespace.ɵɵelementStart(1, "table", 0);
                i0__namespace.ɵɵlistener("matSelectionChange", function MatSelectionColumnExample_Template_table_matSelectionChange_1_listener($event) { return ctx.selectionChanged($event); });
                i0__namespace.ɵɵelement(2, "mat-selection-column", 1);
                i0__namespace.ɵɵelementContainerStart(3, 2);
                i0__namespace.ɵɵtemplate(4, MatSelectionColumnExample_th_4_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(5, MatSelectionColumnExample_td_5_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(6, 5);
                i0__namespace.ɵɵtemplate(7, MatSelectionColumnExample_th_7_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(8, MatSelectionColumnExample_td_8_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(9, 6);
                i0__namespace.ɵɵtemplate(10, MatSelectionColumnExample_th_10_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(11, MatSelectionColumnExample_td_11_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(12, 7);
                i0__namespace.ɵɵtemplate(13, MatSelectionColumnExample_th_13_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(14, MatSelectionColumnExample_td_14_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(15, MatSelectionColumnExample_tr_15_Template, 1, 0, "tr", 8);
                i0__namespace.ɵɵtemplate(16, MatSelectionColumnExample_tr_16_Template, 1, 1, "tr", 9);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵtextInterpolate1("Selected: ", ctx.selected, "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("matSelectionMultiple", true);
                i0__namespace.ɵɵadvance(14);
                i0__namespace.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.MatTable, i2__namespace.MatSelection, i2__namespace.MatSelectionColumn, i1__namespace.MatColumnDef, i1__namespace.MatHeaderCellDef, i1__namespace.MatCellDef, i1__namespace.MatHeaderRowDef, i1__namespace.MatRowDef, i1__namespace.MatHeaderCell, i1__namespace.MatCell, i1__namespace.MatHeaderRow, i1__namespace.MatRow, i2__namespace.MatRowSelection], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MatSelectionColumnExample, [{
                type: i0.Component,
                args: [{
                        selector: 'mat-selection-column-example',
                        templateUrl: 'mat-selection-column-example.html',
                        styleUrls: ['mat-selection-column-example.css'],
                    }]
            }], null, null);
    })();
    var ELEMENT_DATA = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];

    function MatSelectionListExample_li_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵelementStart(1, "input", 10, 11);
            i0__namespace.ɵɵlistener("click", function MatSelectionListExample_li_9_Template_input_click_1_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var _r8 = i0__namespace.ɵɵreference(2); return _r8.toggle(); });
            i0__namespace.ɵɵpipe(3, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r7 = ctx.$implicit;
            var _r8 = i0__namespace.ɵɵreference(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matSelectionToggleValue", item_r7)("checked", i0__namespace.ɵɵpipeBind1(3, 3, _r8.checked));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", item_r7, " ");
        }
    }
    function MatSelectionListExample_li_18_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵelement(1, "mat-checkbox", 12);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matSelectionToggleValue", item_r11);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", item_r11, " ");
        }
    }
    function MatSelectionListExample_li_24_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵelement(1, "mat-checkbox", 12);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matSelectionToggleValue", item_r12);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", item_r12, " ");
        }
    }
    function MatSelectionListExample_li_33_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵelement(1, "mat-checkbox", 13);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r13 = ctx.$implicit;
            var i_r14 = ctx.index;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matSelectionToggleValue", item_r13)("matSelectionToggleIndex", i_r14);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", item_r13, " ");
        }
    }
    /**
     * @title Mat Selection on a simple list.
     */
    var MatSelectionListExample = /** @class */ (function () {
        function MatSelectionListExample() {
            this.data = ELEMENT_NAMES;
            this.selected1 = [];
            this.selected2 = [];
            this.selected3 = [];
            this.selected4 = [];
        }
        MatSelectionListExample.prototype.getCurrentSelected = function (event) {
            return event.after.map(function (select) { return select.value; });
        };
        MatSelectionListExample.prototype.trackByFn = function (index, value) {
            return index;
        };
        MatSelectionListExample.prototype.changeElementName = function () {
            this.data = ELEMENT_SYMBOLS;
        };
        MatSelectionListExample.prototype.reset = function () {
            this.data = ELEMENT_NAMES;
        };
        return MatSelectionListExample;
    }());
    MatSelectionListExample.ɵfac = function MatSelectionListExample_Factory(t) { return new (t || MatSelectionListExample)(); };
    MatSelectionListExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MatSelectionListExample, selectors: [["mat-selection-list-example"]], decls: 38, vars: 30, consts: [["matSelection", "", 3, "dataSource", "matSelectionMultiple", "matSelectionChange"], ["type", "checkbox", "matSelectAll", "", 3, "checked", "indeterminate", "click"], ["allToggler", "matSelectAll"], [4, "ngFor", "ngForOf"], ["matSelectAll", "", 3, "indeterminate"], ["toggle1", "matSelectAll"], ["matSelection", "", 3, "dataSource", "matSelectionMultiple", "trackBy", "matSelectionChange"], ["toggle2", "matSelectAll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], ["type", "checkbox", "matSelectionToggle", "", 3, "matSelectionToggleValue", "checked", "click"], ["toggler", "matSelectionToggle"], ["matSelectionToggle", "", 3, "matSelectionToggleValue"], ["matSelectionToggle", "", 3, "matSelectionToggleValue", "matSelectionToggleIndex"]], template: function MatSelectionListExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r15_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "h3");
                i0__namespace.ɵɵelementStart(1, "code");
                i0__namespace.ɵɵtext(2, "native input");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementStart(4, "ul", 0);
                i0__namespace.ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_4_listener($event) { return ctx.selected1 = ctx.getCurrentSelected($event); });
                i0__namespace.ɵɵelementStart(5, "input", 1, 2);
                i0__namespace.ɵɵlistener("click", function MatSelectionListExample_Template_input_click_5_listener($event) { i0__namespace.ɵɵrestoreView(_r15_1); var _r0 = i0__namespace.ɵɵreference(6); return _r0.toggle($event); });
                i0__namespace.ɵɵpipe(7, "async");
                i0__namespace.ɵɵpipe(8, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(9, MatSelectionListExample_li_9_Template, 5, 5, "li", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "h3");
                i0__namespace.ɵɵelementStart(11, "code");
                i0__namespace.ɵɵtext(12, "mat-checkbox");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(13);
                i0__namespace.ɵɵelementStart(14, "ul", 0);
                i0__namespace.ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_14_listener($event) { return ctx.selected2 = ctx.getCurrentSelected($event); });
                i0__namespace.ɵɵelement(15, "mat-checkbox", 4, 5);
                i0__namespace.ɵɵpipe(17, "async");
                i0__namespace.ɵɵtemplate(18, MatSelectionListExample_li_18_Template, 3, 2, "li", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "h3");
                i0__namespace.ɵɵelementStart(20, "code");
                i0__namespace.ɵɵtext(21, "Single select with mat-checkbox");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(22);
                i0__namespace.ɵɵelementStart(23, "ul", 0);
                i0__namespace.ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_23_listener($event) { return ctx.selected3 = ctx.getCurrentSelected($event); });
                i0__namespace.ɵɵtemplate(24, MatSelectionListExample_li_24_Template, 3, 2, "li", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(25, "h3");
                i0__namespace.ɵɵelementStart(26, "code");
                i0__namespace.ɵɵtext(27, "with trackBy");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(28);
                i0__namespace.ɵɵelementStart(29, "ul", 6);
                i0__namespace.ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_29_listener($event) { return ctx.selected4 = ctx.getCurrentSelected($event); });
                i0__namespace.ɵɵelement(30, "mat-checkbox", 4, 7);
                i0__namespace.ɵɵpipe(32, "async");
                i0__namespace.ɵɵtemplate(33, MatSelectionListExample_li_33_Template, 3, 3, "li", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(34, "button", 9);
                i0__namespace.ɵɵlistener("click", function MatSelectionListExample_Template_button_click_34_listener() { return ctx.changeElementName(); });
                i0__namespace.ɵɵtext(35, "Change element names and the already selected stays");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(36, "button", 9);
                i0__namespace.ɵɵlistener("click", function MatSelectionListExample_Template_button_click_36_listener() { return ctx.reset(); });
                i0__namespace.ɵɵtext(37, "reset");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                var _r2 = i0__namespace.ɵɵreference(16);
                var _r5 = i0__namespace.ɵɵreference(31);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1("\nSelected: ", ctx.selected1, "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("checked", i0__namespace.ɵɵpipeBind1(7, 22, _r0.checked))("indeterminate", i0__namespace.ɵɵpipeBind1(8, 24, _r0.indeterminate));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.data);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate1("\nSelected: ", ctx.selected2, "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("indeterminate", i0__namespace.ɵɵpipeBind1(17, 26, _r2.indeterminate));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.data);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate1("\nSelected: ", ctx.selected3, "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", false);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.data);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate1("\nSelected: ", ctx.selected4, "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", true)("trackBy", ctx.trackByFn);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("indeterminate", i0__namespace.ɵɵpipeBind1(32, 28, _r5.indeterminate));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFn);
            }
        }, directives: [i2__namespace.MatSelection, i2__namespace.MatSelectAll, i2__namespace$1.NgForOf, i3__namespace.MatCheckbox, i2__namespace.MatSelectionToggle], pipes: [i2__namespace$1.AsyncPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MatSelectionListExample, [{
                type: i0.Component,
                args: [{
                        selector: 'mat-selection-list-example',
                        templateUrl: 'mat-selection-list-example.html',
                    }]
            }], null, null);
    })();
    var ELEMENT_NAMES = [
        'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen',
        'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon',
        'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium',
    ];
    var ELEMENT_SYMBOLS = [
        'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne',
        'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca'
    ];

    var EXAMPLES = [
        MatSelectionListExample,
        MatSelectionColumnExample,
    ];
    var MatSelectionExamplesModule = /** @class */ (function () {
        function MatSelectionExamplesModule() {
        }
        return MatSelectionExamplesModule;
    }());
    MatSelectionExamplesModule.ɵfac = function MatSelectionExamplesModule_Factory(t) { return new (t || MatSelectionExamplesModule)(); };
    MatSelectionExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: MatSelectionExamplesModule });
    MatSelectionExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.MatSelectionModule,
                i1.MatTableModule,
                i2$1.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i3.MatCheckboxModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MatSelectionExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.MatSelectionModule,
                            i1.MatTableModule,
                            i2$1.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i3.MatCheckboxModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(MatSelectionExamplesModule, { declarations: [MatSelectionListExample,
                MatSelectionColumnExample], imports: [i2.MatSelectionModule,
                i1.MatTableModule,
                i2$1.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i3.MatCheckboxModule], exports: [MatSelectionListExample,
                MatSelectionColumnExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MatSelectionColumnExample = MatSelectionColumnExample;
    exports.MatSelectionExamplesModule = MatSelectionExamplesModule;
    exports.MatSelectionListExample = MatSelectionListExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-selection.umd.js.map
