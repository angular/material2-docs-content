import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2$1 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Button toggle appearance
 */
class ButtonToggleAppearanceExample {
}
ButtonToggleAppearanceExample.ɵfac = function ButtonToggleAppearanceExample_Factory(t) { return new (t || ButtonToggleAppearanceExample)(); };
ButtonToggleAppearanceExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonToggleAppearanceExample, selectors: [["button-toggle-appearance-example"]], decls: 18, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style"]], template: function ButtonToggleAppearanceExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " Default appearance: ");
        i0.ɵɵelementStart(2, "mat-button-toggle-group", 0);
        i0.ɵɵelementStart(3, "mat-button-toggle", 1);
        i0.ɵɵtext(4, "Bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 2);
        i0.ɵɵtext(6, "Italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-button-toggle", 3);
        i0.ɵɵtext(8, "Underline");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, " Legacy appearance: ");
        i0.ɵɵelementStart(11, "mat-button-toggle-group", 4);
        i0.ɵɵelementStart(12, "mat-button-toggle", 1);
        i0.ɵɵtext(13, "Bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-button-toggle", 2);
        i0.ɵɵtext(15, "Italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-button-toggle", 3);
        i0.ɵɵtext(17, "Underline");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], styles: ["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleAppearanceExample, [{
        type: Component,
        args: [{ selector: 'button-toggle-appearance-example', template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"] }]
    }], null, null); })();

/**
 * @title Exclusive selection
 */
class ButtonToggleExclusiveExample {
}
ButtonToggleExclusiveExample.ɵfac = function ButtonToggleExclusiveExample_Factory(t) { return new (t || ButtonToggleExclusiveExample)(); };
ButtonToggleExclusiveExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonToggleExclusiveExample, selectors: [["button-toggle-exclusive-example"]], decls: 16, vars: 1, consts: [["group", "matButtonToggleGroup"], ["value", "left", "aria-label", "Text align left"], ["value", "center", "aria-label", "Text align center"], ["value", "right", "aria-label", "Text align right"], ["value", "justify", "disabled", "", "aria-label", "Text align justify"], [1, "example-selected-value"]], template: function ButtonToggleExclusiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-button-toggle-group", null, 0);
        i0.ɵɵelementStart(2, "mat-button-toggle", 1);
        i0.ɵɵelementStart(3, "mat-icon");
        i0.ɵɵtext(4, "format_align_left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 2);
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7, "format_align_center");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-button-toggle", 3);
        i0.ɵɵelementStart(9, "mat-icon");
        i0.ɵɵtext(10, "format_align_right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-button-toggle", 4);
        i0.ɵɵelementStart(12, "mat-icon");
        i0.ɵɵtext(13, "format_align_justify");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 5);
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(15);
        i0.ɵɵtextInterpolate1("Selected value: ", _r0.value, "");
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle, i2.MatIcon], styles: [".example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleExclusiveExample, [{
        type: Component,
        args: [{ selector: 'button-toggle-exclusive-example', template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n", styles: [".example-selected-value {\n  margin: 15px 0;\n}\n"] }]
    }], null, null); })();

/**
 * @title Basic button-toggles
 */
class ButtonToggleOverviewExample {
}
ButtonToggleOverviewExample.ɵfac = function ButtonToggleOverviewExample_Factory(t) { return new (t || ButtonToggleOverviewExample)(); };
ButtonToggleOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonToggleOverviewExample, selectors: [["button-toggle-overview-example"]], decls: 7, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"]], template: function ButtonToggleOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-button-toggle-group", 0);
        i0.ɵɵelementStart(1, "mat-button-toggle", 1);
        i0.ɵɵtext(2, "Bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-button-toggle", 2);
        i0.ɵɵtext(4, "Italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 3);
        i0.ɵɵtext(6, "Underline");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleOverviewExample, [{
        type: Component,
        args: [{ selector: 'button-toggle-overview-example', template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
    }], null, null); })();

/**
 * @title Testing with MatButtonToggleHarness
 */
class ButtonToggleHarnessExample {
    constructor() {
        this.disabled = false;
        this.appearance = 'standard';
    }
}
ButtonToggleHarnessExample.ɵfac = function ButtonToggleHarnessExample_Factory(t) { return new (t || ButtonToggleHarnessExample)(); };
ButtonToggleHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonToggleHarnessExample, selectors: [["button-toggle-harness-example"]], decls: 5, vars: 2, consts: [[3, "disabled", "appearance"], ["value", "1"], ["value", "2"]], template: function ButtonToggleHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-button-toggle-group", 0);
        i0.ɵɵelementStart(1, "mat-button-toggle", 1);
        i0.ɵɵtext(2, "One");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-button-toggle", 2);
        i0.ɵɵtext(4, "Two");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled)("appearance", ctx.appearance);
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleHarnessExample, [{
        type: Component,
        args: [{ selector: 'button-toggle-harness-example', template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
    }], null, null); })();

/**
 * @title Button-toggles with forms
 */
