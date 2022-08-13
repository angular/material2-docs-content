import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacyPaginatorModule } from '@angular/material/legacy-paginator';
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
PaginatorExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: PaginatorExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginatorExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: PaginatorExamplesModule, declarations: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        // PaginatorIntlExample is imported through it's own example module.
        PaginatorOverviewExample], imports: [CommonModule,
        MatLegacyInputModule,
        MatLegacyPaginatorModule,
        PaginatorIntlExampleModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        // PaginatorIntlExample is imported through it's own example module.
        PaginatorOverviewExample] });
PaginatorExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: PaginatorExamplesModule, imports: [CommonModule,
        MatLegacyInputModule,
        MatLegacyPaginatorModule,
        PaginatorIntlExampleModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: PaginatorExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyInputModule,
                        MatLegacyPaginatorModule,
                        PaginatorIntlExampleModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3JHLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEdBQzNCLE1BQU0seUNBQXlDLENBQUM7O0FBRWpELE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQix3QkFBd0IsR0FDekIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixvRUFBb0U7SUFDcEUsd0JBQXdCO0NBQ3pCLENBQUM7QUFhRixNQUFNLE9BQU8sdUJBQXVCOztvSEFBdkIsdUJBQXVCO3FIQUF2Qix1QkFBdUIsaUJBakJsQyw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLG9FQUFvRTtRQUNwRSx3QkFBd0IsYUFLdEIsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLFdBQVcsYUFaYiw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLG9FQUFvRTtRQUNwRSx3QkFBd0I7cUhBY2IsdUJBQXVCLFlBVGhDLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQixXQUFXOzJGQUtGLHVCQUF1QjtrQkFYbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsMEJBQTBCO3dCQUMxQixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRMZWdhY3lJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0JztcbmltcG9ydCB7TWF0TGVnYWN5UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcGFnaW5hdG9yJztcbmltcG9ydCB7UGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9wYWdpbmF0b3ItY29uZmlndXJhYmxlL3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1BhZ2luYXRvck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9wYWdpbmF0b3Itb3ZlcnZpZXcvcGFnaW5hdG9yLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9wYWdpbmF0b3ItaGFybmVzcy9wYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7XG4gIFBhZ2luYXRvckludGxFeGFtcGxlLFxuICBQYWdpbmF0b3JJbnRsRXhhbXBsZU1vZHVsZSxcbn0gZnJvbSAnLi9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUGFnaW5hdG9ySGFybmVzc0V4YW1wbGUsXG4gIFBhZ2luYXRvckludGxFeGFtcGxlLFxuICBQYWdpbmF0b3JPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUGFnaW5hdG9ySGFybmVzc0V4YW1wbGUsXG4gIC8vIFBhZ2luYXRvckludGxFeGFtcGxlIGlzIGltcG9ydGVkIHRocm91Z2ggaXQncyBvd24gZXhhbXBsZSBtb2R1bGUuXG4gIFBhZ2luYXRvck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5SW5wdXRNb2R1bGUsXG4gICAgTWF0TGVnYWN5UGFnaW5hdG9yTW9kdWxlLFxuICAgIFBhZ2luYXRvckludGxFeGFtcGxlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==