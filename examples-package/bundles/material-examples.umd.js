/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/cdk/table'), require('@angular/material'), require('rxjs/add/operator/startWith'), require('rxjs/add/operator/map'), require('@angular/cdk/collections'), require('rxjs/BehaviorSubject'), require('rxjs/add/observable/merge'), require('@angular/cdk/keycodes'), require('@angular/material-moment-adapter'), require('@angular/material/core'), require('moment'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('@angular/material/form-field'), require('rxjs/Subject'), require('@angular/platform-browser'), require('@angular/common/http'), require('rxjs/Observable'), require('rxjs/add/observable/of'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/switchMap')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/cdk/table', '@angular/material', 'rxjs/add/operator/startWith', 'rxjs/add/operator/map', '@angular/cdk/collections', 'rxjs/BehaviorSubject', 'rxjs/add/observable/merge', '@angular/cdk/keycodes', '@angular/material-moment-adapter', '@angular/material/core', 'moment', '@angular/cdk/a11y', '@angular/cdk/coercion', '@angular/material/form-field', 'rxjs/Subject', '@angular/platform-browser', '@angular/common/http', 'rxjs/Observable', 'rxjs/add/observable/of', 'rxjs/add/operator/catch', 'rxjs/add/operator/switchMap'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['material-examples'] = global.ng['material-examples'] || {}),global.ng.core,global.ng.forms,global.ng.common,global.ng.cdk.table,global.ng.material,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.ng.cdk.collections,global.Rx,global.Rx.Observable,global.ng.cdk.keycodes,global.ng.materialMomentAdapter,global.ng.material.core,global.moment,global.ng.cdk.a11y,global.ng.cdk.coercion,global.ng.material.formField,global.Rx,global.ng.platformBrowser,global.ng.common.http,global.Rx));
}(this, (function (exports,_angular_core,_angular_forms,_angular_common,_angular_cdk_table,_angular_material,rxjs_add_operator_startWith,rxjs_add_operator_map,_angular_cdk_collections,rxjs_BehaviorSubject,rxjs_add_observable_merge,_angular_cdk_keycodes,_angular_materialMomentAdapter,_angular_material_core,_rollupMoment__default,_angular_cdk_a11y,_angular_cdk_coercion,_angular_material_formField,rxjs_Subject,_angular_platformBrowser,_angular_common_http,rxjs_Observable) { 'use strict';

var _rollupMoment__default__default = _rollupMoment__default['default'];

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ExampleMaterialModule = (function () {
    function ExampleMaterialModule() {
    }
    ExampleMaterialModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [
                        _angular_cdk_table.CdkTableModule,
                        _angular_material.MatAutocompleteModule,
                        _angular_material.MatButtonModule,
                        _angular_material.MatButtonToggleModule,
                        _angular_material.MatCardModule,
                        _angular_material.MatCheckboxModule,
                        _angular_material.MatChipsModule,
                        _angular_material.MatDatepickerModule,
                        _angular_material.MatDialogModule,
                        _angular_material.MatExpansionModule,
                        _angular_material.MatFormFieldModule,
                        _angular_material.MatGridListModule,
                        _angular_material.MatIconModule,
                        _angular_material.MatInputModule,
                        _angular_material.MatListModule,
                        _angular_material.MatMenuModule,
                        _angular_material.MatProgressBarModule,
                        _angular_material.MatProgressSpinnerModule,
                        _angular_material.MatRadioModule,
                        _angular_material.MatSelectModule,
                        _angular_material.MatSlideToggleModule,
                        _angular_material.MatSliderModule,
                        _angular_material.MatSidenavModule,
                        _angular_material.MatSnackBarModule,
                        _angular_material.MatStepperModule,
                        _angular_material.MatTabsModule,
                        _angular_material.MatToolbarModule,
                        _angular_material.MatTooltipModule,
                        _angular_material.MatPaginatorModule,
                        _angular_material.MatSortModule,
                        _angular_material.MatTableModule
                    ]
                },] },
    ];
    /** @nocollapse */
    ExampleMaterialModule.ctorParameters = function () { return []; };
    return ExampleMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var User = (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
/**
 * \@title Display value autocomplete
 */
var AutocompleteDisplayExample = (function () {
    function AutocompleteDisplayExample() {
        this.myControl = new _angular_forms.FormControl();
        this.options = [
            new User('Mary'),
            new User('Shelley'),
            new User('Igor')
        ];
    }
    /**
     * @return {?}
     */
    AutocompleteDisplayExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .startWith(null)
            .map(function (user) { return user && typeof user === 'object' ? user.name : user; })
            .map(function (name) { return name ? _this.filter(name) : _this.options.slice(); });
    };
    /**
     * @param {?} name
     * @return {?}
     */
    AutocompleteDisplayExample.prototype.filter = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.options.filter(function (option) {
            return option.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    /**
     * @param {?} user
     * @return {?}
     */
    AutocompleteDisplayExample.prototype.displayFn = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return user ? user.name : user;
    };
    AutocompleteDisplayExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'autocomplete-display-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{ option.name }}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    AutocompleteDisplayExample.ctorParameters = function () { return []; };
    return AutocompleteDisplayExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Filter autocomplete
 */
var AutocompleteFilterExample = (function () {
    function AutocompleteFilterExample() {
        this.myControl = new _angular_forms.FormControl();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    /**
     * @return {?}
     */
    AutocompleteFilterExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .startWith('')
            .map(function (val) { return _this.filter(val); });
    };
    /**
     * @param {?} val
     * @return {?}
     */
    AutocompleteFilterExample.prototype.filter = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    AutocompleteFilterExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'autocomplete-filter-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{ option }}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    AutocompleteFilterExample.ctorParameters = function () { return []; };
    return AutocompleteFilterExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Autocomplete overview
 */
var AutocompleteOverviewExample = (function () {
    function AutocompleteOverviewExample() {
        var _this = this;
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.stateCtrl = new _angular_forms.FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); });
    }
    /**
     * @param {?} name
     * @return {?}
     */
    AutocompleteOverviewExample.prototype.filterStates = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    AutocompleteOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'autocomplete-overview-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\"><img style=\"vertical-align:middle\" aria-hidden src=\"{{state.flag}}\" height=\"25\"> <span>{{ state.name }}</span> | <small>Population: {{state.population}}</small></mat-option></mat-autocomplete></mat-form-field><br><mat-slide-toggle [checked]=\"stateCtrl.disabled\" (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">Disable Input?</mat-slide-toggle></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    AutocompleteOverviewExample.ctorParameters = function () { return []; };
    return AutocompleteOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Simple autocomplete
 */
var AutocompleteSimpleExample = (function () {
    function AutocompleteSimpleExample() {
        this.myControl = new _angular_forms.FormControl();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    AutocompleteSimpleExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'autocomplete-simple-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of options\" [value]=\"option\">{{ option }}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    AutocompleteSimpleExample.ctorParameters = function () { return []; };
    return AutocompleteSimpleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic buttons
 */
var ButtonOverviewExample = (function () {
    function ButtonOverviewExample() {
    }
    ButtonOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'button-overview-example',
                    template: "<button mat-button>Click me!</button>",
                },] },
    ];
    /** @nocollapse */
    ButtonOverviewExample.ctorParameters = function () { return []; };
    return ButtonOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Exclusive selection
 */
var ButtonToggleExclusiveExample = (function () {
    function ButtonToggleExclusiveExample() {
    }
    ButtonToggleExclusiveExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'button-toggle-exclusive-example',
                    template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\"><mat-button-toggle value=\"left\"><mat-icon>format_align_left</mat-icon></mat-button-toggle><mat-button-toggle value=\"center\"><mat-icon>format_align_center</mat-icon></mat-button-toggle><mat-button-toggle value=\"right\"><mat-icon>format_align_right</mat-icon></mat-button-toggle><mat-button-toggle value=\"justify\" disabled=\"disabled\"><mat-icon>format_align_justify</mat-icon></mat-button-toggle></mat-button-toggle-group><div class=\"example-selected-value\">Selected value: {{group.value}}</div>",
                    styles: [".example-selected-value { margin: 15px 0; } "],
                },] },
    ];
    /** @nocollapse */
    ButtonToggleExclusiveExample.ctorParameters = function () { return []; };
    return ButtonToggleExclusiveExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic button-toggles
 */
var ButtonToggleOverviewExample = (function () {
    function ButtonToggleOverviewExample() {
    }
    ButtonToggleOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'button-toggle-overview-example',
                    template: "<mat-button-toggle>Toggle me!</mat-button-toggle>",
                },] },
    ];
    /** @nocollapse */
    ButtonToggleOverviewExample.ctorParameters = function () { return []; };
    return ButtonToggleOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Button varieties
 */
var ButtonTypesExample = (function () {
    function ButtonTypesExample() {
    }
    ButtonTypesExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'button-types-example',
                    template: "<h3>Basic Buttons</h3><div class=\"button-row\"><button mat-button>Basic</button> <button mat-button color=\"primary\">Primary</button> <button mat-button color=\"accent\">Accent</button> <button mat-button color=\"warn\">Warn</button> <button mat-button disabled=\"disabled\">Disabled</button> <a mat-button routerLink=\".\">Link</a></div><h3>Raised Buttons</h3><div class=\"button-row\"><button mat-raised-button>Basic</button> <button mat-raised-button color=\"primary\">Primary</button> <button mat-raised-button color=\"accent\">Accent</button> <button mat-raised-button color=\"warn\">Warn</button> <button mat-raised-button disabled=\"disabled\">Disabled</button> <a mat-raised-button routerLink=\".\">Link</a></div><h3>Icon Buttons</h3><div class=\"button-row\"><button mat-icon-button><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"primary\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"accent\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"warn\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button disabled=\"disabled\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button></div><h3>Fab Buttons</h3><div class=\"button-row\"><button mat-fab>Basic</button> <button mat-fab color=\"primary\">Primary</button> <button mat-fab color=\"accent\">Accent</button> <button mat-fab color=\"warn\">Warn</button> <button mat-fab disabled=\"disabled\">Disabled</button> <button mat-fab><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <a mat-fab routerLink=\".\">Link</a></div><h3>Mini Fab Buttons</h3><div class=\"button-row\"><button mat-mini-fab>Basic</button> <button mat-mini-fab color=\"primary\">Primary</button> <button mat-mini-fab color=\"accent\">Accent</button> <button mat-mini-fab color=\"warn\">Warn</button> <button mat-mini-fab disabled=\"disabled\">Disabled</button> <button mat-mini-fab><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <a mat-mini-fab routerLink=\".\">Link</a></div>",
                    styles: [".example-button-row { display: flex; align-items: center; justify-content: space-around; } "],
                },] },
    ];
    /** @nocollapse */
    ButtonTypesExample.ctorParameters = function () { return []; };
    return ButtonTypesExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Card with multiple sections
 */
var CardFancyExample = (function () {
    function CardFancyExample() {
    }
    CardFancyExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'card-fancy-example',
                    template: "<mat-card class=\"example-card\"><mat-card-header><div mat-card-avatar class=\"example-header-image\"></div><mat-card-title>Shiba Inu</mat-card-title><mat-card-subtitle>Dog Breed</mat-card-subtitle></mat-card-header><img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"><mat-card-content><p>The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.</p></mat-card-content><mat-card-actions><button mat-button>LIKE</button> <button mat-button>SHARE</button></mat-card-actions></mat-card>",
                    styles: [".example-card { width: 400px; } .example-header-image { background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); background-size: cover; } "],
                },] },
    ];
    /** @nocollapse */
    CardFancyExample.ctorParameters = function () { return []; };
    return CardFancyExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic cards
 */
var CardOverviewExample = (function () {
    function CardOverviewExample() {
    }
    CardOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'card-overview-example',
                    template: "<mat-card>Simple card</mat-card>",
                },] },
    ];
    /** @nocollapse */
    CardOverviewExample.ctorParameters = function () { return []; };
    return CardOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic CDK data-table
 */
var CdkTableBasicExample = (function () {
    function CdkTableBasicExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
    }
    /**
     * @return {?}
     */
    CdkTableBasicExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
    };
    CdkTableBasicExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'cdk-table-basic-example',
                    styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } /* * Styles to make the demo's cdk-table match the material design spec * https://material.io/guidelines/components/data-tables.html */ .example-table { flex: 1 1 auto; overflow: auto; max-height: 500px; } .example-header-row, .example-row { display: flex; border-bottom: 1px solid #ccc; align-items: center; height: 32px; padding: 0 8px; } .example-cell, .example-header-cell { flex: 1; } .example-header-cell { font-size: 12px; font-weight: bold; color: rgba(0, 0, 0, 0.54); } .example-cell { font-size: 13px; color: rgba(0, 0, 0, 0.87); } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\"><ng-container cdkColumnDef=\"userId\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">ID</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.id}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"progress\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Progress</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.progress}}%</cdk-cell></ng-container><ng-container cdkColumnDef=\"userName\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Name</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.name}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"color\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Color</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\" [style.color]=\"row.color\">{{row.color}}</cdk-cell></ng-container><cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"example-header-row\"></cdk-header-row><cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" class=\"example-row\"></cdk-row></cdk-table></div>",
                },] },
    ];
    /** @nocollapse */
    CdkTableBasicExample.ctorParameters = function () { return []; };
    return CdkTableBasicExample;
}());
/**
 * Constants used to fill up our data base.
 */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * @record
 */

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
        for (var /** @type {?} */ i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase.prototype.addUser = /**
     * Adds a new user to the database.
     * @return {?}
     */
    function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase.prototype.createNewUser = /**
     * Builds and returns a new User.
     * @return {?}
     */
    function () {
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
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource.prototype.connect = /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    function () {
        return this._exampleDatabase.dataChange;
    };
    /**
     * @return {?}
     */
    ExampleDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return ExampleDataSource;
}(_angular_cdk_collections.DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Configurable checkbox
 */
var CheckboxConfigurableExample = (function () {
    function CheckboxConfigurableExample() {
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
    }
    CheckboxConfigurableExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'checkbox-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Checkbox configuration</h2><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox></section><section class=\"example-section\"><label class=\"example-margin\">Align:</label><mat-radio-group [(ngModel)]=\"align\"><mat-radio-button class=\"example-margin\" value=\"start\">Start</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"end\">End</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\" [(indeterminate)]=\"indeterminate\" [align]=\"align\" [disabled]=\"disabled\">I'm a checkbox</mat-checkbox></section></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
                },] },
    ];
    /** @nocollapse */
    CheckboxConfigurableExample.ctorParameters = function () { return []; };
    return CheckboxConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic checkboxes
 */
