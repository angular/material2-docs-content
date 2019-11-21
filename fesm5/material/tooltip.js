import { NgForOf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineComponent, ɵɵtemplate, ɵsetClassMetadata, ViewEncapsulation, ɵɵelement, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵProvidersFeature, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormControl, NgControlStatus, FormControlDirective, NumberValueAccessor, DefaultValueAccessor, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatTooltip, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';
import { MatFormField } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';

function TooltipAutoHideExample_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var positionOption_r2 = ctx.$implicit;
    ɵɵproperty("value", positionOption_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", positionOption_r2, " ");
} }
/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
var TooltipAutoHideExample = /** @class */ (function () {
    function TooltipAutoHideExample() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
    TooltipAutoHideExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-auto-hide-example',
                    templateUrl: 'tooltip-auto-hide-example.html',
                    styleUrls: ['tooltip-auto-hide-example.css'],
                },] },
    ];
    TooltipAutoHideExample.ɵfac = function TooltipAutoHideExample_Factory(t) { return new (t || TooltipAutoHideExample)(); };
    TooltipAutoHideExample.ɵcmp = ɵɵdefineComponent({ type: TooltipAutoHideExample, selectors: [["tooltip-auto-hide-example"]], decls: 7, vars: 3, consts: [["placeholder", "Tooltip position", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["cdk-scrollable", "", 1, "example-container"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipHideDelay", "100000", "aria-label", "Button that displays a tooltip that hides when scrolled out of the container", 1, "example-button", 3, "matTooltipPosition"], ["tooltip", "matTooltip"], [3, "value"]], template: function TooltipAutoHideExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-select", 0);
            ɵɵtemplate(2, TooltipAutoHideExample_mat_option_2_Template, 2, 2, "mat-option", 1);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(3, "div", 2);
            ɵɵelementStart(4, "button", 3, 4);
            ɵɵtext(6, " Action ");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("formControl", ctx.position);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.positionOptions);
            ɵɵadvance(2);
            ɵɵproperty("matTooltipPosition", ctx.position.value);
        } }, directives: [MatFormField, MatSelect, NgControlStatus, FormControlDirective, NgForOf, MatButton, MatTooltip, MatOption], styles: [".example-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}"] });
    return TooltipAutoHideExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipAutoHideExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-auto-hide-example',
                templateUrl: 'tooltip-auto-hide-example.html',
                styleUrls: ['tooltip-auto-hide-example.css'],
            }]
    }], null, null); })();

/**
 * @title Tooltip that can have a custom class applied.
 */
var TooltipCustomClassExample = /** @class */ (function () {
    function TooltipCustomClassExample() {
    }
    TooltipCustomClassExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-custom-class-example',
                    templateUrl: 'tooltip-custom-class-example.html',
                    styleUrls: ['tooltip-custom-class-example.css'],
                    // Need to remove view encapsulation so that the custom tooltip style defined in
                    // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    TooltipCustomClassExample.ɵfac = function TooltipCustomClassExample_Factory(t) { return new (t || TooltipCustomClassExample)(); };
    TooltipCustomClassExample.ɵcmp = ɵɵdefineComponent({ type: TooltipCustomClassExample, selectors: [["tooltip-custom-class-example"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipClass", "example-tooltip-red", "aria-label", "Button that shows a red tooltip", 1, "example-button"]], template: function TooltipCustomClassExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵtext(1, " Red-tooltip Action\n");
            ɵɵelementEnd();
        } }, directives: [MatButton, MatTooltip], styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"], encapsulation: 2 });
    return TooltipCustomClassExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipCustomClassExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-custom-class-example',
                templateUrl: 'tooltip-custom-class-example.html',
                styleUrls: ['tooltip-custom-class-example.css'],
                // Need to remove view encapsulation so that the custom tooltip style defined in
                // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

/**
 * @title Tooltip with a show and hide delay
 */
var TooltipDelayExample = /** @class */ (function () {
    function TooltipDelayExample() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
    TooltipDelayExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-delay-example',
                    templateUrl: 'tooltip-delay-example.html',
                    styleUrls: ['tooltip-delay-example.css'],
                },] },
    ];
    TooltipDelayExample.ɵfac = function TooltipDelayExample_Factory(t) { return new (t || TooltipDelayExample)(); };
    TooltipDelayExample.ɵcmp = ɵɵdefineComponent({ type: TooltipDelayExample, selectors: [["tooltip-delay-example"]], decls: 6, vars: 4, consts: [[1, "example-user-input"], ["matInput", "", "placeholder", "Show delay (milliseconds)", "type", "number", "aria-label", "Adds a delay between hovering over the button and displaying the tooltip", 3, "formControl"], ["matInput", "", "placeholder", "Hide delay (milliseconds)", "type", "number", "aria-label", "Adds a delay between hovering away from the button and hiding the tooltip", 3, "formControl"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip with a customized delay in showing and hiding", 3, "matTooltipShowDelay", "matTooltipHideDelay"]], template: function TooltipDelayExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelement(1, "input", 1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-form-field", 0);
            ɵɵelement(3, "input", 2);
            ɵɵelementEnd();
            ɵɵelementStart(4, "button", 3);
            ɵɵtext(5, " Action\n");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("formControl", ctx.showDelay);
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.hideDelay);
            ɵɵadvance(1);
            ɵɵproperty("matTooltipShowDelay", ctx.showDelay.value)("matTooltipHideDelay", ctx.hideDelay.value);
        } }, directives: [MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatButton, MatTooltip], styles: [".example-user-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n}"] });
    return TooltipDelayExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipDelayExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-delay-example',
                templateUrl: 'tooltip-delay-example.html',
                styleUrls: ['tooltip-delay-example.css'],
            }]
    }], null, null); })();

