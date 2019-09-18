(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/paginator'), require('@angular/material/progress-spinner'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/animations'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/collections')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/table', ['exports', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/paginator', '@angular/material/progress-spinner', '@angular/material/sort', '@angular/material/table', '@angular/animations', '@angular/common/http', 'rxjs', 'rxjs/operators', '@angular/cdk/collections'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.table = {}), global.ng.common, global.ng.core, global.ng.material.button, global.ng.material['button-toggle'], global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material.paginator, global.ng.material['progress-spinner'], global.ng.material.sort, global.ng.material.table, global.ng.animations, global.ng.common.http, global.rxjs, global.rxjs.operators, global.ng.cdk.collections));
}(this, function (exports, common, core, button, buttonToggle, checkbox, icon, input, paginator, progressSpinner, sort, table, animations, http, rxjs, operators, collections) { 'use strict';

    var ELEMENT_DATA = [
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
     * @title Basic use of `<mat-table>` (uses display flex)
     */
    var TableBasicFlexExample = /** @class */ (function () {
        function TableBasicFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA;
        }
        TableBasicFlexExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-basic-flex-example',
                        template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>",
                        styles: ["table {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return TableBasicFlexExample;
    }());

    var ELEMENT_DATA$1 = [
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
     * @title Basic use of `<table mat-table>`
     */
    var TableBasicExample = /** @class */ (function () {
        function TableBasicExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$1;
        }
        TableBasicExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-basic-example',
                        template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n",
                        styles: ["table {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return TableBasicExample;
    }());

    var ELEMENT_DATA$2 = [
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
     * @title Table dynamically changing the columns displayed
     */
    var TableDynamicColumnsExample = /** @class */ (function () {
        function TableDynamicColumnsExample() {
            this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
            this.columnsToDisplay = this.displayedColumns.slice();
            this.data = ELEMENT_DATA$2;
        }
        TableDynamicColumnsExample.prototype.addColumn = function () {
            var randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
            this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
        };
        TableDynamicColumnsExample.prototype.removeColumn = function () {
            if (this.columnsToDisplay.length) {
                this.columnsToDisplay.pop();
            }
        };
        TableDynamicColumnsExample.prototype.shuffle = function () {
            var currentIndex = this.columnsToDisplay.length;
            while (0 !== currentIndex) {
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // Swap
                var temp = this.columnsToDisplay[currentIndex];
                this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
                this.columnsToDisplay[randomIndex] = temp;
            }
        };
        TableDynamicColumnsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-dynamic-columns-example',
                        template: "<button mat-raised-button (click)=\"addColumn()\"> Add column </button>\n<button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\n<button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\n\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n</table>\n",
                        styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 16px 8px;\n}\n"]
                    }] }
        ];
        return TableDynamicColumnsExample;
    }());

    /**
     * @title Table with expandable rows
     */
    var TableExpandableRowsExample = /** @class */ (function () {
        function TableExpandableRowsExample() {
            this.dataSource = ELEMENT_DATA$3;
            this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
        }
        TableExpandableRowsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-expandable-rows-example',
                        template: "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n",
                        animations: [
                            animations.trigger('detailExpand', [
                                animations.state('collapsed', animations.style({ height: '0px', minHeight: '0' })),
                                animations.state('expanded', animations.style({ height: '*' })),
                                animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                            ]),
                        ],
                        styles: ["table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n"]
                    }] }
        ];
        return TableExpandableRowsExample;
    }());
    var ELEMENT_DATA$3 = [
        {
            position: 1,
            name: 'Hydrogen',
            weight: 1.0079,
            symbol: 'H',
            description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
        }, {
            position: 2,
            name: 'Helium',
            weight: 4.0026,
            symbol: 'He',
            description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
        }, {
            position: 3,
            name: 'Lithium',
            weight: 6.941,
            symbol: 'Li',
            description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
        }, {
            position: 4,
            name: 'Beryllium',
            weight: 9.0122,
            symbol: 'Be',
            description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
        }, {
            position: 5,
            name: 'Boron',
            weight: 10.811,
            symbol: 'B',
            description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
        }, {
            position: 6,
            name: 'Carbon',
            weight: 12.0107,
            symbol: 'C',
            description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
        }, {
            position: 7,
            name: 'Nitrogen',
            weight: 14.0067,
            symbol: 'N',
            description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
        }, {
            position: 8,
            name: 'Oxygen',
            weight: 15.9994,
            symbol: 'O',
            description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
        }, {
            position: 9,
            name: 'Fluorine',
            weight: 18.9984,
            symbol: 'F',
            description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
        }, {
            position: 10,
            name: 'Neon',
            weight: 20.1797,
            symbol: 'Ne',
            description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
        },
    ];

    var ELEMENT_DATA$4 = [
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
     * @title Table with filtering
     */
    var TableFilteringExample = /** @class */ (function () {
        function TableFilteringExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table.MatTableDataSource(ELEMENT_DATA$4);
        }
        TableFilteringExample.prototype.applyFilter = function (filterValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
        };
        TableFilteringExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-filtering-example',
                        template: "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                        styles: ["/* Structure */\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n"]
                    }] }
        ];
        return TableFilteringExample;
    }());

    /**
     * @title Footer row table
     */
    var TableFooterRowExample = /** @class */ (function () {
        function TableFooterRowExample() {
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
        /** Gets the total cost of all transactions. */
        TableFooterRowExample.prototype.getTotalCost = function () {
            return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
        };
        TableFooterRowExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-footer-row-example',
                        template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n</table>\n",
                        styles: ["table {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n"]
                    }] }
        ];
        return TableFooterRowExample;
    }());

    /**
     * @title Table retrieving data through HTTP
     */
    var TableHttpExample = /** @class */ (function () {
        function TableHttpExample(_httpClient) {
            this._httpClient = _httpClient;
            this.displayedColumns = ['created', 'state', 'number', 'title'];
            this.data = [];
            this.resultsLength = 0;
            this.isLoadingResults = true;
            this.isRateLimitReached = false;
        }
        TableHttpExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
            // If the user changes the sort order, reset back to the first page.
            this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
            rxjs.merge(this.sort.sortChange, this.paginator.page)
                .pipe(operators.startWith({}), operators.switchMap(function () {
                _this.isLoadingResults = true;
                return _this.exampleDatabase.getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
            }), operators.map(function (data) {
                // Flip flag to show that loading has finished.
                _this.isLoadingResults = false;
                _this.isRateLimitReached = false;
                _this.resultsLength = data.total_count;
                return data.items;
            }), operators.catchError(function () {
                _this.isLoadingResults = false;
                // Catch if the GitHub API has reached its rate limit. Return empty data.
                _this.isRateLimitReached = true;
                return rxjs.of([]);
            })).subscribe(function (data) { return _this.data = data; });
        };
        TableHttpExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-http-example',
                        template: "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n      GitHub's API rate limit has been reached. It will be reset in one minute.\n    </div>\n  </div>\n\n  <div class=\"example-table-container\">\n\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>#</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>Title</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n      </ng-container>\n\n      <!-- State Column -->\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef>State</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\n      </ng-container>\n\n      <!-- Created Column -->\n      <ng-container matColumnDef=\"created\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n          Created\n        </th>\n        <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</div>\n",
                        styles: ["/* Structure */\n.example-container {\n  position: relative;\n  min-height: 200px;\n}\n\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n\n.mat-column-created {\n  max-width: 124px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        TableHttpExample.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        TableHttpExample.propDecorators = {
            paginator: [{ type: core.ViewChild, args: [paginator.MatPaginator, { static: false },] }],
            sort: [{ type: core.ViewChild, args: [sort.MatSort, { static: false },] }]
        };
        return TableHttpExample;
    }());
    /** An example database that the data source uses to retrieve data for the table. */
    var ExampleHttpDatabase = /** @class */ (function () {
        function ExampleHttpDatabase(_httpClient) {
            this._httpClient = _httpClient;
        }
        ExampleHttpDatabase.prototype.getRepoIssues = function (sort, order, page) {
            var href = 'https://api.github.com/search/issues';
            var requestUrl = href + "?q=repo:angular/components&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
            return this._httpClient.get(requestUrl);
        };
        return ExampleHttpDatabase;
    }());

    /**
     * @title Table with multiple header and footer rows
     */
    var TableMultipleHeaderFooterExample = /** @class */ (function () {
        function TableMultipleHeaderFooterExample() {
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
        /** Gets the total cost of all transactions. */
        TableMultipleHeaderFooterExample.prototype.getTotalCost = function () {
            return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
        };
        TableMultipleHeaderFooterExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-multiple-header-footer-example',
                        template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <!-- Item Description Column -->\n  <ng-container matColumnDef=\"item-description\">\n    <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>\n  </ng-container>\n\n  <!-- Cost Description Column -->\n  <ng-container matColumnDef=\"cost-description\">\n    <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>\n  </ng-container>\n\n  <!-- Disclaimer column -->\n  <ng-container matColumnDef=\"disclaimer\">\n    <td mat-footer-cell *matFooterCellDef colspan=\"2\">\n      Please note that the cost of items displayed are completely and totally made up.\n    </td>\n  </ng-container>\n\n  <!-- The table will render two header rows, one data row per data object, and two footer rows. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n      class=\"example-first-header-row\">\n  </tr>\n  <tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\"\n      class=\"example-second-header-row\">\n  </tr>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"example-first-footer-row\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\n</table>\n",
                        styles: ["table {\n  width: 100%;\n}\n\n.example-first-header-row th {\n  border-bottom: none;\n}\n\n.example-second-header-row {\n  font-style: italic;\n}\n\n.example-first-footer-row {\n  font-weight: bold;\n}\n\n.example-second-footer-row td {\n  color: #900000;\n}\n"]
                    }] }
        ];
        return TableMultipleHeaderFooterExample;
    }());

    /** Constants used to fill up our data base. */
    var COLORS = [
        'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
        'aqua', 'blue', 'navy', 'black', 'gray'
    ];
    var NAMES = [
        'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
        'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
    ];
    /**
     * @title Data table with sorting, pagination, and filtering.
     */
    var TableOverviewExample = /** @class */ (function () {
        function TableOverviewExample() {
            this.displayedColumns = ['id', 'name', 'progress', 'color'];
            // Create 100 users
            var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
            // Assign the data to the data source for the table to render
            this.dataSource = new table.MatTableDataSource(users);
        }
        TableOverviewExample.prototype.ngOnInit = function () {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        };
        TableOverviewExample.prototype.applyFilter = function (filterValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        };
        TableOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-overview-example',
                        template: "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n",
                        styles: ["table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        TableOverviewExample.ctorParameters = function () { return []; };
        TableOverviewExample.propDecorators = {
            paginator: [{ type: core.ViewChild, args: [paginator.MatPaginator, { static: true },] }],
            sort: [{ type: core.ViewChild, args: [sort.MatSort, { static: true },] }]
        };
        return TableOverviewExample;
    }());
    /** Builds and returns a new User. */
    function createNewUser(id) {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: id.toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    }

    /**
     * @title Table with pagination
     */
    var TablePaginationExample = /** @class */ (function () {
        function TablePaginationExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table.MatTableDataSource(ELEMENT_DATA$5);
        }
        TablePaginationExample.prototype.ngOnInit = function () {
            this.dataSource.paginator = this.paginator;
        };
        TablePaginationExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-pagination-example',
                        template: "<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n",
                        styles: ["table {\n  width: 100%;\n}\n"]
                    }] }
        ];
        TablePaginationExample.propDecorators = {
            paginator: [{ type: core.ViewChild, args: [paginator.MatPaginator, { static: true },] }]
        };
        return TablePaginationExample;
    }());
    var ELEMENT_DATA$5 = [
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
     * @title Table showing each row context properties.
     */
    var TableRowContextExample = /** @class */ (function () {
        function TableRowContextExample() {
            this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
            this.data = ['one', 'two', 'three', 'four', 'five'];
        }
        TableRowContextExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-row-context-example',
                        template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"$implicit\">\n    <th mat-header-cell *matHeaderCellDef> $implicit </th>\n    <td mat-cell *matCellDef=\"let data\"> {{data}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"index\">\n    <th mat-header-cell *matHeaderCellDef> index </th>\n    <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"count\">\n    <th mat-header-cell *matHeaderCellDef> count </th>\n    <td mat-cell *matCellDef=\"let count = count\"> {{count}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"first\">\n    <th mat-header-cell *matHeaderCellDef> first </th>\n    <td mat-cell *matCellDef=\"let first = first\"> {{first}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"last\">\n    <th mat-header-cell *matHeaderCellDef> last </th>\n    <td mat-cell *matCellDef=\"let last = last\"> {{last}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"even\">\n    <th mat-header-cell *matHeaderCellDef> even </th>\n    <td mat-cell *matCellDef=\"let even = even\"> {{even}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"odd\">\n    <th mat-header-cell *matHeaderCellDef> odd </th>\n    <td mat-cell *matCellDef=\"let odd = odd\"> {{odd}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                        styles: ["table {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return TableRowContextExample;
    }());

    var ELEMENT_DATA$6 = [
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
     * @title Table with selection
     */
    var TableSelectionExample = /** @class */ (function () {
        function TableSelectionExample() {
            this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
            this.dataSource = new table.MatTableDataSource(ELEMENT_DATA$6);
            this.selection = new collections.SelectionModel(true, []);
        }
        /** Whether the number of selected elements matches the total number of rows. */
        TableSelectionExample.prototype.isAllSelected = function () {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.data.length;
            return numSelected === numRows;
        };
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        TableSelectionExample.prototype.masterToggle = function () {
            var _this = this;
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        };
        /** The label for the checkbox on the passed row */
        TableSelectionExample.prototype.checkboxLabel = function (row) {
            if (!row) {
                return (this.isAllSelected() ? 'select' : 'deselect') + " all";
            }
            return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
        };
        TableSelectionExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-selection-example',
                        template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Checkbox Column -->\n  <ng-container matColumnDef=\"select\">\n    <th mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </td>\n  </ng-container>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      (click)=\"selection.toggle(row)\">\n  </tr>\n</table>\n",
                        styles: ["table {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return TableSelectionExample;
    }());

    var ELEMENT_DATA$7 = [
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
     * @title Table with sorting
     */
    var TableSortingExample = /** @class */ (function () {
        function TableSortingExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table.MatTableDataSource(ELEMENT_DATA$7);
        }
        TableSortingExample.prototype.ngOnInit = function () {
            this.dataSource.sort = this.sort;
        };
        TableSortingExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-sorting-example',
                        template: "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                        styles: ["table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n"]
                    }] }
        ];
        TableSortingExample.propDecorators = {
            sort: [{ type: core.ViewChild, args: [sort.MatSort, { static: true },] }]
        };
        return TableSortingExample;
    }());

    /**
     * @title Table with sticky columns
     */
    var TableStickyColumnsExample = /** @class */ (function () {
        function TableStickyColumnsExample() {
            this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
            this.dataSource = ELEMENT_DATA$8;
        }
        TableStickyColumnsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-sticky-columns-example',
                        template: "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\" sticky>\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <!-- Star Column -->\n    <ng-container matColumnDef=\"star\" stickyEnd>\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-icon>more_vert</mat-icon>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n",
                        styles: [".example-container {\n  height: 400px;\n  width: 550px;\n  overflow: auto;\n}\n\ntable {\n  width: 800px;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n"]
                    }] }
        ];
        return TableStickyColumnsExample;
    }());
    var ELEMENT_DATA$8 = [
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
     * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
     */
    var TableStickyComplexFlexExample = /** @class */ (function () {
        function TableStickyComplexFlexExample() {
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
        /** Whether the button toggle group contains the id as an active value. */
        TableStickyComplexFlexExample.prototype.isSticky = function (buttonToggleGroup, id) {
            return (buttonToggleGroup.value || []).indexOf(id) !== -1;
        };
        TableStickyComplexFlexExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-sticky-complex-flex-example',
                        template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> Filler data cell </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row>\n  </mat-table>\n</div>\n",
                        styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell, .mat-footer-cell, .mat-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-header-row, .mat-footer-row, .mat-row {\n  min-width: 1920px; /* 24 columns, 80px each */\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        TableStickyComplexFlexExample.ctorParameters = function () { return []; };
        return TableStickyComplexFlexExample;
    }());
    var ELEMENT_DATA$9 = [
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
     * @title Tables with toggle-able sticky headers, footers, and columns
     */
    var TableStickyComplexExample = /** @class */ (function () {
        function TableStickyComplexExample() {
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
        /** Whether the button toggle group contains the id as an active value. */
        TableStickyComplexExample.prototype.isSticky = function (buttonToggleGroup, id) {
            return (buttonToggleGroup.value || []).indexOf(id) !== -1;
        };
        TableStickyComplexExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-sticky-complex-example',
                        template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <th mat-header-cell *matHeaderCellDef> Position </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      <td mat-footer-cell *matFooterCellDef> Position Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      <td mat-footer-cell *matFooterCellDef> Name Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n      <td mat-footer-cell *matFooterCellDef> Weight Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <th mat-header-cell *matHeaderCellDef> Filler header cell </th>\n      <td mat-cell *matCellDef=\"let element\"> Filler data cell </td>\n      <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr>\n\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr>\n  </table>\n</div>\n",
                        styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell, .mat-footer-cell, .mat-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        TableStickyComplexExample.ctorParameters = function () { return []; };
        return TableStickyComplexExample;
    }());
    var ELEMENT_DATA$a = [
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
     * @title Table with a sticky footer
     */
    var TableStickyFooterExample = /** @class */ (function () {
        function TableStickyFooterExample() {
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
        /** Gets the total cost of all transactions. */
        TableStickyFooterExample.prototype.getTotalCost = function () {
            return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
        };
        TableStickyFooterExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-sticky-footer-example',
                        template: "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"transactions\">\n    <!-- Item Column -->\n    <ng-container matColumnDef=\"item\">\n      <th mat-header-cell *matHeaderCellDef> Item </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n      <td mat-footer-cell *matFooterCellDef> Total </td>\n    </ng-container>\n\n    <!-- Cost Column -->\n    <ng-container matColumnDef=\"cost\">\n      <th mat-header-cell *matHeaderCellDef> Cost </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n      <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n  </table>\n</div>\n",
                        styles: [".example-container {\n  height: 270px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0;\n}\n"]
                    }] }
        ];
        return TableStickyFooterExample;
    }());

    /**
     * @title Table with sticky header
     */
    var TableStickyHeaderExample = /** @class */ (function () {
        function TableStickyHeaderExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$b;
        }
        TableStickyHeaderExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-sticky-header-example',
                        template: "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>",
                        styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return TableStickyHeaderExample;
    }());
    var ELEMENT_DATA$b = [
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

    var ELEMENT_DATA$c = [
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
     * @title Use of 'mat-text-column' with various configurations of the interface.
     */
    var TableTextColumnAdvancedExample = /** @class */ (function () {
        function TableTextColumnAdvancedExample() {
            var _this = this;
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table.MatTableDataSource(ELEMENT_DATA$c);
            this.decimalPipe = new common.DecimalPipe('en-US');
            /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
            this.getWeight = function (data) { return _this.decimalPipe.transform(data.weight, '1.0-2'); };
        }
        TableTextColumnAdvancedExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-text-column-advanced-example',
                        template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <mat-text-column name=\"position\" [headerText]=\"headerText\"></mat-text-column>\n\n  <!-- Change the header text. -->\n  <mat-text-column name=\"name\" headerText=\"Element\"></mat-text-column>\n\n  <!-- Provide a data accessor for getting the cell text values. -->\n  <mat-text-column name=\"weight\" [dataAccessor]=\"getWeight\"></mat-text-column>\n\n  <!-- Justify the content of the cells to the cell end. -->\n  <mat-text-column name=\"symbol\" justify=\"end\"></mat-text-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                        styles: ["table {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return TableTextColumnAdvancedExample;
    }());

    var ELEMENT_DATA$d = [
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
     * @title Use of `mat-text-column` which can be used for simple columns that only need to display
     * a text value for the header and cells.
     */
    var TableTextColumnExample = /** @class */ (function () {
        function TableTextColumnExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$d;
        }
        TableTextColumnExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-text-column-example',
                        template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <mat-text-column name=\"position\"></mat-text-column>\n  <mat-text-column name=\"name\"></mat-text-column>\n  <mat-text-column name=\"weight\"></mat-text-column>\n  <mat-text-column name=\"symbol\"></mat-text-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                        styles: ["table {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return TableTextColumnExample;
    }());

    var ELEMENT_DATA$e = [
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
     * @title Table example that shows how to wrap a table component for definition and behavior reuse.
     */
    var TableWrappedExample = /** @class */ (function () {
        function TableWrappedExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table.MatTableDataSource(ELEMENT_DATA$e);
        }
        TableWrappedExample.prototype.ngOnInit = function () {
            this.dataSource.sort = this.sort;
        };
        TableWrappedExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-wrapped-example',
                        template: "<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns; \"></tr>\n</wrapper-table>\n",
                        styles: ["table {\n  width: 100%;\n}\n"]
                    }] }
        ];
        TableWrappedExample.propDecorators = {
            sort: [{ type: core.ViewChild, args: ['sort', { static: true },] }]
        };
        return TableWrappedExample;
    }());
    /**
     * Table component that accepts column and row definitions in its content to be registered to the
     * table.
     */
    var WrapperTable = /** @class */ (function () {
        function WrapperTable() {
        }
        WrapperTable.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.columnDefs.forEach(function (columnDef) { return _this.table.addColumnDef(columnDef); });
            this.rowDefs.forEach(function (rowDef) { return _this.table.addRowDef(rowDef); });
            this.headerRowDefs.forEach(function (headerRowDef) { return _this.table.addHeaderRowDef(headerRowDef); });
        };
        WrapperTable.decorators = [
            { type: core.Component, args: [{
                        selector: 'wrapper-table',
                        template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n",
                        styles: ["\n    table {\n      width: 100%;\n    }\n  "]
                    }] }
        ];
        WrapperTable.propDecorators = {
            headerRowDefs: [{ type: core.ContentChildren, args: [table.MatHeaderRowDef,] }],
            rowDefs: [{ type: core.ContentChildren, args: [table.MatRowDef,] }],
            columnDefs: [{ type: core.ContentChildren, args: [table.MatColumnDef,] }],
            table: [{ type: core.ViewChild, args: [table.MatTable, { static: true },] }],
            columns: [{ type: core.Input }],
            dataSource: [{ type: core.Input }]
        };
        return WrapperTable;
    }());

    var EXAMPLES = [
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
    var TableExamplesModule = /** @class */ (function () {
        function TableExamplesModule() {
        }
        TableExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            checkbox.MatCheckboxModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            paginator.MatPaginatorModule,
                            progressSpinner.MatProgressSpinnerModule,
                            sort.MatSortModule,
                            table.MatTableModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return TableExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TableBasicExample = TableBasicExample;
    exports.TableBasicFlexExample = TableBasicFlexExample;
    exports.TableDynamicColumnsExample = TableDynamicColumnsExample;
    exports.TableExpandableRowsExample = TableExpandableRowsExample;
    exports.TableFilteringExample = TableFilteringExample;
    exports.TableFooterRowExample = TableFooterRowExample;
    exports.TableHttpExample = TableHttpExample;
    exports.TableMultipleHeaderFooterExample = TableMultipleHeaderFooterExample;
    exports.TableOverviewExample = TableOverviewExample;
    exports.TablePaginationExample = TablePaginationExample;
    exports.TableRowContextExample = TableRowContextExample;
    exports.TableSelectionExample = TableSelectionExample;
    exports.TableSortingExample = TableSortingExample;
    exports.TableStickyColumnsExample = TableStickyColumnsExample;
    exports.TableStickyComplexExample = TableStickyComplexExample;
    exports.TableStickyComplexFlexExample = TableStickyComplexFlexExample;
    exports.TableStickyFooterExample = TableStickyFooterExample;
    exports.TableStickyHeaderExample = TableStickyHeaderExample;
    exports.TableTextColumnExample = TableTextColumnExample;
    exports.TableTextColumnAdvancedExample = TableTextColumnAdvancedExample;
    exports.TableWrappedExample = TableWrappedExample;
    exports.WrapperTable = WrapperTable;
    exports.TableExamplesModule = TableExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-table.umd.js.map
