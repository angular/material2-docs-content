import * as i1 from '@angular/material-experimental/selection';
import { MatSelectionModule } from '@angular/material-experimental/selection';
import * as i2 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i2$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * @title Table that uses `matSelectionColumn` which allows users to select rows.
 */
class MatSelectionColumnExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.selected = [];
    }
    selectionChanged(event) {
        this.selected = event.after.map(select => select.value.name);
    }
}
MatSelectionColumnExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionColumnExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
MatSelectionColumnExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: MatSelectionColumnExample, selector: "mat-selection-column-example", ngImport: i0, template: "Selected: {{selected}}\n<table class=\"example-table\" mat-table [dataSource]=\"dataSource\" matSelection [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selectionChanged($event)\">\n    <mat-selection-column name=\"select\"></mat-selection-column>\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" matRowSelection [matRowSelectionValue]=\"row\"></tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatSelection, selector: "[matSelection]", inputs: ["matSelectionMultiple"], outputs: ["matSelectionChange"], exportAs: ["matSelection"] }, { kind: "component", type: i1.MatSelectionColumn, selector: "mat-selection-column", inputs: ["name"] }, { kind: "directive", type: i1.MatRowSelection, selector: "[matRowSelection]", inputs: ["matRowSelectionIndex", "matRowSelectionValue"] }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionColumnExample, decorators: [{
            type: Component,
            args: [{ selector: 'mat-selection-column-example', template: "Selected: {{selected}}\n<table class=\"example-table\" mat-table [dataSource]=\"dataSource\" matSelection [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selectionChanged($event)\">\n    <mat-selection-column name=\"select\"></mat-selection-column>\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" matRowSelection [matRowSelectionValue]=\"row\"></tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n"] }]
        }] });
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**
 * @title Mat Selection on a simple list.
 */
class MatSelectionListExample {
    constructor() {
        this.data = ELEMENT_NAMES;
        this.selected1 = [];
        this.selected2 = [];
        this.selected3 = [];
        this.selected4 = [];
    }
    getCurrentSelected(event) {
        return event.after.map(select => select.value);
    }
    trackByFn(index, value) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
}
MatSelectionListExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
MatSelectionListExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: MatSelectionListExample, selector: "mat-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" matSelectAll #allToggler=\"matSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" matSelectionToggle #toggler=\"matSelectionToggle\" [matSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle1=\"matSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"false\" (matSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (matSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle2=\"matSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\" [matSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n", dependencies: [{ kind: "directive", type: i1.MatSelectAll, selector: "[matSelectAll]", exportAs: ["matSelectAll"] }, { kind: "directive", type: i1.MatSelection, selector: "[matSelection]", inputs: ["matSelectionMultiple"], outputs: ["matSelectionChange"], exportAs: ["matSelection"] }, { kind: "directive", type: i1.MatSelectionToggle, selector: "[matSelectionToggle]", inputs: ["matSelectionToggleIndex", "matSelectionToggleValue"], exportAs: ["matSelectionToggle"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'mat-selection-list-example', template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" matSelectAll #allToggler=\"matSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" matSelectionToggle #toggler=\"matSelectionToggle\" [matSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle1=\"matSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"false\" (matSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (matSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle2=\"matSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\" [matSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
        }] });
const ELEMENT_NAMES = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Boron',
    'Carbon',
    'Nitrogen',
    'Oxygen',
    'Fluorine',
    'Neon',
    'Sodium',
    'Magnesium',
    'Aluminum',
    'Silicon',
    'Phosphorus',
    'Sulfur',
    'Chlorine',
    'Argon',
    'Potassium',
    'Calcium',
];
const ELEMENT_SYMBOLS = [
    'H',
    'He',
    'Li',
    'Be',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
];

const EXAMPLES = [MatSelectionListExample, MatSelectionColumnExample];
class MatSelectionExamplesModule {
}
MatSelectionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MatSelectionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionExamplesModule, declarations: [MatSelectionListExample, MatSelectionColumnExample], imports: [MatSelectionModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [MatSelectionListExample, MatSelectionColumnExample] });
MatSelectionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionExamplesModule, imports: [MatSelectionModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatSelectionModule,
                        MatTableModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MatSelectionColumnExample, MatSelectionExamplesModule, MatSelectionListExample };
//# sourceMappingURL=selection.mjs.map
