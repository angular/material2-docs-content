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
    CdkPopoverEditCellSpanVanillaTableExample.ɵfac = function CdkPopoverEditCellSpanVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditCellSpanVanillaTableExample)(); };
    CdkPopoverEditCellSpanVanillaTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPopoverEditCellSpanVanillaTableExample, selectors: [["cdk-popover-edit-cell-span-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], [4, "ngFor", "ngForOf"], [2, "background-color", "#ddd", "width", "100%"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], [1, "example-input-container"], ["name", "firstName", "required", "", 3, "ngModel"], ["name", "middleName", 3, "ngModel"], ["name", "lastName", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan"], [4, "cdkRowHoverContent"], ["cdkEditOpen", ""]], template: function CdkPopoverEditCellSpanVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i1.CdkEditable, i2.NgForOf, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i1.CdkEditControl, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1.CdkEditRevert, i1.CdkEditClose, i1.CdkPopoverEdit, i1.CdkRowHoverContent, i1.CdkEditOpen], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ01wQyw4QkFDRTtJQUFBLG9DQUtFO0lBSEUsNlNBQW9DO0lBRXBDLGlTQUEwQyxtREFBdUMsSUFBQztJQUNwRiw4QkFDRTtJQUFBLDJCQUVBO0lBQUEsMkJBRUE7SUFBQSwyQkFFRjtJQUFBLGlCQUFNO0lBQ04scUJBQ0E7SUFBQSxxQkFDQTtJQUFBLGlDQUFzQjtJQUFBLHdCQUFPO0lBQUEsaUJBQVM7SUFDdEMsa0NBQXNCO0lBQUEsdUJBQU07SUFBQSxpQkFBUztJQUNyQyxtQ0FBcUI7SUFBQSxzQkFBSztJQUFBLGlCQUFTO0lBQ3JDLGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFoQkEsZUFBb0U7SUFBcEUsOEZBQW9FO0lBRzdELGVBQWdDO0lBQWhDLGtEQUFnQztJQUNuQyx3RUFBMEQ7SUFDdkQsZUFBaUM7SUFBakMs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R0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtEQUFrRDtvQkFDNUQsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7b0JBQ25FLFdBQVcsRUFBRSx1REFBdUQ7aUJBQ3JFOztzSUFDWSx5Q0FBeUM7a0ZBQXpDLHlDQUF5QztZQzlCdEQsZ0NBQ0U7WUFJQSw4SUFDRTtZQXVCRiwwQkFDRTtZQUFBLDBCQUFLO1lBQUEscUJBQUk7WUFBQSxpQkFBSztZQUNkLDBCQUFLO1lBQUEsNEJBQVc7WUFBQSxpQkFBSztZQUNyQiwwQkFBSztZQUFBLDZCQUFZO1lBQUEsaUJBQUs7WUFDdEIsMkJBQUs7WUFBQSw0QkFBVTtZQUFBLGlCQUFLO1lBQ3RCLGlCQUFLO1lBRUwsNEZBQ0U7WUFnQ0osaUJBQVE7O1lBakNGLGdCQUE4QjtZQUE5QixxQ0FBOEI7O29ERHBDcEM7Q0E0Q0MsQUFuQkQsSUFtQkM7U0FkWSx5Q0FBeUM7bUNBQXpDLHlDQUF5QztjQUxyRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtEQUFrRDtnQkFDNUQsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7Z0JBQ25FLFdBQVcsRUFBRSx1REFBdUQ7YUFDckUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbiB7XG4gIGlkOiBudW1iZXI7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBtaWRkbGVOYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBFUlNPTl9EQVRBOiBQZXJzb25bXSA9IFtcbiAge2lkOiAxLCBmaXJzdE5hbWU6ICdUZXJyYScsIG1pZGRsZU5hbWU6ICdNYWR1aW4nLCBsYXN0TmFtZTogJ0JyYW5mb3JkJ30sXG4gIHtpZDogMiwgZmlyc3ROYW1lOiAnTG9ja2UnLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdDb2xlJ30sXG4gIHtpZDogMywgZmlyc3ROYW1lOiAnQ2VsZXMnLCBtaWRkbGVOYW1lOiAnR2VzdGFobCcsIGxhc3ROYW1lOiAnQ2hlcmUnfSxcbiAge2lkOiA0LCBmaXJzdE5hbWU6ICdFZGdhcicsIG1pZGRsZU5hbWU6ICdSb25pJywgbGFzdE5hbWU6ICdGaWdhcm8nfSxcbiAge2lkOiA1LCBmaXJzdE5hbWU6ICdTYWJpbicsIG1pZGRsZU5hbWU6ICdSZW5lJywgbGFzdE5hbWU6ICdGaWdhcm8nfSxcbiAge2lkOiA2LCBmaXJzdE5hbWU6ICdDbHlkZScsIG1pZGRsZU5hbWU6ICdcIlNoYWRvd1wiJywgbGFzdE5hbWU6ICdBcnJvd255J30sXG4gIHtpZDogNywgZmlyc3ROYW1lOiAnU2V0emVyJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnR2FiYmlhbmknfSxcbiAge2lkOiA4LCBmaXJzdE5hbWU6ICdDaWQnLCBtaWRkbGVOYW1lOiAnRGVsIE5vcnRlJywgbGFzdE5hbWU6ICdNYXJxdWV6J30sXG4gIHtpZDogOSwgZmlyc3ROYW1lOiAnTW9nJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnTWNNb29nbGUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIENESyBQb3BvdmVyIEVkaXQgc3Bhbm5pbmcgbXVsdGlwbGUgY29sdW1ucyBvbiBhbiBIVE1MIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlIHtcbiAgcmVhZG9ubHkgcHJlc2VydmVkVmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyc29uLCBhbnk+KCk7XG5cbiAgcmVhZG9ubHkgcGVyc29ucyA9IFBFUlNPTl9EQVRBO1xuXG4gIG9uU3VibWl0KHBlcnNvbjogUGVyc29uLCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwZXJzb24uZmlyc3ROYW1lID0gZi52YWx1ZVsnZmlyc3ROYW1lJ107XG4gICAgcGVyc29uLm1pZGRsZU5hbWUgPSBmLnZhbHVlWydtaWRkbGVOYW1lJ107XG4gICAgcGVyc29uLmxhc3ROYW1lID0gZi52YWx1ZVsnbGFzdE5hbWUnXTtcbiAgfVxufVxuIiwiPHRhYmxlIGVkaXRhYmxlIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiPlxuICA8IS0tXG4gICAgVGhpcyBlZGl0IGxlbnMgaXMgc3BlY2lmaWVkIG91dHNpZGUgb2YgdGhlIGNlbGwgYW5kIG11c3QgZXhwbGljaXRseSBkZWNsYXJlXG4gICAgaXRzIGNvbnRleHQuIEl0IGNvdWxkIGJlIHJldXNlZCBpbiBtdWx0aXBsZSBjZWxscy5cbiAgLS0+XG4gIDxuZy10ZW1wbGF0ZSAjbmFtZUVkaXQgbGV0LWN0eD5cbiAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgd2lkdGg6IDEwMCVcIj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBjZGtFZGl0Q29udHJvbFxuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChjdHgucGVyc29uLCBmKVwiXG4gICAgICAgICAgW2Nka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZFZhbHVlcy5nZXQoY3R4LnBlcnNvbilcIlxuICAgICAgICAgIChjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZUNoYW5nZSk9XCJwcmVzZXJ2ZWRWYWx1ZXMuc2V0KGN0eC5wZXJzb24sICRldmVudClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cImN0eC5wZXJzb24uZmlyc3ROYW1lXCIgbmFtZT1cImZpcnN0TmFtZVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjdHguZm9jdXMgPT09ICdmaXJzdE5hbWUnIHx8IG51bGxcIj5cbiAgICAgICAgICA8aW5wdXQgW25nTW9kZWxdPVwiY3R4LnBlcnNvbi5taWRkbGVOYW1lXCIgbmFtZT1cIm1pZGRsZU5hbWVcIlxuICAgICAgICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY3R4LmZvY3VzID09PSAnbWlkZGxlTmFtZScgfHwgbnVsbFwiPlxuICAgICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XCJjdHgucGVyc29uLmxhc3ROYW1lXCIgbmFtZT1cImxhc3ROYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImN0eC5mb2N1cyA9PT0gJ2xhc3ROYW1lJyB8fCBudWxsXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdENsb3NlPkNsb3NlPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIFxuICA8dHI+XG4gICAgPHRoPiBOby4gPC90aD5cbiAgICA8dGg+IEZpcnN0IG5hbWUgPC90aD5cbiAgICA8dGg+IE1pZGRsZSBuYW1lIDwvdGg+XG4gICAgPHRoPiBMYXN0IG5hbWUgPC90aD5cbiAgPC90cj5cbiAgXG4gIDx0ciAqbmdGb3I9XCJsZXQgcGVyc29uIG9mIHBlcnNvbnNcIj5cbiAgICA8dGQ+IHt7cGVyc29uLmlkfX0gPC90ZD5cblxuICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb250ZXh0XT1cIntwZXJzb246IHBlcnNvbiwgZm9jdXM6ICdmaXJzdE5hbWUnfVwiXG4gICAgICAgIFtjZGtQb3BvdmVyRWRpdENvbHNwYW5dPVwie2FmdGVyOiAyfVwiPlxuICAgICAge3twZXJzb24uZmlyc3ROYW1lfX1cbiAgICAgIFxuICAgICAgPHNwYW4gKmNka1Jvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0T3Blbj5FZGl0PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgICBcbiAgICA8dGQgW2Nka1BvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCJcbiAgICAgICAgW2Nka1BvcG92ZXJFZGl0Q29udGV4dF09XCJ7cGVyc29uOiBwZXJzb24sIGZvY3VzOiAnbWlkZGxlTmFtZSd9XCJcbiAgICAgICAgW2Nka1BvcG92ZXJFZGl0Q29sc3Bhbl09XCJ7YmVmb3JlOiAxLCBhZnRlcjogMX1cIj5cbiAgICAgIHt7cGVyc29uLm1pZGRsZU5hbWV9fVxuICAgICAgXG4gICAgICA8c3BhbiAqY2RrUm93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRPcGVuPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICAgIFxuICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb250ZXh0XT1cIntwZXJzb246IHBlcnNvbiwgZm9jdXM6ICdsYXN0TmFtZSd9XCJcbiAgICAgICAgW2Nka1BvcG92ZXJFZGl0Q29sc3Bhbl09XCJ7YmVmb3JlOiAyfVwiPlxuICAgICAge3twZXJzb24ubGFzdE5hbWV9fVxuICAgICAgXG4gICAgICA8c3BhbiAqY2RrUm93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRPcGVuPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L3RyPlxuPC90YWJsZT5cbiJdfQ==