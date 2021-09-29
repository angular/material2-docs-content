(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk-experimental/selection'), require('@angular/cdk/table'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/checkbox')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk-experimental/selection', ['exports', '@angular/cdk-experimental/selection', '@angular/cdk/table', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/checkbox'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdkExperimental = global.ng.componentsExamples.cdkExperimental || {}, global.ng.componentsExamples.cdkExperimental.selection = {}), global.ng.cdkExperimental.selection, global.ng.cdk.table, global.ng.common, global.ng.core, global.ng.forms, global.ng.material.checkbox));
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

    function CdkSelectionColumnExample_th_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 10);
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkSelectionColumnExample_td_5_Template(rf, ctx) {
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
    function CdkSelectionColumnExample_th_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 10);
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkSelectionColumnExample_td_8_Template(rf, ctx) {
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
    function CdkSelectionColumnExample_th_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 10);
            i0__namespace.ɵɵtext(1, " Weight ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkSelectionColumnExample_td_11_Template(rf, ctx) {
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
    function CdkSelectionColumnExample_th_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 10);
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkSelectionColumnExample_td_14_Template(rf, ctx) {
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
    function CdkSelectionColumnExample_tr_15_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 12);
        }
    }
    function CdkSelectionColumnExample_tr_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 13);
        }
        if (rf & 2) {
            var row_r14 = ctx.$implicit;
            i0__namespace.ɵɵproperty("cdkRowSelectionValue", row_r14);
        }
    }
    /**
     * @title CDK Selection Column on a CDK table.
     */
    var CdkSelectionColumnExample = /** @class */ (function () {
        function CdkSelectionColumnExample() {
            this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA;
            this.selected = [];
        }
        CdkSelectionColumnExample.prototype.selectionChanged = function (event) {
            this.selected = event.after.map(function (select) { return select.value.name; });
        };
        return CdkSelectionColumnExample;
    }());
    CdkSelectionColumnExample.ɵfac = function CdkSelectionColumnExample_Factory(t) { return new (t || CdkSelectionColumnExample)(); };
    CdkSelectionColumnExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkSelectionColumnExample, selectors: [["cdk-selection-column-example"]], decls: 17, vars: 5, consts: [["cdk-table", "", "cdkSelection", "", 1, "example-table", 3, "dataSource", "cdkSelectionMultiple", "cdkSelectionChange"], ["cdkSelectionColumnName", "select"], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", "cdkRowSelection", "", 3, "cdkRowSelectionValue", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", "", "cdkRowSelection", "", 3, "cdkRowSelectionValue"]], template: function CdkSelectionColumnExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtext(0);
                i0__namespace.ɵɵelementStart(1, "table", 0);
                i0__namespace.ɵɵlistener("cdkSelectionChange", function CdkSelectionColumnExample_Template_table_cdkSelectionChange_1_listener($event) { return ctx.selectionChanged($event); });
                i0__namespace.ɵɵelement(2, "cdk-selection-column", 1);
                i0__namespace.ɵɵelementContainerStart(3, 2);
                i0__namespace.ɵɵtemplate(4, CdkSelectionColumnExample_th_4_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(5, CdkSelectionColumnExample_td_5_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(6, 5);
                i0__namespace.ɵɵtemplate(7, CdkSelectionColumnExample_th_7_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(8, CdkSelectionColumnExample_td_8_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(9, 6);
                i0__namespace.ɵɵtemplate(10, CdkSelectionColumnExample_th_10_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(11, CdkSelectionColumnExample_td_11_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(12, 7);
                i0__namespace.ɵɵtemplate(13, CdkSelectionColumnExample_th_13_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(14, CdkSelectionColumnExample_td_14_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(15, CdkSelectionColumnExample_tr_15_Template, 1, 0, "tr", 8);
                i0__namespace.ɵɵtemplate(16, CdkSelectionColumnExample_tr_16_Template, 1, 1, "tr", 9);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵtextInterpolate1("Selected: ", ctx.selected, "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("cdkSelectionMultiple", true);
                i0__namespace.ɵɵadvance(14);
                i0__namespace.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.CdkTable, i2__namespace.CdkSelection, i2__namespace.CdkSelectionColumn, i1__namespace.CdkColumnDef, i1__namespace.CdkHeaderCellDef, i1__namespace.CdkCellDef, i1__namespace.CdkHeaderRowDef, i1__namespace.CdkRowDef, i1__namespace.CdkHeaderCell, i1__namespace.CdkCell, i1__namespace.CdkHeaderRow, i1__namespace.CdkRow, i2__namespace.CdkRowSelection], styles: [".example-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n\ntr.cdk-selected[_ngcontent-%COMP%] {\n  background-color: yellow;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkSelectionColumnExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-selection-column-example', template: "Selected: {{selected}}\n<table class=\"example-table\" cdk-table [dataSource]=\"dataSource\" cdkSelection [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selectionChanged($event)\">\n    <cdk-selection-column cdkSelectionColumnName=\"select\"></cdk-selection-column>\n    <!-- Position Column -->\n    <ng-container cdkColumnDef=\"position\">\n      <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container cdkColumnDef=\"weight\">\n      <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container cdkColumnDef=\"symbol\">\n      <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" cdkRowSelection [cdkRowSelectionValue]=\"row\"></tr>\n</table>\n", styles: [".example-table {\n  border-collapse: collapse;\n}\n\ntr.cdk-selected {\n  background-color: yellow;\n}\n"] }]
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

    function CdkSelectionListExample_li_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵelementStart(1, "input", 10, 11);
            i0__namespace.ɵɵlistener("click", function CdkSelectionListExample_li_9_Template_input_click_1_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var _r8 = i0__namespace.ɵɵreference(2); return _r8.toggle(); });
            i0__namespace.ɵɵpipe(3, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r7 = ctx.$implicit;
            var _r8 = i0__namespace.ɵɵreference(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkSelectionToggleValue", item_r7)("checked", i0__namespace.ɵɵpipeBind1(3, 3, _r8.checked));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", item_r7, " ");
        }
    }
    function CdkSelectionListExample_li_18_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵelement(1, "mat-checkbox", 12);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkSelectionToggleValue", item_r11);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", item_r11, " ");
        }
    }
    function CdkSelectionListExample_li_24_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵelement(1, "mat-checkbox", 12);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkSelectionToggleValue", item_r12);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", item_r12, " ");
        }
    }
    function CdkSelectionListExample_li_33_Template(rf, ctx) {
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
            i0__namespace.ɵɵproperty("cdkSelectionToggleValue", item_r13)("cdkSelectionToggleIndex", i_r14);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", item_r13, " ");
        }
    }
    /**
     * @title CDK Selection on a simple list.
     */
    var CdkSelectionListExample = /** @class */ (function () {
        function CdkSelectionListExample() {
            this.data = ELEMENT_NAMES;
            this.selected1 = [];
            this.selected2 = [];
            this.selected3 = [];
            this.selected4 = [];
        }
        CdkSelectionListExample.prototype.getCurrentSelected = function (event) {
            return event.after.map(function (select) { return select.value; });
        };
        CdkSelectionListExample.prototype.trackByFn = function (index) {
            return index;
        };
        CdkSelectionListExample.prototype.changeElementName = function () {
            this.data = ELEMENT_SYMBOLS;
        };
        CdkSelectionListExample.prototype.reset = function () {
            this.data = ELEMENT_NAMES;
        };
        return CdkSelectionListExample;
    }());
    CdkSelectionListExample.ɵfac = function CdkSelectionListExample_Factory(t) { return new (t || CdkSelectionListExample)(); };
    CdkSelectionListExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkSelectionListExample, selectors: [["cdk-selection-list-example"]], decls: 38, vars: 30, consts: [["cdkSelection", "", 3, "dataSource", "cdkSelectionMultiple", "cdkSelectionChange"], ["type", "checkbox", "cdkSelectAll", "", 3, "checked", "indeterminate", "click"], ["allToggler", "cdkSelectAll"], [4, "ngFor", "ngForOf"], ["cdkSelectAll", "", 3, "indeterminate"], ["toggle1", "cdkSelectAll"], ["cdkSelection", "", 3, "dataSource", "cdkSelectionMultiple", "trackBy", "cdkSelectionChange"], ["toggle2", "cdkSelectAll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], ["type", "checkbox", "cdkSelectionToggle", "", 3, "cdkSelectionToggleValue", "checked", "click"], ["toggler", "cdkSelectionToggle"], ["cdkSelectionToggle", "", 3, "cdkSelectionToggleValue"], ["cdkSelectionToggle", "", 3, "cdkSelectionToggleValue", "cdkSelectionToggleIndex"]], template: function CdkSelectionListExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r15_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "h3");
                i0__namespace.ɵɵelementStart(1, "code");
                i0__namespace.ɵɵtext(2, "native input");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementStart(4, "ul", 0);
                i0__namespace.ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_4_listener($event) { return ctx.selected1 = ctx.getCurrentSelected($event); });
                i0__namespace.ɵɵelementStart(5, "input", 1, 2);
                i0__namespace.ɵɵlistener("click", function CdkSelectionListExample_Template_input_click_5_listener($event) { i0__namespace.ɵɵrestoreView(_r15_1); var _r0 = i0__namespace.ɵɵreference(6); return _r0.toggle($event); });
                i0__namespace.ɵɵpipe(7, "async");
                i0__namespace.ɵɵpipe(8, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(9, CdkSelectionListExample_li_9_Template, 5, 5, "li", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "h3");
                i0__namespace.ɵɵelementStart(11, "code");
                i0__namespace.ɵɵtext(12, "mat-checkbox");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(13);
                i0__namespace.ɵɵelementStart(14, "ul", 0);
                i0__namespace.ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_14_listener($event) { return ctx.selected2 = ctx.getCurrentSelected($event); });
                i0__namespace.ɵɵelement(15, "mat-checkbox", 4, 5);
                i0__namespace.ɵɵpipe(17, "async");
                i0__namespace.ɵɵtemplate(18, CdkSelectionListExample_li_18_Template, 3, 2, "li", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "h3");
                i0__namespace.ɵɵelementStart(20, "code");
                i0__namespace.ɵɵtext(21, "Single select with mat-checkbox");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(22);
                i0__namespace.ɵɵelementStart(23, "ul", 0);
                i0__namespace.ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_23_listener($event) { return ctx.selected3 = ctx.getCurrentSelected($event); });
                i0__namespace.ɵɵtemplate(24, CdkSelectionListExample_li_24_Template, 3, 2, "li", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(25, "h3");
                i0__namespace.ɵɵelementStart(26, "code");
                i0__namespace.ɵɵtext(27, "with trackBy");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(28);
                i0__namespace.ɵɵelementStart(29, "ul", 6);
                i0__namespace.ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_29_listener($event) { return ctx.selected4 = ctx.getCurrentSelected($event); });
                i0__namespace.ɵɵelement(30, "mat-checkbox", 4, 7);
                i0__namespace.ɵɵpipe(32, "async");
                i0__namespace.ɵɵtemplate(33, CdkSelectionListExample_li_33_Template, 3, 3, "li", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(34, "button", 9);
                i0__namespace.ɵɵlistener("click", function CdkSelectionListExample_Template_button_click_34_listener() { return ctx.changeElementName(); });
                i0__namespace.ɵɵtext(35, "Change element names and the already selected stays");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(36, "button", 9);
                i0__namespace.ɵɵlistener("click", function CdkSelectionListExample_Template_button_click_36_listener() { return ctx.reset(); });
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
                i0__namespace.ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("checked", i0__namespace.ɵɵpipeBind1(7, 22, _r0.checked))("indeterminate", i0__namespace.ɵɵpipeBind1(8, 24, _r0.indeterminate));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.data);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate1("\nSelected: ", ctx.selected2, "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("indeterminate", i0__namespace.ɵɵpipeBind1(17, 26, _r2.indeterminate));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.data);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate1("\nSelected: ", ctx.selected3, "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", false);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.data);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate1("\nSelected: ", ctx.selected4, "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", true)("trackBy", ctx.trackByFn);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("indeterminate", i0__namespace.ɵɵpipeBind1(32, 28, _r5.indeterminate));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFn);
            }
        }, directives: [i2__namespace.CdkSelection, i2__namespace.CdkSelectAll, i2__namespace$1.NgForOf, i3__namespace.MatCheckbox, i2__namespace.CdkSelectionToggle], pipes: [i2__namespace$1.AsyncPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkSelectionListExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-selection-list-example', template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
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
        CdkSelectionListExample,
        CdkSelectionColumnExample,
    ];
    var CdkSelectionExamplesModule = /** @class */ (function () {
        function CdkSelectionExamplesModule() {
        }
        return CdkSelectionExamplesModule;
    }());
    CdkSelectionExamplesModule.ɵfac = function CdkSelectionExamplesModule_Factory(t) { return new (t || CdkSelectionExamplesModule)(); };
    CdkSelectionExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkSelectionExamplesModule });
    CdkSelectionExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CdkSelectionModule,
                i1.CdkTableModule,
                i2$1.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i3.MatCheckboxModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkSelectionExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CdkSelectionModule,
                            i1.CdkTableModule,
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
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkSelectionExamplesModule, { declarations: [CdkSelectionListExample,
                CdkSelectionColumnExample], imports: [i2.CdkSelectionModule,
                i1.CdkTableModule,
                i2$1.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i3.MatCheckboxModule], exports: [CdkSelectionListExample,
                CdkSelectionColumnExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkSelectionColumnExample = CdkSelectionColumnExample;
    exports.CdkSelectionExamplesModule = CdkSelectionExamplesModule;
    exports.CdkSelectionListExample = CdkSelectionListExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-experimental-selection.umd.js.map