/**
 * @title Tooltip that can be disabled
 */
var TooltipDisabledExample = /** @class */ (function () {
    function TooltipDisabledExample() {
        this.disabled = new FormControl(false);
    }
    TooltipDisabledExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-disabled-example',
                    templateUrl: 'tooltip-disabled-example.html',
                    styleUrls: ['tooltip-disabled-example.css'],
                },] },
    ];
    TooltipDisabledExample.ɵfac = function TooltipDisabledExample_Factory(t) { return new (t || TooltipDisabledExample)(); };
    TooltipDisabledExample.ɵcmp = ɵɵdefineComponent({ type: TooltipDisabledExample, selectors: [["tooltip-disabled-example"]], decls: 4, vars: 2, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip that can be programatically disabled", 3, "matTooltipDisabled"], [1, "example-disabled-checkbox", 3, "formControl"]], template: function TooltipDisabledExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵtext(1, " Action\n");
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-checkbox", 1);
            ɵɵtext(3, " Tooltip disabled\n");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("matTooltipDisabled", ctx.disabled.value);
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.disabled);
        } }, directives: [MatButton, MatTooltip, MatCheckbox, NgControlStatus, FormControlDirective], styles: [".example-disabled-checkbox[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return TooltipDisabledExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipDisabledExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-disabled-example',
                templateUrl: 'tooltip-disabled-example.html',
                styleUrls: ['tooltip-disabled-example.css'],
            }]
    }], null, null); })();

/**
 * @title Tooltip that can be manually shown/hidden.
 */
var TooltipManualExample = /** @class */ (function () {
    function TooltipManualExample() {
    }
    TooltipManualExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-manual-example',
                    templateUrl: 'tooltip-manual-example.html',
                    styleUrls: ['tooltip-manual-example.css'],
                },] },
    ];
    TooltipManualExample.ɵfac = function TooltipManualExample_Factory(t) { return new (t || TooltipManualExample)(); };
    TooltipManualExample.ɵcmp = ɵɵdefineComponent({ type: TooltipManualExample, selectors: [["tooltip-manual-example"]], decls: 12, vars: 0, consts: [["mat-button", "", "aria-label", "Show tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Show/Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipPosition", "right", "aria-tooltip", "Button that displays and hides a tooltip triggered by other buttons"], ["tooltip", "matTooltip"]], template: function TooltipManualExample_Template(rf, ctx) { if (rf & 1) {
            var _r4 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "div");
            ɵɵelementStart(1, "span");
            ɵɵtext(2, " Click the following buttons to... ");
            ɵɵelementEnd();
            ɵɵelementStart(3, "button", 0);
            ɵɵlistener("click", function TooltipManualExample_Template_button_click_3_listener($event) { ɵɵrestoreView(_r4); var _r3 = ɵɵreference(10); return _r3.show(); });
            ɵɵtext(4, " show ");
            ɵɵelementEnd();
            ɵɵelementStart(5, "button", 1);
            ɵɵlistener("click", function TooltipManualExample_Template_button_click_5_listener($event) { ɵɵrestoreView(_r4); var _r3 = ɵɵreference(10); return _r3.hide(); });
            ɵɵtext(6, " hide ");
            ɵɵelementEnd();
            ɵɵelementStart(7, "button", 2);
            ɵɵlistener("click", function TooltipManualExample_Template_button_click_7_listener($event) { ɵɵrestoreView(_r4); var _r3 = ɵɵreference(10); return _r3.toggle(); });
            ɵɵtext(8, " toggle show/hide ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "button", 3, 4);
            ɵɵtext(11, " Action\n");
            ɵɵelementEnd();
        } }, directives: [MatButton, MatTooltip], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    return TooltipManualExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipManualExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-manual-example',
                templateUrl: 'tooltip-manual-example.html',
                styleUrls: ['tooltip-manual-example.css'],
            }]
    }], null, null); })();

