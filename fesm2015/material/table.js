import { DecimalPipe, CommonModule } from '@angular/common';
import { Component, ViewChild, ContentChildren, Input, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatHeaderRowDef, MatRowDef, MatColumnDef, MatTable, MatTableModule } from '@angular/material/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';

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
];
/**
 * \@title Basic use of `<mat-table>` (uses display flex)
 */
class TableBasicFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
}
TableBasicFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'table-basic-flex-example',
                template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableBasicFlexExample.prototype.displayedColumns;
    /** @type {?} */
    TableBasicFlexExample.prototype.dataSource;
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
];
/**
 * \@title Basic use of `<table mat-table>`
 */
class TableBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$1;
    }
}
TableBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'table-basic-example',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableBasicExample.prototype.displayedColumns;
    /** @type {?} */
    TableBasicExample.prototype.dataSource;
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
];
/**
 * \@title Table dynamically changing the columns displayed
 */
class TableDynamicColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA$2;
    }
    /**
     * @return {?}
     */
    addColumn() {
        /** @type {?} */
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
    /**
     * @return {?}
     */
    removeColumn() {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    }
    /**
     * @return {?}
     */
    shuffle() {
        /** @type {?} */
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            /** @type {?} */
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            /** @type {?} */
            let temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    }
}
TableDynamicColumnsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-dynamic-columns-example',
                template: "<button mat-raised-button (click)=\"addColumn()\"> Add column </button>\n<button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\n<button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\n\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 16px 8px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableDynamicColumnsExample.prototype.displayedColumns;
    /** @type {?} */
    TableDynamicColumnsExample.prototype.columnsToDisplay;
    /** @type {?} */
    TableDynamicColumnsExample.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with expandable rows
 */
class TableExpandableRowsExample {
    constructor() {
        this.dataSource = ELEMENT_DATA$3;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
}
TableExpandableRowsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-expandable-rows-example',
                template: "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n",
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
                styles: ["table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableExpandableRowsExample.prototype.dataSource;
    /** @type {?} */
    TableExpandableRowsExample.prototype.columnsToDisplay;
    /** @type {?} */
    TableExpandableRowsExample.prototype.expandedElement;
}
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
    /** @type {?} */
    PeriodicElement$3.prototype.description;
}
/** @type {?} */
const ELEMENT_DATA$3 = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement$4() { }
if (false) {
    /** @type {?} */
    PeriodicElement$4.prototype.name;
    /** @type {?} */
    PeriodicElement$4.prototype.position;
    /** @type {?} */
    PeriodicElement$4.prototype.weight;
    /** @type {?} */
    PeriodicElement$4.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$4 = [
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
];
/**
 * \@title Table with filtering
 */
class TableFilteringExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$4);
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
TableFilteringExample.decorators = [
    { type: Component, args: [{
                selector: 'table-filtering-example',
                template: "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["/* Structure */\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableFilteringExample.prototype.displayedColumns;
    /** @type {?} */
    TableFilteringExample.prototype.dataSource;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Transaction() { }
if (false) {
    /** @type {?} */
    Transaction.prototype.item;
    /** @type {?} */
    Transaction.prototype.cost;
}
/**
 * \@title Footer row table
 */
class TableFooterRowExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.cost)).reduce((/**
         * @param {?} acc
         * @param {?} value
         * @return {?}
         */
        (acc, value) => acc + value), 0);
    }
}
TableFooterRowExample.decorators = [
    { type: Component, args: [{
                selector: 'table-footer-row-example',
                template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableFooterRowExample.prototype.displayedColumns;
    /** @type {?} */
    TableFooterRowExample.prototype.transactions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table retrieving data through HTTP
 */
class TableHttpExample {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe((/**
         * @return {?}
         */
        () => this.paginator.pageIndex = 0));
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap((/**
         * @return {?}
         */
        () => {
            this.isLoadingResults = true;
            return (/** @type {?} */ (this.exampleDatabase)).getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex);
        })), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total_count;
            return data.items;
        })), catchError((/**
         * @return {?}
         */
        () => {
            this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isRateLimitReached = true;
            return of([]);
        }))).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this.data = data));
    }
}
TableHttpExample.decorators = [
    { type: Component, args: [{
                selector: 'table-http-example',
                template: "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n      GitHub's API rate limit has been reached. It will be reset in one minute.\n    </div>\n  </div>\n\n  <div class=\"example-table-container\">\n\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>#</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>Title</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n      </ng-container>\n\n      <!-- State Column -->\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef>State</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\n      </ng-container>\n\n      <!-- Created Column -->\n      <ng-container matColumnDef=\"created\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n          Created\n        </th>\n        <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</div>\n",
                styles: ["/* Structure */\n.example-container {\n  position: relative;\n  min-height: 200px;\n}\n\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n\n.mat-column-created {\n  max-width: 124px;\n}\n"]
            }] }
];
/** @nocollapse */
TableHttpExample.ctorParameters = () => [
    { type: HttpClient }
];
TableHttpExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: false },] }],
    sort: [{ type: ViewChild, args: [MatSort, { static: false },] }]
};
if (false) {
    /** @type {?} */
    TableHttpExample.prototype.displayedColumns;
    /** @type {?} */
    TableHttpExample.prototype.exampleDatabase;
    /** @type {?} */
    TableHttpExample.prototype.data;
    /** @type {?} */
    TableHttpExample.prototype.resultsLength;
    /** @type {?} */
    TableHttpExample.prototype.isLoadingResults;
    /** @type {?} */
    TableHttpExample.prototype.isRateLimitReached;
    /** @type {?} */
    TableHttpExample.prototype.paginator;
    /** @type {?} */
    TableHttpExample.prototype.sort;
    /**
     * @type {?}
     * @private
     */
    TableHttpExample.prototype._httpClient;
}
/**
 * @record
 */
