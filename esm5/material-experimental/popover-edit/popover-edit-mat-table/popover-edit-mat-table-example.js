import { __extends } from "tslib";
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/cdk-experimental/popover-edit";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material-experimental/popover-edit";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/list";
import * as i11 from "@angular/common";
function PopoverEditMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 14, 15);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r77); var element_r74 = ctx.$implicit; var _r75 = i0.ɵɵreference(2); var ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.onSubmitWeight(element_r74, _r75); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r77); var element_r74 = ctx.$implicit; var ctx_r78 = i0.ɵɵnextContext(); return ctx_r78.weightValues.for(element_r74).value = $event; });
    i0.ɵɵelementStart(3, "div", 16);
    i0.ɵɵelementStart(4, "mat-form-field");
    i0.ɵɵelement(5, "input", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r74 = ctx.$implicit;
    var ctx_r59 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r59.weightValues.for(element_r74).value);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", element_r74.weight);
} }
function PopoverEditMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 21);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r83); var element_r79 = i0.ɵɵnextContext().$implicit; var ctx_r81 = i0.ɵɵnextContext(); return ctx_r81.goodJob(element_r79); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 21);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r83); var element_r79 = i0.ɵɵnextContext().$implicit; var ctx_r84 = i0.ɵɵnextContext(); return ctx_r84.badJob(element_r79); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "thumb_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_5_span_2_Template, 7, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r79 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r79.position, " ");
} }
function PopoverEditMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 14, 15);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r93); var _r90 = i0.ɵɵreference(2); var element_r86 = i0.ɵɵnextContext().$implicit; var ctx_r91 = i0.ɵɵnextContext(); return ctx_r91.onSubmitName(element_r86, _r90); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r93); var element_r86 = i0.ɵɵnextContext().$implicit; var ctx_r94 = i0.ɵɵnextContext(); return ctx_r94.nameValues.for(element_r86).value = $event; });
    i0.ɵɵelementStart(3, "h2", 24);
    i0.ɵɵtext(4, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 16);
    i0.ɵɵelementStart(6, "mat-form-field");
    i0.ɵɵelement(7, "input", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 26);
    i0.ɵɵelementStart(9, "button", 27);
    i0.ɵɵtext(10, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 28);
    i0.ɵɵtext(12, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 29);
    i0.ɵɵtext(14, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r86 = i0.ɵɵnextContext().$implicit;
    var ctx_r88 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r88.nameValues.for(element_r86).value);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", element_r86.name);
} }
function PopoverEditMatTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 30);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_8_ng_template_2_Template, 15, 2, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_8_span_4_Template, 4, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r86 = ctx.$implicit;
    var _r87 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r87);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r86.name, " ");
} }
function PopoverEditMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Type ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var type_r103 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r103);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", type_r103, " ");
} }
var _c0 = function (a0) { return [a0]; };
function PopoverEditMatTableExample_td_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 32, 15);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r106); var _r101 = i0.ɵɵreference(2); var element_r97 = i0.ɵɵnextContext().$implicit; var ctx_r104 = i0.ɵɵnextContext(); return ctx_r104.onSubmitType(element_r97, _r101); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r106); var element_r97 = i0.ɵɵnextContext().$implicit; var ctx_r107 = i0.ɵɵnextContext(); return ctx_r107.typeValues.for(element_r97).value = $event; });
    i0.ɵɵelementStart(3, "div", 33);
    i0.ɵɵelementStart(4, "mat-selection-list", 34);
    i0.ɵɵlistener("selectionChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_mat_selection_list_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r106); var _r101 = i0.ɵɵreference(2); return _r101.ngSubmit.emit(); });
    i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r97 = i0.ɵɵnextContext().$implicit;
    var ctx_r99 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r99.typeValues.for(element_r97).value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("multiple", false)("ngModel", i0.ɵɵpureFunction1(4, _c0, element_r97.type));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r99.TYPES);
} }
function PopoverEditMatTableExample_td_11_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 30);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_drop_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_11_ng_template_2_Template, 6, 6, "ng-template", null, 31, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_11_span_4_Template, 4, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r97 = ctx.$implicit;
    var _r98 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r98);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r97.type, " ");
} }
function PopoverEditMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 30);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 37);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_14_span_2_Template, 4, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r111 = ctx.$implicit;
    i0.ɵɵnextContext();
    var _r58 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r58)("matPopoverEditContext", element_r111);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r111.weight, " ");
} }
function PopoverEditMatTableExample_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r113 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r113.symbol, " ");
} }
function PopoverEditMatTableExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 38);
} }
function PopoverEditMatTableExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 39);
} }
function PopoverEditMatTableExample_th_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Fantasy Counterparts ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var fantasyElement_r121 = ctx.$implicit;
    i0.ɵɵproperty("value", fantasyElement_r121);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fantasyElement_r121, " ");
} }
function PopoverEditMatTableExample_td_22_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r124 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 14, 15);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r124); var _r119 = i0.ɵɵreference(2); var element_r115 = i0.ɵɵnextContext().$implicit; var ctx_r122 = i0.ɵɵnextContext(); return ctx_r122.onSubmitFantasyCounterparts(element_r115, _r119); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r124); var element_r115 = i0.ɵɵnextContext().$implicit; var ctx_r125 = i0.ɵɵnextContext(); return ctx_r125.fantasyValues.for(element_r115).value = $event; });
    i0.ɵɵelementStart(3, "div", 33);
    i0.ɵɵelementStart(4, "mat-selection-list", 41);
    i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 26);
    i0.ɵɵelementStart(7, "button", 27);
    i0.ɵɵtext(8, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 28);
    i0.ɵɵtext(10, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r115 = i0.ɵɵnextContext().$implicit;
    var ctx_r117 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r117.fantasyValues.for(element_r115).value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", element_r115.fantasyCounterparts);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r117.FANTASY_ELEMENTS);
} }
function PopoverEditMatTableExample_td_22_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 30);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_drop_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_22_ng_template_2_Template, 11, 3, "ng-template", null, 40, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_22_span_4_Template, 4, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r115 = ctx.$implicit;
    var _r116 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r116);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r115.fantasyCounterparts.join(", "), " ");
} }
var ELEMENT_DATA = [
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
        this.dataSource = new ExampleDataSource();
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
    PopoverEditMatTableExample.ɵfac = function PopoverEditMatTableExample_Factory(t) { return new (t || PopoverEditMatTableExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
    PopoverEditMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditMatTableExample, selectors: [["popover-edit-mat-table-example"]], decls: 23, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "weight"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "fantasyCounterpart"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "matRowHoverContent"], ["mat-icon-button", "", 3, "click"], ["mat-cell", "", 3, "matPopoverEdit"], ["nameEdit", ""], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], ["typeEdit", ""], ["matEditLens", "", "matEditClose", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["mat-edit-fill", ""], ["name", "type", "aria-label", "Element type", 3, "multiple", "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""], ["fantasyCounterpartEdit", ""], ["name", "fantasyCounterparts", "aria-label", "Fantasy Element Counterparts", 3, "ngModel"], ["checkboxPosition", "before", 3, "value", 4, "ngFor", "ngForOf"], ["checkboxPosition", "before", 3, "value"]], template: function PopoverEditMatTableExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtemplate(11, PopoverEditMatTableExample_td_11_Template, 5, 2, "td", 6);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(12, 8);
            i0.ɵɵtemplate(13, PopoverEditMatTableExample_th_13_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(14, PopoverEditMatTableExample_td_14_Template, 3, 3, "td", 9);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(15, 10);
            i0.ɵɵtemplate(16, PopoverEditMatTableExample_th_16_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(17, PopoverEditMatTableExample_td_17_Template, 2, 1, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(18, PopoverEditMatTableExample_tr_18_Template, 1, 0, "tr", 11);
            i0.ɵɵtemplate(19, PopoverEditMatTableExample_tr_19_Template, 1, 0, "tr", 12);
            i0.ɵɵelementContainerStart(20, 13);
            i0.ɵɵtemplate(21, PopoverEditMatTableExample_th_21_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(22, PopoverEditMatTableExample_td_22_Template, 5, 2, "td", 6);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [i2.MatTable, i3.CdkEditable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i4.NgForm, i5.MatEditLens, i6.MatFormField, i7.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.NgModel, i2.MatHeaderCell, i2.MatCell, i5.MatRowHoverContent, i8.MatButton, i9.MatIcon, i5.MatPopoverEdit, i5.MatEditRevert, i5.MatEditClose, i5.MatEditOpen, i10.MatSelectionList, i11.NgForOf, i10.MatListOption, i2.MatHeaderRow, i2.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 16%;\n}"] });
    return PopoverEditMatTableExample;
}());
export { PopoverEditMatTableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditMatTableExample, [{
        type: Component,
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
var ExampleDataSource = /** @class */ (function (_super) {
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
export { ExampleDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFFMUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ0M3QywyQkFDRTtJQUFBLG9DQUlFO0lBRkUscVNBQXVDLG1RQUNKLHFDQUF5QixtQkFEckI7SUFFekMsK0JBQ0U7SUFBQSxzQ0FDRTtJQUFBLDRCQUNGO0lBQUEsaUJBQWlCO0lBQ25CLGlCQUFNO0lBQ1IsaUJBQU87SUFDVCxpQkFBTTs7OztJQVBBLGVBQW1FO0lBQW5FLDJGQUFtRTtJQUduQyxlQUEwQjtJQUExQiw0Q0FBMEI7OztJQVNoRSw4QkFBdUM7SUFBQSxxQkFBSTtJQUFBLGlCQUFLOzs7O0lBSzlDLDRCQUNFO0lBQUEsa0NBQ0U7SUFEc0IsbVFBQTBCO0lBQ2hELGdDQUFVO0lBQUEsd0JBQVE7SUFBQSxpQkFBVztJQUMvQixpQkFBUztJQUNULGtDQUNFO0lBRHNCLGtRQUF5QjtJQUMvQyxnQ0FBVTtJQUFBLDBCQUFVO0lBQUEsaUJBQVc7SUFDakMsaUJBQVM7SUFDWCxpQkFBTzs7O0lBWFQsOEJBQ0U7SUFBQSxZQUVBO0lBQ0EsbUZBQ0U7SUFPSixpQkFBSzs7O0lBWEgsZUFFQTtJQUZBLHFEQUVBOzs7SUFjRiw4QkFBdUM7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7O0lBTzdDLDJCQUNFO0lBQUEsb0NBSUU7SUFGRSx1VEFBcUMsdVJBQ0YsbUNBQXVCLG1CQURyQjtJQUV2Qyw4QkFBbUI7SUFBQSxvQkFBSTtJQUFBLGlCQUFLO0lBQzVCLCtCQUNFO0lBQUEsc0NBQ0U7SUFBQSw0QkFDRjtJQUFBLGlCQUFpQjtJQUNuQixpQkFBTTtJQUNOLCtCQUNFO0lBQUEsa0NBQWlDO0lBQUEsd0JBQU87SUFBQSxpQkFBUztJQUNqRCxtQ0FBaUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFTO0lBQ2hELG1DQUFnQztJQUFBLHNCQUFLO0lBQUEsaUJBQVM7SUFDaEQsaUJBQU07SUFDUixpQkFBTztJQUNULGlCQUFNOzs7O0lBYkEsZUFBaUU7SUFBakUseUZBQWlFO0lBSS9DLGVBQXdCO0lBQXhCLDBDQUF3Qjs7O0lBWWxELDRCQUNFO0lBQUEsa0NBQW9DO0lBQUEsZ0NBQVU7SUFBQSxvQkFBSTtJQUFBLGlCQUFXO0lBQUEsaUJBQVM7SUFDeEUsaUJBQU87OztJQTVCVCw4QkFFRTtJQUFBLFlBRUE7SUFDQSxtSUFDRTtJQW9CRixtRkFDRTtJQUVKLGlCQUFLOzs7O0lBNUJELHFDQUEyQjtJQUM3QixlQUVBO0lBRkEsaURBRUE7OztJQThCRiw4QkFBdUM7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFtQnJDLDJDQUVFO0lBQUEsWUFDRjtJQUFBLGlCQUFrQjs7O0lBRmQsaUNBQWM7SUFDaEIsZUFDRjtJQURFLDBDQUNGOzs7OztJQWZSLDJCQUNFO0lBQUEsb0NBS0U7SUFGRSw2VEFBcUMsMFJBQ0Ysb0NBQXVCLG1CQURyQjtJQUV2QywrQkFDRTtJQUFBLDhDQUtFO0lBRkUseU5BQW1CLHFCQUFpQixJQUFDO0lBRXZDLHdIQUVFO0lBRUosaUJBQXFCO0lBQ3ZCLGlCQUFNO0lBQ1IsaUJBQU87SUFDVCxpQkFBTTs7OztJQWRBLGVBQWlFO0lBQWpFLHlGQUFpRTtJQUU3QyxlQUFrQjtJQUFsQixnQ0FBa0IseURBQUE7SUFLbkIsZUFBMEI7SUFBMUIsdUNBQTBCOzs7SUFVckQsNEJBQ0U7SUFBQSxrQ0FBb0M7SUFBQSxnQ0FBVTtJQUFBLCtCQUFlO0lBQUEsaUJBQVc7SUFBQSxpQkFBUztJQUNuRixpQkFBTzs7O0lBOUJULDhCQUVFO0lBQUEsWUFFQTtJQUNBLG1JQUNFO0lBc0JGLG9GQUNFO0lBRUosaUJBQUs7Ozs7SUE5QkQscUNBQTJCO0lBQzdCLGVBRUE7SUFGQSxpREFFQTs7O0lBZ0NGLDhCQUF1QztJQUFBLHdCQUFPO0lBQUEsaUJBQUs7OztJQUtqRCw0QkFDRTtJQUFBLGtDQUFvQztJQUFBLGdDQUFVO0lBQUEsb0JBQUk7SUFBQSxpQkFBVztJQUFBLGlCQUFTO0lBQ3hFLGlCQUFPOzs7SUFOVCw4QkFFRTtJQUFBLFlBRUE7SUFBQSxvRkFDRTtJQUVKLGlCQUFLOzs7OztJQU5ELHFDQUE2Qix1Q0FBQTtJQUMvQixlQUVBO0lBRkEsb0RBRUE7OztJQVFGLDhCQUF1QztJQUFBLHdCQUFPO0lBQUEsaUJBQUs7OztJQUNuRCw4QkFBd0M7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBeEIsZUFBbUI7SUFBbkIsb0RBQW1COzs7SUFHN0QseUJBQTREOzs7SUFDNUQseUJBQWtFOzs7SUFJaEUsOEJBQXVDO0lBQUEsc0NBQXFCO0lBQUEsaUJBQUs7OztJQWdCckQsMkNBR0U7SUFBQSxZQUNGO0lBQUEsaUJBQWtCOzs7SUFIZCwyQ0FBd0I7SUFFMUIsZUFDRjtJQURFLG9EQUNGOzs7O0lBYlIsMkJBQ0U7SUFBQSxvQ0FJRTtJQUZFLDhVQUFvRCwyUkFDakIsd0NBQTBCLG1CQURUO0lBRXRELCtCQUNFO0lBQUEsOENBR0U7SUFBQSx3SEFHRTtJQUVKLGlCQUFxQjtJQUN2QixpQkFBTTtJQUNOLCtCQUNFO0lBQUEsa0NBQWlDO0lBQUEsdUJBQU87SUFBQSxpQkFBUztJQUNqRCxrQ0FBaUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFTO0lBQ2xELGlCQUFNO0lBQ1IsaUJBQU87SUFDVCxpQkFBTTs7OztJQWpCQSxlQUFvRTtJQUFwRSw4RkFBb0U7SUFFaEQsZUFBdUM7SUFBdkMsMERBQXVDO0lBR3hDLGVBQStDO0lBQS9DLG1EQUErQzs7O0lBZTFFLDRCQUNFO0lBQUEsa0NBQW9DO0lBQUEsZ0NBQVU7SUFBQSwrQkFBZTtJQUFBLGlCQUFXO0lBQUEsaUJBQVM7SUFDbkYsaUJBQU87OztJQWhDVCw4QkFFRTtJQUFBLFlBRUE7SUFDQSxvSUFDRTtJQXdCRixvRkFDRTtJQUVKLGlCQUFLOzs7O0lBaENELHNDQUF5QztJQUMzQyxlQUVBO0lBRkEsNEVBRUE7O0FEdkhOLElBQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDekUsbUJBQW1CLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFDO0lBQ25ELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSTtRQUN4RSxtQkFBbUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBQztJQUMzQyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUk7UUFDckUsbUJBQW1CLEVBQUUsRUFBRSxFQUFDO0lBQzVCLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSTtRQUN4RSxtQkFBbUIsRUFBRSxFQUFFLEVBQUM7SUFDNUIsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHO1FBQ3ZFLG1CQUFtQixFQUFFLEVBQUUsRUFBQztJQUM1QixFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDeEUsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUM7SUFDM0MsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHO1FBQzFFLG1CQUFtQixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUM7SUFDbEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHO1FBQ3hFLG1CQUFtQixFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBQztJQUNuRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDMUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFDO0lBQzVCLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSTtRQUN4RSxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFDO0lBQ25DLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSTtRQUN2RSxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBQztJQUM1QyxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUk7UUFDekUsbUJBQW1CLEVBQUUsRUFBRSxFQUFDO0lBQzVCLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSTtRQUN6RSxtQkFBbUIsRUFBRSxFQUFFLEVBQUM7SUFDNUIsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQzVFLG1CQUFtQixFQUFFLEVBQUUsRUFBQztJQUM1QixFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDN0UsbUJBQW1CLEVBQUUsRUFBRSxFQUFDO0lBQzVCLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRztRQUN4RSxtQkFBbUIsRUFBRSxFQUFFLEVBQUM7SUFDNUIsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQzNFLG1CQUFtQixFQUFFLEVBQUUsRUFBQztJQUM1QixFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUk7UUFDeEUsbUJBQW1CLEVBQUUsRUFBRSxFQUFDO0lBQzVCLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRztRQUN6RSxtQkFBbUIsRUFBRSxFQUFFLEVBQUM7SUFDNUIsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQ3ZFLG1CQUFtQixFQUFFLEVBQUUsRUFBQztDQUM3QixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQTJCLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN6RSxJQUFNLGdCQUFnQixHQUNsQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFeEQ7O0dBRUc7QUFDSDtJQWtCRSxvQ0FBNkIsU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQVpuRCxxQkFBZ0IsR0FDWixDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUMzRSxlQUFVLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBRTVCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUVwQyxlQUFVLEdBQUcsSUFBSSxrQkFBa0IsRUFBd0IsQ0FBQztRQUM1RCxpQkFBWSxHQUFHLElBQUksa0JBQWtCLEVBQXdCLENBQUM7UUFDOUQsZUFBVSxHQUFHLElBQUksa0JBQWtCLEVBQXdCLENBQUM7UUFDNUQsa0JBQWEsR0FBRyxJQUFJLGtCQUFrQixFQUF3QixDQUFDO0lBRWxCLENBQUM7SUFFdkQsaURBQVksR0FBWixVQUFhLE9BQXdCLEVBQUUsQ0FBUztRQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV6QixPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxtREFBYyxHQUFkLFVBQWUsT0FBd0IsRUFBRSxDQUFTO1FBQ2hELElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXpCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVELGlEQUFZLEdBQVosVUFBYSxPQUF3QixFQUFFLENBQVM7UUFDOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFekIsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0VBQTJCLEdBQTNCLFVBQTRCLE9BQXdCLEVBQUUsQ0FBUztRQUM3RCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV6QixPQUFPLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztJQUM1RCxDQUFDO0lBRUQsNENBQU8sR0FBUCxVQUFRLE9BQXdCO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFjLE9BQU8sQ0FBQyxJQUFJLE1BQUcsRUFBRSxTQUFTLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsMkNBQU0sR0FBTixVQUFPLE9BQXdCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDRDQUEwQyxPQUFPLENBQUMsUUFBUSxNQUFHLEVBQUUsU0FBUyxFQUN4RixFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7d0dBOUNVLDBCQUEwQjttRUFBMUIsMEJBQTBCO1lDM0V2QyxnQ0FDRTtZQUlBLDRIQUNFO1lBZUYsZ0NBQ0U7WUFBQSx5RUFBdUM7WUFDdkMseUVBQ0U7WUFZSiwwQkFBZTtZQUdmLGdDQUNFO1lBQUEseUVBQXVDO1lBQ3ZDLHlFQUVFO1lBNEJKLDBCQUFlO1lBR2YsZ0NBQ0U7WUFBQSwyRUFBdUM7WUFDdkMsMkVBRUU7WUE4QkosMEJBQWU7WUFHZixpQ0FDRTtZQUFBLDJFQUF1QztZQUN2QywyRUFFRTtZQU1KLDBCQUFlO1lBR2Ysa0NBQ0U7WUFBQSwyRUFBdUM7WUFDdkMsMkVBQXdDO1lBQzFDLDBCQUFlO1lBRWYsNEVBQXVEO1lBQ3ZELDRFQUE2RDtZQUc3RCxrQ0FDRTtZQUFBLDJFQUF1QztZQUN2QywyRUFFRTtZQWdDSiwwQkFBZTtZQUNqQixpQkFBUTs7WUExS3dDLDJDQUF5QjtZQWlJcEQsZ0JBQW1DO1lBQW5DLHNEQUFtQztZQUMxQyxlQUFnRDtZQUFoRCx1REFBZ0Q7O3FDRGxJOUQ7Q0EwSEMsQUFwREQsSUFvREM7U0EvQ1ksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2dCQUNqRCxXQUFXLEVBQUUscUNBQXFDO2FBQ25EOztBQWtERDs7Ozs7O0dBTUc7QUFDSDtJQUF1QyxxQ0FBMkI7SUFBbEU7UUFBQSxxRUFVQztRQVRDLG9EQUFvRDtRQUNwRCxVQUFJLEdBQUcsSUFBSSxlQUFlLENBQW9CLFlBQVksQ0FBQyxDQUFDOztJQVE5RCxDQUFDO0lBTkMsaUdBQWlHO0lBQ2pHLG1DQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELHNDQUFVLEdBQVYsY0FBYyxDQUFDO0lBQ2pCLHdCQUFDO0FBQUQsQ0FBQyxBQVZELENBQXVDLFVBQVUsR0FVaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0Zvcm1WYWx1ZUNvbnRhaW5lcn0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIEVsZW1lbnRUeXBlID0gJ01ldGFsJyB8ICdTZW1pbWV0YWwnIHwgJ05vbm1ldGFsJztcblxuZXhwb3J0IHR5cGUgRmFudGFzeUVsZW1lbnQgPSAnRWFydGgnIHwgJ1dhdGVyJyB8ICdXaW5kJyB8ICdGaXJlJyB8ICdMaWdodCcgfCAnRGFyayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBFbGVtZW50VHlwZTtcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBmYW50YXN5Q291bnRlcnBhcnRzOiBGYW50YXN5RWxlbWVudFtdO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRmlyZScsICdXaW5kJywgJ0xpZ2h0J119LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydXaW5kJywgJ0xpZ2h0J119LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB0eXBlOiAnTWV0YWwnLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHR5cGU6ICdTZW1pbWV0YWwnLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQicsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQycsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0VhcnRoJywgJ0RhcmsnXX0sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnV2luZCddfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRmlyZScsICdXYXRlcicsICdXaW5kJ119LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRicsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0xpZ2h0J119LFxuICB7cG9zaXRpb246IDExLCBuYW1lOiAnU29kaXVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiAyMi45ODk3LCBzeW1ib2w6ICdOYScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0VhcnRoJywgJ1dhdGVyJ119LFxuICB7cG9zaXRpb246IDEyLCBuYW1lOiAnTWFnbmVzaXVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiAyNC4zMDUsIHN5bWJvbDogJ01nJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAxMywgbmFtZTogJ0FsdW1pbnVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiAyNi45ODE1LCBzeW1ib2w6ICdBbCcsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTQsIG5hbWU6ICdTaWxpY29uJywgdHlwZTogJ1NlbWltZXRhbCcsIHdlaWdodDogMjguMDg1NSwgc3ltYm9sOiAnU2knLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDE1LCBuYW1lOiAnUGhvc3Bob3J1cycsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMzAuOTczOCwgc3ltYm9sOiAnUCcsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTYsIG5hbWU6ICdTdWxmdXInLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDMyLjA2NSwgc3ltYm9sOiAnUycsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTcsIG5hbWU6ICdDaGxvcmluZScsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMzUuNDUzLCBzeW1ib2w6ICdDbCcsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTgsIG5hbWU6ICdBcmdvbicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMzkuOTQ4LCBzeW1ib2w6ICdBcicsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTksIG5hbWU6ICdQb3Rhc3NpdW0nLCB0eXBlOiAnTWV0YWwnLCB3ZWlnaHQ6IDM5LjA5ODMsIHN5bWJvbDogJ0snLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDIwLCBuYW1lOiAnQ2FsY2l1bScsIHR5cGU6ICdNZXRhbCcsIHdlaWdodDogNDAuMDc4LCBzeW1ib2w6ICdDYScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG5dO1xuXG5jb25zdCBUWVBFUzogcmVhZG9ubHkgRWxlbWVudFR5cGVbXSA9IFsnTWV0YWwnLCAnU2VtaW1ldGFsJywgJ05vbm1ldGFsJ107XG5jb25zdCBGQU5UQVNZX0VMRU1FTlRTOiByZWFkb25seSBGYW50YXN5RWxlbWVudFtdID1cbiAgICBbJ0VhcnRoJywgJ1dhdGVyJywgJ1dpbmQnLCAnRmlyZScsICdMaWdodCcsICdEYXJrJ107XG5cbi8qKlxuICogQHRpdGxlIE1hdGVyaWFsIFBvcG92ZXIgRWRpdCBvbiBhIE1hdGVyaWFsIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJFZGl0TWF0VGFibGVFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPVxuICAgICAgWydwb3NpdGlvbicsICduYW1lJywgJ3R5cGUnLCAnd2VpZ2h0JywgJ3N5bWJvbCcsICdmYW50YXN5Q291bnRlcnBhcnQnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBFeGFtcGxlRGF0YVNvdXJjZSgpO1xuXG4gIHJlYWRvbmx5IFRZUEVTID0gVFlQRVM7XG4gIHJlYWRvbmx5IEZBTlRBU1lfRUxFTUVOVFMgPSBGQU5UQVNZX0VMRU1FTlRTO1xuXG4gIHJlYWRvbmx5IG5hbWVWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSB3ZWlnaHRWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSB0eXBlVmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgZmFudGFzeVZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9uU3VibWl0TmFtZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQubmFtZSA9IGYudmFsdWUubmFtZTtcbiAgfVxuXG4gIG9uU3VibWl0V2VpZ2h0KGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC53ZWlnaHQgPSBmLnZhbHVlLndlaWdodDtcbiAgfVxuXG4gIG9uU3VibWl0VHlwZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQudHlwZSA9IGYudmFsdWUudHlwZVswXTtcbiAgfVxuXG4gIG9uU3VibWl0RmFudGFzeUNvdW50ZXJwYXJ0cyhlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQuZmFudGFzeUNvdW50ZXJwYXJ0cyA9IGYudmFsdWUuZmFudGFzeUNvdW50ZXJwYXJ0cztcbiAgfVxuXG4gIGdvb2RKb2IoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbihgV2F5IHRvIGdvLCAke2VsZW1lbnQubmFtZX0hYCwgdW5kZWZpbmVkLCB7ZHVyYXRpb246IDIwMDB9KTtcbiAgfVxuXG4gIGJhZEpvYihlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKGBZb3UgaGF2ZSBmYWlsZWQgbWUgZm9yIHRoZSBsYXN0IHRpbWUsICMke2VsZW1lbnQucG9zaXRpb259LmAsIHVuZGVmaW5lZCxcbiAgICAgICAge2R1cmF0aW9uOiAyMDAwfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXG4gKiBjYW4gcmV0cmlldmUgaXRzIGRhdGEgaW4gYW55IHdheS4gSW4gdGhpcyBjYXNlLCB0aGUgZGF0YSBzb3VyY2UgaXMgcHJvdmlkZWQgYSByZWZlcmVuY2VcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxuICogc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4ge1xuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xuXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxufVxuIiwiPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiIG1hdC10YWJsZSBlZGl0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICN3ZWlnaHRFZGl0IGxldC1lbGVtZW50PlxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXRXZWlnaHQoZWxlbWVudCwgZilcIlxuICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cIndlaWdodFZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cbiAgICAgICAgPGRpdiBtYXQtZWRpdC1jb250ZW50PlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgW25nTW9kZWxdPVwiZWxlbWVudC53ZWlnaHRcIiBuYW1lPVwid2VpZ2h0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOby4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxuICAgICAge3tlbGVtZW50LnBvc2l0aW9ufX1cblxuICAgICAgPCEtLSBSb3cgaG92ZXIgY29udGVudCBpbiBhIG5vbi1lZGl0IGNlbGwuIC0tPlxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImdvb2RKb2IoZWxlbWVudClcIj5cbiAgICAgICAgICA8bWF0LWljb24+dGh1bWJfdXA8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImJhZEpvYihlbGVtZW50KVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj50aHVtYl9kb3duPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBOYW1lIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCI+XG4gICAgICB7e2VsZW1lbnQubmFtZX19XG4gICAgICBcbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICNuYW1lRWRpdD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgIG1hdEVkaXRMZW5zXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdE5hbWUoZWxlbWVudCwgZilcIlxuICAgICAgICAgICAgICBbKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlKV09XCJuYW1lVmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICAgICAgPGgyIG1hdC1lZGl0LXRpdGxlPk5hbWU8L2gyPlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1jb250ZW50PlxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFtuZ01vZGVsXT1cImVsZW1lbnQubmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdENsb3NlPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gVHlwZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwidHlwZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFR5cGUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJ0eXBlRWRpdFwiPlxuICAgICAge3tlbGVtZW50LnR5cGV9fVxuXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjdHlwZUVkaXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgICAgICBtYXRFZGl0Q2xvc2VcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0VHlwZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cInR5cGVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWZpbGw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0aW9uLWxpc3QgW211bHRpcGxlXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cIltlbGVtZW50LnR5cGVdXCJcbiAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwiZi5uZ1N1Ym1pdC5lbWl0KClcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVsZW1lbnQgdHlwZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1vcHRpb24gKm5nRm9yPVwibGV0IHR5cGUgb2YgVFlQRVNcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidHlwZVwiPlxuICAgICAgICAgICAgICAgICAge3t0eXBlfX1cbiAgICAgICAgICAgICAgICA8L21hdC1saXN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmFycm93X2Ryb3BfZG93bjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIndlaWdodEVkaXRcIiBbbWF0UG9wb3ZlckVkaXRDb250ZXh0XT1cImVsZW1lbnRcIj5cbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxuICAgICAgXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gIDwhLS0gRmFudGFzeSBDb3VudGVycGFydHMgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImZhbnRhc3lDb3VudGVycGFydFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEZhbnRhc3kgQ291bnRlcnBhcnRzIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwiZmFudGFzeUNvdW50ZXJwYXJ0RWRpdFwiPlxuICAgICAge3tlbGVtZW50LmZhbnRhc3lDb3VudGVycGFydHMuam9pbignLCAnKX19XG5cbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICNmYW50YXN5Q291bnRlcnBhcnRFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0RmFudGFzeUNvdW50ZXJwYXJ0cyhlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cImZhbnRhc3lWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWZpbGw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0aW9uLWxpc3QgW25nTW9kZWxdPVwiZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYW50YXN5Q291bnRlcnBhcnRzXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGYW50YXN5IEVsZW1lbnQgQ291bnRlcnBhcnRzXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1saXN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZmFudGFzeUVsZW1lbnQgb2YgRkFOVEFTWV9FTEVNRU5UU1wiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJmYW50YXN5RWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94UG9zaXRpb249XCJiZWZvcmVcIj5cbiAgICAgICAgICAgICAgICAgIHt7ZmFudGFzeUVsZW1lbnR9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWxpc3Qtb3B0aW9uPlxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Rpb24tbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1hY3Rpb25zPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmFycm93X2Ryb3BfZG93bjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG48L3RhYmxlPlxuIl19