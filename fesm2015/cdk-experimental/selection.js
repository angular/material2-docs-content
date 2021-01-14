import { CdkSelection, CdkSelectionColumn, CdkRowSelection, CdkSelectAll, CdkSelectionToggle, CdkSelectionModule } from '@angular/cdk-experimental/selection';
import { CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow, CdkTableModule } from '@angular/cdk/table';
import { NgForOf, AsyncPipe, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelement, ɵɵproperty, ɵɵdefineComponent, ɵɵlistener, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵsetClassMetadata, Component, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵreference, ɵɵpipe, ɵɵpipeBind1, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { ReplaySubject } from 'rxjs';

function CdkSelectionColumnExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function CdkSelectionColumnExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function CdkSelectionColumnExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function CdkSelectionColumnExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function CdkSelectionColumnExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function CdkSelectionColumnExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function CdkSelectionColumnExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function CdkSelectionColumnExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function CdkSelectionColumnExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 12);
} }
function CdkSelectionColumnExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 13);
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    ɵɵproperty("cdkRowSelectionValue", row_r14);
} }
/**
 * @title CDK Selection Column on a CDK table.
 */
class CdkSelectionColumnExample {
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
CdkSelectionColumnExample.ɵfac = function CdkSelectionColumnExample_Factory(t) { return new (t || CdkSelectionColumnExample)(); };
CdkSelectionColumnExample.ɵcmp = ɵɵdefineComponent({ type: CdkSelectionColumnExample, selectors: [["cdk-selection-column-example"]], decls: 17, vars: 5, consts: [["cdk-table", "", "cdkSelection", "", 1, "example-table", 3, "dataSource", "cdkSelectionMultiple", "cdkSelectionChange"], ["cdkSelectionColumnName", "select"], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", "cdkRowSelection", "", 3, "cdkRowSelectionValue", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", "", "cdkRowSelection", "", 3, "cdkRowSelectionValue"]], template: function CdkSelectionColumnExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0);
        ɵɵelementStart(1, "table", 0);
        ɵɵlistener("cdkSelectionChange", function CdkSelectionColumnExample_Template_table_cdkSelectionChange_1_listener($event) { return ctx.selectionChanged($event); });
        ɵɵelement(2, "cdk-selection-column", 1);
        ɵɵelementContainerStart(3, 2);
        ɵɵtemplate(4, CdkSelectionColumnExample_th_4_Template, 2, 0, "th", 3);
        ɵɵtemplate(5, CdkSelectionColumnExample_td_5_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(6, 5);
        ɵɵtemplate(7, CdkSelectionColumnExample_th_7_Template, 2, 0, "th", 3);
        ɵɵtemplate(8, CdkSelectionColumnExample_td_8_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 6);
        ɵɵtemplate(10, CdkSelectionColumnExample_th_10_Template, 2, 0, "th", 3);
        ɵɵtemplate(11, CdkSelectionColumnExample_td_11_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(12, 7);
        ɵɵtemplate(13, CdkSelectionColumnExample_th_13_Template, 2, 0, "th", 3);
        ɵɵtemplate(14, CdkSelectionColumnExample_td_14_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(15, CdkSelectionColumnExample_tr_15_Template, 1, 0, "tr", 8);
        ɵɵtemplate(16, CdkSelectionColumnExample_tr_16_Template, 1, 1, "tr", 9);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵtextInterpolate1("Selected: ", ctx.selected, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.dataSource)("cdkSelectionMultiple", true);
        ɵɵadvance(14);
        ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
    } }, directives: [CdkTable, CdkSelection, CdkSelectionColumn, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow, CdkRowSelection], styles: [".example-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n\ntr.cdk-selected[_ngcontent-%COMP%] {\n  background-color: yellow;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkSelectionColumnExample, [{
        type: Component,
        args: [{
                selector: 'cdk-selection-column-example',
                templateUrl: 'cdk-selection-column-example.html',
                styleUrls: ['cdk-selection-column-example.css'],
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

function CdkSelectionListExample_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li");
    ɵɵelementStart(1, "input", 10, 11);
    ɵɵlistener("click", function CdkSelectionListExample_li_9_Template_input_click_1_listener() { ɵɵrestoreView(_r10); const _r8 = ɵɵreference(2); return _r8.toggle(); });
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("cdkSelectionToggleValue", item_r7)("checked", ɵɵpipeBind1(3, 3, _r8.checked));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", item_r7, " ");
} }
function CdkSelectionListExample_li_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "mat-checkbox", 12);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("cdkSelectionToggleValue", item_r11);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r11, " ");
} }
function CdkSelectionListExample_li_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "mat-checkbox", 12);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("cdkSelectionToggleValue", item_r12);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r12, " ");
} }
function CdkSelectionListExample_li_33_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "mat-checkbox", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    ɵɵadvance(1);
    ɵɵproperty("cdkSelectionToggleValue", item_r13)("cdkSelectionToggleIndex", i_r14);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r13, " ");
} }
/**
 * @title CDK Selection on a simple list.
 */
