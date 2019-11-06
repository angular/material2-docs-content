/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/cdk-experimental/popover-edit";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material-experimental/popover-edit";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
const _c0 = ["nameEdit", ""];
const _c1 = ["f", "ngForm"];
function PopoverEditCellSpanMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 10, _c1);
    i0.ɵɵlistener("ngSubmit", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r12 = ctx.$implicit; const _r13 = i0.ɵɵreference(2); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmit(ctx_r12.person, _r13); });
    i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r12 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.preservedValues.set(ctx_r12.person, $event); });
    i0.ɵɵelementStart(3, "div", 11);
    i0.ɵɵelementStart(4, "mat-form-field");
    i0.ɵɵelement(5, "input", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-form-field");
    i0.ɵɵelement(7, "input", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-form-field");
    i0.ɵɵelement(9, "input", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 15);
    i0.ɵɵelementStart(11, "button", 16);
    i0.ɵɵtext(12, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 17);
    i0.ɵɵtext(14, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 18);
    i0.ɵɵtext(16, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
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
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", person_r17.id, " ");
} }
function PopoverEditCellSpanMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " First Name ");
    i0.ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_8_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 23);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c2 = function (a0) { return { person: a0, focus: "firstName" }; };
const _c3 = { after: 2 };
function PopoverEditCellSpanMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_8_span_2_Template, 4, 0, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r18 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c2, person_r18))("matPopoverEditColspan", _c3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", person_r18.firstName, " ");
} }
function PopoverEditCellSpanMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Middle Name ");
    i0.ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 23);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c4 = function (a0) { return { person: a0, focus: "middleName" }; };
const _c5 = { before: 1, after: 1 };
function PopoverEditCellSpanMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_11_span_2_Template, 4, 0, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r20 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c4, person_r20))("matPopoverEditColspan", _c5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", person_r20.middleName, " ");
} }
function PopoverEditCellSpanMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Last Name ");
    i0.ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_14_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 23);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c6 = function (a0) { return { person: a0, focus: "lastName" }; };
const _c7 = { before: 2 };
function PopoverEditCellSpanMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_14_span_2_Template, 4, 0, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r22 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c6, person_r22))("matPopoverEditColspan", _c7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", person_r22.lastName, " ");
} }
function PopoverEditCellSpanMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 24);
} }
function PopoverEditCellSpanMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 25);
} }
/**
 * @record
 */
export function Person() { }
if (false) {
    /** @type {?} */
    Person.prototype.id;
    /** @type {?} */
    Person.prototype.firstName;
    /** @type {?} */
    Person.prototype.middleName;
    /** @type {?} */
    Person.prototype.lastName;
}
/** @type {?} */
const PERSON_DATA = [
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
 * \@title Material Popover Edit spanning multiple columns on a Material data-table
 */
export class PopoverEditCellSpanMatTableExample {
    constructor() {
        this.displayedColumns = ['id', 'firstName', 'middleName', 'lastName'];
        this.dataSource = new ExampleDataSource();
        this.preservedValues = new WeakMap();
    }
    /**
     * @param {?} person
     * @param {?} f
     * @return {?}
     */
    onSubmit(person, f) {
        if (!f.valid) {
            return;
        }
        person.firstName = f.value['firstName'];
        person.middleName = f.value['middleName'];
        person.lastName = f.value['lastName'];
    }
}
PopoverEditCellSpanMatTableExample.decorators = [
    { type: Component, args: [{
                selector: 'popover-edit-cell-span-mat-table-example',
                styleUrls: ['popover-edit-cell-span-mat-table-example.css'],
                templateUrl: 'popover-edit-cell-span-mat-table-example.html',
            },] },
];
/** @nocollapse */ PopoverEditCellSpanMatTableExample.ɵfac = function PopoverEditCellSpanMatTableExample_Factory(t) { return new (t || PopoverEditCellSpanMatTableExample)(); };
/** @nocollapse */ PopoverEditCellSpanMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditCellSpanMatTableExample, selectors: [["popover-edit-cell-span-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", 4, "matCellDef"], ["matColumnDef", "middleName"], ["matColumnDef", "lastName"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["mat-edit-content", "", 1, "example-input-container"], ["matInput", "", "name", "firstName", "required", "", 3, "ngModel"], ["matInput", "", "name", "middleName", 3, "ngModel"], ["matInput", "", "name", "lastName", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "cdkEditRevert", ""], ["mat-button", "", "cdkEditClose", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan"], [4, "matRowHoverContent"], ["mat-icon-button", "", "matEditOpen", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditCellSpanMatTableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, PopoverEditCellSpanMatTableExample_ng_template_1_Template, 17, 7, "ng-template", null, _c0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementContainerStart(3, 1);
        i0.ɵɵtemplate(4, PopoverEditCellSpanMatTableExample_th_4_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(5, PopoverEditCellSpanMatTableExample_td_5_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(6, 4);
        i0.ɵɵtemplate(7, PopoverEditCellSpanMatTableExample_th_7_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(8, PopoverEditCellSpanMatTableExample_td_8_Template, 3, 6, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 6);
        i0.ɵɵtemplate(10, PopoverEditCellSpanMatTableExample_th_10_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(11, PopoverEditCellSpanMatTableExample_td_11_Template, 3, 6, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 7);
        i0.ɵɵtemplate(13, PopoverEditCellSpanMatTableExample_th_13_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(14, PopoverEditCellSpanMatTableExample_td_14_Template, 3, 6, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(15, PopoverEditCellSpanMatTableExample_tr_15_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(16, PopoverEditCellSpanMatTableExample_tr_16_Template, 1, 0, "tr", 9);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i2.CdkEditable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i7.MatButton, i1.MatHeaderCell, i1.MatCell, i4.MatPopoverEdit, i4.MatRowHoverContent, i4.MatEditOpen, i8.MatIcon, i1.MatHeaderRow, i1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(PopoverEditCellSpanMatTableExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-cell-span-mat-table-example',
                styleUrls: ['popover-edit-cell-span-mat-table-example.css'],
                templateUrl: 'popover-edit-cell-span-mat-table-example.html',
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.displayedColumns;
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.dataSource;
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.preservedValues;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(PERSON_DATA);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /**
     * Stream of data that is provided to the table.
     * @type {?}
     */
    ExampleDataSource.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7OztJQ0Q3QywyQkFDRTtJQUFBLHFDQUtFO0lBSEUsNFNBQW9DO0lBRXBDLHdSQUF1QyxtREFBdUMsSUFBQztJQUNqRiwrQkFDRTtJQUFBLHNDQUNFO0lBQUEsNEJBRUY7SUFBQSxpQkFBaUI7SUFDakIsc0NBQ0U7SUFBQSw0QkFFRjtJQUFBLGlCQUFpQjtJQUNqQixzQ0FDRTtJQUFBLDRCQUVGO0lBQUEsaUJBQWlCO0lBQ25CLGlCQUFNO0lBRU4sZ0NBQ0U7SUFBQSxtQ0FBaUM7SUFBQSx3QkFBTztJQUFBLGlCQUFTO0lBQ2pELG1DQUFpQztJQUFBLHVCQUFNO0lBQUEsaUJBQVM7SUFDaEQsbUNBQWdDO0lBQUEsc0JBQUs7SUFBQSxpQkFBUztJQUNoRCxpQkFBTTtJ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QjtRQW1GcEQsZ0JBQW1DO1FBQW5DLHNEQUFtQztRQUMxQyxlQUFnRDtRQUFoRCx1REFBZ0Q7O21DRHBEakQsa0NBQWtDO2NBTDlDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMENBQTBDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztnQkFDM0QsV0FBVyxFQUFFLCtDQUErQzthQUM3RDs7OztJQUVDLDhEQUEyRTs7SUFDM0Usd0RBQXFDOztJQUVyQyw2REFBc0Q7Ozs7Ozs7OztBQW9CeEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQWtCO0lBQXpEOzs7OztRQUVFLFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBVyxXQUFXLENBQUMsQ0FBQztJQVFwRCxDQUFDOzs7OztJQUxDLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCOzs7Ozs7SUFSQyxpQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbiB7XG4gIGlkOiBudW1iZXI7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBtaWRkbGVOYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBFUlNPTl9EQVRBOiBQZXJzb25bXSA9IFtcbiAge2lkOiAxLCBmaXJzdE5hbWU6ICdUZXJyYScsIG1pZGRsZU5hbWU6ICdNYWR1aW4nLCBsYXN0TmFtZTogJ0JyYW5mb3JkJ30sXG4gIHtpZDogMiwgZmlyc3ROYW1lOiAnTG9ja2UnLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdDb2xlJ30sXG4gIHtpZDogMywgZmlyc3ROYW1lOiAnQ2VsZXMnLCBtaWRkbGVOYW1lOiAnR2VzdGFobCcsIGxhc3ROYW1lOiAnQ2hlcmUnfSxcbiAge2lkOiA0LCBmaXJzdE5hbWU6ICdFZGdhcicsIG1pZGRsZU5hbWU6ICdSb25pJywgbGFzdE5hbWU6ICdGaWdhcm8nfSxcbiAge2lkOiA1LCBmaXJzdE5hbWU6ICdTYWJpbicsIG1pZGRsZU5hbWU6ICdSZW5lJywgbGFzdE5hbWU6ICdGaWdhcm8nfSxcbiAge2lkOiA2LCBmaXJzdE5hbWU6ICdDbHlkZScsIG1pZGRsZU5hbWU6ICdcIlNoYWRvd1wiJywgbGFzdE5hbWU6ICdBcnJvd255J30sXG4gIHtpZDogNywgZmlyc3ROYW1lOiAnU2V0emVyJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnR2FiYmlhbmknfSxcbiAge2lkOiA4LCBmaXJzdE5hbWU6ICdDaWQnLCBtaWRkbGVOYW1lOiAnRGVsIE5vcnRlJywgbGFzdE5hbWU6ICdNYXJxdWV6J30sXG4gIHtpZDogOSwgZmlyc3ROYW1lOiAnTW9nJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnTWNNb29nbGUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIE1hdGVyaWFsIFBvcG92ZXIgRWRpdCBzcGFubmluZyBtdWx0aXBsZSBjb2x1bW5zIG9uIGEgTWF0ZXJpYWwgZGF0YS10YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3BvcG92ZXItZWRpdC1jZWxsLXNwYW4tbWF0LXRhYmxlLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAncG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckVkaXRDZWxsU3Bhbk1hdFRhYmxlRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydpZCcsICdmaXJzdE5hbWUnLCAnbWlkZGxlTmFtZScsICdsYXN0TmFtZSddO1xuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKCk7XG5cbiAgcmVhZG9ubHkgcHJlc2VydmVkVmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyc29uLCBhbnk+KCk7XG5cbiAgb25TdWJtaXQocGVyc29uOiBQZXJzb24sIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBlcnNvbi5maXJzdE5hbWUgPSBmLnZhbHVlWydmaXJzdE5hbWUnXTtcbiAgICBwZXJzb24ubWlkZGxlTmFtZSA9IGYudmFsdWVbJ21pZGRsZU5hbWUnXTtcbiAgICBwZXJzb24ubGFzdE5hbWUgPSBmLnZhbHVlWydsYXN0TmFtZSddO1xuICB9XG59XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgdG8gcHJvdmlkZSB3aGF0IGRhdGEgc2hvdWxkIGJlIHJlbmRlcmVkIGluIHRoZSB0YWJsZS4gTm90ZSB0aGF0IHRoZSBkYXRhIHNvdXJjZVxuICogY2FuIHJldHJpZXZlIGl0cyBkYXRhIGluIGFueSB3YXkuIEluIHRoaXMgY2FzZSwgdGhlIGRhdGEgc291cmNlIGlzIHByb3ZpZGVkIGEgcmVmZXJlbmNlXG4gKiB0byBhIGNvbW1vbiBkYXRhIGJhc2UsIEV4YW1wbGVEYXRhYmFzZS4gSXQgaXMgbm90IHRoZSBkYXRhIHNvdXJjZSdzIHJlc3BvbnNpYmlsaXR5IHRvIG1hbmFnZVxuICogdGhlIHVuZGVybHlpbmcgZGF0YS4gSW5zdGVhZCwgaXQgb25seSBuZWVkcyB0byB0YWtlIHRoZSBkYXRhIGFuZCBzZW5kIHRoZSB0YWJsZSBleGFjdGx5IHdoYXRcbiAqIHNob3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxQZXJzb24+IHtcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xuICBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQZXJzb25bXT4oUEVSU09OX0RBVEEpO1xuXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcnNvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxufVxuIiwiPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiIG1hdC10YWJsZSBlZGl0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gIDxuZy10ZW1wbGF0ZSAjbmFtZUVkaXQgbGV0LWN0eD5cbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgIG1hdEVkaXRMZW5zXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0KGN0eC5wZXJzb24sIGYpXCJcbiAgICAgICAgICBbbWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkVmFsdWVzLmdldChjdHgucGVyc29uKVwiXG4gICAgICAgICAgKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZFZhbHVlcy5zZXQoY3R4LnBlcnNvbiwgJGV2ZW50KVwiPlxuICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQgY2xhc3M9XCJleGFtcGxlLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJjdHgucGVyc29uLmZpcnN0TmFtZVwiIG5hbWU9XCJmaXJzdE5hbWVcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjdHguZm9jdXMgPT09ICdmaXJzdE5hbWUnIHx8IG51bGxcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJjdHgucGVyc29uLm1pZGRsZU5hbWVcIiBuYW1lPVwibWlkZGxlTmFtZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImN0eC5mb2N1cyA9PT0gJ21pZGRsZU5hbWUnIHx8IG51bGxcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJjdHgucGVyc29uLmxhc3ROYW1lXCIgbmFtZT1cImxhc3ROYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY3R4LmZvY3VzID09PSAnbGFzdE5hbWUnIHx8IG51bGxcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IG1hdC1lZGl0LWFjdGlvbnM+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNka0VkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNka0VkaXRDbG9zZT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJpZFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBwZXJzb25cIj4ge3twZXJzb24uaWR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImZpcnN0TmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEZpcnN0IE5hbWUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcGVyc29uXCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0Q29udGV4dF09XCJ7cGVyc29uOiBwZXJzb24sIGZvY3VzOiAnZmlyc3ROYW1lJ31cIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRDb2xzcGFuXT1cInthZnRlcjogMn1cIj5cbiAgICAgIHt7cGVyc29uLmZpcnN0TmFtZX19XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibWlkZGxlTmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE1pZGRsZSBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHBlcnNvblwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdENvbnRleHRdPVwie3BlcnNvbjogcGVyc29uLCBmb2N1czogJ21pZGRsZU5hbWUnfVwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdENvbHNwYW5dPVwie2JlZm9yZToxICwgYWZ0ZXI6IDF9XCI+XG4gICAgICB7e3BlcnNvbi5taWRkbGVOYW1lfX1cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJsYXN0TmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IExhc3QgTmFtZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBwZXJzb25cIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRDb250ZXh0XT1cIntwZXJzb246IHBlcnNvbiwgZm9jdXM6ICdsYXN0TmFtZSd9XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0Q29sc3Bhbl09XCJ7YmVmb3JlOiAyfVwiPlxuICAgICAge3twZXJzb24ubGFzdE5hbWV9fVxuXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=