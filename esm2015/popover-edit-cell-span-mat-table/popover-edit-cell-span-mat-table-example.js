/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';
/**
 * @record
 */
export function Person() { }
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
 * \@title Material Popover Edit spanning multiple columns on a Material data-table
 */
export class PopoverEditCellSpanMatTableExample {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    constructor(iconRegistry, sanitizer) {
        this.displayedColumns = ['id', 'firstName', 'middleName', 'lastName'];
        this.dataSource = new ExampleDataSource();
        this.preservedValues = new WeakMap();
        iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/edit-icon.svg'));
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
PopoverEditCellSpanMatTableExample.decorators = [
    { type: Component, args: [{
                selector: 'popover-edit-cell-span-mat-table-example',
                template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <ng-template #nameEdit let-ctx>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [matEditLensPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (matEditLensPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div mat-edit-content class=\"example-input-container\">\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n                [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n          </mat-form-field>\n        </div>\n\n        <div mat-edit-actions>\n          <button mat-button type=\"submit\">Confirm</button>\n          <button mat-button cdkEditRevert>Revert</button>\n          <button mat-button cdkEditClose>Close</button>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let person\"> {{person.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef> First Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [matPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"middleName\">\n    <th mat-header-cell *matHeaderCellDef> Middle Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [matPopoverEditColspan]=\"{before:1 , after: 1}\">\n      {{person.middleName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef> Last Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [matPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container mat-form-field {\n  flex: 1;\n}\n"]
            }] }
];
/** @nocollapse */
PopoverEditCellSpanMatTableExample.ctorParameters = () => [
    { type: MatIconRegistry },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.displayedColumns;
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.dataSource;
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.preservedValues;
}
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
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(PERSON_DATA);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7QUFFakQsNEJBS0M7OztJQUpDLG9CQUFXOztJQUNYLDJCQUFrQjs7SUFDbEIsNEJBQW1COztJQUNuQiwwQkFBaUI7OztNQUdiLFdBQVcsR0FBYTtJQUM1QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7SUFDdkUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO0lBQzdELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztJQUNyRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7SUFDbkUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO0lBQ25FLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQztJQUN4RSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7SUFDbEUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDO0lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztDQUNoRTs7OztBQVVELE1BQU0sT0FBTyxrQ0FBa0M7Ozs7O0lBTTdDLFlBQVksWUFBNkIsRUFBRSxTQUF1QjtRQUxsRSxxQkFBZ0IsR0FBYSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzNFLGVBQVUsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFFNUIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBZSxDQUFDO1FBR3BELFlBQVksQ0FBQyxVQUFVLENBQ25CLE1BQU0sRUFDTixTQUFTLENBQUMsOEJBQThCLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxNQUFjLEVBQUUsQ0FBUztRQUNoQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU87U0FDUjtRQUVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBDQUEwQztnQkFFcEQseTBHQUE0RDs7YUFDN0Q7Ozs7WUE3Qk8sZUFBZTtZQUZmLFlBQVk7Ozs7SUFpQ2xCLDhEQUEyRTs7SUFDM0Usd0RBQXFDOztJQUVyQyw2REFBc0Q7Ozs7Ozs7OztBQTBCeEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQWtCO0lBQXpEOzs7OztRQUVFLFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBVyxXQUFXLENBQUMsQ0FBQztJQVFwRCxDQUFDOzs7OztJQUxDLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCOzs7Ozs7SUFSQyxpQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJY29uUmVnaXN0cnl9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbiB7XG4gIGlkOiBudW1iZXI7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBtaWRkbGVOYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBFUlNPTl9EQVRBOiBQZXJzb25bXSA9IFtcbiAge2lkOiAxLCBmaXJzdE5hbWU6ICdUZXJyYScsIG1pZGRsZU5hbWU6ICdNYWR1aW4nLCBsYXN0TmFtZTogJ0JyYW5mb3JkJ30sXG4gIHtpZDogMiwgZmlyc3ROYW1lOiAnTG9ja2UnLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdDb2xlJ30sXG4gIHtpZDogMywgZmlyc3ROYW1lOiAnQ2VsZXMnLCBtaWRkbGVOYW1lOiAnR2VzdGFobCcsIGxhc3ROYW1lOiAnQ2hlcmUnfSxcbiAge2lkOiA0LCBmaXJzdE5hbWU6ICdFZGdhcicsIG1pZGRsZU5hbWU6ICdSb25pJywgbGFzdE5hbWU6ICdGaWdhcm8nfSxcbiAge2lkOiA1LCBmaXJzdE5hbWU6ICdTYWJpbicsIG1pZGRsZU5hbWU6ICdSZW5lJywgbGFzdE5hbWU6ICdGaWdhcm8nfSxcbiAge2lkOiA2LCBmaXJzdE5hbWU6ICdDbHlkZScsIG1pZGRsZU5hbWU6ICdcIlNoYWRvd1wiJywgbGFzdE5hbWU6ICdBcnJvd255J30sXG4gIHtpZDogNywgZmlyc3ROYW1lOiAnU2V0emVyJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnR2FiYmlhbmknfSxcbiAge2lkOiA4LCBmaXJzdE5hbWU6ICdDaWQnLCBtaWRkbGVOYW1lOiAnRGVsIE5vcnRlJywgbGFzdE5hbWU6ICdNYXJxdWV6J30sXG4gIHtpZDogOSwgZmlyc3ROYW1lOiAnTW9nJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnTWNNb29nbGUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIE1hdGVyaWFsIFBvcG92ZXIgRWRpdCBzcGFubmluZyBtdWx0aXBsZSBjb2x1bW5zIG9uIGEgTWF0ZXJpYWwgZGF0YS10YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3BvcG92ZXItZWRpdC1jZWxsLXNwYW4tbWF0LXRhYmxlLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAncG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckVkaXRDZWxsU3Bhbk1hdFRhYmxlRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydpZCcsICdmaXJzdE5hbWUnLCAnbWlkZGxlTmFtZScsICdsYXN0TmFtZSddO1xuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKCk7XG5cbiAgcmVhZG9ubHkgcHJlc2VydmVkVmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyc29uLCBhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoaWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnksIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgaWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oXG4gICAgICAgICdlZGl0JyxcbiAgICAgICAgc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnYXNzZXRzL2ltZy9leGFtcGxlcy9lZGl0LWljb24uc3ZnJykpO1xuICB9XG5cbiAgb25TdWJtaXQocGVyc29uOiBQZXJzb24sIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBlcnNvbi5maXJzdE5hbWUgPSBmLnZhbHVlWydmaXJzdE5hbWUnXTtcbiAgICBwZXJzb24ubWlkZGxlTmFtZSA9IGYudmFsdWVbJ21pZGRsZU5hbWUnXTtcbiAgICBwZXJzb24ubGFzdE5hbWUgPSBmLnZhbHVlWydsYXN0TmFtZSddO1xuICB9XG59XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgdG8gcHJvdmlkZSB3aGF0IGRhdGEgc2hvdWxkIGJlIHJlbmRlcmVkIGluIHRoZSB0YWJsZS4gTm90ZSB0aGF0IHRoZSBkYXRhIHNvdXJjZVxuICogY2FuIHJldHJpZXZlIGl0cyBkYXRhIGluIGFueSB3YXkuIEluIHRoaXMgY2FzZSwgdGhlIGRhdGEgc291cmNlIGlzIHByb3ZpZGVkIGEgcmVmZXJlbmNlXG4gKiB0byBhIGNvbW1vbiBkYXRhIGJhc2UsIEV4YW1wbGVEYXRhYmFzZS4gSXQgaXMgbm90IHRoZSBkYXRhIHNvdXJjZSdzIHJlc3BvbnNpYmlsaXR5IHRvIG1hbmFnZVxuICogdGhlIHVuZGVybHlpbmcgZGF0YS4gSW5zdGVhZCwgaXQgb25seSBuZWVkcyB0byB0YWtlIHRoZSBkYXRhIGFuZCBzZW5kIHRoZSB0YWJsZSBleGFjdGx5IHdoYXRcbiAqIHNob3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxQZXJzb24+IHtcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xuICBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQZXJzb25bXT4oUEVSU09OX0RBVEEpO1xuXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcnNvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxufVxuIl19