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
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@angular/common";
import * as i12 from "@angular/material/list";
function PopoverEditMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 15, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r77); var element_r74 = ctx.$implicit; var _r75 = i0.ɵɵreference(2); var ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.onSubmitWeight(element_r74, _r75); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r77); var element_r74 = ctx.$implicit; var ctx_r78 = i0.ɵɵnextContext(); return ctx_r78.weightValues.for(element_r74).value = $event; });
    i0.ɵɵelementStart(3, "div", 17);
    i0.ɵɵelementStart(4, "mat-form-field");
    i0.ɵɵelement(5, "input", 18);
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
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 22);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r83); var element_r79 = i0.ɵɵnextContext().$implicit; var ctx_r81 = i0.ɵɵnextContext(); return ctx_r81.goodJob(element_r79); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 22);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r83); var element_r79 = i0.ɵɵnextContext().$implicit; var ctx_r84 = i0.ɵɵnextContext(); return ctx_r84.badJob(element_r79); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "thumb_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 20);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_5_span_2_Template, 7, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r79 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r79.position, " ");
} }
function PopoverEditMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    var _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementStart(2, "mat-checkbox", 23);
    i0.ɵɵlistener("ngModelChange", function PopoverEditMatTableExample_th_7_Template_mat_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r87); var ctx_r86 = i0.ɵɵnextContext(); return ctx_r86.nameEditEnabled = $event; });
    i0.ɵɵtext(3, "Edit enabled");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r62 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r62.nameEditEnabled);
} }
function PopoverEditMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r95 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 15, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r95); var _r92 = i0.ɵɵreference(2); var element_r88 = i0.ɵɵnextContext().$implicit; var ctx_r93 = i0.ɵɵnextContext(); return ctx_r93.onSubmitName(element_r88, _r92); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r95); var element_r88 = i0.ɵɵnextContext().$implicit; var ctx_r96 = i0.ɵɵnextContext(); return ctx_r96.nameValues.for(element_r88).value = $event; });
    i0.ɵɵelementStart(3, "h2", 27);
    i0.ɵɵtext(4, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵelementStart(6, "mat-form-field");
    i0.ɵɵelement(7, "input", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 29);
    i0.ɵɵelementStart(9, "button", 30);
    i0.ɵɵtext(10, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 31);
    i0.ɵɵtext(12, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 32);
    i0.ɵɵtext(14, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r88 = i0.ɵɵnextContext().$implicit;
    var ctx_r90 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r90.nameValues.for(element_r88).value);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", element_r88.name);
} }
function PopoverEditMatTableExample_td_8_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 33);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PopoverEditMatTableExample_td_8_ng_container_4_span_1_Template, 4, 0, "span", 21);
    i0.ɵɵelementContainerEnd();
} }
function PopoverEditMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_8_ng_template_2_Template, 15, 2, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_8_ng_container_4_Template, 2, 0, "ng-container", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r88 = ctx.$implicit;
    var _r89 = i0.ɵɵreference(3);
    var ctx_r63 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matPopoverEdit", _r89)("matPopoverEditDisabled", !ctx_r63.nameEditEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r88.name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r63.nameEditEnabled);
} }
function PopoverEditMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Type ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var type_r106 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r106);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", type_r106, " ");
} }
var _c0 = function (a0) { return [a0]; };
function PopoverEditMatTableExample_td_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 36, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r109); var _r104 = i0.ɵɵreference(2); var element_r100 = i0.ɵɵnextContext().$implicit; var ctx_r107 = i0.ɵɵnextContext(); return ctx_r107.onSubmitType(element_r100, _r104); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r109); var element_r100 = i0.ɵɵnextContext().$implicit; var ctx_r110 = i0.ɵɵnextContext(); return ctx_r110.typeValues.for(element_r100).value = $event; });
    i0.ɵɵelementStart(3, "div", 37);
    i0.ɵɵelementStart(4, "mat-selection-list", 38);
    i0.ɵɵlistener("selectionChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_mat_selection_list_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r109); var _r104 = i0.ɵɵreference(2); return _r104.ngSubmit.emit(); });
    i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r100 = i0.ɵɵnextContext().$implicit;
    var ctx_r102 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r102.typeValues.for(element_r100).value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("multiple", false)("ngModel", i0.ɵɵpureFunction1(4, _c0, element_r100.type));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r102.TYPES);
} }
function PopoverEditMatTableExample_td_11_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 33);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_drop_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_11_ng_template_2_Template, 6, 6, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_11_span_4_Template, 4, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r100 = ctx.$implicit;
    var _r101 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r101);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r100.type, " ");
} }
function PopoverEditMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 33);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 41);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_14_span_2_Template, 4, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r114 = ctx.$implicit;
    i0.ɵɵnextContext();
    var _r58 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r58)("matPopoverEditContext", element_r114);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r114.weight, " ");
} }
function PopoverEditMatTableExample_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r116 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r116.symbol, " ");
} }
function PopoverEditMatTableExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 42);
} }
function PopoverEditMatTableExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 43);
} }
function PopoverEditMatTableExample_th_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Fantasy Counterparts ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var fantasyElement_r124 = ctx.$implicit;
    i0.ɵɵproperty("value", fantasyElement_r124);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fantasyElement_r124, " ");
} }
function PopoverEditMatTableExample_td_22_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 15, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r127); var _r122 = i0.ɵɵreference(2); var element_r118 = i0.ɵɵnextContext().$implicit; var ctx_r125 = i0.ɵɵnextContext(); return ctx_r125.onSubmitFantasyCounterparts(element_r118, _r122); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r127); var element_r118 = i0.ɵɵnextContext().$implicit; var ctx_r128 = i0.ɵɵnextContext(); return ctx_r128.fantasyValues.for(element_r118).value = $event; });
    i0.ɵɵelementStart(3, "div", 37);
    i0.ɵɵelementStart(4, "mat-selection-list", 45);
    i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 29);
    i0.ɵɵelementStart(7, "button", 30);
    i0.ɵɵtext(8, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 31);
    i0.ɵɵtext(10, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r118 = i0.ɵɵnextContext().$implicit;
    var ctx_r120 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r120.fantasyValues.for(element_r118).value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", element_r118.fantasyCounterparts);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r120.FANTASY_ELEMENTS);
} }
function PopoverEditMatTableExample_td_22_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 33);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_drop_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_22_ng_template_2_Template, 11, 3, "ng-template", null, 44, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_22_span_4_Template, 4, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r118 = ctx.$implicit;
    var _r119 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r119);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r118.fantasyCounterparts.join(", "), " ");
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
        this.nameEditEnabled = true;
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
    PopoverEditMatTableExample.decorators = [
        { type: Component, args: [{
                    selector: 'popover-edit-mat-table-example',
                    styleUrls: ['popover-edit-mat-table-example.css'],
                    templateUrl: 'popover-edit-mat-table-example.html',
                },] },
    ];
    /** @nocollapse */
    PopoverEditMatTableExample.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    PopoverEditMatTableExample.ɵfac = function PopoverEditMatTableExample_Factory(t) { return new (t || PopoverEditMatTableExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
    PopoverEditMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditMatTableExample, selectors: [["popover-edit-mat-table-example"]], decls: 23, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditDisabled", 4, "matCellDef"], ["matColumnDef", "type"], ["mat-cell", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "fantasyCounterpart"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "matRowHoverContent"], ["mat-icon-button", "", 3, "click"], [3, "ngModel", "ngModelChange"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditDisabled"], ["nameEdit", ""], [4, "ngIf"], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], ["mat-cell", "", 3, "matPopoverEdit"], ["typeEdit", ""], ["matEditLens", "", "matEditClose", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["mat-edit-fill", ""], ["name", "type", "aria-label", "Element type", 3, "multiple", "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""], ["fantasyCounterpartEdit", ""], ["name", "fantasyCounterparts", "aria-label", "Fantasy Element Counterparts", 3, "ngModel"], ["checkboxPosition", "before", 3, "value", 4, "ngFor", "ngForOf"], ["checkboxPosition", "before", 3, "value"]], template: function PopoverEditMatTableExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, PopoverEditMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerStart(3, 2);
            i0.ɵɵtemplate(4, PopoverEditMatTableExample_th_4_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_5_Template, 3, 1, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(6, 5);
            i0.ɵɵtemplate(7, PopoverEditMatTableExample_th_7_Template, 4, 1, "th", 3);
            i0.ɵɵtemplate(8, PopoverEditMatTableExample_td_8_Template, 5, 4, "td", 6);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(9, 7);
            i0.ɵɵtemplate(10, PopoverEditMatTableExample_th_10_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(11, PopoverEditMatTableExample_td_11_Template, 5, 2, "td", 8);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(12, 9);
            i0.ɵɵtemplate(13, PopoverEditMatTableExample_th_13_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(14, PopoverEditMatTableExample_td_14_Template, 3, 3, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(15, 11);
            i0.ɵɵtemplate(16, PopoverEditMatTableExample_th_16_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(17, PopoverEditMatTableExample_td_17_Template, 2, 1, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(18, PopoverEditMatTableExample_tr_18_Template, 1, 0, "tr", 12);
            i0.ɵɵtemplate(19, PopoverEditMatTableExample_tr_19_Template, 1, 0, "tr", 13);
            i0.ɵɵelementContainerStart(20, 14);
            i0.ɵɵtemplate(21, PopoverEditMatTableExample_th_21_Template, 2, 0, "th", 3);
            i0.ɵɵtemplate(22, PopoverEditMatTableExample_td_22_Template, 5, 2, "td", 8);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [i2.MatTable, i3.CdkEditable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i4.NgForm, i5.MatEditLens, i6.MatFormField, i7.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.NgModel, i2.MatHeaderCell, i2.MatCell, i5.MatRowHoverContent, i8.MatButton, i9.MatIcon, i10.MatCheckbox, i5.MatPopoverEdit, i11.NgIf, i5.MatEditRevert, i5.MatEditClose, i5.MatEditOpen, i12.MatSelectionList, i11.NgForOf, i12.MatListOption, i2.MatHeaderRow, i2.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 16%;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFFMUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNDN0MsMkJBQ0U7SUFBQSxvQ0FJRTtJQUZFLHFTQUF1QyxtUUFDSixxQ0FBeUIsbUJBRHJCO0lBRXpDLCtCQUNFO0lBQUEsc0NBQ0U7SUFBQSw0QkFDRjtJQUFBLGlCQUFpQjtJQUNuQixpQkFBTTtJQUNSLGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFQQSxlQUFtRTtJQUFuRSwyRkFBbUU7SUFHbkMsZUFBMEI7SUFBMUIsNENBQTBCOzs7SUFTaEUsOEJBQXVDO0lBQUEscUJBQUk7SUFBQSxpQkFBSzs7OztJQUs5Qyw0QkFDRTtJQUFBLGtDQUNF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UUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRztRQUMxRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUM7SUFDNUIsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQ3hFLG1CQUFtQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUM7SUFDbkMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQ3ZFLG1CQUFtQixFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFDO0lBQzVDLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSTtRQUN6RSxtQkFBbUIsRUFBRSxFQUFFLEVBQUM7SUFDNUIsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQ3pFLG1CQUFtQixFQUFFLEVBQUUsRUFBQztJQUM1QixFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUk7UUFDNUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFDO0lBQzVCLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxF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RCw0RUFBNkQ7WUFHN0Qsa0NBQ0U7WUFBQSwyRUFBdUM7WUFDdkMsMkVBRUU7WUFnQ0osMEJBQWU7WUFDakIsaUJBQVE7O1lBakx3QywyQ0FBeUI7WUF3SXBELGdCQUFtQztZQUFuQyxzREFBbUM7WUFDMUMsZUFBZ0Q7WUFBaEQsdURBQWdEOztxQ0R6STlEO0NBNEhDLEFBdERELElBc0RDO1NBakRZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztnQkFDakQsV0FBVyxFQUFFLHFDQUFxQzthQUNuRDs7QUFvREQ7Ozs7OztHQU1HO0FBQ0g7SUFBdUMscUNBQTJCO0lBQWxFO1FBQUEscUVBVUM7UUFUQyxvREFBb0Q7UUFDcEQsVUFBSSxHQUFHLElBQUksZUFBZSxDQUFvQixZQUFZLENBQUMsQ0FBQzs7SUFROUQsQ0FBQztJQU5DLGlHQUFpRztJQUNqRyxtQ0FBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQ0FBVSxHQUFWLGNBQWMsQ0FBQztJQUNqQix3QkFBQztBQUFELENBQUMsQUFWRCxDQUF1QyxVQUFVLEdBVWhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtGb3JtVmFsdWVDb250YWluZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0JztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFNuYWNrQmFyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBFbGVtZW50VHlwZSA9ICdNZXRhbCcgfCAnU2VtaW1ldGFsJyB8ICdOb25tZXRhbCc7XG5cbmV4cG9ydCB0eXBlIEZhbnRhc3lFbGVtZW50ID0gJ0VhcnRoJyB8ICdXYXRlcicgfCAnV2luZCcgfCAnRmlyZScgfCAnTGlnaHQnIHwgJ0RhcmsnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogRWxlbWVudFR5cGU7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbiAgZmFudGFzeUNvdW50ZXJwYXJ0czogRmFudGFzeUVsZW1lbnRbXTtcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCcsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0ZpcmUnLCAnV2luZCcsICdMaWdodCddfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnV2luZCcsICdMaWdodCddfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHR5cGU6ICdNZXRhbCcsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB0eXBlOiAnU2VtaW1ldGFsJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydFYXJ0aCcsICdEYXJrJ119LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTicsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ1dpbmQnXX0sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTycsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0ZpcmUnLCAnV2F0ZXInLCAnV2luZCddfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydMaWdodCddfSxcbiAge3Bvc2l0aW9uOiAxMSwgbmFtZTogJ1NvZGl1bScsIHR5cGU6ICdNZXRhbCcsIHdlaWdodDogMjIuOTg5Nywgc3ltYm9sOiAnTmEnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydFYXJ0aCcsICdXYXRlciddfSxcbiAge3Bvc2l0aW9uOiAxMiwgbmFtZTogJ01hZ25lc2l1bScsIHR5cGU6ICdNZXRhbCcsIHdlaWdodDogMjQuMzA1LCBzeW1ib2w6ICdNZycsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTMsIG5hbWU6ICdBbHVtaW51bScsIHR5cGU6ICdNZXRhbCcsIHdlaWdodDogMjYuOTgxNSwgc3ltYm9sOiAnQWwnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDE0LCBuYW1lOiAnU2lsaWNvbicsIHR5cGU6ICdTZW1pbWV0YWwnLCB3ZWlnaHQ6IDI4LjA4NTUsIHN5bWJvbDogJ1NpJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAxNSwgbmFtZTogJ1Bob3NwaG9ydXMnLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDMwLjk3MzgsIHN5bWJvbDogJ1AnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDE2LCBuYW1lOiAnU3VsZnVyJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAzMi4wNjUsIHN5bWJvbDogJ1MnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDE3LCBuYW1lOiAnQ2hsb3JpbmUnLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDM1LjQ1Mywgc3ltYm9sOiAnQ2wnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDE4LCBuYW1lOiAnQXJnb24nLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDM5Ljk0OCwgc3ltYm9sOiAnQXInLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDE5LCBuYW1lOiAnUG90YXNzaXVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiAzOS4wOTgzLCBzeW1ib2w6ICdLJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAyMCwgbmFtZTogJ0NhbGNpdW0nLCB0eXBlOiAnTWV0YWwnLCB3ZWlnaHQ6IDQwLjA3OCwgc3ltYm9sOiAnQ2EnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuXTtcblxuY29uc3QgVFlQRVM6IHJlYWRvbmx5IEVsZW1lbnRUeXBlW10gPSBbJ01ldGFsJywgJ1NlbWltZXRhbCcsICdOb25tZXRhbCddO1xuY29uc3QgRkFOVEFTWV9FTEVNRU5UUzogcmVhZG9ubHkgRmFudGFzeUVsZW1lbnRbXSA9XG4gICAgWydFYXJ0aCcsICdXYXRlcicsICdXaW5kJywgJ0ZpcmUnLCAnTGlnaHQnLCAnRGFyayddO1xuXG4vKipcbiAqIEB0aXRsZSBNYXRlcmlhbCBQb3BvdmVyIEVkaXQgb24gYSBNYXRlcmlhbCBkYXRhLXRhYmxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAncG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRWRpdE1hdFRhYmxlRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID1cbiAgICAgIFsncG9zaXRpb24nLCAnbmFtZScsICd0eXBlJywgJ3dlaWdodCcsICdzeW1ib2wnLCAnZmFudGFzeUNvdW50ZXJwYXJ0J107XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcblxuICBuYW1lRWRpdEVuYWJsZWQgPSB0cnVlO1xuXG4gIHJlYWRvbmx5IFRZUEVTID0gVFlQRVM7XG4gIHJlYWRvbmx5IEZBTlRBU1lfRUxFTUVOVFMgPSBGQU5UQVNZX0VMRU1FTlRTO1xuXG4gIHJlYWRvbmx5IG5hbWVWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSB3ZWlnaHRWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSB0eXBlVmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgZmFudGFzeVZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9uU3VibWl0TmFtZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQubmFtZSA9IGYudmFsdWUubmFtZTtcbiAgfVxuXG4gIG9uU3VibWl0V2VpZ2h0KGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC53ZWlnaHQgPSBmLnZhbHVlLndlaWdodDtcbiAgfVxuXG4gIG9uU3VibWl0VHlwZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQudHlwZSA9IGYudmFsdWUudHlwZVswXTtcbiAgfVxuXG4gIG9uU3VibWl0RmFudGFzeUNvdW50ZXJwYXJ0cyhlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQuZmFudGFzeUNvdW50ZXJwYXJ0cyA9IGYudmFsdWUuZmFudGFzeUNvdW50ZXJwYXJ0cztcbiAgfVxuXG4gIGdvb2RKb2IoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbihgV2F5IHRvIGdvLCAke2VsZW1lbnQubmFtZX0hYCwgdW5kZWZpbmVkLCB7ZHVyYXRpb246IDIwMDB9KTtcbiAgfVxuXG4gIGJhZEpvYihlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKGBZb3UgaGF2ZSBmYWlsZWQgbWUgZm9yIHRoZSBsYXN0IHRpbWUsICMke2VsZW1lbnQucG9zaXRpb259LmAsIHVuZGVmaW5lZCxcbiAgICAgICAge2R1cmF0aW9uOiAyMDAwfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXG4gKiBjYW4gcmV0cmlldmUgaXRzIGRhdGEgaW4gYW55IHdheS4gSW4gdGhpcyBjYXNlLCB0aGUgZGF0YSBzb3VyY2UgaXMgcHJvdmlkZWQgYSByZWZlcmVuY2VcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxuICogc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4ge1xuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xuXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxufVxuIiwiPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiIG1hdC10YWJsZSBlZGl0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICN3ZWlnaHRFZGl0IGxldC1lbGVtZW50PlxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXRXZWlnaHQoZWxlbWVudCwgZilcIlxuICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cIndlaWdodFZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cbiAgICAgICAgPGRpdiBtYXQtZWRpdC1jb250ZW50PlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgW25nTW9kZWxdPVwiZWxlbWVudC53ZWlnaHRcIiBuYW1lPVwid2VpZ2h0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOby4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxuICAgICAge3tlbGVtZW50LnBvc2l0aW9ufX1cblxuICAgICAgPCEtLSBSb3cgaG92ZXIgY29udGVudCBpbiBhIG5vbi1lZGl0IGNlbGwuIC0tPlxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImdvb2RKb2IoZWxlbWVudClcIj5cbiAgICAgICAgICA8bWF0LWljb24+dGh1bWJfdXA8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImJhZEpvYihlbGVtZW50KVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj50aHVtYl9kb3duPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBOYW1lIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cbiAgICAgIE5hbWVcbiAgICAgIDxtYXQtY2hlY2tib3hcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5hbWVFZGl0RW5hYmxlZFwiPkVkaXQgZW5hYmxlZDwvbWF0LWNoZWNrYm94PlxuICAgIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXREaXNhYmxlZF09XCIhbmFtZUVkaXRFbmFibGVkXCI+XG4gICAgICB7e2VsZW1lbnQubmFtZX19XG4gICAgICBcbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICNuYW1lRWRpdD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgIG1hdEVkaXRMZW5zXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdE5hbWUoZWxlbWVudCwgZilcIlxuICAgICAgICAgICAgICBbKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlKV09XCJuYW1lVmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICAgICAgPGgyIG1hdC1lZGl0LXRpdGxlPk5hbWU8L2gyPlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1jb250ZW50PlxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFtuZ01vZGVsXT1cImVsZW1lbnQubmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdENsb3NlPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hbWVFZGl0RW5hYmxlZFwiPlxuICAgICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBUeXBlIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ0eXBlXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gVHlwZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cInR5cGVFZGl0XCI+XG4gICAgICB7e2VsZW1lbnQudHlwZX19XG5cbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICN0eXBlRWRpdD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgIG1hdEVkaXRMZW5zXG4gICAgICAgICAgICAgIG1hdEVkaXRDbG9zZVxuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXRUeXBlKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwidHlwZVZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtZmlsbD5cbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3Rpb24tbGlzdCBbbXVsdGlwbGVdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiW2VsZW1lbnQudHlwZV1cIlxuICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJmLm5nU3VibWl0LmVtaXQoKVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRWxlbWVudCB0eXBlXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1saXN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgdHlwZSBvZiBUWVBFU1wiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ0eXBlXCI+XG4gICAgICAgICAgICAgICAgICB7e3R5cGV9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWxpc3Qtb3B0aW9uPlxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Rpb24tbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+YXJyb3dfZHJvcF9kb3duPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwid2VpZ2h0RWRpdFwiIFttYXRQb3BvdmVyRWRpdENvbnRleHRdPVwiZWxlbWVudFwiPlxuICAgICAge3tlbGVtZW50LndlaWdodH19XG4gICAgICBcbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG5cbiAgPCEtLSBGYW50YXN5IENvdW50ZXJwYXJ0cyBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZmFudGFzeUNvdW50ZXJwYXJ0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gRmFudGFzeSBDb3VudGVycGFydHMgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJmYW50YXN5Q291bnRlcnBhcnRFZGl0XCI+XG4gICAgICB7e2VsZW1lbnQuZmFudGFzeUNvdW50ZXJwYXJ0cy5qb2luKCcsICcpfX1cblxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI2ZhbnRhc3lDb3VudGVycGFydEVkaXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXRGYW50YXN5Q291bnRlcnBhcnRzKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwiZmFudGFzeVZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtZmlsbD5cbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3Rpb24tbGlzdCBbbmdNb2RlbF09XCJlbGVtZW50LmZhbnRhc3lDb3VudGVycGFydHNcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZhbnRhc3lDb3VudGVycGFydHNcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkZhbnRhc3kgRWxlbWVudCBDb3VudGVycGFydHNcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxpc3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBmYW50YXN5RWxlbWVudCBvZiBGQU5UQVNZX0VMRU1FTlRTXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImZhbnRhc3lFbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hQb3NpdGlvbj1cImJlZm9yZVwiPlxuICAgICAgICAgICAgICAgICAge3tmYW50YXN5RWxlbWVudH19XG4gICAgICAgICAgICAgICAgPC9tYXQtbGlzdC1vcHRpb24+XG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdGlvbi1saXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWFjdGlvbnM+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+YXJyb3dfZHJvcF9kb3duPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvdGFibGU+XG4iXX0=