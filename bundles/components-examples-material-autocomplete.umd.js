(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/autocomplete'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/slide-toggle'), require('rxjs/operators'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/autocomplete', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/autocomplete', '@angular/material/form-field', '@angular/material/input', '@angular/material/slide-toggle', 'rxjs/operators', '@angular/material/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.autocomplete = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.autocomplete, global.ng.material.formField, global.ng.material.input, global.ng.material.slideToggle, global.rxjs.operators, global.ng.material.core));
}(this, (function (exports, i5, i0, i1, i4, i2, i3, i6$1, operators, i6) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);

    function AutocompleteAutoActiveFirstOptionExample_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 6);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", option_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", option_r2, " ");
        }
    }
    /**
     * @title Highlight the first autocomplete option
     */
    var AutocompleteAutoActiveFirstOptionExample = /** @class */ (function () {
        function AutocompleteAutoActiveFirstOptionExample() {
            this.myControl = new i1.FormControl();
            this.options = ['One', 'Two', 'Three'];
        }
        AutocompleteAutoActiveFirstOptionExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredOptions = this.myControl.valueChanges.pipe(operators.startWith(''), operators.map(function (value) { return _this._filter(value); }));
        };
        AutocompleteAutoActiveFirstOptionExample.prototype._filter = function (value) {
            var filterValue = value.toLowerCase();
            return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
        };
        return AutocompleteAutoActiveFirstOptionExample;
    }());
    AutocompleteAutoActiveFirstOptionExample.ɵfac = function AutocompleteAutoActiveFirstOptionExample_Factory(t) { return new (t || AutocompleteAutoActiveFirstOptionExample)(); };
    AutocompleteAutoActiveFirstOptionExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AutocompleteAutoActiveFirstOptionExample, selectors: [["autocomplete-auto-active-first-option-example"]], decls: 9, vars: 5, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteAutoActiveFirstOptionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Number");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelementStart(5, "mat-autocomplete", 3, 4);
                i0__namespace.ɵɵtemplate(7, AutocompleteAutoActiveFirstOptionExample_mat_option_7_Template, 2, 2, "mat-option", 5);
                i0__namespace.ɵɵpipe(8, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(8, 3, ctx.filteredOptions));
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i1__namespace.DefaultValueAccessor, i4__namespace.MatAutocompleteTrigger, i1__namespace.NgControlStatus, i1__namespace.FormControlDirective, i4__namespace.MatAutocomplete, i5__namespace.NgForOf, i6__namespace.MatOption], pipes: [i5__namespace.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AutocompleteAutoActiveFirstOptionExample, [{
                type: i0.Component,
                args: [{
                        selector: 'autocomplete-auto-active-first-option-example',
                        templateUrl: 'autocomplete-auto-active-first-option-example.html',
                        styleUrls: ['autocomplete-auto-active-first-option-example.css'],
                    }]
            }], null, null);
    })();

    function AutocompleteDisplayExample_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 6);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", option_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", option_r2.name, " ");
        }
    }
    /**
     * @title Display value autocomplete
     */
    var AutocompleteDisplayExample = /** @class */ (function () {
        function AutocompleteDisplayExample() {
            this.myControl = new i1.FormControl();
            this.options = [
                { name: 'Mary' },
                { name: 'Shelley' },
                { name: 'Igor' }
            ];
        }
        AutocompleteDisplayExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredOptions = this.myControl.valueChanges
                .pipe(operators.startWith(''), operators.map(function (value) { return typeof value === 'string' ? value : value.name; }), operators.map(function (name) { return name ? _this._filter(name) : _this.options.slice(); }));
        };
        AutocompleteDisplayExample.prototype.displayFn = function (user) {
            return user && user.name ? user.name : '';
        };
        AutocompleteDisplayExample.prototype._filter = function (name) {
            var filterValue = name.toLowerCase();
            return this.options.filter(function (option) { return option.name.toLowerCase().includes(filterValue); });
        };
        return AutocompleteDisplayExample;
    }());
    AutocompleteDisplayExample.ɵfac = function AutocompleteDisplayExample_Factory(t) { return new (t || AutocompleteDisplayExample)(); };
    AutocompleteDisplayExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AutocompleteDisplayExample, selectors: [["autocomplete-display-example"]], decls: 9, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteDisplayExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Assignee");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelementStart(5, "mat-autocomplete", 3, 4);
                i0__namespace.ɵɵtemplate(7, AutocompleteDisplayExample_mat_option_7_Template, 2, 2, "mat-option", 5);
                i0__namespace.ɵɵpipe(8, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("displayWith", ctx.displayFn);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(8, 4, ctx.filteredOptions));
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i1__namespace.DefaultValueAccessor, i4__namespace.MatAutocompleteTrigger, i1__namespace.NgControlStatus, i1__namespace.FormControlDirective, i4__namespace.MatAutocomplete, i5__namespace.NgForOf, i6__namespace.MatOption], pipes: [i5__namespace.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AutocompleteDisplayExample, [{
                type: i0.Component,
                args: [{
                        selector: 'autocomplete-display-example',
                        templateUrl: 'autocomplete-display-example.html',
                        styleUrls: ['autocomplete-display-example.css'],
                    }]
            }], null, null);
    })();

    function AutocompleteFilterExample_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", option_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", option_r2, " ");
        }
    }
    /**
     * @title Filter autocomplete
     */
    var AutocompleteFilterExample = /** @class */ (function () {
        function AutocompleteFilterExample() {
            this.myControl = new i1.FormControl();
            this.options = ['One', 'Two', 'Three'];
        }
        AutocompleteFilterExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredOptions = this.myControl.valueChanges
                .pipe(operators.startWith(''), operators.map(function (value) { return _this._filter(value); }));
        };
        AutocompleteFilterExample.prototype._filter = function (value) {
            var filterValue = value.toLowerCase();
            return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
        };
        return AutocompleteFilterExample;
    }());
    AutocompleteFilterExample.ɵfac = function AutocompleteFilterExample_Factory(t) { return new (t || AutocompleteFilterExample)(); };
    AutocompleteFilterExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AutocompleteFilterExample, selectors: [["autocomplete-filter-example"]], decls: 9, vars: 5, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteFilterExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Number");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelementStart(5, "mat-autocomplete", null, 3);
                i0__namespace.ɵɵtemplate(7, AutocompleteFilterExample_mat_option_7_Template, 2, 2, "mat-option", 4);
                i0__namespace.ɵɵpipe(8, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(8, 3, ctx.filteredOptions));
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i1__namespace.DefaultValueAccessor, i4__namespace.MatAutocompleteTrigger, i1__namespace.NgControlStatus, i1__namespace.FormControlDirective, i4__namespace.MatAutocomplete, i5__namespace.NgForOf, i6__namespace.MatOption], pipes: [i5__namespace.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AutocompleteFilterExample, [{
                type: i0.Component,
                args: [{
                        selector: 'autocomplete-filter-example',
                        templateUrl: 'autocomplete-filter-example.html',
                        styleUrls: ['autocomplete-filter-example.css'],
                    }]
            }], null, null);
    })();

    function AutocompleteOptgroupExample_mat_optgroup_7_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 6);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var name_r4 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", name_r4);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", name_r4, " ");
        }
    }
    function AutocompleteOptgroupExample_mat_optgroup_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-optgroup", 4);
            i0__namespace.ɵɵtemplate(1, AutocompleteOptgroupExample_mat_optgroup_7_mat_option_1_Template, 2, 2, "mat-option", 5);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var group_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("label", group_r2.letter);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", group_r2.names);
        }
    }
    var _filter = function (opt, value) {
        var filterValue = value.toLowerCase();
        return opt.filter(function (item) { return item.toLowerCase().includes(filterValue); });
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
                .pipe(operators.startWith(''), operators.map(function (value) { return _this._filterGroup(value); }));
        };
        AutocompleteOptgroupExample.prototype._filterGroup = function (value) {
            if (value) {
                return this.stateGroups
                    .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                    .filter(function (group) { return group.names.length > 0; });
            }
            return this.stateGroups;
        };
        return AutocompleteOptgroupExample;
    }());
    AutocompleteOptgroupExample.ɵfac = function AutocompleteOptgroupExample_Factory(t) { return new (t || AutocompleteOptgroupExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder)); };
    AutocompleteOptgroupExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AutocompleteOptgroupExample, selectors: [["autocomplete-optgroup-example"]], decls: 9, vars: 5, consts: [[3, "formGroup"], ["type", "text", "matInput", "", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteOptgroupExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field");
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "States Group");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 1);
                i0__namespace.ɵɵelementStart(5, "mat-autocomplete", null, 2);
                i0__namespace.ɵɵtemplate(7, AutocompleteOptgroupExample_mat_optgroup_7_Template, 2, 2, "mat-optgroup", 3);
                i0__namespace.ɵɵpipe(8, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵproperty("formGroup", ctx.stateForm);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("matAutocomplete", _r0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(8, 3, ctx.stateGroupOptions));
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i1__namespace.DefaultValueAccessor, i4__namespace.MatAutocompleteTrigger, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i1__namespace.RequiredValidator, i4__namespace.MatAutocomplete, i5__namespace.NgForOf, i6__namespace.MatOptgroup, i6__namespace.MatOption], pipes: [i5__namespace.AsyncPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AutocompleteOptgroupExample, [{
                type: i0.Component,
                args: [{
                        selector: 'autocomplete-optgroup-example',
                        templateUrl: './autocomplete-optgroup-example.html',
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }]; }, null);
    })();

    function AutocompleteOverviewExample_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 6);
            i0__namespace.ɵɵelement(1, "img", 7);
            i0__namespace.ɵɵelementStart(2, "span");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4, " | ");
            i0__namespace.ɵɵelementStart(5, "small");
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var state_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", state_r2.name);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("src", state_r2.flag, i0__namespace.ɵɵsanitizeUrl);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(state_r2.name);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1("Population: ", state_r2.population, "");
        }
    }
    /**
     * @title Autocomplete overview
     */
    var AutocompleteOverviewExample = /** @class */ (function () {
        function AutocompleteOverviewExample() {
            var _this = this;
            this.stateCtrl = new i1.FormControl();
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
                .pipe(operators.startWith(''), operators.map(function (state) { return state ? _this._filterStates(state) : _this.states.slice(); }));
        }
        AutocompleteOverviewExample.prototype._filterStates = function (value) {
            var filterValue = value.toLowerCase();
            return this.states.filter(function (state) { return state.name.toLowerCase().includes(filterValue); });
        };
        return AutocompleteOverviewExample;
    }());
    AutocompleteOverviewExample.ɵfac = function AutocompleteOverviewExample_Factory(t) { return new (t || AutocompleteOverviewExample)(); };
    AutocompleteOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AutocompleteOverviewExample, selectors: [["autocomplete-overview-example"]], decls: 12, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "aria-label", "State", 3, "matAutocomplete", "formControl"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "checked", "change"], [3, "value"], ["aria-hidden", "", "height", "25", 1, "example-option-img", 3, "src"]], template: function AutocompleteOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "State");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelementStart(5, "mat-autocomplete", null, 3);
                i0__namespace.ɵɵtemplate(7, AutocompleteOverviewExample_mat_option_7_Template, 7, 4, "mat-option", 4);
                i0__namespace.ɵɵpipe(8, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(9, "br");
                i0__namespace.ɵɵelementStart(10, "mat-slide-toggle", 5);
                i0__namespace.ɵɵlistener("change", function AutocompleteOverviewExample_Template_mat_slide_toggle_change_10_listener() { return ctx.stateCtrl.disabled ? ctx.stateCtrl.enable() : ctx.stateCtrl.disable(); });
                i0__namespace.ɵɵtext(11, " Disable Input? ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("matAutocomplete", _r0)("formControl", ctx.stateCtrl);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(8, 4, ctx.filteredStates));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("checked", ctx.stateCtrl.disabled);
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i4__namespace.MatAutocompleteTrigger, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlDirective, i4__namespace.MatAutocomplete, i5__namespace.NgForOf, i6__namespace$1.MatSlideToggle, i6__namespace.MatOption], pipes: [i5__namespace.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-option-img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'][_ngcontent-%COMP%]   .example-option-img[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AutocompleteOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'autocomplete-overview-example',
                        templateUrl: 'autocomplete-overview-example.html',
                        styleUrls: ['autocomplete-overview-example.css'],
                    }]
            }], function () { return []; }, null);
    })();

    function AutocompletePlainInputExample_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 4);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var street_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", street_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", street_r2, " ");
        }
    }
    /**
     * @title Plain input autocomplete
     */
    var AutocompletePlainInputExample = /** @class */ (function () {
        function AutocompletePlainInputExample() {
            this.control = new i1.FormControl();
            this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
        }
        AutocompletePlainInputExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredStreets = this.control.valueChanges.pipe(operators.startWith(''), operators.map(function (value) { return _this._filter(value); }));
        };
        AutocompletePlainInputExample.prototype._filter = function (value) {
            var _this = this;
            var filterValue = this._normalizeValue(value);
            return this.streets.filter(function (street) { return _this._normalizeValue(street).includes(filterValue); });
        };
        AutocompletePlainInputExample.prototype._normalizeValue = function (value) {
            return value.toLowerCase().replace(/\s/g, '');
        };
        return AutocompletePlainInputExample;
    }());
    AutocompletePlainInputExample.ɵfac = function AutocompletePlainInputExample_Factory(t) { return new (t || AutocompletePlainInputExample)(); };
    AutocompletePlainInputExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AutocompletePlainInputExample, selectors: [["autocomplete-plain-input-example"]], decls: 6, vars: 5, consts: [[1, "example-form"], ["type", "text", "placeholder", "Search for a street", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompletePlainInputExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelement(1, "input", 1);
                i0__namespace.ɵɵelementStart(2, "mat-autocomplete", null, 2);
                i0__namespace.ɵɵtemplate(4, AutocompletePlainInputExample_mat_option_4_Template, 2, 2, "mat-option", 3);
                i0__namespace.ɵɵpipe(5, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(3);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formControl", ctx.control)("matAutocomplete", _r0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(5, 3, ctx.filteredStreets));
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i1__namespace.DefaultValueAccessor, i4__namespace.MatAutocompleteTrigger, i1__namespace.NgControlStatus, i1__namespace.FormControlDirective, i4__namespace.MatAutocomplete, i5__namespace.NgForOf, i6__namespace.MatOption], pipes: [i5__namespace.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AutocompletePlainInputExample, [{
                type: i0.Component,
                args: [{
                        selector: 'autocomplete-plain-input-example',
                        templateUrl: 'autocomplete-plain-input-example.html',
                        styleUrls: ['autocomplete-plain-input-example.css'],
                    }]
            }], null, null);
    })();

    function AutocompleteSimpleExample_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", option_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", option_r2, " ");
        }
    }
    /**
     * @title Simple autocomplete
     */
    var AutocompleteSimpleExample = /** @class */ (function () {
        function AutocompleteSimpleExample() {
            this.myControl = new i1.FormControl();
            this.options = ['One', 'Two', 'Three'];
        }
        return AutocompleteSimpleExample;
    }());
    AutocompleteSimpleExample.ɵfac = function AutocompleteSimpleExample_Factory(t) { return new (t || AutocompleteSimpleExample)(); };
    AutocompleteSimpleExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AutocompleteSimpleExample, selectors: [["autocomplete-simple-example"]], decls: 8, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteSimpleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Number");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelementStart(5, "mat-autocomplete", null, 3);
                i0__namespace.ɵɵtemplate(7, AutocompleteSimpleExample_mat_option_7_Template, 2, 2, "mat-option", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.options);
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i1__namespace.DefaultValueAccessor, i4__namespace.MatAutocompleteTrigger, i1__namespace.NgControlStatus, i1__namespace.FormControlDirective, i4__namespace.MatAutocomplete, i5__namespace.NgForOf, i6__namespace.MatOption], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AutocompleteSimpleExample, [{
                type: i0.Component,
                args: [{
                        selector: 'autocomplete-simple-example',
                        templateUrl: 'autocomplete-simple-example.html',
                        styleUrls: ['autocomplete-simple-example.css'],
                    }]
            }], null, null);
    })();

    function AutocompleteHarnessExample_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 4);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var state_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", state_r2.code);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(state_r2.name);
        }
    }
    /**
     * @title Testing with MatAutocompleteHarness
     */
    var AutocompleteHarnessExample = /** @class */ (function () {
        function AutocompleteHarnessExample() {
            this.states = [
                { code: 'AL', name: 'Alabama' },
                { code: 'CA', name: 'California' },
                { code: 'FL', name: 'Florida' },
                { code: 'KS', name: 'Kansas' },
                { code: 'MA', name: 'Massachusetts' },
                { code: 'NY', name: 'New York' },
                { code: 'OR', name: 'Oregon' },
                { code: 'PA', name: 'Pennsylvania' },
                { code: 'TN', name: 'Tennessee' },
                { code: 'VA', name: 'Virginia' },
                { code: 'WY', name: 'Wyoming' },
            ];
        }
        return AutocompleteHarnessExample;
    }());
    AutocompleteHarnessExample.ɵfac = function AutocompleteHarnessExample_Factory(t) { return new (t || AutocompleteHarnessExample)(); };
    AutocompleteHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AutocompleteHarnessExample, selectors: [["autocomplete-harness-example"]], decls: 5, vars: 3, consts: [["autocomplete", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "plain", 3, "matAutocomplete"], ["id", "disabled", "disabled", "", 3, "matAutocomplete"], [3, "value"]], template: function AutocompleteHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-autocomplete", null, 0);
                i0__namespace.ɵɵtemplate(2, AutocompleteHarnessExample_mat_option_2_Template, 2, 2, "mat-option", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 2);
                i0__namespace.ɵɵelement(4, "input", 3);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(1);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.states);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matAutocomplete", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matAutocomplete", _r0);
            }
        }, directives: [i4__namespace.MatAutocomplete, i5__namespace.NgForOf, i4__namespace.MatAutocompleteTrigger, i6__namespace.MatOption], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AutocompleteHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'autocomplete-harness-example',
                        templateUrl: 'autocomplete-harness-example.html'
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        AutocompleteAutoActiveFirstOptionExample,
        AutocompleteDisplayExample,
        AutocompleteFilterExample,
        AutocompleteHarnessExample,
        AutocompleteOptgroupExample,
        AutocompleteOverviewExample,
        AutocompletePlainInputExample,
        AutocompleteSimpleExample,
    ];
    var AutocompleteExamplesModule = /** @class */ (function () {
        function AutocompleteExamplesModule() {
        }
        return AutocompleteExamplesModule;
    }());
    AutocompleteExamplesModule.ɵfac = function AutocompleteExamplesModule_Factory(t) { return new (t || AutocompleteExamplesModule)(); };
    AutocompleteExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: AutocompleteExamplesModule });
    AutocompleteExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i5.CommonModule,
                i4.MatAutocompleteModule,
                i2.MatFormFieldModule,
                i3.MatInputModule,
                i6$1.MatSlideToggleModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AutocompleteExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i5.CommonModule,
                            i4.MatAutocompleteModule,
                            i2.MatFormFieldModule,
                            i3.MatInputModule,
                            i6$1.MatSlideToggleModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(AutocompleteExamplesModule, { declarations: [AutocompleteAutoActiveFirstOptionExample,
                AutocompleteDisplayExample,
                AutocompleteFilterExample,
                AutocompleteHarnessExample,
                AutocompleteOptgroupExample,
                AutocompleteOverviewExample,
                AutocompletePlainInputExample,
                AutocompleteSimpleExample], imports: [i5.CommonModule,
                i4.MatAutocompleteModule,
                i2.MatFormFieldModule,
                i3.MatInputModule,
                i6$1.MatSlideToggleModule,
                i1.FormsModule,
                i1.ReactiveFormsModule], exports: [AutocompleteAutoActiveFirstOptionExample,
                AutocompleteDisplayExample,
                AutocompleteFilterExample,
                AutocompleteHarnessExample,
                AutocompleteOptgroupExample,
                AutocompleteOverviewExample,
                AutocompletePlainInputExample,
                AutocompleteSimpleExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AutocompleteAutoActiveFirstOptionExample = AutocompleteAutoActiveFirstOptionExample;
    exports.AutocompleteDisplayExample = AutocompleteDisplayExample;
    exports.AutocompleteExamplesModule = AutocompleteExamplesModule;
    exports.AutocompleteFilterExample = AutocompleteFilterExample;
    exports.AutocompleteHarnessExample = AutocompleteHarnessExample;
    exports.AutocompleteOptgroupExample = AutocompleteOptgroupExample;
    exports.AutocompleteOverviewExample = AutocompleteOverviewExample;
    exports.AutocompletePlainInputExample = AutocompletePlainInputExample;
    exports.AutocompleteSimpleExample = AutocompleteSimpleExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-autocomplete.umd.js.map
