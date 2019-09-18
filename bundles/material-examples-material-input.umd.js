(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/input')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/input', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/icon', '@angular/material/input'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.input = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.icon, global.ng.material.input));
}(this, function (exports, common, core, forms, button, icon, input) { 'use strict';

    /**
     * @title Input with a clear button
     */
    var InputClearableExample = /** @class */ (function () {
        function InputClearableExample() {
            this.value = 'Clear me';
        }
        InputClearableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-clearable-example',
                        template: "<mat-form-field class=\"example-form-field\">\n  <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\">\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n",
                        styles: [".example-form-field {\n  width: 200px;\n}\n"]
                    }] }
        ];
        return InputClearableExample;
    }());

    /** Error when invalid control is dirty, touched, or submitted. */
    var MyErrorStateMatcher = /** @class */ (function () {
        function MyErrorStateMatcher() {
        }
        MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        };
        return MyErrorStateMatcher;
    }());
    /** @title Input with a custom ErrorStateMatcher */
    var InputErrorStateMatcherExample = /** @class */ (function () {
        function InputErrorStateMatcherExample() {
            this.emailFormControl = new forms.FormControl('', [
                forms.Validators.required,
                forms.Validators.email,
            ]);
            this.matcher = new MyErrorStateMatcher();
        }
        InputErrorStateMatcherExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-error-state-matcher-example',
                        template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return InputErrorStateMatcherExample;
    }());

    /**
     * @title Input with error messages
     */
    var InputErrorsExample = /** @class */ (function () {
        function InputErrorsExample() {
            this.emailFormControl = new forms.FormControl('', [
                forms.Validators.required,
                forms.Validators.email,
            ]);
        }
        InputErrorsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-errors-example',
                        template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return InputErrorsExample;
    }());

    /**
     * @title Inputs in a form
     */
    var InputFormExample = /** @class */ (function () {
        function InputFormExample() {
        }
        InputFormExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-form-example',
                        template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"First name\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address 2\"></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"City\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"State\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"]
                    }] }
        ];
        return InputFormExample;
    }());

    /**
     * @title Input with hints
     */
    var InputHintExample = /** @class */ (function () {
        function InputHintExample() {
        }
        InputHintExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-hint-example',
                        template: "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n  \n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return InputHintExample;
    }());

    /**
     * @title Basic Inputs
     */
    var InputOverviewExample = /** @class */ (function () {
        function InputOverviewExample() {
        }
        InputOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-overview-example',
                        template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\"></textarea>\n  </mat-form-field>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return InputOverviewExample;
    }());

    /**
     * @title Inputs with prefixes and suffixes
     */
    var InputPrefixSuffixExample = /** @class */ (function () {
        function InputPrefixSuffixExample() {
        }
        InputPrefixSuffixExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-prefix-suffix-example',
                        template: "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"Telephone\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n  \n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return InputPrefixSuffixExample;
    }());

    var EXAMPLES = [
        InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample,
    ];
    var InputExamplesModule = /** @class */ (function () {
        function InputExamplesModule() {
        }
        InputExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return InputExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputClearableExample = InputClearableExample;
    exports.InputErrorStateMatcherExample = InputErrorStateMatcherExample;
    exports.InputErrorsExample = InputErrorsExample;
    exports.InputFormExample = InputFormExample;
    exports.InputHintExample = InputHintExample;
    exports.InputOverviewExample = InputOverviewExample;
    exports.InputPrefixSuffixExample = InputPrefixSuffixExample;
    exports.InputExamplesModule = InputExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-input.umd.js.map
