(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/tooltip')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/tooltip', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/checkbox', '@angular/material/input', '@angular/material/select', '@angular/material/tooltip'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.tooltip = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.checkbox, global.ng.material.input, global.ng.material.select, global.ng.material.tooltip));
}(this, function (exports, common, core, forms, button, checkbox, input, select, tooltip) { 'use strict';

    /**
     * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
     */
    var TooltipAutoHideExample = /** @class */ (function () {
        function TooltipAutoHideExample() {
            this.positionOptions = ['below', 'above', 'left', 'right'];
            this.position = new forms.FormControl(this.positionOptions[0]);
        }
        TooltipAutoHideExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tooltip-auto-hide-example',
                        template: "<mat-form-field>\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdk-scrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n",
                        styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"]
                    }] }
        ];
        return TooltipAutoHideExample;
    }());

    /**
     * @title Tooltip that can have a custom class applied.
     */
    var TooltipCustomClassExample = /** @class */ (function () {
        function TooltipCustomClassExample() {
        }
        TooltipCustomClassExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tooltip-custom-class-example',
                        template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-red\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Red-tooltip Action\n</button>\n",
                        // Need to remove view encapsulation so that the custom tooltip style defined in
                        // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"]
                    }] }
        ];
        return TooltipCustomClassExample;
    }());

    /**
     * @title Tooltip with a show and hide delay
     */
    var TooltipDelayExample = /** @class */ (function () {
        function TooltipDelayExample() {
            this.showDelay = new forms.FormControl(1000);
            this.hideDelay = new forms.FormControl(2000);
        }
        TooltipDelayExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tooltip-delay-example',
                        template: "<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Show delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\"\n         [formControl]=\"showDelay\">\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Hide delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\"\n         [formControl]=\"hideDelay\">\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n",
                        styles: [".example-user-input {\n  display: block;\n  width: 150px;\n}\n"]
                    }] }
        ];
        return TooltipDelayExample;
    }());

    /**
     * @title Tooltip that can be disabled
     */
    var TooltipDisabledExample = /** @class */ (function () {
        function TooltipDisabledExample() {
            this.disabled = new forms.FormControl(false);
        }
        TooltipDisabledExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tooltip-disabled-example',
                        template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n",
                        styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"]
                    }] }
        ];
        return TooltipDisabledExample;
    }());

    /**
     * @title Tooltip that can be manually shown/hidden.
     */
    var TooltipManualExample = /** @class */ (function () {
        function TooltipManualExample() {
        }
        TooltipManualExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tooltip-manual-example',
                        template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>",
                        styles: [".example-action-button {\n  margin-top: 16px;\n}\n"]
                    }] }
        ];
        return TooltipManualExample;
    }());

    /**
     * @title Tooltip with a changing message
     */
    var TooltipMessageExample = /** @class */ (function () {
        function TooltipMessageExample() {
            this.message = new forms.FormControl('Info about the action');
        }
        TooltipMessageExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tooltip-message-example',
                        template: "<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Tooltip message\" [formControl]=\"message\">\n</mat-form-field>\n\n<button mat-raised-button\n        [matTooltip]=\"message.value\"\n        aria-label=\"Button that displays a tooltip with a custom message\">\n  Action\n</button>\n",
                        styles: [".example-user-input {\n  margin-right: 8px;\n}\n"]
                    }] }
        ];
        return TooltipMessageExample;
    }());

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
            { type: core.Component, args: [{
                        selector: 'tooltip-modified-defaults-example',
                        template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n",
                        providers: [
                            { provide: tooltip.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                        ],
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return TooltipModifiedDefaultsExample;
    }());

    /**
     * @title Basic tooltip
     */
    var TooltipOverviewExample = /** @class */ (function () {
        function TooltipOverviewExample() {
        }
        TooltipOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tooltip-overview-example',
                        template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return TooltipOverviewExample;
    }());

    /**
     * @title Tooltip with a custom position
     */
    var TooltipPositionExample = /** @class */ (function () {
        function TooltipPositionExample() {
            this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
            this.position = new forms.FormControl(this.positionOptions[0]);
        }
        TooltipPositionExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tooltip-position-example',
                        template: "<mat-form-field class=\"example-user-input\">\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n",
                        styles: [".example-user-input {\n  margin-right: 8px;\n}\n"]
                    }] }
        ];
        return TooltipPositionExample;
    }());

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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            checkbox.MatCheckboxModule,
                            input.MatInputModule,
                            select.MatSelectModule,
                            tooltip.MatTooltipModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return TooltipExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ɵangular_material_src_material_examples_material_tooltip_tooltip_a = myCustomTooltipDefaults;
    exports.TooltipAutoHideExample = TooltipAutoHideExample;
    exports.TooltipCustomClassExample = TooltipCustomClassExample;
    exports.TooltipDelayExample = TooltipDelayExample;
    exports.TooltipDisabledExample = TooltipDisabledExample;
    exports.TooltipManualExample = TooltipManualExample;
    exports.TooltipMessageExample = TooltipMessageExample;
    exports.TooltipModifiedDefaultsExample = TooltipModifiedDefaultsExample;
    exports.TooltipOverviewExample = TooltipOverviewExample;
    exports.TooltipPositionExample = TooltipPositionExample;
    exports.TooltipExamplesModule = TooltipExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-tooltip.umd.js.map
