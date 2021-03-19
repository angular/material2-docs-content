(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/cdk/scrolling'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/tooltip'), require('@angular/material/form-field'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/tooltip', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/cdk/scrolling', '@angular/material/button', '@angular/material/checkbox', '@angular/material/input', '@angular/material/select', '@angular/material/tooltip', '@angular/material/form-field', '@angular/material/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.tooltip = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.cdk.scrolling, global.ng.material.button, global.ng.material.checkbox, global.ng.material.input, global.ng.material.select, global.ng.material.tooltip, global.ng.material.formField, global.ng.material.core));
}(this, (function (exports, i4, i0, i3, i5, i1$1, i3$1, i2$2, i2, i2$1, i1, i8) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i2__namespace$2 = /*#__PURE__*/_interopNamespace(i2$2);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);

    function TooltipAutoHideExample_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var positionOption_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", positionOption_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", positionOption_r2, " ");
        }
    }
    /**
     * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
     */
    var TooltipAutoHideExample = /** @class */ (function () {
        function TooltipAutoHideExample() {
            this.positionOptions = ['below', 'above', 'left', 'right'];
            this.position = new i3.FormControl(this.positionOptions[0]);
        }
        return TooltipAutoHideExample;
    }());
    TooltipAutoHideExample.ɵfac = function TooltipAutoHideExample_Factory(t) { return new (t || TooltipAutoHideExample)(); };
    TooltipAutoHideExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipAutoHideExample, selectors: [["tooltip-auto-hide-example"]], decls: 9, vars: 3, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["cdkScrollable", "", 1, "example-container"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipHideDelay", "100000", "aria-label", "Button that displays a tooltip that hides when scrolled out of the container", 1, "example-button", 3, "matTooltipPosition"], ["tooltip", "matTooltip"], [3, "value"]], template: function TooltipAutoHideExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field");
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Tooltip position");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-select", 0);
                i0__namespace.ɵɵtemplate(4, TooltipAutoHideExample_mat_option_4_Template, 2, 2, "mat-option", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "div", 2);
                i0__namespace.ɵɵelementStart(6, "button", 3, 4);
                i0__namespace.ɵɵtext(8, " Action ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formControl", ctx.position);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.positionOptions);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matTooltipPosition", ctx.position.value);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatSelect, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective, i4__namespace.NgForOf, i5__namespace.CdkScrollable, i1__namespace$1.MatButton, i2__namespace$1.MatTooltip, i8__namespace.MatOption], styles: [".example-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipAutoHideExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-auto-hide-example',
                        templateUrl: 'tooltip-auto-hide-example.html',
                        styleUrls: ['tooltip-auto-hide-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Tooltip that can have a custom class applied.
     */
    var TooltipCustomClassExample = /** @class */ (function () {
        function TooltipCustomClassExample() {
        }
        return TooltipCustomClassExample;
    }());
    TooltipCustomClassExample.ɵfac = function TooltipCustomClassExample_Factory(t) { return new (t || TooltipCustomClassExample)(); };
    TooltipCustomClassExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipCustomClassExample, selectors: [["tooltip-custom-class-example"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipClass", "example-tooltip-red", "aria-label", "Button that shows a red tooltip", 1, "example-button"]], template: function TooltipCustomClassExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, " Red-tooltip Action\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace$1.MatButton, i2__namespace$1.MatTooltip], styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipCustomClassExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-custom-class-example',
                        templateUrl: 'tooltip-custom-class-example.html',
                        styleUrls: ['tooltip-custom-class-example.css'],
                        // Need to remove view encapsulation so that the custom tooltip style defined in
                        // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, null);
    })();

    /**
     * @title Tooltip with a show and hide delay
     */
    var TooltipDelayExample = /** @class */ (function () {
        function TooltipDelayExample() {
            this.showDelay = new i3.FormControl(1000);
            this.hideDelay = new i3.FormControl(2000);
        }
        return TooltipDelayExample;
    }());
    TooltipDelayExample.ɵfac = function TooltipDelayExample_Factory(t) { return new (t || TooltipDelayExample)(); };
    TooltipDelayExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipDelayExample, selectors: [["tooltip-delay-example"]], decls: 14, vars: 4, consts: [[1, "example-user-input"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering over the button and displaying the tooltip", 3, "formControl"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering away from the button and hiding the tooltip", 3, "formControl"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip with a customized delay in showing and hiding", 3, "matTooltipShowDelay", "matTooltipHideDelay"]], template: function TooltipDelayExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Show delay");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelementStart(4, "mat-hint");
                i0__namespace.ɵɵtext(5, "milliseconds");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(7, "mat-label");
                i0__namespace.ɵɵtext(8, "Hide delay");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(9, "input", 2);
                i0__namespace.ɵɵelementStart(10, "mat-hint");
                i0__namespace.ɵɵtext(11, "milliseconds");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "button", 3);
                i0__namespace.ɵɵtext(13, " Action\n");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formControl", ctx.showDelay);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("formControl", ctx.hideDelay);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matTooltipShowDelay", ctx.showDelay.value)("matTooltipHideDelay", ctx.hideDelay.value);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace$2.MatInput, i3__namespace.NumberValueAccessor, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective, i1__namespace.MatHint, i1__namespace$1.MatButton, i2__namespace$1.MatTooltip], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipDelayExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-delay-example',
                        templateUrl: 'tooltip-delay-example.html',
                        styleUrls: ['tooltip-delay-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Tooltip that can be disabled
     */
    var TooltipDisabledExample = /** @class */ (function () {
        function TooltipDisabledExample() {
            this.disabled = new i3.FormControl(false);
        }
        return TooltipDisabledExample;
    }());
    TooltipDisabledExample.ɵfac = function TooltipDisabledExample_Factory(t) { return new (t || TooltipDisabledExample)(); };
    TooltipDisabledExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipDisabledExample, selectors: [["tooltip-disabled-example"]], decls: 4, vars: 2, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip that can be programmatically disabled", 3, "matTooltipDisabled"], [1, "example-disabled-checkbox", 3, "formControl"]], template: function TooltipDisabledExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, " Action\n");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-checkbox", 1);
                i0__namespace.ɵɵtext(3, " Tooltip disabled\n");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("matTooltipDisabled", ctx.disabled.value);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("formControl", ctx.disabled);
            }
        }, directives: [i1__namespace$1.MatButton, i2__namespace$1.MatTooltip, i3__namespace$1.MatCheckbox, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective], styles: [".example-disabled-checkbox[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipDisabledExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-disabled-example',
                        templateUrl: 'tooltip-disabled-example.html',
                        styleUrls: ['tooltip-disabled-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Tooltip that can be manually shown/hidden.
     */
    var TooltipManualExample = /** @class */ (function () {
        function TooltipManualExample() {
        }
        return TooltipManualExample;
    }());
    TooltipManualExample.ɵfac = function TooltipManualExample_Factory(t) { return new (t || TooltipManualExample)(); };
    TooltipManualExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipManualExample, selectors: [["tooltip-manual-example"]], decls: 12, vars: 0, consts: [["mat-button", "", "aria-label", "Show tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Show/Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipPosition", "right", "aria-tooltip", "Button that displays and hides a tooltip triggered by other buttons"], ["tooltip", "matTooltip"]], template: function TooltipManualExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "div");
                i0__namespace.ɵɵelementStart(1, "span");
                i0__namespace.ɵɵtext(2, " Click the following buttons to... ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "button", 0);
                i0__namespace.ɵɵlistener("click", function TooltipManualExample_Template_button_click_3_listener() { i0__namespace.ɵɵrestoreView(_r1_1); var _r0 = i0__namespace.ɵɵreference(10); return _r0.show(); });
                i0__namespace.ɵɵtext(4, " show ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "button", 1);
                i0__namespace.ɵɵlistener("click", function TooltipManualExample_Template_button_click_5_listener() { i0__namespace.ɵɵrestoreView(_r1_1); var _r0 = i0__namespace.ɵɵreference(10); return _r0.hide(); });
                i0__namespace.ɵɵtext(6, " hide ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "button", 2);
                i0__namespace.ɵɵlistener("click", function TooltipManualExample_Template_button_click_7_listener() { i0__namespace.ɵɵrestoreView(_r1_1); var _r0 = i0__namespace.ɵɵreference(10); return _r0.toggle(); });
                i0__namespace.ɵɵtext(8, " toggle show/hide ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "button", 3, 4);
                i0__namespace.ɵɵtext(11, " Action\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace$1.MatButton, i2__namespace$1.MatTooltip], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipManualExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-manual-example',
                        templateUrl: 'tooltip-manual-example.html',
                        styleUrls: ['tooltip-manual-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Tooltip with a changing message
     */
    var TooltipMessageExample = /** @class */ (function () {
        function TooltipMessageExample() {
            this.message = new i3.FormControl('Info about the action');
        }
        return TooltipMessageExample;
    }());
    TooltipMessageExample.ɵfac = function TooltipMessageExample_Factory(t) { return new (t || TooltipMessageExample)(); };
    TooltipMessageExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipMessageExample, selectors: [["tooltip-message-example"]], decls: 6, vars: 2, consts: [[1, "example-user-input"], ["matInput", "", 3, "formControl"], ["mat-raised-button", "", "aria-label", "Button that displays a tooltip with a custom message", 3, "matTooltip"]], template: function TooltipMessageExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Tooltip message");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "button", 2);
                i0__namespace.ɵɵtext(5, " Action\n");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formControl", ctx.message);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matTooltip", ctx.message.value);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace$2.MatInput, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective, i1__namespace$1.MatButton, i2__namespace$1.MatTooltip], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipMessageExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-message-example',
                        templateUrl: 'tooltip-message-example.html',
                        styleUrls: ['tooltip-message-example.css'],
                    }]
            }], null, null);
    })();

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
        return TooltipModifiedDefaultsExample;
    }());
    TooltipModifiedDefaultsExample.ɵfac = function TooltipModifiedDefaultsExample_Factory(t) { return new (t || TooltipModifiedDefaultsExample)(); };
    TooltipModifiedDefaultsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipModifiedDefaultsExample, selectors: [["tooltip-modified-defaults-example"]], features: [i0__namespace.ɵɵProvidersFeature([
                { provide: i2$1.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
            ])], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "By default, I delay", "aria-label", "Button that displays a tooltip that has custom delays through a default config"]], template: function TooltipModifiedDefaultsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, " Button with delay-default tooltip\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace$1.MatButton, i2__namespace$1.MatTooltip], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipModifiedDefaultsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-modified-defaults-example',
                        templateUrl: 'tooltip-modified-defaults-example.html',
                        providers: [
                            { provide: i2$1.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                        ],
                    }]
            }], null, null);
    })();

    /**
     * @title Basic tooltip
     */
    var TooltipOverviewExample = /** @class */ (function () {
        function TooltipOverviewExample() {
        }
        return TooltipOverviewExample;
    }());
    TooltipOverviewExample.ɵfac = function TooltipOverviewExample_Factory(t) { return new (t || TooltipOverviewExample)(); };
    TooltipOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipOverviewExample, selectors: [["tooltip-overview-example"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip when focused or hovered over"]], template: function TooltipOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, " Action\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace$1.MatButton, i2__namespace$1.MatTooltip], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-overview-example',
                        templateUrl: 'tooltip-overview-example.html',
                    }]
            }], null, null);
    })();

    function TooltipPositionExample_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 4);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var positionOption_r1 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", positionOption_r1);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", positionOption_r1, " ");
        }
    }
    /**
     * @title Tooltip with a custom position
     */
    var TooltipPositionExample = /** @class */ (function () {
        function TooltipPositionExample() {
            this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
            this.position = new i3.FormControl(this.positionOptions[0]);
        }
        return TooltipPositionExample;
    }());
    TooltipPositionExample.ɵfac = function TooltipPositionExample_Factory(t) { return new (t || TooltipPositionExample)(); };
    TooltipPositionExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipPositionExample, selectors: [["tooltip-position-example"]], decls: 7, vars: 3, consts: [[1, "example-user-input"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip in various positions", 3, "matTooltipPosition"], [3, "value"]], template: function TooltipPositionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Tooltip position");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-select", 1);
                i0__namespace.ɵɵtemplate(4, TooltipPositionExample_mat_option_4_Template, 2, 2, "mat-option", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "button", 3);
                i0__namespace.ɵɵtext(6, " Action\n");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formControl", ctx.position);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.positionOptions);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matTooltipPosition", ctx.position.value);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatSelect, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective, i4__namespace.NgForOf, i1__namespace$1.MatButton, i2__namespace$1.MatTooltip, i8__namespace.MatOption], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipPositionExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-position-example',
                        templateUrl: 'tooltip-position-example.html',
                        styleUrls: ['tooltip-position-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatTooltipHarness
     */
    var TooltipHarnessExample = /** @class */ (function () {
        function TooltipHarnessExample() {
            this.message = 'Tooltip message';
        }
        return TooltipHarnessExample;
    }());
    TooltipHarnessExample.ɵfac = function TooltipHarnessExample_Factory(t) { return new (t || TooltipHarnessExample)(); };
    TooltipHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TooltipHarnessExample, selectors: [["tooltip-harness-example"]], decls: 4, vars: 1, consts: [["id", "one", 3, "matTooltip"], ["matTooltip", "Static message", "id", "two"]], template: function TooltipHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, "Trigger 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "button", 1);
                i0__namespace.ɵɵtext(3, "Trigger 2");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("matTooltip", ctx.message);
            }
        }, directives: [i2__namespace$1.MatTooltip], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-harness-example',
                        templateUrl: 'tooltip-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        TooltipAutoHideExample,
        TooltipCustomClassExample,
        TooltipDelayExample,
        TooltipDisabledExample,
        TooltipHarnessExample,
        TooltipManualExample,
        TooltipMessageExample,
        TooltipModifiedDefaultsExample,
        TooltipOverviewExample,
        TooltipPositionExample,
    ];
    var TooltipExamplesModule = /** @class */ (function () {
        function TooltipExamplesModule() {
        }
        return TooltipExamplesModule;
    }());
    TooltipExamplesModule.ɵfac = function TooltipExamplesModule_Factory(t) { return new (t || TooltipExamplesModule)(); };
    TooltipExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: TooltipExamplesModule });
    TooltipExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i1$1.MatButtonModule,
                i3$1.MatCheckboxModule,
                i2$2.MatInputModule,
                i2.MatSelectModule,
                i2$1.MatTooltipModule,
                i3.ReactiveFormsModule,
                i5.ScrollingModule, // Required for the auto-scrolling example
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TooltipExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1$1.MatButtonModule,
                            i3$1.MatCheckboxModule,
                            i2$2.MatInputModule,
                            i2.MatSelectModule,
                            i2$1.MatTooltipModule,
                            i3.ReactiveFormsModule,
                            i5.ScrollingModule, // Required for the auto-scrolling example
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(TooltipExamplesModule, { declarations: [TooltipAutoHideExample,
                TooltipCustomClassExample,
                TooltipDelayExample,
                TooltipDisabledExample,
                TooltipHarnessExample,
                TooltipManualExample,
                TooltipMessageExample,
                TooltipModifiedDefaultsExample,
                TooltipOverviewExample,
                TooltipPositionExample], imports: [i4.CommonModule,
                i1$1.MatButtonModule,
                i3$1.MatCheckboxModule,
                i2$2.MatInputModule,
                i2.MatSelectModule,
                i2$1.MatTooltipModule,
                i3.ReactiveFormsModule,
                i5.ScrollingModule], exports: [TooltipAutoHideExample,
                TooltipCustomClassExample,
                TooltipDelayExample,
                TooltipDisabledExample,
                TooltipHarnessExample,
                TooltipManualExample,
                TooltipMessageExample,
                TooltipModifiedDefaultsExample,
                TooltipOverviewExample,
                TooltipPositionExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TooltipAutoHideExample = TooltipAutoHideExample;
    exports.TooltipCustomClassExample = TooltipCustomClassExample;
    exports.TooltipDelayExample = TooltipDelayExample;
    exports.TooltipDisabledExample = TooltipDisabledExample;
    exports.TooltipExamplesModule = TooltipExamplesModule;
    exports.TooltipHarnessExample = TooltipHarnessExample;
    exports.TooltipManualExample = TooltipManualExample;
    exports.TooltipMessageExample = TooltipMessageExample;
    exports.TooltipModifiedDefaultsExample = TooltipModifiedDefaultsExample;
    exports.TooltipOverviewExample = TooltipOverviewExample;
    exports.TooltipPositionExample = TooltipPositionExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-tooltip.umd.js.map
