import { CdkEditable, CdkEditControl, CdkEditRevert, CdkEditClose, CdkPopoverEdit, CdkRowHoverContent, CdkEditOpen, CdkPopoverEditTabOut, CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow, CdkTableModule } from '@angular/cdk/table';
import { NgForOf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵnextContext, ɵɵtext, ɵɵelement, ɵɵelementEnd, ɵɵadvance, ɵɵproperty, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵtemplateRefExtractor, Component, ɵɵdefineComponent, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵsetClassMetadata, ɵɵattribute, ɵɵpureFunction1, ɵɵpureFunction0, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { __extends } from 'tslib';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';

function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵelementStart(1, "form", 13, 14);
    ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r15); var element_r12 = ctx.$implicit; var _r13 = ɵɵreference(2); var ctx_r14 = ɵɵnextContext(); return ctx_r14.onSubmitWeight(element_r12, _r13); });
    ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r15); var element_r12 = ctx.$implicit; var ctx_r16 = ɵɵnextContext(); return ctx_r16.preservedWeightValues.set(element_r12, $event); });
    ɵɵtext(3, " Edit b: ");
    ɵɵelement(4, "input", 15);
    ɵɵelement(5, "br");
    ɵɵelementStart(6, "button", 16);
    ɵɵtext(7, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 17);
    ɵɵtext(9, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 18);
    ɵɵtext(11, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r12 = ctx.$implicit;
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r12));
    ɵɵadvance(3);
    ɵɵproperty("ngModel", element_r12.weight);
} }
function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-header-cell");
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableFlexExample_cdk_cell_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r17 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r17.position, " ");
} }
function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-header-cell");
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵelementStart(1, "form", 13, 14);
    ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r25); var _r22 = ɵɵreference(2); var element_r18 = ɵɵnextContext().$implicit; var ctx_r23 = ɵɵnextContext(); return ctx_r23.onSubmitName(element_r18, _r22); });
    ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r25); var element_r18 = ɵɵnextContext().$implicit; var ctx_r26 = ɵɵnextContext(); return ctx_r26.preservedNameValues.set(element_r18, $event); });
    ɵɵtext(3, " Edit a: ");
    ɵɵelement(4, "input", 22);
    ɵɵelement(5, "br");
    ɵɵelementStart(6, "button", 16);
    ɵɵtext(7, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 17);
    ɵɵtext(9, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 18);
    ɵɵtext(11, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r18 = ɵɵnextContext().$implicit;
    var ctx_r20 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r20.preservedNameValues.get(element_r18));
    ɵɵadvance(3);
    ɵɵproperty("ngModel", element_r18.name);
} }
function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 23);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-cell", 19);
    ɵɵtext(1);
    ɵɵtemplate(2, CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template, 12, 2, "ng-template", null, 20, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, CdkPopoverEditCdkTableFlexExample_cdk_cell_8_span_4_Template, 3, 0, "span", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r18 = ctx.$implicit;
    var _r19 = ɵɵreference(3);
    ɵɵproperty("cdkPopoverEdit", _r19);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r18.name, " ");
} }
function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-header-cell");
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableFlexExample_cdk_cell_11_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 23);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableFlexExample_cdk_cell_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-cell", 24);
    ɵɵtext(1);
    ɵɵtemplate(2, CdkPopoverEditCdkTableFlexExample_cdk_cell_11_span_2_Template, 3, 0, "span", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r29 = ctx.$implicit;
    ɵɵnextContext();
    var _r0 = ɵɵreference(2);
    ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", element_r29);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r29.weight, " ");
} }
function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-header-cell");
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableFlexExample_cdk_cell_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r31 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r31.symbol, " ");
} }
function CdkPopoverEditCdkTableFlexExample_cdk_header_row_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "cdk-header-row");
} }
function CdkPopoverEditCdkTableFlexExample_cdk_row_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "cdk-row");
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
/**
 * @title CDK Popover Edit on a flex cdk-table.
 */