function GithubApi() { }
if (false) {
    /** @type {?} */
    GithubApi.prototype.items;
    /** @type {?} */
    GithubApi.prototype.total_count;
}
/**
 * @record
 */
function GithubIssue() { }
if (false) {
    /** @type {?} */
    GithubIssue.prototype.created_at;
    /** @type {?} */
    GithubIssue.prototype.number;
    /** @type {?} */
    GithubIssue.prototype.state;
    /** @type {?} */
    GithubIssue.prototype.title;
}
/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleHttpDatabase {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    /**
     * @param {?} sort
     * @param {?} order
     * @param {?} page
     * @return {?}
     */
    getRepoIssues(sort, order, page) {
        /** @type {?} */
        const href = 'https://api.github.com/search/issues';
        /** @type {?} */
        const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
        return this._httpClient.get(requestUrl);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExampleHttpDatabase.prototype._httpClient;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Transaction$1() { }
if (false) {
    /** @type {?} */
    Transaction$1.prototype.item;
    /** @type {?} */
    Transaction$1.prototype.cost;
}
/**
 * \@title Table with multiple header and footer rows
 */
class TableMultipleHeaderFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.cost)).reduce((/**
         * @param {?} acc
         * @param {?} value
         * @return {?}
         */
        (acc, value) => acc + value), 0);
    }
}
TableMultipleHeaderFooterExample.decorators = [
    { type: Component, args: [{
                selector: 'table-multiple-header-footer-example',
                template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <!-- Item Description Column -->\n  <ng-container matColumnDef=\"item-description\">\n    <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>\n  </ng-container>\n\n  <!-- Cost Description Column -->\n  <ng-container matColumnDef=\"cost-description\">\n    <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>\n  </ng-container>\n\n  <!-- Disclaimer column -->\n  <ng-container matColumnDef=\"disclaimer\">\n    <td mat-footer-cell *matFooterCellDef colspan=\"2\">\n      Please note that the cost of items displayed are completely and totally made up.\n    </td>\n  </ng-container>\n\n  <!-- The table will render two header rows, one data row per data object, and two footer rows. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n      class=\"example-first-header-row\">\n  </tr>\n  <tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\"\n      class=\"example-second-header-row\">\n  </tr>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"example-first-footer-row\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\n.example-first-header-row th {\n  border-bottom: none;\n}\n\n.example-second-header-row {\n  font-style: italic;\n}\n\n.example-first-footer-row {\n  font-weight: bold;\n}\n\n.example-second-footer-row td {\n  color: #900000;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableMultipleHeaderFooterExample.prototype.displayedColumns;
    /** @type {?} */
    TableMultipleHeaderFooterExample.prototype.transactions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function UserData() { }
if (false) {
    /** @type {?} */
    UserData.prototype.id;
    /** @type {?} */
    UserData.prototype.name;
    /** @type {?} */
    UserData.prototype.progress;
    /** @type {?} */
    UserData.prototype.color;
}
/**
 * Constants used to fill up our data base.
 * @type {?}
 */
const COLORS = [
    'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
    'aqua', 'blue', 'navy', 'black', 'gray'
];
/** @type {?} */
const NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
/**
 * \@title Data table with sorting, pagination, and filtering.
 */
class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        /** @type {?} */
        const users = Array.from({ length: 100 }, (/**
         * @param {?} _
         * @param {?} k
         * @return {?}
         */
        (_, k) => createNewUser(k + 1)));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
TableOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'table-overview-example',
                template: "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n",
                styles: ["table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n"]
            }] }
];
/** @nocollapse */
TableOverviewExample.ctorParameters = () => [];
TableOverviewExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }],
    sort: [{ type: ViewChild, args: [MatSort, { static: true },] }]
};
if (false) {
    /** @type {?} */
    TableOverviewExample.prototype.displayedColumns;
    /** @type {?} */
    TableOverviewExample.prototype.dataSource;
    /** @type {?} */
    TableOverviewExample.prototype.paginator;
    /** @type {?} */
    TableOverviewExample.prototype.sort;
}
/**
 * Builds and returns a new User.
 * @param {?} id
 * @return {?}
 */
