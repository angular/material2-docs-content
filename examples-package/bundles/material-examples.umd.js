/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material'), require('@angular/platform-browser'), require('@angular/cdk'), require('rxjs/BehaviorSubject'), require('rxjs/Observable')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material', '@angular/platform-browser', '@angular/cdk', 'rxjs/BehaviorSubject', 'rxjs/Observable'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['material-examples'] = global.ng['material-examples'] || {}),global.ng.core,global.ng.forms,global.ng.common,global.ng.material,global.ng.platformBrowser,global.ng.cdk,global.Rx,global.Rx));
}(this, (function (exports,_angular_core,_angular_forms,_angular_common,_angular_material,_angular_platformBrowser,_angular_cdk,rxjs_BehaviorSubject,rxjs_Observable) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Observable_1 = require('../../Observable');
var startWith_1 = require('../../operator/startWith');
Observable_1.Observable.prototype.startWith = startWith_1.startWith;

var Observable_1$1 = require('../../Observable');
var map_1 = require('../../operator/map');
Observable_1$1.Observable.prototype.map = map_1.map;

var Observable_1$2 = require('../../Observable');
var merge_1 = require('../../observable/merge');
Observable_1$2.Observable.merge = merge_1.merge;

var Observable_1$3 = require('../../Observable');
var fromEvent_1 = require('../../observable/fromEvent');
Observable_1$3.Observable.fromEvent = fromEvent_1.fromEvent;

var Observable_1$4 = require('../../Observable');
var distinctUntilChanged_1 = require('../../operator/distinctUntilChanged');
Observable_1$4.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;

var Observable_1$5 = require('../../Observable');
var debounceTime_1 = require('../../operator/debounceTime');
Observable_1$5.Observable.prototype.debounceTime = debounceTime_1.debounceTime;

var AutocompleteOverviewExample = (function () {
    function AutocompleteOverviewExample() {
        var _this = this;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
        this.stateCtrl = new _angular_forms.FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    AutocompleteOverviewExample.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.states;
    };
    return AutocompleteOverviewExample;
}());
AutocompleteOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'autocomplete-overview-example',
                template: "<md-input-container><input mdInput placeholder=\"State\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\"></md-input-container><md-autocomplete #auto=\"mdAutocomplete\"><md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">{{ state }}</md-option></md-autocomplete>",
            },] },
];
/**
 * @nocollapse
 */
AutocompleteOverviewExample.ctorParameters = function () { return []; };
var ButtonOverviewExample = (function () {
    function ButtonOverviewExample() {
    }
    return ButtonOverviewExample;
}());
ButtonOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'button-overview-example',
                template: "<button md-button>Click me!</button>",
            },] },
];
/**
 * @nocollapse
 */
ButtonOverviewExample.ctorParameters = function () { return []; };
var ButtonTypesExample = (function () {
    function ButtonTypesExample() {
    }
    return ButtonTypesExample;
}());
ButtonTypesExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'button-types-example',
                template: "<div class=\"example-container\"><h3>Normal Buttons</h3><div class=\"button-row\"><button md-button>Flat button</button> <button md-raised-button>Raised button</button> <button md-fab><md-icon>check</md-icon></button> <button md-mini-fab><md-icon>check</md-icon></button></div><h3>Link Buttons</h3><div class=\"example-button-row\"><a md-button routerLink=\".\">Flat button</a> <a md-raised-button routerLink=\".\">Raised button</a> <a md-fab routerLink=\".\"><md-icon>check</md-icon></a><a md-mini-fab routerLink=\".\"><md-icon>check</md-icon></a></div></div>",
                styles: [".example-container { width: 500px; } .example-button-row { display: flex; align-items: center; justify-content: space-around; } "],
            },] },
];
/**
 * @nocollapse
 */
ButtonTypesExample.ctorParameters = function () { return []; };
var CheckboxOverviewExample = (function () {
    function CheckboxOverviewExample() {
    }
    return CheckboxOverviewExample;
}());
CheckboxOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'checkbox-overview-example',
                template: "<md-checkbox>Check me!</md-checkbox>",
            },] },
];
/**
 * @nocollapse
 */
CheckboxOverviewExample.ctorParameters = function () { return []; };
var SliderConfigurableExample = (function () {
    function SliderConfigurableExample() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    Object.defineProperty(SliderConfigurableExample.prototype, "tickInterval", {
        /**
         * @return {?}
         */
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    return SliderConfigurableExample;
}());
SliderConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slider-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\"></md-input-container><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\"></md-input-container><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\"></md-input-container><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\"></md-input-container></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</md-checkbox><md-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">Auto ticks</md-checkbox><md-input-container class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\"><input mdInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\"></md-input-container></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</md-checkbox></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</md-checkbox><md-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</md-checkbox></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox></section></md-card-content></md-card><md-card class=\"result\"><md-card-content><h2 class=\"example-h2\">Result</h2><md-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumb-label]=\"thumbLabel\" [tick-interval]=\"tickInterval\" [value]=\"value\" [vertical]=\"vertical\"></md-slider></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } .mat-slider-horizontal { width: 300px; } .mat-slider-vertical { height: 300px; } "],
                encapsulation: _angular_core.ViewEncapsulation.None,
            },] },
];
/**
 * @nocollapse
 */
SliderConfigurableExample.ctorParameters = function () { return []; };
var TabsOverviewExample = (function () {
    function TabsOverviewExample() {
    }
    return TabsOverviewExample;
}());
TabsOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'tabs-overview-example',
                template: "<md-tab-group><md-tab label=\"Tab 1\">Content 1</md-tab><md-tab label=\"Tab 2\">Content 2</md-tab></md-tab-group>",
            },] },
];
/**
 * @nocollapse
 */
TabsOverviewExample.ctorParameters = function () { return []; };
var SnackBarComponentExample = (function () {
    /**
     * @param {?} snackBar
     */
    function SnackBarComponentExample(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @return {?}
     */
    SnackBarComponentExample.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500,
        });
    };
    return SnackBarComponentExample;
}());
SnackBarComponentExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'snack-bar-component-example',
                template: "<button md-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pizza party</button>",
            },] },
];
/**
 * @nocollapse
 */
SnackBarComponentExample.ctorParameters = function () { return [
    { type: _angular_material.MdSnackBar, },
]; };
var PizzaPartyComponent = (function () {
    function PizzaPartyComponent() {
    }
    return PizzaPartyComponent;
}());
PizzaPartyComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"example-pizza-party\">🍕🍕🍕🍕🍕 Pizza party!!! 🍕🍕🍕🍕🍕</span>",
                styles: [".example-pizza-party { color: hotpink; } "],
            },] },
];
/**
 * @nocollapse
 */
PizzaPartyComponent.ctorParameters = function () { return []; };
var ProgressBarConfigurableExample = (function () {
    function ProgressBarConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    return ProgressBarConfigurableExample;
}());
ProgressBarConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'progress-bar-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Progress bar configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><md-radio-group [(ngModel)]=\"color\"><md-radio-button class=\"example-margin\" value=\"primary\">Primary</md-radio-button><md-radio-button class=\"example-margin\" value=\"accent\">Accent</md-radio-button><md-radio-button class=\"example-margin\" value=\"warn\">Warn</md-radio-button></md-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><md-radio-group [(ngModel)]=\"mode\"><md-radio-button class=\"example-margin\" value=\"determinate\">Determinate</md-radio-button><md-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</md-radio-button><md-radio-button class=\"example-margin\" value=\"buffer\">Buffer</md-radio-button><md-radio-button class=\"example-margin\" value=\"query\">Query</md-radio-button></md-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\"><label class=\"example-margin\">Progress:</label><md-slider class=\"example-margin\" [(ngModel)]=\"value\"></md-slider></section><section class=\"example-section\" *ngIf=\"mode == 'buffer'\"><label class=\"example-margin\">Buffer:</label><md-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></md-slider></section></md-card-content></md-card><md-card><md-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\"></md-progress-bar></section></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
ProgressBarConfigurableExample.ctorParameters = function () { return []; };
var DialogOverviewExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogOverviewExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogOverviewExample.prototype.openDialog = function () {
        this.dialog.open(DialogOverviewExampleDialog);
    };
    return DialogOverviewExample;
}());
DialogOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-overview-example',
                template: "<button md-button (click)=\"openDialog()\">Open dialog</button>",
            },] },
];
/**
 * @nocollapse
 */
