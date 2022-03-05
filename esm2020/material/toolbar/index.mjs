import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarBasicExample } from './toolbar-basic/toolbar-basic-example';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import { ToolbarHarnessExample } from './toolbar-harness/toolbar-harness-example';
import * as i0 from "@angular/core";
export { ToolbarBasicExample, ToolbarHarnessExample, ToolbarMultirowExample, ToolbarOverviewExample };
const EXAMPLES = [
    ToolbarBasicExample,
    ToolbarHarnessExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
export class ToolbarExamplesModule {
}
ToolbarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: ToolbarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToolbarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: ToolbarExamplesModule, declarations: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatButtonModule, MatIconModule, MatToolbarModule], exports: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample] });
ToolbarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: ToolbarExamplesModule, imports: [[MatButtonModule, MatIconModule, MatToolbarModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: ToolbarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatIconModule, MatToolbarModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFaEYsT0FBTyxFQUFDLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFDLENBQUM7QUFFcEcsTUFBTSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7Q0FDdkIsQ0FBQztBQU9GLE1BQU0sT0FBTyxxQkFBcUI7O3lIQUFyQixxQkFBcUI7MEhBQXJCLHFCQUFxQixpQkFYaEMsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsc0JBQXNCLGFBSVosZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsYUFQMUQsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsc0JBQXNCOzBIQVFYLHFCQUFxQixZQUp2QixDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7a0dBSWhELHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDO29CQUMzRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHtUb29sYmFyQmFzaWNFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItYmFzaWMvdG9vbGJhci1iYXNpYy1leGFtcGxlJztcbmltcG9ydCB7VG9vbGJhck11bHRpcm93RXhhbXBsZX0gZnJvbSAnLi90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2xiYXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vdG9vbGJhci1vdmVydmlldy90b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sYmFySGFybmVzc0V4YW1wbGV9IGZyb20gJy4vdG9vbGJhci1oYXJuZXNzL3Rvb2xiYXItaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtUb29sYmFyQmFzaWNFeGFtcGxlLCBUb29sYmFySGFybmVzc0V4YW1wbGUsIFRvb2xiYXJNdWx0aXJvd0V4YW1wbGUsIFRvb2xiYXJPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgVG9vbGJhckJhc2ljRXhhbXBsZSxcbiAgVG9vbGJhckhhcm5lc3NFeGFtcGxlLFxuICBUb29sYmFyTXVsdGlyb3dFeGFtcGxlLFxuICBUb29sYmFyT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0VG9vbGJhck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==