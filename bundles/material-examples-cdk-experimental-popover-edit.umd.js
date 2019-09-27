(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk-experimental/popover-edit'), require('@angular/cdk/table'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('tslib'), require('@angular/cdk/collections'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/cdk-experimental/popover-edit', ['exports', '@angular/cdk-experimental/popover-edit', '@angular/cdk/table', '@angular/common', '@angular/core', '@angular/forms', 'tslib', '@angular/cdk/collections', 'rxjs'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.cdkExperimental = global.ng.materialExamples.cdkExperimental || {}, global.ng.materialExamples.cdkExperimental.popoverEdit = {}), global.ng.cdkExperimental.popoverEdit, global.ng.cdk.table, global.ng.common, global.ng.core, global.ng.forms, global.tslib, global.ng.cdk.collections, global.rxjs));
}(this, function (exports, popoverEdit, table, common, core, forms, tslib_1, collections, rxjs) { 'use strict';

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
     * @title CDK Popover Edit on a flex cdk-table.
     */
    var CdkPopoverEditCdkTableFlexExample = /** @class */ (function () {
        function CdkPopoverEditCdkTableFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        CdkPopoverEditCdkTableFlexExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditCdkTableFlexExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        CdkPopoverEditCdkTableFlexExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-popover-edit-cdk-table-flex-example',
                        template: "<cdk-table class=\"example-table\" editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n",
                        styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\n.example-table cdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\n.example-table cdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"]
                    }] }
        ];
        return CdkPopoverEditCdkTableFlexExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

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
     * @title CDK Popover Edit on a CDK data-table
     */
    var CdkPopoverEditCdkTableExample = /** @class */ (function () {
        function CdkPopoverEditCdkTableExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$1();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        CdkPopoverEditCdkTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditCdkTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        CdkPopoverEditCdkTableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-popover-edit-cdk-table-example',
                        template: "<table class=\"example-table\" cdk-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert cdkEditClose>Revert and close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                        styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 25%;\n}\n"]
                    }] }
        ];
        return CdkPopoverEditCdkTableExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$1 = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$1);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var PERSON_DATA = [
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
     * @title CDK Popover Edit spanning multiple columns on an HTML data-table
     */
    var CdkPopoverEditCellSpanVanillaTableExample = /** @class */ (function () {
        function CdkPopoverEditCellSpanVanillaTableExample() {
            this.preservedValues = new WeakMap();
            this.persons = PERSON_DATA;
        }
        CdkPopoverEditCellSpanVanillaTableExample.prototype.onSubmit = function (person, f) {
            if (!f.valid) {
                return;
            }
            person.firstName = f.value['firstName'];
            person.middleName = f.value['middleName'];
            person.lastName = f.value['lastName'];
        };
        CdkPopoverEditCellSpanVanillaTableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-popover-edit-cell-span-vanilla-table-example',
                        template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #nameEdit let-ctx>\n    <div style=\"background-color: #ddd; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div class=\"example-input-container\">\n          <input [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          <input [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n              [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          <input [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n        </div>\n        <br>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> First name </th>\n    <th> Middle name </th>\n    <th> Last name </th>\n  </tr>\n  \n  <tr *ngFor=\"let person of persons\">\n    <td> {{person.id}} </td>\n\n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [cdkPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [cdkPopoverEditColspan]=\"{before: 1, after: 1}\">\n      {{person.middleName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [cdkPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </tr>\n</table>\n",
                        styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container input {\n  flex: 1;\n  font-size: 14px;\n}\n"]
                    }] }
        ];
        return CdkPopoverEditCellSpanVanillaTableExample;
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
     * @title CDK Popover Edit with spreadsheet-like configuration on an HTML data-table
     */
    var CdkPopoverEditTabOutVanillaTableExample = /** @class */ (function () {
        function CdkPopoverEditTabOutVanillaTableExample() {
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
            this.elements = ELEMENT_DATA$2;
        }
        CdkPopoverEditTabOutVanillaTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditTabOutVanillaTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        CdkPopoverEditTabOutVanillaTableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-popover-edit-tab-out-vanilla-table-example',
                        template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          cdkEditControlClickOutBehavior=\"submit\"\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> Name </th>\n    <th> Weight </th>\n    <th> Symbol </th>\n  </tr>\n  \n  <tr *ngFor=\"let element of elements\">\n    <td> {{element.position}} </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\" cdkPopoverEditTabOut cdkEditOpen>\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white; width: 100%\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              cdkEditControlClickOutBehavior=\"submit\"\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n          </form>\n        </div>\n      </ng-template>\n    </td>\n\n    <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\"\n        cdkPopoverEditTabOut cdkEditOpen>\n      {{element.weight}}\n    </td>\n\n    <td> {{element.symbol}} </td>\n  </tr>\n</table>\n",
                        styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n"]
                    }] }
        ];
        return CdkPopoverEditTabOutVanillaTableExample;
    }());

    var ELEMENT_DATA$3 = [
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
     * @title CDK Popover Edit on an HTML data-table
     */
    var CdkPopoverEditVanillaTableExample = /** @class */ (function () {
        function CdkPopoverEditVanillaTableExample() {
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
            this.elements = ELEMENT_DATA$3;
        }
        CdkPopoverEditVanillaTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditVanillaTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        CdkPopoverEditVanillaTableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-popover-edit-vanilla-table-example',
                        template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> Name </th>\n    <th> Weight </th>\n    <th> Symbol </th>\n  </tr>\n  \n  <tr *ngFor=\"let element of elements\">\n    <td> {{element.position}} </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white; width: 100%\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n\n    <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n\n    <td> {{element.symbol}} </td>\n  </tr>\n</table>\n",
                        styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n"]
                    }] }
        ];
        return CdkPopoverEditVanillaTableExample;
    }());

    var EXAMPLES = [
        CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample,
    ];
    var CdkPopoverEditExamplesModule = /** @class */ (function () {
        function CdkPopoverEditExamplesModule() {
        }
        CdkPopoverEditExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            popoverEdit.CdkPopoverEditModule,
                            table.CdkTableModule,
                            forms.FormsModule,
                            common.CommonModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CdkPopoverEditExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkPopoverEditCdkTableFlexExample = CdkPopoverEditCdkTableFlexExample;
    exports.CdkPopoverEditCdkTableExample = CdkPopoverEditCdkTableExample;
    exports.CdkPopoverEditCellSpanVanillaTableExample = CdkPopoverEditCellSpanVanillaTableExample;
    exports.CdkPopoverEditTabOutVanillaTableExample = CdkPopoverEditTabOutVanillaTableExample;
    exports.CdkPopoverEditVanillaTableExample = CdkPopoverEditVanillaTableExample;
    exports.CdkPopoverEditExamplesModule = CdkPopoverEditExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-cdk-experimental-popover-edit.umd.js.map