DialogOverviewExample.ctorParameters = function () { return [
    { type: _angular_material.MdDialog, },
]; };
var DialogOverviewExampleDialog = (function () {
    function DialogOverviewExampleDialog() {
    }
    return DialogOverviewExampleDialog;
}());
DialogOverviewExampleDialog.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-overview-example-dialog',
                template: "<p>Hi, I'm a dialog!</p>",
            },] },
];
/**
 * @nocollapse
 */
DialogOverviewExampleDialog.ctorParameters = function () { return []; };
var RadioNgModelExample = (function () {
    function RadioNgModelExample() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    return RadioNgModelExample;
}());
RadioNgModelExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'radio-ng-model-example',
                template: "<md-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\"><md-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">{{season}}</md-radio-button></md-radio-group><div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>",
                styles: [".example-radio-group { display: inline-flex; flex-direction: column; } .example-radio-button { margin: 5px; } .example-selected-value { margin: 15px 0; } "],
            },] },
];
/**
 * @nocollapse
 */
RadioNgModelExample.ctorParameters = function () { return []; };
var CardFancyExample = (function () {
    function CardFancyExample() {
    }
    return CardFancyExample;
}());
CardFancyExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'card-fancy-example',
                template: "<md-card class=\"example-card\"><md-card-header><div md-card-avatar class=\"example-header-image\"></div><md-card-title>Shiba Inu</md-card-title><md-card-subtitle>Dog Breed</md-card-subtitle></md-card-header><img md-card-image src=\"assets/img/examples/shiba2.jpg\"><md-card-content><p>The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.</p></md-card-content><md-card-actions><button md-button>LIKE</button> <button md-button>SHARE</button></md-card-actions></md-card>",
                styles: [".example-card { width: 400px; } .example-header-image { background-image: url('../../../assets/img/examples/shiba1.jpg'); background-size: cover; } "],
            },] },
];
/**
 * @nocollapse
 */
CardFancyExample.ctorParameters = function () { return []; };
var ToolbarOverviewExample = (function () {
    function ToolbarOverviewExample() {
    }
    return ToolbarOverviewExample;
}());
ToolbarOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'toolbar-overview-example',
                template: "<md-toolbar>My App</md-toolbar>",
            },] },
];
/**
 * @nocollapse
 */
ToolbarOverviewExample.ctorParameters = function () { return []; };
var ToolbarMultirowExample = (function () {
    function ToolbarMultirowExample() {
    }
    return ToolbarMultirowExample;
}());
ToolbarMultirowExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'toolbar-multirow-example',
                template: "<md-toolbar color=\"primary\"><span>Custom Toolbar</span><md-toolbar-row><span>Second Line</span> <span class=\"example-spacer\"></span><md-icon class=\"example-icon\">verified_user</md-icon></md-toolbar-row><md-toolbar-row><span>Third Line</span> <span class=\"example-spacer\"></span><md-icon class=\"example-icon\">favorite</md-icon><md-icon class=\"example-icon\">delete</md-icon></md-toolbar-row></md-toolbar>",
                styles: [".example-icon { padding: 0 14px; } .example-spacer { flex: 1 1 auto; } "],
            },] },
];
/**
 * @nocollapse
 */
ToolbarMultirowExample.ctorParameters = function () { return []; };
var MenuIconsExample = (function () {
    function MenuIconsExample() {
    }
    return MenuIconsExample;
}());
MenuIconsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'menu-icons-example',
                template: "<button md-icon-button [mdMenuTriggerFor]=\"menu\"><md-icon>more_vert</md-icon></button><md-menu #menu=\"mdMenu\"><button md-menu-item><md-icon>dialpad</md-icon><span>Redial</span></button> <button md-menu-item disabled=\"disabled\"><md-icon>voicemail</md-icon><span>Check voicemail</span></button> <button md-menu-item><md-icon>notifications_off</md-icon><span>Disable alerts</span></button></md-menu>",
            },] },
];
/**
 * @nocollapse
 */
MenuIconsExample.ctorParameters = function () { return []; };
var GridListDynamicExample = (function () {
    function GridListDynamicExample() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    return GridListDynamicExample;
}());
GridListDynamicExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'grid-list-dynamic-example',
                template: "<md-grid-list cols=\"4\" rowHeight=\"100px\"><md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">{{tile.text}}</md-grid-tile></md-grid-list>",
            },] },
];
/**
 * @nocollapse
 */
GridListDynamicExample.ctorParameters = function () { return []; };
var IconOverviewExample = (function () {
    function IconOverviewExample() {
    }
    return IconOverviewExample;
}());
IconOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'icon-overview-example',
                template: "<md-icon>home</md-icon>",
            },] },
];
/**
 * @nocollapse
 */
IconOverviewExample.ctorParameters = function () { return []; };
var ProgressBarOverviewExample = (function () {
    function ProgressBarOverviewExample() {
    }
    return ProgressBarOverviewExample;
}());
ProgressBarOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'progress-bar-overview-example',
                template: "<md-progress-bar mode=\"indeterminate\"></md-progress-bar>",
            },] },
];
/**
 * @nocollapse
 */
ProgressBarOverviewExample.ctorParameters = function () { return []; };
var SlideToggleOverviewExample = (function () {
    function SlideToggleOverviewExample() {
    }
    return SlideToggleOverviewExample;
}());
SlideToggleOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slide-toggle-overview-example',
                template: "<md-slide-toggle>Slide me!</md-slide-toggle>",
            },] },
];
/**
 * @nocollapse
 */
SlideToggleOverviewExample.ctorParameters = function () { return []; };
var SlideToggleFormsExample = (function () {
    /**
     * @param {?} formBuilder
     */
    function SlideToggleFormsExample(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', _angular_forms.Validators.requiredTrue]
        });
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    SlideToggleFormsExample.prototype.onFormSubmit = function (formValue) {
        alert(JSON.stringify(formValue, null, 2));
    };
    return SlideToggleFormsExample;
}());
SlideToggleFormsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slide-toggle-forms-example',
                template: "<p>Slide Toggle using a simple NgModel.</p><md-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{ isChecked }}</md-slide-toggle><p>Slide Toggle inside of a Template-driven form</p><form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit(form.value)\" ngNativeValidate><md-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</md-slide-toggle><md-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</md-slide-toggle><button md-raised-button type=\"submit\">Save Settings</button></form><p>Slide Toggle inside of a Reactive form</p><form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit(formGroup.value)\" ngNativeValidate><md-slide-toggle formControlName=\"enableWifi\">Enable Wifi</md-slide-toggle><md-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</md-slide-toggle><p>Form Group Status: {{ formGroup.status}}</p><button md-rasied-button type=\"submit\">Save Settings</button></form>",
                styles: [".example-form md-slide-toggle { margin: 8px 0; display: block; } "],
            },] },
];
/**
 * @nocollapse
 */
SlideToggleFormsExample.ctorParameters = function () { return [
    { type: _angular_forms.FormBuilder, },
]; };
var MenuOverviewExample = (function () {
    function MenuOverviewExample() {
    }
    return MenuOverviewExample;
}());
MenuOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'menu-overview-example',
                template: "<button md-button [mdMenuTriggerFor]=\"menu\">Menu</button><md-menu #menu=\"mdMenu\"><button md-menu-item>Item 1</button> <button md-menu-item>Item 2</button></md-menu>",
            },] },
];
/**
 * @nocollapse
 */
MenuOverviewExample.ctorParameters = function () { return []; };
var CheckboxConfigurableExample = (function () {
    function CheckboxConfigurableExample() {
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
    }
    return CheckboxConfigurableExample;
}());
CheckboxConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'checkbox-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Checkbox configuration</h2><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</md-checkbox><md-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</md-checkbox></section><section class=\"example-section\"><label class=\"example-margin\">Align:</label><md-radio-group [(ngModel)]=\"align\"><md-radio-button class=\"example-margin\" value=\"start\">Start</md-radio-button><md-radio-button class=\"example-margin\" value=\"end\">End</md-radio-button></md-radio-group></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox></section></md-card-content></md-card><md-card class=\"result\"><md-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><md-checkbox class=\"example-margin\" [checked]=\"checked\" [indeterminate]=\"indeterminate\" [align]=\"align\" [disabled]=\"disabled\">I'm a checkbox</md-checkbox></section></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
CheckboxConfigurableExample.ctorParameters = function () { return []; };
var ButtonToggleExclusiveExample = (function () {
    function ButtonToggleExclusiveExample() {
    }
    return ButtonToggleExclusiveExample;
}());
ButtonToggleExclusiveExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'button-toggle-exclusive-example',
                template: "<md-button-toggle-group #group=\"mdButtonToggleGroup\"><md-button-toggle value=\"left\"><md-icon>format_align_left</md-icon></md-button-toggle><md-button-toggle value=\"center\"><md-icon>format_align_center</md-icon></md-button-toggle><md-button-toggle value=\"right\"><md-icon>format_align_right</md-icon></md-button-toggle><md-button-toggle value=\"justify\" disabled=\"disabled\"><md-icon>format_align_justify</md-icon></md-button-toggle></md-button-toggle-group><div class=\"example-selected-value\">Selected value: {{group.value}}</div>",
                styles: [".example-selected-value { margin: 15px 0; } "],
            },] },
];
/**
 * @nocollapse
 */
