import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/table";
const ELEMENT_DATA = [
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
];
/**
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
class TableGeneratedColumnsExample {
    constructor() {
        this.columns = [
            {
                columnDef: 'position',
                header: 'No.',
                cell: (element) => `${element.position}`,
            },
            {
                columnDef: 'name',
                header: 'Name',
                cell: (element) => `${element.name}`,
            },
            {
                columnDef: 'weight',
                header: 'Weight',
                cell: (element) => `${element.weight}`,
            },
            {
                columnDef: 'symbol',
                header: 'Symbol',
                cell: (element) => `${element.symbol}`,
            },
        ];
        this.dataSource = ELEMENT_DATA;
        this.displayedColumns = this.columns.map(c => c.columnDef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TableGeneratedColumnsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: TableGeneratedColumnsExample, selector: "table-generated-columns-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{column.header}}\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      {{column.cell(row)}}\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".demo-table {\n  width: 100%;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
export { TableGeneratedColumnsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TableGeneratedColumnsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-generated-columns-example', template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{column.header}}\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      {{column.cell(row)}}\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".demo-table {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy90YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQVN4QyxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVELENBQUM7QUFFRjs7R0FFRztBQUNILE1BS2EsNEJBQTRCO0lBTHpDO1FBTUUsWUFBTyxHQUFHO1lBQ1I7Z0JBQ0UsU0FBUyxFQUFFLFVBQVU7Z0JBQ3JCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLElBQUksRUFBRSxDQUFDLE9BQXdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTthQUMxRDtZQUNEO2dCQUNFLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsQ0FBQyxPQUF3QixFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUU7YUFDdEQ7WUFDRDtnQkFDRSxTQUFTLEVBQUUsUUFBUTtnQkFDbkIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLElBQUksRUFBRSxDQUFDLE9BQXdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRTthQUN4RDtZQUNEO2dCQUNFLFNBQVMsRUFBRSxRQUFRO2dCQUNuQixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsSUFBSSxFQUFFLENBQUMsT0FBd0IsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFO2FBQ3hEO1NBQ0YsQ0FBQztRQUNGLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDdkQ7cUhBekJZLDRCQUE0Qjt5R0FBNUIsNEJBQTRCLHVFQzlCekMseWZBYUE7O1NEaUJhLDRCQUE0QjtrR0FBNUIsNEJBQTRCO2tCQUx4QyxTQUFTOytCQUNFLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIGNvbHVtbnMgZGVmaW5lZCB1c2luZyBuZ0ZvciBpbnN0ZWFkIG9mIHN0YXRpY2FsbHkgd3JpdHRlbiBpbiB0aGUgdGVtcGxhdGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUdlbmVyYXRlZENvbHVtbnNFeGFtcGxlIHtcbiAgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBjb2x1bW5EZWY6ICdwb3NpdGlvbicsXG4gICAgICBoZWFkZXI6ICdOby4nLFxuICAgICAgY2VsbDogKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkgPT4gYCR7ZWxlbWVudC5wb3NpdGlvbn1gLFxuICAgIH0sXG4gICAge1xuICAgICAgY29sdW1uRGVmOiAnbmFtZScsXG4gICAgICBoZWFkZXI6ICdOYW1lJyxcbiAgICAgIGNlbGw6IChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpID0+IGAke2VsZW1lbnQubmFtZX1gLFxuICAgIH0sXG4gICAge1xuICAgICAgY29sdW1uRGVmOiAnd2VpZ2h0JyxcbiAgICAgIGhlYWRlcjogJ1dlaWdodCcsXG4gICAgICBjZWxsOiAoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSA9PiBgJHtlbGVtZW50LndlaWdodH1gLFxuICAgIH0sXG4gICAge1xuICAgICAgY29sdW1uRGVmOiAnc3ltYm9sJyxcbiAgICAgIGhlYWRlcjogJ1N5bWJvbCcsXG4gICAgICBjZWxsOiAoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSA9PiBgJHtlbGVtZW50LnN5bWJvbH1gLFxuICAgIH0sXG4gIF07XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG4gIGRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGMgPT4gYy5jb2x1bW5EZWYpO1xufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4IGRlbW8tdGFibGVcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbbWF0Q29sdW1uRGVmXT1cImNvbHVtbi5jb2x1bW5EZWZcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAge3tjb2x1bW4uaGVhZGVyfX1cbiAgICA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgIHt7Y29sdW1uLmNlbGwocm93KX19XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=