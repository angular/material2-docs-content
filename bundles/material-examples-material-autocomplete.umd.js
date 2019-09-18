(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/autocomplete'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/slide-toggle'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/autocomplete', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/autocomplete', '@angular/material/form-field', '@angular/material/input', '@angular/material/slide-toggle', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.autocomplete = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.autocomplete, global.ng.material['form-field'], global.ng.material.input, global.ng.material['slide-toggle'], global.rxjs.operators));
}(this, function (exports, common, core, forms, autocomplete, formField, input, slideToggle, operators) { 'use strict';

    /**
     * @title Highlight the first autocomplete option
     */
    var AutocompleteAutoActiveFirstOptionExample = /** @class */ (function () {
        function AutocompleteAutoActiveFirstOptionExample() {
            this.myControl = new forms.FormControl();
            this.options = ['One', 'Two', 'Three'];
        }
        AutocompleteAutoActiveFirstOptionExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredOptions = this.myControl.valueChanges.pipe(operators.startWith(''), operators.map(function (value) { return _this._filter(value); }));
        };
        AutocompleteAutoActiveFirstOptionExample.prototype._filter = function (value) {
            var filterValue = value.toLowerCase();
            return this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
        };
        AutocompleteAutoActiveFirstOptionExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'autocomplete-auto-active-first-option-example',
                        template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return AutocompleteAutoActiveFirstOptionExample;
    }());

    /**
     * @title Display value autocomplete
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
        AutocompleteDisplayExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredOptions = this.myControl.valueChanges
                .pipe(operators.startWith(''), operators.map(function (value) { return typeof value === 'string' ? value : value.name; }), operators.map(function (name) { return name ? _this._filter(name) : _this.options.slice(); }));
        };
        AutocompleteDisplayExample.prototype.displayFn = function (user) {
            return user ? user.name : undefined;
        };
        AutocompleteDisplayExample.prototype._filter = function (name) {
            var filterValue = name.toLowerCase();
            return this.options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
        };
        AutocompleteDisplayExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'autocomplete-display-example',
                        template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return AutocompleteDisplayExample;
    }());

    /**
     * @title Filter autocomplete
     */
    var AutocompleteFilterExample = /** @class */ (function () {
        function AutocompleteFilterExample() {
            this.myControl = new forms.FormControl();
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
        AutocompleteFilterExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'autocomplete-filter-example',
                        template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return AutocompleteFilterExample;
    }());

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
        AutocompleteOptgroupExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'autocomplete-optgroup-example',
                        template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        AutocompleteOptgroupExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return AutocompleteOptgroupExample;
    }());

    /**
     * @title Autocomplete overview
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
                .pipe(operators.startWith(''), operators.map(function (state) { return state ? _this._filterStates(state) : _this.states.slice(); }));
        }
        AutocompleteOverviewExample.prototype._filterStates = function (value) {
            var filterValue = value.toLowerCase();
            return this.states.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
        };
        AutocompleteOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'autocomplete-overview-example',
                        template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        AutocompleteOverviewExample.ctorParameters = function () { return []; };
        return AutocompleteOverviewExample;
    }());

    /**
     * @title Plain input autocomplete
     */
    var AutocompletePlainInputExample = /** @class */ (function () {
        function AutocompletePlainInputExample() {
            this.control = new forms.FormControl();
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
        AutocompletePlainInputExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'autocomplete-plain-input-example',
                        template: "<form class=\"example-form\">\n  <input type=\"text\" placeholder=\"Search for a street\" [formControl]=\"control\" [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let street of filteredStreets | async\" [value]=\"street\">\n      {{street}}\n    </mat-option>\n  </mat-autocomplete>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return AutocompletePlainInputExample;
    }());

    /**
     * @title Simple autocomplete
     */
    var AutocompleteSimpleExample = /** @class */ (function () {
        function AutocompleteSimpleExample() {
            this.myControl = new forms.FormControl();
            this.options = ['One', 'Two', 'Three'];
        }
        AutocompleteSimpleExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'autocomplete-simple-example',
                        template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                        styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return AutocompleteSimpleExample;
    }());

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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            autocomplete.MatAutocompleteModule,
                            formField.MatFormFieldModule,
                            input.MatInputModule,
                            slideToggle.MatSlideToggleModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return AutocompleteExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AutocompleteAutoActiveFirstOptionExample = AutocompleteAutoActiveFirstOptionExample;
    exports.AutocompleteDisplayExample = AutocompleteDisplayExample;
    exports.AutocompleteFilterExample = AutocompleteFilterExample;
    exports.AutocompleteOptgroupExample = AutocompleteOptgroupExample;
    exports.AutocompleteOverviewExample = AutocompleteOverviewExample;
    exports.AutocompletePlainInputExample = AutocompletePlainInputExample;
    exports.AutocompleteSimpleExample = AutocompleteSimpleExample;
    exports.AutocompleteExamplesModule = AutocompleteExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-autocomplete.umd.js.map
