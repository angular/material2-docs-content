import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer, CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import { NgIf, NgFor } from '@angular/common';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: PopoverEditMatTableExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.0", type: PopoverEditMatTableExample, isStandalone: true, selector: "popover-edit-mat-table-example", ngImport: i0, template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\n        <div mat-edit-content>\n          <mat-form-field>\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{element.position}}\n\n      <!-- Row hover content in a non-edit cell. -->\n      <span *matRowHoverContent>\n        <button mat-icon-button (click)=\"goodJob(element)\">\n          <mat-icon>thumb_up</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"badJob(element)\">\n          <mat-icon>thumb_down</mat-icon>\n        </button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>\n      Name\n      <mat-checkbox\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\n      {{element.name}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\n            <h2 mat-edit-title>Name</h2>\n            <div mat-edit-content>\n              <mat-form-field>\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n              <button mat-button matEditClose>Close</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <ng-container *ngIf=\"nameEditEnabled\">\n        <span *matRowHoverContent>\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n        </span>\n      </ng-container>\n    </td>\n  </ng-container>\n\n  <!-- Type Column -->\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef> Type </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"typeEdit\">\n      {{element.type}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #typeEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              matEditClose\n              (ngSubmit)=\"onSubmitType(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [multiple]=\"false\"\n                  name=\"type\"\n                  [ngModel]=\"[element.type]\"\n                  (selectionChange)=\"f.ngSubmit.emit()\"\n                  aria-label=\"Element type\">\n                <mat-list-option *ngFor=\"let type of TYPES\"\n                    [value]=\"type\">\n                  {{type}}\n                </mat-list-option>\n              </mat-selection-list>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\n      {{element.weight}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Fantasy Counterparts Column -->\n  <ng-container matColumnDef=\"fantasyCounterpart\">\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\n      {{element.fantasyCounterparts.join(', ')}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #fantasyCounterpartEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\n                  name=\"fantasyCounterparts\"\n                  aria-label=\"Fantasy Element Counterparts\">\n                <mat-list-option *ngFor=\"let fantasyElement of FANTASY_ELEMENTS\"\n                    [value]=\"fantasyElement\"\n                    checkboxPosition=\"before\">\n                  {{fantasyElement}}\n                </mat-list-option>\n              </mat-selection-list>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 16%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i3.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i5.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i5.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i5.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i5.MatEditRevert, selector: "button[matEditRevert]" }, { kind: "directive", type: i5.MatEditClose, selector: "[matEditClose]" }, { kind: "directive", type: i5.MatEditOpen, selector: "[matEditOpen]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i7.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i8.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i9.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i10.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatListModule }, { kind: "component", type: i11.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i11.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatSnackBarModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: PopoverEditMatTableExample, decorators: [{
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
                        NgIf,
                        MatListModule,
                        NgFor,
                        MatSnackBarModule,
                    ], template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\n        <div mat-edit-content>\n          <mat-form-field>\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{element.position}}\n\n      <!-- Row hover content in a non-edit cell. -->\n      <span *matRowHoverContent>\n        <button mat-icon-button (click)=\"goodJob(element)\">\n          <mat-icon>thumb_up</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"badJob(element)\">\n          <mat-icon>thumb_down</mat-icon>\n        </button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>\n      Name\n      <mat-checkbox\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\n      {{element.name}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\n            <h2 mat-edit-title>Name</h2>\n            <div mat-edit-content>\n              <mat-form-field>\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n              <button mat-button matEditClose>Close</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <ng-container *ngIf=\"nameEditEnabled\">\n        <span *matRowHoverContent>\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n        </span>\n      </ng-container>\n    </td>\n  </ng-container>\n\n  <!-- Type Column -->\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef> Type </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"typeEdit\">\n      {{element.type}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #typeEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              matEditClose\n              (ngSubmit)=\"onSubmitType(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [multiple]=\"false\"\n                  name=\"type\"\n                  [ngModel]=\"[element.type]\"\n                  (selectionChange)=\"f.ngSubmit.emit()\"\n                  aria-label=\"Element type\">\n                <mat-list-option *ngFor=\"let type of TYPES\"\n                    [value]=\"type\">\n                  {{type}}\n                </mat-list-option>\n              </mat-selection-list>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\n      {{element.weight}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Fantasy Counterparts Column -->\n  <ng-container matColumnDef=\"fantasyCounterpart\">\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\n      {{element.fantasyCounterparts.join(', ')}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #fantasyCounterpartEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\n                  name=\"fantasyCounterparts\"\n                  aria-label=\"Fantasy Element Counterparts\">\n                <mat-list-option *ngFor=\"let fantasyElement of FANTASY_ELEMENTS\"\n                    [value]=\"fantasyElement\"\n                    checkboxPosition=\"before\">\n                  {{fantasyElement}}\n                </mat-list-option>\n              </mat-selection-list>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 16%;\n}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRyxPQUFPLEVBQVMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzNFLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztB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QUUsU0FBUyxFQUFFO1lBQzVGLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzttSEEvRFUsMEJBQTBCO3VHQUExQiwwQkFBMEIsMEZDbE92QyxxNk1Ba0xBLDBNRGlDSSxjQUFjLGdoQ0FDZCxvQkFBb0Isa0pBQ3BCLFdBQVcsczZDQUNYLG9CQUFvQix3eEJBQ3BCLGtCQUFrQix5T0FDbEIsY0FBYywwV0FDZCxlQUFlLHdVQUNmLGFBQWEsbUxBQ2IsaUJBQWlCLCtXQUNqQixJQUFJLDRGQUNKLGFBQWEsK2RBQ2IsS0FBSyxrSEFDTCxpQkFBaUI7O2dHQUdSLDBCQUEwQjtrQkFyQnRDLFNBQVM7K0JBQ0UsZ0NBQWdDLGNBRzlCLElBQUksV0FDUDt3QkFDUCxjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsV0FBVzt3QkFDWCxvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixJQUFJO3dCQUNKLGFBQWE7d0JBQ2IsS0FBSzt3QkFDTCxpQkFBaUI7cUJBQ2xCOztBQW9FSDs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBMkI7SUFBbEU7O1FBQ0Usb0RBQW9EO1FBQ3BELFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBb0IsWUFBWSxDQUFDLENBQUM7SUFROUQsQ0FBQztJQU5DLGlHQUFpRztJQUNqRyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVLEtBQUksQ0FBQztDQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Rm9ybVZhbHVlQ29udGFpbmVyLCBDZGtQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtOZ0Zvcm0sIEZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFNuYWNrQmFyLCBNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge05nSWYsIE5nRm9yfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCB0eXBlIEVsZW1lbnRUeXBlID0gJ01ldGFsJyB8ICdTZW1pbWV0YWwnIHwgJ05vbm1ldGFsJztcblxuZXhwb3J0IHR5cGUgRmFudGFzeUVsZW1lbnQgPSAnRWFydGgnIHwgJ1dhdGVyJyB8ICdXaW5kJyB8ICdGaXJlJyB8ICdMaWdodCcgfCAnRGFyayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBFbGVtZW50VHlwZTtcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBmYW50YXN5Q291bnRlcnBhcnRzOiBGYW50YXN5RWxlbWVudFtdO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7XG4gICAgcG9zaXRpb246IDEsXG4gICAgbmFtZTogJ0h5ZHJvZ2VuJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMS4wMDc5LFxuICAgIHN5bWJvbDogJ0gnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRmlyZScsICdXaW5kJywgJ0xpZ2h0J10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMixcbiAgICBuYW1lOiAnSGVsaXVtJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogNC4wMDI2LFxuICAgIHN5bWJvbDogJ0hlJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ1dpbmQnLCAnTGlnaHQnXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAzLFxuICAgIG5hbWU6ICdMaXRoaXVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogNi45NDEsXG4gICAgc3ltYm9sOiAnTGknLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDQsXG4gICAgbmFtZTogJ0JlcnlsbGl1bScsXG4gICAgdHlwZTogJ01ldGFsJyxcbiAgICB3ZWlnaHQ6IDkuMDEyMixcbiAgICBzeW1ib2w6ICdCZScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNSxcbiAgICBuYW1lOiAnQm9yb24nLFxuICAgIHR5cGU6ICdTZW1pbWV0YWwnLFxuICAgIHdlaWdodDogMTAuODExLFxuICAgIHN5bWJvbDogJ0InLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDYsXG4gICAgbmFtZTogJ0NhcmJvbicsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDEyLjAxMDcsXG4gICAgc3ltYm9sOiAnQycsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydFYXJ0aCcsICdEYXJrJ10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNyxcbiAgICBuYW1lOiAnTml0cm9nZW4nLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAxNC4wMDY3LFxuICAgIHN5bWJvbDogJ04nLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnV2luZCddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDgsXG4gICAgbmFtZTogJ094eWdlbicsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDE1Ljk5OTQsXG4gICAgc3ltYm9sOiAnTycsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydGaXJlJywgJ1dhdGVyJywgJ1dpbmQnXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA5LFxuICAgIG5hbWU6ICdGbHVvcmluZScsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDE4Ljk5ODQsXG4gICAgc3ltYm9sOiAnRicsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTAsXG4gICAgbmFtZTogJ05lb24nLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAyMC4xNzk3LFxuICAgIHN5bWJvbDogJ05lJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0xpZ2h0J10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTEsXG4gICAgbmFtZTogJ1NvZGl1bScsXG4gICAgdHlwZTogJ01ldGFsJyxcbiAgICB3ZWlnaHQ6IDIyLjk4OTcsXG4gICAgc3ltYm9sOiAnTmEnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnRWFydGgnLCAnV2F0ZXInXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxMixcbiAgICBuYW1lOiAnTWFnbmVzaXVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogMjQuMzA1LFxuICAgIHN5bWJvbDogJ01nJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxMyxcbiAgICBuYW1lOiAnQWx1bWludW0nLFxuICAgIHR5cGU6ICdNZXRhbCcsXG4gICAgd2VpZ2h0OiAyNi45ODE1LFxuICAgIHN5bWJvbDogJ0FsJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxNCxcbiAgICBuYW1lOiAnU2lsaWNvbicsXG4gICAgdHlwZTogJ1NlbWltZXRhbCcsXG4gICAgd2VpZ2h0OiAyOC4wODU1LFxuICAgIHN5bWJvbDogJ1NpJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxNSxcbiAgICBuYW1lOiAnUGhvc3Bob3J1cycsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDMwLjk3MzgsXG4gICAgc3ltYm9sOiAnUCcsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTYsXG4gICAgbmFtZTogJ1N1bGZ1cicsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDMyLjA2NSxcbiAgICBzeW1ib2w6ICdTJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxNyxcbiAgICBuYW1lOiAnQ2hsb3JpbmUnLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAzNS40NTMsXG4gICAgc3ltYm9sOiAnQ2wnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDE4LFxuICAgIG5hbWU6ICdBcmdvbicsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDM5Ljk0OCxcbiAgICBzeW1ib2w6ICdBcicsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTksXG4gICAgbmFtZTogJ1BvdGFzc2l1bScsXG4gICAgdHlwZTogJ01ldGFsJyxcbiAgICB3ZWlnaHQ6IDM5LjA5ODMsXG4gICAgc3ltYm9sOiAnSycsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMjAsXG4gICAgbmFtZTogJ0NhbGNpdW0nLFxuICAgIHR5cGU6ICdNZXRhbCcsXG4gICAgd2VpZ2h0OiA0MC4wNzgsXG4gICAgc3ltYm9sOiAnQ2EnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuXTtcblxuY29uc3QgVFlQRVM6IHJlYWRvbmx5IEVsZW1lbnRUeXBlW10gPSBbJ01ldGFsJywgJ1NlbWltZXRhbCcsICdOb25tZXRhbCddO1xuY29uc3QgRkFOVEFTWV9FTEVNRU5UUzogcmVhZG9ubHkgRmFudGFzeUVsZW1lbnRbXSA9IFtcbiAgJ0VhcnRoJyxcbiAgJ1dhdGVyJyxcbiAgJ1dpbmQnLFxuICAnRmlyZScsXG4gICdMaWdodCcsXG4gICdEYXJrJyxcbl07XG5cbi8qKlxuICogQHRpdGxlIE1hdGVyaWFsIFBvcG92ZXIgRWRpdCBvbiBhIE1hdGVyaWFsIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBDZGtQb3BvdmVyRWRpdE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRQb3BvdmVyRWRpdE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTmdJZixcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE5nRm9yLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRWRpdE1hdFRhYmxlRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW1xuICAgICdwb3NpdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICd0eXBlJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnc3ltYm9sJyxcbiAgICAnZmFudGFzeUNvdW50ZXJwYXJ0JyxcbiAgXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBFeGFtcGxlRGF0YVNvdXJjZSgpO1xuXG4gIG5hbWVFZGl0RW5hYmxlZCA9IHRydWU7XG5cbiAgcmVhZG9ubHkgVFlQRVMgPSBUWVBFUztcbiAgcmVhZG9ubHkgRkFOVEFTWV9FTEVNRU5UUyA9IEZBTlRBU1lfRUxFTUVOVFM7XG5cbiAgcmVhZG9ubHkgbmFtZVZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG4gIHJlYWRvbmx5IHdlaWdodFZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG4gIHJlYWRvbmx5IHR5cGVWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSBmYW50YXN5VmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb25TdWJtaXROYW1lKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5uYW1lID0gZi52YWx1ZS5uYW1lO1xuICB9XG5cbiAgb25TdWJtaXRXZWlnaHQoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LndlaWdodCA9IGYudmFsdWUud2VpZ2h0O1xuICB9XG5cbiAgb25TdWJtaXRUeXBlKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC50eXBlID0gZi52YWx1ZS50eXBlWzBdO1xuICB9XG5cbiAgb25TdWJtaXRGYW50YXN5Q291bnRlcnBhcnRzKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzID0gZi52YWx1ZS5mYW50YXN5Q291bnRlcnBhcnRzO1xuICB9XG5cbiAgZ29vZEpvYihlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKGBXYXkgdG8gZ28sICR7ZWxlbWVudC5uYW1lfSFgLCB1bmRlZmluZWQsIHtkdXJhdGlvbjogMjAwMH0pO1xuICB9XG5cbiAgYmFkSm9iKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4oYFlvdSBoYXZlIGZhaWxlZCBtZSBmb3IgdGhlIGxhc3QgdGltZSwgIyR7ZWxlbWVudC5wb3NpdGlvbn0uYCwgdW5kZWZpbmVkLCB7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgc291cmNlIHRvIHByb3ZpZGUgd2hhdCBkYXRhIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdGFibGUuIE5vdGUgdGhhdCB0aGUgZGF0YSBzb3VyY2VcbiAqIGNhbiByZXRyaWV2ZSBpdHMgZGF0YSBpbiBhbnkgd2F5LiBJbiB0aGlzIGNhc2UsIHRoZSBkYXRhIHNvdXJjZSBpcyBwcm92aWRlZCBhIHJlZmVyZW5jZVxuICogdG8gYSBjb21tb24gZGF0YSBiYXNlLCBFeGFtcGxlRGF0YWJhc2UuIEl0IGlzIG5vdCB0aGUgZGF0YSBzb3VyY2UncyByZXNwb25zaWJpbGl0eSB0byBtYW5hZ2VcbiAqIHRoZSB1bmRlcmx5aW5nIGRhdGEuIEluc3RlYWQsIGl0IG9ubHkgbmVlZHMgdG8gdGFrZSB0aGUgZGF0YSBhbmQgc2VuZCB0aGUgdGFibGUgZXhhY3RseSB3aGF0XG4gKiBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XG4gIC8qKiBTdHJlYW0gb2YgZGF0YSB0aGF0IGlzIHByb3ZpZGVkIHRvIHRoZSB0YWJsZS4gKi9cbiAgZGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGVyaW9kaWNFbGVtZW50W10+KEVMRU1FTlRfREFUQSk7XG5cbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8UGVyaW9kaWNFbGVtZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iLCI8dGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCIgbWF0LXRhYmxlIGVkaXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cbiAgPCEtLVxuICAgIFRoaXMgZWRpdCBsZW5zIGlzIHNwZWNpZmllZCBvdXRzaWRlIG9mIHRoZSBjZWxsIGFuZCBtdXN0IGV4cGxpY2l0bHkgZGVjbGFyZVxuICAgIGl0cyBjb250ZXh0LiBJdCBjb3VsZCBiZSByZXVzZWQgaW4gbXVsdGlwbGUgY2VsbHMuXG4gIC0tPlxuICA8bmctdGVtcGxhdGUgI3dlaWdodEVkaXQgbGV0LWVsZW1lbnQ+XG4gICAgPGRpdj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFdlaWdodChlbGVtZW50LCBmKVwiXG4gICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwid2VpZ2h0VmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJlbGVtZW50LndlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XG4gICAgICB7e2VsZW1lbnQucG9zaXRpb259fVxuXG4gICAgICA8IS0tIFJvdyBob3ZlciBjb250ZW50IGluIGEgbm9uLWVkaXQgY2VsbC4gLS0+XG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZ29vZEpvYihlbGVtZW50KVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj50aHVtYl91cDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiYmFkSm9iKGVsZW1lbnQpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnRodW1iX2Rvd248L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgTmFtZVxuICAgICAgPG1hdC1jaGVja2JveFxuICAgICAgICAgIFsobmdNb2RlbCldPVwibmFtZUVkaXRFbmFibGVkXCI+RWRpdCBlbmFibGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdERpc2FibGVkXT1cIiFuYW1lRWRpdEVuYWJsZWRcIj5cbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cblxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0TmFtZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cIm5hbWVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8aDIgbWF0LWVkaXQtdGl0bGU+TmFtZTwvaDI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwiZWxlbWVudC5uYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1hY3Rpb25zPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmFtZUVkaXRFbmFibGVkXCI+XG4gICAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFR5cGUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInR5cGVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBUeXBlIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwidHlwZUVkaXRcIj5cbiAgICAgIHt7ZWxlbWVudC50eXBlfX1cblxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI3R5cGVFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgbWF0RWRpdENsb3NlXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFR5cGUoZWxlbWVudCwgZilcIlxuICAgICAgICAgICAgICBbKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlKV09XCJ0eXBlVmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1maWxsPlxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdGlvbi1saXN0IFttdWx0aXBsZV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJbZWxlbWVudC50eXBlXVwiXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cImYubmdTdWJtaXQuZW1pdCgpXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbGVtZW50IHR5cGVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxpc3Qtb3B0aW9uICpuZ0Zvcj1cImxldCB0eXBlIG9mIFRZUEVTXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInR5cGVcIj5cbiAgICAgICAgICAgICAgICAgIHt7dHlwZX19XG4gICAgICAgICAgICAgICAgPC9tYXQtbGlzdC1vcHRpb24+XG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdGlvbi1saXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5hcnJvd19kcm9wX2Rvd248L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBXZWlnaHQgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJ3ZWlnaHRFZGl0XCIgW21hdFBvcG92ZXJFZGl0Q29udGV4dF09XCJlbGVtZW50XCI+XG4gICAgICB7e2VsZW1lbnQud2VpZ2h0fX1cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cblxuICA8IS0tIEZhbnRhc3kgQ291bnRlcnBhcnRzIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJmYW50YXN5Q291bnRlcnBhcnRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBGYW50YXN5IENvdW50ZXJwYXJ0cyA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cImZhbnRhc3lDb3VudGVycGFydEVkaXRcIj5cbiAgICAgIHt7ZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzLmpvaW4oJywgJyl9fVxuXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZmFudGFzeUNvdW50ZXJwYXJ0RWRpdD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgIG1hdEVkaXRMZW5zXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdEZhbnRhc3lDb3VudGVycGFydHMoZWxlbWVudCwgZilcIlxuICAgICAgICAgICAgICBbKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlKV09XCJmYW50YXN5VmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1maWxsPlxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdGlvbi1saXN0IFtuZ01vZGVsXT1cImVsZW1lbnQuZmFudGFzeUNvdW50ZXJwYXJ0c1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZmFudGFzeUNvdW50ZXJwYXJ0c1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRmFudGFzeSBFbGVtZW50IENvdW50ZXJwYXJ0c1wiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1vcHRpb24gKm5nRm9yPVwibGV0IGZhbnRhc3lFbGVtZW50IG9mIEZBTlRBU1lfRUxFTUVOVFNcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZmFudGFzeUVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFBvc2l0aW9uPVwiYmVmb3JlXCI+XG4gICAgICAgICAgICAgICAgICB7e2ZhbnRhc3lFbGVtZW50fX1cbiAgICAgICAgICAgICAgICA8L21hdC1saXN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5hcnJvd19kcm9wX2Rvd248L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuPC90YWJsZT5cbiJdfQ==