ButtonToggleExclusiveExample.ctorParameters = function () { return []; };
var ListSectionsExample = (function () {
    function ListSectionsExample() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    return ListSectionsExample;
}());
ListSectionsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'list-sections-example',
                styles: [".mat-list-icon { color: rgba(0, 0, 0, 0.54); } "],
                template: "<md-list><h3 md-subheader>Folders</h3><md-list-item *ngFor=\"let folder of folders\"><md-icon md-list-icon>folder</md-icon><h4 md-line>{{folder.name}}</h4><p md-line>{{folder.updated | date}}</p></md-list-item><md-divider></md-divider><h3 md-subheader>Notes</h3><md-list-item *ngFor=\"let note of notes\"><md-icon md-list-icon>note</md-icon><h4 md-line>{{note.name}}</h4><p md-line>{{note.updated | date}}</p></md-list-item></md-list>",
            },] },
];
/**
 * @nocollapse
 */
ListSectionsExample.ctorParameters = function () { return []; };
var SnackBarOverviewExample = (function () {
    /**
     * @param {?} snackBar
     */
    function SnackBarOverviewExample(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    return SnackBarOverviewExample;
}());
SnackBarOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'snack-bar-overview-example',
                template: "<md-input-container><input mdInput value=\"Disco party!\" placeholder=\"Message\" #message></md-input-container><md-input-container><input mdInput value=\"Dance\" placeholder=\"Action\" #action></md-input-container><button md-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>",
            },] },
];
/**
 * @nocollapse
 */
SnackBarOverviewExample.ctorParameters = function () { return [
    { type: _angular_material.MdSnackBar, },
]; };
var DialogResultExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogResultExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogResultExample.prototype.openDialog = function () {
        var _this = this;
        var /** @type {?} */ dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    return DialogResultExample;
}());
DialogResultExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-result-example',
                template: "<button md-button (click)=\"openDialog()\">Launch dialog</button> You chose: {{selectedOption}}",
            },] },
];
/**
 * @nocollapse
 */
DialogResultExample.ctorParameters = function () { return [
    { type: _angular_material.MdDialog, },
]; };
var DialogResultExampleDialog = (function () {
    /**
     * @param {?} dialogRef
     */
    function DialogResultExampleDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DialogResultExampleDialog;
}());
DialogResultExampleDialog.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-result-example-dialog',
                template: "<h1 md-dialog-title>Dialog</h1><div md-dialog-content>What would you like to do?</div><div md-dialog-actions><button md-button md-dialog-close=\"Option 1\">Option 1</button> <button md-button md-dialog-close=\"Option 2\">Option 2</button></div>",
            },] },
];
/**
 * @nocollapse
 */
DialogResultExampleDialog.ctorParameters = function () { return [
    { type: _angular_material.MdDialogRef, },
]; };
var DialogElementsExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogElementsExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogElementsExample.prototype.openDialog = function () {
        this.dialog.open(DialogElementsExampleDialog);
    };
    return DialogElementsExample;
}());
DialogElementsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-elements-example',
                template: "<button md-button (click)=\"openDialog()\">Launch dialog</button>",
            },] },
];
/**
 * @nocollapse
 */
DialogElementsExample.ctorParameters = function () { return [
    { type: _angular_material.MdDialog, },
]; };
var DialogElementsExampleDialog = (function () {
    function DialogElementsExampleDialog() {
    }
    return DialogElementsExampleDialog;
}());
DialogElementsExampleDialog.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-elements-example-dialog',
                template: "<h1 md-dialog-title>Dialog with elements</h1><div md-dialog-content>This dialog showcases the title, close, content and actions elements.</div><div md-dialog-actions><button md-button md-dialog-close>Close</button></div>",
            },] },
];
/**
 * @nocollapse
 */
DialogElementsExampleDialog.ctorParameters = function () { return []; };
var TooltipOverviewExample = (function () {
    function TooltipOverviewExample() {
    }
    return TooltipOverviewExample;
}());
TooltipOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'tooltip-overview-example',
                template: "<span mdTooltip=\"Tooltip!\">I have a tooltip</span>",
            },] },
];
/**
 * @nocollapse
 */
TooltipOverviewExample.ctorParameters = function () { return []; };
var ButtonToggleOverviewExample = (function () {
    function ButtonToggleOverviewExample() {
    }
    return ButtonToggleOverviewExample;
}());
ButtonToggleOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'button-toggle-overview-example',
                template: "<md-button-toggle>Toggle me!</md-button-toggle>",
            },] },
];
/**
 * @nocollapse
 */
ButtonToggleOverviewExample.ctorParameters = function () { return []; };
var GridListOverviewExample = (function () {
    function GridListOverviewExample() {
    }
    return GridListOverviewExample;
}());
GridListOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'grid-list-overview-example',
                styles: ["md-grid-tile { background: lightblue; } "],
                template: "<md-grid-list cols=\"2\" rowHeight=\"2:1\"><md-grid-tile>1</md-grid-tile><md-grid-tile>2</md-grid-tile><md-grid-tile>3</md-grid-tile><md-grid-tile>4</md-grid-tile></md-grid-list>",
            },] },
];
/**
 * @nocollapse
 */
GridListOverviewExample.ctorParameters = function () { return []; };
var TooltipPositionExample = (function () {
    function TooltipPositionExample() {
        this.position = 'before';
    }
    return TooltipPositionExample;
}());
TooltipPositionExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'tooltip-position-example',
                template: "<div class=\"example-tooltip-host\" mdTooltip=\"Tooltip!\" [mdTooltipPosition]=\"position\"><span>Show tooltip</span><md-select class=\"example-select\" [(ngModel)]=\"position\"><md-option value=\"before\">Before</md-option><md-option value=\"after\">After</md-option><md-option value=\"above\">Above</md-option><md-option value=\"below\">Below</md-option><md-option value=\"left\">Left</md-option><md-option value=\"right\">Right</md-option></md-select></div>",
                styles: [".example-tooltip-host { display: inline-flex; align-items: center; margin: 50px; } .example-select { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
TooltipPositionExample.ctorParameters = function () { return []; };
var ProgressSpinnerConfigurableExample = (function () {
    function ProgressSpinnerConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    return ProgressSpinnerConfigurableExample;
}());
ProgressSpinnerConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'progress-spinner-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Progress spinner configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><md-radio-group [(ngModel)]=\"color\"><md-radio-button class=\"example-margin\" value=\"primary\">Primary</md-radio-button><md-radio-button class=\"example-margin\" value=\"accent\">Accent</md-radio-button><md-radio-button class=\"example-margin\" value=\"warn\">Warn</md-radio-button></md-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><md-radio-group [(ngModel)]=\"mode\"><md-radio-button class=\"example-margin\" value=\"determinate\">Determinate</md-radio-button><md-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</md-radio-button></md-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate'\"><label class=\"example-margin\">Progress:</label><md-slider class=\"example-margin\" [(ngModel)]=\"value\"></md-slider></section></md-card-content></md-card><md-card><md-card-content><h2 class=\"example-h2\">Result</h2><md-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></md-progress-spinner></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
ProgressSpinnerConfigurableExample.ctorParameters = function () { return []; };
var ListOverviewExample = (function () {
    function ListOverviewExample() {
    }
    return ListOverviewExample;
}());
ListOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'list-overview-example',
                template: "<md-list><md-list-item>Item 1</md-list-item><md-list-item>Item 2</md-list-item><md-list-item>Item 3</md-list-item></md-list>",
            },] },
];
/**
 * @nocollapse
 */
ListOverviewExample.ctorParameters = function () { return []; };
var SliderOverviewExample = (function () {
    function SliderOverviewExample() {
    }
    return SliderOverviewExample;
}());
SliderOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slider-overview-example',
                template: "<md-slider></md-slider>",
                styles: ["/** No CSS for this example */ md-slider { width: 300px; } "],
            },] },
];
/**
 * @nocollapse
 */
