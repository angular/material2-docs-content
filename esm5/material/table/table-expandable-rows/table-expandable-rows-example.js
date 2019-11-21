import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableExpandableRowsExample_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r45 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r45, " ");
} }
function TableExpandableRowsExample_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r49 = ctx.$implicit;
    var column_r45 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r49[column_r45], " ");
} }
function TableExpandableRowsExample_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 7);
    i0.ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_th_1_Template, 2, 1, "th", 8);
    i0.ɵɵtemplate(2, TableExpandableRowsExample_ng_container_1_td_2_Template, 2, 1, "td", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r45 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("matColumnDef", column_r45);
} }
function TableExpandableRowsExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 15);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 16);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 17);
    i0.ɵɵtext(12);
    i0.ɵɵelementStart(13, "span", 18);
    i0.ɵɵtext(14, " -- Wikipedia ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r51 = ctx.$implicit;
    var ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵattribute("colspan", ctx_r41.columnsToDisplay.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@detailExpand", element_r51 == ctx_r41.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", element_r51.position, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r51.symbol, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r51.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r51.weight, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r51.description, " ");
} }
function TableExpandableRowsExample_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 19);
} }
function TableExpandableRowsExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    var _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 20);
    i0.ɵɵlistener("click", function TableExpandableRowsExample_tr_5_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r54); var element_r52 = ctx.$implicit; var ctx_r53 = i0.ɵɵnextContext(); return ctx_r53.expandedElement = ctx_r53.expandedElement === element_r52 ? null : element_r52; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r52 = ctx.$implicit;
    var ctx_r43 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("example-expanded-row", ctx_r43.expandedElement === element_r52);
} }
function TableExpandableRowsExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
var _c0 = function () { return ["expandedDetail"]; };
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
                    styleUrls: ['table-expandable-rows-example.css'],
                    templateUrl: 'table-expandable-rows-example.html',
                    animations: [
                        trigger('detailExpand', [
                            state('collapsed', style({ height: '0px', minHeight: '0' })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ],
                },] },
    ];
    TableExpandableRowsExample.ɵfac = function TableExpandableRowsExample_Factory(t) { return new (t || TableExpandableRowsExample)(); };
    TableExpandableRowsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableExpandableRowsExample, selectors: [["table-expandable-rows-example"]], decls: 7, vars: 6, consts: [["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "example-element-detail"], [1, "example-element-diagram"], [1, "example-element-position"], [1, "example-element-symbol"], [1, "example-element-name"], [1, "example-element-weight"], [1, "example-element-description"], [1, "example-element-description-attribution"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function TableExpandableRowsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_Template, 3, 1, "ng-container", 1);
            i0.ɵɵelementContainerStart(2, 2);
            i0.ɵɵtemplate(3, TableExpandableRowsExample_td_3_Template, 15, 7, "td", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(4, TableExpandableRowsExample_tr_4_Template, 1, 0, "tr", 4);
            i0.ɵɵtemplate(5, TableExpandableRowsExample_tr_5_Template, 1, 1, "tr", 5);
            i0.ɵɵtemplate(6, TableExpandableRowsExample_tr_6_Template, 1, 0, "tr", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.columnsToDisplay);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matHeaderRowDef", ctx.columnsToDisplay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.columnsToDisplay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(5, _c0));
        } }, directives: [i1.MatTable, i2.NgForOf, i1.MatColumnDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCellDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}"], data: { animation: [
                trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ] } });
    return TableExpandableRowsExample;
}());
export { TableExpandableRowsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableExpandableRowsExample, [{
        type: Component,
        args: [{
                selector: 'table-expandable-rows-example',
                styleUrls: ['table-expandable-rows-example.css'],
                templateUrl: 'table-expandable-rows-example.html',
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            }]
    }], null, null); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1leHBhbmRhYmxlLXJvd3MvdGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1leHBhbmRhYmxlLXJvd3MvdGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0lDRzNFLDZCQUF1QztJQUFBLFlBQVc7SUFBQSxpQkFBSzs7O0lBQWhCLGVBQVc7SUFBWCwyQ0FBVzs7O0lBQ2xELDhCQUF3QztJQUFBLFlBQW9CO0lBQUEsaUJBQUs7Ozs7SUFBekIsZUFBb0I7SUFBcEIsd0RBQW9COzs7SUFGOUQsZ0NBQ0U7SUFBQSx3RkFBdUM7SUFDdkMsd0ZBQXdDO0lBQzFDLDBCQUFlOzs7SUFIRCxvREFBeUI7OztJQU9yQyw4QkFDRTtJQUFBLCtCQUVFO0lBQUEsK0JBQ0U7SUFBQSwrQkFBdUM7SUFBQSxZQUFxQjtJQUFBLGlCQUFNO0lBQ2xFLCtCQUFxQztJQUFBLFlBQW1CO0lBQUEsaUJBQU07SUFDOUQsK0JBQW1DO0lBQUEsWUFBaUI7SUFBQSxpQkFBTTtJQUMxRCwrQkFBcUM7SUFBQSxhQUFtQjtJQUFBLGlCQUFNO0lBQ2hFLGlCQUFNO0lBQ04sZ0NBQ0U7SUFBQSxhQUNB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QUFFLG1SQUU0RTtLQUMxRixFQUFFO1FBQ0QsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFLDhMQUVHO0tBQ2pCLEVBQUU7UUFDRCxRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRSw4TkFFc0I7S0FDcEM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIGV4cGFuZGFibGUgcm93c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZS5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RldGFpbEV4cGFuZCcsIFtcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCd9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUV4cGFuZGFibGVSb3dzRXhhbXBsZSB7XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG4gIGNvbHVtbnNUb0Rpc3BsYXkgPSBbJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCcsICdwb3NpdGlvbiddO1xuICBleHBhbmRlZEVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtcbiAgICBwb3NpdGlvbjogMSxcbiAgICBuYW1lOiAnSHlkcm9nZW4nLFxuICAgIHdlaWdodDogMS4wMDc5LFxuICAgIHN5bWJvbDogJ0gnLFxuICAgIGRlc2NyaXB0aW9uOiBgSHlkcm9nZW4gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEggYW5kIGF0b21pYyBudW1iZXIgMS4gV2l0aCBhIHN0YW5kYXJkXG4gICAgICAgIGF0b21pYyB3ZWlnaHQgb2YgMS4wMDgsIGh5ZHJvZ2VuIGlzIHRoZSBsaWdodGVzdCBlbGVtZW50IG9uIHRoZSBwZXJpb2RpYyB0YWJsZS5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogMixcbiAgICBuYW1lOiAnSGVsaXVtJyxcbiAgICB3ZWlnaHQ6IDQuMDAyNixcbiAgICBzeW1ib2w6ICdIZScsXG4gICAgZGVzY3JpcHRpb246IGBIZWxpdW0gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEhlIGFuZCBhdG9taWMgbnVtYmVyIDIuIEl0IGlzIGFcbiAgICAgICAgY29sb3JsZXNzLCBvZG9ybGVzcywgdGFzdGVsZXNzLCBub24tdG94aWMsIGluZXJ0LCBtb25hdG9taWMgZ2FzLCB0aGUgZmlyc3QgaW4gdGhlIG5vYmxlIGdhc1xuICAgICAgICBncm91cCBpbiB0aGUgcGVyaW9kaWMgdGFibGUuIEl0cyBib2lsaW5nIHBvaW50IGlzIHRoZSBsb3dlc3QgYW1vbmcgYWxsIHRoZSBlbGVtZW50cy5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogMyxcbiAgICBuYW1lOiAnTGl0aGl1bScsXG4gICAgd2VpZ2h0OiA2Ljk0MSxcbiAgICBzeW1ib2w6ICdMaScsXG4gICAgZGVzY3JpcHRpb246IGBMaXRoaXVtIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBMaSBhbmQgYXRvbWljIG51bWJlciAzLiBJdCBpcyBhIHNvZnQsXG4gICAgICAgIHNpbHZlcnktd2hpdGUgYWxrYWxpIG1ldGFsLiBVbmRlciBzdGFuZGFyZCBjb25kaXRpb25zLCBpdCBpcyB0aGUgbGlnaHRlc3QgbWV0YWwgYW5kIHRoZVxuICAgICAgICBsaWdodGVzdCBzb2xpZCBlbGVtZW50LmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA0LFxuICAgIG5hbWU6ICdCZXJ5bGxpdW0nLFxuICAgIHdlaWdodDogOS4wMTIyLFxuICAgIHN5bWJvbDogJ0JlJyxcbiAgICBkZXNjcmlwdGlvbjogYEJlcnlsbGl1bSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgQmUgYW5kIGF0b21pYyBudW1iZXIgNC4gSXQgaXMgYVxuICAgICAgICByZWxhdGl2ZWx5IHJhcmUgZWxlbWVudCBpbiB0aGUgdW5pdmVyc2UsIHVzdWFsbHkgb2NjdXJyaW5nIGFzIGEgcHJvZHVjdCBvZiB0aGUgc3BhbGxhdGlvbiBvZlxuICAgICAgICBsYXJnZXIgYXRvbWljIG51Y2xlaSB0aGF0IGhhdmUgY29sbGlkZWQgd2l0aCBjb3NtaWMgcmF5cy5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogNSxcbiAgICBuYW1lOiAnQm9yb24nLFxuICAgIHdlaWdodDogMTAuODExLFxuICAgIHN5bWJvbDogJ0InLFxuICAgIGRlc2NyaXB0aW9uOiBgQm9yb24gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEIgYW5kIGF0b21pYyBudW1iZXIgNS4gUHJvZHVjZWQgZW50aXJlbHlcbiAgICAgICAgYnkgY29zbWljIHJheSBzcGFsbGF0aW9uIGFuZCBzdXBlcm5vdmFlIGFuZCBub3QgYnkgc3RlbGxhciBudWNsZW9zeW50aGVzaXMsIGl0IGlzIGFcbiAgICAgICAgbG93LWFidW5kYW5jZSBlbGVtZW50IGluIHRoZSBTb2xhciBzeXN0ZW0gYW5kIGluIHRoZSBFYXJ0aCdzIGNydXN0LmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA2LFxuICAgIG5hbWU6ICdDYXJib24nLFxuICAgIHdlaWdodDogMTIuMDEwNyxcbiAgICBzeW1ib2w6ICdDJyxcbiAgICBkZXNjcmlwdGlvbjogYENhcmJvbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgQyBhbmQgYXRvbWljIG51bWJlciA2LiBJdCBpcyBub25tZXRhbGxpY1xuICAgICAgICBhbmQgdGV0cmF2YWxlbnTigJRtYWtpbmcgZm91ciBlbGVjdHJvbnMgYXZhaWxhYmxlIHRvIGZvcm0gY292YWxlbnQgY2hlbWljYWwgYm9uZHMuIEl0IGJlbG9uZ3NcbiAgICAgICAgdG8gZ3JvdXAgMTQgb2YgdGhlIHBlcmlvZGljIHRhYmxlLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA3LFxuICAgIG5hbWU6ICdOaXRyb2dlbicsXG4gICAgd2VpZ2h0OiAxNC4wMDY3LFxuICAgIHN5bWJvbDogJ04nLFxuICAgIGRlc2NyaXB0aW9uOiBgTml0cm9nZW4gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIE4gYW5kIGF0b21pYyBudW1iZXIgNy4gSXQgd2FzIGZpcnN0XG4gICAgICAgIGRpc2NvdmVyZWQgYW5kIGlzb2xhdGVkIGJ5IFNjb3R0aXNoIHBoeXNpY2lhbiBEYW5pZWwgUnV0aGVyZm9yZCBpbiAxNzcyLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA4LFxuICAgIG5hbWU6ICdPeHlnZW4nLFxuICAgIHdlaWdodDogMTUuOTk5NCxcbiAgICBzeW1ib2w6ICdPJyxcbiAgICBkZXNjcmlwdGlvbjogYE94eWdlbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTyBhbmQgYXRvbWljIG51bWJlciA4LiBJdCBpcyBhIG1lbWJlciBvZlxuICAgICAgICAgdGhlIGNoYWxjb2dlbiBncm91cCBvbiB0aGUgcGVyaW9kaWMgdGFibGUsIGEgaGlnaGx5IHJlYWN0aXZlIG5vbm1ldGFsLCBhbmQgYW4gb3hpZGl6aW5nXG4gICAgICAgICBhZ2VudCB0aGF0IHJlYWRpbHkgZm9ybXMgb3hpZGVzIHdpdGggbW9zdCBlbGVtZW50cyBhcyB3ZWxsIGFzIHdpdGggb3RoZXIgY29tcG91bmRzLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA5LFxuICAgIG5hbWU6ICdGbHVvcmluZScsXG4gICAgd2VpZ2h0OiAxOC45OTg0LFxuICAgIHN5bWJvbDogJ0YnLFxuICAgIGRlc2NyaXB0aW9uOiBgRmx1b3JpbmUgaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEYgYW5kIGF0b21pYyBudW1iZXIgOS4gSXQgaXMgdGhlXG4gICAgICAgIGxpZ2h0ZXN0IGhhbG9nZW4gYW5kIGV4aXN0cyBhcyBhIGhpZ2hseSB0b3hpYyBwYWxlIHllbGxvdyBkaWF0b21pYyBnYXMgYXQgc3RhbmRhcmRcbiAgICAgICAgY29uZGl0aW9ucy5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogMTAsXG4gICAgbmFtZTogJ05lb24nLFxuICAgIHdlaWdodDogMjAuMTc5NyxcbiAgICBzeW1ib2w6ICdOZScsXG4gICAgZGVzY3JpcHRpb246IGBOZW9uIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBOZSBhbmQgYXRvbWljIG51bWJlciAxMC4gSXQgaXMgYSBub2JsZSBnYXMuXG4gICAgICAgIE5lb24gaXMgYSBjb2xvcmxlc3MsIG9kb3JsZXNzLCBpbmVydCBtb25hdG9taWMgZ2FzIHVuZGVyIHN0YW5kYXJkIGNvbmRpdGlvbnMsIHdpdGggYWJvdXRcbiAgICAgICAgdHdvLXRoaXJkcyB0aGUgZGVuc2l0eSBvZiBhaXIuYFxuICB9LFxuXTtcbiIsIjx0YWJsZSBtYXQtdGFibGVcbiAgICAgICBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbXVsdGlUZW1wbGF0ZURhdGFSb3dzXG4gICAgICAgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwie3tjb2x1bW59fVwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1RvRGlzcGxheVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7Y29sdW1ufX0gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnRbY29sdW1uXX19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gRXhwYW5kZWQgQ29udGVudCBDb2x1bW4gLSBUaGUgZGV0YWlsIHJvdyBpcyBtYWRlIHVwIG9mIHRoaXMgb25lIGNvbHVtbiB0aGF0IHNwYW5zIGFjcm9zcyBhbGwgY29sdW1ucyAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJleHBhbmRlZERldGFpbFwiPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCIgW2F0dHIuY29sc3Bhbl09XCJjb2x1bW5zVG9EaXNwbGF5Lmxlbmd0aFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1kZXRhaWxcIlxuICAgICAgICAgICBbQGRldGFpbEV4cGFuZF09XCJlbGVtZW50ID09IGV4cGFuZGVkRWxlbWVudCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LWRpYWdyYW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LXBvc2l0aW9uXCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtc3ltYm9sXCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LW5hbWVcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LXdlaWdodFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge3tlbGVtZW50LmRlc2NyaXB0aW9ufX1cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvblwiPiAtLSBXaWtpcGVkaWEgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiY29sdW1uc1RvRGlzcGxheVwiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgZWxlbWVudDsgY29sdW1uczogY29sdW1uc1RvRGlzcGxheTtcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtcm93XCJcbiAgICAgIFtjbGFzcy5leGFtcGxlLWV4cGFuZGVkLXJvd109XCJleHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnRcIlxuICAgICAgKGNsaWNrKT1cImV4cGFuZGVkRWxlbWVudCA9IGV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCA/IG51bGwgOiBlbGVtZW50XCI+XG4gIDwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBbJ2V4cGFuZGVkRGV0YWlsJ11cIiBjbGFzcz1cImV4YW1wbGUtZGV0YWlsLXJvd1wiPjwvdHI+XG48L3RhYmxlPlxuIl19