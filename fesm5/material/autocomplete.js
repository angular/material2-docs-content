import { NgForOf, AsyncPipe, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineComponent, ɵɵelement, ɵɵtemplate, ɵɵpipe, ɵɵreference, ɵɵpipeBind1, ɵsetClassMetadata, ɵɵdirectiveInject, ɵɵsanitizeUrl, ɵɵtextInterpolate, ɵɵlistener, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormControl, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, NgControlStatus, FormControlDirective, FormBuilder, FormGroupDirective, FormControlName, RequiredValidator, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteTrigger, MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { startWith, map } from 'rxjs/operators';
import { MatOption, MatOptgroup } from '@angular/material/core';

function AutocompleteAutoActiveFirstOptionExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r2 = ctx.$implicit;
    ɵɵproperty("value", option_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r2, " ");
} }
/**
 * @title Highlight the first autocomplete option
 */
var AutocompleteAutoActiveFirstOptionExample = /** @class */ (function () {
    function AutocompleteAutoActiveFirstOptionExample() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    AutocompleteAutoActiveFirstOptionExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(function (value) { return _this._filter(value); }));
    };
    AutocompleteAutoActiveFirstOptionExample.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    AutocompleteAutoActiveFirstOptionExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-auto-active-first-option-example',
                    templateUrl: 'autocomplete-auto-active-first-option-example.html',
                    styleUrls: ['autocomplete-auto-active-first-option-example.css'],
                },] },
    ];
    AutocompleteAutoActiveFirstOptionExample.ɵfac = function AutocompleteAutoActiveFirstOptionExample_Factory(t) { return new (t || AutocompleteAutoActiveFirstOptionExample)(); };
    AutocompleteAutoActiveFirstOptionExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteAutoActiveFirstOptionExample, selectors: [["autocomplete-auto-active-first-option-example"]], decls: 7, vars: 5, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteAutoActiveFirstOptionExample_Template(rf, ctx) { if (rf & 1) {
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
            var _r0 = ɵɵreference(4);
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 3, ctx.filteredOptions));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteAutoActiveFirstOptionExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteAutoActiveFirstOptionExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-auto-active-first-option-example',
                templateUrl: 'autocomplete-auto-active-first-option-example.html',
                styleUrls: ['autocomplete-auto-active-first-option-example.css'],
            }]
    }], null, null); })();

function AutocompleteDisplayExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r5 = ctx.$implicit;
    ɵɵproperty("value", option_r5);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r5.name, " ");
} }
/**
 * @title Display value autocomplete
 */
var AutocompleteDisplayExample = /** @class */ (function () {
    function AutocompleteDisplayExample() {
        this.myControl = new FormControl();
        this.options = [
            { name: 'Mary' },
            { name: 'Shelley' },
            { name: 'Igor' }
        ];
    }
    AutocompleteDisplayExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(function (value) { return typeof value === 'string' ? value : value.name; }), map(function (name) { return name ? _this._filter(name) : _this.options.slice(); }));
    };
    AutocompleteDisplayExample.prototype.displayFn = function (user) {
        return user.name;
    };
    AutocompleteDisplayExample.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AutocompleteDisplayExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-display-example',
                    templateUrl: 'autocomplete-display-example.html',
                    styleUrls: ['autocomplete-display-example.css'],
                },] },
    ];
    AutocompleteDisplayExample.ɵfac = function AutocompleteDisplayExample_Factory(t) { return new (t || AutocompleteDisplayExample)(); };
    AutocompleteDisplayExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteDisplayExample, selectors: [["autocomplete-display-example"]], decls: 7, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Assignee", "aria-label", "Assignee", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteDisplayExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵelementStart(3, "mat-autocomplete", 3, 4);
            ɵɵtemplate(5, AutocompleteDisplayExample_mat_option_5_Template, 2, 2, "mat-option", 5);
            ɵɵpipe(6, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r3 = ɵɵreference(4);
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r3);
            ɵɵadvance(1);
            ɵɵproperty("displayWith", ctx.displayFn);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 4, ctx.filteredOptions));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteDisplayExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteDisplayExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-display-example',
                templateUrl: 'autocomplete-display-example.html',
                styleUrls: ['autocomplete-display-example.css'],
            }]
    }], null, null); })();

function AutocompleteFilterExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r8 = ctx.$implicit;
    ɵɵproperty("value", option_r8);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r8, " ");
} }
/**
 * @title Filter autocomplete
 */
