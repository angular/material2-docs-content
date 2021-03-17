(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/core'), require('@angular/material/input'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/core', ['exports', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/checkbox', '@angular/material/core', '@angular/material/input', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.core = {}), global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.checkbox, global.ng.material.core, global.ng.material.input, global.ng.material.formField));
}(this, (function (exports, i0, i2, i1, i1$1, i5, i4, i3) { 'use strict';

    /**
     * @title Elevation CSS classes
     */
    var ElevationOverviewExample = /** @class */ (function () {
        function ElevationOverviewExample() {
            this.isActive = false;
        }
        return ElevationOverviewExample;
    }());
    ElevationOverviewExample.ɵfac = function ElevationOverviewExample_Factory(t) { return new (t || ElevationOverviewExample)(); };
    ElevationOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ElevationOverviewExample, selectors: [["elevation-overview-example"]], decls: 4, vars: 4, consts: [[1, "example-container"], ["mat-button", "", 3, "click"]], template: function ElevationOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtext(1, " Example\n");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "button", 1);
                i0.ɵɵlistener("click", function ElevationOverviewExample_Template_button_click_2_listener() { return ctx.isActive = !ctx.isActive; });
                i0.ɵɵtext(3, "Toggle Elevation");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("mat-elevation-z2", !ctx.isActive)("mat-elevation-z8", ctx.isActive);
            }
        }, directives: [i1.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin-bottom: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElevationOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'elevation-overview-example',
                        styleUrls: ['elevation-overview-example.css'],
                        templateUrl: 'elevation-overview-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title MatRipple basic usage
     */
    var RippleOverviewExample = /** @class */ (function () {
        function RippleOverviewExample() {
            this.centered = false;
            this.disabled = false;
            this.unbounded = false;
        }
        return RippleOverviewExample;
    }());
    RippleOverviewExample.ɵfac = function RippleOverviewExample_Factory(t) { return new (t || RippleOverviewExample)(); };
    RippleOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RippleOverviewExample, selectors: [["ripple-overview-example"]], decls: 12, vars: 10, consts: [[1, "example-ripple-checkbox", 3, "ngModel", "ngModelChange"], [1, "example-ripple-form-field"], ["matInput", "", "type", "number", "placeholder", "Radius", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Color", 3, "ngModel", "ngModelChange"], ["matRipple", "", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "matRippleRadius", "matRippleColor"]], template: function RippleOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-checkbox", 0);
                i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_0_listener($event) { return ctx.centered = $event; });
                i0.ɵɵtext(1, "Centered");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-checkbox", 0);
                i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_2_listener($event) { return ctx.disabled = $event; });
                i0.ɵɵtext(3, "Disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-checkbox", 0);
                i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_4_listener($event) { return ctx.unbounded = $event; });
                i0.ɵɵtext(5, "Unbounded");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-form-field", 1);
                i0.ɵɵelementStart(7, "input", 2);
                i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_input_ngModelChange_7_listener($event) { return ctx.radius = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-form-field", 1);
                i0.ɵɵelementStart(9, "input", 3);
                i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_input_ngModelChange_9_listener($event) { return ctx.color = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 4);
                i0.ɵɵtext(11, " Click me\n");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngModel", ctx.centered);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.disabled);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.unbounded);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.radius);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.color);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRippleCentered", ctx.centered)("matRippleDisabled", ctx.disabled)("matRippleUnbounded", ctx.unbounded)("matRippleRadius", ctx.radius)("matRippleColor", ctx.color);
            }
        }, directives: [i1$1.MatCheckbox, i2.NgControlStatus, i2.NgModel, i3.MatFormField, i4.MatInput, i2.NumberValueAccessor, i2.DefaultValueAccessor, i5.MatRipple], styles: [".example-ripple-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n.example-ripple-checkbox[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field[_ngcontent-%COMP%] {\n  margin: 0 12px 0 0;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RippleOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'ripple-overview-example',
                        templateUrl: 'ripple-overview-example.html',
                        styleUrls: ['ripple-overview-example.css'],
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        ElevationOverviewExample,
        RippleOverviewExample,
    ];
    var CoreExamplesModule = /** @class */ (function () {
        function CoreExamplesModule() {
        }
        return CoreExamplesModule;
    }());
    CoreExamplesModule.ɵfac = function CoreExamplesModule_Factory(t) { return new (t || CoreExamplesModule)(); };
    CoreExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CoreExamplesModule });
    CoreExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
                i1.MatButtonModule,
                i1$1.MatCheckboxModule,
                i4.MatInputModule,
                i5.MatRippleModule,
                i2.FormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatButtonModule,
                            i1$1.MatCheckboxModule,
                            i4.MatInputModule,
                            i5.MatRippleModule,
                            i2.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreExamplesModule, { declarations: [ElevationOverviewExample,
                RippleOverviewExample], imports: [i1.MatButtonModule,
                i1$1.MatCheckboxModule,
                i4.MatInputModule,
                i5.MatRippleModule,
                i2.FormsModule], exports: [ElevationOverviewExample,
                RippleOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CoreExamplesModule = CoreExamplesModule;
    exports.ElevationOverviewExample = ElevationOverviewExample;
    exports.RippleOverviewExample = RippleOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-core.umd.js.map
