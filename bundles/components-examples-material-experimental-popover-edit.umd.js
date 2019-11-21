(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material-experimental/popover-edit'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/snack-bar'), require('@angular/material/table'), require('tslib'), require('@angular/cdk/collections'), require('rxjs'), require('@angular/cdk-experimental/popover-edit'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/popover-edit', ['exports', '@angular/core', '@angular/forms', '@angular/material-experimental/popover-edit', '@angular/material/button', '@angular/material/icon', '@angular/material/input', '@angular/material/snack-bar', '@angular/material/table', 'tslib', '@angular/cdk/collections', 'rxjs', '@angular/cdk-experimental/popover-edit', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.popoverEdit = {}), global.ng.core, global.ng.forms, global.ng.materialExperimental.popoverEdit, global.ng.material.button, global.ng.material.icon, global.ng.material.input, global.ng.material.snackBar, global.ng.material.table, global.tslib, global.ng.cdk.collections, global.rxjs, global.ng.cdkExperimental.popoverEdit, global.ng.material.formField));
}(this, (function (exports, i0, i3, i4, i7, i8, i6, i1, i1$1, tslib, collections, rxjs, i2, i5) { 'use strict';

    function PopoverEditCellSpanMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "form", 11, 12);
        i0.ɵɵlistener("ngSubmit", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r12 = ctx.$implicit; var _r13 = i0.ɵɵreference(2); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmit(ctx_r12.person, _r13); });
        i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r12 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.preservedValues.set(ctx_r12.person, $event); });
        i0.ɵɵelementStart(3, "div", 13);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelement(5, "input", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelement(7, "input", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-form-field");
        i0.ɵɵelement(9, "input", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 17);
        i0.ɵɵelementStart(11, "button", 18);
        i0.ɵɵtext(12, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 19);
        i0.ɵɵtext(14, "Revert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 20);
        i0.ɵɵtext(16, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r12 = ctx.$implicit;
        var ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r1.preservedValues.get(ctx_r12.person));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx_r12.person.firstName);
        i0.ɵɵattribute("cdkFocusInitial", ctx_r12.focus === "firstName" || null);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx_r12.person.middleName);
        i0.ɵɵattribute("cdkFocusInitial", ctx_r12.focus === "middleName" || null);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx_r12.person.lastName);
        i0.ɵɵattribute("cdkFocusInitial", ctx_r12.focus === "lastName" || null);
    } }
    function PopoverEditCellSpanMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 21);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditCellSpanMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 22);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var person_r17 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", person_r17.id, " ");
    } }
    function PopoverEditCellSpanMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 21);
        i0.ɵɵtext(1, " First Name ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditCellSpanMatTableExample_td_8_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 25);
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    var _c0 = function (a0) { return { person: a0, focus: "firstName" }; };
    var _c1 = function () { return { after: 2 }; };
    function PopoverEditCellSpanMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 23);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_8_span_2_Template, 4, 0, "span", 24);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var person_r18 = ctx.$implicit;
        i0.ɵɵnextContext();
        var _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c0, person_r18))("matPopoverEditColspan", i0.ɵɵpureFunction0(6, _c1));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", person_r18.firstName, " ");
    } }
    function PopoverEditCellSpanMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 21);
        i0.ɵɵtext(1, " Middle Name ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditCellSpanMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 25);
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    var _c2 = function (a0) { return { person: a0, focus: "middleName" }; };
    var _c3 = function () { return { before: 1, after: 1 }; };
    function PopoverEditCellSpanMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 23);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_11_span_2_Template, 4, 0, "span", 24);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var person_r20 = ctx.$implicit;
        i0.ɵɵnextContext();
        var _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c2, person_r20))("matPopoverEditColspan", i0.ɵɵpureFunction0(6, _c3));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", person_r20.middleName, " ");
    } }
    function PopoverEditCellSpanMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 21);
        i0.ɵɵtext(1, " Last Name ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditCellSpanMatTableExample_td_14_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 25);
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    var _c4 = function (a0) { return { person: a0, focus: "lastName" }; };
    var _c5 = function () { return { before: 2 }; };
    function PopoverEditCellSpanMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 23);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_14_span_2_Template, 4, 0, "span", 24);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var person_r22 = ctx.$implicit;
        i0.ɵɵnextContext();
        var _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c4, person_r22))("matPopoverEditColspan", i0.ɵɵpureFunction0(6, _c5));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", person_r22.lastName, " ");
    } }
    function PopoverEditCellSpanMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 26);
    } }
    function PopoverEditCellSpanMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 27);
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
     * @title Material Popover Edit spanning multiple columns on a Material data-table
     */
    var PopoverEditCellSpanMatTableExample = /** @class */ (function () {
        function PopoverEditCellSpanMatTableExample() {
            this.displayedColumns = ['id', 'firstName', 'middleName', 'lastName'];
            this.dataSource = new ExampleDataSource();
            this.preservedValues = new WeakMap();
        }
        PopoverEditCellSpanMatTableExample.prototype.onSubmit = function (person, f) {
            if (!f.valid) {
                return;
            }
            person.firstName = f.value['firstName'];
            person.middleName = f.value['middleName'];
            person.lastName = f.value['lastName'];
        };
        PopoverEditCellSpanMatTableExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'popover-edit-cell-span-mat-table-example',
                        styleUrls: ['popover-edit-cell-span-mat-table-example.css'],
                        templateUrl: 'popover-edit-cell-span-mat-table-example.html',
                    },] },
        ];
        PopoverEditCellSpanMatTableExample.ɵfac = function PopoverEditCellSpanMatTableExample_Factory(t) { return new (t || PopoverEditCellSpanMatTableExample)(); };
        PopoverEditCellSpanMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditCellSpanMatTableExample, selectors: [["popover-edit-cell-span-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["nameEdit", ""], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", 4, "matCellDef"], ["matColumnDef", "middleName"], ["matColumnDef", "lastName"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", "", 1, "example-input-container"], ["matInput", "", "name", "firstName", "required", "", 3, "ngModel"], ["matInput", "", "name", "middleName", 3, "ngModel"], ["matInput", "", "name", "lastName", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "cdkEditRevert", ""], ["mat-button", "", "cdkEditClose", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan"], [4, "matRowHoverContent"], ["mat-icon-button", "", "matEditOpen", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditCellSpanMatTableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, PopoverEditCellSpanMatTableExample_ng_template_1_Template, 17, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, PopoverEditCellSpanMatTableExample_th_4_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(5, PopoverEditCellSpanMatTableExample_td_5_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, PopoverEditCellSpanMatTableExample_th_7_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(8, PopoverEditCellSpanMatTableExample_td_8_Template, 3, 7, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, PopoverEditCellSpanMatTableExample_th_10_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(11, PopoverEditCellSpanMatTableExample_td_11_Template, 3, 7, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 8);
                i0.ɵɵtemplate(13, PopoverEditCellSpanMatTableExample_th_13_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(14, PopoverEditCellSpanMatTableExample_td_14_Template, 3, 7, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, PopoverEditCellSpanMatTableExample_tr_15_Template, 1, 0, "tr", 9);
                i0.ɵɵtemplate(16, PopoverEditCellSpanMatTableExample_tr_16_Template, 1, 0, "tr", 10);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i2.CdkEditable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i7.MatButton, i1$1.MatHeaderCell, i1$1.MatCell, i4.MatPopoverEdit, i4.MatRowHoverContent, i4.MatEditOpen, i8.MatIcon, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
        return PopoverEditCellSpanMatTableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditCellSpanMatTableExample, [{
            type: i0.Component,
            args: [{
                    selector: 'popover-edit-cell-span-mat-table-example',
                    styleUrls: ['popover-edit-cell-span-mat-table-example.css'],
                    templateUrl: 'popover-edit-cell-span-mat-table-example.html',
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
            _this.data = new rxjs.BehaviorSubject(PERSON_DATA);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function PopoverEditMatTableFlexExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r40 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "form", 12, 13);
        i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableFlexExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r40); var element_r37 = ctx.$implicit; var _r38 = i0.ɵɵreference(2); var ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.onSubmitWeight(element_r37, _r38); });
        i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableFlexExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r40); var element_r37 = ctx.$implicit; var ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.preservedWeightValues.set(element_r37, $event); });
        i0.ɵɵelementStart(3, "div", 14);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelement(5, "input", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r37 = ctx.$implicit;
        var ctx_r26 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r26.preservedWeightValues.get(element_r37));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", element_r37.weight);
    } }
    function PopoverEditMatTableFlexExample_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableFlexExample_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r42 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r42.position, " ");
    } }
    function PopoverEditMatTableFlexExample_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        var _r50 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "form", 12, 13);
        i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r50); var _r47 = i0.ɵɵreference(2); var element_r43 = i0.ɵɵnextContext().$implicit; var ctx_r48 = i0.ɵɵnextContext(); return ctx_r48.onSubmitName(element_r43, _r47); });
        i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r50); var element_r43 = i0.ɵɵnextContext().$implicit; var ctx_r51 = i0.ɵɵnextContext(); return ctx_r51.preservedNameValues.set(element_r43, $event); });
        i0.ɵɵelementStart(3, "h2", 19);
        i0.ɵɵtext(4, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 14);
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelement(7, "input", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 21);
        i0.ɵɵelementStart(9, "button", 22);
        i0.ɵɵtext(10, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 23);
        i0.ɵɵtext(12, "Revert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 24);
        i0.ɵɵtext(14, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r43 = i0.ɵɵnextContext().$implicit;
        var ctx_r45 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r45.preservedNameValues.get(element_r43));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", element_r43.name);
    } }
    function PopoverEditMatTableFlexExample_mat_cell_8_span_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 25);
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableFlexExample_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell", 16);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template, 15, 2, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PopoverEditMatTableFlexExample_mat_cell_8_span_4_Template, 4, 0, "span", 18);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r43 = ctx.$implicit;
        var _r44 = i0.ɵɵreference(3);
        i0.ɵɵproperty("matPopoverEdit", _r44);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r43.name, " ");
    } }
    function PopoverEditMatTableFlexExample_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableFlexExample_mat_cell_11_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 25);
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableFlexExample_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell", 26);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditMatTableFlexExample_mat_cell_11_span_2_Template, 4, 0, "span", 18);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r54 = ctx.$implicit;
        i0.ɵɵnextContext();
        var _r25 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matPopoverEdit", _r25)("matPopoverEditContext", element_r54);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r54.weight, " ");
    } }
    function PopoverEditMatTableFlexExample_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableFlexExample_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r56 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r56.symbol, " ");
    } }
    function PopoverEditMatTableFlexExample_mat_header_row_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-header-row");
    } }
    function PopoverEditMatTableFlexExample_mat_row_16_Template(rf, ctx) { if (rf & 1) {
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
     * @title Material Popover Edit on a flex Material data-table
     */
    var PopoverEditMatTableFlexExample = /** @class */ (function () {
        function PopoverEditMatTableFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$1();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        PopoverEditMatTableFlexExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        PopoverEditMatTableFlexExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        PopoverEditMatTableFlexExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'popover-edit-mat-table-flex-example',
                        styleUrls: ['popover-edit-mat-table-flex-example.css'],
                        templateUrl: 'popover-edit-mat-table-flex-example.html',
                    },] },
        ];
        PopoverEditMatTableFlexExample.ɵfac = function PopoverEditMatTableFlexExample_Factory(t) { return new (t || PopoverEditMatTableFlexExample)(); };
        PopoverEditMatTableFlexExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditMatTableFlexExample, selectors: [["popover-edit-mat-table-flex-example"]], decls: 17, vars: 3, consts: [["editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], [3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], [3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], [3, "matPopoverEdit"], ["nameEdit", ""], [4, "matRowHoverContent"], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], [3, "matPopoverEdit", "matPopoverEditContext"]], template: function PopoverEditMatTableFlexExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-table", 0);
                i0.ɵɵtemplate(1, PopoverEditMatTableFlexExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, PopoverEditMatTableFlexExample_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 3);
                i0.ɵɵtemplate(5, PopoverEditMatTableFlexExample_mat_cell_5_Template, 2, 1, "mat-cell", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, PopoverEditMatTableFlexExample_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 3);
                i0.ɵɵtemplate(8, PopoverEditMatTableFlexExample_mat_cell_8_Template, 5, 2, "mat-cell", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, PopoverEditMatTableFlexExample_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 3);
                i0.ɵɵtemplate(11, PopoverEditMatTableFlexExample_mat_cell_11_Template, 3, 3, "mat-cell", 8);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 9);
                i0.ɵɵtemplate(13, PopoverEditMatTableFlexExample_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 3);
                i0.ɵɵtemplate(14, PopoverEditMatTableFlexExample_mat_cell_14_Template, 2, 1, "mat-cell", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, PopoverEditMatTableFlexExample_mat_header_row_15_Template, 1, 0, "mat-header-row", 10);
                i0.ɵɵtemplate(16, PopoverEditMatTableFlexExample_mat_row_16_Template, 1, 0, "mat-row", 11);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i2.CdkEditable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1$1.MatHeaderCell, i1$1.MatCell, i4.MatPopoverEdit, i4.MatRowHoverContent, i7.MatButton, i4.MatEditRevert, i4.MatEditClose, i4.MatEditOpen, i8.MatIcon, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return PopoverEditMatTableFlexExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditMatTableFlexExample, [{
            type: i0.Component,
            args: [{
                    selector: 'popover-edit-mat-table-flex-example',
                    styleUrls: ['popover-edit-mat-table-flex-example.css'],
                    templateUrl: 'popover-edit-mat-table-flex-example.html',
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

    function PopoverEditMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r73 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "form", 12, 13);
        i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r73); var element_r70 = ctx.$implicit; var _r71 = i0.ɵɵreference(2); var ctx_r72 = i0.ɵɵnextContext(); return ctx_r72.onSubmitWeight(element_r70, _r71); });
        i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r73); var element_r70 = ctx.$implicit; var ctx_r74 = i0.ɵɵnextContext(); return ctx_r74.weightValues.for(element_r70).value = $event; });
        i0.ɵɵelementStart(3, "div", 14);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelement(5, "input", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r70 = ctx.$implicit;
        var ctx_r59 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r59.weightValues.for(element_r70).value);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", element_r70.weight);
    } }
    function PopoverEditMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableExample_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
        var _r79 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 19);
        i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r79); var element_r75 = i0.ɵɵnextContext().$implicit; var ctx_r77 = i0.ɵɵnextContext(); return ctx_r77.goodJob(element_r75); });
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "thumb_up");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 19);
        i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r79); var element_r75 = i0.ɵɵnextContext().$implicit; var ctx_r80 = i0.ɵɵnextContext(); return ctx_r80.badJob(element_r75); });
        i0.ɵɵelementStart(5, "mat-icon");
        i0.ɵɵtext(6, "thumb_down");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 17);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_5_span_2_Template, 7, 0, "span", 18);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r75 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r75.position, " ");
    } }
    function PopoverEditMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        var _r89 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "form", 12, 13);
        i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r89); var _r86 = i0.ɵɵreference(2); var element_r82 = i0.ɵɵnextContext().$implicit; var ctx_r87 = i0.ɵɵnextContext(); return ctx_r87.onSubmitName(element_r82, _r86); });
        i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r89); var element_r82 = i0.ɵɵnextContext().$implicit; var ctx_r90 = i0.ɵɵnextContext(); return ctx_r90.nameValues.for(element_r82).value = $event; });
        i0.ɵɵelementStart(3, "h2", 22);
        i0.ɵɵtext(4, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 14);
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelement(7, "input", 23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 24);
        i0.ɵɵelementStart(9, "button", 25);
        i0.ɵɵtext(10, "Confirm");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 26);
        i0.ɵɵtext(12, "Revert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 27);
        i0.ɵɵtext(14, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r82 = i0.ɵɵnextContext().$implicit;
        var ctx_r84 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r84.nameValues.for(element_r82).value);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", element_r82.name);
    } }
    function PopoverEditMatTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 28);
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 20);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_8_ng_template_2_Template, 15, 2, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_8_span_4_Template, 4, 0, "span", 18);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r82 = ctx.$implicit;
        var _r83 = i0.ɵɵreference(3);
        i0.ɵɵproperty("matPopoverEdit", _r83);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r82.name, " ");
    } }
    function PopoverEditMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "button", 28);
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 29);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_11_span_2_Template, 4, 0, "span", 18);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r93 = ctx.$implicit;
        i0.ɵɵnextContext();
        var _r58 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matPopoverEdit", _r58)("matPopoverEditContext", element_r93);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r93.weight, " ");
    } }
    function PopoverEditMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 17);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r95 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r95.symbol, " ");
    } }
    function PopoverEditMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 30);
    } }
    function PopoverEditMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 31);
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
     * @title Material Popover Edit on a Material data-table
     */
    var PopoverEditMatTableExample = /** @class */ (function () {
        function PopoverEditMatTableExample(_snackBar) {
            this._snackBar = _snackBar;
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$2();
            this.nameValues = new i2.FormValueContainer();
            this.weightValues = new i2.FormValueContainer();
        }
        PopoverEditMatTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        PopoverEditMatTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        PopoverEditMatTableExample.prototype.goodJob = function (element) {
            this._snackBar.open("Way to go, " + element.name + "!", undefined, { duration: 2000 });
        };
        PopoverEditMatTableExample.prototype.badJob = function (element) {
            this._snackBar.open("You have failed me for the last time, #" + element.position + ".", undefined, { duration: 2000 });
        };
        PopoverEditMatTableExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'popover-edit-mat-table-example',
                        styleUrls: ['popover-edit-mat-table-example.css'],
                        templateUrl: 'popover-edit-mat-table-example.html',
                    },] },
        ];
        /** @nocollapse */
        PopoverEditMatTableExample.ctorParameters = function () { return [
            { type: i1.MatSnackBar }
        ]; };
        PopoverEditMatTableExample.ɵfac = function PopoverEditMatTableExample_Factory(t) { return new (t || PopoverEditMatTableExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
        PopoverEditMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditMatTableExample, selectors: [["popover-edit-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "matRowHoverContent"], ["mat-icon-button", "", 3, "click"], ["mat-cell", "", 3, "matPopoverEdit"], ["nameEdit", ""], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditMatTableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, PopoverEditMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, PopoverEditMatTableExample_th_4_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_5_Template, 3, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, PopoverEditMatTableExample_th_7_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(8, PopoverEditMatTableExample_td_8_Template, 5, 2, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, PopoverEditMatTableExample_th_10_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(11, PopoverEditMatTableExample_td_11_Template, 3, 3, "td", 8);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 9);
                i0.ɵɵtemplate(13, PopoverEditMatTableExample_th_13_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(14, PopoverEditMatTableExample_td_14_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, PopoverEditMatTableExample_tr_15_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(16, PopoverEditMatTableExample_tr_16_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i2.CdkEditable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1$1.MatHeaderCell, i1$1.MatCell, i4.MatRowHoverContent, i7.MatButton, i8.MatIcon, i4.MatPopoverEdit, i4.MatEditRevert, i4.MatEditClose, i4.MatEditOpen, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
        return PopoverEditMatTableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditMatTableExample, [{
            type: i0.Component,
            args: [{
                    selector: 'popover-edit-mat-table-example',
                    styleUrls: ['popover-edit-mat-table-example.css'],
                    templateUrl: 'popover-edit-mat-table-example.html',
                }]
        }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$2 = /** @class */ (function (_super) {
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

    function PopoverEditTabOutMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r112 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "form", 12, 13);
        i0.ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r112); var element_r109 = ctx.$implicit; var _r110 = i0.ɵɵreference(2); var ctx_r111 = i0.ɵɵnextContext(); return ctx_r111.onSubmitWeight(element_r109, _r110); });
        i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r112); var element_r109 = ctx.$implicit; var ctx_r113 = i0.ɵɵnextContext(); return ctx_r113.preservedWeightValues.set(element_r109, $event); });
        i0.ɵɵelementStart(3, "div", 14);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelement(5, "input", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r109 = ctx.$implicit;
        var ctx_r98 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r98.preservedWeightValues.get(element_r109));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", element_r109.weight);
    } }
    function PopoverEditTabOutMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditTabOutMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 17);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r114 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r114.position, " ");
    } }
    function PopoverEditTabOutMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        var _r122 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "form", 12, 13);
        i0.ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r122); var _r119 = i0.ɵɵreference(2); var element_r115 = i0.ɵɵnextContext().$implicit; var ctx_r120 = i0.ɵɵnextContext(); return ctx_r120.onSubmitName(element_r115, _r119); });
        i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r122); var element_r115 = i0.ɵɵnextContext().$implicit; var ctx_r123 = i0.ɵɵnextContext(); return ctx_r123.preservedNameValues.set(element_r115, $event); });
        i0.ɵɵelementStart(3, "div", 14);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelement(5, "input", 21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r115 = i0.ɵɵnextContext().$implicit;
        var ctx_r117 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r117.preservedNameValues.get(element_r115));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", element_r115.name);
    } }
    function PopoverEditTabOutMatTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function PopoverEditTabOutMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 18);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template, 6, 2, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PopoverEditTabOutMatTableExample_td_8_span_4_Template, 3, 0, "span", 20);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r115 = ctx.$implicit;
        var _r116 = i0.ɵɵreference(3);
        i0.ɵɵproperty("matPopoverEdit", _r116);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r115.name, " ");
    } }
    function PopoverEditTabOutMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditTabOutMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function PopoverEditTabOutMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 22);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_11_span_2_Template, 3, 0, "span", 20);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r126 = ctx.$implicit;
        i0.ɵɵnextContext();
        var _r97 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matPopoverEdit", _r97)("matPopoverEditContext", element_r126);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r126.weight, " ");
    } }
    function PopoverEditTabOutMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function PopoverEditTabOutMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 17);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r128 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r128.symbol, " ");
    } }
    function PopoverEditTabOutMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 23);
    } }
    function PopoverEditTabOutMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 24);
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
     * @title Material Popover Edit with spreadsheet-like configuration on a Material data-table
     */
    var PopoverEditTabOutMatTableExample = /** @class */ (function () {
        function PopoverEditTabOutMatTableExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$3();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        PopoverEditTabOutMatTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        PopoverEditTabOutMatTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        PopoverEditTabOutMatTableExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'popover-edit-tab-out-mat-table-example',
                        styleUrls: ['popover-edit-tab-out-mat-table-example.css'],
                        templateUrl: 'popover-edit-tab-out-mat-table-example.html',
                    },] },
        ];
        PopoverEditTabOutMatTableExample.ɵfac = function PopoverEditTabOutMatTableExample_Factory(t) { return new (t || PopoverEditTabOutMatTableExample)(); };
        PopoverEditTabOutMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditTabOutMatTableExample, selectors: [["popover-edit-tab-out-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", "matEditLensClickOutBehavior", "submit", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit"], ["nameEdit", ""], [4, "matRowHoverContent"], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditTabOutMatTableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, PopoverEditTabOutMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, PopoverEditTabOutMatTableExample_th_4_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(5, PopoverEditTabOutMatTableExample_td_5_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, PopoverEditTabOutMatTableExample_th_7_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(8, PopoverEditTabOutMatTableExample_td_8_Template, 5, 2, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, PopoverEditTabOutMatTableExample_th_10_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(11, PopoverEditTabOutMatTableExample_td_11_Template, 3, 3, "td", 8);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 9);
                i0.ɵɵtemplate(13, PopoverEditTabOutMatTableExample_th_13_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(14, PopoverEditTabOutMatTableExample_td_14_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, PopoverEditTabOutMatTableExample_tr_15_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(16, PopoverEditTabOutMatTableExample_tr_16_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1$1.MatTable, i2.CdkEditable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1$1.MatHeaderCell, i1$1.MatCell, i4.MatEditOpen, i4.MatPopoverEditTabOut, i4.MatRowHoverContent, i8.MatIcon, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
        return PopoverEditTabOutMatTableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditTabOutMatTableExample, [{
            type: i0.Component,
            args: [{
                    selector: 'popover-edit-tab-out-mat-table-example',
                    styleUrls: ['popover-edit-tab-out-mat-table-example.css'],
                    templateUrl: 'popover-edit-tab-out-mat-table-example.html',
                }]
        }], null, null); })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$3 = /** @class */ (function (_super) {
        tslib.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$2);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var EXAMPLES = [
        PopoverEditCellSpanMatTableExample,
        PopoverEditMatTableExample,
        PopoverEditMatTableFlexExample,
        PopoverEditTabOutMatTableExample,
    ];
    var PopoverEditExamplesModule = /** @class */ (function () {
        function PopoverEditExamplesModule() {
        }
        PopoverEditExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i7.MatButtonModule,
                            i8.MatIconModule,
                            i6.MatInputModule,
                            i4.MatPopoverEditModule,
                            i1.MatSnackBarModule,
                            i1$1.MatTableModule,
                            i3.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        PopoverEditExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PopoverEditExamplesModule });
        PopoverEditExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PopoverEditExamplesModule_Factory(t) { return new (t || PopoverEditExamplesModule)(); }, imports: [[
                    i7.MatButtonModule,
                    i8.MatIconModule,
                    i6.MatInputModule,
                    i4.MatPopoverEditModule,
                    i1.MatSnackBarModule,
                    i1$1.MatTableModule,
                    i3.FormsModule,
                ]] });
        return PopoverEditExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverEditExamplesModule, { declarations: [PopoverEditCellSpanMatTableExample,
            PopoverEditMatTableExample,
            PopoverEditMatTableFlexExample,
            PopoverEditTabOutMatTableExample], imports: [i7.MatButtonModule,
            i8.MatIconModule,
            i6.MatInputModule,
            i4.MatPopoverEditModule,
            i1.MatSnackBarModule,
            i1$1.MatTableModule,
            i3.FormsModule], exports: [PopoverEditCellSpanMatTableExample,
            PopoverEditMatTableExample,
            PopoverEditMatTableFlexExample,
            PopoverEditTabOutMatTableExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i7.MatButtonModule,
                        i8.MatIconModule,
                        i6.MatInputModule,
                        i4.MatPopoverEditModule,
                        i1.MatSnackBarModule,
                        i1$1.MatTableModule,
                        i3.FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.PopoverEditCellSpanMatTableExample = PopoverEditCellSpanMatTableExample;
    exports.PopoverEditExamplesModule = PopoverEditExamplesModule;
    exports.PopoverEditMatTableExample = PopoverEditMatTableExample;
    exports.PopoverEditMatTableFlexExample = PopoverEditMatTableFlexExample;
    exports.PopoverEditTabOutMatTableExample = PopoverEditTabOutMatTableExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-popover-edit.umd.js.map
