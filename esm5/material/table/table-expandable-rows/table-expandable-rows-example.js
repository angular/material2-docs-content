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
var _c0 = ["expandedDetail"];
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
    TableExpandableRowsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableExpandableRowsExample, selectors: [["table-expandable-rows-example"]], decls: 7, vars: 5, consts: [["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "example-element-detail"], [1, "example-element-diagram"], [1, "example-element-position"], [1, "example-element-symbol"], [1, "example-element-name"], [1, "example-element-weight"], [1, "example-element-description"], [1, "example-element-description-attribution"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function TableExpandableRowsExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵproperty("matRowDefColumns", _c0);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(TableExpandableRowsExample, [{
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
    }], null, null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtZXhwYW5kYWJsZS1yb3dzL3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWV4cGFuZGFibGUtcm93cy90YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7SUNHM0UsNkJBQXVDO0lBQUEsWUFBVztJQUFBLGlCQUFLOzs7SUFBaEIsZUFBVztJQUFYLDJDQUFXOzs7SUFDbEQsOEJBQXdDO0lBQUEsWUFBb0I7SUFBQSxpQkFBSzs7OztJQUF6QixlQUFvQjtJQUFwQix3REFBb0I7OztJQUY5RCxnQ0FDRTtJQUFBLHdGQUF1QztJQUN2Qyx3RkFBd0M7SUFDMUMsMEJBQWU7OztJQUhELG9EQUF5Qjs7O0lBT3JDLDhCQUNFO0lBQUEsK0JBRUU7SUFBQSwrQkFDRTtJQUFBLCtCQUF1QztJQUFBLFlBQXFCO0lBQUEsaUJBQU07SUFDbEUsK0JBQXFDO0lBQUEsWUFBbUI7SUFBQSxpQkFBTTtJQUM5RCwrQkFBbUM7SUFBQSxZQUFpQjtJQUFBLGlCQUFNO0lBQzFELCtCQUFxQztJQUFBLGFBQW1CO0lBQUEsaUJBQU07SUFDaEUsaUJBQU07SUFDTixnQ0FDRTtJQUFBLGFBQ0E7SUFB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bVJBRTRFO0tBQzFGLEVBQUU7UUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUUsOExBRUc7S0FDakIsRUFBRTtRQUNELFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxJQUFJO1FBQ1osV0FBVyxFQUFFLDhOQUVzQjtLQUNwQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHdpdGggZXhwYW5kYWJsZSByb3dzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJ30pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRXhwYW5kYWJsZVJvd3NFeGFtcGxlIHtcbiAgZGF0YVNvdXJjZSA9IEVMRU1FTlRfREFUQTtcbiAgY29sdW1uc1RvRGlzcGxheSA9IFsnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJywgJ3Bvc2l0aW9uJ107XG4gIGV4cGFuZGVkRWxlbWVudDogUGVyaW9kaWNFbGVtZW50IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge1xuICAgIHBvc2l0aW9uOiAxLFxuICAgIG5hbWU6ICdIeWRyb2dlbicsXG4gICAgd2VpZ2h0OiAxLjAwNzksXG4gICAgc3ltYm9sOiAnSCcsXG4gICAgZGVzY3JpcHRpb246IGBIeWRyb2dlbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgSCBhbmQgYXRvbWljIG51bWJlciAxLiBXaXRoIGEgc3RhbmRhcmRcbiAgICAgICAgYXRvbWljIHdlaWdodCBvZiAxLjAwOCwgaHlkcm9nZW4gaXMgdGhlIGxpZ2h0ZXN0IGVsZW1lbnQgb24gdGhlIHBlcmlvZGljIHRhYmxlLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiAyLFxuICAgIG5hbWU6ICdIZWxpdW0nLFxuICAgIHdlaWdodDogNC4wMDI2LFxuICAgIHN5bWJvbDogJ0hlJyxcbiAgICBkZXNjcmlwdGlvbjogYEhlbGl1bSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgSGUgYW5kIGF0b21pYyBudW1iZXIgMi4gSXQgaXMgYVxuICAgICAgICBjb2xvcmxlc3MsIG9kb3JsZXNzLCB0YXN0ZWxlc3MsIG5vbi10b3hpYywgaW5lcnQsIG1vbmF0b21pYyBnYXMsIHRoZSBmaXJzdCBpbiB0aGUgbm9ibGUgZ2FzXG4gICAgICAgIGdyb3VwIGluIHRoZSBwZXJpb2RpYyB0YWJsZS4gSXRzIGJvaWxpbmcgcG9pbnQgaXMgdGhlIGxvd2VzdCBhbW9uZyBhbGwgdGhlIGVsZW1lbnRzLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiAzLFxuICAgIG5hbWU6ICdMaXRoaXVtJyxcbiAgICB3ZWlnaHQ6IDYuOTQxLFxuICAgIHN5bWJvbDogJ0xpJyxcbiAgICBkZXNjcmlwdGlvbjogYExpdGhpdW0gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIExpIGFuZCBhdG9taWMgbnVtYmVyIDMuIEl0IGlzIGEgc29mdCxcbiAgICAgICAgc2lsdmVyeS13aGl0ZSBhbGthbGkgbWV0YWwuIFVuZGVyIHN0YW5kYXJkIGNvbmRpdGlvbnMsIGl0IGlzIHRoZSBsaWdodGVzdCBtZXRhbCBhbmQgdGhlXG4gICAgICAgIGxpZ2h0ZXN0IHNvbGlkIGVsZW1lbnQuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDQsXG4gICAgbmFtZTogJ0JlcnlsbGl1bScsXG4gICAgd2VpZ2h0OiA5LjAxMjIsXG4gICAgc3ltYm9sOiAnQmUnLFxuICAgIGRlc2NyaXB0aW9uOiBgQmVyeWxsaXVtIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBCZSBhbmQgYXRvbWljIG51bWJlciA0LiBJdCBpcyBhXG4gICAgICAgIHJlbGF0aXZlbHkgcmFyZSBlbGVtZW50IGluIHRoZSB1bml2ZXJzZSwgdXN1YWxseSBvY2N1cnJpbmcgYXMgYSBwcm9kdWN0IG9mIHRoZSBzcGFsbGF0aW9uIG9mXG4gICAgICAgIGxhcmdlciBhdG9taWMgbnVjbGVpIHRoYXQgaGF2ZSBjb2xsaWRlZCB3aXRoIGNvc21pYyByYXlzLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiA1LFxuICAgIG5hbWU6ICdCb3JvbicsXG4gICAgd2VpZ2h0OiAxMC44MTEsXG4gICAgc3ltYm9sOiAnQicsXG4gICAgZGVzY3JpcHRpb246IGBCb3JvbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgQiBhbmQgYXRvbWljIG51bWJlciA1LiBQcm9kdWNlZCBlbnRpcmVseVxuICAgICAgICBieSBjb3NtaWMgcmF5IHNwYWxsYXRpb24gYW5kIHN1cGVybm92YWUgYW5kIG5vdCBieSBzdGVsbGFyIG51Y2xlb3N5bnRoZXNpcywgaXQgaXMgYVxuICAgICAgICBsb3ctYWJ1bmRhbmNlIGVsZW1lbnQgaW4gdGhlIFNvbGFyIHN5c3RlbSBhbmQgaW4gdGhlIEVhcnRoJ3MgY3J1c3QuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDYsXG4gICAgbmFtZTogJ0NhcmJvbicsXG4gICAgd2VpZ2h0OiAxMi4wMTA3LFxuICAgIHN5bWJvbDogJ0MnLFxuICAgIGRlc2NyaXB0aW9uOiBgQ2FyYm9uIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBDIGFuZCBhdG9taWMgbnVtYmVyIDYuIEl0IGlzIG5vbm1ldGFsbGljXG4gICAgICAgIGFuZCB0ZXRyYXZhbGVudOKAlG1ha2luZyBmb3VyIGVsZWN0cm9ucyBhdmFpbGFibGUgdG8gZm9ybSBjb3ZhbGVudCBjaGVtaWNhbCBib25kcy4gSXQgYmVsb25nc1xuICAgICAgICB0byBncm91cCAxNCBvZiB0aGUgcGVyaW9kaWMgdGFibGUuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDcsXG4gICAgbmFtZTogJ05pdHJvZ2VuJyxcbiAgICB3ZWlnaHQ6IDE0LjAwNjcsXG4gICAgc3ltYm9sOiAnTicsXG4gICAgZGVzY3JpcHRpb246IGBOaXRyb2dlbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTiBhbmQgYXRvbWljIG51bWJlciA3LiBJdCB3YXMgZmlyc3RcbiAgICAgICAgZGlzY292ZXJlZCBhbmQgaXNvbGF0ZWQgYnkgU2NvdHRpc2ggcGh5c2ljaWFuIERhbmllbCBSdXRoZXJmb3JkIGluIDE3NzIuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDgsXG4gICAgbmFtZTogJ094eWdlbicsXG4gICAgd2VpZ2h0OiAxNS45OTk0LFxuICAgIHN5bWJvbDogJ08nLFxuICAgIGRlc2NyaXB0aW9uOiBgT3h5Z2VuIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBPIGFuZCBhdG9taWMgbnVtYmVyIDguIEl0IGlzIGEgbWVtYmVyIG9mXG4gICAgICAgICB0aGUgY2hhbGNvZ2VuIGdyb3VwIG9uIHRoZSBwZXJpb2RpYyB0YWJsZSwgYSBoaWdobHkgcmVhY3RpdmUgbm9ubWV0YWwsIGFuZCBhbiBveGlkaXppbmdcbiAgICAgICAgIGFnZW50IHRoYXQgcmVhZGlseSBmb3JtcyBveGlkZXMgd2l0aCBtb3N0IGVsZW1lbnRzIGFzIHdlbGwgYXMgd2l0aCBvdGhlciBjb21wb3VuZHMuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDksXG4gICAgbmFtZTogJ0ZsdW9yaW5lJyxcbiAgICB3ZWlnaHQ6IDE4Ljk5ODQsXG4gICAgc3ltYm9sOiAnRicsXG4gICAgZGVzY3JpcHRpb246IGBGbHVvcmluZSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgRiBhbmQgYXRvbWljIG51bWJlciA5LiBJdCBpcyB0aGVcbiAgICAgICAgbGlnaHRlc3QgaGFsb2dlbiBhbmQgZXhpc3RzIGFzIGEgaGlnaGx5IHRveGljIHBhbGUgeWVsbG93IGRpYXRvbWljIGdhcyBhdCBzdGFuZGFyZFxuICAgICAgICBjb25kaXRpb25zLmBcbiAgfSwge1xuICAgIHBvc2l0aW9uOiAxMCxcbiAgICBuYW1lOiAnTmVvbicsXG4gICAgd2VpZ2h0OiAyMC4xNzk3LFxuICAgIHN5bWJvbDogJ05lJyxcbiAgICBkZXNjcmlwdGlvbjogYE5lb24gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIE5lIGFuZCBhdG9taWMgbnVtYmVyIDEwLiBJdCBpcyBhIG5vYmxlIGdhcy5cbiAgICAgICAgTmVvbiBpcyBhIGNvbG9ybGVzcywgb2Rvcmxlc3MsIGluZXJ0IG1vbmF0b21pYyBnYXMgdW5kZXIgc3RhbmRhcmQgY29uZGl0aW9ucywgd2l0aCBhYm91dFxuICAgICAgICB0d28tdGhpcmRzIHRoZSBkZW5zaXR5IG9mIGFpci5gXG4gIH0sXG5dO1xuIiwiPHRhYmxlIG1hdC10YWJsZVxuICAgICAgIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtdWx0aVRlbXBsYXRlRGF0YVJvd3NcbiAgICAgICBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ7e2NvbHVtbn19XCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zVG9EaXNwbGF5XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x1bW59fSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtjb2x1bW5dfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBFeHBhbmRlZCBDb250ZW50IENvbHVtbiAtIFRoZSBkZXRhaWwgcm93IGlzIG1hZGUgdXAgb2YgdGhpcyBvbmUgY29sdW1uIHRoYXQgc3BhbnMgYWNyb3NzIGFsbCBjb2x1bW5zIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImV4cGFuZGVkRGV0YWlsXCI+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIiBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbnNUb0Rpc3BsYXkubGVuZ3RoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LWRldGFpbFwiXG4gICAgICAgICAgIFtAZGV0YWlsRXhwYW5kXT1cImVsZW1lbnQgPT0gZXhwYW5kZWRFbGVtZW50ID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtZGlhZ3JhbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtcG9zaXRpb25cIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1zeW1ib2xcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtbmFtZVwiPiB7e2VsZW1lbnQubmFtZX19IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtd2VpZ2h0XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7e2VsZW1lbnQuZGVzY3JpcHRpb259fVxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uXCI+IC0tIFdpa2lwZWRpYSA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zVG9EaXNwbGF5XCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCBlbGVtZW50OyBjb2x1bW5zOiBjb2x1bW5zVG9EaXNwbGF5O1wiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1yb3dcIlxuICAgICAgW2NsYXNzLmV4YW1wbGUtZXhwYW5kZWQtcm93XT1cImV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudFwiXG4gICAgICAoY2xpY2spPVwiZXhwYW5kZWRFbGVtZW50ID0gZXhwYW5kZWRFbGVtZW50ID09PSBlbGVtZW50ID8gbnVsbCA6IGVsZW1lbnRcIj5cbiAgPC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IFsnZXhwYW5kZWREZXRhaWwnXVwiIGNsYXNzPVwiZXhhbXBsZS1kZXRhaWwtcm93XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=