var CdkPopoverEditCdkTableFlexExample = /** @class */ (function () {
    function CdkPopoverEditCdkTableFlexExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
    }
    CdkPopoverEditCdkTableFlexExample.prototype.onSubmitName = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    };
    CdkPopoverEditCdkTableFlexExample.prototype.onSubmitWeight = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    };
    CdkPopoverEditCdkTableFlexExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-popover-edit-cdk-table-flex-example',
                    styleUrls: ['cdk-popover-edit-cdk-table-flex-example.css'],
                    templateUrl: 'cdk-popover-edit-cdk-table-flex-example.html',
                },] },
    ];
    CdkPopoverEditCdkTableFlexExample.ɵfac = function CdkPopoverEditCdkTableFlexExample_Factory(t) { return new (t || CdkPopoverEditCdkTableFlexExample)(); };
    CdkPopoverEditCdkTableFlexExample.ɵcmp = ɵɵdefineComponent({ type: CdkPopoverEditCdkTableFlexExample, selectors: [["cdk-popover-edit-cdk-table-flex-example"]], decls: 17, vars: 3, consts: [["editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["cdkColumnDef", "position"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "name"], [3, "cdkPopoverEdit", 4, "cdkCellDef"], ["cdkColumnDef", "weight"], [3, "cdkPopoverEdit", "cdkPopoverEditContext", 4, "cdkCellDef"], ["cdkColumnDef", "symbol"], [4, "cdkHeaderRowDef"], [4, "cdkRowDef", "cdkRowDefColumns"], [2, "background-color", "white"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditOpen", ""], [3, "cdkPopoverEdit", "cdkPopoverEditContext"]], template: function CdkPopoverEditCdkTableFlexExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "cdk-table", 0);
            ɵɵtemplate(1, CdkPopoverEditCdkTableFlexExample_ng_template_1_Template, 12, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementContainerStart(3, 2);
            ɵɵtemplate(4, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_4_Template, 2, 0, "cdk-header-cell", 3);
            ɵɵtemplate(5, CdkPopoverEditCdkTableFlexExample_cdk_cell_5_Template, 2, 1, "cdk-cell", 4);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(6, 5);
            ɵɵtemplate(7, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_7_Template, 2, 0, "cdk-header-cell", 3);
            ɵɵtemplate(8, CdkPopoverEditCdkTableFlexExample_cdk_cell_8_Template, 5, 2, "cdk-cell", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(9, 7);
            ɵɵtemplate(10, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_10_Template, 2, 0, "cdk-header-cell", 3);
            ɵɵtemplate(11, CdkPopoverEditCdkTableFlexExample_cdk_cell_11_Template, 3, 3, "cdk-cell", 8);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(12, 9);
            ɵɵtemplate(13, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_13_Template, 2, 0, "cdk-header-cell", 3);
            ɵɵtemplate(14, CdkPopoverEditCdkTableFlexExample_cdk_cell_14_Template, 2, 1, "cdk-cell", 4);
            ɵɵelementContainerEnd();
            ɵɵtemplate(15, CdkPopoverEditCdkTableFlexExample_cdk_header_row_15_Template, 1, 0, "cdk-header-row", 10);
            ɵɵtemplate(16, CdkPopoverEditCdkTableFlexExample_cdk_row_16_Template, 1, 0, "cdk-row", 11);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("dataSource", ctx.dataSource);
            ɵɵadvance(15);
            ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
        } }, directives: [CdkTable, CdkEditable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, CdkEditControl, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, CdkEditRevert, CdkEditClose, CdkHeaderCell, CdkCell, CdkPopoverEdit, CdkRowHoverContent, CdkEditOpen, CdkHeaderRow, CdkRow], styles: [".example-table[_ngcontent-%COMP%]   cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-table[_ngcontent-%COMP%]   cdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
    return CdkPopoverEditCdkTableFlexExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkPopoverEditCdkTableFlexExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-cdk-table-flex-example',
                styleUrls: ['cdk-popover-edit-cdk-table-flex-example.css'],
                templateUrl: 'cdk-popover-edit-cdk-table-flex-example.html',
            }]
    }], null, null); })();
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Stream of data that is provided to the table. */
        _this.data = new BehaviorSubject(ELEMENT_DATA);
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this.data;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(DataSource));

function CdkPopoverEditCdkTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r48 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵelementStart(1, "form", 13, 14);
    ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r48); var element_r45 = ctx.$implicit; var _r46 = ɵɵreference(2); var ctx_r47 = ɵɵnextContext(); return ctx_r47.onSubmitWeight(element_r45, _r46); });
    ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r48); var element_r45 = ctx.$implicit; var ctx_r49 = ɵɵnextContext(); return ctx_r49.preservedWeightValues.set(element_r45, $event); });
    ɵɵtext(3, " Edit b: ");
    ɵɵelement(4, "input", 15);
    ɵɵelement(5, "br");
    ɵɵelementStart(6, "button", 16);
    ɵɵtext(7, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 17);
    ɵɵtext(9, "Revert and close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r45 = ctx.$implicit;
    var ctx_r34 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r34.preservedWeightValues.get(element_r45));
    ɵɵadvance(3);
    ɵɵproperty("ngModel", element_r45.weight);
} }
function CdkPopoverEditCdkTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r50 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r50.position, " ");
} }
function CdkPopoverEditCdkTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r58 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵelementStart(1, "form", 13, 14);
    ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r58); var _r55 = ɵɵreference(2); var element_r51 = ɵɵnextContext().$implicit; var ctx_r56 = ɵɵnextContext(); return ctx_r56.onSubmitName(element_r51, _r55); });
    ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r58); var element_r51 = ɵɵnextContext().$implicit; var ctx_r59 = ɵɵnextContext(); return ctx_r59.preservedNameValues.set(element_r51, $event); });
    ɵɵtext(3, " Edit a: ");
    ɵɵelement(4, "input", 23);
    ɵɵelement(5, "br");
    ɵɵelementStart(6, "button", 16);
    ɵɵtext(7, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 24);
    ɵɵtext(9, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 25);
    ɵɵtext(11, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r51 = ɵɵnextContext().$implicit;
    var ctx_r53 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r53.preservedNameValues.get(element_r51));
    ɵɵadvance(3);
    ɵɵproperty("ngModel", element_r51.name);
} }
function CdkPopoverEditCdkTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 26);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 20);
    ɵɵtext(1);
    ɵɵtemplate(2, CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template, 12, 2, "ng-template", null, 21, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, CdkPopoverEditCdkTableExample_td_8_span_4_Template, 3, 0, "span", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r51 = ctx.$implicit;
    var _r52 = ɵɵreference(3);
    ɵɵproperty("cdkPopoverEdit", _r52);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r51.name, " ");
} }
function CdkPopoverEditCdkTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 26);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 27);
    ɵɵtext(1);
    ɵɵtemplate(2, CdkPopoverEditCdkTableExample_td_11_span_2_Template, 3, 0, "span", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r62 = ctx.$implicit;
    ɵɵnextContext();
    var _r33 = ɵɵreference(2);
    ɵɵproperty("cdkPopoverEdit", _r33)("cdkPopoverEditContext", element_r62);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r62.weight, " ");
} }
function CdkPopoverEditCdkTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r64 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r64.symbol, " ");
} }
function CdkPopoverEditCdkTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 28);
} }
function CdkPopoverEditCdkTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 29);
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
/**
 * @title CDK Popover Edit on a CDK data-table
 */
