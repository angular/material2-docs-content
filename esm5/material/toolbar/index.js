import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import * as i0 from "@angular/core";
export { ToolbarMultirowExample, ToolbarOverviewExample, };
var EXAMPLES = [
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
var ToolbarExamplesModule = /** @class */ (function () {
    function ToolbarExamplesModule() {
    }
    ToolbarExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatIconModule,
                        MatToolbarModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    ToolbarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ToolbarExamplesModule });
    ToolbarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); }, imports: [[
                MatIconModule,
                MatToolbarModule,
            ]] });
    return ToolbarExamplesModule;
}());
export { ToolbarExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatIconModule,
        MatToolbarModule], exports: [ToolbarMultirowExample,
        ToolbarOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatIconModule,
                    MatToolbarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDOztBQUVuRixPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHNCQUFzQixHQUN2QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixzQkFBc0I7SUFDdEIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFFRjtJQUFBO0tBVUM7O2dCQVZBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOzs2REFDWSxxQkFBcUI7NkhBQXJCLHFCQUFxQixrQkFSdkI7Z0JBQ1AsYUFBYTtnQkFDYixnQkFBZ0I7YUFDakI7Z0NBcEJIO0NBMEJDLEFBVkQsSUFVQztTQURZLHFCQUFxQjt3RkFBckIscUJBQXFCLG1CQWJoQyxzQkFBc0I7UUFDdEIsc0JBQXNCLGFBS3BCLGFBQWE7UUFDYixnQkFBZ0IsYUFQbEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtrREFZWCxxQkFBcUI7Y0FUakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0VG9vbGJhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XG5pbXBvcnQge1Rvb2xiYXJNdWx0aXJvd0V4YW1wbGV9IGZyb20gJy4vdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sYmFyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItb3ZlcnZpZXcvdG9vbGJhci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVG9vbGJhck11bHRpcm93RXhhbXBsZSxcbiAgVG9vbGJhck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUb29sYmFyTXVsdGlyb3dFeGFtcGxlLFxuICBUb29sYmFyT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=