function createNewUser(id) {
    /** @type {?} */
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with pagination
 */
class TablePaginationExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$5);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}
TablePaginationExample.decorators = [
    { type: Component, args: [{
                selector: 'table-pagination-example',
                template: "<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
TablePaginationExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }]
};
if (false) {
    /** @type {?} */
    TablePaginationExample.prototype.displayedColumns;
    /** @type {?} */
    TablePaginationExample.prototype.dataSource;
    /** @type {?} */
    TablePaginationExample.prototype.paginator;
}
/**
 * @record
 */
function PeriodicElement$5() { }
if (false) {
    /** @type {?} */
    PeriodicElement$5.prototype.name;
    /** @type {?} */
    PeriodicElement$5.prototype.position;
    /** @type {?} */
    PeriodicElement$5.prototype.weight;
    /** @type {?} */
    PeriodicElement$5.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$5 = [
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table showing each row context properties.
 */
class TableRowContextExample {
    constructor() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
}
TableRowContextExample.decorators = [
    { type: Component, args: [{
                selector: 'table-row-context-example',
                template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"$implicit\">\n    <th mat-header-cell *matHeaderCellDef> $implicit </th>\n    <td mat-cell *matCellDef=\"let data\"> {{data}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"index\">\n    <th mat-header-cell *matHeaderCellDef> index </th>\n    <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"count\">\n    <th mat-header-cell *matHeaderCellDef> count </th>\n    <td mat-cell *matCellDef=\"let count = count\"> {{count}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"first\">\n    <th mat-header-cell *matHeaderCellDef> first </th>\n    <td mat-cell *matCellDef=\"let first = first\"> {{first}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"last\">\n    <th mat-header-cell *matHeaderCellDef> last </th>\n    <td mat-cell *matCellDef=\"let last = last\"> {{last}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"even\">\n    <th mat-header-cell *matHeaderCellDef> even </th>\n    <td mat-cell *matCellDef=\"let even = even\"> {{even}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"odd\">\n    <th mat-header-cell *matHeaderCellDef> odd </th>\n    <td mat-cell *matCellDef=\"let odd = odd\"> {{odd}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableRowContextExample.prototype.displayedColumns;
    /** @type {?} */
    TableRowContextExample.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement$6() { }
if (false) {
    /** @type {?} */
    PeriodicElement$6.prototype.name;
    /** @type {?} */
    PeriodicElement$6.prototype.position;
    /** @type {?} */
    PeriodicElement$6.prototype.weight;
    /** @type {?} */
    PeriodicElement$6.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$6 = [
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
];
/**
 * \@title Table with selection
 */
class TableSelectionExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$6);
        this.selection = new SelectionModel(true, []);
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            row => this.selection.select(row)));
    }
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
TableSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'table-selection-example',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Checkbox Column -->\n  <ng-container matColumnDef=\"select\">\n    <th mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </td>\n  </ng-container>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      (click)=\"selection.toggle(row)\">\n  </tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableSelectionExample.prototype.displayedColumns;
    /** @type {?} */
    TableSelectionExample.prototype.dataSource;
    /** @type {?} */
    TableSelectionExample.prototype.selection;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement$7() { }
if (false) {
    /** @type {?} */
    PeriodicElement$7.prototype.name;
    /** @type {?} */
    PeriodicElement$7.prototype.position;
    /** @type {?} */
    PeriodicElement$7.prototype.weight;
    /** @type {?} */
    PeriodicElement$7.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$7 = [
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
];
/**
 * \@title Table with sorting
 */
class TableSortingExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$7);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sorting-example',
                template: "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n"]
            }] }
];
TableSortingExample.propDecorators = {
    sort: [{ type: ViewChild, args: [MatSort, { static: true },] }]
};
if (false) {
    /** @type {?} */
    TableSortingExample.prototype.displayedColumns;
    /** @type {?} */
    TableSortingExample.prototype.dataSource;
    /** @type {?} */
    TableSortingExample.prototype.sort;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with sticky columns
 */
class TableStickyColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
        this.dataSource = ELEMENT_DATA$8;
    }
}
TableStickyColumnsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-columns-example',
                template: "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\" sticky>\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <!-- Star Column -->\n    <ng-container matColumnDef=\"star\" stickyEnd>\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-icon>more_vert</mat-icon>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n",
                styles: [".example-container {\n  height: 400px;\n  width: 550px;\n  overflow: auto;\n}\n\ntable {\n  width: 800px;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableStickyColumnsExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyColumnsExample.prototype.dataSource;
}
/**
 * @record
 */