var CdkPopoverEditCdkTableExample = /** @class */ (function () {
    function CdkPopoverEditCdkTableExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$1();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
    }
    CdkPopoverEditCdkTableExample.prototype.onSubmitName = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    };
    CdkPopoverEditCdkTableExample.prototype.onSubmitWeight = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    };
    CdkPopoverEditCdkTableExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-popover-edit-cdk-table-example',
                    styleUrls: ['cdk-popover-edit-cdk-table-example.css'],
                    templateUrl: 'cdk-popover-edit-cdk-table-example.html',
                },] },
    ];
    CdkPopoverEditCdkTableExample.ɵfac = function CdkPopoverEditCdkTableExample_Factory(t) { return new (t || CdkPopoverEditCdkTableExample)(); };
    CdkPopoverEditCdkTableExample.ɵcmp = ɵɵdefineComponent({ type: CdkPopoverEditCdkTableExample, selectors: [["cdk-popover-edit-cdk-table-example"]], decls: 17, vars: 3, consts: [["cdk-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdk-cell", "", 3, "cdkPopoverEdit", 4, "cdkCellDef"], ["cdkColumnDef", "weight"], ["cdk-cell", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext", 4, "cdkCellDef"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [2, "background-color", "white"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", "", "cdkEditClose", ""], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-cell", "", 3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditRevert", ""], ["cdkEditClose", ""], ["cdkEditOpen", ""], ["cdk-cell", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkPopoverEditCdkTableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "table", 0);
            ɵɵtemplate(1, CdkPopoverEditCdkTableExample_ng_template_1_Template, 10, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementContainerStart(3, 2);
            ɵɵtemplate(4, CdkPopoverEditCdkTableExample_th_4_Template, 2, 0, "th", 3);
            ɵɵtemplate(5, CdkPopoverEditCdkTableExample_td_5_Template, 2, 1, "td", 4);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(6, 5);
            ɵɵtemplate(7, CdkPopoverEditCdkTableExample_th_7_Template, 2, 0, "th", 3);
            ɵɵtemplate(8, CdkPopoverEditCdkTableExample_td_8_Template, 5, 2, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(9, 7);
            ɵɵtemplate(10, CdkPopoverEditCdkTableExample_th_10_Template, 2, 0, "th", 3);
            ɵɵtemplate(11, CdkPopoverEditCdkTableExample_td_11_Template, 3, 3, "td", 8);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(12, 9);
            ɵɵtemplate(13, CdkPopoverEditCdkTableExample_th_13_Template, 2, 0, "th", 3);
            ɵɵtemplate(14, CdkPopoverEditCdkTableExample_td_14_Template, 2, 1, "td", 4);
            ɵɵelementContainerEnd();
            ɵɵtemplate(15, CdkPopoverEditCdkTableExample_tr_15_Template, 1, 0, "tr", 10);
            ɵɵtemplate(16, CdkPopoverEditCdkTableExample_tr_16_Template, 1, 0, "tr", 11);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("dataSource", ctx.dataSource);
            ɵɵadvance(15);
            ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
        } }, directives: [CdkTable, CdkEditable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, CdkEditControl, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, CdkEditRevert, CdkEditClose, CdkHeaderCell, CdkCell, CdkPopoverEdit, CdkRowHoverContent, CdkEditOpen, CdkHeaderRow, CdkRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
    return CdkPopoverEditCdkTableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkPopoverEditCdkTableExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-cdk-table-example',
                styleUrls: ['cdk-popover-edit-cdk-table-example.css'],
                templateUrl: 'cdk-popover-edit-cdk-table-example.html',
            }]
    }], null, null); })();
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$1 = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Stream of data that is provided to the table. */
        _this.data = new BehaviorSubject(ELEMENT_DATA$1);
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this.data;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(DataSource));

