import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressSpinnerConfigurableExample } from './progress-spinner-configurable/progress-spinner-configurable-example';
import { ProgressSpinnerOverviewExample } from './progress-spinner-overview/progress-spinner-overview-example';
import * as i0 from "@angular/core";
export { ProgressSpinnerConfigurableExample, ProgressSpinnerOverviewExample, };
const EXAMPLES = [
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
];
let ProgressSpinnerExamplesModule = /** @class */ (() => {
    class ProgressSpinnerExamplesModule {
    }
    ProgressSpinnerExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProgressSpinnerExamplesModule });
    ProgressSpinnerExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProgressSpinnerExamplesModule_Factory(t) { return new (t || ProgressSpinnerExamplesModule)(); }, imports: [[
                CommonModule,
                MatCardModule,
                MatProgressSpinnerModule,
                MatRadioModule,
                MatSliderModule,
                FormsModule,
            ]] });
    return ProgressSpinnerExamplesModule;
})();
export { ProgressSpinnerExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressSpinnerExamplesModule, { declarations: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerOverviewExample], imports: [CommonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressSpinnerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatSliderModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsa0NBQWtDLEVBQ25DLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLCtEQUErRCxDQUFDOztBQUV2RSxPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLDhCQUE4QixHQUMvQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixrQ0FBa0M7SUFDbEMsOEJBQThCO0NBQy9CLENBQUM7QUFFRjtJQUFBLE1BYWEsNkJBQTZCOztxRUFBN0IsNkJBQTZCOzZJQUE3Qiw2QkFBNkIsa0JBWi9CO2dCQUNQLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYix3QkFBd0I7Z0JBQ3hCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixXQUFXO2FBQ1o7d0NBaENIO0tBc0NDO1NBRFksNkJBQTZCO3dGQUE3Qiw2QkFBNkIsbUJBakJ4QyxrQ0FBa0M7UUFDbEMsOEJBQThCLGFBSzVCLFlBQVk7UUFDWixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsV0FBVyxhQVhiLGtDQUFrQztRQUNsQyw4QkFBOEI7a0RBZ0JuQiw2QkFBNkI7Y0FiekMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2Isd0JBQXdCO29CQUN4QixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7XG4gIFByb2dyZXNzU3Bpbm5lckNvbmZpZ3VyYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS9wcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIFByb2dyZXNzU3Bpbm5lck92ZXJ2aWV3RXhhbXBsZVxufSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXItb3ZlcnZpZXcvcHJvZ3Jlc3Mtc3Bpbm5lci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUHJvZ3Jlc3NTcGlubmVyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NTcGlubmVyT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFByb2dyZXNzU3Bpbm5lckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFByb2dyZXNzU3Bpbm5lck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcGlubmVyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19