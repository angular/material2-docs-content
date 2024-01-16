import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer, CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPopoverEditModule } from '@angular/material-experimental/popover-edit';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/cdk-experimental/popover-edit";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material-experimental/popover-edit";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@angular/material/list";
const ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        type: 'Nonmetal',
        weight: 1.0079,
        symbol: 'H',
        fantasyCounterparts: ['Fire', 'Wind', 'Light'],
    },
    {
        position: 2,
        name: 'Helium',
        type: 'Nonmetal',
        weight: 4.0026,
        symbol: 'He',
        fantasyCounterparts: ['Wind', 'Light'],
    },
    {
        position: 3,
        name: 'Lithium',
        type: 'Metal',
        weight: 6.941,
        symbol: 'Li',
        fantasyCounterparts: [],
    },
    {
        position: 4,
        name: 'Beryllium',
        type: 'Metal',
        weight: 9.0122,
        symbol: 'Be',
        fantasyCounterparts: [],
    },
    {
        position: 5,
        name: 'Boron',
        type: 'Semimetal',
        weight: 10.811,
        symbol: 'B',
        fantasyCounterparts: [],
    },
    {
        position: 6,
        name: 'Carbon',
        type: 'Nonmetal',
        weight: 12.0107,
        symbol: 'C',
        fantasyCounterparts: ['Earth', 'Dark'],
    },
    {
        position: 7,
        name: 'Nitrogen',
        type: 'Nonmetal',
        weight: 14.0067,
        symbol: 'N',
        fantasyCounterparts: ['Wind'],
    },
    {
        position: 8,
        name: 'Oxygen',
        type: 'Nonmetal',
        weight: 15.9994,
        symbol: 'O',
        fantasyCounterparts: ['Fire', 'Water', 'Wind'],
    },
    {
        position: 9,
        name: 'Fluorine',
        type: 'Nonmetal',
        weight: 18.9984,
        symbol: 'F',
        fantasyCounterparts: [],
    },
    {
        position: 10,
        name: 'Neon',
        type: 'Nonmetal',
        weight: 20.1797,
        symbol: 'Ne',
        fantasyCounterparts: ['Light'],
    },
    {
        position: 11,
        name: 'Sodium',
        type: 'Metal',
        weight: 22.9897,
        symbol: 'Na',
        fantasyCounterparts: ['Earth', 'Water'],
    },
    {
        position: 12,
        name: 'Magnesium',
        type: 'Metal',
        weight: 24.305,
        symbol: 'Mg',
        fantasyCounterparts: [],
    },
    {
        position: 13,
        name: 'Aluminum',
        type: 'Metal',
        weight: 26.9815,
        symbol: 'Al',
        fantasyCounterparts: [],
    },
    {
        position: 14,
        name: 'Silicon',
        type: 'Semimetal',
        weight: 28.0855,
        symbol: 'Si',
        fantasyCounterparts: [],
    },
    {
        position: 15,
        name: 'Phosphorus',
        type: 'Nonmetal',
        weight: 30.9738,
        symbol: 'P',
        fantasyCounterparts: [],
    },
    {
        position: 16,
        name: 'Sulfur',
        type: 'Nonmetal',
        weight: 32.065,
        symbol: 'S',
        fantasyCounterparts: [],
    },
    {
        position: 17,
        name: 'Chlorine',
        type: 'Nonmetal',
        weight: 35.453,
        symbol: 'Cl',
        fantasyCounterparts: [],
    },
    {
        position: 18,
        name: 'Argon',
        type: 'Nonmetal',
        weight: 39.948,
        symbol: 'Ar',
        fantasyCounterparts: [],
    },
    {
        position: 19,
        name: 'Potassium',
        type: 'Metal',
        weight: 39.0983,
        symbol: 'K',
        fantasyCounterparts: [],
    },
    {
        position: 20,
        name: 'Calcium',
        type: 'Metal',
        weight: 40.078,
        symbol: 'Ca',
        fantasyCounterparts: [],
    },
];
const TYPES = ['Metal', 'Semimetal', 'Nonmetal'];
const FANTASY_ELEMENTS = [
    'Earth',
    'Water',
    'Wind',
    'Fire',
    'Light',
    'Dark',
];
/**
 * @title Material Popover Edit on a Material data-table
 */
