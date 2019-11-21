(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/paginator'), require('@angular/material/progress-spinner'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/animations'), require('@angular/material/form-field'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/collections')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/table', ['exports', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/paginator', '@angular/material/progress-spinner', '@angular/material/sort', '@angular/material/table', '@angular/animations', '@angular/material/form-field', '@angular/common/http', 'rxjs', 'rxjs/operators', '@angular/cdk/collections'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.table = {}), global.ng.common, global.ng.core, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material.paginator, global.ng.material.progressSpinner, global.ng.material.sort, global.ng.material.table, global.ng.animations, global.ng.material.formField, global.ng.common.http, global.rxjs, global.rxjs.operators, global.ng.cdk.collections));
}(this, (function (exports, i2, i0, i1, i2$1, i2$2, i2$3, i2$4, i5, i6, i4, i1$1, animations, i1$2, i1$3, rxjs, operators, collections) { 'use strict';

    function TableBasicFlexExample_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function TableBasicFlexExample_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r10 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
    } }
    function TableBasicFlexExample_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableBasicFlexExample_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r11 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
    } }
    function TableBasicFlexExample_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TableBasicFlexExample_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r12 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
    } }
    function TableBasicFlexExample_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TableBasicFlexExample_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r13 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
    } }
    function TableBasicFlexExample_mat_header_row_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-header-row");
    } }
    function TableBasicFlexExample_mat_row_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-row");
    } }
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
    ];
    /**
     * @title Basic use of `<mat-table>` (uses display flex)
     */
    var TableBasicFlexExample = /** @class */ (function () {
        function TableBasicFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA;
        }
        TableBasicFlexExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-basic-flex-example',
                        styleUrls: ['table-basic-flex-example.css'],
                        templateUrl: 'table-basic-flex-example.html',
                    },] },
        ];
        TableBasicFlexExample.ɵfac = function TableBasicFlexExample_Factory(t) { return new (t || TableBasicFlexExample)(); };
        TableBasicFlexExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableBasicFlexExample, selectors: [["table-basic-flex-example"]], decls: 15, vars: 3, consts: [[1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"]], template: function TableBasicFlexExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, TableBasicFlexExample_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 2);
                i0.ɵɵtemplate(3, TableBasicFlexExample_mat_cell_3_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, TableBasicFlexExample_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 2);
                i0.ɵɵtemplate(6, TableBasicFlexExample_mat_cell_6_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 5);
                i0.ɵɵtemplate(8, TableBasicFlexExample_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 2);
                i0.ɵɵtemplate(9, TableBasicFlexExample_mat_cell_9_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 6);
                i0.ɵɵtemplate(11, TableBasicFlexExample_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 2);
                i0.ɵɵtemplate(12, TableBasicFlexExample_mat_cell_12_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, TableBasicFlexExample_mat_header_row_13_Template, 1, 0, "mat-header-row", 7);
                i0.ɵɵtemplate(14, TableBasicFlexExample_mat_row_14_Template, 1, 0, "mat-row", 8);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return TableBasicFlexExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableBasicFlexExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-basic-flex-example',
                    styleUrls: ['table-basic-flex-example.css'],
                    templateUrl: 'table-basic-flex-example.html',
                }]
        }], null, null); })();

    function TableBasicExample_th_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function TableBasicExample_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r25 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r25.position, " ");
    } }
    function TableBasicExample_th_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableBasicExample_td_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r26 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r26.name, " ");
    } }
    function TableBasicExample_th_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TableBasicExample_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r27 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r27.weight, " ");
    } }
    function TableBasicExample_th_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TableBasicExample_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r28 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r28.symbol, " ");
    } }
    function TableBasicExample_tr_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 11);
    } }
    function TableBasicExample_tr_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 12);
    } }
    var ELEMENT_DATA$1 = [
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
    ];
    /**
     * @title Basic use of `<table mat-table>`
     */
    var TableBasicExample = /** @class */ (function () {
        function TableBasicExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$1;
        }
        TableBasicExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-basic-example',
                        styleUrls: ['table-basic-example.css'],
                        templateUrl: 'table-basic-example.html',
                    },] },
        ];
        TableBasicExample.ɵfac = function TableBasicExample_Factory(t) { return new (t || TableBasicExample)(); };
        TableBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableBasicExample, selectors: [["table-basic-example"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableBasicExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, TableBasicExample_th_2_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(3, TableBasicExample_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, TableBasicExample_th_5_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(6, TableBasicExample_td_6_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 5);
                i0.ɵɵtemplate(8, TableBasicExample_th_8_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(9, TableBasicExample_td_9_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 6);
                i0.ɵɵtemplate(11, TableBasicExample_th_11_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(12, TableBasicExample_td_12_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, TableBasicExample_tr_13_Template, 1, 0, "tr", 7);
                i0.ɵɵtemplate(14, TableBasicExample_tr_14_Template, 1, 0, "tr", 8);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return TableBasicExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableBasicExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-basic-example',
                    styleUrls: ['table-basic-example.css'],
                    templateUrl: 'table-basic-example.html',
                }]
        }], null, null); })();

    function TableDynamicColumnsExample_ng_container_7_th_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var column_r33 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", column_r33, " ");
    } }
    function TableDynamicColumnsExample_ng_container_7_td_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 9);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r37 = ctx.$implicit;
        var column_r33 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r37[column_r33], " ");
    } }
    function TableDynamicColumnsExample_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 5);
        i0.ɵɵtemplate(1, TableDynamicColumnsExample_ng_container_7_th_1_Template, 2, 1, "th", 6);
        i0.ɵɵtemplate(2, TableDynamicColumnsExample_ng_container_7_td_2_Template, 2, 1, "td", 7);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var column_r33 = ctx.$implicit;
        i0.ɵɵproperty("matColumnDef", column_r33);
    } }
    function TableDynamicColumnsExample_tr_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 10);
    } }
    function TableDynamicColumnsExample_tr_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 11);
    } }
    var ELEMENT_DATA$2 = [
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
    ];
    /**
     * @title Table dynamically changing the columns displayed
     */
    var TableDynamicColumnsExample = /** @class */ (function () {
        function TableDynamicColumnsExample() {
            this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
            this.columnsToDisplay = this.displayedColumns.slice();
            this.data = ELEMENT_DATA$2;
        }
        TableDynamicColumnsExample.prototype.addColumn = function () {
            var randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
            this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
        };
        TableDynamicColumnsExample.prototype.removeColumn = function () {
            if (this.columnsToDisplay.length) {
                this.columnsToDisplay.pop();
            }
        };
        TableDynamicColumnsExample.prototype.shuffle = function () {
            var currentIndex = this.columnsToDisplay.length;
            while (0 !== currentIndex) {
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // Swap
                var temp = this.columnsToDisplay[currentIndex];
                this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
                this.columnsToDisplay[randomIndex] = temp;
            }
        };
        TableDynamicColumnsExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-dynamic-columns-example',
                        styleUrls: ['table-dynamic-columns-example.css'],
                        templateUrl: 'table-dynamic-columns-example.html',
                    },] },
        ];
        TableDynamicColumnsExample.ɵfac = function TableDynamicColumnsExample_Factory(t) { return new (t || TableDynamicColumnsExample)(); };
        TableDynamicColumnsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableDynamicColumnsExample, selectors: [["table-dynamic-columns-example"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDynamicColumnsExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_0_listener($event) { return ctx.addColumn(); });
                i0.ɵɵtext(1, " Add column ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "button", 0);
                i0.ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_2_listener($event) { return ctx.removeColumn(); });
                i0.ɵɵtext(3, " Remove column ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "button", 0);
                i0.ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_4_listener($event) { return ctx.shuffle(); });
                i0.ɵɵtext(5, " Shuffle ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "table", 1);
                i0.ɵɵtemplate(7, TableDynamicColumnsExample_ng_container_7_Template, 3, 1, "ng-container", 2);
                i0.ɵɵtemplate(8, TableDynamicColumnsExample_tr_8_Template, 1, 0, "tr", 3);
                i0.ɵɵtemplate(9, TableDynamicColumnsExample_tr_9_Template, 1, 0, "tr", 4);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("dataSource", ctx.data);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matHeaderRowDef", ctx.columnsToDisplay);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.columnsToDisplay);
            } }, directives: [i1.MatButton, i1$1.MatTable, i2.NgForOf, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 16px 8px;\n}"] });
        return TableDynamicColumnsExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableDynamicColumnsExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-dynamic-columns-example',
                    styleUrls: ['table-dynamic-columns-example.css'],
                    templateUrl: 'table-dynamic-columns-example.html',
                }]
        }], null, null); })();

    function TableExpandableRowsExample_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var column_r45 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", column_r45, " ");
    } }
    function TableExpandableRowsExample_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r49 = ctx.$implicit;
        var column_r45 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r49[column_r45], " ");
    } }
    function TableExpandableRowsExample_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 7);
        i0.ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_th_1_Template, 2, 1, "th", 8);
        i0.ɵɵtemplate(2, TableExpandableRowsExample_ng_container_1_td_2_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var column_r45 = ctx.$implicit;
        i0.ɵɵpropertyInterpolate("matColumnDef", column_r45);
    } }
    function TableExpandableRowsExample_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵelementStart(1, "div", 11);
        i0.ɵɵelementStart(2, "div", 12);
        i0.ɵɵelementStart(3, "div", 13);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 14);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 15);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 16);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 17);
        i0.ɵɵtext(12);
        i0.ɵɵelementStart(13, "span", 18);
        i0.ɵɵtext(14, " -- Wikipedia ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r51 = ctx.$implicit;
        var ctx_r41 = i0.ɵɵnextContext();
        i0.ɵɵattribute("colspan", ctx_r41.columnsToDisplay.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@detailExpand", element_r51 == ctx_r41.expandedElement ? "expanded" : "collapsed");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", element_r51.position, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", element_r51.symbol, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", element_r51.name, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", element_r51.weight, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", element_r51.description, " ");
    } }
    function TableExpandableRowsExample_tr_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 19);
    } }
    function TableExpandableRowsExample_tr_5_Template(rf, ctx) { if (rf & 1) {
        var _r54 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "tr", 20);
        i0.ɵɵlistener("click", function TableExpandableRowsExample_tr_5_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r54); var element_r52 = ctx.$implicit; var ctx_r53 = i0.ɵɵnextContext(); return ctx_r53.expandedElement = ctx_r53.expandedElement === element_r52 ? null : element_r52; });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r52 = ctx.$implicit;
        var ctx_r43 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("example-expanded-row", ctx_r43.expandedElement === element_r52);
    } }
    function TableExpandableRowsExample_tr_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 21);
    } }
    var _c0 = function () { return ["expandedDetail"]; };
    /**
     * @title Table with expandable rows
     */
    var TableExpandableRowsExample = /** @class */ (function () {
        function TableExpandableRowsExample() {
            this.dataSource = ELEMENT_DATA$3;
            this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
        }
        TableExpandableRowsExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-expandable-rows-example',
                        styleUrls: ['table-expandable-rows-example.css'],
                        templateUrl: 'table-expandable-rows-example.html',
                        animations: [
                            animations.trigger('detailExpand', [
                                animations.state('collapsed', animations.style({ height: '0px', minHeight: '0' })),
                                animations.state('expanded', animations.style({ height: '*' })),
                                animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                            ]),
                        ],
                    },] },
        ];
        TableExpandableRowsExample.ɵfac = function TableExpandableRowsExample_Factory(t) { return new (t || TableExpandableRowsExample)(); };
        TableExpandableRowsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableExpandableRowsExample, selectors: [["table-expandable-rows-example"]], decls: 7, vars: 6, consts: [["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "example-element-detail"], [1, "example-element-diagram"], [1, "example-element-position"], [1, "example-element-symbol"], [1, "example-element-name"], [1, "example-element-weight"], [1, "example-element-description"], [1, "example-element-description-attribution"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function TableExpandableRowsExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_Template, 3, 1, "ng-container", 1);
                i0.ɵɵelementContainerStart(2, 2);
                i0.ɵɵtemplate(3, TableExpandableRowsExample_td_3_Template, 15, 7, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(4, TableExpandableRowsExample_tr_4_Template, 1, 0, "tr", 4);
                i0.ɵɵtemplate(5, TableExpandableRowsExample_tr_5_Template, 1, 1, "tr", 5);
                i0.ɵɵtemplate(6, TableExpandableRowsExample_tr_6_Template, 1, 0, "tr", 6);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.columnsToDisplay);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matHeaderRowDef", ctx.columnsToDisplay);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.columnsToDisplay);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(5, _c0));
            } }, directives: [i1$1.MatTable, i2.NgForOf, i1$1.MatColumnDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCellDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}"], data: { animation: [
                    animations.trigger('detailExpand', [
                        animations.state('collapsed', animations.style({ height: '0px', minHeight: '0' })),
                        animations.state('expanded', animations.style({ height: '*' })),
                        animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ] } });
        return TableExpandableRowsExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableExpandableRowsExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-expandable-rows-example',
                    styleUrls: ['table-expandable-rows-example.css'],
                    templateUrl: 'table-expandable-rows-example.html',
                    animations: [
                        animations.trigger('detailExpand', [
                            animations.state('collapsed', animations.style({ height: '0px', minHeight: '0' })),
                            animations.state('expanded', animations.style({ height: '*' })),
                            animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ],
                }]
        }], null, null); })();
    var ELEMENT_DATA$3 = [
        {
            position: 1,
            name: 'Hydrogen',
            weight: 1.0079,
            symbol: 'H',
            description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
        }, {
            position: 2,
            name: 'Helium',
            weight: 4.0026,
            symbol: 'He',
            description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
        }, {
            position: 3,
            name: 'Lithium',
            weight: 6.941,
            symbol: 'Li',
            description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
        }, {
            position: 4,
            name: 'Beryllium',
            weight: 9.0122,
            symbol: 'Be',
            description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
        }, {
            position: 5,
            name: 'Boron',
            weight: 10.811,
            symbol: 'B',
            description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
        }, {
            position: 6,
            name: 'Carbon',
            weight: 12.0107,
            symbol: 'C',
            description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
        }, {
            position: 7,
            name: 'Nitrogen',
            weight: 14.0067,
            symbol: 'N',
            description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
        }, {
            position: 8,
            name: 'Oxygen',
            weight: 15.9994,
            symbol: 'O',
            description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
        }, {
            position: 9,
            name: 'Fluorine',
            weight: 18.9984,
            symbol: 'F',
            description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
        }, {
            position: 10,
            name: 'Neon',
            weight: 20.1797,
            symbol: 'Ne',
            description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
        },
    ];

    function TableFilteringExample_th_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function TableFilteringExample_td_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r66 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r66.position, " ");
    } }
    function TableFilteringExample_th_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableFilteringExample_td_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r67 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r67.name, " ");
    } }
    function TableFilteringExample_th_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TableFilteringExample_td_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r68 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r68.weight, " ");
    } }
    function TableFilteringExample_th_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TableFilteringExample_td_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r69 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r69.symbol, " ");
    } }
    function TableFilteringExample_tr_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 12);
    } }
    function TableFilteringExample_tr_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 13);
    } }
    var ELEMENT_DATA$4 = [
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
    ];
    /**
     * @title Table with filtering
     */
    var TableFilteringExample = /** @class */ (function () {
        function TableFilteringExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new i1$1.MatTableDataSource(ELEMENT_DATA$4);
        }
        TableFilteringExample.prototype.applyFilter = function (filterValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
        };
        TableFilteringExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-filtering-example',
                        styleUrls: ['table-filtering-example.css'],
                        templateUrl: 'table-filtering-example.html',
                    },] },
        ];
        TableFilteringExample.ɵfac = function TableFilteringExample_Factory(t) { return new (t || TableFilteringExample)(); };
        TableFilteringExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableFilteringExample, selectors: [["table-filtering-example"]], decls: 17, vars: 3, consts: [["matInput", "", "placeholder", "Filter", 3, "keyup"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableFilteringExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelementStart(1, "input", 0);
                i0.ɵɵlistener("keyup", function TableFilteringExample_Template_input_keyup_1_listener($event) { return ctx.applyFilter($event.target.value); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "table", 1);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, TableFilteringExample_th_4_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(5, TableFilteringExample_td_5_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, TableFilteringExample_th_7_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(8, TableFilteringExample_td_8_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 6);
                i0.ɵɵtemplate(10, TableFilteringExample_th_10_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(11, TableFilteringExample_td_11_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 7);
                i0.ɵɵtemplate(13, TableFilteringExample_th_13_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(14, TableFilteringExample_td_14_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, TableFilteringExample_tr_15_Template, 1, 0, "tr", 8);
                i0.ɵɵtemplate(16, TableFilteringExample_tr_16_Template, 1, 0, "tr", 9);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$2.MatFormField, i2$4.MatInput, i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}"] });
        return TableFilteringExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableFilteringExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-filtering-example',
                    styleUrls: ['table-filtering-example.css'],
                    templateUrl: 'table-filtering-example.html',
                }]
        }], null, null); })();

    function TableFooterRowExample_th_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Item ");
        i0.ɵɵelementEnd();
    } }
    function TableFooterRowExample_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var transaction_r80 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", transaction_r80.item, " ");
    } }
    function TableFooterRowExample_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1, " Total ");
        i0.ɵɵelementEnd();
    } }
    function TableFooterRowExample_th_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Cost ");
        i0.ɵɵelementEnd();
    } }
    function TableFooterRowExample_td_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "currency");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var transaction_r81 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r81.cost), " ");
    } }
    function TableFooterRowExample_td_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "currency");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r76 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r76.getTotalCost()), " ");
    } }
    function TableFooterRowExample_tr_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 12);
    } }
    function TableFooterRowExample_tr_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 13);
    } }
    function TableFooterRowExample_tr_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 14);
    } }
    /**
     * @title Footer row table
     */
    var TableFooterRowExample = /** @class */ (function () {
        function TableFooterRowExample() {
            this.displayedColumns = ['item', 'cost'];
            this.transactions = [
                { item: 'Beach ball', cost: 4 },
                { item: 'Towel', cost: 5 },
                { item: 'Frisbee', cost: 2 },
                { item: 'Sunscreen', cost: 4 },
                { item: 'Cooler', cost: 25 },
                { item: 'Swim suit', cost: 15 },
            ];
        }
        /** Gets the total cost of all transactions. */
        TableFooterRowExample.prototype.getTotalCost = function () {
            return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
        };
        TableFooterRowExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-footer-row-example',
                        styleUrls: ['table-footer-row-example.css'],
                        templateUrl: 'table-footer-row-example.html',
                    },] },
        ];
        TableFooterRowExample.ɵfac = function TableFooterRowExample_Factory(t) { return new (t || TableFooterRowExample)(); };
        TableFooterRowExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableFooterRowExample, selectors: [["table-footer-row-example"]], decls: 12, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableFooterRowExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, TableFooterRowExample_th_2_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(3, TableFooterRowExample_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵtemplate(4, TableFooterRowExample_td_4_Template, 2, 0, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(5, 5);
                i0.ɵɵtemplate(6, TableFooterRowExample_th_6_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(7, TableFooterRowExample_td_7_Template, 3, 3, "td", 3);
                i0.ɵɵtemplate(8, TableFooterRowExample_td_8_Template, 3, 3, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(9, TableFooterRowExample_tr_9_Template, 1, 0, "tr", 6);
                i0.ɵɵtemplate(10, TableFooterRowExample_tr_10_Template, 1, 0, "tr", 7);
                i0.ɵɵtemplate(11, TableFooterRowExample_tr_11_Template, 1, 0, "tr", 8);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.transactions);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatFooterCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatFooterRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatFooterCell, i1$1.MatHeaderRow, i1$1.MatRow, i1$1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}"] });
        return TableFooterRowExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableFooterRowExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-footer-row-example',
                    styleUrls: ['table-footer-row-example.css'],
                    templateUrl: 'table-footer-row-example.html',
                }]
        }], null, null); })();

    function TableHttpExample_div_1_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-spinner");
    } }
    function TableHttpExample_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 17);
        i0.ɵɵtext(1, " GitHub's API rate limit has been reached. It will be reset in one minute. ");
        i0.ɵɵelementEnd();
    } }
    function TableHttpExample_div_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 14);
        i0.ɵɵtemplate(1, TableHttpExample_div_1_mat_spinner_1_Template, 1, 0, "mat-spinner", 15);
        i0.ɵɵtemplate(2, TableHttpExample_div_1_div_2_Template, 2, 0, "div", 16);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r83 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r83.isLoadingResults);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r83.isRateLimitReached);
    } }
    function TableHttpExample_th_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 18);
        i0.ɵɵtext(1, "#");
        i0.ɵɵelementEnd();
    } }
    function TableHttpExample_td_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 19);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r96 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(row_r96.number);
    } }
    function TableHttpExample_th_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 18);
        i0.ɵɵtext(1, "Title");
        i0.ɵɵelementEnd();
    } }
    function TableHttpExample_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 19);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r97 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(row_r97.title);
    } }
    function TableHttpExample_th_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 18);
        i0.ɵɵtext(1, "State");
        i0.ɵɵelementEnd();
    } }
    function TableHttpExample_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 19);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r98 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(row_r98.state);
    } }
    function TableHttpExample_th_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 20);
        i0.ɵɵtext(1, " Created ");
        i0.ɵɵelementEnd();
    } }
    function TableHttpExample_td_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 19);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "date");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r99 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, row_r99.created_at));
    } }
    function TableHttpExample_tr_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 21);
    } }
    function TableHttpExample_tr_17_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 22);
    } }
    /**
     * @title Table retrieving data through HTTP
     */
    var TableHttpExample = /** @class */ (function () {
        function TableHttpExample(_httpClient) {
            this._httpClient = _httpClient;
            this.displayedColumns = ['created', 'state', 'number', 'title'];
            this.data = [];
            this.resultsLength = 0;
            this.isLoadingResults = true;
            this.isRateLimitReached = false;
        }
        TableHttpExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
            // If the user changes the sort order, reset back to the first page.
            this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
            rxjs.merge(this.sort.sortChange, this.paginator.page)
                .pipe(operators.startWith({}), operators.switchMap(function () {
                _this.isLoadingResults = true;
                return _this.exampleDatabase.getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
            }), operators.map(function (data) {
                // Flip flag to show that loading has finished.
                _this.isLoadingResults = false;
                _this.isRateLimitReached = false;
                _this.resultsLength = data.total_count;
                return data.items;
            }), operators.catchError(function () {
                _this.isLoadingResults = false;
                // Catch if the GitHub API has reached its rate limit. Return empty data.
                _this.isRateLimitReached = true;
                return rxjs.of([]);
            })).subscribe(function (data) { return _this.data = data; });
        };
        TableHttpExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-http-example',
                        styleUrls: ['table-http-example.css'],
                        templateUrl: 'table-http-example.html',
                    },] },
        ];
        /** @nocollapse */
        TableHttpExample.ctorParameters = function () { return [
            { type: i1$3.HttpClient }
        ]; };
        TableHttpExample.propDecorators = {
            paginator: [{ type: i0.ViewChild, args: [i5.MatPaginator,] }],
            sort: [{ type: i0.ViewChild, args: [i4.MatSort,] }]
        };
        TableHttpExample.ɵfac = function TableHttpExample_Factory(t) { return new (t || TableHttpExample)(i0.ɵɵdirectiveInject(i1$3.HttpClient)); };
        TableHttpExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableHttpExample, selectors: [["table-http-example"]], viewQuery: function TableHttpExample_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵviewQuery(i5.MatPaginator, true);
                i0.ɵɵviewQuery(i4.MatSort, true);
            } if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
            } }, decls: 19, vars: 6, consts: [[1, "example-container", "mat-elevation-z8"], ["class", "example-loading-shade", 4, "ngIf"], [1, "example-table-container"], ["mat-table", "", "matSort", "", "matSortActive", "created", "matSortDisableClear", "", "matSortDirection", "desc", 1, "example-table", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "state"], ["matColumnDef", "created"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize"], [1, "example-loading-shade"], [4, "ngIf"], ["class", "example-rate-limit-reached", 4, "ngIf"], [1, "example-rate-limit-reached"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableHttpExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, TableHttpExample_div_1_Template, 3, 2, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "table", 3);
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, TableHttpExample_th_5_Template, 2, 0, "th", 5);
                i0.ɵɵtemplate(6, TableHttpExample_td_6_Template, 2, 1, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 7);
                i0.ɵɵtemplate(8, TableHttpExample_th_8_Template, 2, 0, "th", 5);
                i0.ɵɵtemplate(9, TableHttpExample_td_9_Template, 2, 1, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 8);
                i0.ɵɵtemplate(11, TableHttpExample_th_11_Template, 2, 0, "th", 5);
                i0.ɵɵtemplate(12, TableHttpExample_td_12_Template, 2, 1, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(13, 9);
                i0.ɵɵtemplate(14, TableHttpExample_th_14_Template, 2, 0, "th", 10);
                i0.ɵɵtemplate(15, TableHttpExample_td_15_Template, 3, 3, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(16, TableHttpExample_tr_16_Template, 1, 0, "tr", 11);
                i0.ɵɵtemplate(17, TableHttpExample_tr_17_Template, 1, 0, "tr", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(18, "mat-paginator", 13);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isLoadingResults || ctx.isRateLimitReached);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("dataSource", ctx.data);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("length", ctx.resultsLength)("pageSize", 30);
            } }, directives: [i2.NgIf, i1$1.MatTable, i4.MatSort, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i5.MatPaginator, i6.MatSpinner, i1$1.MatHeaderCell, i1$1.MatCell, i4.MatSortHeader, i1$1.MatHeaderRow, i1$1.MatRow], pipes: [i2.DatePipe], styles: [".example-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 200px;\n}\n\n.example-table-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached[_ngcontent-%COMP%] {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n\n\n.mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%] {\n  max-width: 64px;\n}\n\n.mat-column-created[_ngcontent-%COMP%] {\n  max-width: 124px;\n}"] });
        return TableHttpExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableHttpExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-http-example',
                    styleUrls: ['table-http-example.css'],
                    templateUrl: 'table-http-example.html',
                }]
        }], function () { return [{ type: i1$3.HttpClient }]; }, { paginator: [{
                type: i0.ViewChild,
                args: [i5.MatPaginator]
            }], sort: [{
                type: i0.ViewChild,
                args: [i4.MatSort]
            }] }); })();
    /** An example database that the data source uses to retrieve data for the table. */
    var ExampleHttpDatabase = /** @class */ (function () {
        function ExampleHttpDatabase(_httpClient) {
            this._httpClient = _httpClient;
        }
        ExampleHttpDatabase.prototype.getRepoIssues = function (sort, order, page) {
            var href = 'https://api.github.com/search/issues';
            var requestUrl = href + "?q=repo:angular/components&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
            return this._httpClient.get(requestUrl);
        };
        return ExampleHttpDatabase;
    }());

    function TableMultipleHeaderFooterExample_th_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, " Item ");
        i0.ɵɵelementEnd();
    } }
    function TableMultipleHeaderFooterExample_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 16);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var transaction_r115 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", transaction_r115.item, " ");
    } }
    function TableMultipleHeaderFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 17);
        i0.ɵɵtext(1, " Total ");
        i0.ɵɵelementEnd();
    } }
    function TableMultipleHeaderFooterExample_th_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, " Cost ");
        i0.ɵɵelementEnd();
    } }
    function TableMultipleHeaderFooterExample_td_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 16);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "currency");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var transaction_r116 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r116.cost), " ");
    } }
    function TableMultipleHeaderFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 17);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "currency");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r106 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r106.getTotalCost()), " ");
    } }
    function TableMultipleHeaderFooterExample_th_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, " Name of the item purchased ");
        i0.ɵɵelementEnd();
    } }
    function TableMultipleHeaderFooterExample_th_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, " Cost of the item in USD ");
        i0.ɵɵelementEnd();
    } }
    function TableMultipleHeaderFooterExample_td_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 18);
        i0.ɵɵtext(1, " Please note that the cost of items displayed are completely and totally made up. ");
        i0.ɵɵelementEnd();
    } }
    function TableMultipleHeaderFooterExample_tr_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 19);
    } }
    function TableMultipleHeaderFooterExample_tr_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 20);
    } }
    function TableMultipleHeaderFooterExample_tr_17_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 21);
    } }
    function TableMultipleHeaderFooterExample_tr_18_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 22);
    } }
    function TableMultipleHeaderFooterExample_tr_19_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 23);
    } }
    var _c0$1 = function () { return ["item-description", "cost-description"]; };
    var _c1 = function () { return ["disclaimer"]; };
    /**
     * @title Table with multiple header and footer rows
     */
    var TableMultipleHeaderFooterExample = /** @class */ (function () {
        function TableMultipleHeaderFooterExample() {
            this.displayedColumns = ['item', 'cost'];
            this.transactions = [
                { item: 'Beach ball', cost: 4 },
                { item: 'Towel', cost: 5 },
                { item: 'Frisbee', cost: 2 },
                { item: 'Sunscreen', cost: 4 },
                { item: 'Cooler', cost: 25 },
                { item: 'Swim suit', cost: 15 },
            ];
        }
        /** Gets the total cost of all transactions. */
        TableMultipleHeaderFooterExample.prototype.getTotalCost = function () {
            return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
        };
        TableMultipleHeaderFooterExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-multiple-header-footer-example',
                        styleUrls: ['table-multiple-header-footer-example.css'],
                        templateUrl: 'table-multiple-header-footer-example.html',
                    },] },
        ];
        TableMultipleHeaderFooterExample.ɵfac = function TableMultipleHeaderFooterExample_Factory(t) { return new (t || TableMultipleHeaderFooterExample)(); };
        TableMultipleHeaderFooterExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableMultipleHeaderFooterExample, selectors: [["table-multiple-header-footer-example"]], decls: 20, vars: 8, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["matColumnDef", "item-description"], ["matColumnDef", "cost-description"], ["matColumnDef", "disclaimer"], ["mat-footer-cell", "", "colspan", "2", 4, "matFooterCellDef"], ["mat-header-row", "", "class", "example-first-header-row", 4, "matHeaderRowDef"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "example-first-footer-row", 4, "matFooterRowDef"], ["mat-footer-row", "", "class", "example-second-footer-row", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-footer-cell", "", "colspan", "2"], ["mat-header-row", "", 1, "example-first-header-row"], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-row", ""], ["mat-footer-row", "", 1, "example-first-footer-row"], ["mat-footer-row", "", 1, "example-second-footer-row"]], template: function TableMultipleHeaderFooterExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, TableMultipleHeaderFooterExample_th_2_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(3, TableMultipleHeaderFooterExample_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵtemplate(4, TableMultipleHeaderFooterExample_td_4_Template, 2, 0, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(5, 5);
                i0.ɵɵtemplate(6, TableMultipleHeaderFooterExample_th_6_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(7, TableMultipleHeaderFooterExample_td_7_Template, 3, 3, "td", 3);
                i0.ɵɵtemplate(8, TableMultipleHeaderFooterExample_td_8_Template, 3, 3, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 6);
                i0.ɵɵtemplate(10, TableMultipleHeaderFooterExample_th_10_Template, 2, 0, "th", 2);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(11, 7);
                i0.ɵɵtemplate(12, TableMultipleHeaderFooterExample_th_12_Template, 2, 0, "th", 2);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(13, 8);
                i0.ɵɵtemplate(14, TableMultipleHeaderFooterExample_td_14_Template, 2, 0, "td", 9);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, TableMultipleHeaderFooterExample_tr_15_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(16, TableMultipleHeaderFooterExample_tr_16_Template, 1, 0, "tr", 11);
                i0.ɵɵtemplate(17, TableMultipleHeaderFooterExample_tr_17_Template, 1, 0, "tr", 12);
                i0.ɵɵtemplate(18, TableMultipleHeaderFooterExample_tr_18_Template, 1, 0, "tr", 13);
                i0.ɵɵtemplate(19, TableMultipleHeaderFooterExample_tr_19_Template, 1, 0, "tr", 14);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.transactions);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matHeaderRowDef", i0.ɵɵpureFunction0(6, _c0$1));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matFooterRowDef", i0.ɵɵpureFunction0(7, _c1));
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatFooterCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatFooterRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatFooterCell, i1$1.MatHeaderRow, i1$1.MatRow, i1$1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-first-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.example-second-header-row[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.example-first-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.example-second-footer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #900000;\n}"] });
        return TableMultipleHeaderFooterExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableMultipleHeaderFooterExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-multiple-header-footer-example',
                    styleUrls: ['table-multiple-header-footer-example.css'],
                    templateUrl: 'table-multiple-header-footer-example.html',
                }]
        }], null, null); })();

    function TableOverviewExample_th_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 13);
        i0.ɵɵtext(1, " ID ");
        i0.ɵɵelementEnd();
    } }
    function TableOverviewExample_td_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 14);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r128 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", row_r128.id, " ");
    } }
    function TableOverviewExample_th_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 13);
        i0.ɵɵtext(1, " Progress ");
        i0.ɵɵelementEnd();
    } }
    function TableOverviewExample_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 14);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r129 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", row_r129.progress, "% ");
    } }
    function TableOverviewExample_th_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 13);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableOverviewExample_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 14);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r130 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", row_r130.name, " ");
    } }
    function TableOverviewExample_th_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 13);
        i0.ɵɵtext(1, " Color ");
        i0.ɵɵelementEnd();
    } }
    function TableOverviewExample_td_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 14);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r131 = ctx.$implicit;
        i0.ɵɵstyleProp("color", row_r131.color);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", row_r131.color, " ");
    } }
    function TableOverviewExample_tr_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 15);
    } }
    function TableOverviewExample_tr_17_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 16);
    } }
    var _c0$2 = function () { return [5, 10, 25, 100]; };
    /** Constants used to fill up our data base. */
    var COLORS = [
        'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
        'aqua', 'blue', 'navy', 'black', 'gray'
    ];
    var NAMES = [
        'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
        'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
    ];
    /**
     * @title Data table with sorting, pagination, and filtering.
     */
    var TableOverviewExample = /** @class */ (function () {
        function TableOverviewExample() {
            this.displayedColumns = ['id', 'name', 'progress', 'color'];
            // Create 100 users
            var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
            // Assign the data to the data source for the table to render
            this.dataSource = new i1$1.MatTableDataSource(users);
        }
        TableOverviewExample.prototype.ngOnInit = function () {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        };
        TableOverviewExample.prototype.applyFilter = function (filterValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        };
        TableOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-overview-example',
                        styleUrls: ['table-overview-example.css'],
                        templateUrl: 'table-overview-example.html',
                    },] },
        ];
        /** @nocollapse */
        TableOverviewExample.ctorParameters = function () { return []; };
        TableOverviewExample.propDecorators = {
            paginator: [{ type: i0.ViewChild, args: [i5.MatPaginator, { static: true },] }],
            sort: [{ type: i0.ViewChild, args: [i4.MatSort, { static: true },] }]
        };
        TableOverviewExample.ɵfac = function TableOverviewExample_Factory(t) { return new (t || TableOverviewExample)(); };
        TableOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableOverviewExample, selectors: [["table-overview-example"]], viewQuery: function TableOverviewExample_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵstaticViewQuery(i5.MatPaginator, true);
                i0.ɵɵstaticViewQuery(i4.MatSort, true);
            } if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
            } }, decls: 19, vars: 5, consts: [["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "progress"], ["matColumnDef", "name"], ["matColumnDef", "color"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelementStart(1, "input", 0);
                i0.ɵɵlistener("keyup", function TableOverviewExample_Template_input_keyup_1_listener($event) { return ctx.applyFilter($event.target.value); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵelementStart(3, "table", 2);
                i0.ɵɵelementContainerStart(4, 3);
                i0.ɵɵtemplate(5, TableOverviewExample_th_5_Template, 2, 0, "th", 4);
                i0.ɵɵtemplate(6, TableOverviewExample_td_6_Template, 2, 1, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 6);
                i0.ɵɵtemplate(8, TableOverviewExample_th_8_Template, 2, 0, "th", 4);
                i0.ɵɵtemplate(9, TableOverviewExample_td_9_Template, 2, 1, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 7);
                i0.ɵɵtemplate(11, TableOverviewExample_th_11_Template, 2, 0, "th", 4);
                i0.ɵɵtemplate(12, TableOverviewExample_td_12_Template, 2, 1, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(13, 8);
                i0.ɵɵtemplate(14, TableOverviewExample_th_14_Template, 2, 0, "th", 4);
                i0.ɵɵtemplate(15, TableOverviewExample_td_15_Template, 2, 2, "td", 9);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(16, TableOverviewExample_tr_16_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(17, TableOverviewExample_tr_17_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(18, "mat-paginator", 12);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("pageSizeOptions", i0.ɵɵpureFunction0(4, _c0$2));
            } }, directives: [i1$2.MatFormField, i2$4.MatInput, i1$1.MatTable, i4.MatSort, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i5.MatPaginator, i1$1.MatHeaderCell, i4.MatSortHeader, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
        return TableOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-overview-example',
                    styleUrls: ['table-overview-example.css'],
                    templateUrl: 'table-overview-example.html',
                }]
        }], function () { return []; }, { paginator: [{
                type: i0.ViewChild,
                args: [i5.MatPaginator, { static: true }]
            }], sort: [{
                type: i0.ViewChild,
                args: [i4.MatSort, { static: true }]
            }] }); })();
    /** Builds and returns a new User. */
    function createNewUser(id) {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: id.toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    }

    function TablePaginationExample_th_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 11);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function TablePaginationExample_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r143 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r143.position, " ");
    } }
    function TablePaginationExample_th_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 11);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TablePaginationExample_td_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r144 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r144.name, " ");
    } }
    function TablePaginationExample_th_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 11);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TablePaginationExample_td_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r145 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r145.weight, " ");
    } }
    function TablePaginationExample_th_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 11);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TablePaginationExample_td_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r146 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r146.symbol, " ");
    } }
    function TablePaginationExample_tr_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 13);
    } }
    function TablePaginationExample_tr_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 14);
    } }
    var _c0$3 = function () { return [5, 10, 20]; };
    /**
     * @title Table with pagination
     */
    var TablePaginationExample = /** @class */ (function () {
        function TablePaginationExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new i1$1.MatTableDataSource(ELEMENT_DATA$5);
        }
        TablePaginationExample.prototype.ngOnInit = function () {
            this.dataSource.paginator = this.paginator;
        };
        TablePaginationExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-pagination-example',
                        styleUrls: ['table-pagination-example.css'],
                        templateUrl: 'table-pagination-example.html',
                    },] },
        ];
        TablePaginationExample.propDecorators = {
            paginator: [{ type: i0.ViewChild, args: [i5.MatPaginator, { static: true },] }]
        };
        TablePaginationExample.ɵfac = function TablePaginationExample_Factory(t) { return new (t || TablePaginationExample)(); };
        TablePaginationExample.ɵcmp = i0.ɵɵdefineComponent({ type: TablePaginationExample, selectors: [["table-pagination-example"]], viewQuery: function TablePaginationExample_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵstaticViewQuery(i5.MatPaginator, true);
            } if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            } }, decls: 17, vars: 5, consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TablePaginationExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "table", 1);
                i0.ɵɵelementContainerStart(2, 2);
                i0.ɵɵtemplate(3, TablePaginationExample_th_3_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(4, TablePaginationExample_td_4_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(5, 5);
                i0.ɵɵtemplate(6, TablePaginationExample_th_6_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(7, TablePaginationExample_td_7_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(8, 6);
                i0.ɵɵtemplate(9, TablePaginationExample_th_9_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(10, TablePaginationExample_td_10_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(11, 7);
                i0.ɵɵtemplate(12, TablePaginationExample_th_12_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(13, TablePaginationExample_td_13_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(14, TablePaginationExample_tr_14_Template, 1, 0, "tr", 8);
                i0.ɵɵtemplate(15, TablePaginationExample_tr_15_Template, 1, 0, "tr", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(16, "mat-paginator", 10);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("pageSizeOptions", i0.ɵɵpureFunction0(4, _c0$3));
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i5.MatPaginator, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return TablePaginationExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TablePaginationExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-pagination-example',
                    styleUrls: ['table-pagination-example.css'],
                    templateUrl: 'table-pagination-example.html',
                }]
        }], null, { paginator: [{
                type: i0.ViewChild,
                args: [i5.MatPaginator, { static: true }]
            }] }); })();
    var ELEMENT_DATA$5 = [
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

    function TableRowContextExample_th_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 12);
        i0.ɵɵtext(1, " $implicit ");
        i0.ɵɵelementEnd();
    } }
    function TableRowContextExample_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var data_r164 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", data_r164, " ");
    } }
    function TableRowContextExample_th_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 12);
        i0.ɵɵtext(1, " index ");
        i0.ɵɵelementEnd();
    } }
    function TableRowContextExample_td_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var index_r165 = ctx.index;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", index_r165, " ");
    } }
    function TableRowContextExample_th_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 12);
        i0.ɵɵtext(1, " count ");
        i0.ɵɵelementEnd();
    } }
    function TableRowContextExample_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var count_r166 = ctx.count;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", count_r166, " ");
    } }
    function TableRowContextExample_th_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 12);
        i0.ɵɵtext(1, " first ");
        i0.ɵɵelementEnd();
    } }
    function TableRowContextExample_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var first_r167 = ctx.first;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", first_r167, " ");
    } }
    function TableRowContextExample_th_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 12);
        i0.ɵɵtext(1, " last ");
        i0.ɵɵelementEnd();
    } }
    function TableRowContextExample_td_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var last_r168 = ctx.last;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", last_r168, " ");
    } }
    function TableRowContextExample_th_17_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 12);
        i0.ɵɵtext(1, " even ");
        i0.ɵɵelementEnd();
    } }
    function TableRowContextExample_td_18_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var even_r169 = ctx.even;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", even_r169, " ");
    } }
    function TableRowContextExample_th_20_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 12);
        i0.ɵɵtext(1, " odd ");
        i0.ɵɵelementEnd();
    } }
    function TableRowContextExample_td_21_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var odd_r170 = ctx.odd;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", odd_r170, " ");
    } }
    function TableRowContextExample_tr_22_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 14);
    } }
    function TableRowContextExample_tr_23_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 15);
    } }
    /**
     * @title Table showing each row context properties.
     */
    var TableRowContextExample = /** @class */ (function () {
        function TableRowContextExample() {
            this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
            this.data = ['one', 'two', 'three', 'four', 'five'];
        }
        TableRowContextExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-row-context-example',
                        styleUrls: ['table-row-context-example.css'],
                        templateUrl: 'table-row-context-example.html',
                    },] },
        ];
        TableRowContextExample.ɵfac = function TableRowContextExample_Factory(t) { return new (t || TableRowContextExample)(); };
        TableRowContextExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableRowContextExample, selectors: [["table-row-context-example"]], decls: 24, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "$implicit"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "index"], ["matColumnDef", "count"], ["matColumnDef", "first"], ["matColumnDef", "last"], ["matColumnDef", "even"], ["matColumnDef", "odd"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableRowContextExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, TableRowContextExample_th_2_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(3, TableRowContextExample_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, TableRowContextExample_th_5_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(6, TableRowContextExample_td_6_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 5);
                i0.ɵɵtemplate(8, TableRowContextExample_th_8_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(9, TableRowContextExample_td_9_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 6);
                i0.ɵɵtemplate(11, TableRowContextExample_th_11_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(12, TableRowContextExample_td_12_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(13, 7);
                i0.ɵɵtemplate(14, TableRowContextExample_th_14_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(15, TableRowContextExample_td_15_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(16, 8);
                i0.ɵɵtemplate(17, TableRowContextExample_th_17_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(18, TableRowContextExample_td_18_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(19, 9);
                i0.ɵɵtemplate(20, TableRowContextExample_th_20_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(21, TableRowContextExample_td_21_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(22, TableRowContextExample_tr_22_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(23, TableRowContextExample_tr_23_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.data);
                i0.ɵɵadvance(22);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return TableRowContextExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableRowContextExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-row-context-example',
                    styleUrls: ['table-row-context-example.css'],
                    templateUrl: 'table-row-context-example.html',
                }]
        }], null, null); })();

    function TableSelectionExample_th_2_Template(rf, ctx) { if (rf & 1) {
        var _r185 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵelementStart(1, "mat-checkbox", 11);
        i0.ɵɵlistener("change", function TableSelectionExample_th_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r185); var ctx_r184 = i0.ɵɵnextContext(); return $event ? ctx_r184.masterToggle() : null; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r172 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx_r172.selection.hasValue() && ctx_r172.isAllSelected())("indeterminate", ctx_r172.selection.hasValue() && !ctx_r172.isAllSelected())("aria-label", ctx_r172.checkboxLabel());
    } }
    function TableSelectionExample_td_3_Template(rf, ctx) { if (rf & 1) {
        var _r188 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵelementStart(1, "mat-checkbox", 13);
        i0.ɵɵlistener("click", function TableSelectionExample_td_3_Template_mat_checkbox_click_1_listener($event) { i0.ɵɵrestoreView(_r188); return $event.stopPropagation(); });
        i0.ɵɵlistener("change", function TableSelectionExample_td_3_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r188); var row_r186 = ctx.$implicit; var ctx_r189 = i0.ɵɵnextContext(); return $event ? ctx_r189.selection.toggle(row_r186) : null; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r186 = ctx.$implicit;
        var ctx_r173 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx_r173.selection.isSelected(row_r186))("aria-label", ctx_r173.checkboxLabel(row_r186));
    } }
    function TableSelectionExample_th_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function TableSelectionExample_td_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r190 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r190.position, " ");
    } }
    function TableSelectionExample_th_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableSelectionExample_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r191 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r191.name, " ");
    } }
    function TableSelectionExample_th_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TableSelectionExample_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r192 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r192.weight, " ");
    } }
    function TableSelectionExample_th_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TableSelectionExample_td_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r193 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r193.symbol, " ");
    } }
    function TableSelectionExample_tr_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 14);
    } }
    function TableSelectionExample_tr_17_Template(rf, ctx) { if (rf & 1) {
        var _r196 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "tr", 15);
        i0.ɵɵlistener("click", function TableSelectionExample_tr_17_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r196); var row_r194 = ctx.$implicit; var ctx_r195 = i0.ɵɵnextContext(); return ctx_r195.selection.toggle(row_r194); });
        i0.ɵɵelementEnd();
    } }
    var ELEMENT_DATA$6 = [
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
    ];
    /**
     * @title Table with selection
     */
    var TableSelectionExample = /** @class */ (function () {
        function TableSelectionExample() {
            this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
            this.dataSource = new i1$1.MatTableDataSource(ELEMENT_DATA$6);
            this.selection = new collections.SelectionModel(true, []);
        }
        /** Whether the number of selected elements matches the total number of rows. */
        TableSelectionExample.prototype.isAllSelected = function () {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.data.length;
            return numSelected === numRows;
        };
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        TableSelectionExample.prototype.masterToggle = function () {
            var _this = this;
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        };
        /** The label for the checkbox on the passed row */
        TableSelectionExample.prototype.checkboxLabel = function (row) {
            if (!row) {
                return (this.isAllSelected() ? 'select' : 'deselect') + " all";
            }
            return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
        };
        TableSelectionExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-selection-example',
                        styleUrls: ['table-selection-example.css'],
                        templateUrl: 'table-selection-example.html',
                    },] },
        ];
        TableSelectionExample.ɵfac = function TableSelectionExample_Factory(t) { return new (t || TableSelectionExample)(); };
        TableSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableSelectionExample, selectors: [["table-selection-example"]], decls: 18, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function TableSelectionExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, TableSelectionExample_th_2_Template, 2, 3, "th", 2);
                i0.ɵɵtemplate(3, TableSelectionExample_td_3_Template, 2, 2, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, TableSelectionExample_th_5_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(6, TableSelectionExample_td_6_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 5);
                i0.ɵɵtemplate(8, TableSelectionExample_th_8_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(9, TableSelectionExample_td_9_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 6);
                i0.ɵɵtemplate(11, TableSelectionExample_th_11_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(12, TableSelectionExample_td_12_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(13, 7);
                i0.ɵɵtemplate(14, TableSelectionExample_th_14_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(15, TableSelectionExample_td_15_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(16, TableSelectionExample_tr_16_Template, 1, 0, "tr", 8);
                i0.ɵɵtemplate(17, TableSelectionExample_tr_17_Template, 1, 0, "tr", 9);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCell, i2$2.MatCheckbox, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return TableSelectionExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableSelectionExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-selection-example',
                    styleUrls: ['table-selection-example.css'],
                    templateUrl: 'table-selection-example.html',
                }]
        }], null, null); })();

    function TableSortingExample_th_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function TableSortingExample_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r207 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r207.position, " ");
    } }
    function TableSortingExample_th_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableSortingExample_td_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r208 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r208.name, " ");
    } }
    function TableSortingExample_th_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TableSortingExample_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r209 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r209.weight, " ");
    } }
    function TableSortingExample_th_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TableSortingExample_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r210 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r210.symbol, " ");
    } }
    function TableSortingExample_tr_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 11);
    } }
    function TableSortingExample_tr_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 12);
    } }
    var ELEMENT_DATA$7 = [
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
    ];
    /**
     * @title Table with sorting
     */
    var TableSortingExample = /** @class */ (function () {
        function TableSortingExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new i1$1.MatTableDataSource(ELEMENT_DATA$7);
        }
        TableSortingExample.prototype.ngOnInit = function () {
            this.dataSource.sort = this.sort;
        };
        TableSortingExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-sorting-example',
                        styleUrls: ['table-sorting-example.css'],
                        templateUrl: 'table-sorting-example.html',
                    },] },
        ];
        TableSortingExample.propDecorators = {
            sort: [{ type: i0.ViewChild, args: [i4.MatSort, { static: true },] }]
        };
        TableSortingExample.ɵfac = function TableSortingExample_Factory(t) { return new (t || TableSortingExample)(); };
        TableSortingExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableSortingExample, selectors: [["table-sorting-example"]], viewQuery: function TableSortingExample_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵstaticViewQuery(i4.MatSort, true);
            } if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
            } }, decls: 15, vars: 3, consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableSortingExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, TableSortingExample_th_2_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(3, TableSortingExample_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, TableSortingExample_th_5_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(6, TableSortingExample_td_6_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 5);
                i0.ɵɵtemplate(8, TableSortingExample_th_8_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(9, TableSortingExample_td_9_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 6);
                i0.ɵɵtemplate(11, TableSortingExample_th_11_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(12, TableSortingExample_td_12_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, TableSortingExample_tr_13_Template, 1, 0, "tr", 7);
                i0.ɵɵtemplate(14, TableSortingExample_tr_14_Template, 1, 0, "tr", 8);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i4.MatSort, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCell, i4.MatSortHeader, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}"] });
        return TableSortingExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableSortingExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-sorting-example',
                    styleUrls: ['table-sorting-example.css'],
                    templateUrl: 'table-sorting-example.html',
                }]
        }], null, { sort: [{
                type: i0.ViewChild,
                args: [i4.MatSort, { static: true }]
            }] }); })();

    function TableStickyColumnsExample_th_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 11);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyColumnsExample_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r224 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r224.name, " ");
    } }
    function TableStickyColumnsExample_th_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 11);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyColumnsExample_td_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r225 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r225.position, " ");
    } }
    function TableStickyColumnsExample_th_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 11);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyColumnsExample_td_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r226 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r226.weight, " ");
    } }
    function TableStickyColumnsExample_th_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 11);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyColumnsExample_td_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r227 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r227.symbol, " ");
    } }
    function TableStickyColumnsExample_th_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "th", 11);
    } }
    function TableStickyColumnsExample_td_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "more_vert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function TableStickyColumnsExample_tr_17_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 13);
    } }
    function TableStickyColumnsExample_tr_18_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 14);
    } }
    /**
     * @title Table with sticky columns
     */
    var TableStickyColumnsExample = /** @class */ (function () {
        function TableStickyColumnsExample() {
            this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
            this.dataSource = ELEMENT_DATA$8;
        }
        TableStickyColumnsExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-sticky-columns-example',
                        styleUrls: ['table-sticky-columns-example.css'],
                        templateUrl: 'table-sticky-columns-example.html',
                    },] },
        ];
        TableStickyColumnsExample.ɵfac = function TableStickyColumnsExample_Factory(t) { return new (t || TableStickyColumnsExample)(); };
        TableStickyColumnsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableStickyColumnsExample, selectors: [["table-sticky-columns-example"]], decls: 19, vars: 3, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["matColumnDef", "star", "stickyEnd", ""], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableStickyColumnsExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "table", 1);
                i0.ɵɵelementContainerStart(2, 2);
                i0.ɵɵtemplate(3, TableStickyColumnsExample_th_3_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(4, TableStickyColumnsExample_td_4_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(5, 5);
                i0.ɵɵtemplate(6, TableStickyColumnsExample_th_6_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(7, TableStickyColumnsExample_td_7_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(8, 6);
                i0.ɵɵtemplate(9, TableStickyColumnsExample_th_9_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(10, TableStickyColumnsExample_td_10_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(11, 7);
                i0.ɵɵtemplate(12, TableStickyColumnsExample_th_12_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(13, TableStickyColumnsExample_td_13_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(14, 8);
                i0.ɵɵtemplate(15, TableStickyColumnsExample_th_15_Template, 1, 0, "th", 3);
                i0.ɵɵtemplate(16, TableStickyColumnsExample_td_16_Template, 3, 0, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(17, TableStickyColumnsExample_tr_17_Template, 1, 0, "tr", 9);
                i0.ɵɵtemplate(18, TableStickyColumnsExample_tr_18_Template, 1, 0, "tr", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i2$3.MatIcon, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 550px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 800px;\n}\n\ntd.mat-column-star[_ngcontent-%COMP%] {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position[_ngcontent-%COMP%], td.mat-column-position[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%]:last-child {\n  border-left: 1px solid #e0e0e0;\n}"] });
        return TableStickyColumnsExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableStickyColumnsExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-sticky-columns-example',
                    styleUrls: ['table-sticky-columns-example.css'],
                    templateUrl: 'table-sticky-columns-example.html',
                }]
        }], null, null); })();
    var ELEMENT_DATA$8 = [
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
    ];

    function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Position ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r255 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r255.position, " ");
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-footer-cell");
        i0.ɵɵtext(1, " Position Footer ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r256 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r256.name, " ");
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-footer-cell");
        i0.ɵɵtext(1, " Name Footer ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r257 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r257.weight, " ");
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-footer-cell");
        i0.ɵɵtext(1, " Weight Footer ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r258 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r258.symbol, " ");
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-footer-cell");
        i0.ɵɵtext(1, " Symbol Footer ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Filler header cell ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1, " Filler data cell ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_20_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-footer-cell");
        i0.ɵɵtext(1, " Filler footer cell ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_header_row_21_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-header-row");
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_header_row_22_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-header-row");
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_row_23_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-row");
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_footer_row_24_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-footer-row");
    } }
    function TableStickyComplexFlexExample_mat_table_34_mat_footer_row_25_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-footer-row");
    } }
    function TableStickyComplexFlexExample_mat_table_34_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-table", 15);
        i0.ɵɵelementContainerStart(1, 16);
        i0.ɵɵtemplate(2, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 17);
        i0.ɵɵtemplate(3, TableStickyComplexFlexExample_mat_table_34_mat_cell_3_Template, 2, 1, "mat-cell", 18);
        i0.ɵɵtemplate(4, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_4_Template, 2, 0, "mat-footer-cell", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 20);
        i0.ɵɵtemplate(6, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 17);
        i0.ɵɵtemplate(7, TableStickyComplexFlexExample_mat_table_34_mat_cell_7_Template, 2, 1, "mat-cell", 18);
        i0.ɵɵtemplate(8, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_8_Template, 2, 0, "mat-footer-cell", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 21);
        i0.ɵɵtemplate(10, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 17);
        i0.ɵɵtemplate(11, TableStickyComplexFlexExample_mat_table_34_mat_cell_11_Template, 2, 1, "mat-cell", 18);
        i0.ɵɵtemplate(12, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_12_Template, 2, 0, "mat-footer-cell", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 22);
        i0.ɵɵtemplate(14, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 17);
        i0.ɵɵtemplate(15, TableStickyComplexFlexExample_mat_table_34_mat_cell_15_Template, 2, 1, "mat-cell", 18);
        i0.ɵɵtemplate(16, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_16_Template, 2, 0, "mat-footer-cell", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(17, 23);
        i0.ɵɵtemplate(18, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 17);
        i0.ɵɵtemplate(19, TableStickyComplexFlexExample_mat_table_34_mat_cell_19_Template, 2, 0, "mat-cell", 18);
        i0.ɵɵtemplate(20, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_20_Template, 2, 0, "mat-footer-cell", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(21, TableStickyComplexFlexExample_mat_table_34_mat_header_row_21_Template, 1, 0, "mat-header-row", 24);
        i0.ɵɵtemplate(22, TableStickyComplexFlexExample_mat_table_34_mat_header_row_22_Template, 1, 0, "mat-header-row", 24);
        i0.ɵɵtemplate(23, TableStickyComplexFlexExample_mat_table_34_mat_row_23_Template, 1, 0, "mat-row", 25);
        i0.ɵɵtemplate(24, TableStickyComplexFlexExample_mat_table_34_mat_footer_row_24_Template, 1, 0, "mat-footer-row", 26);
        i0.ɵɵtemplate(25, TableStickyComplexFlexExample_mat_table_34_mat_footer_row_25_Template, 1, 0, "mat-footer-row", 26);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r233 = i0.ɵɵnextContext();
        var _r232 = i0.ɵɵreference(24);
        var _r230 = i0.ɵɵreference(8);
        var _r231 = i0.ɵɵreference(16);
        i0.ɵɵproperty("dataSource", ctx_r233.dataSource);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("sticky", ctx_r233.isSticky(_r232, "position"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("sticky", ctx_r233.isSticky(_r232, "name"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("stickyEnd", ctx_r233.isSticky(_r232, "weight"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("stickyEnd", ctx_r233.isSticky(_r232, "symbol"));
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("matHeaderRowDef", ctx_r233.displayedColumns)("matHeaderRowDefSticky", ctx_r233.isSticky(_r230, "header-1"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", ctx_r233.displayedColumns)("matHeaderRowDefSticky", ctx_r233.isSticky(_r230, "header-2"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx_r233.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx_r233.displayedColumns)("matFooterRowDefSticky", ctx_r233.isSticky(_r231, "footer-1"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx_r233.displayedColumns)("matFooterRowDefSticky", ctx_r233.isSticky(_r231, "footer-2"));
    } }
    var _c0$4 = function () { return ["header-1"]; };
    var _c1$1 = function () { return ["footer-1"]; };
    var _c2 = function () { return ["position", "symbol"]; };
    /**
     * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
     */
    var TableStickyComplexFlexExample = /** @class */ (function () {
        function TableStickyComplexFlexExample() {
            this.displayedColumns = [];
            this.dataSource = ELEMENT_DATA$9;
            this.tables = [0];
            this.displayedColumns.length = 24;
            this.displayedColumns.fill('filler');
            // The first two columns should be position and name; the last two columns: weight, symbol
            this.displayedColumns[0] = 'position';
            this.displayedColumns[1] = 'name';
            this.displayedColumns[22] = 'weight';
            this.displayedColumns[23] = 'symbol';
        }
        /** Whether the button toggle group contains the id as an active value. */
        TableStickyComplexFlexExample.prototype.isSticky = function (buttonToggleGroup, id) {
            return (buttonToggleGroup.value || []).indexOf(id) !== -1;
        };
        TableStickyComplexFlexExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-sticky-complex-flex-example',
                        styleUrls: ['table-sticky-complex-flex-example.css'],
                        templateUrl: 'table-sticky-complex-flex-example.html',
                    },] },
        ];
        /** @nocollapse */
        TableStickyComplexFlexExample.ctorParameters = function () { return []; };
        TableStickyComplexFlexExample.ɵfac = function TableStickyComplexFlexExample_Factory(t) { return new (t || TableStickyComplexFlexExample)(); };
        TableStickyComplexFlexExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableStickyComplexFlexExample, selectors: [["table-sticky-complex-flex-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["multiple", "", 1, "example-sticky-toggle-group", 3, "value"], ["stickyHeaders", "matButtonToggleGroup"], ["value", "header-1"], ["value", "header-2"], ["stickyFooters", "matButtonToggleGroup"], ["value", "footer-1"], ["value", "footer-2"], ["stickyColumns", "matButtonToggleGroup"], ["value", "position"], ["value", "name"], ["value", "weight"], ["value", "symbol"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource", 4, "ngFor", "ngForOf"], [3, "dataSource"], ["matColumnDef", "position", 3, "sticky"], [4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matFooterCellDef"], ["matColumnDef", "name", 3, "sticky"], ["matColumnDef", "weight", 3, "stickyEnd"], ["matColumnDef", "symbol", 3, "stickyEnd"], ["matColumnDef", "filler"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [4, "matRowDef", "matRowDefColumns"], [4, "matFooterRowDef", "matFooterRowDefSticky"]], template: function TableStickyComplexFlexExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "button", 0);
                i0.ɵɵlistener("click", function TableStickyComplexFlexExample_Template_button_click_1_listener($event) { return ctx.tables.push(ctx.tables.length); });
                i0.ɵɵtext(2, "Add table");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "button", 0);
                i0.ɵɵlistener("click", function TableStickyComplexFlexExample_Template_button_click_3_listener($event) { return ctx.tables.pop(); });
                i0.ɵɵtext(4, "Remove table");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div");
                i0.ɵɵtext(6, " Sticky Headers: ");
                i0.ɵɵelementStart(7, "mat-button-toggle-group", 1, 2);
                i0.ɵɵelementStart(9, "mat-button-toggle", 3);
                i0.ɵɵtext(10, " Row 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-button-toggle", 4);
                i0.ɵɵtext(12, " Row 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div");
                i0.ɵɵtext(14, " Sticky Footers: ");
                i0.ɵɵelementStart(15, "mat-button-toggle-group", 1, 5);
                i0.ɵɵelementStart(17, "mat-button-toggle", 6);
                i0.ɵɵtext(18, " Row 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "mat-button-toggle", 7);
                i0.ɵɵtext(20, " Row 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "div");
                i0.ɵɵtext(22, " Sticky Columns: ");
                i0.ɵɵelementStart(23, "mat-button-toggle-group", 1, 8);
                i0.ɵɵelementStart(25, "mat-button-toggle", 9);
                i0.ɵɵtext(26, " Position ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "mat-button-toggle", 10);
                i0.ɵɵtext(28, " Name ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "mat-button-toggle", 11);
                i0.ɵɵtext(30, " Weight ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "mat-button-toggle", 12);
                i0.ɵɵtext(32, " Symbol ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "div", 13);
                i0.ɵɵtemplate(34, TableStickyComplexFlexExample_mat_table_34_Template, 26, 14, "mat-table", 14);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("value", i0.ɵɵpureFunction0(4, _c0$4));
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("value", i0.ɵɵpureFunction0(5, _c1$1));
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("value", i0.ɵɵpureFunction0(6, _c2));
                i0.ɵɵadvance(11);
                i0.ɵɵproperty("ngForOf", ctx.tables);
            } }, directives: [i1.MatButton, i2$1.MatButtonToggleGroup, i2$1.MatButtonToggle, i2.NgForOf, i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatFooterCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatFooterRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatFooterCell, i1$1.MatHeaderRow, i1$1.MatRow, i1$1.MatFooterRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-column-filler[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-header-row[_ngcontent-%COMP%], .mat-footer-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%] {\n  min-width: 1920px; \n}"] });
        return TableStickyComplexFlexExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableStickyComplexFlexExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-sticky-complex-flex-example',
                    styleUrls: ['table-sticky-complex-flex-example.css'],
                    templateUrl: 'table-sticky-complex-flex-example.html',
                }]
        }], function () { return []; }, null); })();
    var ELEMENT_DATA$9 = [
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
    ];

    function TableStickyComplexExample_table_34_th_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 27);
        i0.ɵɵtext(1, " Position ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 28);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r286 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r286.position, " ");
    } }
    function TableStickyComplexExample_table_34_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 29);
        i0.ɵɵtext(1, " Position Footer ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_th_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 27);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_td_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 28);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r287 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r287.name, " ");
    } }
    function TableStickyComplexExample_table_34_td_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 29);
        i0.ɵɵtext(1, " Name Footer ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_th_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 27);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_td_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 28);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r288 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r288.weight, " ");
    } }
    function TableStickyComplexExample_table_34_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 29);
        i0.ɵɵtext(1, " Weight Footer ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_th_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 27);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_td_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 28);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r289 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r289.symbol, " ");
    } }
    function TableStickyComplexExample_table_34_td_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 29);
        i0.ɵɵtext(1, " Symbol Footer ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_th_18_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 27);
        i0.ɵɵtext(1, " Filler header cell ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_td_19_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 28);
        i0.ɵɵtext(1, " Filler data cell ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_td_20_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 29);
        i0.ɵɵtext(1, " Filler footer cell ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyComplexExample_table_34_tr_21_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 30);
    } }
    function TableStickyComplexExample_table_34_tr_22_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 30);
    } }
    function TableStickyComplexExample_table_34_tr_23_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 31);
    } }
    function TableStickyComplexExample_table_34_tr_24_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 32);
    } }
    function TableStickyComplexExample_table_34_tr_25_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 32);
    } }
    function TableStickyComplexExample_table_34_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 15);
        i0.ɵɵelementContainerStart(1, 16);
        i0.ɵɵtemplate(2, TableStickyComplexExample_table_34_th_2_Template, 2, 0, "th", 17);
        i0.ɵɵtemplate(3, TableStickyComplexExample_table_34_td_3_Template, 2, 1, "td", 18);
        i0.ɵɵtemplate(4, TableStickyComplexExample_table_34_td_4_Template, 2, 0, "td", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 20);
        i0.ɵɵtemplate(6, TableStickyComplexExample_table_34_th_6_Template, 2, 0, "th", 17);
        i0.ɵɵtemplate(7, TableStickyComplexExample_table_34_td_7_Template, 2, 1, "td", 18);
        i0.ɵɵtemplate(8, TableStickyComplexExample_table_34_td_8_Template, 2, 0, "td", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 21);
        i0.ɵɵtemplate(10, TableStickyComplexExample_table_34_th_10_Template, 2, 0, "th", 17);
        i0.ɵɵtemplate(11, TableStickyComplexExample_table_34_td_11_Template, 2, 1, "td", 18);
        i0.ɵɵtemplate(12, TableStickyComplexExample_table_34_td_12_Template, 2, 0, "td", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 22);
        i0.ɵɵtemplate(14, TableStickyComplexExample_table_34_th_14_Template, 2, 0, "th", 17);
        i0.ɵɵtemplate(15, TableStickyComplexExample_table_34_td_15_Template, 2, 1, "td", 18);
        i0.ɵɵtemplate(16, TableStickyComplexExample_table_34_td_16_Template, 2, 0, "td", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(17, 23);
        i0.ɵɵtemplate(18, TableStickyComplexExample_table_34_th_18_Template, 2, 0, "th", 17);
        i0.ɵɵtemplate(19, TableStickyComplexExample_table_34_td_19_Template, 2, 0, "td", 18);
        i0.ɵɵtemplate(20, TableStickyComplexExample_table_34_td_20_Template, 2, 0, "td", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(21, TableStickyComplexExample_table_34_tr_21_Template, 1, 0, "tr", 24);
        i0.ɵɵtemplate(22, TableStickyComplexExample_table_34_tr_22_Template, 1, 0, "tr", 24);
        i0.ɵɵtemplate(23, TableStickyComplexExample_table_34_tr_23_Template, 1, 0, "tr", 25);
        i0.ɵɵtemplate(24, TableStickyComplexExample_table_34_tr_24_Template, 1, 0, "tr", 26);
        i0.ɵɵtemplate(25, TableStickyComplexExample_table_34_tr_25_Template, 1, 0, "tr", 26);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r264 = i0.ɵɵnextContext();
        var _r263 = i0.ɵɵreference(24);
        var _r261 = i0.ɵɵreference(8);
        var _r262 = i0.ɵɵreference(16);
        i0.ɵɵproperty("dataSource", ctx_r264.dataSource);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("sticky", ctx_r264.isSticky(_r263, "position"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("sticky", ctx_r264.isSticky(_r263, "name"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("stickyEnd", ctx_r264.isSticky(_r263, "weight"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("stickyEnd", ctx_r264.isSticky(_r263, "symbol"));
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("matHeaderRowDef", ctx_r264.displayedColumns)("matHeaderRowDefSticky", ctx_r264.isSticky(_r261, "header-1"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", ctx_r264.displayedColumns)("matHeaderRowDefSticky", ctx_r264.isSticky(_r261, "header-2"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx_r264.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx_r264.displayedColumns)("matFooterRowDefSticky", ctx_r264.isSticky(_r262, "footer-1"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx_r264.displayedColumns)("matFooterRowDefSticky", ctx_r264.isSticky(_r262, "footer-2"));
    } }
    var _c0$5 = function () { return ["header-1"]; };
    var _c1$2 = function () { return ["footer-1"]; };
    var _c2$1 = function () { return ["position", "symbol"]; };
    /**
     * @title Tables with toggle-able sticky headers, footers, and columns
     */
    var TableStickyComplexExample = /** @class */ (function () {
        function TableStickyComplexExample() {
            this.displayedColumns = [];
            this.dataSource = ELEMENT_DATA$a;
            this.tables = [0];
            this.displayedColumns.length = 24;
            this.displayedColumns.fill('filler');
            // The first two columns should be position and name; the last two columns: weight, symbol
            this.displayedColumns[0] = 'position';
            this.displayedColumns[1] = 'name';
            this.displayedColumns[22] = 'weight';
            this.displayedColumns[23] = 'symbol';
        }
        /** Whether the button toggle group contains the id as an active value. */
        TableStickyComplexExample.prototype.isSticky = function (buttonToggleGroup, id) {
            return (buttonToggleGroup.value || []).indexOf(id) !== -1;
        };
        TableStickyComplexExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-sticky-complex-example',
                        styleUrls: ['table-sticky-complex-example.css'],
                        templateUrl: 'table-sticky-complex-example.html',
                    },] },
        ];
        /** @nocollapse */
        TableStickyComplexExample.ctorParameters = function () { return []; };
        TableStickyComplexExample.ɵfac = function TableStickyComplexExample_Factory(t) { return new (t || TableStickyComplexExample)(); };
        TableStickyComplexExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableStickyComplexExample, selectors: [["table-sticky-complex-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["multiple", "", 1, "example-sticky-toggle-group", 3, "value"], ["stickyHeaders", "matButtonToggleGroup"], ["value", "header-1"], ["value", "header-2"], ["stickyFooters", "matButtonToggleGroup"], ["value", "footer-1"], ["value", "footer-2"], ["stickyColumns", "matButtonToggleGroup"], ["value", "position"], ["value", "name"], ["value", "weight"], ["value", "symbol"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource", 4, "ngFor", "ngForOf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position", 3, "sticky"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "name", 3, "sticky"], ["matColumnDef", "weight", 3, "stickyEnd"], ["matColumnDef", "symbol", 3, "stickyEnd"], ["matColumnDef", "filler"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableStickyComplexExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "button", 0);
                i0.ɵɵlistener("click", function TableStickyComplexExample_Template_button_click_1_listener($event) { return ctx.tables.push(ctx.tables.length); });
                i0.ɵɵtext(2, "Add table");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "button", 0);
                i0.ɵɵlistener("click", function TableStickyComplexExample_Template_button_click_3_listener($event) { return ctx.tables.pop(); });
                i0.ɵɵtext(4, "Remove table");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div");
                i0.ɵɵtext(6, " Sticky Headers: ");
                i0.ɵɵelementStart(7, "mat-button-toggle-group", 1, 2);
                i0.ɵɵelementStart(9, "mat-button-toggle", 3);
                i0.ɵɵtext(10, " Row 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-button-toggle", 4);
                i0.ɵɵtext(12, " Row 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div");
                i0.ɵɵtext(14, " Sticky Footers: ");
                i0.ɵɵelementStart(15, "mat-button-toggle-group", 1, 5);
                i0.ɵɵelementStart(17, "mat-button-toggle", 6);
                i0.ɵɵtext(18, " Row 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "mat-button-toggle", 7);
                i0.ɵɵtext(20, " Row 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "div");
                i0.ɵɵtext(22, " Sticky Columns: ");
                i0.ɵɵelementStart(23, "mat-button-toggle-group", 1, 8);
                i0.ɵɵelementStart(25, "mat-button-toggle", 9);
                i0.ɵɵtext(26, " Position ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "mat-button-toggle", 10);
                i0.ɵɵtext(28, " Name ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "mat-button-toggle", 11);
                i0.ɵɵtext(30, " Weight ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "mat-button-toggle", 12);
                i0.ɵɵtext(32, " Symbol ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "div", 13);
                i0.ɵɵtemplate(34, TableStickyComplexExample_table_34_Template, 26, 14, "table", 14);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("value", i0.ɵɵpureFunction0(4, _c0$5));
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("value", i0.ɵɵpureFunction0(5, _c1$2));
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("value", i0.ɵɵpureFunction0(6, _c2$1));
                i0.ɵɵadvance(11);
                i0.ɵɵproperty("ngForOf", ctx.tables);
            } }, directives: [i1.MatButton, i2$1.MatButtonToggleGroup, i2$1.MatButtonToggle, i2.NgForOf, i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatFooterCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatFooterRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatFooterCell, i1$1.MatHeaderRow, i1$1.MatRow, i1$1.MatFooterRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-column-filler[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  min-width: 80px;\n  box-sizing: border-box;\n}"] });
        return TableStickyComplexExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableStickyComplexExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-sticky-complex-example',
                    styleUrls: ['table-sticky-complex-example.css'],
                    templateUrl: 'table-sticky-complex-example.html',
                }]
        }], function () { return []; }, null); })();
    var ELEMENT_DATA$a = [
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
    ];

    function TableStickyFooterExample_th_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Item ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var transaction_r301 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", transaction_r301.item, " ");
    } }
    function TableStickyFooterExample_td_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1, " Total ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyFooterExample_th_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Cost ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "currency");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var transaction_r302 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r302.cost), " ");
    } }
    function TableStickyFooterExample_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "currency");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r297 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r297.getTotalCost()), " ");
    } }
    function TableStickyFooterExample_tr_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 13);
    } }
    function TableStickyFooterExample_tr_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 14);
    } }
    function TableStickyFooterExample_tr_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 15);
    } }
    /**
     * @title Table with a sticky footer
     */
    var TableStickyFooterExample = /** @class */ (function () {
        function TableStickyFooterExample() {
            this.displayedColumns = ['item', 'cost'];
            this.transactions = [
                { item: 'Beach ball', cost: 4 },
                { item: 'Towel', cost: 5 },
                { item: 'Frisbee', cost: 2 },
                { item: 'Sunscreen', cost: 4 },
                { item: 'Cooler', cost: 25 },
                { item: 'Swim suit', cost: 15 },
            ];
        }
        /** Gets the total cost of all transactions. */
        TableStickyFooterExample.prototype.getTotalCost = function () {
            return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
        };
        TableStickyFooterExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-sticky-footer-example',
                        styleUrls: ['table-sticky-footer-example.css'],
                        templateUrl: 'table-sticky-footer-example.html',
                    },] },
        ];
        TableStickyFooterExample.ɵfac = function TableStickyFooterExample_Factory(t) { return new (t || TableStickyFooterExample)(); };
        TableStickyFooterExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableStickyFooterExample, selectors: [["table-sticky-footer-example"]], decls: 13, vars: 5, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableStickyFooterExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "table", 1);
                i0.ɵɵelementContainerStart(2, 2);
                i0.ɵɵtemplate(3, TableStickyFooterExample_th_3_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(4, TableStickyFooterExample_td_4_Template, 2, 1, "td", 4);
                i0.ɵɵtemplate(5, TableStickyFooterExample_td_5_Template, 2, 0, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 6);
                i0.ɵɵtemplate(7, TableStickyFooterExample_th_7_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(8, TableStickyFooterExample_td_8_Template, 3, 3, "td", 4);
                i0.ɵɵtemplate(9, TableStickyFooterExample_td_9_Template, 3, 3, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(10, TableStickyFooterExample_tr_10_Template, 1, 0, "tr", 7);
                i0.ɵɵtemplate(11, TableStickyFooterExample_tr_11_Template, 1, 0, "tr", 8);
                i0.ɵɵtemplate(12, TableStickyFooterExample_tr_12_Template, 1, 0, "tr", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("dataSource", ctx.transactions);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns)("matFooterRowDefSticky", true);
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatFooterCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatFooterRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatFooterCell, i1$1.MatHeaderRow, i1$1.MatRow, i1$1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 270px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e0;\n}"] });
        return TableStickyFooterExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableStickyFooterExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-sticky-footer-example',
                    styleUrls: ['table-sticky-footer-example.css'],
                    templateUrl: 'table-sticky-footer-example.html',
                }]
        }], null, null); })();

    function TableStickyHeaderExample_th_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyHeaderExample_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r314 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r314.position, " ");
    } }
    function TableStickyHeaderExample_th_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyHeaderExample_td_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r315 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r315.name, " ");
    } }
    function TableStickyHeaderExample_th_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyHeaderExample_td_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r316 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r316.weight, " ");
    } }
    function TableStickyHeaderExample_th_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 10);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function TableStickyHeaderExample_td_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 11);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r317 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r317.symbol, " ");
    } }
    function TableStickyHeaderExample_tr_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 12);
    } }
    function TableStickyHeaderExample_tr_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 13);
    } }
    /**
     * @title Table with sticky header
     */
    var TableStickyHeaderExample = /** @class */ (function () {
        function TableStickyHeaderExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$b;
        }
        TableStickyHeaderExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-sticky-header-example',
                        styleUrls: ['table-sticky-header-example.css'],
                        templateUrl: 'table-sticky-header-example.html',
                    },] },
        ];
        TableStickyHeaderExample.ɵfac = function TableStickyHeaderExample_Factory(t) { return new (t || TableStickyHeaderExample)(); };
        TableStickyHeaderExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableStickyHeaderExample, selectors: [["table-sticky-header-example"]], decls: 16, vars: 4, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableStickyHeaderExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "table", 1);
                i0.ɵɵelementContainerStart(2, 2);
                i0.ɵɵtemplate(3, TableStickyHeaderExample_th_3_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(4, TableStickyHeaderExample_td_4_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(5, 5);
                i0.ɵɵtemplate(6, TableStickyHeaderExample_th_6_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(7, TableStickyHeaderExample_td_7_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(8, 6);
                i0.ɵɵtemplate(9, TableStickyHeaderExample_th_9_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(10, TableStickyHeaderExample_td_10_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(11, 7);
                i0.ɵɵtemplate(12, TableStickyHeaderExample_th_12_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(13, TableStickyHeaderExample_td_13_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(14, TableStickyHeaderExample_tr_14_Template, 1, 0, "tr", 8);
                i0.ɵɵtemplate(15, TableStickyHeaderExample_tr_15_Template, 1, 0, "tr", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return TableStickyHeaderExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableStickyHeaderExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-sticky-header-example',
                    styleUrls: ['table-sticky-header-example.css'],
                    templateUrl: 'table-sticky-header-example.html',
                }]
        }], null, null); })();
    var ELEMENT_DATA$b = [
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
    ];

    function TableTextColumnAdvancedExample_tr_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 7);
    } }
    function TableTextColumnAdvancedExample_tr_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 8);
    } }
    var ELEMENT_DATA$c = [
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
    ];
    /**
     * @title Use of 'mat-text-column' with various configurations of the interface.
     */
    var TableTextColumnAdvancedExample = /** @class */ (function () {
        function TableTextColumnAdvancedExample() {
            var _this = this;
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new i1$1.MatTableDataSource(ELEMENT_DATA$c);
            this.decimalPipe = new i2.DecimalPipe('en-US');
            /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
            this.getWeight = function (data) {
                var result = _this.decimalPipe.transform(data.weight, '1.0-2');
                return result === null ? '' : result;
            };
        }
        TableTextColumnAdvancedExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-text-column-advanced-example',
                        styleUrls: ['table-text-column-advanced-example.css'],
                        templateUrl: 'table-text-column-advanced-example.html',
                    },] },
        ];
        TableTextColumnAdvancedExample.ɵfac = function TableTextColumnAdvancedExample_Factory(t) { return new (t || TableTextColumnAdvancedExample)(); };
        TableTextColumnAdvancedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableTextColumnAdvancedExample, selectors: [["table-text-column-advanced-example"]], decls: 7, vars: 5, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["name", "position", 3, "headerText"], ["name", "name", "headerText", "Element"], ["name", "weight", 3, "dataAccessor"], ["name", "symbol", "justify", "end"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableTextColumnAdvancedExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelement(1, "mat-text-column", 1);
                i0.ɵɵelement(2, "mat-text-column", 2);
                i0.ɵɵelement(3, "mat-text-column", 3);
                i0.ɵɵelement(4, "mat-text-column", 4);
                i0.ɵɵtemplate(5, TableTextColumnAdvancedExample_tr_5_Template, 1, 0, "tr", 5);
                i0.ɵɵtemplate(6, TableTextColumnAdvancedExample_tr_6_Template, 1, 0, "tr", 6);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("headerText", ctx.headerText);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("dataAccessor", ctx.getWeight);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i1$1.MatTextColumn, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return TableTextColumnAdvancedExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableTextColumnAdvancedExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-text-column-advanced-example',
                    styleUrls: ['table-text-column-advanced-example.css'],
                    templateUrl: 'table-text-column-advanced-example.html',
                }]
        }], null, null); })();

    function TableTextColumnExample_tr_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 7);
    } }
    function TableTextColumnExample_tr_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 8);
    } }
    var ELEMENT_DATA$d = [
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
    ];
    /**
     * @title Use of `mat-text-column` which can be used for simple columns that only need to display
     * a text value for the header and cells.
     */
    var TableTextColumnExample = /** @class */ (function () {
        function TableTextColumnExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$d;
        }
        TableTextColumnExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-text-column-example',
                        styleUrls: ['table-text-column-example.css'],
                        templateUrl: 'table-text-column-example.html',
                    },] },
        ];
        TableTextColumnExample.ɵfac = function TableTextColumnExample_Factory(t) { return new (t || TableTextColumnExample)(); };
        TableTextColumnExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableTextColumnExample, selectors: [["table-text-column-example"]], decls: 7, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["name", "position"], ["name", "name"], ["name", "weight"], ["name", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableTextColumnExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelement(1, "mat-text-column", 1);
                i0.ɵɵelement(2, "mat-text-column", 2);
                i0.ɵɵelement(3, "mat-text-column", 3);
                i0.ɵɵelement(4, "mat-text-column", 4);
                i0.ɵɵtemplate(5, TableTextColumnExample_tr_5_Template, 1, 0, "tr", 5);
                i0.ɵɵtemplate(6, TableTextColumnExample_tr_6_Template, 1, 0, "tr", 6);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i1$1.MatTextColumn, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderRow, i1$1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return TableTextColumnExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableTextColumnExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-text-column-example',
                    styleUrls: ['table-text-column-example.css'],
                    templateUrl: 'table-text-column-example.html',
                }]
        }], null, null); })();

    var _c0$6 = ["sort"];
    function TableWrappedExample_th_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 7);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function TableWrappedExample_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r330 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r330.name, " ");
    } }
    function TableWrappedExample_tr_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 9);
    } }
    function TableWrappedExample_tr_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 10);
    } }
    function WrapperTable_th_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 7);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function WrapperTable_td_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r338 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r338.position, " ");
    } }
    function WrapperTable_th_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 7);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function WrapperTable_td_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r339 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r339.weight, " ");
    } }
    function WrapperTable_th_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function WrapperTable_td_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r340 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r340.symbol, " ");
    } }
    var _c1$3 = ["*"];
    var ELEMENT_DATA$e = [
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
    ];
    /**
     * @title Table example that shows how to wrap a table component for definition and behavior reuse.
     */
    var TableWrappedExample = /** @class */ (function () {
        function TableWrappedExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new i1$1.MatTableDataSource(ELEMENT_DATA$e);
        }
        TableWrappedExample.prototype.ngOnInit = function () {
            this.dataSource.sort = this.sort;
        };
        TableWrappedExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'table-wrapped-example',
                        styleUrls: ['table-wrapped-example.css'],
                        templateUrl: 'table-wrapped-example.html',
                    },] },
        ];
        TableWrappedExample.propDecorators = {
            sort: [{ type: i0.ViewChild, args: ['sort', { static: true },] }]
        };
        TableWrappedExample.ɵfac = function TableWrappedExample_Factory(t) { return new (t || TableWrappedExample)(); };
        TableWrappedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableWrappedExample, selectors: [["table-wrapped-example"]], viewQuery: function TableWrappedExample_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0$6, true);
            } if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
            } }, decls: 7, vars: 4, consts: [["matSort", "", 3, "dataSource", "columns"], ["sort", "matSort"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableWrappedExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "wrapper-table", 0, 1);
                i0.ɵɵelementContainerStart(2, 2);
                i0.ɵɵtemplate(3, TableWrappedExample_th_3_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(4, TableWrappedExample_td_4_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(5, TableWrappedExample_tr_5_Template, 1, 0, "tr", 5);
                i0.ɵɵtemplate(6, TableWrappedExample_tr_6_Template, 1, 0, "tr", 6);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource)("columns", ctx.displayedColumns);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: function () { return [WrapperTable, i4.MatSort, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i1$1.MatHeaderCell, i1$1.MatCell, i1$1.MatHeaderRow, i1$1.MatRow]; }, styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return TableWrappedExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableWrappedExample, [{
            type: i0.Component,
            args: [{
                    selector: 'table-wrapped-example',
                    styleUrls: ['table-wrapped-example.css'],
                    templateUrl: 'table-wrapped-example.html',
                }]
        }], null, { sort: [{
                type: i0.ViewChild,
                args: ['sort', { static: true }]
            }] }); })();
    /**
     * Table component that accepts column and row definitions in its content to be registered to the
     * table.
     */
    var WrapperTable = /** @class */ (function () {
        function WrapperTable() {
        }
        WrapperTable.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.columnDefs.forEach(function (columnDef) { return _this.table.addColumnDef(columnDef); });
            this.rowDefs.forEach(function (rowDef) { return _this.table.addRowDef(rowDef); });
            this.headerRowDefs.forEach(function (headerRowDef) { return _this.table.addHeaderRowDef(headerRowDef); });
        };
        WrapperTable.decorators = [
            { type: i0.Component, args: [{
                        selector: 'wrapper-table',
                        templateUrl: 'wrapper-table.html',
                        styles: ["\n    table {\n      width: 100%;\n    }\n  "]
                    },] },
        ];
        WrapperTable.propDecorators = {
            headerRowDefs: [{ type: i0.ContentChildren, args: [i1$1.MatHeaderRowDef,] }],
            rowDefs: [{ type: i0.ContentChildren, args: [i1$1.MatRowDef,] }],
            columnDefs: [{ type: i0.ContentChildren, args: [i1$1.MatColumnDef,] }],
            table: [{ type: i0.ViewChild, args: [i1$1.MatTable, { static: true },] }],
            columns: [{ type: i0.Input }],
            dataSource: [{ type: i0.Input }]
        };
        WrapperTable.ɵfac = function WrapperTable_Factory(t) { return new (t || WrapperTable)(); };
        WrapperTable.ɵcmp = i0.ɵɵdefineComponent({ type: WrapperTable, selectors: [["wrapper-table"]], contentQueries: function WrapperTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, i1$1.MatHeaderRowDef, false);
                i0.ɵɵcontentQuery(dirIndex, i1$1.MatRowDef, false);
                i0.ɵɵcontentQuery(dirIndex, i1$1.MatColumnDef, false);
            } if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerRowDefs = _t);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rowDefs = _t);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnDefs = _t);
            } }, viewQuery: function WrapperTable_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵstaticViewQuery(i1$1.MatTable, true);
            } if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
            } }, inputs: { columns: "columns", dataSource: "dataSource" }, ngContentSelectors: _c1$3, decls: 11, vars: 1, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""]], template: function WrapperTable_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementContainerStart(2, 1);
                i0.ɵɵtemplate(3, WrapperTable_th_3_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(4, WrapperTable_td_4_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(5, 4);
                i0.ɵɵtemplate(6, WrapperTable_th_6_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(7, WrapperTable_td_7_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(8, 5);
                i0.ɵɵtemplate(9, WrapperTable_th_9_Template, 2, 0, "th", 6);
                i0.ɵɵtemplate(10, WrapperTable_td_10_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
            } }, directives: [i1$1.MatTable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderCell, i4.MatSortHeader, i1$1.MatCell], styles: ["table[_ngcontent-%COMP%] {\n      width: 100%;\n    }"] });
        return WrapperTable;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WrapperTable, [{
            type: i0.Component,
            args: [{
                    selector: 'wrapper-table',
                    templateUrl: 'wrapper-table.html',
                    styles: ["\n    table {\n      width: 100%;\n    }\n  "]
                }]
        }], null, { headerRowDefs: [{
                type: i0.ContentChildren,
                args: [i1$1.MatHeaderRowDef]
            }], rowDefs: [{
                type: i0.ContentChildren,
                args: [i1$1.MatRowDef]
            }], columnDefs: [{
                type: i0.ContentChildren,
                args: [i1$1.MatColumnDef]
            }], table: [{
                type: i0.ViewChild,
                args: [i1$1.MatTable, { static: true }]
            }], columns: [{
                type: i0.Input
            }], dataSource: [{
                type: i0.Input
            }] }); })();

    var EXAMPLES = [
        TableBasicExample, TableBasicFlexExample,
        TableDynamicColumnsExample, TableExpandableRowsExample,
        TableFilteringExample, TableFooterRowExample,
        TableHttpExample, TableMultipleHeaderFooterExample,
        TableOverviewExample, TablePaginationExample,
        TableRowContextExample, TableSelectionExample,
        TableSortingExample, TableStickyColumnsExample,
        TableStickyComplexExample, TableStickyComplexFlexExample,
        TableStickyFooterExample, TableStickyHeaderExample,
        TableTextColumnExample, TableTextColumnAdvancedExample,
        TableWrappedExample, WrapperTable,
    ];
    var TableExamplesModule = /** @class */ (function () {
        function TableExamplesModule() {
        }
        TableExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.CommonModule,
                            i1.MatButtonModule,
                            i2$1.MatButtonToggleModule,
                            i2$2.MatCheckboxModule,
                            i2$3.MatIconModule,
                            i2$4.MatInputModule,
                            i5.MatPaginatorModule,
                            i6.MatProgressSpinnerModule,
                            i4.MatSortModule,
                            i1$1.MatTableModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        TableExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TableExamplesModule });
        TableExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TableExamplesModule_Factory(t) { return new (t || TableExamplesModule)(); }, imports: [[
                    i2.CommonModule,
                    i1.MatButtonModule,
                    i2$1.MatButtonToggleModule,
                    i2$2.MatCheckboxModule,
                    i2$3.MatIconModule,
                    i2$4.MatInputModule,
                    i5.MatPaginatorModule,
                    i6.MatProgressSpinnerModule,
                    i4.MatSortModule,
                    i1$1.MatTableModule,
                ]] });
        return TableExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TableExamplesModule, { declarations: [TableBasicExample, TableBasicFlexExample,
            TableDynamicColumnsExample, TableExpandableRowsExample,
            TableFilteringExample, TableFooterRowExample,
            TableHttpExample, TableMultipleHeaderFooterExample,
            TableOverviewExample, TablePaginationExample,
            TableRowContextExample, TableSelectionExample,
            TableSortingExample, TableStickyColumnsExample,
            TableStickyComplexExample, TableStickyComplexFlexExample,
            TableStickyFooterExample, TableStickyHeaderExample,
            TableTextColumnExample, TableTextColumnAdvancedExample,
            TableWrappedExample, WrapperTable], imports: [i2.CommonModule,
            i1.MatButtonModule,
            i2$1.MatButtonToggleModule,
            i2$2.MatCheckboxModule,
            i2$3.MatIconModule,
            i2$4.MatInputModule,
            i5.MatPaginatorModule,
            i6.MatProgressSpinnerModule,
            i4.MatSortModule,
            i1$1.MatTableModule], exports: [TableBasicExample, TableBasicFlexExample,
            TableDynamicColumnsExample, TableExpandableRowsExample,
            TableFilteringExample, TableFooterRowExample,
            TableHttpExample, TableMultipleHeaderFooterExample,
            TableOverviewExample, TablePaginationExample,
            TableRowContextExample, TableSelectionExample,
            TableSortingExample, TableStickyColumnsExample,
            TableStickyComplexExample, TableStickyComplexFlexExample,
            TableStickyFooterExample, TableStickyHeaderExample,
            TableTextColumnExample, TableTextColumnAdvancedExample,
            TableWrappedExample, WrapperTable] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i2.CommonModule,
                        i1.MatButtonModule,
                        i2$1.MatButtonToggleModule,
                        i2$2.MatCheckboxModule,
                        i2$3.MatIconModule,
                        i2$4.MatInputModule,
                        i5.MatPaginatorModule,
                        i6.MatProgressSpinnerModule,
                        i4.MatSortModule,
                        i1$1.MatTableModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.TableBasicExample = TableBasicExample;
    exports.TableBasicFlexExample = TableBasicFlexExample;
    exports.TableDynamicColumnsExample = TableDynamicColumnsExample;
    exports.TableExamplesModule = TableExamplesModule;
    exports.TableExpandableRowsExample = TableExpandableRowsExample;
    exports.TableFilteringExample = TableFilteringExample;
    exports.TableFooterRowExample = TableFooterRowExample;
    exports.TableHttpExample = TableHttpExample;
    exports.TableMultipleHeaderFooterExample = TableMultipleHeaderFooterExample;
    exports.TableOverviewExample = TableOverviewExample;
    exports.TablePaginationExample = TablePaginationExample;
    exports.TableRowContextExample = TableRowContextExample;
    exports.TableSelectionExample = TableSelectionExample;
    exports.TableSortingExample = TableSortingExample;
    exports.TableStickyColumnsExample = TableStickyColumnsExample;
    exports.TableStickyComplexExample = TableStickyComplexExample;
    exports.TableStickyComplexFlexExample = TableStickyComplexFlexExample;
    exports.TableStickyFooterExample = TableStickyFooterExample;
    exports.TableStickyHeaderExample = TableStickyHeaderExample;
    exports.TableTextColumnAdvancedExample = TableTextColumnAdvancedExample;
    exports.TableTextColumnExample = TableTextColumnExample;
    exports.TableWrappedExample = TableWrappedExample;
    exports.WrapperTable = WrapperTable;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-table.umd.js.map