SliderOverviewExample.ctorParameters = function () { return []; };
var SlideToggleConfigurableExample = (function () {
    function SlideToggleConfigurableExample() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    return SlideToggleConfigurableExample;
}());
SlideToggleConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slide-toggle-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><md-radio-group [(ngModel)]=\"color\"><md-radio-button class=\"example-margin\" value=\"primary\">Primary</md-radio-button><md-radio-button class=\"example-margin\" value=\"accent\">Accent</md-radio-button><md-radio-button class=\"example-margin\" value=\"warn\">Warn</md-radio-button></md-radio-group></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</md-checkbox></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox></section></md-card-content></md-card><md-card class=\"result\"><md-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><md-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">Slide me!</md-slide-toggle></section></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
SlideToggleConfigurableExample.ctorParameters = function () { return []; };
var IconSvgExample = (function () {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    return IconSvgExample;
}());
IconSvgExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'icon-svg-example',
                template: "<md-icon svgIcon=\"thumbs-up\"></md-icon>",
            },] },
];
/**
 * @nocollapse
 */
IconSvgExample.ctorParameters = function () { return [
    { type: _angular_material.MdIconRegistry, },
    { type: _angular_platformBrowser.DomSanitizer, },
]; };
var SidenavFabExample = (function () {
    function SidenavFabExample() {
    }
    return SidenavFabExample;
}());
SidenavFabExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'sidenav-fab-example',
                template: "<md-sidenav-container class=\"example-sidenav-fab-container\"><md-sidenav #sidenav mode=\"side\" opened=\"true\"><button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"><md-icon>add</md-icon></button><div class=\"example-scrolling-content\">Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.</div></md-sidenav><button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"><md-icon>add</md-icon></button><div class=\"example-scrolling-content\">Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.</div></md-sidenav-container>",
                styles: [".example-sidenav-fab-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-fab-container md-sidenav { max-width: 200px; } .example-sidenav-fab-container .mat-sidenav-content, .example-sidenav-fab-container md-sidenav { display: flex; overflow: visible; } .example-scrolling-content { overflow: auto; } .example-fab { position: absolute; right: 20px; bottom: 10px; } "],
                encapsulation: _angular_core.ViewEncapsulation.None,
            },] },
];
/**
 * @nocollapse
 */
SidenavFabExample.ctorParameters = function () { return []; };
var CardOverviewExample = (function () {
    function CardOverviewExample() {
    }
    return CardOverviewExample;
}());
CardOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'card-overview-example',
                template: "<md-card>Simple card</md-card>",
            },] },
];
/**
 * @nocollapse
 */
CardOverviewExample.ctorParameters = function () { return []; };
var ProgressSpinnerOverviewExample = (function () {
    function ProgressSpinnerOverviewExample() {
    }
    return ProgressSpinnerOverviewExample;
}());
ProgressSpinnerOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'progress-spinner-overview-example',
                template: "<md-spinner></md-spinner>",
            },] },
];
/**
 * @nocollapse
 */
ProgressSpinnerOverviewExample.ctorParameters = function () { return []; };
var TabsTemplateLabelExample = (function () {
    function TabsTemplateLabelExample() {
    }
    return TabsTemplateLabelExample;
}());
TabsTemplateLabelExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'tabs-template-label-example',
                template: "More examples coming soon!",
            },] },
];
/**
 * @nocollapse
 */
TabsTemplateLabelExample.ctorParameters = function () { return []; };
var RadioOverviewExample = (function () {
    function RadioOverviewExample() {
    }
    return RadioOverviewExample;
}());
RadioOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'radio-overview-example',
                template: "<md-radio-group><md-radio-button value=\"1\">Option 1</md-radio-button><md-radio-button value=\"2\">Option 2</md-radio-button></md-radio-group>",
            },] },
];
/**
 * @nocollapse
 */
RadioOverviewExample.ctorParameters = function () { return []; };
var SidenavOverviewExample = (function () {
    function SidenavOverviewExample() {
    }
    return SidenavOverviewExample;
}());
SidenavOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'sidenav-overview-example',
                template: "<md-sidenav-container class=\"example-container\"><md-sidenav #sidenav class=\"example-sidenav\">Jolly good!</md-sidenav><div class=\"example-sidenav-content\"><button type=\"button\" md-button (click)=\"sidenav.open()\">Open sidenav</button></div></md-sidenav-container>",
                styles: [".example-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-content { display: flex; height: 100%; align-items: center; justify-content: center; } .example-sidenav { padding: 20px; } "],
            },] },
];
/**
 * @nocollapse
 */
SidenavOverviewExample.ctorParameters = function () { return []; };
var SelectOverviewExample = (function () {
    function SelectOverviewExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    return SelectOverviewExample;
}());
SelectOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'select-overview-example',
                template: "<md-select placeholder=\"Favorite food\"><md-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{ food.viewValue }}</md-option></md-select>",
            },] },
];
/**
 * @nocollapse
 */
SelectOverviewExample.ctorParameters = function () { return []; };
var ChipsOverviewExample = (function () {
    function ChipsOverviewExample() {
    }
    return ChipsOverviewExample;
}());
ChipsOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'chips-overview-example',
                template: "<md-chip-list><md-chip>One fish</md-chip><md-chip>Two fish</md-chip><md-chip color=\"primary\" selected=\"true\">Primary fish</md-chip><md-chip color=\"accent\" selected=\"true\">Accent fish</md-chip></md-chip-list>",
            },] },
];
/**
 * @nocollapse
 */
ChipsOverviewExample.ctorParameters = function () { return []; };
var ChipsStackedExample = (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    return ChipsStackedExample;
}());
ChipsStackedExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'chips-stacked-example',
                template: "<md-chip-list class=\"mat-chip-list-stacked\"><md-chip *ngFor=\"let chipColor of availableColors\" selected=\"true\" color=\"{{chipColor.color}}\">{{chipColor.name}}</md-chip></md-chip-list>",
                styles: ["md-chip { max-width: 200px; } "],
            },] },
];
/**
 * @nocollapse
 */
ChipsStackedExample.ctorParameters = function () { return []; };
var SelectFormExample = (function () {
    function SelectFormExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    return SelectFormExample;
}());
SelectFormExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'select-form-example',
                template: "<form><md-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\"><md-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{food.viewValue}}</md-option></md-select><p>Selected value: {{selectedValue}}</p></form>",
            },] },
];
/**
 * @nocollapse
 */
SelectFormExample.ctorParameters = function () { return []; };
var PaginatorOverviewExample = (function () {
    function PaginatorOverviewExample() {
    }
    return PaginatorOverviewExample;
}());
PaginatorOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'paginator-overview-example',
                template: "<md-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></md-paginator>",
            },] },
];
/**
 * @nocollapse
 */
PaginatorOverviewExample.ctorParameters = function () { return []; };
var DatepickerOverviewExample = (function () {
    function DatepickerOverviewExample() {
    }
    return DatepickerOverviewExample;
}());
DatepickerOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-overview-example',
                template: "<md-input-container><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerOverviewExample.ctorParameters = function () { return []; };
var PaginatorConfigurableExample = (function () {
    function PaginatorConfigurableExample() {
        // MdPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    /**
     * @param {?} setPageSizeOptionsInput
     * @return {?}
     */
    PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    return PaginatorConfigurableExample;
}());
PaginatorConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'paginator-configurable-example',
                template: "<md-input-container>List length: <input mdInput [(ngModel)]=\"length\"></md-input-container><md-input-container>Page size: <input mdInput [(ngModel)]=\"pageSize\"></md-input-container><md-input-container>Page size options: <input mdInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"></md-input-container><md-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event\"></md-paginator><div *ngIf=\"pageEvent\"><h5>Page Change Event Properties</h5><div>List length: {{pageEvent.length}}</div><div>Page size: {{pageEvent.pageSize}}</div><div>Page index: {{pageEvent.pageIndex}}</div></div>",
            },] },
];
/**
 * @nocollapse
 */
PaginatorConfigurableExample.ctorParameters = function () { return []; };
var InputOverviewExample = (function () {
    function InputOverviewExample() {
    }
    return InputOverviewExample;
}());
InputOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-overview-example',
                template: "<md-input-container><input mdInput placeholder=\"Favorite food\" value=\"Sushi\"></md-input-container>",
            },] },
];
/**
 * @nocollapse
 */
