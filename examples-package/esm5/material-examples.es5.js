/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule, Component, Injectable, ElementRef, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Host, Inject, ViewEncapsulation, NgZone, Input } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule, FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatBottomSheet, MatBottomSheetRef, MatCalendar, MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatAccordion, MatFormFieldControl, MatIconRegistry, MatSnackBar, MatTableDataSource, MatPaginator, MatSort, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';
import { FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, startWith, takeUntil, catchError, switchMap, take } from 'rxjs/operators';
import { __extends } from 'tslib';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, of, Subject, merge } from 'rxjs';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource } from '@angular/material/tree';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as _rollupMoment from 'moment';
import _rollupMoment__default, {  } from 'moment';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DomSanitizer } from '@angular/platform-browser';
import '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ExampleMaterialModule = /** @class */ (function () {
    function ExampleMaterialModule() {
    }
    ExampleMaterialModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CdkTableModule,
                        CdkTreeModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatFormFieldModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSlideToggleModule,
                        MatSliderModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatStepperModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule
                    ],
                    exports: [
                        CdkTableModule,
                        CdkTreeModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatFormFieldModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSlideToggleModule,
                        MatSliderModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatStepperModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule
                    ]
                },] },
    ];
    return ExampleMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Highlight the first autocomplete option
 */
var AutocompleteAutoActiveFirstOptionExample = /** @class */ (function () {
    function AutocompleteAutoActiveFirstOptionExample() {
        this.myControl = new FormControl();
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
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(function (val) { return _this.filter(val); }));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    AutocompleteAutoActiveFirstOptionExample.prototype.filter = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(val.toLowerCase()) === 0; });
    };
    AutocompleteAutoActiveFirstOptionExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-auto-active-first-option-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{ option }}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
                },] },
    ];
    return AutocompleteAutoActiveFirstOptionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
/**
 * \@title Display value autocomplete
 */
var AutocompleteDisplayExample = /** @class */ (function () {
    function AutocompleteDisplayExample() {
        this.myControl = new FormControl();
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
            .pipe(startWith(''), map(function (value) { return typeof value === 'string' ? value : value.name; }), map(function (name) { return name ? _this.filter(name) : _this.options.slice(); }));
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
    AutocompleteDisplayExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-display-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{ option.name }}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
                },] },
    ];
    return AutocompleteDisplayExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Filter autocomplete
 */
var AutocompleteFilterExample = /** @class */ (function () {
    function AutocompleteFilterExample() {
        this.myControl = new FormControl();
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
            .pipe(startWith(''), map(function (val) { return _this.filter(val); }));
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
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AutocompleteFilterExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-filter-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{ option }}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
                },] },
    ];
    return AutocompleteFilterExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
        this.stateGroupOptions = /** @type {?} */ ((this.stateForm.get('stateGroup'))).valueChanges.pipe(startWith(''), map(function (val) { return _this.filterGroup(val); }));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    AutocompleteOptgroupExample.prototype.filterGroup = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        if (val) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _this._filter(group.names, val) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    /**
     * @param {?} opt
     * @param {?} val
     * @return {?}
     */
    AutocompleteOptgroupExample.prototype._filter = /**
     * @param {?} opt
     * @param {?} val
     * @return {?}
     */
    function (opt, val) {
        var /** @type {?} */ filterValue = val.toLowerCase();
        return opt.filter(function (item) { return item.toLowerCase().startsWith(filterValue); });
    };
    AutocompleteOptgroupExample.decorators = [
        { type: Component, args: [{
                    template: "<form [formGroup]=\"stateForm\"><mat-form-field><input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\"><mat-autocomplete #autoGroup=\"matAutocomplete\"><mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\"><mat-option *ngFor=\"let name of group.names\" [value]=\"name\">{{ name }}</mat-option></mat-optgroup></mat-autocomplete></mat-form-field></form>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    AutocompleteOptgroupExample.ctorParameters = function () { return [
        { type: FormBuilder, },
    ]; };
    return AutocompleteOptgroupExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Autocomplete overview
 */
var AutocompleteOverviewExample = /** @class */ (function () {
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
        this.stateCtrl = new FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(startWith(''), map(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
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
        { type: Component, args: [{
                    selector: 'autocomplete-overview-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\"><img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\"> <span>{{ state.name }}</span> | <small>Population: {{state.population}}</small></mat-option></mat-autocomplete></mat-form-field><br><mat-slide-toggle [checked]=\"stateCtrl.disabled\" (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">Disable Input?</mat-slide-toggle></form>",
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
var AutocompleteSimpleExample = /** @class */ (function () {
    function AutocompleteSimpleExample() {
        this.myControl = new FormControl();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    AutocompleteSimpleExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-simple-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of options\" [value]=\"option\">{{ option }}</mat-option></mat-autocomplete></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
                },] },
    ];
    return AutocompleteSimpleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Badge overview
 */
var BadgeOverviewExample = /** @class */ (function () {
    function BadgeOverviewExample() {
    }
    BadgeOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'badge-overview-example',
                    template: "<p><span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span></p><p>Button with a badge on the left <button mat-raised-button color=\"primary\" matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">Action</button></p><p>Icon with a badge<mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon></p>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    return BadgeOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'bottom-sheet-overview-example',
                    template: "<p>You have receive a file called \"cat-picture.jpeg\".</p><button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    BottomSheetOverviewExample.ctorParameters = function () { return [
        { type: MatBottomSheet, },
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
        { type: Component, args: [{
                    selector: 'bottom-sheet-overview-example-sheet',
                    template: "<mat-nav-list><a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Keep</span> <span mat-line>Add to a note</span> </a><a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Docs</span> <span mat-line>Embed in a document</span> </a><a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Plus</span> <span mat-line>Share with your friends</span> </a><a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Hangouts</span> <span mat-line>Show to your coworkers</span></a></mat-nav-list>",
                },] },
    ];
    /** @nocollapse */
    BottomSheetOverviewExampleSheet.ctorParameters = function () { return [
        { type: MatBottomSheetRef, },
    ]; };
    return BottomSheetOverviewExampleSheet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic buttons
 */
var ButtonOverviewExample = /** @class */ (function () {
    function ButtonOverviewExample() {
    }
    ButtonOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-overview-example',
                    template: "<button mat-button>Click me!</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ButtonOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Exclusive selection
 */
var ButtonToggleExclusiveExample = /** @class */ (function () {
    function ButtonToggleExclusiveExample() {
    }
    ButtonToggleExclusiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-toggle-exclusive-example',
                    template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\"><mat-button-toggle value=\"left\"><mat-icon>format_align_left</mat-icon></mat-button-toggle><mat-button-toggle value=\"center\"><mat-icon>format_align_center</mat-icon></mat-button-toggle><mat-button-toggle value=\"right\"><mat-icon>format_align_right</mat-icon></mat-button-toggle><mat-button-toggle value=\"justify\" disabled=\"disabled\"><mat-icon>format_align_justify</mat-icon></mat-button-toggle></mat-button-toggle-group><div class=\"example-selected-value\">Selected value: {{group.value}}</div>",
                    styles: [".example-selected-value { margin: 15px 0; } "],
                },] },
    ];
    return ButtonToggleExclusiveExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic button-toggles
 */
var ButtonToggleOverviewExample = /** @class */ (function () {
    function ButtonToggleOverviewExample() {
    }
    ButtonToggleOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-toggle-overview-example',
                    template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\"><mat-button-toggle value=\"bold\">Bold</mat-button-toggle><mat-button-toggle value=\"italic\">Italic</mat-button-toggle><mat-button-toggle value=\"underline\">Underline</mat-button-toggle></mat-button-toggle-group>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ButtonToggleOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Button varieties
 */
var ButtonTypesExample = /** @class */ (function () {
    function ButtonTypesExample() {
    }
    ButtonTypesExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-types-example',
                    template: "<h3>Basic Buttons</h3><div class=\"button-row\"><button mat-button>Basic</button> <button mat-button color=\"primary\">Primary</button> <button mat-button color=\"accent\">Accent</button> <button mat-button color=\"warn\">Warn</button> <button mat-button disabled=\"disabled\">Disabled</button> <a mat-button routerLink=\".\">Link</a></div><h3>Raised Buttons</h3><div class=\"button-row\"><button mat-raised-button>Basic</button> <button mat-raised-button color=\"primary\">Primary</button> <button mat-raised-button color=\"accent\">Accent</button> <button mat-raised-button color=\"warn\">Warn</button> <button mat-raised-button disabled=\"disabled\">Disabled</button> <a mat-raised-button routerLink=\".\">Link</a></div><h3>Icon Buttons</h3><div class=\"button-row\"><button mat-icon-button><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"primary\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"accent\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"warn\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button disabled=\"disabled\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button></div><h3>Fab Buttons</h3><div class=\"button-row\"><button mat-fab>Basic</button> <button mat-fab color=\"primary\">Primary</button> <button mat-fab color=\"accent\">Accent</button> <button mat-fab color=\"warn\">Warn</button> <button mat-fab disabled=\"disabled\">Disabled</button> <button mat-fab><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <a mat-fab routerLink=\".\">Link</a></div><h3>Mini Fab Buttons</h3><div class=\"button-row\"><button mat-mini-fab>Basic</button> <button mat-mini-fab color=\"primary\">Primary</button> <button mat-mini-fab color=\"accent\">Accent</button> <button mat-mini-fab color=\"warn\">Warn</button> <button mat-mini-fab disabled=\"disabled\">Disabled</button> <button mat-mini-fab><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <a mat-mini-fab routerLink=\".\">Link</a></div>",
                    styles: [".example-button-row { display: flex; align-items: center; justify-content: space-around; } "],
                },] },
    ];
    return ButtonTypesExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Card with multiple sections
 */
var CardFancyExample = /** @class */ (function () {
    function CardFancyExample() {
    }
    CardFancyExample.decorators = [
        { type: Component, args: [{
                    selector: 'card-fancy-example',
                    template: "<mat-card class=\"example-card\"><mat-card-header><div mat-card-avatar class=\"example-header-image\"></div><mat-card-title>Shiba Inu</mat-card-title><mat-card-subtitle>Dog Breed</mat-card-subtitle></mat-card-header><img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"><mat-card-content><p>The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.</p></mat-card-content><mat-card-actions><button mat-button>LIKE</button> <button mat-button>SHARE</button></mat-card-actions></mat-card>",
                    styles: [".example-card { max-width: 400px; } .example-header-image { background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); background-size: cover; } "],
                },] },
    ];
    return CardFancyExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic cards
 */
var CardOverviewExample = /** @class */ (function () {
    function CardOverviewExample() {
    }
    CardOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'card-overview-example',
                    template: "<mat-card>Simple card</mat-card>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return CardOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic use of `<cdk-table>` (uses display flex)
 */
var CdkTableBasicFlexExample = /** @class */ (function () {
    function CdkTableBasicFlexExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
    CdkTableBasicFlexExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-table-basic-flex-example',
                    styles: ["/** * Add basic flex styling so that the cells evenly space themselves in the row. */ cdk-row, cdk-header-row, cdk-footer-row { display: flex; } cdk-cell, cdk-header-cell, cdk-footer-cell { flex: 1; } "],
                    template: "<cdk-table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"position\"><cdk-header-cell *cdkHeaderCellDef>No.</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.position}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"name\"><cdk-header-cell *cdkHeaderCellDef>Name</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.name}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"weight\"><cdk-header-cell *cdkHeaderCellDef>Weight</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.weight}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"symbol\"><cdk-header-cell *cdkHeaderCellDef>Symbol</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.symbol}}</cdk-cell></ng-container><cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row><cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row></cdk-table>",
                },] },
    ];
    return CdkTableBasicFlexExample;
}());
var /** @type {?} */ ELEMENT_DATA = [
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
        _this.data = new BehaviorSubject(ELEMENT_DATA);
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
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic CDK data-table
 */
var CdkTableBasicExample = /** @class */ (function () {
    function CdkTableBasicExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$1();
    }
    CdkTableBasicExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-table-basic-example',
                    styles: ["table { width: 100%; } th { text-align: left; } "],
                    template: "<table cdk-table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"position\"><th cdk-header-cell *cdkHeaderCellDef>No.</th><td cdk-cell *cdkCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container cdkColumnDef=\"name\"><th cdk-header-cell *cdkHeaderCellDef>Name</th><td cdk-cell *cdkCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container cdkColumnDef=\"weight\"><th cdk-header-cell *cdkHeaderCellDef>Weight</th><td cdk-cell *cdkCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container cdkColumnDef=\"symbol\"><th cdk-header-cell *cdkHeaderCellDef>Symbol</th><td cdk-cell *cdkCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr><tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    return CdkTableBasicExample;
}());
var /** @type {?} */ ELEMENT_DATA$1 = [
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
        _this.data = new BehaviorSubject(ELEMENT_DATA$1);
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
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    function FileFlatNode() {
    }
    return FileFlatNode;
}());
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
var /** @type {?} */ TREE_DATA = "\n  {\n    \"Documents\": {\n      \"angular\": {\n        \"src\": {\n          \"core\": \"ts\",\n          \"compiler\": \"ts\"\n        }\n      },\n      \"material2\": {\n        \"src\": {\n          \"button\": \"ts\",\n          \"checkbox\": \"ts\",\n          \"input\": \"ts\"\n        }\n      }\n    },\n    \"Downloads\": {\n        \"Tutorial\": \"html\",\n        \"November\": \"pdf\",\n        \"October\": \"pdf\"\n    },\n    \"Pictures\": {\n        \"Sun\": \"png\",\n        \"Woods\": \"jpg\",\n        \"Photo Booth Library\": {\n          \"Contents\": \"dir\",\n          \"Pictures\": \"dir\"\n        }\n    },\n    \"Applications\": {\n        \"Chrome\": \"app\",\n        \"Calendar\": \"app\",\n        \"Webstorm\": \"app\"\n    }\n}";
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new BehaviorSubject([]);
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
        var /** @type {?} */ dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var /** @type {?} */ data = this.buildFileTree(dataObject, 0);
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
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    FileDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    function (value, level) {
        var /** @type {?} */ data = [];
        for (var /** @type {?} */ k in value) {
            var /** @type {?} */ v = value[k];
            var /** @type {?} */ node = new FileNode();
            node.filename = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.type = v;
            }
            data.push(node);
        }
        return data;
    };
    FileDatabase.decorators = [
        { type: Injectable },
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
        this.transformer = function (node, level) {
            var /** @type {?} */ flatNode = new FileFlatNode();
            flatNode.filename = node.filename;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) { return of(node.children); };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    CdkTreeFlatExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-tree-flat-example',
                    template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding class=\"demo-tree-node\"><button mat-icon-button disabled=\"disabled\"></button> {{node.filename}}: {{node.type}}</cdk-tree-node><cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding class=\"demo-tree-node\"><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.filename}}: {{node.type}}</cdk-tree-node></cdk-tree>",
                    styles: [".demo-tree-node { display: flex; align-items: center; } "],
                    providers: [FileDatabase]
                },] },
    ];
    /** @nocollapse */
    CdkTreeFlatExample.ctorParameters = function () { return [
        { type: FileDatabase, },
    ]; };
    return CdkTreeFlatExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 */
var /** @type {?} */ TREE_DATA$1 = "\n  {\n    \"Documents\": {\n      \"angular\": {\n        \"src\": {\n          \"core\": \"ts\",\n          \"compiler\": \"ts\"\n        }\n      },\n      \"material2\": {\n        \"src\": {\n          \"button\": \"ts\",\n          \"checkbox\": \"ts\",\n          \"input\": \"ts\"\n        }\n      }\n    },\n    \"Downloads\": {\n        \"Tutorial\": \"html\",\n        \"November\": \"pdf\",\n        \"October\": \"pdf\"\n    },\n    \"Pictures\": {\n        \"Sun\": \"png\",\n        \"Woods\": \"jpg\",\n        \"Photo Booth Library\": {\n          \"Contents\": \"dir\",\n          \"Pictures\": \"dir\"\n        }\n    },\n    \"Applications\": {\n        \"Chrome\": \"app\",\n        \"Calendar\": \"app\",\n        \"Webstorm\": \"app\"\n    }\n  }";
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase$1 = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new BehaviorSubject([]);
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
        var /** @type {?} */ dataObject = JSON.parse(TREE_DATA$1);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var /** @type {?} */ data = this.buildFileTree(dataObject, 0);
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
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    FileDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    function (value, level) {
        var /** @type {?} */ data = [];
        for (var /** @type {?} */ k in value) {
            var /** @type {?} */ v = value[k];
            var /** @type {?} */ node = new FileNode$1();
            node.filename = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.type = v;
            }
            data.push(node);
        }
        return data;
    };
    FileDatabase.decorators = [
        { type: Injectable },
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
        this._getChildren = function (node) { return of(node.children); };
        this.hasNestedChild = function (_, nodeData) { return !(nodeData.type); };
        this.nestedTreeControl = new NestedTreeControl(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    CdkTreeNestedExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-tree-nested-example',
                    template: "<cdk-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\"><cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\"><button mat-icon-button disabled=\"disabled\"></button> {{node.filename}}: {{node.type}}</cdk-nested-tree-node><cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasNestedChild\" class=\"example-tree-node\"><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.filename}}: {{node.type}}<div [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\"><ng-container cdkTreeNodeOutlet></ng-container></div></cdk-nested-tree-node></cdk-tree>",
                    styles: [".example-tree-invisible { display: none; } .example-tree ul, .example-tree li { margin-top: 0; margin-bottom: 0; list-style-type: none; } .example-tree-node { display: block; padding-left: 40px; } "],
                    providers: [FileDatabase$1]
                },] },
    ];
    /** @nocollapse */
    CdkTreeNestedExample.ctorParameters = function () { return [
        { type: FileDatabase$1, },
    ]; };
    return CdkTreeNestedExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'checkbox-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Checkbox configuration</h2><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox></section><section class=\"example-section\"><label class=\"example-margin\">Align:</label><mat-radio-group [(ngModel)]=\"labelPosition\"><mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\" [(indeterminate)]=\"indeterminate\" [labelPosition]=\"labelPosition\" [disabled]=\"disabled\">I'm a checkbox</mat-checkbox></section></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
                },] },
    ];
    return CheckboxConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic checkboxes
 */
