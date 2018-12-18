/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/scrolling'), require('@angular/cdk/a11y'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/cdk/drag-drop'), require('@angular/material'), require('@angular/forms'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/cdk/platform'), require('@angular/cdk/collections'), require('rxjs'), require('@angular/material/tree'), require('@angular/cdk/keycodes'), require('@angular/material/core'), require('@angular/material-moment-adapter'), require('moment'), require('@angular/cdk/coercion'), require('@angular/platform-browser'), require('@angular/material/sidenav'), require('@angular/cdk/layout'), require('@angular/cdk/stepper'), require('@angular/animations'), require('@angular/common/http'), require('@angular/cdk/text-field'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@angular/material-examples', ['exports', '@angular/core', '@angular/cdk/scrolling', '@angular/cdk/a11y', '@angular/cdk/table', '@angular/cdk/tree', '@angular/cdk/drag-drop', '@angular/material', '@angular/forms', 'rxjs/operators', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/cdk/platform', '@angular/cdk/collections', 'rxjs', '@angular/material/tree', '@angular/cdk/keycodes', '@angular/material/core', '@angular/material-moment-adapter', 'moment', '@angular/cdk/coercion', '@angular/platform-browser', '@angular/material/sidenav', '@angular/cdk/layout', '@angular/cdk/stepper', '@angular/animations', '@angular/common/http', '@angular/cdk/text-field', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['material-examples'] = {}),global.ng.core,global.ng.cdk.scrolling,global.ng.cdk.a11y,global.ng.cdk.table,global.ng.cdk.tree,global.ng.cdk.dragDrop,global.ng.material,global.ng.forms,global.rxjs.operators,global.ng.cdk.overlay,global.ng.cdk.portal,global.ng.cdk.platform,global.ng.cdk.collections,global.rxjs,global.ng.material.tree,global.ng.cdk.keycodes,global.ng.material.core,global.ng.materialMomentAdapter,global.moment,global.ng.cdk.coercion,global.ng.platformBrowser,global.ng.material.sidenav,global.ng.cdk.layout,global.ng.cdk.stepper,global.ng.animations,global.ng.common.http,global.ng.cdk.textField,global.ng.common));
}(this, (function (exports,core,scrolling,a11y,table,tree,dragDrop,material,forms,operators,overlay,portal,platform,collections,rxjs,tree$1,keycodes,core$1,materialMomentAdapter,_rollupMoment__default,coercion,platformBrowser,sidenav,layout,stepper,animations,http,textField,common) { 'use strict';

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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExampleMaterialModule = /** @class */ (function () {
    function ExampleMaterialModule() {
    }
    ExampleMaterialModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        a11y.A11yModule,
                        table.CdkTableModule,
                        tree.CdkTreeModule,
                        dragDrop.DragDropModule,
                        material.MatAutocompleteModule,
                        material.MatBadgeModule,
                        material.MatBottomSheetModule,
                        material.MatButtonModule,
                        material.MatButtonToggleModule,
                        material.MatCardModule,
                        material.MatCheckboxModule,
                        material.MatChipsModule,
                        material.MatDatepickerModule,
                        material.MatDialogModule,
                        material.MatDividerModule,
                        material.MatExpansionModule,
                        material.MatFormFieldModule,
                        material.MatGridListModule,
                        material.MatIconModule,
                        material.MatInputModule,
                        material.MatListModule,
                        material.MatMenuModule,
                        material.MatPaginatorModule,
                        material.MatProgressBarModule,
                        material.MatProgressSpinnerModule,
                        material.MatRadioModule,
                        material.MatRippleModule,
                        material.MatSelectModule,
                        material.MatSidenavModule,
                        material.MatSlideToggleModule,
                        material.MatSliderModule,
                        material.MatSnackBarModule,
                        material.MatSortModule,
                        material.MatStepperModule,
                        material.MatTableModule,
                        material.MatTabsModule,
                        material.MatToolbarModule,
                        material.MatTooltipModule,
                        material.MatTreeModule,
                        scrolling.ScrollingModule,
                    ],
                    exports: [
                        a11y.A11yModule,
                        table.CdkTableModule,
                        tree.CdkTreeModule,
                        dragDrop.DragDropModule,
                        material.MatAutocompleteModule,
                        material.MatBadgeModule,
                        material.MatBottomSheetModule,
                        material.MatButtonModule,
                        material.MatButtonToggleModule,
                        material.MatCardModule,
                        material.MatCheckboxModule,
                        material.MatChipsModule,
                        material.MatDatepickerModule,
                        material.MatDialogModule,
                        material.MatDividerModule,
                        material.MatExpansionModule,
                        material.MatFormFieldModule,
                        material.MatGridListModule,
                        material.MatIconModule,
                        material.MatInputModule,
                        material.MatListModule,
                        material.MatMenuModule,
                        material.MatPaginatorModule,
                        material.MatProgressBarModule,
                        material.MatProgressSpinnerModule,
                        material.MatRadioModule,
                        material.MatRippleModule,
                        material.MatSelectModule,
                        material.MatSidenavModule,
                        material.MatSlideToggleModule,
                        material.MatSliderModule,
                        material.MatSnackBarModule,
                        material.MatSortModule,
                        material.MatStepperModule,
                        material.MatTableModule,
                        material.MatTabsModule,
                        material.MatToolbarModule,
                        material.MatTooltipModule,
                        material.MatTreeModule,
                        scrolling.ScrollingModule,
                    ]
                },] },
    ];
    return ExampleMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Highlight the first autocomplete option
 */
var AutocompleteAutoActiveFirstOptionExample = /** @class */ (function () {
    function AutocompleteAutoActiveFirstOptionExample() {
        this.myControl = new forms.FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    /**
     * @return {?}
     */
    AutocompleteAutoActiveFirstOptionExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges.pipe(operators.startWith(''), operators.map(function (value) { return _this._filter(value); }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AutocompleteAutoActiveFirstOptionExample.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    AutocompleteAutoActiveFirstOptionExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'autocomplete-auto-active-first-option-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{option}}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return AutocompleteAutoActiveFirstOptionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Display value autocomplete
 */
var AutocompleteDisplayExample = /** @class */ (function () {
    function AutocompleteDisplayExample() {
        this.myControl = new forms.FormControl();
        this.options = [
            { name: 'Mary' },
            { name: 'Shelley' },
            { name: 'Igor' }
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
            .pipe(operators.startWith(''), operators.map(function (value) { return typeof value === 'string' ? value : value.name; }), operators.map(function (name) { return name ? _this._filter(name) : _this.options.slice(); }));
    };
    /**
     * @param {?=} user
     * @return {?}
     */
    AutocompleteDisplayExample.prototype.displayFn = /**
     * @param {?=} user
     * @return {?}
     */
    function (user) {
        return user ? user.name : undefined;
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    AutocompleteDisplayExample.prototype._filter = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var filterValue = name.toLowerCase();
        return this.options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AutocompleteDisplayExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'autocomplete-display-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{option.name}}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return AutocompleteDisplayExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Filter autocomplete
 */
var AutocompleteFilterExample = /** @class */ (function () {
    function AutocompleteFilterExample() {
        this.myControl = new forms.FormControl();
        this.options = ['One', 'Two', 'Three'];
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
            .pipe(operators.startWith(''), operators.map(function (value) { return _this._filter(value); }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AutocompleteFilterExample.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    AutocompleteFilterExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'autocomplete-filter-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{option}}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return AutocompleteFilterExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _filter = function (opt, value) {
    /** @type {?} */
    var filterValue = value.toLowerCase();
    return opt.filter(function (item) { return item.toLowerCase().indexOf(filterValue) === 0; });
};
/**
 * \@title Option groups autocomplete
 */
var AutocompleteOptgroupExample = /** @class */ (function () {
    function AutocompleteOptgroupExample(fb) {
        this.fb = fb;
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
    }
    /**
     * @return {?}
     */
    AutocompleteOptgroupExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.stateGroupOptions = (/** @type {?} */ (this.stateForm.get('stateGroup'))).valueChanges
            .pipe(operators.startWith(''), operators.map(function (value) { return _this._filterGroup(value); }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AutocompleteOptgroupExample.prototype._filterGroup = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    AutocompleteOptgroupExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'autocomplete-optgroup-example',
                    template: "<form [formGroup]=\"stateForm\"><mat-form-field><input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\"><mat-autocomplete #autoGroup=\"matAutocomplete\"><mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\"><mat-option *ngFor=\"let name of group.names\" [value]=\"name\">{{name}}</mat-option></mat-optgroup></mat-autocomplete></mat-form-field></form>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    AutocompleteOptgroupExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return AutocompleteOptgroupExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Autocomplete overview
 */
var AutocompleteOverviewExample = /** @class */ (function () {
    function AutocompleteOverviewExample() {
        var _this = this;
        this.stateCtrl = new forms.FormControl();
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
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(operators.startWith(''), operators.map(function (state$$1) { return state$$1 ? _this._filterStates(state$$1) : _this.states.slice(); }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AutocompleteOverviewExample.prototype._filterStates = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.states.filter(function (state$$1) { return state$$1.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AutocompleteOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'autocomplete-overview-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\"><img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> <span>{{state.name}}</span> | <small>Population: {{state.population}}</small></mat-option></mat-autocomplete></mat-form-field><br><mat-slide-toggle [checked]=\"stateCtrl.disabled\" (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">Disable Input?</mat-slide-toggle></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } .example-option-img { vertical-align: middle; margin-right: 8px; } [dir='rtl'] .example-option-img { margin-right: 0; margin-left: 8px; } "],
                },] },
    ];
    /** @nocollapse */
    AutocompleteOverviewExample.ctorParameters = function () { return []; };
    return AutocompleteOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Simple autocomplete
 */
var AutocompleteSimpleExample = /** @class */ (function () {
    function AutocompleteSimpleExample() {
        this.myControl = new forms.FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    AutocompleteSimpleExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'autocomplete-simple-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of options\" [value]=\"option\">{{option}}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return AutocompleteSimpleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Badge overview
 */
var BadgeOverviewExample = /** @class */ (function () {
    function BadgeOverviewExample() {
    }
    BadgeOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'badge-overview-example',
                    template: "<p><span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span></p><p>Button with a badge on the left <button mat-raised-button color=\"primary\" matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">Action</button></p><p>Icon with a badge<mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon></p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return BadgeOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Bottom Sheet Overview
 */
var BottomSheetOverviewExample = /** @class */ (function () {
    function BottomSheetOverviewExample(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    /**
     * @return {?}
     */
    BottomSheetOverviewExample.prototype.openBottomSheet = /**
     * @return {?}
     */
    function () {
        this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    };
    BottomSheetOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'bottom-sheet-overview-example',
                    template: "<p>You have received a file called \"cat-picture.jpeg\".</p><button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    BottomSheetOverviewExample.ctorParameters = function () { return [
        { type: material.MatBottomSheet }
    ]; };
    return BottomSheetOverviewExample;
}());
var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BottomSheetOverviewExampleSheet.prototype.openLink = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet.decorators = [
        { type: core.Component, args: [{
                    selector: 'bottom-sheet-overview-example-sheet',
                    template: "<mat-nav-list><a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Keep</span> <span mat-line>Add to a note</span> </a><a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Docs</span> <span mat-line>Embed in a document</span> </a><a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Plus</span> <span mat-line>Share with your friends</span> </a><a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Hangouts</span> <span mat-line>Show to your coworkers</span></a></mat-nav-list>",
                },] },
    ];
    /** @nocollapse */
    BottomSheetOverviewExampleSheet.ctorParameters = function () { return [
        { type: material.MatBottomSheetRef }
    ]; };
    return BottomSheetOverviewExampleSheet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic buttons
 */
var ButtonOverviewExample = /** @class */ (function () {
    function ButtonOverviewExample() {
    }
    ButtonOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'button-overview-example',
                    template: "<button mat-button>Click me!</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ButtonOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Button toggle appearance
 */
var ButtonToggleAppearanceExample = /** @class */ (function () {
    function ButtonToggleAppearanceExample() {
    }
    ButtonToggleAppearanceExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'button-toggle-appearance-example',
                    template: "<p>Default appearance:<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\"><mat-button-toggle value=\"bold\">Bold</mat-button-toggle><mat-button-toggle value=\"italic\">Italic</mat-button-toggle><mat-button-toggle value=\"underline\">Underline</mat-button-toggle></mat-button-toggle-group></p><p>Legacy appearance:<mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\"><mat-button-toggle value=\"bold\">Bold</mat-button-toggle><mat-button-toggle value=\"italic\">Italic</mat-button-toggle><mat-button-toggle value=\"underline\">Underline</mat-button-toggle></mat-button-toggle-group></p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ButtonToggleAppearanceExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Exclusive selection
 */
var ButtonToggleExclusiveExample = /** @class */ (function () {
    function ButtonToggleExclusiveExample() {
    }
    ButtonToggleExclusiveExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'button-toggle-exclusive-example',
                    template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\"><mat-button-toggle value=\"left\"><mat-icon>format_align_left</mat-icon></mat-button-toggle><mat-button-toggle value=\"center\"><mat-icon>format_align_center</mat-icon></mat-button-toggle><mat-button-toggle value=\"right\"><mat-icon>format_align_right</mat-icon></mat-button-toggle><mat-button-toggle value=\"justify\" disabled=\"disabled\"><mat-icon>format_align_justify</mat-icon></mat-button-toggle></mat-button-toggle-group><div class=\"example-selected-value\">Selected value: {{group.value}}</div>",
                    styles: [".example-selected-value { margin: 15px 0; } "],
                },] },
    ];
    return ButtonToggleExclusiveExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic button-toggles
 */
var ButtonToggleOverviewExample = /** @class */ (function () {
    function ButtonToggleOverviewExample() {
    }
    ButtonToggleOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'button-toggle-overview-example',
                    template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\"><mat-button-toggle value=\"bold\">Bold</mat-button-toggle><mat-button-toggle value=\"italic\">Italic</mat-button-toggle><mat-button-toggle value=\"underline\">Underline</mat-button-toggle></mat-button-toggle-group>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ButtonToggleOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Button varieties
 */
var ButtonTypesExample = /** @class */ (function () {
    function ButtonTypesExample() {
    }
    ButtonTypesExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'button-types-example',
                    template: "<h3>Basic Buttons</h3><div class=\"example-button-row\"><button mat-button>Basic</button> <button mat-button color=\"primary\">Primary</button> <button mat-button color=\"accent\">Accent</button> <button mat-button color=\"warn\">Warn</button> <button mat-button disabled=\"disabled\">Disabled</button> <a mat-button routerLink=\".\">Link</a></div><h3>Raised Buttons</h3><div class=\"example-button-row\"><button mat-raised-button>Basic</button> <button mat-raised-button color=\"primary\">Primary</button> <button mat-raised-button color=\"accent\">Accent</button> <button mat-raised-button color=\"warn\">Warn</button> <button mat-raised-button disabled=\"disabled\">Disabled</button> <a mat-raised-button routerLink=\".\">Link</a></div><h3>Stroked Buttons</h3><div class=\"example-button-row\"><button mat-stroked-button>Basic</button> <button mat-stroked-button color=\"primary\">Primary</button> <button mat-stroked-button color=\"accent\">Accent</button> <button mat-stroked-button color=\"warn\">Warn</button> <button mat-stroked-button disabled=\"disabled\">Disabled</button> <a mat-stroked-button routerLink=\".\">Link</a></div><h3>Flat Buttons</h3><div class=\"example-button-row\"><button mat-flat-button>Basic</button> <button mat-flat-button color=\"primary\">Primary</button> <button mat-flat-button color=\"accent\">Accent</button> <button mat-flat-button color=\"warn\">Warn</button> <button mat-flat-button disabled=\"disabled\">Disabled</button> <a mat-flat-button routerLink=\".\">Link</a></div><h3>Icon Buttons</h3><div class=\"example-button-row\"><button mat-icon-button><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"primary\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"accent\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"warn\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button disabled=\"disabled\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button></div><h3>Fab Buttons</h3><div class=\"example-button-row\"><button mat-fab>Basic</button> <button mat-fab color=\"primary\">Primary</button> <button mat-fab color=\"accent\">Accent</button> <button mat-fab color=\"warn\">Warn</button> <button mat-fab disabled=\"disabled\">Disabled</button> <button mat-fab><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <a mat-fab routerLink=\".\">Link</a></div><h3>Mini Fab Buttons</h3><div class=\"example-button-row\"><button mat-mini-fab>Basic</button> <button mat-mini-fab color=\"primary\">Primary</button> <button mat-mini-fab color=\"accent\">Accent</button> <button mat-mini-fab color=\"warn\">Warn</button> <button mat-mini-fab disabled=\"disabled\">Disabled</button> <button mat-mini-fab><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <a mat-mini-fab routerLink=\".\">Link</a></div>",
                    styles: [".example-button-row button, .example-button-row a { margin-right: 8px; } "],
                },] },
    ];
    return ButtonTypesExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Card with multiple sections
 */
var CardFancyExample = /** @class */ (function () {
    function CardFancyExample() {
    }
    CardFancyExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'card-fancy-example',
                    template: "<mat-card class=\"example-card\"><mat-card-header><div mat-card-avatar class=\"example-header-image\"></div><mat-card-title>Shiba Inu</mat-card-title><mat-card-subtitle>Dog Breed</mat-card-subtitle></mat-card-header><img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"><mat-card-content><p>The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.</p></mat-card-content><mat-card-actions><button mat-button>LIKE</button> <button mat-button>SHARE</button></mat-card-actions></mat-card>",
                    styles: [".example-card { max-width: 400px; } .example-header-image { background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); background-size: cover; } "],
                },] },
    ];
    return CardFancyExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic cards
 */
var CardOverviewExample = /** @class */ (function () {
    function CardOverviewExample() {
    }
    CardOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'card-overview-example',
                    template: "<mat-card>Simple card</mat-card>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return CardOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop position locking
 */
var CdkDragDropAxisLockExample = /** @class */ (function () {
    function CdkDragDropAxisLockExample() {
    }
    CdkDragDropAxisLockExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-axis-lock-example',
                    template: "<div class=\"example-box\" cdkDragLockAxis=\"y\" cdkDrag>I can only be dragged up/down</div><div class=\"example-box\" cdkDragLockAxis=\"x\" cdkDrag>I can only be dragged left/right</div>",
                    styles: [".example-box { width: 200px; height: 200px; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); cursor: move; display: inline-flex; justify-content: center; align-items: center; text-align: center; background: #fff; border-radius: 4px; margin-right: 25px; position: relative; z-index: 1; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-box:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } "],
                },] },
    ];
    return CdkDragDropAxisLockExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop boundary
 */
var CdkDragDropBoundaryExample = /** @class */ (function () {
    function CdkDragDropBoundaryExample() {
    }
    CdkDragDropBoundaryExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-boundary-example',
                    template: "<div class=\"example-boundary\"><div class=\"example-box\" cdkDragBoundary=\".example-boundary\" cdkDrag>I can only be dragged within the dotted container</div></div>",
                    styles: [".example-box { width: 200px; height: 200px; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); cursor: move; display: inline-flex; justify-content: center; align-items: center; text-align: center; background: #fff; border-radius: 4px; margin-right: 25px; position: relative; z-index: 1; box-sizing: border-box; padding: 10px; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-box:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .example-boundary { width: 400px; height: 400px; max-width: 100%; border: dotted #ccc 2px; } "],
                },] },
    ];
    return CdkDragDropBoundaryExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop connected sorting group
 */
var CdkDragDropConnectedSortingGroupExample = /** @class */ (function () {
    function CdkDragDropConnectedSortingGroupExample() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CdkDragDropConnectedSortingGroupExample.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.previousContainer === event.container) {
            dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    CdkDragDropConnectedSortingGroupExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-connected-sorting-group-example',
                    template: "<div cdkDropListGroup><div class=\"example-container\"><h2>To do</h2><div cdkDropList [cdkDropListData]=\"todo\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div></div></div><div class=\"example-container\"><h2>Done</h2><div cdkDropList [cdkDropListData]=\"done\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div></div></div></div>",
                    styles: [".example-container { width: 400px; max-width: 100%; margin: 0 25px 25px 0; display: inline-block; vertical-align: top; } .example-list { border: solid 1px #ccc; min-height: 60px; background: white; border-radius: 4px; overflow: hidden; display: block; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
                },] },
    ];
    return CdkDragDropConnectedSortingGroupExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop connected sorting
 */
var CdkDragDropConnectedSortingExample = /** @class */ (function () {
    function CdkDragDropConnectedSortingExample() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CdkDragDropConnectedSortingExample.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.previousContainer === event.container) {
            dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    CdkDragDropConnectedSortingExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-connected-sorting-example',
                    template: "<div class=\"example-container\"><h2>To do</h2><div cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"todo\" [cdkDropListConnectedTo]=\"[doneList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div></div></div><div class=\"example-container\"><h2>Done</h2><div cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"done\" [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div></div></div>",
                    styles: [".example-container { width: 400px; max-width: 100%; margin: 0 25px 25px 0; display: inline-block; vertical-align: top; } .example-list { border: solid 1px #ccc; min-height: 60px; background: white; border-radius: 4px; overflow: hidden; display: block; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
                },] },
    ];
    return CdkDragDropConnectedSortingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop custom placeholer
 */
var CdkDragDropCustomPlaceholderExample = /** @class */ (function () {
    function CdkDragDropCustomPlaceholderExample() {
        this.movies = [
            'Episode I - The Phantom Menace',
            'Episode II - Attack of the Clones',
            'Episode III - Revenge of the Sith',
            'Episode IV - A New Hope',
            'Episode V - The Empire Strikes Back',
            'Episode VI - Return of the Jedi',
            'Episode VII - The Force Awakens',
            'Episode VIII - The Last Jedi'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CdkDragDropCustomPlaceholderExample.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        dragDrop.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    };
    CdkDragDropCustomPlaceholderExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-custom-placeholder-example',
                    template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag><div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>{{movie}}</div></div>",
                    styles: [".example-list { width: 500px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: block; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-custom-placeholder { background: #ccc; border: dotted 3px #999; min-height: 60px; transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
                },] },
    ];
    return CdkDragDropCustomPlaceholderExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop custom preview
 */
var CdkDragDropCustomPreviewExample = /** @class */ (function () {
    function CdkDragDropCustomPreviewExample() {
        // tslint:disable:max-line-length
        this.movies = [
            {
                title: 'Episode I - The Phantom Menace',
                poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
            },
            {
                title: 'Episode II - Attack of the Clones',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
            },
            {
                title: 'Episode III - Revenge of the Sith',
                poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
            },
            {
                title: 'Episode IV - A New Hope',
                poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
            },
            {
                title: 'Episode V - The Empire Strikes Back',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
            },
            {
                title: 'Episode VI - Return of the Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
            },
            {
                title: 'Episode VII - The Force Awakens',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
            },
            {
                title: 'Episode VIII - The Last Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
            }
        ];
    }
    // tslint:enable:max-line-length
    // tslint:enable:max-line-length
    /**
     * @param {?} event
     * @return {?}
     */
    CdkDragDropCustomPreviewExample.prototype.drop = 
    // tslint:enable:max-line-length
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        dragDrop.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    };
    CdkDragDropCustomPreviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-custom-preview-example',
                    template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie.title}} <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\"></div></div>",
                    styles: [".example-list { width: 500px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: block; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
                },] },
    ];
    return CdkDragDropCustomPreviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop disabled
 */
var CdkDragDropDisabledExample = /** @class */ (function () {
    function CdkDragDropDisabledExample() {
        this.items = [
            { value: 'I can be dragged', disabled: false },
            { value: 'I cannot be dragged', disabled: true },
            { value: 'I can also be dragged', disabled: false }
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CdkDragDropDisabledExample.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        dragDrop.moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    };
    CdkDragDropDisabledExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-disabled-example',
                    template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of items\" cdkDrag [cdkDragDisabled]=\"item.disabled\">{{item.value}}</div></div>",
                    styles: [".example-list { width: 500px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: block; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
                },] },
    ];
    return CdkDragDropDisabledExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop enter predicate
 */
var CdkDragDropEnterPredicateExample = /** @class */ (function () {
    function CdkDragDropEnterPredicateExample() {
        this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.even = [10];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CdkDragDropEnterPredicateExample.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.previousContainer === event.container) {
            dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    /** Predicate function that only allows even numbers to be dropped into a list. */
    /**
     * Predicate function that only allows even numbers to be dropped into a list.
     * @param {?} item
     * @return {?}
     */
    CdkDragDropEnterPredicateExample.prototype.evenPredicate = /**
     * Predicate function that only allows even numbers to be dropped into a list.
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.data % 2 === 0;
    };
    /** Predicate function that doesn't allow items to be dropped into a list. */
    /**
     * Predicate function that doesn't allow items to be dropped into a list.
     * @return {?}
     */
    CdkDragDropEnterPredicateExample.prototype.noReturnPredicate = /**
     * Predicate function that doesn't allow items to be dropped into a list.
     * @return {?}
     */
    function () {
        return false;
    };
    CdkDragDropEnterPredicateExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-enter-predicate-example',
                    template: "<div class=\"example-container\"><h2>Available numbers</h2><div id=\"all\" cdkDropList [cdkDropListData]=\"all\" cdkDropListConnectedTo=\"even\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListEnterPredicate]=\"noReturnPredicate\"><div class=\"example-box\" *ngFor=\"let number of all\" [cdkDragData]=\"number\" cdkDrag>{{number}}</div></div></div><div class=\"example-container\"><h2>Even numbers</h2><div id=\"even\" cdkDropList [cdkDropListData]=\"even\" cdkDropListConnectedTo=\"all\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListEnterPredicate]=\"evenPredicate\"><div class=\"example-box\" *ngFor=\"let number of even\" cdkDrag [cdkDragData]=\"number\">{{number}}</div></div></div>",
                    styles: [".example-container { width: 400px; max-width: 100%; margin: 0 25px 25px 0; display: inline-block; vertical-align: top; } .example-list { border: solid 1px #ccc; min-height: 60px; background: white; border-radius: 4px; overflow: hidden; display: block; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
                },] },
    ];
    return CdkDragDropEnterPredicateExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop with a handle
 */
var CdkDragDropHandleExample = /** @class */ (function () {
    function CdkDragDropHandleExample() {
    }
    CdkDragDropHandleExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-handle-example',
                    template: "<div class=\"example-box\" cdkDrag>I can only be dragged using the handle<div class=\"example-handle\" cdkDragHandle><svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path><path d=\"M0 0h24v24H0z\" fill=\"none\"></path></svg></div></div>",
                    styles: [".example-box { width: 200px; height: 200px; padding: 10px; box-sizing: border-box; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; justify-content: center; align-items: center; text-align: center; background: #fff; border-radius: 4px; position: relative; z-index: 1; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-box:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .example-handle { position: absolute; top: 10px; right: 10px; color: #ccc; cursor: move; width: 24px; height: 24px; } "],
                },] },
    ];
    return CdkDragDropHandleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop horizontal sorting
 */
var CdkDragDropHorizontalSortingExample = /** @class */ (function () {
    function CdkDragDropHorizontalSortingExample() {
        this.timePeriods = [
            'Bronze age',
            'Iron age',
            'Middle ages',
            'Early modern period',
            'Long nineteenth century'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CdkDragDropHorizontalSortingExample.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        dragDrop.moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    };
    CdkDragDropHorizontalSortingExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-horizontal-sorting-example',
                    template: "<div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let timePeriod of timePeriods\" cdkDrag>{{timePeriod}}</div></div>",
                    styles: [".example-list { width: 1000px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: flex; flex-direction: row; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-right: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; flex-grow: 1; flex-basis: 0; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
                },] },
    ];
    return CdkDragDropHorizontalSortingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic Drag&Drop
 */
var CdkDragDropOverviewExample = /** @class */ (function () {
    function CdkDragDropOverviewExample() {
    }
    CdkDragDropOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-overview-example',
                    template: "<div class=\"example-box\" cdkDrag>Drag me around</div>",
                    styles: [".example-box { width: 200px; height: 200px; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); cursor: move; display: flex; justify-content: center; align-items: center; text-align: center; background: #fff; border-radius: 4px; position: relative; z-index: 1; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-box:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } "],
                },] },
    ];
    return CdkDragDropOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop with alternate root element
 */
var CdkDragDropRootElementExample = /** @class */ (function () {
    function CdkDragDropRootElementExample(_overlay, _viewContainerRef) {
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    CdkDragDropRootElementExample.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._portal = new portal.TemplatePortal(this._dialogTemplate, this._viewContainerRef);
        this._overlayRef = this._overlay.create({
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true
        });
        this._overlayRef.backdropClick().subscribe(function () { return _this._overlayRef.detach(); });
    };
    /**
     * @return {?}
     */
    CdkDragDropRootElementExample.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._overlayRef.dispose();
    };
    /**
     * @return {?}
     */
    CdkDragDropRootElementExample.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        this._overlayRef.attach(this._portal);
    };
    CdkDragDropRootElementExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-root-element-example',
                    template: "<button (click)=\"openDialog()\">Open a draggable dialog</button><ng-template><div class=\"example-dialog-content\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\">Drag the dialog around!</div></ng-template>",
                    styles: [".example-dialog-content { width: 200px; height: 200px; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); cursor: move; display: flex; justify-content: center; align-items: center; background: #fff; border-radius: 4px; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-dialog-content:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } "],
                },] },
    ];
    /** @nocollapse */
    CdkDragDropRootElementExample.ctorParameters = function () { return [
        { type: overlay.Overlay },
        { type: core.ViewContainerRef }
    ]; };
    CdkDragDropRootElementExample.propDecorators = {
        _dialogTemplate: [{ type: core.ViewChild, args: [core.TemplateRef,] }]
    };
    return CdkDragDropRootElementExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop sorting
 */
var CdkDragDropSortingExample = /** @class */ (function () {
    function CdkDragDropSortingExample() {
        this.movies = [
            'Episode I - The Phantom Menace',
            'Episode II - Attack of the Clones',
            'Episode III - Revenge of the Sith',
            'Episode IV - A New Hope',
            'Episode V - The Empire Strikes Back',
            'Episode VI - Return of the Jedi',
            'Episode VII - The Force Awakens',
            'Episode VIII - The Last Jedi'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CdkDragDropSortingExample.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        dragDrop.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    };
    CdkDragDropSortingExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-drag-drop-sorting-example',
                    template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie}}</div></div>",
                    styles: [".example-list { width: 500px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: block; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
                },] },
    ];
    return CdkDragDropSortingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Platform overview
 */
var CdkPlatformOverviewExample = /** @class */ (function () {
    function CdkPlatformOverviewExample(platform$$1) {
        this.platform = platform$$1;
        this.supportedInputTypes = Array.from(platform.getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = platform.supportsPassiveEventListeners();
        this.supportsScrollBehavior = platform.supportsScrollBehavior();
    }
    CdkPlatformOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-platform-overview-example',
                    template: "<h3>Platform information:</h3><p>Is Android: {{platform.ANDROID}}</p><p>Is iOS: {{platform.IOS}}</p><p>Is Firefox: {{platform.FIREFOX}}</p><p>Is Blink: {{platform.BLINK}}</p><p>Is Webkit: {{platform.WEBKIT}}</p><p>Is Trident: {{platform.TRIDENT}}</p><p>Is Edge: {{platform.EDGE}}</p><p>Supported input types: {{supportedInputTypes}}</p><p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p><p>Supports scroll behavior: {{supportsScrollBehavior}}</p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    CdkPlatformOverviewExample.ctorParameters = function () { return [
        { type: platform.Platform }
    ]; };
    return CdkPlatformOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
];
/**
 * \@title Basic use of `<cdk-table>` (uses display flex)
 */
var CdkTableBasicFlexExample = /** @class */ (function () {
    function CdkTableBasicFlexExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
    CdkTableBasicFlexExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-table-basic-flex-example',
                    styles: ["/** * Add basic flex styling so that the cells evenly space themselves in the row. */ cdk-row, cdk-header-row, cdk-footer-row { display: flex; } cdk-cell, cdk-header-cell, cdk-footer-cell { flex: 1; } "],
                    template: "<cdk-table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"position\"><cdk-header-cell *cdkHeaderCellDef>No.</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.position}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"name\"><cdk-header-cell *cdkHeaderCellDef>Name</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.name}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"weight\"><cdk-header-cell *cdkHeaderCellDef>Weight</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.weight}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"symbol\"><cdk-header-cell *cdkHeaderCellDef>Symbol</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.symbol}}</cdk-cell></ng-container><cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row><cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row></cdk-table>",
                },] },
    ];
    return CdkTableBasicFlexExample;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var /**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Stream of data that is provided to the table.
         */
        _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA);
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
        return this.data;
    };
    /**
     * @return {?}
     */
    ExampleDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return ExampleDataSource;
}(collections.DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
];
/**
 * \@title Basic CDK data-table
 */
var CdkTableBasicExample = /** @class */ (function () {
    function CdkTableBasicExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$1();
    }
    CdkTableBasicExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-table-basic-example',
                    styles: ["table { width: 100%; } th { text-align: left; } "],
                    template: "<table cdk-table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"position\"><th cdk-header-cell *cdkHeaderCellDef>No.</th><td cdk-cell *cdkCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container cdkColumnDef=\"name\"><th cdk-header-cell *cdkHeaderCellDef>Name</th><td cdk-cell *cdkCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container cdkColumnDef=\"weight\"><th cdk-header-cell *cdkHeaderCellDef>Weight</th><td cdk-cell *cdkCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container cdkColumnDef=\"symbol\"><th cdk-header-cell *cdkHeaderCellDef>Symbol</th><td cdk-cell *cdkCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr><tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    return CdkTableBasicExample;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var /**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
ExampleDataSource$1 = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Stream of data that is provided to the table.
         */
        _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$1);
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
        return this.data;
    };
    /**
     * @return {?}
     */
    ExampleDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return ExampleDataSource;
}(collections.DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
var /**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());
/**
 * Flat node with expandable and level information
 */
var /**
 * Flat node with expandable and level information
 */
FileFlatNode = /** @class */ (function () {
    function FileFlatNode(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
    return FileFlatNode;
}());
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 * @type {?}
 */
var TREE_DATA = JSON.stringify({
    Applications: {
        Calendar: 'app',
        Chrome: 'app',
        Webstorm: 'app'
    },
    Documents: {
        angular: {
            src: {
                compiler: 'ts',
                core: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        October: 'pdf',
        November: 'pdf',
        Tutorial: 'html'
    },
    Pictures: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    }
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs.BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileDatabase.prototype.initialize = /**
     * @return {?}
     */
    function () {
        // Parse the string to json object.
        /** @type {?} */
        var dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        /** @type {?} */
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    FileDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            /** @type {?} */
            var value = obj[key];
            /** @type {?} */
            var node = new FileNode();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    FileDatabase.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FileDatabase.ctorParameters = function () { return []; };
    return FileDatabase;
}());
/**
 * \@title Tree with flat nodes
 */
var CdkTreeFlatExample = /** @class */ (function () {
    function CdkTreeFlatExample(database) {
        var _this = this;
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.transformer = function (node, level) {
            return new FileFlatNode(!!node.children, node.filename, level, node.type);
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) { return rxjs.of(node.children); };
        this.treeFlattener = new tree$1.MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new tree.FlatTreeControl(this._getLevel, this._isExpandable);
        this.dataSource = new tree$1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    CdkTreeFlatExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-tree-flat-example',
                    template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding class=\"example-tree-node\"><button mat-icon-button disabled=\"disabled\"></button> {{node.filename}}: {{node.type}}</cdk-tree-node><cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding class=\"example-tree-node\"><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.filename}}: {{node.type}}</cdk-tree-node></cdk-tree>",
                    styles: [".example-tree-node { display: flex; align-items: center; } "],
                    providers: [FileDatabase]
                },] },
    ];
    /** @nocollapse */
    CdkTreeFlatExample.ctorParameters = function () { return [
        { type: FileDatabase }
    ]; };
    return CdkTreeFlatExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
var /**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
FileNode$1 = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());
/**
 * The Json tree data in string. The data could be parsed into Json object
 * @type {?}
 */
var TREE_DATA$1 = JSON.stringify({
    Applications: {
        Calendar: 'app',
        Chrome: 'app',
        Webstorm: 'app'
    },
    Documents: {
        angular: {
            src: {
                compiler: 'ts',
                core: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        October: 'pdf',
        November: 'pdf',
        Tutorial: 'html'
    },
    Pictures: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    }
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase$1 = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs.BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileDatabase.prototype.initialize = /**
     * @return {?}
     */
    function () {
        // Parse the string to json object.
        /** @type {?} */
        var dataObject = JSON.parse(TREE_DATA$1);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        /** @type {?} */
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    FileDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            /** @type {?} */
            var value = obj[key];
            /** @type {?} */
            var node = new FileNode$1();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    FileDatabase.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FileDatabase.ctorParameters = function () { return []; };
    return FileDatabase;
}());
/**
 * \@title Tree with nested nodes
 */
var CdkTreeNestedExample = /** @class */ (function () {
    function CdkTreeNestedExample(database) {
        var _this = this;
        this.hasNestedChild = function (_, nodeData) { return !nodeData.type; };
        this._getChildren = function (node) { return rxjs.of(node.children); };
        this.nestedTreeControl = new tree.NestedTreeControl(this._getChildren);
        this.nestedDataSource = new tree$1.MatTreeNestedDataSource();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    CdkTreeNestedExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-tree-nested-example',
                    template: "<cdk-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\"><cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\"><button mat-icon-button disabled=\"disabled\"></button> {{node.filename}}: {{node.type}}</cdk-nested-tree-node><cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasNestedChild\" class=\"example-tree-node\"><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.filename}}: {{node.type}}<div [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\"><ng-container cdkTreeNodeOutlet></ng-container></div></cdk-nested-tree-node></cdk-tree>",
                    styles: [".example-tree-invisible { display: none; } .example-tree ul, .example-tree li { margin-top: 0; margin-bottom: 0; list-style-type: none; } .example-tree-node { display: block; padding-left: 40px; } "],
                    providers: [FileDatabase$1]
                },] },
    ];
    /** @nocollapse */
    CdkTreeNestedExample.ctorParameters = function () { return [
        { type: FileDatabase$1 }
    ]; };
    return CdkTreeNestedExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Virtual scroll context variables
 */
var CdkVirtualScrollContextExample = /** @class */ (function () {
    function CdkVirtualScrollContextExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollContextExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-virtual-scroll-context-example',
                    styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item-detail { height: 18px; } .example-alternate { background: rgba(127, 127, 127, 0.3); } "],
                    template: "<cdk-virtual-scroll-viewport [itemSize]=\"18 * 7\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items; let index = index; let count = count; let first = first; let last = last; let even = even; let odd = odd;\" [class.example-alternate]=\"odd\"><div class=\"example-item-detail\">Item: {{item}}</div><div class=\"example-item-detail\">Index: {{index}}</div><div class=\"example-item-detail\">Count: {{count}}</div><div class=\"example-item-detail\">First: {{first ? 'Yes' : 'No'}}</div><div class=\"example-item-detail\">Last: {{last ? 'Yes' : 'No'}}</div><div class=\"example-item-detail\">Even: {{even ? 'Yes' : 'No'}}</div><div class=\"example-item-detail\">Odd: {{odd ? 'Yes' : 'No'}}</div></div></cdk-virtual-scroll-viewport>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return CdkVirtualScrollContextExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomVirtualScrollStrategy = /** @class */ (function (_super) {
    __extends(CustomVirtualScrollStrategy, _super);
    function CustomVirtualScrollStrategy() {
        return _super.call(this, 50, 250, 500) || this;
    }
    return CustomVirtualScrollStrategy;
}(scrolling.FixedSizeVirtualScrollStrategy));
/**
 * \@title Virtual scroll with a custom strategy
 */
var CdkVirtualScrollCustomStrategyExample = /** @class */ (function () {
    function CdkVirtualScrollCustomStrategyExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollCustomStrategyExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-virtual-scroll-custom-strategy-example',
                    styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                    template: "<cdk-virtual-scroll-viewport class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: scrolling.VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
                },] },
    ];
    return CdkVirtualScrollCustomStrategyExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Virtual scroll with a custom data source
 */
var CdkVirtualScrollDataSourceExample = /** @class */ (function () {
    function CdkVirtualScrollDataSourceExample() {
        this.ds = new MyDataSource();
    }
    CdkVirtualScrollDataSourceExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-virtual-scroll-data-source-example',
                    styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                    template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div></cdk-virtual-scroll-viewport>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return CdkVirtualScrollDataSourceExample;
}());
var MyDataSource = /** @class */ (function (_super) {
    __extends(MyDataSource, _super);
    function MyDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.length = 100000;
        _this.pageSize = 100;
        _this.cachedData = Array.from({ length: _this.length });
        _this.fetchedPages = new Set();
        _this.dataStream = new rxjs.BehaviorSubject(_this.cachedData);
        _this.subscription = new rxjs.Subscription();
        return _this;
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    MyDataSource.prototype.connect = /**
     * @param {?} collectionViewer
     * @return {?}
     */
    function (collectionViewer) {
        var _this = this;
        this.subscription.add(collectionViewer.viewChange.subscribe(function (range) {
            /** @type {?} */
            var startPage = _this.getPageForIndex(range.start);
            /** @type {?} */
            var endPage = _this.getPageForIndex(range.end - 1);
            for (var i = startPage; i <= endPage; i++) {
                _this.fetchPage(i);
            }
        }));
        return this.dataStream;
    };
    /**
     * @return {?}
     */
    MyDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    MyDataSource.prototype.getPageForIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return Math.floor(index / this.pageSize);
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    MyDataSource.prototype.fetchPage = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        var _this = this;
        if (this.fetchedPages.has(page)) {
            return;
        }
        this.fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(function () {
            var _a;
            (_a = _this.cachedData).splice.apply(_a, [page * _this.pageSize, _this.pageSize].concat(Array.from({ length: _this.pageSize })
                .map(function (_, i) { return "Item #" + (page * _this.pageSize + i); })));
            _this.dataStream.next(_this.cachedData);
        }, Math.random() * 1000 + 200);
    };
    return MyDataSource;
}(collections.DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Virtual scrolling `<dl>`
 */
var CdkVirtualScrollDlExample = /** @class */ (function () {
    function CdkVirtualScrollDlExample() {
        this.states = [
            { name: 'Alabama', capital: 'Montgomery' },
            { name: 'Alaska', capital: 'Juneau' },
            { name: 'Arizona', capital: 'Phoenix' },
            { name: 'Arkansas', capital: 'Little Rock' },
            { name: 'California', capital: 'Sacramento' },
            { name: 'Colorado', capital: 'Denver' },
            { name: 'Connecticut', capital: 'Hartford' },
            { name: 'Delaware', capital: 'Dover' },
            { name: 'Florida', capital: 'Tallahassee' },
            { name: 'Georgia', capital: 'Atlanta' },
            { name: 'Hawaii', capital: 'Honolulu' },
            { name: 'Idaho', capital: 'Boise' },
            { name: 'Illinois', capital: 'Springfield' },
            { name: 'Indiana', capital: 'Indianapolis' },
            { name: 'Iowa', capital: 'Des Moines' },
            { name: 'Kansas', capital: 'Topeka' },
            { name: 'Kentucky', capital: 'Frankfort' },
            { name: 'Louisiana', capital: 'Baton Rouge' },
            { name: 'Maine', capital: 'Augusta' },
            { name: 'Maryland', capital: 'Annapolis' },
            { name: 'Massachusetts', capital: 'Boston' },
            { name: 'Michigan', capital: 'Lansing' },
            { name: 'Minnesota', capital: 'St. Paul' },
            { name: 'Mississippi', capital: 'Jackson' },
            { name: 'Missouri', capital: 'Jefferson City' },
            { name: 'Montana', capital: 'Helena' },
            { name: 'Nebraska', capital: 'Lincoln' },
            { name: 'Nevada', capital: 'Carson City' },
            { name: 'New Hampshire', capital: 'Concord' },
            { name: 'New Jersey', capital: 'Trenton' },
            { name: 'New Mexico', capital: 'Santa Fe' },
            { name: 'New York', capital: 'Albany' },
            { name: 'North Carolina', capital: 'Raleigh' },
            { name: 'North Dakota', capital: 'Bismarck' },
            { name: 'Ohio', capital: 'Columbus' },
            { name: 'Oklahoma', capital: 'Oklahoma City' },
            { name: 'Oregon', capital: 'Salem' },
            { name: 'Pennsylvania', capital: 'Harrisburg' },
            { name: 'Rhode Island', capital: 'Providence' },
            { name: 'South Carolina', capital: 'Columbia' },
            { name: 'South Dakota', capital: 'Pierre' },
            { name: 'Tennessee', capital: 'Nashville' },
            { name: 'Texas', capital: 'Austin' },
            { name: 'Utah', capital: 'Salt Lake City' },
            { name: 'Vermont', capital: 'Montpelier' },
            { name: 'Virginia', capital: 'Richmond' },
            { name: 'Washington', capital: 'Olympia' },
            { name: 'West Virginia', capital: 'Charleston' },
            { name: 'Wisconsin', capital: 'Madison' },
            { name: 'Wyoming', capital: 'Cheyenne' },
        ];
    }
    CdkVirtualScrollDlExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-virtual-scroll-dl-example',
                    styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-dt { height: 30px; font-weight: bold; } .example-dd { height: 30px; } "],
                    template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\"><dl class=\"example-dl\"><ng-container *cdkVirtualFor=\"let state of states\"><dt class=\"example-dt\">{{state.name}}</dt><dd class=\"example-dd\">{{state.capital}}</dd></ng-container></dl></cdk-virtual-scroll-viewport>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return CdkVirtualScrollDlExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Fixed size virtual scroll with custom buffer parameters
 */
var CdkVirtualScrollFixedBufferExample = /** @class */ (function () {
    function CdkVirtualScrollFixedBufferExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollFixedBufferExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-virtual-scroll-fixed-buffer-example',
                    styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                    template: "<cdk-virtual-scroll-viewport itemSize=\"50\" minBufferPx=\"200\" maxBufferPx=\"400\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return CdkVirtualScrollFixedBufferExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Horizontal virtual scroll
 */
var CdkVirtualScrollHorizontalExample = /** @class */ (function () {
    function CdkVirtualScrollHorizontalExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollHorizontalExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-virtual-scroll-horizontal-example',
                    styles: [".cdk-virtual-scroll-data-source-example .example-viewport { height: 200px; width: 200px; border: 1px solid black; } .cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper { display: flex; flex-direction: row; } .cdk-virtual-scroll-data-source-example .example-item { width: 50px; height: 100%; writing-mode: vertical-lr; } "],
                    template: "<div class=\"cdk-virtual-scroll-data-source-example\"><cdk-virtual-scroll-viewport orientation=\"horizontal\" itemSize=\"50\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport></div>",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return CdkVirtualScrollHorizontalExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic virtual scroll
 */
var CdkVirtualScrollOverviewExample = /** @class */ (function () {
    function CdkVirtualScrollOverviewExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-virtual-scroll-overview-example',
                    styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                    template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return CdkVirtualScrollOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Virtual scroll with no template caching
 */
var CdkVirtualScrollTemplateCacheExample = /** @class */ (function () {
    function CdkVirtualScrollTemplateCacheExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollTemplateCacheExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-virtual-scroll-template-cache-example',
                    styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                    template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return CdkVirtualScrollTemplateCacheExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable checkbox
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
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Checkbox configuration</h2><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox></section><section class=\"example-section\"><label class=\"example-margin\">Align:</label><mat-radio-group [(ngModel)]=\"labelPosition\"><mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\" [(indeterminate)]=\"indeterminate\" [labelPosition]=\"labelPosition\" [disabled]=\"disabled\">I'm a checkbox</mat-checkbox></section></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
                },] },
    ];
    return CheckboxConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic checkboxes
 */
var CheckboxOverviewExample = /** @class */ (function () {
    function CheckboxOverviewExample() {
    }
    CheckboxOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'checkbox-overview-example',
                    template: "<mat-checkbox>Check me!</mat-checkbox>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return CheckboxOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Chips Autocomplete
 */
var ChipsAutocompleteExample = /** @class */ (function () {
    function ChipsAutocompleteExample() {
        var _this = this;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
        this.fruitCtrl = new forms.FormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(operators.startWith(null), operators.map(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ChipsAutocompleteExample.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            /** @type {?} */
            var input = event.input;
            /** @type {?} */
            var value = event.value;
            // Add our fruit
            if ((value || '').trim()) {
                this.fruits.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.fruitCtrl.setValue(null);
        }
    };
    /**
     * @param {?} fruit
     * @return {?}
     */
    ChipsAutocompleteExample.prototype.remove = /**
     * @param {?} fruit
     * @return {?}
     */
    function (fruit) {
        /** @type {?} */
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ChipsAutocompleteExample.prototype.selected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ChipsAutocompleteExample.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.allFruits.filter(function (fruit) { return fruit.toLowerCase().indexOf(filterValue) === 0; });
    };
    ChipsAutocompleteExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'chips-autocomplete-example',
                    template: "<mat-form-field class=\"example-chip-list\"><mat-chip-list #chipList><mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(fruit)\">{{fruit}}<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon></mat-chip><input placeholder=\"New fruit...\" #fruitInput [formControl]=\"fruitCtrl\" [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"></mat-chip-list><mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\"><mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">{{fruit}}</mat-option></mat-autocomplete></mat-form-field>",
                    styles: [".example-chip-list { width: 100%; } "],
                },] },
    ];
    /** @nocollapse */
    ChipsAutocompleteExample.ctorParameters = function () { return []; };
    ChipsAutocompleteExample.propDecorators = {
        fruitInput: [{ type: core.ViewChild, args: ['fruitInput',] }],
        matAutocomplete: [{ type: core.ViewChild, args: ['auto',] }]
    };
    return ChipsAutocompleteExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Chips with input
 */
var ChipsInputExample = /** @class */ (function () {
    function ChipsInputExample() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
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
        /** @type {?} */
        var input = event.input;
        /** @type {?} */
        var value = event.value;
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
        /** @type {?} */
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsInputExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'chips-input-example',
                    template: "<mat-form-field class=\"example-chip-list\"><mat-chip-list #chipList><mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(fruit)\">{{fruit.name}}<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon></mat-chip><input placeholder=\"New fruit...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"></mat-chip-list></mat-form-field>",
                    styles: [".example-chip-list { width: 100%; } "],
                },] },
    ];
    return ChipsInputExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic chips
 */
var ChipsOverviewExample = /** @class */ (function () {
    function ChipsOverviewExample() {
    }
    ChipsOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'chips-overview-example',
                    template: "<mat-chip-list><mat-chip>One fish</mat-chip><mat-chip>Two fish</mat-chip><mat-chip color=\"primary\" selected=\"selected\">Primary fish</mat-chip><mat-chip color=\"accent\" selected=\"selected\">Accent fish</mat-chip></mat-chip-list>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ChipsOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stacked chips
 */
var ChipsStackedExample = /** @class */ (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsStackedExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'chips-stacked-example',
                    template: "<mat-chip-list class=\"mat-chip-list-stacked\"><mat-chip *ngFor=\"let chip of availableColors\" selected=\"selected\" [color]=\"chip.color\">{{chip.name}}</mat-chip></mat-chip-list>",
                    styles: ["mat-chip { max-width: 200px; } "],
                },] },
    ];
    return ChipsStackedExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker open method
 */
var DatepickerApiExample = /** @class */ (function () {
    function DatepickerApiExample() {
    }
    DatepickerApiExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-api-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker #picker></mat-datepicker></mat-form-field><button mat-raised-button (click)=\"picker.open()\">Open</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerApiExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker palette colors
 */
var DatepickerColorExample = /** @class */ (function () {
    function DatepickerColorExample() {
    }
    DatepickerColorExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-color-example',
                    template: "<mat-form-field color=\"accent\"><mat-label>Inherited calendar color</mat-label><input matInput [matDatepicker]=\"picker1\"><mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle><mat-datepicker #picker1></mat-datepicker></mat-form-field><mat-form-field color=\"accent\"><mat-label>Custom calendar color</mat-label><input matInput [matDatepicker]=\"picker2\"><mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle><mat-datepicker #picker2 color=\"primary\"></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerColorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with custom calendar header
 */
var DatepickerCustomHeaderExample = /** @class */ (function () {
    function DatepickerCustomHeaderExample() {
        this.exampleHeader = ExampleHeader;
    }
    DatepickerCustomHeaderExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-custom-header-example',
                    template: "<mat-form-field><mat-label>Custom calendar header</mat-label><input matInput [matDatepicker]=\"picker\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker></mat-form-field>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return DatepickerCustomHeaderExample;
}());
/**
 * Custom header component for datepicker.
 * @template D
 */
var ExampleHeader = /** @class */ (function () {
    function ExampleHeader(calendar, dateAdapter, dateFormats, cdr) {
        this.calendar = calendar;
        this.dateAdapter = dateAdapter;
        this.dateFormats = dateFormats;
        this.destroyed = new rxjs.Subject();
        calendar.stateChanges
            .pipe(operators.takeUntil(this.destroyed))
            .subscribe(function () { return cdr.markForCheck(); });
    }
    /**
     * @return {?}
     */
    ExampleHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    Object.defineProperty(ExampleHeader.prototype, "periodLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dateAdapter
                .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} mode
     * @return {?}
     */
    ExampleHeader.prototype.previousClicked = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ExampleHeader.prototype.nextClicked = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
    };
    ExampleHeader.decorators = [
        { type: core.Component, args: [{
                    selector: 'example-header',
                    styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "],
                    template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    ExampleHeader.ctorParameters = function () { return [
        { type: material.MatCalendar, decorators: [{ type: core.Host }] },
        { type: core$1.DateAdapter },
        { type: undefined, decorators: [{ type: core.Inject, args: [core$1.MAT_DATE_FORMATS,] }] },
        { type: core.ChangeDetectorRef }
    ]; };
    return ExampleHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with custom icon
 */
var DatepickerCustomIconExample = /** @class */ (function () {
    function DatepickerCustomIconExample() {
    }
    DatepickerCustomIconExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-custom-icon-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"><mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerCustomIconExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with custom date classes
 */
var DatepickerDateClassExample = /** @class */ (function () {
    function DatepickerDateClassExample() {
        this.dateClass = function (d) {
            /** @type {?} */
            var date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : undefined;
        };
    }
    DatepickerDateClassExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-date-class-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker></mat-form-field>",
                    styles: [".example-custom-date-class { background: orange; border-radius: 100%; } "],
                    encapsulation: core.ViewEncapsulation.None,
                },] },
    ];
    return DatepickerDateClassExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Disabled datepicker
 */
var DatepickerDisabledExample = /** @class */ (function () {
    function DatepickerDisabledExample() {
    }
    DatepickerDisabledExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-disabled-example',
                    template: "<p><mat-form-field><input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled=\"disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle><mat-datepicker #dp1></mat-datepicker></mat-form-field></p><p><mat-form-field><input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled=\"disabled\"></mat-datepicker-toggle><mat-datepicker #dp2></mat-datepicker></mat-form-field></p><p><mat-form-field><input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled=\"disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle><mat-datepicker #dp3 disabled=\"false\"></mat-datepicker></mat-form-field></p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerDisabledExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker input and change events
 */
var DatepickerEventsExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'datepicker-events-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field><div class=\"example-events\"><div *ngFor=\"let e of events\">{{e}}</div></div>",
                    styles: [".example-events { width: 400px; height: 200px; border: 1px solid #555; overflow: auto; } "],
                },] },
    ];
    return DatepickerEventsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with filter validation
 */
var DatepickerFilterExample = /** @class */ (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            /** @type {?} */
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerFilterExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-filter-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerFilterExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = _rollupMoment__default__default || _rollupMoment__default;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
/** @type {?} */
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
var DatepickerFormatsExample = /** @class */ (function () {
    function DatepickerFormatsExample() {
        this.date = new forms.FormControl(moment());
    }
    DatepickerFormatsExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-formats-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        { provide: core$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                        { provide: core$1.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ],
                },] },
    ];
    return DatepickerFormatsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = materialMomentAdapter.MAT_MOMENT_DATE_FORMATS;
/**
 * \@title Datepicker with different locale
 */
var DatepickerLocaleExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'datepicker-locale-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp></mat-datepicker></mat-form-field><button mat-button (click)=\"french()\">Dynamically switch to French</button>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: core$1.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: core$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                        { provide: core$1.MAT_DATE_FORMATS, useValue: ɵ0 },
                    ],
                },] },
    ];
    /** @nocollapse */
    DatepickerLocaleExample.ctorParameters = function () { return [
        { type: core$1.DateAdapter }
    ]; };
    return DatepickerLocaleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with min & max validation
 */
var DatepickerMinMaxExample = /** @class */ (function () {
    function DatepickerMinMaxExample() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    DatepickerMinMaxExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-min-max-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerMinMaxExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$1 = _rollupMoment__default__default || _rollupMoment__default;
var ɵ0$1 = materialMomentAdapter.MAT_MOMENT_DATE_FORMATS;
/**
 * \@title Datepicker that uses Moment.js dates
 */
var DatepickerMomentExample = /** @class */ (function () {
    function DatepickerMomentExample() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new forms.FormControl(moment$1([2017, 0, 1]));
    }
    DatepickerMomentExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-moment-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: core$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                        { provide: core$1.MAT_DATE_FORMATS, useValue: ɵ0$1 },
                    ],
                },] },
    ];
    return DatepickerMomentExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic datepicker
 */
var DatepickerOverviewExample = /** @class */ (function () {
    function DatepickerOverviewExample() {
    }
    DatepickerOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-overview-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker start date
 */
var DatepickerStartViewExample = /** @class */ (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    DatepickerStartViewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-start-view-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerStartViewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker touch UI
 */
var DatepickerTouchExample = /** @class */ (function () {
    function DatepickerTouchExample() {
    }
    DatepickerTouchExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-touch-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker touchUi #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerTouchExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker selected value
 */
var DatepickerValueExample = /** @class */ (function () {
    function DatepickerValueExample() {
        this.date = new forms.FormControl(new Date());
        this.serializedDate = new forms.FormControl((new Date()).toISOString());
    }
    DatepickerValueExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-value-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle><mat-datepicker #picker1></mat-datepicker></mat-form-field><mat-form-field><input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\" [formControl]=\"serializedDate\"><mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle><mat-datepicker #picker2></mat-datepicker></mat-form-field><mat-form-field><input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\"><mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle><mat-datepicker #picker3></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerValueExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$2 = _rollupMoment__default__default || _rollupMoment__default;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
/** @type {?} */
var MY_FORMATS$1 = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/**
 * \@title Datepicker emulating a Year and month picker
 */
var DatepickerViewsSelectionExample = /** @class */ (function () {
    function DatepickerViewsSelectionExample() {
        this.date = new forms.FormControl(moment$2());
    }
    /**
     * @param {?} normalizedYear
     * @return {?}
     */
    DatepickerViewsSelectionExample.prototype.chosenYearHandler = /**
     * @param {?} normalizedYear
     * @return {?}
     */
    function (normalizedYear) {
        /** @type {?} */
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    };
    /**
     * @param {?} normlizedMonth
     * @param {?} datepicker
     * @return {?}
     */
    DatepickerViewsSelectionExample.prototype.chosenMonthHandler = /**
     * @param {?} normlizedMonth
     * @param {?} datepicker
     * @return {?}
     */
    function (normlizedMonth, datepicker) {
        /** @type {?} */
        var ctrlValue = this.date.value;
        ctrlValue.month(normlizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    };
    DatepickerViewsSelectionExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'datepicker-views-selection-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Month and Year\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp startView=\"multi-year\" (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, dp)\" panelClass=\"example-month-picker\"></mat-datepicker></mat-form-field>",
                    styles: [".example-month-picker .mat-calendar-period-button { pointer-events: none; } .example-month-picker .mat-calendar-arrow { display: none; } "],
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        { provide: core$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                        { provide: core$1.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                    ],
                },] },
    ];
    return DatepickerViewsSelectionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dialog with header, scrollable content and actions
 */
var DialogContentExample = /** @class */ (function () {
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
        /** @type {?} */
        var dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DialogContentExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'dialog-content-example',
                    template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DialogContentExample.ctorParameters = function () { return [
        { type: material.MatDialog }
    ]; };
    return DialogContentExample;
}());
var DialogContentExampleDialog = /** @class */ (function () {
    function DialogContentExampleDialog() {
    }
    DialogContentExampleDialog.decorators = [
        { type: core.Component, args: [{
                    selector: 'dialog-content-example-dialog',
                    template: "<h2 mat-dialog-title>Install Angular</h2><mat-dialog-content class=\"mat-typography\"><h3>Develop across all platforms</h3><p>Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p><h3>Speed &amp; Performance</h3><p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.</p><h3>Incredible tooling</h3><p>Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.</p><h3>Loved by millions</h3><p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.</p><h3>What is Angular?</h3><p>Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop</p><h3>Architecture overview</h3><p>Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.</p><p>The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.</p><p>Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.</p><p>Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.</p><p>Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.</p><p>The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.</p><p>The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).</p><p>An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.</p></mat-dialog-content><mat-dialog-actions align=\"end\"><button mat-button mat-dialog-close>Cancel</button> <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button></mat-dialog-actions>",
                },] },
    ];
    return DialogContentExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Injecting data when opening a dialog
 */
var DialogDataExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'dialog-data-example',
                    template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DialogDataExample.ctorParameters = function () { return [
        { type: material.MatDialog }
    ]; };
    return DialogDataExample;
}());
var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog.decorators = [
        { type: core.Component, args: [{
                    selector: 'dialog-data-example-dialog',
                    template: "<h1 mat-dialog-title>Favorite Animal</h1><div mat-dialog-content>My favorite animal is:<ul><li><span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda</li><li><span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn</li><li><span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion</li></ul></div>",
                },] },
    ];
    /** @nocollapse */
    DialogDataExampleDialog.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
    ]; };
    return DialogDataExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dialog elements
 */
var DialogElementsExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'dialog-elements-example',
                    template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DialogElementsExample.ctorParameters = function () { return [
        { type: material.MatDialog }
    ]; };
    return DialogElementsExample;
}());
var DialogElementsExampleDialog = /** @class */ (function () {
    function DialogElementsExampleDialog() {
    }
    DialogElementsExampleDialog.decorators = [
        { type: core.Component, args: [{
                    selector: 'dialog-elements-example-dialog',
                    template: "<h1 mat-dialog-title>Dialog with elements</h1><div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div><div mat-dialog-actions><button mat-button mat-dialog-close>Close</button></div>",
                },] },
    ];
    return DialogElementsExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dialog Overview
 */
var DialogOverviewExample = /** @class */ (function () {
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
        /** @type {?} */
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'dialog-overview-example',
                    template: "<ol><li><mat-form-field><input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\"></mat-form-field></li><li><button mat-raised-button (click)=\"openDialog()\">Pick one</button></li><li *ngIf=\"animal\">You chose: <i>{{animal}}</i></li></ol>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExample.ctorParameters = function () { return [
        { type: material.MatDialog }
    ]; };
    return DialogOverviewExample;
}());
var DialogOverviewExampleDialog = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'dialog-overview-example-dialog',
                    template: "<h1 mat-dialog-title>Hi {{data.name}}</h1><div mat-dialog-content><p>What's your favorite animal?</p><mat-form-field><input matInput [(ngModel)]=\"data.animal\"></mat-form-field></div><div mat-dialog-actions><button mat-button (click)=\"onNoClick()\">No Thanks</button> <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button></div>",
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExampleDialog.ctorParameters = function () { return [
        { type: material.MatDialogRef },
        { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
    ]; };
    return DialogOverviewExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic divider
 */
var DividerOverviewExample = /** @class */ (function () {
    function DividerOverviewExample() {
    }
    DividerOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'divider-overview-example',
                    template: "<mat-list><mat-list-item>Item 1</mat-list-item><mat-divider></mat-divider><mat-list-item>Item 2</mat-list-item><mat-divider></mat-divider><mat-list-item>Item 3</mat-list-item></mat-list>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DividerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Elevation CSS classes
 */
var ElevationOverviewExample = /** @class */ (function () {
    function ElevationOverviewExample() {
        this.isActive = false;
    }
    ElevationOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'elevation-overview-example',
                    styles: [".example-container { padding: 16px; margin-bottom: 16px; } "],
                    template: "<div class=\"example-container\" [class.mat-elevation-z2]=\"!isActive\" [class.mat-elevation-z8]=\"isActive\">Example</div><button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>",
                },] },
    ];
    return ElevationOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Accordion with expand/collapse all toggles
 */
var ExpansionExpandCollapseAllExample = /** @class */ (function () {
    function ExpansionExpandCollapseAllExample() {
    }
    ExpansionExpandCollapseAllExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'expansion-toggle-all-example',
                    template: "<div class=\"example-action-buttons\"><button mat-button (click)=\"accordion.openAll()\">Expand All</button> <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button></div><mat-accordion class=\"example-headers-align\" multi><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput type=\"number\" min=\"1\" placeholder=\"Age\"></mat-form-field></mat-expansion-panel><mat-expansion-panel disabled=\"disabled\"><mat-expansion-panel-header><mat-panel-title>Destination</mat-panel-title><mat-panel-description>Type the country name<mat-icon>map</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Country\"></mat-form-field></mat-expansion-panel><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Day of the trip</mat-panel-title><mat-panel-description>Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly=\"readonly\"></mat-form-field><mat-datepicker #picker></mat-datepicker></mat-expansion-panel></mat-accordion>",
                    styles: [".example-action-buttons { padding-bottom: 20px; } .example-headers-align .mat-expansion-panel-header-title, .example-headers-align .mat-expansion-panel-header-description { flex-basis: 0; } .example-headers-align .mat-expansion-panel-header-description { justify-content: space-between; align-items: center; } "],
                },] },
    ];
    ExpansionExpandCollapseAllExample.propDecorators = {
        accordion: [{ type: core.ViewChild, args: [material.MatAccordion,] }]
    };
    return ExpansionExpandCollapseAllExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic expansion panel
 */
var ExpansionOverviewExample = /** @class */ (function () {
    function ExpansionOverviewExample() {
        this.panelOpenState = false;
    }
    ExpansionOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'expansion-overview-example',
                    template: "<mat-accordion><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age</mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput placeholder=\"Age\"></mat-form-field></mat-expansion-panel><mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\"><mat-expansion-panel-header><mat-panel-title>Self aware panel</mat-panel-title><mat-panel-description>Currently I am {{panelOpenState ? 'open' : 'closed'}}</mat-panel-description></mat-expansion-panel-header><p>I'm visible because I am open</p></mat-expansion-panel></mat-accordion>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ExpansionOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Expansion panel as accordion
 */
var ExpansionStepsExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'expansion-steps-example',
                    template: "<mat-accordion class=\"example-headers-align\"><mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput type=\"number\" min=\"1\" placeholder=\"Age\"></mat-form-field><mat-action-row><button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button></mat-action-row></mat-expansion-panel><mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle><mat-expansion-panel-header><mat-panel-title>Destination</mat-panel-title><mat-panel-description>Type the country name<mat-icon>map</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Country\"></mat-form-field><mat-action-row><button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button> <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button></mat-action-row></mat-expansion-panel><mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle><mat-expansion-panel-header><mat-panel-title>Day of the trip</mat-panel-title><mat-panel-description>Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly=\"readonly\"></mat-form-field><mat-datepicker #picker></mat-datepicker><mat-action-row><button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button> <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button></mat-action-row></mat-expansion-panel></mat-accordion>",
                    styles: [".example-headers-align .mat-expansion-panel-header-title, .example-headers-align .mat-expansion-panel-header-description { flex-basis: 0; } .example-headers-align .mat-expansion-panel-header-description { justify-content: space-between; align-items: center; } "],
                },] },
    ];
    return ExpansionStepsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Monitoring focus with FocusMonitor
 */
var FocusMonitorDirectivesExample = /** @class */ (function () {
    function FocusMonitorDirectivesExample(ngZone, cdr) {
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    FocusMonitorDirectivesExample.prototype.formatOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    /**
     * @return {?}
     */
    FocusMonitorDirectivesExample.prototype.markForCheck = 
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.run(function () { return _this.cdr.markForCheck(); });
    };
    FocusMonitorDirectivesExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'focus-monitor-directives-example',
                    template: "<div class=\"example-focus-monitor\"><button cdkMonitorSubtreeFocus (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">Focus Monitored Element ({{elementOrigin}})</button></div><div class=\"example-focus-monitor\"><div cdkMonitorSubtreeFocus (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\"><p>Focus Monitored Subtree ({{subtreeOrigin}})</p><button>Child Button 1</button> <button>Child Button 2</button></div></div>",
                    styles: [".example-focus-monitor { padding: 20px; } .example-focus-monitor .cdk-mouse-focused { background: rgba(255, 0, 0, 0.5); } .example-focus-monitor .cdk-keyboard-focused { background: rgba(0, 255, 0, 0.5); } .example-focus-monitor .cdk-touch-focused { background: rgba(0, 0, 255, 0.5); } .example-focus-monitor .cdk-program-focused { background: rgba(255, 0, 255, 0.5); } "]
                },] },
    ];
    /** @nocollapse */
    FocusMonitorDirectivesExample.ctorParameters = function () { return [
        { type: core.NgZone },
        { type: core.ChangeDetectorRef }
    ]; };
    return FocusMonitorDirectivesExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Focusing with a specific FocusOrigin
 */
var FocusMonitorFocusViaExample = /** @class */ (function () {
    function FocusMonitorFocusViaExample(focusMonitor, cdr, ngZone) {
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.origin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    FocusMonitorFocusViaExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.monitoredEl)
            .subscribe(function (origin) { return _this.ngZone.run(function () {
            _this.origin = _this.formatOrigin(origin);
            _this.cdr.markForCheck();
        }); });
    };
    /**
     * @return {?}
     */
    FocusMonitorFocusViaExample.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.monitoredEl);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    FocusMonitorFocusViaExample.prototype.formatOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    FocusMonitorFocusViaExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'focus-monitor-focus-via-example',
                    template: "<div class=\"example-focus-monitor\"><button #monitored>1. Focus Monitored Element ({{origin}})</button> <button #unmonitored>2. Not Monitored</button></div><mat-form-field><mat-label>Simulated focus origin</mat-label><mat-select #simulatedOrigin value=\"mouse\"><mat-option value=\"mouse\">Mouse</mat-option><mat-option value=\"keyboard\">Keyboard</mat-option><mat-option value=\"touch\">Touch</mat-option><mat-option value=\"program\">Programmatic</mat-option></mat-select></mat-form-field><button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">Focus button #1</button> <button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">Focus button #2</button>",
                    styles: [".example-focus-monitor { padding: 20px; } .example-focus-monitor .cdk-mouse-focused { background: rgba(255, 0, 0, 0.5); } .example-focus-monitor .cdk-keyboard-focused { background: rgba(0, 255, 0, 0.5); } .example-focus-monitor .cdk-touch-focused { background: rgba(0, 0, 255, 0.5); } .example-focus-monitor .cdk-program-focused { background: rgba(255, 0, 255, 0.5); } .example-focus-monitor button:focus { box-shadow: 0 0 30px cyan; } "]
                },] },
    ];
    /** @nocollapse */
    FocusMonitorFocusViaExample.ctorParameters = function () { return [
        { type: a11y.FocusMonitor },
        { type: core.ChangeDetectorRef },
        { type: core.NgZone }
    ]; };
    FocusMonitorFocusViaExample.propDecorators = {
        monitoredEl: [{ type: core.ViewChild, args: ['monitored',] }]
    };
    return FocusMonitorFocusViaExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Monitoring focus with FocusMonitor
 */
var FocusMonitorOverviewExample = /** @class */ (function () {
    function FocusMonitorOverviewExample(focusMonitor, cdr, ngZone) {
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    FocusMonitorOverviewExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.element)
            .subscribe(function (origin) { return _this.ngZone.run(function () {
            _this.elementOrigin = _this.formatOrigin(origin);
            _this.cdr.markForCheck();
        }); });
        this.focusMonitor.monitor(this.subtree, true)
            .subscribe(function (origin) { return _this.ngZone.run(function () {
            _this.subtreeOrigin = _this.formatOrigin(origin);
            _this.cdr.markForCheck();
        }); });
    };
    /**
     * @return {?}
     */
    FocusMonitorOverviewExample.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.element);
        this.focusMonitor.stopMonitoring(this.subtree);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    FocusMonitorOverviewExample.prototype.formatOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    FocusMonitorOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'focus-monitor-overview-example',
                    template: "<div class=\"example-focus-monitor\"><button #element>Focus Monitored Element ({{elementOrigin}})</button></div><div class=\"example-focus-monitor\"><div #subtree><p>Focus Monitored Subtree ({{subtreeOrigin}})</p><button>Child Button 1</button> <button>Child Button 2</button></div></div>",
                    styles: [".example-focus-monitor { padding: 20px; } .example-focus-monitor .cdk-mouse-focused { background: rgba(255, 0, 0, 0.5); } .example-focus-monitor .cdk-keyboard-focused { background: rgba(0, 255, 0, 0.5); } .example-focus-monitor .cdk-touch-focused { background: rgba(0, 0, 255, 0.5); } .example-focus-monitor .cdk-program-focused { background: rgba(255, 0, 255, 0.5); } "]
                },] },
    ];
    /** @nocollapse */
    FocusMonitorOverviewExample.ctorParameters = function () { return [
        { type: a11y.FocusMonitor },
        { type: core.ChangeDetectorRef },
        { type: core.NgZone }
    ]; };
    FocusMonitorOverviewExample.propDecorators = {
        element: [{ type: core.ViewChild, args: ['element',] }],
        subtree: [{ type: core.ViewChild, args: ['subtree',] }]
    };
    return FocusMonitorOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field appearance variants
 */
var FormFieldAppearanceExample = /** @class */ (function () {
    function FormFieldAppearanceExample() {
    }
    FormFieldAppearanceExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-field-appearance-example',
                    template: "<p><mat-form-field appearance=\"legacy\"><mat-label>Legacy form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p><p><mat-form-field appearance=\"standard\"><mat-label>Standard form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p><p><mat-form-field appearance=\"fill\"><mat-label>Fill form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p><p><mat-form-field appearance=\"outline\"><mat-label>Outline form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return FormFieldAppearanceExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with custom telephone number input control.
 */
var FormFieldCustomControlExample = /** @class */ (function () {
    function FormFieldCustomControlExample() {
    }
    FormFieldCustomControlExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-field-custom-control-example',
                    template: "<mat-form-field><example-tel-input placeholder=\"Phone number\" required></example-tel-input><mat-icon matSuffix>phone</mat-icon><mat-hint>Include area code</mat-hint></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return FormFieldCustomControlExample;
}());
/**
 * Data structure for holding telephone number.
 */
var /**
 * Data structure for holding telephone number.
 */
MyTel = /** @class */ (function () {
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
var MyTelInput = /** @class */ (function () {
    function MyTelInput(fb, fm, elRef) {
        var _this = this;
        this.fm = fm;
        this.elRef = elRef;
        this.stateChanges = new rxjs.Subject();
        this.focused = false;
        this.ngControl = null;
        this.errorState = false;
        this.controlType = 'example-tel-input';
        this.id = "example-tel-input-" + MyTelInput.nextId++;
        this.describedBy = '';
        this._required = false;
        this._disabled = false;
        this.parts = fb.group({
            area: '',
            exchange: '',
            subscriber: '',
        });
        fm.monitor(elRef, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
    }
    Object.defineProperty(MyTelInput.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            return !area && !exchange && !subscriber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "shouldLabelFloat", {
        get: /**
         * @return {?}
         */
        function () { return this.focused || !this.empty; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () { return this._placeholder; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = coercion.coerceBooleanProperty(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coercion.coerceBooleanProperty(value);
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
            var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
                return new MyTel(area, exchange, subscriber);
            }
            return null;
        },
        set: /**
         * @param {?} tel
         * @return {?}
         */
        function (tel) {
            var _a = tel || new MyTel('', '', ''), area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            this.parts.setValue({ area: area, exchange: exchange, subscriber: subscriber });
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
        this.fm.stopMonitoring(this.elRef);
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
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() != 'input') {
            (/** @type {?} */ (this.elRef.nativeElement.querySelector('input'))).focus();
        }
    };
    MyTelInput.nextId = 0;
    MyTelInput.decorators = [
        { type: core.Component, args: [{
                    selector: 'example-tel-input',
                    template: "<div [formGroup]=\"parts\" class=\"example-tel-input-container\"><input class=\"example-tel-input-element\" formControlName=\"area\" size=\"3\"> <span class=\"example-tel-input-spacer\">&ndash;</span> <input class=\"example-tel-input-element\" formControlName=\"exchange\" size=\"3\"> <span class=\"example-tel-input-spacer\">&ndash;</span> <input class=\"example-tel-input-element\" formControlName=\"subscriber\" size=\"4\"></div>",
                    styles: [".example-tel-input-container { display: flex; } .example-tel-input-element { border: none; background: none; padding: 0; outline: none; font: inherit; text-align: center; } .example-tel-input-spacer { opacity: 0; transition: opacity 200ms; } :host.example-floating .example-tel-input-spacer { opacity: 1; } "],
                    providers: [{ provide: material.MatFormFieldControl, useExisting: MyTelInput }],
                    host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                        '[attr.aria-describedby]': 'describedBy',
                    }
                },] },
    ];
    /** @nocollapse */
    MyTelInput.ctorParameters = function () { return [
        { type: forms.FormBuilder },
        { type: a11y.FocusMonitor },
        { type: core.ElementRef }
    ]; };
    MyTelInput.propDecorators = {
        placeholder: [{ type: core.Input }],
        required: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        value: [{ type: core.Input }]
    };
    return MyTelInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with error messages
 */
var FormFieldErrorExample = /** @class */ (function () {
    function FormFieldErrorExample() {
        this.email = new forms.FormControl('', [forms.Validators.required, forms.Validators.email]);
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
        { type: core.Component, args: [{
                    selector: 'form-field-error-example',
                    template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required><mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "],
                },] },
    ];
    return FormFieldErrorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with hints
 */
var FormFieldHintExample = /** @class */ (function () {
    function FormFieldHintExample() {
    }
    FormFieldHintExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-field-hint-example',
                    template: "<div class=\"example-container\"><mat-form-field hintLabel=\"Max 10 characters\"><input matInput #input maxlength=\"10\" placeholder=\"Enter some input\"><mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint></mat-form-field><mat-form-field><mat-select placeholder=\"Select me\"><mat-option value=\"option\">Option</mat-option></mat-select><mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "],
                },] },
    ];
    return FormFieldHintExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with label
 */
var FormFieldLabelExample = /** @class */ (function () {
    function FormFieldLabelExample(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    FormFieldLabelExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-field-label-example',
                    template: "<div class=\"example-container\"><form class=\"example-container\" [formGroup]=\"options\"><mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox><div><label>Float label:</label><mat-radio-group formControlName=\"floatLabel\"><mat-radio-button value=\"auto\">Auto</mat-radio-button><mat-radio-button value=\"always\">Always</mat-radio-button><mat-radio-button value=\"never\">Never</mat-radio-button></mat-radio-group></div></form><mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\"><input matInput placeholder=\"Simple placeholder\" required></mat-form-field><mat-form-field [floatLabel]=\"options.value.floatLabel\"><mat-label>Both a label and a placeholder</mat-label><input matInput placeholder=\"Simple placeholder\"></mat-form-field><mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\"><mat-select required><mat-option>-- None --</mat-option><mat-option value=\"option\">Option</mat-option></mat-select><mat-label><mat-icon>favorite</mat-icon><b>Fancy</b> <i>label</i></mat-label></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } .example-container form { margin-bottom: 20px; } .example-container form > * { margin: 5px 0; } .example-container .mat-radio-button { margin: 0 5px; } "],
                },] },
    ];
    /** @nocollapse */
    FormFieldLabelExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return FormFieldLabelExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Simple form field
 */
var FormFieldOverviewExample = /** @class */ (function () {
    function FormFieldOverviewExample() {
    }
    FormFieldOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-field-overview-example',
                    template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Input\"></mat-form-field><mat-form-field><textarea matInput placeholder=\"Textarea\"></textarea></mat-form-field><mat-form-field><mat-select placeholder=\"Select\"><mat-option value=\"option\">Option</mat-option></mat-select></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "],
                },] },
    ];
    return FormFieldOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with prefix & suffix
 */
var FormFieldPrefixSuffixExample = /** @class */ (function () {
    function FormFieldPrefixSuffixExample() {
        this.hide = true;
    }
    FormFieldPrefixSuffixExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-field-prefix-suffix-example',
                    template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"><mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon></mat-form-field><mat-form-field><input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\"> <span matPrefix>$&nbsp;</span> <span matSuffix>.00</span></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } .example-right-align { text-align: right; } input.example-right-align::-webkit-outer-spin-button, input.example-right-align::-webkit-inner-spin-button { display: none; } input.example-right-align { -moz-appearance: textfield; } "],
                },] },
    ];
    return FormFieldPrefixSuffixExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field theming
 */
