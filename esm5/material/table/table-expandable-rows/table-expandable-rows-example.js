import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
/**
 * @title Table with expandable rows
 */
var TableExpandableRowsExample = /** @class */ (function () {
    function TableExpandableRowsExample() {
        this.dataSource = ELEMENT_DATA;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
    TableExpandableRowsExample = tslib_1.__decorate([
        Component({
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
        })
    ], TableExpandableRowsExample);
    return TableExpandableRowsExample;
}());
export { TableExpandableRowsExample };
var ELEMENT_DATA = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtZXhwYW5kYWJsZS1yb3dzL3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFL0U7O0dBRUc7QUFhSDtJQVpBO1FBYUUsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRTlELENBQUM7SUFKWSwwQkFBMEI7UUFadEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtCQUErQjtZQUV6Qyw2d0RBQWlEO1lBQ2pELFVBQVUsRUFBRTtnQkFDVixPQUFPLENBQUMsY0FBYyxFQUFFO29CQUN0QixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7b0JBQzFELEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7b0JBQ3ZDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztpQkFDdEYsQ0FBQzthQUNIOztTQUNGLENBQUM7T0FDVywwQkFBMEIsQ0FJdEM7SUFBRCxpQ0FBQztDQUFBLEFBSkQsSUFJQztTQUpZLDBCQUEwQjtBQWN2QyxJQUFNLFlBQVksR0FBc0I7SUFDdEM7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUUsNEtBQ3VFO0tBQ3JGLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRSw2UUFFNEU7S0FDMUYsRUFBRTtRQUNELFFBQVEsRUFBRSxDQUFDO1FBQ1gsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sRUFBRSxJQUFJO1FBQ1osV0FBVyxFQUFFLG1OQUVlO0tBQzdCLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLElBQUk7UUFDWixXQUFXLEVBQUUsc1BBRWlEO0tBQy9ELEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRSw0UEFFMkQ7S0FDekUsRUFBRTtRQUNELFFBQVEsRUFBRSxDQUFDO1FBQ1gsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFLHlPQUUwQjtLQUN4QyxFQUFFO1FBQ0QsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFLGtLQUNnRTtLQUM5RSxFQUFFO1FBQ0QsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUUsbVJBRTRFO0tBQzFGLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUUsOExBRUc7S0FDakIsRUFBRTtRQUNELFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxJQUFJO1FBQ1osV0FBVyxFQUFFLDhOQUVzQjtLQUNwQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHdpdGggZXhwYW5kYWJsZSByb3dzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJ30pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRXhwYW5kYWJsZVJvd3NFeGFtcGxlIHtcbiAgZGF0YVNvdXJjZSA9IEVMRU1FTlRfREFUQTtcbiAgY29sdW1uc1RvRGlzcGxheSA9IFsnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJywgJ3Bvc2l0aW9uJ107XG4gIGV4cGFuZGVkRWxlbWVudDogUGVyaW9kaWNFbGVtZW50IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge1xuICAgIHBvc2l0aW9uOiAxLFxuICAgIG5hbWU6ICdIeWRyb2dlbicsXG4gICAgd2VpZ2h0OiAxLjAwNzksXG4gICAgc3ltYm9sOiAnSCcsXG4gICAgZGVzY3JpcHRpb246IGBIeWRyb2dlbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgSCBhbmQgYXRvbWljIG51bWJlciAxLiBXaXRoIGEgc3RhbmRhcmRcbiAgICAgICAgYXRvbWljIHdlaWdodCBvZiAxLjAwOCwgaHlkcm9nZW4gaXMgdGhlIGxpZ2h0ZXN0IGVsZW1lbnQgb24gdGhlIHBlcmlvZGljIHRhYmxlLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiAyLFxuICAgIG5hbWU6ICdIZWxpdW0nLFxuICAgIHdlaWdodDogNC4wMDI2LFxuICAgIHN5bWJvbDogJ0hlJyxcbiAgICBkZXNjcmlwdGlvbjogYEhlbGl1bSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgSGUgYW5kIGF0b21pYyBudW1iZXIgMi4gSXQgaXMgYVxuICAgICAgICBjb2xvcmxlc3MsIG9kb3JsZXNzLCB0YXN0ZWxlc3MsIG5vbi10b3hpYywgaW5lcnQsIG1vbmF0b21pYyBnYXMsIHRoZSBmaXJzdCBpbiB0aGUgbm9ibGUgZ2FzXG4gICAgICAgIGdyb3VwIGluIHRoZSBwZXJpb2RpYyB0YWJsZS4gSXRzIGJvaWxpbmcgcG9pbnQgaXMgdGhlIGxvd2VzdCBhbW9uZyBhbGwgdGhlIGVsZW1lbnRzLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiAzLFxuICAgIG5hbWU6ICdMaXRoaXVtJyxcbiAgICB3ZWlnaHQ6IDYuOTQxLFxuICAgIHN5bWJvbDogJ0xpJyxcbiAgICBkZXNjcmlwdGlvbjogYExpdGhpdW0gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIExpIGFuZCBhdG9taWMgbnVtYmVyIDMuIEl0IGlzIGEgc29mdCxcbiAgICAgICAgc2lsdmVyeS13aGl0ZSBhbGthbGkgbWV0YWwuIFVuZGVyIHN0YW5kYXJkIGNvbmRpdGlvbnMsIGl0IGlzIHRoZSBsaWdodGVzdCBtZXRhbCBhbmQgdGhlXG4gICAgICAgIGxpZ2h0ZXN0IHNvbGlkIGVsZW1lbnQuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDQsXG4gICAgbmFtZTogJ0JlcnlsbGl1bScsXG4gICAgd2VpZ2h0OiA5LjAxMjIsXG4gICAgc3ltYm9sOiAnQmUnLFxuICAgIGRlc2NyaXB0aW9uOiBgQmVyeWxsaXVtIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBCZSBhbmQgYXRvbWljIG51bWJlciA0LiBJdCBpcyBhXG4gICAgICAgIHJlbGF0aXZlbHkgcmFyZSBlbGVtZW50IGluIHRoZSB1bml2ZXJzZSwgdXN1YWxseSBvY2N1cnJpbmcgYXMgYSBwcm9kdWN0IG9mIHRoZSBzcGFsbGF0aW9uIG9mXG4gICAgICAgIGxhcmdlciBhdG9taWMgbnVjbGVpIHRoYXQgaGF2ZSBjb2xsaWRlZCB3aXRoIGNvc21pYyByYXlzLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA1LFxuICAgIG5hbWU6ICdCb3JvbicsXG4gICAgd2VpZ2h0OiAxMC44MTEsXG4gICAgc3ltYm9sOiAnQicsXG4gICAgZGVzY3JpcHRpb246IGBCb3JvbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgQiBhbmQgYXRvbWljIG51bWJlciA1LiBQcm9kdWNlZCBlbnRpcmVseVxuICAgICAgICBieSBjb3NtaWMgcmF5IHNwYWxsYXRpb24gYW5kIHN1cGVybm92YWUgYW5kIG5vdCBieSBzdGVsbGFyIG51Y2xlb3N5bnRoZXNpcywgaXQgaXMgYVxuICAgICAgICBsb3ctYWJ1bmRhbmNlIGVsZW1lbnQgaW4gdGhlIFNvbGFyIHN5c3RlbSBhbmQgaW4gdGhlIEVhcnRoJ3MgY3J1c3QuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDYsXG4gICAgbmFtZTogJ0NhcmJvbicsXG4gICAgd2VpZ2h0OiAxMi4wMTA3LFxuICAgIHN5bWJvbDogJ0MnLFxuICAgIGRlc2NyaXB0aW9uOiBgQ2FyYm9uIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBDIGFuZCBhdG9taWMgbnVtYmVyIDYuIEl0IGlzIG5vbm1ldGFsbGljXG4gICAgICAgIGFuZCB0ZXRyYXZhbGVudOKAlG1ha2luZyBmb3VyIGVsZWN0cm9ucyBhdmFpbGFibGUgdG8gZm9ybSBjb3ZhbGVudCBjaGVtaWNhbCBib25kcy4gSXQgYmVsb25nc1xuICAgICAgICB0byBncm91cCAxNCBvZiB0aGUgcGVyaW9kaWMgdGFibGUuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDcsXG4gICAgbmFtZTogJ05pdHJvZ2VuJyxcbiAgICB3ZWlnaHQ6IDE0LjAwNjcsXG4gICAgc3ltYm9sOiAnTicsXG4gICAgZGVzY3JpcHRpb246IGBOaXRyb2dlbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTiBhbmQgYXRvbWljIG51bWJlciA3LiBJdCB3YXMgZmlyc3RcbiAgICAgICAgZGlzY292ZXJlZCBhbmQgaXNvbGF0ZWQgYnkgU2NvdHRpc2ggcGh5c2ljaWFuIERhbmllbCBSdXRoZXJmb3JkIGluIDE3NzIuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDgsXG4gICAgbmFtZTogJ094eWdlbicsXG4gICAgd2VpZ2h0OiAxNS45OTk0LFxuICAgIHN5bWJvbDogJ08nLFxuICAgIGRlc2NyaXB0aW9uOiBgT3h5Z2VuIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBPIGFuZCBhdG9taWMgbnVtYmVyIDguIEl0IGlzIGEgbWVtYmVyIG9mXG4gICAgICAgICB0aGUgY2hhbGNvZ2VuIGdyb3VwIG9uIHRoZSBwZXJpb2RpYyB0YWJsZSwgYSBoaWdobHkgcmVhY3RpdmUgbm9ubWV0YWwsIGFuZCBhbiBveGlkaXppbmdcbiAgICAgICAgIGFnZW50IHRoYXQgcmVhZGlseSBmb3JtcyBveGlkZXMgd2l0aCBtb3N0IGVsZW1lbnRzIGFzIHdlbGwgYXMgd2l0aCBvdGhlciBjb21wb3VuZHMuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDksXG4gICAgbmFtZTogJ0ZsdW9yaW5lJyxcbiAgICB3ZWlnaHQ6IDE4Ljk5ODQsXG4gICAgc3ltYm9sOiAnRicsXG4gICAgZGVzY3JpcHRpb246IGBGbHVvcmluZSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgRiBhbmQgYXRvbWljIG51bWJlciA5LiBJdCBpcyB0aGVcbiAgICAgICAgbGlnaHRlc3QgaGFsb2dlbiBhbmQgZXhpc3RzIGFzIGEgaGlnaGx5IHRveGljIHBhbGUgeWVsbG93IGRpYXRvbWljIGdhcyBhdCBzdGFuZGFyZFxuICAgICAgICBjb25kaXRpb25zLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiAxMCxcbiAgICBuYW1lOiAnTmVvbicsXG4gICAgd2VpZ2h0OiAyMC4xNzk3LFxuICAgIHN5bWJvbDogJ05lJyxcbiAgICBkZXNjcmlwdGlvbjogYE5lb24gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIE5lIGFuZCBhdG9taWMgbnVtYmVyIDEwLiBJdCBpcyBhIG5vYmxlIGdhcy5cbiAgICAgICAgTmVvbiBpcyBhIGNvbG9ybGVzcywgb2Rvcmxlc3MsIGluZXJ0IG1vbmF0b21pYyBnYXMgdW5kZXIgc3RhbmRhcmQgY29uZGl0aW9ucywgd2l0aCBhYm91dFxuICAgICAgICB0d28tdGhpcmRzIHRoZSBkZW5zaXR5IG9mIGFpci5gXG4gIH0sXG5dO1xuIl19