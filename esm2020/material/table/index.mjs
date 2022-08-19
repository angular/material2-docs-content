import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacyPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule } from '@angular/material/legacy-table';
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
        MatLegacyButtonModule,
        MatButtonToggleModule,
        MatLegacyCheckboxModule,
        MatIconModule,
        MatLegacyInputModule,
        MatLegacyPaginatorModule,
        MatLegacyProgressSpinnerModule,
        MatRippleModule,
        MatSortModule,
        MatLegacyTableModule,
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
        MatLegacyButtonModule,
        MatButtonToggleModule,
        MatLegacyCheckboxModule,
        MatIconModule,
        MatLegacyInputModule,
        MatLegacyPaginatorModule,
        MatLegacyProgressSpinnerModule,
        MatRippleModule,
        MatSortModule,
        MatLegacyTableModule,
        CdkTableModule,
        DragDropModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TableExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyButtonModule,
                        MatButtonToggleModule,
                        MatLegacyCheckboxModule,
                        MatIconModule,
                        MatLegacyInputModule,
                        MatLegacyPaginatorModule,
                        MatLegacyProgressSpinnerModule,
                        MatRippleModule,
                        MatSortModule,
                        MatLegacyTableModule,
                        CdkTableModule,
                        DragDropModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFD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Q2pCLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQywwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZ0NBQWdDO1FBQ2hDLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0Isd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtpSEFzQkQsbUJBQW1CLFlBakI1QixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLGVBQWU7UUFDZixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxjQUFjOzJGQUtMLG1CQUFtQjtrQkFuQi9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHVCQUF1Qjt3QkFDdkIsYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsOEJBQThCO3dCQUM5QixlQUFlO3dCQUNmLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFJpcHBsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdExlZ2FjeUJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQge01hdExlZ2FjeUNoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TGVnYWN5SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1pbnB1dCc7XG5pbXBvcnQge01hdExlZ2FjeVBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXBhZ2luYXRvcic7XG5pbXBvcnQge01hdExlZ2FjeVByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXByb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHtNYXRTb3J0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0TGVnYWN5VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS10YWJsZSc7XG5pbXBvcnQge0RyYWdEcm9wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmltcG9ydCB7VGFibGVGbGV4QmFzaWNFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWZsZXgtYmFzaWMvdGFibGUtZmxleC1iYXNpYy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVCYXNpY0V4YW1wbGV9IGZyb20gJy4vdGFibGUtYmFzaWMvdGFibGUtYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRHluYW1pY0NvbHVtbnNFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWR5bmFtaWMtY29sdW1ucy90YWJsZS1keW5hbWljLWNvbHVtbnMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRXhwYW5kYWJsZVJvd3NFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWV4cGFuZGFibGUtcm93cy90YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRmlsdGVyaW5nRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1maWx0ZXJpbmcvdGFibGUtZmlsdGVyaW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUZvb3RlclJvd0V4YW1wbGV9IGZyb20gJy4vdGFibGUtZm9vdGVyLXJvdy90YWJsZS1mb290ZXItcm93LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUh0dHBFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWh0dHAvdGFibGUtaHR0cC1leGFtcGxlJztcbmltcG9ydCB7VGFibGVNdWx0aXBsZUhlYWRlckZvb3RlckV4YW1wbGV9IGZyb20gJy4vdGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVQYWdpbmF0aW9uRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1wYWdpbmF0aW9uL3RhYmxlLXBhZ2luYXRpb24tZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlUm93Q29udGV4dEV4YW1wbGV9IGZyb20gJy4vdGFibGUtcm93LWNvbnRleHQvdGFibGUtcm93LWNvbnRleHQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlU2VsZWN0aW9uRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVNvcnRpbmdFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXNvcnRpbmcvdGFibGUtc29ydGluZy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVTdGlja3lDb2x1bW5zRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1zdGlja3ktY29sdW1ucy90YWJsZS1zdGlja3ktY29sdW1ucy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVTdGlja3lDb21wbGV4RmxleEV4YW1wbGV9IGZyb20gJy4vdGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC90YWJsZS1zdGlja3ktY29tcGxleC1mbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVN0aWNreUNvbXBsZXhFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXN0aWNreS1jb21wbGV4L3RhYmxlLXN0aWNreS1jb21wbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVN0aWNreUZvb3RlckV4YW1wbGV9IGZyb20gJy4vdGFibGUtc3RpY2t5LWZvb3Rlci90YWJsZS1zdGlja3ktZm9vdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVN0aWNreUhlYWRlckV4YW1wbGV9IGZyb20gJy4vdGFibGUtc3RpY2t5LWhlYWRlci90YWJsZS1zdGlja3ktaGVhZGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVRleHRDb2x1bW5BZHZhbmNlZEV4YW1wbGV9IGZyb20gJy4vdGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQvdGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlVGV4dENvbHVtbkV4YW1wbGV9IGZyb20gJy4vdGFibGUtdGV4dC1jb2x1bW4vdGFibGUtdGV4dC1jb2x1bW4tZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlV3JhcHBlZEV4YW1wbGUsIFdyYXBwZXJUYWJsZX0gZnJvbSAnLi90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlUmVvcmRlcmFibGVFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXJlb3JkZXJhYmxlL3RhYmxlLXJlb3JkZXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1yZWN5Y2xlLXJvd3MvdGFibGUtcmVjeWNsZS1yb3dzLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWhhcm5lc3MvdGFibGUtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVXaXRoUmlwcGxlc0V4YW1wbGV9IGZyb20gJy4vdGFibGUtd2l0aC1yaXBwbGVzL3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVDb2x1bW5TdHlsaW5nRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc3R5bGluZy90YWJsZS1jb2x1bW4tc3R5bGluZy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVSb3dCaW5kaW5nRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1yb3ctYmluZGluZy90YWJsZS1yb3ctYmluZGluZy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVEeW5hbWljQXJyYXlEYXRhRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1keW5hbWljLWFycmF5LWRhdGEvdGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUR5bmFtaWNPYnNlcnZhYmxlRGF0YUV4YW1wbGV9IGZyb20gJy4vdGFibGUtZHluYW1pYy1vYnNlcnZhYmxlLWRhdGEvdGFibGUtZHluYW1pYy1vYnNlcnZhYmxlLWRhdGEtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlR2VuZXJhdGVkQ29sdW1uc0V4YW1wbGV9IGZyb20gJy4vdGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMvdGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFRhYmxlQmFzaWNFeGFtcGxlLFxuICBUYWJsZUNvbHVtblN0eWxpbmdFeGFtcGxlLFxuICBUYWJsZUR5bmFtaWNBcnJheURhdGFFeGFtcGxlLFxuICBUYWJsZUR5bmFtaWNDb2x1bW5zRXhhbXBsZSxcbiAgVGFibGVEeW5hbWljT2JzZXJ2YWJsZURhdGFFeGFtcGxlLFxuICBUYWJsZUV4cGFuZGFibGVSb3dzRXhhbXBsZSxcbiAgVGFibGVGaWx0ZXJpbmdFeGFtcGxlLFxuICBUYWJsZUZsZXhCYXNpY0V4YW1wbGUsXG4gIFRhYmxlRm9vdGVyUm93RXhhbXBsZSxcbiAgVGFibGVHZW5lcmF0ZWRDb2x1bW5zRXhhbXBsZSxcbiAgVGFibGVIYXJuZXNzRXhhbXBsZSxcbiAgVGFibGVIdHRwRXhhbXBsZSxcbiAgVGFibGVNdWx0aXBsZUhlYWRlckZvb3RlckV4YW1wbGUsXG4gIFRhYmxlT3ZlcnZpZXdFeGFtcGxlLFxuICBUYWJsZVBhZ2luYXRpb25FeGFtcGxlLFxuICBUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZSxcbiAgVGFibGVSZW9yZGVyYWJsZUV4YW1wbGUsXG4gIFRhYmxlUm93QmluZGluZ0V4YW1wbGUsXG4gIFRhYmxlUm93Q29udGV4dEV4YW1wbGUsXG4gIFRhYmxlU2VsZWN0aW9uRXhhbXBsZSxcbiAgVGFibGVTb3J0aW5nRXhhbXBsZSxcbiAgVGFibGVTdGlja3lDb2x1bW5zRXhhbXBsZSxcbiAgVGFibGVTdGlja3lDb21wbGV4RXhhbXBsZSxcbiAgVGFibGVTdGlja3lDb21wbGV4RmxleEV4YW1wbGUsXG4gIFRhYmxlU3RpY2t5Rm9vdGVyRXhhbXBsZSxcbiAgVGFibGVTdGlja3lIZWFkZXJFeGFtcGxlLFxuICBUYWJsZVRleHRDb2x1bW5BZHZhbmNlZEV4YW1wbGUsXG4gIFRhYmxlVGV4dENvbHVtbkV4YW1wbGUsXG4gIFRhYmxlV2l0aFJpcHBsZXNFeGFtcGxlLFxuICBUYWJsZVdyYXBwZWRFeGFtcGxlLFxuICBXcmFwcGVyVGFibGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgVGFibGVCYXNpY0V4YW1wbGUsXG4gIFRhYmxlQ29sdW1uU3R5bGluZ0V4YW1wbGUsXG4gIFRhYmxlRHluYW1pY0FycmF5RGF0YUV4YW1wbGUsXG4gIFRhYmxlRHluYW1pY0NvbHVtbnNFeGFtcGxlLFxuICBUYWJsZUR5bmFtaWNPYnNlcnZhYmxlRGF0YUV4YW1wbGUsXG4gIFRhYmxlRXhwYW5kYWJsZVJvd3NFeGFtcGxlLFxuICBUYWJsZUZpbHRlcmluZ0V4YW1wbGUsXG4gIFRhYmxlRmxleEJhc2ljRXhhbXBsZSxcbiAgVGFibGVGb290ZXJSb3dFeGFtcGxlLFxuICBUYWJsZUdlbmVyYXRlZENvbHVtbnNFeGFtcGxlLFxuICBUYWJsZUhhcm5lc3NFeGFtcGxlLFxuICBUYWJsZUh0dHBFeGFtcGxlLFxuICBUYWJsZU11bHRpcGxlSGVhZGVyRm9vdGVyRXhhbXBsZSxcbiAgVGFibGVPdmVydmlld0V4YW1wbGUsXG4gIFRhYmxlUGFnaW5hdGlvbkV4YW1wbGUsXG4gIFRhYmxlUmVjeWNsZVJvd3NFeGFtcGxlLFxuICBUYWJsZVJlb3JkZXJhYmxlRXhhbXBsZSxcbiAgVGFibGVSb3dCaW5kaW5nRXhhbXBsZSxcbiAgVGFibGVSb3dDb250ZXh0RXhhbXBsZSxcbiAgVGFibGVTZWxlY3Rpb25FeGFtcGxlLFxuICBUYWJsZVNvcnRpbmdFeGFtcGxlLFxuICBUYWJsZVN0aWNreUNvbHVtbnNFeGFtcGxlLFxuICBUYWJsZVN0aWNreUNvbXBsZXhFeGFtcGxlLFxuICBUYWJsZVN0aWNreUNvbXBsZXhGbGV4RXhhbXBsZSxcbiAgVGFibGVTdGlja3lGb290ZXJFeGFtcGxlLFxuICBUYWJsZVN0aWNreUhlYWRlckV4YW1wbGUsXG4gIFRhYmxlVGV4dENvbHVtbkFkdmFuY2VkRXhhbXBsZSxcbiAgVGFibGVUZXh0Q29sdW1uRXhhbXBsZSxcbiAgVGFibGVXaXRoUmlwcGxlc0V4YW1wbGUsXG4gIFRhYmxlV3JhcHBlZEV4YW1wbGUsXG4gIFdyYXBwZXJUYWJsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5QnV0dG9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRMZWdhY3lDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUlucHV0TW9kdWxlLFxuICAgIE1hdExlZ2FjeVBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRMZWdhY3lQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0TGVnYWN5VGFibGVNb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=