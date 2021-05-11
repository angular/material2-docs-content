import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "@angular/cdk-experimental/popover-edit";
import * as i3 from "@angular/forms";
function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "form", 13, 14);
    i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template_form_ngSubmit_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const element_r12 = restoredCtx.$implicit; const _r13 = i0.ɵɵreference(2); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmitWeight(element_r12, _r13); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r15); const element_r12 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.preservedWeightValues.set(element_r12, $event); });
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
    const element_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
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
    const element_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r17.position, " ");
} }
function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-header-cell");
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "form", 13, 14);
    i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r25); const _r22 = i0.ɵɵreference(2); const element_r18 = i0.ɵɵnextContext().$implicit; const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onSubmitName(element_r18, _r22); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r25); const element_r18 = i0.ɵɵnextContext().$implicit; const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.preservedNameValues.set(element_r18, $event); });
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
    const element_r18 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
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
    const element_r18 = ctx.$implicit;
    const _r19 = i0.ɵɵreference(3);
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
    const element_r29 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
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
    const element_r31 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r31.symbol, " ");
} }
function CdkPopoverEditCdkTableFlexExample_cdk_header_row_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cdk-header-row");
} }
function CdkPopoverEditCdkTableFlexExample_cdk_row_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cdk-row");
} }
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
/**
 * @title CDK Popover Edit on a flex cdk-table.
 */
export class CdkPopoverEditCdkTableFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
    }
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
}
CdkPopoverEditCdkTableFlexExample.ɵfac = function CdkPopoverEditCdkTableFlexExample_Factory(t) { return new (t || CdkPopoverEditCdkTableFlexExample)(); };
CdkPopoverEditCdkTableFlexExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkPopoverEditCdkTableFlexExample, selectors: [["cdk-popover-edit-cdk-table-flex-example"]], decls: 17, vars: 3, consts: [["editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["cdkColumnDef", "position"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "name"], [3, "cdkPopoverEdit", 4, "cdkCellDef"], ["cdkColumnDef", "weight"], [3, "cdkPopoverEdit", "cdkPopoverEditContext", 4, "cdkCellDef"], ["cdkColumnDef", "symbol"], [4, "cdkHeaderRowDef"], [4, "cdkRowDef", "cdkRowDefColumns"], [2, "background-color", "white"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditOpen", ""], [3, "cdkPopoverEdit", "cdkPopoverEditContext"]], template: function CdkPopoverEditCdkTableFlexExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.CdkTable, i2.CdkEditable, i1.CdkColumnDef, i1.CdkHeaderCellDef, i1.CdkCellDef, i1.CdkHeaderRowDef, i1.CdkRowDef, i3.ɵNgNoValidate, i3.NgControlStatusGroup, i3.NgForm, i2.CdkEditControl, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i2.CdkEditRevert, i2.CdkEditClose, i1.CdkHeaderCell, i1.CdkCell, i2.CdkPopoverEdit, i2.CdkRowHoverContent, i2.CdkEditOpen, i1.CdkHeaderRow, i1.CdkRow], styles: [".example-table[_ngcontent-%COMP%]   cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-table[_ngcontent-%COMP%]   cdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPopoverEditCdkTableFlexExample, [{
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
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4L2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWZsZXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7SUNHN0MsK0JBQXNDO0lBQ3BDLG9DQUkwRjtJQUZ0Rix3VUFBdUMsZ1RBRUcsc0RBQTBDLElBRjdDO0lBR3pDLHlCQUNBO0lBQUEsNEJBQXVFO0lBQ3ZFLHFCQUFJO0lBQ0osa0NBQXNCO0lBQUEsdUJBQU87SUFBQSxpQkFBUztJQUN0QyxrQ0FBc0I7SUFBQSxzQkFBTTtJQUFBLGlCQUFTO0lBQ3JDLG1DQUFxQjtJQUFBLHNCQUFLO0lBQUEsaUJBQVM7SUFDckMsaUJBQU87SUFDVCxpQkFBTTs7OztJQVRBLGVBQXVFO0lBQXZFLGdHQUF1RTtJQUdwRCxlQUEwQjtJQUExQiw0Q0FBMEI7OztJQVduRCx1Q0FBbUM7SUFBQyxxQkFBSTtJQUFBLGlCQUFrQjs7O0lBQzFELGdDQUFvQztJQUFDLFlBQXFCO0lBQUEsaUJBQVc7OztJQUFoQyxlQUFxQjtJQUFyQixxREFBcUI7OztJQUsxRCx1Q0FBbUM7SUFBQyxzQkFBSztJQUFBLGlCQUFrQjs7OztJQU92RCwrQkFBc0M7SUFDcEMsb0NBSXdGO0lBRnBGLG9VQUFxQyw4U0FFSyxvREFBd0MsSUFGN0M7SUFHdkMseUJBQ0E7SUFBQSw0QkFBcUQ7SUFDckQscUJBQUk7SUFDSixrQ0FBc0I7SUFBQSx1QkFBTztJQUFBLGlCQUFTO0lBQ3RDLGtDQUFzQjtJQUFBLHNCQUFNO0lBQUEsaUJBQVM7SUFDckMsbUNBQXFCO0lBQUEsc0JBQUs7SUFBQSxpQkFBUztJQUNyQyxpQkFBTztJQUNULGlCQUFNOzs7O0lBVEEsZUFBcUU7SUFBckUsK0ZBQXFFO0lBR2hFLGVBQXdCO0lBQXhCLDBDQUF3Qjs7O0lBU3JDLDRCQUEwQjtJQUN4QixrQ0FBb0I7SUFBQSxvQkFBSTtJQUFBLGlCQUFTO0lBQ25DLGlCQUFPOzs7SUF4QlQsb0NBQ2dDO0lBQzlCLFlBRUE7SUFDQSxnSkFlYztJQUVkLGdHQUVPO0lBQ1QsaUJBQVc7Ozs7SUF4QlAscUNBQTJCO0lBQzdCLGVBRUE7SUFGQSxpREFFQTs7O0lBMEJGLHVDQUFtQztJQUFDLHdCQUFPO0lBQUEsaUJBQWtCOzs7SUFLM0QsNEJBQTBCO0lBQ3hCLGtDQUFvQjtJQUFBLG9CQUFJO0lBQUEsaUJBQVM7SUFDbkMsaUJBQU87OztJQU5ULG9DQUNvRTtJQUNsRSxZQUVBO0lBQUEsaUdBRU87SUFDVCxpQkFBVzs7Ozs7SUFOUCxvQ0FBNkIsc0NBQUE7SUFDL0IsZUFFQTtJQUZBLG1EQUVBOzs7SUFRRix1Q0FBbUM7SUFBQyx3QkFBTztJQUFBLGlCQUFrQjs7O0lBQzdELGdDQUFvQztJQUFDLFlBQW1CO0lBQUEsaUJBQVc7OztJQUE5QixlQUFtQjtJQUFuQixtREFBbUI7OztJQUcxRCxpQ0FBcUU7OztJQUNyRSwwQkFBb0U7O0FEbkV0RSxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDaEUsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM5RCxDQUFDO0FBRUY7O0dBRUc7QUFNSCxNQUFNLE9BQU8saUNBQWlDO0lBTDlDO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBRTVCLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO1FBQzFELDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO0tBYXRFO0lBWEMsWUFBWSxDQUFDLE9BQXdCLEVBQUUsQ0FBUztRQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV6QixPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBd0IsRUFBRSxDQUFTO1FBQ2hELElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXpCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs7a0hBakJVLGlDQUFpQztvRkFBakMsaUNBQWlDO1FDM0M5QyxvQ0FBb0U7UUFLbEUsb0lBZWM7UUFHZCxnQ0FBc0M7UUFDcEMsMEdBQTBEO1FBQzFELDRGQUFxRTtRQUN2RSwwQkFBZTtRQUdmLGdDQUFrQztRQUNoQywwR0FBMkQ7UUFDM0QsNEZBeUJXO1FBQ2IsMEJBQWU7UUFHZixnQ0FBb0M7UUFDbEMsNEdBQTZEO1FBQzdELDhGQU9XO1FBQ2IsMEJBQWU7UUFHZixpQ0FBb0M7UUFDbEMsNEdBQTZEO1FBQzdELDhGQUFtRTtRQUNyRSwwQkFBZTtRQUVmLDJHQUFxRTtRQUNyRSw2RkFBb0U7UUFDdEUsaUJBQVk7O1FBaEY4QiwyQ0FBeUI7UUE4RWhELGdCQUFpQztRQUFqQyxzREFBaUM7UUFDcEIsZUFBMEI7UUFBMUIsdURBQTBCOzt1RkRwQzdDLGlDQUFpQztjQUw3QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7Z0JBQzFELFdBQVcsRUFBRSw4Q0FBOEM7YUFDNUQ7O0FBcUJEOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUEyQjtJQUFsRTs7UUFDRSxvREFBb0Q7UUFDcEQsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFvQixZQUFZLENBQUMsQ0FBQztJQVE5RCxDQUFDO0lBTkMsaUdBQWlHO0lBQ2pHLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG4gIHtwb3NpdGlvbjogMTEsIG5hbWU6ICdTb2RpdW0nLCB3ZWlnaHQ6IDIyLjk4OTcsIHN5bWJvbDogJ05hJ30sXG4gIHtwb3NpdGlvbjogMTIsIG5hbWU6ICdNYWduZXNpdW0nLCB3ZWlnaHQ6IDI0LjMwNSwgc3ltYm9sOiAnTWcnfSxcbiAge3Bvc2l0aW9uOiAxMywgbmFtZTogJ0FsdW1pbnVtJywgd2VpZ2h0OiAyNi45ODE1LCBzeW1ib2w6ICdBbCd9LFxuICB7cG9zaXRpb246IDE0LCBuYW1lOiAnU2lsaWNvbicsIHdlaWdodDogMjguMDg1NSwgc3ltYm9sOiAnU2knfSxcbiAge3Bvc2l0aW9uOiAxNSwgbmFtZTogJ1Bob3NwaG9ydXMnLCB3ZWlnaHQ6IDMwLjk3MzgsIHN5bWJvbDogJ1AnfSxcbiAge3Bvc2l0aW9uOiAxNiwgbmFtZTogJ1N1bGZ1cicsIHdlaWdodDogMzIuMDY1LCBzeW1ib2w6ICdTJ30sXG4gIHtwb3NpdGlvbjogMTcsIG5hbWU6ICdDaGxvcmluZScsIHdlaWdodDogMzUuNDUzLCBzeW1ib2w6ICdDbCd9LFxuICB7cG9zaXRpb246IDE4LCBuYW1lOiAnQXJnb24nLCB3ZWlnaHQ6IDM5Ljk0OCwgc3ltYm9sOiAnQXInfSxcbiAge3Bvc2l0aW9uOiAxOSwgbmFtZTogJ1BvdGFzc2l1bScsIHdlaWdodDogMzkuMDk4Mywgc3ltYm9sOiAnSyd9LFxuICB7cG9zaXRpb246IDIwLCBuYW1lOiAnQ2FsY2l1bScsIHdlaWdodDogNDAuMDc4LCBzeW1ib2w6ICdDYSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgQ0RLIFBvcG92ZXIgRWRpdCBvbiBhIGZsZXggY2RrLXRhYmxlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWZsZXgtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUZsZXhFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKCk7XG5cbiAgcmVhZG9ubHkgcHJlc2VydmVkTmFtZVZhbHVlcyA9IG5ldyBXZWFrTWFwPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSBwcmVzZXJ2ZWRXZWlnaHRWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcblxuICBvblN1Ym1pdE5hbWUoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHsgcmV0dXJuOyB9XG5cbiAgICBlbGVtZW50Lm5hbWUgPSBmLnZhbHVlLm5hbWU7XG4gIH1cblxuICBvblN1Ym1pdFdlaWdodChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQud2VpZ2h0ID0gZi52YWx1ZS53ZWlnaHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXG4gKiBjYW4gcmV0cmlldmUgaXRzIGRhdGEgaW4gYW55IHdheS4gSW4gdGhpcyBjYXNlLCB0aGUgZGF0YSBzb3VyY2UgaXMgcHJvdmlkZWQgYSByZWZlcmVuY2VcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxuICogc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4ge1xuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xuXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxufVxuIiwiPGNkay10YWJsZSBjbGFzcz1cImV4YW1wbGUtdGFibGVcIiBlZGl0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICN3ZWlnaHRFZGl0IGxldC1lbGVtZW50PlxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBjZGtFZGl0Q29udHJvbFxuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFdlaWdodChlbGVtZW50LCBmKVwiXG4gICAgICAgICAgW2Nka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZFdlaWdodFZhbHVlcy5nZXQoZWxlbWVudClcIlxuICAgICAgICAgIChjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZUNoYW5nZSk9XCJwcmVzZXJ2ZWRXZWlnaHRWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cbiAgICAgICAgRWRpdCBiOlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFtuZ01vZGVsXT1cImVsZW1lbnQud2VpZ2h0XCIgbmFtZT1cIndlaWdodFwiIHJlcXVpcmVkPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRDbG9zZT5DbG9zZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gTm8uIDwvY2RrLWhlYWRlci1jZWxsPlxuICAgIDxjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvY2RrLWNlbGw+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IE5hbWUgPC9jZGstaGVhZGVyLWNlbGw+XG4gICAgPGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIj5cbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cbiAgICAgIFxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XCI+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBjZGtFZGl0Q29udHJvbFxuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXROYW1lKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgW2Nka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuZ2V0KGVsZW1lbnQpXCJcbiAgICAgICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cbiAgICAgICAgICAgIEVkaXQgYTpcbiAgICAgICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XCJlbGVtZW50Lm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKmNka1Jvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0T3Blbj5FZGl0PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC9jZGstY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IFdlaWdodCA8L2Nkay1oZWFkZXItY2VsbD5cbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFtjZGtQb3BvdmVyRWRpdF09XCJ3ZWlnaHRFZGl0XCIgW2Nka1BvcG92ZXJFZGl0Q29udGV4dF09XCJlbGVtZW50XCI+XG4gICAgICB7e2VsZW1lbnQud2VpZ2h0fX1cbiAgICAgIFxuICAgICAgPHNwYW4gKmNka1Jvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0T3Blbj5FZGl0PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC9jZGstY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IFN5bWJvbCA8L2Nkay1oZWFkZXItY2VsbD5cbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC9jZGstY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPGNkay1oZWFkZXItcm93ICpjZGtIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9jZGstaGVhZGVyLXJvdz5cbiAgPGNkay1yb3cgKmNka1Jvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC9jZGstcm93PlxuPC9jZGstdGFibGU+XG4iXX0=