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
function PopoverEditCellSpanMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 11, 12);
    i0.ɵɵlistener("ngSubmit", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r12 = ctx.$implicit; const _r13 = i0.ɵɵreference(2); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmit(ctx_r12.person, _r13); });
    i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r12 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.preservedValues.set(ctx_r12.person, $event); });
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
    i0.ɵɵelementStart(0, "th", 21);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r17 = ctx.$implicit;
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
const _c0 = function (a0) { return { person: a0, focus: "firstName" }; };
const _c1 = { after: 2 };
function PopoverEditCellSpanMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 23);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_8_span_2_Template, 4, 0, "span", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r18 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c0, person_r18))("matPopoverEditColspan", _c1);
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
const _c2 = function (a0) { return { person: a0, focus: "middleName" }; };
const _c3 = { before: 1, after: 1 };
function PopoverEditCellSpanMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 23);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_11_span_2_Template, 4, 0, "span", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r20 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c2, person_r20))("matPopoverEditColspan", _c3);
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
const _c4 = function (a0) { return { person: a0, focus: "lastName" }; };
const _c5 = { before: 2 };
function PopoverEditCellSpanMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 23);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_14_span_2_Template, 4, 0, "span", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r22 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c4, person_r22))("matPopoverEditColspan", _c5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", person_r22.lastName, " ");
} }
function PopoverEditCellSpanMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 26);
} }
function PopoverEditCellSpanMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 27);
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
/** @nocollapse */ PopoverEditCellSpanMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditCellSpanMatTableExample, selectors: [["popover-edit-cell-span-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["nameEdit", ""], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", 4, "matCellDef"], ["matColumnDef", "middleName"], ["matColumnDef", "lastName"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", "", 1, "example-input-container"], ["matInput", "", "name", "firstName", "required", "", 3, "ngModel"], ["matInput", "", "name", "middleName", 3, "ngModel"], ["matInput", "", "name", "lastName", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "cdkEditRevert", ""], ["mat-button", "", "cdkEditClose", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan"], [4, "matRowHoverContent"], ["mat-icon-button", "", "matEditOpen", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditCellSpanMatTableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, PopoverEditCellSpanMatTableExample_ng_template_1_Template, 17, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementContainerStart(3, 2);
        i0.ɵɵtemplate(4, PopoverEditCellSpanMatTableExample_th_4_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(5, PopoverEditCellSpanMatTableExample_td_5_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(6, 5);
        i0.ɵɵtemplate(7, PopoverEditCellSpanMatTableExample_th_7_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(8, PopoverEditCellSpanMatTableExample_td_8_Template, 3, 6, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 7);
        i0.ɵɵtemplate(10, PopoverEditCellSpanMatTableExample_th_10_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(11, PopoverEditCellSpanMatTableExample_td_11_Template, 3, 6, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 8);
        i0.ɵɵtemplate(13, PopoverEditCellSpanMatTableExample_th_13_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(14, PopoverEditCellSpanMatTableExample_td_14_Template, 3, 6, "td", 6);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7SUNEN0MsMkJBQ0U7SUFBQSxvQ0FLRTtJQUhFLDRTQUFvQztJQUVwQyx3UkFBdUMsbURBQXVDLElBQUM7SUFDakYsK0JBQ0U7SUFBQSxzQ0FDRTtJQUFBLDRCQUVGO0lBQUEsaUJBQWlCO0lBQ2pCLHNDQUNFO0lBQUEsNEJBRUY7SUFBQSxpQkFBaUI7SUFDakIsc0NBQ0U7SUFBQSw0QkFFRjtJQUFBLGlCQUFpQjtJQUNuQixpQkFBTTtJQUVOLGdDQUNFO0lBQUEsbUNBQWlDO0lBQUEsd0JBQU87SUFBQSxpQkFBUztJQUNqRCxtQ0FBaUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFTO0lBQ2hELG1DQUFnQztJQUFBLHNCQUFLO0lBQUEsaUJBQVM7SUFDaEQsaUJBQU07SUFD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UUFtRnBELGdCQUFtQztRQUFuQyxzREFBbUM7UUFDMUMsZUFBZ0Q7UUFBaEQsdURBQWdEOzttQ0RwRGpELGtDQUFrQztjQUw5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBDQUEwQztnQkFDcEQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7Z0JBQzNELFdBQVcsRUFBRSwrQ0FBK0M7YUFDN0Q7Ozs7SUFFQyw4REFBMkU7O0lBQzNFLHdEQUFxQzs7SUFFckMsNkRBQXNEOzs7Ozs7Ozs7QUFvQnhELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFrQjtJQUF6RDs7Ozs7UUFFRSxTQUFJLEdBQUcsSUFBSSxlQUFlLENBQVcsV0FBVyxDQUFDLENBQUM7SUFRcEQsQ0FBQzs7Ozs7SUFMQyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxVQUFVLEtBQUksQ0FBQztDQUNoQjs7Ozs7O0lBUkMsaUNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb24ge1xuICBpZDogbnVtYmVyO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbWlkZGxlTmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBQRVJTT05fREFUQTogUGVyc29uW10gPSBbXG4gIHtpZDogMSwgZmlyc3ROYW1lOiAnVGVycmEnLCBtaWRkbGVOYW1lOiAnTWFkdWluJywgbGFzdE5hbWU6ICdCcmFuZm9yZCd9LFxuICB7aWQ6IDIsIGZpcnN0TmFtZTogJ0xvY2tlJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnQ29sZSd9LFxuICB7aWQ6IDMsIGZpcnN0TmFtZTogJ0NlbGVzJywgbWlkZGxlTmFtZTogJ0dlc3RhaGwnLCBsYXN0TmFtZTogJ0NoZXJlJ30sXG4gIHtpZDogNCwgZmlyc3ROYW1lOiAnRWRnYXInLCBtaWRkbGVOYW1lOiAnUm9uaScsIGxhc3ROYW1lOiAnRmlnYXJvJ30sXG4gIHtpZDogNSwgZmlyc3ROYW1lOiAnU2FiaW4nLCBtaWRkbGVOYW1lOiAnUmVuZScsIGxhc3ROYW1lOiAnRmlnYXJvJ30sXG4gIHtpZDogNiwgZmlyc3ROYW1lOiAnQ2x5ZGUnLCBtaWRkbGVOYW1lOiAnXCJTaGFkb3dcIicsIGxhc3ROYW1lOiAnQXJyb3dueSd9LFxuICB7aWQ6IDcsIGZpcnN0TmFtZTogJ1NldHplcicsIG1pZGRsZU5hbWU6ICcnLCBsYXN0TmFtZTogJ0dhYmJpYW5pJ30sXG4gIHtpZDogOCwgZmlyc3ROYW1lOiAnQ2lkJywgbWlkZGxlTmFtZTogJ0RlbCBOb3J0ZScsIGxhc3ROYW1lOiAnTWFycXVleid9LFxuICB7aWQ6IDksIGZpcnN0TmFtZTogJ01vZycsIG1pZGRsZU5hbWU6ICcnLCBsYXN0TmFtZTogJ01jTW9vZ2xlJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBNYXRlcmlhbCBQb3BvdmVyIEVkaXQgc3Bhbm5pbmcgbXVsdGlwbGUgY29sdW1ucyBvbiBhIE1hdGVyaWFsIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydwb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3BvcG92ZXItZWRpdC1jZWxsLXNwYW4tbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJFZGl0Q2VsbFNwYW5NYXRUYWJsZUV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnaWQnLCAnZmlyc3ROYW1lJywgJ21pZGRsZU5hbWUnLCAnbGFzdE5hbWUnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBFeGFtcGxlRGF0YVNvdXJjZSgpO1xuXG4gIHJlYWRvbmx5IHByZXNlcnZlZFZhbHVlcyA9IG5ldyBXZWFrTWFwPFBlcnNvbiwgYW55PigpO1xuXG4gIG9uU3VibWl0KHBlcnNvbjogUGVyc29uLCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwZXJzb24uZmlyc3ROYW1lID0gZi52YWx1ZVsnZmlyc3ROYW1lJ107XG4gICAgcGVyc29uLm1pZGRsZU5hbWUgPSBmLnZhbHVlWydtaWRkbGVOYW1lJ107XG4gICAgcGVyc29uLmxhc3ROYW1lID0gZi52YWx1ZVsnbGFzdE5hbWUnXTtcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgc291cmNlIHRvIHByb3ZpZGUgd2hhdCBkYXRhIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdGFibGUuIE5vdGUgdGhhdCB0aGUgZGF0YSBzb3VyY2VcbiAqIGNhbiByZXRyaWV2ZSBpdHMgZGF0YSBpbiBhbnkgd2F5LiBJbiB0aGlzIGNhc2UsIHRoZSBkYXRhIHNvdXJjZSBpcyBwcm92aWRlZCBhIHJlZmVyZW5jZVxuICogdG8gYSBjb21tb24gZGF0YSBiYXNlLCBFeGFtcGxlRGF0YWJhc2UuIEl0IGlzIG5vdCB0aGUgZGF0YSBzb3VyY2UncyByZXNwb25zaWJpbGl0eSB0byBtYW5hZ2VcbiAqIHRoZSB1bmRlcmx5aW5nIGRhdGEuIEluc3RlYWQsIGl0IG9ubHkgbmVlZHMgdG8gdGFrZSB0aGUgZGF0YSBhbmQgc2VuZCB0aGUgdGFibGUgZXhhY3RseSB3aGF0XG4gKiBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyc29uPiB7XG4gIC8qKiBTdHJlYW0gb2YgZGF0YSB0aGF0IGlzIHByb3ZpZGVkIHRvIHRoZSB0YWJsZS4gKi9cbiAgZGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGVyc29uW10+KFBFUlNPTl9EQVRBKTtcblxuICAvKiogQ29ubmVjdCBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRhYmxlIHRvIHJldHJpZXZlIG9uZSBzdHJlYW0gY29udGFpbmluZyB0aGUgZGF0YSB0byByZW5kZXIuICovXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxQZXJzb25bXT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBkaXNjb25uZWN0KCkge31cbn1cbiIsIjx0YWJsZSBjbGFzcz1cImV4YW1wbGUtdGFibGVcIiBtYXQtdGFibGUgZWRpdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiPlxuICA8bmctdGVtcGxhdGUgI25hbWVFZGl0IGxldC1jdHg+XG4gICAgPGRpdj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChjdHgucGVyc29uLCBmKVwiXG4gICAgICAgICAgW21hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZFZhbHVlcy5nZXQoY3R4LnBlcnNvbilcIlxuICAgICAgICAgIChtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZUNoYW5nZSk9XCJwcmVzZXJ2ZWRWYWx1ZXMuc2V0KGN0eC5wZXJzb24sICRldmVudClcIj5cbiAgICAgICAgPGRpdiBtYXQtZWRpdC1jb250ZW50IGNsYXNzPVwiZXhhbXBsZS1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwiY3R4LnBlcnNvbi5maXJzdE5hbWVcIiBuYW1lPVwiZmlyc3ROYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY3R4LmZvY3VzID09PSAnZmlyc3ROYW1lJyB8fCBudWxsXCI+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwiY3R4LnBlcnNvbi5taWRkbGVOYW1lXCIgbmFtZT1cIm1pZGRsZU5hbWVcIlxuICAgICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjdHguZm9jdXMgPT09ICdtaWRkbGVOYW1lJyB8fCBudWxsXCI+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwiY3R4LnBlcnNvbi5sYXN0TmFtZVwiIG5hbWU9XCJsYXN0TmFtZVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImN0eC5mb2N1cyA9PT0gJ2xhc3ROYW1lJyB8fCBudWxsXCI+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBtYXQtZWRpdC1hY3Rpb25zPlxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjZGtFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiaWRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOby4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcGVyc29uXCI+IHt7cGVyc29uLmlkfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBOYW1lIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJmaXJzdE5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBGaXJzdCBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHBlcnNvblwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdENvbnRleHRdPVwie3BlcnNvbjogcGVyc29uLCBmb2N1czogJ2ZpcnN0TmFtZSd9XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0Q29sc3Bhbl09XCJ7YWZ0ZXI6IDJ9XCI+XG4gICAgICB7e3BlcnNvbi5maXJzdE5hbWV9fVxuXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm1pZGRsZU5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBNaWRkbGUgTmFtZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBwZXJzb25cIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRDb250ZXh0XT1cIntwZXJzb246IHBlcnNvbiwgZm9jdXM6ICdtaWRkbGVOYW1lJ31cIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRDb2xzcGFuXT1cIntiZWZvcmU6MSAsIGFmdGVyOiAxfVwiPlxuICAgICAge3twZXJzb24ubWlkZGxlTmFtZX19XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibGFzdE5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBMYXN0IE5hbWUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcGVyc29uXCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0Q29udGV4dF09XCJ7cGVyc29uOiBwZXJzb24sIGZvY3VzOiAnbGFzdE5hbWUnfVwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdENvbHNwYW5dPVwie2JlZm9yZTogMn1cIj5cbiAgICAgIHt7cGVyc29uLmxhc3ROYW1lfX1cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuIl19