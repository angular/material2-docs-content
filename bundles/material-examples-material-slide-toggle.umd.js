(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/radio'), require('@angular/material/slide-toggle')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/slide-toggle', ['exports', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/card', '@angular/material/checkbox', '@angular/material/radio', '@angular/material/slide-toggle'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.slideToggle = {}), global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.card, global.ng.material.checkbox, global.ng.material.radio, global.ng.material.slideToggle));
}(this, function (exports, core, forms, button, card, checkbox, radio, slideToggle) { 'use strict';

    /**
     * @title Configurable slide-toggle
     */
    var SlideToggleConfigurableExample = /** @class */ (function () {
        function SlideToggleConfigurableExample() {
            this.color = 'accent';
            this.checked = false;
            this.disabled = false;
        }
        SlideToggleConfigurableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'slide-toggle-configurable-example',
                        template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-slide-toggle\n          class=\"example-margin\"\n          [color]=\"color\"\n          [checked]=\"checked\"\n          [disabled]=\"disabled\">\n        Slide me!\n      </mat-slide-toggle>\n    </section>\n  </mat-card-content>\n</mat-card>\n",
                        styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n"]
                    }] }
        ];
        return SlideToggleConfigurableExample;
    }());

    /**
     * @title Slide-toggle with forms
     */
    var SlideToggleFormsExample = /** @class */ (function () {
        function SlideToggleFormsExample(formBuilder) {
            this.isChecked = true;
            this.formGroup = formBuilder.group({
                enableWifi: '',
                acceptTerms: ['', forms.Validators.requiredTrue]
            });
        }
        SlideToggleFormsExample.prototype.onFormSubmit = function () {
            alert(JSON.stringify(this.formGroup.value, null, 2));
        };
        SlideToggleFormsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'slide-toggle-forms-example',
                        template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-rasied-button type=\"submit\">Save Settings</button>\n</form>\n",
                        styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SlideToggleFormsExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return SlideToggleFormsExample;
    }());

    /**
     * @title Basic slide-toggles
     */
    var SlideToggleOverviewExample = /** @class */ (function () {
        function SlideToggleOverviewExample() {
        }
        SlideToggleOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'slide-toggle-overview-example',
                        template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SlideToggleOverviewExample;
    }());

    var EXAMPLES = [
        SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleOverviewExample,
    ];
    var SlideToggleExamplesModule = /** @class */ (function () {
        function SlideToggleExamplesModule() {
        }
        SlideToggleExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            button.MatButtonModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            radio.MatRadioModule,
                            slideToggle.MatSlideToggleModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return SlideToggleExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SlideToggleConfigurableExample = SlideToggleConfigurableExample;
    exports.SlideToggleFormsExample = SlideToggleFormsExample;
    exports.SlideToggleOverviewExample = SlideToggleOverviewExample;
    exports.SlideToggleExamplesModule = SlideToggleExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-slide-toggle.umd.js.map
