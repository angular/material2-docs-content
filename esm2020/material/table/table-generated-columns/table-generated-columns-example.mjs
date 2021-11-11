import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
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
export class TableGeneratedColumnsExample {
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
}
TableGeneratedColumnsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: TableGeneratedColumnsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableGeneratedColumnsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: TableGeneratedColumnsExample, selector: "table-generated-columns-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{column.header}}\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      {{column.cell(row)}}\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".demo-table {\n  width: 100%;\n}\n"], components: [{ type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i1.MatCellDef, selector: "[matCellDef]" }, { type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: TableGeneratedColumnsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-generated-columns-example', template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{column.header}}\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      {{column.cell(row)}}\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".demo-table {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy90YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQVN4QyxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVELENBQUM7QUFFRjs7R0FFRztBQU1ILE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFNRSxZQUFPLEdBQUc7WUFDUjtnQkFDRSxTQUFTLEVBQUUsVUFBVTtnQkFDckIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsSUFBSSxFQUFFLENBQUMsT0FBd0IsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQzFEO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxDQUFDLE9BQXdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRTthQUN0RDtZQUNEO2dCQUNFLFNBQVMsRUFBRSxRQUFRO2dCQUNuQixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsSUFBSSxFQUFFLENBQUMsT0FBd0IsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFO2FBQ3hEO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixJQUFJLEVBQUUsQ0FBQyxPQUF3QixFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUU7YUFDeEQ7U0FDRixDQUFDO1FBQ0YsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2RDs7eUhBekJZLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLHVFQzlCekMseWZBYUE7MkZEaUJhLDRCQUE0QjtrQkFMeEMsU0FBUzsrQkFDRSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBjb2x1bW5zIGRlZmluZWQgdXNpbmcgbmdGb3IgaW5zdGVhZCBvZiBzdGF0aWNhbGx5IHdyaXR0ZW4gaW4gdGhlIHRlbXBsYXRlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVHZW5lcmF0ZWRDb2x1bW5zRXhhbXBsZSB7XG4gIGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgY29sdW1uRGVmOiAncG9zaXRpb24nLFxuICAgICAgaGVhZGVyOiAnTm8uJyxcbiAgICAgIGNlbGw6IChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpID0+IGAke2VsZW1lbnQucG9zaXRpb259YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbHVtbkRlZjogJ25hbWUnLFxuICAgICAgaGVhZGVyOiAnTmFtZScsXG4gICAgICBjZWxsOiAoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSA9PiBgJHtlbGVtZW50Lm5hbWV9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbHVtbkRlZjogJ3dlaWdodCcsXG4gICAgICBoZWFkZXI6ICdXZWlnaHQnLFxuICAgICAgY2VsbDogKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkgPT4gYCR7ZWxlbWVudC53ZWlnaHR9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbHVtbkRlZjogJ3N5bWJvbCcsXG4gICAgICBoZWFkZXI6ICdTeW1ib2wnLFxuICAgICAgY2VsbDogKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkgPT4gYCR7ZWxlbWVudC5zeW1ib2x9YCxcbiAgICB9LFxuICBdO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuICBkaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjID0+IGMuY29sdW1uRGVmKTtcbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OCBkZW1vLXRhYmxlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW21hdENvbHVtbkRlZl09XCJjb2x1bW4uY29sdW1uRGVmXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cbiAgICAgIHt7Y29sdW1uLmhlYWRlcn19XG4gICAgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICB7e2NvbHVtbi5jZWxsKHJvdyl9fVxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuIl19