import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/table";
const ELEMENT_DATA = [
    { name: 'Hydrogen' },
    { name: 'Helium' },
    { name: 'Lithium' },
    { name: 'Beryllium' },
    { name: 'Boron' },
    { name: 'Carbon' },
    { name: 'Nitrogen' },
    { name: 'Oxygen' },
    { name: 'Fluorine' },
    { name: 'Neon' },
];
/**
 * @title Tables with Material Design ripples.
 */
class TableWithRipplesExample {
    constructor() {
        this.displayedColumns = ['name'];
        this.dataSource = ELEMENT_DATA;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TableWithRipplesExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: TableWithRipplesExample, selector: "table-with-ripples-example", ngImport: i0, template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n", dependencies: [{ kind: "directive", type: i1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
export { TableWithRipplesExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TableWithRipplesExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-with-ripples-example', template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDLE1BQU0sWUFBWSxHQUFHO0lBQ25CLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztJQUNsQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO0lBQ2pCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQztJQUNuQixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7SUFDZixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO0lBQ2xCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNoQixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7SUFDbEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0NBQ2YsQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFJYSx1QkFBdUI7SUFKcEM7UUFLRSxxQkFBZ0IsR0FBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLGVBQVUsR0FBRyxZQUFZLENBQUM7S0FDM0I7cUhBSFksdUJBQXVCO3lHQUF2Qix1QkFBdUIsa0VDdEJwQyxtZEFTQTs7U0RhYSx1QkFBdUI7a0dBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzsrQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IEVMRU1FTlRfREFUQSA9IFtcbiAge25hbWU6ICdIeWRyb2dlbid9LFxuICB7bmFtZTogJ0hlbGl1bSd9LFxuICB7bmFtZTogJ0xpdGhpdW0nfSxcbiAge25hbWU6ICdCZXJ5bGxpdW0nfSxcbiAge25hbWU6ICdCb3Jvbid9LFxuICB7bmFtZTogJ0NhcmJvbid9LFxuICB7bmFtZTogJ05pdHJvZ2VuJ30sXG4gIHtuYW1lOiAnT3h5Z2VuJ30sXG4gIHtuYW1lOiAnRmx1b3JpbmUnfSxcbiAge25hbWU6ICdOZW9uJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZXMgd2l0aCBNYXRlcmlhbCBEZXNpZ24gcmlwcGxlcy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVdpdGhSaXBwbGVzRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWyduYW1lJ107XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG59XG4iLCI8bWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgPG1hdC1oZWFkZXItY2VsbCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgPG1hdC1jZWxsIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L21hdC1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L21hdC1oZWFkZXItcm93PlxuICA8bWF0LXJvdyBtYXRSaXBwbGUgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC9tYXQtcm93PlxuPC9tYXQtdGFibGU+XG4iXX0=