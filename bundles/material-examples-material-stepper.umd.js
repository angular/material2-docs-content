(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/stepper'), require('@angular/cdk/stepper')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/stepper', ['exports', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/icon', '@angular/material/input', '@angular/material/stepper', '@angular/cdk/stepper'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.stepper = {}), global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.icon, global.ng.material.input, global.ng.material.stepper, global.ng.cdk.stepper));
}(this, function (exports, core, forms, button, icon, input, stepper, stepper$1) { 'use strict';

    /**
     * @title Stepper with editable steps
     */
    var StepperEditableExample = /** @class */ (function () {
        function StepperEditableExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isEditable = false;
        }
        StepperEditableExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperEditableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'stepper-editable-example',
                        template: "<button mat-raised-button (click)=\"isEditable = !isEditable\">\n  {{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}\n</button>\n\n<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        StepperEditableExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return StepperEditableExample;
    }());

    var ɵ0 = { showError: true };
    /**
     * @title Stepper that displays errors in the steps
     */
    var StepperErrorsExample = /** @class */ (function () {
        function StepperErrorsExample(_formBuilder) {
            this._formBuilder = _formBuilder;
        }
        StepperErrorsExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperErrorsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'stepper-errors-example',
                        template: "<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" errorMessage=\"Name is required.\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" errorMessage=\"Address is required.\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                        providers: [{
                                provide: stepper$1.STEPPER_GLOBAL_OPTIONS, useValue: ɵ0
                            }],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        StepperErrorsExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return StepperErrorsExample;
    }());

    /**
     * @title Stepper label bottom position
     */
    var StepperLabelPositionBottomExample = /** @class */ (function () {
        function StepperLabelPositionBottomExample(_formBuilder) {
            this._formBuilder = _formBuilder;
        }
        StepperLabelPositionBottomExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperLabelPositionBottomExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'stepper-label-position-bottom-example',
                        template: "<mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n            <ng-template matStepLabel>Fill out your name</ng-template>\n            <mat-form-field>\n                <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n            </mat-form-field>\n            <div>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\" optional>\n        <form [formGroup]=\"secondFormGroup\">\n            <ng-template matStepLabel>Fill out your address</ng-template>\n            <mat-form-field>\n                <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n            </mat-form-field>\n            <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        You are now done.\n        <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button (click)=\"stepper.reset()\">Reset</button>\n        </div>\n    </mat-step>\n</mat-horizontal-stepper>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        StepperLabelPositionBottomExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return StepperLabelPositionBottomExample;
    }());

    /**
     * @title Stepper with optional steps
     */
    var StepperOptionalExample = /** @class */ (function () {
        function StepperOptionalExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isOptional = false;
        }
        StepperOptionalExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ''
            });
        };
        StepperOptionalExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'stepper-optional-example',
                        template: "<button mat-raised-button (click)=\"isOptional = !isOptional\">\n  {{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}\n</button>\n\n<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        StepperOptionalExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return StepperOptionalExample;
    }());

    /**
     * @title Stepper overview
     */
    var StepperOverviewExample = /** @class */ (function () {
        function StepperOverviewExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isLinear = false;
        }
        StepperOverviewExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'stepper-overview-example',
                        template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        StepperOverviewExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return StepperOverviewExample;
    }());

    var ɵ0$1 = { displayDefaultIndicatorType: false };
    /**
     * @title Stepper with customized states
     */
    var StepperStatesExample = /** @class */ (function () {
        function StepperStatesExample(_formBuilder) {
            this._formBuilder = _formBuilder;
        }
        StepperStatesExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperStatesExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'stepper-states-example',
                        template: "<mat-horizontal-stepper #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n\n<mat-horizontal-stepper>\n  <mat-step label=\"Step 1\" state=\"phone\">\n    <p>Put down your phones.</p>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 2\" state=\"chat\">\n    <p>Socialize with each other.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 3\">\n    <p>You're welcome.</p>\n  </mat-step>\n\n  <!-- Icon overrides. -->\n  <ng-template matStepperIcon=\"phone\">\n    <mat-icon>call_end</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"chat\">\n    <mat-icon>forum</mat-icon>\n  </ng-template>\n</mat-horizontal-stepper>\n",
                        providers: [{
                                provide: stepper$1.STEPPER_GLOBAL_OPTIONS, useValue: ɵ0$1
                            }],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        StepperStatesExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return StepperStatesExample;
    }());

    /**
     * @title Stepper vertical
     */
    var StepperVerticalExample = /** @class */ (function () {
        function StepperVerticalExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isLinear = false;
        }
        StepperVerticalExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperVerticalExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'stepper-vertical-example',
                        template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        StepperVerticalExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return StepperVerticalExample;
    }());

    var EXAMPLES = [
        StepperEditableExample,
        StepperErrorsExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample,
    ];
    var StepperExamplesModule = /** @class */ (function () {
        function StepperExamplesModule() {
        }
        StepperExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            button.MatButtonModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            stepper.MatStepperModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return StepperExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.StepperEditableExample = StepperEditableExample;
    exports.StepperErrorsExample = StepperErrorsExample;
    exports.StepperLabelPositionBottomExample = StepperLabelPositionBottomExample;
    exports.StepperOptionalExample = StepperOptionalExample;
    exports.StepperOverviewExample = StepperOverviewExample;
    exports.StepperStatesExample = StepperStatesExample;
    exports.StepperVerticalExample = StepperVerticalExample;
    exports.StepperExamplesModule = StepperExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-stepper.umd.js.map
