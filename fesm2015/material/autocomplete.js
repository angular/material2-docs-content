import { NgForOf, AsyncPipe, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineComponent, ɵɵelement, ɵɵtemplate, ɵɵpipe, ɵɵreference, ɵɵpipeBind1, ɵsetClassMetadata, ɵɵdirectiveInject, ɵɵsanitizeUrl, ɵɵtextInterpolate, ɵɵlistener, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormControl, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, NgControlStatus, FormControlDirective, FormBuilder, FormGroupDirective, FormControlName, RequiredValidator, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteTrigger, MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { startWith, map } from 'rxjs/operators';
import { MatOption, MatOptgroup } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/autocomplete/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function AutocompleteAutoActiveFirstOptionExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵɵproperty("value", option_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r2, " ");
} }
/**
 * \@title Highlight the first autocomplete option
 */
let AutocompleteAutoActiveFirstOptionExample = /** @class */ (() => {
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
                    templateUrl: 'autocomplete-auto-active-first-option-example.html',
                    styleUrls: ['autocomplete-auto-active-first-option-example.css'],
                },] },
    ];
    /** @nocollapse */ AutocompleteAutoActiveFirstOptionExample.ɵfac = function AutocompleteAutoActiveFirstOptionExample_Factory(t) { return new (t || AutocompleteAutoActiveFirstOptionExample)(); };
    /** @nocollapse */ AutocompleteAutoActiveFirstOptionExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteAutoActiveFirstOptionExample, selectors: [["autocomplete-auto-active-first-option-example"]], decls: 7, vars: 5, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteAutoActiveFirstOptionExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵelementStart(3, "mat-autocomplete", 3, 4);
            ɵɵtemplate(5, AutocompleteAutoActiveFirstOptionExample_mat_option_5_Template, 2, 2, "mat-option", 5);
            ɵɵpipe(6, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = ɵɵreference(4);
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 3, ctx.filteredOptions));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteAutoActiveFirstOptionExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteAutoActiveFirstOptionExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-auto-active-first-option-example',
                templateUrl: 'autocomplete-auto-active-first-option-example.html',
                styleUrls: ['autocomplete-auto-active-first-option-example.css'],
            }]
    }], null, null); })();
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
 * Generated from: src/components-examples/material/autocomplete/autocomplete-display/autocomplete-display-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function AutocompleteDisplayExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵɵproperty("value", option_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r2.name, " ");
} }
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
let AutocompleteDisplayExample = /** @class */ (() => {
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
         * @param {?} user
         * @return {?}
         */
        displayFn(user) {
            return user && user.name ? user.name : '';
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
                    templateUrl: 'autocomplete-display-example.html',
                    styleUrls: ['autocomplete-display-example.css'],
                },] },
    ];
    /** @nocollapse */ AutocompleteDisplayExample.ɵfac = function AutocompleteDisplayExample_Factory(t) { return new (t || AutocompleteDisplayExample)(); };
    /** @nocollapse */ AutocompleteDisplayExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteDisplayExample, selectors: [["autocomplete-display-example"]], decls: 9, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteDisplayExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelementStart(2, "mat-label");
            ɵɵtext(3, "Assignee");
            ɵɵelementEnd();
            ɵɵelement(4, "input", 2);
            ɵɵelementStart(5, "mat-autocomplete", 3, 4);
            ɵɵtemplate(7, AutocompleteDisplayExample_mat_option_7_Template, 2, 2, "mat-option", 5);
            ɵɵpipe(8, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = ɵɵreference(6);
            ɵɵadvance(4);
            ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
            ɵɵadvance(1);
            ɵɵproperty("displayWith", ctx.displayFn);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(8, 4, ctx.filteredOptions));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteDisplayExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteDisplayExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-display-example',
                templateUrl: 'autocomplete-display-example.html',
                styleUrls: ['autocomplete-display-example.css'],
            }]
    }], null, null); })();
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
 * Generated from: src/components-examples/material/autocomplete/autocomplete-filter/autocomplete-filter-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function AutocompleteFilterExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵɵproperty("value", option_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r2, " ");
} }
/**
 * \@title Filter autocomplete
 */