function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r72 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "form", 4, 5);
    ɵɵlistener("ngSubmit", function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r72); var ctx_r69 = ctx.$implicit; var _r70 = ɵɵreference(2); var ctx_r71 = ɵɵnextContext(); return ctx_r71.onSubmit(ctx_r69.person, _r70); });
    ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r72); var ctx_r69 = ctx.$implicit; var ctx_r73 = ɵɵnextContext(); return ctx_r73.preservedValues.set(ctx_r69.person, $event); });
    ɵɵelementStart(3, "div", 6);
    ɵɵelement(4, "input", 7);
    ɵɵelement(5, "input", 8);
    ɵɵelement(6, "input", 9);
    ɵɵelementEnd();
    ɵɵelement(7, "br");
    ɵɵelement(8, "br");
    ɵɵelementStart(9, "button", 10);
    ɵɵtext(10, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 11);
    ɵɵtext(12, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 12);
    ɵɵtext(14, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r69 = ctx.$implicit;
    var ctx_r67 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r67.preservedValues.get(ctx_r69.person));
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r69.person.firstName);
    ɵɵattribute("cdkFocusInitial", ctx_r69.focus === "firstName" || null);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r69.person.middleName);
    ɵɵattribute("cdkFocusInitial", ctx_r69.focus === "middleName" || null);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r69.person.lastName);
    ɵɵattribute("cdkFocusInitial", ctx_r69.focus === "lastName" || null);
} }
function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 15);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 15);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 15);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
var _c0 = function (a0) { return { person: a0, focus: "firstName" }; };
var _c1 = function () { return { after: 2 }; };
var _c2 = function (a0) { return { person: a0, focus: "middleName" }; };
var _c3 = function () { return { before: 1, after: 1 }; };
var _c4 = function (a0) { return { person: a0, focus: "lastName" }; };
var _c5 = function () { return { before: 2 }; };
function CdkPopoverEditCellSpanVanillaTableExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td", 13);
    ɵɵtext(4);
    ɵɵtemplate(5, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_5_Template, 3, 0, "span", 14);
    ɵɵelementEnd();
    ɵɵelementStart(6, "td", 13);
    ɵɵtext(7);
    ɵɵtemplate(8, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_8_Template, 3, 0, "span", 14);
    ɵɵelementEnd();
    ɵɵelementStart(9, "td", 13);
    ɵɵtext(10);
    ɵɵtemplate(11, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_11_Template, 3, 0, "span", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var person_r74 = ctx.$implicit;
    ɵɵnextContext();
    var _r66 = ɵɵreference(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", person_r74.id, " ");
    ɵɵadvance(1);
    ɵɵproperty("cdkPopoverEdit", _r66)("cdkPopoverEditContext", ɵɵpureFunction1(13, _c0, person_r74))("cdkPopoverEditColspan", ɵɵpureFunction0(15, _c1));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r74.firstName, " ");
    ɵɵadvance(2);
    ɵɵproperty("cdkPopoverEdit", _r66)("cdkPopoverEditContext", ɵɵpureFunction1(16, _c2, person_r74))("cdkPopoverEditColspan", ɵɵpureFunction0(18, _c3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r74.middleName, " ");
    ɵɵadvance(2);
    ɵɵproperty("cdkPopoverEdit", _r66)("cdkPopoverEditContext", ɵɵpureFunction1(19, _c4, person_r74))("cdkPopoverEditColspan", ɵɵpureFunction0(21, _c5));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r74.lastName, " ");
} }
var PERSON_DATA = [
    { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
    { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
    { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
    { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
    { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
    { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
    { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
    { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
    { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
];
/**
 * @title CDK Popover Edit spanning multiple columns on an HTML data-table
 */
var CdkPopoverEditCellSpanVanillaTableExample = /** @class */ (function () {
    function CdkPopoverEditCellSpanVanillaTableExample() {
        this.preservedValues = new WeakMap();
        this.persons = PERSON_DATA;
    }
    CdkPopoverEditCellSpanVanillaTableExample.prototype.onSubmit = function (person, f) {
        if (!f.valid) {
            return;
        }
        person.firstName = f.value['firstName'];
        person.middleName = f.value['middleName'];
        person.lastName = f.value['lastName'];
    };
    CdkPopoverEditCellSpanVanillaTableExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-popover-edit-cell-span-vanilla-table-example',
                    styleUrls: ['cdk-popover-edit-cell-span-vanilla-table-example.css'],
                    templateUrl: 'cdk-popover-edit-cell-span-vanilla-table-example.html',
                },] },
    ];
    CdkPopoverEditCellSpanVanillaTableExample.ɵfac = function CdkPopoverEditCellSpanVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditCellSpanVanillaTableExample)(); };
    CdkPopoverEditCellSpanVanillaTableExample.ɵcmp = ɵɵdefineComponent({ type: CdkPopoverEditCellSpanVanillaTableExample, selectors: [["cdk-popover-edit-cell-span-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["nameEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "#ddd", "width", "100%"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], [1, "example-input-container"], ["name", "firstName", "required", "", 3, "ngModel"], ["name", "middleName", 3, "ngModel"], ["name", "lastName", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan"], [4, "cdkRowHoverContent"], ["cdkEditOpen", ""]], template: function CdkPopoverEditCellSpanVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "table", 0);
            ɵɵtemplate(1, CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template, 15, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementStart(3, "tr");
            ɵɵelementStart(4, "th");
            ɵɵtext(5, " No. ");
            ɵɵelementEnd();
            ɵɵelementStart(6, "th");
            ɵɵtext(7, " First name ");
            ɵɵelementEnd();
            ɵɵelementStart(8, "th");
            ɵɵtext(9, " Middle name ");
            ɵɵelementEnd();
            ɵɵelementStart(10, "th");
            ɵɵtext(11, " Last name ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(12, CdkPopoverEditCellSpanVanillaTableExample_tr_12_Template, 12, 22, "tr", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(12);
            ɵɵproperty("ngForOf", ctx.persons);
        } }, directives: [CdkEditable, NgForOf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, CdkEditControl, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, CdkEditRevert, CdkEditClose, CdkPopoverEdit, CdkRowHoverContent, CdkEditOpen], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n}"] });
    return CdkPopoverEditCellSpanVanillaTableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkPopoverEditCellSpanVanillaTableExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-cell-span-vanilla-table-example',
                styleUrls: ['cdk-popover-edit-cell-span-vanilla-table-example.css'],
                templateUrl: 'cdk-popover-edit-cell-span-vanilla-table-example.html',
            }]
    }], null, null); })();

function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r84 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "form", 4, 5);
    ɵɵlistener("ngSubmit", function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r84); var element_r81 = ctx.$implicit; var _r82 = ɵɵreference(2); var ctx_r83 = ɵɵnextContext(); return ctx_r83.onSubmitWeight(element_r81, _r82); });
    ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r84); var element_r81 = ctx.$implicit; var ctx_r85 = ɵɵnextContext(); return ctx_r85.preservedWeightValues.set(element_r81, $event); });
    ɵɵelement(3, "input", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r81 = ctx.$implicit;
    var ctx_r79 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r79.preservedWeightValues.get(element_r81));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", element_r81.weight);
} }
function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r92 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "form", 4, 5);
    ɵɵlistener("ngSubmit", function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r92); var _r89 = ɵɵreference(2); var element_r86 = ɵɵnextContext().$implicit; var ctx_r90 = ɵɵnextContext(); return ctx_r90.onSubmitName(element_r86, _r89); });
    ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r92); var element_r86 = ɵɵnextContext().$implicit; var ctx_r93 = ɵɵnextContext(); return ctx_r93.preservedNameValues.set(element_r86, $event); });
    ɵɵelement(3, "input", 10);
    ɵɵelement(4, "br");
    ɵɵelementStart(5, "button", 11);
    ɵɵtext(6, "Confirm");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r86 = ɵɵnextContext().$implicit;
    var ctx_r88 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r88.preservedNameValues.get(element_r86));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", element_r86.name);
} }
function CdkPopoverEditTabOutVanillaTableExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td", 7);
    ɵɵtext(4);
    ɵɵtemplate(5, CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template, 7, 2, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(7, "td", 9);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "td");
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r86 = ctx.$implicit;
    var _r87 = ɵɵreference(6);
    ɵɵnextContext();
    var _r78 = ɵɵreference(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", element_r86.position, " ");
    ɵɵadvance(1);
    ɵɵproperty("cdkPopoverEdit", _r87);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r86.name, " ");
    ɵɵadvance(3);
    ɵɵproperty("cdkPopoverEdit", _r78)("cdkPopoverEditContext", element_r86);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r86.weight, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", element_r86.symbol, " ");
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
/**
 * @title CDK Popover Edit with spreadsheet-like configuration on an HTML data-table
 */