var CheckboxOverviewExample = (function () {
    function CheckboxOverviewExample() {
    }
    CheckboxOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'checkbox-overview-example',
                    template: "<mat-checkbox>Check me!</mat-checkbox>",
                },] },
    ];
    /** @nocollapse */
    CheckboxOverviewExample.ctorParameters = function () { return []; };
    return CheckboxOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Chips with input
 */
var ChipsInputExample = (function () {
    function ChipsInputExample() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [_angular_cdk_keycodes.ENTER, _angular_cdk_keycodes.COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ChipsInputExample.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ input = event.input;
        var /** @type {?} */ value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    /**
     * @param {?} fruit
     * @return {?}
     */
    ChipsInputExample.prototype.remove = /**
     * @param {?} fruit
     * @return {?}
     */
    function (fruit) {
        var /** @type {?} */ index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsInputExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'chips-input-example',
                    template: "<mat-form-field class=\"demo-chip-list\"><mat-chip-list #chipList><mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(fruit)\">{{fruit.name}}<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon></mat-chip><input placeholder=\"New fruit...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"></mat-chip-list></mat-form-field>",
                    styles: [".demo-chip-list { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    ChipsInputExample.ctorParameters = function () { return []; };
    return ChipsInputExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic chips
 */
var ChipsOverviewExample = (function () {
    function ChipsOverviewExample() {
    }
    ChipsOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'chips-overview-example',
                    template: "<mat-chip-list><mat-chip>One fish</mat-chip><mat-chip>Two fish</mat-chip><mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip><mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip></mat-chip-list>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    ChipsOverviewExample.ctorParameters = function () { return []; };
    return ChipsOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Stacked chips
 */
var ChipsStackedExample = (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsStackedExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'chips-stacked-example',
                    template: "<mat-chip-list class=\"mat-chip-list-stacked\"><mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\">{{chip.name}}</mat-chip></mat-chip-list>",
                    styles: ["mat-chip { max-width: 200px; } "],
                },] },
    ];
    /** @nocollapse */
    ChipsStackedExample.ctorParameters = function () { return []; };
    return ChipsStackedExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker open method
 */
var DatepickerApiExample = (function () {
    function DatepickerApiExample() {
    }
    DatepickerApiExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-api-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker #picker></mat-datepicker></mat-form-field><button mat-raised-button (click)=\"picker.open()\">Open</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DatepickerApiExample.ctorParameters = function () { return []; };
    return DatepickerApiExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Disabled datepicker
 */
var DatepickerDisabledExample = (function () {
    function DatepickerDisabledExample() {
    }
    DatepickerDisabledExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-disabled-example',
                    template: "<p><mat-form-field><input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled=\"disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle><mat-datepicker #dp1></mat-datepicker></mat-form-field></p><p><mat-form-field><input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled=\"disabled\"></mat-datepicker-toggle><mat-datepicker #dp2></mat-datepicker></mat-form-field></p><p><mat-form-field><input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled=\"disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle><mat-datepicker #dp3 disabled=\"false\"></mat-datepicker></mat-form-field></p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DatepickerDisabledExample.ctorParameters = function () { return []; };
    return DatepickerDisabledExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker input and change events
 */
var DatepickerEventsExample = (function () {
    function DatepickerEventsExample() {
        this.events = [];
    }
    /**
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    DatepickerEventsExample.prototype.addEvent = /**
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerEventsExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-events-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field><div class=\"example-events\"><div *ngFor=\"let e of events\">{{e}}</div></div>",
                    styles: [".example-events { width: 400px; height: 200px; border: 1px solid #555; overflow: auto; } "],
                },] },
    ];
    /** @nocollapse */
    DatepickerEventsExample.ctorParameters = function () { return []; };
    return DatepickerEventsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker with filter validation
 */
var DatepickerFilterExample = (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            var /** @type {?} */ day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerFilterExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-filter-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DatepickerFilterExample.ctorParameters = function () { return []; };
    return DatepickerFilterExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
var moment = _rollupMoment__default__default || _rollupMoment__default;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/**
 * \@title Datepicker with custom formats
 */
var DatepickerFormatsExample = (function () {
    function DatepickerFormatsExample() {
        this.date = new _angular_forms.FormControl(moment());
    }
    DatepickerFormatsExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-formats-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        { provide: _angular_material_core.DateAdapter, useClass: _angular_materialMomentAdapter.MomentDateAdapter, deps: [_angular_material_core.MAT_DATE_LOCALE] },
                        { provide: _angular_material_core.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ],
                },] },
    ];
    /** @nocollapse */
    DatepickerFormatsExample.ctorParameters = function () { return []; };
    return DatepickerFormatsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = _angular_materialMomentAdapter.MAT_MOMENT_DATE_FORMATS;
/**
 * \@title Datepicker with different locale
 */
var DatepickerLocaleExample = (function () {
    function DatepickerLocaleExample(adapter) {
        this.adapter = adapter;
    }
    /**
     * @return {?}
     */
    DatepickerLocaleExample.prototype.french = /**
     * @return {?}
     */
    function () {
        this.adapter.setLocale('fr');
    };
    DatepickerLocaleExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-locale-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp></mat-datepicker></mat-form-field><button mat-button (click)=\"french()\">Dynamically switch to French</button>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: _angular_material_core.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: _angular_material_core.DateAdapter, useClass: _angular_materialMomentAdapter.MomentDateAdapter, deps: [_angular_material_core.MAT_DATE_LOCALE] },
                        { provide: _angular_material_core.MAT_DATE_FORMATS, useValue: ɵ0 },
                    ],
                },] },
    ];
    /** @nocollapse */
    DatepickerLocaleExample.ctorParameters = function () { return [
        { type: _angular_material_core.DateAdapter, },
    ]; };
    return DatepickerLocaleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker with min & max validation
 */
var DatepickerMinMaxExample = (function () {
    function DatepickerMinMaxExample() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    DatepickerMinMaxExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-min-max-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DatepickerMinMaxExample.ctorParameters = function () { return []; };
    return DatepickerMinMaxExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
var moment$1 = _rollupMoment__default__default || _rollupMoment__default;
var ɵ0$1 = _angular_materialMomentAdapter.MAT_MOMENT_DATE_FORMATS;
/**
 * \@title Datepicker that uses Moment.js dates
 */
var DatepickerMomentExample = (function () {
    function DatepickerMomentExample() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new _angular_forms.FormControl(moment$1([2017, 0, 1]));
    }
    DatepickerMomentExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-moment-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: _angular_material_core.DateAdapter, useClass: _angular_materialMomentAdapter.MomentDateAdapter, deps: [_angular_material_core.MAT_DATE_LOCALE] },
                        { provide: _angular_material_core.MAT_DATE_FORMATS, useValue: ɵ0$1 },
                    ],
                },] },
    ];
    /** @nocollapse */
    DatepickerMomentExample.ctorParameters = function () { return []; };
    return DatepickerMomentExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic datepicker
 */
var DatepickerOverviewExample = (function () {
    function DatepickerOverviewExample() {
    }
    DatepickerOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-overview-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DatepickerOverviewExample.ctorParameters = function () { return []; };
    return DatepickerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker start date
 */
var DatepickerStartViewExample = (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    DatepickerStartViewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-start-view-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DatepickerStartViewExample.ctorParameters = function () { return []; };
    return DatepickerStartViewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker touch UI
 */
var DatepickerTouchExample = (function () {
    function DatepickerTouchExample() {
    }
    DatepickerTouchExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-touch-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker touchUi=\"true\" #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DatepickerTouchExample.ctorParameters = function () { return []; };
    return DatepickerTouchExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker selected value
 */
var DatepickerValueExample = (function () {
    function DatepickerValueExample() {
        this.date = new _angular_forms.FormControl(new Date());
        this.serializedDate = new _angular_forms.FormControl((new Date()).toISOString());
    }
    DatepickerValueExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'datepicker-value-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle><mat-datepicker #picker1></mat-datepicker></mat-form-field><mat-form-field><input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\" [formControl]=\"serializedDate\"><mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle><mat-datepicker #picker2></mat-datepicker></mat-form-field><mat-form-field><input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\"><mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle><mat-datepicker #picker3></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DatepickerValueExample.ctorParameters = function () { return []; };
    return DatepickerValueExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Dialog with header, scrollable content and actions
 */
var DialogContentExample = (function () {
    function DialogContentExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogContentExample.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dialogRef = this.dialog.open(DialogContentExampleDialog, {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DialogContentExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'dialog-content-example',
                    template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>",
                },] },
    ];
    /** @nocollapse */
    DialogContentExample.ctorParameters = function () { return [
        { type: _angular_material.MatDialog, },
    ]; };
    return DialogContentExample;
}());
var DialogContentExampleDialog = (function () {
    function DialogContentExampleDialog() {
    }
    DialogContentExampleDialog.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'dialog-content-example-dialog',
                    template: "<h2 mat-dialog-title>Install Angular</h2><mat-dialog-content><h3>DEVELOP ACROSS ALL PLATFORMS</h3><p>Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p><h3>SPEED & PERFORMANCE</h3><p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.</p><h3>INCREDIBLE TOOLING</h3><p>Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.</p><h3>LOVED BY MILLIONS</h3><p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.</p></mat-dialog-content><mat-dialog-actions><button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Install</button> <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button></mat-dialog-actions>",
                },] },
    ];
    /** @nocollapse */
    DialogContentExampleDialog.ctorParameters = function () { return []; };
    return DialogContentExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Injecting data when opening a dialog
 */
var DialogDataExample = (function () {
    function DialogDataExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogDataExample.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    };
    DialogDataExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'dialog-data-example',
                    template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>",
                },] },
    ];
    /** @nocollapse */
    DialogDataExample.ctorParameters = function () { return [
        { type: _angular_material.MatDialog, },
    ]; };
    return DialogDataExample;
}());
var DialogDataExampleDialog = (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'dialog-data-example-dialog',
                    template: "<h1 mat-dialog-title>Favorite Animal</h1><div mat-dialog-content>My favorite animal is:<ul><li><span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda</li><li><span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn</li><li><span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion</li></ul></div>",
                },] },
    ];
    /** @nocollapse */
    DialogDataExampleDialog.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_material.MAT_DIALOG_DATA,] },] },
    ]; };
    return DialogDataExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Dialog elements
 */
var DialogElementsExample = (function () {
    function DialogElementsExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogElementsExample.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        this.dialog.open(DialogElementsExampleDialog);
    };
    DialogElementsExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'dialog-elements-example',
                    template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>",
                },] },
    ];
    /** @nocollapse */
    DialogElementsExample.ctorParameters = function () { return [
        { type: _angular_material.MatDialog, },
    ]; };
    return DialogElementsExample;
}());
var DialogElementsExampleDialog = (function () {
    function DialogElementsExampleDialog() {
    }
    DialogElementsExampleDialog.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'dialog-elements-example-dialog',
                    template: "<h1 mat-dialog-title>Dialog with elements</h1><div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div><div mat-dialog-actions><button mat-button mat-dialog-close>Close</button></div>",
                },] },
    ];
    /** @nocollapse */
    DialogElementsExampleDialog.ctorParameters = function () { return []; };
    return DialogElementsExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Dialog Overview
 */
var DialogOverviewExample = (function () {
    function DialogOverviewExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogOverviewExample.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'dialog-overview-example',
                    template: "<ol><li><mat-form-field><input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\"></mat-form-field></li><li><button mat-raised-button (click)=\"openDialog()\">Pick one</button></li><li *ngIf=\"animal\">You chose: <i>{{animal}}</i></li></ol>"
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExample.ctorParameters = function () { return [
        { type: _angular_material.MatDialog, },
    ]; };
    return DialogOverviewExample;
}());
var DialogOverviewExampleDialog = (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    DialogOverviewExampleDialog.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'dialog-overview-example-dialog',
                    template: "<h1 mat-dialog-title>Hi {{data.name}}</h1><div mat-dialog-content><p>What's your favorite animal?</p><mat-form-field><input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\"></mat-form-field></div><div mat-dialog-actions><button mat-button [mat-dialog-close]=\"data.animal\" tabindex=\"2\">Ok</button> <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button></div>",
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExampleDialog.ctorParameters = function () { return [
        { type: _angular_material.MatDialogRef, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_material.MAT_DIALOG_DATA,] },] },
    ]; };
    return DialogOverviewExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Elevation CSS classes
 */
