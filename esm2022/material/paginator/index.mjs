import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorConfigurableExample } from './paginator-configurable/paginator-configurable-example';
import { PaginatorOverviewExample } from './paginator-overview/paginator-overview-example';
import { PaginatorHarnessExample } from './paginator-harness/paginator-harness-example';
import { PaginatorIntlExample, PaginatorIntlExampleModule, } from './paginator-intl/paginator-intl-example';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
export { PaginatorConfigurableExample, PaginatorHarnessExample, PaginatorIntlExample, PaginatorOverviewExample, };
const EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorHarnessExample,
    // PaginatorIntlExample is imported through it's own example module.
    PaginatorOverviewExample,
];
class PaginatorExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: PaginatorExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: PaginatorExamplesModule, declarations: [PaginatorConfigurableExample,
            PaginatorHarnessExample,
            // PaginatorIntlExample is imported through it's own example module.
            PaginatorOverviewExample], imports: [CommonModule,
            MatInputModule,
            MatPaginatorModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSlideToggleModule,
            PaginatorIntlExampleModule,
            FormsModule], exports: [PaginatorConfigurableExample,
            PaginatorHarnessExample,
            // PaginatorIntlExample is imported through it's own example module.
            PaginatorOverviewExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: PaginatorExamplesModule, imports: [CommonModule,
            MatInputModule,
            MatPaginatorModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSlideToggleModule,
            PaginatorIntlExampleModule,
            FormsModule] }); }
}
export { PaginatorExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: PaginatorExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatInputModule,
                        MatPaginatorModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSlideToggleModule,
                        PaginatorIntlExampleModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNyRyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixHQUMzQixNQUFNLHlDQUF5QyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFcEUsT0FBTyxFQUNMLDRCQUE0QixFQUM1Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHdCQUF3QixHQUN6QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLG9FQUFvRTtJQUNwRSx3QkFBd0I7Q0FDekIsQ0FBQztBQUVGLE1BZWEsdUJBQXVCO21IQUF2Qix1QkFBdUI7b0hBQXZCLHVCQUF1QixpQkFyQmxDLDRCQUE0QjtZQUM1Qix1QkFBdUI7WUFDdkIsb0VBQW9FO1lBQ3BFLHdCQUF3QixhQUt0QixZQUFZO1lBQ1osY0FBYztZQUNkLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsMEJBQTBCO1lBQzFCLFdBQVcsYUFoQmIsNEJBQTRCO1lBQzVCLHVCQUF1QjtZQUN2QixvRUFBb0U7WUFDcEUsd0JBQXdCO29IQWtCYix1QkFBdUIsWUFiaEMsWUFBWTtZQUNaLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLDBCQUEwQjtZQUMxQixXQUFXOztTQUtGLHVCQUF1QjtnR0FBdkIsdUJBQXVCO2tCQWZuQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLDBCQUEwQjt3QkFDMUIsV0FBVztxQkFDWjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlfSBmcm9tICcuL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7UGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3BhZ2luYXRvci1vdmVydmlldy9wYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1BhZ2luYXRvckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUGFnaW5hdG9ySW50bEV4YW1wbGUsXG4gIFBhZ2luYXRvckludGxFeGFtcGxlTW9kdWxlLFxufSBmcm9tICcuL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0U2xpZGVUb2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5cbmV4cG9ydCB7XG4gIFBhZ2luYXRvckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFBhZ2luYXRvckhhcm5lc3NFeGFtcGxlLFxuICBQYWdpbmF0b3JJbnRsRXhhbXBsZSxcbiAgUGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFBhZ2luYXRvckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFBhZ2luYXRvckhhcm5lc3NFeGFtcGxlLFxuICAvLyBQYWdpbmF0b3JJbnRsRXhhbXBsZSBpcyBpbXBvcnRlZCB0aHJvdWdoIGl0J3Mgb3duIGV4YW1wbGUgbW9kdWxlLlxuICBQYWdpbmF0b3JPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBQYWdpbmF0b3JJbnRsRXhhbXBsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=