export class PopoverEditMatTableExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.displayedColumns = [
            'position',
            'name',
            'type',
            'weight',
            'symbol',
            'fantasyCounterpart',
        ];
        this.dataSource = new ExampleDataSource();
        this.nameEditEnabled = true;
        this.TYPES = TYPES;
        this.FANTASY_ELEMENTS = FANTASY_ELEMENTS;
        this.nameValues = new FormValueContainer();
        this.weightValues = new FormValueContainer();
        this.typeValues = new FormValueContainer();
        this.fantasyValues = new FormValueContainer();
    }
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
    onSubmitType(element, f) {
        if (!f.valid) {
            return;
        }
        element.type = f.value.type[0];
    }
    onSubmitFantasyCounterparts(element, f) {
        if (!f.valid) {
            return;
        }
        element.fantasyCounterparts = f.value.fantasyCounterparts;
    }
    goodJob(element) {
        this._snackBar.open(`Way to go, ${element.name}!`, undefined, { duration: 2000 });
    }
    badJob(element) {
        this._snackBar.open(`You have failed me for the last time, #${element.position}.`, undefined, {
            duration: 2000,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: PopoverEditMatTableExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0-rc.0", type: PopoverEditMatTableExample, isStandalone: true, selector: "popover-edit-mat-table-example", ngImport: i0, template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\n        <div mat-edit-content>\n          <mat-form-field>\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{element.position}}\n\n      <!-- Row hover content in a non-edit cell. -->\n      <span *matRowHoverContent>\n        <button mat-icon-button (click)=\"goodJob(element)\">\n          <mat-icon>thumb_up</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"badJob(element)\">\n          <mat-icon>thumb_down</mat-icon>\n        </button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>\n      Name\n      <mat-checkbox\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\n      {{element.name}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\n            <h2 mat-edit-title>Name</h2>\n            <div mat-edit-content>\n              <mat-form-field>\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n              <button mat-button matEditClose>Close</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      @if (nameEditEnabled) {\n        <span *matRowHoverContent>\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n        </span>\n      }\n    </td>\n  </ng-container>\n\n  <!-- Type Column -->\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef> Type </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"typeEdit\">\n      {{element.type}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #typeEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              matEditClose\n              (ngSubmit)=\"onSubmitType(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [multiple]=\"false\"\n                  name=\"type\"\n                  [ngModel]=\"[element.type]\"\n                  (selectionChange)=\"f.ngSubmit.emit()\"\n                  aria-label=\"Element type\">\n                @for (type of TYPES; track type) {\n                  <mat-list-option [value]=\"type\">{{type}}</mat-list-option>\n                }\n              </mat-selection-list>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\n      {{element.weight}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Fantasy Counterparts Column -->\n  <ng-container matColumnDef=\"fantasyCounterpart\">\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\n      {{element.fantasyCounterparts.join(', ')}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #fantasyCounterpartEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\n                  name=\"fantasyCounterparts\"\n                  aria-label=\"Fantasy Element Counterparts\">\n                @for (fantasyElement of FANTASY_ELEMENTS; track fantasyElement) {\n                  <mat-list-option\n                    [value]=\"fantasyElement\"\n                    checkboxPosition=\"before\">{{fantasyElement}}</mat-list-option>\n                }\n              </mat-selection-list>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 16%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i3.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i5.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i5.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i5.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i5.MatEditRevert, selector: "button[matEditRevert]" }, { kind: "directive", type: i5.MatEditClose, selector: "[matEditClose]" }, { kind: "directive", type: i5.MatEditOpen, selector: "[matEditOpen]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i7.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i8.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i9.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i10.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatListModule }, { kind: "component", type: i11.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i11.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: PopoverEditMatTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'popover-edit-mat-table-example', standalone: true, imports: [
                        MatTableModule,
                        CdkPopoverEditModule,
                        FormsModule,
                        MatPopoverEditModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatButtonModule,
                        MatIconModule,
                        MatCheckboxModule,
                        MatListModule,
                    ], template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\n        <div mat-edit-content>\n          <mat-form-field>\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{element.position}}\n\n      <!-- Row hover content in a non-edit cell. -->\n      <span *matRowHoverContent>\n        <button mat-icon-button (click)=\"goodJob(element)\">\n          <mat-icon>thumb_up</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"badJob(element)\">\n          <mat-icon>thumb_down</mat-icon>\n        </button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>\n      Name\n      <mat-checkbox\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\n      {{element.name}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\n            <h2 mat-edit-title>Name</h2>\n            <div mat-edit-content>\n              <mat-form-field>\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n              <button mat-button matEditClose>Close</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      @if (nameEditEnabled) {\n        <span *matRowHoverContent>\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n        </span>\n      }\n    </td>\n  </ng-container>\n\n  <!-- Type Column -->\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef> Type </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"typeEdit\">\n      {{element.type}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #typeEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              matEditClose\n              (ngSubmit)=\"onSubmitType(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [multiple]=\"false\"\n                  name=\"type\"\n                  [ngModel]=\"[element.type]\"\n                  (selectionChange)=\"f.ngSubmit.emit()\"\n                  aria-label=\"Element type\">\n                @for (type of TYPES; track type) {\n                  <mat-list-option [value]=\"type\">{{type}}</mat-list-option>\n                }\n              </mat-selection-list>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\n      {{element.weight}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Fantasy Counterparts Column -->\n  <ng-container matColumnDef=\"fantasyCounterpart\">\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\n      {{element.fantasyCounterparts.join(', ')}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #fantasyCounterpartEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\n                  name=\"fantasyCounterparts\"\n                  aria-label=\"Fantasy Element Counterparts\">\n                @for (fantasyElement of FANTASY_ELEMENTS; track fantasyElement) {\n                  <mat-list-option\n                    [value]=\"fantasyElement\"\n                    checkboxPosition=\"before\">{{fantasyElement}}</mat-list-option>\n                }\n              </mat-selection-list>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 16%;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatSnackBar }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRyxPQUFPLEVBQVMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0Is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QUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDO21IQS9EVSwwQkFBMEI7dUdBQTFCLDBCQUEwQiwwRkM5TnZDLHU0TUFpTEEsME1EaUNJLGNBQWMsZ2hDQUNkLG9CQUFvQixrSkFDcEIsV0FBVyxzNkNBQ1gsb0JBQW9CLHd4QkFDcEIsa0JBQWtCLHlPQUNsQixjQUFjLDBXQUNkLGVBQWUsd1VBQ2YsYUFBYSxtTEFDYixpQkFBaUIsOFdBQ2pCLGFBQWE7O2dHQUdKLDBCQUEwQjtrQkFsQnRDLFNBQVM7K0JBQ0UsZ0NBQWdDLGNBRzlCLElBQUksV0FDUDt3QkFDUCxjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsV0FBVzt3QkFDWCxvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixhQUFhO3FCQUNkOztBQW9FSDs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBMkI7SUFBbEU7O1FBQ0Usb0RBQW9EO1FBQ3BELFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBb0IsWUFBWSxDQUFDLENBQUM7SUFROUQsQ0FBQztJQU5DLGlHQUFpRztJQUNqRyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVLEtBQUksQ0FBQztDQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Rm9ybVZhbHVlQ29udGFpbmVyLCBDZGtQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtOZ0Zvcm0sIEZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFNuYWNrQmFyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0UG9wb3ZlckVkaXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgdHlwZSBFbGVtZW50VHlwZSA9ICdNZXRhbCcgfCAnU2VtaW1ldGFsJyB8ICdOb25tZXRhbCc7XG5cbmV4cG9ydCB0eXBlIEZhbnRhc3lFbGVtZW50ID0gJ0VhcnRoJyB8ICdXYXRlcicgfCAnV2luZCcgfCAnRmlyZScgfCAnTGlnaHQnIHwgJ0RhcmsnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogRWxlbWVudFR5cGU7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbiAgZmFudGFzeUNvdW50ZXJwYXJ0czogRmFudGFzeUVsZW1lbnRbXTtcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge1xuICAgIHBvc2l0aW9uOiAxLFxuICAgIG5hbWU6ICdIeWRyb2dlbicsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDEuMDA3OSxcbiAgICBzeW1ib2w6ICdIJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0ZpcmUnLCAnV2luZCcsICdMaWdodCddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDIsXG4gICAgbmFtZTogJ0hlbGl1bScsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDQuMDAyNixcbiAgICBzeW1ib2w6ICdIZScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydXaW5kJywgJ0xpZ2h0J10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMyxcbiAgICBuYW1lOiAnTGl0aGl1bScsXG4gICAgdHlwZTogJ01ldGFsJyxcbiAgICB3ZWlnaHQ6IDYuOTQxLFxuICAgIHN5bWJvbDogJ0xpJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA0LFxuICAgIG5hbWU6ICdCZXJ5bGxpdW0nLFxuICAgIHR5cGU6ICdNZXRhbCcsXG4gICAgd2VpZ2h0OiA5LjAxMjIsXG4gICAgc3ltYm9sOiAnQmUnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDUsXG4gICAgbmFtZTogJ0Jvcm9uJyxcbiAgICB0eXBlOiAnU2VtaW1ldGFsJyxcbiAgICB3ZWlnaHQ6IDEwLjgxMSxcbiAgICBzeW1ib2w6ICdCJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA2LFxuICAgIG5hbWU6ICdDYXJib24nLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAxMi4wMTA3LFxuICAgIHN5bWJvbDogJ0MnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRWFydGgnLCAnRGFyayddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDcsXG4gICAgbmFtZTogJ05pdHJvZ2VuJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMTQuMDA2NyxcbiAgICBzeW1ib2w6ICdOJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ1dpbmQnXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA4LFxuICAgIG5hbWU6ICdPeHlnZW4nLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAxNS45OTk0LFxuICAgIHN5bWJvbDogJ08nLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRmlyZScsICdXYXRlcicsICdXaW5kJ10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogOSxcbiAgICBuYW1lOiAnRmx1b3JpbmUnLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAxOC45OTg0LFxuICAgIHN5bWJvbDogJ0YnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDEwLFxuICAgIG5hbWU6ICdOZW9uJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMjAuMTc5NyxcbiAgICBzeW1ib2w6ICdOZScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydMaWdodCddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDExLFxuICAgIG5hbWU6ICdTb2RpdW0nLFxuICAgIHR5cGU6ICdNZXRhbCcsXG4gICAgd2VpZ2h0OiAyMi45ODk3LFxuICAgIHN5bWJvbDogJ05hJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0VhcnRoJywgJ1dhdGVyJ10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTIsXG4gICAgbmFtZTogJ01hZ25lc2l1bScsXG4gICAgdHlwZTogJ01ldGFsJyxcbiAgICB3ZWlnaHQ6IDI0LjMwNSxcbiAgICBzeW1ib2w6ICdNZycsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTMsXG4gICAgbmFtZTogJ0FsdW1pbnVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogMjYuOTgxNSxcbiAgICBzeW1ib2w6ICdBbCcsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTQsXG4gICAgbmFtZTogJ1NpbGljb24nLFxuICAgIHR5cGU6ICdTZW1pbWV0YWwnLFxuICAgIHdlaWdodDogMjguMDg1NSxcbiAgICBzeW1ib2w6ICdTaScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTUsXG4gICAgbmFtZTogJ1Bob3NwaG9ydXMnLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAzMC45NzM4LFxuICAgIHN5bWJvbDogJ1AnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDE2LFxuICAgIG5hbWU6ICdTdWxmdXInLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAzMi4wNjUsXG4gICAgc3ltYm9sOiAnUycsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTcsXG4gICAgbmFtZTogJ0NobG9yaW5lJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMzUuNDUzLFxuICAgIHN5bWJvbDogJ0NsJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxOCxcbiAgICBuYW1lOiAnQXJnb24nLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAzOS45NDgsXG4gICAgc3ltYm9sOiAnQXInLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDE5LFxuICAgIG5hbWU6ICdQb3Rhc3NpdW0nLFxuICAgIHR5cGU6ICdNZXRhbCcsXG4gICAgd2VpZ2h0OiAzOS4wOTgzLFxuICAgIHN5bWJvbDogJ0snLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDIwLFxuICAgIG5hbWU6ICdDYWxjaXVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogNDAuMDc4LFxuICAgIHN5bWJvbDogJ0NhJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbl07XG5cbmNvbnN0IFRZUEVTOiByZWFkb25seSBFbGVtZW50VHlwZVtdID0gWydNZXRhbCcsICdTZW1pbWV0YWwnLCAnTm9ubWV0YWwnXTtcbmNvbnN0IEZBTlRBU1lfRUxFTUVOVFM6IHJlYWRvbmx5IEZhbnRhc3lFbGVtZW50W10gPSBbXG4gICdFYXJ0aCcsXG4gICdXYXRlcicsXG4gICdXaW5kJyxcbiAgJ0ZpcmUnLFxuICAnTGlnaHQnLFxuICAnRGFyaycsXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBNYXRlcmlhbCBQb3BvdmVyIEVkaXQgb24gYSBNYXRlcmlhbCBkYXRhLXRhYmxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAncG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgQ2RrUG9wb3ZlckVkaXRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0UG9wb3ZlckVkaXRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJFZGl0TWF0VGFibGVFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXG4gICAgJ3Bvc2l0aW9uJyxcbiAgICAnbmFtZScsXG4gICAgJ3R5cGUnLFxuICAgICd3ZWlnaHQnLFxuICAgICdzeW1ib2wnLFxuICAgICdmYW50YXN5Q291bnRlcnBhcnQnLFxuICBdO1xuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKCk7XG5cbiAgbmFtZUVkaXRFbmFibGVkID0gdHJ1ZTtcblxuICByZWFkb25seSBUWVBFUyA9IFRZUEVTO1xuICByZWFkb25seSBGQU5UQVNZX0VMRU1FTlRTID0gRkFOVEFTWV9FTEVNRU5UUztcblxuICByZWFkb25seSBuYW1lVmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgd2VpZ2h0VmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgdHlwZVZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG4gIHJlYWRvbmx5IGZhbnRhc3lWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvblN1Ym1pdE5hbWUoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Lm5hbWUgPSBmLnZhbHVlLm5hbWU7XG4gIH1cblxuICBvblN1Ym1pdFdlaWdodChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQud2VpZ2h0ID0gZi52YWx1ZS53ZWlnaHQ7XG4gIH1cblxuICBvblN1Ym1pdFR5cGUoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnR5cGUgPSBmLnZhbHVlLnR5cGVbMF07XG4gIH1cblxuICBvblN1Ym1pdEZhbnRhc3lDb3VudGVycGFydHMoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LmZhbnRhc3lDb3VudGVycGFydHMgPSBmLnZhbHVlLmZhbnRhc3lDb3VudGVycGFydHM7XG4gIH1cblxuICBnb29kSm9iKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4oYFdheSB0byBnbywgJHtlbGVtZW50Lm5hbWV9IWAsIHVuZGVmaW5lZCwge2R1cmF0aW9uOiAyMDAwfSk7XG4gIH1cblxuICBiYWRKb2IoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbihgWW91IGhhdmUgZmFpbGVkIG1lIGZvciB0aGUgbGFzdCB0aW1lLCAjJHtlbGVtZW50LnBvc2l0aW9ufS5gLCB1bmRlZmluZWQsIHtcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgdG8gcHJvdmlkZSB3aGF0IGRhdGEgc2hvdWxkIGJlIHJlbmRlcmVkIGluIHRoZSB0YWJsZS4gTm90ZSB0aGF0IHRoZSBkYXRhIHNvdXJjZVxuICogY2FuIHJldHJpZXZlIGl0cyBkYXRhIGluIGFueSB3YXkuIEluIHRoaXMgY2FzZSwgdGhlIGRhdGEgc291cmNlIGlzIHByb3ZpZGVkIGEgcmVmZXJlbmNlXG4gKiB0byBhIGNvbW1vbiBkYXRhIGJhc2UsIEV4YW1wbGVEYXRhYmFzZS4gSXQgaXMgbm90IHRoZSBkYXRhIHNvdXJjZSdzIHJlc3BvbnNpYmlsaXR5IHRvIG1hbmFnZVxuICogdGhlIHVuZGVybHlpbmcgZGF0YS4gSW5zdGVhZCwgaXQgb25seSBuZWVkcyB0byB0YWtlIHRoZSBkYXRhIGFuZCBzZW5kIHRoZSB0YWJsZSBleGFjdGx5IHdoYXRcbiAqIHNob3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+IHtcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xuICBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQZXJpb2RpY0VsZW1lbnRbXT4oRUxFTUVOVF9EQVRBKTtcblxuICAvKiogQ29ubmVjdCBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRhYmxlIHRvIHJldHJpZXZlIG9uZSBzdHJlYW0gY29udGFpbmluZyB0aGUgZGF0YSB0byByZW5kZXIuICovXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxQZXJpb2RpY0VsZW1lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBkaXNjb25uZWN0KCkge31cbn1cbiIsIjx0YWJsZSBjbGFzcz1cImV4YW1wbGUtdGFibGVcIiBtYXQtdGFibGUgZWRpdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiPlxuICA8IS0tXG4gICAgVGhpcyBlZGl0IGxlbnMgaXMgc3BlY2lmaWVkIG91dHNpZGUgb2YgdGhlIGNlbGwgYW5kIG11c3QgZXhwbGljaXRseSBkZWNsYXJlXG4gICAgaXRzIGNvbnRleHQuIEl0IGNvdWxkIGJlIHJldXNlZCBpbiBtdWx0aXBsZSBjZWxscy5cbiAgLS0+XG4gIDxuZy10ZW1wbGF0ZSAjd2VpZ2h0RWRpdCBsZXQtZWxlbWVudD5cbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgIG1hdEVkaXRMZW5zXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0V2VpZ2h0KGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICBbKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlKV09XCJ3ZWlnaHRWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgIDxkaXYgbWF0LWVkaXQtY29udGVudD5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFtuZ01vZGVsXT1cImVsZW1lbnQud2VpZ2h0XCIgbmFtZT1cIndlaWdodFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTm8uIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cbiAgICAgIHt7ZWxlbWVudC5wb3NpdGlvbn19XG5cbiAgICAgIDwhLS0gUm93IGhvdmVyIGNvbnRlbnQgaW4gYSBub24tZWRpdCBjZWxsLiAtLT5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJnb29kSm9iKGVsZW1lbnQpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnRodW1iX3VwPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJiYWRKb2IoZWxlbWVudClcIj5cbiAgICAgICAgICA8bWF0LWljb24+dGh1bWJfZG93bjwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XG4gICAgICBOYW1lXG4gICAgICA8bWF0LWNoZWNrYm94XG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJuYW1lRWRpdEVuYWJsZWRcIj5FZGl0IGVuYWJsZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0RGlzYWJsZWRdPVwiIW5hbWVFZGl0RW5hYmxlZFwiPlxuICAgICAge3tlbGVtZW50Lm5hbWV9fVxuXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjbmFtZUVkaXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXROYW1lKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwibmFtZVZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cbiAgICAgICAgICAgIDxoMiBtYXQtZWRpdC10aXRsZT5OYW1lPC9oMj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtY29udGVudD5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJlbGVtZW50Lm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWFjdGlvbnM+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRDbG9zZT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIEBpZiAobmFtZUVkaXRFbmFibGVkKSB7XG4gICAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICB9XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBUeXBlIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ0eXBlXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gVHlwZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cInR5cGVFZGl0XCI+XG4gICAgICB7e2VsZW1lbnQudHlwZX19XG5cbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICN0eXBlRWRpdD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgIG1hdEVkaXRMZW5zXG4gICAgICAgICAgICAgIG1hdEVkaXRDbG9zZVxuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXRUeXBlKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwidHlwZVZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtZmlsbD5cbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3Rpb24tbGlzdCBbbXVsdGlwbGVdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiW2VsZW1lbnQudHlwZV1cIlxuICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJmLm5nU3VibWl0LmVtaXQoKVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRWxlbWVudCB0eXBlXCI+XG4gICAgICAgICAgICAgICAgQGZvciAodHlwZSBvZiBUWVBFUzsgdHJhY2sgdHlwZSkge1xuICAgICAgICAgICAgICAgICAgPG1hdC1saXN0LW9wdGlvbiBbdmFsdWVdPVwidHlwZVwiPnt7dHlwZX19PC9tYXQtbGlzdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Rpb24tbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+YXJyb3dfZHJvcF9kb3duPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwid2VpZ2h0RWRpdFwiIFttYXRQb3BvdmVyRWRpdENvbnRleHRdPVwiZWxlbWVudFwiPlxuICAgICAge3tlbGVtZW50LndlaWdodH19XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG5cbiAgPCEtLSBGYW50YXN5IENvdW50ZXJwYXJ0cyBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZmFudGFzeUNvdW50ZXJwYXJ0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gRmFudGFzeSBDb3VudGVycGFydHMgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJmYW50YXN5Q291bnRlcnBhcnRFZGl0XCI+XG4gICAgICB7e2VsZW1lbnQuZmFudGFzeUNvdW50ZXJwYXJ0cy5qb2luKCcsICcpfX1cblxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI2ZhbnRhc3lDb3VudGVycGFydEVkaXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXRGYW50YXN5Q291bnRlcnBhcnRzKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwiZmFudGFzeVZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtZmlsbD5cbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3Rpb24tbGlzdCBbbmdNb2RlbF09XCJlbGVtZW50LmZhbnRhc3lDb3VudGVycGFydHNcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZhbnRhc3lDb3VudGVycGFydHNcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkZhbnRhc3kgRWxlbWVudCBDb3VudGVycGFydHNcIj5cbiAgICAgICAgICAgICAgICBAZm9yIChmYW50YXN5RWxlbWVudCBvZiBGQU5UQVNZX0VMRU1FTlRTOyB0cmFjayBmYW50YXN5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgPG1hdC1saXN0LW9wdGlvblxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZmFudGFzeUVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFBvc2l0aW9uPVwiYmVmb3JlXCI+e3tmYW50YXN5RWxlbWVudH19PC9tYXQtbGlzdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Rpb24tbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1hY3Rpb25zPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmFycm93X2Ryb3BfZG93bjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG48L3RhYmxlPlxuIl19