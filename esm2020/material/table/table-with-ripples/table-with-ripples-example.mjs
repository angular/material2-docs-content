import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material/core";
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
export class TableWithRipplesExample {
    constructor() {
        this.displayedColumns = ['name'];
        this.dataSource = ELEMENT_DATA;
    }
}
TableWithRipplesExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: TableWithRipplesExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableWithRipplesExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.5", type: TableWithRipplesExample, selector: "table-with-ripples-example", ngImport: i0, template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n", styles: [""], components: [{ type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }], directives: [{ type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i1.MatCellDef, selector: "[matCellDef]" }, { type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: TableWithRipplesExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-with-ripples-example', template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n", styles: [""] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDLE1BQU0sWUFBWSxHQUFHO0lBQ25CLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztJQUNsQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO0lBQ2pCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQztJQUNuQixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7SUFDZixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO0lBQ2xCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNoQixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7SUFDbEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0NBQ2YsQ0FBQztBQUVGOztHQUVHO0FBTUgsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLHFCQUFnQixHQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsZUFBVSxHQUFHLFlBQVksQ0FBQztLQUMzQjs7MkhBSFksdUJBQXVCOytHQUF2Qix1QkFBdUIsa0VDdkJwQyxtZEFTQTtrR0RjYSx1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0UsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBFTEVNRU5UX0RBVEEgPSBbXG4gIHtuYW1lOiAnSHlkcm9nZW4nfSxcbiAge25hbWU6ICdIZWxpdW0nfSxcbiAge25hbWU6ICdMaXRoaXVtJ30sXG4gIHtuYW1lOiAnQmVyeWxsaXVtJ30sXG4gIHtuYW1lOiAnQm9yb24nfSxcbiAge25hbWU6ICdDYXJib24nfSxcbiAge25hbWU6ICdOaXRyb2dlbid9LFxuICB7bmFtZTogJ094eWdlbid9LFxuICB7bmFtZTogJ0ZsdW9yaW5lJ30sXG4gIHtuYW1lOiAnTmVvbid9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGVzIHdpdGggTWF0ZXJpYWwgRGVzaWduIHJpcHBsZXMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVdpdGhSaXBwbGVzRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWyduYW1lJ107XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG59XG4iLCI8bWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgPG1hdC1oZWFkZXItY2VsbCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgPG1hdC1jZWxsIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L21hdC1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L21hdC1oZWFkZXItcm93PlxuICA8bWF0LXJvdyBtYXRSaXBwbGUgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC9tYXQtcm93PlxuPC9tYXQtdGFibGU+XG4iXX0=