var FormFieldThemingExample = /** @class */ (function () {
    function FormFieldThemingExample(fb) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, forms.Validators.min(10)],
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
        { type: core.Component, args: [{
                    selector: 'form-field-theming-example',
                    template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\"><mat-form-field [color]=\"options.value.color\"><mat-select placeholder=\"Color\" formControlName=\"color\"><mat-option value=\"primary\">Primary</mat-option><mat-option value=\"accent\">Accent</mat-option><mat-option value=\"warn\">Warn</mat-option></mat-select></mat-form-field><mat-form-field [color]=\"options.value.color\"><input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\"><mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error></mat-form-field></form>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "],
                },] },
    ];
    /** @nocollapse */
    FormFieldThemingExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return FormFieldThemingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dynamic grid-list
 */
var GridListDynamicExample = /** @class */ (function () {
    function GridListDynamicExample() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    GridListDynamicExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'grid-list-dynamic-example',
                    template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\"><mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">{{tile.text}}</mat-grid-tile></mat-grid-list>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return GridListDynamicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic grid-list
 */
var GridListOverviewExample = /** @class */ (function () {
    function GridListOverviewExample() {
    }
    GridListOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'grid-list-overview-example',
                    styles: ["mat-grid-tile { background: lightblue; } "],
                    template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\"><mat-grid-tile>1</mat-grid-tile><mat-grid-tile>2</mat-grid-tile><mat-grid-tile>3</mat-grid-tile><mat-grid-tile>4</mat-grid-tile></mat-grid-list>",
                },] },
    ];
    return GridListOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic icons
 */
var IconOverviewExample = /** @class */ (function () {
    function IconOverviewExample() {
    }
    IconOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'icon-overview-example',
                    template: "<mat-icon>home</mat-icon>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return IconOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title SVG icons
 */
var IconSvgExample = /** @class */ (function () {
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    IconSvgExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'icon-svg-example',
                    template: "<mat-icon svgIcon=\"thumbs-up\"></mat-icon>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    IconSvgExample.ctorParameters = function () { return [
        { type: material.MatIconRegistry },
        { type: platformBrowser.DomSanitizer }
    ]; };
    return IconSvgExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Input with a clear button
 */
var InputClearableExample = /** @class */ (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    InputClearableExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'input-clearable-example',
                    template: "<mat-form-field class=\"example-form-field\"><input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"> <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\"><mat-icon>close</mat-icon></button></mat-form-field>",
                    styles: [".example-form-field { width: 200px; } "],
                },] },
    ];
    return InputClearableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