var CdkPopoverEditTabOutVanillaTableExample = /** @class */ (function () {
    function CdkPopoverEditTabOutVanillaTableExample() {
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
        this.elements = ELEMENT_DATA$2;
    }
    CdkPopoverEditTabOutVanillaTableExample.prototype.onSubmitName = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    };
    CdkPopoverEditTabOutVanillaTableExample.prototype.onSubmitWeight = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    };
    CdkPopoverEditTabOutVanillaTableExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-popover-edit-tab-out-vanilla-table-example',
                    styleUrls: ['cdk-popover-edit-tab-out-vanilla-table-example.css'],
                    templateUrl: 'cdk-popover-edit-tab-out-vanilla-table-example.html',
                },] },
    ];
    CdkPopoverEditTabOutVanillaTableExample.ɵfac = function CdkPopoverEditTabOutVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditTabOutVanillaTableExample)(); };
    CdkPopoverEditTabOutVanillaTableExample.ɵcmp = ɵɵdefineComponent({ type: CdkPopoverEditTabOutVanillaTableExample, selectors: [["cdk-popover-edit-tab-out-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["weightEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "white", "width", "100%"], ["cdkEditControl", "", "cdkEditControlClickOutBehavior", "submit", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["cdkPopoverEditTabOut", "", "cdkEditOpen", "", 3, "cdkPopoverEdit"], ["nameEdit", ""], ["cdkPopoverEditTabOut", "", "cdkEditOpen", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["name", "name", "required", "", 3, "ngModel"], ["type", "submit"]], template: function CdkPopoverEditTabOutVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "table", 0);
            ɵɵtemplate(1, CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template, 4, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementStart(3, "tr");
            ɵɵelementStart(4, "th");
            ɵɵtext(5, " No. ");
            ɵɵelementEnd();
            ɵɵelementStart(6, "th");
            ɵɵtext(7, " Name ");
            ɵɵelementEnd();
            ɵɵelementStart(8, "th");
            ɵɵtext(9, " Weight ");
            ɵɵelementEnd();
            ɵɵelementStart(10, "th");
            ɵɵtext(11, " Symbol ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(12, CdkPopoverEditTabOutVanillaTableExample_tr_12_Template, 11, 7, "tr", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(12);
            ɵɵproperty("ngForOf", ctx.elements);
        } }, directives: [CdkEditable, NgForOf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, CdkEditControl, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, CdkEditOpen, CdkPopoverEditTabOut], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}"] });
    return CdkPopoverEditTabOutVanillaTableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkPopoverEditTabOutVanillaTableExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-tab-out-vanilla-table-example',
                styleUrls: ['cdk-popover-edit-tab-out-vanilla-table-example.css'],
                templateUrl: 'cdk-popover-edit-tab-out-vanilla-table-example.html',
            }]
    }], null, null); })();

function CdkPopoverEditVanillaTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r102 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "form", 4, 5);
    ɵɵlistener("ngSubmit", function CdkPopoverEditVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r102); var element_r99 = ctx.$implicit; var _r100 = ɵɵreference(2); var ctx_r101 = ɵɵnextContext(); return ctx_r101.onSubmitWeight(element_r99, _r100); });
    ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r102); var element_r99 = ctx.$implicit; var ctx_r103 = ɵɵnextContext(); return ctx_r103.preservedWeightValues.set(element_r99, $event); });
    ɵɵtext(3, " Edit b: ");
    ɵɵelement(4, "input", 6);
    ɵɵelement(5, "br");
    ɵɵelementStart(6, "button", 7);
    ɵɵtext(7, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 8);
    ɵɵtext(9, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 9);
    ɵɵtext(11, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r99 = ctx.$implicit;
    var ctx_r97 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r97.preservedWeightValues.get(element_r99));
    ɵɵadvance(3);
    ɵɵproperty("ngModel", element_r99.weight);
} }
function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r112 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "form", 4, 5);
    ɵɵlistener("ngSubmit", function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r112); var _r109 = ɵɵreference(2); var element_r104 = ɵɵnextContext().$implicit; var ctx_r110 = ɵɵnextContext(); return ctx_r110.onSubmitName(element_r104, _r109); });
    ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r112); var element_r104 = ɵɵnextContext().$implicit; var ctx_r113 = ɵɵnextContext(); return ctx_r113.preservedNameValues.set(element_r104, $event); });
    ɵɵtext(3, " Edit a: ");
    ɵɵelement(4, "input", 14);
    ɵɵelement(5, "br");
    ɵɵelementStart(6, "button", 7);
    ɵɵtext(7, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 8);
    ɵɵtext(9, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 9);
    ɵɵtext(11, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r104 = ɵɵnextContext().$implicit;
    var ctx_r106 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r106.preservedNameValues.get(element_r104));
    ɵɵadvance(3);
    ɵɵproperty("ngModel", element_r104.name);
} }
function CdkPopoverEditVanillaTableExample_tr_12_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 15);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CdkPopoverEditVanillaTableExample_tr_12_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 15);
    ɵɵtext(2, "Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CdkPopoverEditVanillaTableExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td", 10);
    ɵɵtext(4);
    ɵɵtemplate(5, CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template, 12, 2, "ng-template", null, 11, ɵɵtemplateRefExtractor);
    ɵɵtemplate(7, CdkPopoverEditVanillaTableExample_tr_12_span_7_Template, 3, 0, "span", 12);
    ɵɵelementEnd();
    ɵɵelementStart(8, "td", 13);
    ɵɵtext(9);
    ɵɵtemplate(10, CdkPopoverEditVanillaTableExample_tr_12_span_10_Template, 3, 0, "span", 12);
    ɵɵelementEnd();
    ɵɵelementStart(11, "td");
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r104 = ctx.$implicit;
    var _r105 = ɵɵreference(6);
    ɵɵnextContext();
    var _r96 = ɵɵreference(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", element_r104.position, " ");
    ɵɵadvance(1);
    ɵɵproperty("cdkPopoverEdit", _r105);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r104.name, " ");
    ɵɵadvance(4);
    ɵɵproperty("cdkPopoverEdit", _r96)("cdkPopoverEditContext", element_r104);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r104.weight, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", element_r104.symbol, " ");
} }
var ELEMENT_DATA$3 = [
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
/**
 * @title CDK Popover Edit on an HTML data-table
 */
var CdkPopoverEditVanillaTableExample = /** @class */ (function () {
    function CdkPopoverEditVanillaTableExample() {
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
        this.elements = ELEMENT_DATA$3;
    }
    CdkPopoverEditVanillaTableExample.prototype.onSubmitName = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    };
    CdkPopoverEditVanillaTableExample.prototype.onSubmitWeight = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    };
    CdkPopoverEditVanillaTableExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-popover-edit-vanilla-table-example',
                    styleUrls: ['cdk-popover-edit-vanilla-table-example.css'],
                    templateUrl: 'cdk-popover-edit-vanilla-table-example.html',
                },] },
    ];
    CdkPopoverEditVanillaTableExample.ɵfac = function CdkPopoverEditVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditVanillaTableExample)(); };
    CdkPopoverEditVanillaTableExample.ɵcmp = ɵɵdefineComponent({ type: CdkPopoverEditVanillaTableExample, selectors: [["cdk-popover-edit-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["weightEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "white", "width", "100%"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], [3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditOpen", ""]], template: function CdkPopoverEditVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "table", 0);
            ɵɵtemplate(1, CdkPopoverEditVanillaTableExample_ng_template_1_Template, 12, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementStart(3, "tr");
            ɵɵelementStart(4, "th");
            ɵɵtext(5, " No. ");
            ɵɵelementEnd();
            ɵɵelementStart(6, "th");
            ɵɵtext(7, " Name ");
            ɵɵelementEnd();
            ɵɵelementStart(8, "th");
            ɵɵtext(9, " Weight ");
            ɵɵelementEnd();
            ɵɵelementStart(10, "th");
            ɵɵtext(11, " Symbol ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(12, CdkPopoverEditVanillaTableExample_tr_12_Template, 13, 7, "tr", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(12);
            ɵɵproperty("ngForOf", ctx.elements);
        } }, directives: [CdkEditable, NgForOf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, CdkEditControl, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, CdkEditRevert, CdkEditClose, CdkPopoverEdit, CdkRowHoverContent, CdkEditOpen], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}"] });
    return CdkPopoverEditVanillaTableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkPopoverEditVanillaTableExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-vanilla-table-example',
                styleUrls: ['cdk-popover-edit-vanilla-table-example.css'],
                templateUrl: 'cdk-popover-edit-vanilla-table-example.html',
            }]
    }], null, null); })();