class CdkSelectionListExample {
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
CdkSelectionListExample.ɵfac = function CdkSelectionListExample_Factory(t) { return new (t || CdkSelectionListExample)(); };
CdkSelectionListExample.ɵcmp = ɵɵdefineComponent({ type: CdkSelectionListExample, selectors: [["cdk-selection-list-example"]], decls: 38, vars: 30, consts: [["cdkSelection", "", 3, "dataSource", "cdkSelectionMultiple", "cdkSelectionChange"], ["type", "checkbox", "cdkSelectAll", "", 3, "checked", "indeterminate", "click"], ["allToggler", "cdkSelectAll"], [4, "ngFor", "ngForOf"], ["cdkSelectAll", "", 3, "indeterminate"], ["toggle1", "cdkSelectAll"], ["cdkSelection", "", 3, "dataSource", "cdkSelectionMultiple", "trackBy", "cdkSelectionChange"], ["toggle2", "cdkSelectAll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], ["type", "checkbox", "cdkSelectionToggle", "", 3, "cdkSelectionToggleValue", "checked", "click"], ["toggler", "cdkSelectionToggle"], ["cdkSelectionToggle", "", 3, "cdkSelectionToggleValue"], ["cdkSelectionToggle", "", 3, "cdkSelectionToggleValue", "cdkSelectionToggleIndex"]], template: function CdkSelectionListExample_Template(rf, ctx) { if (rf & 1) {
        const _r15 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "h3");
        ɵɵelementStart(1, "code");
        ɵɵtext(2, "native input");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtext(3);
        ɵɵelementStart(4, "ul", 0);
        ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_4_listener($event) { return ctx.selected1 = ctx.getCurrentSelected($event); });
        ɵɵelementStart(5, "input", 1, 2);
        ɵɵlistener("click", function CdkSelectionListExample_Template_input_click_5_listener($event) { ɵɵrestoreView(_r15); const _r0 = ɵɵreference(6); return _r0.toggle($event); });
        ɵɵpipe(7, "async");
        ɵɵpipe(8, "async");
        ɵɵelementEnd();
        ɵɵtemplate(9, CdkSelectionListExample_li_9_Template, 5, 5, "li", 3);
        ɵɵelementEnd();
        ɵɵelementStart(10, "h3");
        ɵɵelementStart(11, "code");
        ɵɵtext(12, "mat-checkbox");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtext(13);
        ɵɵelementStart(14, "ul", 0);
        ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_14_listener($event) { return ctx.selected2 = ctx.getCurrentSelected($event); });
        ɵɵelement(15, "mat-checkbox", 4, 5);
        ɵɵpipe(17, "async");
        ɵɵtemplate(18, CdkSelectionListExample_li_18_Template, 3, 2, "li", 3);
        ɵɵelementEnd();
        ɵɵelementStart(19, "h3");
        ɵɵelementStart(20, "code");
        ɵɵtext(21, "Single select with mat-checkbox");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtext(22);
        ɵɵelementStart(23, "ul", 0);
        ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_23_listener($event) { return ctx.selected3 = ctx.getCurrentSelected($event); });
        ɵɵtemplate(24, CdkSelectionListExample_li_24_Template, 3, 2, "li", 3);
        ɵɵelementEnd();
        ɵɵelementStart(25, "h3");
        ɵɵelementStart(26, "code");
        ɵɵtext(27, "with trackBy");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtext(28);
        ɵɵelementStart(29, "ul", 6);
        ɵɵlistener("cdkSelectionChange", function CdkSelectionListExample_Template_ul_cdkSelectionChange_29_listener($event) { return ctx.selected4 = ctx.getCurrentSelected($event); });
        ɵɵelement(30, "mat-checkbox", 4, 7);
        ɵɵpipe(32, "async");
        ɵɵtemplate(33, CdkSelectionListExample_li_33_Template, 3, 3, "li", 8);
        ɵɵelementEnd();
        ɵɵelementStart(34, "button", 9);
        ɵɵlistener("click", function CdkSelectionListExample_Template_button_click_34_listener() { return ctx.changeElementName(); });
        ɵɵtext(35, "Change element names and the already selected stays");
        ɵɵelementEnd();
        ɵɵelementStart(36, "button", 9);
        ɵɵlistener("click", function CdkSelectionListExample_Template_button_click_36_listener() { return ctx.reset(); });
        ɵɵtext(37, "reset");
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        const _r2 = ɵɵreference(16);
        const _r5 = ɵɵreference(31);
        ɵɵadvance(3);
        ɵɵtextInterpolate1("\nSelected: ", ctx.selected1, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", true);
        ɵɵadvance(1);
        ɵɵproperty("checked", ɵɵpipeBind1(7, 22, _r0.checked))("indeterminate", ɵɵpipeBind1(8, 24, _r0.indeterminate));
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.data);
        ɵɵadvance(4);
        ɵɵtextInterpolate1("\nSelected: ", ctx.selected2, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", true);
        ɵɵadvance(1);
        ɵɵproperty("indeterminate", ɵɵpipeBind1(17, 26, _r2.indeterminate));
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.data);
        ɵɵadvance(4);
        ɵɵtextInterpolate1("\nSelected: ", ctx.selected3, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", false);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.data);
        ɵɵadvance(4);
        ɵɵtextInterpolate1("\nSelected: ", ctx.selected4, "\n");
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.data)("cdkSelectionMultiple", true)("trackBy", ctx.trackByFn);
        ɵɵadvance(1);
        ɵɵproperty("indeterminate", ɵɵpipeBind1(32, 28, _r5.indeterminate));
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [CdkSelection, CdkSelectAll, NgForOf, MatCheckbox, CdkSelectionToggle], pipes: [AsyncPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkSelectionListExample, [{
        type: Component,
        args: [{
                selector: 'cdk-selection-list-example',
                templateUrl: 'cdk-selection-list-example.html',
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
    CdkSelectionListExample,
    CdkSelectionColumnExample,
];
class CdkSelectionExamplesModule {
}
CdkSelectionExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkSelectionExamplesModule });
CdkSelectionExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkSelectionExamplesModule_Factory(t) { return new (t || CdkSelectionExamplesModule)(); }, imports: [[
            CdkSelectionModule,
            CdkTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkSelectionExamplesModule, { declarations: [CdkSelectionListExample,
        CdkSelectionColumnExample], imports: [CdkSelectionModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [CdkSelectionListExample,
        CdkSelectionColumnExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkSelectionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkSelectionModule,
                    CdkTableModule,
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

export { CdkSelectionColumnExample, CdkSelectionExamplesModule, CdkSelectionListExample };
//# sourceMappingURL=selection.js.map