var AutocompleteFilterExample = /** @class */ (function () {
    function AutocompleteFilterExample() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    AutocompleteFilterExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filter(value); }));
    };
    AutocompleteFilterExample.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    AutocompleteFilterExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-filter-example',
                    templateUrl: 'autocomplete-filter-example.html',
                    styleUrls: ['autocomplete-filter-example.css'],
                },] },
    ];
    AutocompleteFilterExample.ɵfac = function AutocompleteFilterExample_Factory(t) { return new (t || AutocompleteFilterExample)(); };
    AutocompleteFilterExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteFilterExample, selectors: [["autocomplete-filter-example"]], decls: 7, vars: 5, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteFilterExample_Template(rf, ctx) { if (rf & 1) {
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
            var _r6 = ɵɵreference(4);
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r6);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 3, ctx.filteredOptions));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteFilterExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteFilterExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-filter-example',
                templateUrl: 'autocomplete-filter-example.html',
                styleUrls: ['autocomplete-filter-example.css'],
            }]
    }], null, null); })();

function AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var name_r13 = ctx.$implicit;
    ɵɵproperty("value", name_r13);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", name_r13, " ");
} }
function AutocompleteOptgroupExample_mat_optgroup_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-optgroup", 4);
    ɵɵtemplate(1, AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template, 2, 2, "mat-option", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    var group_r11 = ctx.$implicit;
    ɵɵproperty("label", group_r11.letter);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", group_r11.names);
} }
var _filter = function (opt, value) {
    var filterValue = value.toLowerCase();
    return opt.filter(function (item) { return item.toLowerCase().indexOf(filterValue) === 0; });
};
/**
 * @title Option groups autocomplete
 */
var AutocompleteOptgroupExample = /** @class */ (function () {
    function AutocompleteOptgroupExample(_formBuilder) {
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
    AutocompleteOptgroupExample.prototype.ngOnInit = function () {
        var _this = this;
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filterGroup(value); }));
    };
    AutocompleteOptgroupExample.prototype._filterGroup = function (value) {
        if (value) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    AutocompleteOptgroupExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-optgroup-example',
                    templateUrl: './autocomplete-optgroup-example.html',
                    styleUrls: ['./autocomplete-optgroup-example.css'],
                },] },
    ];
    /** @nocollapse */
    AutocompleteOptgroupExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    AutocompleteOptgroupExample.ɵfac = function AutocompleteOptgroupExample_Factory(t) { return new (t || AutocompleteOptgroupExample)(ɵɵdirectiveInject(FormBuilder)); };
    AutocompleteOptgroupExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteOptgroupExample, selectors: [["autocomplete-optgroup-example"]], decls: 7, vars: 5, consts: [[3, "formGroup"], ["type", "text", "matInput", "", "placeholder", "States Group", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteOptgroupExample_Template(rf, ctx) { if (rf & 1) {
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
            var _r9 = ɵɵreference(4);
            ɵɵproperty("formGroup", ctx.stateForm);
            ɵɵadvance(2);
            ɵɵproperty("matAutocomplete", _r9);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 3, ctx.stateGroupOptions));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatFormField, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlName, RequiredValidator, MatAutocomplete, NgForOf, MatOptgroup, MatOption], pipes: [AsyncPipe], styles: [""] });
    return AutocompleteOptgroupExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-optgroup-example',
                templateUrl: './autocomplete-optgroup-example.html',
                styleUrls: ['./autocomplete-optgroup-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

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
    var state_r16 = ctx.$implicit;
    ɵɵproperty("value", state_r16.name);
    ɵɵadvance(1);
    ɵɵproperty("src", state_r16.flag, ɵɵsanitizeUrl);
    ɵɵadvance(2);
    ɵɵtextInterpolate(state_r16.name);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("Population: ", state_r16.population, "");
} }
/**
 * @title Autocomplete overview
 */
var AutocompleteOverviewExample = /** @class */ (function () {
    function AutocompleteOverviewExample() {
        var _this = this;
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
            .pipe(startWith(''), map(function (state) { return state ? _this._filterStates(state) : _this.states.slice(); }));
    }
    AutocompleteOverviewExample.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.states.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AutocompleteOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-overview-example',
                    templateUrl: 'autocomplete-overview-example.html',
                    styleUrls: ['autocomplete-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    AutocompleteOverviewExample.ctorParameters = function () { return []; };
    AutocompleteOverviewExample.ɵfac = function AutocompleteOverviewExample_Factory(t) { return new (t || AutocompleteOverviewExample)(); };
    AutocompleteOverviewExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteOverviewExample, selectors: [["autocomplete-overview-example"]], decls: 10, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "State", "aria-label", "State", 3, "matAutocomplete", "formControl"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "checked", "change"], [3, "value"], ["aria-hidden", "", "height", "25", 1, "example-option-img", 3, "src"]], template: function AutocompleteOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
            ɵɵlistener("change", function AutocompleteOverviewExample_Template_mat_slide_toggle_change_8_listener($event) { return ctx.stateCtrl.disabled ? ctx.stateCtrl.enable() : ctx.stateCtrl.disable(); });
            ɵɵtext(9, " Disable Input? ");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r14 = ɵɵreference(4);
            ɵɵadvance(2);
            ɵɵproperty("matAutocomplete", _r14)("formControl", ctx.stateCtrl);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 4, ctx.filteredStates));
            ɵɵadvance(3);
            ɵɵproperty("checked", ctx.stateCtrl.disabled);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, MatAutocompleteTrigger, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatSlideToggle, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-option-img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'][_ngcontent-%COMP%]   .example-option-img[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}"] });
    return AutocompleteOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteOverviewExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-overview-example',
                templateUrl: 'autocomplete-overview-example.html',
                styleUrls: ['autocomplete-overview-example.css'],
            }]
    }], function () { return []; }, null); })();

function AutocompletePlainInputExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var street_r19 = ctx.$implicit;
    ɵɵproperty("value", street_r19);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", street_r19, " ");
} }
/**
 * @title Plain input autocomplete
 */
var AutocompletePlainInputExample = /** @class */ (function () {
    function AutocompletePlainInputExample() {
        this.control = new FormControl();
        this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
    }
    AutocompletePlainInputExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredStreets = this.control.valueChanges.pipe(startWith(''), map(function (value) { return _this._filter(value); }));
    };
    AutocompletePlainInputExample.prototype._filter = function (value) {
        var _this = this;
        var filterValue = this._normalizeValue(value);
        return this.streets.filter(function (street) { return _this._normalizeValue(street).includes(filterValue); });
    };
    AutocompletePlainInputExample.prototype._normalizeValue = function (value) {
        return value.toLowerCase().replace(/\s/g, '');
    };
    AutocompletePlainInputExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-plain-input-example',
                    templateUrl: 'autocomplete-plain-input-example.html',
                    styleUrls: ['autocomplete-plain-input-example.css'],
                },] },
    ];
    AutocompletePlainInputExample.ɵfac = function AutocompletePlainInputExample_Factory(t) { return new (t || AutocompletePlainInputExample)(); };
    AutocompletePlainInputExample.ɵcmp = ɵɵdefineComponent({ type: AutocompletePlainInputExample, selectors: [["autocomplete-plain-input-example"]], decls: 6, vars: 5, consts: [[1, "example-form"], ["type", "text", "placeholder", "Search for a street", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompletePlainInputExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelement(1, "input", 1);
            ɵɵelementStart(2, "mat-autocomplete", null, 2);
            ɵɵtemplate(4, AutocompletePlainInputExample_mat_option_4_Template, 2, 2, "mat-option", 3);
            ɵɵpipe(5, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r17 = ɵɵreference(3);
            ɵɵadvance(1);
            ɵɵproperty("formControl", ctx.control)("matAutocomplete", _r17);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(5, 3, ctx.filteredStreets));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], pipes: [AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompletePlainInputExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompletePlainInputExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-plain-input-example',
                templateUrl: 'autocomplete-plain-input-example.html',
                styleUrls: ['autocomplete-plain-input-example.css'],
            }]
    }], null, null); })();

function AutocompleteSimpleExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r22 = ctx.$implicit;
    ɵɵproperty("value", option_r22);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r22, " ");
} }
/**
 * @title Simple autocomplete
 */
var AutocompleteSimpleExample = /** @class */ (function () {
    function AutocompleteSimpleExample() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    AutocompleteSimpleExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-simple-example',
                    templateUrl: 'autocomplete-simple-example.html',
                    styleUrls: ['autocomplete-simple-example.css'],
                },] },
    ];
    AutocompleteSimpleExample.ɵfac = function AutocompleteSimpleExample_Factory(t) { return new (t || AutocompleteSimpleExample)(); };
    AutocompleteSimpleExample.ɵcmp = ɵɵdefineComponent({ type: AutocompleteSimpleExample, selectors: [["autocomplete-simple-example"]], decls: 6, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteSimpleExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵelementStart(3, "mat-autocomplete", null, 3);
            ɵɵtemplate(5, AutocompleteSimpleExample_mat_option_5_Template, 2, 2, "mat-option", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r20 = ɵɵreference(4);
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r20);
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ctx.options);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete, NgForOf, MatOption], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteSimpleExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteSimpleExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-simple-example',
                templateUrl: 'autocomplete-simple-example.html',
                styleUrls: ['autocomplete-simple-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompletePlainInputExample,
    AutocompleteSimpleExample,
];
var AutocompleteExamplesModule = /** @class */ (function () {
    function AutocompleteExamplesModule() {
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
                },] },
    ];
    AutocompleteExamplesModule.ɵmod = ɵɵdefineNgModule({ type: AutocompleteExamplesModule });
    AutocompleteExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function AutocompleteExamplesModule_Factory(t) { return new (t || AutocompleteExamplesModule)(); }, imports: [[
                CommonModule,
                MatAutocompleteModule,
                MatFormFieldModule,
                MatInputModule,
                MatSlideToggleModule,
                FormsModule,
                ReactiveFormsModule,
            ]] });
    return AutocompleteExamplesModule;
}());
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
            }]
    }], null, null); })();

export { AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteExamplesModule, AutocompleteFilterExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteSimpleExample };
//# sourceMappingURL=autocomplete.js.map
