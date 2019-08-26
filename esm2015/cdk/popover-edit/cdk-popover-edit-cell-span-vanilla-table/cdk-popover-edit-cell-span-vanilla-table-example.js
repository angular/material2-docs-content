/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
 * \@title CDK Popover Edit spanning multiple columns on an HTML data-table
 */
export class CdkPopoverEditCellSpanVanillaTableExample {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9wb3BvdmVyLWVkaXQvY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFHeEMsNEJBS0M7OztJQUpDLG9CQUFXOztJQUNYLDJCQUFrQjs7SUFDbEIsNEJBQW1COztJQUNuQiwwQkFBaUI7OztNQUdiLFdBQVcsR0FBYTtJQUM1QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7SUFDdkUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO0lBQzdELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztJQUNyRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7SUFDbkUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO0lBQ25FLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQztJQUN4RSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7SUFDbEUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDO0lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztDQUNoRTs7OztBQVVELE1BQU0sT0FBTyx5Q0FBeUM7SUFMdEQ7UUFNVyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFlLENBQUM7UUFFN0MsWUFBTyxHQUFHLFdBQVcsQ0FBQztJQVdqQyxDQUFDOzs7Ozs7SUFUQyxRQUFRLENBQUMsTUFBYyxFQUFFLENBQVM7UUFDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFFRCxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrREFBa0Q7Z0JBRTVELHM2RUFBb0U7O2FBQ3JFOzs7O0lBRUMsb0VBQXNEOztJQUV0RCw0REFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbiB7XG4gIGlkOiBudW1iZXI7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBtaWRkbGVOYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBFUlNPTl9EQVRBOiBQZXJzb25bXSA9IFtcbiAge2lkOiAxLCBmaXJzdE5hbWU6ICdUZXJyYScsIG1pZGRsZU5hbWU6ICdNYWR1aW4nLCBsYXN0TmFtZTogJ0JyYW5mb3JkJ30sXG4gIHtpZDogMiwgZmlyc3ROYW1lOiAnTG9ja2UnLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdDb2xlJ30sXG4gIHtpZDogMywgZmlyc3ROYW1lOiAnQ2VsZXMnLCBtaWRkbGVOYW1lOiAnR2VzdGFobCcsIGxhc3ROYW1lOiAnQ2hlcmUnfSxcbiAge2lkOiA0LCBmaXJzdE5hbWU6ICdFZGdhcicsIG1pZGRsZU5hbWU6ICdSb25pJywgbGFzdE5hbWU6ICdGaWdhcm8nfSxcbiAge2lkOiA1LCBmaXJzdE5hbWU6ICdTYWJpbicsIG1pZGRsZU5hbWU6ICdSZW5lJywgbGFzdE5hbWU6ICdGaWdhcm8nfSxcbiAge2lkOiA2LCBmaXJzdE5hbWU6ICdDbHlkZScsIG1pZGRsZU5hbWU6ICdcIlNoYWRvd1wiJywgbGFzdE5hbWU6ICdBcnJvd255J30sXG4gIHtpZDogNywgZmlyc3ROYW1lOiAnU2V0emVyJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnR2FiYmlhbmknfSxcbiAge2lkOiA4LCBmaXJzdE5hbWU6ICdDaWQnLCBtaWRkbGVOYW1lOiAnRGVsIE5vcnRlJywgbGFzdE5hbWU6ICdNYXJxdWV6J30sXG4gIHtpZDogOSwgZmlyc3ROYW1lOiAnTW9nJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnTWNNb29nbGUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIENESyBQb3BvdmVyIEVkaXQgc3Bhbm5pbmcgbXVsdGlwbGUgY29sdW1ucyBvbiBhbiBIVE1MIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlIHtcbiAgcmVhZG9ubHkgcHJlc2VydmVkVmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyc29uLCBhbnk+KCk7XG5cbiAgcmVhZG9ubHkgcGVyc29ucyA9IFBFUlNPTl9EQVRBO1xuXG4gIG9uU3VibWl0KHBlcnNvbjogUGVyc29uLCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwZXJzb24uZmlyc3ROYW1lID0gZi52YWx1ZVsnZmlyc3ROYW1lJ107XG4gICAgcGVyc29uLm1pZGRsZU5hbWUgPSBmLnZhbHVlWydtaWRkbGVOYW1lJ107XG4gICAgcGVyc29uLmxhc3ROYW1lID0gZi52YWx1ZVsnbGFzdE5hbWUnXTtcbiAgfVxufVxuIl19