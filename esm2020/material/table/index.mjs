import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
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
        MatLegacyCheckboxModule,
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
        MatLegacyCheckboxModule,
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
                        MatLegacyCheckboxModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFD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O1FBQ3pCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQ0FBZ0M7UUFDaEMsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixZQUFZO2lIQXNCRCxtQkFBbUIsWUFqQjVCLFlBQVk7UUFDWixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QsY0FBYztRQUNkLGNBQWM7MkZBS0wsbUJBQW1CO2tCQW5CL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2QixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQix3QkFBd0I7d0JBQ3hCLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UmlwcGxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHtNYXRMZWdhY3lDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWNoZWNrYm94JztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdExlZ2FjeUlucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktaW5wdXQnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQge01hdFNvcnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5pbXBvcnQge1RhYmxlRmxleEJhc2ljRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1mbGV4LWJhc2ljL3RhYmxlLWZsZXgtYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlQmFzaWNFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWJhc2ljL3RhYmxlLWJhc2ljLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUR5bmFtaWNDb2x1bW5zRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1keW5hbWljLWNvbHVtbnMvdGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUV4cGFuZGFibGVSb3dzRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1leHBhbmRhYmxlLXJvd3MvdGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUZpbHRlcmluZ0V4YW1wbGV9IGZyb20gJy4vdGFibGUtZmlsdGVyaW5nL3RhYmxlLWZpbHRlcmluZy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVGb290ZXJSb3dFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWZvb3Rlci1yb3cvdGFibGUtZm9vdGVyLXJvdy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVIdHRwRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1odHRwL3RhYmxlLWh0dHAtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlTXVsdGlwbGVIZWFkZXJGb290ZXJFeGFtcGxlfSBmcm9tICcuL3RhYmxlLW11bHRpcGxlLWhlYWRlci1mb290ZXIvdGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci1leGFtcGxlJztcbmltcG9ydCB7VGFibGVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vdGFibGUtb3ZlcnZpZXcvdGFibGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlUGFnaW5hdGlvbkV4YW1wbGV9IGZyb20gJy4vdGFibGUtcGFnaW5hdGlvbi90YWJsZS1wYWdpbmF0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVJvd0NvbnRleHRFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXJvdy1jb250ZXh0L3RhYmxlLXJvdy1jb250ZXh0LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVNlbGVjdGlvbkV4YW1wbGV9IGZyb20gJy4vdGFibGUtc2VsZWN0aW9uL3RhYmxlLXNlbGVjdGlvbi1leGFtcGxlJztcbmltcG9ydCB7VGFibGVTb3J0aW5nRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1zb3J0aW5nL3RhYmxlLXNvcnRpbmctZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlU3RpY2t5Q29sdW1uc0V4YW1wbGV9IGZyb20gJy4vdGFibGUtc3RpY2t5LWNvbHVtbnMvdGFibGUtc3RpY2t5LWNvbHVtbnMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlU3RpY2t5Q29tcGxleEZsZXhFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXN0aWNreS1jb21wbGV4LWZsZXgvdGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC1leGFtcGxlJztcbmltcG9ydCB7VGFibGVTdGlja3lDb21wbGV4RXhhbXBsZX0gZnJvbSAnLi90YWJsZS1zdGlja3ktY29tcGxleC90YWJsZS1zdGlja3ktY29tcGxleC1leGFtcGxlJztcbmltcG9ydCB7VGFibGVTdGlja3lGb290ZXJFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXN0aWNreS1mb290ZXIvdGFibGUtc3RpY2t5LWZvb3Rlci1leGFtcGxlJztcbmltcG9ydCB7VGFibGVTdGlja3lIZWFkZXJFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXN0aWNreS1oZWFkZXIvdGFibGUtc3RpY2t5LWhlYWRlci1leGFtcGxlJztcbmltcG9ydCB7VGFibGVUZXh0Q29sdW1uQWR2YW5jZWRFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkL3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVRleHRDb2x1bW5FeGFtcGxlfSBmcm9tICcuL3RhYmxlLXRleHQtY29sdW1uL3RhYmxlLXRleHQtY29sdW1uLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVdyYXBwZWRFeGFtcGxlLCBXcmFwcGVyVGFibGV9IGZyb20gJy4vdGFibGUtd3JhcHBlZC90YWJsZS13cmFwcGVkLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVJlb3JkZXJhYmxlRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1yZW9yZGVyYWJsZS90YWJsZS1yZW9yZGVyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7VGFibGVSZWN5Y2xlUm93c0V4YW1wbGV9IGZyb20gJy4vdGFibGUtcmVjeWNsZS1yb3dzL3RhYmxlLXJlY3ljbGUtcm93cy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1oYXJuZXNzL3RhYmxlLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlV2l0aFJpcHBsZXNFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXdpdGgtcmlwcGxlcy90YWJsZS13aXRoLXJpcHBsZXMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlQ29sdW1uU3R5bGluZ0V4YW1wbGV9IGZyb20gJy4vdGFibGUtY29sdW1uLXN0eWxpbmcvdGFibGUtY29sdW1uLXN0eWxpbmctZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlUm93QmluZGluZ0V4YW1wbGV9IGZyb20gJy4vdGFibGUtcm93LWJpbmRpbmcvdGFibGUtcm93LWJpbmRpbmctZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRHluYW1pY0FycmF5RGF0YUV4YW1wbGV9IGZyb20gJy4vdGFibGUtZHluYW1pYy1hcnJheS1kYXRhL3RhYmxlLWR5bmFtaWMtYXJyYXktZGF0YS1leGFtcGxlJztcbmltcG9ydCB7VGFibGVEeW5hbWljT2JzZXJ2YWJsZURhdGFFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWR5bmFtaWMtb2JzZXJ2YWJsZS1kYXRhL3RhYmxlLWR5bmFtaWMtb2JzZXJ2YWJsZS1kYXRhLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUdlbmVyYXRlZENvbHVtbnNFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUYWJsZUJhc2ljRXhhbXBsZSxcbiAgVGFibGVDb2x1bW5TdHlsaW5nRXhhbXBsZSxcbiAgVGFibGVEeW5hbWljQXJyYXlEYXRhRXhhbXBsZSxcbiAgVGFibGVEeW5hbWljQ29sdW1uc0V4YW1wbGUsXG4gIFRhYmxlRHluYW1pY09ic2VydmFibGVEYXRhRXhhbXBsZSxcbiAgVGFibGVFeHBhbmRhYmxlUm93c0V4YW1wbGUsXG4gIFRhYmxlRmlsdGVyaW5nRXhhbXBsZSxcbiAgVGFibGVGbGV4QmFzaWNFeGFtcGxlLFxuICBUYWJsZUZvb3RlclJvd0V4YW1wbGUsXG4gIFRhYmxlR2VuZXJhdGVkQ29sdW1uc0V4YW1wbGUsXG4gIFRhYmxlSGFybmVzc0V4YW1wbGUsXG4gIFRhYmxlSHR0cEV4YW1wbGUsXG4gIFRhYmxlTXVsdGlwbGVIZWFkZXJGb290ZXJFeGFtcGxlLFxuICBUYWJsZU92ZXJ2aWV3RXhhbXBsZSxcbiAgVGFibGVQYWdpbmF0aW9uRXhhbXBsZSxcbiAgVGFibGVSZWN5Y2xlUm93c0V4YW1wbGUsXG4gIFRhYmxlUmVvcmRlcmFibGVFeGFtcGxlLFxuICBUYWJsZVJvd0JpbmRpbmdFeGFtcGxlLFxuICBUYWJsZVJvd0NvbnRleHRFeGFtcGxlLFxuICBUYWJsZVNlbGVjdGlvbkV4YW1wbGUsXG4gIFRhYmxlU29ydGluZ0V4YW1wbGUsXG4gIFRhYmxlU3RpY2t5Q29sdW1uc0V4YW1wbGUsXG4gIFRhYmxlU3RpY2t5Q29tcGxleEV4YW1wbGUsXG4gIFRhYmxlU3RpY2t5Q29tcGxleEZsZXhFeGFtcGxlLFxuICBUYWJsZVN0aWNreUZvb3RlckV4YW1wbGUsXG4gIFRhYmxlU3RpY2t5SGVhZGVyRXhhbXBsZSxcbiAgVGFibGVUZXh0Q29sdW1uQWR2YW5jZWRFeGFtcGxlLFxuICBUYWJsZVRleHRDb2x1bW5FeGFtcGxlLFxuICBUYWJsZVdpdGhSaXBwbGVzRXhhbXBsZSxcbiAgVGFibGVXcmFwcGVkRXhhbXBsZSxcbiAgV3JhcHBlclRhYmxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRhYmxlQmFzaWNFeGFtcGxlLFxuICBUYWJsZUNvbHVtblN0eWxpbmdFeGFtcGxlLFxuICBUYWJsZUR5bmFtaWNBcnJheURhdGFFeGFtcGxlLFxuICBUYWJsZUR5bmFtaWNDb2x1bW5zRXhhbXBsZSxcbiAgVGFibGVEeW5hbWljT2JzZXJ2YWJsZURhdGFFeGFtcGxlLFxuICBUYWJsZUV4cGFuZGFibGVSb3dzRXhhbXBsZSxcbiAgVGFibGVGaWx0ZXJpbmdFeGFtcGxlLFxuICBUYWJsZUZsZXhCYXNpY0V4YW1wbGUsXG4gIFRhYmxlRm9vdGVyUm93RXhhbXBsZSxcbiAgVGFibGVHZW5lcmF0ZWRDb2x1bW5zRXhhbXBsZSxcbiAgVGFibGVIYXJuZXNzRXhhbXBsZSxcbiAgVGFibGVIdHRwRXhhbXBsZSxcbiAgVGFibGVNdWx0aXBsZUhlYWRlckZvb3RlckV4YW1wbGUsXG4gIFRhYmxlT3ZlcnZpZXdFeGFtcGxlLFxuICBUYWJsZVBhZ2luYXRpb25FeGFtcGxlLFxuICBUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZSxcbiAgVGFibGVSZW9yZGVyYWJsZUV4YW1wbGUsXG4gIFRhYmxlUm93QmluZGluZ0V4YW1wbGUsXG4gIFRhYmxlUm93Q29udGV4dEV4YW1wbGUsXG4gIFRhYmxlU2VsZWN0aW9uRXhhbXBsZSxcbiAgVGFibGVTb3J0aW5nRXhhbXBsZSxcbiAgVGFibGVTdGlja3lDb2x1bW5zRXhhbXBsZSxcbiAgVGFibGVTdGlja3lDb21wbGV4RXhhbXBsZSxcbiAgVGFibGVTdGlja3lDb21wbGV4RmxleEV4YW1wbGUsXG4gIFRhYmxlU3RpY2t5Rm9vdGVyRXhhbXBsZSxcbiAgVGFibGVTdGlja3lIZWFkZXJFeGFtcGxlLFxuICBUYWJsZVRleHRDb2x1bW5BZHZhbmNlZEV4YW1wbGUsXG4gIFRhYmxlVGV4dENvbHVtbkV4YW1wbGUsXG4gIFRhYmxlV2l0aFJpcHBsZXNFeGFtcGxlLFxuICBUYWJsZVdyYXBwZWRFeGFtcGxlLFxuICBXcmFwcGVyVGFibGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lJbnB1dE1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIERyYWdEcm9wTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVFeGFtcGxlc01vZHVsZSB7fVxuIl19