var ElevationOverviewExample = (function () {
    function ElevationOverviewExample() {
        this.isActive = false;
    }
    ElevationOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'elevation-overview-example',
                    styles: [".example-container { padding: 16px; margin-bottom: 16px; } "],
                    template: "<div class=\"example-container\" [class.mat-elevation-z2]=\"!isActive\" [class.mat-elevation-z8]=\"isActive\">Example</div><button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>",
                },] },
    ];
    /** @nocollapse */
    ElevationOverviewExample.ctorParameters = function () { return []; };
    return ElevationOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic expansion panel
 */
var ExpansionOverviewExample = (function () {
    function ExpansionOverviewExample() {
        this.panelOpenState = false;
    }
    ExpansionOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'expansion-overview-example',
                    template: "<mat-accordion><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age</mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput placeholder=\"Age\"></mat-form-field></mat-expansion-panel><mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\"><mat-expansion-panel-header><mat-panel-title>Self aware panel</mat-panel-title><mat-panel-description>Currently I am {{panelOpenState ? 'open' : 'closed'}}</mat-panel-description></mat-expansion-panel-header><p>I'm visible because I am open</p></mat-expansion-panel></mat-accordion>",
                },] },
    ];
    /** @nocollapse */
    ExpansionOverviewExample.ctorParameters = function () { return []; };
    return ExpansionOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Expansion panel as accordion
 */
var ExpansionStepsExample = (function () {
    function ExpansionStepsExample() {
        this.step = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ExpansionStepsExample.prototype.setStep = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.step = index;
    };
    /**
     * @return {?}
     */
    ExpansionStepsExample.prototype.nextStep = /**
     * @return {?}
     */
    function () {
        this.step++;
    };
    /**
     * @return {?}
     */
    ExpansionStepsExample.prototype.prevStep = /**
     * @return {?}
     */
    function () {
        this.step--;
    };
    ExpansionStepsExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'expansion-steps-example',
                    template: "<mat-accordion class=\"example-headers-align\"><mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\"><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput type=\"number\" min=\"1\" placeholder=\"Age\"></mat-form-field><mat-action-row><button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button></mat-action-row></mat-expansion-panel><mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\"><mat-expansion-panel-header><mat-panel-title>Destination</mat-panel-title><mat-panel-description>Type the country name<mat-icon>map</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Country\"></mat-form-field><mat-action-row><button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button> <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button></mat-action-row></mat-expansion-panel><mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\"><mat-expansion-panel-header><mat-panel-title>Day of the trip</mat-panel-title><mat-panel-description>Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly=\"readonly\"></mat-form-field><mat-datepicker #picker></mat-datepicker><mat-action-row><button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button> <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button></mat-action-row></mat-expansion-panel></mat-accordion>",
                    styles: [".example-headers-align .mat-expansion-panel-header-title,  .example-headers-align .mat-expansion-panel-header-description { flex-basis: 0; } .example-headers-align .mat-expansion-panel-header-description { justify-content: space-between; align-items: center; } "]
                },] },
    ];
    /** @nocollapse */
    ExpansionStepsExample.ctorParameters = function () { return []; };
    return ExpansionStepsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Data structure for holding telephone number.
 */
var MyTel = (function () {
    function MyTel(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
    return MyTel;
}());
/**
 * Custom `MatFormFieldControl` for telephone number input.
 */
var MyTelInput = (function () {
    function MyTelInput(fb, fm, elRef) {
        var _this = this;
        this.fm = fm;
        this.elRef = elRef;
        this.stateChanges = new rxjs_Subject.Subject();
        this.focused = false;
        this.ngControl = null;
        this.errorState = false;
        this.controlType = 'my-tel-input';
        this.id = "my-tel-input-" + MyTelInput.nextId++;
        this.describedBy = '';
        this._required = false;
        this._disabled = false;
        this.parts = fb.group({
            'area': '',
            'exchange': '',
            'subscriber': '',
        });
        fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
    }
    Object.defineProperty(MyTelInput.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ n = this.parts.value;
            return !n.area && !n.exchange && !n.subscriber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "shouldPlaceholderFloat", {
        get: /**
         * @return {?}
         */
        function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder;
        },
        set: /**
         * @param {?} plh
         * @return {?}
         */
        function (plh) {
            this._placeholder = plh;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this._required;
        },
        set: /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            this._required = _angular_cdk_coercion.coerceBooleanProperty(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} dis
         * @return {?}
         */
        function (dis) {
            this._disabled = _angular_cdk_coercion.coerceBooleanProperty(dis);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ n = this.parts.value;
            if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {
                return new MyTel(n.area, n.exchange, n.subscriber);
            }
            return null;
        },
        set: /**
         * @param {?} tel
         * @return {?}
         */
        function (tel) {
            tel = tel || new MyTel('', '', '');
            this.parts.setValue({ area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber });
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MyTelInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    MyTelInput.prototype.setDescribedByIds = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this.describedBy = ids.join(' ');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MyTelInput.prototype.onContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((/** @type {?} */ (event.target)).tagName.toLowerCase() != 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    };
    MyTelInput.nextId = 0;
    MyTelInput.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'my-tel-input',
                    template: "<div [formGroup]=\"parts\"><input class=\"area\" formControlName=\"area\" size=\"3\"> <span>&ndash;</span> <input class=\"exchange\" formControlName=\"exchange\" size=\"3\"> <span>&ndash;</span> <input class=\"subscriber\" formControlName=\"subscriber\" size=\"4\"></div>",
                    styles: ["div { display: flex; } input { border: none; background: none; padding: 0; outline: none; font: inherit; text-align: center; } span { opacity: 0; transition: opacity 200ms; } :host.floating span { opacity: 1; } "],
                    providers: [{ provide: _angular_material_formField.MatFormFieldControl, useExisting: MyTelInput }],
                    host: {
                        '[class.floating]': 'shouldPlaceholderFloat',
                        '[id]': 'id',
                        '[attr.aria-describedby]': 'describedBy',
                    }
                },] },
    ];
    /** @nocollapse */
    MyTelInput.ctorParameters = function () { return [
        { type: _angular_forms.FormBuilder, },
        { type: _angular_cdk_a11y.FocusMonitor, },
        { type: _angular_core.ElementRef, },
    ]; };
    MyTelInput.propDecorators = {
        "placeholder": [{ type: _angular_core.Input },],
        "required": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "value": [{ type: _angular_core.Input },],
    };
    return MyTelInput;
}());
/**
 * \@title Form field with custom telephone number input control.
 */
var FormFieldCustomControlExample = (function () {
    function FormFieldCustomControlExample() {
    }
    FormFieldCustomControlExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'form-field-custom-control-example',
                    template: "\n    <mat-form-field>\n      <my-tel-input placeholder=\"Phone number\" required></my-tel-input>\n      <mat-icon matSuffix>phone</mat-icon>\n      <mat-hint>Include area code</mat-hint>\n    </mat-form-field>\n  "
                },] },
    ];
    /** @nocollapse */
    FormFieldCustomControlExample.ctorParameters = function () { return []; };
    return FormFieldCustomControlExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field with error messages
 */
var FormFieldErrorExample = (function () {
    function FormFieldErrorExample() {
        this.email = new _angular_forms.FormControl('', [_angular_forms.Validators.required, _angular_forms.Validators.email]);
    }
    /**
     * @return {?}
     */
    FormFieldErrorExample.prototype.getErrorMessage = /**
     * @return {?}
     */
    function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormFieldErrorExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'form-field-error-example',
                    template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required><mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    FormFieldErrorExample.ctorParameters = function () { return []; };
    return FormFieldErrorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field with hints
 */
var FormFieldHintExample = (function () {
    function FormFieldHintExample() {
    }
    FormFieldHintExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'form-field-hint-example',
                    template: "<div class=\"example-container\"><mat-form-field hintLabel=\"Max 10 characters\"><input matInput #input maxlength=\"10\" placeholder=\"Enter some input\"><mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint></mat-form-field><mat-form-field><mat-select placeholder=\"Select me\"><mat-option value=\"option\">Option</mat-option></mat-select><mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    FormFieldHintExample.ctorParameters = function () { return []; };
    return FormFieldHintExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Simple form field
 */
var FormFieldOverviewExample = (function () {
    function FormFieldOverviewExample() {
    }
    FormFieldOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'form-field-overview-example',
                    template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Input\"></mat-form-field><mat-form-field><textarea matInput placeholder=\"Textarea\"></textarea></mat-form-field><mat-form-field><mat-select placeholder=\"Select\"><mat-option value=\"option\">Option</mat-option></mat-select></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    FormFieldOverviewExample.ctorParameters = function () { return []; };
    return FormFieldOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field with placeholder
 */
var FormFieldPlaceholderExample = (function () {
    function FormFieldPlaceholderExample(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatPlaceholder: 'auto',
        });
    }
    FormFieldPlaceholderExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'form-field-placeholder-example',
                    template: "<div class=\"example-container\"><form class=\"example-container\" [formGroup]=\"options\"><mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox><div><label>Float placeholder:</label><mat-radio-group formControlName=\"floatPlaceholder\"><mat-radio-button value=\"auto\">Auto</mat-radio-button><mat-radio-button value=\"always\">Always</mat-radio-button><mat-radio-button value=\"never\">Never</mat-radio-button></mat-radio-group></div></form><mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatPlaceholder]=\"options.value.floatPlaceholder\"><input matInput placeholder=\"Simple placeholder\" required></mat-form-field><mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatPlaceholder]=\"options.value.floatPlaceholder\"><mat-select required><mat-option>-- None --</mat-option><mat-option value=\"option\">Option</mat-option></mat-select><mat-placeholder><mat-icon>favorite</mat-icon><b>Fancy</b> <i>placeholder</i></mat-placeholder></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } .example-container form { margin-bottom: 20px; } .example-container form > * { margin: 5px 0; } .example-container .mat-radio-button { margin: 0 5px; } "]
                },] },
    ];
    /** @nocollapse */
    FormFieldPlaceholderExample.ctorParameters = function () { return [
        { type: _angular_forms.FormBuilder, },
    ]; };
    return FormFieldPlaceholderExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field with prefix & suffix
 */
var FormFieldPrefixSuffixExample = (function () {
    function FormFieldPrefixSuffixExample() {
        this.hide = true;
    }
    FormFieldPrefixSuffixExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'form-field-prefix-suffix-example',
                    template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"><mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon></mat-form-field><mat-form-field><input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\"> <span matPrefix>$&nbsp;</span> <span matSuffix>.00</span></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } .example-right-align { text-align: right; } input.example-right-align::-webkit-outer-spin-button, input.example-right-align::-webkit-inner-spin-button { display: none; } "]
                },] },
    ];
    /** @nocollapse */
    FormFieldPrefixSuffixExample.ctorParameters = function () { return []; };
    return FormFieldPrefixSuffixExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field theming
 */
var FormFieldThemingExample = (function () {
    function FormFieldThemingExample(fb) {
        this.options = fb.group({
            'color': 'primary',
            'fontSize': [16, _angular_forms.Validators.min(10)],
        });
    }
    /**
     * @return {?}
     */
    FormFieldThemingExample.prototype.getFontSize = /**
     * @return {?}
     */
    function () {
        return Math.max(10, this.options.value.fontSize);
    };
    FormFieldThemingExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'form-field-theming-example',
                    template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\"><mat-form-field [color]=\"options.value.color\"><mat-select placeholder=\"Color\" formControlName=\"color\"><mat-option value=\"primary\">Primary</mat-option><mat-option value=\"accent\">Accent</mat-option><mat-option value=\"warn\">Warn</mat-option></mat-select></mat-form-field><mat-form-field [color]=\"options.value.color\"><input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\"><mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error></mat-form-field></form>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    FormFieldThemingExample.ctorParameters = function () { return [
        { type: _angular_forms.FormBuilder, },
    ]; };
    return FormFieldThemingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Dynamic grid-list
 */
var GridListDynamicExample = (function () {
    function GridListDynamicExample() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    GridListDynamicExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'grid-list-dynamic-example',
                    template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\"><mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">{{tile.text}}</mat-grid-tile></mat-grid-list>",
                },] },
    ];
    /** @nocollapse */
    GridListDynamicExample.ctorParameters = function () { return []; };
    return GridListDynamicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic grid-list
 */
var GridListOverviewExample = (function () {
    function GridListOverviewExample() {
    }
    GridListOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'grid-list-overview-example',
                    styles: ["mat-grid-tile { background: lightblue; } "],
                    template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\"><mat-grid-tile>1</mat-grid-tile><mat-grid-tile>2</mat-grid-tile><mat-grid-tile>3</mat-grid-tile><mat-grid-tile>4</mat-grid-tile></mat-grid-list>",
                },] },
    ];
    /** @nocollapse */
    GridListOverviewExample.ctorParameters = function () { return []; };
    return GridListOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic icons
 */
var IconOverviewExample = (function () {
    function IconOverviewExample() {
    }
    IconOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'icon-overview-example',
                    template: "<mat-icon>home</mat-icon>",
                },] },
    ];
    /** @nocollapse */
    IconOverviewExample.ctorParameters = function () { return []; };
    return IconOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title SVG icons
 */
var IconSvgExample = (function () {
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    IconSvgExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'icon-svg-example',
                    template: "<mat-icon svgIcon=\"thumbs-up\"></mat-icon>",
                },] },
    ];
    /** @nocollapse */
    IconSvgExample.ctorParameters = function () { return [
        { type: _angular_material.MatIconRegistry, },
        { type: _angular_platformBrowser.DomSanitizer, },
    ]; };
    return IconSvgExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Auto-resizing textarea
 */
var InputAutosizeTextareaExample = (function () {
    function InputAutosizeTextareaExample() {
    }
    InputAutosizeTextareaExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'input-autosize-textarea-example',
                    template: "<mat-form-field><textarea matInput placeholder=\"Autosize textarea\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\"></textarea></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    InputAutosizeTextareaExample.ctorParameters = function () { return []; };
    return InputAutosizeTextareaExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Input with a clear button
 */
var InputClearableExample = (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    InputClearableExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'input-clearable-example',
                    template: "<mat-form-field class=\"example-form-field\"><input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"> <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\"><mat-icon>close</mat-icon></button></mat-form-field>",
                    styles: [".example-form-field { width: 200px; } "],
                },] },
    ];
    /** @nocollapse */
    InputClearableExample.ctorParameters = function () { return []; };
    return InputClearableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    MyErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        var /** @type {?} */ isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
/**
 * \@title Input with a custom ErrorStateMatcher
 */
var InputErrorStateMatcherExample = (function () {
    function InputErrorStateMatcherExample() {
        this.emailFormControl = new _angular_forms.FormControl('', [
            _angular_forms.Validators.required,
            _angular_forms.Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    InputErrorStateMatcherExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'input-error-state-matcher-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"><mat-hint>Errors appear instantly!</mat-hint><mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error><mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    /** @nocollapse */
    InputErrorStateMatcherExample.ctorParameters = function () { return []; };
    return InputErrorStateMatcherExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Input with error messages
 */
var InputErrorsExample = (function () {
    function InputErrorsExample() {
        this.emailFormControl = new _angular_forms.FormControl('', [
            _angular_forms.Validators.required,
            _angular_forms.Validators.email,
        ]);
    }
    InputErrorsExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'input-errors-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"><mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error><mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    /** @nocollapse */
    InputErrorsExample.ctorParameters = function () { return []; };
    return InputErrorsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Inputs in a form
 */
var InputFormExample = (function () {
    function InputFormExample() {
    }
    InputFormExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'input-form-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Company (disabled)\" disabled=\"disabled\" value=\"Google\"></mat-form-field><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"First name\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Long Last Name That Will Be Truncated\"></mat-form-field></td></tr></table><p><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea></mat-form-field><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Address 2\"></textarea></mat-form-field></p><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"City\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"State\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\"><mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint></mat-form-field></td></tr></table></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    /** @nocollapse */
    InputFormExample.ctorParameters = function () { return []; };
    return InputFormExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Input with hints
 */
var InputHintExample = (function () {
    function InputHintExample() {
    }
    InputHintExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'input-hint-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput #message maxlength=\"256\" placeholder=\"Message\"><mat-hint align=\"start\"><strong>Don't disclose personal info</strong></mat-hint><mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    /** @nocollapse */
    InputHintExample.ctorParameters = function () { return []; };
    return InputHintExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic Inputs
 */
var InputOverviewExample = (function () {
    function InputOverviewExample() {
    }
    InputOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'input-overview-example',
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Favorite food\" value=\"Sushi\"></mat-form-field><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Leave a comment\"></textarea></mat-form-field></form>",
                },] },
    ];
    /** @nocollapse */
    InputOverviewExample.ctorParameters = function () { return []; };
    return InputOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Inputs with prefixes and suffixes
 */
var InputPrefixSuffixExample = (function () {
    function InputPrefixSuffixExample() {
    }
    InputPrefixSuffixExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'input-prefix-suffix-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><span matPrefix>+1 &nbsp;</span> <input type=\"tel\" matInput placeholder=\"Telephone\"><mat-icon matSuffix>mode_edit</mat-icon></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    /** @nocollapse */
    InputPrefixSuffixExample.ctorParameters = function () { return []; };
    return InputPrefixSuffixExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic list
 */
var ListOverviewExample = (function () {
    function ListOverviewExample() {
    }
    ListOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'list-overview-example',
                    template: "<mat-list><mat-list-item>Item 1</mat-list-item><mat-list-item>Item 2</mat-list-item><mat-list-item>Item 3</mat-list-item></mat-list>",
                },] },
    ];
    /** @nocollapse */
    ListOverviewExample.ctorParameters = function () { return []; };
    return ListOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title List with sections
 */
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
    ListSectionsExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'list-sections-example',
                    styles: [".mat-list-icon { color: rgba(0, 0, 0, 0.54); } "],
                    template: "<mat-list><h3 mat-subheader>Folders</h3><mat-list-item *ngFor=\"let folder of folders\"><mat-icon mat-list-icon>folder</mat-icon><h4 mat-line>{{folder.name}}</h4><p mat-line>{{folder.updated | date}}</p></mat-list-item><mat-divider></mat-divider><h3 mat-subheader>Notes</h3><mat-list-item *ngFor=\"let note of notes\"><mat-icon mat-list-icon>note</mat-icon><h4 mat-line>{{note.name}}</h4><p mat-line>{{note.updated | date}}</p></mat-list-item></mat-list>",
                },] },
    ];
    /** @nocollapse */
    ListSectionsExample.ctorParameters = function () { return []; };
    return ListSectionsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title List with selection
 */
var ListSelectionExample = (function () {
    function ListSelectionExample() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ListSelectionExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'list-selection-example',
                    styles: ["/** No styles for this example. */ "],
                    template: "<mat-selection-list #shoes><mat-list-option *ngFor=\"let shoe of typesOfShoes\">{{shoe}}</mat-list-option></mat-selection-list><p>Options selected: {{shoes.selectedOptions.selected.length}}</p>",
                },] },
    ];
    /** @nocollapse */
    ListSelectionExample.ctorParameters = function () { return []; };
    return ListSelectionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Menu with icons
 */
var MenuIconsExample = (function () {
    function MenuIconsExample() {
    }
    MenuIconsExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'menu-icons-example',
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button><mat-menu #menu=\"matMenu\"><button mat-menu-item><mat-icon>dialpad</mat-icon><span>Redial</span></button> <button mat-menu-item disabled=\"disabled\"><mat-icon>voicemail</mat-icon><span>Check voicemail</span></button> <button mat-menu-item><mat-icon>notifications_off</mat-icon><span>Disable alerts</span></button></mat-menu>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    MenuIconsExample.ctorParameters = function () { return []; };
    return MenuIconsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic menu
 */
var MenuOverviewExample = (function () {
    function MenuOverviewExample() {
    }
    MenuOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'menu-overview-example',
                    template: "<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button><mat-menu #menu=\"matMenu\"><button mat-menu-item>Item 1</button> <button mat-menu-item>Item 2</button></mat-menu>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    MenuOverviewExample.ctorParameters = function () { return []; };
    return MenuOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Nested menu
 */
var NestedMenuExample = (function () {
    function NestedMenuExample() {
    }
    NestedMenuExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nested-menu-example',
                    template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button><mat-menu #animals=\"matMenu\"><button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button> <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button></mat-menu><mat-menu #vertebrates=\"matMenu\"><button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button> <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button> <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button> <button mat-menu-item>Birds</button> <button mat-menu-item>Mammals</button></mat-menu><mat-menu #invertebrates=\"matMenu\"><button mat-menu-item>Insects</button> <button mat-menu-item>Molluscs</button> <button mat-menu-item>Crustaceans</button> <button mat-menu-item>Corals</button> <button mat-menu-item>Arachnids</button> <button mat-menu-item>Velvet worms</button> <button mat-menu-item>Horseshoe crabs</button></mat-menu><mat-menu #fish=\"matMenu\"><button mat-menu-item>Baikal oilfish</button> <button mat-menu-item>Bala shark</button> <button mat-menu-item>Ballan wrasse</button> <button mat-menu-item>Bamboo shark</button> <button mat-menu-item>Banded killifish</button></mat-menu><mat-menu #amphibians=\"matMenu\"><button mat-menu-item>Sonoran desert toad</button> <button mat-menu-item>Western toad</button> <button mat-menu-item>Arroyo toad</button> <button mat-menu-item>Yosemite toad</button></mat-menu><mat-menu #reptiles=\"matMenu\"><button mat-menu-item>Banded Day Gecko</button> <button mat-menu-item>Banded Gila Monster</button> <button mat-menu-item>Black Tree Monitor</button> <button mat-menu-item>Blue Spiny Lizard</button> <button mat-menu-item disabled=\"disabled\">Velociraptor</button></mat-menu>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    /** @nocollapse */
    NestedMenuExample.ctorParameters = function () { return []; };
    return NestedMenuExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Configurable paginator
 */
var PaginatorConfigurableExample = (function () {
    function PaginatorConfigurableExample() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    /**
     * @param {?} setPageSizeOptionsInput
     * @return {?}
     */
    PaginatorConfigurableExample.prototype.setPageSizeOptions = /**
     * @param {?} setPageSizeOptionsInput
     * @return {?}
     */
    function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    PaginatorConfigurableExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'paginator-configurable-example',
                    template: "<mat-form-field>List length: <input matInput [(ngModel)]=\"length\"></mat-form-field><mat-form-field>Page size: <input matInput [(ngModel)]=\"pageSize\"></mat-form-field><mat-form-field>Page size options: <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"></mat-form-field><mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event\"></mat-paginator><div *ngIf=\"pageEvent\"><h5>Page Change Event Properties</h5><div>List length: {{pageEvent.length}}</div><div>Page size: {{pageEvent.pageSize}}</div><div>Page index: {{pageEvent.pageIndex}}</div></div>",
                },] },
    ];
    /** @nocollapse */
    PaginatorConfigurableExample.ctorParameters = function () { return []; };
    return PaginatorConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Paginator
 */
var PaginatorOverviewExample = (function () {
    function PaginatorOverviewExample() {
    }
    PaginatorOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'paginator-overview-example',
                    template: "<mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>",
                },] },
    ];
    /** @nocollapse */
    PaginatorOverviewExample.ctorParameters = function () { return []; };
    return PaginatorOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Buffer progress-bar
 */
var ProgressBarBufferExample = (function () {
    function ProgressBarBufferExample() {
    }
    ProgressBarBufferExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'progress-bar-buffer-example',
                    template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>",
                },] },
    ];
    /** @nocollapse */
    ProgressBarBufferExample.ctorParameters = function () { return []; };
    return ProgressBarBufferExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Configurable progress-bar
 */
var ProgressBarConfigurableExample = (function () {
    function ProgressBarConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    ProgressBarConfigurableExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'progress-bar-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Progress bar configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><mat-radio-group [(ngModel)]=\"mode\"><mat-radio-button class=\"example-margin\" value=\"determinate\">Determinate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"buffer\">Buffer</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"query\">Query</mat-radio-button></mat-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\"><label class=\"example-margin\">Progress:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider></section><section class=\"example-section\" *ngIf=\"mode == 'buffer'\"><label class=\"example-margin\">Buffer:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider></section></mat-card-content></mat-card><mat-card><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\"></mat-progress-bar></section></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
                },] },
    ];
    /** @nocollapse */
    ProgressBarConfigurableExample.ctorParameters = function () { return []; };
    return ProgressBarConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Determinate progress-bar
 */
var ProgressBarDeterminateExample = (function () {
    function ProgressBarDeterminateExample() {
    }
    ProgressBarDeterminateExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'progress-bar-determinate-example',
                    template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>",
                },] },
    ];
    /** @nocollapse */
    ProgressBarDeterminateExample.ctorParameters = function () { return []; };
    return ProgressBarDeterminateExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Indeterminate progress-bar
 */
var ProgressBarIndeterminateExample = (function () {
    function ProgressBarIndeterminateExample() {
    }
    ProgressBarIndeterminateExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'progress-bar-indeterminate-example',
                    template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>",
                },] },
    ];
    /** @nocollapse */
    ProgressBarIndeterminateExample.ctorParameters = function () { return []; };
    return ProgressBarIndeterminateExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Query progress-bar
 */
var ProgressBarQueryExample = (function () {
    function ProgressBarQueryExample() {
    }
    ProgressBarQueryExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'progress-bar-query-example',
                    template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>",
                },] },
    ];
    /** @nocollapse */
    ProgressBarQueryExample.ctorParameters = function () { return []; };
    return ProgressBarQueryExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Configurable progress spinner
 */
var ProgressSpinnerConfigurableExample = (function () {
    function ProgressSpinnerConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    ProgressSpinnerConfigurableExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'progress-spinner-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Progress spinner configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><mat-radio-group [(ngModel)]=\"mode\"><mat-radio-button class=\"example-margin\" value=\"determinate\">Determinate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</mat-radio-button></mat-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate'\"><label class=\"example-margin\">Progress:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider></section></mat-card-content></mat-card><mat-card><mat-card-content><h2 class=\"example-h2\">Result</h2><mat-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></mat-progress-spinner></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
                },] },
    ];
    /** @nocollapse */
    ProgressSpinnerConfigurableExample.ctorParameters = function () { return []; };
    return ProgressSpinnerConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic progress-spinner
 */
var ProgressSpinnerOverviewExample = (function () {
    function ProgressSpinnerOverviewExample() {
    }
    ProgressSpinnerOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'progress-spinner-overview-example',
                    template: "<mat-spinner></mat-spinner>",
                },] },
    ];
    /** @nocollapse */
    ProgressSpinnerOverviewExample.ctorParameters = function () { return []; };
    return ProgressSpinnerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Radios with ngModel
 */
