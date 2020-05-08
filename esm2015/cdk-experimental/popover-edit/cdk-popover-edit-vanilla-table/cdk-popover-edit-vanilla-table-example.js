/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk-experimental/popover-edit/cdk-popover-edit-vanilla-table/cdk-popover-edit-vanilla-table-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/popover-edit";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function CdkPopoverEditVanillaTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "form", 4, 5);
    i0.ɵɵlistener("ngSubmit", function CdkPopoverEditVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r6); const element_r3 = ctx.$implicit; const _r4 = i0.ɵɵreference(2); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onSubmitWeight(element_r3, _r4); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const element_r3 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.preservedWeightValues.set(element_r3, $event); });
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
    const element_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r3));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", element_r3.weight);
} }
function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "form", 4, 5);
    i0.ɵɵlistener("ngSubmit", function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r16); const _r13 = i0.ɵɵreference(2); const element_r8 = i0.ɵɵnextContext().$implicit; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmitName(element_r8, _r13); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r16); const element_r8 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.preservedNameValues.set(element_r8, $event); });
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
    const element_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r10.preservedNameValues.get(element_r8));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", element_r8.name);
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
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", element_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r8.weight, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", element_r8.symbol, " ");
} }
/**
 * @record
 */
export function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
}
/** @type {?} */
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
 * \@title CDK Popover Edit on an HTML data-table
 */
