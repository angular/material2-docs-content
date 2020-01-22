import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵnextContext, ɵɵelement, ɵɵelementEnd, ɵɵtext, ɵɵadvance, ɵɵproperty, ɵɵattribute, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵpureFunction1, ɵɵpureFunction0, ɵɵdefineComponent, ɵɵtemplateRefExtractor, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵsetClassMetadata, Component, ɵɵdirectiveInject, ChangeDetectionStrategy, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgForOf, CommonModule } from '@angular/common';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, NumberValueAccessor, FormsModule } from '@angular/forms';
import { MatEditLens, MatPopoverEdit, MatRowHoverContent, MatEditOpen, MatEditRevert, MatEditClose, MatPopoverEditTabOut, MatPopoverEditModule } from '@angular/material-experimental/popover-edit';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectionList, MatListOption, MatListModule } from '@angular/material/list';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTableModule } from '@angular/material/table';
import { __extends } from 'tslib';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import { CdkEditable, FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import { MatFormField } from '@angular/material/form-field';

function PopoverEditCellSpanMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 11, 12);
    ɵɵlistener("ngSubmit", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r15); var ctx_r12 = ctx.$implicit; var _r13 = ɵɵreference(2); var ctx_r14 = ɵɵnextContext(); return ctx_r14.onSubmit(ctx_r12.person, _r13); })("matEditLensPreservedFormValueChange", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r15); var ctx_r12 = ctx.$implicit; var ctx_r16 = ɵɵnextContext(); return ctx_r16.preservedValues.set(ctx_r12.person, $event); });
    ɵɵelementStart(3, "div", 13);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 14);
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-form-field");
    ɵɵelement(7, "input", 15);
    ɵɵelementEnd();
    ɵɵelementStart(8, "mat-form-field");
    ɵɵelement(9, "input", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 17);
    ɵɵelementStart(11, "button", 18);
    ɵɵtext(12, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 19);
    ɵɵtext(14, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(15, "button", 20);
    ɵɵtext(16, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ctx.$implicit;
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r1.preservedValues.get(ctx_r12.person));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", ctx_r12.person.firstName);
    ɵɵattribute("cdkFocusInitial", ctx_r12.focus === "firstName" || null);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r12.person.middleName);
    ɵɵattribute("cdkFocusInitial", ctx_r12.focus === "middleName" || null);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r12.person.lastName);
    ɵɵattribute("cdkFocusInitial", ctx_r12.focus === "lastName" || null);
} }
function PopoverEditCellSpanMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 21);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var person_r17 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r17.id, " ");
} }
function PopoverEditCellSpanMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 21);
    ɵɵtext(1, " First Name ");
    ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_8_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
var _c0 = function (a0) { return { person: a0, focus: "firstName" }; };
var _c1 = function () { return { after: 2 }; };
function PopoverEditCellSpanMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 23);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_8_span_2_Template, 4, 0, "span", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    var person_r18 = ctx.$implicit;
    ɵɵnextContext();
    var _r0 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", ɵɵpureFunction1(4, _c0, person_r18))("matPopoverEditColspan", ɵɵpureFunction0(6, _c1));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r18.firstName, " ");
} }
function PopoverEditCellSpanMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 21);
    ɵɵtext(1, " Middle Name ");
    ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
var _c2 = function (a0) { return { person: a0, focus: "middleName" }; };
var _c3 = function () { return { before: 1, after: 1 }; };
function PopoverEditCellSpanMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 23);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_11_span_2_Template, 4, 0, "span", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    var person_r20 = ctx.$implicit;
    ɵɵnextContext();
    var _r0 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", ɵɵpureFunction1(4, _c2, person_r20))("matPopoverEditColspan", ɵɵpureFunction0(6, _c3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r20.middleName, " ");
} }
function PopoverEditCellSpanMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 21);
    ɵɵtext(1, " Last Name ");
    ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_14_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