function PeriodicElement$8() { }
if (false) {
    /** @type {?} */
    PeriodicElement$8.prototype.name;
    /** @type {?} */
    PeriodicElement$8.prototype.position;
    /** @type {?} */
    PeriodicElement$8.prototype.weight;
    /** @type {?} */
    PeriodicElement$8.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$8 = [
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
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
class TableStickyComplexFlexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$9;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
}
TableStickyComplexFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-complex-flex-example',
                template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> Filler data cell </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row>\n  </mat-table>\n</div>\n",
                styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell, .mat-footer-cell, .mat-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-header-row, .mat-footer-row, .mat-row {\n  min-width: 1920px; /* 24 columns, 80px each */\n}\n"]
            }] }
];
/** @nocollapse */
TableStickyComplexFlexExample.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TableStickyComplexFlexExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyComplexFlexExample.prototype.dataSource;
    /** @type {?} */
    TableStickyComplexFlexExample.prototype.tables;
}
/**
 * @record
 */
function PeriodicElement$9() { }
if (false) {
    /** @type {?} */
    PeriodicElement$9.prototype.name;
    /** @type {?} */
    PeriodicElement$9.prototype.position;
    /** @type {?} */
    PeriodicElement$9.prototype.weight;
    /** @type {?} */
    PeriodicElement$9.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$9 = [
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
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tables with toggle-able sticky headers, footers, and columns
 */
class TableStickyComplexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$a;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
}
TableStickyComplexExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-complex-example',
                template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <th mat-header-cell *matHeaderCellDef> Position </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      <td mat-footer-cell *matFooterCellDef> Position Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      <td mat-footer-cell *matFooterCellDef> Name Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n      <td mat-footer-cell *matFooterCellDef> Weight Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <th mat-header-cell *matHeaderCellDef> Filler header cell </th>\n      <td mat-cell *matCellDef=\"let element\"> Filler data cell </td>\n      <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr>\n\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr>\n  </table>\n</div>\n",
                styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell, .mat-footer-cell, .mat-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n"]
            }] }
];
/** @nocollapse */
TableStickyComplexExample.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TableStickyComplexExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyComplexExample.prototype.dataSource;
    /** @type {?} */
    TableStickyComplexExample.prototype.tables;
}
/**
 * @record
 */
