import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { TableBasicFlexExample } from './table-basic-flex/table-basic-flex-example';
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
import * as i0 from "@angular/core";
export { TableBasicExample, TableBasicFlexExample, TableDynamicColumnsExample, TableExpandableRowsExample, TableFilteringExample, TableFooterRowExample, TableHttpExample, TableMultipleHeaderFooterExample, TableOverviewExample, TablePaginationExample, TableRowContextExample, TableSelectionExample, TableSortingExample, TableStickyColumnsExample, TableStickyComplexExample, TableStickyComplexFlexExample, TableStickyFooterExample, TableStickyHeaderExample, TableTextColumnExample, TableTextColumnAdvancedExample, TableWrappedExample, WrapperTable, TableReorderableExample, };
const EXAMPLES = [
    TableBasicExample, TableBasicFlexExample,
    TableDynamicColumnsExample, TableExpandableRowsExample,
    TableFilteringExample, TableFooterRowExample,
    TableHttpExample, TableMultipleHeaderFooterExample,
    TableOverviewExample, TablePaginationExample,
    TableRowContextExample, TableSelectionExample,
    TableSortingExample, TableStickyColumnsExample,
    TableStickyComplexExample, TableStickyComplexFlexExample,
    TableStickyFooterExample, TableStickyHeaderExample,
    TableTextColumnExample, TableTextColumnAdvancedExample,
    TableWrappedExample, WrapperTable,
    TableReorderableExample,
];
export class TableExamplesModule {
}
TableExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TableExamplesModule });
TableExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TableExamplesModule_Factory(t) { return new (t || TableExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatPaginatorModule,
            MatProgressSpinnerModule,
            MatSortModule,
            MatTableModule,
            CdkTableModule,
            DragDropModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TableExamplesModule, { declarations: [TableBasicExample, TableBasicFlexExample,
        TableDynamicColumnsExample, TableExpandableRowsExample,
        TableFilteringExample, TableFooterRowExample,
        TableHttpExample, TableMultipleHeaderFooterExample,
        TableOverviewExample, TablePaginationExample,
        TableRowContextExample, TableSelectionExample,
        TableSortingExample, TableStickyColumnsExample,
        TableStickyComplexExample, TableStickyComplexFlexExample,
        TableStickyFooterExample, TableStickyHeaderExample,
        TableTextColumnExample, TableTextColumnAdvancedExample,
        TableWrappedExample, WrapperTable,
        TableReorderableExample], imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule,
        CdkTableModule,
        DragDropModule], exports: [TableBasicExample, TableBasicFlexExample,
        TableDynamicColumnsExample, TableExpandableRowsExample,
        TableFilteringExample, TableFooterRowExample,
        TableHttpExample, TableMultipleHeaderFooterExample,
        TableOverviewExample, TablePaginationExample,
        TableRowContextExample, TableSelectionExample,
        TableSortingExample, TableStickyColumnsExample,
        TableStickyComplexExample, TableStickyComplexFlexExample,
        TableStickyFooterExample, TableStickyHeaderExample,
        TableTextColumnExample, TableTextColumnAdvancedExample,
        TableWrappedExample, WrapperTable,
        TableReorderableExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatPaginatorModule,
                    MatProgressSpinnerModule,
                    MatSortModule,
                    MatTableModule,
                    CdkTableModule,
                    DragDropModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFD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b3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7TWF0U29ydE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge0RyYWdEcm9wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmltcG9ydCB7VGFibGVCYXNpY0ZsZXhFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWJhc2ljLWZsZXgvdGFibGUtYmFzaWMtZmxleC1leGFtcGxlJztcbmltcG9ydCB7VGFibGVCYXNpY0V4YW1wbGV9IGZyb20gJy4vdGFibGUtYmFzaWMvdGFibGUtYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRHluYW1pY0NvbHVtbnNFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWR5bmFtaWMtY29sdW1ucy90YWJsZS1keW5hbWljLWNvbHVtbnMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRXhwYW5kYWJsZVJvd3NFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWV4cGFuZGFibGUtcm93cy90YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlRmlsdGVyaW5nRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1maWx0ZXJpbmcvdGFibGUtZmlsdGVyaW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUZvb3RlclJvd0V4YW1wbGV9IGZyb20gJy4vdGFibGUtZm9vdGVyLXJvdy90YWJsZS1mb290ZXItcm93LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZUh0dHBFeGFtcGxlfSBmcm9tICcuL3RhYmxlLWh0dHAvdGFibGUtaHR0cC1leGFtcGxlJztcbmltcG9ydCB7XG4gIFRhYmxlTXVsdGlwbGVIZWFkZXJGb290ZXJFeGFtcGxlXG59IGZyb20gJy4vdGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVQYWdpbmF0aW9uRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1wYWdpbmF0aW9uL3RhYmxlLXBhZ2luYXRpb24tZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlUm93Q29udGV4dEV4YW1wbGV9IGZyb20gJy4vdGFibGUtcm93LWNvbnRleHQvdGFibGUtcm93LWNvbnRleHQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlU2VsZWN0aW9uRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVNvcnRpbmdFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXNvcnRpbmcvdGFibGUtc29ydGluZy1leGFtcGxlJztcbmltcG9ydCB7VGFibGVTdGlja3lDb2x1bW5zRXhhbXBsZX0gZnJvbSAnLi90YWJsZS1zdGlja3ktY29sdW1ucy90YWJsZS1zdGlja3ktY29sdW1ucy1leGFtcGxlJztcbmltcG9ydCB7XG4gIFRhYmxlU3RpY2t5Q29tcGxleEZsZXhFeGFtcGxlXG59IGZyb20gJy4vdGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC90YWJsZS1zdGlja3ktY29tcGxleC1mbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVN0aWNreUNvbXBsZXhFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXN0aWNreS1jb21wbGV4L3RhYmxlLXN0aWNreS1jb21wbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVN0aWNreUZvb3RlckV4YW1wbGV9IGZyb20gJy4vdGFibGUtc3RpY2t5LWZvb3Rlci90YWJsZS1zdGlja3ktZm9vdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJsZVN0aWNreUhlYWRlckV4YW1wbGV9IGZyb20gJy4vdGFibGUtc3RpY2t5LWhlYWRlci90YWJsZS1zdGlja3ktaGVhZGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgVGFibGVUZXh0Q29sdW1uQWR2YW5jZWRFeGFtcGxlXG59IGZyb20gJy4vdGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQvdGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlVGV4dENvbHVtbkV4YW1wbGV9IGZyb20gJy4vdGFibGUtdGV4dC1jb2x1bW4vdGFibGUtdGV4dC1jb2x1bW4tZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlV3JhcHBlZEV4YW1wbGUsIFdyYXBwZXJUYWJsZX0gZnJvbSAnLi90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYmxlUmVvcmRlcmFibGVFeGFtcGxlfSBmcm9tICcuL3RhYmxlLXJlb3JkZXJhYmxlL3RhYmxlLXJlb3JkZXJhYmxlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUYWJsZUJhc2ljRXhhbXBsZSwgICAgICAgICAgVGFibGVCYXNpY0ZsZXhFeGFtcGxlLFxuICBUYWJsZUR5bmFtaWNDb2x1bW5zRXhhbXBsZSwgVGFibGVFeHBhbmRhYmxlUm93c0V4YW1wbGUsXG4gIFRhYmxlRmlsdGVyaW5nRXhhbXBsZSwgICAgICBUYWJsZUZvb3RlclJvd0V4YW1wbGUsXG4gIFRhYmxlSHR0cEV4YW1wbGUsICAgICAgICAgICBUYWJsZU11bHRpcGxlSGVhZGVyRm9vdGVyRXhhbXBsZSxcbiAgVGFibGVPdmVydmlld0V4YW1wbGUsICAgICAgIFRhYmxlUGFnaW5hdGlvbkV4YW1wbGUsXG4gIFRhYmxlUm93Q29udGV4dEV4YW1wbGUsICAgICBUYWJsZVNlbGVjdGlvbkV4YW1wbGUsXG4gIFRhYmxlU29ydGluZ0V4YW1wbGUsICAgICAgICBUYWJsZVN0aWNreUNvbHVtbnNFeGFtcGxlLFxuICBUYWJsZVN0aWNreUNvbXBsZXhFeGFtcGxlLCAgVGFibGVTdGlja3lDb21wbGV4RmxleEV4YW1wbGUsXG4gIFRhYmxlU3RpY2t5Rm9vdGVyRXhhbXBsZSwgICBUYWJsZVN0aWNreUhlYWRlckV4YW1wbGUsXG4gIFRhYmxlVGV4dENvbHVtbkV4YW1wbGUsICAgICBUYWJsZVRleHRDb2x1bW5BZHZhbmNlZEV4YW1wbGUsXG4gIFRhYmxlV3JhcHBlZEV4YW1wbGUsICAgICAgICBXcmFwcGVyVGFibGUsXG4gIFRhYmxlUmVvcmRlcmFibGVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRhYmxlQmFzaWNFeGFtcGxlLCAgICAgICAgICBUYWJsZUJhc2ljRmxleEV4YW1wbGUsXG4gIFRhYmxlRHluYW1pY0NvbHVtbnNFeGFtcGxlLCBUYWJsZUV4cGFuZGFibGVSb3dzRXhhbXBsZSxcbiAgVGFibGVGaWx0ZXJpbmdFeGFtcGxlLCAgICAgIFRhYmxlRm9vdGVyUm93RXhhbXBsZSxcbiAgVGFibGVIdHRwRXhhbXBsZSwgICAgICAgICAgIFRhYmxlTXVsdGlwbGVIZWFkZXJGb290ZXJFeGFtcGxlLFxuICBUYWJsZU92ZXJ2aWV3RXhhbXBsZSwgICAgICAgVGFibGVQYWdpbmF0aW9uRXhhbXBsZSxcbiAgVGFibGVSb3dDb250ZXh0RXhhbXBsZSwgICAgIFRhYmxlU2VsZWN0aW9uRXhhbXBsZSxcbiAgVGFibGVTb3J0aW5nRXhhbXBsZSwgICAgICAgIFRhYmxlU3RpY2t5Q29sdW1uc0V4YW1wbGUsXG4gIFRhYmxlU3RpY2t5Q29tcGxleEV4YW1wbGUsICBUYWJsZVN0aWNreUNvbXBsZXhGbGV4RXhhbXBsZSxcbiAgVGFibGVTdGlja3lGb290ZXJFeGFtcGxlLCAgIFRhYmxlU3RpY2t5SGVhZGVyRXhhbXBsZSxcbiAgVGFibGVUZXh0Q29sdW1uRXhhbXBsZSwgICAgIFRhYmxlVGV4dENvbHVtbkFkdmFuY2VkRXhhbXBsZSxcbiAgVGFibGVXcmFwcGVkRXhhbXBsZSwgICAgICAgIFdyYXBwZXJUYWJsZSxcbiAgVGFibGVSZW9yZGVyYWJsZUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==