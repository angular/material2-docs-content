(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/card')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/card', ['exports', '@angular/core', '@angular/material/button', '@angular/material/card'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.card = {}), global.ng.core, global.ng.material.button, global.ng.material.card));
}(this, function (exports, core, button, card) { 'use strict';

    /**
     * @title Card with multiple sections
     */
    var CardFancyExample = /** @class */ (function () {
        function CardFancyExample() {
        }
        CardFancyExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'card-fancy-example',
                        template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n",
                        styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"]
                    }] }
        ];
        return CardFancyExample;
    }());

    /**
     * @title Basic cards
     */
    var CardOverviewExample = /** @class */ (function () {
        function CardOverviewExample() {
        }
        CardOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'card-overview-example',
                        template: "<mat-card>Simple card</mat-card>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return CardOverviewExample;
    }());

    var EXAMPLES = [
        CardFancyExample,
        CardOverviewExample,
    ];
    var CardExamplesModule = /** @class */ (function () {
        function CardExamplesModule() {
        }
        CardExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            button.MatButtonModule,
                            card.MatCardModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CardExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardFancyExample = CardFancyExample;
    exports.CardOverviewExample = CardOverviewExample;
    exports.CardExamplesModule = CardExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-card.umd.js.map
