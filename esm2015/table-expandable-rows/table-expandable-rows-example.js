/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
/**
 * \@title Table with expandable rows
 */
export class TableExpandableRowsExample {
    constructor() {
        this.dataSource = ELEMENT_DATA;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
}
TableExpandableRowsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-expandable-rows-example',
                template: "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n",
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
                styles: ["table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n"]
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
export function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
    /** @type {?} */
    PeriodicElement.prototype.description;
}
/** @type {?} */
const ELEMENT_DATA = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdGFibGUtZXhwYW5kYWJsZS1yb3dzL3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFpQi9FLE1BQU0sT0FBTywwQkFBMEI7SUFadkM7UUFhRSxlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFOUQsQ0FBQzs7O1lBaEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUV6Qyw2d0RBQWlEO2dCQUNqRCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDdEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7d0JBQzNFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7d0JBQ3ZDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztxQkFDdEYsQ0FBQztpQkFDSDs7YUFDRjs7OztJQUVDLGdEQUEwQjs7SUFDMUIsc0RBQTREOztJQUM1RCxxREFBd0M7Ozs7O0FBRzFDLHFDQU1DOzs7SUFMQywrQkFBYTs7SUFDYixtQ0FBaUI7O0lBQ2pCLGlDQUFlOztJQUNmLGlDQUFlOztJQUNmLHNDQUFvQjs7O01BR2hCLFlBQVksR0FBc0I7SUFDdEM7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUU7d0ZBQ3VFO0tBQ3JGLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRTs7NkZBRTRFO0tBQzFGLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLEtBQUs7UUFDYixNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRTs7Z0NBRWU7S0FDN0IsRUFBRTtRQUNELFFBQVEsRUFBRSxDQUFDO1FBQ1gsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRTs7a0VBRWlEO0tBQy9ELEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRTs7NEVBRTJEO0tBQ3pFLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRTs7MkNBRTBCO0tBQ3hDLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUU7aUZBQ2dFO0tBQzlFLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRTs7NkZBRTRFO0tBQzFGLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUU7O29CQUVHO0tBQ2pCLEVBQUU7UUFDRCxRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRTs7dUNBRXNCO0tBQ3BDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHdpdGggZXhwYW5kYWJsZSByb3dzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgZGlzcGxheTogJ25vbmUnfSkpLFxuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoe2hlaWdodDogJyonfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVFeHBhbmRhYmxlUm93c0V4YW1wbGUge1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuICBjb2x1bW5zVG9EaXNwbGF5ID0gWyduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnLCAncG9zaXRpb24nXTtcbiAgZXhwYW5kZWRFbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7XG4gICAgcG9zaXRpb246IDEsXG4gICAgbmFtZTogJ0h5ZHJvZ2VuJyxcbiAgICB3ZWlnaHQ6IDEuMDA3OSxcbiAgICBzeW1ib2w6ICdIJyxcbiAgICBkZXNjcmlwdGlvbjogYEh5ZHJvZ2VuIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBIIGFuZCBhdG9taWMgbnVtYmVyIDEuIFdpdGggYSBzdGFuZGFyZFxuICAgICAgICBhdG9taWMgd2VpZ2h0IG9mIDEuMDA4LCBoeWRyb2dlbiBpcyB0aGUgbGlnaHRlc3QgZWxlbWVudCBvbiB0aGUgcGVyaW9kaWMgdGFibGUuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDIsXG4gICAgbmFtZTogJ0hlbGl1bScsXG4gICAgd2VpZ2h0OiA0LjAwMjYsXG4gICAgc3ltYm9sOiAnSGUnLFxuICAgIGRlc2NyaXB0aW9uOiBgSGVsaXVtIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBIZSBhbmQgYXRvbWljIG51bWJlciAyLiBJdCBpcyBhXG4gICAgICAgIGNvbG9ybGVzcywgb2Rvcmxlc3MsIHRhc3RlbGVzcywgbm9uLXRveGljLCBpbmVydCwgbW9uYXRvbWljIGdhcywgdGhlIGZpcnN0IGluIHRoZSBub2JsZSBnYXNcbiAgICAgICAgZ3JvdXAgaW4gdGhlIHBlcmlvZGljIHRhYmxlLiBJdHMgYm9pbGluZyBwb2ludCBpcyB0aGUgbG93ZXN0IGFtb25nIGFsbCB0aGUgZWxlbWVudHMuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDMsXG4gICAgbmFtZTogJ0xpdGhpdW0nLFxuICAgIHdlaWdodDogNi45NDEsXG4gICAgc3ltYm9sOiAnTGknLFxuICAgIGRlc2NyaXB0aW9uOiBgTGl0aGl1bSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTGkgYW5kIGF0b21pYyBudW1iZXIgMy4gSXQgaXMgYSBzb2Z0LFxuICAgICAgICBzaWx2ZXJ5LXdoaXRlIGFsa2FsaSBtZXRhbC4gVW5kZXIgc3RhbmRhcmQgY29uZGl0aW9ucywgaXQgaXMgdGhlIGxpZ2h0ZXN0IG1ldGFsIGFuZCB0aGVcbiAgICAgICAgbGlnaHRlc3Qgc29saWQgZWxlbWVudC5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogNCxcbiAgICBuYW1lOiAnQmVyeWxsaXVtJyxcbiAgICB3ZWlnaHQ6IDkuMDEyMixcbiAgICBzeW1ib2w6ICdCZScsXG4gICAgZGVzY3JpcHRpb246IGBCZXJ5bGxpdW0gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEJlIGFuZCBhdG9taWMgbnVtYmVyIDQuIEl0IGlzIGFcbiAgICAgICAgcmVsYXRpdmVseSByYXJlIGVsZW1lbnQgaW4gdGhlIHVuaXZlcnNlLCB1c3VhbGx5IG9jY3VycmluZyBhcyBhIHByb2R1Y3Qgb2YgdGhlIHNwYWxsYXRpb24gb2ZcbiAgICAgICAgbGFyZ2VyIGF0b21pYyBudWNsZWkgdGhhdCBoYXZlIGNvbGxpZGVkIHdpdGggY29zbWljIHJheXMuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDUsXG4gICAgbmFtZTogJ0Jvcm9uJyxcbiAgICB3ZWlnaHQ6IDEwLjgxMSxcbiAgICBzeW1ib2w6ICdCJyxcbiAgICBkZXNjcmlwdGlvbjogYEJvcm9uIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBCIGFuZCBhdG9taWMgbnVtYmVyIDUuIFByb2R1Y2VkIGVudGlyZWx5XG4gICAgICAgIGJ5IGNvc21pYyByYXkgc3BhbGxhdGlvbiBhbmQgc3VwZXJub3ZhZSBhbmQgbm90IGJ5IHN0ZWxsYXIgbnVjbGVvc3ludGhlc2lzLCBpdCBpcyBhXG4gICAgICAgIGxvdy1hYnVuZGFuY2UgZWxlbWVudCBpbiB0aGUgU29sYXIgc3lzdGVtIGFuZCBpbiB0aGUgRWFydGgncyBjcnVzdC5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogNixcbiAgICBuYW1lOiAnQ2FyYm9uJyxcbiAgICB3ZWlnaHQ6IDEyLjAxMDcsXG4gICAgc3ltYm9sOiAnQycsXG4gICAgZGVzY3JpcHRpb246IGBDYXJib24gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEMgYW5kIGF0b21pYyBudW1iZXIgNi4gSXQgaXMgbm9ubWV0YWxsaWNcbiAgICAgICAgYW5kIHRldHJhdmFsZW504oCUbWFraW5nIGZvdXIgZWxlY3Ryb25zIGF2YWlsYWJsZSB0byBmb3JtIGNvdmFsZW50IGNoZW1pY2FsIGJvbmRzLiBJdCBiZWxvbmdzXG4gICAgICAgIHRvIGdyb3VwIDE0IG9mIHRoZSBwZXJpb2RpYyB0YWJsZS5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogNyxcbiAgICBuYW1lOiAnTml0cm9nZW4nLFxuICAgIHdlaWdodDogMTQuMDA2NyxcbiAgICBzeW1ib2w6ICdOJyxcbiAgICBkZXNjcmlwdGlvbjogYE5pdHJvZ2VuIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBOIGFuZCBhdG9taWMgbnVtYmVyIDcuIEl0IHdhcyBmaXJzdFxuICAgICAgICBkaXNjb3ZlcmVkIGFuZCBpc29sYXRlZCBieSBTY290dGlzaCBwaHlzaWNpYW4gRGFuaWVsIFJ1dGhlcmZvcmQgaW4gMTc3Mi5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogOCxcbiAgICBuYW1lOiAnT3h5Z2VuJyxcbiAgICB3ZWlnaHQ6IDE1Ljk5OTQsXG4gICAgc3ltYm9sOiAnTycsXG4gICAgZGVzY3JpcHRpb246IGBPeHlnZW4gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIE8gYW5kIGF0b21pYyBudW1iZXIgOC4gSXQgaXMgYSBtZW1iZXIgb2ZcbiAgICAgICAgIHRoZSBjaGFsY29nZW4gZ3JvdXAgb24gdGhlIHBlcmlvZGljIHRhYmxlLCBhIGhpZ2hseSByZWFjdGl2ZSBub25tZXRhbCwgYW5kIGFuIG94aWRpemluZ1xuICAgICAgICAgYWdlbnQgdGhhdCByZWFkaWx5IGZvcm1zIG94aWRlcyB3aXRoIG1vc3QgZWxlbWVudHMgYXMgd2VsbCBhcyB3aXRoIG90aGVyIGNvbXBvdW5kcy5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogOSxcbiAgICBuYW1lOiAnRmx1b3JpbmUnLFxuICAgIHdlaWdodDogMTguOTk4NCxcbiAgICBzeW1ib2w6ICdGJyxcbiAgICBkZXNjcmlwdGlvbjogYEZsdW9yaW5lIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBGIGFuZCBhdG9taWMgbnVtYmVyIDkuIEl0IGlzIHRoZVxuICAgICAgICBsaWdodGVzdCBoYWxvZ2VuIGFuZCBleGlzdHMgYXMgYSBoaWdobHkgdG94aWMgcGFsZSB5ZWxsb3cgZGlhdG9taWMgZ2FzIGF0IHN0YW5kYXJkXG4gICAgICAgIGNvbmRpdGlvbnMuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDEwLFxuICAgIG5hbWU6ICdOZW9uJyxcbiAgICB3ZWlnaHQ6IDIwLjE3OTcsXG4gICAgc3ltYm9sOiAnTmUnLFxuICAgIGRlc2NyaXB0aW9uOiBgTmVvbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTmUgYW5kIGF0b21pYyBudW1iZXIgMTAuIEl0IGlzIGEgbm9ibGUgZ2FzLlxuICAgICAgICBOZW9uIGlzIGEgY29sb3JsZXNzLCBvZG9ybGVzcywgaW5lcnQgbW9uYXRvbWljIGdhcyB1bmRlciBzdGFuZGFyZCBjb25kaXRpb25zLCB3aXRoIGFib3V0XG4gICAgICAgIHR3by10aGlyZHMgdGhlIGRlbnNpdHkgb2YgYWlyLmBcbiAgfSxcbl07XG4iXX0=