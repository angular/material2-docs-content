import * as i2 from '@angular/cdk-experimental/selection';
import { CdkSelectionModule } from '@angular/cdk-experimental/selection';
import * as i1 from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * @title CDK Selection Column on a CDK table.
 */
class CdkSelectionColumnExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.selected = [];
    }
    selectionChanged(event) {
        this.selected = event.after.map(select => select.value.name);
    }
}
CdkSelectionColumnExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CdkSelectionColumnExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkSelectionColumnExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: CdkSelectionColumnExample, selector: "cdk-selection-column-example", ngImport: i0, template: "Selected: {{selected}}\n<table class=\"example-table\" cdk-table [dataSource]=\"dataSource\" cdkSelection [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selectionChanged($event)\">\n    <cdk-selection-column cdkSelectionColumnName=\"select\"></cdk-selection-column>\n    <!-- Position Column -->\n    <ng-container cdkColumnDef=\"position\">\n      <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container cdkColumnDef=\"weight\">\n      <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container cdkColumnDef=\"symbol\">\n      <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" cdkRowSelection [cdkRowSelectionValue]=\"row\"></tr>\n</table>\n", styles: [".example-table {\n  border-collapse: collapse;\n}\n\ntr.cdk-selected {\n  background-color: yellow;\n}\n"], components: [{ type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { type: i2.CdkSelectionColumn, selector: "cdk-selection-column", inputs: ["cdkSelectionColumnName"] }, { type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }], directives: [{ type: i2.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }, { type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { type: i2.CdkRowSelection, selector: "[cdkRowSelection]", inputs: ["cdkRowSelectionValue", "cdkRowSelectionIndex"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CdkSelectionColumnExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-column-example', template: "Selected: {{selected}}\n<table class=\"example-table\" cdk-table [dataSource]=\"dataSource\" cdkSelection [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selectionChanged($event)\">\n    <cdk-selection-column cdkSelectionColumnName=\"select\"></cdk-selection-column>\n    <!-- Position Column -->\n    <ng-container cdkColumnDef=\"position\">\n      <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container cdkColumnDef=\"weight\">\n      <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container cdkColumnDef=\"symbol\">\n      <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" cdkRowSelection [cdkRowSelectionValue]=\"row\"></tr>\n</table>\n", styles: [".example-table {\n  border-collapse: collapse;\n}\n\ntr.cdk-selected {\n  background-color: yellow;\n}\n"] }]
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
 * @title CDK Selection on a simple list.
 */
class CdkSelectionListExample {
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
    trackByFn(index) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
}
CdkSelectionListExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CdkSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkSelectionListExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: CdkSelectionListExample, selector: "cdk-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n", components: [{ type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], directives: [{ type: i2.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { type: i2.CdkSelectAll, selector: "[cdkSelectAll]", exportAs: ["cdkSelectAll"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.CdkSelectionToggle, selector: "[cdkSelectionToggle]", inputs: ["cdkSelectionToggleValue", "cdkSelectionToggleIndex"], exportAs: ["cdkSelectionToggle"] }], pipes: { "async": i3.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CdkSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-list-example', template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
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

const EXAMPLES = [CdkSelectionListExample, CdkSelectionColumnExample];
class CdkSelectionExamplesModule {
}
CdkSelectionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CdkSelectionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkSelectionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CdkSelectionExamplesModule, declarations: [CdkSelectionListExample, CdkSelectionColumnExample], imports: [CdkSelectionModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [CdkSelectionListExample, CdkSelectionColumnExample] });
CdkSelectionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CdkSelectionExamplesModule, imports: [[
            CdkSelectionModule,
            CdkTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CdkSelectionExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CdkSelectionModule,
                        CdkTableModule,
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

export { CdkSelectionColumnExample, CdkSelectionExamplesModule, CdkSelectionListExample };
//# sourceMappingURL=selection.mjs.map