var CheckboxOverviewExample = /** @class */ (function () {
    function CheckboxOverviewExample() {
    }
    CheckboxOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'checkbox-overview-example',
                    template: "<mat-checkbox>Check me!</mat-checkbox>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return CheckboxOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.addOnBlur = false;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl();
        this.fruits = [
            'Lemon',
        ];
        this.allFruits = [
            'Apple',
            'Lemon',
            'Lime',
            'Orange',
            'Strawberry'
        ];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map(function (fruit) { return fruit ? _this.filter(fruit) : _this.allFruits.slice(); }));
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
        var /** @type {?} */ input = event.input;
        var /** @type {?} */ value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push(value.trim());
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
    ChipsAutocompleteExample.prototype.remove = /**
     * @param {?} fruit
     * @return {?}
     */
    function (fruit) {
        var /** @type {?} */ index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ChipsAutocompleteExample.prototype.filter = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.allFruits.filter(function (fruit) {
            return fruit.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
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
    };
    ChipsAutocompleteExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-autocomplete-example',
                    template: "<mat-form-field class=\"demo-chip-list\"><mat-chip-list #chipList><mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(fruit)\">{{fruit}}<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon></mat-chip><input placeholder=\"New fruit...\" #fruitInput [formControl]=\"fruitCtrl\" [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"></mat-chip-list><mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\"><mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">{{ fruit }}</mat-option></mat-autocomplete></mat-form-field>",
                    styles: [".demo-chip-list { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    ChipsAutocompleteExample.ctorParameters = function () { return []; };
    ChipsAutocompleteExample.propDecorators = {
        "fruitInput": [{ type: ViewChild, args: ['fruitInput',] },],
    };
    return ChipsAutocompleteExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        // Enter, comma
        this.separatorKeysCodes = [ENTER, COMMA];
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
        { type: Component, args: [{
                    selector: 'chips-input-example',
                    template: "<mat-form-field class=\"demo-chip-list\"><mat-chip-list #chipList><mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(fruit)\">{{fruit.name}}<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon></mat-chip><input placeholder=\"New fruit...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"></mat-chip-list></mat-form-field>",
                    styles: [".demo-chip-list { width: 100%; } "]
                },] },
    ];
    return ChipsInputExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic chips
 */
var ChipsOverviewExample = /** @class */ (function () {
    function ChipsOverviewExample() {
    }
    ChipsOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-overview-example',
                    template: "<mat-chip-list><mat-chip>One fish</mat-chip><mat-chip>Two fish</mat-chip><mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip><mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip></mat-chip-list>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ChipsOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Stacked chips
 */
var ChipsStackedExample = /** @class */ (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsStackedExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-stacked-example',
                    template: "<mat-chip-list class=\"mat-chip-list-stacked\"><mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\">{{chip.name}}</mat-chip></mat-chip-list>",
                    styles: ["mat-chip { max-width: 200px; } "],
                },] },
    ];
    return ChipsStackedExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker open method
 */
var DatepickerApiExample = /** @class */ (function () {
    function DatepickerApiExample() {
    }
    DatepickerApiExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-api-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker #picker></mat-datepicker></mat-form-field><button mat-raised-button (click)=\"picker.open()\">Open</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerApiExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker palette colors
 */
var DatepickerColorExample = /** @class */ (function () {
    function DatepickerColorExample() {
    }
    DatepickerColorExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-color-example',
                    template: "<mat-form-field color=\"accent\"><mat-label>Inherited calendar color</mat-label><input matInput [matDatepicker]=\"picker1\"><mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle><mat-datepicker #picker1></mat-datepicker></mat-form-field><mat-form-field color=\"accent\"><mat-label>Custom calendar color</mat-label><input matInput [matDatepicker]=\"picker2\"><mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle><mat-datepicker #picker2 color=\"primary\"></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerColorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker with custom calendar header
 */
var DatepickerCustomHeaderExample = /** @class */ (function () {
    function DatepickerCustomHeaderExample() {
        this.exampleHeader = ExampleHeader;
    }
    DatepickerCustomHeaderExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-custom-header-example',
                    template: "<mat-form-field><mat-label>Custom calendar header</mat-label><input matInput [matDatepicker]=\"picker\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker></mat-form-field>",
                    styles: [".example-header { display: flex; align-items: center; padding: 0.5em; } .example-header-label { flex: 1; height: 1em; font-weight: bold; text-align: center; } .example-double-arrow .mat-icon { margin: -22%; } "],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
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
        this.destroyed = new Subject();
        calendar.stateChanges
            .pipe(takeUntil(this.destroyed))
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
        this.calendar.activeDate = mode == 'month' ?
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
        this.calendar.activeDate = mode == 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
    };
    ExampleHeader.decorators = [
        { type: Component, args: [{
                    selector: 'example-header',
                    template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    ExampleHeader.ctorParameters = function () { return [
        { type: MatCalendar, decorators: [{ type: Host },] },
        { type: DateAdapter, },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DATE_FORMATS,] },] },
        { type: ChangeDetectorRef, },
    ]; };
    return ExampleHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker with custom icon
 */
var DatepickerCustomIconExample = /** @class */ (function () {
    function DatepickerCustomIconExample() {
    }
    DatepickerCustomIconExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-custom-icon-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"><mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerCustomIconExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Disabled datepicker
 */
var DatepickerDisabledExample = /** @class */ (function () {
    function DatepickerDisabledExample() {
    }
    DatepickerDisabledExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-disabled-example',
                    template: "<p><mat-form-field><input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled=\"disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle><mat-datepicker #dp1></mat-datepicker></mat-form-field></p><p><mat-form-field><input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled=\"disabled\"></mat-datepicker-toggle><mat-datepicker #dp2></mat-datepicker></mat-form-field></p><p><mat-form-field><input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled=\"disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle><mat-datepicker #dp3 disabled=\"false\"></mat-datepicker></mat-form-field></p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerDisabledExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'datepicker-events-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field><div class=\"example-events\"><div *ngFor=\"let e of events\">{{e}}</div></div>",
                    styles: [".example-events { width: 400px; height: 200px; border: 1px solid #555; overflow: auto; } "],
                },] },
    ];
    return DatepickerEventsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker with filter validation
 */
var DatepickerFilterExample = /** @class */ (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            var /** @type {?} */ day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerFilterExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-filter-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerFilterExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ moment = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var /** @type {?} */ MY_FORMATS = {
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
        this.date = new FormControl(moment());
    }
    DatepickerFormatsExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-formats-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ],
                },] },
    ];
    return DatepickerFormatsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
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
        { type: Component, args: [{
                    selector: 'datepicker-locale-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp></mat-datepicker></mat-form-field><button mat-button (click)=\"french()\">Dynamically switch to French</button>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: ɵ0 },
                    ],
                },] },
    ];
    /** @nocollapse */
    DatepickerLocaleExample.ctorParameters = function () { return [
        { type: DateAdapter, },
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
var DatepickerMinMaxExample = /** @class */ (function () {
    function DatepickerMinMaxExample() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    DatepickerMinMaxExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-min-max-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerMinMaxExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ moment$1 = _rollupMoment__default || _rollupMoment;
var ɵ0$1 = MAT_MOMENT_DATE_FORMATS;
/**
 * \@title Datepicker that uses Moment.js dates
 */
var DatepickerMomentExample = /** @class */ (function () {
    function DatepickerMomentExample() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment$1([2017, 0, 1]));
    }
    DatepickerMomentExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-moment-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: ɵ0$1 },
                    ],
                },] },
    ];
    return DatepickerMomentExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic datepicker
 */
var DatepickerOverviewExample = /** @class */ (function () {
    function DatepickerOverviewExample() {
    }
    DatepickerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-overview-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker start date
 */
var DatepickerStartViewExample = /** @class */ (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    DatepickerStartViewExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-start-view-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerStartViewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker touch UI
 */
var DatepickerTouchExample = /** @class */ (function () {
    function DatepickerTouchExample() {
    }
    DatepickerTouchExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-touch-example',
                    template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker touchUi=\"true\" #picker></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerTouchExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Datepicker selected value
 */
var DatepickerValueExample = /** @class */ (function () {
    function DatepickerValueExample() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
    DatepickerValueExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-value-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle><mat-datepicker #picker1></mat-datepicker></mat-form-field><mat-form-field><input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\" [formControl]=\"serializedDate\"><mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle><mat-datepicker #picker2></mat-datepicker></mat-form-field><mat-form-field><input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\"><mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle><mat-datepicker #picker3></mat-datepicker></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DatepickerValueExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ moment$2 = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var /** @type {?} */ MY_FORMATS$1 = {
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
        this.date = new FormControl(moment$2());
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
        var /** @type {?} */ ctrlValue = this.date.value;
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
        var /** @type {?} */ ctrlValue = this.date.value;
        ctrlValue.month(normlizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    };
    DatepickerViewsSelectionExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-views-selection-example',
                    template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Month and Year\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp startView=\"multi-year\" (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, dp)\" panelClass=\"example-month-picker\"></mat-datepicker></mat-form-field>",
                    styles: [".example-month-picker .mat-calendar-period-button { pointer-events: none; } .example-month-picker .mat-calendar-arrow { display: none; } "],
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                    ],
                },] },
    ];
    return DatepickerViewsSelectionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ dialogRef = this.dialog.open(DialogContentExampleDialog, {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DialogContentExample.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-content-example',
                    template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DialogContentExample.ctorParameters = function () { return [
        { type: MatDialog, },
    ]; };
    return DialogContentExample;
}());
var DialogContentExampleDialog = /** @class */ (function () {
    function DialogContentExampleDialog() {
    }
    DialogContentExampleDialog.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-content-example-dialog',
                    template: "<h2 mat-dialog-title>Install Angular</h2><mat-dialog-content><h3>DEVELOP ACROSS ALL PLATFORMS</h3><p>Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p><h3>SPEED &amp; PERFORMANCE</h3><p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.</p><h3>INCREDIBLE TOOLING</h3><p>Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.</p><h3>LOVED BY MILLIONS</h3><p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.</p></mat-dialog-content><mat-dialog-actions><button mat-button mat-dialog-close>Cancel</button> <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button></mat-dialog-actions>",
                },] },
    ];
    return DialogContentExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'dialog-data-example',
                    template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    /** @nocollapse */
    DialogDataExample.ctorParameters = function () { return [
        { type: MatDialog, },
    ]; };
    return DialogDataExample;
}());
var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-data-example-dialog',
                    template: "<h1 mat-dialog-title>Favorite Animal</h1><div mat-dialog-content>My favorite animal is:<ul><li><span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda</li><li><span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn</li><li><span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion</li></ul></div>",
                },] },
    ];
    /** @nocollapse */
    DialogDataExampleDialog.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] },] },
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
        { type: Component, args: [{
                    selector: 'dialog-elements-example',
                    template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DialogElementsExample.ctorParameters = function () { return [
        { type: MatDialog, },
    ]; };
    return DialogElementsExample;
}());
var DialogElementsExampleDialog = /** @class */ (function () {
    function DialogElementsExampleDialog() {
    }
    DialogElementsExampleDialog.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-elements-example-dialog',
                    template: "<h1 mat-dialog-title>Dialog with elements</h1><div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div><div mat-dialog-actions><button mat-button mat-dialog-close>Close</button></div>",
                },] },
    ];
    return DialogElementsExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'dialog-overview-example',
                    template: "<ol><li><mat-form-field><input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\"></mat-form-field></li><li><button mat-raised-button (click)=\"openDialog()\">Pick one</button></li><li *ngIf=\"animal\">You chose: <i>{{animal}}</i></li></ol>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExample.ctorParameters = function () { return [
        { type: MatDialog, },
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
        { type: Component, args: [{
                    selector: 'dialog-overview-example-dialog',
                    template: "<h1 mat-dialog-title>Hi {{data.name}}</h1><div mat-dialog-content><p>What's your favorite animal?</p><mat-form-field><input matInput [(ngModel)]=\"data.animal\"></mat-form-field></div><div mat-dialog-actions><button mat-button (click)=\"onNoClick()\">No Thanks</button> <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button></div>",
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExampleDialog.ctorParameters = function () { return [
        { type: MatDialogRef, },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] },] },
    ]; };
    return DialogOverviewExampleDialog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic divider
 */
var DividerOverviewExample = /** @class */ (function () {
    function DividerOverviewExample() {
    }
    DividerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'divider-overview-example',
                    template: "<mat-list><mat-list-item>Item 1</mat-list-item><mat-divider></mat-divider><mat-list-item>Item 2</mat-list-item><mat-divider></mat-divider><mat-list-item>Item 3</mat-list-item></mat-list>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return DividerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Elevation CSS classes
 */
var ElevationOverviewExample = /** @class */ (function () {
    function ElevationOverviewExample() {
        this.isActive = false;
    }
    ElevationOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'elevation-overview-example',
                    styles: [".example-container { padding: 16px; margin-bottom: 16px; } "],
                    template: "<div class=\"example-container\" [class.mat-elevation-z2]=\"!isActive\" [class.mat-elevation-z8]=\"isActive\">Example</div><button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>",
                },] },
    ];
    return ElevationOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Accordion with expand/collapse all toggles
 */