InputOverviewExample.ctorParameters = function () { return []; };
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var InputErrorsExample = (function () {
    function InputErrorsExample() {
        this.emailFormControl = new _angular_forms.FormControl('', [
            _angular_forms.Validators.required,
            _angular_forms.Validators.pattern(EMAIL_REGEX)
        ]);
    }
    return InputErrorsExample;
}());
InputErrorsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-errors-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"Email\" [formControl]=\"emailFormControl\"><md-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</md-error><md-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></md-error></md-input-container></form>",
                styles: [".example-form { width: 500px; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputErrorsExample.ctorParameters = function () { return []; };
var InputFormExample = (function () {
    function InputFormExample() {
    }
    return InputFormExample;
}());
InputFormExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-form-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"Company (disabled)\" disabled=\"disabled\" value=\"Google\"></md-input-container><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"First name\"></md-input-container></td><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"Long Last Name That Will Be Truncated\"></md-input-container></td></tr></table><p><md-input-container class=\"example-full-width\"><textarea mdInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea></md-input-container><md-input-container class=\"example-full-width\"><textarea mdInput placeholder=\"Address 2\"></textarea></md-input-container></p><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"City\"></md-input-container></td><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"State\"></md-input-container></td><td><md-input-container class=\"example-full-width\"><input mdInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\"><md-hint align=\"end\">{{postalCode.value.length}} / 5</md-hint></md-input-container></td></tr></table></form>",
                styles: [".example-form { width: 500px; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputFormExample.ctorParameters = function () { return []; };
var InputPrefixSuffixExample = (function () {
    function InputPrefixSuffixExample() {
    }
    return InputPrefixSuffixExample;
}());
InputPrefixSuffixExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-prefix-suffix-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><span mdPrefix>+1 &nbsp;</span> <input type=\"tel\" mdInput placeholder=\"Telephone\"><md-icon mdSuffix>mode_edit</md-icon></md-input-container></form>",
                styles: [".example-form { width: 500px; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputPrefixSuffixExample.ctorParameters = function () { return []; };
var InputHintExample = (function () {
    function InputHintExample() {
    }
    return InputHintExample;
}());
InputHintExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-hint-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><input mdInput #message maxlength=\"256\" placeholder=\"Message\"><md-hint align=\"start\"><strong>Don't disclose personal info</strong></md-hint><md-hint align=\"end\">{{message.value.length}} / 256</md-hint></md-input-container></form>",
                styles: [".example-form { width: 500px; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputHintExample.ctorParameters = function () { return []; };
var DatepickerStartViewExample = (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    return DatepickerStartViewExample;
}());
DatepickerStartViewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-start-view-example',
                template: "<md-input-container><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerStartViewExample.ctorParameters = function () { return []; };
var DatepickerMinMaxExample = (function () {
    function DatepickerMinMaxExample() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    return DatepickerMinMaxExample;
}());
DatepickerMinMaxExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-min-max-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [min]=\"minDate\" [max]=\"maxDate\" [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerMinMaxExample.ctorParameters = function () { return []; };
var DatepickerFilterExample = (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            var /** @type {?} */ day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    return DatepickerFilterExample;
}());
DatepickerFilterExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-filter-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [mdDatepickerFilter]=\"myFilter\" [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerFilterExample.ctorParameters = function () { return []; };
var DatepickerTouchExample = (function () {
    function DatepickerTouchExample() {
    }
    return DatepickerTouchExample;
}());
DatepickerTouchExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-touch-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker touchUi=\"true\" #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerTouchExample.ctorParameters = function () { return []; };
var DatepickerApiExample = (function () {
    function DatepickerApiExample() {
    }
    return DatepickerApiExample;
}());
DatepickerApiExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-api-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"></md-input-container><md-datepicker #picker></md-datepicker><button md-raised-button (click)=\"picker.open()\">Open</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerApiExample.ctorParameters = function () { return []; };
var InputClearableExample = (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    return InputClearableExample;
}());
InputClearableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-clearable-example',
                template: "<md-input-container class=\"example-input-container\"><input mdInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"><md-button *ngIf=\"value\" mdSuffix md-icon-button aria-label=\"Clear\" (click)=\"value=''\"><md-icon>close</md-icon></md-button></md-input-container>",
                styles: [".example-input-container { width: 200px; } "],
            },] },
];
/**
 * @nocollapse
 */
InputClearableExample.ctorParameters = function () { return []; };
var TableOverviewExample = (function () {
    function TableOverviewExample() {
        this.displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
        this.selection = new _angular_material.SelectionModel(true, []);
    }
    /**
     * @return {?}
     */
    TableOverviewExample.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        rxjs_Observable.Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    /**
     * @return {?}
     */
    TableOverviewExample.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.exampleDatabase.data.length;
        }
    };
    /**
     * @return {?}
     */
    TableOverviewExample.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { return _this.selection.select(data.id); });
        }
        else {
            this.exampleDatabase.data.forEach(function (data) { return _this.selection.select(data.id); });
        }
    };
    return TableOverviewExample;
}());
TableOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-overview-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; max-height: 500px; background: white; min-width: 300px; } .example-header { min-height: 56px; max-height: 56px; display: flex; align-items: center; padding: 8px 24px 0; font-size: 20px; justify-content: space-between; border-bottom: 1px solid transparent; } .mat-input-container { font-size: 14px; flex-grow: 1; margin-left: 32px; margin-top: 8px; } .example-no-results { display: flex; justify-content: center; padding: 24px; font-size: 12px; font-style: italic; } /** Selection styles */ .example-selection-header { font-size: 18px; background: rgba(255, 64, 129, 0.3); border-bottom: 1px solid #d696ac; } .mat-column-select { max-width: 54px; } .mat-row:hover, .example-selected-row { background: #f5f5f5; } .mat-row:active, .mat-row.example-selected-row { background: #eaeaea; } .mat-table { overflow: auto; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">Users<md-input-container floatPlaceholder=\"never\"><input mdInput #filter placeholder=\"Filter users\"></md-input-container></div><div class=\"example-header example-selection-header\" *ngIf=\"!selection.isEmpty()\">{{selection.selected.length}} {{selection.selected.length == 1 ? 'user' : 'users'}} selected</div><md-table #table [dataSource]=\"dataSource\" mdSort><ng-container cdkColumnDef=\"select\"><md-header-cell *cdkHeaderCellDef><md-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></md-checkbox></md-header-cell><md-cell *cdkCellDef=\"let row\"><md-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row.id) : null\" [checked]=\"selection.isSelected(row.id)\"></md-checkbox></md-cell></ng-container><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef md-sort-header>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef md-sort-header>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef md-sort-header>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef md-sort-header>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\" [class.example-selected-row]=\"selection.isSelected(row.id)\" (click)=\"selection.toggle(row.id)\"></md-row></md-table><div class=\"example-no-results\" [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">No users found matching filter.</div><md-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"25\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></md-paginator></div>",
            },] },
];
/**
 * @nocollapse
 */
TableOverviewExample.ctorParameters = function () { return []; };
TableOverviewExample.propDecorators = {
    'paginator': [{ type: _angular_core.ViewChild, args: [_angular_material.MdPaginator,] },],
    'sort': [{ type: _angular_core.ViewChild, args: [_angular_material.MdSort,] },],
    'filter': [{ type: _angular_core.ViewChild, args: ['filter',] },],
};
/**
 * Constants used to fill up our data base.
 */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase = (function () {
    function ExampleDatabase() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    /**
     * @param {?} _exampleDatabase
     * @param {?} _paginator
     * @param {?} _sort
     */
    function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new rxjs_BehaviorSubject.BehaviorSubject('');
        _this.filteredData = [];
        _this.renderedData = [];
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        /**
         * @return {?}
         */
        get: function () { return this._filterChange.value; },
        /**
         * @param {?} filter
         * @return {?}
         */
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.mdSortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, displayDataChanges).map(function () {
            // Filter data
            _this.filteredData = _this._exampleDatabase.data.slice().filter(function (item) {
                var /** @type {?} */ searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            var /** @type {?} */ sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var /** @type {?} */ startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        });
    };
    /**
     * @return {?}
     */
    ExampleDataSource.prototype.disconnect = function () { };
    /**
     * Returns a sorted copy of the database data.
     * @param {?} data
     * @return {?}
     */
    ExampleDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var /** @type {?} */ propertyA = '';
            var /** @type {?} */ propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var /** @type {?} */ valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var /** @type {?} */ valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return ExampleDataSource;
}(_angular_cdk.DataSource));
var TablePaginationExample = (function () {
    function TablePaginationExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$1();
    }
    /**
     * @return {?}
     */
    TablePaginationExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource$1(this.exampleDatabase, this.paginator);
    };
    return TablePaginationExample;
}());
TablePaginationExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-pagination-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; max-height: 500px; background: white; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .mat-table { overflow: auto; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\">Users</div><md-table #table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table><md-paginator #paginator [length]=\"exampleDatabase.data.length\" [pageIndex]=\"0\" [pageSize]=\"25\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></md-paginator></div>",
            },] },
];
/**
 * @nocollapse
 */
