import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵreference, ɵɵadvance, ɵɵtextInterpolate1, ɵɵproperty, ɵɵlistener, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { FormControl, NgControlStatus, NgModel, FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon, MatIconModule } from '@angular/material/icon';

/**
 * @title Button toggle appearance
 */
class ButtonToggleAppearanceExample {
}
ButtonToggleAppearanceExample.ɵfac = function ButtonToggleAppearanceExample_Factory(t) { return new (t || ButtonToggleAppearanceExample)(); };
ButtonToggleAppearanceExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ButtonToggleAppearanceExample, selectors: [["button-toggle-appearance-example"]], decls: 18, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style"]], template: function ButtonToggleAppearanceExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " Default appearance: ");
        ɵɵelementStart(2, "mat-button-toggle-group", 0);
        ɵɵelementStart(3, "mat-button-toggle", 1);
        ɵɵtext(4, "Bold");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-button-toggle", 2);
        ɵɵtext(6, "Italic");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-button-toggle", 3);
        ɵɵtext(8, "Underline");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "p");
        ɵɵtext(10, " Legacy appearance: ");
        ɵɵelementStart(11, "mat-button-toggle-group", 4);
        ɵɵelementStart(12, "mat-button-toggle", 1);
        ɵɵtext(13, "Bold");
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-button-toggle", 2);
        ɵɵtext(15, "Italic");
        ɵɵelementEnd();
        ɵɵelementStart(16, "mat-button-toggle", 3);
        ɵɵtext(17, "Underline");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatButtonToggleGroup, MatButtonToggle], styles: ["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonToggleAppearanceExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-appearance-example',
                templateUrl: 'button-toggle-appearance-example.html',
                styleUrls: ['button-toggle-appearance-example.css'],
            }]
    }], null, null); })();

/**
 * @title Exclusive selection
 */
class ButtonToggleExclusiveExample {
}
ButtonToggleExclusiveExample.ɵfac = function ButtonToggleExclusiveExample_Factory(t) { return new (t || ButtonToggleExclusiveExample)(); };
ButtonToggleExclusiveExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ButtonToggleExclusiveExample, selectors: [["button-toggle-exclusive-example"]], decls: 16, vars: 1, consts: [["group", "matButtonToggleGroup"], ["value", "left", "aria-label", "Text align left"], ["value", "center", "aria-label", "Text align center"], ["value", "right", "aria-label", "Text align right"], ["value", "justify", "disabled", "", "aria-label", "Text align justify"], [1, "example-selected-value"]], template: function ButtonToggleExclusiveExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-button-toggle-group", null, 0);
        ɵɵelementStart(2, "mat-button-toggle", 1);
        ɵɵelementStart(3, "mat-icon");
        ɵɵtext(4, "format_align_left");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-button-toggle", 2);
        ɵɵelementStart(6, "mat-icon");
        ɵɵtext(7, "format_align_center");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-button-toggle", 3);
        ɵɵelementStart(9, "mat-icon");
        ɵɵtext(10, "format_align_right");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-button-toggle", 4);
        ɵɵelementStart(12, "mat-icon");
        ɵɵtext(13, "format_align_justify");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "div", 5);
        ɵɵtext(15);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵadvance(15);
        ɵɵtextInterpolate1("Selected value: ", _r0.value, "");
    } }, directives: [MatButtonToggleGroup, MatButtonToggle, MatIcon], styles: [".example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonToggleExclusiveExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-exclusive-example',
                templateUrl: 'button-toggle-exclusive-example.html',
                styleUrls: ['button-toggle-exclusive-example.css'],
            }]
    }], null, null); })();

/**
 * @title Basic button-toggles
 */