var RadioNgModelExample = (function () {
    function RadioNgModelExample() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    RadioNgModelExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'radio-ng-model-example',
                    template: "<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\"><mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">{{season}}</mat-radio-button></mat-radio-group><div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>",
                    styles: [".example-radio-group { display: inline-flex; flex-direction: column; } .example-radio-button { margin: 5px; } .example-selected-value { margin: 15px 0; } "],
                },] },
    ];
    /** @nocollapse */
    RadioNgModelExample.ctorParameters = function () { return []; };
    return RadioNgModelExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic radios
 */
var RadioOverviewExample = (function () {
    function RadioOverviewExample() {
    }
    RadioOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'radio-overview-example',
                    template: "<mat-radio-group><mat-radio-button value=\"1\">Option 1</mat-radio-button><mat-radio-button value=\"2\">Option 2</mat-radio-button></mat-radio-group>",
                    styles: [".mat-radio-button ~ .mat-radio-button { padding-right: 16px; } "],
                },] },
    ];
    /** @nocollapse */
    RadioOverviewExample.ctorParameters = function () { return []; };
    return RadioOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with custom trigger text
 */
var SelectCustomTriggerExample = (function () {
    function SelectCustomTriggerExample() {
        this.toppings = new _angular_forms.FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectCustomTriggerExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-custom-trigger-example',
                    template: "<mat-form-field><mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple=\"multiple\"><mat-select-trigger>{{toppings.value ? toppings.value[0] : ''}} <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">(+{{toppings.value.length - 1}} others)</span></mat-select-trigger><mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option></mat-select></mat-form-field>",
                    styles: [".example-additional-selection { opacity: 0.75; font-size: 0.75em; } "],
                },] },
    ];
    /** @nocollapse */
    SelectCustomTriggerExample.ctorParameters = function () { return []; };
    return SelectCustomTriggerExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Disabled select
 */
var SelectDisabledExample = (function () {
    function SelectDisabledExample() {
        this.disableSelect = new _angular_forms.FormControl(false);
    }
    SelectDisabledExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-disabled-example',
                    template: "<p><mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox></p><p><mat-form-field><mat-select placeholder=\"Choose an option\" [disabled]=\"disableSelect.value\"><mat-option value=\"option1\">Option 1</mat-option><mat-option value=\"option2\" disabled=\"disabled\">Option 2 (disabled)</mat-option><mat-option value=\"option3\">Option 3</mat-option></mat-select></mat-form-field></p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectDisabledExample.ctorParameters = function () { return []; };
    return SelectDisabledExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
var MyErrorStateMatcher$1 = (function () {
    function MyErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    MyErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        var /** @type {?} */ isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
/**
 * \@title Select with a custom ErrorStateMatcher
 */
var SelectErrorStateMatcherExample = (function () {
    function SelectErrorStateMatcherExample() {
        this.selected = new _angular_forms.FormControl('valid', [
            _angular_forms.Validators.required,
            _angular_forms.Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher$1();
    }
    SelectErrorStateMatcherExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-error-state-matcher-example',
                    template: "<mat-form-field><mat-select placeholder=\"Choose one\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\"><mat-option>Clear</mat-option><mat-option value=\"valid\">Valid option</mat-option><mat-option value=\"invalid\">Invalid option</mat-option></mat-select><mat-hint>Errors appear instantly!</mat-hint><mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error><mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">Your selection is invalid</mat-error></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectErrorStateMatcherExample.ctorParameters = function () { return []; };
    return SelectErrorStateMatcherExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select in a form
 */
var SelectFormExample = (function () {
    function SelectFormExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    SelectFormExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-form-example',
                    template: "<form><mat-form-field><mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\"><mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{food.viewValue}}</mat-option></mat-select></mat-form-field><p>Selected value: {{selectedValue}}</p></form>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectFormExample.ctorParameters = function () { return []; };
    return SelectFormExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with form field features
 */
var SelectHintErrorExample = (function () {
    function SelectHintErrorExample() {
        this.animalControl = new _angular_forms.FormControl('', [_angular_forms.Validators.required]);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
    SelectHintErrorExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-hint-error-example',
                    template: "<mat-form-field><mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required><mat-option>--</mat-option><mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">{{animal.name}}</mat-option></mat-select><mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error><mat-hint>{{animalControl.value?.sound}}</mat-hint></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectHintErrorExample.ctorParameters = function () { return []; };
    return SelectHintErrorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with multiple selection
 */
var SelectMultipleExample = (function () {
    function SelectMultipleExample() {
        this.toppings = new _angular_forms.FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectMultipleExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-multiple-example',
                    template: "<mat-form-field><mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple=\"multiple\"><mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectMultipleExample.ctorParameters = function () { return []; };
    return SelectMultipleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with no option ripple
 */
var SelectNoRippleExample = (function () {
    function SelectNoRippleExample() {
    }
    SelectNoRippleExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-no-ripple-example',
                    template: "<mat-form-field><mat-select placeholder=\"Select an option\" disableRipple><mat-option value=\"1\">Option 1</mat-option><mat-option value=\"2\">Option 2</mat-option><mat-option value=\"3\">Option 3</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectNoRippleExample.ctorParameters = function () { return []; };
    return SelectNoRippleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with option groups
 */
var SelectOptgroupExample = (function () {
    function SelectOptgroupExample() {
        this.pokemonControl = new _angular_forms.FormControl();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
    SelectOptgroupExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-optgroup-example',
                    template: "<mat-form-field><mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\"><mat-option>-- None --</mat-option><mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\"><mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">{{ pokemon.viewValue }}</mat-option></mat-optgroup></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectOptgroupExample.ctorParameters = function () { return []; };
    return SelectOptgroupExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic select
 */
var SelectOverviewExample = (function () {
    function SelectOverviewExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    SelectOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-overview-example',
                    template: "<mat-form-field><mat-select placeholder=\"Favorite food\"><mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{ food.viewValue }}</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectOverviewExample.ctorParameters = function () { return []; };
    return SelectOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with custom panel styling
 */
var SelectPanelClassExample = (function () {
    function SelectPanelClassExample() {
        this.panelColor = new _angular_forms.FormControl('red');
    }
    SelectPanelClassExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-panel-class-example',
                    template: "<mat-form-field><mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\" panelClass=\"example-panel-{{panelColor.value}}\"><mat-option value=\"red\">Red</mat-option><mat-option value=\"green\">Green</mat-option><mat-option value=\"blue\">Blue</mat-option></mat-select></mat-form-field>",
                    styles: [".example-panel-red .mat-select-content { background: rgba(255, 0, 0, 0.5); } .example-panel-green .mat-select-content { background: rgba(0, 255, 0, 0.5); } .example-panel-blue .mat-select-content { background: rgba(0, 0, 255, 0.5); } "],
                    encapsulation: _angular_core.ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    SelectPanelClassExample.ctorParameters = function () { return []; };
    return SelectPanelClassExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with reset option
 */
var SelectResetExample = (function () {
    function SelectResetExample() {
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
    SelectResetExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-reset-example',
                    template: "<mat-form-field><mat-select placeholder=\"State\"><mat-option>None</mat-option><mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectResetExample.ctorParameters = function () { return []; };
    return SelectResetExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with 2-way value binding
 */
var SelectValueBindingExample = (function () {
    function SelectValueBindingExample() {
        this.selected = 'option2';
    }
    SelectValueBindingExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'select-value-binding-example',
                    template: "<mat-form-field><mat-select [(value)]=\"selected\"><mat-option>None</mat-option><mat-option value=\"option1\">Option 1</mat-option><mat-option value=\"option2\">Option 2</mat-option><mat-option value=\"option3\">Option 3</mat-option></mat-select></mat-form-field><p>You selected: {{selected}}</p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SelectValueBindingExample.ctorParameters = function () { return []; };
    return SelectValueBindingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Sidenav with a FAB
 */
var SidenavFabExample = (function () {
    function SidenavFabExample() {
    }
    SidenavFabExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'sidenav-fab-example',
                    template: "<mat-sidenav-container class=\"example-sidenav-fab-container\"><mat-sidenav #sidenav mode=\"side\" opened=\"true\"><button mat-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"><mat-icon>add</mat-icon></button><div class=\"example-scrolling-content\">Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.</div></mat-sidenav><button mat-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"><mat-icon>add</mat-icon></button><div class=\"example-scrolling-content\">Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.</div></mat-sidenav-container>",
                    styles: [".example-sidenav-fab-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-fab-container mat-sidenav { max-width: 200px; } .example-sidenav-fab-container .mat-sidenav-content, .example-sidenav-fab-container mat-sidenav { display: flex; overflow: visible; } .example-scrolling-content { overflow: auto; height: 100%; } .example-fab.mat-mini-fab { position: absolute; right: 20px; bottom: 10px; } "],
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    SidenavFabExample.ctorParameters = function () { return []; };
    return SidenavFabExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic sidenav
 */
var SidenavOverviewExample = (function () {
    function SidenavOverviewExample() {
    }
    SidenavOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'sidenav-overview-example',
                    template: "<mat-sidenav-container class=\"example-container\"><mat-sidenav #sidenav class=\"example-sidenav\">Jolly good!</mat-sidenav><div class=\"example-sidenav-content\"><button type=\"button\" mat-button (click)=\"sidenav.open()\">Open sidenav</button></div></mat-sidenav-container>",
                    styles: [".example-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-content { display: flex; height: 100%; align-items: center; justify-content: center; } .example-sidenav { padding: 20px; } "],
                },] },
    ];
    /** @nocollapse */
    SidenavOverviewExample.ctorParameters = function () { return []; };
    return SidenavOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Configurable slide-toggle
 */
var SlideToggleConfigurableExample = (function () {
    function SlideToggleConfigurableExample() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    SlideToggleConfigurableExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'slide-toggle-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">Slide me!</mat-slide-toggle></section></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } "],
                },] },
    ];
    /** @nocollapse */
    SlideToggleConfigurableExample.ctorParameters = function () { return []; };
    return SlideToggleConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Slide-toggle with forms
 */
var SlideToggleFormsExample = (function () {
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
    SlideToggleFormsExample.prototype.onFormSubmit = /**
     * @param {?} formValue
     * @return {?}
     */
    function (formValue) {
        alert(JSON.stringify(formValue, null, 2));
    };
    SlideToggleFormsExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'slide-toggle-forms-example',
                    template: "<p>Slide Toggle using a simple NgModel.</p><mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{ isChecked }}</mat-slide-toggle><p>Slide Toggle inside of a Template-driven form</p><form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit(form.value)\" ngNativeValidate><mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle><mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle><button mat-raised-button type=\"submit\">Save Settings</button></form><p>Slide Toggle inside of a Reactive form</p><form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit(formGroup.value)\" ngNativeValidate><mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle><mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle><p>Form Group Status: {{ formGroup.status}}</p><button mat-rasied-button type=\"submit\">Save Settings</button></form>",
                    styles: [".example-form mat-slide-toggle { margin: 8px 0; display: block; } "],
                },] },
    ];
    /** @nocollapse */
    SlideToggleFormsExample.ctorParameters = function () { return [
        { type: _angular_forms.FormBuilder, },
    ]; };
    return SlideToggleFormsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic slide-toggles
 */
var SlideToggleOverviewExample = (function () {
    function SlideToggleOverviewExample() {
    }
    SlideToggleOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'slide-toggle-overview-example',
                    template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>",
                },] },
    ];
    /** @nocollapse */
    SlideToggleOverviewExample.ctorParameters = function () { return []; };
    return SlideToggleOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Configurable slider
 */
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
        get: /**
         * @return {?}
         */
        function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    SliderConfigurableExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'slider-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\"></mat-form-field></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">Auto ticks</mat-checkbox><mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\"><input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\"></mat-form-field></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><mat-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumb-label]=\"thumbLabel\" [tick-interval]=\"tickInterval\" [(ngModel)]=\"value\" [vertical]=\"vertical\"></mat-slider></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } .mat-slider-horizontal { width: 300px; } .mat-slider-vertical { height: 300px; } "],
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    SliderConfigurableExample.ctorParameters = function () { return []; };
    return SliderConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic slider
 */
var SliderOverviewExample = (function () {
    function SliderOverviewExample() {
    }
    SliderOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'slider-overview-example',
                    template: "<mat-slider></mat-slider>",
                    styles: ["/** No CSS for this example */ mat-slider { width: 300px; } "],
                },] },
    ];
    /** @nocollapse */
    SliderOverviewExample.ctorParameters = function () { return []; };
    return SliderOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Snack-bar with a custom component
 */
var SnackBarComponentExample = (function () {
    function SnackBarComponentExample(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @return {?}
     */
    SnackBarComponentExample.prototype.openSnackBar = /**
     * @return {?}
     */
    function () {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500,
        });
    };
    SnackBarComponentExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'snack-bar-component-example',
                    template: "<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pizza party</button>",
                },] },
    ];
    /** @nocollapse */
    SnackBarComponentExample.ctorParameters = function () { return [
        { type: _angular_material.MatSnackBar, },
    ]; };
    return SnackBarComponentExample;
}());
var PizzaPartyComponent = (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'snack-bar-component-example-snack',
                    template: "<span class=\"example-pizza-party\">Pizza party!!! 🍕</span>",
                    styles: [".example-pizza-party { color: hotpink; }"],
                },] },
    ];
    /** @nocollapse */
    PizzaPartyComponent.ctorParameters = function () { return []; };
    return PizzaPartyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic snack-bar
 */
var SnackBarOverviewExample = (function () {
    function SnackBarOverviewExample(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    SnackBarOverviewExample.prototype.openSnackBar = /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackBarOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'snack-bar-overview-example',
                    template: "<mat-form-field><input matInput value=\"Disco party!\" placeholder=\"Message\" #message></mat-form-field><mat-form-field><input matInput value=\"Dance\" placeholder=\"Action\" #action></mat-form-field><button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>",
                },] },
    ];
    /** @nocollapse */
    SnackBarOverviewExample.ctorParameters = function () { return [
        { type: _angular_material.MatSnackBar, },
    ]; };
    return SnackBarOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Sorting overview
 */
var SortOverviewExample = (function () {
    function SortOverviewExample() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4' },
        ];
        this.sortedData = this.desserts.slice();
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    SortOverviewExample.prototype.sortData = /**
     * @param {?} sort
     * @return {?}
     */
    function (sort) {
        var /** @type {?} */ data = this.desserts.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var /** @type {?} */ isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(+a.calories, +b.calories, isAsc);
                case 'fat': return compare(+a.fat, +b.fat, isAsc);
                case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
                case 'protein': return compare(+a.protein, +b.protein, isAsc);
                default: return 0;
            }
        });
    };
    SortOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'sort-overview-example',
                    template: "<table matSort (matSortChange)=\"sortData($event)\"><tr><th mat-sort-header=\"name\">Dessert (100g)</th><th mat-sort-header=\"calories\">Calories</th><th mat-sort-header=\"fat\">Fat (g)</th><th mat-sort-header=\"carbs\">Carbs (g)</th><th mat-sort-header=\"protein\">Protein (g)</th></tr><tr *ngFor=\"let dessert of sortedData\"><td>{{dessert.name}}</td><td>{{dessert.calories}}</td><td>{{dessert.fat}}</td><td>{{dessert.carbs}}</td><td>{{dessert.protein}}</td></tr></table>",
                    styles: [".mat-sort-header-container { align-items: center; } "],
                },] },
    ];
    /** @nocollapse */
    SortOverviewExample.ctorParameters = function () { return []; };
    return SortOverviewExample;
}());
/**
 * @param {?} a
 * @param {?} b
 * @param {?} isAsc
 * @return {?}
 */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Stepper overview
 */
var StepperOverviewExample = (function () {
    function StepperOverviewExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    /**
     * @return {?}
     */
    StepperOverviewExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms.Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms.Validators.required]
        });
    };
    StepperOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'stepper-overview-example',
                    template: "<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button><mat-horizontal-stepper [linear]=\"isLinear\"><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button></div></mat-step></mat-horizontal-stepper>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    /** @nocollapse */
    StepperOverviewExample.ctorParameters = function () { return [
        { type: _angular_forms.FormBuilder, },
    ]; };
    return StepperOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic table
 */
var TableBasicExample = (function () {
    function TableBasicExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material.MatTableDataSource(ELEMENT_DATA);
    }
    TableBasicExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'table-basic-example',
                    styles: [".example-container { display: flex; flex-direction: column; max-height: 500px; min-width: 300px; } .mat-table { overflow: auto; max-height: 500px; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><mat-table #table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"position\"><mat-header-cell *matHeaderCellDef>No.</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell></ng-container><ng-container matColumnDef=\"name\"><mat-header-cell *matHeaderCellDef>Name</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell></ng-container><ng-container matColumnDef=\"weight\"><mat-header-cell *matHeaderCellDef>Weight</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.weight}}</mat-cell></ng-container><ng-container matColumnDef=\"symbol\"><mat-header-cell *matHeaderCellDef>Symbol</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.symbol}}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row></mat-table></div>",
                },] },
    ];
    /** @nocollapse */
    TableBasicExample.ctorParameters = function () { return []; };
    return TableBasicExample;
}());
/**
 * @record
 */

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table with filtering
 */
