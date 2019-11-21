import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/popover-edit";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
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
 * @title CDK Popover Edit on an HTML data-table
 */
var CdkPopoverEditVanillaTableExample = /** @class */ (function () {
    function CdkPopoverEditVanillaTableExample() {
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
        this.elements = ELEMENT_DATA;
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
        { type: Component, args: [{
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
export { CdkPopoverEditVanillaTableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditVanillaTableExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-vanilla-table-example',
                styleUrls: ['cdk-popover-edit-vanilla-table-example.css'],
                templateUrl: 'cdk-popover-edit-vanilla-table-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDTXBDLDhCQUNFO0lBQUEsa0NBS0U7SUFIRSxpVEFBdUM7SUFFdkMsK1JBQTBDLHVEQUEwQyxJQUFDO0lBQ3ZGLHlCQUNBO0lBQUEsMkJBQ0E7SUFBQSxxQkFDQTtJQUFBLGlDQUFzQjtJQUFBLHVCQUFPO0lBQUEsaUJBQVM7SUFDdEMsaUNBQXNCO0lBQUEsc0JBQU07SUFBQSxpQkFBUztJQUNyQyxrQ0FBcUI7SUFBQSxzQkFBSztJQUFBLGlCQUFTO0lBQ3JDLGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFUQSxlQUF1RTtJQUF2RSxpR0FBdUU7SUFHcEQsZUFBMEI7SUFBMUIsNENBQTBCOzs7O0lBd0IvQyw4QkFDRTtJQUFBLGtDQUtFO0lBSEUsc1VBQXFDO0lBRXJDLHFUQUEwQyxzREFBd0MsSUFBQztJQUNyRix5QkFDQTtJQUFBLDRCQUNBO0lBQUEscUJBQ0E7SUFBQSxpQ0FBc0I7SUFBQSx1QkFBTztJQUFBLGlCQUFTO0lBQ3RDLGlDQUFzQjtJQUFBLHNCQUFNO0lBQUEsaUJBQVM7SUFDckMsa0NBQXFCO0lBQUEsc0JBQUs7SUFBQSxpQkFBUztJQUNyQyxpQkFBTztJQUNULGlCQUFNOzs7O0lBVEEsZUFBcUU7SUFBckUsaUdBQXFFO0lBR2hFLGVBQXdCO0lBQXhCLDJDQUF3Qjs7O0lBU3JDLDRCQUNFO0lBQUEsa0NBQW9CO0lBQUEsb0JBQUk7SUFBQSxpQkFBUztJQUNuQyxpQkFBTzs7O0lBTVAsNEJBQ0U7SUFBQSxrQ0FBb0I7SUFBQSxvQkFBSTtJQUFBLGlCQUFTO0lBQ25DLGlCQUFPOzs7SUFsQ1gsMEJBQ0U7SUFBQSwwQkFBSztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7SUFFL0IsOEJBQ0U7SUFBQSxZQUVBO0lBQ0EsMklBQ0U7SUFnQkYsMkZBQ0U7SUFFSixpQkFBSztJQUVMLDhCQUNFO0lBQUEsWUFFQTtJQUFBLDZGQUNFO0lBRUosaUJBQUs7SUFFTCwyQkFBSztJQUFBLGFBQW1CO0lBQUEsaUJBQUs7SUFDL0IsaUJBQUs7Ozs7OztJQXJDRSxlQUFxQjtJQUFyQixzREFBcUI7SUFFdEIsZUFBMkI7SUFBM0Isc0NBQTJCO0lBQzdCLGVBRUE7SUFGQSxrREFFQTtJQXVCRSxlQUE2QjtJQUE3QixxQ0FBNkIsdUNBQUE7SUFDL0IsZUFFQTtJQUZBLG9EQUVBO0lBS0csZUFBbUI7SUFBbkIsb0RBQW1COztBRHhENUIsSUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ2hFLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDOUQsQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUFBQTtRQU1XLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO1FBQzFELDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO1FBRTVELGFBQVEsR0FBRyxZQUFZLENBQUM7S0FhbEM7SUFYQyx3REFBWSxHQUFaLFVBQWEsT0FBd0IsRUFBRSxDQUFTO1FBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXpCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELDBEQUFjLEdBQWQsVUFBZSxPQUF3QixFQUFFLENBQVM7UUFDaEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFekIsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3Q0FBd0M7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO29CQUN6RCxXQUFXLEVBQUUsNkNBQTZDO2lCQUMzRDs7c0hBQ1ksaUNBQWlDOzBFQUFqQyxpQ0FBaUM7WUN6QzlDLGdDQUNFO1lBSUEsb0lBQ0U7WUFnQkYsMEJBQ0U7WUFBQSwwQkFBSztZQUFBLHFCQUFJO1lBQUEsaUJBQUs7WUFDZCwwQkFBSztZQUFBLHNCQUFLO1lBQUEsaUJBQUs7WUFDZiwwQkFBSztZQUFBLHdCQUFPO1lBQUEsaUJBQUs7WUFDakIsMkJBQUs7WUFBQSx5QkFBTztZQUFBLGlCQUFLO1lBQ25CLGlCQUFLO1lBRUwsbUZBQ0U7WUFzQ0osaUJBQVE7O1lBdkNGLGdCQUFnQztZQUFoQyxzQ0FBZ0M7OzRDRDdCdEM7Q0EwREMsQUF0QkQsSUFzQkM7U0FqQlksaUNBQWlDO2tEQUFqQyxpQ0FBaUM7Y0FMN0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2dCQUN6RCxXQUFXLEVBQUUsNkNBQTZDO2FBQzNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG4gIHtwb3NpdGlvbjogMTEsIG5hbWU6ICdTb2RpdW0nLCB3ZWlnaHQ6IDIyLjk4OTcsIHN5bWJvbDogJ05hJ30sXG4gIHtwb3NpdGlvbjogMTIsIG5hbWU6ICdNYWduZXNpdW0nLCB3ZWlnaHQ6IDI0LjMwNSwgc3ltYm9sOiAnTWcnfSxcbiAge3Bvc2l0aW9uOiAxMywgbmFtZTogJ0FsdW1pbnVtJywgd2VpZ2h0OiAyNi45ODE1LCBzeW1ib2w6ICdBbCd9LFxuICB7cG9zaXRpb246IDE0LCBuYW1lOiAnU2lsaWNvbicsIHdlaWdodDogMjguMDg1NSwgc3ltYm9sOiAnU2knfSxcbiAge3Bvc2l0aW9uOiAxNSwgbmFtZTogJ1Bob3NwaG9ydXMnLCB3ZWlnaHQ6IDMwLjk3MzgsIHN5bWJvbDogJ1AnfSxcbiAge3Bvc2l0aW9uOiAxNiwgbmFtZTogJ1N1bGZ1cicsIHdlaWdodDogMzIuMDY1LCBzeW1ib2w6ICdTJ30sXG4gIHtwb3NpdGlvbjogMTcsIG5hbWU6ICdDaGxvcmluZScsIHdlaWdodDogMzUuNDUzLCBzeW1ib2w6ICdDbCd9LFxuICB7cG9zaXRpb246IDE4LCBuYW1lOiAnQXJnb24nLCB3ZWlnaHQ6IDM5Ljk0OCwgc3ltYm9sOiAnQXInfSxcbiAge3Bvc2l0aW9uOiAxOSwgbmFtZTogJ1BvdGFzc2l1bScsIHdlaWdodDogMzkuMDk4Mywgc3ltYm9sOiAnSyd9LFxuICB7cG9zaXRpb246IDIwLCBuYW1lOiAnQ2FsY2l1bScsIHdlaWdodDogNDAuMDc4LCBzeW1ib2w6ICdDYSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgQ0RLIFBvcG92ZXIgRWRpdCBvbiBhbiBIVE1MIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcG92ZXJFZGl0VmFuaWxsYVRhYmxlRXhhbXBsZSB7XG4gIHJlYWRvbmx5IHByZXNlcnZlZE5hbWVWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgcHJlc2VydmVkV2VpZ2h0VmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG5cbiAgcmVhZG9ubHkgZWxlbWVudHMgPSBFTEVNRU5UX0RBVEE7XG5cbiAgb25TdWJtaXROYW1lKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC5uYW1lID0gZi52YWx1ZS5uYW1lO1xuICB9XG5cbiAgb25TdWJtaXRXZWlnaHQoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHsgcmV0dXJuOyB9XG5cbiAgICBlbGVtZW50LndlaWdodCA9IGYudmFsdWUud2VpZ2h0O1xuICB9XG59XG4iLCI8dGFibGUgZWRpdGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICN3ZWlnaHRFZGl0IGxldC1lbGVtZW50PlxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgd2lkdGg6IDEwMCVcIj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBjZGtFZGl0Q29udHJvbFxuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFdlaWdodChlbGVtZW50LCBmKVwiXG4gICAgICAgICAgW2Nka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZFdlaWdodFZhbHVlcy5nZXQoZWxlbWVudClcIlxuICAgICAgICAgIChjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZUNoYW5nZSk9XCJwcmVzZXJ2ZWRXZWlnaHRWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cbiAgICAgICAgRWRpdCBiOlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFtuZ01vZGVsXT1cImVsZW1lbnQud2VpZ2h0XCIgbmFtZT1cIndlaWdodFwiIHJlcXVpcmVkPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRDbG9zZT5DbG9zZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICBcbiAgPHRyPlxuICAgIDx0aD4gTm8uIDwvdGg+XG4gICAgPHRoPiBOYW1lIDwvdGg+XG4gICAgPHRoPiBXZWlnaHQgPC90aD5cbiAgICA8dGg+IFN5bWJvbCA8L3RoPlxuICA8L3RyPlxuICBcbiAgPHRyICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIGVsZW1lbnRzXCI+XG4gICAgPHRkPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICAgIFxuICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIj5cbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cbiAgICAgIFxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IHdpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBjZGtFZGl0Q29udHJvbFxuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXROYW1lKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgW2Nka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuZ2V0KGVsZW1lbnQpXCJcbiAgICAgICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cbiAgICAgICAgICAgIEVkaXQgYTpcbiAgICAgICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XCJlbGVtZW50Lm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKmNka1Jvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0T3Blbj5FZGl0PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cblxuICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwid2VpZ2h0RWRpdFwiIFtjZGtQb3BvdmVyRWRpdENvbnRleHRdPVwiZWxlbWVudFwiPlxuICAgICAge3tlbGVtZW50LndlaWdodH19XG4gICAgICBcbiAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdE9wZW4+RWRpdDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG5cbiAgICA8dGQ+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L3RyPlxuPC90YWJsZT5cbiJdfQ==