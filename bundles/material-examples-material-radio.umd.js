(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/radio')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/radio', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/radio'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.radio = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.radio));
}(this, function (exports, common, core, forms, radio) { 'use strict';

    /**
     * @title Radios with ngModel
     */
    var RadioNgModelExample = /** @class */ (function () {
        function RadioNgModelExample() {
            this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
        }
        RadioNgModelExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'radio-ng-model-example',
                        template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n",
                        styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"]
                    }] }
        ];
        return RadioNgModelExample;
    }());

    /**
     * @title Basic radios
     */
    var RadioOverviewExample = /** @class */ (function () {
        function RadioOverviewExample() {
        }
        RadioOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'radio-overview-example',
                        template: "<mat-radio-group aria-label=\"Select an option\">\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n",
                        styles: [".mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n"]
                    }] }
        ];
        return RadioOverviewExample;
    }());

    var EXAMPLES = [
        RadioNgModelExample,
        RadioOverviewExample,
    ];
    var RadioExamplesModule = /** @class */ (function () {
        function RadioExamplesModule() {
        }
        RadioExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            radio.MatRadioModule,
                            forms.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return RadioExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RadioNgModelExample = RadioNgModelExample;
    exports.RadioOverviewExample = RadioOverviewExample;
    exports.RadioExamplesModule = RadioExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-radio.umd.js.map