/**
 * @title Tooltip with a changing message
 */
var TooltipMessageExample = /** @class */ (function () {
    function TooltipMessageExample() {
        this.message = new FormControl('Info about the action');
    }
    TooltipMessageExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-message-example',
                    templateUrl: 'tooltip-message-example.html',
                    styleUrls: ['tooltip-message-example.css'],
                },] },
    ];
    TooltipMessageExample.ɵfac = function TooltipMessageExample_Factory(t) { return new (t || TooltipMessageExample)(); };
    TooltipMessageExample.ɵcmp = ɵɵdefineComponent({ type: TooltipMessageExample, selectors: [["tooltip-message-example"]], decls: 4, vars: 2, consts: [[1, "example-user-input"], ["matInput", "", "placeholder", "Tooltip message", 3, "formControl"], ["mat-raised-button", "", "aria-label", "Button that displays a tooltip with a custom message", 3, "matTooltip"]], template: function TooltipMessageExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelement(1, "input", 1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "button", 2);
            ɵɵtext(3, " Action\n");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("formControl", ctx.message);
            ɵɵadvance(1);
            ɵɵproperty("matTooltip", ctx.message.value);
        } }, directives: [MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatButton, MatTooltip], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return TooltipMessageExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipMessageExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-message-example',
                templateUrl: 'tooltip-message-example.html',
                styleUrls: ['tooltip-message-example.css'],
            }]
    }], null, null); })();

/** Custom options the configure the tooltip's default show/hide delays. */
var myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * @title Tooltip with a show and hide delay
 */
var TooltipModifiedDefaultsExample = /** @class */ (function () {
    function TooltipModifiedDefaultsExample() {
    }
    TooltipModifiedDefaultsExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-modified-defaults-example',
                    templateUrl: 'tooltip-modified-defaults-example.html',
                    styleUrls: ['tooltip-modified-defaults-example.css'],
                    providers: [
                        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                    ],
                },] },
    ];
    TooltipModifiedDefaultsExample.ɵfac = function TooltipModifiedDefaultsExample_Factory(t) { return new (t || TooltipModifiedDefaultsExample)(); };
    TooltipModifiedDefaultsExample.ɵcmp = ɵɵdefineComponent({ type: TooltipModifiedDefaultsExample, selectors: [["tooltip-modified-defaults-example"]], features: [ɵɵProvidersFeature([
                { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
            ])], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "By default, I delay", "aria-label", "Button that displays a tooltip that has custom delays through a default config"]], template: function TooltipModifiedDefaultsExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵtext(1, " Button with delay-default tooltip\n");
            ɵɵelementEnd();
        } }, directives: [MatButton, MatTooltip], styles: [""] });
    return TooltipModifiedDefaultsExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipModifiedDefaultsExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-modified-defaults-example',
                templateUrl: 'tooltip-modified-defaults-example.html',
                styleUrls: ['tooltip-modified-defaults-example.css'],
                providers: [
                    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                ],
            }]
    }], null, null); })();

/**
 * @title Basic tooltip
 */