var _c4 = function (a0) { return { person: a0, focus: "lastName" }; };
var _c5 = function () { return { before: 2 }; };
function PopoverEditCellSpanMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 23);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_14_span_2_Template, 4, 0, "span", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    var person_r22 = ctx.$implicit;
    ɵɵnextContext();
    var _r0 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", ɵɵpureFunction1(4, _c4, person_r22))("matPopoverEditColspan", ɵɵpureFunction0(6, _c5));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r22.lastName, " ");
} }
function PopoverEditCellSpanMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 26);
} }
function PopoverEditCellSpanMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 27);
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
    PopoverEditCellSpanMatTableExample.ɵfac = function PopoverEditCellSpanMatTableExample_Factory(t) { return new (t || PopoverEditCellSpanMatTableExample)(); };
    PopoverEditCellSpanMatTableExample.ɵcmp = ɵɵdefineComponent({ type: PopoverEditCellSpanMatTableExample, selectors: [["popover-edit-cell-span-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["nameEdit", ""], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", 4, "matCellDef"], ["matColumnDef", "middleName"], ["matColumnDef", "lastName"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", "", 1, "example-input-container"], ["matInput", "", "name", "firstName", "required", "", 3, "ngModel"], ["matInput", "", "name", "middleName", 3, "ngModel"], ["matInput", "", "name", "lastName", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "cdkEditRevert", ""], ["mat-button", "", "cdkEditClose", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan"], [4, "matRowHoverContent"], ["mat-icon-button", "", "matEditOpen", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditCellSpanMatTableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "table", 0);
            ɵɵtemplate(1, PopoverEditCellSpanMatTableExample_ng_template_1_Template, 17, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementContainerStart(3, 2);
            ɵɵtemplate(4, PopoverEditCellSpanMatTableExample_th_4_Template, 2, 0, "th", 3);
            ɵɵtemplate(5, PopoverEditCellSpanMatTableExample_td_5_Template, 2, 1, "td", 4);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(6, 5);
            ɵɵtemplate(7, PopoverEditCellSpanMatTableExample_th_7_Template, 2, 0, "th", 3);
            ɵɵtemplate(8, PopoverEditCellSpanMatTableExample_td_8_Template, 3, 7, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(9, 7);
            ɵɵtemplate(10, PopoverEditCellSpanMatTableExample_th_10_Template, 2, 0, "th", 3);
            ɵɵtemplate(11, PopoverEditCellSpanMatTableExample_td_11_Template, 3, 7, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(12, 8);
            ɵɵtemplate(13, PopoverEditCellSpanMatTableExample_th_13_Template, 2, 0, "th", 3);
            ɵɵtemplate(14, PopoverEditCellSpanMatTableExample_td_14_Template, 3, 7, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵtemplate(15, PopoverEditCellSpanMatTableExample_tr_15_Template, 1, 0, "tr", 9);
            ɵɵtemplate(16, PopoverEditCellSpanMatTableExample_tr_16_Template, 1, 0, "tr", 10);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("dataSource", ctx.dataSource);
            ɵɵadvance(15);
            ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [MatTable, CdkEditable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatEditLens, MatFormField, MatInput, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatButton, MatHeaderCell, MatCell, MatPopoverEdit, MatRowHoverContent, MatEditOpen, MatIcon, MatHeaderRow, MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
    return PopoverEditCellSpanMatTableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditCellSpanMatTableExample, [{
        type: Component,
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
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Stream of data that is provided to the table. */
        _this.data = new BehaviorSubject(PERSON_DATA);
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this.data;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(DataSource));

function PopoverEditMatTableFlexExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableFlexExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r40); var element_r37 = ctx.$implicit; var _r38 = ɵɵreference(2); var ctx_r39 = ɵɵnextContext(); return ctx_r39.onSubmitWeight(element_r37, _r38); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableFlexExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r40); var element_r37 = ctx.$implicit; var ctx_r41 = ɵɵnextContext(); return ctx_r41.preservedWeightValues.set(element_r37, $event); });
    ɵɵelementStart(3, "div", 14);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r37 = ctx.$implicit;
    var ctx_r26 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r26.preservedWeightValues.get(element_r37));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", element_r37.weight);
} }
function PopoverEditMatTableFlexExample_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r42 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r42.position, " ");
} }
function PopoverEditMatTableFlexExample_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r50 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r50); var _r47 = ɵɵreference(2); var element_r43 = ɵɵnextContext().$implicit; var ctx_r48 = ɵɵnextContext(); return ctx_r48.onSubmitName(element_r43, _r47); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r50); var element_r43 = ɵɵnextContext().$implicit; var ctx_r51 = ɵɵnextContext(); return ctx_r51.preservedNameValues.set(element_r43, $event); });
    ɵɵelementStart(3, "h2", 19);
    ɵɵtext(4, "Name");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 14);
    ɵɵelementStart(6, "mat-form-field");
    ɵɵelement(7, "input", 20);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 21);
    ɵɵelementStart(9, "button", 22);
    ɵɵtext(10, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 23);
    ɵɵtext(12, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 24);
    ɵɵtext(14, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r43 = ɵɵnextContext().$implicit;
    var ctx_r45 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r45.preservedNameValues.get(element_r43));
    ɵɵadvance(6);
    ɵɵproperty("ngModel", element_r43.name);
} }
function PopoverEditMatTableFlexExample_mat_cell_8_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell", 16);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template, 15, 2, "ng-template", null, 17, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PopoverEditMatTableFlexExample_mat_cell_8_span_4_Template, 4, 0, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r43 = ctx.$implicit;
    var _r44 = ɵɵreference(3);
    ɵɵproperty("matPopoverEdit", _r44);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r43.name, " ");
} }
function PopoverEditMatTableFlexExample_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_11_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell", 26);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableFlexExample_mat_cell_11_span_2_Template, 4, 0, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r54 = ctx.$implicit;
    ɵɵnextContext();
    var _r25 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r25)("matPopoverEditContext", element_r54);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r54.weight, " ");
} }
function PopoverEditMatTableFlexExample_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r56 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r56.symbol, " ");
} }
function PopoverEditMatTableFlexExample_mat_header_row_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-header-row");
} }
function PopoverEditMatTableFlexExample_mat_row_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-row");
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
    PopoverEditMatTableFlexExample.ɵfac = function PopoverEditMatTableFlexExample_Factory(t) { return new (t || PopoverEditMatTableFlexExample)(); };
    PopoverEditMatTableFlexExample.ɵcmp = ɵɵdefineComponent({ type: PopoverEditMatTableFlexExample, selectors: [["popover-edit-mat-table-flex-example"]], decls: 17, vars: 3, consts: [["editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], [3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], [3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], [3, "matPopoverEdit"], ["nameEdit", ""], [4, "matRowHoverContent"], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], [3, "matPopoverEdit", "matPopoverEditContext"]], template: function PopoverEditMatTableFlexExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-table", 0);
            ɵɵtemplate(1, PopoverEditMatTableFlexExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementContainerStart(3, 2);
            ɵɵtemplate(4, PopoverEditMatTableFlexExample_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 3);
            ɵɵtemplate(5, PopoverEditMatTableFlexExample_mat_cell_5_Template, 2, 1, "mat-cell", 4);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(6, 5);
            ɵɵtemplate(7, PopoverEditMatTableFlexExample_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 3);
            ɵɵtemplate(8, PopoverEditMatTableFlexExample_mat_cell_8_Template, 5, 2, "mat-cell", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(9, 7);
            ɵɵtemplate(10, PopoverEditMatTableFlexExample_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 3);
            ɵɵtemplate(11, PopoverEditMatTableFlexExample_mat_cell_11_Template, 3, 3, "mat-cell", 8);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(12, 9);
            ɵɵtemplate(13, PopoverEditMatTableFlexExample_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 3);
            ɵɵtemplate(14, PopoverEditMatTableFlexExample_mat_cell_14_Template, 2, 1, "mat-cell", 4);
            ɵɵelementContainerEnd();
            ɵɵtemplate(15, PopoverEditMatTableFlexExample_mat_header_row_15_Template, 1, 0, "mat-header-row", 10);
            ɵɵtemplate(16, PopoverEditMatTableFlexExample_mat_row_16_Template, 1, 0, "mat-row", 11);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("dataSource", ctx.dataSource);
            ɵɵadvance(15);
            ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [MatTable, CdkEditable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatEditLens, MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatHeaderCell, MatCell, MatPopoverEdit, MatRowHoverContent, MatButton, MatEditRevert, MatEditClose, MatEditOpen, MatIcon, MatHeaderRow, MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return PopoverEditMatTableFlexExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditMatTableFlexExample, [{
        type: Component,
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

function PopoverEditMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r77 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 14, 15);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r77); var element_r74 = ctx.$implicit; var _r75 = ɵɵreference(2); var ctx_r76 = ɵɵnextContext(); return ctx_r76.onSubmitWeight(element_r74, _r75); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r77); var element_r74 = ctx.$implicit; var ctx_r78 = ɵɵnextContext(); return ctx_r78.weightValues.for(element_r74).value = $event; });
    ɵɵelementStart(3, "div", 16);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r74 = ctx.$implicit;
    var ctx_r59 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r59.weightValues.for(element_r74).value);
    ɵɵadvance(4);
    ɵɵproperty("ngModel", element_r74.weight);
} }
function PopoverEditMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r83 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 21);
    ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_1_listener($event) { ɵɵrestoreView(_r83); var element_r79 = ɵɵnextContext().$implicit; var ctx_r81 = ɵɵnextContext(); return ctx_r81.goodJob(element_r79); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "thumb_up");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 21);
    ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_4_listener($event) { ɵɵrestoreView(_r83); var element_r79 = ɵɵnextContext().$implicit; var ctx_r84 = ɵɵnextContext(); return ctx_r84.badJob(element_r79); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "thumb_down");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 19);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableExample_td_5_span_2_Template, 7, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r79 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r79.position, " ");
} }
function PopoverEditMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r93 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 14, 15);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r93); var _r90 = ɵɵreference(2); var element_r86 = ɵɵnextContext().$implicit; var ctx_r91 = ɵɵnextContext(); return ctx_r91.onSubmitName(element_r86, _r90); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r93); var element_r86 = ɵɵnextContext().$implicit; var ctx_r94 = ɵɵnextContext(); return ctx_r94.nameValues.for(element_r86).value = $event; });
    ɵɵelementStart(3, "h2", 24);
    ɵɵtext(4, "Name");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 16);
    ɵɵelementStart(6, "mat-form-field");
    ɵɵelement(7, "input", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 26);
    ɵɵelementStart(9, "button", 27);
    ɵɵtext(10, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 28);
    ɵɵtext(12, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 29);
    ɵɵtext(14, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r86 = ɵɵnextContext().$implicit;
    var ctx_r88 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r88.nameValues.for(element_r86).value);
    ɵɵadvance(6);
    ɵɵproperty("ngModel", element_r86.name);
} }
function PopoverEditMatTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 30);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 22);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableExample_td_8_ng_template_2_Template, 15, 2, "ng-template", null, 23, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PopoverEditMatTableExample_td_8_span_4_Template, 4, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r86 = ctx.$implicit;
    var _r87 = ɵɵreference(3);
    ɵɵproperty("matPopoverEdit", _r87);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r86.name, " ");
} }
function PopoverEditMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " Type ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-option", 36);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var type_r103 = ctx.$implicit;
    ɵɵproperty("value", type_r103);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", type_r103, " ");
} }
var _c0$1 = function (a0) { return [a0]; };
function PopoverEditMatTableExample_td_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r106 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 32, 15);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r106); var _r101 = ɵɵreference(2); var element_r97 = ɵɵnextContext().$implicit; var ctx_r104 = ɵɵnextContext(); return ctx_r104.onSubmitType(element_r97, _r101); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r106); var element_r97 = ɵɵnextContext().$implicit; var ctx_r107 = ɵɵnextContext(); return ctx_r107.typeValues.for(element_r97).value = $event; });
    ɵɵelementStart(3, "div", 33);
    ɵɵelementStart(4, "mat-selection-list", 34);
    ɵɵlistener("selectionChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_mat_selection_list_selectionChange_4_listener($event) { ɵɵrestoreView(_r106); var _r101 = ɵɵreference(2); return _r101.ngSubmit.emit(); });
    ɵɵtemplate(5, PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r97 = ɵɵnextContext().$implicit;
    var ctx_r99 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r99.typeValues.for(element_r97).value);
    ɵɵadvance(3);
    ɵɵproperty("multiple", false)("ngModel", ɵɵpureFunction1(4, _c0$1, element_r97.type));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r99.TYPES);
} }
function PopoverEditMatTableExample_td_11_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 30);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "arrow_drop_down");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 22);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableExample_td_11_ng_template_2_Template, 6, 6, "ng-template", null, 31, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PopoverEditMatTableExample_td_11_span_4_Template, 4, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r97 = ctx.$implicit;
    var _r98 = ɵɵreference(3);
    ɵɵproperty("matPopoverEdit", _r98);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r97.type, " ");
} }
function PopoverEditMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 30);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 37);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableExample_td_14_span_2_Template, 4, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r111 = ctx.$implicit;
    ɵɵnextContext();
    var _r58 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r58)("matPopoverEditContext", element_r111);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r111.weight, " ");
} }
function PopoverEditMatTableExample_th_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r113 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r113.symbol, " ");
} }
function PopoverEditMatTableExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 38);
} }
function PopoverEditMatTableExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 39);
} }
function PopoverEditMatTableExample_th_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, " Fantasy Counterparts ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-option", 43);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var fantasyElement_r121 = ctx.$implicit;
    ɵɵproperty("value", fantasyElement_r121);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", fantasyElement_r121, " ");
} }
function PopoverEditMatTableExample_td_22_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r124 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 14, 15);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r124); var _r119 = ɵɵreference(2); var element_r115 = ɵɵnextContext().$implicit; var ctx_r122 = ɵɵnextContext(); return ctx_r122.onSubmitFantasyCounterparts(element_r115, _r119); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r124); var element_r115 = ɵɵnextContext().$implicit; var ctx_r125 = ɵɵnextContext(); return ctx_r125.fantasyValues.for(element_r115).value = $event; });
    ɵɵelementStart(3, "div", 33);
    ɵɵelementStart(4, "mat-selection-list", 41);
    ɵɵtemplate(5, PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 42);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 26);
    ɵɵelementStart(7, "button", 27);
    ɵɵtext(8, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 28);
    ɵɵtext(10, "Revert");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r115 = ɵɵnextContext().$implicit;
    var ctx_r117 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r117.fantasyValues.for(element_r115).value);
    ɵɵadvance(3);
    ɵɵproperty("ngModel", element_r115.fantasyCounterparts);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r117.FANTASY_ELEMENTS);
} }
function PopoverEditMatTableExample_td_22_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 30);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "arrow_drop_down");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 22);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableExample_td_22_ng_template_2_Template, 11, 3, "ng-template", null, 40, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PopoverEditMatTableExample_td_22_span_4_Template, 4, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r115 = ctx.$implicit;
    var _r116 = ɵɵreference(3);
    ɵɵproperty("matPopoverEdit", _r116);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r115.fantasyCounterparts.join(", "), " ");
} }
var ELEMENT_DATA$1 = [
    { position: 1, name: 'Hydrogen', type: 'Nonmetal', weight: 1.0079, symbol: 'H',
        fantasyCounterparts: ['Fire', 'Wind', 'Light'] },
    { position: 2, name: 'Helium', type: 'Nonmetal', weight: 4.0026, symbol: 'He',
        fantasyCounterparts: ['Wind', 'Light'] },
    { position: 3, name: 'Lithium', type: 'Metal', weight: 6.941, symbol: 'Li',
        fantasyCounterparts: [] },
    { position: 4, name: 'Beryllium', type: 'Metal', weight: 9.0122, symbol: 'Be',
        fantasyCounterparts: [] },
    { position: 5, name: 'Boron', type: 'Semimetal', weight: 10.811, symbol: 'B',
        fantasyCounterparts: [] },
    { position: 6, name: 'Carbon', type: 'Nonmetal', weight: 12.0107, symbol: 'C',
        fantasyCounterparts: ['Earth', 'Dark'] },
    { position: 7, name: 'Nitrogen', type: 'Nonmetal', weight: 14.0067, symbol: 'N',
        fantasyCounterparts: ['Wind'] },
    { position: 8, name: 'Oxygen', type: 'Nonmetal', weight: 15.9994, symbol: 'O',
        fantasyCounterparts: ['Fire', 'Water', 'Wind'] },
    { position: 9, name: 'Fluorine', type: 'Nonmetal', weight: 18.9984, symbol: 'F',
        fantasyCounterparts: [] },
    { position: 10, name: 'Neon', type: 'Nonmetal', weight: 20.1797, symbol: 'Ne',
        fantasyCounterparts: ['Light'] },
    { position: 11, name: 'Sodium', type: 'Metal', weight: 22.9897, symbol: 'Na',
        fantasyCounterparts: ['Earth', 'Water'] },
    { position: 12, name: 'Magnesium', type: 'Metal', weight: 24.305, symbol: 'Mg',
        fantasyCounterparts: [] },
    { position: 13, name: 'Aluminum', type: 'Metal', weight: 26.9815, symbol: 'Al',
        fantasyCounterparts: [] },
    { position: 14, name: 'Silicon', type: 'Semimetal', weight: 28.0855, symbol: 'Si',
        fantasyCounterparts: [] },
    { position: 15, name: 'Phosphorus', type: 'Nonmetal', weight: 30.9738, symbol: 'P',
        fantasyCounterparts: [] },
    { position: 16, name: 'Sulfur', type: 'Nonmetal', weight: 32.065, symbol: 'S',
        fantasyCounterparts: [] },
    { position: 17, name: 'Chlorine', type: 'Nonmetal', weight: 35.453, symbol: 'Cl',
        fantasyCounterparts: [] },
    { position: 18, name: 'Argon', type: 'Nonmetal', weight: 39.948, symbol: 'Ar',
        fantasyCounterparts: [] },
    { position: 19, name: 'Potassium', type: 'Metal', weight: 39.0983, symbol: 'K',
        fantasyCounterparts: [] },
    { position: 20, name: 'Calcium', type: 'Metal', weight: 40.078, symbol: 'Ca',
        fantasyCounterparts: [] },
];
var TYPES = ['Metal', 'Semimetal', 'Nonmetal'];
var FANTASY_ELEMENTS = ['Earth', 'Water', 'Wind', 'Fire', 'Light', 'Dark'];
/**
 * @title Material Popover Edit on a Material data-table
 */