TablePaginationExample.ctorParameters = function () { return []; };
TablePaginationExample.propDecorators = {
    'paginator': [{ type: _angular_core.ViewChild, args: [_angular_material.MdPaginator,] },],
};
/**
 * Constants used to fill up our data base.
 */
var COLORS$1 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$1 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$1 = (function () {
    function ExampleDatabase$1() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$1.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$1.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$1.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$1[Math.round(Math.random() * (NAMES$1.length - 1))] + ' ' +
            NAMES$1[Math.round(Math.random() * (NAMES$1.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$1[Math.round(Math.random() * (COLORS$1.length - 1))]
        };
    };
    return ExampleDatabase$1;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$1 = (function (_super) {
    __extends(ExampleDataSource$1, _super);
    /**
     * @param {?} _exampleDatabase
     * @param {?} _paginator
     */
    function ExampleDataSource$1(_exampleDatabase, _paginator) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$1.prototype.connect = function () {
        var _this = this;
        var /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._paginator.page,
        ];
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, displayDataChanges).map(function () {
            var /** @type {?} */ data = _this._exampleDatabase.data.slice();
            // Grab the page's slice of data.
            var /** @type {?} */ startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    /**
     * @return {?}
     */
    ExampleDataSource$1.prototype.disconnect = function () { };
    return ExampleDataSource$1;
}(_angular_cdk.DataSource));
var TableBasicExample = (function () {
    function TableBasicExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$2();
    }
    /**
     * @return {?}
     */
    TableBasicExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource$2(this.exampleDatabase);
    };
    return TableBasicExample;
}());
TableBasicExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-basic-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; max-height: 500px; background: white; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .mat-table { overflow: auto; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\">Users</div><md-table #table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table></div>",
            },] },
];
/**
 * @nocollapse
 */
TableBasicExample.ctorParameters = function () { return []; };
/**
 * Constants used to fill up our data base.
 */
var COLORS$2 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$2 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$2 = (function () {
    function ExampleDatabase$2() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$2.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$2.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$2.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$2[Math.round(Math.random() * (NAMES$2.length - 1))] + ' ' +
            NAMES$2[Math.round(Math.random() * (NAMES$2.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$2[Math.round(Math.random() * (COLORS$2.length - 1))]
        };
    };
    return ExampleDatabase$2;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$2 = (function (_super) {
    __extends(ExampleDataSource$2, _super);
    /**
     * @param {?} _exampleDatabase
     */
    function ExampleDataSource$2(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$2.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    /**
     * @return {?}
     */
    ExampleDataSource$2.prototype.disconnect = function () { };
    return ExampleDataSource$2;
}(_angular_cdk.DataSource));
var TableSortingExample = (function () {
    function TableSortingExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$3();
    }
    /**
     * @return {?}
     */
    TableSortingExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource$3(this.exampleDatabase, this.sort);
    };
    return TableSortingExample;
}());
TableSortingExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-sorting-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; max-height: 500px; background: white; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .mat-table { overflow: auto; } .mat-header-cell .mat-sort-header-sorted { color: black; }"],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\">Users</div><md-table #table [dataSource]=\"dataSource\" mdSort><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef md-sort-header>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef md-sort-header>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef md-sort-header>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef md-sort-header>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table></div>",
            },] },
];
/**
 * @nocollapse
 */
TableSortingExample.ctorParameters = function () { return []; };
TableSortingExample.propDecorators = {
    'sort': [{ type: _angular_core.ViewChild, args: [_angular_material.MdSort,] },],
};
/**
 * Constants used to fill up our data base.
 */
var COLORS$3 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$3 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$3 = (function () {
    function ExampleDatabase$3() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$3.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$3.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$3.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$3[Math.round(Math.random() * (NAMES$3.length - 1))] + ' ' +
            NAMES$3[Math.round(Math.random() * (NAMES$3.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$3[Math.round(Math.random() * (COLORS$3.length - 1))]
        };
    };
    return ExampleDatabase$3;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$3 = (function (_super) {
    __extends(ExampleDataSource$3, _super);
    /**
     * @param {?} _exampleDatabase
     * @param {?} _sort
     */
    function ExampleDataSource$3(_exampleDatabase, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._sort = _sort;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$3.prototype.connect = function () {
        var _this = this;
        var /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.mdSortChange,
        ];
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, displayDataChanges).map(function () {
            return _this.getSortedData();
        });
    };
    /**
     * @return {?}
     */
    ExampleDataSource$3.prototype.disconnect = function () { };
    /**
     * Returns a sorted copy of the database data.
     * @return {?}
     */
    ExampleDataSource$3.prototype.getSortedData = function () {
        var _this = this;
        var /** @type {?} */ data = this._exampleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var /** @type {?} */ propertyA = '';
            var /** @type {?} */ propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var /** @type {?} */ valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var /** @type {?} */ valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return ExampleDataSource$3;
}(_angular_cdk.DataSource));
var TableFilteringExample = (function () {
    function TableFilteringExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$4();
    }
    /**
     * @return {?}
     */
    TableFilteringExample.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource$4(this.exampleDatabase);
        rxjs_Observable.Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    return TableFilteringExample;
}());
TableFilteringExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-filtering-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; max-height: 500px; background: white; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .example-header { min-height: 64px; display: flex; align-items: baseline; padding: 8px 24px 0; font-size: 20px; justify-content: space-between; } .mat-input-container { font-size: 14px; flex-grow: 1; margin-left: 32px; } .mat-table { overflow: auto; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\">Users<md-input-container floatPlaceholder=\"never\"><input mdInput #filter placeholder=\"Filter users\"></md-input-container></div><md-table #table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table></div>",
            },] },
];
/**
 * @nocollapse
 */
TableFilteringExample.ctorParameters = function () { return []; };
TableFilteringExample.propDecorators = {
    'filter': [{ type: _angular_core.ViewChild, args: ['filter',] },],
};
/**
 * Constants used to fill up our data base.
 */
var COLORS$4 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$4 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$4 = (function () {
    function ExampleDatabase$4() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$4.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$4.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$4.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$4[Math.round(Math.random() * (NAMES$4.length - 1))] + ' ' +
            NAMES$4[Math.round(Math.random() * (NAMES$4.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$4[Math.round(Math.random() * (COLORS$4.length - 1))]
        };
    };
    return ExampleDatabase$4;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$4 = (function (_super) {
    __extends(ExampleDataSource$4, _super);
    /**
     * @param {?} _exampleDatabase
     */
    function ExampleDataSource$4(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new rxjs_BehaviorSubject.BehaviorSubject('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource$4.prototype, "filter", {
        /**
         * @return {?}
         */
        get: function () { return this._filterChange.value; },
        /**
         * @param {?} filter
         * @return {?}
         */
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$4.prototype.connect = function () {
        var _this = this;
        var /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, displayDataChanges).map(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var /** @type {?} */ searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        });
    };
    /**
     * @return {?}
     */
    ExampleDataSource$4.prototype.disconnect = function () { };
    return ExampleDataSource$4;
}(_angular_cdk.DataSource));
var CdkTableBasicExample = (function () {
    function CdkTableBasicExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$5();
    }
    /**
     * @return {?}
     */
    CdkTableBasicExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource$5(this.exampleDatabase);
    };
    return CdkTableBasicExample;
}());
CdkTableBasicExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'cdk-table-basic-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; max-height: 500px; min-width: 300px; } /* * Styles to make the demo's cdk-table match the material design spec * https://material.io/guidelines/components/data-tables.html */ .example-table { flex: 1 1 auto; overflow: auto; } .example-header-row, .example-row { display: flex; border-bottom: 1px solid #ccc; align-items: center; height: 32px; padding: 0 8px; } .example-cell, .example-header-cell { flex: 1; } .example-header-cell { font-size: 12px; font-weight: bold; color: rgba(0, 0, 0, 0.54); } .example-cell { font-size: 13px; color: rgba(0, 0, 0, 0.87); } "],
                template: "<div class=\"example-container mat-elevation-z8\"><cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\"><ng-container cdkColumnDef=\"userId\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">ID</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.id}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"progress\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Progress</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.progress}}%</cdk-cell></ng-container><ng-container cdkColumnDef=\"userName\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Name</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.name}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"color\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Color</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\" [style.color]=\"row.color\">{{row.color}}</cdk-cell></ng-container><cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"example-header-row\"></cdk-header-row><cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" class=\"example-row\"></cdk-row></cdk-table></div>",
            },] },
];
/**
 * @nocollapse
 */
