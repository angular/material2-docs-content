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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtZXhwYW5kYWJsZS1yb3dzL3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUUvRTs7R0FFRztBQUNIO0lBQUE7UUFhRSxlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFOUQsQ0FBQzs7Z0JBaEJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUV6Qyw2d0RBQWlEO29CQUNqRCxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGNBQWMsRUFBRTs0QkFDdEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDOzRCQUMxRCxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDOzRCQUN2QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7eUJBQ3RGLENBQUM7cUJBQ0g7O2lCQUNGOztJQUtELGlDQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FKWSwwQkFBMEI7QUFjdkMsSUFBTSxZQUFZLEdBQXNCO0lBQ3RDO1FBQ0UsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFLDRLQUN1RTtLQUNyRixFQUFFO1FBQ0QsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLElBQUk7UUFDWixXQUFXLEVBQUUsNlFBRTRFO0tBQzFGLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLEtBQUs7UUFDYixNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRSxtTkFFZTtLQUM3QixFQUFFO1FBQ0QsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxJQUFJO1FBQ1osV0FBVyxFQUFFLHNQQUVpRDtLQUMvRCxFQUFFO1FBQ0QsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUUsNFBBRTJEO0tBQ3pFLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRSx5T0FFMEI7S0FDeEMsRUFBRTtRQUNELFFBQVEsRUFBRSxDQUFDO1FBQ1gsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRSxrS0FDZ0U7S0FDOUUsRUFBRTtRQUNELFFBQVEsRUFBRSxDQUFDO1FBQ1gsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFLG1SQUU0RTtLQUMxRixFQUFFO1FBQ0QsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFLDhMQUVHO0tBQ2pCLEVBQUU7UUFDRCxRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRSw4TkFFc0I7S0FDcEM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIGV4cGFuZGFibGUgcm93c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZS5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RldGFpbEV4cGFuZCcsIFtcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCd9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUV4cGFuZGFibGVSb3dzRXhhbXBsZSB7XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG4gIGNvbHVtbnNUb0Rpc3BsYXkgPSBbJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCcsICdwb3NpdGlvbiddO1xuICBleHBhbmRlZEVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtcbiAgICBwb3NpdGlvbjogMSxcbiAgICBuYW1lOiAnSHlkcm9nZW4nLFxuICAgIHdlaWdodDogMS4wMDc5LFxuICAgIHN5bWJvbDogJ0gnLFxuICAgIGRlc2NyaXB0aW9uOiBgSHlkcm9nZW4gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEggYW5kIGF0b21pYyBudW1iZXIgMS4gV2l0aCBhIHN0YW5kYXJkXG4gICAgICAgIGF0b21pYyB3ZWlnaHQgb2YgMS4wMDgsIGh5ZHJvZ2VuIGlzIHRoZSBsaWdodGVzdCBlbGVtZW50IG9uIHRoZSBwZXJpb2RpYyB0YWJsZS5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogMixcbiAgICBuYW1lOiAnSGVsaXVtJyxcbiAgICB3ZWlnaHQ6IDQuMDAyNixcbiAgICBzeW1ib2w6ICdIZScsXG4gICAgZGVzY3JpcHRpb246IGBIZWxpdW0gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEhlIGFuZCBhdG9taWMgbnVtYmVyIDIuIEl0IGlzIGFcbiAgICAgICAgY29sb3JsZXNzLCBvZG9ybGVzcywgdGFzdGVsZXNzLCBub24tdG94aWMsIGluZXJ0LCBtb25hdG9taWMgZ2FzLCB0aGUgZmlyc3QgaW4gdGhlIG5vYmxlIGdhc1xuICAgICAgICBncm91cCBpbiB0aGUgcGVyaW9kaWMgdGFibGUuIEl0cyBib2lsaW5nIHBvaW50IGlzIHRoZSBsb3dlc3QgYW1vbmcgYWxsIHRoZSBlbGVtZW50cy5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogMyxcbiAgICBuYW1lOiAnTGl0aGl1bScsXG4gICAgd2VpZ2h0OiA2Ljk0MSxcbiAgICBzeW1ib2w6ICdMaScsXG4gICAgZGVzY3JpcHRpb246IGBMaXRoaXVtIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBMaSBhbmQgYXRvbWljIG51bWJlciAzLiBJdCBpcyBhIHNvZnQsXG4gICAgICAgIHNpbHZlcnktd2hpdGUgYWxrYWxpIG1ldGFsLiBVbmRlciBzdGFuZGFyZCBjb25kaXRpb25zLCBpdCBpcyB0aGUgbGlnaHRlc3QgbWV0YWwgYW5kIHRoZVxuICAgICAgICBsaWdodGVzdCBzb2xpZCBlbGVtZW50LmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA0LFxuICAgIG5hbWU6ICdCZXJ5bGxpdW0nLFxuICAgIHdlaWdodDogOS4wMTIyLFxuICAgIHN5bWJvbDogJ0JlJyxcbiAgICBkZXNjcmlwdGlvbjogYEJlcnlsbGl1bSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgQmUgYW5kIGF0b21pYyBudW1iZXIgNC4gSXQgaXMgYVxuICAgICAgICByZWxhdGl2ZWx5IHJhcmUgZWxlbWVudCBpbiB0aGUgdW5pdmVyc2UsIHVzdWFsbHkgb2NjdXJyaW5nIGFzIGEgcHJvZHVjdCBvZiB0aGUgc3BhbGxhdGlvbiBvZlxuICAgICAgICBsYXJnZXIgYXRvbWljIG51Y2xlaSB0aGF0IGhhdmUgY29sbGlkZWQgd2l0aCBjb3NtaWMgcmF5cy5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogNSxcbiAgICBuYW1lOiAnQm9yb24nLFxuICAgIHdlaWdodDogMTAuODExLFxuICAgIHN5bWJvbDogJ0InLFxuICAgIGRlc2NyaXB0aW9uOiBgQm9yb24gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEIgYW5kIGF0b21pYyBudW1iZXIgNS4gUHJvZHVjZWQgZW50aXJlbHlcbiAgICAgICAgYnkgY29zbWljIHJheSBzcGFsbGF0aW9uIGFuZCBzdXBlcm5vdmFlIGFuZCBub3QgYnkgc3RlbGxhciBudWNsZW9zeW50aGVzaXMsIGl0IGlzIGFcbiAgICAgICAgbG93LWFidW5kYW5jZSBlbGVtZW50IGluIHRoZSBTb2xhciBzeXN0ZW0gYW5kIGluIHRoZSBFYXJ0aCdzIGNydXN0LmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA2LFxuICAgIG5hbWU6ICdDYXJib24nLFxuICAgIHdlaWdodDogMTIuMDEwNyxcbiAgICBzeW1ib2w6ICdDJyxcbiAgICBkZXNjcmlwdGlvbjogYENhcmJvbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgQyBhbmQgYXRvbWljIG51bWJlciA2LiBJdCBpcyBub25tZXRhbGxpY1xuICAgICAgICBhbmQgdGV0cmF2YWxlbnTigJRtYWtpbmcgZm91ciBlbGVjdHJvbnMgYXZhaWxhYmxlIHRvIGZvcm0gY292YWxlbnQgY2hlbWljYWwgYm9uZHMuIEl0IGJlbG9uZ3NcbiAgICAgICAgdG8gZ3JvdXAgMTQgb2YgdGhlIHBlcmlvZGljIHRhYmxlLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA3LFxuICAgIG5hbWU6ICdOaXRyb2dlbicsXG4gICAgd2VpZ2h0OiAxNC4wMDY3LFxuICAgIHN5bWJvbDogJ04nLFxuICAgIGRlc2NyaXB0aW9uOiBgTml0cm9nZW4gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIE4gYW5kIGF0b21pYyBudW1iZXIgNy4gSXQgd2FzIGZpcnN0XG4gICAgICAgIGRpc2NvdmVyZWQgYW5kIGlzb2xhdGVkIGJ5IFNjb3R0aXNoIHBoeXNpY2lhbiBEYW5pZWwgUnV0aGVyZm9yZCBpbiAxNzcyLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA4LFxuICAgIG5hbWU6ICdPeHlnZW4nLFxuICAgIHdlaWdodDogMTUuOTk5NCxcbiAgICBzeW1ib2w6ICdPJyxcbiAgICBkZXNjcmlwdGlvbjogYE94eWdlbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTyBhbmQgYXRvbWljIG51bWJlciA4LiBJdCBpcyBhIG1lbWJlciBvZlxuICAgICAgICAgdGhlIGNoYWxjb2dlbiBncm91cCBvbiB0aGUgcGVyaW9kaWMgdGFibGUsIGEgaGlnaGx5IHJlYWN0aXZlIG5vbm1ldGFsLCBhbmQgYW4gb3hpZGl6aW5nXG4gICAgICAgICBhZ2VudCB0aGF0IHJlYWRpbHkgZm9ybXMgb3hpZGVzIHdpdGggbW9zdCBlbGVtZW50cyBhcyB3ZWxsIGFzIHdpdGggb3RoZXIgY29tcG91bmRzLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA5LFxuICAgIG5hbWU6ICdGbHVvcmluZScsXG4gICAgd2VpZ2h0OiAxOC45OTg0LFxuICAgIHN5bWJvbDogJ0YnLFxuICAgIGRlc2NyaXB0aW9uOiBgRmx1b3JpbmUgaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEYgYW5kIGF0b21pYyBudW1iZXIgOS4gSXQgaXMgdGhlXG4gICAgICAgIGxpZ2h0ZXN0IGhhbG9nZW4gYW5kIGV4aXN0cyBhcyBhIGhpZ2hseSB0b3hpYyBwYWxlIHllbGxvdyBkaWF0b21pYyBnYXMgYXQgc3RhbmRhcmRcbiAgICAgICAgY29uZGl0aW9ucy5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogMTAsXG4gICAgbmFtZTogJ05lb24nLFxuICAgIHdlaWdodDogMjAuMTc5NyxcbiAgICBzeW1ib2w6ICdOZScsXG4gICAgZGVzY3JpcHRpb246IGBOZW9uIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBOZSBhbmQgYXRvbWljIG51bWJlciAxMC4gSXQgaXMgYSBub2JsZSBnYXMuXG4gICAgICAgIE5lb24gaXMgYSBjb2xvcmxlc3MsIG9kb3JsZXNzLCBpbmVydCBtb25hdG9taWMgZ2FzIHVuZGVyIHN0YW5kYXJkIGNvbmRpdGlvbnMsIHdpdGggYWJvdXRcbiAgICAgICAgdHdvLXRoaXJkcyB0aGUgZGVuc2l0eSBvZiBhaXIuYFxuICB9LFxuXTtcbiJdfQ==