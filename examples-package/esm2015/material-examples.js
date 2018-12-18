/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule, Component, ViewChild, TemplateRef, ViewContainerRef, Injectable, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Host, Inject, NgZone, Input, Optional, ContentChildren } from '@angular/core';
import { ScrollingModule, FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { A11yModule, FocusMonitor } from '@angular/cdk/a11y';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule, FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatBottomSheet, MatBottomSheetRef, MatCalendar, MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatAccordion, MatFormFieldControl, MatIconRegistry, MatSnackBar, MatTableDataSource, MatPaginator, MatSort, MatColumnDef, MatSortHeader, MatTable, MatHeaderRowDef, MatRowDef, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';
import { FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, startWith, takeUntil, catchError, switchMap, take } from 'rxjs/operators';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior } from '@angular/cdk/platform';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, of, Subscription, Subject, Observable, merge } from 'rxjs';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as _rollupMoment from 'moment';
import _rollupMoment__default, {  } from 'moment';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { DomSanitizer } from '@angular/platform-browser';
import '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExampleMaterialModule {
}
ExampleMaterialModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    A11yModule,
                    CdkTableModule,
                    CdkTreeModule,
                    DragDropModule,
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
                    MatTreeModule,
                    ScrollingModule,
                ],
                exports: [
                    A11yModule,
                    CdkTableModule,
                    CdkTreeModule,
                    DragDropModule,
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
                    MatTreeModule,
                    ScrollingModule,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Highlight the first autocomplete option
 */
class AutocompleteAutoActiveFirstOptionExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
}
AutocompleteAutoActiveFirstOptionExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-auto-active-first-option-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{option}}</mat-option></mat-autocomplete></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Display value autocomplete
 */
class AutocompleteDisplayExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = [
            { name: 'Mary' },
            { name: 'Shelley' },
            { name: 'Igor' }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(value => typeof value === 'string' ? value : value.name), map(name => name ? this._filter(name) : this.options.slice()));
    }
    /**
     * @param {?=} user
     * @return {?}
     */
    displayFn(user) {
        return user ? user.name : undefined;
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    _filter(name) {
        /** @type {?} */
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
}
AutocompleteDisplayExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-display-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{option.name}}</mat-option></mat-autocomplete></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Filter autocomplete
 */
class AutocompleteFilterExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(value => this._filter(value)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}
AutocompleteFilterExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-filter-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{option}}</mat-option></mat-autocomplete></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const _filter = (opt, value) => {
    /** @type {?} */
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
/**
 * \@title Option groups autocomplete
 */
class AutocompleteOptgroupExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
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
    ngOnInit() {
        this.stateGroupOptions = (/** @type {?} */ (this.stateForm.get('stateGroup'))).valueChanges
            .pipe(startWith(''), map(value => this._filterGroup(value)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
}
AutocompleteOptgroupExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-optgroup-example',
                template: "<form [formGroup]=\"stateForm\"><mat-form-field><input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\"><mat-autocomplete #autoGroup=\"matAutocomplete\"><mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\"><mat-option *ngFor=\"let name of group.names\" [value]=\"name\">{{name}}</mat-option></mat-optgroup></mat-autocomplete></mat-form-field></form>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
AutocompleteOptgroupExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Autocomplete overview
 */
class AutocompleteOverviewExample {
    constructor() {
        this.stateCtrl = new FormControl();
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
            .pipe(startWith(''), map(state$$1 => state$$1 ? this._filterStates(state$$1) : this.states.slice()));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filterStates(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.states.filter(state$$1 => state$$1.name.toLowerCase().indexOf(filterValue) === 0);
    }
}
AutocompleteOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-overview-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\"><img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> <span>{{state.name}}</span> | <small>Population: {{state.population}}</small></mat-option></mat-autocomplete></mat-form-field><br><mat-slide-toggle [checked]=\"stateCtrl.disabled\" (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">Disable Input?</mat-slide-toggle></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } .example-option-img { vertical-align: middle; margin-right: 8px; } [dir='rtl'] .example-option-img { margin-right: 0; margin-left: 8px; } "],
            },] },
];
/** @nocollapse */
AutocompleteOverviewExample.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Simple autocomplete
 */
class AutocompleteSimpleExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
}
AutocompleteSimpleExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-simple-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of options\" [value]=\"option\">{{option}}</mat-option></mat-autocomplete></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Badge overview
 */
class BadgeOverviewExample {
}
BadgeOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'badge-overview-example',
                template: "<p><span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span></p><p>Button with a badge on the left <button mat-raised-button color=\"primary\" matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">Action</button></p><p>Icon with a badge<mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon></p>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Bottom Sheet Overview
 */
