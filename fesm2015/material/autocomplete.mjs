import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i4 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i4$1 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { startWith, map } from 'rxjs/operators';
import * as i3 from '@angular/material/core';

/**
 * @title Highlight the first autocomplete option
 */
class AutocompleteAutoActiveFirstOptionExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}
AutocompleteAutoActiveFirstOptionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteAutoActiveFirstOptionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteAutoActiveFirstOptionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: AutocompleteAutoActiveFirstOptionExample, selector: "autocomplete-auto-active-first-option-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Number</mat-label>\n    <input type=\"text\"\n           placeholder=\"Pick one\"\n           aria-label=\"Number\"\n           matInput\n           [formControl]=\"myControl\"\n           [matAutocomplete]=\"auto\">\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteAutoActiveFirstOptionExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-auto-active-first-option-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Number</mat-label>\n    <input type=\"text\"\n           placeholder=\"Pick one\"\n           aria-label=\"Number\"\n           matInput\n           [formControl]=\"myControl\"\n           [matAutocomplete]=\"auto\">\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });

/**
 * @title Display value autocomplete
 */
class AutocompleteDisplayExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => (typeof value === 'string' ? value : value.name)), map(name => (name ? this._filter(name) : this.options.slice())));
    }
    displayFn(user) {
        return user && user.name ? user.name : '';
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }
}
AutocompleteDisplayExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteDisplayExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteDisplayExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: AutocompleteDisplayExample, selector: "autocomplete-display-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Assignee</mat-label>\n    <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteDisplayExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-display-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Assignee</mat-label>\n    <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });

/**
 * @title Filter autocomplete
 */
class AutocompleteFilterExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}
AutocompleteFilterExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteFilterExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteFilterExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: AutocompleteFilterExample, selector: "autocomplete-filter-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Number</mat-label>\n    <input type=\"text\"\n           placeholder=\"Pick one\"\n           aria-label=\"Number\"\n           matInput\n           [formControl]=\"myControl\"\n           [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteFilterExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-filter-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Number</mat-label>\n    <input type=\"text\"\n           placeholder=\"Pick one\"\n           aria-label=\"Number\"\n           matInput\n           [formControl]=\"myControl\"\n           [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });

const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().includes(filterValue));
};
/**
 * @title Option groups autocomplete
 */
class AutocompleteOptgroupExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.stateForm = this._formBuilder.group({
            stateGroup: '',
        });
        this.stateGroups = [
            {
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
            },
            {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut'],
            },
            {
                letter: 'D',
                names: ['Delaware'],
            },
            {
                letter: 'F',
                names: ['Florida'],
            },
            {
                letter: 'G',
                names: ['Georgia'],
            },
            {
                letter: 'H',
                names: ['Hawaii'],
            },
            {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
            },
            {
                letter: 'K',
                names: ['Kansas', 'Kentucky'],
            },
            {
                letter: 'L',
                names: ['Louisiana'],
            },
            {
                letter: 'M',
                names: [
                    'Maine',
                    'Maryland',
                    'Massachusetts',
                    'Michigan',
                    'Minnesota',
                    'Mississippi',
                    'Missouri',
                    'Montana',
                ],
            },
            {
                letter: 'N',
                names: [
                    'Nebraska',
                    'Nevada',
                    'New Hampshire',
                    'New Jersey',
                    'New Mexico',
                    'New York',
                    'North Carolina',
                    'North Dakota',
                ],
            },
            {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon'],
            },
            {
                letter: 'P',
                names: ['Pennsylvania'],
            },
            {
                letter: 'R',
                names: ['Rhode Island'],
            },
            {
                letter: 'S',
                names: ['South Carolina', 'South Dakota'],
            },
            {
                letter: 'T',
                names: ['Tennessee', 'Texas'],
            },
            {
                letter: 'U',
                names: ['Utah'],
            },
            {
                letter: 'V',
                names: ['Vermont', 'Virginia'],
            },
            {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
            },
        ];
    }
    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges.pipe(startWith(''), map(value => this._filterGroup(value)));
    }
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
}
AutocompleteOptgroupExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteOptgroupExample, deps: [{ token: i4.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteOptgroupExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: AutocompleteOptgroupExample, selector: "autocomplete-optgroup-example", ngImport: i0, template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-optgroup-example', template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i4.FormBuilder }]; } });

/**
 * @title Autocomplete overview
 */
class AutocompleteOverviewExample {
    constructor() {
        this.stateCtrl = new FormControl();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
            },
        ];
        this.filteredStates = this.stateCtrl.valueChanges.pipe(startWith(''), map(state => (state ? this._filterStates(state) : this.states.slice())));
    }
    _filterStates(value) {
        const filterValue = value.toLowerCase();
        return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
    }
}
AutocompleteOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: AutocompleteOverviewExample, selector: "autocomplete-overview-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>State</mat-label>\n    <input matInput\n           aria-label=\"State\"\n           [matAutocomplete]=\"auto\"\n           [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i4$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-overview-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>State</mat-label>\n    <input matInput\n           aria-label=\"State\"\n           [matAutocomplete]=\"auto\"\n           [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: function () { return []; } });

