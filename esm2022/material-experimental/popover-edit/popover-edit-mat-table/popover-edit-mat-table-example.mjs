import { Component, inject } from '@angular/core';
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
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/cdk-experimental/popover-edit";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material-experimental/popover-edit";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/checkbox";
import * as i10 from "@angular/material/list";
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
    constructor() {
        this._snackBar = inject(MatSnackBar);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: PopoverEditMatTableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.0-next.2", type: PopoverEditMatTableExample, isStandalone: true, selector: "popover-edit-mat-table-example", ngImport: i0, template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\n        <div mat-edit-content>\n          <mat-form-field>\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{element.position}}\n\n      <!-- Row hover content in a non-edit cell. -->\n      <span *matRowHoverContent>\n        <button mat-icon-button (click)=\"goodJob(element)\">\n          <mat-icon>thumb_up</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"badJob(element)\">\n          <mat-icon>thumb_down</mat-icon>\n        </button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>\n      Name\n      <mat-checkbox\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\n      {{element.name}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\n            <h2 mat-edit-title>Name</h2>\n            <div mat-edit-content>\n              <mat-form-field>\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n              <button mat-button matEditClose>Close</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      @if (nameEditEnabled) {\n        <span *matRowHoverContent>\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n        </span>\n      }\n    </td>\n  </ng-container>\n\n  <!-- Type Column -->\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef> Type </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"typeEdit\">\n      {{element.type}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #typeEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              matEditClose\n              (ngSubmit)=\"onSubmitType(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [multiple]=\"false\"\n                  name=\"type\"\n                  [ngModel]=\"[element.type]\"\n                  (selectionChange)=\"f.ngSubmit.emit()\"\n                  aria-label=\"Element type\">\n                @for (type of TYPES; track type) {\n                  <mat-list-option [value]=\"type\">{{type}}</mat-list-option>\n                }\n              </mat-selection-list>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\n      {{element.weight}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Fantasy Counterparts Column -->\n  <ng-container matColumnDef=\"fantasyCounterpart\">\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\n      {{element.fantasyCounterparts.join(', ')}}\n\n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #fantasyCounterpartEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\n            <div mat-edit-fill>\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\n                  name=\"fantasyCounterparts\"\n                  aria-label=\"Fantasy Element Counterparts\">\n                @for (fantasyElement of FANTASY_ELEMENTS; track fantasyElement) {\n                  <mat-list-option\n                    [value]=\"fantasyElement\"\n                    checkboxPosition=\"before\">{{fantasyElement}}</mat-list-option>\n                }\n              </mat-selection-list>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 16%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i2.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i4.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled", "matPopoverEditAriaLabel"] }, { kind: "directive", type: i4.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i4.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i4.MatEditRevert, selector: "button[matEditRevert]" }, { kind: "directive", type: i4.MatEditClose, selector: "[matEditClose]" }, { kind: "directive", type: i4.MatEditOpen, selector: "[matEditOpen]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i9.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatListModule }, { kind: "component", type: i10.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i10.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: PopoverEditMatTableExample, decorators: [{
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
        }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG9CQUFvQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDaEcsT0FBTyxFQUFTLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVB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RixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7cUhBL0RVLDBCQUEwQjt5R0FBMUIsMEJBQTBCLDBGQzlOdkMsdTRNQWlMQSwwTURpQ0ksY0FBYyxzZ0NBQ2Qsb0JBQW9CLGtKQUNwQixXQUFXLHM2Q0FDWCxvQkFBb0IsbXpCQUNwQixrQkFBa0IseU9BQ2xCLGNBQWMsaVlBQ2QsZUFBZSx3VUFDZixhQUFhLG1MQUNiLGlCQUFpQixvWUFDakIsYUFBYTs7a0dBR0osMEJBQTBCO2tCQWxCdEMsU0FBUzsrQkFDRSxnQ0FBZ0MsY0FHOUIsSUFBSSxXQUNQO3dCQUNQLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixXQUFXO3dCQUNYLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGFBQWE7cUJBQ2Q7O0FBb0VIOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUEyQjtJQUFsRTs7UUFDRSxvREFBb0Q7UUFDcEQsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFvQixZQUFZLENBQUMsQ0FBQztJQVE5RCxDQUFDO0lBTkMsaUdBQWlHO0lBQ2pHLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0Zvcm1WYWx1ZUNvbnRhaW5lciwgQ2RrUG9wb3ZlckVkaXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0JztcbmltcG9ydCB7TmdGb3JtLCBGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdFBvcG92ZXJFZGl0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0JztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuZXhwb3J0IHR5cGUgRWxlbWVudFR5cGUgPSAnTWV0YWwnIHwgJ1NlbWltZXRhbCcgfCAnTm9ubWV0YWwnO1xuXG5leHBvcnQgdHlwZSBGYW50YXN5RWxlbWVudCA9ICdFYXJ0aCcgfCAnV2F0ZXInIHwgJ1dpbmQnIHwgJ0ZpcmUnIHwgJ0xpZ2h0JyB8ICdEYXJrJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IEVsZW1lbnRUeXBlO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIGZhbnRhc3lDb3VudGVycGFydHM6IEZhbnRhc3lFbGVtZW50W107XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtcbiAgICBwb3NpdGlvbjogMSxcbiAgICBuYW1lOiAnSHlkcm9nZW4nLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiAxLjAwNzksXG4gICAgc3ltYm9sOiAnSCcsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydGaXJlJywgJ1dpbmQnLCAnTGlnaHQnXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAyLFxuICAgIG5hbWU6ICdIZWxpdW0nLFxuICAgIHR5cGU6ICdOb25tZXRhbCcsXG4gICAgd2VpZ2h0OiA0LjAwMjYsXG4gICAgc3ltYm9sOiAnSGUnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnV2luZCcsICdMaWdodCddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDMsXG4gICAgbmFtZTogJ0xpdGhpdW0nLFxuICAgIHR5cGU6ICdNZXRhbCcsXG4gICAgd2VpZ2h0OiA2Ljk0MSxcbiAgICBzeW1ib2w6ICdMaScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNCxcbiAgICBuYW1lOiAnQmVyeWxsaXVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogOS4wMTIyLFxuICAgIHN5bWJvbDogJ0JlJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA1LFxuICAgIG5hbWU6ICdCb3JvbicsXG4gICAgdHlwZTogJ1NlbWltZXRhbCcsXG4gICAgd2VpZ2h0OiAxMC44MTEsXG4gICAgc3ltYm9sOiAnQicsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNixcbiAgICBuYW1lOiAnQ2FyYm9uJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMTIuMDEwNyxcbiAgICBzeW1ib2w6ICdDJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0VhcnRoJywgJ0RhcmsnXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA3LFxuICAgIG5hbWU6ICdOaXRyb2dlbicsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDE0LjAwNjcsXG4gICAgc3ltYm9sOiAnTicsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydXaW5kJ10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogOCxcbiAgICBuYW1lOiAnT3h5Z2VuJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMTUuOTk5NCxcbiAgICBzeW1ib2w6ICdPJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0ZpcmUnLCAnV2F0ZXInLCAnV2luZCddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDksXG4gICAgbmFtZTogJ0ZsdW9yaW5lJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMTguOTk4NCxcbiAgICBzeW1ib2w6ICdGJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxMCxcbiAgICBuYW1lOiAnTmVvbicsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDIwLjE3OTcsXG4gICAgc3ltYm9sOiAnTmUnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnTGlnaHQnXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxMSxcbiAgICBuYW1lOiAnU29kaXVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogMjIuOTg5NyxcbiAgICBzeW1ib2w6ICdOYScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydFYXJ0aCcsICdXYXRlciddLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDEyLFxuICAgIG5hbWU6ICdNYWduZXNpdW0nLFxuICAgIHR5cGU6ICdNZXRhbCcsXG4gICAgd2VpZ2h0OiAyNC4zMDUsXG4gICAgc3ltYm9sOiAnTWcnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDEzLFxuICAgIG5hbWU6ICdBbHVtaW51bScsXG4gICAgdHlwZTogJ01ldGFsJyxcbiAgICB3ZWlnaHQ6IDI2Ljk4MTUsXG4gICAgc3ltYm9sOiAnQWwnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDE0LFxuICAgIG5hbWU6ICdTaWxpY29uJyxcbiAgICB0eXBlOiAnU2VtaW1ldGFsJyxcbiAgICB3ZWlnaHQ6IDI4LjA4NTUsXG4gICAgc3ltYm9sOiAnU2knLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDE1LFxuICAgIG5hbWU6ICdQaG9zcGhvcnVzJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMzAuOTczOCxcbiAgICBzeW1ib2w6ICdQJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxNixcbiAgICBuYW1lOiAnU3VsZnVyJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMzIuMDY1LFxuICAgIHN5bWJvbDogJ1MnLFxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDE3LFxuICAgIG5hbWU6ICdDaGxvcmluZScsXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcbiAgICB3ZWlnaHQ6IDM1LjQ1MyxcbiAgICBzeW1ib2w6ICdDbCcsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTgsXG4gICAgbmFtZTogJ0FyZ29uJyxcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxuICAgIHdlaWdodDogMzkuOTQ4LFxuICAgIHN5bWJvbDogJ0FyJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxOSxcbiAgICBuYW1lOiAnUG90YXNzaXVtJyxcbiAgICB0eXBlOiAnTWV0YWwnLFxuICAgIHdlaWdodDogMzkuMDk4MyxcbiAgICBzeW1ib2w6ICdLJyxcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAyMCxcbiAgICBuYW1lOiAnQ2FsY2l1bScsXG4gICAgdHlwZTogJ01ldGFsJyxcbiAgICB3ZWlnaHQ6IDQwLjA3OCxcbiAgICBzeW1ib2w6ICdDYScsXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXG4gIH0sXG5dO1xuXG5jb25zdCBUWVBFUzogcmVhZG9ubHkgRWxlbWVudFR5cGVbXSA9IFsnTWV0YWwnLCAnU2VtaW1ldGFsJywgJ05vbm1ldGFsJ107XG5jb25zdCBGQU5UQVNZX0VMRU1FTlRTOiByZWFkb25seSBGYW50YXN5RWxlbWVudFtdID0gW1xuICAnRWFydGgnLFxuICAnV2F0ZXInLFxuICAnV2luZCcsXG4gICdGaXJlJyxcbiAgJ0xpZ2h0JyxcbiAgJ0RhcmsnLFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgTWF0ZXJpYWwgUG9wb3ZlciBFZGl0IG9uIGEgTWF0ZXJpYWwgZGF0YS10YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUnLFxuICBzdHlsZVVybDogJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS5jc3MnLFxuICB0ZW1wbGF0ZVVybDogJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIENka1BvcG92ZXJFZGl0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdFBvcG92ZXJFZGl0TW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRWRpdE1hdFRhYmxlRXhhbXBsZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NuYWNrQmFyID0gaW5qZWN0KE1hdFNuYWNrQmFyKTtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtcbiAgICAncG9zaXRpb24nLFxuICAgICduYW1lJyxcbiAgICAndHlwZScsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3N5bWJvbCcsXG4gICAgJ2ZhbnRhc3lDb3VudGVycGFydCcsXG4gIF07XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcblxuICBuYW1lRWRpdEVuYWJsZWQgPSB0cnVlO1xuXG4gIHJlYWRvbmx5IFRZUEVTID0gVFlQRVM7XG4gIHJlYWRvbmx5IEZBTlRBU1lfRUxFTUVOVFMgPSBGQU5UQVNZX0VMRU1FTlRTO1xuXG4gIHJlYWRvbmx5IG5hbWVWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSB3ZWlnaHRWYWx1ZXMgPSBuZXcgRm9ybVZhbHVlQ29udGFpbmVyPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSB0eXBlVmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgZmFudGFzeVZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG5cbiAgb25TdWJtaXROYW1lKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5uYW1lID0gZi52YWx1ZS5uYW1lO1xuICB9XG5cbiAgb25TdWJtaXRXZWlnaHQoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LndlaWdodCA9IGYudmFsdWUud2VpZ2h0O1xuICB9XG5cbiAgb25TdWJtaXRUeXBlKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC50eXBlID0gZi52YWx1ZS50eXBlWzBdO1xuICB9XG5cbiAgb25TdWJtaXRGYW50YXN5Q291bnRlcnBhcnRzKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzID0gZi52YWx1ZS5mYW50YXN5Q291bnRlcnBhcnRzO1xuICB9XG5cbiAgZ29vZEpvYihlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKGBXYXkgdG8gZ28sICR7ZWxlbWVudC5uYW1lfSFgLCB1bmRlZmluZWQsIHtkdXJhdGlvbjogMjAwMH0pO1xuICB9XG5cbiAgYmFkSm9iKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4oYFlvdSBoYXZlIGZhaWxlZCBtZSBmb3IgdGhlIGxhc3QgdGltZSwgIyR7ZWxlbWVudC5wb3NpdGlvbn0uYCwgdW5kZWZpbmVkLCB7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgc291cmNlIHRvIHByb3ZpZGUgd2hhdCBkYXRhIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdGFibGUuIE5vdGUgdGhhdCB0aGUgZGF0YSBzb3VyY2VcbiAqIGNhbiByZXRyaWV2ZSBpdHMgZGF0YSBpbiBhbnkgd2F5LiBJbiB0aGlzIGNhc2UsIHRoZSBkYXRhIHNvdXJjZSBpcyBwcm92aWRlZCBhIHJlZmVyZW5jZVxuICogdG8gYSBjb21tb24gZGF0YSBiYXNlLCBFeGFtcGxlRGF0YWJhc2UuIEl0IGlzIG5vdCB0aGUgZGF0YSBzb3VyY2UncyByZXNwb25zaWJpbGl0eSB0byBtYW5hZ2VcbiAqIHRoZSB1bmRlcmx5aW5nIGRhdGEuIEluc3RlYWQsIGl0IG9ubHkgbmVlZHMgdG8gdGFrZSB0aGUgZGF0YSBhbmQgc2VuZCB0aGUgdGFibGUgZXhhY3RseSB3aGF0XG4gKiBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XG4gIC8qKiBTdHJlYW0gb2YgZGF0YSB0aGF0IGlzIHByb3ZpZGVkIHRvIHRoZSB0YWJsZS4gKi9cbiAgZGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGVyaW9kaWNFbGVtZW50W10+KEVMRU1FTlRfREFUQSk7XG5cbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8UGVyaW9kaWNFbGVtZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iLCI8dGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCIgbWF0LXRhYmxlIGVkaXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cbiAgPCEtLVxuICAgIFRoaXMgZWRpdCBsZW5zIGlzIHNwZWNpZmllZCBvdXRzaWRlIG9mIHRoZSBjZWxsIGFuZCBtdXN0IGV4cGxpY2l0bHkgZGVjbGFyZVxuICAgIGl0cyBjb250ZXh0LiBJdCBjb3VsZCBiZSByZXVzZWQgaW4gbXVsdGlwbGUgY2VsbHMuXG4gIC0tPlxuICA8bmctdGVtcGxhdGUgI3dlaWdodEVkaXQgbGV0LWVsZW1lbnQ+XG4gICAgPGRpdj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFdlaWdodChlbGVtZW50LCBmKVwiXG4gICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwid2VpZ2h0VmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJlbGVtZW50LndlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XG4gICAgICB7e2VsZW1lbnQucG9zaXRpb259fVxuXG4gICAgICA8IS0tIFJvdyBob3ZlciBjb250ZW50IGluIGEgbm9uLWVkaXQgY2VsbC4gLS0+XG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZ29vZEpvYihlbGVtZW50KVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj50aHVtYl91cDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiYmFkSm9iKGVsZW1lbnQpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnRodW1iX2Rvd248L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgTmFtZVxuICAgICAgPG1hdC1jaGVja2JveFxuICAgICAgICAgIFsobmdNb2RlbCldPVwibmFtZUVkaXRFbmFibGVkXCI+RWRpdCBlbmFibGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdERpc2FibGVkXT1cIiFuYW1lRWRpdEVuYWJsZWRcIj5cbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cblxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0TmFtZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cIm5hbWVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8aDIgbWF0LWVkaXQtdGl0bGU+TmFtZTwvaDI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwiZWxlbWVudC5uYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1hY3Rpb25zPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICBAaWYgKG5hbWVFZGl0RW5hYmxlZCkge1xuICAgICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgfVxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gVHlwZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwidHlwZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFR5cGUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJ0eXBlRWRpdFwiPlxuICAgICAge3tlbGVtZW50LnR5cGV9fVxuXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjdHlwZUVkaXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgICAgICBtYXRFZGl0Q2xvc2VcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0VHlwZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cInR5cGVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWZpbGw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0aW9uLWxpc3QgW211bHRpcGxlXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cIltlbGVtZW50LnR5cGVdXCJcbiAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwiZi5uZ1N1Ym1pdC5lbWl0KClcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVsZW1lbnQgdHlwZVwiPlxuICAgICAgICAgICAgICAgIEBmb3IgKHR5cGUgb2YgVFlQRVM7IHRyYWNrIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1vcHRpb24gW3ZhbHVlXT1cInR5cGVcIj57e3R5cGV9fTwvbWF0LWxpc3Qtb3B0aW9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmFycm93X2Ryb3BfZG93bjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIndlaWdodEVkaXRcIiBbbWF0UG9wb3ZlckVkaXRDb250ZXh0XT1cImVsZW1lbnRcIj5cbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxuXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gIDwhLS0gRmFudGFzeSBDb3VudGVycGFydHMgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImZhbnRhc3lDb3VudGVycGFydFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEZhbnRhc3kgQ291bnRlcnBhcnRzIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwiZmFudGFzeUNvdW50ZXJwYXJ0RWRpdFwiPlxuICAgICAge3tlbGVtZW50LmZhbnRhc3lDb3VudGVycGFydHMuam9pbignLCAnKX19XG5cbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxuICAgICAgPG5nLXRlbXBsYXRlICNmYW50YXN5Q291bnRlcnBhcnRFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0RmFudGFzeUNvdW50ZXJwYXJ0cyhlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cImZhbnRhc3lWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWZpbGw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0aW9uLWxpc3QgW25nTW9kZWxdPVwiZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYW50YXN5Q291bnRlcnBhcnRzXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGYW50YXN5IEVsZW1lbnQgQ291bnRlcnBhcnRzXCI+XG4gICAgICAgICAgICAgICAgQGZvciAoZmFudGFzeUVsZW1lbnQgb2YgRkFOVEFTWV9FTEVNRU5UUzsgdHJhY2sgZmFudGFzeUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImZhbnRhc3lFbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hQb3NpdGlvbj1cImJlZm9yZVwiPnt7ZmFudGFzeUVsZW1lbnR9fTwvbWF0LWxpc3Qtb3B0aW9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5hcnJvd19kcm9wX2Rvd248L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuPC90YWJsZT5cbiJdfQ==