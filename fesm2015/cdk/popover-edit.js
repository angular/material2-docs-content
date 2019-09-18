import { CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
}
/** @type {?} */
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
 * \@title CDK Popover Edit on a flex cdk-table.
 */
class CdkPopoverEditCdkTableFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
}
CdkPopoverEditCdkTableFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-popover-edit-cdk-table-flex-example',
                template: "<cdk-table class=\"example-table\" editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n",
                styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\n.example-table cdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\n.example-table cdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkPopoverEditCdkTableFlexExample.prototype.displayedColumns;
    /** @type {?} */
    CdkPopoverEditCdkTableFlexExample.prototype.dataSource;
    /** @type {?} */
    CdkPopoverEditCdkTableFlexExample.prototype.preservedNameValues;
    /** @type {?} */
    CdkPopoverEditCdkTableFlexExample.prototype.preservedWeightValues;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /**
     * Stream of data that is provided to the table.
     * @type {?}
     */
    ExampleDataSource.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement$1() { }
if (false) {
    /** @type {?} */
    PeriodicElement$1.prototype.name;
    /** @type {?} */
    PeriodicElement$1.prototype.position;
    /** @type {?} */
    PeriodicElement$1.prototype.weight;
    /** @type {?} */
    PeriodicElement$1.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$1 = [
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
 * \@title CDK Popover Edit on a CDK data-table
 */
class CdkPopoverEditCdkTableExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$1();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
}
CdkPopoverEditCdkTableExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-popover-edit-cdk-table-example',
                template: "<table class=\"example-table\" cdk-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert cdkEditClose>Revert and close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 25%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkPopoverEditCdkTableExample.prototype.displayedColumns;
    /** @type {?} */
    CdkPopoverEditCdkTableExample.prototype.dataSource;
    /** @type {?} */
    CdkPopoverEditCdkTableExample.prototype.preservedNameValues;
    /** @type {?} */
    CdkPopoverEditCdkTableExample.prototype.preservedWeightValues;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$1 extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA$1);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /**
     * Stream of data that is provided to the table.
     * @type {?}
     */
    ExampleDataSource$1.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Person() { }
if (false) {
    /** @type {?} */
    Person.prototype.id;
    /** @type {?} */
    Person.prototype.firstName;
    /** @type {?} */
    Person.prototype.middleName;
    /** @type {?} */
    Person.prototype.lastName;
}
/** @type {?} */
const PERSON_DATA = [
    { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
    { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
    { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
    { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
    { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
    { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
    { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
    { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
    { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
];
/**
 * \@title CDK Popover Edit spanning multiple columns on an HTML data-table
 */
class CdkPopoverEditCellSpanVanillaTableExample {
    constructor() {
        this.preservedValues = new WeakMap();
        this.persons = PERSON_DATA;
    }
    /**
     * @param {?} person
     * @param {?} f
     * @return {?}
     */
    onSubmit(person, f) {
        if (!f.valid) {
            return;
        }
        person.firstName = f.value['firstName'];
        person.middleName = f.value['middleName'];
        person.lastName = f.value['lastName'];
    }
}
CdkPopoverEditCellSpanVanillaTableExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-popover-edit-cell-span-vanilla-table-example',
                template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #nameEdit let-ctx>\n    <div style=\"background-color: #ddd; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div class=\"example-input-container\">\n          <input [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          <input [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n              [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          <input [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n        </div>\n        <br>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> First name </th>\n    <th> Middle name </th>\n    <th> Last name </th>\n  </tr>\n  \n  <tr *ngFor=\"let person of persons\">\n    <td> {{person.id}} </td>\n\n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [cdkPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [cdkPopoverEditColspan]=\"{before: 1, after: 1}\">\n      {{person.middleName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [cdkPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container input {\n  flex: 1;\n  font-size: 14px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkPopoverEditCellSpanVanillaTableExample.prototype.preservedValues;
    /** @type {?} */
    CdkPopoverEditCellSpanVanillaTableExample.prototype.persons;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement$2() { }
if (false) {
    /** @type {?} */
    PeriodicElement$2.prototype.name;
    /** @type {?} */
    PeriodicElement$2.prototype.position;
    /** @type {?} */
    PeriodicElement$2.prototype.weight;
    /** @type {?} */
    PeriodicElement$2.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$2 = [
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
 * \@title CDK Popover Edit with spreadsheet-like configuration on an HTML data-table
 */
class CdkPopoverEditTabOutVanillaTableExample {
    constructor() {
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
        this.elements = ELEMENT_DATA$2;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
}
CdkPopoverEditTabOutVanillaTableExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-popover-edit-tab-out-vanilla-table-example',
                template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          cdkEditControlClickOutBehavior=\"submit\"\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> Name </th>\n    <th> Weight </th>\n    <th> Symbol </th>\n  </tr>\n  \n  <tr *ngFor=\"let element of elements\">\n    <td> {{element.position}} </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\" cdkPopoverEditTabOut cdkEditOpen>\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white; width: 100%\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              cdkEditControlClickOutBehavior=\"submit\"\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n          </form>\n        </div>\n      </ng-template>\n    </td>\n\n    <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\"\n        cdkPopoverEditTabOut cdkEditOpen>\n      {{element.weight}}\n    </td>\n\n    <td> {{element.symbol}} </td>\n  </tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkPopoverEditTabOutVanillaTableExample.prototype.preservedNameValues;
    /** @type {?} */
    CdkPopoverEditTabOutVanillaTableExample.prototype.preservedWeightValues;
    /** @type {?} */
    CdkPopoverEditTabOutVanillaTableExample.prototype.elements;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement$3() { }
if (false) {
    /** @type {?} */
    PeriodicElement$3.prototype.name;
    /** @type {?} */
    PeriodicElement$3.prototype.position;
    /** @type {?} */
    PeriodicElement$3.prototype.weight;
    /** @type {?} */
    PeriodicElement$3.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$3 = [
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
 * \@title CDK Popover Edit on an HTML data-table
 */
class CdkPopoverEditVanillaTableExample {
    constructor() {
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
        this.elements = ELEMENT_DATA$3;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
}
CdkPopoverEditVanillaTableExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-popover-edit-vanilla-table-example',
                template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> Name </th>\n    <th> Weight </th>\n    <th> Symbol </th>\n  </tr>\n  \n  <tr *ngFor=\"let element of elements\">\n    <td> {{element.position}} </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white; width: 100%\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n\n    <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n\n    <td> {{element.symbol}} </td>\n  </tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkPopoverEditVanillaTableExample.prototype.preservedNameValues;
    /** @type {?} */
    CdkPopoverEditVanillaTableExample.prototype.preservedWeightValues;
    /** @type {?} */
    CdkPopoverEditVanillaTableExample.prototype.elements;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    CdkPopoverEditCdkTableExample,
    CdkPopoverEditCdkTableFlexExample,
    CdkPopoverEditCellSpanVanillaTableExample,
    CdkPopoverEditTabOutVanillaTableExample,
    CdkPopoverEditVanillaTableExample,
];
class CdkPopoverEditExamplesModule {
}
CdkPopoverEditExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CdkPopoverEditModule,
                    CdkTableModule,
                    FormsModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CdkPopoverEditCdkTableFlexExample, CdkPopoverEditCdkTableExample, CdkPopoverEditCellSpanVanillaTableExample, CdkPopoverEditTabOutVanillaTableExample, CdkPopoverEditVanillaTableExample, CdkPopoverEditExamplesModule };
//# sourceMappingURL=popover-edit.js.map