export class CdkPopoverEditVanillaTableExample {
    constructor() {
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
        this.elements = ELEMENT_DATA;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
}
CdkPopoverEditVanillaTableExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-popover-edit-vanilla-table-example',
                styleUrls: ['cdk-popover-edit-vanilla-table-example.css'],
                templateUrl: 'cdk-popover-edit-vanilla-table-example.html',
            },] },
];
/** @nocollapse */ CdkPopoverEditVanillaTableExample.ɵfac = function CdkPopoverEditVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditVanillaTableExample)(); };
/** @nocollapse */ CdkPopoverEditVanillaTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPopoverEditVanillaTableExample, selectors: [["cdk-popover-edit-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["weightEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "white", "width", "100%"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], [3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditOpen", ""]], template: function CdkPopoverEditVanillaTableExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditVanillaTableExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-vanilla-table-example',
                styleUrls: ['cdk-popover-edit-vanilla-table-example.css'],
                templateUrl: 'cdk-popover-edit-vanilla-table-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkPopoverEditVanillaTableExample.prototype.preservedNameValues;
    /** @type {?} */
    CdkPopoverEditVanillaTableExample.prototype.preservedWeightValues;
    /** @type {?} */
    CdkPopoverEditVanillaTableExample.prototype.elements;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNNcEMsOEJBQ0U7SUFBQSxrQ0FLRTtJQUhFLHFTQUF1QyxpUkFFRyxvREFBMEMsSUFGN0M7SUFHekMseUJBQ0E7SUFBQSwyQkFDQTtJQUFBLHFCQUNBO0lBQUEsaUNBQXNCO0lBQUEsdUJBQU87SUFBQSxpQkFBUztJQUN0QyxpQ0FBc0I7SUFBQSxzQkFBTTtJQUFBLGlCQUFTO0lBQ3JDLGtDQUFxQjtJQUFBLHNCQUFLO0lBQUEsaUJBQVM7SUFDckMsaUJBQU87SUFDVCxpQkFBTTs7OztJQVRBLGVBQXVFO0lBQXZFLCtGQUF1RTtJQUdwRCxlQUEwQjtJQUExQiwyQ0FBMEI7Ozs7SUF3Qi9DLDhCQUNFO0lBQUEsa0NBS0U7SUFIRSw2VEFBcUMsd1NBRUssbURBQXdDLElBRjdDO0lBR3ZDLHlCQUNBO0lBQUEsNEJBQ0E7SUFBQSxxQkFDQTtJQUFBLGlDQUFzQjtJQUFBLHVCQUFPO0lBQUEsaUJBQVM7SUFDdEMsaUNBQXNCO0lBQUEsc0JBQU07SUFBQSxpQkFBUztJQUNyQyxrQ0FBcUI7SUFBQSxzQkFBSztJQUFBLGlCQUFTO0lBQ3JDLGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFUQSxlQUFxRTtJQUFyRSw4RkFBcUU7SUFHaEUsZUFBd0I7SUFBeEIseUNBQXdCOzs7SUFTckMsNEJBQ0U7SUFBQSxrQ0FBb0I7SUFBQSxvQkFBSTtJQUFBLGlCQUFTO0lBQ25DLGlCQUFPOzs7SUFNUCw0QkFDRTtJQUFBLGtDQUFvQjtJQUFBLG9CQUFJO0lBQUEsaUJBQVM7SUFDbkMsaUJBQU87OztJQWxDWCwwQkFDRTtJQUFBLDBCQUFLO0lBQUEsWUFBcUI7SUFBQSxpQkFBSztJQUUvQiw4QkFDRTtJQUFBLFlBRUE7SUFDQSwySUFDRTtJQWdCRiwyRkFDRTtJQUVKLGlCQUFLO0lBRUwsOEJBQ0U7SUFBQSxZQUVBO0lBQUEsNkZBQ0U7SUFFSixpQkFBSztJQUVMLDJCQUFLO0lBQUEsYUFBbUI7SUFBQSxpQkFBSztJQUMvQixpQkFBSzs7Ozs7O0lBckNFLGVBQXFCO0lBQXJCLG9EQUFxQjtJQUV0QixlQUEyQjtJQUEzQixvQ0FBMkI7SUFDN0IsZUFFQTtJQUZBLGdEQUVBO0lBdUJFLGVBQTZCO0lBQTdCLG9DQUE2QixxQ0FBQTtJQUMvQixlQUVBO0lBRkEsa0RBRUE7SUFLRyxlQUFtQjtJQUFuQixrREFBbUI7Ozs7O0FEL0Q1QixxQ0FLQzs7O0lBSkMsK0JBQWE7O0lBQ2IsbUNBQWlCOztJQUNqQixpQ0FBZTs7SUFDZixpQ0FBZTs7O01BR1gsWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUNoRSxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzlEOzs7O0FBVUQsTUFBTSxPQUFPLGlDQUFpQztJQUw5QztRQU1XLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO1FBQzFELDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO1FBRTVELGFBQVEsR0FBRyxZQUFZLENBQUM7S0FhbEM7Ozs7OztJQVhDLFlBQVksQ0FBQyxPQUF3QixFQUFFLENBQVM7UUFDOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFekIsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBd0IsRUFBRSxDQUFTO1FBQ2hELElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXpCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQztnQkFDekQsV0FBVyxFQUFFLDZDQUE2QzthQUMzRDs7cUlBQ1ksaUNBQWlDO3lGQUFqQyxpQ0FBaUM7UUN6QzlDLGdDQUNFO1FBSUEsb0lBQ0U7UUFnQkYsMEJBQ0U7UUFBQSwwQkFBSztRQUFBLHFCQUFJO1FBQUEsaUJBQUs7UUFDZCwwQkFBSztRQUFBLHNCQUFLO1FBQUEsaUJBQUs7UUFDZiwwQkFBSztRQUFBLHdCQUFPO1FBQUEsaUJBQUs7UUFDakIsMkJBQUs7UUFBQSx5QkFBTztRQUFBLGlCQUFLO1FBQ25CLGlCQUFLO1FBRUwsbUZBQ0U7UUFzQ0osaUJBQVE7O1FBdkNGLGdCQUFnQztRQUFoQyxzQ0FBZ0M7O2tERFl6QixpQ0FBaUM7Y0FMN0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2dCQUN6RCxXQUFXLEVBQUUsNkNBQTZDO2FBQzNEOzs7O0lBRUMsZ0VBQW1FOztJQUNuRSxrRUFBcUU7O0lBRXJFLHFEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuICB7cG9zaXRpb246IDExLCBuYW1lOiAnU29kaXVtJywgd2VpZ2h0OiAyMi45ODk3LCBzeW1ib2w6ICdOYSd9LFxuICB7cG9zaXRpb246IDEyLCBuYW1lOiAnTWFnbmVzaXVtJywgd2VpZ2h0OiAyNC4zMDUsIHN5bWJvbDogJ01nJ30sXG4gIHtwb3NpdGlvbjogMTMsIG5hbWU6ICdBbHVtaW51bScsIHdlaWdodDogMjYuOTgxNSwgc3ltYm9sOiAnQWwnfSxcbiAge3Bvc2l0aW9uOiAxNCwgbmFtZTogJ1NpbGljb24nLCB3ZWlnaHQ6IDI4LjA4NTUsIHN5bWJvbDogJ1NpJ30sXG4gIHtwb3NpdGlvbjogMTUsIG5hbWU6ICdQaG9zcGhvcnVzJywgd2VpZ2h0OiAzMC45NzM4LCBzeW1ib2w6ICdQJ30sXG4gIHtwb3NpdGlvbjogMTYsIG5hbWU6ICdTdWxmdXInLCB3ZWlnaHQ6IDMyLjA2NSwgc3ltYm9sOiAnUyd9LFxuICB7cG9zaXRpb246IDE3LCBuYW1lOiAnQ2hsb3JpbmUnLCB3ZWlnaHQ6IDM1LjQ1Mywgc3ltYm9sOiAnQ2wnfSxcbiAge3Bvc2l0aW9uOiAxOCwgbmFtZTogJ0FyZ29uJywgd2VpZ2h0OiAzOS45NDgsIHN5bWJvbDogJ0FyJ30sXG4gIHtwb3NpdGlvbjogMTksIG5hbWU6ICdQb3Rhc3NpdW0nLCB3ZWlnaHQ6IDM5LjA5ODMsIHN5bWJvbDogJ0snfSxcbiAge3Bvc2l0aW9uOiAyMCwgbmFtZTogJ0NhbGNpdW0nLCB3ZWlnaHQ6IDQwLjA3OCwgc3ltYm9sOiAnQ2EnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIENESyBQb3BvdmVyIEVkaXQgb24gYW4gSFRNTCBkYXRhLXRhYmxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wb3BvdmVyLWVkaXQtdmFuaWxsYS10YWJsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wb3BvdmVyLWVkaXQtdmFuaWxsYS10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3BvdmVyLWVkaXQtdmFuaWxsYS10YWJsZS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3BvdmVyRWRpdFZhbmlsbGFUYWJsZUV4YW1wbGUge1xuICByZWFkb25seSBwcmVzZXJ2ZWROYW1lVmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG4gIHJlYWRvbmx5IHByZXNlcnZlZFdlaWdodFZhbHVlcyA9IG5ldyBXZWFrTWFwPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuXG4gIHJlYWRvbmx5IGVsZW1lbnRzID0gRUxFTUVOVF9EQVRBO1xuXG4gIG9uU3VibWl0TmFtZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQubmFtZSA9IGYudmFsdWUubmFtZTtcbiAgfVxuXG4gIG9uU3VibWl0V2VpZ2h0KGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC53ZWlnaHQgPSBmLnZhbHVlLndlaWdodDtcbiAgfVxufVxuIiwiPHRhYmxlIGVkaXRhYmxlIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiPlxuICA8IS0tXG4gICAgVGhpcyBlZGl0IGxlbnMgaXMgc3BlY2lmaWVkIG91dHNpZGUgb2YgdGhlIGNlbGwgYW5kIG11c3QgZXhwbGljaXRseSBkZWNsYXJlXG4gICAgaXRzIGNvbnRleHQuIEl0IGNvdWxkIGJlIHJldXNlZCBpbiBtdWx0aXBsZSBjZWxscy5cbiAgLS0+XG4gIDxuZy10ZW1wbGF0ZSAjd2VpZ2h0RWRpdCBsZXQtZWxlbWVudD5cbiAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IHdpZHRoOiAxMDAlXCI+XG4gICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgY2RrRWRpdENvbnRyb2xcbiAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXRXZWlnaHQoZWxlbWVudCwgZilcIlxuICAgICAgICAgIFtjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZV09XCJwcmVzZXJ2ZWRXZWlnaHRWYWx1ZXMuZ2V0KGVsZW1lbnQpXCJcbiAgICAgICAgICAoY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVDaGFuZ2UpPVwicHJlc2VydmVkV2VpZ2h0VmFsdWVzLnNldChlbGVtZW50LCAkZXZlbnQpXCI+XG4gICAgICAgIEVkaXQgYjpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJlbGVtZW50LndlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIiByZXF1aXJlZD5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgXG4gIDx0cj5cbiAgICA8dGg+IE5vLiA8L3RoPlxuICAgIDx0aD4gTmFtZSA8L3RoPlxuICAgIDx0aD4gV2VpZ2h0IDwvdGg+XG4gICAgPHRoPiBTeW1ib2wgPC90aD5cbiAgPC90cj5cbiAgXG4gIDx0ciAqbmdGb3I9XCJsZXQgZWxlbWVudCBvZiBlbGVtZW50c1wiPlxuICAgIDx0ZD4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC90ZD5cbiAgICBcbiAgICA8dGQgW2Nka1BvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCI+XG4gICAgICB7e2VsZW1lbnQubmFtZX19XG4gICAgICBcbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICNuYW1lRWRpdD5cbiAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB3aWR0aDogMTAwJVwiPlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgY2RrRWRpdENvbnRyb2xcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0TmFtZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFtjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZV09XCJwcmVzZXJ2ZWROYW1lVmFsdWVzLmdldChlbGVtZW50KVwiXG4gICAgICAgICAgICAgIChjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZUNoYW5nZSk9XCJwcmVzZXJ2ZWROYW1lVmFsdWVzLnNldChlbGVtZW50LCAkZXZlbnQpXCI+XG4gICAgICAgICAgICBFZGl0IGE6XG4gICAgICAgICAgICA8aW5wdXQgW25nTW9kZWxdPVwiZWxlbWVudC5uYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2RrRWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2RrRWRpdENsb3NlPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdE9wZW4+RWRpdDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG5cbiAgICA8dGQgW2Nka1BvcG92ZXJFZGl0XT1cIndlaWdodEVkaXRcIiBbY2RrUG9wb3ZlckVkaXRDb250ZXh0XT1cImVsZW1lbnRcIj5cbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxuICAgICAgXG4gICAgICA8c3BhbiAqY2RrUm93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRPcGVuPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuXG4gICAgPHRkPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC90cj5cbjwvdGFibGU+XG4iXX0=