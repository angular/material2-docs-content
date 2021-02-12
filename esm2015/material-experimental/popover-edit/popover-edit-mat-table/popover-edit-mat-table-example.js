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
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 15, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r19); const element_r16 = ctx.$implicit; const _r17 = i0.ɵɵreference(2); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onSubmitWeight(element_r16, _r17); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const element_r16 = ctx.$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.weightValues.for(element_r16).value = $event; });
    i0.ɵɵelementStart(3, "div", 17);
    i0.ɵɵelementStart(4, "mat-form-field");
    i0.ɵɵelement(5, "input", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r1.weightValues.for(element_r16).value);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", element_r16.weight);
} }
function PopoverEditMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 22);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r25); const element_r21 = i0.ɵɵnextContext().$implicit; const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.goodJob(element_r21); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 22);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r25); const element_r21 = i0.ɵɵnextContext().$implicit; const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.badJob(element_r21); });
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
    const element_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r21.position, " ");
} }
function PopoverEditMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 19);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementStart(2, "mat-checkbox", 23);
    i0.ɵɵlistener("ngModelChange", function PopoverEditMatTableExample_th_7_Template_mat_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.nameEditEnabled = $event; });
    i0.ɵɵtext(3, "Edit enabled");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r4.nameEditEnabled);
} }
function PopoverEditMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 15, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r37); const _r34 = i0.ɵɵreference(2); const element_r30 = i0.ɵɵnextContext().$implicit; const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.onSubmitName(element_r30, _r34); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r37); const element_r30 = i0.ɵɵnextContext().$implicit; const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.nameValues.for(element_r30).value = $event; });
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
    const element_r30 = i0.ɵɵnextContext().$implicit;
    const ctx_r32 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r32.nameValues.for(element_r30).value);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", element_r30.name);
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
    const element_r30 = ctx.$implicit;
    const _r31 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matPopoverEdit", _r31)("matPopoverEditDisabled", !ctx_r5.nameEditEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r30.name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.nameEditEnabled);
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
    const type_r48 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r48);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", type_r48, " ");
} }
const _c0 = function (a0) { return [a0]; };
function PopoverEditMatTableExample_td_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 36, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r51); const _r46 = i0.ɵɵreference(2); const element_r42 = i0.ɵɵnextContext().$implicit; const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.onSubmitType(element_r42, _r46); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r51); const element_r42 = i0.ɵɵnextContext().$implicit; const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.typeValues.for(element_r42).value = $event; });
    i0.ɵɵelementStart(3, "div", 37);
    i0.ɵɵelementStart(4, "mat-selection-list", 38);
    i0.ɵɵlistener("selectionChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_mat_selection_list_selectionChange_4_listener() { i0.ɵɵrestoreView(_r51); const _r46 = i0.ɵɵreference(2); return _r46.ngSubmit.emit(); });
    i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r44 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r44.typeValues.for(element_r42).value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("multiple", false)("ngModel", i0.ɵɵpureFunction1(4, _c0, element_r42.type));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r44.TYPES);
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
    const element_r42 = ctx.$implicit;
    const _r43 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r43);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r42.type, " ");
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
    const element_r56 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", element_r56);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r56.weight, " ");
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
    const element_r58 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r58.symbol, " ");
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
    const fantasyElement_r66 = ctx.$implicit;
    i0.ɵɵproperty("value", fantasyElement_r66);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fantasyElement_r66, " ");
} }
function PopoverEditMatTableExample_td_22_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 15, 16);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r69); const _r64 = i0.ɵɵreference(2); const element_r60 = i0.ɵɵnextContext().$implicit; const ctx_r67 = i0.ɵɵnextContext(); return ctx_r67.onSubmitFantasyCounterparts(element_r60, _r64); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r69); const element_r60 = i0.ɵɵnextContext().$implicit; const ctx_r70 = i0.ɵɵnextContext(); return ctx_r70.fantasyValues.for(element_r60).value = $event; });
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
    const element_r60 = i0.ɵɵnextContext().$implicit;
    const ctx_r62 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r62.fantasyValues.for(element_r60).value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", element_r60.fantasyCounterparts);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r62.FANTASY_ELEMENTS);
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
    const element_r60 = ctx.$implicit;
    const _r61 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r61);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r60.fantasyCounterparts.join(", "), " ");
} }
const ELEMENT_DATA = [
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
const TYPES = ['Metal', 'Semimetal', 'Nonmetal'];
const FANTASY_ELEMENTS = ['Earth', 'Water', 'Wind', 'Fire', 'Light', 'Dark'];
/**
 * @title Material Popover Edit on a Material data-table
 */
export class PopoverEditMatTableExample {
    constructor(_snackBar) {
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
    onSubmitType(element, f) {
        if (!f.valid) {
            return;
        }
        element.type = f.value.type[0];
    }
    onSubmitFantasyCounterparts(element, f) {
        if (!f.valid) {
            return;
        }
        element.fantasyCounterparts = f.value.fantasyCounterparts;
    }
    goodJob(element) {
        this._snackBar.open(`Way to go, ${element.name}!`, undefined, { duration: 2000 });
    }
    badJob(element) {
        this._snackBar.open(`You have failed me for the last time, #${element.position}.`, undefined, { duration: 2000 });
    }
}
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverEditMatTableExample, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ0M3QywyQkFBSztJQUNILG9DQUd3RTtJQURwRSxxU0FBdUMsdVFBQ0oscUNBQXlCLG1CQURyQjtJQUV6QywrQkFBc0I7SUFDcEIsc0NBQWdCO0lBQ2QsNEJBQWdGO0lBQ2xGLGlCQUFpQjtJQUNuQixpQkFBTTtJQUNSLGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFQQSxlQUFtRTtJQUFuRSwwRkFBbUU7SUFHbkMsZUFBMEI7SUFBMUIsNENBQTBCOzs7SUFTaEUsOEJBQXNDO0lBQUMscUJBQUk7SUFBQSxpQkFBSzs7OztJQUs5Qyw0QkFBMEI7SUFDeEIsa0NBQW1EO0lBQTNCLGlRQUEwQjtJQUNoRCxn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QWpDLHNEQUFpQztRQUNwQixlQUEwQjtRQUExQix1REFBMEI7O3VGRDlEaEQsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztnQkFDakQsV0FBVyxFQUFFLHFDQUFxQzthQUNuRDs7QUFvREQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQTJCO0lBQWxFOztRQUNFLG9EQUFvRDtRQUNwRCxTQUFJLEdBQUcsSUFBSSxlQUFlLENBQW9CLFlBQVksQ0FBQyxDQUFDO0lBUTlELENBQUM7SUFOQyxpR0FBaUc7SUFDakcsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsVUFBVSxLQUFJLENBQUM7Q0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0Zvcm1WYWx1ZUNvbnRhaW5lcn0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIEVsZW1lbnRUeXBlID0gJ01ldGFsJyB8ICdTZW1pbWV0YWwnIHwgJ05vbm1ldGFsJztcblxuZXhwb3J0IHR5cGUgRmFudGFzeUVsZW1lbnQgPSAnRWFydGgnIHwgJ1dhdGVyJyB8ICdXaW5kJyB8ICdGaXJlJyB8ICdMaWdodCcgfCAnRGFyayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBFbGVtZW50VHlwZTtcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBmYW50YXN5Q291bnRlcnBhcnRzOiBGYW50YXN5RWxlbWVudFtdO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRmlyZScsICdXaW5kJywgJ0xpZ2h0J119LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydXaW5kJywgJ0xpZ2h0J119LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB0eXBlOiAnTWV0YWwnLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHR5cGU6ICdTZW1pbWV0YWwnLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQicsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQycsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0VhcnRoJywgJ0RhcmsnXX0sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnV2luZCddfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRmlyZScsICdXYXRlcicsICdXaW5kJ119LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRicsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgdHlwZTogJ05vbm1ldGFsJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0xpZ2h0J119LFxuICB7cG9zaXRpb246IDExLCBuYW1lOiAnU29kaXVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiAyMi45ODk3LCBzeW1ib2w6ICdOYScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0VhcnRoJywgJ1dhdGVyJ119LFxuICB7cG9zaXRpb246IDEyLCBuYW1lOiAnTWFnbmVzaXVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiAyNC4zMDUsIHN5bWJvbDogJ01nJyxcbiAgICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdfSxcbiAge3Bvc2l0aW9uOiAxMywgbmFtZTogJ0FsdW1pbnVtJywgdHlwZTogJ01ldGFsJywgd2VpZ2h0OiAyNi45ODE1LCBzeW1ib2w6ICdBbCcsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTQsIG5hbWU6ICdTaWxpY29uJywgdHlwZTogJ1NlbWltZXRhbCcsIHdlaWdodDogMjguMDg1NSwgc3ltYm9sOiAnU2knLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDE1LCBuYW1lOiAnUGhvc3Bob3J1cycsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMzAuOTczOCwgc3ltYm9sOiAnUCcsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTYsIG5hbWU6ICdTdWxmdXInLCB0eXBlOiAnTm9ubWV0YWwnLCB3ZWlnaHQ6IDMyLjA2NSwgc3ltYm9sOiAnUycsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTcsIG5hbWU6ICdDaGxvcmluZScsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMzUuNDUzLCBzeW1ib2w6ICdDbCcsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTgsIG5hbWU6ICdBcmdvbicsIHR5cGU6ICdOb25tZXRhbCcsIHdlaWdodDogMzkuOTQ4LCBzeW1ib2w6ICdBcicsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG4gIHtwb3NpdGlvbjogMTksIG5hbWU6ICdQb3Rhc3NpdW0nLCB0eXBlOiAnTWV0YWwnLCB3ZWlnaHQ6IDM5LjA5ODMsIHN5bWJvbDogJ0snLFxuICAgICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW119LFxuICB7cG9zaXRpb246IDIwLCBuYW1lOiAnQ2FsY2l1bScsIHR5cGU6ICdNZXRhbCcsIHdlaWdodDogNDAuMDc4LCBzeW1ib2w6ICdDYScsXG4gICAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXX0sXG5dO1xuXG5jb25zdCBUWVBFUzogcmVhZG9ubHkgRWxlbWVudFR5cGVbXSA9IFsnTWV0YWwnLCAnU2VtaW1ldGFsJywgJ05vbm1ldGFsJ107XG5jb25zdCBGQU5UQVNZX0VMRU1FTlRTOiByZWFkb25seSBGYW50YXN5RWxlbWVudFtdID1cbiAgICBbJ0VhcnRoJywgJ1dhdGVyJywgJ1dpbmQnLCAnRmlyZScsICdMaWdodCcsICdEYXJrJ107XG5cbi8qKlxuICogQHRpdGxlIE1hdGVyaWFsIFBvcG92ZXIgRWRpdCBvbiBhIE1hdGVyaWFsIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJFZGl0TWF0VGFibGVFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPVxuICAgICAgWydwb3NpdGlvbicsICduYW1lJywgJ3R5cGUnLCAnd2VpZ2h0JywgJ3N5bWJvbCcsICdmYW50YXN5Q291bnRlcnBhcnQnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBFeGFtcGxlRGF0YVNvdXJjZSgpO1xuXG4gIG5hbWVFZGl0RW5hYmxlZCA9IHRydWU7XG5cbiAgcmVhZG9ubHkgVFlQRVMgPSBUWVBFUztcbiAgcmVhZG9ubHkgRkFOVEFTWV9FTEVNRU5UUyA9IEZBTlRBU1lfRUxFTUVOVFM7XG5cbiAgcmVhZG9ubHkgbmFtZVZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG4gIHJlYWRvbmx5IHdlaWdodFZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG4gIHJlYWRvbmx5IHR5cGVWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSBmYW50YXN5VmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb25TdWJtaXROYW1lKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC5uYW1lID0gZi52YWx1ZS5uYW1lO1xuICB9XG5cbiAgb25TdWJtaXRXZWlnaHQoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHsgcmV0dXJuOyB9XG5cbiAgICBlbGVtZW50LndlaWdodCA9IGYudmFsdWUud2VpZ2h0O1xuICB9XG5cbiAgb25TdWJtaXRUeXBlKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC50eXBlID0gZi52YWx1ZS50eXBlWzBdO1xuICB9XG5cbiAgb25TdWJtaXRGYW50YXN5Q291bnRlcnBhcnRzKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzID0gZi52YWx1ZS5mYW50YXN5Q291bnRlcnBhcnRzO1xuICB9XG5cbiAgZ29vZEpvYihlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKGBXYXkgdG8gZ28sICR7ZWxlbWVudC5uYW1lfSFgLCB1bmRlZmluZWQsIHtkdXJhdGlvbjogMjAwMH0pO1xuICB9XG5cbiAgYmFkSm9iKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4oYFlvdSBoYXZlIGZhaWxlZCBtZSBmb3IgdGhlIGxhc3QgdGltZSwgIyR7ZWxlbWVudC5wb3NpdGlvbn0uYCwgdW5kZWZpbmVkLFxuICAgICAgICB7ZHVyYXRpb246IDIwMDB9KTtcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgc291cmNlIHRvIHByb3ZpZGUgd2hhdCBkYXRhIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdGFibGUuIE5vdGUgdGhhdCB0aGUgZGF0YSBzb3VyY2VcbiAqIGNhbiByZXRyaWV2ZSBpdHMgZGF0YSBpbiBhbnkgd2F5LiBJbiB0aGlzIGNhc2UsIHRoZSBkYXRhIHNvdXJjZSBpcyBwcm92aWRlZCBhIHJlZmVyZW5jZVxuICogdG8gYSBjb21tb24gZGF0YSBiYXNlLCBFeGFtcGxlRGF0YWJhc2UuIEl0IGlzIG5vdCB0aGUgZGF0YSBzb3VyY2UncyByZXNwb25zaWJpbGl0eSB0byBtYW5hZ2VcbiAqIHRoZSB1bmRlcmx5aW5nIGRhdGEuIEluc3RlYWQsIGl0IG9ubHkgbmVlZHMgdG8gdGFrZSB0aGUgZGF0YSBhbmQgc2VuZCB0aGUgdGFibGUgZXhhY3RseSB3aGF0XG4gKiBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XG4gIC8qKiBTdHJlYW0gb2YgZGF0YSB0aGF0IGlzIHByb3ZpZGVkIHRvIHRoZSB0YWJsZS4gKi9cbiAgZGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGVyaW9kaWNFbGVtZW50W10+KEVMRU1FTlRfREFUQSk7XG5cbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8UGVyaW9kaWNFbGVtZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iLCI8dGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCIgbWF0LXRhYmxlIGVkaXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cbiAgPCEtLVxuICAgIFRoaXMgZWRpdCBsZW5zIGlzIHNwZWNpZmllZCBvdXRzaWRlIG9mIHRoZSBjZWxsIGFuZCBtdXN0IGV4cGxpY2l0bHkgZGVjbGFyZVxuICAgIGl0cyBjb250ZXh0LiBJdCBjb3VsZCBiZSByZXVzZWQgaW4gbXVsdGlwbGUgY2VsbHMuXG4gIC0tPlxuICA8bmctdGVtcGxhdGUgI3dlaWdodEVkaXQgbGV0LWVsZW1lbnQ+XG4gICAgPGRpdj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFdlaWdodChlbGVtZW50LCBmKVwiXG4gICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwid2VpZ2h0VmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJlbGVtZW50LndlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XG4gICAgICB7e2VsZW1lbnQucG9zaXRpb259fVxuXG4gICAgICA8IS0tIFJvdyBob3ZlciBjb250ZW50IGluIGEgbm9uLWVkaXQgY2VsbC4gLS0+XG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZ29vZEpvYihlbGVtZW50KVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj50aHVtYl91cDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiYmFkSm9iKGVsZW1lbnQpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnRodW1iX2Rvd248L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgTmFtZVxuICAgICAgPG1hdC1jaGVja2JveFxuICAgICAgICAgIFsobmdNb2RlbCldPVwibmFtZUVkaXRFbmFibGVkXCI+RWRpdCBlbmFibGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdERpc2FibGVkXT1cIiFuYW1lRWRpdEVuYWJsZWRcIj5cbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cbiAgICAgIFxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0TmFtZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cIm5hbWVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8aDIgbWF0LWVkaXQtdGl0bGU+TmFtZTwvaDI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwiZWxlbWVudC5uYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1hY3Rpb25zPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmFtZUVkaXRFbmFibGVkXCI+XG4gICAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFR5cGUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInR5cGVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBUeXBlIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwidHlwZUVkaXRcIj5cbiAgICAgIHt7ZWxlbWVudC50eXBlfX1cblxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI3R5cGVFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgbWF0RWRpdENsb3NlXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFR5cGUoZWxlbWVudCwgZilcIlxuICAgICAgICAgICAgICBbKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlKV09XCJ0eXBlVmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1maWxsPlxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdGlvbi1saXN0IFttdWx0aXBsZV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJbZWxlbWVudC50eXBlXVwiXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cImYubmdTdWJtaXQuZW1pdCgpXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbGVtZW50IHR5cGVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxpc3Qtb3B0aW9uICpuZ0Zvcj1cImxldCB0eXBlIG9mIFRZUEVTXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInR5cGVcIj5cbiAgICAgICAgICAgICAgICAgIHt7dHlwZX19XG4gICAgICAgICAgICAgICAgPC9tYXQtbGlzdC1vcHRpb24+XG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdGlvbi1saXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5hcnJvd19kcm9wX2Rvd248L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBXZWlnaHQgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJ3ZWlnaHRFZGl0XCIgW21hdFBvcG92ZXJFZGl0Q29udGV4dF09XCJlbGVtZW50XCI+XG4gICAgICB7e2VsZW1lbnQud2VpZ2h0fX1cbiAgICAgIFxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cblxuICA8IS0tIEZhbnRhc3kgQ291bnRlcnBhcnRzIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJmYW50YXN5Q291bnRlcnBhcnRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBGYW50YXN5IENvdW50ZXJwYXJ0cyA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cImZhbnRhc3lDb3VudGVycGFydEVkaXRcIj5cbiAgICAgIHt7ZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzLmpvaW4oJywgJyl9fVxuXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZmFudGFzeUNvdW50ZXJwYXJ0RWRpdD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgIG1hdEVkaXRMZW5zXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdEZhbnRhc3lDb3VudGVycGFydHMoZWxlbWVudCwgZilcIlxuICAgICAgICAgICAgICBbKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlKV09XCJmYW50YXN5VmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1maWxsPlxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdGlvbi1saXN0IFtuZ01vZGVsXT1cImVsZW1lbnQuZmFudGFzeUNvdW50ZXJwYXJ0c1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZmFudGFzeUNvdW50ZXJwYXJ0c1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRmFudGFzeSBFbGVtZW50IENvdW50ZXJwYXJ0c1wiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1vcHRpb24gKm5nRm9yPVwibGV0IGZhbnRhc3lFbGVtZW50IG9mIEZBTlRBU1lfRUxFTUVOVFNcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZmFudGFzeUVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFBvc2l0aW9uPVwiYmVmb3JlXCI+XG4gICAgICAgICAgICAgICAgICB7e2ZhbnRhc3lFbGVtZW50fX1cbiAgICAgICAgICAgICAgICA8L21hdC1saXN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5hcnJvd19kcm9wX2Rvd248L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuPC90YWJsZT5cbiJdfQ==