import { MatSelection, MatSelectionColumn, MatRowSelection, MatSelectAll, MatSelectionToggle, MatSelectionModule } from '@angular/material-experimental/selection';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTableModule } from '@angular/material/table';
import { NgForOf, AsyncPipe, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelement, ɵɵproperty, ɵɵdefineComponent, ɵɵlistener, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵsetClassMetadata, Component, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵreference, ɵɵpipe, ɵɵpipeBind1, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { ReplaySubject } from 'rxjs';

function MatSelectionColumnExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function MatSelectionColumnExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function MatSelectionColumnExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function MatSelectionColumnExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function MatSelectionColumnExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function MatSelectionColumnExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function MatSelectionColumnExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function MatSelectionColumnExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function MatSelectionColumnExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 12);
} }
function MatSelectionColumnExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 13);
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    ɵɵproperty("matRowSelectionValue", row_r14);
} }
/**
 * @title Table that uses `matSelectionColumn` which allows users to select rows.
 */
class MatSelectionColumnExample {
    constructor() {
        this._destroyed = new ReplaySubject(1);
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.selected = [];
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    selectionChanged(event) {
        this.selected = event.after.map((select) => select.value.name);
    }
}
MatSelectionColumnExample.ɵfac = function MatSelectionColumnExample_Factory(t) { return new (t || MatSelectionColumnExample)(); };
MatSelectionColumnExample.ɵcmp = ɵɵdefineComponent({ type: MatSelectionColumnExample, selectors: [["mat-selection-column-example"]], decls: 17, vars: 5, consts: [["mat-table", "", "matSelection", "", 1, "example-table", 3, "dataSource", "matSelectionMultiple", "matSelectionChange"], ["name", "select"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "matRowSelection", "", 3, "matRowSelectionValue", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", "matRowSelection", "", 3, "matRowSelectionValue"]], template: function MatSelectionColumnExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0);
        ɵɵelementStart(1, "table", 0);
        ɵɵlistener("matSelectionChange", function MatSelectionColumnExample_Template_table_matSelectionChange_1_listener($event) { return ctx.selectionChanged($event); });
        ɵɵelement(2, "mat-selection-column", 1);
        ɵɵelementContainerStart(3, 2);
        ɵɵtemplate(4, MatSelectionColumnExample_th_4_Template, 2, 0, "th", 3);
        ɵɵtemplate(5, MatSelectionColumnExample_td_5_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(6, 5);
        ɵɵtemplate(7, MatSelectionColumnExample_th_7_Template, 2, 0, "th", 3);
        ɵɵtemplate(8, MatSelectionColumnExample_td_8_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 6);
        ɵɵtemplate(10, MatSelectionColumnExample_th_10_Template, 2, 0, "th", 3);
        ɵɵtemplate(11, MatSelectionColumnExample_td_11_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(12, 7);
        ɵɵtemplate(13, MatSelectionColumnExample_th_13_Template, 2, 0, "th", 3);
        ɵɵtemplate(14, MatSelectionColumnExample_td_14_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(15, MatSelectionColumnExample_tr_15_Template, 1, 0, "tr", 8);
        ɵɵtemplate(16, MatSelectionColumnExample_tr_16_Template, 1, 1, "tr", 9);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵtextInterpolate1("Selected: ", ctx.selected, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.dataSource)("matSelectionMultiple", true);
        ɵɵadvance(14);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatSelection, MatSelectionColumn, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatRowSelection], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MatSelectionColumnExample, [{
        type: Component,
        args: [{
                selector: 'mat-selection-column-example',
                templateUrl: 'mat-selection-column-example.html',
                styleUrls: ['mat-selection-column-example.css'],
            }]
    }], null, null); })();
const ELEMENT_DATA = [
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

function MatSelectionListExample_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li");
    ɵɵelementStart(1, "input", 10, 11);
    ɵɵlistener("click", function MatSelectionListExample_li_9_Template_input_click_1_listener() { ɵɵrestoreView(_r10); const _r8 = ɵɵreference(2); return _r8.toggle(); });
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("matSelectionToggleValue", item_r7)("checked", ɵɵpipeBind1(3, 3, _r8.checked));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", item_r7, " ");
} }
function MatSelectionListExample_li_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "mat-checkbox", 12);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("matSelectionToggleValue", item_r11);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r11, " ");
} }
function MatSelectionListExample_li_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "mat-checkbox", 12);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("matSelectionToggleValue", item_r12);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r12, " ");
} }
function MatSelectionListExample_li_33_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "mat-checkbox", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    ɵɵadvance(1);
    ɵɵproperty("matSelectionToggleValue", item_r13)("matSelectionToggleIndex", i_r14);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r13, " ");
} }
/**
 * @title Mat Selection on a simple list.
 */
