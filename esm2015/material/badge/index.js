import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BadgeOverviewExample } from './badge-overview/badge-overview-example';
import { BadgeHarnessExample } from './badge-harness/badge-harness-example';
import * as i0 from "@angular/core";
export { BadgeOverviewExample, BadgeHarnessExample };
const EXAMPLES = [
    BadgeOverviewExample,
    BadgeHarnessExample
];
export class BadgeExamplesModule {
}
BadgeExamplesModule.ɵfac = function BadgeExamplesModule_Factory(t) { return new (t || BadgeExamplesModule)(); };
BadgeExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BadgeExamplesModule });
BadgeExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatBadgeModule,
            MatButtonModule,
            MatIconModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BadgeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatBadgeModule,
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BadgeExamplesModule, { declarations: [BadgeOverviewExample,
        BadgeHarnessExample], imports: [MatBadgeModule,
        MatButtonModule,
        MatIconModule], exports: [BadgeOverviewExample,
        BadgeHarnessExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztBQUVuRCxNQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDcEIsQ0FBQztBQVlGLE1BQU0sT0FBTyxtQkFBbUI7O3NGQUFuQixtQkFBbUI7cUVBQW5CLG1CQUFtQjt5RUFUckI7WUFDUCxjQUFjO1lBQ2QsZUFBZTtZQUNmLGFBQWE7U0FDZDt1RkFLVSxtQkFBbUI7Y0FWL0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzt3RkFDWSxtQkFBbUIsbUJBZDlCLG9CQUFvQjtRQUNwQixtQkFBbUIsYUFLakIsY0FBYztRQUNkLGVBQWU7UUFDZixhQUFhLGFBUmYsb0JBQW9CO1FBQ3BCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCYWRnZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2UnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtCYWRnZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7QmFkZ2VIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9iYWRnZS1oYXJuZXNzL2JhZGdlLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7QmFkZ2VPdmVydmlld0V4YW1wbGUsIEJhZGdlSGFybmVzc0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQmFkZ2VPdmVydmlld0V4YW1wbGUsXG4gIEJhZGdlSGFybmVzc0V4YW1wbGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19