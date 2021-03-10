(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/cdk/scrolling'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/tooltip'), require('@angular/material/form-field'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/tooltip', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/cdk/scrolling', '@angular/material/button', '@angular/material/checkbox', '@angular/material/input', '@angular/material/select', '@angular/material/tooltip', '@angular/material/form-field', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.tooltip = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.cdk.scrolling, global.ng.material.button, global.ng.material.checkbox, global.ng.material.input, global.ng.material.select, global.ng.material.tooltip, global.ng.material.formField, global.ng.material.core));
}(this, (function (exports, i4, i0, i3, i5, i1, i3$1, i2, i2$1, i2$2, i1$1, i8) { 'use strict';

    function TooltipAutoHideExample_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var positionOption_r2 = ctx.$implicit;
            i0.ɵɵproperty("value", positionOption_r2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", positionOption_r2, " ");
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
    TooltipAutoHideExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipAutoHideExample, selectors: [["tooltip-auto-hide-example"]], decls: 9, vars: 3, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["cdkScrollable", "", 1, "example-container"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipHideDelay", "100000", "aria-label", "Button that displays a tooltip that hides when scrolled out of the container", 1, "example-button", 3, "matTooltipPosition"], ["tooltip", "matTooltip"], [3, "value"]], template: function TooltipAutoHideExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Tooltip position");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-select", 0);
                i0.ɵɵtemplate(4, TooltipAutoHideExample_mat_option_4_Template, 2, 2, "mat-option", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 2);
                i0.ɵɵelementStart(6, "button", 3, 4);
                i0.ɵɵtext(8, " Action ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formControl", ctx.position);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.positionOptions);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matTooltipPosition", ctx.position.value);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2$1.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i5.CdkScrollable, i1.MatButton, i2$2.MatTooltip, i8.MatOption], styles: [".example-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipAutoHideExample, [{
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
    TooltipCustomClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipCustomClassExample, selectors: [["tooltip-custom-class-example"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipClass", "example-tooltip-red", "aria-label", "Button that shows a red tooltip", 1, "example-button"]], template: function TooltipCustomClassExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, " Red-tooltip Action\n");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatButton, i2$2.MatTooltip], styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipCustomClassExample, [{
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
    TooltipDelayExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipDelayExample, selectors: [["tooltip-delay-example"]], decls: 14, vars: 4, consts: [[1, "example-user-input"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering over the button and displaying the tooltip", 3, "formControl"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering away from the button and hiding the tooltip", 3, "formControl"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip with a customized delay in showing and hiding", 3, "matTooltipShowDelay", "matTooltipHideDelay"]], template: function TooltipDelayExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Show delay");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelementStart(4, "mat-hint");
                i0.ɵɵtext(5, "milliseconds");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-form-field", 0);
                i0.ɵɵelementStart(7, "mat-label");
                i0.ɵɵtext(8, "Hide delay");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(9, "input", 2);
                i0.ɵɵelementStart(10, "mat-hint");
                i0.ɵɵtext(11, "milliseconds");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "button", 3);
                i0.ɵɵtext(13, " Action\n");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formControl", ctx.showDelay);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("formControl", ctx.hideDelay);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matTooltipShowDelay", ctx.showDelay.value)("matTooltipHideDelay", ctx.hideDelay.value);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1$1.MatHint, i1.MatButton, i2$2.MatTooltip], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDelayExample, [{
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
    TooltipDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipDisabledExample, selectors: [["tooltip-disabled-example"]], decls: 4, vars: 2, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip that can be programmatically disabled", 3, "matTooltipDisabled"], [1, "example-disabled-checkbox", 3, "formControl"]], template: function TooltipDisabledExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, " Action\n");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-checkbox", 1);
                i0.ɵɵtext(3, " Tooltip disabled\n");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("matTooltipDisabled", ctx.disabled.value);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("formControl", ctx.disabled);
            }
        }, directives: [i1.MatButton, i2$2.MatTooltip, i3$1.MatCheckbox, i3.NgControlStatus, i3.FormControlDirective], styles: [".example-disabled-checkbox[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDisabledExample, [{
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
    TooltipManualExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipManualExample, selectors: [["tooltip-manual-example"]], decls: 12, vars: 0, consts: [["mat-button", "", "aria-label", "Show tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Show/Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipPosition", "right", "aria-tooltip", "Button that displays and hides a tooltip triggered by other buttons"], ["tooltip", "matTooltip"]], template: function TooltipManualExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "span");
                i0.ɵɵtext(2, " Click the following buttons to... ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "button", 0);
                i0.ɵɵlistener("click", function TooltipManualExample_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1_1); var _r0 = i0.ɵɵreference(10); return _r0.show(); });
                i0.ɵɵtext(4, " show ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "button", 1);
                i0.ɵɵlistener("click", function TooltipManualExample_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1_1); var _r0 = i0.ɵɵreference(10); return _r0.hide(); });
                i0.ɵɵtext(6, " hide ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "button", 2);
                i0.ɵɵlistener("click", function TooltipManualExample_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1_1); var _r0 = i0.ɵɵreference(10); return _r0.toggle(); });
                i0.ɵɵtext(8, " toggle show/hide ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "button", 3, 4);
                i0.ɵɵtext(11, " Action\n");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatButton, i2$2.MatTooltip], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipManualExample, [{
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
    TooltipMessageExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipMessageExample, selectors: [["tooltip-message-example"]], decls: 6, vars: 2, consts: [[1, "example-user-input"], ["matInput", "", 3, "formControl"], ["mat-raised-button", "", "aria-label", "Button that displays a tooltip with a custom message", 3, "matTooltip"]], template: function TooltipMessageExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Tooltip message");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "button", 2);
                i0.ɵɵtext(5, " Action\n");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formControl", ctx.message);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matTooltip", ctx.message.value);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1.MatButton, i2$2.MatTooltip], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipMessageExample, [{
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
    TooltipModifiedDefaultsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipModifiedDefaultsExample, selectors: [["tooltip-modified-defaults-example"]], features: [i0.ɵɵProvidersFeature([
                { provide: i2$2.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
            ])], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "By default, I delay", "aria-label", "Button that displays a tooltip that has custom delays through a default config"]], template: function TooltipModifiedDefaultsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, " Button with delay-default tooltip\n");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatButton, i2$2.MatTooltip], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipModifiedDefaultsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-modified-defaults-example',
                        templateUrl: 'tooltip-modified-defaults-example.html',
                        providers: [
                            { provide: i2$2.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
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
    TooltipOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipOverviewExample, selectors: [["tooltip-overview-example"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip when focused or hovered over"]], template: function TooltipOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, " Action\n");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatButton, i2$2.MatTooltip], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'tooltip-overview-example',
                        templateUrl: 'tooltip-overview-example.html',
                    }]
            }], null, null);
    })();

    function TooltipPositionExample_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var positionOption_r1 = ctx.$implicit;
            i0.ɵɵproperty("value", positionOption_r1);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", positionOption_r1, " ");
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
    TooltipPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipPositionExample, selectors: [["tooltip-position-example"]], decls: 7, vars: 3, consts: [[1, "example-user-input"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip in various positions", 3, "matTooltipPosition"], [3, "value"]], template: function TooltipPositionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Tooltip position");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-select", 1);
                i0.ɵɵtemplate(4, TooltipPositionExample_mat_option_4_Template, 2, 2, "mat-option", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "button", 3);
                i0.ɵɵtext(6, " Action\n");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formControl", ctx.position);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.positionOptions);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matTooltipPosition", ctx.position.value);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2$1.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i1.MatButton, i2$2.MatTooltip, i8.MatOption], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipPositionExample, [{
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
    TooltipHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipHarnessExample, selectors: [["tooltip-harness-example"]], decls: 4, vars: 1, consts: [["id", "one", 3, "matTooltip"], ["matTooltip", "Static message", "id", "two"]], template: function TooltipHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, "Trigger 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "button", 1);
                i0.ɵɵtext(3, "Trigger 2");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("matTooltip", ctx.message);
            }
        }, directives: [i2$2.MatTooltip], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipHarnessExample, [{
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
    TooltipExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TooltipExamplesModule });
    TooltipExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TooltipExamplesModule_Factory(t) { return new (t || TooltipExamplesModule)(); }, imports: [[
                i4.CommonModule,
                i1.MatButtonModule,
                i3$1.MatCheckboxModule,
                i2.MatInputModule,
                i2$1.MatSelectModule,
                i2$2.MatTooltipModule,
                i3.ReactiveFormsModule,
                i5.ScrollingModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TooltipExamplesModule, { declarations: [TooltipAutoHideExample,
                TooltipCustomClassExample,
                TooltipDelayExample,
                TooltipDisabledExample,
                TooltipHarnessExample,
                TooltipManualExample,
                TooltipMessageExample,
                TooltipModifiedDefaultsExample,
                TooltipOverviewExample,
                TooltipPositionExample], imports: [i4.CommonModule,
                i1.MatButtonModule,
                i3$1.MatCheckboxModule,
                i2.MatInputModule,
                i2$1.MatSelectModule,
                i2$2.MatTooltipModule,
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
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.MatButtonModule,
                            i3$1.MatCheckboxModule,
                            i2.MatInputModule,
                            i2$1.MatSelectModule,
                            i2$2.MatTooltipModule,
                            i3.ReactiveFormsModule,
                            i5.ScrollingModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
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