function PeriodicElement$a() { }
if (false) {
    /** @type {?} */
    PeriodicElement$a.prototype.name;
    /** @type {?} */
    PeriodicElement$a.prototype.position;
    /** @type {?} */
    PeriodicElement$a.prototype.weight;
    /** @type {?} */
    PeriodicElement$a.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$a = [
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
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Transaction$2() { }
if (false) {
    /** @type {?} */
    Transaction$2.prototype.item;
    /** @type {?} */
    Transaction$2.prototype.cost;
}
/**
 * \@title Table with a sticky footer
 */
class TableStickyFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.cost)).reduce((/**
         * @param {?} acc
         * @param {?} value
         * @return {?}
         */
        (acc, value) => acc + value), 0);
    }
}
TableStickyFooterExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-footer-example',
                template: "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"transactions\">\n    <!-- Item Column -->\n    <ng-container matColumnDef=\"item\">\n      <th mat-header-cell *matHeaderCellDef> Item </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n      <td mat-footer-cell *matFooterCellDef> Total </td>\n    </ng-container>\n\n    <!-- Cost Column -->\n    <ng-container matColumnDef=\"cost\">\n      <th mat-header-cell *matHeaderCellDef> Cost </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n      <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n  </table>\n</div>\n",
                styles: [".example-container {\n  height: 270px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableStickyFooterExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyFooterExample.prototype.transactions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Table with sticky header
 */
class TableStickyHeaderExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$b;
    }
}
TableStickyHeaderExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-header-example',
                template: "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>",
                styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableStickyHeaderExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyHeaderExample.prototype.dataSource;
}
/**
 * @record
 */