var /**
 * Error when invalid control is dirty, touched, or submitted.
 */
MyErrorStateMatcher = /** @class */ (function () {
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
        /** @type {?} */
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
/**
 * \@title Input with a custom ErrorStateMatcher
 */
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
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"><mat-hint>Errors appear instantly!</mat-hint><mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error><mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputErrorStateMatcherExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Input with error messages
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
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"><mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error><mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputErrorsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Inputs in a form
 */
var InputFormExample = /** @class */ (function () {
    function InputFormExample() {
    }
    InputFormExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'input-form-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Company (disabled)\" disabled=\"disabled\" value=\"Google\"></mat-form-field><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"First name\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Long Last Name That Will Be Truncated\"></mat-form-field></td></tr></table><p><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea></mat-form-field><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Address 2\"></textarea></mat-form-field></p><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"City\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"State\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\"><mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint></mat-form-field></td></tr></table></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputFormExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Input with hints
 */
var InputHintExample = /** @class */ (function () {
    function InputHintExample() {
    }
    InputHintExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'input-hint-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput #message maxlength=\"256\" placeholder=\"Message\"><mat-hint align=\"start\"><strong>Don't disclose personal info</strong></mat-hint><mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputHintExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic Inputs
 */
var InputOverviewExample = /** @class */ (function () {
    function InputOverviewExample() {
    }
    InputOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'input-overview-example',
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Favorite food\" value=\"Sushi\"></mat-form-field><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Leave a comment\"></textarea></mat-form-field></form>",
                },] },
    ];
    return InputOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Inputs with prefixes and suffixes
 */
var InputPrefixSuffixExample = /** @class */ (function () {
    function InputPrefixSuffixExample() {
    }
    InputPrefixSuffixExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'input-prefix-suffix-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><span matPrefix>+1 &nbsp;</span> <input type=\"tel\" matInput placeholder=\"Telephone\"><mat-icon matSuffix>mode_edit</mat-icon></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputPrefixSuffixExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic list
 */
var ListOverviewExample = /** @class */ (function () {
    function ListOverviewExample() {
    }
    ListOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'list-overview-example',
                    template: "<mat-list role=\"list\"><mat-list-item role=\"listitem\">Item 1</mat-list-item><mat-list-item role=\"listitem\">Item 2</mat-list-item><mat-list-item role=\"listitem\">Item 3</mat-list-item></mat-list>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ListOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title List with sections
 */
var ListSectionsExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'list-sections-example',
                    styles: [".mat-list-icon { color: rgba(0, 0, 0, 0.54); } "],
                    template: "<mat-list><h3 mat-subheader>Folders</h3><mat-list-item *ngFor=\"let folder of folders\"><mat-icon mat-list-icon>folder</mat-icon><h4 mat-line>{{folder.name}}</h4><p mat-line>{{folder.updated | date}}</p></mat-list-item><mat-divider></mat-divider><h3 mat-subheader>Notes</h3><mat-list-item *ngFor=\"let note of notes\"><mat-icon mat-list-icon>note</mat-icon><h4 mat-line>{{note.name}}</h4><p mat-line>{{note.updated | date}}</p></mat-list-item></mat-list>",
                },] },
    ];
    return ListSectionsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title List with selection
 */
var ListSelectionExample = /** @class */ (function () {
    function ListSelectionExample() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ListSelectionExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'list-selection-example',
                    styles: ["/** No styles for this example. */ "],
                    template: "<mat-selection-list #shoes><mat-list-option *ngFor=\"let shoe of typesOfShoes\">{{shoe}}</mat-list-option></mat-selection-list><p>Options selected: {{shoes.selectedOptions.selected.length}}</p>",
                },] },
    ];
    return ListSelectionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Menu with icons
 */
var MenuIconsExample = /** @class */ (function () {
    function MenuIconsExample() {
    }
    MenuIconsExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'menu-icons-example',
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button><mat-menu #menu=\"matMenu\"><button mat-menu-item><mat-icon>dialpad</mat-icon><span>Redial</span></button> <button mat-menu-item disabled=\"disabled\"><mat-icon>voicemail</mat-icon><span>Check voicemail</span></button> <button mat-menu-item><mat-icon>notifications_off</mat-icon><span>Disable alerts</span></button></mat-menu>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return MenuIconsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic menu
 */
var MenuOverviewExample = /** @class */ (function () {
    function MenuOverviewExample() {
    }
    MenuOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'menu-overview-example',
                    template: "<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button><mat-menu #menu=\"matMenu\"><button mat-menu-item>Item 1</button> <button mat-menu-item>Item 2</button></mat-menu>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return MenuOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Nested menu
 */
var NestedMenuExample = /** @class */ (function () {
    function NestedMenuExample() {
    }
    NestedMenuExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'nested-menu-example',
                    template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button><mat-menu #animals=\"matMenu\"><button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button> <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button></mat-menu><mat-menu #vertebrates=\"matMenu\"><button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button> <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button> <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button> <button mat-menu-item>Birds</button> <button mat-menu-item>Mammals</button></mat-menu><mat-menu #invertebrates=\"matMenu\"><button mat-menu-item>Insects</button> <button mat-menu-item>Molluscs</button> <button mat-menu-item>Crustaceans</button> <button mat-menu-item>Corals</button> <button mat-menu-item>Arachnids</button> <button mat-menu-item>Velvet worms</button> <button mat-menu-item>Horseshoe crabs</button></mat-menu><mat-menu #fish=\"matMenu\"><button mat-menu-item>Baikal oilfish</button> <button mat-menu-item>Bala shark</button> <button mat-menu-item>Ballan wrasse</button> <button mat-menu-item>Bamboo shark</button> <button mat-menu-item>Banded killifish</button></mat-menu><mat-menu #amphibians=\"matMenu\"><button mat-menu-item>Sonoran desert toad</button> <button mat-menu-item>Western toad</button> <button mat-menu-item>Arroyo toad</button> <button mat-menu-item>Yosemite toad</button></mat-menu><mat-menu #reptiles=\"matMenu\"><button mat-menu-item>Banded Day Gecko</button> <button mat-menu-item>Banded Gila Monster</button> <button mat-menu-item>Black Tree Monitor</button> <button mat-menu-item>Blue Spiny Lizard</button> <button mat-menu-item disabled=\"disabled\">Velociraptor</button></mat-menu>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return NestedMenuExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable paginator
 */
var PaginatorConfigurableExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'paginator-configurable-example',
                    template: "<mat-form-field>List length: <input matInput [(ngModel)]=\"length\"></mat-form-field><mat-form-field>Page size: <input matInput [(ngModel)]=\"pageSize\"></mat-form-field><mat-form-field>Page size options: <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"></mat-form-field><mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event\"></mat-paginator><div *ngIf=\"pageEvent\"><h5>Page Change Event Properties</h5><div>List length: {{pageEvent.length}}</div><div>Page size: {{pageEvent.pageSize}}</div><div>Page index: {{pageEvent.pageIndex}}</div></div>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return PaginatorConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Paginator
 */
var PaginatorOverviewExample = /** @class */ (function () {
    function PaginatorOverviewExample() {
    }
    PaginatorOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'paginator-overview-example',
                    template: "<mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return PaginatorOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Buffer progress-bar
 */
var ProgressBarBufferExample = /** @class */ (function () {
    function ProgressBarBufferExample() {
    }
    ProgressBarBufferExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'progress-bar-buffer-example',
                    template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressBarBufferExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable progress-bar
 */
var ProgressBarConfigurableExample = /** @class */ (function () {
    function ProgressBarConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    ProgressBarConfigurableExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'progress-bar-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Progress bar configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><mat-radio-group [(ngModel)]=\"mode\"><mat-radio-button class=\"example-margin\" value=\"determinate\">Determinate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"buffer\">Buffer</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"query\">Query</mat-radio-button></mat-radio-group></section><section class=\"example-section\" *ngIf=\"mode === 'determinate' || mode === 'buffer'\"><label class=\"example-margin\">Progress:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider></section><section class=\"example-section\" *ngIf=\"mode === 'buffer'\"><label class=\"example-margin\">Buffer:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider></section></mat-card-content></mat-card><mat-card><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\"></mat-progress-bar></section></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
                },] },
    ];
    return ProgressBarConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Determinate progress-bar
 */
var ProgressBarDeterminateExample = /** @class */ (function () {
    function ProgressBarDeterminateExample() {
    }
    ProgressBarDeterminateExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'progress-bar-determinate-example',
                    template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressBarDeterminateExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Indeterminate progress-bar
 */
var ProgressBarIndeterminateExample = /** @class */ (function () {
    function ProgressBarIndeterminateExample() {
    }
    ProgressBarIndeterminateExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'progress-bar-indeterminate-example',
                    template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressBarIndeterminateExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Query progress-bar
 */
var ProgressBarQueryExample = /** @class */ (function () {
    function ProgressBarQueryExample() {
    }
    ProgressBarQueryExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'progress-bar-query-example',
                    template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressBarQueryExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable progress spinner
 */
var ProgressSpinnerConfigurableExample = /** @class */ (function () {
    function ProgressSpinnerConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    ProgressSpinnerConfigurableExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'progress-spinner-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Progress spinner configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><mat-radio-group [(ngModel)]=\"mode\"><mat-radio-button class=\"example-margin\" value=\"determinate\">Determinate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</mat-radio-button></mat-radio-group></section><section class=\"example-section\" *ngIf=\"mode === 'determinate'\"><label class=\"example-margin\">Progress:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider></section></mat-card-content></mat-card><mat-card><mat-card-content><h2 class=\"example-h2\">Result</h2><mat-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></mat-progress-spinner></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
                },] },
    ];
    return ProgressSpinnerConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic progress-spinner
 */
var ProgressSpinnerOverviewExample = /** @class */ (function () {
    function ProgressSpinnerOverviewExample() {
    }
    ProgressSpinnerOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'progress-spinner-overview-example',
                    template: "<mat-spinner></mat-spinner>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressSpinnerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Radios with ngModel
 */
var RadioNgModelExample = /** @class */ (function () {
    function RadioNgModelExample() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
    RadioNgModelExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'radio-ng-model-example',
                    template: "<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\"><mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">{{season}}</mat-radio-button></mat-radio-group><div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>",
                    styles: [".example-radio-group { display: inline-flex; flex-direction: column; } .example-radio-button { margin: 5px; } .example-selected-value { margin: 15px 0; } "],
                },] },
    ];
    return RadioNgModelExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic radios
 */
var RadioOverviewExample = /** @class */ (function () {
    function RadioOverviewExample() {
    }
    RadioOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'radio-overview-example',
                    template: "<mat-radio-group><mat-radio-button value=\"1\">Option 1</mat-radio-button><mat-radio-button value=\"2\">Option 2</mat-radio-button></mat-radio-group>",
                    styles: [".mat-radio-button ~ .mat-radio-button { padding-right: 16px; } "],
                },] },
    ];
    return RadioOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title MatRipple basic usage
 */
var RippleOverviewExample = /** @class */ (function () {
    function RippleOverviewExample() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
    RippleOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'ripple-overview-example',
                    template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox><mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox><mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox><mat-form-field class=\"example-ripple-form-field\"><input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\"></mat-form-field><mat-form-field class=\"example-ripple-form-field\"><input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\"></mat-form-field><div class=\"example-ripple-container mat-elevation-z4\" matRipple [matRippleCentered]=\"centered\" [matRippleDisabled]=\"disabled\" [matRippleUnbounded]=\"unbounded\" [matRippleRadius]=\"radius\" [matRippleColor]=\"color\">Click me</div>",
                    styles: [".example-ripple-container { cursor: pointer; text-align: center; width: 300px; height: 300px; line-height: 300px; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: transparent; } /** Styles to make the demo look better. */ .example-ripple-checkbox { margin: 6px 12px 6px 0; } .example-ripple-form-field { margin: 0 12px 0 0; } "],
                },] },
    ];
    return RippleOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with custom trigger text
 */
var SelectCustomTriggerExample = /** @class */ (function () {
    function SelectCustomTriggerExample() {
        this.toppings = new forms.FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectCustomTriggerExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-custom-trigger-example',
                    template: "<mat-form-field><mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple=\"multiple\"><mat-select-trigger>{{toppings.value ? toppings.value[0] : ''}} <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">(+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})</span></mat-select-trigger><mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option></mat-select></mat-form-field>",
                    styles: [".example-additional-selection { opacity: 0.75; font-size: 0.75em; } "],
                },] },
    ];
    return SelectCustomTriggerExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Disabled select
 */
var SelectDisabledExample = /** @class */ (function () {
    function SelectDisabledExample() {
        this.disableSelect = new forms.FormControl(false);
    }
    SelectDisabledExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-disabled-example',
                    template: "<p><mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox></p><h4>mat-select</h4><mat-form-field><mat-select placeholder=\"Choose an option\" [disabled]=\"disableSelect.value\"><mat-option value=\"option1\">Option 1</mat-option><mat-option value=\"option2\" disabled=\"disabled\">Option 2 (disabled)</mat-option><mat-option value=\"option3\">Option 3</mat-option></mat-select></mat-form-field><h4>native html select</h4><mat-form-field><select matNativeControl placeholder=\"Choose an option\" [disabled]=\"disableSelect.value\"><option value=\"\" selected=\"selected\"></option><option value=\"volvo\">Volvo</option><option value=\"saab\" disabled=\"disabled\">Saab</option><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectDisabledExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
var /**
 * Error when invalid control is dirty, touched, or submitted.
 */
MyErrorStateMatcher$1 = /** @class */ (function () {
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
        /** @type {?} */
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
/**
 * \@title Select with a custom ErrorStateMatcher
 */
var SelectErrorStateMatcherExample = /** @class */ (function () {
    function SelectErrorStateMatcherExample() {
        this.selected = new forms.FormControl('valid', [
            forms.Validators.required,
            forms.Validators.pattern('valid'),
        ]);
        this.selectFormControl = new forms.FormControl('valid', [
            forms.Validators.required,
            forms.Validators.pattern('valid'),
        ]);
        this.nativeSelectFormControl = new forms.FormControl('valid', [
            forms.Validators.required,
            forms.Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher$1();
    }
    SelectErrorStateMatcherExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-error-state-matcher-example',
                    template: "<h4>mat-select</h4><mat-form-field><mat-select placeholder=\"Choose one\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\"><mat-option>Clear</mat-option><mat-option value=\"valid\">Valid option</mat-option><mat-option value=\"invalid\">Invalid option</mat-option></mat-select><mat-hint>Errors appear instantly!</mat-hint><mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error><mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">Your selection is invalid</mat-error></mat-form-field><h4>native html select</h4><mat-form-field class=\"demo-full-width\"><select matNativeControl placeholder=\"Choose one\" [formControl]=\"nativeSelectFormControl\" [errorStateMatcher]=\"matcher\"><option value=\"\"></option><option value=\"valid\" selected=\"selected\">Valid option</option><option value=\"invalid\">Invalid option</option></select><mat-error *ngIf=\"nativeSelectFormControl.hasError('required')\">You must make a selection</mat-error><mat-error *ngIf=\"nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')\">Your selection is invalid</mat-error></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectErrorStateMatcherExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select in a form
 */
var SelectFormExample = /** @class */ (function () {
    function SelectFormExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' }
        ];
    }
    SelectFormExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-form-example',
                    template: "<form><h4>mat-select</h4><mat-form-field><mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\"><mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{food.viewValue}}</mat-option></mat-select></mat-form-field><p>Selected food: {{selectedValue}}</p><h4>native html select</h4><mat-form-field><select matNativeControl placeholder=\"Favorite car\" [(ngModel)]=\"selectedCar\" name=\"car\"><option value=\"\" selected=\"selected\"></option><option *ngFor=\"let car of cars\" [value]=\"car.value\">{{car.viewValue}}</option></select></mat-form-field><p>Selected car: {{selectedCar}}</p></form>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectFormExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with form field features
 */
var SelectHintErrorExample = /** @class */ (function () {
    function SelectHintErrorExample() {
        this.animalControl = new forms.FormControl('', [forms.Validators.required]);
        this.selectFormControl = new forms.FormControl('', forms.Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
    SelectHintErrorExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-hint-error-example',
                    template: "<h4>mat select</h4><mat-form-field><mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required><mat-option>--</mat-option><mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">{{animal.name}}</mat-option></mat-select><mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error><mat-hint>{{animalControl.value?.sound}}</mat-hint></mat-form-field><h4>native html select</h4><mat-form-field><mat-label>Select your car (required)</mat-label><select matNativeControl required [formControl]=\"selectFormControl\"><option label=\"--select something --\"></option><option value=\"saab\">Saab</option><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></select><mat-error *ngIf=\"selectFormControl.hasError('required')\">This field is required</mat-error><mat-hint>You can pick up your favorite car here</mat-hint></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectHintErrorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with multiple selection
 */
var SelectMultipleExample = /** @class */ (function () {
    function SelectMultipleExample() {
        this.toppings = new forms.FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectMultipleExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-multiple-example',
                    template: "<mat-form-field><mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple=\"multiple\"><mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectMultipleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with no option ripple
 */
var SelectNoRippleExample = /** @class */ (function () {
    function SelectNoRippleExample() {
    }
    SelectNoRippleExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-no-ripple-example',
                    template: "<mat-form-field><mat-select placeholder=\"Select an option\" disableRipple><mat-option value=\"1\">Option 1</mat-option><mat-option value=\"2\">Option 2</mat-option><mat-option value=\"3\">Option 3</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectNoRippleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with option groups
 */
var SelectOptgroupExample = /** @class */ (function () {
    function SelectOptgroupExample() {
        this.pokemonControl = new forms.FormControl();
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
        { type: core.Component, args: [{
                    selector: 'select-optgroup-example',
                    template: "<h4>mat-select</h4><mat-form-field><mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\"><mat-option>-- None --</mat-option><mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\"><mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">{{pokemon.viewValue}}</mat-option></mat-optgroup></mat-select></mat-form-field><h4>native html select</h4><mat-form-field><select matNativeControl><optgroup label=\"Swedish Cars\"><option value=\"volvo\">volvo</option><option value=\"saab\">Saab</option></optgroup><optgroup label=\"German Cars\"><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></optgroup></select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectOptgroupExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic select
 */
var SelectOverviewExample = /** @class */ (function () {
    function SelectOverviewExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    SelectOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-overview-example',
                    template: "<h4>Basic mat-select</h4><mat-form-field><mat-select placeholder=\"Favorite food\"><mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{food.viewValue}}</mat-option></mat-select></mat-form-field><h4>Basic native select</h4><mat-form-field><select matNativeControl required><option value=\"volvo\">Volvo</option><option value=\"saab\">Saab</option><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with custom panel styling
 */
var SelectPanelClassExample = /** @class */ (function () {
    function SelectPanelClassExample() {
        this.panelColor = new forms.FormControl('red');
    }
    SelectPanelClassExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-panel-class-example',
                    template: "<mat-form-field><mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\" panelClass=\"example-panel-{{panelColor.value}}\"><mat-option value=\"red\">Red</mat-option><mat-option value=\"green\">Green</mat-option><mat-option value=\"blue\">Blue</mat-option></mat-select></mat-form-field>",
                    styles: [".example-panel-red.mat-select-panel { background: rgba(255, 0, 0, 0.5); } .example-panel-green.mat-select-panel { background: rgba(0, 255, 0, 0.5); } .example-panel-blue.mat-select-panel { background: rgba(0, 0, 255, 0.5); } "],
                    // Encapsulation has to be disabled in order for the
                    // component style to apply to the select panel.
                    encapsulation: core.ViewEncapsulation.None,
                },] },
    ];
    return SelectPanelClassExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with reset option
 */
var SelectResetExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'select-reset-example',
                    template: "<h4>mat-select</h4><mat-form-field><mat-select placeholder=\"State\"><mat-option>None</mat-option><mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option></mat-select></mat-form-field><h4>native html select</h4><mat-form-field><mat-label>Select your car</mat-label><select matNativeControl id=\"mySelectId\"><option value=\"\" disabled=\"disabled\" selected=\"selected\"></option><option value=\"volvo\">Volvo</option><option value=\"saab\">Saab</option><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectResetExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with 2-way value binding
 */
var SelectValueBindingExample = /** @class */ (function () {
    function SelectValueBindingExample() {
        this.selected = 'option2';
    }
    SelectValueBindingExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-value-binding-example',
                    template: "<mat-form-field><mat-select [(value)]=\"selected\"><mat-option>None</mat-option><mat-option value=\"option1\">Option 1</mat-option><mat-option value=\"option2\">Option 2</mat-option><mat-option value=\"option3\">Option 3</mat-option></mat-select></mat-form-field><p>You selected: {{selected}}</p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectValueBindingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Autosize sidenav
 */
var SidenavAutosizeExample = /** @class */ (function () {
    function SidenavAutosizeExample() {
        this.showFiller = false;
    }
    SidenavAutosizeExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-autosize-example',
                    template: "<mat-drawer-container class=\"example-container\" autosize><mat-drawer #drawer class=\"example-sidenav\" mode=\"side\"><p>Auto-resizing sidenav</p><p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p><button (click)=\"showFiller = !showFiller\" mat-raised-button>Toggle extra text</button></mat-drawer><div class=\"example-sidenav-content\"><button type=\"button\" mat-button (click)=\"drawer.toggle()\">Toggle sidenav</button></div></mat-drawer-container>",
                    styles: [".example-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-content { display: flex; height: 100%; align-items: center; justify-content: center; } .example-sidenav { padding: 20px; } "],
                },] },
    ];
    return SidenavAutosizeExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drawer with explicit backdrop setting
 */
var SidenavBackdropExample = /** @class */ (function () {
    function SidenavBackdropExample() {
    }
    SidenavBackdropExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-backdrop-example',
                    template: "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\"><mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer><mat-drawer-content><mat-form-field><mat-label>Sidenav mode</mat-label><mat-select #mode value=\"side\"><mat-option value=\"side\">Side</mat-option><mat-option value=\"over\">Over</mat-option><mat-option value=\"push\">Push</mat-option></mat-select></mat-form-field><mat-form-field><mat-label>Has backdrop</mat-label><mat-select #hasBackdrop><mat-option>Unset</mat-option><mat-option [value]=\"true\">True</mat-option><mat-option [value]=\"false\">False</mat-option></mat-select></mat-form-field><button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button></mat-drawer-content></mat-drawer-container>",
                    styles: [".example-container { width: 400px; height: 200px; margin: 10px; border: 1px solid #555; } "],
                },] },
    ];
    return SidenavBackdropExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Sidenav with custom escape and backdrop click behavior
 */
var SidenavDisableCloseExample = /** @class */ (function () {
    function SidenavDisableCloseExample() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    SidenavDisableCloseExample.prototype.close = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    SidenavDisableCloseExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-disable-close-example',
                    template: "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose><p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p></mat-sidenav><mat-sidenav-content><p><button mat-button (click)=\"sidenav.open()\">Open</button></p><p>Closed due to: {{reason}}</p></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } "],
                },] },
    ];
    SidenavDisableCloseExample.propDecorators = {
        sidenav: [{ type: core.ViewChild, args: ['sidenav',] }]
    };
    return SidenavDisableCloseExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic drawer
 */
var SidenavDrawerOverviewExample = /** @class */ (function () {
    function SidenavDrawerOverviewExample() {
    }
    SidenavDrawerOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-drawer-overview-example',
                    template: "<mat-drawer-container class=\"example-container\"><mat-drawer mode=\"side\" opened>Drawer content</mat-drawer><mat-drawer-content>Main content</mat-drawer-content></mat-drawer-container>",
                    styles: [".example-container { width: 400px; height: 200px; margin: 10px; border: 1px solid #555; } "],
                },] },
    ];
    return SidenavDrawerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Fixed sidenav
 */
var SidenavFixedExample = /** @class */ (function () {
    function SidenavFixedExample(fb) {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
    SidenavFixedExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-fixed-example',
                    template: "<ng-container *ngIf=\"shouldRun\"><mat-toolbar class=\"example-header\">Header</mat-toolbar><mat-sidenav-container class=\"example-container\"><mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\" [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\" [fixedBottomGap]=\"options.value.bottom\">{{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav</mat-sidenav><mat-sidenav-content [formGroup]=\"options\"><p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p><p><mat-form-field><input matInput type=\"number\" formControlName=\"top\" placeholder=\"Top gap\"></mat-form-field></p><p><mat-form-field><input matInput type=\"number\" formControlName=\"bottom\" placeholder=\"Bottom gap\"></mat-form-field></p><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p></mat-sidenav-content></mat-sidenav-container><mat-toolbar class=\"example-footer\">Footer</mat-toolbar></ng-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 60px; bottom: 60px; left: 0; right: 0; } .example-sidenav { display: flex; align-items: center; justify-content: center; width: 200px; background: rgba(255, 0, 0, 0.5); } .example-header { position: fixed; top: 0; left: 0; right: 0; } .example-footer { position: fixed; bottom: 0; left: 0; right: 0; } "],
                },] },
    ];
    /** @nocollapse */
    SidenavFixedExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return SidenavFixedExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Sidenav with configurable mode
 */
var SidenavModeExample = /** @class */ (function () {
    function SidenavModeExample() {
        this.mode = new forms.FormControl('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavModeExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-mode-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav [mode]=\"mode.value\"><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p><p><mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\"><label>Mode:</label><mat-radio-button value=\"over\">Over</mat-radio-button><mat-radio-button value=\"side\">Side</mat-radio-button><mat-radio-button value=\"push\">Push</mat-radio-button></mat-radio-group></p></mat-sidenav><mat-sidenav-content><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p><p><mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\"><label>Mode:</label><mat-radio-button value=\"over\">Over</mat-radio-button><mat-radio-button value=\"side\">Side</mat-radio-button><mat-radio-button value=\"push\">Push</mat-radio-button></mat-radio-group></p></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-radio-group { display: block; border: 1px solid #555; margin: 20px; padding: 10px; } "],
                },] },
    ];
    return SidenavModeExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Sidenav open & close behavior
 */
var SidenavOpenCloseExample = /** @class */ (function () {
    function SidenavOpenCloseExample() {
        this.events = [];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOpenCloseExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-open-close-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\" (closed)=\"events.push('close!')\">Sidenav content</mat-sidenav><mat-sidenav-content><p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p><p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p><p>Events:</p><div class=\"example-events\"><div *ngFor=\"let e of events\">{{e}}</div></div></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-events { width: 300px; height: 200px; overflow: auto; border: 1px solid #555; } "],
                },] },
    ];
    return SidenavOpenCloseExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic sidenav
 */
var SidenavOverviewExample = /** @class */ (function () {
    function SidenavOverviewExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-overview-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav><mat-sidenav-content>Main content</mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #eee; } "],
                },] },
    ];
    return SidenavOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Implicit main content with two sidenavs
 */
var SidenavPositionExample = /** @class */ (function () {
    function SidenavPositionExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavPositionExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-position-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav opened mode=\"side\">Start content</mat-sidenav><mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>Implicit main content</mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } "],
                },] },
    ];
    return SidenavPositionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Responsive sidenav
 */
var SidenavResponsiveExample = /** @class */ (function () {
    function SidenavResponsiveExample(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 50 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    /**
     * @return {?}
     */
    SidenavResponsiveExample.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidenavResponsiveExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidenav-responsive-example',
                    template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\"><mat-toolbar color=\"primary\" class=\"example-toolbar\"><button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button><h1 class=\"example-app-name\">Responsive App</h1></mat-toolbar><mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\"><mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\"><mat-nav-list><a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a></mat-nav-list></mat-sidenav><mat-sidenav-content><p *ngFor=\"let content of fillerContent\">{{content}}</p></mat-sidenav-content></mat-sidenav-container></div><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { display: flex; flex-direction: column; position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-is-mobile .example-toolbar { position: fixed; /* Make sure the toolbar will stay on top of the content as it scrolls past. */ z-index: 2; } h1.example-app-name { margin-left: 8px; } .example-sidenav-container { /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */ flex: 1; } .example-is-mobile .example-sidenav-container { /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the `<body>` to be our scrolling element for mobile layouts. */ flex: 1 0 auto; } "],
                },] },
    ];
    /** @nocollapse */
    SidenavResponsiveExample.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: layout.MediaMatcher }
    ]; };
    return SidenavResponsiveExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable slide-toggle
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
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">Slide me!</mat-slide-toggle></section></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } "],
                },] },
    ];
    return SlideToggleConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Slide-toggle with forms
 */
var SlideToggleFormsExample = /** @class */ (function () {
    function SlideToggleFormsExample(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', forms.Validators.requiredTrue]
        });
    }
    /**
     * @return {?}
     */
    SlideToggleFormsExample.prototype.onFormSubmit = /**
     * @return {?}
     */
    function () {
        alert(JSON.stringify(this.formGroup.value, null, 2));
    };
    SlideToggleFormsExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'slide-toggle-forms-example',
                    template: "<p>Slide Toggle using a simple NgModel.</p><mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle><p>Slide Toggle inside of a Template-driven form</p><form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate><mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle><mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle><button mat-raised-button type=\"submit\">Save Settings</button></form><p>Slide Toggle inside of a Reactive form</p><form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate><mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle><mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle><p>Form Group Status: {{formGroup.status}}</p><button mat-rasied-button type=\"submit\">Save Settings</button></form>",
                    styles: [".example-form mat-slide-toggle { margin: 8px 0; display: block; } "],
                },] },
    ];
    /** @nocollapse */
    SlideToggleFormsExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return SlideToggleFormsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic slide-toggles
 */
var SlideToggleOverviewExample = /** @class */ (function () {
    function SlideToggleOverviewExample() {
    }
    SlideToggleOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'slide-toggle-overview-example',
                    template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SlideToggleOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable slider
 */
var SliderConfigurableExample = /** @class */ (function () {
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
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tickInterval = coercion.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    SliderConfigurableExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'slider-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\"></mat-form-field></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">Auto ticks</mat-checkbox><mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\"><input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\"></mat-form-field></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><mat-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumbLabel]=\"thumbLabel\" [tickInterval]=\"tickInterval\" [(ngModel)]=\"value\" [vertical]=\"vertical\"></mat-slider></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } .mat-slider-horizontal { width: 300px; } .mat-slider-vertical { height: 300px; } "],
                },] },
    ];
    return SliderConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Slider with custom thumb label formatting.
 */
var SliderFormattingExample = /** @class */ (function () {
    function SliderFormattingExample() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SliderFormattingExample.prototype.formatLabel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    SliderFormattingExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'slider-formatting-example',
                    template: "<mat-slider thumbLabel [displayWith]=\"formatLabel\" tickInterval=\"1000\" min=\"1\" max=\"100000\"></mat-slider>",
                    styles: ["mat-slider { width: 300px; } "],
                },] },
    ];
    return SliderFormattingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic slider
 */