let AutocompleteFilterExample = /** @class */ (() => {
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
                    templateUrl: 'autocomplete-filter-example.html',
                    styleUrls: ['autocomplete-filter-example.css'],
                },] },
    ];
    /** @nocollapse */ AutocompleteFilterExample.ɵfac = function AutocompleteFilterExample_Factory(t) { return new (t || AutocompleteFilterExample)(); };
    /** @nocollapse */ AutocompleteFilterExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteFilterExample, selectors: [["autocomplete-filter-example"]], decls: 7, vars: 5, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteFilterExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵelementStart(3, "mat-autocomplete", null, 3);
            ɵɵtemplate(5, AutocompleteFilterExample_mat_option_5_Template, 2, 2, "mat-option", 4);
            ɵɵpipe(6, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = ɵɵreference(4);
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 3, ctx.filteredOptions));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteFilterExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteFilterExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-filter-example',
                templateUrl: 'autocomplete-filter-example.html',
                styleUrls: ['autocomplete-filter-example.css'],
            }]
    }], null, null); })();
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
 * Generated from: src/components-examples/material/autocomplete/autocomplete-optgroup/autocomplete-optgroup-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const name_r4 = ctx.$implicit;
    ɵɵproperty("value", name_r4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", name_r4, " ");
} }
function AutocompleteOptgroupExample_mat_optgroup_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-optgroup", 4);
    ɵɵtemplate(1, AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template, 2, 2, "mat-option", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    ɵɵproperty("label", group_r2.letter);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", group_r2.names);
} }
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
let AutocompleteOptgroupExample = /** @class */ (() => {
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
                    templateUrl: './autocomplete-optgroup-example.html',
                    styleUrls: ['./autocomplete-optgroup-example.css'],
                },] },
    ];
    /** @nocollapse */
    AutocompleteOptgroupExample.ctorParameters = () => [
        { type: FormBuilder }
    ];
    /** @nocollapse */ AutocompleteOptgroupExample.ɵfac = function AutocompleteOptgroupExample_Factory(t) { return new (t || AutocompleteOptgroupExample)(ɵɵdirectiveInject(FormBuilder)); };
    /** @nocollapse */ AutocompleteOptgroupExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteOptgroupExample, selectors: [["autocomplete-optgroup-example"]], decls: 7, vars: 5, consts: [[3, "formGroup"], ["type", "text", "matInput", "", "placeholder", "States Group", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteOptgroupExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field");
            ɵɵelement(2, "input", 1);
            ɵɵelementStart(3, "mat-autocomplete", null, 2);
            ɵɵtemplate(5, AutocompleteOptgroupExample_mat_optgroup_5_Template, 2, 2, "mat-optgroup", 3);
            ɵɵpipe(6, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.stateForm);
            ɵɵadvance(2);
            ɵɵproperty("matAutocomplete", _r0);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 3, ctx.stateGroupOptions));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatFormField, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlName, RequiredValidator, MatAutocomplete, NgForOf, MatOptgroup, MatOption], pipes: [AsyncPipe], styles: [""] });
    return AutocompleteOptgroupExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-optgroup-example',
                templateUrl: './autocomplete-optgroup-example.html',
                styleUrls: ['./autocomplete-optgroup-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();
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
 * Generated from: src/components-examples/material/autocomplete/autocomplete-overview/autocomplete-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function AutocompleteOverviewExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵelement(1, "img", 7);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtext(4, " | ");
    ɵɵelementStart(5, "small");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = ctx.$implicit;
    ɵɵproperty("value", state_r2.name);
    ɵɵadvance(1);
    ɵɵproperty("src", state_r2.flag, ɵɵsanitizeUrl);
    ɵɵadvance(2);
    ɵɵtextInterpolate(state_r2.name);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("Population: ", state_r2.population, "");
} }
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
let AutocompleteOverviewExample = /** @class */ (() => {
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
                    templateUrl: 'autocomplete-overview-example.html',
                    styleUrls: ['autocomplete-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    AutocompleteOverviewExample.ctorParameters = () => [];
    /** @nocollapse */ AutocompleteOverviewExample.ɵfac = function AutocompleteOverviewExample_Factory(t) { return new (t || AutocompleteOverviewExample)(); };
    /** @nocollapse */ AutocompleteOverviewExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteOverviewExample, selectors: [["autocomplete-overview-example"]], decls: 10, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "State", "aria-label", "State", 3, "matAutocomplete", "formControl"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "checked", "change"], [3, "value"], ["aria-hidden", "", "height", "25", 1, "example-option-img", 3, "src"]], template: function AutocompleteOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵelementStart(3, "mat-autocomplete", null, 3);
            ɵɵtemplate(5, AutocompleteOverviewExample_mat_option_5_Template, 7, 4, "mat-option", 4);
            ɵɵpipe(6, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(7, "br");
            ɵɵelementStart(8, "mat-slide-toggle", 5);
            ɵɵlistener("change", function AutocompleteOverviewExample_Template_mat_slide_toggle_change_8_listener() { return ctx.stateCtrl.disabled ? ctx.stateCtrl.enable() : ctx.stateCtrl.disable(); });
            ɵɵtext(9, " Disable Input? ");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = ɵɵreference(4);
            ɵɵadvance(2);
            ɵɵproperty("matAutocomplete", _r0)("formControl", ctx.stateCtrl);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 4, ctx.filteredStates));
            ɵɵadvance(3);
            ɵɵproperty("checked", ctx.stateCtrl.disabled);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, MatAutocompleteTrigger, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatSlideToggle, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-option-img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'][_ngcontent-%COMP%]   .example-option-img[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}"] });
    return AutocompleteOverviewExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteOverviewExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-overview-example',
                templateUrl: 'autocomplete-overview-example.html',
                styleUrls: ['autocomplete-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
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
 * Generated from: src/components-examples/material/autocomplete/autocomplete-plain-input/autocomplete-plain-input-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function AutocompletePlainInputExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const street_r2 = ctx.$implicit;
    ɵɵproperty("value", street_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", street_r2, " ");
} }
/**
 * \@title Plain input autocomplete
 */