CdkTableBasicExample.ctorParameters = function () { return []; };
/**
 * Constants used to fill up our data base.
 */
var COLORS$5 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$5 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$5 = (function () {
    function ExampleDatabase$5() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$5.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$5.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$5.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$5[Math.round(Math.random() * (NAMES$5.length - 1))] + ' ' +
            NAMES$5[Math.round(Math.random() * (NAMES$5.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$5[Math.round(Math.random() * (COLORS$5.length - 1))]
        };
    };
    return ExampleDatabase$5;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$5 = (function (_super) {
    __extends(ExampleDataSource$5, _super);
    /**
     * @param {?} _exampleDatabase
     */
    function ExampleDataSource$5(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$5.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    /**
     * @return {?}
     */
    ExampleDataSource$5.prototype.disconnect = function () { };
    return ExampleDataSource$5;
}(_angular_cdk.DataSource));
/**
 * The list of example components.
 * Key is the example name which will be used in `material-docs-example="key"`.
 * Value is the component.
 */
var EXAMPLE_COMPONENTS = {
    'autocomplete-overview': { title: 'Basic autocomplete', component: AutocompleteOverviewExample },
    'button-overview': { title: 'Basic buttons', component: ButtonOverviewExample },
    'button-types': { title: 'Button varieties', component: ButtonTypesExample },
    'button-toggle-exclusive': {
        title: 'Exclusive selection',
        component: ButtonToggleExclusiveExample
    },
    'button-toggle-overview': { title: 'Basic button-toggles', component: ButtonToggleOverviewExample },
    'chips-overview': { title: 'Basic chips', component: ChipsOverviewExample },
    'cdk-table-basic': { title: 'Basic CDK data-table', component: CdkTableBasicExample },
    'chips-stacked': { title: 'Stacked chips', component: ChipsStackedExample },
    'card-fancy': { title: 'Card with multiple sections', component: CardFancyExample },
    'card-overview': { title: 'Basic cards', component: CardOverviewExample },
    'checkbox-configurable': { title: 'Configurable checkbox', component: CheckboxConfigurableExample },
    'checkbox-overview': { title: 'Basic checkboxes', component: CheckboxOverviewExample },
    'datepicker-overview': { title: 'Basic datepicker', component: DatepickerOverviewExample },
    'datepicker-start-view': { title: 'Start View', component: DatepickerStartViewExample },
    'datepicker-min-max': { title: 'Min/Max Validation', component: DatepickerMinMaxExample },
    'datepicker-filter': { title: 'Filter Validation', component: DatepickerFilterExample },
    'datepicker-touch': { title: 'Touch', component: DatepickerTouchExample },
    'datepicker-api': { title: 'API', component: DatepickerApiExample },
    'dialog-overview': {
        title: 'Basic dialog',
        component: DialogOverviewExample,
        additionalFiles: ['dialog-overview-example-dialog.html'],
        selectorName: 'DialogOverviewExample, DialogOverviewExampleDialog',
    },
    'dialog-result': {
        title: 'Dialog with a result',
        component: DialogResultExample,
        additionalFiles: ['dialog-result-example-dialog.html'],
        selectorName: 'DialogResultExample, DialogResultExampleDialog',
    },
    'dialog-elements': {
        title: 'Dialog elements',
        component: DialogElementsExample,
        additionalFiles: ['dialog-elements-example-dialog.html'],
        selectorName: 'DialogElementsExample, DialogElementsExampleDialog',
    },
    'grid-list-dynamic': { title: 'Dynamic grid-list', component: GridListDynamicExample },
    'grid-list-overview': { title: 'Basic grid-list', component: GridListOverviewExample },
    'icon-overview': { title: 'Basic icons', component: IconOverviewExample },
    'icon-svg': { title: 'SVG icons', component: IconSvgExample },
    'input-clearable': { title: 'Input with clear button', component: InputClearableExample },
    'input-form': { title: 'Inputs in a form', component: InputFormExample },
    'input-overview': { title: 'Basic inputs', component: InputOverviewExample },
    'input-errors': { title: 'Input Errors', component: InputErrorsExample },
    'input-prefix-suffix': { title: 'Input Prefixes/Suffixes', component: InputPrefixSuffixExample },
    'input-hint': { title: 'Input Hint', component: InputHintExample },
    'list-overview': { title: 'Basic list', component: ListOverviewExample },
    'list-sections': { title: 'List with sections', component: ListSectionsExample },
    'menu-icons': { title: 'Menu with icons', component: MenuIconsExample },
    'menu-overview': { title: 'Basic menu', component: MenuOverviewExample },
    'paginator-overview': { title: 'Paginator', component: PaginatorOverviewExample },
    'paginator-configurable': {
        title: 'Configurable paginator',
        component: PaginatorConfigurableExample
    },
    'progress-bar-configurable': {
        title: 'Configurable progress-bar',
        component: ProgressBarConfigurableExample
    },
    'progress-bar-overview': { title: 'Basic progress-bar', component: ProgressBarOverviewExample },
    'progress-spinner-configurable': {
        title: 'Configurable progress-bar',
        component: ProgressSpinnerConfigurableExample
    },
    'progress-spinner-overview': {
        title: 'Basic progress-spinner',
        component: ProgressSpinnerOverviewExample
    },
    'radio-ng-model': { title: 'Radios with ngModel', component: RadioNgModelExample },
    'radio-overview': { title: 'Basic radios', component: RadioOverviewExample },
    'select-overview': { title: 'Basic select', component: SelectOverviewExample },
    'select-form': { title: 'Select in a form', component: SelectFormExample },
    'sidenav-fab': { title: 'Sidenav with a FAB', component: SidenavFabExample },
    'sidenav-overview': { title: 'Basic sidenav', component: SidenavOverviewExample },
    'slider-configurable': { title: 'Configurable slider', component: SliderConfigurableExample },
    'slider-overview': { title: 'Basic slider', component: SliderOverviewExample },
    'slide-toggle-configurable': {
        title: 'Configurable slide-toggle',
        component: SlideToggleConfigurableExample
    },
    'slide-toggle-forms': { title: 'Slide-toggle with forms', component: SlideToggleFormsExample },
    'slide-toggle-overview': { title: 'Basic slide-toggles', component: SlideToggleOverviewExample },
    'snack-bar-component': {
        title: 'Snack-bar with a custom component',
        component: SnackBarComponentExample
    },
    'snack-bar-overview': { title: 'Basic snack-bar', component: SnackBarOverviewExample },
    'table-overview': { title: 'Feature-rich data table', component: TableOverviewExample },
    'table-pagination': { title: 'Table with pagination', component: TablePaginationExample },
    'table-sorting': { title: 'Table with sorting', component: TableSortingExample },
    'table-filtering': { title: 'Table with filtering', component: TableFilteringExample },
    'table-basic': { title: 'Basic table', component: TableBasicExample },
    'tabs-overview': { title: 'Basic tabs', component: TabsOverviewExample },
    'tabs-template-label': { title: 'Coming soon!', component: TabsTemplateLabelExample },
    'toolbar-multirow': { title: 'Multi-row toolbar', component: ToolbarMultirowExample },
    'toolbar-overview': { title: 'basic toolbar', component: ToolbarOverviewExample },
    'tooltip-overview': { title: 'Basic tooltip', component: TooltipOverviewExample },
    'tooltip-position': { title: 'Tooltip with custom position', component: TooltipPositionExample },
};
/**
 * NgModule that includes all Material modules that are required to serve the examples.
 */
var ExampleMaterialModule = (function () {
    function ExampleMaterialModule() {
    }
    return ExampleMaterialModule;
}());
ExampleMaterialModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                exports: [
                    _angular_cdk.CdkTableModule,
                    _angular_material.MdAutocompleteModule,
                    _angular_material.MdButtonModule,
                    _angular_material.MdButtonToggleModule,
                    _angular_material.MdCardModule,
                    _angular_material.MdCheckboxModule,
                    _angular_material.MdChipsModule,
                    _angular_material.MdDatepickerModule,
                    _angular_material.MdDialogModule,
                    _angular_material.MdGridListModule,
                    _angular_material.MdIconModule,
                    _angular_material.MdInputModule,
                    _angular_material.MdListModule,
                    _angular_material.MdMenuModule,
                    _angular_material.MdPaginatorModule,
                    _angular_material.MdProgressBarModule,
                    _angular_material.MdProgressSpinnerModule,
                    _angular_material.MdRadioModule,
                    _angular_material.MdSortModule,
                    _angular_material.MdSelectModule,
                    _angular_material.MdSlideToggleModule,
                    _angular_material.MdSliderModule,
                    _angular_material.MdSidenavModule,
                    _angular_material.MdSnackBarModule,
                    _angular_material.MdTableModule,
                    _angular_material.MdTabsModule,
                    _angular_material.MdToolbarModule,
                    _angular_material.MdTooltipModule
                ]
            },] },
];
/**
 * @nocollapse
 */