function PeriodicElement$b() { }
if (false) {
    /** @type {?} */
    PeriodicElement$b.prototype.name;
    /** @type {?} */
    PeriodicElement$b.prototype.position;
    /** @type {?} */
    PeriodicElement$b.prototype.weight;
    /** @type {?} */
    PeriodicElement$b.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$b = [
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
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement$c() { }
if (false) {
    /** @type {?} */
    PeriodicElement$c.prototype.name;
    /** @type {?} */
    PeriodicElement$c.prototype.position;
    /** @type {?} */
    PeriodicElement$c.prototype.weight;
    /** @type {?} */
    PeriodicElement$c.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$c = [
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
];
/**
 * \@title Use of 'mat-text-column' with various configurations of the interface.
 */
class TableTextColumnAdvancedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$c);
        this.decimalPipe = new DecimalPipe('en-US');
        /**
         * Data accessor function that transforms the weight value to have at most 2 decimal digits.
         */
        this.getWeight = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.decimalPipe.transform(data.weight, '1.0-2'));
    }
}
TableTextColumnAdvancedExample.decorators = [
    { type: Component, args: [{
                selector: 'table-text-column-advanced-example',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <mat-text-column name=\"position\" [headerText]=\"headerText\"></mat-text-column>\n\n  <!-- Change the header text. -->\n  <mat-text-column name=\"name\" headerText=\"Element\"></mat-text-column>\n\n  <!-- Provide a data accessor for getting the cell text values. -->\n  <mat-text-column name=\"weight\" [dataAccessor]=\"getWeight\"></mat-text-column>\n\n  <!-- Justify the content of the cells to the cell end. -->\n  <mat-text-column name=\"symbol\" justify=\"end\"></mat-text-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.displayedColumns;
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.dataSource;
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.headerText;
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.decimalPipe;
    /**
     * Data accessor function that transforms the weight value to have at most 2 decimal digits.
     * @type {?}
     */
    TableTextColumnAdvancedExample.prototype.getWeight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement$d() { }
if (false) {
    /** @type {?} */
    PeriodicElement$d.prototype.name;
    /** @type {?} */
    PeriodicElement$d.prototype.position;
    /** @type {?} */
    PeriodicElement$d.prototype.weight;
    /** @type {?} */
    PeriodicElement$d.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$d = [
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
];
/**
 * \@title Use of `mat-text-column` which can be used for simple columns that only need to display
 * a text value for the header and cells.
 */
class TableTextColumnExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$d;
    }
}
TableTextColumnExample.decorators = [
    { type: Component, args: [{
                selector: 'table-text-column-example',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <mat-text-column name=\"position\"></mat-text-column>\n  <mat-text-column name=\"name\"></mat-text-column>\n  <mat-text-column name=\"weight\"></mat-text-column>\n  <mat-text-column name=\"symbol\"></mat-text-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableTextColumnExample.prototype.displayedColumns;
    /** @type {?} */
    TableTextColumnExample.prototype.dataSource;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PeriodicElement$e() { }
if (false) {
    /** @type {?} */
    PeriodicElement$e.prototype.name;
    /** @type {?} */
    PeriodicElement$e.prototype.position;
    /** @type {?} */
    PeriodicElement$e.prototype.weight;
    /** @type {?} */
    PeriodicElement$e.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$e = [
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
];
/**
 * \@title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$e);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableWrappedExample.decorators = [
    { type: Component, args: [{
                selector: 'table-wrapped-example',
                template: "<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns; \"></tr>\n</wrapper-table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
TableWrappedExample.propDecorators = {
    sort: [{ type: ViewChild, args: ['sort', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TableWrappedExample.prototype.displayedColumns;
    /** @type {?} */
    TableWrappedExample.prototype.dataSource;
    /** @type {?} */
    TableWrappedExample.prototype.sort;
}
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 * @template T
 */
class WrapperTable {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.columnDefs.forEach((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => this.table.addColumnDef(columnDef)));
        this.rowDefs.forEach((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => this.table.addRowDef(rowDef)));
        this.headerRowDefs.forEach((/**
         * @param {?} headerRowDef
         * @return {?}
         */
        headerRowDef => this.table.addHeaderRowDef(headerRowDef)));
    }
}
WrapperTable.decorators = [
    { type: Component, args: [{
                selector: 'wrapper-table',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n",
                styles: [`
    table {
      width: 100%;
    }
  `]
            }] }
];
WrapperTable.propDecorators = {
    headerRowDefs: [{ type: ContentChildren, args: [MatHeaderRowDef,] }],
    rowDefs: [{ type: ContentChildren, args: [MatRowDef,] }],
    columnDefs: [{ type: ContentChildren, args: [MatColumnDef,] }],
    table: [{ type: ViewChild, args: [MatTable, { static: true },] }],
    columns: [{ type: Input }],
    dataSource: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    WrapperTable.prototype.headerRowDefs;
    /** @type {?} */
    WrapperTable.prototype.rowDefs;
    /** @type {?} */
    WrapperTable.prototype.columnDefs;
    /** @type {?} */
    WrapperTable.prototype.table;
    /** @type {?} */
    WrapperTable.prototype.columns;
    /** @type {?} */
    WrapperTable.prototype.dataSource;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    TableBasicExample, TableBasicFlexExample,
    TableDynamicColumnsExample, TableExpandableRowsExample,
    TableFilteringExample, TableFooterRowExample,
    TableHttpExample, TableMultipleHeaderFooterExample,
    TableOverviewExample, TablePaginationExample,
    TableRowContextExample, TableSelectionExample,
    TableSortingExample, TableStickyColumnsExample,
    TableStickyComplexExample, TableStickyComplexFlexExample,
    TableStickyFooterExample, TableStickyHeaderExample,
    TableTextColumnExample, TableTextColumnAdvancedExample,
    TableWrappedExample, WrapperTable,
];
class TableExamplesModule {
}
TableExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatPaginatorModule,
                    MatProgressSpinnerModule,
                    MatSortModule,
                    MatTableModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TableBasicExample, TableBasicFlexExample, TableDynamicColumnsExample, TableExpandableRowsExample, TableFilteringExample, TableFooterRowExample, TableHttpExample, TableMultipleHeaderFooterExample, TableOverviewExample, TablePaginationExample, TableRowContextExample, TableSelectionExample, TableSortingExample, TableStickyColumnsExample, TableStickyComplexExample, TableStickyComplexFlexExample, TableStickyFooterExample, TableStickyHeaderExample, TableTextColumnExample, TableTextColumnAdvancedExample, TableWrappedExample, WrapperTable, TableExamplesModule };
//# sourceMappingURL=table.js.map