var TableFilteringExample = (function () {
    function TableFilteringExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material.MatTableDataSource(ELEMENT_DATA$1);
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    TableFilteringExample.prototype.applyFilter = /**
     * @param {?} filterValue
     * @return {?}
     */
    function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    TableFilteringExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'table-filtering-example',
                    styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; padding: 8px 24px 0; } .mat-form-field { font-size: 14px; width: 100%; } .mat-table { overflow: auto; max-height: 500px; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\"><mat-form-field><input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"></mat-form-field></div><mat-table #table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"position\"><mat-header-cell *matHeaderCellDef>No.</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell></ng-container><ng-container matColumnDef=\"name\"><mat-header-cell *matHeaderCellDef>Name</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell></ng-container><ng-container matColumnDef=\"weight\"><mat-header-cell *matHeaderCellDef>Weight</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.weight}}</mat-cell></ng-container><ng-container matColumnDef=\"symbol\"><mat-header-cell *matHeaderCellDef>Symbol</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.symbol}}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row></mat-table></div>",
                },] },
    ];
    /** @nocollapse */
    TableFilteringExample.ctorParameters = function () { return []; };
    return TableFilteringExample;
}());
/**
 * @record
 */

var ELEMENT_DATA$1 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table retrieving data through HTTP
 */
var TableHttpExample = (function () {
    function TableHttpExample(http) {
        this.http = http;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.dataSource = new _angular_material.MatTableDataSource();
        this.resultsLength = 0;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
    }
    /**
     * @return {?}
     */
    TableHttpExample.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        rxjs_Observable.Observable.merge(this.sort.sortChange, this.paginator.page)
            .startWith(null)
            .switchMap(function () {
            _this.isLoadingResults = true;
            return /** @type {?} */ ((_this.exampleDatabase)).getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
        })
            .map(function (data) {
            // Flip flag to show that loading has finished.
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data.total_count;
            return data.items;
        })
            .catch(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return rxjs_Observable.Observable.of([]);
        })
            .subscribe(function (data) { return _this.dataSource.data = data; });
    };
    TableHttpExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'table-http-example',
                    styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; max-height: 500px; min-width: 300px; position: relative; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .example-table { overflow: auto; min-height: 300px; } .example-loading-shade { position: absolute; top: 0; left: 0; bottom: 56px; right: 0; background: rgba(0, 0, 0, 0.15); z-index: 1; display: flex; align-items: center; justify-content: center; } .example-rate-limit-reached { color: #980000; max-width: 360px; text-align: center; } /* Column Widths */ .mat-column-number, .mat-column-state { max-width: 64px; } .mat-column-created { max-width: 124px; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\"><mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner><div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">GitHub's API rate limit has been reached. It will be reset in one minute.</div></div><mat-table #table [dataSource]=\"dataSource\" class=\"example-table\" matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\"><ng-container matColumnDef=\"number\"><mat-header-cell *matHeaderCellDef>#</mat-header-cell><mat-cell *matCellDef=\"let row\">{{ row.number }}</mat-cell></ng-container><ng-container matColumnDef=\"title\"><mat-header-cell *matHeaderCellDef>Title</mat-header-cell><mat-cell *matCellDef=\"let row\">{{ row.title }}</mat-cell></ng-container><ng-container matColumnDef=\"state\"><mat-header-cell *matHeaderCellDef>State</mat-header-cell><mat-cell *matCellDef=\"let row\">{{ row.state }}</mat-cell></ng-container><ng-container matColumnDef=\"created\"><mat-header-cell *matHeaderCellDef mat-sort-header disableClear=\"true\">Created</mat-header-cell><mat-cell *matCellDef=\"let row\">{{ row.created_at | date }}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row></mat-table><mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator></div>",
                },] },
    ];
    /** @nocollapse */
    TableHttpExample.ctorParameters = function () { return [
        { type: _angular_common_http.HttpClient, },
    ]; };
    TableHttpExample.propDecorators = {
        "paginator": [{ type: _angular_core.ViewChild, args: [_angular_material.MatPaginator,] },],
        "sort": [{ type: _angular_core.ViewChild, args: [_angular_material.MatSort,] },],
    };
    return TableHttpExample;
}());
/**
 * @record
 */

/**
 * @record
 */

/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleHttpDao = (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    /**
     * @param {?} sort
     * @param {?} order
     * @param {?} page
     * @return {?}
     */
    ExampleHttpDao.prototype.getRepoIssues = /**
     * @param {?} sort
     * @param {?} order
     * @param {?} page
     * @return {?}
     */
    function (sort, order, page) {
        var /** @type {?} */ href = 'https://api.github.com/search/issues';
        var /** @type {?} */ requestUrl = href + "?q=repo:angular/material2&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.http.get(requestUrl);
    };
    return ExampleHttpDao;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Data table with sorting, pagination, and filtering.
 */
var TableOverviewExample = (function () {
    function TableOverviewExample() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        var /** @type {?} */ users = [];
        for (var /** @type {?} */ i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material.MatTableDataSource(users);
    }
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     * @return {?}
     */
    TableOverviewExample.prototype.ngAfterViewInit = /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     * @return {?}
     */
    function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    /**
     * @param {?} filterValue
     * @return {?}
     */
    TableOverviewExample.prototype.applyFilter = /**
     * @param {?} filterValue
     * @return {?}
     */
    function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    TableOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'table-overview-example',
                    styles: [".example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; padding: 8px 24px 0; } .mat-form-field { font-size: 14px; width: 100%; } .mat-table { overflow: auto; max-height: 500px; } "],
                    template: "<div class=\"example-header\"><mat-form-field><input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"></mat-form-field></div><div class=\"example-container mat-elevation-z8\"><mat-table [dataSource]=\"dataSource\" matSort><ng-container matColumnDef=\"id\"><mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell><mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell></ng-container><ng-container matColumnDef=\"progress\"><mat-header-cell *matHeaderCellDef mat-sort-header>Progress</mat-header-cell><mat-cell *matCellDef=\"let row\">{{row.progress}}%</mat-cell></ng-container><ng-container matColumnDef=\"name\"><mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell><mat-cell *matCellDef=\"let row\">{{row.name}}</mat-cell></ng-container><ng-container matColumnDef=\"color\"><mat-header-cell *matHeaderCellDef mat-sort-header>Color</mat-header-cell><mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row></mat-table><mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator></div>",
                },] },
    ];
    /** @nocollapse */
    TableOverviewExample.ctorParameters = function () { return []; };
    TableOverviewExample.propDecorators = {
        "paginator": [{ type: _angular_core.ViewChild, args: [_angular_material.MatPaginator,] },],
        "sort": [{ type: _angular_core.ViewChild, args: [_angular_material.MatSort,] },],
    };
    return TableOverviewExample;
}());
/**
 * Builds and returns a new User.
 * @param {?} id
 * @return {?}
 */
function createNewUser(id) {
    var /** @type {?} */ name = NAMES$1[Math.round(Math.random() * (NAMES$1.length - 1))] + ' ' +
        NAMES$1[Math.round(Math.random() * (NAMES$1.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS$1[Math.round(Math.random() * (COLORS$1.length - 1))]
    };
}
/**
 * Constants used to fill up our data base.
 */
var COLORS$1 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$1 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table with pagination
 */
var TablePaginationExample = (function () {
    function TablePaginationExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material.MatTableDataSource(ELEMENT_DATA$2);
    }
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     * @return {?}
     */
    TablePaginationExample.prototype.ngAfterViewInit = /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     * @return {?}
     */
    function () {
        this.dataSource.paginator = this.paginator;
    };
    TablePaginationExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'table-pagination-example',
                    styles: [".example-container { display: flex; flex-direction: column; min-width: 300px; } .mat-table { overflow: auto; max-height: 500px; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><mat-table #table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"position\"><mat-header-cell *matHeaderCellDef>No.</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell></ng-container><ng-container matColumnDef=\"name\"><mat-header-cell *matHeaderCellDef>Name</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell></ng-container><ng-container matColumnDef=\"weight\"><mat-header-cell *matHeaderCellDef>Weight</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.weight}}</mat-cell></ng-container><ng-container matColumnDef=\"symbol\"><mat-header-cell *matHeaderCellDef>Symbol</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.symbol}}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row></mat-table><mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator></div>",
                },] },
    ];
    /** @nocollapse */
    TablePaginationExample.ctorParameters = function () { return []; };
    TablePaginationExample.propDecorators = {
        "paginator": [{ type: _angular_core.ViewChild, args: [_angular_material.MatPaginator,] },],
    };
    return TablePaginationExample;
}());
/**
 * @record
 */

var ELEMENT_DATA$2 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table with selection
 */
var TableSelectionExample = (function () {
    function TableSelectionExample() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material.MatTableDataSource(ELEMENT_DATA$3);
        this.selection = new _angular_cdk_collections.SelectionModel(true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    TableSelectionExample.prototype.isAllSelected = /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    function () {
        var /** @type {?} */ numSelected = this.selection.selected.length;
        var /** @type {?} */ numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    TableSelectionExample.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    TableSelectionExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'table-selection-example',
                    styles: [".example-container { display: flex; flex-direction: column; max-height: 500px; min-width: 300px; } .mat-table { overflow: auto; max-height: 500px; } .mat-column-select { overflow: visible; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><mat-table #table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"select\"><mat-header-cell *matHeaderCellDef><mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></mat-checkbox></mat-header-cell><mat-cell *matCellDef=\"let row\"><mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"></mat-checkbox></mat-cell></ng-container><ng-container matColumnDef=\"position\"><mat-header-cell *matHeaderCellDef>No.</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell></ng-container><ng-container matColumnDef=\"name\"><mat-header-cell *matHeaderCellDef>Name</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell></ng-container><ng-container matColumnDef=\"weight\"><mat-header-cell *matHeaderCellDef>Weight</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.weight}}</mat-cell></ng-container><ng-container matColumnDef=\"symbol\"><mat-header-cell *matHeaderCellDef>Symbol</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.symbol}}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row></mat-table></div>",
                },] },
    ];
    /** @nocollapse */
    TableSelectionExample.ctorParameters = function () { return []; };
    return TableSelectionExample;
}());
/**
 * @record
 */