let AutocompletePlainInputExample = /** @class */ (() => {
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
                    templateUrl: 'autocomplete-plain-input-example.html',
                    styleUrls: ['autocomplete-plain-input-example.css'],
                },] },
    ];
    /** @nocollapse */ AutocompletePlainInputExample.ɵfac = function AutocompletePlainInputExample_Factory(t) { return new (t || AutocompletePlainInputExample)(); };
    /** @nocollapse */ AutocompletePlainInputExample.ɵcmp = ɵɵdefineComponent({ type: AutocompletePlainInputExample, selectors: [["autocomplete-plain-input-example"]], decls: 6, vars: 5, consts: [[1, "example-form"], ["type", "text", "placeholder", "Search for a street", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompletePlainInputExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelement(1, "input", 1);
            ɵɵelementStart(2, "mat-autocomplete", null, 2);
            ɵɵtemplate(4, AutocompletePlainInputExample_mat_option_4_Template, 2, 2, "mat-option", 3);
            ɵɵpipe(5, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = ɵɵreference(3);
            ɵɵadvance(1);
            ɵɵproperty("formControl", ctx.control)("matAutocomplete", _r0);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(5, 3, ctx.filteredStreets));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompletePlainInputExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompletePlainInputExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-plain-input-example',
                templateUrl: 'autocomplete-plain-input-example.html',
                styleUrls: ['autocomplete-plain-input-example.css'],
            }]
    }], null, null); })();
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
 * Generated from: src/components-examples/material/autocomplete/autocomplete-simple/autocomplete-simple-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function AutocompleteSimpleExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵɵproperty("value", option_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r2, " ");
} }
/**
 * \@title Simple autocomplete
 */
let AutocompleteSimpleExample = /** @class */ (() => {
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
                    templateUrl: 'autocomplete-simple-example.html',
                    styleUrls: ['autocomplete-simple-example.css'],
                },] },
    ];
    /** @nocollapse */ AutocompleteSimpleExample.ɵfac = function AutocompleteSimpleExample_Factory(t) { return new (t || AutocompleteSimpleExample)(); };
    /** @nocollapse */ AutocompleteSimpleExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteSimpleExample, selectors: [["autocomplete-simple-example"]], decls: 6, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteSimpleExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵelementStart(3, "mat-autocomplete", null, 3);
            ɵɵtemplate(5, AutocompleteSimpleExample_mat_option_5_Template, 2, 2, "mat-option", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = ɵɵreference(4);
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ctx.options);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteSimpleExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteSimpleExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-simple-example',
                templateUrl: 'autocomplete-simple-example.html',
                styleUrls: ['autocomplete-simple-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    AutocompleteSimpleExample.prototype.myControl;
    /** @type {?} */
    AutocompleteSimpleExample.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/autocomplete/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
let AutocompleteExamplesModule = /** @class */ (() => {
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
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ AutocompleteExamplesModule.ɵmod = ɵɵdefineNgModule({ type: AutocompleteExamplesModule });
    /** @nocollapse */ AutocompleteExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function AutocompleteExamplesModule_Factory(t) { return new (t || AutocompleteExamplesModule)(); }, imports: [[
                CommonModule,
                MatAutocompleteModule,
                MatFormFieldModule,
                MatInputModule,
                MatSlideToggleModule,
                FormsModule,
                ReactiveFormsModule,
            ]] });
    return AutocompleteExamplesModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AutocompleteExamplesModule, { declarations: [AutocompleteAutoActiveFirstOptionExample,
        AutocompleteDisplayExample,
        AutocompleteFilterExample,
        AutocompleteOptgroupExample,
        AutocompleteOverviewExample,
        AutocompletePlainInputExample,
        AutocompleteSimpleExample], imports: [CommonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule], exports: [AutocompleteAutoActiveFirstOptionExample,
        AutocompleteDisplayExample,
        AutocompleteFilterExample,
        AutocompleteOptgroupExample,
        AutocompleteOverviewExample,
        AutocompletePlainInputExample,
        AutocompleteSimpleExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteExamplesModule, [{
        type: NgModule,
        args: [{
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

export { AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteExamplesModule, AutocompleteFilterExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteSimpleExample };
//# sourceMappingURL=autocomplete.js.map