var SliderOverviewExample = /** @class */ (function () {
    function SliderOverviewExample() {
    }
    SliderOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'slider-overview-example',
                    template: "<mat-slider></mat-slider>",
                    styles: ["/** No CSS for this example */ mat-slider { width: 300px; } "],
                },] },
    ];
    return SliderOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Snack-bar with a custom component
 */
var SnackBarComponentExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'snack-bar-component-example',
                    template: "<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pizza party</button>",
                },] },
    ];
    /** @nocollapse */
    SnackBarComponentExample.ctorParameters = function () { return [
        { type: material.MatSnackBar }
    ]; };
    return SnackBarComponentExample;
}());
var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'snack-bar-component-example-snack',
                    template: "<span class=\"example-pizza-party\">Pizza party!!! 🍕</span>",
                    styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "],
                },] },
    ];
    return PizzaPartyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic snack-bar
 */
var SnackBarOverviewExample = /** @class */ (function () {
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
        { type: core.Component, args: [{
                    selector: 'snack-bar-overview-example',
                    template: "<mat-form-field><input matInput value=\"Disco party!\" placeholder=\"Message\" #message></mat-form-field><mat-form-field><input matInput value=\"Dance\" placeholder=\"Action\" #action></mat-form-field><button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SnackBarOverviewExample.ctorParameters = function () { return [
        { type: material.MatSnackBar }
    ]; };
    return SnackBarOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Snack-bar with configurable position
 */
var SnackBarPositionExample = /** @class */ (function () {
    function SnackBarPositionExample(snackBar) {
        this.snackBar = snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    /**
     * @return {?}
     */
    SnackBarPositionExample.prototype.openSnackBar = /**
     * @return {?}
     */
    function () {
        this.snackBar.open('Canonball!!', 'End now', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    SnackBarPositionExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'snack-bar-position-example',
                    template: "<mat-form-field><mat-select placeholder=\"Horizontal position\" [(value)]=\"horizontalPosition\"><mat-option value=\"start\">Start</mat-option><mat-option value=\"center\">Center</mat-option><mat-option value=\"end\">End</mat-option><mat-option value=\"left\">Left</mat-option><mat-option value=\"right\">Right</mat-option></mat-select></mat-form-field><mat-form-field><mat-select placeholder=\"Vertical position\" [(value)]=\"verticalPosition\"><mat-option value=\"top\">Top</mat-option><mat-option value=\"bottom\">Bottom</mat-option></mat-select></mat-form-field><button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pool party!</button>",
                },] },
    ];
    /** @nocollapse */
    SnackBarPositionExample.ctorParameters = function () { return [
        { type: material.MatSnackBar }
    ]; };
    return SnackBarPositionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Sorting overview
 */
var SortOverviewExample = /** @class */ (function () {
    function SortOverviewExample() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
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
        /** @type {?} */
        var data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            /** @type {?} */
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    };
    SortOverviewExample.decorators = [
        { type: core.Component, args: [{
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper with editable steps
 */
var StepperEditableExample = /** @class */ (function () {
    function StepperEditableExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    /**
     * @return {?}
     */
    StepperEditableExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
                    template: "<button mat-raised-button (click)=\"isEditable = !isEditable\">{{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}</button><mat-horizontal-stepper linear #stepper><mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    /** @nocollapse */
    StepperEditableExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return StepperEditableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0$2 = { showError: true };
/**
 * \@title Stepper that displays errors in the steps
 */
var StepperErrorsExample = /** @class */ (function () {
    function StepperErrorsExample(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    StepperErrorsExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
                    template: "<mat-horizontal-stepper linear #stepper><mat-step [stepControl]=\"firstFormGroup\" errorMessage=\"Name is required.\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" errorMessage=\"Address is required.\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                    styles: [""],
                    providers: [{
                            provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: ɵ0$2
                        }]
                },] },
    ];
    /** @nocollapse */
    StepperErrorsExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return StepperErrorsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper label bottom position
 */
var StepperLabelPositionBottomExample = /** @class */ (function () {
    function StepperLabelPositionBottomExample(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    StepperLabelPositionBottomExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
                    template: "<mat-horizontal-stepper labelPosition=\"bottom\" #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" optional><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    StepperLabelPositionBottomExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return StepperLabelPositionBottomExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper with optional steps
 */
var StepperOptionalExample = /** @class */ (function () {
    function StepperOptionalExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
    }
    /**
     * @return {?}
     */
    StepperOptionalExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
                    template: "<button mat-raised-button (click)=\"isOptional = !isOptional\">{{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}</button><mat-horizontal-stepper linear #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    /** @nocollapse */
    StepperOptionalExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return StepperOptionalExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper overview
 */
var StepperOverviewExample = /** @class */ (function () {
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
            firstCtrl: ['', forms.Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', forms.Validators.required]
        });
    };
    StepperOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'stepper-overview-example',
                    template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">{{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}</button><mat-horizontal-stepper [linear]=\"isLinear\" #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    StepperOverviewExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return StepperOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0$3 = { displayDefaultIndicatorType: false };
/**
 * \@title Stepper with customized states
 */
var StepperStatesExample = /** @class */ (function () {
    function StepperStatesExample(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    StepperStatesExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
                    template: "<mat-horizontal-stepper #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper><mat-horizontal-stepper><mat-step label=\"Step 1\" state=\"phone\"><p>Put down your phones.</p><div><button mat-button matStepperNext>Next</button></div></mat-step><mat-step label=\"Step 2\" state=\"chat\"><p>Socialize with each other.</p><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></mat-step><mat-step label=\"Step 3\"><p>You're welcome.</p></mat-step><ng-template matStepperIcon=\"phone\"><mat-icon>call_end</mat-icon></ng-template><ng-template matStepperIcon=\"chat\"><mat-icon>forum</mat-icon></ng-template></mat-horizontal-stepper>",
                    styles: [""],
                    providers: [{
                            provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: ɵ0$3
                        }]
                },] },
    ];
    /** @nocollapse */
    StepperStatesExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return StepperStatesExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper vertical
 */
var StepperVerticalExample = /** @class */ (function () {
    function StepperVerticalExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    /**
     * @return {?}
     */
    StepperVerticalExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
                    template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">{{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}</button><mat-vertical-stepper [linear]=\"isLinear\" #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-vertical-stepper>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    /** @nocollapse */
    StepperVerticalExample.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    return StepperVerticalExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with aligned labels
 */
var TabGroupAlignExample = /** @class */ (function () {
    function TabGroupAlignExample() {
    }
    TabGroupAlignExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-align-example',
                    template: "<mat-tab-group mat-align-tabs=\"start\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group><mat-tab-group mat-align-tabs=\"center\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group><mat-tab-group mat-align-tabs=\"end\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                    styles: [".mat-tab-group { margin-bottom: 48px; } "],
                },] },
    ];
    return TabGroupAlignExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group animations
 */
var TabGroupAnimationsExample = /** @class */ (function () {
    function TabGroupAnimationsExample() {
    }
    TabGroupAnimationsExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-animations-example',
                    template: "<h3>No animation</h3><mat-tab-group animationDuration=\"0ms\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group><h3>Very slow animation</h3><mat-tab-group animationDuration=\"2000ms\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                    styles: [".mat-tab-group { margin-bottom: 48px; } "],
                },] },
    ];
    return TabGroupAnimationsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with asynchronously loading tab contents
 */
var TabGroupAsyncExample = /** @class */ (function () {
    function TabGroupAsyncExample() {
        this.asyncTabs = rxjs.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
    TabGroupAsyncExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-async-example',
                    template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">Loading tabs...</ng-container><mat-tab-group><mat-tab *ngFor=\"let tab of asyncTabs | async\"><ng-template mat-tab-label>{{tab.label}}</ng-template>{{tab.content}}</mat-tab></mat-tab-group>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    TabGroupAsyncExample.ctorParameters = function () { return []; };
    return TabGroupAsyncExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic use of the tab group
 */
var TabGroupBasicExample = /** @class */ (function () {
    function TabGroupBasicExample() {
    }
    TabGroupBasicExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-basic-example',
                    template: "<mat-tab-group><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return TabGroupBasicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Using tabs with a custom label template
 */
var TabGroupCustomLabelExample = /** @class */ (function () {
    function TabGroupCustomLabelExample() {
    }
    TabGroupCustomLabelExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-custom-label-example',
                    template: "<mat-tab-group><mat-tab><ng-template mat-tab-label><mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>First</ng-template>Content 1</mat-tab><mat-tab><ng-template mat-tab-label><mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>Second</ng-template>Content 2</mat-tab><mat-tab><ng-template mat-tab-label><mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>Third</ng-template>Content 3</mat-tab></mat-tab-group>",
                    styles: [".example-tab-icon { margin-right: 8px; } "],
                },] },
    ];
    return TabGroupCustomLabelExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tag group with dynamic height based on tab contents
 */
var TabGroupDynamicHeightExample = /** @class */ (function () {
    function TabGroupDynamicHeightExample() {
    }
    TabGroupDynamicHeightExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-dynamic-height-example',
                    template: "<mat-tab-group dynamicHeight><mat-tab label=\"Short tab\"><div class=\"example-small-box mat-elevation-z4\">Small content</div></mat-tab><mat-tab label=\"Long tab\"><div class=\"example-large-box mat-elevation-z4\">Large content</div></mat-tab></mat-tab-group>",
                    styles: [".example-small-box, .example-large-box { display: flex; align-items: center; justify-content: center; margin: 16px; padding: 16px; border-radius: 8px; } .example-small-box { height: 100px; width: 100px; } .example-large-box { height: 300px; width: 300px; } "],
                },] },
    ];
    return TabGroupDynamicHeightExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with dynamically changing tabs
 */
var TabGroupDynamicExample = /** @class */ (function () {
    function TabGroupDynamicExample() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new forms.FormControl(0);
    }
    /**
     * @param {?} selectAfterAdding
     * @return {?}
     */
    TabGroupDynamicExample.prototype.addTab = /**
     * @param {?} selectAfterAdding
     * @return {?}
     */
    function (selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabGroupDynamicExample.prototype.removeTab = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.tabs.splice(index, 1);
    };
    TabGroupDynamicExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-dynamic-example',
                    template: "<div><span class=\"example-input-label\">Selected tab index:</span><mat-form-field><input matInput type=\"number\" [formControl]=\"selected\"></mat-form-field></div><div><button mat-raised-button class=\"example-add-tab-button\" (click)=\"addTab(selectAfterAdding.checked)\">Add new tab</button><mat-checkbox #selectAfterAdding>Select tab after adding</mat-checkbox></div><mat-tab-group [selectedIndex]=\"selected.value\" (selectedIndexChange)=\"selected.setValue($event)\"><mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">Contents for {{tab}} tab <button mat-raised-button class=\"example-delete-tab-button\" [disabled]=\"tabs.length === 1\" (click)=\"removeTab(index)\">Delete Tab</button></mat-tab></mat-tab-group>",
                    styles: [".example-input-label, .example-add-tab-button, .example-delete-tab-button { margin: 8px; } "],
                },] },
    ];
    return TabGroupDynamicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with the headers on the bottom
 */
var TabGroupHeaderBelowExample = /** @class */ (function () {
    function TabGroupHeaderBelowExample() {
    }
    TabGroupHeaderBelowExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-header-below-example',
                    template: "<mat-tab-group headerPosition=\"below\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return TabGroupHeaderBelowExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group where the tab content is loaded lazily (when activated)
 */
var TabGroupLazyLoadedExample = /** @class */ (function () {
    function TabGroupLazyLoadedExample() {
        this.tabLoadTimes = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    TabGroupLazyLoadedExample.prototype.getTimeLoaded = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    };
    TabGroupLazyLoadedExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-lazy-loaded-example',
                    template: "<mat-tab-group><mat-tab label=\"First\"><ng-template matTabContent>Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}</ng-template></mat-tab><mat-tab label=\"Second\"><ng-template matTabContent>Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}</ng-template></mat-tab><mat-tab label=\"Third\"><ng-template matTabContent>Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}</ng-template></mat-tab></mat-tab-group>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return TabGroupLazyLoadedExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with stretched labels
 */
var TabGroupStretchedExample = /** @class */ (function () {
    function TabGroupStretchedExample() {
    }
    TabGroupStretchedExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-stretched-example',
                    template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                    styles: [".example-stretched-tabs { max-width: 800px; } "],
                },] },
    ];
    return TabGroupStretchedExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Customizing the theme options on the tab group
 */
var TabGroupThemeExample = /** @class */ (function () {
    function TabGroupThemeExample() {
    }
    TabGroupThemeExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-group-theme-example',
                    template: "<div><mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\" value=\"primary\" aria-label=\"Change color\"><mat-button-toggle value=\"primary\">Primary</mat-button-toggle><mat-button-toggle value=\"accent\">Accent</mat-button-toggle></mat-button-toggle-group><span class=\"example-button-toggle-label\">Color</span></div><div><mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\" value=\"primary\" aria-label=\"Change color\"><mat-button-toggle value=\"primary\">Primary</mat-button-toggle><mat-button-toggle value=\"accent\">Accent</mat-button-toggle></mat-button-toggle-group><span class=\"example-button-toggle-label\">Background Color</span></div><mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                    styles: [".example-button-toggle-label { display: inline-block; margin: 16px; } "],
                },] },
    ];
    return TabGroupThemeExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic use of the tab nav bar
 */
var TabNavBarBasicExample = /** @class */ (function () {
    function TabNavBarBasicExample() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = '';
    }
    /**
     * @return {?}
     */
    TabNavBarBasicExample.prototype.toggleBackground = /**
     * @return {?}
     */
    function () {
        this.background = this.background ? '' : 'primary';
    };
    TabNavBarBasicExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tab-nav-bar-basic-example',
                    template: "<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">Toggle background</button><nav mat-tab-nav-bar [backgroundColor]=\"background\"><a mat-tab-link *ngFor=\"let link of links\" (click)=\"activeLink = link\" [active]=\"activeLink == link\">{{link}} </a><a mat-tab-link disabled=\"disabled\">Disabled Link</a></nav>",
                    styles: [".example-action-button { margin-bottom: 8px; } "],
                },] },
    ];
    return TabNavBarBasicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
];
/**
 * \@title Basic use of `<mat-table>` (uses display flex)
 */
var TableBasicFlexExample = /** @class */ (function () {
    function TableBasicFlexExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$2;
    }
    TableBasicFlexExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-basic-flex-example',
                    styles: ["table { width: 100%; } "],
                    template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><mat-header-cell *matHeaderCellDef>No.</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell></ng-container><ng-container matColumnDef=\"name\"><mat-header-cell *matHeaderCellDef>Name</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell></ng-container><ng-container matColumnDef=\"weight\"><mat-header-cell *matHeaderCellDef>Weight</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.weight}}</mat-cell></ng-container><ng-container matColumnDef=\"symbol\"><mat-header-cell *matHeaderCellDef>Symbol</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.symbol}}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row></mat-table>",
                },] },
    ];
    return TableBasicFlexExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
];
/**
 * \@title Basic use of `<table mat-table>`
 */
var TableBasicExample = /** @class */ (function () {
    function TableBasicExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$3;
    }
    TableBasicExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-basic-example',
                    styles: ["table { width: 100%; } "],
                    template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    return TableBasicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
];
/**
 * \@title Table dynamically changing the columns displayed
 */
var TableDynamicColumnsExample = /** @class */ (function () {
    function TableDynamicColumnsExample() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA$4;
    }
    /**
     * @return {?}
     */
    TableDynamicColumnsExample.prototype.addColumn = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    };
    /**
     * @return {?}
     */
    TableDynamicColumnsExample.prototype.removeColumn = /**
     * @return {?}
     */
    function () {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    };
    /**
     * @return {?}
     */
    TableDynamicColumnsExample.prototype.shuffle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            /** @type {?} */
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            /** @type {?} */
            var temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    };
    TableDynamicColumnsExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-dynamic-columns-example',
                    styles: ["table { width: 100%; } button { margin: 16px 8px; } "],
                    template: "<button mat-raised-button (click)=\"addColumn()\">Add column</button> <button mat-raised-button (click)=\"removeColumn()\">Remove column</button> <button mat-raised-button (click)=\"shuffle()\">Shuffle</button><table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\"><ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\"><th mat-header-cell *matHeaderCellDef>{{column}}</th><td mat-cell *matCellDef=\"let element\">{{element[column]}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr><tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr></table>",
                },] },
    ];
    return TableDynamicColumnsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with expandable rows
 */
var TableExpandableRowsExample = /** @class */ (function () {
    function TableExpandableRowsExample() {
        this.dataSource = ELEMENT_DATA$5;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
    TableExpandableRowsExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-expandable-rows-example',
                    styles: ["table { width: 100%; } tr.example-detail-row { height: 0; } tr.example-element-row:not(.example-expanded-row):hover { background: #f5f5f5; } tr.example-element-row:not(.example-expanded-row):active { background: #efefef; } .example-element-row td { border-bottom-width: 0; } .example-element-detail { overflow: hidden; display: flex; } .example-element-diagram { min-width: 80px; border: 2px solid black; padding: 8px; font-weight: lighter; margin: 8px 0; height: 104px; } .example-element-symbol { font-weight: bold; font-size: 40px; line-height: normal; } .example-element-description { padding: 16px; } .example-element-description-attribution { opacity: 0.5; } "],
                    template: "<table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\"><ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\"><th mat-header-cell *matHeaderCellDef>{{column}}</th><td mat-cell *matCellDef=\"let element\">{{element[column]}}</td></ng-container><ng-container matColumnDef=\"expandedDetail\"><td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"><div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\"><div class=\"example-element-diagram\"><div class=\"example-element-position\">{{element.position}}</div><div class=\"example-element-symbol\">{{element.symbol}}</div><div class=\"example-element-name\">{{element.name}}</div><div class=\"example-element-weight\">{{element.weight}}</div></div><div class=\"example-element-description\">{{element.description}} <span class=\"example-element-description-attribution\">-- Wikipedia</span></div></div></td></ng-container><tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr><tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\" [class.example-expanded-row]=\"expandedElement === element\" (click)=\"expandedElement = expandedElement === element ? null : element\"></tr><tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr></table>",
                    animations: [
                        animations.trigger('detailExpand', [
                            animations.state('collapsed', animations.style({ height: '0px', minHeight: '0', display: 'none' })),
                            animations.state('expanded', animations.style({ height: '*' })),
                            animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ],
                },] },
    ];
    return TableExpandableRowsExample;
}());
/** @type {?} */
var ELEMENT_DATA$5 = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ELEMENT_DATA$6 = [
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
];
/**
 * \@title Table with filtering
 */
var TableFilteringExample = /** @class */ (function () {
    function TableFilteringExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new material.MatTableDataSource(ELEMENT_DATA$6);
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
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TableFilteringExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-filtering-example',
                    styles: ["/* Structure */ table { width: 100%; } .mat-form-field { font-size: 14px; width: 100%; } "],
                    template: "<mat-form-field><input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"></mat-form-field><table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    return TableFilteringExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Footer row table
 */
var TableFooterRowExample = /** @class */ (function () {
    function TableFooterRowExample() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    TableFooterRowExample.prototype.getTotalCost = /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    function () {
        return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    TableFooterRowExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-footer-row-example',
                    styles: ["table { width: 100%; } tr.mat-footer-row { font-weight: bold; } "],
                    template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"item\"><th mat-header-cell *matHeaderCellDef>Item</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.item}}</td><td mat-footer-cell *matFooterCellDef>Total</td></ng-container><ng-container matColumnDef=\"cost\"><th mat-header-cell *matHeaderCellDef>Cost</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.cost | currency}}</td><td mat-footer-cell *matFooterCellDef>{{getTotalCost() | currency}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr></table>",
                },] },
    ];
    return TableFooterRowExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table retrieving data through HTTP
 */
var TableHttpExample = /** @class */ (function () {
    function TableHttpExample(http$$1) {
        this.http = http$$1;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    /**
     * @return {?}
     */
    TableHttpExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        rxjs.merge(this.sort.sortChange, this.paginator.page)
            .pipe(operators.startWith({}), operators.switchMap(function () {
            _this.isLoadingResults = true;
            return (/** @type {?} */ (_this.exampleDatabase)).getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
        }), operators.map(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data.total_count;
            return data.items;
        }), operators.catchError(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return rxjs.of([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    TableHttpExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-http-example',
                    styles: ["/* Structure */ .example-container { position: relative; } .example-table-container { position: relative; max-height: 400px; overflow: auto; } table { width: 100%; } .example-loading-shade { position: absolute; top: 0; left: 0; bottom: 56px; right: 0; background: rgba(0, 0, 0, 0.15); z-index: 1; display: flex; align-items: center; justify-content: center; } .example-rate-limit-reached { color: #980000; max-width: 360px; text-align: center; } /* Column Widths */ .mat-column-number, .mat-column-state { max-width: 64px; } .mat-column-created { max-width: 124px; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\"><mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner><div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">GitHub's API rate limit has been reached. It will be reset in one minute.</div></div><div class=\"example-table-container\"><table mat-table [dataSource]=\"data\" class=\"example-table\" matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\"><ng-container matColumnDef=\"number\"><th mat-header-cell *matHeaderCellDef>#</th><td mat-cell *matCellDef=\"let row\">{{row.number}}</td></ng-container><ng-container matColumnDef=\"title\"><th mat-header-cell *matHeaderCellDef>Title</th><td mat-cell *matCellDef=\"let row\">{{row.title}}</td></ng-container><ng-container matColumnDef=\"state\"><th mat-header-cell *matHeaderCellDef>State</th><td mat-cell *matCellDef=\"let row\">{{row.state}}</td></ng-container><ng-container matColumnDef=\"created\"><th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>Created</th><td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table></div><mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator></div>",
                },] },
    ];
    /** @nocollapse */
    TableHttpExample.ctorParameters = function () { return [
        { type: http.HttpClient }
    ]; };
    TableHttpExample.propDecorators = {
        paginator: [{ type: core.ViewChild, args: [material.MatPaginator,] }],
        sort: [{ type: core.ViewChild, args: [material.MatSort,] }]
    };
    return TableHttpExample;
}());
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var /**
 * An example database that the data source uses to retrieve data for the table.
 */
ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http$$1) {
        this.http = http$$1;
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
        /** @type {?} */
        var href = 'https://api.github.com/search/issues';
        /** @type {?} */
        var requestUrl = href + "?q=repo:angular/material2&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.http.get(requestUrl);
    };
    return ExampleHttpDao;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with multiple header and footer rows
 */
var TableMultipleHeaderFooterExample = /** @class */ (function () {
    function TableMultipleHeaderFooterExample() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    TableMultipleHeaderFooterExample.prototype.getTotalCost = /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    function () {
        return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    TableMultipleHeaderFooterExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-multiple-header-footer-example',
                    styles: ["table { width: 100%; } .example-first-header-row th { border-bottom: none; } .example-second-header-row { font-style: italic; } .example-first-footer-row { font-weight: bold; } .example-second-footer-row td { color: #900000; } "],
                    template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"item\"><th mat-header-cell *matHeaderCellDef>Item</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.item}}</td><td mat-footer-cell *matFooterCellDef>Total</td></ng-container><ng-container matColumnDef=\"cost\"><th mat-header-cell *matHeaderCellDef>Cost</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.cost | currency}}</td><td mat-footer-cell *matFooterCellDef>{{getTotalCost() | currency}}</td></ng-container><ng-container matColumnDef=\"item-description\"><th mat-header-cell *matHeaderCellDef>Name of the item purchased</th></ng-container><ng-container matColumnDef=\"cost-description\"><th mat-header-cell *matHeaderCellDef>Cost of the item in USD</th></ng-container><ng-container matColumnDef=\"disclaimer\"><td mat-footer-cell *matFooterCellDef colspan=\"2\">Please note that the cost of items displayed are completely and totally made up.</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"example-first-header-row\"></tr><tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\" class=\"example-second-header-row\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"example-first-footer-row\"></tr><tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr></table>",
                },] },
    ];
    return TableMultipleHeaderFooterExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constants used to fill up our data base.
 * @type {?}
 */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
/** @type {?} */
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * \@title Data table with sorting, pagination, and filtering.
 */
var TableOverviewExample = /** @class */ (function () {
    function TableOverviewExample() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        /** @type {?} */
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource = new material.MatTableDataSource(users);
    }
    /**
     * @return {?}
     */
    TableOverviewExample.prototype.ngOnInit = /**
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
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TableOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-overview-example',
                    styles: ["table { width: 100%; } .mat-form-field { font-size: 14px; width: 100%; } td, th { width: 25%; } "],
                    template: "<mat-form-field><input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"></mat-form-field><div class=\"mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\" matSort><ng-container matColumnDef=\"id\"><th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th><td mat-cell *matCellDef=\"let row\">{{row.id}}</td></ng-container><ng-container matColumnDef=\"progress\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Progress</th><td mat-cell *matCellDef=\"let row\">{{row.progress}}%</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th><td mat-cell *matCellDef=\"let row\">{{row.name}}</td></ng-container><ng-container matColumnDef=\"color\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Color</th><td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table><mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator></div>",
                },] },
    ];
    /** @nocollapse */
    TableOverviewExample.ctorParameters = function () { return []; };
    TableOverviewExample.propDecorators = {
        paginator: [{ type: core.ViewChild, args: [material.MatPaginator,] }],
        sort: [{ type: core.ViewChild, args: [material.MatSort,] }]
    };
    return TableOverviewExample;
}());
/**
 * Builds and returns a new User.
 * @param {?} id
 * @return {?}
 */
