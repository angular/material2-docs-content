import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { startWith, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.toLowerCase().indexOf(filterValue) === 0));
    }
}
AutocompleteAutoActiveFirstOptionExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-auto-active-first-option-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    AutocompleteAutoActiveFirstOptionExample.prototype.myControl;
    /** @type {?} */
    AutocompleteAutoActiveFirstOptionExample.prototype.options;
    /** @type {?} */
    AutocompleteAutoActiveFirstOptionExample.prototype.filteredOptions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function User() { }
if (false) {
    /** @type {?} */
    User.prototype.name;
}
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
            .pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => typeof value === 'string' ? value : value.name)), map((/**
         * @param {?} name
         * @return {?}
         */
        name => name ? this._filter(name) : this.options.slice())));
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
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.name.toLowerCase().indexOf(filterValue) === 0));
    }
}
AutocompleteDisplayExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-display-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    AutocompleteDisplayExample.prototype.myControl;
    /** @type {?} */
    AutocompleteDisplayExample.prototype.options;
    /** @type {?} */
    AutocompleteDisplayExample.prototype.filteredOptions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            .pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.toLowerCase().includes(filterValue)));
    }
}
AutocompleteFilterExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-filter-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    AutocompleteFilterExample.prototype.myControl;
    /** @type {?} */
    AutocompleteFilterExample.prototype.options;
    /** @type {?} */
    AutocompleteFilterExample.prototype.filteredOptions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function StateGroup() { }
if (false) {
    /** @type {?} */
    StateGroup.prototype.letter;
    /** @type {?} */
    StateGroup.prototype.names;
}
/** @type {?} */
const _filter = (/**
 * @param {?} opt
 * @param {?} value
 * @return {?}
 */
(opt, value) => {
    /** @type {?} */
    const filterValue = value.toLowerCase();
    return opt.filter((/**
     * @param {?} item
     * @return {?}
     */
    item => item.toLowerCase().indexOf(filterValue) === 0));
});
/**
 * \@title Option groups autocomplete
 */
class AutocompleteOptgroupExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.stateForm = this._formBuilder.group({
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
            .pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filterGroup(value))));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map((/**
             * @param {?} group
             * @return {?}
             */
            group => ({ letter: group.letter, names: _filter(group.names, value) })))
                .filter((/**
             * @param {?} group
             * @return {?}
             */
            group => group.names.length > 0));
        }
        return this.stateGroups;
    }
}
AutocompleteOptgroupExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-optgroup-example',
                template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
AutocompleteOptgroupExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    AutocompleteOptgroupExample.prototype.stateForm;
    /** @type {?} */
    AutocompleteOptgroupExample.prototype.stateGroups;
    /** @type {?} */
    AutocompleteOptgroupExample.prototype.stateGroupOptions;
    /**
     * @type {?}
     * @private
     */
    AutocompleteOptgroupExample.prototype._formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State() { }
if (false) {
    /** @type {?} */
    State.prototype.flag;
    /** @type {?} */
    State.prototype.name;
    /** @type {?} */
    State.prototype.population;
}
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
            .pipe(startWith(''), map((/**
         * @param {?} state
         * @return {?}
         */
        state => state ? this._filterStates(state) : this.states.slice())));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filterStates(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.states.filter((/**
         * @param {?} state
         * @return {?}
         */
        state => state.name.toLowerCase().indexOf(filterValue) === 0));
    }
}
AutocompleteOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-overview-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"]
            }] }
];
/** @nocollapse */
AutocompleteOverviewExample.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    AutocompleteOverviewExample.prototype.stateCtrl;
    /** @type {?} */
    AutocompleteOverviewExample.prototype.filteredStates;
    /** @type {?} */
    AutocompleteOverviewExample.prototype.states;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Plain input autocomplete
 */
class AutocompletePlainInputExample {
    constructor() {
        this.control = new FormControl();
        this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredStreets = this.control.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = this._normalizeValue(value);
        return this.streets.filter((/**
         * @param {?} street
         * @return {?}
         */
        street => this._normalizeValue(street).includes(filterValue)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _normalizeValue(value) {
        return value.toLowerCase().replace(/\s/g, '');
    }
}
AutocompletePlainInputExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-plain-input-example',
                template: "<form class=\"example-form\">\n  <input type=\"text\" placeholder=\"Search for a street\" [formControl]=\"control\" [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let street of filteredStreets | async\" [value]=\"street\">\n      {{street}}\n    </mat-option>\n  </mat-autocomplete>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    AutocompletePlainInputExample.prototype.control;
    /** @type {?} */
    AutocompletePlainInputExample.prototype.streets;
    /** @type {?} */
    AutocompletePlainInputExample.prototype.filteredStreets;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    AutocompleteSimpleExample.prototype.myControl;
    /** @type {?} */
    AutocompleteSimpleExample.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompletePlainInputExample,
    AutocompleteSimpleExample,
];
class AutocompleteExamplesModule {
}
AutocompleteExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatAutocompleteModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSlideToggleModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteSimpleExample, AutocompleteExamplesModule };
//# sourceMappingURL=autocomplete.js.map
