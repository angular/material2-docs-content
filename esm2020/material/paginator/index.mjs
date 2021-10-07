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
PaginatorExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: PaginatorExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginatorExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: PaginatorExamplesModule, declarations: [PaginatorConfigurableExample,
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
PaginatorExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: PaginatorExamplesModule, imports: [[
            CommonModule,
            MatInputModule,
            MatPaginatorModule,
            PaginatorIntlExampleModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: PaginatorExamplesModule, decorators: [{
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
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsNEJBQTRCLEVBQzdCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUNMLG9CQUFvQixFQUNwQiwwQkFBMEIsR0FDM0IsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFakQsT0FBTyxFQUNMLDRCQUE0QixFQUM1Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHdCQUF3QixHQUN6QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLG9FQUFvRTtJQUNwRSx3QkFBd0I7Q0FDekIsQ0FBQztBQWNGLE1BQU0sT0FBTyx1QkFBdUI7OzRIQUF2Qix1QkFBdUI7NkhBQXZCLHVCQUF1QixpQkFsQmxDLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsb0VBQW9FO1FBQ3BFLHdCQUF3QixhQUt0QixZQUFZO1FBQ1osY0FBYztRQUNkLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsV0FBVyxhQVpiLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsb0VBQW9FO1FBQ3BFLHdCQUF3Qjs2SEFlYix1QkFBdUIsWUFYekI7WUFDUCxZQUFZO1lBQ1osY0FBYztZQUNkLGtCQUFrQjtZQUNsQiwwQkFBMEI7WUFDMUIsV0FBVztTQUNaO21HQUtVLHVCQUF1QjtrQkFabkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsMEJBQTBCO3dCQUMxQixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtcbiAgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZVxufSBmcm9tICcuL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7UGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3BhZ2luYXRvci1vdmVydmlldy9wYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1BhZ2luYXRvckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUGFnaW5hdG9ySW50bEV4YW1wbGUsXG4gIFBhZ2luYXRvckludGxFeGFtcGxlTW9kdWxlLFxufSBmcm9tICcuL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlLFxuICBQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZSxcbiAgUGFnaW5hdG9ySW50bEV4YW1wbGUsXG4gIFBhZ2luYXRvck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlLFxuICBQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZSxcbiAgLy8gUGFnaW5hdG9ySW50bEV4YW1wbGUgaXMgaW1wb3J0ZWQgdGhyb3VnaCBpdCdzIG93biBleGFtcGxlIG1vZHVsZS5cbiAgUGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgUGFnaW5hdG9ySW50bEV4YW1wbGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=