function createNewUser(id) {
    /** @type {?} */
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with pagination
 */
var TablePaginationExample = /** @class */ (function () {
    function TablePaginationExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new material.MatTableDataSource(ELEMENT_DATA$7);
    }
    /**
     * @return {?}
     */
    TablePaginationExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataSource.paginator = this.paginator;
    };
    TablePaginationExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-pagination-example',
                    styles: ["table { width: 100%; } "],
                    template: "<div class=\"mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table><mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator></div>",
                },] },
    ];
    TablePaginationExample.propDecorators = {
        paginator: [{ type: core.ViewChild, args: [material.MatPaginator,] }]
    };
    return TablePaginationExample;
}());
/** @type {?} */
var ELEMENT_DATA$7 = [
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table showing each row context properties.
 */
var TableRowContextExample = /** @class */ (function () {
    function TableRowContextExample() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
    TableRowContextExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-row-context-example',
                    styles: ["table { width: 100%; } "],
                    template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"$implicit\"><th mat-header-cell *matHeaderCellDef>$implicit</th><td mat-cell *matCellDef=\"let data\">{{data}}</td></ng-container><ng-container matColumnDef=\"index\"><th mat-header-cell *matHeaderCellDef>index</th><td mat-cell *matCellDef=\"let index = index\">{{index}}</td></ng-container><ng-container matColumnDef=\"count\"><th mat-header-cell *matHeaderCellDef>count</th><td mat-cell *matCellDef=\"let count = count\">{{count}}</td></ng-container><ng-container matColumnDef=\"first\"><th mat-header-cell *matHeaderCellDef>first</th><td mat-cell *matCellDef=\"let first = first\">{{first}}</td></ng-container><ng-container matColumnDef=\"last\"><th mat-header-cell *matHeaderCellDef>last</th><td mat-cell *matCellDef=\"let last = last\">{{last}}</td></ng-container><ng-container matColumnDef=\"even\"><th mat-header-cell *matHeaderCellDef>even</th><td mat-cell *matCellDef=\"let even = even\">{{even}}</td></ng-container><ng-container matColumnDef=\"odd\"><th mat-header-cell *matHeaderCellDef>odd</th><td mat-cell *matCellDef=\"let odd = odd\">{{odd}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    return TableRowContextExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ELEMENT_DATA$8 = [
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
];
/**
 * \@title Table with selection
 */
var TableSelectionExample = /** @class */ (function () {
    function TableSelectionExample() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new material.MatTableDataSource(ELEMENT_DATA$8);
        this.selection = new collections.SelectionModel(true, []);
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
        /** @type {?} */
        var numSelected = this.selection.selected.length;
        /** @type {?} */
        var numRows = this.dataSource.data.length;
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
        { type: core.Component, args: [{
                    selector: 'table-selection-example',
                    styles: ["table { width: 100%; } "],
                    template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"select\"><th mat-header-cell *matHeaderCellDef><mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></mat-checkbox></th><td mat-cell *matCellDef=\"let row\"><mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"></mat-checkbox></td></ng-container><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></tr></table>",
                },] },
    ];
    return TableSelectionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ELEMENT_DATA$9 = [
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
];
/**
 * \@title Table with a custom column component for easy column definition reuse.
 */
var TableSimpleColumnExample = /** @class */ (function () {
    function TableSimpleColumnExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new material.MatTableDataSource(ELEMENT_DATA$9);
        this.getWeight = function (data) { return '~' + data.weight; };
    }
    /**
     * @return {?}
     */
    TableSimpleColumnExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataSource.sort = this.sort;
    };
    TableSimpleColumnExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-simple-column-example',
                    styles: ["table { width: 100%; } "],
                    template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort #sort=\"matSort\"><simple-column name=\"name\" sortable></simple-column><simple-column name=\"position\"></simple-column><simple-column name=\"weight\" [dataAccessor]=\"getWeight\"></simple-column><simple-column name=\"symbol\" label=\"SYMBOL!\"></simple-column><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let data; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    TableSimpleColumnExample.propDecorators = {
        sort: [{ type: core.ViewChild, args: ['sort',] }]
    };
    return TableSimpleColumnExample;
}());
/**
 * Column that shows simply shows text content for the header and row
 * cells. By default, the name of this column will be assumed to be both the header
 * text and data property used to access the data value to show in cells. To override
 * the header text, provide a label text. To override the data cell values,
 * provide a dataAccessor function that provides the string to display for each row's cell.
 *
 * Note that this component sets itself as visually hidden since it will show up in the `mat-table`
 * DOM because it is an empty element with an ng-container (nothing rendered). It should not
 * interfere with screen readers.
 * @template T
 */
var SimpleColumn = /** @class */ (function () {
    function SimpleColumn(table$$1) {
        this.table = table$$1;
        /**
         * Alignment of the cell values.
         */
        this.align = 'before';
    }
    Object.defineProperty(SimpleColumn.prototype, "name", {
        /** Column name that should be used to reference this column. */
        get: /**
         * Column name that should be used to reference this column.
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this._name = name;
            this.columnDef.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleColumn.prototype, "sortable", {
        /** Whether the column is sortable */
        get: /**
         * Whether the column is sortable
         * @return {?}
         */
        function () { return this._sortable; },
        set: /**
         * @param {?} sortable
         * @return {?}
         */
        function (sortable) {
            this._sortable = coercion.coerceBooleanProperty(sortable);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SimpleColumn.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.table) {
            this.table.addColumnDef(this.columnDef);
        }
    };
    /**
     * @return {?}
     */
    SimpleColumn.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.table) {
            this.table.removeColumnDef(this.columnDef);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SimpleColumn.prototype.getData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.dataAccessor ? this.dataAccessor(data, this.name) : ((/** @type {?} */ (data)))[this.name];
    };
    SimpleColumn.decorators = [
        { type: core.Component, args: [{
                    selector: 'simple-column',
                    template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{label || name}} </th>\n      <td mat-cell *matCellDef=\"let data\"> {{getData(data)}}</td>\n    </ng-container>\n  ",
                    host: {
                        'class': 'simple-column cdk-visually-hidden',
                        '[attr.ariaHidden]': 'true',
                    }
                },] },
    ];
    /** @nocollapse */
    SimpleColumn.ctorParameters = function () { return [
        { type: material.MatTable, decorators: [{ type: core.Optional }] }
    ]; };
    SimpleColumn.propDecorators = {
        name: [{ type: core.Input }],
        label: [{ type: core.Input }],
        dataAccessor: [{ type: core.Input }],
        align: [{ type: core.Input }],
        sortable: [{ type: core.Input }],
        columnDef: [{ type: core.ViewChild, args: [material.MatColumnDef,] }],
        sortHeader: [{ type: core.ViewChild, args: [material.MatSortHeader,] }]
    };
    return SimpleColumn;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ELEMENT_DATA$10 = [
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
];
/**
 * \@title Table with sorting
 */
var TableSortingExample = /** @class */ (function () {
    function TableSortingExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new material.MatTableDataSource(ELEMENT_DATA$10);
    }
    /**
     * @return {?}
     */
    TableSortingExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataSource.sort = this.sort;
    };
    TableSortingExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-sorting-example',
                    styles: ["table { width: 100%; } th.mat-sort-header-sorted { color: black; } "],
                    template: "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef mat-sort-header>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    TableSortingExample.propDecorators = {
        sort: [{ type: core.ViewChild, args: [material.MatSort,] }]
    };
    return TableSortingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with a sticky columns
 */
var TableStickyColumnsExample = /** @class */ (function () {
    function TableStickyColumnsExample() {
        this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
        this.dataSource = ELEMENT_DATA$11;
    }
    TableStickyColumnsExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-sticky-columns-example',
                    styles: [".example-container { height: 400px; width: 550px; overflow: auto; } table { width: 800px; } td.mat-column-star { width: 20px; padding-right: 8px; } th.mat-column-position, td.mat-column-position { padding-left: 8px; } .mat-table-sticky:first-child { border-right: 1px solid #e0e0e0; } .mat-table-sticky:last-child { border-left: 1px solid #e0e0e0; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"name\" sticky><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><ng-container matColumnDef=\"star\" stickyEnd><th mat-header-cell *matHeaderCellDef></th><td mat-cell *matCellDef=\"let element\"><mat-icon>more_vert</mat-icon></td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table></div>",
                },] },
    ];
    return TableStickyColumnsExample;
}());
/** @type {?} */
var ELEMENT_DATA$11 = [
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
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
var TableStickyComplexFlexExample = /** @class */ (function () {
    function TableStickyComplexFlexExample() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$12;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /** Whether the button toggle group contains the id as an active value. */
    /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    TableStickyComplexFlexExample.prototype.isSticky = /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    function (buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    };
    TableStickyComplexFlexExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-sticky-complex-flex-example',
                    styles: [".example-container { height: 400px; overflow: auto; } .mat-table-sticky { background: #59abfd; opacity: 1; } .example-sticky-toggle-group { margin: 8px; } .mat-column-filler { padding: 0 8px; font-size: 10px; text-align: center; } .mat-header-cell, .mat-footer-cell, .mat-cell { min-width: 80px; box-sizing: border-box; } .mat-header-row, .mat-footer-row, .mat-row { min-width: 1920px; /* 24 columns, 80px each */ } "],
                    template: "<div><button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button> <button mat-raised-button (click)=\"tables.pop()\">Remove table</button></div><div>Sticky Headers:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['header-1']\" #stickyHeaders=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"header-1\">Row 1</mat-button-toggle><mat-button-toggle value=\"header-2\">Row 2</mat-button-toggle></mat-button-toggle-group></div><div>Sticky Footers:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['footer-1']\" #stickyFooters=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"footer-1\">Row 1</mat-button-toggle><mat-button-toggle value=\"footer-2\">Row 2</mat-button-toggle></mat-button-toggle-group></div><div>Sticky Columns:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['position', 'symbol']\" #stickyColumns=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"position\">Position</mat-button-toggle><mat-button-toggle value=\"name\">Name</mat-button-toggle><mat-button-toggle value=\"weight\">Weight</mat-button-toggle><mat-button-toggle value=\"symbol\">Symbol</mat-button-toggle></mat-button-toggle-group></div><div class=\"example-container mat-elevation-z8\"><mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\"><ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\"><mat-header-cell *matHeaderCellDef>Position</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell><mat-footer-cell *matFooterCellDef>Position Footer</mat-footer-cell></ng-container><ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\"><mat-header-cell *matHeaderCellDef>Name</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell><mat-footer-cell *matFooterCellDef>Name Footer</mat-footer-cell></ng-container><ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\"><mat-header-cell *matHeaderCellDef>Weight</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.weight}}</mat-cell><mat-footer-cell *matFooterCellDef>Weight Footer</mat-footer-cell></ng-container><ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\"><mat-header-cell *matHeaderCellDef>Symbol</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.symbol}}</mat-cell><mat-footer-cell *matFooterCellDef>Symbol Footer</mat-footer-cell></ng-container><ng-container matColumnDef=\"filler\"><mat-header-cell *matHeaderCellDef>Filler header cell</mat-header-cell><mat-cell *matCellDef=\"let element\">Filler data cell</mat-cell><mat-footer-cell *matFooterCellDef>Filler footer cell</mat-footer-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row><mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row><mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row><mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row></mat-table></div>",
                },] },
    ];
    /** @nocollapse */
    TableStickyComplexFlexExample.ctorParameters = function () { return []; };
    return TableStickyComplexFlexExample;
}());
/** @type {?} */
var ELEMENT_DATA$12 = [
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
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tables with toggle-able sticky headers, footers, and columns
 */
var TableStickyComplexExample = /** @class */ (function () {
    function TableStickyComplexExample() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$13;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /** Whether the button toggle group contains the id as an active value. */
    /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    TableStickyComplexExample.prototype.isSticky = /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    function (buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    };
    TableStickyComplexExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-sticky-complex-example',
                    styles: [".example-container { height: 400px; overflow: auto; } .mat-table-sticky { background: #59abfd; opacity: 1; } .example-sticky-toggle-group { margin: 8px; } .mat-column-filler { padding: 0 8px; font-size: 10px; text-align: center; } .mat-header-cell, .mat-footer-cell, .mat-cell { min-width: 80px; box-sizing: border-box; } "],
                    template: "<div><button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button> <button mat-raised-button (click)=\"tables.pop()\">Remove table</button></div><div>Sticky Headers:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['header-1']\" #stickyHeaders=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"header-1\">Row 1</mat-button-toggle><mat-button-toggle value=\"header-2\">Row 2</mat-button-toggle></mat-button-toggle-group></div><div>Sticky Footers:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['footer-1']\" #stickyFooters=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"footer-1\">Row 1</mat-button-toggle><mat-button-toggle value=\"footer-2\">Row 2</mat-button-toggle></mat-button-toggle-group></div><div>Sticky Columns:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['position', 'symbol']\" #stickyColumns=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"position\">Position</mat-button-toggle><mat-button-toggle value=\"name\">Name</mat-button-toggle><mat-button-toggle value=\"weight\">Weight</mat-button-toggle><mat-button-toggle value=\"symbol\">Symbol</mat-button-toggle></mat-button-toggle-group></div><div class=\"example-container mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\"><ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\"><th mat-header-cell *matHeaderCellDef>Position</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td><td mat-footer-cell *matFooterCellDef>Position Footer</td></ng-container><ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td><td mat-footer-cell *matFooterCellDef>Name Footer</td></ng-container><ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td><td mat-footer-cell *matFooterCellDef>Weight Footer</td></ng-container><ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td><td mat-footer-cell *matFooterCellDef>Symbol Footer</td></ng-container><ng-container matColumnDef=\"filler\"><th mat-header-cell *matHeaderCellDef>Filler header cell</th><td mat-cell *matCellDef=\"let element\">Filler data cell</td><td mat-footer-cell *matFooterCellDef>Filler footer cell</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr><tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr></table></div>",
                },] },
    ];
    /** @nocollapse */
    TableStickyComplexExample.ctorParameters = function () { return []; };
    return TableStickyComplexExample;
}());
/** @type {?} */
var ELEMENT_DATA$13 = [
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
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with a sticky footer
 */
var TableStickyFooterExample = /** @class */ (function () {
    function TableStickyFooterExample() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    TableStickyFooterExample.prototype.getTotalCost = /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    function () {
        return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    TableStickyFooterExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-sticky-footer-example',
                    styles: [".example-container { height: 270px; overflow: auto; } table { width: 100%; } tr.mat-footer-row { font-weight: bold; } .mat-table-sticky { border-top: 1px solid #e0e0e0; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><table mat-table [dataSource]=\"transactions\"><ng-container matColumnDef=\"item\"><th mat-header-cell *matHeaderCellDef>Item</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.item}}</td><td mat-footer-cell *matFooterCellDef>Total</td></ng-container><ng-container matColumnDef=\"cost\"><th mat-header-cell *matHeaderCellDef>Cost</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.cost | currency}}</td><td mat-footer-cell *matFooterCellDef>{{getTotalCost() | currency}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr></table></div>",
                },] },
    ];
    return TableStickyFooterExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with sticky header
 */
var TableStickyHeaderExample = /** @class */ (function () {
    function TableStickyHeaderExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$14;
    }
    TableStickyHeaderExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-sticky-header-example',
                    styles: [".example-container { height: 400px; overflow: auto; } table { width: 100%; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table></div>",
                },] },
    ];
    return TableStickyHeaderExample;
}());
/** @type {?} */
var ELEMENT_DATA$14 = [
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
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ELEMENT_DATA$15 = [
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
];
/**
 * \@title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
var TableWrappedExample = /** @class */ (function () {
    function TableWrappedExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new material.MatTableDataSource(ELEMENT_DATA$15);
    }
    /**
     * @return {?}
     */
    TableWrappedExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataSource.sort = this.sort;
    };
    TableWrappedExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'table-wrapped-example',
                    styles: ["table { width: 100%; } "],
                    template: "<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\" matSort #sort=\"matSort\"><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns; \"></tr></wrapper-table>",
                },] },
    ];
    TableWrappedExample.propDecorators = {
        sort: [{ type: core.ViewChild, args: ['sort',] }]
    };
    return TableWrappedExample;
}());
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 * @template T
 */
var WrapperTable = /** @class */ (function () {
    function WrapperTable() {
    }
    /**
     * @return {?}
     */
    WrapperTable.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.columnDefs.forEach(function (columnDef) { return _this.table.addColumnDef(columnDef); });
        this.rowDefs.forEach(function (rowDef) { return _this.table.addRowDef(rowDef); });
        this.headerRowDefs.forEach(function (headerRowDef) { return _this.table.addHeaderRowDef(headerRowDef); });
    };
    WrapperTable.decorators = [
        { type: core.Component, args: [{
                    selector: 'wrapper-table',
                    template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-content></ng-content><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef mat-sort-header>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container></table>",
                    styles: ["\n    table {\n      width: 100%;\n    }\n  "]
                },] },
    ];
    WrapperTable.propDecorators = {
        headerRowDefs: [{ type: core.ContentChildren, args: [material.MatHeaderRowDef,] }],
        rowDefs: [{ type: core.ContentChildren, args: [material.MatRowDef,] }],
        columnDefs: [{ type: core.ContentChildren, args: [material.MatColumnDef,] }],
        table: [{ type: core.ViewChild, args: [material.MatTable,] }],
        columns: [{ type: core.Input }],
        dataSource: [{ type: core.Input }]
    };
    return WrapperTable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Monitoring autofill state with cdkAutofill
 */
var TextFieldAutofillDirectiveExample = /** @class */ (function () {
    function TextFieldAutofillDirectiveExample() {
    }
    TextFieldAutofillDirectiveExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'text-field-autofill-directive-example',
                    template: "<form><mat-form-field><mat-label>First name</mat-label><input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\"><mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint></mat-form-field><mat-form-field><mat-label>Last name</mat-label><input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\"><mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint></mat-form-field><button mat-raised-button>Submit</button></form>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return TextFieldAutofillDirectiveExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Monitoring autofill state with AutofillMonitor
 */
var TextFieldAutofillMonitorExample = /** @class */ (function () {
    function TextFieldAutofillMonitorExample(autofill) {
        this.autofill = autofill;
    }
    /**
     * @return {?}
     */
    TextFieldAutofillMonitorExample.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.autofill.monitor(this.firstName)
            .subscribe(function (e) { return _this.firstNameAutofilled = e.isAutofilled; });
        this.autofill.monitor(this.lastName)
            .subscribe(function (e) { return _this.lastNameAutofilled = e.isAutofilled; });
    };
    /**
     * @return {?}
     */
    TextFieldAutofillMonitorExample.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.autofill.stopMonitoring(this.firstName);
        this.autofill.stopMonitoring(this.lastName);
    };
    TextFieldAutofillMonitorExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'text-field-autofill-monitor-example',
                    template: "<form><mat-form-field><mat-label>First name</mat-label><input matInput #first><mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint></mat-form-field><mat-form-field><mat-label>Last name</mat-label><input matInput #last><mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint></mat-form-field><button mat-raised-button>Submit</button></form>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    TextFieldAutofillMonitorExample.ctorParameters = function () { return [
        { type: textField.AutofillMonitor }
    ]; };
    TextFieldAutofillMonitorExample.propDecorators = {
        firstName: [{ type: core.ViewChild, args: ['first', { read: core.ElementRef },] }],
        lastName: [{ type: core.ViewChild, args: ['last', { read: core.ElementRef },] }]
    };
    return TextFieldAutofillMonitorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Auto-resizing textarea
 */
var TextFieldAutosizeTextareaExample = /** @class */ (function () {
    function TextFieldAutosizeTextareaExample(ngZone) {
        this.ngZone = ngZone;
    }
    /**
     * @return {?}
     */
    TextFieldAutosizeTextareaExample.prototype.triggerResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(operators.take(1))
            .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
    };
    TextFieldAutosizeTextareaExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'text-field-autosize-textarea-example',
                    template: "<mat-form-field><mat-label>Font size</mat-label><mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\"><mat-option value=\"10px\">10px</mat-option><mat-option value=\"12px\">12px</mat-option><mat-option value=\"14px\">14px</mat-option><mat-option value=\"16px\">16px</mat-option><mat-option value=\"18px\">18px</mat-option><mat-option value=\"20px\">20px</mat-option></mat-select></mat-form-field><mat-form-field [style.fontSize]=\"fontSize.value\"><mat-label>Autosize textarea</mat-label><textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"2\" cdkAutosizeMaxRows=\"5\"></textarea></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    TextFieldAutosizeTextareaExample.ctorParameters = function () { return [
        { type: core.NgZone }
    ]; };
    TextFieldAutosizeTextareaExample.propDecorators = {
        autosize: [{ type: core.ViewChild, args: ['autosize',] }]
    };
    return TextFieldAutosizeTextareaExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Multi-row toolbar
 */
var ToolbarMultirowExample = /** @class */ (function () {
    function ToolbarMultirowExample() {
    }
    ToolbarMultirowExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'toolbar-multirow-example',
                    template: "<mat-toolbar color=\"primary\"><mat-toolbar-row><span>Custom Toolbar</span></mat-toolbar-row><mat-toolbar-row><span>Second Line</span> <span class=\"example-spacer\"></span><mat-icon class=\"example-icon\">verified_user</mat-icon></mat-toolbar-row><mat-toolbar-row><span>Third Line</span> <span class=\"example-spacer\"></span><mat-icon class=\"example-icon\">favorite</mat-icon><mat-icon class=\"example-icon\">delete</mat-icon></mat-toolbar-row></mat-toolbar>",
                    styles: [".example-icon { padding: 0 14px; } .example-spacer { flex: 1 1 auto; } "],
                },] },
    ];
    return ToolbarMultirowExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic toolbar
 */
var ToolbarOverviewExample = /** @class */ (function () {
    function ToolbarOverviewExample() {
    }
    ToolbarOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'toolbar-overview-example',
                    template: "<mat-toolbar>My App</mat-toolbar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ToolbarOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
var TooltipAutoHideExample = /** @class */ (function () {
    function TooltipAutoHideExample() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new forms.FormControl(this.positionOptions[0]);
    }
    TooltipAutoHideExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip-auto-hide-example',
                    template: "<mat-form-field><mat-select placeholder=\"Tooltip position\" [formControl]=\"position\"><mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">{{positionOption}}</mat-option></mat-select></mat-form-field><div class=\"example-container\" cdk-scrollable><button mat-raised-button #tooltip=\"matTooltip\" matTooltip=\"Info about the action\" [matTooltipPosition]=\"position.value\" matTooltipHideDelay=\"100000\" aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\" class=\"example-button\">Action</button></div>",
                    styles: [".example-button { display: block; margin: 80px auto 400px; } .example-container { height: 200px; overflow: auto; border: 1px solid #ccc; } "],
                },] },
    ];
    return TooltipAutoHideExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip that can have a custom class applied.
 */
var TooltipCustomClassExample = /** @class */ (function () {
    function TooltipCustomClassExample() {
    }
    TooltipCustomClassExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip-custom-class-example',
                    template: "<button mat-raised-button matTooltip=\"Info about the action\" matTooltipClass=\"example-tooltip-red\" aria-label=\"Button that shows a red tooltip\" class=\"example-button\">Red-tooltip Action</button>",
                    styles: [".example-button { margin-top: 16px; } .example-tooltip-red { background: #b71c1c; } "],
                    // Need to remove view encapsulation so that the custom tooltip style defined in
                    // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                    encapsulation: core.ViewEncapsulation.None,
                },] },
    ];
    return TooltipCustomClassExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip with a show and hide delay
 */
var TooltipDelayExample = /** @class */ (function () {
    function TooltipDelayExample() {
        this.showDelay = new forms.FormControl(1000);
        this.hideDelay = new forms.FormControl(2000);
    }
    TooltipDelayExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip-delay-example',
                    template: "<mat-form-field class=\"example-user-input\"><input matInput placeholder=\"Show delay (milliseconds)\" type=\"number\" aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\" [formControl]=\"showDelay\"></mat-form-field><mat-form-field class=\"example-user-input\"><input matInput placeholder=\"Hide delay (milliseconds)\" type=\"number\" aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\" [formControl]=\"hideDelay\"></mat-form-field><button mat-raised-button matTooltip=\"Info about the action\" [matTooltipShowDelay]=\"showDelay.value\" [matTooltipHideDelay]=\"hideDelay.value\" aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">Action</button>",
                    styles: [".example-user-input { display: block; width: 150px; } "],
                },] },
    ];
    return TooltipDelayExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip that can be disabled
 */
var TooltipDisabledExample = /** @class */ (function () {
    function TooltipDisabledExample() {
        this.disabled = new forms.FormControl(false);
    }
    TooltipDisabledExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip-disabled-example',
                    template: "<button mat-raised-button matTooltip=\"Info about the action\" [matTooltipDisabled]=\"disabled.value\" aria-label=\"Button that displays a tooltip that can be programatically disabled\">Action</button><mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">Tooltip disabled</mat-checkbox>",
                    styles: [".example-disabled-checkbox { margin-left: 8px; } "],
                },] },
    ];
    return TooltipDisabledExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip that can be manually shown/hidden.
 */
var TooltipManualExample = /** @class */ (function () {
    function TooltipManualExample() {
    }
    TooltipManualExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip-manual-example',
                    template: "<div><span>Mouse over to </span><button mat-button (mouseenter)=\"tooltip.show()\" aria-label=\"Button that progamatically shows a tooltip on another button\" class=\"example-action-button\">show</button> <button mat-button (mouseenter)=\"tooltip.hide()\" aria-label=\"Button that progamatically hides a tooltip on another button\" class=\"example-action-button\">hide</button> <button mat-button (mouseenter)=\"tooltip.toggle()\" aria-label=\"Button that progamatically toggles a tooltip on another button to show/hide\" class=\"example-action-button\">toggle show/hide</button></div><button mat-raised-button #tooltip=\"matTooltip\" matTooltip=\"Info about the action\" matTooltipPosition=\"right\" aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">Action</button>",
                    styles: [".example-action-button { margin-top: 16px; } "],
                },] },
    ];
    return TooltipManualExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip with a changing message
 */
var TooltipMessageExample = /** @class */ (function () {
    function TooltipMessageExample() {
        this.message = new forms.FormControl('Info about the action');
    }
    TooltipMessageExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip-message-example',
                    template: "<mat-form-field class=\"example-user-input\"><input matInput placeholder=\"Tooltip message\" [formControl]=\"message\"></mat-form-field><button mat-raised-button [matTooltip]=\"message.value\" aria-label=\"Button that displays a tooltip with a custom message\">Action</button>",
                    styles: [".example-user-input { margin-right: 8px; } "],
                },] },
    ];
    return TooltipMessageExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Custom options the configure the tooltip's default show/hide delays.
 * @type {?}
 */
var myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * \@title Tooltip with a show and hide delay
 */
var TooltipModifiedDefaultsExample = /** @class */ (function () {
    function TooltipModifiedDefaultsExample() {
    }
    TooltipModifiedDefaultsExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip-modified-defaults-example',
                    template: "<button mat-raised-button matTooltip=\"By default, I delay\" aria-label=\"Button that displays a tooltip that has custom delays through a default config\">Button with delay-default tooltip</button>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        { provide: material.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                    ],
                },] },
    ];
    return TooltipModifiedDefaultsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic tooltip
 */