class MatSelectionListExample {
    constructor() {
        this._destroyed = new ReplaySubject(1);
        this.data = ELEMENT_NAMES;
        this.selected1 = [];
        this.selected2 = [];
        this.selected3 = [];
        this.selected4 = [];
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    getCurrentSelected(event) {
        return event.after.map((select) => select.value);
    }
    trackByFn(index, value) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
}
MatSelectionListExample.ɵfac = function MatSelectionListExample_Factory(t) { return new (t || MatSelectionListExample)(); };
MatSelectionListExample.ɵcmp = ɵɵdefineComponent({ type: MatSelectionListExample, selectors: [["mat-selection-list-example"]], decls: 38, vars: 30, consts: [["matSelection", "", 3, "dataSource", "matSelectionMultiple", "matSelectionChange"], ["type", "checkbox", "matSelectAll", "", 3, "checked", "indeterminate", "click"], ["allToggler", "matSelectAll"], [4, "ngFor", "ngForOf"], ["matSelectAll", "", 3, "indeterminate"], ["toggle1", "matSelectAll"], ["matSelection", "", 3, "dataSource", "matSelectionMultiple", "trackBy", "matSelectionChange"], ["toggle2", "matSelectAll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], ["type", "checkbox", "matSelectionToggle", "", 3, "matSelectionToggleValue", "checked", "click"], ["toggler", "matSelectionToggle"], ["matSelectionToggle", "", 3, "matSelectionToggleValue"], ["matSelectionToggle", "", 3, "matSelectionToggleValue", "matSelectionToggleIndex"]], template: function MatSelectionListExample_Template(rf, ctx) { if (rf & 1) {
        const _r15 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "h3");
        ɵɵelementStart(1, "code");
        ɵɵtext(2, "native input");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtext(3);
        ɵɵelementStart(4, "ul", 0);
        ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_4_listener($event) { return ctx.selected1 = ctx.getCurrentSelected($event); });
        ɵɵelementStart(5, "input", 1, 2);
        ɵɵlistener("click", function MatSelectionListExample_Template_input_click_5_listener($event) { ɵɵrestoreView(_r15); const _r0 = ɵɵreference(6); return _r0.toggle($event); });
        ɵɵpipe(7, "async");
        ɵɵpipe(8, "async");
        ɵɵelementEnd();
        ɵɵtemplate(9, MatSelectionListExample_li_9_Template, 5, 5, "li", 3);
        ɵɵelementEnd();
        ɵɵelementStart(10, "h3");
        ɵɵelementStart(11, "code");
        ɵɵtext(12, "mat-checkbox");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtext(13);
        ɵɵelementStart(14, "ul", 0);
        ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_14_listener($event) { return ctx.selected2 = ctx.getCurrentSelected($event); });
        ɵɵelement(15, "mat-checkbox", 4, 5);
        ɵɵpipe(17, "async");
        ɵɵtemplate(18, MatSelectionListExample_li_18_Template, 3, 2, "li", 3);
        ɵɵelementEnd();
        ɵɵelementStart(19, "h3");
        ɵɵelementStart(20, "code");
        ɵɵtext(21, "Single select with mat-checkbox");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtext(22);
        ɵɵelementStart(23, "ul", 0);
        ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_23_listener($event) { return ctx.selected3 = ctx.getCurrentSelected($event); });
        ɵɵtemplate(24, MatSelectionListExample_li_24_Template, 3, 2, "li", 3);
        ɵɵelementEnd();
        ɵɵelementStart(25, "h3");
        ɵɵelementStart(26, "code");
        ɵɵtext(27, "with trackBy");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtext(28);
        ɵɵelementStart(29, "ul", 6);
        ɵɵlistener("matSelectionChange", function MatSelectionListExample_Template_ul_matSelectionChange_29_listener($event) { return ctx.selected4 = ctx.getCurrentSelected($event); });
        ɵɵelement(30, "mat-checkbox", 4, 7);
        ɵɵpipe(32, "async");
        ɵɵtemplate(33, MatSelectionListExample_li_33_Template, 3, 3, "li", 8);
        ɵɵelementEnd();
        ɵɵelementStart(34, "button", 9);
        ɵɵlistener("click", function MatSelectionListExample_Template_button_click_34_listener() { return ctx.changeElementName(); });
        ɵɵtext(35, "Change element names and the already selected stays");
        ɵɵelementEnd();
        ɵɵelementStart(36, "button", 9);
        ɵɵlistener("click", function MatSelectionListExample_Template_button_click_36_listener() { return ctx.reset(); });
        ɵɵtext(37, "reset");
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        const _r2 = ɵɵreference(16);
        const _r5 = ɵɵreference(31);
        ɵɵadvance(3);
        ɵɵtextInterpolate1("\nSelected: ", ctx.selected1, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", true);
        ɵɵadvance(1);
        ɵɵproperty("checked", ɵɵpipeBind1(7, 22, _r0.checked))("indeterminate", ɵɵpipeBind1(8, 24, _r0.indeterminate));
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.data);
        ɵɵadvance(4);
        ɵɵtextInterpolate1("\nSelected: ", ctx.selected2, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", true);
        ɵɵadvance(1);
        ɵɵproperty("indeterminate", ɵɵpipeBind1(17, 26, _r2.indeterminate));
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.data);
        ɵɵadvance(4);
        ɵɵtextInterpolate1("\nSelected: ", ctx.selected3, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", false);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.data);
        ɵɵadvance(4);
        ɵɵtextInterpolate1("\nSelected: ", ctx.selected4, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.data)("matSelectionMultiple", true)("trackBy", ctx.trackByFn);
        ɵɵadvance(1);
        ɵɵproperty("indeterminate", ɵɵpipeBind1(32, 28, _r5.indeterminate));
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [MatSelection, MatSelectAll, NgForOf, MatCheckbox, MatSelectionToggle], pipes: [AsyncPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MatSelectionListExample, [{
        type: Component,
        args: [{
                selector: 'mat-selection-list-example',
                templateUrl: 'mat-selection-list-example.html',
            }]
    }], null, null); })();
const ELEMENT_NAMES = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen',
    'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon',
    'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium',
];
const ELEMENT_SYMBOLS = [
    'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne',
    'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca'
];

const EXAMPLES = [
    MatSelectionListExample,
    MatSelectionColumnExample,
];
class MatSelectionExamplesModule {
}
MatSelectionExamplesModule.ɵmod = ɵɵdefineNgModule({ type: MatSelectionExamplesModule });
MatSelectionExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function MatSelectionExamplesModule_Factory(t) { return new (t || MatSelectionExamplesModule)(); }, imports: [[
            MatSelectionModule,
            MatTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MatSelectionExamplesModule, { declarations: [MatSelectionListExample,
        MatSelectionColumnExample], imports: [MatSelectionModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [MatSelectionListExample,
        MatSelectionColumnExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MatSelectionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatSelectionModule,
                    MatTableModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatCheckboxModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { MatSelectionColumnExample, MatSelectionExamplesModule, MatSelectionListExample };
//# sourceMappingURL=selection.js.map
