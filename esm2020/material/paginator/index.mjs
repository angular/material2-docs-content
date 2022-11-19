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
export class PaginatorExamplesModule {
}
PaginatorExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: PaginatorExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginatorExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: PaginatorExamplesModule, declarations: [PaginatorConfigurableExample,
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
        PaginatorOverviewExample] });
PaginatorExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: PaginatorExamplesModule, imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        PaginatorIntlExampleModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: PaginatorExamplesModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNyRyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixHQUMzQixNQUFNLHlDQUF5QyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFcEUsT0FBTyxFQUNMLDRCQUE0QixFQUM1Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHdCQUF3QixHQUN6QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLG9FQUFvRTtJQUNwRSx3QkFBd0I7Q0FDekIsQ0FBQztBQWlCRixNQUFNLE9BQU8sdUJBQXVCOztvSEFBdkIsdUJBQXVCO3FIQUF2Qix1QkFBdUIsaUJBckJsQyw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLG9FQUFvRTtRQUNwRSx3QkFBd0IsYUFLdEIsWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQixXQUFXLGFBaEJiLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsb0VBQW9FO1FBQ3BFLHdCQUF3QjtxSEFrQmIsdUJBQXVCLFlBYmhDLFlBQVk7UUFDWixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsV0FBVzsyRkFLRix1QkFBdUI7a0JBZm5DLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsMEJBQTBCO3dCQUMxQixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge1BhZ2luYXRvckNvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS9wYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtQYWdpbmF0b3JPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vcGFnaW5hdG9yLW92ZXJ2aWV3L3BhZ2luYXRvci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7UGFnaW5hdG9ySGFybmVzc0V4YW1wbGV9IGZyb20gJy4vcGFnaW5hdG9yLWhhcm5lc3MvcGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQYWdpbmF0b3JJbnRsRXhhbXBsZSxcbiAgUGFnaW5hdG9ySW50bEV4YW1wbGVNb2R1bGUsXG59IGZyb20gJy4vcGFnaW5hdG9yLWludGwvcGFnaW5hdG9yLWludGwtZXhhbXBsZSc7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRTbGlkZVRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcblxuZXhwb3J0IHtcbiAgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUGFnaW5hdG9ySGFybmVzc0V4YW1wbGUsXG4gIFBhZ2luYXRvckludGxFeGFtcGxlLFxuICBQYWdpbmF0b3JPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUGFnaW5hdG9ySGFybmVzc0V4YW1wbGUsXG4gIC8vIFBhZ2luYXRvckludGxFeGFtcGxlIGlzIGltcG9ydGVkIHRocm91Z2ggaXQncyBvd24gZXhhbXBsZSBtb2R1bGUuXG4gIFBhZ2luYXRvck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIFBhZ2luYXRvckludGxFeGFtcGxlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==