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
class ToolbarExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ToolbarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ToolbarExamplesModule, declarations: [ToolbarBasicExample,
            ToolbarHarnessExample,
            ToolbarMultirowExample,
            ToolbarOverviewExample], imports: [MatButtonModule, MatIconModule, MatToolbarModule], exports: [ToolbarBasicExample,
            ToolbarHarnessExample,
            ToolbarMultirowExample,
            ToolbarOverviewExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ToolbarExamplesModule, imports: [MatButtonModule, MatIconModule, MatToolbarModule] }); }
}
export { ToolbarExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ToolbarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatIconModule, MatToolbarModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFaEYsT0FBTyxFQUFDLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFDLENBQUM7QUFFcEcsTUFBTSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7Q0FDdkIsQ0FBQztBQUVGLE1BS2EscUJBQXFCO21IQUFyQixxQkFBcUI7b0hBQXJCLHFCQUFxQixpQkFYaEMsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsc0JBQXNCLGFBSVosZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsYUFQMUQsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsc0JBQXNCO29IQVFYLHFCQUFxQixZQUp0QixlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQjs7U0FJL0MscUJBQXFCO2dHQUFyQixxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDM0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7VG9vbGJhckJhc2ljRXhhbXBsZX0gZnJvbSAnLi90b29sYmFyLWJhc2ljL3Rvb2xiYXItYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2xiYXJNdWx0aXJvd0V4YW1wbGV9IGZyb20gJy4vdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sYmFyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItb3ZlcnZpZXcvdG9vbGJhci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7VG9vbGJhckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItaGFybmVzcy90b29sYmFyLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7VG9vbGJhckJhc2ljRXhhbXBsZSwgVG9vbGJhckhhcm5lc3NFeGFtcGxlLCBUb29sYmFyTXVsdGlyb3dFeGFtcGxlLCBUb29sYmFyT3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRvb2xiYXJCYXNpY0V4YW1wbGUsXG4gIFRvb2xiYXJIYXJuZXNzRXhhbXBsZSxcbiAgVG9vbGJhck11bHRpcm93RXhhbXBsZSxcbiAgVG9vbGJhck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdFRvb2xiYXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=