class ButtonToggleOverviewExample {
}
ButtonToggleOverviewExample.ɵfac = function ButtonToggleOverviewExample_Factory(t) { return new (t || ButtonToggleOverviewExample)(); };
ButtonToggleOverviewExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ButtonToggleOverviewExample, selectors: [["button-toggle-overview-example"]], decls: 7, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"]], template: function ButtonToggleOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-button-toggle-group", 0);
        ɵɵelementStart(1, "mat-button-toggle", 1);
        ɵɵtext(2, "Bold");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-button-toggle", 2);
        ɵɵtext(4, "Italic");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-button-toggle", 3);
        ɵɵtext(6, "Underline");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatButtonToggleGroup, MatButtonToggle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonToggleOverviewExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-overview-example',
                templateUrl: 'button-toggle-overview-example.html',
            }]
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
ButtonToggleHarnessExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ButtonToggleHarnessExample, selectors: [["button-toggle-harness-example"]], decls: 5, vars: 2, consts: [[3, "disabled", "appearance"], ["value", "1"], ["value", "2"]], template: function ButtonToggleHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-button-toggle-group", 0);
        ɵɵelementStart(1, "mat-button-toggle", 1);
        ɵɵtext(2, "One");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-button-toggle", 2);
        ɵɵtext(4, "Two");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("disabled", ctx.disabled)("appearance", ctx.appearance);
    } }, directives: [MatButtonToggleGroup, MatButtonToggle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonToggleHarnessExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-harness-example',
                templateUrl: 'button-toggle-harness-example.html',
            }]
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
ButtonToggleFormsExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ButtonToggleFormsExample, selectors: [["button-toggle-forms-example"]], decls: 24, vars: 4, consts: [["aria-label", "Font Style", 3, "ngModel", "ngModelChange"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["aria-label", "Font Style", 3, "formControl"]], template: function ButtonToggleFormsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "section");
        ɵɵelementStart(1, "h4");
        ɵɵtext(2, "Button Toggle inside of a Template-driven form");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-button-toggle-group", 0);
        ɵɵlistener("ngModelChange", function ButtonToggleFormsExample_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { return ctx.fontStyle = $event; });
        ɵɵelementStart(4, "mat-button-toggle", 1);
        ɵɵtext(5, "Bold");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-button-toggle", 2);
        ɵɵtext(7, "Italic");
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-button-toggle", 3);
        ɵɵtext(9, "Underline");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "p");
        ɵɵtext(11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "section");
        ɵɵelementStart(13, "h4");
        ɵɵtext(14, "Button Toggle inside of a Reactive form");
        ɵɵelementEnd();
        ɵɵelementStart(15, "mat-button-toggle-group", 4);
        ɵɵelementStart(16, "mat-button-toggle", 1);
        ɵɵtext(17, "Bold");
        ɵɵelementEnd();
        ɵɵelementStart(18, "mat-button-toggle", 2);
        ɵɵtext(19, "Italic");
        ɵɵelementEnd();
        ɵɵelementStart(20, "mat-button-toggle", 3);
        ɵɵtext(21, "Underline");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(22, "p");
        ɵɵtext(23);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.fontStyle);
        ɵɵadvance(8);
        ɵɵtextInterpolate1("Chosen value is ", ctx.fontStyle, "");
        ɵɵadvance(4);
        ɵɵproperty("formControl", ctx.fontStyleControl);
        ɵɵadvance(8);
        ɵɵtextInterpolate1("Chosen value is ", ctx.fontStyleControl.value, "");
    } }, directives: [MatButtonToggleGroup, NgControlStatus, NgModel, MatButtonToggle, FormControlDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonToggleFormsExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-forms-example',
                templateUrl: 'button-toggle-forms-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonToggleHarnessExample,
    ButtonToggleFormsExample,
];
class ButtonToggleExamplesModule {
}
ButtonToggleExamplesModule.ɵfac = function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); };
ButtonToggleExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
ButtonToggleExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            FormsModule,
            MatButtonToggleModule,
            MatIconModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonToggleExamplesModule, [{
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonToggleExamplesModule, { declarations: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample], imports: [FormsModule,
        MatButtonToggleModule,
        MatIconModule,
        ReactiveFormsModule], exports: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonToggleAppearanceExample, ButtonToggleExamplesModule, ButtonToggleExclusiveExample, ButtonToggleFormsExample, ButtonToggleHarnessExample, ButtonToggleOverviewExample };
//# sourceMappingURL=button-toggle.js.map