var TooltipOverviewExample = /** @class */ (function () {
    function TooltipOverviewExample() {
    }
    TooltipOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip-overview-example',
                    template: "<button mat-raised-button matTooltip=\"Info about the action\" aria-label=\"Button that displays a tooltip when focused or hovered over\">Action</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return TooltipOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip with a custom position
 */
var TooltipPositionExample = /** @class */ (function () {
    function TooltipPositionExample() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new forms.FormControl(this.positionOptions[0]);
    }
    TooltipPositionExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip-position-example',
                    template: "<mat-form-field class=\"example-user-input\"><mat-select placeholder=\"Tooltip position\" [formControl]=\"position\"><mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">{{positionOption}}</mat-option></mat-select></mat-form-field><button mat-raised-button matTooltip=\"Info about the action\" [matTooltipPosition]=\"position.value\" aria-label=\"Button that displays a tooltip in various positions\">Action</button>",
                    styles: [".example-user-input { margin-right: 8px; } "],
                },] },
    ];
    return TooltipPositionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Node for to-do item
 */
var /**
 * Node for to-do item
 */
TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());
/**
 * Flat to-do item node with expandable and level information
 */
var /**
 * Flat to-do item node with expandable and level information
 */
TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());
/**
 * The Json object for to-do list data.
 * @type {?}
 */
var TREE_DATA$2 = {
    Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberry', 'Raspberry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new rxjs.BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ChecklistDatabase.prototype.initialize = /**
     * @return {?}
     */
    function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        /** @type {?} */
        var data = this.buildFileTree(TREE_DATA$2, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    ChecklistDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            /** @type {?} */
            var value = obj[key];
            /** @type {?} */
            var node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    /** Add an item to to-do list */
    /**
     * Add an item to to-do list
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    ChecklistDatabase.prototype.insertItem = /**
     * Add an item to to-do list
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    function (parent, name) {
        if (parent.children) {
            parent.children.push((/** @type {?} */ ({ item: name })));
            this.dataChange.next(this.data);
        }
    };
    /**
     * @param {?} node
     * @param {?} name
     * @return {?}
     */
    ChecklistDatabase.prototype.updateItem = /**
     * @param {?} node
     * @param {?} name
     * @return {?}
     */
    function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ChecklistDatabase.ctorParameters = function () { return []; };
    return ChecklistDatabase;
}());
/**
 * \@title Tree with checkboxes
 */