class BottomSheetOverviewExample {
    /**
     * @param {?} bottomSheet
     */
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    /**
     * @return {?}
     */
    openBottomSheet() {
        this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
}
BottomSheetOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet-overview-example',
                template: "<p>You have received a file called \"cat-picture.jpeg\".</p><button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
BottomSheetOverviewExample.ctorParameters = () => [
    { type: MatBottomSheet }
];
class BottomSheetOverviewExampleSheet {
    /**
     * @param {?} bottomSheetRef
     */
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    openLink(event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
BottomSheetOverviewExampleSheet.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                template: "<mat-nav-list><a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Keep</span> <span mat-line>Add to a note</span> </a><a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Docs</span> <span mat-line>Embed in a document</span> </a><a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Plus</span> <span mat-line>Share with your friends</span> </a><a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\"><span mat-line>Google Hangouts</span> <span mat-line>Show to your coworkers</span></a></mat-nav-list>",
            },] },
];
/** @nocollapse */
BottomSheetOverviewExampleSheet.ctorParameters = () => [
    { type: MatBottomSheetRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic buttons
 */
class ButtonOverviewExample {
}
ButtonOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'button-overview-example',
                template: "<button mat-button>Click me!</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Button toggle appearance
 */
class ButtonToggleAppearanceExample {
}
ButtonToggleAppearanceExample.decorators = [
    { type: Component, args: [{
                selector: 'button-toggle-appearance-example',
                template: "<p>Default appearance:<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\"><mat-button-toggle value=\"bold\">Bold</mat-button-toggle><mat-button-toggle value=\"italic\">Italic</mat-button-toggle><mat-button-toggle value=\"underline\">Underline</mat-button-toggle></mat-button-toggle-group></p><p>Legacy appearance:<mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\"><mat-button-toggle value=\"bold\">Bold</mat-button-toggle><mat-button-toggle value=\"italic\">Italic</mat-button-toggle><mat-button-toggle value=\"underline\">Underline</mat-button-toggle></mat-button-toggle-group></p>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Exclusive selection
 */
class ButtonToggleExclusiveExample {
}
ButtonToggleExclusiveExample.decorators = [
    { type: Component, args: [{
                selector: 'button-toggle-exclusive-example',
                template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\"><mat-button-toggle value=\"left\"><mat-icon>format_align_left</mat-icon></mat-button-toggle><mat-button-toggle value=\"center\"><mat-icon>format_align_center</mat-icon></mat-button-toggle><mat-button-toggle value=\"right\"><mat-icon>format_align_right</mat-icon></mat-button-toggle><mat-button-toggle value=\"justify\" disabled=\"disabled\"><mat-icon>format_align_justify</mat-icon></mat-button-toggle></mat-button-toggle-group><div class=\"example-selected-value\">Selected value: {{group.value}}</div>",
                styles: [".example-selected-value { margin: 15px 0; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic button-toggles
 */
class ButtonToggleOverviewExample {
}
ButtonToggleOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'button-toggle-overview-example',
                template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\"><mat-button-toggle value=\"bold\">Bold</mat-button-toggle><mat-button-toggle value=\"italic\">Italic</mat-button-toggle><mat-button-toggle value=\"underline\">Underline</mat-button-toggle></mat-button-toggle-group>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Button varieties
 */
class ButtonTypesExample {
}
ButtonTypesExample.decorators = [
    { type: Component, args: [{
                selector: 'button-types-example',
                template: "<h3>Basic Buttons</h3><div class=\"example-button-row\"><button mat-button>Basic</button> <button mat-button color=\"primary\">Primary</button> <button mat-button color=\"accent\">Accent</button> <button mat-button color=\"warn\">Warn</button> <button mat-button disabled=\"disabled\">Disabled</button> <a mat-button routerLink=\".\">Link</a></div><h3>Raised Buttons</h3><div class=\"example-button-row\"><button mat-raised-button>Basic</button> <button mat-raised-button color=\"primary\">Primary</button> <button mat-raised-button color=\"accent\">Accent</button> <button mat-raised-button color=\"warn\">Warn</button> <button mat-raised-button disabled=\"disabled\">Disabled</button> <a mat-raised-button routerLink=\".\">Link</a></div><h3>Stroked Buttons</h3><div class=\"example-button-row\"><button mat-stroked-button>Basic</button> <button mat-stroked-button color=\"primary\">Primary</button> <button mat-stroked-button color=\"accent\">Accent</button> <button mat-stroked-button color=\"warn\">Warn</button> <button mat-stroked-button disabled=\"disabled\">Disabled</button> <a mat-stroked-button routerLink=\".\">Link</a></div><h3>Flat Buttons</h3><div class=\"example-button-row\"><button mat-flat-button>Basic</button> <button mat-flat-button color=\"primary\">Primary</button> <button mat-flat-button color=\"accent\">Accent</button> <button mat-flat-button color=\"warn\">Warn</button> <button mat-flat-button disabled=\"disabled\">Disabled</button> <a mat-flat-button routerLink=\".\">Link</a></div><h3>Icon Buttons</h3><div class=\"example-button-row\"><button mat-icon-button><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"primary\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"accent\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button color=\"warn\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <button mat-icon-button disabled=\"disabled\"><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button></div><h3>Fab Buttons</h3><div class=\"example-button-row\"><button mat-fab>Basic</button> <button mat-fab color=\"primary\">Primary</button> <button mat-fab color=\"accent\">Accent</button> <button mat-fab color=\"warn\">Warn</button> <button mat-fab disabled=\"disabled\">Disabled</button> <button mat-fab><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <a mat-fab routerLink=\".\">Link</a></div><h3>Mini Fab Buttons</h3><div class=\"example-button-row\"><button mat-mini-fab>Basic</button> <button mat-mini-fab color=\"primary\">Primary</button> <button mat-mini-fab color=\"accent\">Accent</button> <button mat-mini-fab color=\"warn\">Warn</button> <button mat-mini-fab disabled=\"disabled\">Disabled</button> <button mat-mini-fab><mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon></button> <a mat-mini-fab routerLink=\".\">Link</a></div>",
                styles: [".example-button-row button, .example-button-row a { margin-right: 8px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Card with multiple sections
 */
class CardFancyExample {
}
CardFancyExample.decorators = [
    { type: Component, args: [{
                selector: 'card-fancy-example',
                template: "<mat-card class=\"example-card\"><mat-card-header><div mat-card-avatar class=\"example-header-image\"></div><mat-card-title>Shiba Inu</mat-card-title><mat-card-subtitle>Dog Breed</mat-card-subtitle></mat-card-header><img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"><mat-card-content><p>The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.</p></mat-card-content><mat-card-actions><button mat-button>LIKE</button> <button mat-button>SHARE</button></mat-card-actions></mat-card>",
                styles: [".example-card { max-width: 400px; } .example-header-image { background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); background-size: cover; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic cards
 */
class CardOverviewExample {
}
CardOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'card-overview-example',
                template: "<mat-card>Simple card</mat-card>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop position locking
 */
class CdkDragDropAxisLockExample {
}
CdkDragDropAxisLockExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-axis-lock-example',
                template: "<div class=\"example-box\" cdkDragLockAxis=\"y\" cdkDrag>I can only be dragged up/down</div><div class=\"example-box\" cdkDragLockAxis=\"x\" cdkDrag>I can only be dragged left/right</div>",
                styles: [".example-box { width: 200px; height: 200px; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); cursor: move; display: inline-flex; justify-content: center; align-items: center; text-align: center; background: #fff; border-radius: 4px; margin-right: 25px; position: relative; z-index: 1; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-box:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop boundary
 */
class CdkDragDropBoundaryExample {
}
CdkDragDropBoundaryExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-boundary-example',
                template: "<div class=\"example-boundary\"><div class=\"example-box\" cdkDragBoundary=\".example-boundary\" cdkDrag>I can only be dragged within the dotted container</div></div>",
                styles: [".example-box { width: 200px; height: 200px; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); cursor: move; display: inline-flex; justify-content: center; align-items: center; text-align: center; background: #fff; border-radius: 4px; margin-right: 25px; position: relative; z-index: 1; box-sizing: border-box; padding: 10px; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-box:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .example-boundary { width: 400px; height: 400px; max-width: 100%; border: dotted #ccc 2px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop connected sorting group
 */
class CdkDragDropConnectedSortingGroupExample {
    constructor() {
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
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
CdkDragDropConnectedSortingGroupExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-connected-sorting-group-example',
                template: "<div cdkDropListGroup><div class=\"example-container\"><h2>To do</h2><div cdkDropList [cdkDropListData]=\"todo\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div></div></div><div class=\"example-container\"><h2>Done</h2><div cdkDropList [cdkDropListData]=\"done\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div></div></div></div>",
                styles: [".example-container { width: 400px; max-width: 100%; margin: 0 25px 25px 0; display: inline-block; vertical-align: top; } .example-list { border: solid 1px #ccc; min-height: 60px; background: white; border-radius: 4px; overflow: hidden; display: block; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop connected sorting
 */
class CdkDragDropConnectedSortingExample {
    constructor() {
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
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
CdkDragDropConnectedSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-connected-sorting-example',
                template: "<div class=\"example-container\"><h2>To do</h2><div cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"todo\" [cdkDropListConnectedTo]=\"[doneList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div></div></div><div class=\"example-container\"><h2>Done</h2><div cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"done\" [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div></div></div>",
                styles: [".example-container { width: 400px; max-width: 100%; margin: 0 25px 25px 0; display: inline-block; vertical-align: top; } .example-list { border: solid 1px #ccc; min-height: 60px; background: white; border-radius: 4px; overflow: hidden; display: block; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop custom placeholer
 */
class CdkDragDropCustomPlaceholderExample {
    constructor() {
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
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropCustomPlaceholderExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-custom-placeholder-example',
                template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag><div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>{{movie}}</div></div>",
                styles: [".example-list { width: 500px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: block; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-custom-placeholder { background: #ccc; border: dotted 3px #999; min-height: 60px; transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop custom preview
 */
class CdkDragDropCustomPreviewExample {
    constructor() {
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
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropCustomPreviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-custom-preview-example',
                template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie.title}} <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\"></div></div>",
                styles: [".example-list { width: 500px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: block; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop disabled
 */
class CdkDragDropDisabledExample {
    constructor() {
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
    drop(event) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropDisabledExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-disabled-example',
                template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let item of items\" cdkDrag [cdkDragDisabled]=\"item.disabled\">{{item.value}}</div></div>",
                styles: [".example-list { width: 500px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: block; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop enter predicate
 */
class CdkDragDropEnterPredicateExample {
    constructor() {
        this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.even = [10];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    /**
     * Predicate function that only allows even numbers to be dropped into a list.
     * @param {?} item
     * @return {?}
     */
    evenPredicate(item) {
        return item.data % 2 === 0;
    }
    /**
     * Predicate function that doesn't allow items to be dropped into a list.
     * @return {?}
     */
    noReturnPredicate() {
        return false;
    }
}
CdkDragDropEnterPredicateExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-enter-predicate-example',
                template: "<div class=\"example-container\"><h2>Available numbers</h2><div id=\"all\" cdkDropList [cdkDropListData]=\"all\" cdkDropListConnectedTo=\"even\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListEnterPredicate]=\"noReturnPredicate\"><div class=\"example-box\" *ngFor=\"let number of all\" [cdkDragData]=\"number\" cdkDrag>{{number}}</div></div></div><div class=\"example-container\"><h2>Even numbers</h2><div id=\"even\" cdkDropList [cdkDropListData]=\"even\" cdkDropListConnectedTo=\"all\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListEnterPredicate]=\"evenPredicate\"><div class=\"example-box\" *ngFor=\"let number of even\" cdkDrag [cdkDragData]=\"number\">{{number}}</div></div></div>",
                styles: [".example-container { width: 400px; max-width: 100%; margin: 0 25px 25px 0; display: inline-block; vertical-align: top; } .example-list { border: solid 1px #ccc; min-height: 60px; background: white; border-radius: 4px; overflow: hidden; display: block; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop with a handle
 */
class CdkDragDropHandleExample {
}
CdkDragDropHandleExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-handle-example',
                template: "<div class=\"example-box\" cdkDrag>I can only be dragged using the handle<div class=\"example-handle\" cdkDragHandle><svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path><path d=\"M0 0h24v24H0z\" fill=\"none\"></path></svg></div></div>",
                styles: [".example-box { width: 200px; height: 200px; padding: 10px; box-sizing: border-box; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; justify-content: center; align-items: center; text-align: center; background: #fff; border-radius: 4px; position: relative; z-index: 1; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-box:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .example-handle { position: absolute; top: 10px; right: 10px; color: #ccc; cursor: move; width: 24px; height: 24px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop horizontal sorting
 */
class CdkDragDropHorizontalSortingExample {
    constructor() {
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
    drop(event) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropHorizontalSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-horizontal-sorting-example',
                template: "<div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let timePeriod of timePeriods\" cdkDrag>{{timePeriod}}</div></div>",
                styles: [".example-list { width: 1000px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: flex; flex-direction: row; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-right: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; flex-grow: 1; flex-basis: 0; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic Drag&Drop
 */
class CdkDragDropOverviewExample {
}
CdkDragDropOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-overview-example',
                template: "<div class=\"example-box\" cdkDrag>Drag me around</div>",
                styles: [".example-box { width: 200px; height: 200px; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); cursor: move; display: flex; justify-content: center; align-items: center; text-align: center; background: #fff; border-radius: 4px; position: relative; z-index: 1; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-box:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop with alternate root element
 */
class CdkDragDropRootElementExample {
    /**
     * @param {?} _overlay
     * @param {?} _viewContainerRef
     */
    constructor(_overlay, _viewContainerRef) {
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
        this._overlayRef = this._overlay.create({
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true
        });
        this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._overlayRef.dispose();
    }
    /**
     * @return {?}
     */
    openDialog() {
        this._overlayRef.attach(this._portal);
    }
}
CdkDragDropRootElementExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-root-element-example',
                template: "<button (click)=\"openDialog()\">Open a draggable dialog</button><ng-template><div class=\"example-dialog-content\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\">Drag the dialog around!</div></ng-template>",
                styles: [".example-dialog-content { width: 200px; height: 200px; border: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); cursor: move; display: flex; justify-content: center; align-items: center; background: #fff; border-radius: 4px; transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); } .example-dialog-content:active { box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } "],
            },] },
];
/** @nocollapse */
CdkDragDropRootElementExample.ctorParameters = () => [
    { type: Overlay },
    { type: ViewContainerRef }
];
CdkDragDropRootElementExample.propDecorators = {
    _dialogTemplate: [{ type: ViewChild, args: [TemplateRef,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop sorting
 */
class CdkDragDropSortingExample {
    constructor() {
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
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-sorting-example',
                template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"><div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie}}</div></div>",
                styles: [".example-list { width: 500px; max-width: 100%; border: solid 1px #ccc; min-height: 60px; display: block; background: white; border-radius: 4px; overflow: hidden; } .example-box { padding: 20px 10px; border-bottom: solid 1px #ccc; color: rgba(0, 0, 0, 0.87); display: flex; flex-direction: row; align-items: center; justify-content: space-between; box-sizing: border-box; cursor: move; background: white; font-size: 14px; } .cdk-drag-preview { box-sizing: border-box; border-radius: 4px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); } .cdk-drag-placeholder { opacity: 0; } .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } .example-box:last-child { border: none; } .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Platform overview
 */
class CdkPlatformOverviewExample {
    /**
     * @param {?} platform
     */
    constructor(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
}
CdkPlatformOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-platform-overview-example',
                template: "<h3>Platform information:</h3><p>Is Android: {{platform.ANDROID}}</p><p>Is iOS: {{platform.IOS}}</p><p>Is Firefox: {{platform.FIREFOX}}</p><p>Is Blink: {{platform.BLINK}}</p><p>Is Webkit: {{platform.WEBKIT}}</p><p>Is Trident: {{platform.TRIDENT}}</p><p>Is Edge: {{platform.EDGE}}</p><p>Supported input types: {{supportedInputTypes}}</p><p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p><p>Supports scroll behavior: {{supportsScrollBehavior}}</p>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
CdkPlatformOverviewExample.ctorParameters = () => [
    { type: Platform }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ELEMENT_DATA = [
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
class CdkTableBasicFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
}
CdkTableBasicFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-table-basic-flex-example',
                styles: ["/** * Add basic flex styling so that the cells evenly space themselves in the row. */ cdk-row, cdk-header-row, cdk-footer-row { display: flex; } cdk-cell, cdk-header-cell, cdk-footer-cell { flex: 1; } "],
                template: "<cdk-table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"position\"><cdk-header-cell *cdkHeaderCellDef>No.</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.position}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"name\"><cdk-header-cell *cdkHeaderCellDef>Name</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.name}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"weight\"><cdk-header-cell *cdkHeaderCellDef>Weight</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.weight}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"symbol\"><cdk-header-cell *cdkHeaderCellDef>Symbol</cdk-header-cell><cdk-cell *cdkCellDef=\"let element\">{{element.symbol}}</cdk-cell></ng-container><cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row><cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row></cdk-table>",
            },] },
];
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ELEMENT_DATA$1 = [
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
class CdkTableBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$1();
    }
}
CdkTableBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-table-basic-example',
                styles: ["table { width: 100%; } th { text-align: left; } "],
                template: "<table cdk-table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"position\"><th cdk-header-cell *cdkHeaderCellDef>No.</th><td cdk-cell *cdkCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container cdkColumnDef=\"name\"><th cdk-header-cell *cdkHeaderCellDef>Name</th><td cdk-cell *cdkCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container cdkColumnDef=\"weight\"><th cdk-header-cell *cdkHeaderCellDef>Weight</th><td cdk-cell *cdkCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container cdkColumnDef=\"symbol\"><th cdk-header-cell *cdkHeaderCellDef>Symbol</th><td cdk-cell *cdkCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr><tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
            },] },
];
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
let ExampleDataSource$1 = class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA$1);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
class FileNode {
}
/**
 * Flat node with expandable and level information
 */
class FileFlatNode {
    /**
     * @param {?} expandable
     * @param {?} filename
     * @param {?} level
     * @param {?} type
     */
    constructor(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
}
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 * @type {?}
 */
const TREE_DATA = JSON.stringify({
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
class FileDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @return {?}
     */
    initialize() {
        // Parse the string to json object.
        /** @type {?} */
        const dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        /** @type {?} */
        const data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            /** @type {?} */
            const value = obj[key];
            /** @type {?} */
            const node = new FileNode();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
}
FileDatabase.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FileDatabase.ctorParameters = () => [];
/**
 * \@title Tree with flat nodes
 */
class CdkTreeFlatExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.transformer = (node, level) => {
            return new FileFlatNode(!!node.children, node.filename, level, node.type);
        };
        this._getLevel = (node) => node.level;
        this._isExpandable = (node) => node.expandable;
        this._getChildren = (node) => of(node.children);
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
    }
}
CdkTreeFlatExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-tree-flat-example',
                template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding class=\"example-tree-node\"><button mat-icon-button disabled=\"disabled\"></button> {{node.filename}}: {{node.type}}</cdk-tree-node><cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding class=\"example-tree-node\"><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.filename}}: {{node.type}}</cdk-tree-node></cdk-tree>",
                styles: [".example-tree-node { display: flex; align-items: center; } "],
                providers: [FileDatabase]
            },] },
];
/** @nocollapse */
CdkTreeFlatExample.ctorParameters = () => [
    { type: FileDatabase }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
let FileNode$1 = class FileNode {
};
/**
 * The Json tree data in string. The data could be parsed into Json object
 * @type {?}
 */
const TREE_DATA$1 = JSON.stringify({
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
let FileDatabase$1 = class FileDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @return {?}
     */
    initialize() {
        // Parse the string to json object.
        /** @type {?} */
        const dataObject = JSON.parse(TREE_DATA$1);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        /** @type {?} */
        const data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            /** @type {?} */
            const value = obj[key];
            /** @type {?} */
            const node = new FileNode$1();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
};
FileDatabase$1.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FileDatabase$1.ctorParameters = () => [];
/**
 * \@title Tree with nested nodes
 */
class CdkTreeNestedExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.hasNestedChild = (_, nodeData) => !nodeData.type;
        this._getChildren = (node) => of(node.children);
        this.nestedTreeControl = new NestedTreeControl(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();
        database.dataChange.subscribe(data => this.nestedDataSource.data = data);
    }
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
CdkTreeNestedExample.ctorParameters = () => [
    { type: FileDatabase$1 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Virtual scroll context variables
 */
class CdkVirtualScrollContextExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollContextExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-context-example',
                styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item-detail { height: 18px; } .example-alternate { background: rgba(127, 127, 127, 0.3); } "],
                template: "<cdk-virtual-scroll-viewport [itemSize]=\"18 * 7\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items; let index = index; let count = count; let first = first; let last = last; let even = even; let odd = odd;\" [class.example-alternate]=\"odd\"><div class=\"example-item-detail\">Item: {{item}}</div><div class=\"example-item-detail\">Index: {{index}}</div><div class=\"example-item-detail\">Count: {{count}}</div><div class=\"example-item-detail\">First: {{first ? 'Yes' : 'No'}}</div><div class=\"example-item-detail\">Last: {{last ? 'Yes' : 'No'}}</div><div class=\"example-item-detail\">Even: {{even ? 'Yes' : 'No'}}</div><div class=\"example-item-detail\">Odd: {{odd ? 'Yes' : 'No'}}</div></div></cdk-virtual-scroll-viewport>",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(50, 250, 500);
    }
}
/**
 * \@title Virtual scroll with a custom strategy
 */
class CdkVirtualScrollCustomStrategyExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollCustomStrategyExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-custom-strategy-example',
                styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                template: "<cdk-virtual-scroll-viewport class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Virtual scroll with a custom data source
 */
class CdkVirtualScrollDataSourceExample {
    constructor() {
        this.ds = new MyDataSource();
    }
}
CdkVirtualScrollDataSourceExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-data-source-example',
                styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div></cdk-virtual-scroll-viewport>",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
class MyDataSource extends DataSource {
    constructor() {
        super(...arguments);
        this.length = 100000;
        this.pageSize = 100;
        this.cachedData = Array.from({ length: this.length });
        this.fetchedPages = new Set();
        this.dataStream = new BehaviorSubject(this.cachedData);
        this.subscription = new Subscription();
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        this.subscription.add(collectionViewer.viewChange.subscribe(range => {
            /** @type {?} */
            const startPage = this.getPageForIndex(range.start);
            /** @type {?} */
            const endPage = this.getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this.fetchPage(i);
            }
        }));
        return this.dataStream;
    }
    /**
     * @return {?}
     */
    disconnect() {
        this.subscription.unsubscribe();
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    getPageForIndex(index) {
        return Math.floor(index / this.pageSize);
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    fetchPage(page) {
        if (this.fetchedPages.has(page)) {
            return;
        }
        this.fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(() => {
            this.cachedData.splice(page * this.pageSize, this.pageSize, ...Array.from({ length: this.pageSize })
                .map((_, i) => `Item #${page * this.pageSize + i}`));
            this.dataStream.next(this.cachedData);
        }, Math.random() * 1000 + 200);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Virtual scrolling `<dl>`
 */
class CdkVirtualScrollDlExample {
    constructor() {
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
}
CdkVirtualScrollDlExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-dl-example',
                styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-dt { height: 30px; font-weight: bold; } .example-dd { height: 30px; } "],
                template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\"><dl class=\"example-dl\"><ng-container *cdkVirtualFor=\"let state of states\"><dt class=\"example-dt\">{{state.name}}</dt><dd class=\"example-dd\">{{state.capital}}</dd></ng-container></dl></cdk-virtual-scroll-viewport>",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Fixed size virtual scroll with custom buffer parameters
 */
class CdkVirtualScrollFixedBufferExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollFixedBufferExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-fixed-buffer-example',
                styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                template: "<cdk-virtual-scroll-viewport itemSize=\"50\" minBufferPx=\"200\" maxBufferPx=\"400\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport>",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Horizontal virtual scroll
 */
class CdkVirtualScrollHorizontalExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollHorizontalExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-horizontal-example',
                styles: [".cdk-virtual-scroll-data-source-example .example-viewport { height: 200px; width: 200px; border: 1px solid black; } .cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper { display: flex; flex-direction: row; } .cdk-virtual-scroll-data-source-example .example-item { width: 50px; height: 100%; writing-mode: vertical-lr; } "],
                template: "<div class=\"cdk-virtual-scroll-data-source-example\"><cdk-virtual-scroll-viewport orientation=\"horizontal\" itemSize=\"50\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport></div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic virtual scroll
 */
class CdkVirtualScrollOverviewExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-overview-example',
                styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport>",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Virtual scroll with no template caching
 */
class CdkVirtualScrollTemplateCacheExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollTemplateCacheExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-template-cache-example',
                styles: [".example-viewport { height: 200px; width: 200px; border: 1px solid black; } .example-item { height: 50px; } "],
                template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\"><div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" class=\"example-item\">{{item}}</div></cdk-virtual-scroll-viewport>",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable checkbox
 */
class CheckboxConfigurableExample {
    constructor() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
}
CheckboxConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-configurable-example',
                template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Checkbox configuration</h2><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox></section><section class=\"example-section\"><label class=\"example-margin\">Align:</label><mat-radio-group [(ngModel)]=\"labelPosition\"><mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\" [(indeterminate)]=\"indeterminate\" [labelPosition]=\"labelPosition\" [disabled]=\"disabled\">I'm a checkbox</mat-checkbox></section></mat-card-content></mat-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic checkboxes
 */
class CheckboxOverviewExample {
}
CheckboxOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-overview-example',
                template: "<mat-checkbox>Check me!</mat-checkbox>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Chips Autocomplete
 */
class ChipsAutocompleteExample {
    constructor() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map((fruit) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            /** @type {?} */
            const input = event.input;
            /** @type {?} */
            const value = event.value;
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
    }
    /**
     * @param {?} fruit
     * @return {?}
     */
    remove(fruit) {
        /** @type {?} */
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selected(event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }
}
ChipsAutocompleteExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-autocomplete-example',
                template: "<mat-form-field class=\"example-chip-list\"><mat-chip-list #chipList><mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(fruit)\">{{fruit}}<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon></mat-chip><input placeholder=\"New fruit...\" #fruitInput [formControl]=\"fruitCtrl\" [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"></mat-chip-list><mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\"><mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">{{fruit}}</mat-option></mat-autocomplete></mat-form-field>",
                styles: [".example-chip-list { width: 100%; } "],
            },] },
];
/** @nocollapse */
ChipsAutocompleteExample.ctorParameters = () => [];
ChipsAutocompleteExample.propDecorators = {
    fruitInput: [{ type: ViewChild, args: ['fruitInput',] }],
    matAutocomplete: [{ type: ViewChild, args: ['auto',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Chips with input
 */
class ChipsInputExample {
    constructor() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
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
    add(event) {
        /** @type {?} */
        const input = event.input;
        /** @type {?} */
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /**
     * @param {?} fruit
     * @return {?}
     */
    remove(fruit) {
        /** @type {?} */
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
}
ChipsInputExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-input-example',
                template: "<mat-form-field class=\"example-chip-list\"><mat-chip-list #chipList><mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(fruit)\">{{fruit.name}}<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon></mat-chip><input placeholder=\"New fruit...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"></mat-chip-list></mat-form-field>",
                styles: [".example-chip-list { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic chips
 */
class ChipsOverviewExample {
}
ChipsOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-overview-example',
                template: "<mat-chip-list><mat-chip>One fish</mat-chip><mat-chip>Two fish</mat-chip><mat-chip color=\"primary\" selected=\"selected\">Primary fish</mat-chip><mat-chip color=\"accent\" selected=\"selected\">Accent fish</mat-chip></mat-chip-list>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stacked chips
 */
class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
}
ChipsStackedExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-stacked-example',
                template: "<mat-chip-list class=\"mat-chip-list-stacked\"><mat-chip *ngFor=\"let chip of availableColors\" selected=\"selected\" [color]=\"chip.color\">{{chip.name}}</mat-chip></mat-chip-list>",
                styles: ["mat-chip { max-width: 200px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker open method
 */
class DatepickerApiExample {
}
DatepickerApiExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-api-example',
                template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker #picker></mat-datepicker></mat-form-field><button mat-raised-button (click)=\"picker.open()\">Open</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker palette colors
 */
class DatepickerColorExample {
}
DatepickerColorExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-color-example',
                template: "<mat-form-field color=\"accent\"><mat-label>Inherited calendar color</mat-label><input matInput [matDatepicker]=\"picker1\"><mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle><mat-datepicker #picker1></mat-datepicker></mat-form-field><mat-form-field color=\"accent\"><mat-label>Custom calendar color</mat-label><input matInput [matDatepicker]=\"picker2\"><mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle><mat-datepicker #picker2 color=\"primary\"></mat-datepicker></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with custom calendar header
 */
class DatepickerCustomHeaderExample {
    constructor() {
        this.exampleHeader = ExampleHeader;
    }
}
DatepickerCustomHeaderExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-custom-header-example',
                template: "<mat-form-field><mat-label>Custom calendar header</mat-label><input matInput [matDatepicker]=\"picker\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker></mat-form-field>",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * Custom header component for datepicker.
 * @template D
 */
class ExampleHeader {
    /**
     * @param {?} calendar
     * @param {?} dateAdapter
     * @param {?} dateFormats
     * @param {?} cdr
     */
    constructor(calendar, dateAdapter, dateFormats, cdr) {
        this.calendar = calendar;
        this.dateAdapter = dateAdapter;
        this.dateFormats = dateFormats;
        this.destroyed = new Subject();
        calendar.stateChanges
            .pipe(takeUntil(this.destroyed))
            .subscribe(() => cdr.markForCheck());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    /**
     * @return {?}
     */
    get periodLabel() {
        return this.dateAdapter
            .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
            .toLocaleUpperCase();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    previousClicked(mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    nextClicked(mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
    }
}
ExampleHeader.decorators = [
    { type: Component, args: [{
                selector: 'example-header',
                styles: [`
    .example-header {
      display: flex;
      align-items: center;
      padding: 0.5em;
    }

    .example-header-label {
      flex: 1;
      height: 1em;
      font-weight: 500;
      text-align: center;
    }

    .example-double-arrow .mat-icon {
      margin: -22%;
    }
  `],
                template: `
    <div class="example-header">
      <button mat-icon-button class="example-double-arrow" (click)="previousClicked('year')">
        <mat-icon>keyboard_arrow_left</mat-icon>
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button class="example-double-arrow" (click)="nextClicked('year')">
        <mat-icon>keyboard_arrow_right</mat-icon>
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
ExampleHeader.ctorParameters = () => [
    { type: MatCalendar, decorators: [{ type: Host }] },
    { type: DateAdapter },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DATE_FORMATS,] }] },
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with custom icon
 */
class DatepickerCustomIconExample {
}
DatepickerCustomIconExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-custom-icon-example',
                template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"><mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with custom date classes
 */
class DatepickerDateClassExample {
    constructor() {
        this.dateClass = (d) => {
            /** @type {?} */
            const date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : undefined;
        };
    }
}
DatepickerDateClassExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-date-class-example',
                template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker></mat-form-field>",
                styles: [".example-custom-date-class { background: orange; border-radius: 100%; } "],
                encapsulation: ViewEncapsulation.None,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Disabled datepicker
 */
class DatepickerDisabledExample {
}
DatepickerDisabledExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-disabled-example',
                template: "<p><mat-form-field><input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled=\"disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle><mat-datepicker #dp1></mat-datepicker></mat-form-field></p><p><mat-form-field><input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled=\"disabled\"></mat-datepicker-toggle><mat-datepicker #dp2></mat-datepicker></mat-form-field></p><p><mat-form-field><input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled=\"disabled\"><mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle><mat-datepicker #dp3 disabled=\"false\"></mat-datepicker></mat-form-field></p>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker input and change events
 */
class DatepickerEventsExample {
    constructor() {
        this.events = [];
    }
    /**
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    addEvent(type, event) {
        this.events.push(`${type}: ${event.value}`);
    }
}
DatepickerEventsExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-events-example',
                template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field><div class=\"example-events\"><div *ngFor=\"let e of events\">{{e}}</div></div>",
                styles: [".example-events { width: 400px; height: 200px; border: 1px solid #555; overflow: auto; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with filter validation
 */
class DatepickerFilterExample {
    constructor() {
        this.myFilter = (d) => {
            /** @type {?} */
            const day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
}
DatepickerFilterExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-filter-example',
                template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
/** @type {?} */
const MY_FORMATS = {
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
class DatepickerFormatsExample {
    constructor() {
        this.date = new FormControl(moment());
    }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = MAT_MOMENT_DATE_FORMATS;
/**
 * \@title Datepicker with different locale
 */
class DatepickerLocaleExample {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @return {?}
     */
    french() {
        this.adapter.setLocale('fr');
    }
}
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
DatepickerLocaleExample.ctorParameters = () => [
    { type: DateAdapter }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with min & max validation
 */
class DatepickerMinMaxExample {
    constructor() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
}
DatepickerMinMaxExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-min-max-example',
                template: "<mat-form-field class=\"example-full-width\"><input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment$1 = _rollupMoment__default || _rollupMoment;
const ɵ0$1 = MAT_MOMENT_DATE_FORMATS;
/**
 * \@title Datepicker that uses Moment.js dates
 */
class DatepickerMomentExample {
    constructor() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment$1([2017, 0, 1]));
    }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic datepicker
 */
class DatepickerOverviewExample {
}
DatepickerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-overview-example',
                template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker start date
 */
class DatepickerStartViewExample {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
    }
}
DatepickerStartViewExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-start-view-example',
                template: "<mat-form-field><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker touch UI
 */
class DatepickerTouchExample {
}
DatepickerTouchExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-touch-example',
                template: "<mat-form-field class=\"example-full-width\"><input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"><mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle><mat-datepicker touchUi #picker></mat-datepicker></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker selected value
 */
class DatepickerValueExample {
    constructor() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
}
DatepickerValueExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-value-example',
                template: "<mat-form-field><input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle><mat-datepicker #picker1></mat-datepicker></mat-form-field><mat-form-field><input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\" [formControl]=\"serializedDate\"><mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle><mat-datepicker #picker2></mat-datepicker></mat-form-field><mat-form-field><input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\"><mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle><mat-datepicker #picker3></mat-datepicker></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment$2 = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
/** @type {?} */
const MY_FORMATS$1 = {
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
class DatepickerViewsSelectionExample {
    constructor() {
        this.date = new FormControl(moment$2());
    }
    /**
     * @param {?} normalizedYear
     * @return {?}
     */
    chosenYearHandler(normalizedYear) {
        /** @type {?} */
        const ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    }
    /**
     * @param {?} normlizedMonth
     * @param {?} datepicker
     * @return {?}
     */
    chosenMonthHandler(normlizedMonth, datepicker) {
        /** @type {?} */
        const ctrlValue = this.date.value;
        ctrlValue.month(normlizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }
}
DatepickerViewsSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-views-selection-example',
                template: "<mat-form-field><input matInput [matDatepicker]=\"dp\" placeholder=\"Month and Year\" [formControl]=\"date\"><mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle><mat-datepicker #dp startView=\"multi-year\" (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, dp)\" panelClass=\"example-month-picker\"></mat-datepicker></mat-form-field>",
                styles: [".example-month-picker .mat-calendar-period-button { pointer-events: none; } .example-month-picker .mat-calendar-arrow { display: none; } "],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dialog with header, scrollable content and actions
 */
class DialogContentExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
DialogContentExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-content-example',
                template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
DialogContentExample.ctorParameters = () => [
    { type: MatDialog }
];
class DialogContentExampleDialog {
}
DialogContentExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-content-example-dialog',
                template: "<h2 mat-dialog-title>Install Angular</h2><mat-dialog-content class=\"mat-typography\"><h3>Develop across all platforms</h3><p>Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p><h3>Speed &amp; Performance</h3><p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.</p><h3>Incredible tooling</h3><p>Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.</p><h3>Loved by millions</h3><p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.</p><h3>What is Angular?</h3><p>Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop</p><h3>Architecture overview</h3><p>Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.</p><p>The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.</p><p>Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.</p><p>Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.</p><p>Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.</p><p>The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.</p><p>The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).</p><p>An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.</p></mat-dialog-content><mat-dialog-actions align=\"end\"><button mat-button mat-dialog-close>Cancel</button> <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button></mat-dialog-actions>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Injecting data when opening a dialog
 */
class DialogDataExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    }
}
DialogDataExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-data-example',
                template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
DialogDataExample.ctorParameters = () => [
    { type: MatDialog }
];
class DialogDataExampleDialog {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
}
DialogDataExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-data-example-dialog',
                template: "<h1 mat-dialog-title>Favorite Animal</h1><div mat-dialog-content>My favorite animal is:<ul><li><span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda</li><li><span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn</li><li><span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion</li></ul></div>",
            },] },
];
/** @nocollapse */
DialogDataExampleDialog.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dialog elements
 */
class DialogElementsExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
}
DialogElementsExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example',
                template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
DialogElementsExample.ctorParameters = () => [
    { type: MatDialog }
];
class DialogElementsExampleDialog {
}
DialogElementsExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example-dialog',
                template: "<h1 mat-dialog-title>Dialog with elements</h1><div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div><div mat-dialog-actions><button mat-button mat-dialog-close>Close</button></div>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dialog Overview
 */
class DialogOverviewExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
DialogOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example',
                template: "<ol><li><mat-form-field><input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\"></mat-form-field></li><li><button mat-raised-button (click)=\"openDialog()\">Pick one</button></li><li *ngIf=\"animal\">You chose: <i>{{animal}}</i></li></ol>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
DialogOverviewExample.ctorParameters = () => [
    { type: MatDialog }
];
class DialogOverviewExampleDialog {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example-dialog',
                template: "<h1 mat-dialog-title>Hi {{data.name}}</h1><div mat-dialog-content><p>What's your favorite animal?</p><mat-form-field><input matInput [(ngModel)]=\"data.animal\"></mat-form-field></div><div mat-dialog-actions><button mat-button (click)=\"onNoClick()\">No Thanks</button> <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button></div>",
            },] },
];
/** @nocollapse */
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic divider
 */
class DividerOverviewExample {
}
DividerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'divider-overview-example',
                template: "<mat-list><mat-list-item>Item 1</mat-list-item><mat-divider></mat-divider><mat-list-item>Item 2</mat-list-item><mat-divider></mat-divider><mat-list-item>Item 3</mat-list-item></mat-list>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Elevation CSS classes
 */
class ElevationOverviewExample {
    constructor() {
        this.isActive = false;
    }
}
ElevationOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'elevation-overview-example',
                styles: [".example-container { padding: 16px; margin-bottom: 16px; } "],
                template: "<div class=\"example-container\" [class.mat-elevation-z2]=\"!isActive\" [class.mat-elevation-z8]=\"isActive\">Example</div><button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Accordion with expand/collapse all toggles
 */
class ExpansionExpandCollapseAllExample {
}
ExpansionExpandCollapseAllExample.decorators = [
    { type: Component, args: [{
                selector: 'expansion-toggle-all-example',
                template: "<div class=\"example-action-buttons\"><button mat-button (click)=\"accordion.openAll()\">Expand All</button> <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button></div><mat-accordion class=\"example-headers-align\" multi><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput type=\"number\" min=\"1\" placeholder=\"Age\"></mat-form-field></mat-expansion-panel><mat-expansion-panel disabled=\"disabled\"><mat-expansion-panel-header><mat-panel-title>Destination</mat-panel-title><mat-panel-description>Type the country name<mat-icon>map</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Country\"></mat-form-field></mat-expansion-panel><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Day of the trip</mat-panel-title><mat-panel-description>Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly=\"readonly\"></mat-form-field><mat-datepicker #picker></mat-datepicker></mat-expansion-panel></mat-accordion>",
                styles: [".example-action-buttons { padding-bottom: 20px; } .example-headers-align .mat-expansion-panel-header-title, .example-headers-align .mat-expansion-panel-header-description { flex-basis: 0; } .example-headers-align .mat-expansion-panel-header-description { justify-content: space-between; align-items: center; } "],
            },] },
];
ExpansionExpandCollapseAllExample.propDecorators = {
    accordion: [{ type: ViewChild, args: [MatAccordion,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic expansion panel
 */
class ExpansionOverviewExample {
    constructor() {
        this.panelOpenState = false;
    }
}
ExpansionOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'expansion-overview-example',
                template: "<mat-accordion><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age</mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput placeholder=\"Age\"></mat-form-field></mat-expansion-panel><mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\"><mat-expansion-panel-header><mat-panel-title>Self aware panel</mat-panel-title><mat-panel-description>Currently I am {{panelOpenState ? 'open' : 'closed'}}</mat-panel-description></mat-expansion-panel-header><p>I'm visible because I am open</p></mat-expansion-panel></mat-accordion>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Expansion panel as accordion
 */
class ExpansionStepsExample {
    constructor() {
        this.step = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setStep(index) {
        this.step = index;
    }
    /**
     * @return {?}
     */
    nextStep() {
        this.step++;
    }
    /**
     * @return {?}
     */
    prevStep() {
        this.step--;
    }
}
ExpansionStepsExample.decorators = [
    { type: Component, args: [{
                selector: 'expansion-steps-example',
                template: "<mat-accordion class=\"example-headers-align\"><mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle><mat-expansion-panel-header><mat-panel-title>Personal data</mat-panel-title><mat-panel-description>Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"First name\"></mat-form-field><mat-form-field><input matInput type=\"number\" min=\"1\" placeholder=\"Age\"></mat-form-field><mat-action-row><button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button></mat-action-row></mat-expansion-panel><mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle><mat-expansion-panel-header><mat-panel-title>Destination</mat-panel-title><mat-panel-description>Type the country name<mat-icon>map</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Country\"></mat-form-field><mat-action-row><button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button> <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button></mat-action-row></mat-expansion-panel><mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle><mat-expansion-panel-header><mat-panel-title>Day of the trip</mat-panel-title><mat-panel-description>Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly=\"readonly\"></mat-form-field><mat-datepicker #picker></mat-datepicker><mat-action-row><button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button> <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button></mat-action-row></mat-expansion-panel></mat-accordion>",
                styles: [".example-headers-align .mat-expansion-panel-header-title, .example-headers-align .mat-expansion-panel-header-description { flex-basis: 0; } .example-headers-align .mat-expansion-panel-header-description { justify-content: space-between; align-items: center; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Monitoring focus with FocusMonitor
 */
class FocusMonitorDirectivesExample {
    /**
     * @param {?} ngZone
     * @param {?} cdr
     */
    constructor(ngZone, cdr) {
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    /**
     * @return {?}
     */
    markForCheck() {
        this.ngZone.run(() => this.cdr.markForCheck());
    }
}
FocusMonitorDirectivesExample.decorators = [
    { type: Component, args: [{
                selector: 'focus-monitor-directives-example',
                template: "<div class=\"example-focus-monitor\"><button cdkMonitorSubtreeFocus (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">Focus Monitored Element ({{elementOrigin}})</button></div><div class=\"example-focus-monitor\"><div cdkMonitorSubtreeFocus (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\"><p>Focus Monitored Subtree ({{subtreeOrigin}})</p><button>Child Button 1</button> <button>Child Button 2</button></div></div>",
                styles: [".example-focus-monitor { padding: 20px; } .example-focus-monitor .cdk-mouse-focused { background: rgba(255, 0, 0, 0.5); } .example-focus-monitor .cdk-keyboard-focused { background: rgba(0, 255, 0, 0.5); } .example-focus-monitor .cdk-touch-focused { background: rgba(0, 0, 255, 0.5); } .example-focus-monitor .cdk-program-focused { background: rgba(255, 0, 255, 0.5); } "]
            },] },
];
/** @nocollapse */
FocusMonitorDirectivesExample.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Focusing with a specific FocusOrigin
 */
class FocusMonitorFocusViaExample {
    /**
     * @param {?} focusMonitor
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(focusMonitor, cdr, ngZone) {
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.origin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.monitoredEl)
            .subscribe(origin => this.ngZone.run(() => {
            this.origin = this.formatOrigin(origin);
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.monitoredEl);
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
}
FocusMonitorFocusViaExample.decorators = [
    { type: Component, args: [{
                selector: 'focus-monitor-focus-via-example',
                template: "<div class=\"example-focus-monitor\"><button #monitored>1. Focus Monitored Element ({{origin}})</button> <button #unmonitored>2. Not Monitored</button></div><mat-form-field><mat-label>Simulated focus origin</mat-label><mat-select #simulatedOrigin value=\"mouse\"><mat-option value=\"mouse\">Mouse</mat-option><mat-option value=\"keyboard\">Keyboard</mat-option><mat-option value=\"touch\">Touch</mat-option><mat-option value=\"program\">Programmatic</mat-option></mat-select></mat-form-field><button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">Focus button #1</button> <button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">Focus button #2</button>",
                styles: [".example-focus-monitor { padding: 20px; } .example-focus-monitor .cdk-mouse-focused { background: rgba(255, 0, 0, 0.5); } .example-focus-monitor .cdk-keyboard-focused { background: rgba(0, 255, 0, 0.5); } .example-focus-monitor .cdk-touch-focused { background: rgba(0, 0, 255, 0.5); } .example-focus-monitor .cdk-program-focused { background: rgba(255, 0, 255, 0.5); } .example-focus-monitor button:focus { box-shadow: 0 0 30px cyan; } "]
            },] },
];
/** @nocollapse */
FocusMonitorFocusViaExample.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
FocusMonitorFocusViaExample.propDecorators = {
    monitoredEl: [{ type: ViewChild, args: ['monitored',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Monitoring focus with FocusMonitor
 */
class FocusMonitorOverviewExample {
    /**
     * @param {?} focusMonitor
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(focusMonitor, cdr, ngZone) {
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.element)
            .subscribe(origin => this.ngZone.run(() => {
            this.elementOrigin = this.formatOrigin(origin);
            this.cdr.markForCheck();
        }));
        this.focusMonitor.monitor(this.subtree, true)
            .subscribe(origin => this.ngZone.run(() => {
            this.subtreeOrigin = this.formatOrigin(origin);
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.element);
        this.focusMonitor.stopMonitoring(this.subtree);
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
}
FocusMonitorOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'focus-monitor-overview-example',
                template: "<div class=\"example-focus-monitor\"><button #element>Focus Monitored Element ({{elementOrigin}})</button></div><div class=\"example-focus-monitor\"><div #subtree><p>Focus Monitored Subtree ({{subtreeOrigin}})</p><button>Child Button 1</button> <button>Child Button 2</button></div></div>",
                styles: [".example-focus-monitor { padding: 20px; } .example-focus-monitor .cdk-mouse-focused { background: rgba(255, 0, 0, 0.5); } .example-focus-monitor .cdk-keyboard-focused { background: rgba(0, 255, 0, 0.5); } .example-focus-monitor .cdk-touch-focused { background: rgba(0, 0, 255, 0.5); } .example-focus-monitor .cdk-program-focused { background: rgba(255, 0, 255, 0.5); } "]
            },] },
];
/** @nocollapse */
FocusMonitorOverviewExample.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
FocusMonitorOverviewExample.propDecorators = {
    element: [{ type: ViewChild, args: ['element',] }],
    subtree: [{ type: ViewChild, args: ['subtree',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field appearance variants
 */
class FormFieldAppearanceExample {
}
FormFieldAppearanceExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-appearance-example',
                template: "<p><mat-form-field appearance=\"legacy\"><mat-label>Legacy form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p><p><mat-form-field appearance=\"standard\"><mat-label>Standard form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p><p><mat-form-field appearance=\"fill\"><mat-label>Fill form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p><p><mat-form-field appearance=\"outline\"><mat-label>Outline form field</mat-label><input matInput placeholder=\"Placeholder\"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field></p>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with custom telephone number input control.
 */
class FormFieldCustomControlExample {
}
FormFieldCustomControlExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-custom-control-example',
                template: "<mat-form-field><example-tel-input placeholder=\"Phone number\" required></example-tel-input><mat-icon matSuffix>phone</mat-icon><mat-hint>Include area code</mat-hint></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * Data structure for holding telephone number.
 */
class MyTel {
    /**
     * @param {?} area
     * @param {?} exchange
     * @param {?} subscriber
     */
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
/**
 * Custom `MatFormFieldControl` for telephone number input.
 */
class MyTelInput {
    /**
     * @param {?} fb
     * @param {?} fm
     * @param {?} elRef
     */
    constructor(fb, fm, elRef) {
        this.fm = fm;
        this.elRef = elRef;
        this.stateChanges = new Subject();
        this.focused = false;
        this.ngControl = null;
        this.errorState = false;
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this.describedBy = '';
        this._required = false;
        this._disabled = false;
        this.parts = fb.group({
            area: '',
            exchange: '',
            subscriber: '',
        });
        fm.monitor(elRef, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    /**
     * @return {?}
     */
    get empty() {
        const { value: { area, exchange, subscriber } } = this.parts;
        return !area && !exchange && !subscriber;
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() { return this.focused || !this.empty; }
    /**
     * @return {?}
     */
    get placeholder() { return this._placeholder; }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get value() {
        const { value: { area, exchange, subscriber } } = this.parts;
        if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
            return new MyTel(area, exchange, subscriber);
        }
        return null;
    }
    /**
     * @param {?} tel
     * @return {?}
     */
    set value(tel) {
        const { area, exchange, subscriber } = tel || new MyTel('', '', '');
        this.parts.setValue({ area, exchange, subscriber });
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef);
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() != 'input') {
            (/** @type {?} */ (this.elRef.nativeElement.querySelector('input'))).focus();
        }
    }
}
MyTelInput.nextId = 0;
MyTelInput.decorators = [
    { type: Component, args: [{
                selector: 'example-tel-input',
                template: "<div [formGroup]=\"parts\" class=\"example-tel-input-container\"><input class=\"example-tel-input-element\" formControlName=\"area\" size=\"3\"> <span class=\"example-tel-input-spacer\">&ndash;</span> <input class=\"example-tel-input-element\" formControlName=\"exchange\" size=\"3\"> <span class=\"example-tel-input-spacer\">&ndash;</span> <input class=\"example-tel-input-element\" formControlName=\"subscriber\" size=\"4\"></div>",
                styles: [".example-tel-input-container { display: flex; } .example-tel-input-element { border: none; background: none; padding: 0; outline: none; font: inherit; text-align: center; } .example-tel-input-spacer { opacity: 0; transition: opacity 200ms; } :host.example-floating .example-tel-input-spacer { opacity: 1; } "],
                providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
                host: {
                    '[class.example-floating]': 'shouldLabelFloat',
                    '[id]': 'id',
                    '[attr.aria-describedby]': 'describedBy',
                }
            },] },
];
/** @nocollapse */
MyTelInput.ctorParameters = () => [
    { type: FormBuilder },
    { type: FocusMonitor },
    { type: ElementRef }
];
MyTelInput.propDecorators = {
    placeholder: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with error messages
 */
class FormFieldErrorExample {
    constructor() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
    }
    /**
     * @return {?}
     */
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
}
FormFieldErrorExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-error-example',
                template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required><mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error></mat-form-field></div>",
                styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with hints
 */
class FormFieldHintExample {
}
FormFieldHintExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-hint-example',
                template: "<div class=\"example-container\"><mat-form-field hintLabel=\"Max 10 characters\"><input matInput #input maxlength=\"10\" placeholder=\"Enter some input\"><mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint></mat-form-field><mat-form-field><mat-select placeholder=\"Select me\"><mat-option value=\"option\">Option</mat-option></mat-select><mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint></mat-form-field></div>",
                styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with label
 */
class FormFieldLabelExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
}
FormFieldLabelExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-label-example',
                template: "<div class=\"example-container\"><form class=\"example-container\" [formGroup]=\"options\"><mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox><div><label>Float label:</label><mat-radio-group formControlName=\"floatLabel\"><mat-radio-button value=\"auto\">Auto</mat-radio-button><mat-radio-button value=\"always\">Always</mat-radio-button><mat-radio-button value=\"never\">Never</mat-radio-button></mat-radio-group></div></form><mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\"><input matInput placeholder=\"Simple placeholder\" required></mat-form-field><mat-form-field [floatLabel]=\"options.value.floatLabel\"><mat-label>Both a label and a placeholder</mat-label><input matInput placeholder=\"Simple placeholder\"></mat-form-field><mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\"><mat-select required><mat-option>-- None --</mat-option><mat-option value=\"option\">Option</mat-option></mat-select><mat-label><mat-icon>favorite</mat-icon><b>Fancy</b> <i>label</i></mat-label></mat-form-field></div>",
                styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } .example-container form { margin-bottom: 20px; } .example-container form > * { margin: 5px 0; } .example-container .mat-radio-button { margin: 0 5px; } "],
            },] },
];
/** @nocollapse */
FormFieldLabelExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Simple form field
 */
class FormFieldOverviewExample {
}
FormFieldOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-overview-example',
                template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Input\"></mat-form-field><mat-form-field><textarea matInput placeholder=\"Textarea\"></textarea></mat-form-field><mat-form-field><mat-select placeholder=\"Select\"><mat-option value=\"option\">Option</mat-option></mat-select></mat-form-field></div>",
                styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with prefix & suffix
 */
class FormFieldPrefixSuffixExample {
    constructor() {
        this.hide = true;
    }
}
FormFieldPrefixSuffixExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-prefix-suffix-example',
                template: "<div class=\"example-container\"><mat-form-field><input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"><mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon></mat-form-field><mat-form-field><input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\"> <span matPrefix>$&nbsp;</span> <span matSuffix>.00</span></mat-form-field></div>",
                styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } .example-right-align { text-align: right; } input.example-right-align::-webkit-outer-spin-button, input.example-right-align::-webkit-inner-spin-button { display: none; } input.example-right-align { -moz-appearance: textfield; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field theming
 */
class FormFieldThemingExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, Validators.min(10)],
        });
    }
    /**
     * @return {?}
     */
    getFontSize() {
        return Math.max(10, this.options.value.fontSize);
    }
}
FormFieldThemingExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-theming-example',
                template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\"><mat-form-field [color]=\"options.value.color\"><mat-select placeholder=\"Color\" formControlName=\"color\"><mat-option value=\"primary\">Primary</mat-option><mat-option value=\"accent\">Accent</mat-option><mat-option value=\"warn\">Warn</mat-option></mat-select></mat-form-field><mat-form-field [color]=\"options.value.color\"><input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\"><mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error></mat-form-field></form>",
                styles: [".example-container { display: flex; flex-direction: column; } .example-container > * { width: 100%; } "],
            },] },
];
/** @nocollapse */
FormFieldThemingExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dynamic grid-list
 */
class GridListDynamicExample {
    constructor() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
}
GridListDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'grid-list-dynamic-example',
                template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\"><mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">{{tile.text}}</mat-grid-tile></mat-grid-list>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic grid-list
 */
class GridListOverviewExample {
}
GridListOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'grid-list-overview-example',
                styles: ["mat-grid-tile { background: lightblue; } "],
                template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\"><mat-grid-tile>1</mat-grid-tile><mat-grid-tile>2</mat-grid-tile><mat-grid-tile>3</mat-grid-tile><mat-grid-tile>4</mat-grid-tile></mat-grid-list>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic icons
 */
class IconOverviewExample {
}
IconOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-overview-example',
                template: "<mat-icon>home</mat-icon>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title SVG icons
 */
class IconSvgExample {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
}
IconSvgExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-svg-example',
                template: "<mat-icon svgIcon=\"thumbs-up\"></mat-icon>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
IconSvgExample.ctorParameters = () => [
    { type: MatIconRegistry },
    { type: DomSanitizer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Input with a clear button
 */
class InputClearableExample {
    constructor() {
        this.value = 'Clear me';
    }
}
InputClearableExample.decorators = [
    { type: Component, args: [{
                selector: 'input-clearable-example',
                template: "<mat-form-field class=\"example-form-field\"><input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"> <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\"><mat-icon>close</mat-icon></button></mat-form-field>",
                styles: [".example-form-field { width: 200px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
class MyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/**
 * \@title Input with a custom ErrorStateMatcher
 */
class InputErrorStateMatcherExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
InputErrorStateMatcherExample.decorators = [
    { type: Component, args: [{
                selector: 'input-error-state-matcher-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"><mat-hint>Errors appear instantly!</mat-hint><mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error><mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Input with error messages
 */
class InputErrorsExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
    }
}
InputErrorsExample.decorators = [
    { type: Component, args: [{
                selector: 'input-errors-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"><mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error><mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Inputs in a form
 */
class InputFormExample {
}
InputFormExample.decorators = [
    { type: Component, args: [{
                selector: 'input-form-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Company (disabled)\" disabled=\"disabled\" value=\"Google\"></mat-form-field><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"First name\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Long Last Name That Will Be Truncated\"></mat-form-field></td></tr></table><p><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea></mat-form-field><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Address 2\"></textarea></mat-form-field></p><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"City\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"State\"></mat-form-field></td><td><mat-form-field class=\"example-full-width\"><input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\"><mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint></mat-form-field></td></tr></table></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Input with hints
 */
class InputHintExample {
}
InputHintExample.decorators = [
    { type: Component, args: [{
                selector: 'input-hint-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput #message maxlength=\"256\" placeholder=\"Message\"><mat-hint align=\"start\"><strong>Don't disclose personal info</strong></mat-hint><mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic Inputs
 */
class InputOverviewExample {
}
InputOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'input-overview-example',
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input matInput placeholder=\"Favorite food\" value=\"Sushi\"></mat-form-field><mat-form-field class=\"example-full-width\"><textarea matInput placeholder=\"Leave a comment\"></textarea></mat-form-field></form>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Inputs with prefixes and suffixes
 */
class InputPrefixSuffixExample {
}
InputPrefixSuffixExample.decorators = [
    { type: Component, args: [{
                selector: 'input-prefix-suffix-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><span matPrefix>+1 &nbsp;</span> <input type=\"tel\" matInput placeholder=\"Telephone\"><mat-icon matSuffix>mode_edit</mat-icon></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic list
 */
class ListOverviewExample {
}
ListOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'list-overview-example',
                template: "<mat-list role=\"list\"><mat-list-item role=\"listitem\">Item 1</mat-list-item><mat-list-item role=\"listitem\">Item 2</mat-list-item><mat-list-item role=\"listitem\">Item 3</mat-list-item></mat-list>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title List with sections
 */
class ListSectionsExample {
    constructor() {
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
}
ListSectionsExample.decorators = [
    { type: Component, args: [{
                selector: 'list-sections-example',
                styles: [".mat-list-icon { color: rgba(0, 0, 0, 0.54); } "],
                template: "<mat-list><h3 mat-subheader>Folders</h3><mat-list-item *ngFor=\"let folder of folders\"><mat-icon mat-list-icon>folder</mat-icon><h4 mat-line>{{folder.name}}</h4><p mat-line>{{folder.updated | date}}</p></mat-list-item><mat-divider></mat-divider><h3 mat-subheader>Notes</h3><mat-list-item *ngFor=\"let note of notes\"><mat-icon mat-list-icon>note</mat-icon><h4 mat-line>{{note.name}}</h4><p mat-line>{{note.updated | date}}</p></mat-list-item></mat-list>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title List with selection
 */
class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'list-selection-example',
                styles: ["/** No styles for this example. */ "],
                template: "<mat-selection-list #shoes><mat-list-option *ngFor=\"let shoe of typesOfShoes\">{{shoe}}</mat-list-option></mat-selection-list><p>Options selected: {{shoes.selectedOptions.selected.length}}</p>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Menu with icons
 */
class MenuIconsExample {
}
MenuIconsExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-icons-example',
                template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon></button><mat-menu #menu=\"matMenu\"><button mat-menu-item><mat-icon>dialpad</mat-icon><span>Redial</span></button> <button mat-menu-item disabled=\"disabled\"><mat-icon>voicemail</mat-icon><span>Check voicemail</span></button> <button mat-menu-item><mat-icon>notifications_off</mat-icon><span>Disable alerts</span></button></mat-menu>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic menu
 */
class MenuOverviewExample {
}
MenuOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-overview-example',
                template: "<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button><mat-menu #menu=\"matMenu\"><button mat-menu-item>Item 1</button> <button mat-menu-item>Item 2</button></mat-menu>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Nested menu
 */
class NestedMenuExample {
}
NestedMenuExample.decorators = [
    { type: Component, args: [{
                selector: 'nested-menu-example',
                template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button><mat-menu #animals=\"matMenu\"><button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button> <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button></mat-menu><mat-menu #vertebrates=\"matMenu\"><button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button> <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button> <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button> <button mat-menu-item>Birds</button> <button mat-menu-item>Mammals</button></mat-menu><mat-menu #invertebrates=\"matMenu\"><button mat-menu-item>Insects</button> <button mat-menu-item>Molluscs</button> <button mat-menu-item>Crustaceans</button> <button mat-menu-item>Corals</button> <button mat-menu-item>Arachnids</button> <button mat-menu-item>Velvet worms</button> <button mat-menu-item>Horseshoe crabs</button></mat-menu><mat-menu #fish=\"matMenu\"><button mat-menu-item>Baikal oilfish</button> <button mat-menu-item>Bala shark</button> <button mat-menu-item>Ballan wrasse</button> <button mat-menu-item>Bamboo shark</button> <button mat-menu-item>Banded killifish</button></mat-menu><mat-menu #amphibians=\"matMenu\"><button mat-menu-item>Sonoran desert toad</button> <button mat-menu-item>Western toad</button> <button mat-menu-item>Arroyo toad</button> <button mat-menu-item>Yosemite toad</button></mat-menu><mat-menu #reptiles=\"matMenu\"><button mat-menu-item>Banded Day Gecko</button> <button mat-menu-item>Banded Gila Monster</button> <button mat-menu-item>Black Tree Monitor</button> <button mat-menu-item>Blue Spiny Lizard</button> <button mat-menu-item disabled=\"disabled\">Velociraptor</button></mat-menu>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable paginator
 */
class PaginatorConfigurableExample {
    constructor() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    /**
     * @param {?} setPageSizeOptionsInput
     * @return {?}
     */
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
}
PaginatorConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'paginator-configurable-example',
                template: "<mat-form-field>List length: <input matInput [(ngModel)]=\"length\"></mat-form-field><mat-form-field>Page size: <input matInput [(ngModel)]=\"pageSize\"></mat-form-field><mat-form-field>Page size options: <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"></mat-form-field><mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event\"></mat-paginator><div *ngIf=\"pageEvent\"><h5>Page Change Event Properties</h5><div>List length: {{pageEvent.length}}</div><div>Page size: {{pageEvent.pageSize}}</div><div>Page index: {{pageEvent.pageIndex}}</div></div>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Paginator
 */
class PaginatorOverviewExample {
}
PaginatorOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'paginator-overview-example',
                template: "<mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Buffer progress-bar
 */
class ProgressBarBufferExample {
}
ProgressBarBufferExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-buffer-example',
                template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable progress-bar
 */
class ProgressBarConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
}
ProgressBarConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-configurable-example',
                template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Progress bar configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><mat-radio-group [(ngModel)]=\"mode\"><mat-radio-button class=\"example-margin\" value=\"determinate\">Determinate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"buffer\">Buffer</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"query\">Query</mat-radio-button></mat-radio-group></section><section class=\"example-section\" *ngIf=\"mode === 'determinate' || mode === 'buffer'\"><label class=\"example-margin\">Progress:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider></section><section class=\"example-section\" *ngIf=\"mode === 'buffer'\"><label class=\"example-margin\">Buffer:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider></section></mat-card-content></mat-card><mat-card><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\"></mat-progress-bar></section></mat-card-content></mat-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Determinate progress-bar
 */
class ProgressBarDeterminateExample {
}
ProgressBarDeterminateExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-determinate-example',
                template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Indeterminate progress-bar
 */
class ProgressBarIndeterminateExample {
}
ProgressBarIndeterminateExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-indeterminate-example',
                template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Query progress-bar
 */
class ProgressBarQueryExample {
}
ProgressBarQueryExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-query-example',
                template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable progress spinner
 */
class ProgressSpinnerConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
}
ProgressSpinnerConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-spinner-configurable-example',
                template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Progress spinner configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><mat-radio-group [(ngModel)]=\"mode\"><mat-radio-button class=\"example-margin\" value=\"determinate\">Determinate</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</mat-radio-button></mat-radio-group></section><section class=\"example-section\" *ngIf=\"mode === 'determinate'\"><label class=\"example-margin\">Progress:</label><mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider></section></mat-card-content></mat-card><mat-card><mat-card-content><h2 class=\"example-h2\">Result</h2><mat-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></mat-progress-spinner></mat-card-content></mat-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic progress-spinner
 */
class ProgressSpinnerOverviewExample {
}
ProgressSpinnerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-spinner-overview-example',
                template: "<mat-spinner></mat-spinner>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Radios with ngModel
 */
class RadioNgModelExample {
    constructor() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
}
RadioNgModelExample.decorators = [
    { type: Component, args: [{
                selector: 'radio-ng-model-example',
                template: "<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\"><mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">{{season}}</mat-radio-button></mat-radio-group><div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>",
                styles: [".example-radio-group { display: inline-flex; flex-direction: column; } .example-radio-button { margin: 5px; } .example-selected-value { margin: 15px 0; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic radios
 */
class RadioOverviewExample {
}
RadioOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'radio-overview-example',
                template: "<mat-radio-group><mat-radio-button value=\"1\">Option 1</mat-radio-button><mat-radio-button value=\"2\">Option 2</mat-radio-button></mat-radio-group>",
                styles: [".mat-radio-button ~ .mat-radio-button { padding-right: 16px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title MatRipple basic usage
 */
class RippleOverviewExample {
    constructor() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
}
RippleOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'ripple-overview-example',
                template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox><mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox><mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox><mat-form-field class=\"example-ripple-form-field\"><input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\"></mat-form-field><mat-form-field class=\"example-ripple-form-field\"><input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\"></mat-form-field><div class=\"example-ripple-container mat-elevation-z4\" matRipple [matRippleCentered]=\"centered\" [matRippleDisabled]=\"disabled\" [matRippleUnbounded]=\"unbounded\" [matRippleRadius]=\"radius\" [matRippleColor]=\"color\">Click me</div>",
                styles: [".example-ripple-container { cursor: pointer; text-align: center; width: 300px; height: 300px; line-height: 300px; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: transparent; } /** Styles to make the demo look better. */ .example-ripple-checkbox { margin: 6px 12px 6px 0; } .example-ripple-form-field { margin: 0 12px 0 0; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with custom trigger text
 */
class SelectCustomTriggerExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectCustomTriggerExample.decorators = [
    { type: Component, args: [{
                selector: 'select-custom-trigger-example',
                template: "<mat-form-field><mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple=\"multiple\"><mat-select-trigger>{{toppings.value ? toppings.value[0] : ''}} <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">(+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})</span></mat-select-trigger><mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option></mat-select></mat-form-field>",
                styles: [".example-additional-selection { opacity: 0.75; font-size: 0.75em; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Disabled select
 */
class SelectDisabledExample {
    constructor() {
        this.disableSelect = new FormControl(false);
    }
}
SelectDisabledExample.decorators = [
    { type: Component, args: [{
                selector: 'select-disabled-example',
                template: "<p><mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox></p><h4>mat-select</h4><mat-form-field><mat-select placeholder=\"Choose an option\" [disabled]=\"disableSelect.value\"><mat-option value=\"option1\">Option 1</mat-option><mat-option value=\"option2\" disabled=\"disabled\">Option 2 (disabled)</mat-option><mat-option value=\"option3\">Option 3</mat-option></mat-select></mat-form-field><h4>native html select</h4><mat-form-field><select matNativeControl placeholder=\"Choose an option\" [disabled]=\"disableSelect.value\"><option value=\"\" selected=\"selected\"></option><option value=\"volvo\">Volvo</option><option value=\"saab\" disabled=\"disabled\">Saab</option><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></select></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
let MyErrorStateMatcher$1 = class MyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
};
/**
 * \@title Select with a custom ErrorStateMatcher
 */
class SelectErrorStateMatcherExample {
    constructor() {
        this.selected = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.selectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.nativeSelectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher$1();
    }
}
SelectErrorStateMatcherExample.decorators = [
    { type: Component, args: [{
                selector: 'select-error-state-matcher-example',
                template: "<h4>mat-select</h4><mat-form-field><mat-select placeholder=\"Choose one\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\"><mat-option>Clear</mat-option><mat-option value=\"valid\">Valid option</mat-option><mat-option value=\"invalid\">Invalid option</mat-option></mat-select><mat-hint>Errors appear instantly!</mat-hint><mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error><mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">Your selection is invalid</mat-error></mat-form-field><h4>native html select</h4><mat-form-field class=\"demo-full-width\"><select matNativeControl placeholder=\"Choose one\" [formControl]=\"nativeSelectFormControl\" [errorStateMatcher]=\"matcher\"><option value=\"\"></option><option value=\"valid\" selected=\"selected\">Valid option</option><option value=\"invalid\">Invalid option</option></select><mat-error *ngIf=\"nativeSelectFormControl.hasError('required')\">You must make a selection</mat-error><mat-error *ngIf=\"nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')\">Your selection is invalid</mat-error></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select in a form
 */
class SelectFormExample {
    constructor() {
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
}
SelectFormExample.decorators = [
    { type: Component, args: [{
                selector: 'select-form-example',
                template: "<form><h4>mat-select</h4><mat-form-field><mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\"><mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{food.viewValue}}</mat-option></mat-select></mat-form-field><p>Selected food: {{selectedValue}}</p><h4>native html select</h4><mat-form-field><select matNativeControl placeholder=\"Favorite car\" [(ngModel)]=\"selectedCar\" name=\"car\"><option value=\"\" selected=\"selected\"></option><option *ngFor=\"let car of cars\" [value]=\"car.value\">{{car.viewValue}}</option></select></mat-form-field><p>Selected car: {{selectedCar}}</p></form>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with form field features
 */
class SelectHintErrorExample {
    constructor() {
        this.animalControl = new FormControl('', [Validators.required]);
        this.selectFormControl = new FormControl('', Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
}
SelectHintErrorExample.decorators = [
    { type: Component, args: [{
                selector: 'select-hint-error-example',
                template: "<h4>mat select</h4><mat-form-field><mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required><mat-option>--</mat-option><mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">{{animal.name}}</mat-option></mat-select><mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error><mat-hint>{{animalControl.value?.sound}}</mat-hint></mat-form-field><h4>native html select</h4><mat-form-field><mat-label>Select your car (required)</mat-label><select matNativeControl required [formControl]=\"selectFormControl\"><option label=\"--select something --\"></option><option value=\"saab\">Saab</option><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></select><mat-error *ngIf=\"selectFormControl.hasError('required')\">This field is required</mat-error><mat-hint>You can pick up your favorite car here</mat-hint></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with multiple selection
 */
class SelectMultipleExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectMultipleExample.decorators = [
    { type: Component, args: [{
                selector: 'select-multiple-example',
                template: "<mat-form-field><mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple=\"multiple\"><mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option></mat-select></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with no option ripple
 */
class SelectNoRippleExample {
}
SelectNoRippleExample.decorators = [
    { type: Component, args: [{
                selector: 'select-no-ripple-example',
                template: "<mat-form-field><mat-select placeholder=\"Select an option\" disableRipple><mat-option value=\"1\">Option 1</mat-option><mat-option value=\"2\">Option 2</mat-option><mat-option value=\"3\">Option 3</mat-option></mat-select></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with option groups
 */
class SelectOptgroupExample {
    constructor() {
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
}
SelectOptgroupExample.decorators = [
    { type: Component, args: [{
                selector: 'select-optgroup-example',
                template: "<h4>mat-select</h4><mat-form-field><mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\"><mat-option>-- None --</mat-option><mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\"><mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">{{pokemon.viewValue}}</mat-option></mat-optgroup></mat-select></mat-form-field><h4>native html select</h4><mat-form-field><select matNativeControl><optgroup label=\"Swedish Cars\"><option value=\"volvo\">volvo</option><option value=\"saab\">Saab</option></optgroup><optgroup label=\"German Cars\"><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></optgroup></select></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic select
 */
class SelectOverviewExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
}
SelectOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'select-overview-example',
                template: "<h4>Basic mat-select</h4><mat-form-field><mat-select placeholder=\"Favorite food\"><mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{food.viewValue}}</mat-option></mat-select></mat-form-field><h4>Basic native select</h4><mat-form-field><select matNativeControl required><option value=\"volvo\">Volvo</option><option value=\"saab\">Saab</option><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></select></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with custom panel styling
 */
class SelectPanelClassExample {
    constructor() {
        this.panelColor = new FormControl('red');
    }
}
SelectPanelClassExample.decorators = [
    { type: Component, args: [{
                selector: 'select-panel-class-example',
                template: "<mat-form-field><mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\" panelClass=\"example-panel-{{panelColor.value}}\"><mat-option value=\"red\">Red</mat-option><mat-option value=\"green\">Green</mat-option><mat-option value=\"blue\">Blue</mat-option></mat-select></mat-form-field>",
                styles: [".example-panel-red.mat-select-panel { background: rgba(255, 0, 0, 0.5); } .example-panel-green.mat-select-panel { background: rgba(0, 255, 0, 0.5); } .example-panel-blue.mat-select-panel { background: rgba(0, 0, 255, 0.5); } "],
                // Encapsulation has to be disabled in order for the
                // component style to apply to the select panel.
                encapsulation: ViewEncapsulation.None,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with reset option
 */
class SelectResetExample {
    constructor() {
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
}
SelectResetExample.decorators = [
    { type: Component, args: [{
                selector: 'select-reset-example',
                template: "<h4>mat-select</h4><mat-form-field><mat-select placeholder=\"State\"><mat-option>None</mat-option><mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option></mat-select></mat-form-field><h4>native html select</h4><mat-form-field><mat-label>Select your car</mat-label><select matNativeControl id=\"mySelectId\"><option value=\"\" disabled=\"disabled\" selected=\"selected\"></option><option value=\"volvo\">Volvo</option><option value=\"saab\">Saab</option><option value=\"mercedes\">Mercedes</option><option value=\"audi\">Audi</option></select></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Select with 2-way value binding
 */
class SelectValueBindingExample {
    constructor() {
        this.selected = 'option2';
    }
}
SelectValueBindingExample.decorators = [
    { type: Component, args: [{
                selector: 'select-value-binding-example',
                template: "<mat-form-field><mat-select [(value)]=\"selected\"><mat-option>None</mat-option><mat-option value=\"option1\">Option 1</mat-option><mat-option value=\"option2\">Option 2</mat-option><mat-option value=\"option3\">Option 3</mat-option></mat-select></mat-form-field><p>You selected: {{selected}}</p>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Autosize sidenav
 */
class SidenavAutosizeExample {
    constructor() {
        this.showFiller = false;
    }
}
SidenavAutosizeExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-autosize-example',
                template: "<mat-drawer-container class=\"example-container\" autosize><mat-drawer #drawer class=\"example-sidenav\" mode=\"side\"><p>Auto-resizing sidenav</p><p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p><button (click)=\"showFiller = !showFiller\" mat-raised-button>Toggle extra text</button></mat-drawer><div class=\"example-sidenav-content\"><button type=\"button\" mat-button (click)=\"drawer.toggle()\">Toggle sidenav</button></div></mat-drawer-container>",
                styles: [".example-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-content { display: flex; height: 100%; align-items: center; justify-content: center; } .example-sidenav { padding: 20px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drawer with explicit backdrop setting
 */
class SidenavBackdropExample {
}
SidenavBackdropExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-backdrop-example',
                template: "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\"><mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer><mat-drawer-content><mat-form-field><mat-label>Sidenav mode</mat-label><mat-select #mode value=\"side\"><mat-option value=\"side\">Side</mat-option><mat-option value=\"over\">Over</mat-option><mat-option value=\"push\">Push</mat-option></mat-select></mat-form-field><mat-form-field><mat-label>Has backdrop</mat-label><mat-select #hasBackdrop><mat-option>Unset</mat-option><mat-option [value]=\"true\">True</mat-option><mat-option [value]=\"false\">False</mat-option></mat-select></mat-form-field><button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button></mat-drawer-content></mat-drawer-container>",
                styles: [".example-container { width: 400px; height: 200px; margin: 10px; border: 1px solid #555; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Sidenav with custom escape and backdrop click behavior
 */
class SidenavDisableCloseExample {
    constructor() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    close(reason) {
        this.reason = reason;
        this.sidenav.close();
    }
}
SidenavDisableCloseExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-disable-close-example',
                template: "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose><p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p></mat-sidenav><mat-sidenav-content><p><button mat-button (click)=\"sidenav.open()\">Open</button></p><p>Closed due to: {{reason}}</p></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } "],
            },] },
];
SidenavDisableCloseExample.propDecorators = {
    sidenav: [{ type: ViewChild, args: ['sidenav',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic drawer
 */
class SidenavDrawerOverviewExample {
}
SidenavDrawerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-drawer-overview-example',
                template: "<mat-drawer-container class=\"example-container\"><mat-drawer mode=\"side\" opened>Drawer content</mat-drawer><mat-drawer-content>Main content</mat-drawer-content></mat-drawer-container>",
                styles: [".example-container { width: 400px; height: 200px; margin: 10px; border: 1px solid #555; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Fixed sidenav
 */
class SidenavFixedExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
}
SidenavFixedExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-fixed-example',
                template: "<ng-container *ngIf=\"shouldRun\"><mat-toolbar class=\"example-header\">Header</mat-toolbar><mat-sidenav-container class=\"example-container\"><mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\" [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\" [fixedBottomGap]=\"options.value.bottom\">{{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav</mat-sidenav><mat-sidenav-content [formGroup]=\"options\"><p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p><p><mat-form-field><input matInput type=\"number\" formControlName=\"top\" placeholder=\"Top gap\"></mat-form-field></p><p><mat-form-field><input matInput type=\"number\" formControlName=\"bottom\" placeholder=\"Bottom gap\"></mat-form-field></p><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p></mat-sidenav-content></mat-sidenav-container><mat-toolbar class=\"example-footer\">Footer</mat-toolbar></ng-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                styles: [".example-container { position: absolute; top: 60px; bottom: 60px; left: 0; right: 0; } .example-sidenav { display: flex; align-items: center; justify-content: center; width: 200px; background: rgba(255, 0, 0, 0.5); } .example-header { position: fixed; top: 0; left: 0; right: 0; } .example-footer { position: fixed; bottom: 0; left: 0; right: 0; } "],
            },] },
];
/** @nocollapse */
SidenavFixedExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Sidenav with configurable mode
 */
class SidenavModeExample {
    constructor() {
        this.mode = new FormControl('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
}
SidenavModeExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-mode-example',
                template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav [mode]=\"mode.value\"><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p><p><mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\"><label>Mode:</label><mat-radio-button value=\"over\">Over</mat-radio-button><mat-radio-button value=\"side\">Side</mat-radio-button><mat-radio-button value=\"push\">Push</mat-radio-button></mat-radio-group></p></mat-sidenav><mat-sidenav-content><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p><p><mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\"><label>Mode:</label><mat-radio-button value=\"over\">Over</mat-radio-button><mat-radio-button value=\"side\">Side</mat-radio-button><mat-radio-button value=\"push\">Push</mat-radio-button></mat-radio-group></p></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-radio-group { display: block; border: 1px solid #555; margin: 20px; padding: 10px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Sidenav open & close behavior
 */
class SidenavOpenCloseExample {
    constructor() {
        this.events = [];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
}
SidenavOpenCloseExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-open-close-example',
                template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\" (closed)=\"events.push('close!')\">Sidenav content</mat-sidenav><mat-sidenav-content><p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p><p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p><p>Events:</p><div class=\"example-events\"><div *ngFor=\"let e of events\">{{e}}</div></div></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-events { width: 300px; height: 200px; overflow: auto; border: 1px solid #555; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic sidenav
 */
class SidenavOverviewExample {
    constructor() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
}
SidenavOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-overview-example',
                template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav><mat-sidenav-content>Main content</mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: #eee; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Implicit main content with two sidenavs
 */
class SidenavPositionExample {
    constructor() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
}
SidenavPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-position-example',
                template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav opened mode=\"side\">Start content</mat-sidenav><mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>Implicit main content</mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Responsive sidenav
 */
class SidenavResponsiveExample {
    /**
     * @param {?} changeDetectorRef
     * @param {?} media
     */
    constructor(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
SidenavResponsiveExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-responsive-example',
                template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\"><mat-toolbar color=\"primary\" class=\"example-toolbar\"><button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button><h1 class=\"example-app-name\">Responsive App</h1></mat-toolbar><mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\"><mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\"><mat-nav-list><a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a></mat-nav-list></mat-sidenav><mat-sidenav-content><p *ngFor=\"let content of fillerContent\">{{content}}</p></mat-sidenav-content></mat-sidenav-container></div><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                styles: [".example-container { display: flex; flex-direction: column; position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-is-mobile .example-toolbar { position: fixed; /* Make sure the toolbar will stay on top of the content as it scrolls past. */ z-index: 2; } h1.example-app-name { margin-left: 8px; } .example-sidenav-container { /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */ flex: 1; } .example-is-mobile .example-sidenav-container { /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the `<body>` to be our scrolling element for mobile layouts. */ flex: 1 0 auto; } "],
            },] },
];
/** @nocollapse */
SidenavResponsiveExample.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: MediaMatcher }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable slide-toggle
 */
class SlideToggleConfigurableExample {
    constructor() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
}
SlideToggleConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-configurable-example',
                template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><mat-radio-group [(ngModel)]=\"color\"><mat-radio-button class=\"example-margin\" value=\"primary\">Primary</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"accent\">Accent</mat-radio-button><mat-radio-button class=\"example-margin\" value=\"warn\">Warn</mat-radio-button></mat-radio-group></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">Slide me!</mat-slide-toggle></section></mat-card-content></mat-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Slide-toggle with forms
 */
class SlideToggleFormsExample {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue]
        });
    }
    /**
     * @return {?}
     */
    onFormSubmit() {
        alert(JSON.stringify(this.formGroup.value, null, 2));
    }
}
SlideToggleFormsExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-forms-example',
                template: "<p>Slide Toggle using a simple NgModel.</p><mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle><p>Slide Toggle inside of a Template-driven form</p><form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate><mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle><mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle><button mat-raised-button type=\"submit\">Save Settings</button></form><p>Slide Toggle inside of a Reactive form</p><form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate><mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle><mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle><p>Form Group Status: {{formGroup.status}}</p><button mat-rasied-button type=\"submit\">Save Settings</button></form>",
                styles: [".example-form mat-slide-toggle { margin: 8px 0; display: block; } "],
            },] },
];
/** @nocollapse */
SlideToggleFormsExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic slide-toggles
 */
class SlideToggleOverviewExample {
}
SlideToggleOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-overview-example',
                template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Configurable slider
 */
class SliderConfigurableExample {
    constructor() {
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
    /**
     * @return {?}
     */
    get tickInterval() {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tickInterval(value) {
        this._tickInterval = coerceNumberProperty(value);
    }
}
SliderConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'slider-configurable-example',
                template: "<mat-card><mat-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\"></mat-form-field><mat-form-field class=\"example-margin\"><input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\"></mat-form-field></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">Auto ticks</mat-checkbox><mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\"><input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\"></mat-form-field></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox><mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox></section><section class=\"example-section\"><mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class=\"result\"><mat-card-content><h2 class=\"example-h2\">Result</h2><mat-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumbLabel]=\"thumbLabel\" [tickInterval]=\"tickInterval\" [(ngModel)]=\"value\" [vertical]=\"vertical\"></mat-slider></mat-card-content></mat-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } .mat-slider-horizontal { width: 300px; } .mat-slider-vertical { height: 300px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Slider with custom thumb label formatting.
 */
class SliderFormattingExample {
    /**
     * @param {?} value
     * @return {?}
     */
    formatLabel(value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
SliderFormattingExample.decorators = [
    { type: Component, args: [{
                selector: 'slider-formatting-example',
                template: "<mat-slider thumbLabel [displayWith]=\"formatLabel\" tickInterval=\"1000\" min=\"1\" max=\"100000\"></mat-slider>",
                styles: ["mat-slider { width: 300px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic slider
 */
class SliderOverviewExample {
}
SliderOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'slider-overview-example',
                template: "<mat-slider></mat-slider>",
                styles: ["/** No CSS for this example */ mat-slider { width: 300px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Snack-bar with a custom component
 */
class SnackBarComponentExample {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500,
        });
    }
}
SnackBarComponentExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example',
                template: "<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pizza party</button>",
            },] },
];
/** @nocollapse */
SnackBarComponentExample.ctorParameters = () => [
    { type: MatSnackBar }
];
class PizzaPartyComponent {
}
PizzaPartyComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"example-pizza-party\">Pizza party!!! 🍕</span>",
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic snack-bar
 */
class SnackBarOverviewExample {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
SnackBarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-overview-example',
                template: "<mat-form-field><input matInput value=\"Disco party!\" placeholder=\"Message\" #message></mat-form-field><mat-form-field><input matInput value=\"Dance\" placeholder=\"Action\" #action></mat-form-field><button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
SnackBarOverviewExample.ctorParameters = () => [
    { type: MatSnackBar }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Snack-bar with configurable position
 */
class SnackBarPositionExample {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.open('Canonball!!', 'End now', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
SnackBarPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-position-example',
                template: "<mat-form-field><mat-select placeholder=\"Horizontal position\" [(value)]=\"horizontalPosition\"><mat-option value=\"start\">Start</mat-option><mat-option value=\"center\">Center</mat-option><mat-option value=\"end\">End</mat-option><mat-option value=\"left\">Left</mat-option><mat-option value=\"right\">Right</mat-option></mat-select></mat-form-field><mat-form-field><mat-select placeholder=\"Vertical position\" [(value)]=\"verticalPosition\"><mat-option value=\"top\">Top</mat-option><mat-option value=\"bottom\">Bottom</mat-option></mat-select></mat-form-field><button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pool party!</button>",
            },] },
];
/** @nocollapse */
SnackBarPositionExample.ctorParameters = () => [
    { type: MatSnackBar }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Sorting overview
 */
class SortOverviewExample {
    constructor() {
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
    sortData(sort) {
        /** @type {?} */
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            /** @type {?} */
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    }
}
SortOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'sort-overview-example',
                template: "<table matSort (matSortChange)=\"sortData($event)\"><tr><th mat-sort-header=\"name\">Dessert (100g)</th><th mat-sort-header=\"calories\">Calories</th><th mat-sort-header=\"fat\">Fat (g)</th><th mat-sort-header=\"carbs\">Carbs (g)</th><th mat-sort-header=\"protein\">Protein (g)</th></tr><tr *ngFor=\"let dessert of sortedData\"><td>{{dessert.name}}</td><td>{{dessert.calories}}</td><td>{{dessert.fat}}</td><td>{{dessert.carbs}}</td><td>{{dessert.protein}}</td></tr></table>",
                styles: [".mat-sort-header-container { align-items: center; } "],
            },] },
];
/** @nocollapse */
SortOverviewExample.ctorParameters = () => [];
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
class StepperEditableExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperEditableExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-editable-example',
                template: "<button mat-raised-button (click)=\"isEditable = !isEditable\">{{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}</button><mat-horizontal-stepper linear #stepper><mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                styles: ["/** No CSS for this example */ "]
            },] },
];
/** @nocollapse */
StepperEditableExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$2 = { showError: true };
/**
 * \@title Stepper that displays errors in the steps
 */
class StepperErrorsExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperErrorsExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-errors-example',
                template: "<mat-horizontal-stepper linear #stepper><mat-step [stepControl]=\"firstFormGroup\" errorMessage=\"Name is required.\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" errorMessage=\"Address is required.\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                styles: [""],
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: ɵ0$2
                    }]
            },] },
];
/** @nocollapse */
StepperErrorsExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper label bottom position
 */
class StepperLabelPositionBottomExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperLabelPositionBottomExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-label-position-bottom-example',
                template: "<mat-horizontal-stepper labelPosition=\"bottom\" #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" optional><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
StepperLabelPositionBottomExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper with optional steps
 */
class StepperOptionalExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
    }
}
StepperOptionalExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-optional-example',
                template: "<button mat-raised-button (click)=\"isOptional = !isOptional\">{{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}</button><mat-horizontal-stepper linear #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                styles: ["/** No CSS for this example */ "]
            },] },
];
/** @nocollapse */
StepperOptionalExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper overview
 */
class StepperOverviewExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-overview-example',
                template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">{{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}</button><mat-horizontal-stepper [linear]=\"isLinear\" #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
StepperOverviewExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$3 = { displayDefaultIndicatorType: false };
/**
 * \@title Stepper with customized states
 */
class StepperStatesExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperStatesExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-states-example',
                template: "<mat-horizontal-stepper #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-horizontal-stepper><mat-horizontal-stepper><mat-step label=\"Step 1\" state=\"phone\"><p>Put down your phones.</p><div><button mat-button matStepperNext>Next</button></div></mat-step><mat-step label=\"Step 2\" state=\"chat\"><p>Socialize with each other.</p><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></mat-step><mat-step label=\"Step 3\"><p>You're welcome.</p></mat-step><ng-template matStepperIcon=\"phone\"><mat-icon>call_end</mat-icon></ng-template><ng-template matStepperIcon=\"chat\"><mat-icon>forum</mat-icon></ng-template></mat-horizontal-stepper>",
                styles: [""],
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: ɵ0$3
                    }]
            },] },
];
/** @nocollapse */
StepperStatesExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper vertical
 */
class StepperVerticalExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperVerticalExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-vertical-example',
                template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">{{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}</button><mat-vertical-stepper [linear]=\"isLinear\" #stepper><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button> <button mat-button (click)=\"stepper.reset()\">Reset</button></div></mat-step></mat-vertical-stepper>",
                styles: ["/** No CSS for this example */ "]
            },] },
];
/** @nocollapse */
StepperVerticalExample.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with aligned labels
 */
class TabGroupAlignExample {
}
TabGroupAlignExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-align-example',
                template: "<mat-tab-group mat-align-tabs=\"start\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group><mat-tab-group mat-align-tabs=\"center\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group><mat-tab-group mat-align-tabs=\"end\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                styles: [".mat-tab-group { margin-bottom: 48px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group animations
 */
class TabGroupAnimationsExample {
}
TabGroupAnimationsExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-animations-example',
                template: "<h3>No animation</h3><mat-tab-group animationDuration=\"0ms\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group><h3>Very slow animation</h3><mat-tab-group animationDuration=\"2000ms\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                styles: [".mat-tab-group { margin-bottom: 48px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with asynchronously loading tab contents
 */
class TabGroupAsyncExample {
    constructor() {
        this.asyncTabs = Observable.create((observer) => {
            setTimeout(() => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
}
TabGroupAsyncExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-async-example',
                template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">Loading tabs...</ng-container><mat-tab-group><mat-tab *ngFor=\"let tab of asyncTabs | async\"><ng-template mat-tab-label>{{tab.label}}</ng-template>{{tab.content}}</mat-tab></mat-tab-group>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
TabGroupAsyncExample.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic use of the tab group
 */
class TabGroupBasicExample {
}
TabGroupBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-basic-example',
                template: "<mat-tab-group><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Using tabs with a custom label template
 */
class TabGroupCustomLabelExample {
}
TabGroupCustomLabelExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-custom-label-example',
                template: "<mat-tab-group><mat-tab><ng-template mat-tab-label><mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>First</ng-template>Content 1</mat-tab><mat-tab><ng-template mat-tab-label><mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>Second</ng-template>Content 2</mat-tab><mat-tab><ng-template mat-tab-label><mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>Third</ng-template>Content 3</mat-tab></mat-tab-group>",
                styles: [".example-tab-icon { margin-right: 8px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tag group with dynamic height based on tab contents
 */
class TabGroupDynamicHeightExample {
}
TabGroupDynamicHeightExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-dynamic-height-example',
                template: "<mat-tab-group dynamicHeight><mat-tab label=\"Short tab\"><div class=\"example-small-box mat-elevation-z4\">Small content</div></mat-tab><mat-tab label=\"Long tab\"><div class=\"example-large-box mat-elevation-z4\">Large content</div></mat-tab></mat-tab-group>",
                styles: [".example-small-box, .example-large-box { display: flex; align-items: center; justify-content: center; margin: 16px; padding: 16px; border-radius: 8px; } .example-small-box { height: 100px; width: 100px; } .example-large-box { height: 300px; width: 300px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with dynamically changing tabs
 */
class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    /**
     * @param {?} selectAfterAdding
     * @return {?}
     */
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
}
TabGroupDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-dynamic-example',
                template: "<div><span class=\"example-input-label\">Selected tab index:</span><mat-form-field><input matInput type=\"number\" [formControl]=\"selected\"></mat-form-field></div><div><button mat-raised-button class=\"example-add-tab-button\" (click)=\"addTab(selectAfterAdding.checked)\">Add new tab</button><mat-checkbox #selectAfterAdding>Select tab after adding</mat-checkbox></div><mat-tab-group [selectedIndex]=\"selected.value\" (selectedIndexChange)=\"selected.setValue($event)\"><mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">Contents for {{tab}} tab <button mat-raised-button class=\"example-delete-tab-button\" [disabled]=\"tabs.length === 1\" (click)=\"removeTab(index)\">Delete Tab</button></mat-tab></mat-tab-group>",
                styles: [".example-input-label, .example-add-tab-button, .example-delete-tab-button { margin: 8px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with the headers on the bottom
 */
class TabGroupHeaderBelowExample {
}
TabGroupHeaderBelowExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-header-below-example',
                template: "<mat-tab-group headerPosition=\"below\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group where the tab content is loaded lazily (when activated)
 */
class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
}
TabGroupLazyLoadedExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-lazy-loaded-example',
                template: "<mat-tab-group><mat-tab label=\"First\"><ng-template matTabContent>Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}</ng-template></mat-tab><mat-tab label=\"Second\"><ng-template matTabContent>Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}</ng-template></mat-tab><mat-tab label=\"Third\"><ng-template matTabContent>Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}</ng-template></mat-tab></mat-tab-group>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with stretched labels
 */
class TabGroupStretchedExample {
}
TabGroupStretchedExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-stretched-example',
                template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                styles: [".example-stretched-tabs { max-width: 800px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Customizing the theme options on the tab group
 */
class TabGroupThemeExample {
}
TabGroupThemeExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-theme-example',
                template: "<div><mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\" value=\"primary\" aria-label=\"Change color\"><mat-button-toggle value=\"primary\">Primary</mat-button-toggle><mat-button-toggle value=\"accent\">Accent</mat-button-toggle></mat-button-toggle-group><span class=\"example-button-toggle-label\">Color</span></div><div><mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\" value=\"primary\" aria-label=\"Change color\"><mat-button-toggle value=\"primary\">Primary</mat-button-toggle><mat-button-toggle value=\"accent\">Accent</mat-button-toggle></mat-button-toggle-group><span class=\"example-button-toggle-label\">Background Color</span></div><mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\"><mat-tab label=\"First\">Content 1</mat-tab><mat-tab label=\"Second\">Content 2</mat-tab><mat-tab label=\"Third\">Content 3</mat-tab></mat-tab-group>",
                styles: [".example-button-toggle-label { display: inline-block; margin: 16px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic use of the tab nav bar
 */
class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = '';
    }
    /**
     * @return {?}
     */
    toggleBackground() {
        this.background = this.background ? '' : 'primary';
    }
}
TabNavBarBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-nav-bar-basic-example',
                template: "<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">Toggle background</button><nav mat-tab-nav-bar [backgroundColor]=\"background\"><a mat-tab-link *ngFor=\"let link of links\" (click)=\"activeLink = link\" [active]=\"activeLink == link\">{{link}} </a><a mat-tab-link disabled=\"disabled\">Disabled Link</a></nav>",
                styles: [".example-action-button { margin-bottom: 8px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ELEMENT_DATA$2 = [
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
class TableBasicFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$2;
    }
}
TableBasicFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'table-basic-flex-example',
                styles: ["table { width: 100%; } "],
                template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><mat-header-cell *matHeaderCellDef>No.</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell></ng-container><ng-container matColumnDef=\"name\"><mat-header-cell *matHeaderCellDef>Name</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell></ng-container><ng-container matColumnDef=\"weight\"><mat-header-cell *matHeaderCellDef>Weight</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.weight}}</mat-cell></ng-container><ng-container matColumnDef=\"symbol\"><mat-header-cell *matHeaderCellDef>Symbol</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.symbol}}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row></mat-table>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ELEMENT_DATA$3 = [
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
class TableBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$3;
    }
}
TableBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'table-basic-example',
                styles: ["table { width: 100%; } "],
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ELEMENT_DATA$4 = [
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
class TableDynamicColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA$4;
    }
    /**
     * @return {?}
     */
    addColumn() {
        /** @type {?} */
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
    /**
     * @return {?}
     */
    removeColumn() {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    }
    /**
     * @return {?}
     */
    shuffle() {
        /** @type {?} */
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            /** @type {?} */
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            /** @type {?} */
            let temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    }
}
TableDynamicColumnsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-dynamic-columns-example',
                styles: ["table { width: 100%; } button { margin: 16px 8px; } "],
                template: "<button mat-raised-button (click)=\"addColumn()\">Add column</button> <button mat-raised-button (click)=\"removeColumn()\">Remove column</button> <button mat-raised-button (click)=\"shuffle()\">Shuffle</button><table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\"><ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\"><th mat-header-cell *matHeaderCellDef>{{column}}</th><td mat-cell *matCellDef=\"let element\">{{element[column]}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr><tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr></table>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with expandable rows
 */
class TableExpandableRowsExample {
    constructor() {
        this.dataSource = ELEMENT_DATA$5;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
}
TableExpandableRowsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-expandable-rows-example',
                styles: ["table { width: 100%; } tr.example-detail-row { height: 0; } tr.example-element-row:not(.example-expanded-row):hover { background: #f5f5f5; } tr.example-element-row:not(.example-expanded-row):active { background: #efefef; } .example-element-row td { border-bottom-width: 0; } .example-element-detail { overflow: hidden; display: flex; } .example-element-diagram { min-width: 80px; border: 2px solid black; padding: 8px; font-weight: lighter; margin: 8px 0; height: 104px; } .example-element-symbol { font-weight: bold; font-size: 40px; line-height: normal; } .example-element-description { padding: 16px; } .example-element-description-attribution { opacity: 0.5; } "],
                template: "<table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\"><ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\"><th mat-header-cell *matHeaderCellDef>{{column}}</th><td mat-cell *matCellDef=\"let element\">{{element[column]}}</td></ng-container><ng-container matColumnDef=\"expandedDetail\"><td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"><div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\"><div class=\"example-element-diagram\"><div class=\"example-element-position\">{{element.position}}</div><div class=\"example-element-symbol\">{{element.symbol}}</div><div class=\"example-element-name\">{{element.name}}</div><div class=\"example-element-weight\">{{element.weight}}</div></div><div class=\"example-element-description\">{{element.description}} <span class=\"example-element-description-attribution\">-- Wikipedia</span></div></div></td></ng-container><tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr><tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\" [class.example-expanded-row]=\"expandedElement === element\" (click)=\"expandedElement = expandedElement === element ? null : element\"></tr><tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr></table>",
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            },] },
];
/** @type {?} */
const ELEMENT_DATA$5 = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ELEMENT_DATA$6 = [
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
class TableFilteringExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$6);
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
TableFilteringExample.decorators = [
    { type: Component, args: [{
                selector: 'table-filtering-example',
                styles: ["/* Structure */ table { width: 100%; } .mat-form-field { font-size: 14px; width: 100%; } "],
                template: "<mat-form-field><input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"></mat-form-field><table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Footer row table
 */
class TableFooterRowExample {
    constructor() {
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
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
}
TableFooterRowExample.decorators = [
    { type: Component, args: [{
                selector: 'table-footer-row-example',
                styles: ["table { width: 100%; } tr.mat-footer-row { font-weight: bold; } "],
                template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"item\"><th mat-header-cell *matHeaderCellDef>Item</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.item}}</td><td mat-footer-cell *matFooterCellDef>Total</td></ng-container><ng-container matColumnDef=\"cost\"><th mat-header-cell *matHeaderCellDef>Cost</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.cost | currency}}</td><td mat-footer-cell *matFooterCellDef>{{getTotalCost() | currency}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr></table>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table retrieving data through HTTP
 */
class TableHttpExample {
    /**
     * @param {?} http
     */
    constructor(http) {
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
    ngOnInit() {
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap(() => {
            this.isLoadingResults = true;
            return (/** @type {?} */ (this.exampleDatabase)).getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }), map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total_count;
            return data.items;
        }), catchError(() => {
            this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isRateLimitReached = true;
            return of([]);
        })).subscribe(data => this.data = data);
    }
}
TableHttpExample.decorators = [
    { type: Component, args: [{
                selector: 'table-http-example',
                styles: ["/* Structure */ .example-container { position: relative; } .example-table-container { position: relative; max-height: 400px; overflow: auto; } table { width: 100%; } .example-loading-shade { position: absolute; top: 0; left: 0; bottom: 56px; right: 0; background: rgba(0, 0, 0, 0.15); z-index: 1; display: flex; align-items: center; justify-content: center; } .example-rate-limit-reached { color: #980000; max-width: 360px; text-align: center; } /* Column Widths */ .mat-column-number, .mat-column-state { max-width: 64px; } .mat-column-created { max-width: 124px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\"><mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner><div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">GitHub's API rate limit has been reached. It will be reset in one minute.</div></div><div class=\"example-table-container\"><table mat-table [dataSource]=\"data\" class=\"example-table\" matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\"><ng-container matColumnDef=\"number\"><th mat-header-cell *matHeaderCellDef>#</th><td mat-cell *matCellDef=\"let row\">{{row.number}}</td></ng-container><ng-container matColumnDef=\"title\"><th mat-header-cell *matHeaderCellDef>Title</th><td mat-cell *matCellDef=\"let row\">{{row.title}}</td></ng-container><ng-container matColumnDef=\"state\"><th mat-header-cell *matHeaderCellDef>State</th><td mat-cell *matCellDef=\"let row\">{{row.state}}</td></ng-container><ng-container matColumnDef=\"created\"><th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>Created</th><td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table></div><mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator></div>",
            },] },
];
/** @nocollapse */
TableHttpExample.ctorParameters = () => [
    { type: HttpClient }
];
TableHttpExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }]
};
/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleHttpDao {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} sort
     * @param {?} order
     * @param {?} page
     * @return {?}
     */
    getRepoIssues(sort, order, page) {
        /** @type {?} */
        const href = 'https://api.github.com/search/issues';
        /** @type {?} */
        const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
        return this.http.get(requestUrl);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with multiple header and footer rows
 */
class TableMultipleHeaderFooterExample {
    constructor() {
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
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
}
TableMultipleHeaderFooterExample.decorators = [
    { type: Component, args: [{
                selector: 'table-multiple-header-footer-example',
                styles: ["table { width: 100%; } .example-first-header-row th { border-bottom: none; } .example-second-header-row { font-style: italic; } .example-first-footer-row { font-weight: bold; } .example-second-footer-row td { color: #900000; } "],
                template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"item\"><th mat-header-cell *matHeaderCellDef>Item</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.item}}</td><td mat-footer-cell *matFooterCellDef>Total</td></ng-container><ng-container matColumnDef=\"cost\"><th mat-header-cell *matHeaderCellDef>Cost</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.cost | currency}}</td><td mat-footer-cell *matFooterCellDef>{{getTotalCost() | currency}}</td></ng-container><ng-container matColumnDef=\"item-description\"><th mat-header-cell *matHeaderCellDef>Name of the item purchased</th></ng-container><ng-container matColumnDef=\"cost-description\"><th mat-header-cell *matHeaderCellDef>Cost of the item in USD</th></ng-container><ng-container matColumnDef=\"disclaimer\"><td mat-footer-cell *matFooterCellDef colspan=\"2\">Please note that the cost of items displayed are completely and totally made up.</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"example-first-header-row\"></tr><tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\" class=\"example-second-header-row\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"example-first-footer-row\"></tr><tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr></table>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constants used to fill up our data base.
 * @type {?}
 */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
/** @type {?} */
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * \@title Data table with sorting, pagination, and filtering.
 */
class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        /** @type {?} */
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
TableOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'table-overview-example',
                styles: ["table { width: 100%; } .mat-form-field { font-size: 14px; width: 100%; } td, th { width: 25%; } "],
                template: "<mat-form-field><input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"></mat-form-field><div class=\"mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\" matSort><ng-container matColumnDef=\"id\"><th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th><td mat-cell *matCellDef=\"let row\">{{row.id}}</td></ng-container><ng-container matColumnDef=\"progress\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Progress</th><td mat-cell *matCellDef=\"let row\">{{row.progress}}%</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th><td mat-cell *matCellDef=\"let row\">{{row.name}}</td></ng-container><ng-container matColumnDef=\"color\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Color</th><td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table><mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator></div>",
            },] },
];
/** @nocollapse */
TableOverviewExample.ctorParameters = () => [];
TableOverviewExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }]
};
/**
 * Builds and returns a new User.
 * @param {?} id
 * @return {?}
 */
function createNewUser(id) {
    /** @type {?} */
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
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
class TablePaginationExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$7);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}
TablePaginationExample.decorators = [
    { type: Component, args: [{
                selector: 'table-pagination-example',
                styles: ["table { width: 100%; } "],
                template: "<div class=\"mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table><mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator></div>",
            },] },
];
TablePaginationExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator,] }]
};
/** @type {?} */
const ELEMENT_DATA$7 = [
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
class TableRowContextExample {
    constructor() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
}
TableRowContextExample.decorators = [
    { type: Component, args: [{
                selector: 'table-row-context-example',
                styles: ["table { width: 100%; } "],
                template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"$implicit\"><th mat-header-cell *matHeaderCellDef>$implicit</th><td mat-cell *matCellDef=\"let data\">{{data}}</td></ng-container><ng-container matColumnDef=\"index\"><th mat-header-cell *matHeaderCellDef>index</th><td mat-cell *matCellDef=\"let index = index\">{{index}}</td></ng-container><ng-container matColumnDef=\"count\"><th mat-header-cell *matHeaderCellDef>count</th><td mat-cell *matCellDef=\"let count = count\">{{count}}</td></ng-container><ng-container matColumnDef=\"first\"><th mat-header-cell *matHeaderCellDef>first</th><td mat-cell *matCellDef=\"let first = first\">{{first}}</td></ng-container><ng-container matColumnDef=\"last\"><th mat-header-cell *matHeaderCellDef>last</th><td mat-cell *matCellDef=\"let last = last\">{{last}}</td></ng-container><ng-container matColumnDef=\"even\"><th mat-header-cell *matHeaderCellDef>even</th><td mat-cell *matCellDef=\"let even = even\">{{even}}</td></ng-container><ng-container matColumnDef=\"odd\"><th mat-header-cell *matHeaderCellDef>odd</th><td mat-cell *matCellDef=\"let odd = odd\">{{odd}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ELEMENT_DATA$8 = [
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
class TableSelectionExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$8);
        this.selection = new SelectionModel(true, []);
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
TableSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'table-selection-example',
                styles: ["table { width: 100%; } "],
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-container matColumnDef=\"select\"><th mat-header-cell *matHeaderCellDef><mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></mat-checkbox></th><td mat-cell *matCellDef=\"let row\"><mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"></mat-checkbox></td></ng-container><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></tr></table>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ELEMENT_DATA$9 = [
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
class TableSimpleColumnExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$9);
        this.getWeight = (data) => '~' + data.weight;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableSimpleColumnExample.decorators = [
    { type: Component, args: [{
                selector: 'table-simple-column-example',
                styles: ["table { width: 100%; } "],
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort #sort=\"matSort\"><simple-column name=\"name\" sortable></simple-column><simple-column name=\"position\"></simple-column><simple-column name=\"weight\" [dataAccessor]=\"getWeight\"></simple-column><simple-column name=\"symbol\" label=\"SYMBOL!\"></simple-column><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let data; columns: displayedColumns;\"></tr></table>",
            },] },
];
TableSimpleColumnExample.propDecorators = {
    sort: [{ type: ViewChild, args: ['sort',] }]
};
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
class SimpleColumn {
    /**
     * @param {?} table
     */
    constructor(table) {
        this.table = table;
        /**
         * Alignment of the cell values.
         */
        this.align = 'before';
    }
    /**
     * Column name that should be used to reference this column.
     * @return {?}
     */
    get name() { return this._name; }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        this.columnDef.name = name;
    }
    /**
     * Whether the column is sortable
     * @return {?}
     */
    get sortable() { return this._sortable; }
    /**
     * @param {?} sortable
     * @return {?}
     */
    set sortable(sortable) {
        this._sortable = coerceBooleanProperty(sortable);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.table) {
            this.table.addColumnDef(this.columnDef);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.table) {
            this.table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getData(data) {
        return this.dataAccessor ? this.dataAccessor(data, this.name) : ((/** @type {?} */ (data)))[this.name];
    }
}
SimpleColumn.decorators = [
    { type: Component, args: [{
                selector: 'simple-column',
                template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{label || name}} </th>
      <td mat-cell *matCellDef="let data"> {{getData(data)}}</td>
    </ng-container>
  `,
                host: {
                    'class': 'simple-column cdk-visually-hidden',
                    '[attr.ariaHidden]': 'true',
                }
            },] },
];
/** @nocollapse */
SimpleColumn.ctorParameters = () => [
    { type: MatTable, decorators: [{ type: Optional }] }
];
SimpleColumn.propDecorators = {
    name: [{ type: Input }],
    label: [{ type: Input }],
    dataAccessor: [{ type: Input }],
    align: [{ type: Input }],
    sortable: [{ type: Input }],
    columnDef: [{ type: ViewChild, args: [MatColumnDef,] }],
    sortHeader: [{ type: ViewChild, args: [MatSortHeader,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ELEMENT_DATA$10 = [
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
class TableSortingExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$10);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sorting-example',
                styles: ["table { width: 100%; } th.mat-sort-header-sorted { color: black; } "],
                template: "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef mat-sort-header>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table>",
            },] },
];
TableSortingExample.propDecorators = {
    sort: [{ type: ViewChild, args: [MatSort,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with a sticky columns
 */
class TableStickyColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
        this.dataSource = ELEMENT_DATA$11;
    }
}
TableStickyColumnsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-columns-example',
                styles: [".example-container { height: 400px; width: 550px; overflow: auto; } table { width: 800px; } td.mat-column-star { width: 20px; padding-right: 8px; } th.mat-column-position, td.mat-column-position { padding-left: 8px; } .mat-table-sticky:first-child { border-right: 1px solid #e0e0e0; } .mat-table-sticky:last-child { border-left: 1px solid #e0e0e0; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"name\" sticky><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><ng-container matColumnDef=\"star\" stickyEnd><th mat-header-cell *matHeaderCellDef></th><td mat-cell *matCellDef=\"let element\"><mat-icon>more_vert</mat-icon></td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table></div>",
            },] },
];
/** @type {?} */
const ELEMENT_DATA$11 = [
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
class TableStickyComplexFlexExample {
    constructor() {
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
    /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
}
TableStickyComplexFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-complex-flex-example',
                styles: [".example-container { height: 400px; overflow: auto; } .mat-table-sticky { background: #59abfd; opacity: 1; } .example-sticky-toggle-group { margin: 8px; } .mat-column-filler { padding: 0 8px; font-size: 10px; text-align: center; } .mat-header-cell, .mat-footer-cell, .mat-cell { min-width: 80px; box-sizing: border-box; } .mat-header-row, .mat-footer-row, .mat-row { min-width: 1920px; /* 24 columns, 80px each */ } "],
                template: "<div><button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button> <button mat-raised-button (click)=\"tables.pop()\">Remove table</button></div><div>Sticky Headers:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['header-1']\" #stickyHeaders=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"header-1\">Row 1</mat-button-toggle><mat-button-toggle value=\"header-2\">Row 2</mat-button-toggle></mat-button-toggle-group></div><div>Sticky Footers:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['footer-1']\" #stickyFooters=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"footer-1\">Row 1</mat-button-toggle><mat-button-toggle value=\"footer-2\">Row 2</mat-button-toggle></mat-button-toggle-group></div><div>Sticky Columns:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['position', 'symbol']\" #stickyColumns=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"position\">Position</mat-button-toggle><mat-button-toggle value=\"name\">Name</mat-button-toggle><mat-button-toggle value=\"weight\">Weight</mat-button-toggle><mat-button-toggle value=\"symbol\">Symbol</mat-button-toggle></mat-button-toggle-group></div><div class=\"example-container mat-elevation-z8\"><mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\"><ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\"><mat-header-cell *matHeaderCellDef>Position</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell><mat-footer-cell *matFooterCellDef>Position Footer</mat-footer-cell></ng-container><ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\"><mat-header-cell *matHeaderCellDef>Name</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell><mat-footer-cell *matFooterCellDef>Name Footer</mat-footer-cell></ng-container><ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\"><mat-header-cell *matHeaderCellDef>Weight</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.weight}}</mat-cell><mat-footer-cell *matFooterCellDef>Weight Footer</mat-footer-cell></ng-container><ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\"><mat-header-cell *matHeaderCellDef>Symbol</mat-header-cell><mat-cell *matCellDef=\"let element\">{{element.symbol}}</mat-cell><mat-footer-cell *matFooterCellDef>Symbol Footer</mat-footer-cell></ng-container><ng-container matColumnDef=\"filler\"><mat-header-cell *matHeaderCellDef>Filler header cell</mat-header-cell><mat-cell *matCellDef=\"let element\">Filler data cell</mat-cell><mat-footer-cell *matFooterCellDef>Filler footer cell</mat-footer-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row><mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row><mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row><mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row></mat-table></div>",
            },] },
];
/** @nocollapse */
TableStickyComplexFlexExample.ctorParameters = () => [];
/** @type {?} */
const ELEMENT_DATA$12 = [
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
class TableStickyComplexExample {
    constructor() {
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
    /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
}
TableStickyComplexExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-complex-example',
                styles: [".example-container { height: 400px; overflow: auto; } .mat-table-sticky { background: #59abfd; opacity: 1; } .example-sticky-toggle-group { margin: 8px; } .mat-column-filler { padding: 0 8px; font-size: 10px; text-align: center; } .mat-header-cell, .mat-footer-cell, .mat-cell { min-width: 80px; box-sizing: border-box; } "],
                template: "<div><button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button> <button mat-raised-button (click)=\"tables.pop()\">Remove table</button></div><div>Sticky Headers:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['header-1']\" #stickyHeaders=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"header-1\">Row 1</mat-button-toggle><mat-button-toggle value=\"header-2\">Row 2</mat-button-toggle></mat-button-toggle-group></div><div>Sticky Footers:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['footer-1']\" #stickyFooters=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"footer-1\">Row 1</mat-button-toggle><mat-button-toggle value=\"footer-2\">Row 2</mat-button-toggle></mat-button-toggle-group></div><div>Sticky Columns:<mat-button-toggle-group multiple=\"multiple\" [value]=\"['position', 'symbol']\" #stickyColumns=\"matButtonToggleGroup\" class=\"example-sticky-toggle-group\"><mat-button-toggle value=\"position\">Position</mat-button-toggle><mat-button-toggle value=\"name\">Name</mat-button-toggle><mat-button-toggle value=\"weight\">Weight</mat-button-toggle><mat-button-toggle value=\"symbol\">Symbol</mat-button-toggle></mat-button-toggle-group></div><div class=\"example-container mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\"><ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\"><th mat-header-cell *matHeaderCellDef>Position</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td><td mat-footer-cell *matFooterCellDef>Position Footer</td></ng-container><ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td><td mat-footer-cell *matFooterCellDef>Name Footer</td></ng-container><ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td><td mat-footer-cell *matFooterCellDef>Weight Footer</td></ng-container><ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td><td mat-footer-cell *matFooterCellDef>Symbol Footer</td></ng-container><ng-container matColumnDef=\"filler\"><th mat-header-cell *matHeaderCellDef>Filler header cell</th><td mat-cell *matCellDef=\"let element\">Filler data cell</td><td mat-footer-cell *matFooterCellDef>Filler footer cell</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr><tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr></table></div>",
            },] },
];
/** @nocollapse */
TableStickyComplexExample.ctorParameters = () => [];
/** @type {?} */
const ELEMENT_DATA$13 = [
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
class TableStickyFooterExample {
    constructor() {
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
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
}
TableStickyFooterExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-footer-example',
                styles: [".example-container { height: 270px; overflow: auto; } table { width: 100%; } tr.mat-footer-row { font-weight: bold; } .mat-table-sticky { border-top: 1px solid #e0e0e0; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><table mat-table [dataSource]=\"transactions\"><ng-container matColumnDef=\"item\"><th mat-header-cell *matHeaderCellDef>Item</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.item}}</td><td mat-footer-cell *matFooterCellDef>Total</td></ng-container><ng-container matColumnDef=\"cost\"><th mat-header-cell *matHeaderCellDef>Cost</th><td mat-cell *matCellDef=\"let transaction\">{{transaction.cost | currency}}</td><td mat-footer-cell *matFooterCellDef>{{getTotalCost() | currency}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr><tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr></table></div>",
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with sticky header
 */
class TableStickyHeaderExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$14;
    }
}
TableStickyHeaderExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-header-example',
                styles: [".example-container { height: 400px; overflow: auto; } table { width: 100%; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><table mat-table [dataSource]=\"dataSource\"><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table></div>",
            },] },
];
/** @type {?} */
const ELEMENT_DATA$14 = [
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
const ELEMENT_DATA$15 = [
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
class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$15);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableWrappedExample.decorators = [
    { type: Component, args: [{
                selector: 'table-wrapped-example',
                styles: ["table { width: 100%; } "],
                template: "<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\" matSort #sort=\"matSort\"><ng-container matColumnDef=\"name\"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef=\"let element\">{{element.name}}</td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns; \"></tr></wrapper-table>",
            },] },
];
TableWrappedExample.propDecorators = {
    sort: [{ type: ViewChild, args: ['sort',] }]
};
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 * @template T
 */
class WrapperTable {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
        this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
        this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    }
}
WrapperTable.decorators = [
    { type: Component, args: [{
                selector: 'wrapper-table',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"><ng-content></ng-content><ng-container matColumnDef=\"position\"><th mat-header-cell *matHeaderCellDef mat-sort-header>No.</th><td mat-cell *matCellDef=\"let element\">{{element.position}}</td></ng-container><ng-container matColumnDef=\"weight\"><th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th><td mat-cell *matCellDef=\"let element\">{{element.weight}}</td></ng-container><ng-container matColumnDef=\"symbol\"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td></ng-container></table>",
                styles: [`
    table {
      width: 100%;
    }
  `]
            },] },
];
WrapperTable.propDecorators = {
    headerRowDefs: [{ type: ContentChildren, args: [MatHeaderRowDef,] }],
    rowDefs: [{ type: ContentChildren, args: [MatRowDef,] }],
    columnDefs: [{ type: ContentChildren, args: [MatColumnDef,] }],
    table: [{ type: ViewChild, args: [MatTable,] }],
    columns: [{ type: Input }],
    dataSource: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Monitoring autofill state with cdkAutofill
 */
class TextFieldAutofillDirectiveExample {
}
TextFieldAutofillDirectiveExample.decorators = [
    { type: Component, args: [{
                selector: 'text-field-autofill-directive-example',
                template: "<form><mat-form-field><mat-label>First name</mat-label><input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\"><mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint></mat-form-field><mat-form-field><mat-label>Last name</mat-label><input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\"><mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint></mat-form-field><button mat-raised-button>Submit</button></form>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Monitoring autofill state with AutofillMonitor
 */
class TextFieldAutofillMonitorExample {
    /**
     * @param {?} autofill
     */
    constructor(autofill) {
        this.autofill = autofill;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.autofill.monitor(this.firstName)
            .subscribe(e => this.firstNameAutofilled = e.isAutofilled);
        this.autofill.monitor(this.lastName)
            .subscribe(e => this.lastNameAutofilled = e.isAutofilled);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.autofill.stopMonitoring(this.firstName);
        this.autofill.stopMonitoring(this.lastName);
    }
}
TextFieldAutofillMonitorExample.decorators = [
    { type: Component, args: [{
                selector: 'text-field-autofill-monitor-example',
                template: "<form><mat-form-field><mat-label>First name</mat-label><input matInput #first><mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint></mat-form-field><mat-form-field><mat-label>Last name</mat-label><input matInput #last><mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint></mat-form-field><button mat-raised-button>Submit</button></form>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
TextFieldAutofillMonitorExample.ctorParameters = () => [
    { type: AutofillMonitor }
];
TextFieldAutofillMonitorExample.propDecorators = {
    firstName: [{ type: ViewChild, args: ['first', { read: ElementRef },] }],
    lastName: [{ type: ViewChild, args: ['last', { read: ElementRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Auto-resizing textarea
 */
class TextFieldAutosizeTextareaExample {
    /**
     * @param {?} ngZone
     */
    constructor(ngZone) {
        this.ngZone = ngZone;
    }
    /**
     * @return {?}
     */
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(take(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
    }
}
TextFieldAutosizeTextareaExample.decorators = [
    { type: Component, args: [{
                selector: 'text-field-autosize-textarea-example',
                template: "<mat-form-field><mat-label>Font size</mat-label><mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\"><mat-option value=\"10px\">10px</mat-option><mat-option value=\"12px\">12px</mat-option><mat-option value=\"14px\">14px</mat-option><mat-option value=\"16px\">16px</mat-option><mat-option value=\"18px\">18px</mat-option><mat-option value=\"20px\">20px</mat-option></mat-select></mat-form-field><mat-form-field [style.fontSize]=\"fontSize.value\"><mat-label>Autosize textarea</mat-label><textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"2\" cdkAutosizeMaxRows=\"5\"></textarea></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
TextFieldAutosizeTextareaExample.ctorParameters = () => [
    { type: NgZone }
];
TextFieldAutosizeTextareaExample.propDecorators = {
    autosize: [{ type: ViewChild, args: ['autosize',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Multi-row toolbar
 */
class ToolbarMultirowExample {
}
ToolbarMultirowExample.decorators = [
    { type: Component, args: [{
                selector: 'toolbar-multirow-example',
                template: "<mat-toolbar color=\"primary\"><mat-toolbar-row><span>Custom Toolbar</span></mat-toolbar-row><mat-toolbar-row><span>Second Line</span> <span class=\"example-spacer\"></span><mat-icon class=\"example-icon\">verified_user</mat-icon></mat-toolbar-row><mat-toolbar-row><span>Third Line</span> <span class=\"example-spacer\"></span><mat-icon class=\"example-icon\">favorite</mat-icon><mat-icon class=\"example-icon\">delete</mat-icon></mat-toolbar-row></mat-toolbar>",
                styles: [".example-icon { padding: 0 14px; } .example-spacer { flex: 1 1 auto; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic toolbar
 */
class ToolbarOverviewExample {
}
ToolbarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'toolbar-overview-example',
                template: "<mat-toolbar>My App</mat-toolbar>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
class TooltipAutoHideExample {
    constructor() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
}
TooltipAutoHideExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-auto-hide-example',
                template: "<mat-form-field><mat-select placeholder=\"Tooltip position\" [formControl]=\"position\"><mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">{{positionOption}}</mat-option></mat-select></mat-form-field><div class=\"example-container\" cdk-scrollable><button mat-raised-button #tooltip=\"matTooltip\" matTooltip=\"Info about the action\" [matTooltipPosition]=\"position.value\" matTooltipHideDelay=\"100000\" aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\" class=\"example-button\">Action</button></div>",
                styles: [".example-button { display: block; margin: 80px auto 400px; } .example-container { height: 200px; overflow: auto; border: 1px solid #ccc; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip that can have a custom class applied.
 */
class TooltipCustomClassExample {
}
TooltipCustomClassExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-custom-class-example',
                template: "<button mat-raised-button matTooltip=\"Info about the action\" matTooltipClass=\"example-tooltip-red\" aria-label=\"Button that shows a red tooltip\" class=\"example-button\">Red-tooltip Action</button>",
                styles: [".example-button { margin-top: 16px; } .example-tooltip-red { background: #b71c1c; } "],
                // Need to remove view encapsulation so that the custom tooltip style defined in
                // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                encapsulation: ViewEncapsulation.None,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip with a show and hide delay
 */
class TooltipDelayExample {
    constructor() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
}
TooltipDelayExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-delay-example',
                template: "<mat-form-field class=\"example-user-input\"><input matInput placeholder=\"Show delay (milliseconds)\" type=\"number\" aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\" [formControl]=\"showDelay\"></mat-form-field><mat-form-field class=\"example-user-input\"><input matInput placeholder=\"Hide delay (milliseconds)\" type=\"number\" aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\" [formControl]=\"hideDelay\"></mat-form-field><button mat-raised-button matTooltip=\"Info about the action\" [matTooltipShowDelay]=\"showDelay.value\" [matTooltipHideDelay]=\"hideDelay.value\" aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">Action</button>",
                styles: [".example-user-input { display: block; width: 150px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip that can be disabled
 */
class TooltipDisabledExample {
    constructor() {
        this.disabled = new FormControl(false);
    }
}
TooltipDisabledExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-disabled-example',
                template: "<button mat-raised-button matTooltip=\"Info about the action\" [matTooltipDisabled]=\"disabled.value\" aria-label=\"Button that displays a tooltip that can be programatically disabled\">Action</button><mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">Tooltip disabled</mat-checkbox>",
                styles: [".example-disabled-checkbox { margin-left: 8px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip that can be manually shown/hidden.
 */
class TooltipManualExample {
}
TooltipManualExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-manual-example',
                template: "<div><span>Mouse over to </span><button mat-button (mouseenter)=\"tooltip.show()\" aria-label=\"Button that progamatically shows a tooltip on another button\" class=\"example-action-button\">show</button> <button mat-button (mouseenter)=\"tooltip.hide()\" aria-label=\"Button that progamatically hides a tooltip on another button\" class=\"example-action-button\">hide</button> <button mat-button (mouseenter)=\"tooltip.toggle()\" aria-label=\"Button that progamatically toggles a tooltip on another button to show/hide\" class=\"example-action-button\">toggle show/hide</button></div><button mat-raised-button #tooltip=\"matTooltip\" matTooltip=\"Info about the action\" matTooltipPosition=\"right\" aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">Action</button>",
                styles: [".example-action-button { margin-top: 16px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip with a changing message
 */
class TooltipMessageExample {
    constructor() {
        this.message = new FormControl('Info about the action');
    }
}
TooltipMessageExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-message-example',
                template: "<mat-form-field class=\"example-user-input\"><input matInput placeholder=\"Tooltip message\" [formControl]=\"message\"></mat-form-field><button mat-raised-button [matTooltip]=\"message.value\" aria-label=\"Button that displays a tooltip with a custom message\">Action</button>",
                styles: [".example-user-input { margin-right: 8px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Custom options the configure the tooltip's default show/hide delays.
 * @type {?}
 */
const myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * \@title Tooltip with a show and hide delay
 */
class TooltipModifiedDefaultsExample {
}
TooltipModifiedDefaultsExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-modified-defaults-example',
                template: "<button mat-raised-button matTooltip=\"By default, I delay\" aria-label=\"Button that displays a tooltip that has custom delays through a default config\">Button with delay-default tooltip</button>",
                styles: ["/** No CSS for this example */ "],
                providers: [
                    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic tooltip
 */
class TooltipOverviewExample {
}
TooltipOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-overview-example',
                template: "<button mat-raised-button matTooltip=\"Info about the action\" aria-label=\"Button that displays a tooltip when focused or hovered over\">Action</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tooltip with a custom position
 */
class TooltipPositionExample {
    constructor() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
}
TooltipPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-position-example',
                template: "<mat-form-field class=\"example-user-input\"><mat-select placeholder=\"Tooltip position\" [formControl]=\"position\"><mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">{{positionOption}}</mat-option></mat-select></mat-form-field><button mat-raised-button matTooltip=\"Info about the action\" [matTooltipPosition]=\"position.value\" aria-label=\"Button that displays a tooltip in various positions\">Action</button>",
                styles: [".example-user-input { margin-right: 8px; } "],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Node for to-do item
 */
class TodoItemNode {
}
/**
 * Flat to-do item node with expandable and level information
 */
class TodoItemFlatNode {
}
/**
 * The Json object for to-do list data.
 * @type {?}
 */
const TREE_DATA$2 = {
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
class ChecklistDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @return {?}
     */
    initialize() {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        /** @type {?} */
        const data = this.buildFileTree(TREE_DATA$2, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            /** @type {?} */
            const value = obj[key];
            /** @type {?} */
            const node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
    /**
     * Add an item to to-do list
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    insertItem(parent, name) {
        if (parent.children) {
            parent.children.push((/** @type {?} */ ({ item: name })));
            this.dataChange.next(this.data);
        }
    }
    /**
     * @param {?} node
     * @param {?} name
     * @return {?}
     */
    updateItem(node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    }
}
ChecklistDatabase.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChecklistDatabase.ctorParameters = () => [];
/**
 * \@title Tree with checkboxes
 */
class TreeChecklistExample {
    /**
     * @param {?} database
     */
    constructor(database) {
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
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.getChildren = (node) => node.children;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.hasNoContent = (_, _nodeData) => _nodeData.item === '';
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = (node, level) => {
            /** @type {?} */
            const existingNode = this.nestedNodeMap.get(node);
            /** @type {?} */
            const flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            this.flatNodeMap.set(flatNode, node);
            this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
    }
    /**
     * Whether all the descendants of the node are selected.
     * @param {?} node
     * @return {?}
     */
    descendantsAllSelected(node) {
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        const descAllSelected = descendants.every(child => this.checklistSelection.isSelected(child));
        return descAllSelected;
    }
    /**
     * Whether part of the descendants are selected
     * @param {?} node
     * @return {?}
     */
    descendantsPartiallySelected(node) {
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        const result = descendants.some(child => this.checklistSelection.isSelected(child));
        return result && !this.descendantsAllSelected(node);
    }
    /**
     * Toggle the to-do item selection. Select/deselect all the descendants node
     * @param {?} node
     * @return {?}
     */
    todoItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? this.checklistSelection.select(...descendants)
            : this.checklistSelection.deselect(...descendants);
        // Force update for the parent
        descendants.every(child => this.checklistSelection.isSelected(child));
        this.checkAllParentsSelection(node);
    }
    /**
     * Toggle a leaf to-do item selection. Check all the parents to see if they changed
     * @param {?} node
     * @return {?}
     */
    todoLeafItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    }
    /* Checks all the parents when a leaf node is selected/unselected */
    /**
     * @param {?} node
     * @return {?}
     */
    checkAllParentsSelection(node) {
        /** @type {?} */
        let parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    }
    /**
     * Check root node checked state and change it accordingly
     * @param {?} node
     * @return {?}
     */
    checkRootNodeSelection(node) {
        /** @type {?} */
        const nodeSelected = this.checklistSelection.isSelected(node);
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        const descAllSelected = descendants.every(child => this.checklistSelection.isSelected(child));
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    }
    /* Get the parent node of a node */
    /**
     * @param {?} node
     * @return {?}
     */
    getParentNode(node) {
        /** @type {?} */
        const currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        /** @type {?} */
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            /** @type {?} */
            const currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    /**
     * Select the category so we can insert the new item.
     * @param {?} node
     * @return {?}
     */
    addNewItem(node) {
        /** @type {?} */
        const parentNode = this.flatNodeMap.get(node);
        this.database.insertItem((/** @type {?} */ (parentNode)), '');
        this.treeControl.expand(node);
    }
    /**
     * Save the node to database
     * @param {?} node
     * @param {?} itemValue
     * @return {?}
     */
    saveNode(node, itemValue) {
        /** @type {?} */
        const nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem((/** @type {?} */ (nestedNode)), itemValue);
    }
}
TreeChecklistExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-checklist-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button><mat-checkbox class=\"checklist-leaf-node\" [checked]=\"checklistSelection.isSelected(node)\" (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox></mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button><mat-form-field><input matInput #itemValue placeholder=\"New item...\"></mat-form-field><button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button></mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding><button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\"><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button><mat-checkbox [checked]=\"descendantsAllSelected(node)\" [indeterminate]=\"descendantsPartiallySelected(node)\" (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox><button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button></mat-tree-node></mat-tree>",
                styles: [""],
                providers: [ChecklistDatabase]
            },] },
];
/** @nocollapse */
TreeChecklistExample.ctorParameters = () => [
    { type: ChecklistDatabase }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Flat node with expandable and level information
 */
class DynamicFlatNode {
    /**
     * @param {?} item
     * @param {?=} level
     * @param {?=} expandable
     * @param {?=} isLoading
     */
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
class DynamicDatabase {
    constructor() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /**
     * Initial data from database
     * @return {?}
     */
    initialData() {
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getChildren(node) {
        return this.dataMap.get(node);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
class DynamicDataSource {
    /**
     * @param {?} treeControl
     * @param {?} database
     */
    constructor(treeControl, database) {
        this.treeControl = treeControl;
        this.database = database;
        this.dataChange = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this.treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        this.treeControl.expansionModel.onChange.subscribe(change => {
            if (((/** @type {?} */ (change))).added ||
                ((/** @type {?} */ (change))).removed) {
                this.handleTreeControl((/** @type {?} */ (change)));
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }
    /**
     * Handle expand/collapse behaviors
     * @param {?} change
     * @return {?}
     */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     * @param {?} node
     * @param {?} expand
     * @return {?}
     */
    toggleNode(node, expand) {
        /** @type {?} */
        const children = this.database.getChildren(node.item);
        /** @type {?} */
        const index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(() => {
            if (expand) {
                /** @type {?} */
                const nodes = children.map(name => new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                /** @type {?} */
                let count = 0;
                for (let i = index + 1; i < this.data.length
                    && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
}
DynamicDataSource.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DynamicDataSource.ctorParameters = () => [
    { type: FlatTreeControl },
    { type: DynamicDatabase }
];
/**
 * \@title Tree with dynamic data
 */
class TreeDynamicExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
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
TreeDynamicExample.ctorParameters = () => [
    { type: DynamicDatabase }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
let FileNode$2 = class FileNode {
};
/**
 * Flat node with expandable and level information
 */
let FileFlatNode$1 = class FileFlatNode {
    /**
     * @param {?} expandable
     * @param {?} filename
     * @param {?} level
     * @param {?} type
     */
    constructor(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
};
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 * @type {?}
 */
const TREE_DATA$3 = JSON.stringify({
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
let FileDatabase$2 = class FileDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @return {?}
     */
    initialize() {
        // Parse the string to json object.
        /** @type {?} */
        const dataObject = JSON.parse(TREE_DATA$3);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        /** @type {?} */
        const data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            /** @type {?} */
            const value = obj[key];
            /** @type {?} */
            const node = new FileNode$2();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
};
FileDatabase$2.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FileDatabase$2.ctorParameters = () => [];
/**
 * \@title Tree with flat nodes
 */
class TreeFlatOverviewExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.transformer = (node, level) => {
            return new FileFlatNode$1(!!node.children, node.filename, level, node.type);
        };
        this._getLevel = (node) => node.level;
        this._isExpandable = (node) => node.expandable;
        this._getChildren = (node) => of(node.children);
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(data => this.dataSource.data = data);
    }
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
TreeFlatOverviewExample.ctorParameters = () => [
    { type: FileDatabase$2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_MORE = 'LOAD_MORE';
/**
 * Nested node
 */
class LoadmoreNode {
    /**
     * @param {?} item
     * @param {?=} hasChildren
     * @param {?=} loadMoreParentItem
     */
    constructor(item, hasChildren = false, loadMoreParentItem = null) {
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get children() {
        return this.childrenChange.value;
    }
}
/**
 * Flat node with expandable and level information
 */
class LoadmoreFlatNode {
    /**
     * @param {?} item
     * @param {?=} level
     * @param {?=} expandable
     * @param {?=} loadMoreParentItem
     */
    constructor(item, level = 1, expandable = false, loadMoreParentItem = null) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
}
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
class LoadmoreDatabase {
    constructor() {
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
    initialize() {
        /** @type {?} */
        const data = this.rootLevelNodes.map(name => this._generateNode(name));
        this.dataChange.next(data);
    }
    /**
     * Expand a node whose children are not loaded
     * @param {?} item
     * @param {?=} onlyFirstTime
     * @return {?}
     */
    loadMore(item, onlyFirstTime = false) {
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        /** @type {?} */
        const parent = (/** @type {?} */ (this.nodeMap.get(item)));
        /** @type {?} */
        const children = (/** @type {?} */ (this.dataMap.get(item)));
        if (onlyFirstTime && (/** @type {?} */ (parent.children)).length > 0) {
            return;
        }
        /** @type {?} */
        const newChildrenNumber = (/** @type {?} */ (parent.children)).length + this.batchNumber;
        /** @type {?} */
        const nodes = children.slice(0, newChildrenNumber)
            .map(name => this._generateNode(name));
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _generateNode(item) {
        if (this.nodeMap.has(item)) {
            return (/** @type {?} */ (this.nodeMap.get(item)));
        }
        /** @type {?} */
        const result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    }
}
LoadmoreDatabase.decorators = [
    { type: Injectable },
];
/**
 * \@title Tree with partially loaded data
 */
class TreeLoadmoreExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.database = database;
        this.nodeMap = new Map();
        this.getChildren = (node) => node.childrenChange;
        this.transformer = (node, level) => {
            /** @type {?} */
            const existingNode = this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            /** @type {?} */
            const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            this.nodeMap.set(node.item, newNode);
            return newNode;
        };
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.isLoadMore = (_, _nodeData) => _nodeData.item === LOAD_MORE;
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
        database.initialize();
    }
    /**
     * Load more nodes from data source
     * @param {?} item
     * @return {?}
     */
    loadMore(item) {
        this.database.loadMore(item);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    loadChildren(node) {
        this.database.loadMore(node.item, true);
    }
}
TreeLoadmoreExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-loadmore-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\"><mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding><button mat-icon-button disabled=\"disabled\"></button> {{node.item}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding><button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" (click)=\"loadChildren(node)\" matTreeNodeToggle><mat-icon class=\"mat-icon-rtl-mirror\">{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}</mat-icon></button> {{node.item}}</mat-tree-node><mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\"><button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">Load more...</button></mat-tree-node></mat-tree>",
                styles: [""],
                providers: [LoadmoreDatabase]
            },] },
];
/** @nocollapse */
TreeLoadmoreExample.ctorParameters = () => [
    { type: LoadmoreDatabase }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
let FileNode$3 = class FileNode {
};
/**
 * The Json tree data in string. The data could be parsed into Json object
 * @type {?}
 */
const TREE_DATA$4 = JSON.stringify({
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
let FileDatabase$3 = class FileDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @return {?}
     */
    initialize() {
        // Parse the string to json object.
        /** @type {?} */
        const dataObject = JSON.parse(TREE_DATA$4);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        /** @type {?} */
        const data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            /** @type {?} */
            const value = obj[key];
            /** @type {?} */
            const node = new FileNode$3();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
};
FileDatabase$3.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FileDatabase$3.ctorParameters = () => [];
/**
 * \@title Tree with nested nodes
 */
class TreeNestedOverviewExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.hasNestedChild = (_, nodeData) => !nodeData.type;
        this._getChildren = (node) => node.children;
        this.nestedTreeControl = new NestedTreeControl(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();
        database.dataChange.subscribe(data => this.nestedDataSource.data = data);
    }
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
TreeNestedOverviewExample.ctorParameters = () => [
    { type: FileDatabase$3 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLE_COMPONENTS = {
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
const EXAMPLE_LIST = [
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
class ExampleModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
class ExampleData {
    /**
     * @param {?} example
     */
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        /** @type {?} */
        const exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map(extension => `${example}-example.${extension}`);
        this.examplePath = `/assets/stackblitz/examples/${example}/`;
        this.selectorName = this.indexFilename = `${example}-example`;
        if (exampleConfig.additionalFiles) {
            this.exampleFiles.push(...exampleConfig.additionalFiles);
        }
        /** @type {?} */
        const exampleName = example.replace(/(?:^\w|\b\w)/g, letter => letter.toUpperCase());
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_LIST, ExampleModule, ListOverviewExample, DatepickerOverviewExample, CardFancyExample, ToolbarMultirowExample, ButtonToggleOverviewExample, ExpansionOverviewExample, StepperOverviewExample, AutocompleteAutoActiveFirstOptionExample as ɵa, AutocompleteDisplayExample as ɵb, AutocompleteFilterExample as ɵc, AutocompleteOptgroupExample as ɵd, AutocompleteOverviewExample as ɵe, AutocompleteSimpleExample as ɵf, BadgeOverviewExample as ɵg, BottomSheetOverviewExample as ɵh, BottomSheetOverviewExampleSheet as ɵi, ButtonOverviewExample as ɵj, ButtonToggleAppearanceExample as ɵk, ButtonToggleExclusiveExample as ɵl, ButtonTypesExample as ɵm, CardOverviewExample as ɵn, CdkDragDropAxisLockExample as ɵo, CdkDragDropBoundaryExample as ɵp, CdkDragDropConnectedSortingGroupExample as ɵq, CdkDragDropConnectedSortingExample as ɵr, CdkDragDropCustomPlaceholderExample as ɵs, CdkDragDropCustomPreviewExample as ɵt, CdkDragDropDisabledExample as ɵu, CdkDragDropEnterPredicateExample as ɵv, CdkDragDropHandleExample as ɵw, CdkDragDropHorizontalSortingExample as ɵx, CdkDragDropOverviewExample as ɵy, CdkDragDropRootElementExample as ɵz, CdkDragDropSortingExample as ɵba, CdkPlatformOverviewExample as ɵbb, CdkTableBasicFlexExample as ɵbc, CdkTableBasicExample as ɵbd, CdkTreeFlatExample as ɵbf, FileDatabase as ɵbe, CdkTreeNestedExample as ɵbh, FileDatabase$1 as ɵbg, CdkVirtualScrollContextExample as ɵbi, CdkVirtualScrollCustomStrategyExample as ɵbk, CustomVirtualScrollStrategy as ɵbj, CdkVirtualScrollDataSourceExample as ɵbl, CdkVirtualScrollDlExample as ɵbm, CdkVirtualScrollFixedBufferExample as ɵbn, CdkVirtualScrollHorizontalExample as ɵbo, CdkVirtualScrollOverviewExample as ɵbp, CdkVirtualScrollTemplateCacheExample as ɵbq, CheckboxConfigurableExample as ɵbr, CheckboxOverviewExample as ɵbs, ChipsAutocompleteExample as ɵbt, ChipsInputExample as ɵbu, ChipsOverviewExample as ɵbv, ChipsStackedExample as ɵbw, DatepickerApiExample as ɵbx, DatepickerColorExample as ɵby, DatepickerCustomHeaderExample as ɵbz, ExampleHeader as ɵca, DatepickerCustomIconExample as ɵcb, DatepickerDateClassExample as ɵcc, DatepickerDisabledExample as ɵcd, DatepickerEventsExample as ɵce, DatepickerFilterExample as ɵcf, DatepickerFormatsExample as ɵch, MY_FORMATS as ɵcg, DatepickerLocaleExample as ɵci, DatepickerMinMaxExample as ɵcj, DatepickerMomentExample as ɵck, DatepickerStartViewExample as ɵcl, DatepickerTouchExample as ɵcm, DatepickerValueExample as ɵcn, DatepickerViewsSelectionExample as ɵcp, MY_FORMATS$1 as ɵco, DialogContentExample as ɵcq, DialogContentExampleDialog as ɵcr, DialogDataExample as ɵcs, DialogDataExampleDialog as ɵct, DialogElementsExample as ɵcu, DialogElementsExampleDialog as ɵcv, DialogOverviewExample as ɵcw, DialogOverviewExampleDialog as ɵcx, DividerOverviewExample as ɵcy, ElevationOverviewExample as ɵcz, ExpansionExpandCollapseAllExample as ɵda, ExpansionStepsExample as ɵdb, FocusMonitorDirectivesExample as ɵdc, FocusMonitorFocusViaExample as ɵdd, FocusMonitorOverviewExample as ɵde, FormFieldAppearanceExample as ɵdf, FormFieldCustomControlExample as ɵdg, MyTelInput as ɵdh, FormFieldErrorExample as ɵdi, FormFieldHintExample as ɵdj, FormFieldLabelExample as ɵdk, FormFieldOverviewExample as ɵdl, FormFieldPrefixSuffixExample as ɵdm, FormFieldThemingExample as ɵdn, GridListDynamicExample as ɵdo, GridListOverviewExample as ɵdp, IconOverviewExample as ɵdq, IconSvgExample as ɵdr, InputClearableExample as ɵds, InputErrorStateMatcherExample as ɵdt, InputErrorsExample as ɵdu, InputFormExample as ɵdv, InputHintExample as ɵdw, InputOverviewExample as ɵdx, InputPrefixSuffixExample as ɵdy, ListSectionsExample as ɵdz, ListSelectionExample as ɵea, ExampleMaterialModule as ɵij, MenuIconsExample as ɵeb, MenuOverviewExample as ɵec, NestedMenuExample as ɵed, PaginatorConfigurableExample as ɵee, PaginatorOverviewExample as ɵef, ProgressBarBufferExample as ɵeg, ProgressBarConfigurableExample as ɵeh, ProgressBarDeterminateExample as ɵei, ProgressBarIndeterminateExample as ɵej, ProgressBarQueryExample as ɵek, ProgressSpinnerConfigurableExample as ɵel, ProgressSpinnerOverviewExample as ɵem, RadioNgModelExample as ɵen, RadioOverviewExample as ɵeo, RippleOverviewExample as ɵep, SelectCustomTriggerExample as ɵeq, SelectDisabledExample as ɵer, SelectErrorStateMatcherExample as ɵes, SelectFormExample as ɵet, SelectHintErrorExample as ɵeu, SelectMultipleExample as ɵev, SelectNoRippleExample as ɵew, SelectOptgroupExample as ɵex, SelectOverviewExample as ɵey, SelectPanelClassExample as ɵez, SelectResetExample as ɵfa, SelectValueBindingExample as ɵfb, SidenavAutosizeExample as ɵfc, SidenavBackdropExample as ɵfd, SidenavDisableCloseExample as ɵfe, SidenavDrawerOverviewExample as ɵff, SidenavFixedExample as ɵfg, SidenavModeExample as ɵfh, SidenavOpenCloseExample as ɵfi, SidenavOverviewExample as ɵfj, SidenavPositionExample as ɵfk, SidenavResponsiveExample as ɵfl, SlideToggleConfigurableExample as ɵfm, SlideToggleFormsExample as ɵfn, SlideToggleOverviewExample as ɵfo, SliderConfigurableExample as ɵfp, SliderFormattingExample as ɵfq, SliderOverviewExample as ɵfr, PizzaPartyComponent as ɵft, SnackBarComponentExample as ɵfs, SnackBarOverviewExample as ɵfu, SnackBarPositionExample as ɵfv, SortOverviewExample as ɵfw, StepperEditableExample as ɵfx, StepperErrorsExample as ɵfy, StepperLabelPositionBottomExample as ɵfz, StepperOptionalExample as ɵga, StepperStatesExample as ɵgb, StepperVerticalExample as ɵgc, TabGroupAlignExample as ɵgd, TabGroupAnimationsExample as ɵge, TabGroupAsyncExample as ɵgf, TabGroupBasicExample as ɵgg, TabGroupCustomLabelExample as ɵgh, TabGroupDynamicHeightExample as ɵgi, TabGroupDynamicExample as ɵgj, TabGroupHeaderBelowExample as ɵgk, TabGroupLazyLoadedExample as ɵgl, TabGroupStretchedExample as ɵgm, TabGroupThemeExample as ɵgn, TabNavBarBasicExample as ɵgo, TableBasicFlexExample as ɵgp, TableBasicExample as ɵgq, TableDynamicColumnsExample as ɵgr, TableExpandableRowsExample as ɵgs, TableFilteringExample as ɵgt, TableFooterRowExample as ɵgu, TableHttpExample as ɵgv, TableMultipleHeaderFooterExample as ɵgw, TableOverviewExample as ɵgx, TablePaginationExample as ɵgy, TableRowContextExample as ɵgz, TableSelectionExample as ɵha, SimpleColumn as ɵhc, TableSimpleColumnExample as ɵhb, TableSortingExample as ɵhd, TableStickyColumnsExample as ɵhe, TableStickyComplexFlexExample as ɵhf, TableStickyComplexExample as ɵhg, TableStickyFooterExample as ɵhh, TableStickyHeaderExample as ɵhi, TableWrappedExample as ɵhj, WrapperTable as ɵhk, TextFieldAutofillDirectiveExample as ɵhl, TextFieldAutofillMonitorExample as ɵhm, TextFieldAutosizeTextareaExample as ɵhn, ToolbarOverviewExample as ɵho, TooltipAutoHideExample as ɵhp, TooltipCustomClassExample as ɵhq, TooltipDelayExample as ɵhr, TooltipDisabledExample as ɵhs, TooltipManualExample as ɵht, TooltipMessageExample as ɵhu, TooltipModifiedDefaultsExample as ɵhw, myCustomTooltipDefaults as ɵhv, TooltipOverviewExample as ɵhx, TooltipPositionExample as ɵhy, ChecklistDatabase as ɵhz, TreeChecklistExample as ɵia, DynamicDatabase as ɵib, TreeDynamicExample as ɵic, FileDatabase$2 as ɵid, TreeFlatOverviewExample as ɵie, LoadmoreDatabase as ɵif, TreeLoadmoreExample as ɵig, FileDatabase$3 as ɵih, TreeNestedOverviewExample as ɵii };
//# sourceMappingURL=material-examples.js.map