var TooltipOverviewExample = /** @class */ (function () {
    function TooltipOverviewExample() {
    }
    TooltipOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-overview-example',
                    templateUrl: 'tooltip-overview-example.html',
                    styleUrls: ['tooltip-overview-example.css'],
                },] },
    ];
    TooltipOverviewExample.ɵfac = function TooltipOverviewExample_Factory(t) { return new (t || TooltipOverviewExample)(); };
    TooltipOverviewExample.ɵcmp = ɵɵdefineComponent({ type: TooltipOverviewExample, selectors: [["tooltip-overview-example"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip when focused or hovered over"]], template: function TooltipOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵtext(1, " Action\n");
            ɵɵelementEnd();
        } }, directives: [MatButton, MatTooltip], styles: [""] });
    return TooltipOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-overview-example',
                templateUrl: 'tooltip-overview-example.html',
                styleUrls: ['tooltip-overview-example.css'],
            }]
    }], null, null); })();

function TooltipPositionExample_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var positionOption_r6 = ctx.$implicit;
    ɵɵproperty("value", positionOption_r6);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", positionOption_r6, " ");
} }
/**
 * @title Tooltip with a custom position
 */
var TooltipPositionExample = /** @class */ (function () {
    function TooltipPositionExample() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
    TooltipPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-position-example',
                    templateUrl: 'tooltip-position-example.html',
                    styleUrls: ['tooltip-position-example.css'],
                },] },
    ];
    TooltipPositionExample.ɵfac = function TooltipPositionExample_Factory(t) { return new (t || TooltipPositionExample)(); };
    TooltipPositionExample.ɵcmp = ɵɵdefineComponent({ type: TooltipPositionExample, selectors: [["tooltip-position-example"]], decls: 5, vars: 3, consts: [[1, "example-user-input"], ["placeholder", "Tooltip position", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip in various positions", 3, "matTooltipPosition"], [3, "value"]], template: function TooltipPositionExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelementStart(1, "mat-select", 1);
            ɵɵtemplate(2, TooltipPositionExample_mat_option_2_Template, 2, 2, "mat-option", 2);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(3, "button", 3);
            ɵɵtext(4, " Action\n");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("formControl", ctx.position);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.positionOptions);
            ɵɵadvance(1);
            ɵɵproperty("matTooltipPosition", ctx.position.value);
        } }, directives: [MatFormField, MatSelect, NgControlStatus, FormControlDirective, NgForOf, MatButton, MatTooltip, MatOption], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return TooltipPositionExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipPositionExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-position-example',
                templateUrl: 'tooltip-position-example.html',
                styleUrls: ['tooltip-position-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    TooltipAutoHideExample,
    TooltipCustomClassExample,
    TooltipDelayExample,
    TooltipDisabledExample,
    TooltipManualExample,
    TooltipMessageExample,
    TooltipModifiedDefaultsExample,
    TooltipOverviewExample,
    TooltipPositionExample,
];
var TooltipExamplesModule = /** @class */ (function () {
    function TooltipExamplesModule() {
    }
    TooltipExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSelectModule,
                        MatTooltipModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    TooltipExamplesModule.ɵmod = ɵɵdefineNgModule({ type: TooltipExamplesModule });
    TooltipExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function TooltipExamplesModule_Factory(t) { return new (t || TooltipExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatCheckboxModule,
                MatInputModule,
                MatSelectModule,
                MatTooltipModule,
                ReactiveFormsModule,
            ]] });
    return TooltipExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TooltipExamplesModule, { declarations: [TooltipAutoHideExample,
        TooltipCustomClassExample,
        TooltipDelayExample,
        TooltipDisabledExample,
        TooltipManualExample,
        TooltipMessageExample,
        TooltipModifiedDefaultsExample,
        TooltipOverviewExample,
        TooltipPositionExample], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        ReactiveFormsModule], exports: [TooltipAutoHideExample,
        TooltipCustomClassExample,
        TooltipDelayExample,
        TooltipDisabledExample,
        TooltipManualExample,
        TooltipMessageExample,
        TooltipModifiedDefaultsExample,
        TooltipOverviewExample,
        TooltipPositionExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatInputModule,
                    MatSelectModule,
                    MatTooltipModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { TooltipAutoHideExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipExamplesModule, TooltipManualExample, TooltipMessageExample, TooltipModifiedDefaultsExample, TooltipOverviewExample, TooltipPositionExample };
//# sourceMappingURL=tooltip.js.map