var ExpansionExpandCollapseAllExample = /** @class */ (function () {
    function ExpansionExpandCollapseAllExample() {
    }
    ExpansionExpandCollapseAllExample.decorators = [
        { type: Component, args: [{
                    selector: 'expansion-toggle-all-example',
                    template: "<div class=\"example-action-buttons\"><button mat-button (click)=\"accordion.openAll()\">Expand All</button> <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button></div><mat-accordion class=\"example-headers-align\" [multi]=\"true\"><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput type=\"number\" min=\"1\" placeholder=\"Age\"></mat-form-field></mat-expansion-panel><mat-expansion-panel [disabled]=\"true\"><mat-expansion-panel-header><mat-panel-title>Destination</mat-panel-title><mat-panel-description>Type the country name<mat-icon>map</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Country\"></mat-form-field></mat-expansion-panel><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Day of the trip</mat-panel-title><mat-panel-description>Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly=\"readonly\"></mat-form-field><mat-datepicker #picker></mat-datepicker></mat-expansion-panel></mat-accordion>",
                    styles: [".example-action-buttons { padding-bottom: 20px; } .example-headers-align .mat-expansion-panel-header-title, .example-headers-align .mat-expansion-panel-header-description { flex-basis: 0; } .example-headers-align .mat-expansion-panel-header-description { justify-content: space-between; align-items: center; } "]
                },] },
    ];
    /** @nocollapse */
    ExpansionExpandCollapseAllExample.propDecorators = {
        "accordion": [{ type: ViewChild, args: [MatAccordion,] },],
    };
    return ExpansionExpandCollapseAllExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic expansion panel
 */
var ExpansionOverviewExample = /** @class */ (function () {
    function ExpansionOverviewExample() {
        this.panelOpenState = false;
    }
    ExpansionOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'expansion-overview-example',
                    template: "<mat-accordion><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age</mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput placeholder=\"Age\"></mat-form-field></mat-expansion-panel><mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\"><mat-expansion-panel-header><mat-panel-title>Self aware panel</mat-panel-title><mat-panel-description>Currently I am {{panelOpenState ? 'open' : 'closed'}}</mat-panel-description></mat-expansion-panel-header><p>I'm visible because I am open</p></mat-expansion-panel></mat-accordion>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ExpansionOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'expansion-steps-example',
                    template: "<mat-accordion class=\"example-headers-align\"><mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\"><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput type=\"number\" min=\"1\" placeholder=\"Age\"></mat-form-field><mat-action-row><button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button></mat-action-row></mat-expansion-panel><mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\"><mat-expansion-panel-header><mat-panel-title>Destination</mat-panel-title><mat-panel-description>Type the country name<mat-icon>map</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Country\"></mat-form-field><mat-action-row><button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button> <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button></mat-action-row></mat-expansion-panel><mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\"><mat-expansion-panel-header><mat-panel-title>Day of the trip</mat-panel-title><mat-panel-description>Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly=\"readonly\"></mat-form-field><mat-datepicker #picker></mat-datepicker><mat-action-row><button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button> <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button></mat-action-row></mat-expansion-panel></mat-accordion>",
                    styles: [".example-headers-align .mat-expansion-panel-header-title,  .example-headers-align .mat-expansion-panel-header-description { flex-basis: 0; } .example-headers-align .mat-expansion-panel-header-description { justify-content: space-between; align-items: center; } "]
                },] },
    ];
    return ExpansionStepsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    /**
     * @return {?}
     */
    FocusMonitorDirectivesExample.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.run(function () { return _this.cdr.markForCheck(); });
    };
    FocusMonitorDirectivesExample.decorators = [
        { type: Component, args: [{
                    selector: 'focus-monitor-directives-example',
                    template: "<div class=\"example-focus-monitor\"><button cdkMonitorSubtreeFocus (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">Focus Monitored Element ({{elementOrigin}})</button></div><div class=\"example-focus-monitor\"><div cdkMonitorSubtreeFocus (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\"><p>Focus Monitored Subtree ({{subtreeOrigin}})</p><button>Child Button 1</button> <button>Child Button 2</button></div></div>",
                    styles: [".example-focus-monitor { padding: 20px; } .example-focus-monitor .cdk-mouse-focused { background: rgba(255, 0, 0, 0.5); } .example-focus-monitor .cdk-keyboard-focused { background: rgba(0, 255, 0, 0.5); } .example-focus-monitor .cdk-touch-focused { background: rgba(0, 0, 255, 0.5); } .example-focus-monitor .cdk-program-focused { background: rgba(255, 0, 255, 0.5); } "]
                },] },
    ];
    /** @nocollapse */
    FocusMonitorDirectivesExample.ctorParameters = function () { return [
        { type: NgZone, },
        { type: ChangeDetectorRef, },
    ]; };
    return FocusMonitorDirectivesExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.focusMonitor.monitor(this.monitoredEl.nativeElement)
            .subscribe(function (origin) {
            return _this.ngZone.run(function () {
                _this.origin = _this.formatOrigin(origin);
                _this.cdr.markForCheck();
            });
        });
    };
    /**
     * @return {?}
     */
    FocusMonitorFocusViaExample.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.monitoredEl.nativeElement);
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
        { type: Component, args: [{
                    selector: 'focus-monitor-focus-via-example',
                    template: "<div class=\"example-focus-monitor\"><button #monitored>1. Focus Monitored Element ({{origin}})</button> <button #unmonitored>2. Not Monitored</button></div><mat-form-field><mat-label>Simulated focus origin</mat-label><mat-select #simulatedOrigin value=\"mouse\"><mat-option value=\"mouse\">Mouse</mat-option><mat-option value=\"keyboard\">Keyboard</mat-option><mat-option value=\"touch\">Touch</mat-option><mat-option value=\"program\">Programmatic</mat-option></mat-select></mat-form-field><button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">Focus button #1</button> <button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">Focus button #2</button>",
                    styles: [".example-focus-monitor { padding: 20px; } .example-focus-monitor .cdk-mouse-focused { background: rgba(255, 0, 0, 0.5); } .example-focus-monitor .cdk-keyboard-focused { background: rgba(0, 255, 0, 0.5); } .example-focus-monitor .cdk-touch-focused { background: rgba(0, 0, 255, 0.5); } .example-focus-monitor .cdk-program-focused { background: rgba(255, 0, 255, 0.5); } .example-focus-monitor button:focus { box-shadow: 0 0 30px cyan; } "]
                },] },
    ];
    /** @nocollapse */
    FocusMonitorFocusViaExample.ctorParameters = function () { return [
        { type: FocusMonitor, },
        { type: ChangeDetectorRef, },
        { type: NgZone, },
    ]; };
    FocusMonitorFocusViaExample.propDecorators = {
        "monitoredEl": [{ type: ViewChild, args: ['monitored',] },],
    };
    return FocusMonitorFocusViaExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.focusMonitor.monitor(this.element.nativeElement)
            .subscribe(function (origin) {
            return _this.ngZone.run(function () {
                _this.elementOrigin = _this.formatOrigin(origin);
                _this.cdr.markForCheck();
            });
        });
        this.focusMonitor.monitor(this.subtree.nativeElement, true)
            .subscribe(function (origin) {
            return _this.ngZone.run(function () {
                _this.subtreeOrigin = _this.formatOrigin(origin);
                _this.cdr.markForCheck();
            });
        });
    };
    /**
     * @return {?}
     */
    FocusMonitorOverviewExample.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.element.nativeElement);
        this.focusMonitor.stopMonitoring(this.subtree.nativeElement);
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
        { type: Component, args: [{
                    selector: 'focus-monitor-overview-example',
                    template: "<div class=\"example-focus-monitor\"><button #element>Focus Monitored Element ({{elementOrigin}})</button></div><div class=\"example-focus-monitor\"><div #subtree><p>Focus Monitored Subtree ({{subtreeOrigin}})</p><button>Child Button 1</button> <button>Child Button 2</button></div></div>",
                    styles: [".example-focus-monitor { padding: 20px; } .example-focus-monitor .cdk-mouse-focused { background: rgba(255, 0, 0, 0.5); } .example-focus-monitor .cdk-keyboard-focused { background: rgba(0, 255, 0, 0.5); } .example-focus-monitor .cdk-touch-focused { background: rgba(0, 0, 255, 0.5); } .example-focus-monitor .cdk-program-focused { background: rgba(255, 0, 255, 0.5); } "]
                },] },
    ];
    /** @nocollapse */
    FocusMonitorOverviewExample.ctorParameters = function () { return [
        { type: FocusMonitor, },
        { type: ChangeDetectorRef, },
        { type: NgZone, },
    ]; };
    FocusMonitorOverviewExample.propDecorators = {
        "element": [{ type: ViewChild, args: ['element',] },],
        "subtree": [{ type: ViewChild, args: ['subtree',] },],
    };
    return FocusMonitorOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field appearance variants
 */
var FormFieldAppearanceExample = /** @class */ (function () {
    function FormFieldAppearanceExample() {
    }
    FormFieldAppearanceExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-appearance-example',
                    template: "<p><mat-form-field appearance=\"legacy\"><mat-label>Legacy form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p><p><mat-form-field appearance=\"standard\"><mat-label>Standard form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p><p><mat-form-field appearance=\"fill\"><mat-label>Fill form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p><p><mat-form-field appearance=\"outline\"><mat-label>Outline form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    return FormFieldAppearanceExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
        this.stateChanges = new Subject();
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
        function () { return this._required; },
        set: /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            this._required = coerceBooleanProperty(req);
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
         * @param {?} dis
         * @return {?}
         */
        function (dis) {
            this._disabled = coerceBooleanProperty(dis);
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
        { type: Component, args: [{
                    selector: 'my-tel-input',
                    template: "<div [formGroup]=\"parts\"><input class=\"area\" formControlName=\"area\" size=\"3\"> <span>&ndash;</span> <input class=\"exchange\" formControlName=\"exchange\" size=\"3\"> <span>&ndash;</span> <input class=\"subscriber\" formControlName=\"subscriber\" size=\"4\"></div>",
                    styles: ["div { display: flex; } input { border: none; background: none; padding: 0; outline: none; font: inherit; text-align: center; } span { opacity: 0; transition: opacity 200ms; } :host.floating span { opacity: 1; } "],
                    providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
                    host: {
                        '[class.floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                        '[attr.aria-describedby]': 'describedBy',
                    }
                },] },
    ];
    /** @nocollapse */
    MyTelInput.ctorParameters = function () { return [
        { type: FormBuilder, },
        { type: FocusMonitor, },
        { type: ElementRef, },
    ]; };
    MyTelInput.propDecorators = {
        "placeholder": [{ type: Input },],
        "required": [{ type: Input },],
        "disabled": [{ type: Input },],
        "value": [{ type: Input },],
    };
    return MyTelInput;
}());
/**
 * \@title Form field with custom telephone number input control.
 */
var FormFieldCustomControlExample = /** @class */ (function () {
    function FormFieldCustomControlExample() {
    }
    FormFieldCustomControlExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-custom-control-example',
                    template: "\n    <mat-form-field>\n      <my-tel-input placeholder=\"Phone number\" required></my-tel-input>\n      <mat-icon matSuffix>phone</mat-icon>\n      <mat-hint>Include area code</mat-hint>\n    </mat-form-field>\n  "
                },] },
    ];
    return FormFieldCustomControlExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field with error messages
 */
var FormFieldErrorExample = /** @class */ (function () {
    function FormFieldErrorExample() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
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
        { type: Component, args: [{
                    selector: 'form-field-error-example',
                    template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required><mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "]
                },] },
    ];
    return FormFieldErrorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field with hints
 */
var FormFieldHintExample = /** @class */ (function () {
    function FormFieldHintExample() {
    }
    FormFieldHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-hint-example',
                    template: "<div class=\"example-container\"><mat-form-field hintLabel=\"Max 10 characters\"><input matInput #input maxlength=\"10\" placeholder=\"Enter some input\"><mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint></mat-form-field><mat-form-field><mat-select placeholder=\"Select me\"><mat-option value=\"option\">Option</mat-option></mat-select><mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "]
                },] },
    ];
    return FormFieldHintExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'form-field-label-example',
                    template: "<div class=\"example-container\"><form class=\"example-container\" [formGroup]=\"options\"><mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox><div><label>Float label:</label><mat-radio-group formControlName=\"floatLabel\"><mat-radio-button value=\"auto\">Auto</mat-radio-button><mat-radio-button value=\"always\">Always</mat-radio-button><mat-radio-button value=\"never\">Never</mat-radio-button></mat-radio-group></div></form><mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\"><input matInput placeholder=\"Simple placeholder\" required></mat-form-field><mat-form-field [floatLabel]=\"options.value.floatLabel\"><mat-label>Both a label and a placeholder</mat-label><input matInput placeholder=\"Simple placeholder\"></mat-form-field><mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\"><mat-select required><mat-option>-- None --</mat-option><mat-option value=\"option\">Option</mat-option></mat-select><mat-label><mat-icon>favorite</mat-icon><b>Fancy</b> <i>label</i></mat-label></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } .example-container form { margin-bottom: 20px; } .example-container form > * { margin: 5px 0; } .example-container .mat-radio-button { margin: 0 5px; } "]
                },] },
    ];
    /** @nocollapse */
    FormFieldLabelExample.ctorParameters = function () { return [
        { type: FormBuilder, },
    ]; };
    return FormFieldLabelExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Simple form field
 */
var FormFieldOverviewExample = /** @class */ (function () {
    function FormFieldOverviewExample() {
    }
    FormFieldOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-overview-example',
                    template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Input\"></mat-form-field><mat-form-field><textarea matInput placeholder=\"Textarea\"></textarea></mat-form-field><mat-form-field><mat-select placeholder=\"Select\"><mat-option value=\"option\">Option</mat-option></mat-select></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "]
                },] },
    ];
    return FormFieldOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field with prefix & suffix
 */
var FormFieldPrefixSuffixExample = /** @class */ (function () {
    function FormFieldPrefixSuffixExample() {
        this.hide = true;
    }
    FormFieldPrefixSuffixExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-prefix-suffix-example',
                    template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"><mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon></mat-form-field><mat-form-field><input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\"> <span matPrefix>$&nbsp;</span> <span matSuffix>.00</span></mat-form-field></div>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } .example-right-align { text-align: right; } input.example-right-align::-webkit-outer-spin-button, input.example-right-align::-webkit-inner-spin-button { display: none; } input.example-right-align { -moz-appearance: textfield; } "]
                },] },
    ];
    return FormFieldPrefixSuffixExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Form field theming
 */