class ButtonToggleFormsExample {
    constructor() {
        this.fontStyleControl = new FormControl();
    }
}
ButtonToggleFormsExample.ɵfac = function ButtonToggleFormsExample_Factory(t) { return new (t || ButtonToggleFormsExample)(); };
ButtonToggleFormsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonToggleFormsExample, selectors: [["button-toggle-forms-example"]], decls: 24, vars: 4, consts: [["aria-label", "Font Style", 3, "ngModel", "ngModelChange"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["aria-label", "Font Style", 3, "formControl"]], template: function ButtonToggleFormsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "Button Toggle inside of a Template-driven form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-button-toggle-group", 0);
        i0.ɵɵlistener("ngModelChange", function ButtonToggleFormsExample_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { return ctx.fontStyle = $event; });
        i0.ɵɵelementStart(4, "mat-button-toggle", 1);
        i0.ɵɵtext(5, "Bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-button-toggle", 2);
        i0.ɵɵtext(7, "Italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-button-toggle", 3);
        i0.ɵɵtext(9, "Underline");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "section");
        i0.ɵɵelementStart(13, "h4");
        i0.ɵɵtext(14, "Button Toggle inside of a Reactive form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-button-toggle-group", 4);
        i0.ɵɵelementStart(16, "mat-button-toggle", 1);
        i0.ɵɵtext(17, "Bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-button-toggle", 2);
        i0.ɵɵtext(19, "Italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-button-toggle", 3);
        i0.ɵɵtext(21, "Underline");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "p");
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.fontStyle);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1("Chosen value is ", ctx.fontStyle, "");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.fontStyleControl);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1("Chosen value is ", ctx.fontStyleControl.value, "");
    } }, directives: [i1.MatButtonToggleGroup, i2$1.NgControlStatus, i2$1.NgModel, i1.MatButtonToggle, i2$1.FormControlDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleFormsExample, [{
        type: Component,
        args: [{ selector: 'button-toggle-forms-example', template: "<section>\n  <h4>Button Toggle inside of a Template-driven form</h4>\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyle}}</p>\n</section>\n\n<section>\n  <h4>Button Toggle inside of a Reactive form</h4>\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyleControl.value}}</p>\n</section>\n\n" }]
    }], null, null); })();

/**
 * @title Button toggle selection mode
 */
class ButtonToggleModeExample {
}
ButtonToggleModeExample.ɵfac = function ButtonToggleModeExample_Factory(t) { return new (t || ButtonToggleModeExample)(); };
ButtonToggleModeExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonToggleModeExample, selectors: [["button-toggle-mode-example"]], decls: 18, vars: 0, consts: [["name", "favoriteColor", "aria-label", "Favorite Color"], ["value", "red"], ["value", "green"], ["value", "blue"], ["name", "ingredients", "aria-label", "Ingredients", "multiple", ""], ["value", "flour"], ["value", "eggs"], ["value", "sugar"]], template: function ButtonToggleModeExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h3");
        i0.ɵɵtext(1, "Single selection");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-button-toggle-group", 0);
        i0.ɵɵelementStart(3, "mat-button-toggle", 1);
        i0.ɵɵtext(4, "Red");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 2);
        i0.ɵɵtext(6, "Green");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-button-toggle", 3);
        i0.ɵɵtext(8, "Blue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h3");
        i0.ɵɵtext(10, "Multiple selection");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-button-toggle-group", 4);
        i0.ɵɵelementStart(12, "mat-button-toggle", 5);
        i0.ɵɵtext(13, "Flour");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-button-toggle", 6);
        i0.ɵɵtext(15, "Eggs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-button-toggle", 7);
        i0.ɵɵtext(17, "Sugar");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleModeExample, [{
        type: Component,
        args: [{ selector: 'button-toggle-mode-example', template: "<h3>Single selection</h3>\n<mat-button-toggle-group name=\"favoriteColor\" aria-label=\"Favorite Color\">\n  <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n  <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n  <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n</mat-button-toggle-group>\n\n<h3>Multiple selection</h3>\n<mat-button-toggle-group name=\"ingredients\" aria-label=\"Ingredients\" multiple>\n  <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n  <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n  <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
    }], null, null); })();

const EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonToggleHarnessExample,
    ButtonToggleFormsExample,
    ButtonToggleModeExample,
];
class ButtonToggleExamplesModule {
}
ButtonToggleExamplesModule.ɵfac = function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); };
ButtonToggleExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
ButtonToggleExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            MatButtonToggleModule,
            MatIconModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    MatButtonToggleModule,
                    MatIconModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonToggleExamplesModule, { declarations: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample,
        ButtonToggleModeExample], imports: [FormsModule,
        MatButtonToggleModule,
        MatIconModule,
        ReactiveFormsModule], exports: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample,
        ButtonToggleModeExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonToggleAppearanceExample, ButtonToggleExamplesModule, ButtonToggleExclusiveExample, ButtonToggleFormsExample, ButtonToggleHarnessExample, ButtonToggleModeExample, ButtonToggleOverviewExample };
//# sourceMappingURL=button-toggle.js.map