var TreeChecklistExample = /** @class */ (function () {
    function TreeChecklistExample(database) {
        var _this = this;
        this.database = database;
        /**
         * Map from flat node to nested node. This helps us finding the nested node to be modified
         */
        this.flatNodeMap = new Map();
        /**
         * Map from nested node to flattened node. This helps us to keep the same object for selection
         */
        this.nestedNodeMap = new Map();
        /**
         * A selected parent node to be inserted
         */
        this.selectedParent = null;
        /**
         * The new item's name
         */
        this.newItemName = '';
        /**
         * The selection for checklist
         */
        this.checklistSelection = new collections.SelectionModel(true /* multiple */);
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) { return node.children; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            /** @type {?} */
            var existingNode = _this.nestedNodeMap.get(node);
            /** @type {?} */
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new tree$1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new tree$1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected. */
    /**
     * Whether all the descendants of the node are selected.
     * @param {?} node
     * @return {?}
     */
    TreeChecklistExample.prototype.descendantsAllSelected = /**
     * Whether all the descendants of the node are selected.
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        /** @type {?} */
        var descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        return descAllSelected;
    };
    /** Whether part of the descendants are selected */
    /**
     * Whether part of the descendants are selected
     * @param {?} node
     * @return {?}
     */
    TreeChecklistExample.prototype.descendantsPartiallySelected = /**
     * Whether part of the descendants are selected
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        /** @type {?} */
        var descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    /**
     * Toggle the to-do item selection. Select/deselect all the descendants node
     * @param {?} node
     * @return {?}
     */
    TreeChecklistExample.prototype.todoItemSelectionToggle = /**
     * Toggle the to-do item selection. Select/deselect all the descendants node
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        var _a, _b;
        this.checklistSelection.toggle(node);
        /** @type {?} */
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
        // Force update for the parent
        descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        this.checkAllParentsSelection(node);
    };
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    /**
     * Toggle a leaf to-do item selection. Check all the parents to see if they changed
     * @param {?} node
     * @return {?}
     */
    TreeChecklistExample.prototype.todoLeafItemSelectionToggle = /**
     * Toggle a leaf to-do item selection. Check all the parents to see if they changed
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    };
    /* Checks all the parents when a leaf node is selected/unselected */
    /* Checks all the parents when a leaf node is selected/unselected */
    /**
     * @param {?} node
     * @return {?}
     */
    TreeChecklistExample.prototype.checkAllParentsSelection = /* Checks all the parents when a leaf node is selected/unselected */
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    };
    /** Check root node checked state and change it accordingly */
    /**
     * Check root node checked state and change it accordingly
     * @param {?} node
     * @return {?}
     */
    TreeChecklistExample.prototype.checkRootNodeSelection = /**
     * Check root node checked state and change it accordingly
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        /** @type {?} */
        var nodeSelected = this.checklistSelection.isSelected(node);
        /** @type {?} */
        var descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    };
    /* Get the parent node of a node */
    /* Get the parent node of a node */
    /**
     * @param {?} node
     * @return {?}
     */
    TreeChecklistExample.prototype.getParentNode = /* Get the parent node of a node */
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        /** @type {?} */
        var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (var i = startIndex; i >= 0; i--) {
            /** @type {?} */
            var currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    };
    /** Select the category so we can insert the new item. */
    /**
     * Select the category so we can insert the new item.
     * @param {?} node
     * @return {?}
     */
    TreeChecklistExample.prototype.addNewItem = /**
     * Select the category so we can insert the new item.
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem((/** @type {?} */ (parentNode)), '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    /**
     * Save the node to database
     * @param {?} node
     * @param {?} itemValue
     * @return {?}
     */
    TreeChecklistExample.prototype.saveNode = /**
     * Save the node to database
     * @param {?} node
     * @param {?} itemValue
     * @return {?}
     */
    function (node, itemValue) {
        /** @type {?} */
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem((/** @type {?} */ (nestedNode)), itemValue);
    };
    TreeChecklistExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tree-checklist-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button><mat-checkbox class=\"checklist-leaf-node\" [checked]=\"checklistSelection.isSelected(node)\" (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox></mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button><mat-form-field><input matInput #itemValue placeholder=\"New item...\"></mat-form-field><button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button></mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding><button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\"><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button><mat-checkbox [checked]=\"descendantsAllSelected(node)\" [indeterminate]=\"descendantsPartiallySelected(node)\" (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox><button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button></mat-tree-node></mat-tree>",
                    styles: [""],
                    providers: [ChecklistDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeChecklistExample.ctorParameters = function () { return [
        { type: ChecklistDatabase }
    ]; };
    return TreeChecklistExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Flat node with expandable and level information
 */
var /**
 * Flat node with expandable and level information
 */
DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(item, level, expandable, isLoading) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (isLoading === void 0) { isLoading = false; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
    return DynamicFlatNode;
}());
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var   /**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    /**
     * Initial data from database
     * @return {?}
     */
    DynamicDatabase.prototype.initialData = /**
     * Initial data from database
     * @return {?}
     */
    function () {
        return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DynamicDatabase.prototype.getChildren = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.dataMap.get(node);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DynamicDatabase.prototype.isExpandable = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.dataMap.has(node);
    };
    return DynamicDatabase;
}());
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var DynamicDataSource = /** @class */ (function () {
    function DynamicDataSource(treeControl, database) {
        this.treeControl = treeControl;
        this.database = database;
        this.dataChange = new rxjs.BehaviorSubject([]);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this.dataChange.value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    DynamicDataSource.prototype.connect = /**
     * @param {?} collectionViewer
     * @return {?}
     */
    function (collectionViewer) {
        var _this = this;
        this.treeControl.expansionModel.onChange.subscribe(function (change) {
            if (((/** @type {?} */ (change))).added ||
                ((/** @type {?} */ (change))).removed) {
                _this.handleTreeControl((/** @type {?} */ (change)));
            }
        });
        return rxjs.merge(collectionViewer.viewChange, this.dataChange).pipe(operators.map(function () { return _this.data; }));
    };
    /** Handle expand/collapse behaviors */
    /**
     * Handle expand/collapse behaviors
     * @param {?} change
     * @return {?}
     */
    DynamicDataSource.prototype.handleTreeControl = /**
     * Handle expand/collapse behaviors
     * @param {?} change
     * @return {?}
     */
    function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    /**
     * Toggle the node, remove from display list
     */
    /**
     * Toggle the node, remove from display list
     * @param {?} node
     * @param {?} expand
     * @return {?}
     */
    DynamicDataSource.prototype.toggleNode = /**
     * Toggle the node, remove from display list
     * @param {?} node
     * @param {?} expand
     * @return {?}
     */
    function (node, expand) {
        var _this = this;
        /** @type {?} */
        var children = this.database.getChildren(node.item);
        /** @type {?} */
        var index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            var _a;
            if (expand) {
                /** @type {?} */
                var nodes = children.map(function (name) {
                    return new DynamicFlatNode(name, node.level + 1, _this.database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, [index + 1, 0].concat(nodes));
            }
            else {
                /** @type {?} */
                var count = 0;
                for (var i = index + 1; i < _this.data.length
                    && _this.data[i].level > node.level; i++, count++) { }
                _this.data.splice(index + 1, count);
            }
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
        }, 1000);
    };
    DynamicDataSource.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    DynamicDataSource.ctorParameters = function () { return [
        { type: tree.FlatTreeControl },
        { type: DynamicDatabase }
    ]; };
    return DynamicDataSource;
}());
/**
 * \@title Tree with dynamic data
 */
var TreeDynamicExample = /** @class */ (function () {
    function TreeDynamicExample(database) {
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
    TreeDynamicExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tree-dynamic-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button> {{node.item}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.item}}<mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"example-tree-progress-bar\"></mat-progress-bar></mat-tree-node></mat-tree>",
                    styles: [".example-tree-progress-bar { margin-left: 30px; } "],
                    providers: [DynamicDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeDynamicExample.ctorParameters = function () { return [
        { type: DynamicDatabase }
    ]; };
    return TreeDynamicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
var /**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
FileNode$2 = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());
/**
 * Flat node with expandable and level information
 */
var /**
 * Flat node with expandable and level information
 */
FileFlatNode$1 = /** @class */ (function () {
    function FileFlatNode(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
    return FileFlatNode;
}());
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 * @type {?}
 */
var TREE_DATA$3 = JSON.stringify({
    Applications: {
        Calendar: 'app',
        Chrome: 'app',
        Webstorm: 'app'
    },
    Documents: {
        angular: {
            src: {
                compiler: 'ts',
                core: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        October: 'pdf',
        November: 'pdf',
        Tutorial: 'html'
    },
    Pictures: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    }
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase$2 = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs.BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileDatabase.prototype.initialize = /**
     * @return {?}
     */
    function () {
        // Parse the string to json object.
        /** @type {?} */
        var dataObject = JSON.parse(TREE_DATA$3);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        /** @type {?} */
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    FileDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            /** @type {?} */
            var value = obj[key];
            /** @type {?} */
            var node = new FileNode$2();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    FileDatabase.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FileDatabase.ctorParameters = function () { return []; };
    return FileDatabase;
}());
/**
 * \@title Tree with flat nodes
 */
var TreeFlatOverviewExample = /** @class */ (function () {
    function TreeFlatOverviewExample(database) {
        var _this = this;
        this.transformer = function (node, level) {
            return new FileFlatNode$1(!!node.children, node.filename, level, node.type);
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) { return rxjs.of(node.children); };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeFlattener = new tree$1.MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new tree.FlatTreeControl(this._getLevel, this._isExpandable);
        this.dataSource = new tree$1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) { return _this.dataSource.data = data; });
    }
    TreeFlatOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tree-flat-overview-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button> {{node.filename}} : {{node.type}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding><button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\"><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.filename}} : {{node.type}}</mat-tree-node></mat-tree>",
                    styles: [""],
                    providers: [FileDatabase$2]
                },] },
    ];
    /** @nocollapse */
    TreeFlatOverviewExample.ctorParameters = function () { return [
        { type: FileDatabase$2 }
    ]; };
    return TreeFlatOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_MORE = 'LOAD_MORE';
/**
 * Nested node
 */
var /**
 * Nested node
 */
LoadmoreNode = /** @class */ (function () {
    function LoadmoreNode(item, hasChildren, loadMoreParentItem) {
        if (hasChildren === void 0) { hasChildren = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new rxjs.BehaviorSubject([]);
    }
    Object.defineProperty(LoadmoreNode.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return this.childrenChange.value;
        },
        enumerable: true,
        configurable: true
    });
    return LoadmoreNode;
}());
/**
 * Flat node with expandable and level information
 */
var /**
 * Flat node with expandable and level information
 */
LoadmoreFlatNode = /** @class */ (function () {
    function LoadmoreFlatNode(item, level, expandable, loadMoreParentItem) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
    return LoadmoreFlatNode;
}());
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
var LoadmoreDatabase = /** @class */ (function () {
    function LoadmoreDatabase() {
        this.batchNumber = 5;
        this.dataChange = new rxjs.BehaviorSubject([]);
        this.nodeMap = new Map();
        /**
         * The data
         */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    /**
     * @return {?}
     */
    LoadmoreDatabase.prototype.initialize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
        this.dataChange.next(data);
    };
    /** Expand a node whose children are not loaded */
    /**
     * Expand a node whose children are not loaded
     * @param {?} item
     * @param {?=} onlyFirstTime
     * @return {?}
     */
    LoadmoreDatabase.prototype.loadMore = /**
     * Expand a node whose children are not loaded
     * @param {?} item
     * @param {?=} onlyFirstTime
     * @return {?}
     */
    function (item, onlyFirstTime) {
        var _this = this;
        if (onlyFirstTime === void 0) { onlyFirstTime = false; }
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        /** @type {?} */
        var parent = (/** @type {?} */ (this.nodeMap.get(item)));
        /** @type {?} */
        var children = (/** @type {?} */ (this.dataMap.get(item)));
        if (onlyFirstTime && (/** @type {?} */ (parent.children)).length > 0) {
            return;
        }
        /** @type {?} */
        var newChildrenNumber = (/** @type {?} */ (parent.children)).length + this.batchNumber;
        /** @type {?} */
        var nodes = children.slice(0, newChildrenNumber)
            .map(function (name) { return _this._generateNode(name); });
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    LoadmoreDatabase.prototype._generateNode = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.nodeMap.has(item)) {
            return (/** @type {?} */ (this.nodeMap.get(item)));
        }
        /** @type {?} */
        var result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    };
    LoadmoreDatabase.decorators = [
        { type: core.Injectable },
    ];
    return LoadmoreDatabase;
}());
/**
 * \@title Tree with partially loaded data
 */
var TreeLoadmoreExample = /** @class */ (function () {
    function TreeLoadmoreExample(database) {
        var _this = this;
        this.database = database;
        this.nodeMap = new Map();
        this.getChildren = function (node) { return node.childrenChange; };
        this.transformer = function (node, level) {
            /** @type {?} */
            var existingNode = _this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            /** @type {?} */
            var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            _this.nodeMap.set(node.item, newNode);
            return newNode;
        };
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.isLoadMore = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
        this.treeFlattener = new tree$1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new tree$1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        database.initialize();
    }
    /** Load more nodes from data source */
    /**
     * Load more nodes from data source
     * @param {?} item
     * @return {?}
     */
    TreeLoadmoreExample.prototype.loadMore = /**
     * Load more nodes from data source
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.database.loadMore(item);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeLoadmoreExample.prototype.loadChildren = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.database.loadMore(node.item, true);
    };
    TreeLoadmoreExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tree-loadmore-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button> {{node.item}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" (click)=\"loadChildren(node)\" matTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.item}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\"><button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">Load more...</button></mat-tree-node></mat-tree>",
                    styles: [""],
                    providers: [LoadmoreDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeLoadmoreExample.ctorParameters = function () { return [
        { type: LoadmoreDatabase }
    ]; };
    return TreeLoadmoreExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
var /**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
FileNode$3 = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());
/**
 * The Json tree data in string. The data could be parsed into Json object
 * @type {?}
 */
var TREE_DATA$4 = JSON.stringify({
    Applications: {
        Calendar: 'app',
        Chrome: 'app',
        Webstorm: 'app'
    },
    Documents: {
        angular: {
            src: {
                compiler: 'ts',
                core: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        October: 'pdf',
        November: 'pdf',
        Tutorial: 'html'
    },
    Pictures: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    }
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase$3 = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs.BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileDatabase.prototype.initialize = /**
     * @return {?}
     */
    function () {
        // Parse the string to json object.
        /** @type {?} */
        var dataObject = JSON.parse(TREE_DATA$4);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        /** @type {?} */
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    FileDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            /** @type {?} */
            var value = obj[key];
            /** @type {?} */
            var node = new FileNode$3();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    FileDatabase.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FileDatabase.ctorParameters = function () { return []; };
    return FileDatabase;
}());
/**
 * \@title Tree with nested nodes
 */
var TreeNestedOverviewExample = /** @class */ (function () {
    function TreeNestedOverviewExample(database) {
        var _this = this;
        this.hasNestedChild = function (_, nodeData) { return !nodeData.type; };
        this._getChildren = function (node) { return node.children; };
        this.nestedTreeControl = new tree.NestedTreeControl(this._getChildren);
        this.nestedDataSource = new tree$1.MatTreeNestedDataSource();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    TreeNestedOverviewExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'tree-nested-overview-example',
                    template: "<mat-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\" class=\"example-tree\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle><li class=\"mat-tree-node\"><button mat-icon-button disabled=\"disabled\"></button> {{node.filename}}: {{node.type}}</li></mat-tree-node><mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasNestedChild\"><li><div class=\"mat-tree-node\"><button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\"><mat-icon class=\"mat-icon-rtl-mirror\">{{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.filename}}</div><ul [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\"><ng-container matTreeNodeOutlet></ng-container></ul></li></mat-nested-tree-node></mat-tree>",
                    styles: [".example-tree-invisible { display: none; } .example-tree ul, .example-tree li { margin-top: 0; margin-bottom: 0; list-style-type: none; } "],
                    providers: [FileDatabase$3]
                },] },
    ];
    /** @nocollapse */
    TreeNestedOverviewExample.ctorParameters = function () { return [
        { type: FileDatabase$3 }
    ]; };
    return TreeNestedOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EXAMPLE_COMPONENTS = {
    "autocomplete-auto-active-first-option": {
        "title": "Highlight the first autocomplete option",
        "component": AutocompleteAutoActiveFirstOptionExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "autocomplete-display": {
        "title": "Display value autocomplete",
        "component": AutocompleteDisplayExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "autocomplete-filter": {
        "title": "Filter autocomplete",
        "component": AutocompleteFilterExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "autocomplete-optgroup": {
        "title": "Option groups autocomplete",
        "component": AutocompleteOptgroupExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "autocomplete-overview": {
        "title": "Autocomplete overview",
        "component": AutocompleteOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "autocomplete-simple": {
        "title": "Simple autocomplete",
        "component": AutocompleteSimpleExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "badge-overview": {
        "title": "Badge overview",
        "component": BadgeOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "bottom-sheet-overview": {
        "title": "Bottom Sheet Overview",
        "component": BottomSheetOverviewExample,
        "additionalFiles": [
            "bottom-sheet-overview-example-sheet.html"
        ],
        "selectorName": "BottomSheetOverviewExample, BottomSheetOverviewExampleSheet"
    },
    "button-overview": {
        "title": "Basic buttons",
        "component": ButtonOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "button-toggle-appearance": {
        "title": "Button toggle appearance",
        "component": ButtonToggleAppearanceExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "button-toggle-exclusive": {
        "title": "Exclusive selection",
        "component": ButtonToggleExclusiveExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "button-toggle-overview": {
        "title": "Basic button-toggles",
        "component": ButtonToggleOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "button-types": {
        "title": "Button varieties",
        "component": ButtonTypesExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "card-fancy": {
        "title": "Card with multiple sections",
        "component": CardFancyExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "card-overview": {
        "title": "Basic cards",
        "component": CardOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-axis-lock": {
        "title": "Drag&Drop position locking",
        "component": CdkDragDropAxisLockExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-boundary": {
        "title": "Drag&Drop boundary",
        "component": CdkDragDropBoundaryExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-connected-sorting-group": {
        "title": "Drag&Drop connected sorting group",
        "component": CdkDragDropConnectedSortingGroupExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-connected-sorting": {
        "title": "Drag&Drop connected sorting",
        "component": CdkDragDropConnectedSortingExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-custom-placeholder": {
        "title": "Drag&Drop custom placeholer",
        "component": CdkDragDropCustomPlaceholderExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-custom-preview": {
        "title": "Drag&Drop custom preview",
        "component": CdkDragDropCustomPreviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-disabled": {
        "title": "Drag&Drop disabled",
        "component": CdkDragDropDisabledExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-enter-predicate": {
        "title": "Drag&Drop enter predicate",
        "component": CdkDragDropEnterPredicateExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-handle": {
        "title": "Drag&Drop with a handle",
        "component": CdkDragDropHandleExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-horizontal-sorting": {
        "title": "Drag&Drop horizontal sorting",
        "component": CdkDragDropHorizontalSortingExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-overview": {
        "title": "Basic Drag&Drop",
        "component": CdkDragDropOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-root-element": {
        "title": "Drag&Drop with alternate root element",
        "component": CdkDragDropRootElementExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-drag-drop-sorting": {
        "title": "Drag&Drop sorting",
        "component": CdkDragDropSortingExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-platform-overview": {
        "title": "Platform overview",
        "component": CdkPlatformOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-table-basic-flex": {
        "title": "Basic use of `<cdk-table>` (uses display flex)",
        "component": CdkTableBasicFlexExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-table-basic": {
        "title": "Basic CDK data-table",
        "component": CdkTableBasicExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-tree-flat": {
        "title": "Tree with flat nodes",
        "component": CdkTreeFlatExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-tree-nested": {
        "title": "Tree with nested nodes",
        "component": CdkTreeNestedExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-virtual-scroll-context": {
        "title": "Virtual scroll context variables",
        "component": CdkVirtualScrollContextExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-virtual-scroll-custom-strategy": {
        "title": "Virtual scroll with a custom strategy",
        "component": CdkVirtualScrollCustomStrategyExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-virtual-scroll-data-source": {
        "title": "Virtual scroll with a custom data source",
        "component": CdkVirtualScrollDataSourceExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-virtual-scroll-dl": {
        "title": "Virtual scrolling `<dl>`",
        "component": CdkVirtualScrollDlExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-virtual-scroll-fixed-buffer": {
        "title": "Fixed size virtual scroll with custom buffer parameters",
        "component": CdkVirtualScrollFixedBufferExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-virtual-scroll-horizontal": {
        "title": "Horizontal virtual scroll",
        "component": CdkVirtualScrollHorizontalExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-virtual-scroll-overview": {
        "title": "Basic virtual scroll",
        "component": CdkVirtualScrollOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "cdk-virtual-scroll-template-cache": {
        "title": "Virtual scroll with no template caching",
        "component": CdkVirtualScrollTemplateCacheExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "checkbox-configurable": {
        "title": "Configurable checkbox",
        "component": CheckboxConfigurableExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "checkbox-overview": {
        "title": "Basic checkboxes",
        "component": CheckboxOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "chips-autocomplete": {
        "title": "Chips Autocomplete",
        "component": ChipsAutocompleteExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "chips-input": {
        "title": "Chips with input",
        "component": ChipsInputExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "chips-overview": {
        "title": "Basic chips",
        "component": ChipsOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "chips-stacked": {
        "title": "Stacked chips",
        "component": ChipsStackedExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-api": {
        "title": "Datepicker open method",
        "component": DatepickerApiExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-color": {
        "title": "Datepicker palette colors",
        "component": DatepickerColorExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-custom-header": {
        "title": "Datepicker with custom calendar header",
        "component": DatepickerCustomHeaderExample,
        "additionalFiles": [],
        "selectorName": "DatepickerCustomHeaderExample, ExampleHeader"
    },
    "datepicker-custom-icon": {
        "title": "Datepicker with custom icon",
        "component": DatepickerCustomIconExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-date-class": {
        "title": "Datepicker with custom date classes",
        "component": DatepickerDateClassExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-disabled": {
        "title": "Disabled datepicker",
        "component": DatepickerDisabledExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-events": {
        "title": "Datepicker input and change events",
        "component": DatepickerEventsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-filter": {
        "title": "Datepicker with filter validation",
        "component": DatepickerFilterExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-formats": {
        "title": "Datepicker with custom formats",
        "component": DatepickerFormatsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-locale": {
        "title": "Datepicker with different locale",
        "component": DatepickerLocaleExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-min-max": {
        "title": "Datepicker with min & max validation",
        "component": DatepickerMinMaxExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-moment": {
        "title": "Datepicker that uses Moment.js dates",
        "component": DatepickerMomentExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-overview": {
        "title": "Basic datepicker",
        "component": DatepickerOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-start-view": {
        "title": "Datepicker start date",
        "component": DatepickerStartViewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-touch": {
        "title": "Datepicker touch UI",
        "component": DatepickerTouchExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-value": {
        "title": "Datepicker selected value",
        "component": DatepickerValueExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "datepicker-views-selection": {
        "title": "Datepicker emulating a Year and month picker",
        "component": DatepickerViewsSelectionExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "dialog-content": {
        "title": "Dialog with header, scrollable content and actions",
        "component": DialogContentExample,
        "additionalFiles": [
            "dialog-content-example-dialog.html"
        ],
        "selectorName": "DialogContentExample, DialogContentExampleDialog"
    },
    "dialog-data": {
        "title": "Injecting data when opening a dialog",
        "component": DialogDataExample,
        "additionalFiles": [
            "dialog-data-example-dialog.html"
        ],
        "selectorName": "DialogDataExample, DialogDataExampleDialog"
    },
    "dialog-elements": {
        "title": "Dialog elements",
        "component": DialogElementsExample,
        "additionalFiles": [
            "dialog-elements-example-dialog.html"
        ],
        "selectorName": "DialogElementsExample, DialogElementsExampleDialog"
    },
    "dialog-overview": {
        "title": "Dialog Overview",
        "component": DialogOverviewExample,
        "additionalFiles": [
            "dialog-overview-example-dialog.html"
        ],
        "selectorName": "DialogOverviewExample, DialogOverviewExampleDialog"
    },
    "divider-overview": {
        "title": "Basic divider",
        "component": DividerOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "elevation-overview": {
        "title": "Elevation CSS classes",
        "component": ElevationOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "expansion-expand-collapse-all": {
        "title": "Accordion with expand/collapse all toggles",
        "component": ExpansionExpandCollapseAllExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "expansion-overview": {
        "title": "Basic expansion panel",
        "component": ExpansionOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "expansion-steps": {
        "title": "Expansion panel as accordion",
        "component": ExpansionStepsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "focus-monitor-directives": {
        "title": "Monitoring focus with FocusMonitor",
        "component": FocusMonitorDirectivesExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "focus-monitor-focus-via": {
        "title": "Focusing with a specific FocusOrigin",
        "component": FocusMonitorFocusViaExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "focus-monitor-overview": {
        "title": "Monitoring focus with FocusMonitor",
        "component": FocusMonitorOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "form-field-appearance": {
        "title": "Form field appearance variants",
        "component": FormFieldAppearanceExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "form-field-custom-control": {
        "title": "Form field with custom telephone number input control.",
        "component": FormFieldCustomControlExample,
        "additionalFiles": [
            "example-tel-input-example.html",
            "example-tel-input-example.css"
        ],
        "selectorName": "FormFieldCustomControlExample, MyTelInput"
    },
    "form-field-error": {
        "title": "Form field with error messages",
        "component": FormFieldErrorExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "form-field-hint": {
        "title": "Form field with hints",
        "component": FormFieldHintExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "form-field-label": {
        "title": "Form field with label",
        "component": FormFieldLabelExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "form-field-overview": {
        "title": "Simple form field",
        "component": FormFieldOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "form-field-prefix-suffix": {
        "title": "Form field with prefix & suffix",
        "component": FormFieldPrefixSuffixExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "form-field-theming": {
        "title": "Form field theming",
        "component": FormFieldThemingExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "grid-list-dynamic": {
        "title": "Dynamic grid-list",
        "component": GridListDynamicExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "grid-list-overview": {
        "title": "Basic grid-list",
        "component": GridListOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "icon-overview": {
        "title": "Basic icons",
        "component": IconOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "icon-svg": {
        "title": "SVG icons",
        "component": IconSvgExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "input-clearable": {
        "title": "Input with a clear button",
        "component": InputClearableExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "input-error-state-matcher": {
        "title": "Input with a custom ErrorStateMatcher",
        "component": InputErrorStateMatcherExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "input-errors": {
        "title": "Input with error messages",
        "component": InputErrorsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "input-form": {
        "title": "Inputs in a form",
        "component": InputFormExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "input-hint": {
        "title": "Input with hints",
        "component": InputHintExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "input-overview": {
        "title": "Basic Inputs",
        "component": InputOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "input-prefix-suffix": {
        "title": "Inputs with prefixes and suffixes",
        "component": InputPrefixSuffixExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "list-overview": {
        "title": "Basic list",
        "component": ListOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "list-sections": {
        "title": "List with sections",
        "component": ListSectionsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "list-selection": {
        "title": "List with selection",
        "component": ListSelectionExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "menu-icons": {
        "title": "Menu with icons",
        "component": MenuIconsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "menu-overview": {
        "title": "Basic menu",
        "component": MenuOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "nested-menu": {
        "title": "Nested menu",
        "component": NestedMenuExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "paginator-configurable": {
        "title": "Configurable paginator",
        "component": PaginatorConfigurableExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "paginator-overview": {
        "title": "Paginator",
        "component": PaginatorOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "progress-bar-buffer": {
        "title": "Buffer progress-bar",
        "component": ProgressBarBufferExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "progress-bar-configurable": {
        "title": "Configurable progress-bar",
        "component": ProgressBarConfigurableExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "progress-bar-determinate": {
        "title": "Determinate progress-bar",
        "component": ProgressBarDeterminateExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "progress-bar-indeterminate": {
        "title": "Indeterminate progress-bar",
        "component": ProgressBarIndeterminateExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "progress-bar-query": {
        "title": "Query progress-bar",
        "component": ProgressBarQueryExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "progress-spinner-configurable": {
        "title": "Configurable progress spinner",
        "component": ProgressSpinnerConfigurableExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "progress-spinner-overview": {
        "title": "Basic progress-spinner",
        "component": ProgressSpinnerOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "radio-ng-model": {
        "title": "Radios with ngModel",
        "component": RadioNgModelExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "radio-overview": {
        "title": "Basic radios",
        "component": RadioOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "ripple-overview": {
        "title": "MatRipple basic usage",
        "component": RippleOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-custom-trigger": {
        "title": "Select with custom trigger text",
        "component": SelectCustomTriggerExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-disabled": {
        "title": "Disabled select",
        "component": SelectDisabledExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-error-state-matcher": {
        "title": "Select with a custom ErrorStateMatcher",
        "component": SelectErrorStateMatcherExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-form": {
        "title": "Select in a form",
        "component": SelectFormExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-hint-error": {
        "title": "Select with form field features",
        "component": SelectHintErrorExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-multiple": {
        "title": "Select with multiple selection",
        "component": SelectMultipleExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-no-ripple": {
        "title": "Select with no option ripple",
        "component": SelectNoRippleExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-optgroup": {
        "title": "Select with option groups",
        "component": SelectOptgroupExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-overview": {
        "title": "Basic select",
        "component": SelectOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-panel-class": {
        "title": "Select with custom panel styling",
        "component": SelectPanelClassExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-reset": {
        "title": "Select with reset option",
        "component": SelectResetExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "select-value-binding": {
        "title": "Select with 2-way value binding",
        "component": SelectValueBindingExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-autosize": {
        "title": "Autosize sidenav",
        "component": SidenavAutosizeExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-backdrop": {
        "title": "Drawer with explicit backdrop setting",
        "component": SidenavBackdropExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-disable-close": {
        "title": "Sidenav with custom escape and backdrop click behavior",
        "component": SidenavDisableCloseExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-drawer-overview": {
        "title": "Basic drawer",
        "component": SidenavDrawerOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-fixed": {
        "title": "Fixed sidenav",
        "component": SidenavFixedExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-mode": {
        "title": "Sidenav with configurable mode",
        "component": SidenavModeExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-open-close": {
        "title": "Sidenav open & close behavior",
        "component": SidenavOpenCloseExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-overview": {
        "title": "Basic sidenav",
        "component": SidenavOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-position": {
        "title": "Implicit main content with two sidenavs",
        "component": SidenavPositionExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sidenav-responsive": {
        "title": "Responsive sidenav",
        "component": SidenavResponsiveExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "slide-toggle-configurable": {
        "title": "Configurable slide-toggle",
        "component": SlideToggleConfigurableExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "slide-toggle-forms": {
        "title": "Slide-toggle with forms",
        "component": SlideToggleFormsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "slide-toggle-overview": {
        "title": "Basic slide-toggles",
        "component": SlideToggleOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "slider-configurable": {
        "title": "Configurable slider",
        "component": SliderConfigurableExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "slider-formatting": {
        "title": "Slider with custom thumb label formatting.",
        "component": SliderFormattingExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "slider-overview": {
        "title": "Basic slider",
        "component": SliderOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "snack-bar-component": {
        "title": "Snack-bar with a custom component",
        "component": SnackBarComponentExample,
        "additionalFiles": [
            "snack-bar-component-example-snack.html"
        ],
        "selectorName": "SnackBarComponentExample, PizzaPartyComponent"
    },
    "snack-bar-overview": {
        "title": "Basic snack-bar",
        "component": SnackBarOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "snack-bar-position": {
        "title": "Snack-bar with configurable position",
        "component": SnackBarPositionExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "sort-overview": {
        "title": "Sorting overview",
        "component": SortOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "stepper-editable": {
        "title": "Stepper with editable steps",
        "component": StepperEditableExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "stepper-errors": {
        "title": "Stepper that displays errors in the steps",
        "component": StepperErrorsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "stepper-label-position-bottom": {
        "title": "Stepper label bottom position",
        "component": StepperLabelPositionBottomExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "stepper-optional": {
        "title": "Stepper with optional steps",
        "component": StepperOptionalExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "stepper-overview": {
        "title": "Stepper overview",
        "component": StepperOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "stepper-states": {
        "title": "Stepper with customized states",
        "component": StepperStatesExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "stepper-vertical": {
        "title": "Stepper vertical",
        "component": StepperVerticalExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-align": {
        "title": "Tab group with aligned labels",
        "component": TabGroupAlignExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-animations": {
        "title": "Tab group animations",
        "component": TabGroupAnimationsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-async": {
        "title": "Tab group with asynchronously loading tab contents",
        "component": TabGroupAsyncExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-basic": {
        "title": "Basic use of the tab group",
        "component": TabGroupBasicExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-custom-label": {
        "title": "Using tabs with a custom label template",
        "component": TabGroupCustomLabelExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-dynamic-height": {
        "title": "Tag group with dynamic height based on tab contents",
        "component": TabGroupDynamicHeightExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-dynamic": {
        "title": "Tab group with dynamically changing tabs",
        "component": TabGroupDynamicExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-header-below": {
        "title": "Tab group with the headers on the bottom",
        "component": TabGroupHeaderBelowExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-lazy-loaded": {
        "title": "Tab group where the tab content is loaded lazily (when activated)",
        "component": TabGroupLazyLoadedExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-stretched": {
        "title": "Tab group with stretched labels",
        "component": TabGroupStretchedExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-group-theme": {
        "title": "Customizing the theme options on the tab group",
        "component": TabGroupThemeExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tab-nav-bar-basic": {
        "title": "Basic use of the tab nav bar",
        "component": TabNavBarBasicExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-basic-flex": {
        "title": "Basic use of `<mat-table>` (uses display flex)",
        "component": TableBasicFlexExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-basic": {
        "title": "Basic use of `<table mat-table>`",
        "component": TableBasicExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-dynamic-columns": {
        "title": "Table dynamically changing the columns displayed",
        "component": TableDynamicColumnsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-expandable-rows": {
        "title": "Table with expandable rows",
        "component": TableExpandableRowsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-filtering": {
        "title": "Table with filtering",
        "component": TableFilteringExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-footer-row": {
        "title": "Footer row table",
        "component": TableFooterRowExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-http": {
        "title": "Table retrieving data through HTTP",
        "component": TableHttpExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-multiple-header-footer": {
        "title": "Table with multiple header and footer rows",
        "component": TableMultipleHeaderFooterExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-overview": {
        "title": "Data table with sorting, pagination, and filtering.",
        "component": TableOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-pagination": {
        "title": "Table with pagination",
        "component": TablePaginationExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-row-context": {
        "title": "Table showing each row context properties.",
        "component": TableRowContextExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-selection": {
        "title": "Table with selection",
        "component": TableSelectionExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-simple-column": {
        "title": "Table with a custom column component for easy column definition reuse.",
        "component": TableSimpleColumnExample,
        "additionalFiles": [],
        "selectorName": "TableSimpleColumnExample, SimpleColumn"
    },
    "table-sorting": {
        "title": "Table with sorting",
        "component": TableSortingExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-sticky-columns": {
        "title": "Table with a sticky columns",
        "component": TableStickyColumnsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-sticky-complex-flex": {
        "title": "Flex-layout tables with toggle-able sticky headers, footers, and columns",
        "component": TableStickyComplexFlexExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-sticky-complex": {
        "title": "Tables with toggle-able sticky headers, footers, and columns",
        "component": TableStickyComplexExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-sticky-footer": {
        "title": "Table with a sticky footer",
        "component": TableStickyFooterExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-sticky-header": {
        "title": "Table with sticky header",
        "component": TableStickyHeaderExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "table-wrapped": {
        "title": "Table example that shows how to wrap a table component for definition and behavior reuse.",
        "component": TableWrappedExample,
        "additionalFiles": [
            "wrapper-table.html"
        ],
        "selectorName": "TableWrappedExample, WrapperTable"
    },
    "text-field-autofill-directive": {
        "title": "Monitoring autofill state with cdkAutofill",
        "component": TextFieldAutofillDirectiveExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "text-field-autofill-monitor": {
        "title": "Monitoring autofill state with AutofillMonitor",
        "component": TextFieldAutofillMonitorExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "text-field-autosize-textarea": {
        "title": "Auto-resizing textarea",
        "component": TextFieldAutosizeTextareaExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "toolbar-multirow": {
        "title": "Multi-row toolbar",
        "component": ToolbarMultirowExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "toolbar-overview": {
        "title": "Basic toolbar",
        "component": ToolbarOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tooltip-auto-hide": {
        "title": "Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.",
        "component": TooltipAutoHideExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tooltip-custom-class": {
        "title": "Tooltip that can have a custom class applied.",
        "component": TooltipCustomClassExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tooltip-delay": {
        "title": "Tooltip with a show and hide delay",
        "component": TooltipDelayExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tooltip-disabled": {
        "title": "Tooltip that can be disabled",
        "component": TooltipDisabledExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tooltip-manual": {
        "title": "Tooltip that can be manually shown/hidden.",
        "component": TooltipManualExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tooltip-message": {
        "title": "Tooltip with a changing message",
        "component": TooltipMessageExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tooltip-modified-defaults": {
        "title": "Tooltip with a show and hide delay",
        "component": TooltipModifiedDefaultsExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tooltip-overview": {
        "title": "Basic tooltip",
        "component": TooltipOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tooltip-position": {
        "title": "Tooltip with a custom position",
        "component": TooltipPositionExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tree-checklist": {
        "title": "Tree with checkboxes",
        "component": TreeChecklistExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tree-dynamic": {
        "title": "Tree with dynamic data",
        "component": TreeDynamicExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tree-flat-overview": {
        "title": "Tree with flat nodes",
        "component": TreeFlatOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tree-loadmore": {
        "title": "Tree with partially loaded data",
        "component": TreeLoadmoreExample,
        "additionalFiles": [],
        "selectorName": ""
    },
    "tree-nested-overview": {
        "title": "Tree with nested nodes",
        "component": TreeNestedOverviewExample,
        "additionalFiles": [],
        "selectorName": ""
    }
};
/** @type {?} */
var EXAMPLE_LIST = [
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompleteSimpleExample,
    BadgeOverviewExample,
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
    ButtonOverviewExample,
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonTypesExample,
    CardFancyExample,
    CardOverviewExample,
    CdkDragDropAxisLockExample,
    CdkDragDropBoundaryExample,
    CdkDragDropConnectedSortingGroupExample,
    CdkDragDropConnectedSortingExample,
    CdkDragDropCustomPlaceholderExample,
    CdkDragDropCustomPreviewExample,
    CdkDragDropDisabledExample,
    CdkDragDropEnterPredicateExample,
    CdkDragDropHandleExample,
    CdkDragDropHorizontalSortingExample,
    CdkDragDropOverviewExample,
    CdkDragDropRootElementExample,
    CdkDragDropSortingExample,
    CdkPlatformOverviewExample,
    CdkTableBasicFlexExample,
    CdkTableBasicExample,
    CdkTreeFlatExample,
    CdkTreeNestedExample,
    CdkVirtualScrollContextExample,
    CdkVirtualScrollCustomStrategyExample,
    CdkVirtualScrollDataSourceExample,
    CdkVirtualScrollDlExample,
    CdkVirtualScrollFixedBufferExample,
    CdkVirtualScrollHorizontalExample,
    CdkVirtualScrollOverviewExample,
    CdkVirtualScrollTemplateCacheExample,
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    ChipsAutocompleteExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    DatepickerApiExample,
    DatepickerColorExample,
    DatepickerCustomHeaderExample,
    ExampleHeader,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
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
    DatepickerViewsSelectionExample,
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    DividerOverviewExample,
    ElevationOverviewExample,
    ExpansionExpandCollapseAllExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
    FocusMonitorDirectivesExample,
    FocusMonitorFocusViaExample,
    FocusMonitorOverviewExample,
    FormFieldAppearanceExample,
    FormFieldCustomControlExample,
    MyTelInput,
    FormFieldErrorExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
    GridListDynamicExample,
    GridListOverviewExample,
    IconOverviewExample,
    IconSvgExample,
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
    RippleOverviewExample,
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
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderOverviewExample,
    SnackBarComponentExample,
    PizzaPartyComponent,
    SnackBarOverviewExample,
    SnackBarPositionExample,
    SortOverviewExample,
    StepperEditableExample,
    StepperErrorsExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicHeightExample,
    TabGroupDynamicExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupStretchedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
    TableBasicFlexExample,
    TableBasicExample,
    TableDynamicColumnsExample,
    TableExpandableRowsExample,
    TableFilteringExample,
    TableFooterRowExample,
    TableHttpExample,
    TableMultipleHeaderFooterExample,
    TableOverviewExample,
    TablePaginationExample,
    TableRowContextExample,
    TableSelectionExample,
    TableSimpleColumnExample,
    SimpleColumn,
    TableSortingExample,
    TableStickyColumnsExample,
    TableStickyComplexFlexExample,
    TableStickyComplexExample,
    TableStickyFooterExample,
    TableStickyHeaderExample,
    TableWrappedExample,
    WrapperTable,
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    TooltipAutoHideExample,
    TooltipCustomClassExample,
    TooltipDelayExample,
    TooltipDisabledExample,
    TooltipManualExample,
    TooltipMessageExample,
    TooltipModifiedDefaultsExample,
    TooltipOverviewExample,
    TooltipPositionExample,
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample
];
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: EXAMPLE_LIST,
                    entryComponents: EXAMPLE_LIST,
                    imports: [
                        ExampleMaterialModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        common.CommonModule
                    ]
                },] },
    ];
    return ExampleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var   /**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
ExampleData = /** @class */ (function () {
    function ExampleData(example) {
        var _a;
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        /** @type {?} */
        var exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; });
        this.examplePath = "/assets/stackblitz/examples/" + example + "/";
        this.selectorName = this.indexFilename = example + "-example";
        if (exampleConfig.additionalFiles) {
            (_a = this.exampleFiles).push.apply(_a, exampleConfig.additionalFiles);
        }
        /** @type {?} */
        var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
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
exports.ɵa = AutocompleteAutoActiveFirstOptionExample;
exports.ɵb = AutocompleteDisplayExample;
exports.ɵc = AutocompleteFilterExample;
exports.ɵd = AutocompleteOptgroupExample;
exports.ɵe = AutocompleteOverviewExample;
exports.ɵf = AutocompleteSimpleExample;
exports.ɵg = BadgeOverviewExample;
exports.ɵh = BottomSheetOverviewExample;
exports.ɵi = BottomSheetOverviewExampleSheet;
exports.ɵj = ButtonOverviewExample;
exports.ɵk = ButtonToggleAppearanceExample;
exports.ɵl = ButtonToggleExclusiveExample;
exports.ɵm = ButtonTypesExample;
exports.ɵn = CardOverviewExample;
exports.ɵo = CdkDragDropAxisLockExample;
exports.ɵp = CdkDragDropBoundaryExample;
exports.ɵq = CdkDragDropConnectedSortingGroupExample;
exports.ɵr = CdkDragDropConnectedSortingExample;
exports.ɵs = CdkDragDropCustomPlaceholderExample;
exports.ɵt = CdkDragDropCustomPreviewExample;
exports.ɵu = CdkDragDropDisabledExample;
exports.ɵv = CdkDragDropEnterPredicateExample;
exports.ɵw = CdkDragDropHandleExample;
exports.ɵx = CdkDragDropHorizontalSortingExample;
exports.ɵy = CdkDragDropOverviewExample;
exports.ɵz = CdkDragDropRootElementExample;
exports.ɵba = CdkDragDropSortingExample;
exports.ɵbb = CdkPlatformOverviewExample;
exports.ɵbc = CdkTableBasicFlexExample;
exports.ɵbd = CdkTableBasicExample;
exports.ɵbf = CdkTreeFlatExample;
exports.ɵbe = FileDatabase;
exports.ɵbh = CdkTreeNestedExample;
exports.ɵbg = FileDatabase$1;
exports.ɵbi = CdkVirtualScrollContextExample;
exports.ɵbk = CdkVirtualScrollCustomStrategyExample;
exports.ɵbj = CustomVirtualScrollStrategy;
exports.ɵbl = CdkVirtualScrollDataSourceExample;
exports.ɵbm = CdkVirtualScrollDlExample;
exports.ɵbn = CdkVirtualScrollFixedBufferExample;
exports.ɵbo = CdkVirtualScrollHorizontalExample;
exports.ɵbp = CdkVirtualScrollOverviewExample;
exports.ɵbq = CdkVirtualScrollTemplateCacheExample;
exports.ɵbr = CheckboxConfigurableExample;
exports.ɵbs = CheckboxOverviewExample;
exports.ɵbt = ChipsAutocompleteExample;
exports.ɵbu = ChipsInputExample;
exports.ɵbv = ChipsOverviewExample;
exports.ɵbw = ChipsStackedExample;
exports.ɵbx = DatepickerApiExample;
exports.ɵby = DatepickerColorExample;
exports.ɵbz = DatepickerCustomHeaderExample;
exports.ɵca = ExampleHeader;
exports.ɵcb = DatepickerCustomIconExample;
exports.ɵcc = DatepickerDateClassExample;
exports.ɵcd = DatepickerDisabledExample;
exports.ɵce = DatepickerEventsExample;
exports.ɵcf = DatepickerFilterExample;
exports.ɵch = DatepickerFormatsExample;
exports.ɵcg = MY_FORMATS;
exports.ɵci = DatepickerLocaleExample;
exports.ɵcj = DatepickerMinMaxExample;
exports.ɵck = DatepickerMomentExample;
exports.ɵcl = DatepickerStartViewExample;
exports.ɵcm = DatepickerTouchExample;
exports.ɵcn = DatepickerValueExample;
exports.ɵcp = DatepickerViewsSelectionExample;
exports.ɵco = MY_FORMATS$1;
exports.ɵcq = DialogContentExample;
exports.ɵcr = DialogContentExampleDialog;
exports.ɵcs = DialogDataExample;
exports.ɵct = DialogDataExampleDialog;
exports.ɵcu = DialogElementsExample;
exports.ɵcv = DialogElementsExampleDialog;
exports.ɵcw = DialogOverviewExample;
exports.ɵcx = DialogOverviewExampleDialog;
exports.ɵcy = DividerOverviewExample;
exports.ɵcz = ElevationOverviewExample;
exports.ɵda = ExpansionExpandCollapseAllExample;
exports.ɵdb = ExpansionStepsExample;
exports.ɵdc = FocusMonitorDirectivesExample;
exports.ɵdd = FocusMonitorFocusViaExample;
exports.ɵde = FocusMonitorOverviewExample;
exports.ɵdf = FormFieldAppearanceExample;
exports.ɵdg = FormFieldCustomControlExample;
exports.ɵdh = MyTelInput;
exports.ɵdi = FormFieldErrorExample;
exports.ɵdj = FormFieldHintExample;
exports.ɵdk = FormFieldLabelExample;
exports.ɵdl = FormFieldOverviewExample;
exports.ɵdm = FormFieldPrefixSuffixExample;
exports.ɵdn = FormFieldThemingExample;
exports.ɵdo = GridListDynamicExample;
exports.ɵdp = GridListOverviewExample;
exports.ɵdq = IconOverviewExample;
exports.ɵdr = IconSvgExample;
exports.ɵds = InputClearableExample;
exports.ɵdt = InputErrorStateMatcherExample;
exports.ɵdu = InputErrorsExample;
exports.ɵdv = InputFormExample;
exports.ɵdw = InputHintExample;
exports.ɵdx = InputOverviewExample;
exports.ɵdy = InputPrefixSuffixExample;
exports.ɵdz = ListSectionsExample;
exports.ɵea = ListSelectionExample;
exports.ɵij = ExampleMaterialModule;
exports.ɵeb = MenuIconsExample;
exports.ɵec = MenuOverviewExample;
exports.ɵed = NestedMenuExample;
exports.ɵee = PaginatorConfigurableExample;
exports.ɵef = PaginatorOverviewExample;
exports.ɵeg = ProgressBarBufferExample;
exports.ɵeh = ProgressBarConfigurableExample;
exports.ɵei = ProgressBarDeterminateExample;
exports.ɵej = ProgressBarIndeterminateExample;
exports.ɵek = ProgressBarQueryExample;
exports.ɵel = ProgressSpinnerConfigurableExample;
exports.ɵem = ProgressSpinnerOverviewExample;
exports.ɵen = RadioNgModelExample;
exports.ɵeo = RadioOverviewExample;
exports.ɵep = RippleOverviewExample;
exports.ɵeq = SelectCustomTriggerExample;
exports.ɵer = SelectDisabledExample;
exports.ɵes = SelectErrorStateMatcherExample;
exports.ɵet = SelectFormExample;
exports.ɵeu = SelectHintErrorExample;
exports.ɵev = SelectMultipleExample;
exports.ɵew = SelectNoRippleExample;
exports.ɵex = SelectOptgroupExample;
exports.ɵey = SelectOverviewExample;
exports.ɵez = SelectPanelClassExample;
exports.ɵfa = SelectResetExample;
exports.ɵfb = SelectValueBindingExample;
exports.ɵfc = SidenavAutosizeExample;
exports.ɵfd = SidenavBackdropExample;
exports.ɵfe = SidenavDisableCloseExample;
exports.ɵff = SidenavDrawerOverviewExample;
exports.ɵfg = SidenavFixedExample;
exports.ɵfh = SidenavModeExample;
exports.ɵfi = SidenavOpenCloseExample;
exports.ɵfj = SidenavOverviewExample;
exports.ɵfk = SidenavPositionExample;
exports.ɵfl = SidenavResponsiveExample;
exports.ɵfm = SlideToggleConfigurableExample;
exports.ɵfn = SlideToggleFormsExample;
exports.ɵfo = SlideToggleOverviewExample;
exports.ɵfp = SliderConfigurableExample;
exports.ɵfq = SliderFormattingExample;
exports.ɵfr = SliderOverviewExample;
exports.ɵft = PizzaPartyComponent;
exports.ɵfs = SnackBarComponentExample;
exports.ɵfu = SnackBarOverviewExample;
exports.ɵfv = SnackBarPositionExample;
exports.ɵfw = SortOverviewExample;
exports.ɵfx = StepperEditableExample;
exports.ɵfy = StepperErrorsExample;
exports.ɵfz = StepperLabelPositionBottomExample;
exports.ɵga = StepperOptionalExample;
exports.ɵgb = StepperStatesExample;
exports.ɵgc = StepperVerticalExample;
exports.ɵgd = TabGroupAlignExample;
exports.ɵge = TabGroupAnimationsExample;
exports.ɵgf = TabGroupAsyncExample;
exports.ɵgg = TabGroupBasicExample;
exports.ɵgh = TabGroupCustomLabelExample;
exports.ɵgi = TabGroupDynamicHeightExample;
exports.ɵgj = TabGroupDynamicExample;
exports.ɵgk = TabGroupHeaderBelowExample;
exports.ɵgl = TabGroupLazyLoadedExample;
exports.ɵgm = TabGroupStretchedExample;
exports.ɵgn = TabGroupThemeExample;
exports.ɵgo = TabNavBarBasicExample;
exports.ɵgp = TableBasicFlexExample;
exports.ɵgq = TableBasicExample;
exports.ɵgr = TableDynamicColumnsExample;
exports.ɵgs = TableExpandableRowsExample;
exports.ɵgt = TableFilteringExample;
exports.ɵgu = TableFooterRowExample;
exports.ɵgv = TableHttpExample;
exports.ɵgw = TableMultipleHeaderFooterExample;
exports.ɵgx = TableOverviewExample;
exports.ɵgy = TablePaginationExample;
exports.ɵgz = TableRowContextExample;
exports.ɵha = TableSelectionExample;
exports.ɵhc = SimpleColumn;
exports.ɵhb = TableSimpleColumnExample;
exports.ɵhd = TableSortingExample;
exports.ɵhe = TableStickyColumnsExample;
exports.ɵhf = TableStickyComplexFlexExample;
exports.ɵhg = TableStickyComplexExample;
exports.ɵhh = TableStickyFooterExample;
exports.ɵhi = TableStickyHeaderExample;
exports.ɵhj = TableWrappedExample;
exports.ɵhk = WrapperTable;
exports.ɵhl = TextFieldAutofillDirectiveExample;
exports.ɵhm = TextFieldAutofillMonitorExample;
exports.ɵhn = TextFieldAutosizeTextareaExample;
exports.ɵho = ToolbarOverviewExample;
exports.ɵhp = TooltipAutoHideExample;
exports.ɵhq = TooltipCustomClassExample;
exports.ɵhr = TooltipDelayExample;
exports.ɵhs = TooltipDisabledExample;
exports.ɵht = TooltipManualExample;
exports.ɵhu = TooltipMessageExample;
exports.ɵhw = TooltipModifiedDefaultsExample;
exports.ɵhv = myCustomTooltipDefaults;
exports.ɵhx = TooltipOverviewExample;
exports.ɵhy = TooltipPositionExample;
exports.ɵhz = ChecklistDatabase;
exports.ɵia = TreeChecklistExample;
exports.ɵib = DynamicDatabase;
exports.ɵic = TreeDynamicExample;
exports.ɵid = FileDatabase$2;
exports.ɵie = TreeFlatOverviewExample;
exports.ɵif = LoadmoreDatabase;
exports.ɵig = TreeLoadmoreExample;
exports.ɵih = FileDatabase$3;
exports.ɵii = TreeNestedOverviewExample;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-examples.umd.js.map
