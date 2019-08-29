import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
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
                },] }
    ];
    return ToolbarExamplesModule;
}());
export { ToolbarExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLElBQU0sUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLHNCQUFzQjtDQUN2QixDQUFDO0FBRUY7SUFBQTtJQVNBLENBQUM7O2dCQVRBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O0lBRUQsNEJBQUM7Q0FBQSxBQVRELElBU0M7U0FEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHtUb29sYmFyTXVsdGlyb3dFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItbXVsdGlyb3cvdG9vbGJhci1tdWx0aXJvdy1leGFtcGxlJztcbmltcG9ydCB7VG9vbGJhck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90b29sYmFyLW92ZXJ2aWV3L3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUb29sYmFyTXVsdGlyb3dFeGFtcGxlLFxuICBUb29sYmFyT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=