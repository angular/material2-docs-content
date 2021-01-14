import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵclassProp, ɵsetClassMetadata, Component, ɵɵproperty, ɵɵadvance, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgControlStatus, NgModel, NumberValueAccessor, DefaultValueAccessor, FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRipple, MatRippleModule } from '@angular/material/core';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

/**
 * @title Elevation CSS classes
 */
class ElevationOverviewExample {
    constructor() {
        this.isActive = false;
    }
}
ElevationOverviewExample.ɵfac = function ElevationOverviewExample_Factory(t) { return new (t || ElevationOverviewExample)(); };
ElevationOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ElevationOverviewExample, selectors: [["elevation-overview-example"]], decls: 4, vars: 4, consts: [[1, "example-container"], ["mat-button", "", 3, "click"]], template: function ElevationOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1, " Example\n");
        ɵɵelementEnd();
        ɵɵelementStart(2, "button", 1);
        ɵɵlistener("click", function ElevationOverviewExample_Template_button_click_2_listener() { return ctx.isActive = !ctx.isActive; });
        ɵɵtext(3, "Toggle Elevation");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("mat-elevation-z2", !ctx.isActive)("mat-elevation-z8", ctx.isActive);
    } }, directives: [MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin-bottom: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ElevationOverviewExample, [{
        type: Component,
        args: [{
                selector: 'elevation-overview-example',
                styleUrls: ['elevation-overview-example.css'],
                templateUrl: 'elevation-overview-example.html',
            }]
    }], null, null); })();

/**
 * @title MatRipple basic usage
 */
class RippleOverviewExample {
    constructor() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
}
RippleOverviewExample.ɵfac = function RippleOverviewExample_Factory(t) { return new (t || RippleOverviewExample)(); };
RippleOverviewExample.ɵcmp = ɵɵdefineComponent({ type: RippleOverviewExample, selectors: [["ripple-overview-example"]], decls: 12, vars: 10, consts: [[1, "example-ripple-checkbox", 3, "ngModel", "ngModelChange"], [1, "example-ripple-form-field"], ["matInput", "", "type", "number", "placeholder", "Radius", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Color", 3, "ngModel", "ngModelChange"], ["matRipple", "", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "matRippleRadius", "matRippleColor"]], template: function RippleOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-checkbox", 0);
        ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_0_listener($event) { return ctx.centered = $event; });
        ɵɵtext(1, "Centered");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-checkbox", 0);
        ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_2_listener($event) { return ctx.disabled = $event; });
        ɵɵtext(3, "Disabled");
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-checkbox", 0);
        ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_4_listener($event) { return ctx.unbounded = $event; });
        ɵɵtext(5, "Unbounded");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-form-field", 1);
        ɵɵelementStart(7, "input", 2);
        ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_input_ngModelChange_7_listener($event) { return ctx.radius = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-form-field", 1);
        ɵɵelementStart(9, "input", 3);
        ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_input_ngModelChange_9_listener($event) { return ctx.color = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 4);
        ɵɵtext(11, " Click me\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngModel", ctx.centered);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.disabled);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.unbounded);
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.radius);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.color);
        ɵɵadvance(1);
        ɵɵproperty("matRippleCentered", ctx.centered)("matRippleDisabled", ctx.disabled)("matRippleUnbounded", ctx.unbounded)("matRippleRadius", ctx.radius)("matRippleColor", ctx.color);
    } }, directives: [MatCheckbox, NgControlStatus, NgModel, MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, MatRipple], styles: [".example-ripple-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n.example-ripple-checkbox[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field[_ngcontent-%COMP%] {\n  margin: 0 12px 0 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RippleOverviewExample, [{
        type: Component,
        args: [{
                selector: 'ripple-overview-example',
                templateUrl: 'ripple-overview-example.html',
                styleUrls: ['ripple-overview-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [
    ElevationOverviewExample,
    RippleOverviewExample,
];
class CoreExamplesModule {
}
CoreExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CoreExamplesModule });
CoreExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CoreExamplesModule_Factory(t) { return new (t || CoreExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatRippleModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CoreExamplesModule, { declarations: [ElevationOverviewExample,
        RippleOverviewExample], imports: [MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatRippleModule,
        FormsModule], exports: [ElevationOverviewExample,
        RippleOverviewExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CoreExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatCheckboxModule,
                    MatInputModule,
                    MatRippleModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CoreExamplesModule, ElevationOverviewExample, RippleOverviewExample };
//# sourceMappingURL=core.js.map