var FormFieldThemingExample = /** @class */ (function () {
    function FormFieldThemingExample(fb) {
        this.options = fb.group({
            'color': 'primary',
            'fontSize': [16, Validators.min(10)],
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
        { type: Component, args: [{
                    selector: 'form-field-theming-example',
                    template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\"><mat-form-field [color]=\"options.value.color\"><mat-select placeholder=\"Color\" formControlName=\"color\"><mat-option value=\"primary\">Primary</mat-option><mat-option value=\"accent\">Accent</mat-option><mat-option value=\"warn\">Warn</mat-option></mat-select></mat-form-field><mat-form-field [color]=\"options.value.color\"><input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\"><mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error></mat-form-field></form>",
                    styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    FormFieldThemingExample.ctorParameters = function () { return [
        { type: FormBuilder, },
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
        { type: Component, args: [{
                    selector: 'grid-list-dynamic-example',
                    template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\"><mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">{{tile.text}}</mat-grid-tile></mat-grid-list>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return GridListDynamicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic grid-list
 */
var GridListOverviewExample = /** @class */ (function () {
    function GridListOverviewExample() {
    }
    GridListOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'grid-list-overview-example',
                    styles: ["mat-grid-tile { background: lightblue; } "],
                    template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\"><mat-grid-tile>1</mat-grid-tile><mat-grid-tile>2</mat-grid-tile><mat-grid-tile>3</mat-grid-tile><mat-grid-tile>4</mat-grid-tile></mat-grid-list>",
                },] },
    ];
    return GridListOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic icons
 */
var IconOverviewExample = /** @class */ (function () {
    function IconOverviewExample() {
    }
    IconOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'icon-overview-example',
                    template: "<mat-icon>home</mat-icon>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    return IconOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title SVG icons
 */
var IconSvgExample = /** @class */ (function () {
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    IconSvgExample.decorators = [
        { type: Component, args: [{
                    selector: 'icon-svg-example',
                    template: "<mat-icon svgIcon=\"thumbs-up\"></mat-icon>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    IconSvgExample.ctorParameters = function () { return [
        { type: MatIconRegistry, },
        { type: DomSanitizer, },
    ]; };
    return IconSvgExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Input with a clear button
 */
var InputClearableExample = /** @class */ (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    InputClearableExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-clearable-example',
                    template: "<mat-form-field class=\"example-form-field\"><input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"> <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\"><mat-icon>close</mat-icon></button></mat-form-field>",
                    styles: [".example-form-field { width: 200px; } "],
                },] },
    ];
    return InputClearableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
/**
 * \@title Input with a custom ErrorStateMatcher
 */
var InputErrorStateMatcherExample = /** @class */ (function () {
    function InputErrorStateMatcherExample() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    InputErrorStateMatcherExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-error-state-matcher-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"><mat-hint>Errors appear instantly!</mat-hint><mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error><mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputErrorStateMatcherExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Input with error messages
 */
var InputErrorsExample = /** @class */ (function () {
    function InputErrorsExample() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
    }
    InputErrorsExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-errors-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"><mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error><mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputErrorsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Inputs in a form
 */
var InputFormExample = /** @class */ (function () {
    function InputFormExample() {
    }
    InputFormExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-form-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Company (disabled)\" disabled=\"disabled\" value=\"Google\"></mat-form-field><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"First name\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Long Last Name That Will Be Truncated\"></mat-form-field></td></tr></table><p><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea></mat-form-field><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Address 2\"></textarea></mat-form-field></p><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"City\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"State\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\"><mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint></mat-form-field></td></tr></table></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputFormExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Input with hints
 */
var InputHintExample = /** @class */ (function () {
    function InputHintExample() {
    }
    InputHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-hint-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput #message maxlength=\"256\" placeholder=\"Message\"><mat-hint align=\"start\"><strong>Don't disclose personal info</strong></mat-hint><mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputHintExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic Inputs
 */
var InputOverviewExample = /** @class */ (function () {
    function InputOverviewExample() {
    }
    InputOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-overview-example',
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Favorite food\" value=\"Sushi\"></mat-form-field><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Leave a comment\"></textarea></mat-form-field></form>",
                },] },
    ];
    return InputOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Inputs with prefixes and suffixes
 */
var InputPrefixSuffixExample = /** @class */ (function () {
    function InputPrefixSuffixExample() {
    }
    InputPrefixSuffixExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-prefix-suffix-example',
                    template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><span matPrefix>+1 &nbsp;</span> <input type=\"tel\" matInput placeholder=\"Telephone\"><mat-icon matSuffix>mode_edit</mat-icon></mat-form-field></form>",
                    styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                },] },
    ];
    return InputPrefixSuffixExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic list
 */
var ListOverviewExample = /** @class */ (function () {
    function ListOverviewExample() {
    }
    ListOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-overview-example',
                    template: "<mat-list role=\"list\"><mat-list-item role=\"listitem\">Item 1</mat-list-item><mat-list-item role=\"listitem\">Item 2</mat-list-item><mat-list-item role=\"listitem\">Item 3</mat-list-item></mat-list>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ListOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'list-sections-example',
                    styles: [".mat-list-icon { color: rgba(0, 0, 0, 0.54); } "],
                    template: "<mat-list><h3 mat-subheader>Folders</h3><mat-list-item *ngFor=\"let folder of folders\"><mat-icon mat-list-icon>folder</mat-icon><h4 mat-line>{{folder.name}}</h4><p mat-line>{{folder.updated | date}}</p></mat-list-item><mat-divider></mat-divider><h3 mat-subheader>Notes</h3><mat-list-item *ngFor=\"let note of notes\"><mat-icon mat-list-icon>note</mat-icon><h4 mat-line>{{note.name}}</h4><p mat-line>{{note.updated | date}}</p></mat-list-item></mat-list>",
                },] },
    ];
    return ListSectionsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title List with selection
 */
var ListSelectionExample = /** @class */ (function () {
    function ListSelectionExample() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ListSelectionExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-selection-example',
                    styles: ["/** No styles for this example. */ "],
                    template: "<mat-selection-list #shoes><mat-list-option *ngFor=\"let shoe of typesOfShoes\">{{shoe}}</mat-list-option></mat-selection-list><p>Options selected: {{shoes.selectedOptions.selected.length}}</p>",
                },] },
    ];
    return ListSelectionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Menu with icons
 */
var MenuIconsExample = /** @class */ (function () {
    function MenuIconsExample() {
    }
    MenuIconsExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-icons-example',
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button><mat-menu #menu=\"matMenu\"><button mat-menu-item><mat-icon>dialpad</mat-icon><span>Redial</span></button> <button mat-menu-item disabled=\"disabled\"><mat-icon>voicemail</mat-icon><span>Check voicemail</span></button> <button mat-menu-item><mat-icon>notifications_off</mat-icon><span>Disable alerts</span></button></mat-menu>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return MenuIconsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic menu
 */
var MenuOverviewExample = /** @class */ (function () {
    function MenuOverviewExample() {
    }
    MenuOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-overview-example',
                    template: "<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button><mat-menu #menu=\"matMenu\"><button mat-menu-item>Item 1</button> <button mat-menu-item>Item 2</button></mat-menu>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return MenuOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Nested menu
 */
var NestedMenuExample = /** @class */ (function () {
    function NestedMenuExample() {
    }
    NestedMenuExample.decorators = [
        { type: Component, args: [{
                    selector: 'nested-menu-example',
                    template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button><mat-menu #animals=\"matMenu\"><button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button> <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button></mat-menu><mat-menu #vertebrates=\"matMenu\"><button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button> <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button> <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button> <button mat-menu-item>Birds</button> <button mat-menu-item>Mammals</button></mat-menu><mat-menu #invertebrates=\"matMenu\"><button mat-menu-item>Insects</button> <button mat-menu-item>Molluscs</button> <button mat-menu-item>Crustaceans</button> <button mat-menu-item>Corals</button> <button mat-menu-item>Arachnids</button> <button mat-menu-item>Velvet worms</button> <button mat-menu-item>Horseshoe crabs</button></mat-menu><mat-menu #fish=\"matMenu\"><button mat-menu-item>Baikal oilfish</button> <button mat-menu-item>Bala shark</button> <button mat-menu-item>Ballan wrasse</button> <button mat-menu-item>Bamboo shark</button> <button mat-menu-item>Banded killifish</button></mat-menu><mat-menu #amphibians=\"matMenu\"><button mat-menu-item>Sonoran desert toad</button> <button mat-menu-item>Western toad</button> <button mat-menu-item>Arroyo toad</button> <button mat-menu-item>Yosemite toad</button></mat-menu><mat-menu #reptiles=\"matMenu\"><button mat-menu-item>Banded Day Gecko</button> <button mat-menu-item>Banded Gila Monster</button> <button mat-menu-item>Black Tree Monitor</button> <button mat-menu-item>Blue Spiny Lizard</button> <button mat-menu-item disabled=\"disabled\">Velociraptor</button></mat-menu>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    return NestedMenuExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'paginator-configurable-example',
                    template: "<mat-form-field>List length: <input matInput [(ngModel)]=\"length\"></mat-form-field><mat-form-field>Page size: <input matInput [(ngModel)]=\"pageSize\"></mat-form-field><mat-form-field>Page size options: <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"></mat-form-field><mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event\"></mat-paginator><div *ngIf=\"pageEvent\"><h5>Page Change Event Properties</h5><div>List length: {{pageEvent.length}}</div><div>Page size: {{pageEvent.pageSize}}</div><div>Page index: {{pageEvent.pageIndex}}</div></div>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return PaginatorConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Paginator
 */
var PaginatorOverviewExample = /** @class */ (function () {
    function PaginatorOverviewExample() {
    }
    PaginatorOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'paginator-overview-example',
                    template: "<mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return PaginatorOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Buffer progress-bar
 */
var ProgressBarBufferExample = /** @class */ (function () {
    function ProgressBarBufferExample() {
    }
    ProgressBarBufferExample.decorators = [
        { type: Component, args: [{
                    selector: 'progress-bar-buffer-example',
                    template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressBarBufferExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'progress-bar-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Progress bar configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><mat-radio-group [(ngModel)]=\"mode\"><mat-radio-button class=\"example-margin\" value=\"determinate\">Determinate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"buffer\">Buffer</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"query\">Query</mat-radio-button></mat-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\"><label class=\"example-margin\">Progress:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider></section><section class=\"example-section\" *ngIf=\"mode == 'buffer'\"><label class=\"example-margin\">Buffer:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider></section></mat-card-content></mat-card><mat-card><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\"></mat-progress-bar></section></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
                },] },
    ];
    return ProgressBarConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Determinate progress-bar
 */
var ProgressBarDeterminateExample = /** @class */ (function () {
    function ProgressBarDeterminateExample() {
    }
    ProgressBarDeterminateExample.decorators = [
        { type: Component, args: [{
                    selector: 'progress-bar-determinate-example',
                    template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressBarDeterminateExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Indeterminate progress-bar
 */
var ProgressBarIndeterminateExample = /** @class */ (function () {
    function ProgressBarIndeterminateExample() {
    }
    ProgressBarIndeterminateExample.decorators = [
        { type: Component, args: [{
                    selector: 'progress-bar-indeterminate-example',
                    template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressBarIndeterminateExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Query progress-bar
 */
var ProgressBarQueryExample = /** @class */ (function () {
    function ProgressBarQueryExample() {
    }
    ProgressBarQueryExample.decorators = [
        { type: Component, args: [{
                    selector: 'progress-bar-query-example',
                    template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressBarQueryExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'progress-spinner-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Progress spinner configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><mat-radio-group [(ngModel)]=\"mode\"><mat-radio-button class=\"example-margin\" value=\"determinate\">Determinate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</mat-radio-button></mat-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate'\"><label class=\"example-margin\">Progress:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider></section></mat-card-content></mat-card><mat-card><mat-card-content><h2 class=\"example-h2\">Result</h2><mat-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></mat-progress-spinner></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
                },] },
    ];
    return ProgressSpinnerConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic progress-spinner
 */
var ProgressSpinnerOverviewExample = /** @class */ (function () {
    function ProgressSpinnerOverviewExample() {
    }
    ProgressSpinnerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'progress-spinner-overview-example',
                    template: "<mat-spinner></mat-spinner>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ProgressSpinnerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Radios with ngModel
 */
var RadioNgModelExample = /** @class */ (function () {
    function RadioNgModelExample() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    RadioNgModelExample.decorators = [
        { type: Component, args: [{
                    selector: 'radio-ng-model-example',
                    template: "<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\"><mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">{{season}}</mat-radio-button></mat-radio-group><div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>",
                    styles: [".example-radio-group { display: inline-flex; flex-direction: column; } .example-radio-button { margin: 5px; } .example-selected-value { margin: 15px 0; } "],
                },] },
    ];
    return RadioNgModelExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic radios
 */
var RadioOverviewExample = /** @class */ (function () {
    function RadioOverviewExample() {
    }
    RadioOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'radio-overview-example',
                    template: "<mat-radio-group><mat-radio-button value=\"1\">Option 1</mat-radio-button><mat-radio-button value=\"2\">Option 2</mat-radio-button></mat-radio-group>",
                    styles: [".mat-radio-button ~ .mat-radio-button { padding-right: 16px; } "],
                },] },
    ];
    return RadioOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with custom trigger text
 */
var SelectCustomTriggerExample = /** @class */ (function () {
    function SelectCustomTriggerExample() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectCustomTriggerExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-custom-trigger-example',
                    template: "<mat-form-field><mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple=\"multiple\"><mat-select-trigger>{{toppings.value ? toppings.value[0] : ''}} <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">(+{{toppings.value.length - 1}} others)</span></mat-select-trigger><mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option></mat-select></mat-form-field>",
                    styles: [".example-additional-selection { opacity: 0.75; font-size: 0.75em; } "],
                },] },
    ];
    return SelectCustomTriggerExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Disabled select
 */
var SelectDisabledExample = /** @class */ (function () {
    function SelectDisabledExample() {
        this.disableSelect = new FormControl(false);
    }
    SelectDisabledExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-disabled-example',
                    template: "<p><mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox></p><p><mat-form-field><mat-select placeholder=\"Choose an option\" [disabled]=\"disableSelect.value\"><mat-option value=\"option1\">Option 1</mat-option><mat-option value=\"option2\" disabled=\"disabled\">Option 2 (disabled)</mat-option><mat-option value=\"option3\">Option 3</mat-option></mat-select></mat-form-field></p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectDisabledExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
/**
 * \@title Select with a custom ErrorStateMatcher
 */
var SelectErrorStateMatcherExample = /** @class */ (function () {
    function SelectErrorStateMatcherExample() {
        this.selected = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher$1();
    }
    SelectErrorStateMatcherExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-error-state-matcher-example',
                    template: "<mat-form-field><mat-select placeholder=\"Choose one\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\"><mat-option>Clear</mat-option><mat-option value=\"valid\">Valid option</mat-option><mat-option value=\"invalid\">Invalid option</mat-option></mat-select><mat-hint>Errors appear instantly!</mat-hint><mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error><mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">Your selection is invalid</mat-error></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectErrorStateMatcherExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    }
    SelectFormExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-form-example',
                    template: "<form><mat-form-field><mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\"><mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{food.viewValue}}</mat-option></mat-select></mat-form-field><p>Selected value: {{selectedValue}}</p></form>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectFormExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with form field features
 */
var SelectHintErrorExample = /** @class */ (function () {
    function SelectHintErrorExample() {
        this.animalControl = new FormControl('', [Validators.required]);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
    SelectHintErrorExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-hint-error-example',
                    template: "<mat-form-field><mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required><mat-option>--</mat-option><mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">{{animal.name}}</mat-option></mat-select><mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error><mat-hint>{{animalControl.value?.sound}}</mat-hint></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectHintErrorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with multiple selection
 */
var SelectMultipleExample = /** @class */ (function () {
    function SelectMultipleExample() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectMultipleExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-multiple-example',
                    template: "<mat-form-field><mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple=\"multiple\"><mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectMultipleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with no option ripple
 */
var SelectNoRippleExample = /** @class */ (function () {
    function SelectNoRippleExample() {
    }
    SelectNoRippleExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-no-ripple-example',
                    template: "<mat-form-field><mat-select placeholder=\"Select an option\" disableRipple><mat-option value=\"1\">Option 1</mat-option><mat-option value=\"2\">Option 2</mat-option><mat-option value=\"3\">Option 3</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectNoRippleExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with option groups
 */
var SelectOptgroupExample = /** @class */ (function () {
    function SelectOptgroupExample() {
        this.pokemonControl = new FormControl();
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
        { type: Component, args: [{
                    selector: 'select-optgroup-example',
                    template: "<mat-form-field><mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\"><mat-option>-- None --</mat-option><mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\"><mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">{{ pokemon.viewValue }}</mat-option></mat-optgroup></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectOptgroupExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'select-overview-example',
                    template: "<mat-form-field><mat-select placeholder=\"Favorite food\"><mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{ food.viewValue }}</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with custom panel styling
 */
var SelectPanelClassExample = /** @class */ (function () {
    function SelectPanelClassExample() {
        this.panelColor = new FormControl('red');
    }
    SelectPanelClassExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-panel-class-example',
                    template: "<mat-form-field><mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\" panelClass=\"example-panel-{{panelColor.value}}\"><mat-option value=\"red\">Red</mat-option><mat-option value=\"green\">Green</mat-option><mat-option value=\"blue\">Blue</mat-option></mat-select></mat-form-field>",
                    styles: [".example-panel-red .mat-select-content { background: rgba(255, 0, 0, 0.5); } .example-panel-green .mat-select-content { background: rgba(0, 255, 0, 0.5); } .example-panel-blue .mat-select-content { background: rgba(0, 0, 255, 0.5); } "],
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    return SelectPanelClassExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'select-reset-example',
                    template: "<mat-form-field><mat-select placeholder=\"State\"><mat-option>None</mat-option><mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option></mat-select></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectResetExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Select with 2-way value binding
 */
var SelectValueBindingExample = /** @class */ (function () {
    function SelectValueBindingExample() {
        this.selected = 'option2';
    }
    SelectValueBindingExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-value-binding-example',
                    template: "<mat-form-field><mat-select [(value)]=\"selected\"><mat-option>None</mat-option><mat-option value=\"option1\">Option 1</mat-option><mat-option value=\"option2\">Option 2</mat-option><mat-option value=\"option3\">Option 3</mat-option></mat-select></mat-form-field><p>You selected: {{selected}}</p>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SelectValueBindingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Autosize sidenav
 */
var SidenavAutosizeExample = /** @class */ (function () {
    function SidenavAutosizeExample() {
        this.showFiller = false;
    }
    SidenavAutosizeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-autosize-example',
                    template: "<mat-drawer-container class=\"example-container\" autosize><mat-drawer #drawer class=\"example-sidenav\" mode=\"side\"><p>Auto-resizing sidenav</p><p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p><button (click)=\"showFiller = !showFiller\" mat-raised-button>Toggle extra text</button></mat-drawer><div class=\"example-sidenav-content\"><button type=\"button\" mat-button (click)=\"drawer.toggle()\">Toggle sidenav</button></div></mat-drawer-container>",
                    styles: [".example-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-content { display: flex; height: 100%; align-items: center; justify-content: center; } .example-sidenav { padding: 20px; } "],
                },] },
    ];
    return SidenavAutosizeExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Drawer with explicit backdrop setting
 */
var SidenavBackdropExample = /** @class */ (function () {
    function SidenavBackdropExample() {
    }
    SidenavBackdropExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-backdrop-example',
                    template: "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\"><mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer><mat-drawer-content><mat-form-field><mat-label>Sidenav mode</mat-label><mat-select #mode value=\"side\"><mat-option value=\"side\">Side</mat-option><mat-option value=\"over\">Over</mat-option><mat-option value=\"push\">Push</mat-option></mat-select></mat-form-field><mat-form-field><mat-label>Has backdrop</mat-label><mat-select #hasBackdrop><mat-option>Unset</mat-option><mat-option [value]=\"true\">True</mat-option><mat-option [value]=\"false\">False</mat-option></mat-select></mat-form-field><button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button></mat-drawer-content></mat-drawer-container>",
                    styles: [".example-container { width: 400px; height: 200px; margin: 10px; border: 1px solid #555; } "],
                },] },
    ];
    return SidenavBackdropExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'sidenav-disable-close-example',
                    template: "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose><p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p></mat-sidenav><mat-sidenav-content><p><button mat-button (click)=\"sidenav.open()\">Open</button></p><p>Closed due to: {{reason}}</p></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } "],
                },] },
    ];
    /** @nocollapse */
    SidenavDisableCloseExample.propDecorators = {
        "sidenav": [{ type: ViewChild, args: ['sidenav',] },],
    };
    return SidenavDisableCloseExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic drawer
 */
var SidenavDrawerOverviewExample = /** @class */ (function () {
    function SidenavDrawerOverviewExample() {
    }
    SidenavDrawerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-drawer-overview-example',
                    template: "<mat-drawer-container class=\"example-container\"><mat-drawer mode=\"side\" opened=\"true\">Drawer content</mat-drawer><mat-drawer-content>Main content</mat-drawer-content></mat-drawer-container>",
                    styles: [".example-container { width: 400px; height: 200px; margin: 10px; border: 1px solid #555; } "],
                },] },
    ];
    return SidenavDrawerOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Fixed sidenav
 */
var SidenavFixedExample = /** @class */ (function () {
    function SidenavFixedExample(fb) {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.options = fb.group({
            'fixed': false,
            'top': 0,
            'bottom': 0,
        });
    }
    SidenavFixedExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-fixed-example',
                    template: "<ng-container *ngIf=\"shouldRun\"><mat-toolbar class=\"example-header\">Header</mat-toolbar><mat-sidenav-container class=\"example-container\"><mat-sidenav #sidenav mode=\"side\" opened=\"true\" class=\"example-sidenav\" [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\" [fixedBottomGap]=\"options.value.bottom\">{{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav</mat-sidenav><mat-sidenav-content [formGroup]=\"options\"><p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p><p><mat-form-field><input matInput type=\"number\" formControlName=\"top\" placeholder=\"Top gap\"></mat-form-field></p><p><mat-form-field><input matInput type=\"number\" formControlName=\"bottom\" placeholder=\"Bottom gap\"></mat-form-field></p><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p></mat-sidenav-content></mat-sidenav-container><mat-toolbar class=\"example-footer\">Footer</mat-toolbar></ng-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 60px; bottom: 60px; left: 0; right: 0; } .example-sidenav { display: flex; align-items: center; justify-content: center; width: 200px; background: rgba(255, 0, 0, 0.5); } .example-header { position: fixed; top: 0; left: 0; right: 0; } .example-footer { position: fixed; bottom: 0; left: 0; right: 0; } "],
                },] },
    ];
    /** @nocollapse */
    SidenavFixedExample.ctorParameters = function () { return [
        { type: FormBuilder, },
    ]; };
    return SidenavFixedExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Sidenav with configurable mode
 */
var SidenavModeExample = /** @class */ (function () {
    function SidenavModeExample() {
        this.mode = new FormControl('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavModeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-mode-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav [mode]=\"mode.value\"><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p><p><mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\"><label>Mode:</label><mat-radio-button value=\"over\">Over</mat-radio-button><mat-radio-button value=\"side\">Side</mat-radio-button><mat-radio-button value=\"push\">Push</mat-radio-button></mat-radio-group></p></mat-sidenav><mat-sidenav-content><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p><p><mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\"><label>Mode:</label><mat-radio-button value=\"over\">Over</mat-radio-button><mat-radio-button value=\"side\">Side</mat-radio-button><mat-radio-button value=\"push\">Push</mat-radio-button></mat-radio-group></p></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-radio-group { display: block; border: 1px solid #555; margin: 20px; padding: 10px; } "],
                },] },
    ];
    return SidenavModeExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'sidenav-open-close-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\" (closed)=\"events.push('close!')\">Sidenav content</mat-sidenav><mat-sidenav-content><p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p><p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p><p>Events:</p><div class=\"example-events\"><div *ngFor=\"let e of events\">{{e}}</div></div></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-events { width: 300px; height: 200px; overflow: auto; border: 1px solid #555; } "],
                },] },
    ];
    return SidenavOpenCloseExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic sidenav
 */
var SidenavOverviewExample = /** @class */ (function () {
    function SidenavOverviewExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-overview-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav><mat-sidenav-content>Main content</mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #eee; } "],
                },] },
    ];
    return SidenavOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Implicit main content with two sidenavs
 */
var SidenavPositionExample = /** @class */ (function () {
    function SidenavPositionExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-position-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav opened mode=\"side\">Start content</mat-sidenav><mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>Implicit main content</mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } "],
                },] },
    ];
    return SidenavPositionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Responsive sidenav
 */
var SidenavResponsiveExample = /** @class */ (function () {
    function SidenavResponsiveExample(changeDetectorRef, media) {
        this.fillerNav = Array(50).fill(0).map(function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array(50).fill(0).map(function () {
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
        { type: Component, args: [{
                    selector: 'sidenav-responsive-example',
                    template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\"><mat-toolbar color=\"primary\" class=\"example-toolbar\"><button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button><h1 class=\"example-app-name\">Responsive App</h1></mat-toolbar><mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\"><mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\"><mat-nav-list><a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a></mat-nav-list></mat-sidenav><mat-sidenav-content><p *ngFor=\"let content of fillerContent\">{{content}}</p></mat-sidenav-content></mat-sidenav-container></div><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { display: flex; flex-direction: column; position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-is-mobile .example-toolbar { position: fixed; /* Make sure the toolbar will stay on top of the content as it scrolls past. */ z-index: 2; } h1.example-app-name { margin-left: 8px; } .example-sidenav-container { /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */ flex: 1; } .example-is-mobile .example-sidenav-container { /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the `<body>` to be our scrolling element for mobile layouts. */ flex: 1 0 auto; } "],
                },] },
    ];
    /** @nocollapse */
    SidenavResponsiveExample.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
        { type: MediaMatcher, },
    ]; };
    return SidenavResponsiveExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'slide-toggle-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">Slide me!</mat-slide-toggle></section></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } "],
                },] },
    ];
    return SlideToggleConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Slide-toggle with forms
 */
var SlideToggleFormsExample = /** @class */ (function () {
    function SlideToggleFormsExample(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue]
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
        { type: Component, args: [{
                    selector: 'slide-toggle-forms-example',
                    template: "<p>Slide Toggle using a simple NgModel.</p><mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{ isChecked }}</mat-slide-toggle><p>Slide Toggle inside of a Template-driven form</p><form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit(form.value)\" ngNativeValidate><mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle><mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle><button mat-raised-button type=\"submit\">Save Settings</button></form><p>Slide Toggle inside of a Reactive form</p><form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit(formGroup.value)\" ngNativeValidate><mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle><mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle><p>Form Group Status: {{ formGroup.status}}</p><button mat-rasied-button type=\"submit\">Save Settings</button></form>",
                    styles: [".example-form mat-slide-toggle { margin: 8px 0; display: block; } "],
                },] },
    ];
    /** @nocollapse */
    SlideToggleFormsExample.ctorParameters = function () { return [
        { type: FormBuilder, },
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
var SlideToggleOverviewExample = /** @class */ (function () {
    function SlideToggleOverviewExample() {
    }
    SlideToggleOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'slide-toggle-overview-example',
                    template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return SlideToggleOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'slider-configurable-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\"></mat-form-field></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">Auto ticks</mat-checkbox><mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\"><input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\"></mat-form-field></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><mat-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumbLabel]=\"thumbLabel\" [tickInterval]=\"tickInterval\" [(ngModel)]=\"value\" [vertical]=\"vertical\"></mat-slider></mat-card-content></mat-card>",
                    styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } .mat-slider-horizontal { width: 300px; } .mat-slider-vertical { height: 300px; } "],
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    return SliderConfigurableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'slider-formatting-example',
                    template: "<mat-slider thumbLabel [displayWith]=\"formatLabel\" tickInterval=\"1000\" min=\"1\" max=\"100000\"></mat-slider>",
                    styles: ["mat-slider { width: 300px; } "],
                },] },
    ];
    return SliderFormattingExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic slider
 */
var SliderOverviewExample = /** @class */ (function () {
    function SliderOverviewExample() {
    }
    SliderOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'slider-overview-example',
                    template: "<mat-slider></mat-slider>",
                    styles: ["/** No CSS for this example */ mat-slider { width: 300px; } "],
                },] },
    ];
    return SliderOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'snack-bar-component-example',
                    template: "<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pizza party</button>",
                },] },
    ];
    /** @nocollapse */
    SnackBarComponentExample.ctorParameters = function () { return [
        { type: MatSnackBar, },
    ]; };
    return SnackBarComponentExample;
}());
var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-component-example-snack',
                    template: "<span class=\"example-pizza-party\">Pizza party!!! 🍕</span>",
                    styles: [".example-pizza-party { color: hotpink; }"],
                },] },
    ];
    return PizzaPartyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'snack-bar-overview-example',
                    template: "<mat-form-field><input matInput value=\"Disco party!\" placeholder=\"Message\" #message></mat-form-field><mat-form-field><input matInput value=\"Dance\" placeholder=\"Action\" #action></mat-form-field><button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    SnackBarOverviewExample.ctorParameters = function () { return [
        { type: MatSnackBar, },
    ]; };
    return SnackBarOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'snack-bar-position-example',
                    template: "<mat-form-field><mat-select placeholder=\"Horizontal position\" [(value)]=\"horizontalPosition\"><mat-option value=\"start\">Start</mat-option><mat-option value=\"center\">Center</mat-option><mat-option value=\"end\">End</mat-option><mat-option value=\"left\">Left</mat-option><mat-option value=\"right\">Right</mat-option></mat-select></mat-form-field><mat-form-field><mat-select placeholder=\"Vertical position\" [(value)]=\"verticalPosition\"><mat-option value=\"top\">Top</mat-option><mat-option value=\"bottom\">Bottom</mat-option></mat-select></mat-form-field><button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pool party!</button>",
                },] },
    ];
    /** @nocollapse */
    SnackBarPositionExample.ctorParameters = function () { return [
        { type: MatSnackBar, },
    ]; };
    return SnackBarPositionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Sorting overview
 */
var SortOverviewExample = /** @class */ (function () {
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
        { type: Component, args: [{
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
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperEditableExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-editable-example',
                    template: "<button mat-raised-button (click)=\"isEditable = !isEditable\">{{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}</button><mat-horizontal-stepper [linear]=\"true\" #stepper><mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    /** @nocollapse */
    StepperEditableExample.ctorParameters = function () { return [
        { type: FormBuilder, },
    ]; };
    return StepperEditableExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
    };
    StepperOptionalExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-optional-example',
                    template: "<button mat-raised-button (click)=\"isOptional = !isOptional\">{{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}</button><mat-horizontal-stepper [linear]=\"true\" #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    /** @nocollapse */
    StepperOptionalExample.ctorParameters = function () { return [
        { type: FormBuilder, },
    ]; };
    return StepperOptionalExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-overview-example',
                    template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">{{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}</button><mat-horizontal-stepper [linear]=\"isLinear\" #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    /** @nocollapse */
    StepperOverviewExample.ctorParameters = function () { return [
        { type: FormBuilder, },
    ]; };
    return StepperOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic use of `<mat-table>` (uses display flex)
 */
var TableBasicFlexExample = /** @class */ (function () {
    function TableBasicFlexExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$2;
    }
    TableBasicFlexExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-basic-flex-example',
                    styles: ["table { width: 100%; } "],
                    template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    return TableBasicFlexExample;
}());
var /** @type {?} */ ELEMENT_DATA$2 = [
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
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic use of `<table mat-table>`
 */
var TableBasicExample = /** @class */ (function () {
    function TableBasicExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$3;
    }
    TableBasicExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-basic-example',
                    styles: ["table { width: 100%; } "],
                    template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    return TableBasicExample;
}());
var /** @type {?} */ ELEMENT_DATA$3 = [
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
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table dynamically changing the columns displayed
 */
var TableDynamicColumnsExample = /** @class */ (function () {
    function TableDynamicColumnsExample() {
        this.definedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.definedColumns.slice();
        this.data = ELEMENT_DATA$4;
    }
    /**
     * @return {?}
     */
    TableDynamicColumnsExample.prototype.addColumn = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ randomColumn = Math.floor(Math.random() * this.definedColumns.length);
        this.columnsToDisplay.push(this.definedColumns[randomColumn]);
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
        var /** @type {?} */ currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            var /** @type {?} */ randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            var /** @type {?} */ temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    };
    TableDynamicColumnsExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-dynamic-columns-example',
                    styles: ["table { width: 100%; } button { margin: 16px 8px; } "],
                    template: "<button mat-raised-button (click)=\"addColumn()\">Add column</button> <button mat-raised-button (click)=\"removeColumn()\">Remove column</button> <button mat-raised-button (click)=\"shuffle()\">Shuffle</button><table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of definedColumns\"><th mat-header-cell *matHeaderCellDef>{{column}}</th><td mat-cell *matCellDef=\"let element\">{{element[column]}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr><tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr></table>",
                },] },
    ];
    return TableDynamicColumnsExample;
}());
var /** @type {?} */ ELEMENT_DATA$4 = [
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
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table with filtering
 */
var TableFilteringExample = /** @class */ (function () {
    function TableFilteringExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$5);
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
        { type: Component, args: [{
                    selector: 'table-filtering-example',
                    styles: ["/* Structure */ table { width: 100%; } .mat-form-field { font-size: 14px; width: 100%; } "],
                    template: "<mat-form-field><input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"></mat-form-field><table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    return TableFilteringExample;
}());
var /** @type {?} */ ELEMENT_DATA$5 = [
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
 * @suppress {checkTypes} checked by tsc
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
        { type: Component, args: [{
                    selector: 'table-footer-row-example',
                    styles: ["table { width: 100%; } tr.mat-footer-row { font-weight: bold; } "],
                    template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"item\"><th mat-header-cell *matHeaderCellDef>Item</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.item}}</td><td mat-footer-cell *matFooterCellDef>Total</td></ng-container><ng-container matColumnDef=\"cost\"><th mat-header-cell *matHeaderCellDef>Cost</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.cost | currency}}</td><td mat-footer-cell *matFooterCellDef>{{getTotalCost() | currency}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr></table>",
                },] },
    ];
    return TableFooterRowExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table retrieving data through HTTP
 */
var TableHttpExample = /** @class */ (function () {
    function TableHttpExample(http) {
        this.http = http;
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
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap(function () {
            _this.isLoadingResults = true;
            return /** @type {?} */ ((_this.exampleDatabase)).getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
        }), map(function (data) {
            // Flip flag to show that loading has finished.
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data.total_count;
            return data.items;
        }), catchError(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return of([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    TableHttpExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-http-example',
                    styles: ["/* Structure */ .example-container { position: relative; } .example-table-container { position: relative; max-height: 400px; overflow: auto; } table { width: 100%; } .example-loading-shade { position: absolute; top: 0; left: 0; bottom: 56px; right: 0; background: rgba(0, 0, 0, 0.15); z-index: 1; display: flex; align-items: center; justify-content: center; } .example-rate-limit-reached { color: #980000; max-width: 360px; text-align: center; } /* Column Widths */ .mat-column-number, .mat-column-state { max-width: 64px; } .mat-column-created { max-width: 124px; } "],
                    template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\"><mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner><div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">GitHub's API rate limit has been reached. It will be reset in one minute.</div></div><div class=\"example-table-container\"><table mat-table [dataSource]=\"data\" class=\"example-table\" matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\"><ng-container matColumnDef=\"number\"><th mat-header-cell *matHeaderCellDef>#</th><td mat-cell *matCellDef=\"let row\">{{ row.number }}</td></ng-container><ng-container matColumnDef=\"title\"><th mat-header-cell *matHeaderCellDef>Title</th><td mat-cell *matCellDef=\"let row\">{{ row.title }}</td></ng-container><ng-container matColumnDef=\"state\"><th mat-header-cell *matHeaderCellDef>State</th><td mat-cell *matCellDef=\"let row\">{{ row.state }}</td></ng-container><ng-container matColumnDef=\"created\"><th mat-header-cell *matHeaderCellDef mat-sort-header disableClear=\"true\">Created</th><td mat-cell *matCellDef=\"let row\">{{ row.created_at | date }}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table></div><mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator></div>",
                },] },
    ];
    /** @nocollapse */
    TableHttpExample.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    TableHttpExample.propDecorators = {
        "paginator": [{ type: ViewChild, args: [MatPaginator,] },],
        "sort": [{ type: ViewChild, args: [MatSort,] },],
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
 * \@title Native `<table>` that only applies the Material styles
 */
var TableNativeOnlyExample = /** @class */ (function () {
    function TableNativeOnlyExample() {
        this.elements = [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        ];
    }
    TableNativeOnlyExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-native-only-example',
                    styles: ["table { width: 100%; } "],
                    template: "<table class=\"mat-table mat-elevation-z8\"><thead><tr class=\"mat-header-row\"><th class=\"mat-header-cell\">No.</th><th class=\"mat-header-cell\">Name</th><th class=\"mat-header-cell\">Weight</th><th class=\"mat-header-cell\">Symbol</th></tr></thead><tbody><tr class=\"mat-row\" *ngFor=\"let element of elements\"><td class=\"mat-cell\">{{element.position}}</td><td class=\"mat-cell\">{{element.name}}</td><td class=\"mat-cell\">{{element.weight}}</td><td class=\"mat-cell\">{{element.symbol}}</td></tr></tbody></table>",
                },] },
    ];
    return TableNativeOnlyExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Data table with sorting, pagination, and filtering.
 */
var TableOverviewExample = /** @class */ (function () {
    function TableOverviewExample() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        var /** @type {?} */ users = [];
        for (var /** @type {?} */ i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
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
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    TableOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-overview-example',
                    styles: ["table { width: 100%; } .mat-form-field { font-size: 14px; width: 100%; } td, th { width: 25%; } "],
                    template: "<mat-form-field><input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"></mat-form-field><div class=\"mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\" matSort><ng-container matColumnDef=\"id\"><th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th><td mat-cell *matCellDef=\"let row\">{{row.id}}</td></ng-container><ng-container matColumnDef=\"progress\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Progress</th><td mat-cell *matCellDef=\"let row\">{{row.progress}}%</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th><td mat-cell *matCellDef=\"let row\">{{row.name}}</td></ng-container><ng-container matColumnDef=\"color\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Color</th><td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table><mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator></div>",
                },] },
    ];
    /** @nocollapse */
    TableOverviewExample.ctorParameters = function () { return []; };
    TableOverviewExample.propDecorators = {
        "paginator": [{ type: ViewChild, args: [MatPaginator,] },],
        "sort": [{ type: ViewChild, args: [MatSort,] },],
    };
    return TableOverviewExample;
}());
/**
 * Builds and returns a new User.
 * @param {?} id
 * @return {?}
 */
function createNewUser(id) {
    var /** @type {?} */ name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
/**
 * Constants used to fill up our data base.
 */
var /** @type {?} */ COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var /** @type {?} */ NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table with pagination
 */
var TablePaginationExample = /** @class */ (function () {
    function TablePaginationExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$6);
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
        { type: Component, args: [{
                    selector: 'table-pagination-example',
                    styles: ["table { width: 100%; } "],
                    template: "<div class=\"mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table><mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator></div>",
                },] },
    ];
    /** @nocollapse */
    TablePaginationExample.propDecorators = {
        "paginator": [{ type: ViewChild, args: [MatPaginator,] },],
    };
    return TablePaginationExample;
}());
var /** @type {?} */ ELEMENT_DATA$6 = [
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
 * \@title Table showing each row context properties.
 */
var TableRowContextExample = /** @class */ (function () {
    function TableRowContextExample() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
    TableRowContextExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-row-context-example',
                    styles: ["table { width: 100%; } "],
                    template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"$implicit\"><th mat-header-cell *matHeaderCellDef>$implicit</th><td mat-cell *matCellDef=\"let data\">{{data}}</td></ng-container><ng-container matColumnDef=\"index\"><th mat-header-cell *matHeaderCellDef>index</th><td mat-cell *matCellDef=\"let index = index\">{{index}}</td></ng-container><ng-container matColumnDef=\"count\"><th mat-header-cell *matHeaderCellDef>count</th><td mat-cell *matCellDef=\"let count = count\">{{count}}</td></ng-container><ng-container matColumnDef=\"first\"><th mat-header-cell *matHeaderCellDef>first</th><td mat-cell *matCellDef=\"let first = first\">{{first}}</td></ng-container><ng-container matColumnDef=\"last\"><th mat-header-cell *matHeaderCellDef>last</th><td mat-cell *matCellDef=\"let last = last\">{{last}}</td></ng-container><ng-container matColumnDef=\"even\"><th mat-header-cell *matHeaderCellDef>even</th><td mat-cell *matCellDef=\"let even = even\">{{even}}</td></ng-container><ng-container matColumnDef=\"odd\"><th mat-header-cell *matHeaderCellDef>odd</th><td mat-cell *matCellDef=\"let odd = odd\">{{odd}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    return TableRowContextExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table with selection
 */
var TableSelectionExample = /** @class */ (function () {
    function TableSelectionExample() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$7);
        this.selection = new SelectionModel(true, []);
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
        { type: Component, args: [{
                    selector: 'table-selection-example',
                    styles: ["table { width: 100%; } "],
                    template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"select\"><th mat-header-cell *matHeaderCellDef><mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></mat-checkbox></th><td mat-cell *matCellDef=\"let row\"><mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"></mat-checkbox></td></ng-container><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></tr></table>",
                },] },
    ];
    return TableSelectionExample;
}());
var /** @type {?} */ ELEMENT_DATA$7 = [
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
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Table with sorting
 */
var TableSortingExample = /** @class */ (function () {
    function TableSortingExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$8);
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
        { type: Component, args: [{
                    selector: 'table-sorting-example',
                    styles: ["table { width: 100%; } th.mat-sort-header-sorted { color: black; } "],
                    template: "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef mat-sort-header>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
                },] },
    ];
    /** @nocollapse */
    TableSortingExample.propDecorators = {
        "sort": [{ type: ViewChild, args: [MatSort,] },],
    };
    return TableSortingExample;
}());
var /** @type {?} */ ELEMENT_DATA$8 = [
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
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic tabs
 */
var TabsOverviewExample = /** @class */ (function () {
    function TabsOverviewExample() {
    }
    TabsOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'tabs-overview-example',
                    template: "<mat-tab-group><mat-tab label=\"Tab 1\">Content 1</mat-tab><mat-tab label=\"Tab 2\">Content 2</mat-tab></mat-tab-group>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return TabsOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Complex Example
 */
var TabsTemplateLabelExample = /** @class */ (function () {
    function TabsTemplateLabelExample() {
    }
    TabsTemplateLabelExample.decorators = [
        { type: Component, args: [{
                    selector: 'tabs-template-label-example',
                    template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Tabs with text labels</h2><mat-tab-group class=\"demo-tab-group\"><mat-tab label=\"Tab 1\"><div class=\"demo-tab-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.</div></mat-tab><mat-tab label=\"Tab 2\"><div class=\"demo-tab-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.</div></mat-tab><mat-tab label=\"Tab 3\" disabled=\"disabled\">No content</mat-tab><mat-tab label=\"Tab 4\"><div class=\"demo-tab-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.</div></mat-tab><mat-tab label=\"Tab 5\">No content</mat-tab><mat-tab label=\"Tab 6\">No content</mat-tab></mat-tab-group></mat-card-content></mat-card><mat-card><mat-card-content><h2 class=\"example-h2\">Tabs with icon labels</h2><mat-tab-group class=\"demo-tab-group\"><mat-tab label=\"Tab 1\"><ng-template mat-tab-label><mat-icon>security</mat-icon></ng-template><div class=\"demo-tab-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.</div></mat-tab><mat-tab label=\"Tab 2\"><ng-template mat-tab-label><mat-icon>attach_file</mat-icon></ng-template><div class=\"demo-tab-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.</div></mat-tab><mat-tab label=\"Tab 3\" disabled=\"disabled\"><ng-template mat-tab-label><mat-icon>block</mat-icon></ng-template>No content</mat-tab><mat-tab label=\"Tab 4\"><ng-template mat-tab-label><mat-icon>loop</mat-icon></ng-template><div class=\"demo-tab-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.</div></mat-tab><mat-tab label=\"Tab 5\"><ng-template mat-tab-label><mat-icon>build</mat-icon></ng-template>No content</mat-tab><mat-tab label=\"Tab 6\"><ng-template mat-tab-label><mat-icon>thumb_down</mat-icon></ng-template>No content</mat-tab></mat-tab-group></mat-card-content></mat-card>",
                    styles: [".demo-tab-group { border: 1px solid #e8e8e8; } .demo-tab-content { padding: 16px; } "]
                },] },
    ];
    return TabsTemplateLabelExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Monitoring autofill state with cdkAutofill
 */
var TextFieldAutofillDirectiveExample = /** @class */ (function () {
    function TextFieldAutofillDirectiveExample() {
    }
    TextFieldAutofillDirectiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'text-field-autofill-directive-example',
                    template: "<form><mat-form-field><mat-label>First name</mat-label><input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\"><mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint></mat-form-field><mat-form-field><mat-label>Last name</mat-label><input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\"><mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint></mat-form-field><button mat-raised-button>Submit</button></form>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return TextFieldAutofillDirectiveExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.autofill.monitor(this.firstName.nativeElement)
            .subscribe(function (e) { return _this.firstNameAutofilled = e.isAutofilled; });
        this.autofill.monitor(this.lastName.nativeElement)
            .subscribe(function (e) { return _this.lastNameAutofilled = e.isAutofilled; });
    };
    /**
     * @return {?}
     */
    TextFieldAutofillMonitorExample.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.autofill.stopMonitoring(this.firstName.nativeElement);
        this.autofill.stopMonitoring(this.lastName.nativeElement);
    };
    TextFieldAutofillMonitorExample.decorators = [
        { type: Component, args: [{
                    selector: 'text-field-autofill-monitor-example',
                    template: "<form><mat-form-field><mat-label>First name</mat-label><input matInput #first><mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint></mat-form-field><mat-form-field><mat-label>Last name</mat-label><input matInput #last><mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint></mat-form-field><button mat-raised-button>Submit</button></form>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    TextFieldAutofillMonitorExample.ctorParameters = function () { return [
        { type: AutofillMonitor, },
    ]; };
    TextFieldAutofillMonitorExample.propDecorators = {
        "firstName": [{ type: ViewChild, args: ['first', { read: ElementRef },] },],
        "lastName": [{ type: ViewChild, args: ['last', { read: ElementRef },] },],
    };
    return TextFieldAutofillMonitorExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.ngZone.onStable.pipe(take(1))
            .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
    };
    TextFieldAutosizeTextareaExample.decorators = [
        { type: Component, args: [{
                    selector: 'text-field-autosize-textarea-example',
                    template: "<mat-form-field><mat-label>Font size</mat-label><mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\"><mat-option value=\"10px\">10px</mat-option><mat-option value=\"12px\">12px</mat-option><mat-option value=\"14px\">14px</mat-option><mat-option value=\"16px\">16px</mat-option><mat-option value=\"18px\">18px</mat-option><mat-option value=\"20px\">20px</mat-option></mat-select></mat-form-field><mat-form-field [style.fontSize]=\"fontSize.value\"><mat-label>Autosize textarea</mat-label><textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"2\" cdkAutosizeMaxRows=\"5\"></textarea></mat-form-field>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    /** @nocollapse */
    TextFieldAutosizeTextareaExample.ctorParameters = function () { return [
        { type: NgZone, },
    ]; };
    TextFieldAutosizeTextareaExample.propDecorators = {
        "autosize": [{ type: ViewChild, args: ['autosize',] },],
    };
    return TextFieldAutosizeTextareaExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Multi-row toolbar
 */
var ToolbarMultirowExample = /** @class */ (function () {
    function ToolbarMultirowExample() {
    }
    ToolbarMultirowExample.decorators = [
        { type: Component, args: [{
                    selector: 'toolbar-multirow-example',
                    template: "<mat-toolbar color=\"primary\"><mat-toolbar-row><span>Custom Toolbar</span></mat-toolbar-row><mat-toolbar-row><span>Second Line</span> <span class=\"example-spacer\"></span><mat-icon class=\"example-icon\">verified_user</mat-icon></mat-toolbar-row><mat-toolbar-row><span>Third Line</span> <span class=\"example-spacer\"></span><mat-icon class=\"example-icon\">favorite</mat-icon><mat-icon class=\"example-icon\">delete</mat-icon></mat-toolbar-row></mat-toolbar>",
                    styles: [".example-icon { padding: 0 14px; } .example-spacer { flex: 1 1 auto; } "],
                },] },
    ];
    return ToolbarMultirowExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic toolbar
 */
var ToolbarOverviewExample = /** @class */ (function () {
    function ToolbarOverviewExample() {
    }
    ToolbarOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'toolbar-overview-example',
                    template: "<mat-toolbar>My App</mat-toolbar>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return ToolbarOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Tooltip with a show and hide delay
 */
var TooltipDelayExample = /** @class */ (function () {
    function TooltipDelayExample() {
    }
    TooltipDelayExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-delay-example',
                    template: "<button mat-raised-button matTooltip=\"Tooltip!\" matTooltipShowDelay=\"1000\">My tooltip waits one second to show</button> <button mat-raised-button matTooltip=\"Tooltip!\" matTooltipHideDelay=\"2000\">My tooltip waits two seconds to hide</button>",
                    styles: ["button { margin: 8px; } "],
                },] },
    ];
    return TooltipDelayExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Tooltip that can be manually shown/hidden.
 */
var TooltipManualExample = /** @class */ (function () {
    function TooltipManualExample() {
    }
    TooltipManualExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-manual-example',
                    template: "<button mat-raised-button (click)=\"tooltip.show()\">Show tooltip</button> <span matTooltip=\"This is the tooltip message\" #tooltip=\"matTooltip\">I have a tooltip</span>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return TooltipManualExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Custom options the configure the tooltip's default show/hide delays.
 */
var /** @type {?} */ myCustomTooltipDefaults = {
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
        { type: Component, args: [{
                    selector: 'tooltip-modified-defaults-example',
                    template: "<button mat-raised-button matTooltip=\"By default, I delay\">Button with delay-default tooltip</button>",
                    styles: ["/** No CSS for this example */ "],
                    providers: [
                        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                    ],
                },] },
    ];
    return TooltipModifiedDefaultsExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Basic tooltip
 */
var TooltipOverviewExample = /** @class */ (function () {
    function TooltipOverviewExample() {
    }
    TooltipOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-overview-example',
                    template: "<span matTooltip=\"Tooltip!\">I have a tooltip</span>",
                    styles: ["/** No CSS for this example */ "],
                },] },
    ];
    return TooltipOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@title Tooltip with custom position
 */
var TooltipPositionExample = /** @class */ (function () {
    function TooltipPositionExample() {
        this.position = 'before';
    }
    TooltipPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-position-example',
                    template: "<div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\"><span>Show tooltip</span><mat-form-field><mat-select class=\"example-select\" [(ngModel)]=\"position\"><mat-option value=\"before\">Before</mat-option><mat-option value=\"after\">After</mat-option><mat-option value=\"above\">Above</mat-option><mat-option value=\"below\">Below</mat-option><mat-option value=\"left\">Left</mat-option><mat-option value=\"right\">Right</mat-option></mat-select></mat-form-field></div>",
                    styles: [".example-tooltip-host { display: inline-flex; align-items: center; margin: 50px; } .example-select { margin: 0 10px; } "],
                },] },
    ];
    return TooltipPositionExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 */
var /** @type {?} */ TREE_DATA$2 = {
    'Reminders': [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ],
    'Groceries': {
        'Organic eggs': null,
        'Protein Powder': null,
        'Almond Meal flour': null,
        'Fruits': {
            'Apple': null,
            'Orange': null,
            'Berries': ['Blueberry', 'Raspberry']
        }
    }
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new BehaviorSubject([]);
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
        var /** @type {?} */ data = this.buildFileTree(TREE_DATA$2, 0);
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
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    ChecklistDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    function (value, level) {
        var /** @type {?} */ data = [];
        for (var /** @type {?} */ k in value) {
            var /** @type {?} */ v = value[k];
            var /** @type {?} */ node = new TodoItemNode();
            node.item = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.item = v;
            }
            data.push(node);
        }
        return data;
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
        var /** @type {?} */ child = /** @type {?} */ ({ item: name });
        if (parent.children) {
            parent.children.push(child);
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
        { type: Injectable },
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
        this.checklistSelection = new SelectionModel(true /* multiple */);
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) {
            return of(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var /** @type {?} */ flatNode = _this.nestedNodeMap.has(node) && /** @type {?} */ ((_this.nestedNodeMap.get(node))).item === node.item
                ? /** @type {?} */ ((_this.nestedNodeMap.get(node)))
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected */
    /**
     * Whether all the descendants of the node are selected
     * @param {?} node
     * @return {?}
     */
    TreeChecklistExample.prototype.descendantsAllSelected = /**
     * Whether all the descendants of the node are selected
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        var /** @type {?} */ descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
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
        var /** @type {?} */ descendants = this.treeControl.getDescendants(node);
        var /** @type {?} */ result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
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
        this.checklistSelection.toggle(node);
        var /** @type {?} */ descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
        var _a, _b;
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
        var /** @type {?} */ parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(/** @type {?} */ ((parentNode)), '');
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
        var /** @type {?} */ nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(/** @type {?} */ ((nestedNode)), itemValue);
    };
    TreeChecklistExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-checklist-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button><mat-checkbox class=\"checklist-leaf-node\" [checked]=\"checklistSelection.isSelected(node)\" (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox></mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button><mat-form-field><input matInput #itemValue placeholder=\"New item...\"></mat-form-field><button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button></mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding><button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\"><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button><mat-checkbox [checked]=\"descendantsAllSelected(node)\" [indeterminate]=\"descendantsPartiallySelected(node)\" (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox><button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button></mat-tree-node></mat-tree>",
                    styles: [""],
                    providers: [ChecklistDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeChecklistExample.ctorParameters = function () { return [
        { type: ChecklistDatabase, },
    ]; };
    return TreeChecklistExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
var  /**
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
        this.dataChange = new BehaviorSubject([]);
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
        /** @type {?} */ ((this.treeControl.expansionModel.onChange)).subscribe(function (change) {
            if ((/** @type {?} */ (change)).added ||
                (/** @type {?} */ (change)).removed) {
                _this.handleTreeControl(/** @type {?} */ (change));
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(function () { return _this.data; }));
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
            change.removed.reverse().forEach(function (node) { return _this.toggleNode(node, false); });
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
        var /** @type {?} */ children = this.database.getChildren(node.item);
        var /** @type {?} */ index = this.data.indexOf(node);
        if (!children || index < 0) {
            // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            if (expand) {
                var /** @type {?} */ nodes = children.map(function (name) {
                    return new DynamicFlatNode(name, node.level + 1, _this.database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, [index + 1, 0].concat(nodes));
            }
            else {
                _this.data.splice(index + 1, children.length);
            }
            // notify the change
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
            var _a;
        }, 1000);
    };
    DynamicDataSource.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DynamicDataSource.ctorParameters = function () { return [
        { type: FlatTreeControl, },
        { type: DynamicDatabase, },
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
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
    TreeDynamicExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-dynamic-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button> {{node.item}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.item}}<mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"example-tree-progress-bar\"></mat-progress-bar></mat-tree-node></mat-tree>",
                    styles: [".example-tree-progress-bar { margin-left: 30px; } "],
                    providers: [DynamicDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeDynamicExample.ctorParameters = function () { return [
        { type: DynamicDatabase, },
    ]; };
    return TreeDynamicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    function FileFlatNode() {
    }
    return FileFlatNode;
}());
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
var /** @type {?} */ TREE_DATA$3 = "\n  {\n    \"Documents\": {\n      \"angular\": {\n        \"src\": {\n          \"core\": \"ts\",\n          \"compiler\": \"ts\"\n        }\n      },\n      \"material2\": {\n        \"src\": {\n          \"button\": \"ts\",\n          \"checkbox\": \"ts\",\n          \"input\": \"ts\"\n        }\n      }\n    },\n    \"Downloads\": {\n        \"Tutorial\": \"html\",\n        \"November\": \"pdf\",\n        \"October\": \"pdf\"\n    },\n    \"Pictures\": {\n        \"Sun\": \"png\",\n        \"Woods\": \"jpg\",\n        \"Photo Booth Library\": {\n          \"Contents\": \"dir\",\n          \"Pictures\": \"dir\"\n        }\n    },\n    \"Applications\": {\n        \"Chrome\": \"app\",\n        \"Calendar\": \"app\",\n        \"Webstorm\": \"app\"\n    }\n}";
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase$2 = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new BehaviorSubject([]);
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
        var /** @type {?} */ dataObject = JSON.parse(TREE_DATA$3);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var /** @type {?} */ data = this.buildFileTree(dataObject, 0);
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
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    FileDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    function (value, level) {
        var /** @type {?} */ data = [];
        for (var /** @type {?} */ k in value) {
            var /** @type {?} */ v = value[k];
            var /** @type {?} */ node = new FileNode$2();
            node.filename = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.type = v;
            }
            data.push(node);
        }
        return data;
    };
    FileDatabase.decorators = [
        { type: Injectable },
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
            var /** @type {?} */ flatNode = new FileFlatNode$1();
            flatNode.filename = node.filename;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) {
            return of(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    TreeFlatOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-flat-overview-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button> {{node.filename}} : {{node.type}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding><button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\"><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.filename}} : {{node.type}}</mat-tree-node></mat-tree>",
                    styles: [""],
                    providers: [FileDatabase$2]
                },] },
    ];
    /** @nocollapse */
    TreeFlatOverviewExample.ctorParameters = function () { return [
        { type: FileDatabase$2, },
    ]; };
    return TreeFlatOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LOAD_MORE = 'LOAD_MORE';
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
        this.childrenChange = new BehaviorSubject([]);
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
        this.dataChange = new BehaviorSubject([]);
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
        var /** @type {?} */ data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
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
        var /** @type {?} */ parent = /** @type {?} */ ((this.nodeMap.get(item)));
        var /** @type {?} */ children = /** @type {?} */ ((this.dataMap.get(item)));
        if (onlyFirstTime && /** @type {?} */ ((parent.children)).length > 0) {
            return;
        }
        var /** @type {?} */ newChildrenNumber = /** @type {?} */ ((parent.children)).length + this.batchNumber;
        var /** @type {?} */ nodes = children.slice(0, newChildrenNumber)
            .map(function (name) { return _this._generateNode(name); });
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    LoadmoreDatabase.prototype._generateNode = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.nodeMap.has(item)) {
            return /** @type {?} */ ((this.nodeMap.get(item)));
        }
        var /** @type {?} */ result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    };
    LoadmoreDatabase.decorators = [
        { type: Injectable },
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
            if (_this.nodeMap.has(node.item)) {
                return /** @type {?} */ ((_this.nodeMap.get(node.item)));
            }
            var /** @type {?} */ newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            _this.nodeMap.set(node.item, newNode);
            return newNode;
        };
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.isLoadMore = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
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
        { type: Component, args: [{
                    selector: 'tree-loadmore-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button> {{node.item}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" (click)=\"loadChildren(node)\" matTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.item}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\"><button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">Load more...</button></mat-tree-node></mat-tree>",
                    styles: [""],
                    providers: [LoadmoreDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeLoadmoreExample.ctorParameters = function () { return [
        { type: LoadmoreDatabase, },
    ]; };
    return TreeLoadmoreExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 */
var /** @type {?} */ TREE_DATA$4 = "\n  {\n    \"Documents\": {\n      \"angular\": {\n        \"src\": {\n          \"core\": \"ts\",\n          \"compiler\": \"ts\"\n        }\n      },\n      \"material2\": {\n        \"src\": {\n          \"button\": \"ts\",\n          \"checkbox\": \"ts\",\n          \"input\": \"ts\"\n        }\n      }\n    },\n    \"Downloads\": {\n        \"Tutorial\": \"html\",\n        \"November\": \"pdf\",\n        \"October\": \"pdf\"\n    },\n    \"Pictures\": {\n        \"Sun\": \"png\",\n        \"Woods\": \"jpg\",\n        \"Photo Booth Library\": {\n          \"Contents\": \"dir\",\n          \"Pictures\": \"dir\"\n        }\n    },\n    \"Applications\": {\n        \"Chrome\": \"app\",\n        \"Calendar\": \"app\",\n        \"Webstorm\": \"app\"\n    }\n  }";
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase$3 = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new BehaviorSubject([]);
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
        var /** @type {?} */ dataObject = JSON.parse(TREE_DATA$4);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var /** @type {?} */ data = this.buildFileTree(dataObject, 0);
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
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    FileDatabase.prototype.buildFileTree = /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    function (value, level) {
        var /** @type {?} */ data = [];
        for (var /** @type {?} */ k in value) {
            var /** @type {?} */ v = value[k];
            var /** @type {?} */ node = new FileNode$3();
            node.filename = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.type = v;
            }
            data.push(node);
        }
        return data;
    };
    FileDatabase.decorators = [
        { type: Injectable },
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
        this._getChildren = function (node) { return of(node.children); };
        this.hasNestedChild = function (_, nodeData) { return !(nodeData.type); };
        this.nestedTreeControl = new NestedTreeControl(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    TreeNestedOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-nested-overview-example',
                    template: "<mat-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\" class=\"example-tree\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle><li class=\"mat-tree-node\"><button mat-icon-button disabled=\"disabled\"></button> {{node.filename}}: {{node.type}}</li></mat-tree-node><mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasNestedChild\"><li><div class=\"mat-tree-node\"><button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\"><mat-icon class=\"mat-icon-rtl-mirror\">{{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.filename}}</div><ul [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\"><ng-container matTreeNodeOutlet></ng-container></ul></li></mat-nested-tree-node></mat-tree>",
                    styles: [".example-tree-invisible { display: none; } .example-tree ul, .example-tree li { margin-top: 0; margin-bottom: 0; list-style-type: none; } "],
                    providers: [FileDatabase$3]
                },] },
    ];
    /** @nocollapse */
    TreeNestedOverviewExample.ctorParameters = function () { return [
        { type: FileDatabase$3, },
    ]; };
    return TreeNestedOverviewExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ EXAMPLE_COMPONENTS = {
    'autocomplete-auto-active-first-option': {
        title: 'Highlight the first autocomplete option',
        component: AutocompleteAutoActiveFirstOptionExample
    },
    'autocomplete-display': {
        title: 'Display value autocomplete',
        component: AutocompleteDisplayExample
    },
    'autocomplete-filter': {
        title: 'Filter autocomplete',
        component: AutocompleteFilterExample
    },
    'autocomplete-optgroup': {
        title: 'Option groups autocomplete',
        component: AutocompleteOptgroupExample
    },
    'autocomplete-overview': {
        title: 'Autocomplete overview',
        component: AutocompleteOverviewExample
    },
    'autocomplete-simple': {
        title: 'Simple autocomplete',
        component: AutocompleteSimpleExample
    },
    'badge-overview': {
        title: 'Badge overview',
        component: BadgeOverviewExample
    },
    'bottom-sheet-overview': {
        title: 'Bottom Sheet Overview',
        component: BottomSheetOverviewExample,
        additionalFiles: ["bottom-sheet-overview-example-sheet.html"],
        selectorName: 'BottomSheetOverviewExample, BottomSheetOverviewExampleSheet'
    },
    'button-overview': {
        title: 'Basic buttons',
        component: ButtonOverviewExample
    },
    'button-toggle-exclusive': {
        title: 'Exclusive selection',
        component: ButtonToggleExclusiveExample
    },
    'button-toggle-overview': {
        title: 'Basic button-toggles',
        component: ButtonToggleOverviewExample
    },
    'button-types': {
        title: 'Button varieties',
        component: ButtonTypesExample
    },
    'card-fancy': {
        title: 'Card with multiple sections',
        component: CardFancyExample
    },
    'card-overview': {
        title: 'Basic cards',
        component: CardOverviewExample
    },
    'cdk-table-basic-flex': {
        title: 'Basic use of `<cdk-table>` (uses display flex)',
        component: CdkTableBasicFlexExample
    },
    'cdk-table-basic': {
        title: 'Basic CDK data-table',
        component: CdkTableBasicExample
    },
    'cdk-tree-flat': {
        title: 'Tree with flat nodes',
        component: CdkTreeFlatExample
    },
    'cdk-tree-nested': {
        title: 'Tree with nested nodes',
        component: CdkTreeNestedExample
    },
    'checkbox-configurable': {
        title: 'Configurable checkbox',
        component: CheckboxConfigurableExample
    },
    'checkbox-overview': {
        title: 'Basic checkboxes',
        component: CheckboxOverviewExample
    },
    'chips-autocomplete': {
        title: 'Chips Autocomplete',
        component: ChipsAutocompleteExample
    },
    'chips-input': {
        title: 'Chips with input',
        component: ChipsInputExample
    },
    'chips-overview': {
        title: 'Basic chips',
        component: ChipsOverviewExample
    },
    'chips-stacked': {
        title: 'Stacked chips',
        component: ChipsStackedExample
    },
    'datepicker-api': {
        title: 'Datepicker open method',
        component: DatepickerApiExample
    },
    'datepicker-color': {
        title: 'Datepicker palette colors',
        component: DatepickerColorExample
    },
    'datepicker-custom-header': {
        title: 'Datepicker with custom calendar header',
        component: DatepickerCustomHeaderExample,
        selectorName: 'DatepickerCustomHeaderExample, ExampleHeader'
    },
    'datepicker-custom-icon': {
        title: 'Datepicker with custom icon',
        component: DatepickerCustomIconExample
    },
    'datepicker-disabled': {
        title: 'Disabled datepicker',
        component: DatepickerDisabledExample
    },
    'datepicker-events': {
        title: 'Datepicker input and change events',
        component: DatepickerEventsExample
    },
    'datepicker-filter': {
        title: 'Datepicker with filter validation',
        component: DatepickerFilterExample
    },
    'datepicker-formats': {
        title: 'Datepicker with custom formats',
        component: DatepickerFormatsExample
    },
    'datepicker-locale': {
        title: 'Datepicker with different locale',
        component: DatepickerLocaleExample
    },
    'datepicker-min-max': {
        title: 'Datepicker with min & max validation',
        component: DatepickerMinMaxExample
    },
    'datepicker-moment': {
        title: 'Datepicker that uses Moment.js dates',
        component: DatepickerMomentExample
    },
    'datepicker-overview': {
        title: 'Basic datepicker',
        component: DatepickerOverviewExample
    },
    'datepicker-start-view': {
        title: 'Datepicker start date',
        component: DatepickerStartViewExample
    },
    'datepicker-touch': {
        title: 'Datepicker touch UI',
        component: DatepickerTouchExample
    },
    'datepicker-value': {
        title: 'Datepicker selected value',
        component: DatepickerValueExample
    },
    'datepicker-views-selection': {
        title: 'Datepicker emulating a Year and month picker',
        component: DatepickerViewsSelectionExample
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
    'divider-overview': {
        title: 'Basic divider',
        component: DividerOverviewExample
    },
    'elevation-overview': {
        title: 'Elevation CSS classes',
        component: ElevationOverviewExample
    },
    'expansion-expand-collapse-all': {
        title: 'Accordion with expand/collapse all toggles',
        component: ExpansionExpandCollapseAllExample
    },
    'expansion-overview': {
        title: 'Basic expansion panel',
        component: ExpansionOverviewExample
    },
    'expansion-steps': {
        title: 'Expansion panel as accordion',
        component: ExpansionStepsExample
    },
    'focus-monitor-directives': {
        title: 'Monitoring focus with FocusMonitor',
        component: FocusMonitorDirectivesExample
    },
    'focus-monitor-focus-via': {
        title: 'Focusing with a specific FocusOrigin',
        component: FocusMonitorFocusViaExample
    },
    'focus-monitor-overview': {
        title: 'Monitoring focus with FocusMonitor',
        component: FocusMonitorOverviewExample
    },
    'form-field-appearance': {
        title: 'Form field appearance variants',
        component: FormFieldAppearanceExample
    },
    'form-field-custom-control': {
        title: 'Form field with custom telephone number input control.',
        component: FormFieldCustomControlExample,
        additionalFiles: ["form-field-custom-control-example.html"],
        selectorName: 'FormFieldCustomControlExample, MyTelInput'
    },
    'form-field-error': {
        title: 'Form field with error messages',
        component: FormFieldErrorExample
    },
    'form-field-hint': {
        title: 'Form field with hints',
        component: FormFieldHintExample
    },
    'form-field-label': {
        title: 'Form field with label',
        component: FormFieldLabelExample
    },
    'form-field-overview': {
        title: 'Simple form field',
        component: FormFieldOverviewExample
    },
    'form-field-prefix-suffix': {
        title: 'Form field with prefix & suffix',
        component: FormFieldPrefixSuffixExample
    },
    'form-field-theming': {
        title: 'Form field theming',
        component: FormFieldThemingExample
    },
    'grid-list-dynamic': {
        title: 'Dynamic grid-list',
        component: GridListDynamicExample
    },
    'grid-list-overview': {
        title: 'Basic grid-list',
        component: GridListOverviewExample
    },
    'icon-overview': {
        title: 'Basic icons',
        component: IconOverviewExample
    },
    'icon-svg': {
        title: 'SVG icons',
        component: IconSvgExample
    },
    'input-clearable': {
        title: 'Input with a clear button',
        component: InputClearableExample
    },
    'input-error-state-matcher': {
        title: 'Input with a custom ErrorStateMatcher',
        component: InputErrorStateMatcherExample
    },
    'input-errors': {
        title: 'Input with error messages',
        component: InputErrorsExample
    },
    'input-form': {
        title: 'Inputs in a form',
        component: InputFormExample
    },
    'input-hint': {
        title: 'Input with hints',
        component: InputHintExample
    },
    'input-overview': {
        title: 'Basic Inputs',
        component: InputOverviewExample
    },
    'input-prefix-suffix': {
        title: 'Inputs with prefixes and suffixes',
        component: InputPrefixSuffixExample
    },
    'list-overview': {
        title: 'Basic list',
        component: ListOverviewExample
    },
    'list-sections': {
        title: 'List with sections',
        component: ListSectionsExample
    },
    'list-selection': {
        title: 'List with selection',
        component: ListSelectionExample
    },
    'menu-icons': {
        title: 'Menu with icons',
        component: MenuIconsExample
    },
    'menu-overview': {
        title: 'Basic menu',
        component: MenuOverviewExample
    },
    'nested-menu': {
        title: 'Nested menu',
        component: NestedMenuExample
    },
    'paginator-configurable': {
        title: 'Configurable paginator',
        component: PaginatorConfigurableExample
    },
    'paginator-overview': {
        title: 'Paginator',
        component: PaginatorOverviewExample
    },
    'progress-bar-buffer': {
        title: 'Buffer progress-bar',
        component: ProgressBarBufferExample
    },
    'progress-bar-configurable': {
        title: 'Configurable progress-bar',
        component: ProgressBarConfigurableExample
    },
    'progress-bar-determinate': {
        title: 'Determinate progress-bar',
        component: ProgressBarDeterminateExample
    },
    'progress-bar-indeterminate': {
        title: 'Indeterminate progress-bar',
        component: ProgressBarIndeterminateExample
    },
    'progress-bar-query': {
        title: 'Query progress-bar',
        component: ProgressBarQueryExample
    },
    'progress-spinner-configurable': {
        title: 'Configurable progress spinner',
        component: ProgressSpinnerConfigurableExample
    },
    'progress-spinner-overview': {
        title: 'Basic progress-spinner',
        component: ProgressSpinnerOverviewExample
    },
    'radio-ng-model': {
        title: 'Radios with ngModel',
        component: RadioNgModelExample
    },
    'radio-overview': {
        title: 'Basic radios',
        component: RadioOverviewExample
    },
    'select-custom-trigger': {
        title: 'Select with custom trigger text',
        component: SelectCustomTriggerExample
    },
    'select-disabled': {
        title: 'Disabled select',
        component: SelectDisabledExample
    },
    'select-error-state-matcher': {
        title: 'Select with a custom ErrorStateMatcher',
        component: SelectErrorStateMatcherExample
    },
    'select-form': {
        title: 'Select in a form',
        component: SelectFormExample
    },
    'select-hint-error': {
        title: 'Select with form field features',
        component: SelectHintErrorExample
    },
    'select-multiple': {
        title: 'Select with multiple selection',
        component: SelectMultipleExample
    },
    'select-no-ripple': {
        title: 'Select with no option ripple',
        component: SelectNoRippleExample
    },
    'select-optgroup': {
        title: 'Select with option groups',
        component: SelectOptgroupExample
    },
    'select-overview': {
        title: 'Basic select',
        component: SelectOverviewExample
    },
    'select-panel-class': {
        title: 'Select with custom panel styling',
        component: SelectPanelClassExample
    },
    'select-reset': {
        title: 'Select with reset option',
        component: SelectResetExample
    },
    'select-value-binding': {
        title: 'Select with 2-way value binding',
        component: SelectValueBindingExample
    },
    'sidenav-autosize': {
        title: 'Autosize sidenav',
        component: SidenavAutosizeExample
    },
    'sidenav-backdrop': {
        title: 'Drawer with explicit backdrop setting',
        component: SidenavBackdropExample
    },
    'sidenav-disable-close': {
        title: 'Sidenav with custom escape and backdrop click behavior',
        component: SidenavDisableCloseExample
    },
    'sidenav-drawer-overview': {
        title: 'Basic drawer',
        component: SidenavDrawerOverviewExample
    },
    'sidenav-fixed': {
        title: 'Fixed sidenav',
        component: SidenavFixedExample
    },
    'sidenav-mode': {
        title: 'Sidenav with configurable mode',
        component: SidenavModeExample
    },
    'sidenav-open-close': {
        title: 'Sidenav open & close behavior',
        component: SidenavOpenCloseExample
    },
    'sidenav-overview': {
        title: 'Basic sidenav',
        component: SidenavOverviewExample
    },
    'sidenav-position': {
        title: 'Implicit main content with two sidenavs',
        component: SidenavPositionExample
    },
    'sidenav-responsive': {
        title: 'Responsive sidenav',
        component: SidenavResponsiveExample
    },
    'slide-toggle-configurable': {
        title: 'Configurable slide-toggle',
        component: SlideToggleConfigurableExample
    },
    'slide-toggle-forms': {
        title: 'Slide-toggle with forms',
        component: SlideToggleFormsExample
    },
    'slide-toggle-overview': {
        title: 'Basic slide-toggles',
        component: SlideToggleOverviewExample
    },
    'slider-configurable': {
        title: 'Configurable slider',
        component: SliderConfigurableExample
    },
    'slider-formatting': {
        title: 'Slider with custom thumb label formatting.',
        component: SliderFormattingExample
    },
    'slider-overview': {
        title: 'Basic slider',
        component: SliderOverviewExample
    },
    'snack-bar-component': {
        title: 'Snack-bar with a custom component',
        component: SnackBarComponentExample,
        additionalFiles: ["snack-bar-component-example-snack.html"],
        selectorName: 'SnackBarComponentExample, PizzaPartyComponent'
    },
    'snack-bar-overview': {
        title: 'Basic snack-bar',
        component: SnackBarOverviewExample
    },
    'snack-bar-position': {
        title: 'Snack-bar with configurable position',
        component: SnackBarPositionExample
    },
    'sort-overview': {
        title: 'Sorting overview',
        component: SortOverviewExample
    },
    'stepper-editable': {
        title: 'Stepper with editable steps',
        component: StepperEditableExample
    },
    'stepper-optional': {
        title: 'Stepper with optional steps',
        component: StepperOptionalExample
    },
    'stepper-overview': {
        title: 'Stepper overview',
        component: StepperOverviewExample
    },
    'table-basic-flex': {
        title: 'Basic use of `<mat-table>` (uses display flex)',
        component: TableBasicFlexExample
    },
    'table-basic': {
        title: 'Basic use of `<table mat-table>`',
        component: TableBasicExample
    },
    'table-dynamic-columns': {
        title: 'Table dynamically changing the columns displayed',
        component: TableDynamicColumnsExample
    },
    'table-filtering': {
        title: 'Table with filtering',
        component: TableFilteringExample
    },
    'table-footer-row': {
        title: 'Footer row table',
        component: TableFooterRowExample
    },
    'table-http': {
        title: 'Table retrieving data through HTTP',
        component: TableHttpExample
    },
    'table-native-only': {
        title: 'Native `<table>` that only applies the Material styles',
        component: TableNativeOnlyExample
    },
    'table-overview': {
        title: 'Data table with sorting, pagination, and filtering.',
        component: TableOverviewExample
    },
    'table-pagination': {
        title: 'Table with pagination',
        component: TablePaginationExample
    },
    'table-row-context': {
        title: 'Table showing each row context properties.',
        component: TableRowContextExample
    },
    'table-selection': {
        title: 'Table with selection',
        component: TableSelectionExample
    },
    'table-sorting': {
        title: 'Table with sorting',
        component: TableSortingExample
    },
    'tabs-overview': {
        title: 'Basic tabs',
        component: TabsOverviewExample
    },
    'tabs-template-label': {
        title: 'Complex Example',
        component: TabsTemplateLabelExample
    },
    'text-field-autofill-directive': {
        title: 'Monitoring autofill state with cdkAutofill',
        component: TextFieldAutofillDirectiveExample
    },
    'text-field-autofill-monitor': {
        title: 'Monitoring autofill state with AutofillMonitor',
        component: TextFieldAutofillMonitorExample
    },
    'text-field-autosize-textarea': {
        title: 'Auto-resizing textarea',
        component: TextFieldAutosizeTextareaExample
    },
    'toolbar-multirow': {
        title: 'Multi-row toolbar',
        component: ToolbarMultirowExample
    },
    'toolbar-overview': {
        title: 'Basic toolbar',
        component: ToolbarOverviewExample
    },
    'tooltip-delay': {
        title: 'Tooltip with a show and hide delay',
        component: TooltipDelayExample
    },
    'tooltip-manual': {
        title: 'Tooltip that can be manually shown/hidden.',
        component: TooltipManualExample
    },
    'tooltip-modified-defaults': {
        title: 'Tooltip with a show and hide delay',
        component: TooltipModifiedDefaultsExample
    },
    'tooltip-overview': {
        title: 'Basic tooltip',
        component: TooltipOverviewExample
    },
    'tooltip-position': {
        title: 'Tooltip with custom position',
        component: TooltipPositionExample
    },
    'tree-checklist': {
        title: 'Tree with checkboxes',
        component: TreeChecklistExample
    },
    'tree-dynamic': {
        title: 'Tree with dynamic data',
        component: TreeDynamicExample
    },
    'tree-flat-overview': {
        title: 'Tree with flat nodes',
        component: TreeFlatOverviewExample
    },
    'tree-loadmore': {
        title: 'Tree with partially loaded data',
        component: TreeLoadmoreExample
    },
    'tree-nested-overview': {
        title: 'Tree with nested nodes',
        component: TreeNestedOverviewExample
    },
};
var /** @type {?} */ EXAMPLE_LIST = [
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompleteSimpleExample,
    BadgeOverviewExample,
    BottomSheetOverviewExampleSheet, BottomSheetOverviewExample,
    ButtonOverviewExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonTypesExample,
    CardFancyExample,
    CardOverviewExample,
    CdkTableBasicFlexExample,
    CdkTableBasicExample,
    CdkTreeFlatExample,
    CdkTreeNestedExample,
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    ChipsAutocompleteExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    DatepickerApiExample,
    DatepickerColorExample,
    ExampleHeader, DatepickerCustomHeaderExample,
    DatepickerCustomIconExample,
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
    DialogContentExampleDialog, DialogContentExample,
    DialogDataExampleDialog, DialogDataExample,
    DialogElementsExampleDialog, DialogElementsExample,
    DialogOverviewExampleDialog, DialogOverviewExample,
    DividerOverviewExample,
    ElevationOverviewExample,
    ExpansionExpandCollapseAllExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
    FocusMonitorDirectivesExample,
    FocusMonitorFocusViaExample,
    FocusMonitorOverviewExample,
    FormFieldAppearanceExample,
    MyTelInput, FormFieldCustomControlExample,
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
    PizzaPartyComponent, SnackBarComponentExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
    SortOverviewExample,
    StepperEditableExample,
    StepperOptionalExample,
    StepperOverviewExample,
    TableBasicFlexExample,
    TableBasicExample,
    TableDynamicColumnsExample,
    TableFilteringExample,
    TableFooterRowExample,
    TableHttpExample,
    TableNativeOnlyExample,
    TableOverviewExample,
    TablePaginationExample,
    TableRowContextExample,
    TableSelectionExample,
    TableSortingExample,
    TabsOverviewExample,
    TabsTemplateLabelExample,
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    TooltipDelayExample,
    TooltipManualExample,
    TooltipModifiedDefaultsExample,
    TooltipOverviewExample,
    TooltipPositionExample,
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample,
];
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: EXAMPLE_LIST,
                    entryComponents: EXAMPLE_LIST,
                    imports: [
                        ExampleMaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule
                    ]
                },] },
    ];
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
var  /**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
ExampleData = /** @class */ (function () {
    function ExampleData(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        var /** @type {?} */ exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; });
        this.examplePath = "/assets/stackblitz/examples/" + example + "/";
        this.selectorName = this.indexFilename = example + "-example";
        if (exampleConfig.additionalFiles) {
            (_a = this.exampleFiles).push.apply(_a, exampleConfig.additionalFiles);
        }
        var /** @type {?} */ exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
        var _a;
    }
    return ExampleData;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_LIST, ExampleModule, ListOverviewExample, DatepickerOverviewExample, CardFancyExample, ToolbarMultirowExample, ButtonToggleOverviewExample, ExpansionOverviewExample, StepperOverviewExample, AutocompleteAutoActiveFirstOptionExample as ɵa, AutocompleteDisplayExample as ɵb, AutocompleteFilterExample as ɵc, AutocompleteOptgroupExample as ɵd, AutocompleteOverviewExample as ɵe, AutocompleteSimpleExample as ɵf, BadgeOverviewExample as ɵg, BottomSheetOverviewExample as ɵh, BottomSheetOverviewExampleSheet as ɵi, ButtonOverviewExample as ɵj, ButtonToggleExclusiveExample as ɵk, ButtonTypesExample as ɵl, CardOverviewExample as ɵm, CdkTableBasicFlexExample as ɵn, CdkTableBasicExample as ɵo, CdkTreeFlatExample as ɵq, FileDatabase as ɵp, CdkTreeNestedExample as ɵs, FileDatabase$1 as ɵr, CheckboxConfigurableExample as ɵt, CheckboxOverviewExample as ɵu, ChipsAutocompleteExample as ɵv, ChipsInputExample as ɵw, ChipsOverviewExample as ɵx, ChipsStackedExample as ɵy, DatepickerApiExample as ɵz, DatepickerColorExample as ɵba, DatepickerCustomHeaderExample as ɵbb, ExampleHeader as ɵbc, DatepickerCustomIconExample as ɵbd, DatepickerDisabledExample as ɵbe, DatepickerEventsExample as ɵbf, DatepickerFilterExample as ɵbg, DatepickerFormatsExample as ɵbi, MY_FORMATS as ɵbh, DatepickerLocaleExample as ɵbj, DatepickerMinMaxExample as ɵbk, DatepickerMomentExample as ɵbl, DatepickerStartViewExample as ɵbm, DatepickerTouchExample as ɵbn, DatepickerValueExample as ɵbo, DatepickerViewsSelectionExample as ɵbq, MY_FORMATS$1 as ɵbp, DialogContentExample as ɵbr, DialogContentExampleDialog as ɵbs, DialogDataExample as ɵbt, DialogDataExampleDialog as ɵbu, DialogElementsExample as ɵbv, DialogElementsExampleDialog as ɵbw, DialogOverviewExample as ɵbx, DialogOverviewExampleDialog as ɵby, DividerOverviewExample as ɵbz, ElevationOverviewExample as ɵca, ExpansionExpandCollapseAllExample as ɵcb, ExpansionStepsExample as ɵcc, FocusMonitorDirectivesExample as ɵcd, FocusMonitorFocusViaExample as ɵce, FocusMonitorOverviewExample as ɵcf, FormFieldAppearanceExample as ɵcg, FormFieldCustomControlExample as ɵci, MyTelInput as ɵch, FormFieldErrorExample as ɵcj, FormFieldHintExample as ɵck, FormFieldLabelExample as ɵcl, FormFieldOverviewExample as ɵcm, FormFieldPrefixSuffixExample as ɵcn, FormFieldThemingExample as ɵco, GridListDynamicExample as ɵcp, GridListOverviewExample as ɵcq, IconOverviewExample as ɵcr, IconSvgExample as ɵcs, InputClearableExample as ɵct, InputErrorStateMatcherExample as ɵcu, InputErrorsExample as ɵcv, InputFormExample as ɵcw, InputHintExample as ɵcx, InputOverviewExample as ɵcy, InputPrefixSuffixExample as ɵcz, ListSectionsExample as ɵda, ListSelectionExample as ɵdb, ExampleMaterialModule as ɵgh, MenuIconsExample as ɵdc, MenuOverviewExample as ɵdd, NestedMenuExample as ɵde, PaginatorConfigurableExample as ɵdf, PaginatorOverviewExample as ɵdg, ProgressBarBufferExample as ɵdh, ProgressBarConfigurableExample as ɵdi, ProgressBarDeterminateExample as ɵdj, ProgressBarIndeterminateExample as ɵdk, ProgressBarQueryExample as ɵdl, ProgressSpinnerConfigurableExample as ɵdm, ProgressSpinnerOverviewExample as ɵdn, RadioNgModelExample as ɵdo, RadioOverviewExample as ɵdp, SelectCustomTriggerExample as ɵdq, SelectDisabledExample as ɵdr, SelectErrorStateMatcherExample as ɵds, SelectFormExample as ɵdt, SelectHintErrorExample as ɵdu, SelectMultipleExample as ɵdv, SelectNoRippleExample as ɵdw, SelectOptgroupExample as ɵdx, SelectOverviewExample as ɵdy, SelectPanelClassExample as ɵdz, SelectResetExample as ɵea, SelectValueBindingExample as ɵeb, SidenavAutosizeExample as ɵec, SidenavBackdropExample as ɵed, SidenavDisableCloseExample as ɵee, SidenavDrawerOverviewExample as ɵef, SidenavFixedExample as ɵeg, SidenavModeExample as ɵeh, SidenavOpenCloseExample as ɵei, SidenavOverviewExample as ɵej, SidenavPositionExample as ɵek, SidenavResponsiveExample as ɵel, SlideToggleConfigurableExample as ɵem, SlideToggleFormsExample as ɵen, SlideToggleOverviewExample as ɵeo, SliderConfigurableExample as ɵep, SliderFormattingExample as ɵeq, SliderOverviewExample as ɵer, PizzaPartyComponent as ɵet, SnackBarComponentExample as ɵes, SnackBarOverviewExample as ɵeu, SnackBarPositionExample as ɵev, SortOverviewExample as ɵew, StepperEditableExample as ɵex, StepperOptionalExample as ɵey, TableBasicFlexExample as ɵez, TableBasicExample as ɵfa, TableDynamicColumnsExample as ɵfb, TableFilteringExample as ɵfc, TableFooterRowExample as ɵfd, TableHttpExample as ɵfe, TableNativeOnlyExample as ɵff, TableOverviewExample as ɵfg, TablePaginationExample as ɵfh, TableRowContextExample as ɵfi, TableSelectionExample as ɵfj, TableSortingExample as ɵfk, TabsOverviewExample as ɵfl, TabsTemplateLabelExample as ɵfm, TextFieldAutofillDirectiveExample as ɵfn, TextFieldAutofillMonitorExample as ɵfo, TextFieldAutosizeTextareaExample as ɵfp, ToolbarOverviewExample as ɵfq, TooltipDelayExample as ɵfr, TooltipManualExample as ɵfs, TooltipModifiedDefaultsExample as ɵfu, myCustomTooltipDefaults as ɵft, TooltipOverviewExample as ɵfv, TooltipPositionExample as ɵfw, ChecklistDatabase as ɵfx, TreeChecklistExample as ɵfy, DynamicDatabase as ɵfz, TreeDynamicExample as ɵga, FileDatabase$2 as ɵgb, TreeFlatOverviewExample as ɵgc, LoadmoreDatabase as ɵgd, TreeLoadmoreExample as ɵge, FileDatabase$3 as ɵgf, TreeNestedOverviewExample as ɵgg };
//# sourceMappingURL=material-examples.es5.js.map