var EXAMPLES = [
    CdkPopoverEditCdkTableExample,
    CdkPopoverEditCdkTableFlexExample,
    CdkPopoverEditCellSpanVanillaTableExample,
    CdkPopoverEditTabOutVanillaTableExample,
    CdkPopoverEditVanillaTableExample,
];
var CdkPopoverEditExamplesModule = /** @class */ (function () {
    function CdkPopoverEditExamplesModule() {
    }
    CdkPopoverEditExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CdkPopoverEditModule,
                        CdkTableModule,
                        FormsModule,
                        CommonModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CdkPopoverEditExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkPopoverEditExamplesModule });
    CdkPopoverEditExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkPopoverEditExamplesModule_Factory(t) { return new (t || CdkPopoverEditExamplesModule)(); }, imports: [[
                CdkPopoverEditModule,
                CdkTableModule,
                FormsModule,
                CommonModule,
            ]] });
    return CdkPopoverEditExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkPopoverEditExamplesModule, { declarations: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample], imports: [CdkPopoverEditModule,
        CdkTableModule,
        FormsModule,
        CommonModule], exports: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkPopoverEditExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkPopoverEditModule,
                    CdkTableModule,
                    FormsModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { CdkPopoverEditCdkTableExample, CdkPopoverEditCdkTableFlexExample, CdkPopoverEditCellSpanVanillaTableExample, CdkPopoverEditExamplesModule, CdkPopoverEditTabOutVanillaTableExample, CdkPopoverEditVanillaTableExample };
//# sourceMappingURL=popover-edit.js.map
