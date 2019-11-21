(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk-experimental/popover-edit'), require('@angular/cdk/table'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('tslib'), require('@angular/cdk/collections'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk-experimental/popover-edit', ['exports', '@angular/cdk-experimental/popover-edit', '@angular/cdk/table', '@angular/common', '@angular/core', '@angular/forms', 'tslib', '@angular/cdk/collections', 'rxjs'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdkExperimental = global.ng.componentsExamples.cdkExperimental || {}, global.ng.componentsExamples.cdkExperimental.popoverEdit = {}), global.ng.cdkExperimental.popoverEdit, global.ng.cdk.table, global.ng.common, global.ng.core, global.ng.forms, global.tslib, global.ng.cdk.collections, global.rxjs));
}(this, (function (exports, i1, i1$1, i2, i0, i3, tslib, collections, rxjs) { 'use strict';

    function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 12);
        i0.ɵɵelementStart(1, "form", 13, 14);
        i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r15); var element_r12 = ctx.$implicit; var _r13 = i0.ɵɵreference(2); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmitWeight(element_r12, _r13); });
        i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r15); var element_r12 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.preservedWeightValues.set(element_r12, $event); });
        i0.ɵɵtext(3, " Edit b: ");
        i0.ɵɵelement(4, "input", 15);
        i0.ɵɵelement(5, "br");
        i0.ɵɵelementStart(6, "button", 16);
        i0.ɵɵtext(7, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 17);
        i0.ɵɵtext(9, "Revert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 18);
        i0.ɵɵtext(11, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r12 = ctx.$implicit;
        var ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r12));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", element_r12.weight);
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-header-cell");
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r17 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r17.position, " ");
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-header-cell");
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        var _r25 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 12);
        i0.ɵɵelementStart(1, "form", 13, 14);
        i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r25); var _r22 = i0.ɵɵreference(2); var element_r18 = i0.ɵɵnextContext().$implicit; var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onSubmitName(element_r18, _r22); });
        i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r25); var element_r18 = i0.ɵɵnextContext().$implicit; var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.preservedNameValues.set(element_r18, $event); });
        i0.ɵɵtext(3, " Edit a: ");
        i0.ɵɵelement(4, "input", 22);
        i0.ɵɵelement(5, "br");
        i0.ɵɵelementStart(6, "button", 16);
        i0.ɵɵtext(7, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 17);
        i0.ɵɵtext(9, "Revert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 18);
        i0.ɵɵtext(11, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r18 = i0.ɵɵnextContext().$implicit;
        var ctx_r20 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r20.preservedNameValues.get(element_r18));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", element_r18.name);
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_span_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 23);
        i0.ɵɵtext(2, "Edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-cell", 19);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template, 12, 2, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, CdkPopoverEditCdkTableFlexExample_cdk_cell_8_span_4_Template, 3, 0, "span", 21);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r18 = ctx.$implicit;
        var _r19 = i0.ɵɵreference(3);
        i0.ɵɵproperty("cdkPopoverEdit", _r19);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r18.name, " ");
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-header-cell");
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_11_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 23);
        i0.ɵɵtext(2, "Edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-cell", 24);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, CdkPopoverEditCdkTableFlexExample_cdk_cell_11_span_2_Template, 3, 0, "span", 21);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r29 = ctx.$implicit;
        i0.ɵɵnextContext();
        var _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", element_r29);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r29.weight, " ");
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-header-cell");
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r31 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r31.symbol, " ");
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_row_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "cdk-header-row");
    } }
    function CdkPopoverEditCdkTableFlexExample_cdk_row_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "cdk-row");
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
            { type: i0.Component, args: [{
                        selector: 'cdk-popover-edit-cdk-table-flex-example',
                        styleUrls: ['cdk-popover-edit-cdk-table-flex-example.css'],
                        templateUrl: 'cdk-popover-edit-cdk-table-flex-example.html',
                    },] },
        ];
        CdkPopoverEditCdkTableFlexExample.ɵfac = function CdkPopoverEditCdkTableFlexExample_Factory(t) { return new (t || CdkPopoverEditCdkTableFlexExample)(); };
        CdkPopoverEditCdkTableFlexExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPopoverEditCdkTableFlexExample, selectors: [["cdk-popover-edit-cdk-table-flex-example"]], decls: 17, vars: 3, consts: [["editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["cdkColumnDef", "position"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "name"], [3, "cdkPopoverEdit", 4, "cdkCellDef"], ["cdkColumnDef", "weight"], [3, "cdkPopoverEdit", "cdkPopoverEditContext", 4, "cdkCellDef"], ["cdkColumnDef", "symbol"], [4, "cdkHeaderRowDef"], [4, "cdkRowDef", "cdkRowDefColumns"], [2, "background-color", "white"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditOpen", ""], [3, "cdkPopoverEdit", "cdkPopoverEditContext"]], template: function CdkPopoverEditCdkTableFlexExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-table", 0);
                i0.ɵɵtemplate(1, CdkPopoverEditCdkTableFlexExample_ng_template_1_Template, 12, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_4_Template, 2, 0, "cdk-header-cell", 3);
                i0.ɵɵtemplate(5, CdkPopoverEditCdkTableFlexExample_cdk_cell_5_Template, 2, 1, "cdk-cell", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_7_Template, 2, 0, "cdk-header-cell", 3);
                i0.ɵɵtemplate(8, CdkPopoverEditCdkTableFlexExample_cdk_cell_8_Template, 5, 2, "cdk-cell", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_10_Template, 2, 0, "cdk-header-cell", 3);
                i0.ɵɵtemplate(11, CdkPopoverEditCdkTableFlexExample_cdk_cell_11_Template, 3, 3, "cdk-cell", 8);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 9);
                i0.ɵɵtemplate(13, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_13_Template, 2, 0, "cdk-header-cell", 3);
                i0.ɵɵtemplate(14, CdkPopoverEditCdkTableFlexExample_cdk_cell_14_Template, 2, 1, "cdk-cell", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, CdkPopoverEditCdkTableFlexExample_cdk_header_row_15_Template, 1, 0, "cdk-header-row", 10);
                i0.ɵɵtemplate(16, CdkPopoverEditCdkTableFlexExample_cdk_row_16_Template, 1, 0, "cdk-row", 11);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.CdkTable, i1.CdkEditable, i1$1.CdkColumnDef, i1$1.CdkHeaderCellDef, i1$1.CdkCellDef, i1$1.CdkHeaderRowDef, i1$1.CdkRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i1.CdkEditControl, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1.CdkEditRevert, i1.CdkEditClose, i1$1.CdkHeaderCell, i1$1.CdkCell, i1.CdkPopoverEdit, i1.CdkRowHoverContent, i1.CdkEditOpen, i1$1.CdkHeaderRow, i1$1.CdkRow], styles: [".example-table[_ngcontent-%COMP%]   cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-table[_ngcontent-%COMP%]   cdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
        return CdkPopoverEditCdkTableFlexExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditCdkTableFlexExample, [{
            type: i0.Component,
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
        tslib.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function CdkPopoverEditCdkTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r48 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 12);
        i0.ɵɵelementStart(1, "form", 13, 14);
        i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r48); var element_r45 = ctx.$implicit; var _r46 = i0.ɵɵreference(2); var ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.onSubmitWeight(element_r45, _r46); });
        i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r48); var element_r45 = ctx.$implicit; var ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.preservedWeightValues.set(element_r45, $event); });
        i0.ɵɵtext(3, " Edit b: ");
        i0.ɵɵelement(4, "input", 15);
        i0.ɵɵelement(5, "br");
        i0.ɵɵelementStart(6, "button", 16);
        i0.ɵɵtext(7, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 17);
        i0.ɵɵtext(9, "Revert and close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r45 = ctx.$implicit;
        var ctx_r34 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r34.preservedWeightValues.get(element_r45));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", element_r45.weight);
    } }
    function CdkPopoverEditCdkTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 18);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 19);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r50 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r50.position, " ");
    } }
    function CdkPopoverEditCdkTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 18);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        var _r58 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 12);
        i0.ɵɵelementStart(1, "form", 13, 14);
        i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r58); var _r55 = i0.ɵɵreference(2); var element_r51 = i0.ɵɵnextContext().$implicit; var ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.onSubmitName(element_r51, _r55); });
        i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r58); var element_r51 = i0.ɵɵnextContext().$implicit; var ctx_r59 = i0.ɵɵnextContext(); return ctx_r59.preservedNameValues.set(element_r51, $event); });
        i0.ɵɵtext(3, " Edit a: ");
        i0.ɵɵelement(4, "input", 23);
        i0.ɵɵelement(5, "br");
        i0.ɵɵelementStart(6, "button", 16);
        i0.ɵɵtext(7, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 24);
        i0.ɵɵtext(9, "Revert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 25);
        i0.ɵɵtext(11, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r51 = i0.ɵɵnextContext().$implicit;
        var ctx_r53 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r53.preservedNameValues.get(element_r51));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", element_r51.name);
    } }
    function CdkPopoverEditCdkTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 26);
        i0.ɵɵtext(2, "Edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 20);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template, 12, 2, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, CdkPopoverEditCdkTableExample_td_8_span_4_Template, 3, 0, "span", 22);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r51 = ctx.$implicit;
        var _r52 = i0.ɵɵreference(3);
        i0.ɵɵproperty("cdkPopoverEdit", _r52);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r51.name, " ");
    } }
    function CdkPopoverEditCdkTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 18);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 26);
        i0.ɵɵtext(2, "Edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 27);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, CdkPopoverEditCdkTableExample_td_11_span_2_Template, 3, 0, "span", 22);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r62 = ctx.$implicit;
        i0.ɵɵnextContext();
        var _r33 = i0.ɵɵreference(2);
        i0.ɵɵproperty("cdkPopoverEdit", _r33)("cdkPopoverEditContext", element_r62);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r62.weight, " ");
    } }
    function CdkPopoverEditCdkTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 18);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCdkTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 19);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r64 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r64.symbol, " ");
    } }
    function CdkPopoverEditCdkTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 28);
    } }
    function CdkPopoverEditCdkTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 29);
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
            { type: i0.Component, args: [{
                        selector: 'cdk-popover-edit-cdk-table-example',
                        styleUrls: ['cdk-popover-edit-cdk-table-example.css'],
                        templateUrl: 'cdk-popover-edit-cdk-table-example.html',
                    },] },
        ];
        CdkPopoverEditCdkTableExample.ɵfac = function CdkPopoverEditCdkTableExample_Factory(t) { return new (t || CdkPopoverEditCdkTableExample)(); };
        CdkPopoverEditCdkTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPopoverEditCdkTableExample, selectors: [["cdk-popover-edit-cdk-table-example"]], decls: 17, vars: 3, consts: [["cdk-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdk-cell", "", 3, "cdkPopoverEdit", 4, "cdkCellDef"], ["cdkColumnDef", "weight"], ["cdk-cell", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext", 4, "cdkCellDef"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [2, "background-color", "white"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", "", "cdkEditClose", ""], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-cell", "", 3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditRevert", ""], ["cdkEditClose", ""], ["cdkEditOpen", ""], ["cdk-cell", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkPopoverEditCdkTableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, CdkPopoverEditCdkTableExample_ng_template_1_Template, 10, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, CdkPopoverEditCdkTableExample_th_4_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(5, CdkPopoverEditCdkTableExample_td_5_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, CdkPopoverEditCdkTableExample_th_7_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(8, CdkPopoverEditCdkTableExample_td_8_Template, 5, 2, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, CdkPopoverEditCdkTableExample_th_10_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(11, CdkPopoverEditCdkTableExample_td_11_Template, 3, 3, "td", 8);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 9);
                i0.ɵɵtemplate(13, CdkPopoverEditCdkTableExample_th_13_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(14, CdkPopoverEditCdkTableExample_td_14_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, CdkPopoverEditCdkTableExample_tr_15_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(16, CdkPopoverEditCdkTableExample_tr_16_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.CdkTable, i1.CdkEditable, i1$1.CdkColumnDef, i1$1.CdkHeaderCellDef, i1$1.CdkCellDef, i1$1.CdkHeaderRowDef, i1$1.CdkRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i1.CdkEditControl, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1.CdkEditRevert, i1.CdkEditClose, i1$1.CdkHeaderCell, i1$1.CdkCell, i1.CdkPopoverEdit, i1.CdkRowHoverContent, i1.CdkEditOpen, i1$1.CdkHeaderRow, i1$1.CdkRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
        return CdkPopoverEditCdkTableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditCdkTableExample, [{
            type: i0.Component,
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
        tslib.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$1);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r72 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 3);
        i0.ɵɵelementStart(1, "form", 4, 5);
        i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r72); var ctx_r69 = ctx.$implicit; var _r70 = i0.ɵɵreference(2); var ctx_r71 = i0.ɵɵnextContext(); return ctx_r71.onSubmit(ctx_r69.person, _r70); });
        i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r72); var ctx_r69 = ctx.$implicit; var ctx_r73 = i0.ɵɵnextContext(); return ctx_r73.preservedValues.set(ctx_r69.person, $event); });
        i0.ɵɵelementStart(3, "div", 6);
        i0.ɵɵelement(4, "input", 7);
        i0.ɵɵelement(5, "input", 8);
        i0.ɵɵelement(6, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "br");
        i0.ɵɵelement(8, "br");
        i0.ɵɵelementStart(9, "button", 10);
        i0.ɵɵtext(10, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 11);
        i0.ɵɵtext(12, "Revert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 12);
        i0.ɵɵtext(14, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r69 = ctx.$implicit;
        var ctx_r67 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r67.preservedValues.get(ctx_r69.person));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx_r69.person.firstName);
        i0.ɵɵattribute("cdkFocusInitial", ctx_r69.focus === "firstName" || null);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r69.person.middleName);
        i0.ɵɵattribute("cdkFocusInitial", ctx_r69.focus === "middleName" || null);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r69.person.lastName);
        i0.ɵɵattribute("cdkFocusInitial", ctx_r69.focus === "lastName" || null);
    } }
    function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 15);
        i0.ɵɵtext(2, "Edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 15);
        i0.ɵɵtext(2, "Edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 15);
        i0.ɵɵtext(2, "Edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    var _c0 = function (a0) { return { person: a0, focus: "firstName" }; };
    var _c1 = function () { return { after: 2 }; };
    var _c2 = function (a0) { return { person: a0, focus: "middleName" }; };
    var _c3 = function () { return { before: 1, after: 1 }; };
    var _c4 = function (a0) { return { person: a0, focus: "lastName" }; };
    var _c5 = function () { return { before: 2 }; };
    function CdkPopoverEditCellSpanVanillaTableExample_tr_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "tr");
        i0.ɵɵelementStart(1, "td");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "td", 13);
        i0.ɵɵtext(4);
        i0.ɵɵtemplate(5, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_5_Template, 3, 0, "span", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "td", 13);
        i0.ɵɵtext(7);
        i0.ɵɵtemplate(8, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_8_Template, 3, 0, "span", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "td", 13);
        i0.ɵɵtext(10);
        i0.ɵɵtemplate(11, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_11_Template, 3, 0, "span", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var person_r74 = ctx.$implicit;
        i0.ɵɵnextContext();
        var _r66 = i0.ɵɵreference(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", person_r74.id, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkPopoverEdit", _r66)("cdkPopoverEditContext", i0.ɵɵpureFunction1(13, _c0, person_r74))("cdkPopoverEditColspan", i0.ɵɵpureFunction0(15, _c1));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", person_r74.firstName, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkPopoverEdit", _r66)("cdkPopoverEditContext", i0.ɵɵpureFunction1(16, _c2, person_r74))("cdkPopoverEditColspan", i0.ɵɵpureFunction0(18, _c3));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", person_r74.middleName, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkPopoverEdit", _r66)("cdkPopoverEditContext", i0.ɵɵpureFunction1(19, _c4, person_r74))("cdkPopoverEditColspan", i0.ɵɵpureFunction0(21, _c5));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", person_r74.lastName, " ");
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
            { type: i0.Component, args: [{
                        selector: 'cdk-popover-edit-cell-span-vanilla-table-example',
                        styleUrls: ['cdk-popover-edit-cell-span-vanilla-table-example.css'],
                        templateUrl: 'cdk-popover-edit-cell-span-vanilla-table-example.html',
                    },] },
        ];
        CdkPopoverEditCellSpanVanillaTableExample.ɵfac = function CdkPopoverEditCellSpanVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditCellSpanVanillaTableExample)(); };
        CdkPopoverEditCellSpanVanillaTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPopoverEditCellSpanVanillaTableExample, selectors: [["cdk-popover-edit-cell-span-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["nameEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "#ddd", "width", "100%"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], [1, "example-input-container"], ["name", "firstName", "required", "", 3, "ngModel"], ["name", "middleName", 3, "ngModel"], ["name", "lastName", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan"], [4, "cdkRowHoverContent"], ["cdkEditOpen", ""]], template: function CdkPopoverEditCellSpanVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template, 15, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(3, "tr");
                i0.ɵɵelementStart(4, "th");
                i0.ɵɵtext(5, " No. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "th");
                i0.ɵɵtext(7, " First name ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "th");
                i0.ɵɵtext(9, " Middle name ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "th");
                i0.ɵɵtext(11, " Last name ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(12, CdkPopoverEditCellSpanVanillaTableExample_tr_12_Template, 12, 22, "tr", 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(12);
                i0.ɵɵproperty("ngForOf", ctx.persons);
            } }, directives: [i1.CdkEditable, i2.NgForOf, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i1.CdkEditControl, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1.CdkEditRevert, i1.CdkEditClose, i1.CdkPopoverEdit, i1.CdkRowHoverContent, i1.CdkEditOpen], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n}"] });
        return CdkPopoverEditCellSpanVanillaTableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditCellSpanVanillaTableExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-popover-edit-cell-span-vanilla-table-example',
                    styleUrls: ['cdk-popover-edit-cell-span-vanilla-table-example.css'],
                    templateUrl: 'cdk-popover-edit-cell-span-vanilla-table-example.html',
                }]
        }], null, null); })();

    function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r84 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 3);
        i0.ɵɵelementStart(1, "form", 4, 5);
        i0.ɵɵlistener("ngSubmit", function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r84); var element_r81 = ctx.$implicit; var _r82 = i0.ɵɵreference(2); var ctx_r83 = i0.ɵɵnextContext(); return ctx_r83.onSubmitWeight(element_r81, _r82); });
        i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r84); var element_r81 = ctx.$implicit; var ctx_r85 = i0.ɵɵnextContext(); return ctx_r85.preservedWeightValues.set(element_r81, $event); });
        i0.ɵɵelement(3, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r81 = ctx.$implicit;
        var ctx_r79 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r79.preservedWeightValues.get(element_r81));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", element_r81.weight);
    } }
    function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        var _r92 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 3);
        i0.ɵɵelementStart(1, "form", 4, 5);
        i0.ɵɵlistener("ngSubmit", function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r92); var _r89 = i0.ɵɵreference(2); var element_r86 = i0.ɵɵnextContext().$implicit; var ctx_r90 = i0.ɵɵnextContext(); return ctx_r90.onSubmitName(element_r86, _r89); });
        i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r92); var element_r86 = i0.ɵɵnextContext().$implicit; var ctx_r93 = i0.ɵɵnextContext(); return ctx_r93.preservedNameValues.set(element_r86, $event); });
        i0.ɵɵelement(3, "input", 10);
        i0.ɵɵelement(4, "br");
        i0.ɵɵelementStart(5, "button", 11);
        i0.ɵɵtext(6, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r86 = i0.ɵɵnextContext().$implicit;
        var ctx_r88 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r88.preservedNameValues.get(element_r86));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", element_r86.name);
    } }
    function CdkPopoverEditTabOutVanillaTableExample_tr_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "tr");
        i0.ɵɵelementStart(1, "td");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "td", 7);
        i0.ɵɵtext(4);
        i0.ɵɵtemplate(5, CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template, 7, 2, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "td", 9);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "td");
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r86 = ctx.$implicit;
        var _r87 = i0.ɵɵreference(6);
        i0.ɵɵnextContext();
        var _r78 = i0.ɵɵreference(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", element_r86.position, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkPopoverEdit", _r87);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r86.name, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkPopoverEdit", _r78)("cdkPopoverEditContext", element_r86);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r86.weight, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", element_r86.symbol, " ");
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
            { type: i0.Component, args: [{
                        selector: 'cdk-popover-edit-tab-out-vanilla-table-example',
                        styleUrls: ['cdk-popover-edit-tab-out-vanilla-table-example.css'],
                        templateUrl: 'cdk-popover-edit-tab-out-vanilla-table-example.html',
                    },] },
        ];
        CdkPopoverEditTabOutVanillaTableExample.ɵfac = function CdkPopoverEditTabOutVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditTabOutVanillaTableExample)(); };
        CdkPopoverEditTabOutVanillaTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPopoverEditTabOutVanillaTableExample, selectors: [["cdk-popover-edit-tab-out-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["weightEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "white", "width", "100%"], ["cdkEditControl", "", "cdkEditControlClickOutBehavior", "submit", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["cdkPopoverEditTabOut", "", "cdkEditOpen", "", 3, "cdkPopoverEdit"], ["nameEdit", ""], ["cdkPopoverEditTabOut", "", "cdkEditOpen", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["name", "name", "required", "", 3, "ngModel"], ["type", "submit"]], template: function CdkPopoverEditTabOutVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template, 4, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(3, "tr");
                i0.ɵɵelementStart(4, "th");
                i0.ɵɵtext(5, " No. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "th");
                i0.ɵɵtext(7, " Name ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "th");
                i0.ɵɵtext(9, " Weight ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "th");
                i0.ɵɵtext(11, " Symbol ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(12, CdkPopoverEditTabOutVanillaTableExample_tr_12_Template, 11, 7, "tr", 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(12);
                i0.ɵɵproperty("ngForOf", ctx.elements);
            } }, directives: [i1.CdkEditable, i2.NgForOf, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i1.CdkEditControl, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1.CdkEditOpen, i1.CdkPopoverEditTabOut], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}"] });
        return CdkPopoverEditTabOutVanillaTableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditTabOutVanillaTableExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-popover-edit-tab-out-vanilla-table-example',
                    styleUrls: ['cdk-popover-edit-tab-out-vanilla-table-example.css'],
                    templateUrl: 'cdk-popover-edit-tab-out-vanilla-table-example.html',
                }]
        }], null, null); })();

    function CdkPopoverEditVanillaTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r102 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 3);
        i0.ɵɵelementStart(1, "form", 4, 5);
        i0.ɵɵlistener("ngSubmit", function CdkPopoverEditVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r102); var element_r99 = ctx.$implicit; var _r100 = i0.ɵɵreference(2); var ctx_r101 = i0.ɵɵnextContext(); return ctx_r101.onSubmitWeight(element_r99, _r100); });
        i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r102); var element_r99 = ctx.$implicit; var ctx_r103 = i0.ɵɵnextContext(); return ctx_r103.preservedWeightValues.set(element_r99, $event); });
        i0.ɵɵtext(3, " Edit b: ");
        i0.ɵɵelement(4, "input", 6);
        i0.ɵɵelement(5, "br");
        i0.ɵɵelementStart(6, "button", 7);
        i0.ɵɵtext(7, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 8);
        i0.ɵɵtext(9, "Revert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 9);
        i0.ɵɵtext(11, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r99 = ctx.$implicit;
        var ctx_r97 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r97.preservedWeightValues.get(element_r99));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", element_r99.weight);
    } }
    function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        var _r112 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 3);
        i0.ɵɵelementStart(1, "form", 4, 5);
        i0.ɵɵlistener("ngSubmit", function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r112); var _r109 = i0.ɵɵreference(2); var element_r104 = i0.ɵɵnextContext().$implicit; var ctx_r110 = i0.ɵɵnextContext(); return ctx_r110.onSubmitName(element_r104, _r109); });
        i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r112); var element_r104 = i0.ɵɵnextContext().$implicit; var ctx_r113 = i0.ɵɵnextContext(); return ctx_r113.preservedNameValues.set(element_r104, $event); });
        i0.ɵɵtext(3, " Edit a: ");
        i0.ɵɵelement(4, "input", 14);
        i0.ɵɵelement(5, "br");
        i0.ɵɵelementStart(6, "button", 7);
        i0.ɵɵtext(7, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 8);
        i0.ɵɵtext(9, "Revert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 9);
        i0.ɵɵtext(11, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r104 = i0.ɵɵnextContext().$implicit;
        var ctx_r106 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r106.preservedNameValues.get(element_r104));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", element_r104.name);
    } }
    function CdkPopoverEditVanillaTableExample_tr_12_span_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 15);
        i0.ɵɵtext(2, "Edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditVanillaTableExample_tr_12_span_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 15);
        i0.ɵɵtext(2, "Edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function CdkPopoverEditVanillaTableExample_tr_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "tr");
        i0.ɵɵelementStart(1, "td");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "td", 10);
        i0.ɵɵtext(4);
        i0.ɵɵtemplate(5, CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template, 12, 2, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(7, CdkPopoverEditVanillaTableExample_tr_12_span_7_Template, 3, 0, "span", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "td", 13);
        i0.ɵɵtext(9);
        i0.ɵɵtemplate(10, CdkPopoverEditVanillaTableExample_tr_12_span_10_Template, 3, 0, "span", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "td");
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r104 = ctx.$implicit;
        var _r105 = i0.ɵɵreference(6);
        i0.ɵɵnextContext();
        var _r96 = i0.ɵɵreference(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", element_r104.position, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkPopoverEdit", _r105);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r104.name, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("cdkPopoverEdit", _r96)("cdkPopoverEditContext", element_r104);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r104.weight, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", element_r104.symbol, " ");
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
            { type: i0.Component, args: [{
                        selector: 'cdk-popover-edit-vanilla-table-example',
                        styleUrls: ['cdk-popover-edit-vanilla-table-example.css'],
                        templateUrl: 'cdk-popover-edit-vanilla-table-example.html',
                    },] },
        ];
        CdkPopoverEditVanillaTableExample.ɵfac = function CdkPopoverEditVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditVanillaTableExample)(); };
        CdkPopoverEditVanillaTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPopoverEditVanillaTableExample, selectors: [["cdk-popover-edit-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["weightEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "white", "width", "100%"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], [3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditOpen", ""]], template: function CdkPopoverEditVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, CdkPopoverEditVanillaTableExample_ng_template_1_Template, 12, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(3, "tr");
                i0.ɵɵelementStart(4, "th");
                i0.ɵɵtext(5, " No. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "th");
                i0.ɵɵtext(7, " Name ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "th");
                i0.ɵɵtext(9, " Weight ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "th");
                i0.ɵɵtext(11, " Symbol ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(12, CdkPopoverEditVanillaTableExample_tr_12_Template, 13, 7, "tr", 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(12);
                i0.ɵɵproperty("ngForOf", ctx.elements);
            } }, directives: [i1.CdkEditable, i2.NgForOf, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i1.CdkEditControl, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1.CdkEditRevert, i1.CdkEditClose, i1.CdkPopoverEdit, i1.CdkRowHoverContent, i1.CdkEditOpen], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}"] });
        return CdkPopoverEditVanillaTableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditVanillaTableExample, [{
            type: i0.Component,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CdkPopoverEditModule,
                            i1$1.CdkTableModule,
                            i3.FormsModule,
                            i2.CommonModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        CdkPopoverEditExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkPopoverEditExamplesModule });
        CdkPopoverEditExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkPopoverEditExamplesModule_Factory(t) { return new (t || CdkPopoverEditExamplesModule)(); }, imports: [[
                    i1.CdkPopoverEditModule,
                    i1$1.CdkTableModule,
                    i3.FormsModule,
                    i2.CommonModule,
                ]] });
        return CdkPopoverEditExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkPopoverEditExamplesModule, { declarations: [CdkPopoverEditCdkTableExample,
            CdkPopoverEditCdkTableFlexExample,
            CdkPopoverEditCellSpanVanillaTableExample,
            CdkPopoverEditTabOutVanillaTableExample,
            CdkPopoverEditVanillaTableExample], imports: [i1.CdkPopoverEditModule,
            i1$1.CdkTableModule,
            i3.FormsModule,
            i2.CommonModule], exports: [CdkPopoverEditCdkTableExample,
            CdkPopoverEditCdkTableFlexExample,
            CdkPopoverEditCellSpanVanillaTableExample,
            CdkPopoverEditTabOutVanillaTableExample,
            CdkPopoverEditVanillaTableExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.CdkPopoverEditModule,
                        i1$1.CdkTableModule,
                        i3.FormsModule,
                        i2.CommonModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.CdkPopoverEditCdkTableExample = CdkPopoverEditCdkTableExample;
    exports.CdkPopoverEditCdkTableFlexExample = CdkPopoverEditCdkTableFlexExample;
    exports.CdkPopoverEditCellSpanVanillaTableExample = CdkPopoverEditCellSpanVanillaTableExample;
    exports.CdkPopoverEditExamplesModule = CdkPopoverEditExamplesModule;
    exports.CdkPopoverEditTabOutVanillaTableExample = CdkPopoverEditTabOutVanillaTableExample;
    exports.CdkPopoverEditVanillaTableExample = CdkPopoverEditVanillaTableExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-experimental-popover-edit.umd.js.map
