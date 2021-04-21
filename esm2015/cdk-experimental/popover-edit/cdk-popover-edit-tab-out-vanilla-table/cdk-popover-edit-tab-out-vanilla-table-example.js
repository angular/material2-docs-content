import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/popover-edit";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "form", 4, 5);
    i0.ɵɵlistener("ngSubmit", function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const element_r3 = restoredCtx.$implicit; const _r4 = i0.ɵɵreference(2); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onSubmitWeight(element_r3, _r4); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r6); const element_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.preservedWeightValues.set(element_r3, $event); });
    i0.ɵɵelement(3, "input", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r3));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", element_r3.weight);
} }
function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "form", 4, 5);
    i0.ɵɵlistener("ngSubmit", function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r14); const _r11 = i0.ɵɵreference(2); const element_r8 = i0.ɵɵnextContext().$implicit; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onSubmitName(element_r8, _r11); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const element_r8 = i0.ɵɵnextContext().$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.preservedNameValues.set(element_r8, $event); });
    i0.ɵɵelement(3, "input", 10);
    i0.ɵɵelement(4, "br");
    i0.ɵɵelementStart(5, "button", 11);
    i0.ɵɵtext(6, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r10.preservedNameValues.get(element_r8));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", element_r8.name);
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
    const element_r8 = ctx.$implicit;
    const _r9 = i0.ɵɵreference(6);
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r8.position, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkPopoverEdit", _r9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r8.name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", element_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r8.weight, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r8.symbol, " ");
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
 * @title CDK Popover Edit with spreadsheet-like configuration on an HTML data-table
 */
export class CdkPopoverEditTabOutVanillaTableExample {
    constructor() {
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
        this.elements = ELEMENT_DATA;
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
CdkPopoverEditTabOutVanillaTableExample.ɵfac = function CdkPopoverEditTabOutVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditTabOutVanillaTableExample)(); };
CdkPopoverEditTabOutVanillaTableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkPopoverEditTabOutVanillaTableExample, selectors: [["cdk-popover-edit-tab-out-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["weightEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "white", "width", "100%"], ["cdkEditControl", "", "cdkEditControlClickOutBehavior", "submit", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["cdkPopoverEditTabOut", "", "cdkEditOpen", "", 3, "cdkPopoverEdit"], ["nameEdit", ""], ["cdkPopoverEditTabOut", "", "cdkEditOpen", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["name", "name", "required", "", 3, "ngModel"], ["type", "submit"]], template: function CdkPopoverEditTabOutVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.CdkEditable, i2.NgForOf, i3.ɵangular_packages_forms_forms_bb, i3.NgControlStatusGroup, i3.NgForm, i1.CdkEditControl, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1.CdkEditOpen, i1.CdkPopoverEditTabOut], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPopoverEditTabOutVanillaTableExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-tab-out-vanilla-table-example',
                styleUrls: ['cdk-popover-edit-tab-out-vanilla-table-example.css'],
                templateUrl: 'cdk-popover-edit-tab-out-vanilla-table-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC10YWItb3V0LXZhbmlsbGEtdGFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2Nkay1wb3BvdmVyLWVkaXQtdGFiLW91dC12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtdGFiLW91dC12YW5pbGxhLXRhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LXRhYi1vdXQtdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LXRhYi1vdXQtdmFuaWxsYS10YWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ01wQyw4QkFBa0Q7SUFDaEQsa0NBSzBGO0lBRnRGLHVVQUF1QyxtVEFFRyxvREFBMEMsSUFGN0M7SUFHekMsMkJBQXVFO0lBQ3pFLGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFKQSxlQUF1RTtJQUF2RSwrRkFBdUU7SUFFcEQsZUFBMEI7SUFBMUIsMkNBQTBCOzs7O0lBb0IvQyw4QkFBa0Q7SUFDaEQsa0NBS3dGO0lBRnBGLG1VQUFxQyw4U0FFSyxtREFBd0MsSUFGN0M7SUFHdkMsNEJBQXFEO0lBQ3JELHFCQUFJO0lBQ0osa0NBQXNCO0lBQUEsdUJBQU87SUFBQSxpQkFBUztJQUN4QyxpQkFBTztJQUNULGlCQUFNOzs7O0lBTkEsZUFBcUU7SUFBckUsOEZBQXFFO0lBRWhFLGVBQXdCO0lBQXhCLHlDQUF3Qjs7O0lBZnpDLDBCQUFxQztJQUNuQywwQkFBSTtJQUFDLFlBQXFCO0lBQUEsaUJBQUs7SUFFL0IsNkJBQWlFO0lBQy9ELFlBRUE7SUFDQSwrSUFhYztJQUNoQixpQkFBSztJQUVMLDZCQUNxQztJQUNuQyxZQUNGO0lBQUEsaUJBQUs7SUFFTCwwQkFBSTtJQUFDLGFBQW1CO0lBQUEsaUJBQUs7SUFDL0IsaUJBQUs7Ozs7OztJQTVCRSxlQUFxQjtJQUFyQixvREFBcUI7SUFFdEIsZUFBMkI7SUFBM0Isb0NBQTJCO0lBQzdCLGVBRUE7SUFGQSxnREFFQTtJQWlCRSxlQUE2QjtJQUE3QixvQ0FBNkIscUNBQUE7SUFFL0IsZUFDRjtJQURFLGtEQUNGO0lBRUssZUFBbUI7SUFBbkIsa0RBQW1COztBRDNDNUIsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ2hFLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDOUQsQ0FBQztBQUVGOztHQUVHO0FBTUgsTUFBTSxPQUFPLHVDQUF1QztJQUxwRDtRQU1XLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO1FBQzFELDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO1FBRTVELGFBQVEsR0FBRyxZQUFZLENBQUM7S0FhbEM7SUFYQyxZQUFZLENBQUMsT0FBd0IsRUFBRSxDQUFTO1FBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXpCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUF3QixFQUFFLENBQVM7UUFDaEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFekIsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDOzs4SEFoQlUsdUNBQXVDOzBGQUF2Qyx1Q0FBdUM7UUN6Q3BELGdDQUFzQztRQUtwQyx5SUFXYztRQUVkLDBCQUFJO1FBQ0YsMEJBQUk7UUFBQyxxQkFBSTtRQUFBLGlCQUFLO1FBQ2QsMEJBQUk7UUFBQyxzQkFBSztRQUFBLGlCQUFLO1FBQ2YsMEJBQUk7UUFBQyx3QkFBTztRQUFBLGlCQUFLO1FBQ2pCLDJCQUFJO1FBQUMseUJBQU87UUFBQSxpQkFBSztRQUNuQixpQkFBSztRQUVMLHlGQTZCSztRQUNQLGlCQUFROztRQTlCa0IsZ0JBQVc7UUFBWCxzQ0FBVzs7dUZEZ0J4Qix1Q0FBdUM7Y0FMbkQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnREFBZ0Q7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLG9EQUFvRCxDQUFDO2dCQUNqRSxXQUFXLEVBQUUscURBQXFEO2FBQ25FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG4gIHtwb3NpdGlvbjogMTEsIG5hbWU6ICdTb2RpdW0nLCB3ZWlnaHQ6IDIyLjk4OTcsIHN5bWJvbDogJ05hJ30sXG4gIHtwb3NpdGlvbjogMTIsIG5hbWU6ICdNYWduZXNpdW0nLCB3ZWlnaHQ6IDI0LjMwNSwgc3ltYm9sOiAnTWcnfSxcbiAge3Bvc2l0aW9uOiAxMywgbmFtZTogJ0FsdW1pbnVtJywgd2VpZ2h0OiAyNi45ODE1LCBzeW1ib2w6ICdBbCd9LFxuICB7cG9zaXRpb246IDE0LCBuYW1lOiAnU2lsaWNvbicsIHdlaWdodDogMjguMDg1NSwgc3ltYm9sOiAnU2knfSxcbiAge3Bvc2l0aW9uOiAxNSwgbmFtZTogJ1Bob3NwaG9ydXMnLCB3ZWlnaHQ6IDMwLjk3MzgsIHN5bWJvbDogJ1AnfSxcbiAge3Bvc2l0aW9uOiAxNiwgbmFtZTogJ1N1bGZ1cicsIHdlaWdodDogMzIuMDY1LCBzeW1ib2w6ICdTJ30sXG4gIHtwb3NpdGlvbjogMTcsIG5hbWU6ICdDaGxvcmluZScsIHdlaWdodDogMzUuNDUzLCBzeW1ib2w6ICdDbCd9LFxuICB7cG9zaXRpb246IDE4LCBuYW1lOiAnQXJnb24nLCB3ZWlnaHQ6IDM5Ljk0OCwgc3ltYm9sOiAnQXInfSxcbiAge3Bvc2l0aW9uOiAxOSwgbmFtZTogJ1BvdGFzc2l1bScsIHdlaWdodDogMzkuMDk4Mywgc3ltYm9sOiAnSyd9LFxuICB7cG9zaXRpb246IDIwLCBuYW1lOiAnQ2FsY2l1bScsIHdlaWdodDogNDAuMDc4LCBzeW1ib2w6ICdDYSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgQ0RLIFBvcG92ZXIgRWRpdCB3aXRoIHNwcmVhZHNoZWV0LWxpa2UgY29uZmlndXJhdGlvbiBvbiBhbiBIVE1MIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBvcG92ZXItZWRpdC10YWItb3V0LXZhbmlsbGEtdGFibGUtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstcG9wb3Zlci1lZGl0LXRhYi1vdXQtdmFuaWxsYS10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3BvdmVyLWVkaXQtdGFiLW91dC12YW5pbGxhLXRhYmxlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcG92ZXJFZGl0VGFiT3V0VmFuaWxsYVRhYmxlRXhhbXBsZSB7XG4gIHJlYWRvbmx5IHByZXNlcnZlZE5hbWVWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgcHJlc2VydmVkV2VpZ2h0VmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG5cbiAgcmVhZG9ubHkgZWxlbWVudHMgPSBFTEVNRU5UX0RBVEE7XG5cbiAgb25TdWJtaXROYW1lKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC5uYW1lID0gZi52YWx1ZS5uYW1lO1xuICB9XG5cbiAgb25TdWJtaXRXZWlnaHQoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHsgcmV0dXJuOyB9XG5cbiAgICBlbGVtZW50LndlaWdodCA9IGYudmFsdWUud2VpZ2h0O1xuICB9XG59XG4iLCI8dGFibGUgZWRpdGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICN3ZWlnaHRFZGl0IGxldC1lbGVtZW50PlxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgd2lkdGg6IDEwMCVcIj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBjZGtFZGl0Q29udHJvbFxuICAgICAgICAgIGNka0VkaXRDb250cm9sQ2xpY2tPdXRCZWhhdmlvcj1cInN1Ym1pdFwiXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0V2VpZ2h0KGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICBbY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkV2VpZ2h0VmFsdWVzLmdldChlbGVtZW50KVwiXG4gICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZFdlaWdodFZhbHVlcy5zZXQoZWxlbWVudCwgJGV2ZW50KVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFtuZ01vZGVsXT1cImVsZW1lbnQud2VpZ2h0XCIgbmFtZT1cIndlaWdodFwiIHJlcXVpcmVkPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICBcbiAgPHRyPlxuICAgIDx0aD4gTm8uIDwvdGg+XG4gICAgPHRoPiBOYW1lIDwvdGg+XG4gICAgPHRoPiBXZWlnaHQgPC90aD5cbiAgICA8dGg+IFN5bWJvbCA8L3RoPlxuICA8L3RyPlxuICBcbiAgPHRyICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIGVsZW1lbnRzXCI+XG4gICAgPHRkPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICAgIFxuICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIiBjZGtQb3BvdmVyRWRpdFRhYk91dCBjZGtFZGl0T3Blbj5cbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cbiAgICAgIFxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IHdpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBjZGtFZGl0Q29udHJvbFxuICAgICAgICAgICAgICBjZGtFZGl0Q29udHJvbENsaWNrT3V0QmVoYXZpb3I9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXROYW1lKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgW2Nka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuZ2V0KGVsZW1lbnQpXCJcbiAgICAgICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cbiAgICAgICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XCJlbGVtZW50Lm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvdGQ+XG5cbiAgICA8dGQgW2Nka1BvcG92ZXJFZGl0XT1cIndlaWdodEVkaXRcIiBbY2RrUG9wb3ZlckVkaXRDb250ZXh0XT1cImVsZW1lbnRcIlxuICAgICAgICBjZGtQb3BvdmVyRWRpdFRhYk91dCBjZGtFZGl0T3Blbj5cbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxuICAgIDwvdGQ+XG5cbiAgICA8dGQ+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L3RyPlxuPC90YWJsZT5cbiJdfQ==