var ELEMENT_DATA$3 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table with sorting
 */
var TableSortingExample = (function () {
    function TableSortingExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material.MatTableDataSource(ELEMENT_DATA$4);
    }
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     * @return {?}
     */
    TableSortingExample.prototype.ngAfterViewInit = /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     * @return {?}
     */
    function () {
        this.dataSource.sort = this.sort;
    };
    TableSortingExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'table-sorting-example',
                    styles: [".example-container { display: flex; flex-direction: column; min-width: 300px; } .mat-table { overflow: auto; max-height: 500px; } .mat-header-cell.mat-sort-header-sorted { color: black; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><mat-table #table [dataSource]=\"dataSource\" matSort><ng-container matColumnDef=\"position\"><mat-header-cell *matHeaderCellDef mat-sort-header>No.</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell></ng-container><ng-container matColumnDef=\"name\"><mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell></ng-container><ng-container matColumnDef=\"weight\"><mat-header-cell *matHeaderCellDef mat-sort-header>Weight</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.weight}}</mat-cell></ng-container><ng-container matColumnDef=\"symbol\"><mat-header-cell *matHeaderCellDef mat-sort-header>Symbol</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.symbol}}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row></mat-table></div>",
                },] },
    ];
    /** @nocollapse */
    TableSortingExample.ctorParameters = function () { return []; };
    TableSortingExample.propDecorators = {
        "sort": [{ type: _angular_core.ViewChild, args: [_angular_material.MatSort,] },],
    };
    return TableSortingExample;
}());
/**
 * @record
 */

var ELEMENT_DATA$4 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic tabs
 */
var TabsOverviewExample = (function () {
    function TabsOverviewExample() {
    }
    TabsOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'tabs-overview-example',
                    template: "<mat-tab-group><mat-tab label=\"Tab 1\">Content 1</mat-tab><mat-tab label=\"Tab 2\">Content 2</mat-tab></mat-tab-group>",
                },] },
    ];
    /** @nocollapse */
    TabsOverviewExample.ctorParameters = function () { return []; };
    return TabsOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Complex Example
 */
var TabsTemplateLabelExample = (function () {
    function TabsTemplateLabelExample() {
    }
    TabsTemplateLabelExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'tabs-template-label-example',
                    template: "<mat-tab-group class=\"demo-tab-group\"><mat-tab label=\"Tab 1\"><div class=\"demo-tab-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.</div></mat-tab><mat-tab label=\"Tab 2\"><ng-template mat-tab-label>⭐</ng-template><div class=\"demo-tab-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.</div></mat-tab><mat-tab label=\"Tab 3\" disabled=\"disabled\">No content</mat-tab><mat-tab label=\"Tab 4\"><div class=\"demo-tab-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.</div></mat-tab><mat-tab label=\"Tab 5\">No content</mat-tab><mat-tab label=\"Tab 6\">No content</mat-tab></mat-tab-group>",
                    styles: [".demo-tab-group { border: 1px solid #e8e8e8; } .demo-tab-content { padding: 16px; } "]
                },] },
    ];
    /** @nocollapse */
    TabsTemplateLabelExample.ctorParameters = function () { return []; };
    return TabsTemplateLabelExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Multi-row toolbar
 */
var ToolbarMultirowExample = (function () {
    function ToolbarMultirowExample() {
    }
    ToolbarMultirowExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'toolbar-multirow-example',
                    template: "<mat-toolbar color=\"primary\"><mat-toolbar-row><span>Custom Toolbar</span></mat-toolbar-row><mat-toolbar-row><span>Second Line</span> <span class=\"example-spacer\"></span><mat-icon class=\"example-icon\">verified_user</mat-icon></mat-toolbar-row><mat-toolbar-row><span>Third Line</span> <span class=\"example-spacer\"></span><mat-icon class=\"example-icon\">favorite</mat-icon><mat-icon class=\"example-icon\">delete</mat-icon></mat-toolbar-row></mat-toolbar>",
                    styles: [".example-icon { padding: 0 14px; } .example-spacer { flex: 1 1 auto; } "],
                },] },
    ];
    /** @nocollapse */
    ToolbarMultirowExample.ctorParameters = function () { return []; };
    return ToolbarMultirowExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic toolbar
 */
var ToolbarOverviewExample = (function () {
    function ToolbarOverviewExample() {
    }
    ToolbarOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'toolbar-overview-example',
                    template: "<mat-toolbar>My App</mat-toolbar>",
                },] },
    ];
    /** @nocollapse */
    ToolbarOverviewExample.ctorParameters = function () { return []; };
    return ToolbarOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic tooltip
 */
var TooltipOverviewExample = (function () {
    function TooltipOverviewExample() {
    }
    TooltipOverviewExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'tooltip-overview-example',
                    template: "<span matTooltip=\"Tooltip!\">I have a tooltip</span>",
                },] },
    ];
    /** @nocollapse */
    TooltipOverviewExample.ctorParameters = function () { return []; };
    return TooltipOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Tooltip with custom position
 */
var TooltipPositionExample = (function () {
    function TooltipPositionExample() {
        this.position = 'before';
    }
    TooltipPositionExample.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'tooltip-position-example',
                    template: "<div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\"><span>Show tooltip</span><mat-form-field><mat-select class=\"example-select\" [(ngModel)]=\"position\"><mat-option value=\"before\">Before</mat-option><mat-option value=\"after\">After</mat-option><mat-option value=\"above\">Above</mat-option><mat-option value=\"below\">Below</mat-option><mat-option value=\"left\">Left</mat-option><mat-option value=\"right\">Right</mat-option></mat-select></mat-form-field></div>",
                    styles: [".example-tooltip-host { display: inline-flex; align-items: center; margin: 50px; } .example-select { margin: 0 10px; } "],
                },] },
    ];
    /** @nocollapse */
    TooltipPositionExample.ctorParameters = function () { return []; };
    return TooltipPositionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable */
/** DO NOT MANUALLY EDIT THIS FILE, IT IS GENERATED VIA GULP 'build-examples-module' */
/**
 * @record
 */