var PopoverEditMatTableExample = /** @class */ (function () {
    function PopoverEditMatTableExample(_snackBar) {
        this._snackBar = _snackBar;
        this.displayedColumns = ['position', 'name', 'type', 'weight', 'symbol', 'fantasyCounterpart'];
        this.dataSource = new ExampleDataSource$2();
        this.TYPES = TYPES;
        this.FANTASY_ELEMENTS = FANTASY_ELEMENTS;
        this.nameValues = new FormValueContainer();
        this.weightValues = new FormValueContainer();
        this.typeValues = new FormValueContainer();
        this.fantasyValues = new FormValueContainer();
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
    PopoverEditMatTableExample.prototype.onSubmitType = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.type = f.value.type[0];
    };
    PopoverEditMatTableExample.prototype.onSubmitFantasyCounterparts = function (element, f) {
        if (!f.valid) {
            return;
        }
        element.fantasyCounterparts = f.value.fantasyCounterparts;
    };
    PopoverEditMatTableExample.prototype.goodJob = function (element) {
        this._snackBar.open("Way to go, " + element.name + "!", undefined, { duration: 2000 });
    };
    PopoverEditMatTableExample.prototype.badJob = function (element) {
        this._snackBar.open("You have failed me for the last time, #" + element.position + ".", undefined, { duration: 2000 });
    };
    PopoverEditMatTableExample.ɵfac = function PopoverEditMatTableExample_Factory(t) { return new (t || PopoverEditMatTableExample)(ɵɵdirectiveInject(MatSnackBar)); };
    PopoverEditMatTableExample.ɵcmp = ɵɵdefineComponent({ type: PopoverEditMatTableExample, selectors: [["popover-edit-mat-table-example"]], decls: 23, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "weight"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "fantasyCounterpart"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "matRowHoverContent"], ["mat-icon-button", "", 3, "click"], ["mat-cell", "", 3, "matPopoverEdit"], ["nameEdit", ""], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], ["typeEdit", ""], ["matEditLens", "", "matEditClose", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["mat-edit-fill", ""], ["name", "type", "aria-label", "Element type", 3, "multiple", "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""], ["fantasyCounterpartEdit", ""], ["name", "fantasyCounterparts", "aria-label", "Fantasy Element Counterparts", 3, "ngModel"], ["checkboxPosition", "before", 3, "value", 4, "ngFor", "ngForOf"], ["checkboxPosition", "before", 3, "value"]], template: function PopoverEditMatTableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "table", 0);
            ɵɵtemplate(1, PopoverEditMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementContainerStart(3, 2);
            ɵɵtemplate(4, PopoverEditMatTableExample_th_4_Template, 2, 0, "th", 3);
            ɵɵtemplate(5, PopoverEditMatTableExample_td_5_Template, 3, 1, "td", 4);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(6, 5);
            ɵɵtemplate(7, PopoverEditMatTableExample_th_7_Template, 2, 0, "th", 3);
            ɵɵtemplate(8, PopoverEditMatTableExample_td_8_Template, 5, 2, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(9, 7);
            ɵɵtemplate(10, PopoverEditMatTableExample_th_10_Template, 2, 0, "th", 3);
            ɵɵtemplate(11, PopoverEditMatTableExample_td_11_Template, 5, 2, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(12, 8);
            ɵɵtemplate(13, PopoverEditMatTableExample_th_13_Template, 2, 0, "th", 3);
            ɵɵtemplate(14, PopoverEditMatTableExample_td_14_Template, 3, 3, "td", 9);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(15, 10);
            ɵɵtemplate(16, PopoverEditMatTableExample_th_16_Template, 2, 0, "th", 3);
            ɵɵtemplate(17, PopoverEditMatTableExample_td_17_Template, 2, 1, "td", 4);
            ɵɵelementContainerEnd();
            ɵɵtemplate(18, PopoverEditMatTableExample_tr_18_Template, 1, 0, "tr", 11);
            ɵɵtemplate(19, PopoverEditMatTableExample_tr_19_Template, 1, 0, "tr", 12);
            ɵɵelementContainerStart(20, 13);
            ɵɵtemplate(21, PopoverEditMatTableExample_th_21_Template, 2, 0, "th", 3);
            ɵɵtemplate(22, PopoverEditMatTableExample_td_22_Template, 5, 2, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("dataSource", ctx.dataSource);
            ɵɵadvance(18);
            ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [MatTable, CdkEditable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatEditLens, MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatHeaderCell, MatCell, MatRowHoverContent, MatButton, MatIcon, MatPopoverEdit, MatEditRevert, MatEditClose, MatEditOpen, MatSelectionList, NgForOf, MatListOption, MatHeaderRow, MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 16%;\n}"] });
    return PopoverEditMatTableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditMatTableExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-mat-table-example',
                styleUrls: ['popover-edit-mat-table-example.css'],
                templateUrl: 'popover-edit-mat-table-example.html',
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$2 = /** @class */ (function (_super) {
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

function PopoverEditTabOutMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r143 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r143); var element_r140 = ctx.$implicit; var _r141 = ɵɵreference(2); var ctx_r142 = ɵɵnextContext(); return ctx_r142.onSubmitWeight(element_r140, _r141); })("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r143); var element_r140 = ctx.$implicit; var ctx_r144 = ɵɵnextContext(); return ctx_r144.preservedWeightValues.set(element_r140, $event); });
    ɵɵelementStart(3, "div", 14);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r140 = ctx.$implicit;
    var ctx_r129 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r129.preservedWeightValues.get(element_r140));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", element_r140.weight);
} }
function PopoverEditTabOutMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r145 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r145.position, " ");
} }
function PopoverEditTabOutMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r153 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r153); var _r150 = ɵɵreference(2); var element_r146 = ɵɵnextContext().$implicit; var ctx_r151 = ɵɵnextContext(); return ctx_r151.onSubmitName(element_r146, _r150); })("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r153); var element_r146 = ɵɵnextContext().$implicit; var ctx_r154 = ɵɵnextContext(); return ctx_r154.preservedNameValues.set(element_r146, $event); });
    ɵɵelementStart(3, "div", 14);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r146 = ɵɵnextContext().$implicit;
    var ctx_r148 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r148.preservedNameValues.get(element_r146));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", element_r146.name);
} }
function PopoverEditTabOutMatTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 18);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template, 6, 2, "ng-template", null, 19, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PopoverEditTabOutMatTableExample_td_8_span_4_Template, 3, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r146 = ctx.$implicit;
    var _r147 = ɵɵreference(3);
    ɵɵproperty("matPopoverEdit", _r147);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r146.name, " ");
} }
function PopoverEditTabOutMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 22);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_11_span_2_Template, 3, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r157 = ctx.$implicit;
    ɵɵnextContext();
    var _r128 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r128)("matPopoverEditContext", element_r157);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r157.weight, " ");
} }
function PopoverEditTabOutMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r159 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r159.symbol, " ");
} }
function PopoverEditTabOutMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 23);
} }
function PopoverEditTabOutMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 24);
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
    PopoverEditTabOutMatTableExample.ɵfac = function PopoverEditTabOutMatTableExample_Factory(t) { return new (t || PopoverEditTabOutMatTableExample)(); };
    PopoverEditTabOutMatTableExample.ɵcmp = ɵɵdefineComponent({ type: PopoverEditTabOutMatTableExample, selectors: [["popover-edit-tab-out-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", "matEditLensClickOutBehavior", "submit", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit"], ["nameEdit", ""], [4, "matRowHoverContent"], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditTabOutMatTableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "table", 0);
            ɵɵtemplate(1, PopoverEditTabOutMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
            ɵɵelementContainerStart(3, 2);
            ɵɵtemplate(4, PopoverEditTabOutMatTableExample_th_4_Template, 2, 0, "th", 3);
            ɵɵtemplate(5, PopoverEditTabOutMatTableExample_td_5_Template, 2, 1, "td", 4);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(6, 5);
            ɵɵtemplate(7, PopoverEditTabOutMatTableExample_th_7_Template, 2, 0, "th", 3);
            ɵɵtemplate(8, PopoverEditTabOutMatTableExample_td_8_Template, 5, 2, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(9, 7);
            ɵɵtemplate(10, PopoverEditTabOutMatTableExample_th_10_Template, 2, 0, "th", 3);
            ɵɵtemplate(11, PopoverEditTabOutMatTableExample_td_11_Template, 3, 3, "td", 8);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(12, 9);
            ɵɵtemplate(13, PopoverEditTabOutMatTableExample_th_13_Template, 2, 0, "th", 3);
            ɵɵtemplate(14, PopoverEditTabOutMatTableExample_td_14_Template, 2, 1, "td", 4);
            ɵɵelementContainerEnd();
            ɵɵtemplate(15, PopoverEditTabOutMatTableExample_tr_15_Template, 1, 0, "tr", 10);
            ɵɵtemplate(16, PopoverEditTabOutMatTableExample_tr_16_Template, 1, 0, "tr", 11);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("dataSource", ctx.dataSource);
            ɵɵadvance(15);
            ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [MatTable, CdkEditable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatEditLens, MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatHeaderCell, MatCell, MatEditOpen, MatPopoverEditTabOut, MatRowHoverContent, MatIcon, MatHeaderRow, MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"], changeDetection: 0 });
    return PopoverEditTabOutMatTableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditTabOutMatTableExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-tab-out-mat-table-example',
                styleUrls: ['popover-edit-tab-out-mat-table-example.css'],
                templateUrl: 'popover-edit-tab-out-mat-table-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
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
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Stream of data that is provided to the table. */
        _this.data = new BehaviorSubject(ELEMENT_DATA$2);
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this.data;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(DataSource));

var EXAMPLES = [
    PopoverEditCellSpanMatTableExample,
    PopoverEditMatTableExample,
    PopoverEditMatTableFlexExample,
    PopoverEditTabOutMatTableExample,
];
var PopoverEditExamplesModule = /** @class */ (function () {
    function PopoverEditExamplesModule() {
    }
    PopoverEditExamplesModule.ɵmod = ɵɵdefineNgModule({ type: PopoverEditExamplesModule });
    PopoverEditExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function PopoverEditExamplesModule_Factory(t) { return new (t || PopoverEditExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatPopoverEditModule,
                MatSnackBarModule,
                MatTableModule,
                FormsModule,
            ]] });
    return PopoverEditExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PopoverEditExamplesModule, { declarations: [PopoverEditCellSpanMatTableExample,
        PopoverEditMatTableExample,
        PopoverEditMatTableFlexExample,
        PopoverEditTabOutMatTableExample], imports: [CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatPopoverEditModule,
        MatSnackBarModule,
        MatTableModule,
        FormsModule], exports: [PopoverEditCellSpanMatTableExample,
        PopoverEditMatTableExample,
        PopoverEditMatTableFlexExample,
        PopoverEditTabOutMatTableExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatPopoverEditModule,
                    MatSnackBarModule,
                    MatTableModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { PopoverEditCellSpanMatTableExample, PopoverEditExamplesModule, PopoverEditMatTableExample, PopoverEditMatTableFlexExample, PopoverEditTabOutMatTableExample };
//# sourceMappingURL=popover-edit.js.map