/**
 * @title Plain input autocomplete
 */
class AutocompletePlainInputExample {
    constructor() {
        this.control = new FormControl();
        this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
    }
    ngOnInit() {
        this.filteredStreets = this.control.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = this._normalizeValue(value);
        return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
    }
    _normalizeValue(value) {
        return value.toLowerCase().replace(/\s/g, '');
    }
}
AutocompletePlainInputExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompletePlainInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompletePlainInputExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: AutocompletePlainInputExample, selector: "autocomplete-plain-input-example", ngImport: i0, template: "<form class=\"example-form\">\n  <input type=\"text\"\n         placeholder=\"Search for a street\"\n         [formControl]=\"control\"\n         [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let street of filteredStreets | async\" [value]=\"street\">\n      {{street}}\n    </mat-option>\n  </mat-autocomplete>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], components: [{ type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompletePlainInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-plain-input-example', template: "<form class=\"example-form\">\n  <input type=\"text\"\n         placeholder=\"Search for a street\"\n         [formControl]=\"control\"\n         [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let street of filteredStreets | async\" [value]=\"street\">\n      {{street}}\n    </mat-option>\n  </mat-autocomplete>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });

/**
 * @title Simple autocomplete
 */
class AutocompleteSimpleExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
}
AutocompleteSimpleExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteSimpleExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteSimpleExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: AutocompleteSimpleExample, selector: "autocomplete-simple-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Number</mat-label>\n<!-- #docregion input -->\n    <input type=\"text\"\n           placeholder=\"Pick one\"\n           aria-label=\"Number\"\n           matInput\n           [formControl]=\"myControl\"\n           [matAutocomplete]=\"auto\">\n<!-- #enddocregion input -->\n<!-- #docregion mat-autocomplete -->\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteSimpleExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-simple-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Number</mat-label>\n<!-- #docregion input -->\n    <input type=\"text\"\n           placeholder=\"Pick one\"\n           aria-label=\"Number\"\n           matInput\n           [formControl]=\"myControl\"\n           [matAutocomplete]=\"auto\">\n<!-- #enddocregion input -->\n<!-- #docregion mat-autocomplete -->\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });

/**
 * @title Testing with MatAutocompleteHarness
 */
class AutocompleteHarnessExample {
    constructor() {
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
}
AutocompleteHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: AutocompleteHarnessExample, selector: "autocomplete-harness-example", ngImport: i0, template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n", components: [{ type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-harness-example', template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n" }]
        }] });

const EXAMPLES = [
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteHarnessExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompletePlainInputExample,
    AutocompleteSimpleExample,
];
class AutocompleteExamplesModule {
}
AutocompleteExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AutocompleteExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteExamplesModule, declarations: [AutocompleteAutoActiveFirstOptionExample,
        AutocompleteDisplayExample,
        AutocompleteFilterExample,
        AutocompleteHarnessExample,
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
        AutocompleteHarnessExample,
        AutocompleteOptgroupExample,
        AutocompleteOverviewExample,
        AutocompletePlainInputExample,
        AutocompleteSimpleExample] });
AutocompleteExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteExamplesModule, imports: [[
            CommonModule,
            MatAutocompleteModule,
            MatFormFieldModule,
            MatInputModule,
            MatSlideToggleModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AutocompleteExamplesModule, decorators: [{
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
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteExamplesModule, AutocompleteFilterExample, AutocompleteHarnessExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteSimpleExample };
//# sourceMappingURL=autocomplete.mjs.map
