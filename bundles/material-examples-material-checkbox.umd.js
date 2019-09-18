(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/radio')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/checkbox', ['exports', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/checkbox', '@angular/material/radio'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.checkbox = {}), global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.checkbox, global.ng.material.radio));
}(this, function (exports, core, forms, card, checkbox, radio) { 'use strict';

    /**
     * @title Configurable checkbox
     */
    var CheckboxConfigurableExample = /** @class */ (function () {
        function CheckboxConfigurableExample() {
            this.checked = false;
            this.indeterminate = false;
            this.labelPosition = 'after';
            this.disabled = false;
        }
        CheckboxConfigurableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'checkbox-configurable-example',
                        template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"checked\"\n          [(indeterminate)]=\"indeterminate\"\n          [labelPosition]=\"labelPosition\"\n          [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n",
                        styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"]
                    }] }
        ];
        return CheckboxConfigurableExample;
    }());

    /**
     * @title Basic checkboxes
     */
    var CheckboxOverviewExample = /** @class */ (function () {
        function CheckboxOverviewExample() {
        }
        CheckboxOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'checkbox-overview-example',
                        template: "<mat-checkbox>Check me!</mat-checkbox>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return CheckboxOverviewExample;
    }());

    var EXAMPLES = [
        CheckboxConfigurableExample,
        CheckboxOverviewExample,
    ];
    var CheckboxExamplesModule = /** @class */ (function () {
        function CheckboxExamplesModule() {
        }
        CheckboxExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            radio.MatRadioModule,
                            forms.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CheckboxExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CheckboxConfigurableExample = CheckboxConfigurableExample;
    exports.CheckboxOverviewExample = CheckboxOverviewExample;
    exports.CheckboxExamplesModule = CheckboxExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-checkbox.umd.js.map