ExampleMaterialModule.ctorParameters = function () { return []; };
/**
 * The list of all example components.
 * We need to put them in both `declarations` and `entryComponents` to make them work.
 */
var EXAMPLE_LIST = [
    AutocompleteOverviewExample,
    ButtonOverviewExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonTypesExample,
    CardFancyExample,
    CardOverviewExample,
    CdkTableBasicExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerMinMaxExample,
    DatepickerFilterExample,
    DatepickerTouchExample,
    DatepickerApiExample,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    DialogResultExample,
    DialogResultExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    GridListDynamicExample,
    GridListOverviewExample,
    IconOverviewExample,
    IconSvgExample,
    InputClearableExample,
    InputFormExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
    InputHintExample,
    InputErrorsExample,
    ListOverviewExample,
    ListSectionsExample,
    MenuIconsExample,
    MenuOverviewExample,
    PaginatorOverviewExample,
    PaginatorConfigurableExample,
    ProgressBarConfigurableExample,
    ProgressBarOverviewExample,
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
    RadioNgModelExample,
    RadioOverviewExample,
    SidenavFabExample,
    SelectOverviewExample,
    SelectFormExample,
    SidenavOverviewExample,
    SliderConfigurableExample,
    SliderOverviewExample,
    SlideToggleConfigurableExample,
    SlideToggleOverviewExample,
    SlideToggleFormsExample,
    SnackBarComponentExample,
    PizzaPartyComponent,
    SnackBarOverviewExample,
    TableBasicExample,
    TableOverviewExample,
    TableFilteringExample,
    TablePaginationExample,
    TableSortingExample,
    TabsOverviewExample,
    TabsTemplateLabelExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    TooltipOverviewExample,
    TooltipPositionExample,
];
var ExampleModule = (function () {
    function ExampleModule() {
    }
    return ExampleModule;
}());
ExampleModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: EXAMPLE_LIST,
                entryComponents: EXAMPLE_LIST,
                imports: [
                    ExampleMaterialModule,
                    _angular_forms.FormsModule,
                    _angular_forms.ReactiveFormsModule,
                    _angular_common.CommonModule,
                ]
            },] },
];
/**
 * @nocollapse
 */
ExampleModule.ctorParameters = function () { return []; };
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var ExampleData = (function () {
    /**
     * @param {?} example
     */
    function ExampleData(example) {
        // TODO: figure out how do we get these variables.
        this.description = 'Some description for material';
        // TODO: use real example and delete the example/ folder.
        this.examplePath = '/assets/example/';
        this.exampleFiles = ['button-demo.html', 'button-demo.scss', 'button-demo.ts'];
        // TODO: extract these variables from example code.
        this.selectorName = 'button-demo';
        this.indexFilename = 'button-demo';
        this.componentName = 'ButtonDemo';
        if (example && EXAMPLE_COMPONENTS[example]) {
            this.examplePath = "/assets/plunker/examples/" + example + "/";
            // TODO(tinayuangao): Do not hard-code extensions
            this.exampleFiles = ['html', 'ts', 'css']
                .map(function (extension) { return example + "-example." + extension; });
            if (EXAMPLE_COMPONENTS[example].additionalFiles) {
                this.exampleFiles = this.exampleFiles.concat(EXAMPLE_COMPONENTS[example].additionalFiles);
            }
            this.selectorName = this.indexFilename = example + "-example";
            var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
            if (EXAMPLE_COMPONENTS[example].title) {
                this.description = EXAMPLE_COMPONENTS[example].title;
            }
            else {
                this.description = exampleName.replace(/[\-]+/g, ' ') + ' Example';
            }
            if (EXAMPLE_COMPONENTS[example].selectorName) {
                this.componentName = EXAMPLE_COMPONENTS[example].selectorName;
            }
            else {
                this.componentName = exampleName.replace(/[\-]+/g, '') + 'Example';
            }
        }
    }
    return ExampleData;
}());

exports.ExampleData = ExampleData;
exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
exports.ExampleMaterialModule = ExampleMaterialModule;
exports.EXAMPLE_LIST = EXAMPLE_LIST;
exports.ExampleModule = ExampleModule;
exports.ɵa = AutocompleteOverviewExample;
exports.ɵb = ButtonOverviewExample;
exports.ɵd = ButtonToggleExclusiveExample;
exports.ɵe = ButtonToggleOverviewExample;
exports.ɵc = ButtonTypesExample;
exports.ɵi = CardFancyExample;
exports.ɵj = CardOverviewExample;
exports.ɵg = CdkTableBasicExample;
exports.ɵk = CheckboxConfigurableExample;
exports.ɵl = CheckboxOverviewExample;
exports.ɵf = ChipsOverviewExample;
exports.ɵh = ChipsStackedExample;
exports.ɵr = DatepickerApiExample;
exports.ɵp = DatepickerFilterExample;
exports.ɵo = DatepickerMinMaxExample;
exports.ɵm = DatepickerOverviewExample;
exports.ɵn = DatepickerStartViewExample;
exports.ɵq = DatepickerTouchExample;
exports.ɵw = DialogElementsExample;
exports.ɵx = DialogElementsExampleDialog;
exports.ɵs = DialogOverviewExample;
exports.ɵt = DialogOverviewExampleDialog;
exports.ɵu = DialogResultExample;
exports.ɵv = DialogResultExampleDialog;
exports.ɵy = GridListDynamicExample;
exports.ɵz = GridListOverviewExample;
exports.ɵba = IconOverviewExample;
exports.ɵbb = IconSvgExample;
exports.ɵbc = InputClearableExample;
exports.ɵbf = InputErrorsExample;
exports.ɵbd = InputFormExample;
exports.ɵbh = InputHintExample;
exports.ɵbe = InputOverviewExample;
exports.ɵbg = InputPrefixSuffixExample;
exports.ɵbi = ListOverviewExample;
exports.ɵbj = ListSectionsExample;
exports.ɵbk = MenuIconsExample;
exports.ɵbl = MenuOverviewExample;
exports.ɵbn = PaginatorConfigurableExample;
exports.ɵbm = PaginatorOverviewExample;
exports.ɵbo = ProgressBarConfigurableExample;
exports.ɵbp = ProgressBarOverviewExample;
exports.ɵbq = ProgressSpinnerConfigurableExample;
exports.ɵbr = ProgressSpinnerOverviewExample;
exports.ɵbs = RadioNgModelExample;
exports.ɵbt = RadioOverviewExample;
exports.ɵbv = SelectFormExample;
exports.ɵbu = SelectOverviewExample;
exports.ɵbw = SidenavFabExample;
exports.ɵbx = SidenavOverviewExample;
exports.ɵca = SlideToggleConfigurableExample;
exports.ɵcb = SlideToggleFormsExample;
exports.ɵcc = SlideToggleOverviewExample;
exports.ɵby = SliderConfigurableExample;
exports.ɵbz = SliderOverviewExample;
exports.ɵce = PizzaPartyComponent;
exports.ɵcd = SnackBarComponentExample;
exports.ɵcf = SnackBarOverviewExample;
exports.ɵck = TableBasicExample;
exports.ɵcj = TableFilteringExample;
exports.ɵcg = TableOverviewExample;
exports.ɵch = TablePaginationExample;
exports.ɵci = TableSortingExample;
exports.ɵcl = TabsOverviewExample;
exports.ɵcm = TabsTemplateLabelExample;
exports.ɵcn = ToolbarMultirowExample;
exports.ɵco = ToolbarOverviewExample;
exports.ɵcp = TooltipOverviewExample;
exports.ɵcq = TooltipPositionExample;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-examples.umd.js.map
