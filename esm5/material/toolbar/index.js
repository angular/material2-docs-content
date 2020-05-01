import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarBasicExample } from './toolbar-basic/toolbar-basic-example';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import * as i0 from "@angular/core";
export { ToolbarBasicExample, ToolbarMultirowExample, ToolbarOverviewExample, };
var EXAMPLES = [
    ToolbarBasicExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
var ToolbarExamplesModule = /** @class */ (function () {
    function ToolbarExamplesModule() {
    }
    ToolbarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ToolbarExamplesModule });
    ToolbarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
                MatToolbarModule,
            ]] });
    return ToolbarExamplesModule;
}());
export { ToolbarExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarBasicExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatButtonModule,
        MatIconModule,
        MatToolbarModule], exports: [ToolbarBasicExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarExamplesModule, [{
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
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFFbkYsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFFRjtJQUFBO0tBV0M7NkRBRFkscUJBQXFCOzZIQUFyQixxQkFBcUIsa0JBVHZCO2dCQUNQLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixnQkFBZ0I7YUFDakI7Z0NBekJIO0NBK0JDLEFBWEQsSUFXQztTQURZLHFCQUFxQjt3RkFBckIscUJBQXFCLG1CQWZoQyxtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHNCQUFzQixhQUtwQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGdCQUFnQixhQVRsQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtrREFhWCxxQkFBcUI7Y0FWakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHtUb29sYmFyQmFzaWNFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItYmFzaWMvdG9vbGJhci1iYXNpYy1leGFtcGxlJztcbmltcG9ydCB7VG9vbGJhck11bHRpcm93RXhhbXBsZX0gZnJvbSAnLi90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2xiYXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vdG9vbGJhci1vdmVydmlldy90b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUb29sYmFyQmFzaWNFeGFtcGxlLFxuICBUb29sYmFyTXVsdGlyb3dFeGFtcGxlLFxuICBUb29sYmFyT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRvb2xiYXJCYXNpY0V4YW1wbGUsXG4gIFRvb2xiYXJNdWx0aXJvd0V4YW1wbGUsXG4gIFRvb2xiYXJPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=