var EXAMPLE_COMPONENTS = {
    'autocomplete-display': {
        title: 'Display value autocomplete',
        component: AutocompleteDisplayExample,
        additionalFiles: null,
        selectorName: null
    },
    'autocomplete-filter': {
        title: 'Filter autocomplete',
        component: AutocompleteFilterExample,
        additionalFiles: null,
        selectorName: null
    },
    'autocomplete-overview': {
        title: 'Autocomplete overview',
        component: AutocompleteOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'autocomplete-simple': {
        title: 'Simple autocomplete',
        component: AutocompleteSimpleExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-overview': {
        title: 'Basic buttons',
        component: ButtonOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-toggle-exclusive': {
        title: 'Exclusive selection',
        component: ButtonToggleExclusiveExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-toggle-overview': {
        title: 'Basic button-toggles',
        component: ButtonToggleOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-types': {
        title: 'Button varieties',
        component: ButtonTypesExample,
        additionalFiles: null,
        selectorName: null
    },
    'card-fancy': {
        title: 'Card with multiple sections',
        component: CardFancyExample,
        additionalFiles: null,
        selectorName: null
    },
    'card-overview': {
        title: 'Basic cards',
        component: CardOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'cdk-table-basic': {
        title: 'Basic CDK data-table',
        component: CdkTableBasicExample,
        additionalFiles: null,
        selectorName: null
    },
    'checkbox-configurable': {
        title: 'Configurable checkbox',
        component: CheckboxConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'checkbox-overview': {
        title: 'Basic checkboxes',
        component: CheckboxOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'chips-input': {
        title: 'Chips with input',
        component: ChipsInputExample,
        additionalFiles: null,
        selectorName: null
    },
    'chips-overview': {
        title: 'Basic chips',
        component: ChipsOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'chips-stacked': {
        title: 'Stacked chips',
        component: ChipsStackedExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-api': {
        title: 'Datepicker open method ',
        component: DatepickerApiExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-disabled': {
        title: 'Disabled datepicker ',
        component: DatepickerDisabledExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-events': {
        title: 'Datepicker input and change events ',
        component: DatepickerEventsExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-filter': {
        title: 'Datepicker with filter validation ',
        component: DatepickerFilterExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-formats': {
        title: 'Datepicker with custom formats ',
        component: DatepickerFormatsExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-locale': {
        title: 'Datepicker with different locale ',
        component: DatepickerLocaleExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-min-max': {
        title: 'Datepicker with min & max validation ',
        component: DatepickerMinMaxExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-moment': {
        title: 'Datepicker that uses Moment.js dates ',
        component: DatepickerMomentExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-overview': {
        title: 'Basic datepicker ',
        component: DatepickerOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-start-view': {
        title: 'Datepicker start date ',
        component: DatepickerStartViewExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-touch': {
        title: 'Datepicker touch UI ',
        component: DatepickerTouchExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-value': {
        title: 'Datepicker selected value ',
        component: DatepickerValueExample,
        additionalFiles: null,
        selectorName: null
    },
    'dialog-content': {
        title: 'Dialog with header, scrollable content and actions',
        component: DialogContentExample,
        additionalFiles: ["dialog-content-example-dialog.html"],
        selectorName: 'DialogContentExample, DialogContentExampleDialog'
    },
    'dialog-data': {
        title: 'Injecting data when opening a dialog',
        component: DialogDataExample,
        additionalFiles: ["dialog-data-example-dialog.html"],
        selectorName: 'DialogDataExample, DialogDataExampleDialog'
    },
    'dialog-elements': {
        title: 'Dialog elements',
        component: DialogElementsExample,
        additionalFiles: ["dialog-elements-example-dialog.html"],
        selectorName: 'DialogElementsExample, DialogElementsExampleDialog'
    },
    'dialog-overview': {
        title: 'Dialog Overview',
        component: DialogOverviewExample,
        additionalFiles: ["dialog-overview-example-dialog.html"],
        selectorName: 'DialogOverviewExample, DialogOverviewExampleDialog'
    },
    'elevation-overview': {
        title: 'Elevation CSS classes',
        component: ElevationOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'expansion-overview': {
        title: 'Basic expansion panel',
        component: ExpansionOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'expansion-steps': {
        title: 'Expansion panel as accordion',
        component: ExpansionStepsExample,
        additionalFiles: null,
        selectorName: null
    },
    'form-field-custom-control': {
        title: 'Form field with custom telephone number input control. ',
        component: FormFieldCustomControlExample,
        additionalFiles: ["form-field-custom-control-example.html"],
        selectorName: 'FormFieldCustomControlExample, MyTelInput'
    },
    'form-field-error': {
        title: 'Form field with error messages ',
        component: FormFieldErrorExample,
        additionalFiles: null,
        selectorName: null
    },
    'form-field-hint': {
        title: 'Form field with hints ',
        component: FormFieldHintExample,
        additionalFiles: null,
        selectorName: null
    },
    'form-field-overview': {
        title: 'Simple form field ',
        component: FormFieldOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'form-field-placeholder': {
        title: 'Form field with placeholder ',
        component: FormFieldPlaceholderExample,
        additionalFiles: null,
        selectorName: null
    },
    'form-field-prefix-suffix': {
        title: 'Form field with prefix & suffix ',
        component: FormFieldPrefixSuffixExample,
        additionalFiles: null,
        selectorName: null
    },
    'form-field-theming': {
        title: 'Form field theming ',
        component: FormFieldThemingExample,
        additionalFiles: null,
        selectorName: null
    },
    'grid-list-dynamic': {
        title: 'Dynamic grid-list',
        component: GridListDynamicExample,
        additionalFiles: null,
        selectorName: null
    },
    'grid-list-overview': {
        title: 'Basic grid-list',
        component: GridListOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'icon-overview': {
        title: 'Basic icons',
        component: IconOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'icon-svg': {
        title: 'SVG icons',
        component: IconSvgExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-autosize-textarea': {
        title: 'Auto-resizing textarea ',
        component: InputAutosizeTextareaExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-clearable': {
        title: 'Input with a clear button',
        component: InputClearableExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-error-state-matcher': {
        title: 'Input with a custom ErrorStateMatcher ',
        component: InputErrorStateMatcherExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-errors': {
        title: 'Input with error messages',
        component: InputErrorsExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-form': {
        title: 'Inputs in a form',
        component: InputFormExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-hint': {
        title: 'Input with hints',
        component: InputHintExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-overview': {
        title: 'Basic Inputs',
        component: InputOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-prefix-suffix': {
        title: 'Inputs with prefixes and suffixes',
        component: InputPrefixSuffixExample,
        additionalFiles: null,
        selectorName: null
    },
    'list-overview': {
        title: 'Basic list',
        component: ListOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'list-sections': {
        title: 'List with sections',
        component: ListSectionsExample,
        additionalFiles: null,
        selectorName: null
    },
    'list-selection': {
        title: 'List with selection',
        component: ListSelectionExample,
        additionalFiles: null,
        selectorName: null
    },
    'menu-icons': {
        title: 'Menu with icons',
        component: MenuIconsExample,
        additionalFiles: null,
        selectorName: null
    },
    'menu-overview': {
        title: 'Basic menu',
        component: MenuOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'nested-menu': {
        title: 'Nested menu',
        component: NestedMenuExample,
        additionalFiles: null,
        selectorName: null
    },
    'paginator-configurable': {
        title: 'Configurable paginator',
        component: PaginatorConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'paginator-overview': {
        title: 'Paginator',
        component: PaginatorOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-bar-buffer': {
        title: 'Buffer progress-bar',
        component: ProgressBarBufferExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-bar-configurable': {
        title: 'Configurable progress-bar',
        component: ProgressBarConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-bar-determinate': {
        title: 'Determinate progress-bar',
        component: ProgressBarDeterminateExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-bar-indeterminate': {
        title: 'Indeterminate progress-bar',
        component: ProgressBarIndeterminateExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-bar-query': {
        title: 'Query progress-bar',
        component: ProgressBarQueryExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-spinner-configurable': {
        title: 'Configurable progress spinner',
        component: ProgressSpinnerConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-spinner-overview': {
        title: 'Basic progress-spinner',
        component: ProgressSpinnerOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'radio-ng-model': {
        title: 'Radios with ngModel',
        component: RadioNgModelExample,
        additionalFiles: null,
        selectorName: null
    },
    'radio-overview': {
        title: 'Basic radios',
        component: RadioOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-custom-trigger': {
        title: 'Select with custom trigger text ',
        component: SelectCustomTriggerExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-disabled': {
        title: 'Disabled select ',
        component: SelectDisabledExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-error-state-matcher': {
        title: 'Select with a custom ErrorStateMatcher ',
        component: SelectErrorStateMatcherExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-form': {
        title: 'Select in a form',
        component: SelectFormExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-hint-error': {
        title: 'Select with form field features ',
        component: SelectHintErrorExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-multiple': {
        title: 'Select with multiple selection ',
        component: SelectMultipleExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-no-ripple': {
        title: 'Select with no option ripple ',
        component: SelectNoRippleExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-optgroup': {
        title: 'Select with option groups ',
        component: SelectOptgroupExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-overview': {
        title: 'Basic select',
        component: SelectOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-panel-class': {
        title: 'Select with custom panel styling',
        component: SelectPanelClassExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-reset': {
        title: 'Select with reset option ',
        component: SelectResetExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-value-binding': {
        title: 'Select with 2-way value binding ',
        component: SelectValueBindingExample,
        additionalFiles: null,
        selectorName: null
    },
    'sidenav-fab': {
        title: 'Sidenav with a FAB',
        component: SidenavFabExample,
        additionalFiles: null,
        selectorName: null
    },
    'sidenav-overview': {
        title: 'Basic sidenav',
        component: SidenavOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'slide-toggle-configurable': {
        title: 'Configurable slide-toggle',
        component: SlideToggleConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'slide-toggle-forms': {
        title: 'Slide-toggle with forms',
        component: SlideToggleFormsExample,
        additionalFiles: null,
        selectorName: null
    },
    'slide-toggle-overview': {
        title: 'Basic slide-toggles',
        component: SlideToggleOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'slider-configurable': {
        title: 'Configurable slider',
        component: SliderConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'slider-overview': {
        title: 'Basic slider',
        component: SliderOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'snack-bar-component': {
        title: 'Snack-bar with a custom component',
        component: SnackBarComponentExample,
        additionalFiles: ["snack-bar-component-example-snack.html"],
        selectorName: 'SnackBarComponentExample, PizzaPartyComponent'
    },
    'snack-bar-overview': {
        title: 'Basic snack-bar',
        component: SnackBarOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'sort-overview': {
        title: 'Sorting overview',
        component: SortOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'stepper-overview': {
        title: 'Stepper overview',
        component: StepperOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-basic': {
        title: 'Basic table',
        component: TableBasicExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-filtering': {
        title: 'Table with filtering',
        component: TableFilteringExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-http': {
        title: 'Table retrieving data through HTTP',
        component: TableHttpExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-overview': {
        title: 'Data table with sorting, pagination, and filtering.',
        component: TableOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-pagination': {
        title: 'Table with pagination',
        component: TablePaginationExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-selection': {
        title: 'Table with selection',
        component: TableSelectionExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-sorting': {
        title: 'Table with sorting',
        component: TableSortingExample,
        additionalFiles: null,
        selectorName: null
    },
    'tabs-overview': {
        title: 'Basic tabs',
        component: TabsOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'tabs-template-label': {
        title: 'Complex Example',
        component: TabsTemplateLabelExample,
        additionalFiles: null,
        selectorName: null
    },
    'toolbar-multirow': {
        title: 'Multi-row toolbar',
        component: ToolbarMultirowExample,
        additionalFiles: null,
        selectorName: null
    },
    'toolbar-overview': {
        title: 'Basic toolbar',
        component: ToolbarOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'tooltip-overview': {
        title: 'Basic tooltip',
        component: TooltipOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'tooltip-position': {
        title: 'Tooltip with custom position',
        component: TooltipPositionExample,
        additionalFiles: null,
        selectorName: null
    },
};
var EXAMPLE_LIST = [
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteOverviewExample,
    AutocompleteSimpleExample,
    ButtonOverviewExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonTypesExample,
    CardFancyExample,
    CardOverviewExample,
    CdkTableBasicExample,
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    DatepickerApiExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample,
    DialogContentExampleDialog, DialogContentExample,
    DialogDataExampleDialog, DialogDataExample,
    DialogElementsExampleDialog, DialogElementsExample,
    DialogOverviewExampleDialog, DialogOverviewExample,
    ElevationOverviewExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
    MyTelInput, FormFieldCustomControlExample,
    FormFieldErrorExample,
    FormFieldHintExample,
    FormFieldOverviewExample,
    FormFieldPlaceholderExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
    GridListDynamicExample,
    GridListOverviewExample,
    IconOverviewExample,
    IconSvgExample,
    InputAutosizeTextareaExample,
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    MenuIconsExample,
    MenuOverviewExample,
    NestedMenuExample,
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
    RadioNgModelExample,
    RadioOverviewExample,
    SelectCustomTriggerExample,
    SelectDisabledExample,
    SelectErrorStateMatcherExample,
    SelectFormExample,
    SelectHintErrorExample,
    SelectMultipleExample,
    SelectNoRippleExample,
    SelectOptgroupExample,
    SelectOverviewExample,
    SelectPanelClassExample,
    SelectResetExample,
    SelectValueBindingExample,
    SidenavFabExample,
    SidenavOverviewExample,
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
    SliderConfigurableExample,
    SliderOverviewExample,
    PizzaPartyComponent, SnackBarComponentExample,
    SnackBarOverviewExample,
    SortOverviewExample,
    StepperOverviewExample,
    TableBasicExample,
    TableFilteringExample,
    TableHttpExample,
    TableOverviewExample,
    TablePaginationExample,
    TableSelectionExample,
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
    ExampleModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: EXAMPLE_LIST,
                    entryComponents: EXAMPLE_LIST,
                    imports: [
                        ExampleMaterialModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule,
                        _angular_common.CommonModule
                    ]
                },] },
    ];
    /** @nocollapse */
    ExampleModule.ctorParameters = function () { return []; };
    return ExampleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var ExampleData = (function () {
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
            var /** @type {?} */ exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
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
exports.EXAMPLE_LIST = EXAMPLE_LIST;
exports.ExampleModule = ExampleModule;
exports.ListOverviewExample = ListOverviewExample;
exports.DatepickerOverviewExample = DatepickerOverviewExample;
exports.CardFancyExample = CardFancyExample;
exports.ToolbarMultirowExample = ToolbarMultirowExample;
exports.ButtonToggleOverviewExample = ButtonToggleOverviewExample;
exports.ExpansionOverviewExample = ExpansionOverviewExample;
exports.StepperOverviewExample = StepperOverviewExample;
exports.ɵa = AutocompleteDisplayExample;
exports.ɵb = AutocompleteFilterExample;
exports.ɵc = AutocompleteOverviewExample;
exports.ɵd = AutocompleteSimpleExample;
exports.ɵe = ButtonOverviewExample;
exports.ɵf = ButtonToggleExclusiveExample;
exports.ɵg = ButtonTypesExample;
exports.ɵh = CardOverviewExample;
exports.ɵi = CdkTableBasicExample;
exports.ɵj = CheckboxConfigurableExample;
exports.ɵk = CheckboxOverviewExample;
exports.ɵl = ChipsInputExample;
exports.ɵm = ChipsOverviewExample;
exports.ɵn = ChipsStackedExample;
exports.ɵo = DatepickerApiExample;
exports.ɵp = DatepickerDisabledExample;
exports.ɵq = DatepickerEventsExample;
exports.ɵr = DatepickerFilterExample;
exports.ɵt = DatepickerFormatsExample;
exports.ɵs = MY_FORMATS;
exports.ɵu = DatepickerLocaleExample;
exports.ɵv = DatepickerMinMaxExample;
exports.ɵw = DatepickerMomentExample;
exports.ɵx = DatepickerStartViewExample;
exports.ɵy = DatepickerTouchExample;
exports.ɵz = DatepickerValueExample;
exports.ɵba = DialogContentExample;
exports.ɵbb = DialogContentExampleDialog;
exports.ɵbc = DialogDataExample;
exports.ɵbd = DialogDataExampleDialog;
exports.ɵbe = DialogElementsExample;
exports.ɵbf = DialogElementsExampleDialog;
exports.ɵbg = DialogOverviewExample;
exports.ɵbh = DialogOverviewExampleDialog;
exports.ɵbi = ElevationOverviewExample;
exports.ɵbj = ExpansionStepsExample;
exports.ɵbl = FormFieldCustomControlExample;
exports.ɵbk = MyTelInput;
exports.ɵbm = FormFieldErrorExample;
exports.ɵbn = FormFieldHintExample;
exports.ɵbo = FormFieldOverviewExample;
exports.ɵbp = FormFieldPlaceholderExample;
exports.ɵbq = FormFieldPrefixSuffixExample;
exports.ɵbr = FormFieldThemingExample;
exports.ɵbs = GridListDynamicExample;
exports.ɵbt = GridListOverviewExample;
exports.ɵbu = IconOverviewExample;
exports.ɵbv = IconSvgExample;
exports.ɵbw = InputAutosizeTextareaExample;
exports.ɵbx = InputClearableExample;
exports.ɵby = InputErrorStateMatcherExample;
exports.ɵbz = InputErrorsExample;
exports.ɵca = InputFormExample;
exports.ɵcb = InputHintExample;
exports.ɵcc = InputOverviewExample;
exports.ɵcd = InputPrefixSuffixExample;
exports.ɵce = ListSectionsExample;
exports.ɵcf = ListSelectionExample;
exports.ɵed = ExampleMaterialModule;
exports.ɵcg = MenuIconsExample;
exports.ɵch = MenuOverviewExample;
exports.ɵci = NestedMenuExample;
exports.ɵcj = PaginatorConfigurableExample;
exports.ɵck = PaginatorOverviewExample;
exports.ɵcl = ProgressBarBufferExample;
exports.ɵcm = ProgressBarConfigurableExample;
exports.ɵcn = ProgressBarDeterminateExample;
exports.ɵco = ProgressBarIndeterminateExample;
exports.ɵcp = ProgressBarQueryExample;
exports.ɵcq = ProgressSpinnerConfigurableExample;
exports.ɵcr = ProgressSpinnerOverviewExample;
exports.ɵcs = RadioNgModelExample;
exports.ɵct = RadioOverviewExample;
exports.ɵcu = SelectCustomTriggerExample;
exports.ɵcv = SelectDisabledExample;
exports.ɵcw = SelectErrorStateMatcherExample;
exports.ɵcx = SelectFormExample;
exports.ɵcy = SelectHintErrorExample;
exports.ɵcz = SelectMultipleExample;
exports.ɵda = SelectNoRippleExample;
exports.ɵdb = SelectOptgroupExample;
exports.ɵdc = SelectOverviewExample;
exports.ɵdd = SelectPanelClassExample;
exports.ɵde = SelectResetExample;
exports.ɵdf = SelectValueBindingExample;
exports.ɵdg = SidenavFabExample;
exports.ɵdh = SidenavOverviewExample;
exports.ɵdi = SlideToggleConfigurableExample;
exports.ɵdj = SlideToggleFormsExample;
exports.ɵdk = SlideToggleOverviewExample;
exports.ɵdl = SliderConfigurableExample;
exports.ɵdm = SliderOverviewExample;
exports.ɵdo = PizzaPartyComponent;
exports.ɵdn = SnackBarComponentExample;
exports.ɵdp = SnackBarOverviewExample;
exports.ɵdq = SortOverviewExample;
exports.ɵdr = TableBasicExample;
exports.ɵds = TableFilteringExample;
exports.ɵdt = TableHttpExample;
exports.ɵdu = TableOverviewExample;
exports.ɵdv = TablePaginationExample;
exports.ɵdw = TableSelectionExample;
exports.ɵdx = TableSortingExample;
exports.ɵdy = TabsOverviewExample;
exports.ɵdz = TabsTemplateLabelExample;
exports.ɵea = ToolbarOverviewExample;
exports.ɵeb = TooltipOverviewExample;
exports.ɵec = TooltipPositionExample;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-examples.umd.js.map
