import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { TableFlexBasicExample } from './table-flex-basic/table-flex-basic-example';
import { TableBasicExample } from './table-basic/table-basic-example';
import { TableDynamicColumnsExample } from './table-dynamic-columns/table-dynamic-columns-example';
import { TableExpandableRowsExample } from './table-expandable-rows/table-expandable-rows-example';
import { TableFilteringExample } from './table-filtering/table-filtering-example';
import { TableFooterRowExample } from './table-footer-row/table-footer-row-example';
import { TableHttpExample } from './table-http/table-http-example';
import { TableMultipleHeaderFooterExample } from './table-multiple-header-footer/table-multiple-header-footer-example';
import { TableOverviewExample } from './table-overview/table-overview-example';
import { TablePaginationExample } from './table-pagination/table-pagination-example';
import { TableRowContextExample } from './table-row-context/table-row-context-example';
import { TableSelectionExample } from './table-selection/table-selection-example';
import { TableSortingExample } from './table-sorting/table-sorting-example';
import { TableStickyColumnsExample } from './table-sticky-columns/table-sticky-columns-example';
import { TableStickyComplexFlexExample } from './table-sticky-complex-flex/table-sticky-complex-flex-example';
import { TableStickyComplexExample } from './table-sticky-complex/table-sticky-complex-example';
import { TableStickyFooterExample } from './table-sticky-footer/table-sticky-footer-example';
import { TableStickyHeaderExample } from './table-sticky-header/table-sticky-header-example';
import { TableTextColumnAdvancedExample } from './table-text-column-advanced/table-text-column-advanced-example';
import { TableTextColumnExample } from './table-text-column/table-text-column-example';
import { TableWrappedExample, WrapperTable } from './table-wrapped/table-wrapped-example';
import { TableReorderableExample } from './table-reorderable/table-reorderable-example';
import { TableRecycleRowsExample } from './table-recycle-rows/table-recycle-rows-example';
import { TableHarnessExample } from './table-harness/table-harness-example';
import { TableWithRipplesExample } from './table-with-ripples/table-with-ripples-example';
import { TableColumnStylingExample } from './table-column-styling/table-column-styling-example';
import { TableRowBindingExample } from './table-row-binding/table-row-binding-example';
import { TableDynamicArrayDataExample } from './table-dynamic-array-data/table-dynamic-array-data-example';
import { TableDynamicObservableDataExample } from './table-dynamic-observable-data/table-dynamic-observable-data-example';
import { TableGeneratedColumnsExample } from './table-generated-columns/table-generated-columns-example';
import * as i0 from "@angular/core";
export { TableBasicExample, TableColumnStylingExample, TableDynamicArrayDataExample, TableDynamicColumnsExample, TableDynamicObservableDataExample, TableExpandableRowsExample, TableFilteringExample, TableFlexBasicExample, TableFooterRowExample, TableGeneratedColumnsExample, TableHarnessExample, TableHttpExample, TableMultipleHeaderFooterExample, TableOverviewExample, TablePaginationExample, TableRecycleRowsExample, TableReorderableExample, TableRowBindingExample, TableRowContextExample, TableSelectionExample, TableSortingExample, TableStickyColumnsExample, TableStickyComplexExample, TableStickyComplexFlexExample, TableStickyFooterExample, TableStickyHeaderExample, TableTextColumnAdvancedExample, TableTextColumnExample, TableWithRipplesExample, TableWrappedExample, WrapperTable, };
const EXAMPLES = [
    TableBasicExample,
    TableColumnStylingExample,
    TableDynamicArrayDataExample,
    TableDynamicColumnsExample,
    TableDynamicObservableDataExample,
    TableExpandableRowsExample,
    TableFilteringExample,
    TableFlexBasicExample,
    TableFooterRowExample,
    TableGeneratedColumnsExample,
    TableHarnessExample,
    TableHttpExample,
    TableMultipleHeaderFooterExample,
    TableOverviewExample,
    TablePaginationExample,
    TableRecycleRowsExample,
    TableReorderableExample,
    TableRowBindingExample,
    TableRowContextExample,
    TableSelectionExample,
    TableSortingExample,
    TableStickyColumnsExample,
    TableStickyComplexExample,
    TableStickyComplexFlexExample,
    TableStickyFooterExample,
    TableStickyHeaderExample,
    TableTextColumnAdvancedExample,
    TableTextColumnExample,
    TableWithRipplesExample,
    TableWrappedExample,
    WrapperTable,
];
export class TableExamplesModule {
}
TableExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TableExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TableExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: TableExamplesModule, declarations: [TableBasicExample,
        TableColumnStylingExample,
        TableDynamicArrayDataExample,
        TableDynamicColumnsExample,
        TableDynamicObservableDataExample,
        TableExpandableRowsExample,
        TableFilteringExample,
        TableFlexBasicExample,
        TableFooterRowExample,
        TableGeneratedColumnsExample,
        TableHarnessExample,
        TableHttpExample,
        TableMultipleHeaderFooterExample,
        TableOverviewExample,
        TablePaginationExample,
        TableRecycleRowsExample,
        TableReorderableExample,
        TableRowBindingExample,
        TableRowContextExample,
        TableSelectionExample,
        TableSortingExample,
        TableStickyColumnsExample,
        TableStickyComplexExample,
        TableStickyComplexFlexExample,
        TableStickyFooterExample,
        TableStickyHeaderExample,
        TableTextColumnAdvancedExample,
        TableTextColumnExample,
        TableWithRipplesExample,
        TableWrappedExample,
        WrapperTable], imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatLegacyInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSortModule,
        MatTableModule,
        CdkTableModule,
        DragDropModule], exports: [TableBasicExample,
        TableColumnStylingExample,
        TableDynamicArrayDataExample,
        TableDynamicColumnsExample,
        TableDynamicObservableDataExample,
        TableExpandableRowsExample,
        TableFilteringExample,
        TableFlexBasicExample,
        TableFooterRowExample,
        TableGeneratedColumnsExample,
        TableHarnessExample,
        TableHttpExample,
        TableMultipleHeaderFooterExample,
        TableOverviewExample,
        TablePaginationExample,
        TableRecycleRowsExample,
        TableReorderableExample,
        TableRowBindingExample,
        TableRowContextExample,
        TableSelectionExample,
        TableSortingExample,
        TableStickyColumnsExample,
        TableStickyComplexExample,
        TableStickyComplexFlexExample,
        TableStickyFooterExample,
        TableStickyHeaderExample,
        TableTextColumnAdvancedExample,
        TableTextColumnExample,
        TableWithRipplesExample,
        TableWrappedExample,
        WrapperTable] });
TableExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TableExamplesModule, imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatLegacyInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSortModule,
        MatTableModule,
        CdkTableModule,
        DragDropModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TableExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatLegacyInputModule,
                        MatPaginatorModule,
                        MatProgressSpinnerModule,
                        MatRippleModule,
                        MatSortModule,
                        MatTableModule,
                        CdkTableModule,
                        DragDropModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFD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O1FBQ3pCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQ0FBZ0M7UUFDaEMsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixZQUFZO2lIQXNCRCxtQkFBbUIsWUFqQjVCLFlBQVk7UUFDWixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QsY0FBYztRQUNkLGNBQWM7MkZBS0wsbUJBQW1CO2tCQW5CL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQix3QkFBd0I7d0JBQ3hCLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UmlwcGxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TGVnYWN5SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1pbnB1dCc7XG5pbXBvcnQge01hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7TWF0U29ydE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge0RyYWdEcm9wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmltcG9ydCB7VGFibGVGbGV4QmFzaWNFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWZsZXgtYmFzaWMvdGFibGUtZmxleC1iYXNpYy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVCYXNpY0V4YW1wbGV9IGZyb20gJy4vdGFibGUtYmFzaWMvdGFibGUtYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRHluYW1pY0NvbHVtbnNFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWR5bmFtaWMtY29sdW1ucy90YWJsZS1keW5hbWljLWNvbHVtbnMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRXhwYW5kYWJsZVJvd3NFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWV4cGFuZGFibGUtcm93cy90YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRmlsdGVyaW5nRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1maWx0ZXJpbmcvdGFibGUtZmlsdGVyaW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUZvb3RlclJvd0V4YW1wbGV9IGZyb20gJy4vdGFibGUtZm9vdGVyLXJvdy90YWJsZS1mb290ZXItcm93LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUh0dHBFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWh0dHAvdGFibGUtaHR0cC1leGFtcGxlJztcbmltcG9ydCB7VGFibGVNdWx0aXBsZUhlYWRlckZvb3RlckV4YW1wbGV9IGZyb20gJy4vdGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVQYWdpbmF0aW9uRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1wYWdpbmF0aW9uL3RhYmxlLXBhZ2luYXRpb24tZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlUm93Q29udGV4dEV4YW1wbGV9IGZyb20gJy4vdGFibGUtcm93LWNvbnRleHQvdGFibGUtcm93LWNvbnRleHQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlU2VsZWN0aW9uRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVNvcnRpbmdFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXNvcnRpbmcvdGFibGUtc29ydGluZy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVTdGlja3lDb2x1bW5zRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1zdGlja3ktY29sdW1ucy90YWJsZS1zdGlja3ktY29sdW1ucy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVTdGlja3lDb21wbGV4RmxleEV4YW1wbGV9IGZyb20gJy4vdGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC90YWJsZS1zdGlja3ktY29tcGxleC1mbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVN0aWNreUNvbXBsZXhFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXN0aWNreS1jb21wbGV4L3RhYmxlLXN0aWNreS1jb21wbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVN0aWNreUZvb3RlckV4YW1wbGV9IGZyb20gJy4vdGFibGUtc3RpY2t5LWZvb3Rlci90YWJsZS1zdGlja3ktZm9vdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVN0aWNreUhlYWRlckV4YW1wbGV9IGZyb20gJy4vdGFibGUtc3RpY2t5LWhlYWRlci90YWJsZS1zdGlja3ktaGVhZGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVRleHRDb2x1bW5BZHZhbmNlZEV4YW1wbGV9IGZyb20gJy4vdGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQvdGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlVGV4dENvbHVtbkV4YW1wbGV9IGZyb20gJy4vdGFibGUtdGV4dC1jb2x1bW4vdGFibGUtdGV4dC1jb2x1bW4tZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlV3JhcHBlZEV4YW1wbGUsIFdyYXBwZXJUYWJsZX0gZnJvbSAnLi90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlUmVvcmRlcmFibGVFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXJlb3JkZXJhYmxlL3RhYmxlLXJlb3JkZXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1yZWN5Y2xlLXJvd3MvdGFibGUtcmVjeWNsZS1yb3dzLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWhhcm5lc3MvdGFibGUtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVXaXRoUmlwcGxlc0V4YW1wbGV9IGZyb20gJy4vdGFibGUtd2l0aC1yaXBwbGVzL3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVDb2x1bW5TdHlsaW5nRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc3R5bGluZy90YWJsZS1jb2x1bW4tc3R5bGluZy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVSb3dCaW5kaW5nRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1yb3ctYmluZGluZy90YWJsZS1yb3ctYmluZGluZy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVEeW5hbWljQXJyYXlEYXRhRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1keW5hbWljLWFycmF5LWRhdGEvdGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUR5bmFtaWNPYnNlcnZhYmxlRGF0YUV4YW1wbGV9IGZyb20gJy4vdGFibGUtZHluYW1pYy1vYnNlcnZhYmxlLWRhdGEvdGFibGUtZHluYW1pYy1vYnNlcnZhYmxlLWRhdGEtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlR2VuZXJhdGVkQ29sdW1uc0V4YW1wbGV9IGZyb20gJy4vdGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMvdGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFRhYmxlQmFzaWNFeGFtcGxlLFxuICBUYWJsZUNvbHVtblN0eWxpbmdFeGFtcGxlLFxuICBUYWJsZUR5bmFtaWNBcnJheURhdGFFeGFtcGxlLFxuICBUYWJsZUR5bmFtaWNDb2x1bW5zRXhhbXBsZSxcbiAgVGFibGVEeW5hbWljT2JzZXJ2YWJsZURhdGFFeGFtcGxlLFxuICBUYWJsZUV4cGFuZGFibGVSb3dzRXhhbXBsZSxcbiAgVGFibGVGaWx0ZXJpbmdFeGFtcGxlLFxuICBUYWJsZUZsZXhCYXNpY0V4YW1wbGUsXG4gIFRhYmxlRm9vdGVyUm93RXhhbXBsZSxcbiAgVGFibGVHZW5lcmF0ZWRDb2x1bW5zRXhhbXBsZSxcbiAgVGFibGVIYXJuZXNzRXhhbXBsZSxcbiAgVGFibGVIdHRwRXhhbXBsZSxcbiAgVGFibGVNdWx0aXBsZUhlYWRlckZvb3RlckV4YW1wbGUsXG4gIFRhYmxlT3ZlcnZpZXdFeGFtcGxlLFxuICBUYWJsZVBhZ2luYXRpb25FeGFtcGxlLFxuICBUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZSxcbiAgVGFibGVSZW9yZGVyYWJsZUV4YW1wbGUsXG4gIFRhYmxlUm93QmluZGluZ0V4YW1wbGUsXG4gIFRhYmxlUm93Q29udGV4dEV4YW1wbGUsXG4gIFRhYmxlU2VsZWN0aW9uRXhhbXBsZSxcbiAgVGFibGVTb3J0aW5nRXhhbXBsZSxcbiAgVGFibGVTdGlja3lDb2x1bW5zRXhhbXBsZSxcbiAgVGFibGVTdGlja3lDb21wbGV4RXhhbXBsZSxcbiAgVGFibGVTdGlja3lDb21wbGV4RmxleEV4YW1wbGUsXG4gIFRhYmxlU3RpY2t5Rm9vdGVyRXhhbXBsZSxcbiAgVGFibGVTdGlja3lIZWFkZXJFeGFtcGxlLFxuICBUYWJsZVRleHRDb2x1bW5BZHZhbmNlZEV4YW1wbGUsXG4gIFRhYmxlVGV4dENvbHVtbkV4YW1wbGUsXG4gIFRhYmxlV2l0aFJpcHBsZXNFeGFtcGxlLFxuICBUYWJsZVdyYXBwZWRFeGFtcGxlLFxuICBXcmFwcGVyVGFibGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgVGFibGVCYXNpY0V4YW1wbGUsXG4gIFRhYmxlQ29sdW1uU3R5bGluZ0V4YW1wbGUsXG4gIFRhYmxlRHluYW1pY0FycmF5RGF0YUV4YW1wbGUsXG4gIFRhYmxlRHluYW1pY0NvbHVtbnNFeGFtcGxlLFxuICBUYWJsZUR5bmFtaWNPYnNlcnZhYmxlRGF0YUV4YW1wbGUsXG4gIFRhYmxlRXhwYW5kYWJsZVJvd3NFeGFtcGxlLFxuICBUYWJsZUZpbHRlcmluZ0V4YW1wbGUsXG4gIFRhYmxlRmxleEJhc2ljRXhhbXBsZSxcbiAgVGFibGVGb290ZXJSb3dFeGFtcGxlLFxuICBUYWJsZUdlbmVyYXRlZENvbHVtbnNFeGFtcGxlLFxuICBUYWJsZUhhcm5lc3NFeGFtcGxlLFxuICBUYWJsZUh0dHBFeGFtcGxlLFxuICBUYWJsZU11bHRpcGxlSGVhZGVyRm9vdGVyRXhhbXBsZSxcbiAgVGFibGVPdmVydmlld0V4YW1wbGUsXG4gIFRhYmxlUGFnaW5hdGlvbkV4YW1wbGUsXG4gIFRhYmxlUmVjeWNsZVJvd3NFeGFtcGxlLFxuICBUYWJsZVJlb3JkZXJhYmxlRXhhbXBsZSxcbiAgVGFibGVSb3dCaW5kaW5nRXhhbXBsZSxcbiAgVGFibGVSb3dDb250ZXh0RXhhbXBsZSxcbiAgVGFibGVTZWxlY3Rpb25FeGFtcGxlLFxuICBUYWJsZVNvcnRpbmdFeGFtcGxlLFxuICBUYWJsZVN0aWNreUNvbHVtbnNFeGFtcGxlLFxuICBUYWJsZVN0aWNreUNvbXBsZXhFeGFtcGxlLFxuICBUYWJsZVN0aWNreUNvbXBsZXhGbGV4RXhhbXBsZSxcbiAgVGFibGVTdGlja3lGb290ZXJFeGFtcGxlLFxuICBUYWJsZVN0aWNreUhlYWRlckV4YW1wbGUsXG4gIFRhYmxlVGV4dENvbHVtbkFkdmFuY2VkRXhhbXBsZSxcbiAgVGFibGVUZXh0Q29sdW1uRXhhbXBsZSxcbiAgVGFibGVXaXRoUmlwcGxlc0V4YW1wbGUsXG4gIFRhYmxlV3JhcHBlZEV4YW1wbGUsXG4gIFdyYXBwZXJUYWJsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUlucHV0TW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=