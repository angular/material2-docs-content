import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/checkbox";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/list";
import * as i9 from "@angular/material-experimental/popover-edit";
import * as i10 from "@angular/cdk-experimental/popover-edit";
import * as i11 from "@angular/material/table";
import * as i12 from "@angular/forms";
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
}
PopoverEditMatTableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: PopoverEditMatTableExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
PopoverEditMatTableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0", type: PopoverEditMatTableExample, selector: "popover-edit-mat-table-example", ngImport: i0, template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\n        <div mat-edit-content>\n          <mat-form-field appearance=\"fill\">\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{element.position}}\n\n      <!-- Row hover content in a non-edit cell. -->\n      <span *matRowHoverContent>\n        <button mat-icon-button (click)=\"goodJob(element)\">\n          <mat-icon>thumb_up</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"badJob(element)\">\n          <mat-icon>thumb_down</mat-icon>\n        </button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>\n      Name\n      <mat-checkbox\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\n      {{element.name}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\n            <h2 mat-edit-title>Name</h2>\n            <div mat-edit-content>\n              <mat-form-field appearance=\"fill\">\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n              <button mat-button matEditClose>Close</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <ng-container *ngIf=\"nameEditEnabled\">\n        <span *matRowHoverContent>\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n        </span>\n      </ng-container>\n    </td>\n  </ng-container>\n\n  <!-- Type Column -->\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef> Type </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"typeEdit\">\n      {{element.type}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #typeEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              matEditClose\n              (ngSubmit)=\"onSubmitType(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [multiple]=\"false\"\n                  name=\"type\"\n                  [ngModel]=\"[element.type]\"\n                  (selectionChange)=\"f.ngSubmit.emit()\"\n                  aria-label=\"Element type\">\n                <mat-list-option *ngFor=\"let type of TYPES\"\n                    [value]=\"type\">\n                  {{type}}\n                </mat-list-option>\n              </mat-selection-list>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\n      {{element.weight}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Fantasy Counterparts Column -->\n  <ng-container matColumnDef=\"fantasyCounterpart\">\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\n      {{element.fantasyCounterparts.join(', ')}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #fantasyCounterpartEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\n                  name=\"fantasyCounterparts\"\n                  aria-label=\"Fantasy Element Counterparts\">\n                <mat-list-option *ngFor=\"let fantasyElement of FANTASY_ELEMENTS\"\n                    [value]=\"fantasyElement\"\n                    checkboxPosition=\"before\">\n                  {{fantasyElement}}\n                </mat-list-option>\n              </mat-selection-list>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 16%;\n}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i7.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i8.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i8.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }, { kind: "directive", type: i9.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i9.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i9.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i9.MatEditRevert, selector: "button[matEditRevert]" }, { kind: "directive", type: i9.MatEditClose, selector: "[matEditClose]" }, { kind: "directive", type: i9.MatEditOpen, selector: "[matEditOpen]" }, { kind: "directive", type: i10.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "component", type: i11.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i11.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i11.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i11.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i11.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i11.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i11.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i11.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i11.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i11.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i12.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i12.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i12.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i12.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i12.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i12.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i12.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i12.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: PopoverEditMatTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'popover-edit-mat-table-example', template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\n        <div mat-edit-content>\n          <mat-form-field appearance=\"fill\">\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{element.position}}\n\n      <!-- Row hover content in a non-edit cell. -->\n      <span *matRowHoverContent>\n        <button mat-icon-button (click)=\"goodJob(element)\">\n          <mat-icon>thumb_up</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"badJob(element)\">\n          <mat-icon>thumb_down</mat-icon>\n        </button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>\n      Name\n      <mat-checkbox\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\n      {{element.name}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\n            <h2 mat-edit-title>Name</h2>\n            <div mat-edit-content>\n              <mat-form-field appearance=\"fill\">\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n              <button mat-button matEditClose>Close</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <ng-container *ngIf=\"nameEditEnabled\">\n        <span *matRowHoverContent>\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n        </span>\n      </ng-container>\n    </td>\n  </ng-container>\n\n  <!-- Type Column -->\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef> Type </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"typeEdit\">\n      {{element.type}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #typeEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              matEditClose\n              (ngSubmit)=\"onSubmitType(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [multiple]=\"false\"\n                  name=\"type\"\n                  [ngModel]=\"[element.type]\"\n                  (selectionChange)=\"f.ngSubmit.emit()\"\n                  aria-label=\"Element type\">\n                <mat-list-option *ngFor=\"let type of TYPES\"\n                    [value]=\"type\">\n                  {{type}}\n                </mat-list-option>\n              </mat-selection-list>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\n      {{element.weight}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Fantasy Counterparts Column -->\n  <ng-container matColumnDef=\"fantasyCounterpart\">\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\n      {{element.fantasyCounterparts.join(', ')}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #fantasyCounterpartEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\n                  name=\"fantasyCounterparts\"\n                  aria-label=\"Fantasy Element Counterparts\">\n                <mat-list-option *ngFor=\"let fantasyElement of FANTASY_ELEMENTS\"\n                    [value]=\"fantasyElement\"\n                    checkboxPosition=\"before\">\n                  {{fantasyElement}}\n                </mat-list-option>\n              </mat-selection-list>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 16%;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFlakQsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDO1FBQ0UsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsVUFBVTtRQUNoQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxHQUFHO1FBQ1gsbUJBQW1CLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztLQUMvQztJQUNEO1FBQ0UsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFB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LEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDJCQUEyQixDQUFDLE9BQXdCLEVBQUUsQ0FBUztRQUM3RCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO0lBQzVELENBQUM7SUFFRCxPQUFPLENBQUMsT0FBd0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUF3QjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQywwQ0FBMEMsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUM1RixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7O3VIQS9EVSwwQkFBMEI7MkdBQTFCLDBCQUEwQixzRUN6TXZDLDY4TUFrTEE7MkZEdUJhLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSxnQ0FBZ0M7O0FBc0U1Qzs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBMkI7SUFBbEU7O1FBQ0Usb0RBQW9EO1FBQ3BELFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBb0IsWUFBWSxDQUFDLENBQUM7SUFROUQsQ0FBQztJQU5DLGlHQUFpRztJQUNqRyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVLEtBQUksQ0FBQztDQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Rm9ybVZhbHVlQ29udGFpbmVyfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgRWxlbWVudFR5cGUgPSAnTWV0YWwnIHwgJ1NlbWltZXRhbCcgfCAnTm9ubWV0YWwnO1xuXG5leHBvcnQgdHlwZSBGYW50YXN5RWxlbWVudCA9ICdFYXJ0aCcgfCAnV2F0ZXInIHwgJ1dpbmQnIHwgJ0ZpcmUnIHwgJ0xpZ2h0JyB8ICdEYXJrJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IEVsZW1lbnRUeXBlO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIGZhbnRhc3lDb3VudGVycGFydHM6IEZhbnRhc3lFbGVtZW50W107XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtcbiAgICBwb3NpdGlvbjogMSxcbiAgICBuYW1lOiAnSHlkcm9nZW4nLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAxLjAwNzksXG4gICAgc3ltYm9sOiAnSCcsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydGaXJlJywgJ1dpbmQnLCAnTGlnaHQnXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAyLFxuICAgIG5hbWU6ICdIZWxpdW0nLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiA0LjAwMjYsXG4gICAgc3ltYm9sOiAnSGUnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnV2luZCcsICdMaWdodCddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDMsXG4gICAgbmFtZTogJ0xpdGhpdW0nLFxuICAgIHR5cGU6ICdNZXRhbCcsXG4gICAgd2VpZ2h0OiA2Ljk0MSxcbiAgICBzeW1ib2w6ICdMaScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNCxcbiAgICBuYW1lOiAnQmVyeWxsaXVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogOS4wMTIyLFxuICAgIHN5bWJvbDogJ0JlJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA1LFxuICAgIG5hbWU6ICdCb3JvbicsXG4gICAgdHlwZTogJ1NlbWltZXRhbCcsXG4gICAgd2VpZ2h0OiAxMC44MTEsXG4gICAgc3ltYm9sOiAnQicsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNixcbiAgICBuYW1lOiAnQ2FyYm9uJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMTIuMDEwNyxcbiAgICBzeW1ib2w6ICdDJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0VhcnRoJywgJ0RhcmsnXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA3LFxuICAgIG5hbWU6ICdOaXRyb2dlbicsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDE0LjAwNjcsXG4gICAgc3ltYm9sOiAnTicsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydXaW5kJ10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogOCxcbiAgICBuYW1lOiAnT3h5Z2VuJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMTUuOTk5NCxcbiAgICBzeW1ib2w6ICdPJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0ZpcmUnLCAnV2F0ZXInLCAnV2luZCddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDksXG4gICAgbmFtZTogJ0ZsdW9yaW5lJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMTguOTk4NCxcbiAgICBzeW1ib2w6ICdGJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxMCxcbiAgICBuYW1lOiAnTmVvbicsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDIwLjE3OTcsXG4gICAgc3ltYm9sOiAnTmUnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnTGlnaHQnXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxMSxcbiAgICBuYW1lOiAnU29kaXVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogMjIuOTg5NyxcbiAgICBzeW1ib2w6ICdOYScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydFYXJ0aCcsICdXYXRlciddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDEyLFxuICAgIG5hbWU6ICdNYWduZXNpdW0nLFxuICAgIHR5cGU6ICdNZXRhbCcsXG4gICAgd2VpZ2h0OiAyNC4zMDUsXG4gICAgc3ltYm9sOiAnTWcnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDEzLFxuICAgIG5hbWU6ICdBbHVtaW51bScsXG4gICAgdHlwZTogJ01ldGFsJyxcbiAgICB3ZWlnaHQ6IDI2Ljk4MTUsXG4gICAgc3ltYm9sOiAnQWwnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDE0LFxuICAgIG5hbWU6ICdTaWxpY29uJyxcbiAgICB0eXBlOiAnU2VtaW1ldGFsJyxcbiAgICB3ZWlnaHQ6IDI4LjA4NTUsXG4gICAgc3ltYm9sOiAnU2knLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDE1LFxuICAgIG5hbWU6ICdQaG9zcGhvcnVzJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMzAuOTczOCxcbiAgICBzeW1ib2w6ICdQJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxNixcbiAgICBuYW1lOiAnU3VsZnVyJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMzIuMDY1LFxuICAgIHN5bWJvbDogJ1MnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDE3LFxuICAgIG5hbWU6ICdDaGxvcmluZScsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDM1LjQ1MyxcbiAgICBzeW1ib2w6ICdDbCcsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTgsXG4gICAgbmFtZTogJ0FyZ29uJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMzkuOTQ4LFxuICAgIHN5bWJvbDogJ0FyJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxOSxcbiAgICBuYW1lOiAnUG90YXNzaXVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogMzkuMDk4MyxcbiAgICBzeW1ib2w6ICdLJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAyMCxcbiAgICBuYW1lOiAnQ2FsY2l1bScsXG4gICAgdHlwZTogJ01ldGFsJyxcbiAgICB3ZWlnaHQ6IDQwLjA3OCxcbiAgICBzeW1ib2w6ICdDYScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG5dO1xuXG5jb25zdCBUWVBFUzogcmVhZG9ubHkgRWxlbWVudFR5cGVbXSA9IFsnTWV0YWwnLCAnU2VtaW1ldGFsJywgJ05vbm1ldGFsJ107XG5jb25zdCBGQU5UQVNZX0VMRU1FTlRTOiByZWFkb25seSBGYW50YXN5RWxlbWVudFtdID0gW1xuICAnRWFydGgnLFxuICAnV2F0ZXInLFxuICAnV2luZCcsXG4gICdGaXJlJyxcbiAgJ0xpZ2h0JyxcbiAgJ0RhcmsnLFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgTWF0ZXJpYWwgUG9wb3ZlciBFZGl0IG9uIGEgTWF0ZXJpYWwgZGF0YS10YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsncG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckVkaXRNYXRUYWJsZUV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtcbiAgICAncG9zaXRpb24nLFxuICAgICduYW1lJyxcbiAgICAndHlwZScsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3N5bWJvbCcsXG4gICAgJ2ZhbnRhc3lDb3VudGVycGFydCcsXG4gIF07XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcblxuICBuYW1lRWRpdEVuYWJsZWQgPSB0cnVlO1xuXG4gIHJlYWRvbmx5IFRZUEVTID0gVFlQRVM7XG4gIHJlYWRvbmx5IEZBTlRBU1lfRUxFTUVOVFMgPSBGQU5UQVNZX0VMRU1FTlRTO1xuXG4gIHJlYWRvbmx5IG5hbWVWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSB3ZWlnaHRWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSB0eXBlVmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgZmFudGFzeVZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9uU3VibWl0TmFtZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQubmFtZSA9IGYudmFsdWUubmFtZTtcbiAgfVxuXG4gIG9uU3VibWl0V2VpZ2h0KGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC53ZWlnaHQgPSBmLnZhbHVlLndlaWdodDtcbiAgfVxuXG4gIG9uU3VibWl0VHlwZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQudHlwZSA9IGYudmFsdWUudHlwZVswXTtcbiAgfVxuXG4gIG9uU3VibWl0RmFudGFzeUNvdW50ZXJwYXJ0cyhlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuZmFudGFzeUNvdW50ZXJwYXJ0cyA9IGYudmFsdWUuZmFudGFzeUNvdW50ZXJwYXJ0cztcbiAgfVxuXG4gIGdvb2RKb2IoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbihgV2F5IHRvIGdvLCAke2VsZW1lbnQubmFtZX0hYCwgdW5kZWZpbmVkLCB7ZHVyYXRpb246IDIwMDB9KTtcbiAgfVxuXG4gIGJhZEpvYihlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKGBZb3UgaGF2ZSBmYWlsZWQgbWUgZm9yIHRoZSBsYXN0IHRpbWUsICMke2VsZW1lbnQucG9zaXRpb259LmAsIHVuZGVmaW5lZCwge1xuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXG4gKiBjYW4gcmV0cmlldmUgaXRzIGRhdGEgaW4gYW55IHdheS4gSW4gdGhpcyBjYXNlLCB0aGUgZGF0YSBzb3VyY2UgaXMgcHJvdmlkZWQgYSByZWZlcmVuY2VcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxuICogc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4ge1xuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xuXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxufVxuIiwiPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiIG1hdC10YWJsZSBlZGl0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICN3ZWlnaHRFZGl0IGxldC1lbGVtZW50PlxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXRXZWlnaHQoZWxlbWVudCwgZilcIlxuICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cIndlaWdodFZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cbiAgICAgICAgPGRpdiBtYXQtZWRpdC1jb250ZW50PlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJlbGVtZW50LndlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XG4gICAgICB7e2VsZW1lbnQucG9zaXRpb259fVxuXG4gICAgICA8IS0tIFJvdyBob3ZlciBjb250ZW50IGluIGEgbm9uLWVkaXQgY2VsbC4gLS0+XG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZ29vZEpvYihlbGVtZW50KVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj50aHVtYl91cDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiYmFkSm9iKGVsZW1lbnQpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnRodW1iX2Rvd248L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgTmFtZVxuICAgICAgPG1hdC1jaGVja2JveFxuICAgICAgICAgIFsobmdNb2RlbCldPVwibmFtZUVkaXRFbmFibGVkXCI+RWRpdCBlbmFibGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdERpc2FibGVkXT1cIiFuYW1lRWRpdEVuYWJsZWRcIj5cbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cblxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0TmFtZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cIm5hbWVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8aDIgbWF0LWVkaXQtdGl0bGU+TmFtZTwvaDI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJlbGVtZW50Lm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWFjdGlvbnM+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRDbG9zZT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYW1lRWRpdEVuYWJsZWRcIj5cbiAgICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gVHlwZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwidHlwZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFR5cGUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJ0eXBlRWRpdFwiPlxuICAgICAge3tlbGVtZW50LnR5cGV9fVxuXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjdHlwZUVkaXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgICAgICBtYXRFZGl0Q2xvc2VcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0VHlwZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cInR5cGVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWZpbGw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0aW9uLWxpc3QgW211bHRpcGxlXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cIltlbGVtZW50LnR5cGVdXCJcbiAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwiZi5uZ1N1Ym1pdC5lbWl0KClcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVsZW1lbnQgdHlwZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1vcHRpb24gKm5nRm9yPVwibGV0IHR5cGUgb2YgVFlQRVNcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidHlwZVwiPlxuICAgICAgICAgICAgICAgICAge3t0eXBlfX1cbiAgICAgICAgICAgICAgICA8L21hdC1saXN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmFycm93X2Ryb3BfZG93bjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIndlaWdodEVkaXRcIiBbbWF0UG9wb3ZlckVkaXRDb250ZXh0XT1cImVsZW1lbnRcIj5cbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxuXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gIDwhLS0gRmFudGFzeSBDb3VudGVycGFydHMgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImZhbnRhc3lDb3VudGVycGFydFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEZhbnRhc3kgQ291bnRlcnBhcnRzIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwiZmFudGFzeUNvdW50ZXJwYXJ0RWRpdFwiPlxuICAgICAge3tlbGVtZW50LmZhbnRhc3lDb3VudGVycGFydHMuam9pbignLCAnKX19XG5cbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICNmYW50YXN5Q291bnRlcnBhcnRFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0RmFudGFzeUNvdW50ZXJwYXJ0cyhlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cImZhbnRhc3lWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWZpbGw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0aW9uLWxpc3QgW25nTW9kZWxdPVwiZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYW50YXN5Q291bnRlcnBhcnRzXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGYW50YXN5IEVsZW1lbnQgQ291bnRlcnBhcnRzXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1saXN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZmFudGFzeUVsZW1lbnQgb2YgRkFOVEFTWV9FTEVNRU5UU1wiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJmYW50YXN5RWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94UG9zaXRpb249XCJiZWZvcmVcIj5cbiAgICAgICAgICAgICAgICAgIHt7ZmFudGFzeUVsZW1lbnR9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWxpc3Qtb3B0aW9uPlxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Rpb24tbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1hY3Rpb25zPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmFycm93X2Ryb3BfZG93bjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG48L3RhYmxlPlxuIl19