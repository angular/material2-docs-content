import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorConfigurableExample } from './paginator-configurable/paginator-configurable-example';
import { PaginatorOverviewExample } from './paginator-overview/paginator-overview-example';
import { PaginatorHarnessExample } from './paginator-harness/paginator-harness-example';
import { PaginatorIntlExample, PaginatorIntlExampleModule, } from './paginator-intl/paginator-intl-example';
import * as i0 from "@angular/core";
export { PaginatorConfigurableExample, PaginatorHarnessExample, PaginatorIntlExample, PaginatorOverviewExample, };
const EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorHarnessExample,
    // PaginatorIntlExample is imported through it's own example module.
    PaginatorOverviewExample,
];
export class PaginatorExamplesModule {
}
PaginatorExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.0", ngImport: i0, type: PaginatorExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginatorExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.0-rc.0", ngImport: i0, type: PaginatorExamplesModule, declarations: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        // PaginatorIntlExample is imported through it's own example module.
        PaginatorOverviewExample], imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        PaginatorIntlExampleModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        // PaginatorIntlExample is imported through it's own example module.
        PaginatorOverviewExample] });
PaginatorExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-rc.0", ngImport: i0, type: PaginatorExamplesModule, imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        PaginatorIntlExampleModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.0", ngImport: i0, type: PaginatorExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatInputModule,
                        MatPaginatorModule,
                        PaginatorIntlExampleModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNyRyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixHQUMzQixNQUFNLHlDQUF5QyxDQUFDOztBQUVqRCxPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsd0JBQXdCLEdBQ3pCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsb0VBQW9FO0lBQ3BFLHdCQUF3QjtDQUN6QixDQUFDO0FBYUYsTUFBTSxPQUFPLHVCQUF1Qjs7eUhBQXZCLHVCQUF1QjswSEFBdkIsdUJBQXVCLGlCQWpCbEMsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2QixvRUFBb0U7UUFDcEUsd0JBQXdCLGFBS3RCLFlBQVk7UUFDWixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQixXQUFXLGFBWmIsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2QixvRUFBb0U7UUFDcEUsd0JBQXdCOzBIQWNiLHVCQUF1QixZQVRoQyxZQUFZO1FBQ1osY0FBYztRQUNkLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsV0FBVztnR0FLRix1QkFBdUI7a0JBWG5DLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLDBCQUEwQjt3QkFDMUIsV0FBVztxQkFDWjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlfSBmcm9tICcuL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7UGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3BhZ2luYXRvci1vdmVydmlldy9wYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1BhZ2luYXRvckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUGFnaW5hdG9ySW50bEV4YW1wbGUsXG4gIFBhZ2luYXRvckludGxFeGFtcGxlTW9kdWxlLFxufSBmcm9tICcuL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlLFxuICBQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZSxcbiAgUGFnaW5hdG9ySW50bEV4YW1wbGUsXG4gIFBhZ2luYXRvck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlLFxuICBQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZSxcbiAgLy8gUGFnaW5hdG9ySW50bEV4YW1wbGUgaXMgaW1wb3J0ZWQgdGhyb3VnaCBpdCdzIG93biBleGFtcGxlIG1vZHVsZS5cbiAgUGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgUGFnaW5hdG9ySW50bEV4YW1wbGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JFeGFtcGxlc01vZHVsZSB7fVxuIl19