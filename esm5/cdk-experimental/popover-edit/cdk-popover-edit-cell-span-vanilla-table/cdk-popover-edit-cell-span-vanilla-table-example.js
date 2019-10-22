import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/popover-edit";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
var _c0 = ["nameEdit", ""];
var _c1 = ["f", "ngForm"];
function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "form", 3, _c1);
    i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r72); var ctx_r69 = ctx.$implicit; var _r70 = i0.ɵɵreference(2); var ctx_r71 = i0.ɵɵnextContext(); return ctx_r71.onSubmit(ctx_r69.person, _r70); });
    i0.ɵɵlistener("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r72); var ctx_r69 = ctx.$implicit; var ctx_r73 = i0.ɵɵnextContext(); return ctx_r73.preservedValues.set(ctx_r69.person, $event); });
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelement(4, "input", 5);
    i0.ɵɵelement(5, "input", 6);
    i0.ɵɵelement(6, "input", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "br");
    i0.ɵɵelement(8, "br");
    i0.ɵɵelementStart(9, "button", 8);
    i0.ɵɵtext(10, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 9);
    i0.ɵɵtext(12, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 10);
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
    i0.ɵɵelementStart(1, "button", 13);
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 13);
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 13);
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var _c2 = function (a0) { return { person: a0, focus: "firstName" }; };
var _c3 = { after: 2 };
var _c4 = function (a0) { return { person: a0, focus: "middleName" }; };
var _c5 = { before: 1, after: 1 };
var _c6 = function (a0) { return { person: a0, focus: "lastName" }; };
var _c7 = { before: 2 };
function CdkPopoverEditCellSpanVanillaTableExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 11);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_5_Template, 3, 0, "span", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td", 11);
    i0.ɵɵtext(7);
    i0.ɵɵtemplate(8, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_8_Template, 3, 0, "span", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 11);
    i0.ɵɵtext(10);
    i0.ɵɵtemplate(11, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_11_Template, 3, 0, "span", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var person_r74 = ctx.$implicit;
    i0.ɵɵnextContext();
    var _r66 = i0.ɵɵreference(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", person_r74.id, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkPopoverEdit", _r66)("cdkPopoverEditContext", i0.ɵɵpureFunction1(13, _c2, person_r74))("cdkPopoverEditColspan", _c3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", person_r74.firstName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkPopoverEdit", _r66)("cdkPopoverEditContext", i0.ɵɵpureFunction1(15, _c4, person_r74))("cdkPopoverEditColspan", _c5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", person_r74.middleName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkPopoverEdit", _r66)("cdkPopoverEditContext", i0.ɵɵpureFunction1(17, _c6, person_r74))("cdkPopoverEditColspan", _c7);
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
        { type: Component, args: [{
                    selector: 'cdk-popover-edit-cell-span-vanilla-table-example',
                    styleUrls: ['cdk-popover-edit-cell-span-vanilla-table-example.css'],
                    templateUrl: 'cdk-popover-edit-cell-span-vanilla-table-example.html',
                },] },
    ];
    CdkPopoverEditCellSpanVanillaTableExample.ngFactoryDef = function CdkPopoverEditCellSpanVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditCellSpanVanillaTableExample)(); };
    CdkPopoverEditCellSpanVanillaTableExample.ngComponentDef = i0.ɵɵdefineComponent({ type: CdkPopoverEditCellSpanVanillaTableExample, selectors: [["cdk-popover-edit-cell-span-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], [4, "ngFor", "ngForOf"], [2, "background-color", "#ddd", "width", "100%"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], [1, "example-input-container"], ["name", "firstName", "required", "", 3, "ngModel"], ["name", "middleName", 3, "ngModel"], ["name", "lastName", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan"], [4, "cdkRowHoverContent"], ["cdkEditOpen", ""]], template: function CdkPopoverEditCellSpanVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template, 15, 7, "ng-template", null, _c0, i0.ɵɵtemplateRefExtractor);
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
            i0.ɵɵtemplate(12, CdkPopoverEditCellSpanVanillaTableExample_tr_12_Template, 12, 19, "tr", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("ngForOf", ctx.persons);
        } }, directives: [i1.CdkEditable, i2.NgForOf, i3.ɵangular_packages_forms_forms_z, i3.NgControlStatusGroup, i3.NgForm, i1.CdkEditControl, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1.CdkEditRevert, i1.CdkEditClose, i1.CdkPopoverEdit, i1.CdkRowHoverContent, i1.CdkEditOpen], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n}"] });
    return CdkPopoverEditCellSpanVanillaTableExample;
}());
export { CdkPopoverEditCellSpanVanillaTableExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkPopoverEditCellSpanVanillaTableExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-cell-span-vanilla-table-example',
                styleUrls: ['cdk-popover-edit-cell-span-vanilla-table-example.css'],
                templateUrl: 'cdk-popover-edit-cell-span-vanilla-table-example.html',
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDTXBDLDhCQUNFO0lBQUEsb0NBS0U7SUFIRSw2U0FBb0M7SUFFcEMsaVNBQTBDLG1EQUF1QyxJQUFDO0lBQ3BGLDhCQUNFO0lBQUEsMkJBRUE7SUFBQSwyQkFFQTtJQUFBLDJCQUVGO0lBQUEsaUJBQU07SUFDTixxQkFDQTtJQUFBLHFCQUNBO0lBQUEsaUNBQXNCO0lBQUEsd0JBQU87SUFBQSxpQkFBUztJQUN0QyxrQ0FBc0I7SUFBQSx1QkFBTTtJQUFBLGlCQUFTO0lBQ3JDLG1DQUFxQjtJQUFBLHNCQUFLO0lBQUEsaUJBQVM7SUFDckMsaUJBQU87SUFDVCxpQkFBTTs7OztJQWhCQSxlQUFvRTtJQUFwRSw4RkFBb0U7SUFHN0QsZUFBZ0M7SUFBaEMsa0RBQWdDO0lBQ25DLHdFQUEwRDtJQUN2RCxlQUFpQztJQUFqQyxtREFB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LENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0RBQWtEO29CQUM1RCxTQUFTLEVBQUUsQ0FBQyxzREFBc0QsQ0FBQztvQkFDbkUsV0FBVyxFQUFFLHVEQUF1RDtpQkFDckU7OzhJQUNZLHlDQUF5Qzs0RkFBekMseUNBQXlDO1lDOUJ0RCxnQ0FDRTtZQUlBLDhJQUNFO1lBdUJGLDBCQUNFO1lBQUEsMEJBQUs7WUFBQSxxQkFBSTtZQUFBLGlCQUFLO1lBQ2QsMEJBQUs7WUFBQSw0QkFBVztZQUFBLGlCQUFLO1lBQ3JCLDBCQUFLO1lBQUEsNkJBQVk7WUFBQSxpQkFBSztZQUN0QiwyQkFBSztZQUFBLDRCQUFVO1lBQUEsaUJBQUs7WUFDdEIsaUJBQUs7WUFFTCw0RkFDRTtZQWdDSixpQkFBUTs7WUFqQ0YsZ0JBQThCO1lBQTlCLHFDQUE4Qjs7b0REcENwQztDQTRDQyxBQW5CRCxJQW1CQztTQWRZLHlDQUF5QzttQ0FBekMseUNBQXlDO2NBTHJELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0RBQWtEO2dCQUM1RCxTQUFTLEVBQUUsQ0FBQyxzREFBc0QsQ0FBQztnQkFDbkUsV0FBVyxFQUFFLHVEQUF1RDthQUNyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uIHtcbiAgaWQ6IG51bWJlcjtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIG1pZGRsZU5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgUEVSU09OX0RBVEE6IFBlcnNvbltdID0gW1xuICB7aWQ6IDEsIGZpcnN0TmFtZTogJ1RlcnJhJywgbWlkZGxlTmFtZTogJ01hZHVpbicsIGxhc3ROYW1lOiAnQnJhbmZvcmQnfSxcbiAge2lkOiAyLCBmaXJzdE5hbWU6ICdMb2NrZScsIG1pZGRsZU5hbWU6ICcnLCBsYXN0TmFtZTogJ0NvbGUnfSxcbiAge2lkOiAzLCBmaXJzdE5hbWU6ICdDZWxlcycsIG1pZGRsZU5hbWU6ICdHZXN0YWhsJywgbGFzdE5hbWU6ICdDaGVyZSd9LFxuICB7aWQ6IDQsIGZpcnN0TmFtZTogJ0VkZ2FyJywgbWlkZGxlTmFtZTogJ1JvbmknLCBsYXN0TmFtZTogJ0ZpZ2Fybyd9LFxuICB7aWQ6IDUsIGZpcnN0TmFtZTogJ1NhYmluJywgbWlkZGxlTmFtZTogJ1JlbmUnLCBsYXN0TmFtZTogJ0ZpZ2Fybyd9LFxuICB7aWQ6IDYsIGZpcnN0TmFtZTogJ0NseWRlJywgbWlkZGxlTmFtZTogJ1wiU2hhZG93XCInLCBsYXN0TmFtZTogJ0Fycm93bnknfSxcbiAge2lkOiA3LCBmaXJzdE5hbWU6ICdTZXR6ZXInLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdHYWJiaWFuaSd9LFxuICB7aWQ6IDgsIGZpcnN0TmFtZTogJ0NpZCcsIG1pZGRsZU5hbWU6ICdEZWwgTm9ydGUnLCBsYXN0TmFtZTogJ01hcnF1ZXonfSxcbiAge2lkOiA5LCBmaXJzdE5hbWU6ICdNb2cnLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdNY01vb2dsZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgQ0RLIFBvcG92ZXIgRWRpdCBzcGFubmluZyBtdWx0aXBsZSBjb2x1bW5zIG9uIGFuIEhUTUwgZGF0YS10YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9wb3ZlckVkaXRDZWxsU3BhblZhbmlsbGFUYWJsZUV4YW1wbGUge1xuICByZWFkb25seSBwcmVzZXJ2ZWRWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJzb24sIGFueT4oKTtcblxuICByZWFkb25seSBwZXJzb25zID0gUEVSU09OX0RBVEE7XG5cbiAgb25TdWJtaXQocGVyc29uOiBQZXJzb24sIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBlcnNvbi5maXJzdE5hbWUgPSBmLnZhbHVlWydmaXJzdE5hbWUnXTtcbiAgICBwZXJzb24ubWlkZGxlTmFtZSA9IGYudmFsdWVbJ21pZGRsZU5hbWUnXTtcbiAgICBwZXJzb24ubGFzdE5hbWUgPSBmLnZhbHVlWydsYXN0TmFtZSddO1xuICB9XG59XG4iLCI8dGFibGUgZWRpdGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICNuYW1lRWRpdCBsZXQtY3R4PlxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB3aWR0aDogMTAwJVwiPlxuICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgIGNka0VkaXRDb250cm9sXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0KGN0eC5wZXJzb24sIGYpXCJcbiAgICAgICAgICBbY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkVmFsdWVzLmdldChjdHgucGVyc29uKVwiXG4gICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZFZhbHVlcy5zZXQoY3R4LnBlcnNvbiwgJGV2ZW50KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW5wdXQgW25nTW9kZWxdPVwiY3R4LnBlcnNvbi5maXJzdE5hbWVcIiBuYW1lPVwiZmlyc3ROYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImN0eC5mb2N1cyA9PT0gJ2ZpcnN0TmFtZScgfHwgbnVsbFwiPlxuICAgICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XCJjdHgucGVyc29uLm1pZGRsZU5hbWVcIiBuYW1lPVwibWlkZGxlTmFtZVwiXG4gICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjdHguZm9jdXMgPT09ICdtaWRkbGVOYW1lJyB8fCBudWxsXCI+XG4gICAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cImN0eC5wZXJzb24ubGFzdE5hbWVcIiBuYW1lPVwibGFzdE5hbWVcIiByZXF1aXJlZFxuICAgICAgICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY3R4LmZvY3VzID09PSAnbGFzdE5hbWUnIHx8IG51bGxcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgXG4gIDx0cj5cbiAgICA8dGg+IE5vLiA8L3RoPlxuICAgIDx0aD4gRmlyc3QgbmFtZSA8L3RoPlxuICAgIDx0aD4gTWlkZGxlIG5hbWUgPC90aD5cbiAgICA8dGg+IExhc3QgbmFtZSA8L3RoPlxuICA8L3RyPlxuICBcbiAgPHRyICpuZ0Zvcj1cImxldCBwZXJzb24gb2YgcGVyc29uc1wiPlxuICAgIDx0ZD4ge3twZXJzb24uaWR9fSA8L3RkPlxuXG4gICAgPHRkIFtjZGtQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFtjZGtQb3BvdmVyRWRpdENvbnRleHRdPVwie3BlcnNvbjogcGVyc29uLCBmb2N1czogJ2ZpcnN0TmFtZSd9XCJcbiAgICAgICAgW2Nka1BvcG92ZXJFZGl0Q29sc3Bhbl09XCJ7YWZ0ZXI6IDJ9XCI+XG4gICAgICB7e3BlcnNvbi5maXJzdE5hbWV9fVxuICAgICAgXG4gICAgICA8c3BhbiAqY2RrUm93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRPcGVuPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICAgIFxuICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb250ZXh0XT1cIntwZXJzb246IHBlcnNvbiwgZm9jdXM6ICdtaWRkbGVOYW1lJ31cIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb2xzcGFuXT1cIntiZWZvcmU6IDEsIGFmdGVyOiAxfVwiPlxuICAgICAge3twZXJzb24ubWlkZGxlTmFtZX19XG4gICAgICBcbiAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdE9wZW4+RWRpdDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gICAgXG4gICAgPHRkIFtjZGtQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFtjZGtQb3BvdmVyRWRpdENvbnRleHRdPVwie3BlcnNvbjogcGVyc29uLCBmb2N1czogJ2xhc3ROYW1lJ31cIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb2xzcGFuXT1cIntiZWZvcmU6IDJ9XCI+XG4gICAgICB7e3BlcnNvbi5sYXN0TmFtZX19XG4gICAgICBcbiAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdE9wZW4+RWRpdDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvdHI+XG48L3RhYmxlPlxuIl19