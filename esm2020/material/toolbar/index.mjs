import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarBasicExample } from './toolbar-basic/toolbar-basic-example';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import { ToolbarHarnessExample } from './toolbar-harness/toolbar-harness-example';
import * as i0 from "@angular/core";
export { ToolbarBasicExample, ToolbarHarnessExample, ToolbarMultirowExample, ToolbarOverviewExample, };
const EXAMPLES = [
    ToolbarBasicExample,
    ToolbarHarnessExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
export class ToolbarExamplesModule {
}
ToolbarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ToolbarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToolbarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ToolbarExamplesModule, declarations: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatButtonModule,
        MatIconModule,
        MatToolbarModule], exports: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample] });
ToolbarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ToolbarExamplesModule, imports: [[
            MatButtonModule,
            MatIconModule,
            MatToolbarModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ToolbarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatButtonModule,
                        MatIconModule,
                        MatToolbarModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFaEYsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3RCLHNCQUFzQixHQUN2QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7Q0FDdkIsQ0FBQztBQVlGLE1BQU0sT0FBTyxxQkFBcUI7OzBIQUFyQixxQkFBcUI7MkhBQXJCLHFCQUFxQixpQkFoQmhDLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHNCQUFzQixhQUtwQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGdCQUFnQixhQVZsQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixzQkFBc0I7MkhBYVgscUJBQXFCLFlBVHZCO1lBQ1AsZUFBZTtZQUNmLGFBQWE7WUFDYixnQkFBZ0I7U0FDakI7bUdBS1UscUJBQXFCO2tCQVZqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7VG9vbGJhckJhc2ljRXhhbXBsZX0gZnJvbSAnLi90b29sYmFyLWJhc2ljL3Rvb2xiYXItYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2xiYXJNdWx0aXJvd0V4YW1wbGV9IGZyb20gJy4vdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sYmFyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItb3ZlcnZpZXcvdG9vbGJhci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7VG9vbGJhckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItaGFybmVzcy90b29sYmFyLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFRvb2xiYXJCYXNpY0V4YW1wbGUsXG4gIFRvb2xiYXJIYXJuZXNzRXhhbXBsZSxcbiAgVG9vbGJhck11bHRpcm93RXhhbXBsZSxcbiAgVG9vbGJhck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUb29sYmFyQmFzaWNFeGFtcGxlLFxuICBUb29sYmFySGFybmVzc0V4YW1wbGUsXG4gIFRvb2xiYXJNdWx0aXJvd0V4YW1wbGUsXG4gIFRvb2xiYXJPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=