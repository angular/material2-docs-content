import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BadgeOverviewExample } from './badge-overview/badge-overview-example';
import * as i0 from "@angular/core";
export { BadgeOverviewExample };
var EXAMPLES = [
    BadgeOverviewExample,
];
var BadgeExamplesModule = /** @class */ (function () {
    function BadgeExamplesModule() {
    }
    BadgeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: BadgeExamplesModule });
    BadgeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BadgeExamplesModule_Factory(t) { return new (t || BadgeExamplesModule)(); }, imports: [[
                MatBadgeModule,
                MatButtonModule,
                MatIconModule,
            ]] });
    return BadgeExamplesModule;
}());
export { BadgeExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BadgeExamplesModule, { declarations: [BadgeOverviewExample], imports: [MatBadgeModule,
        MatButtonModule,
        MatIconModule], exports: [BadgeOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BadgeExamplesModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQztBQUU5QixJQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtDQUNyQixDQUFDO0FBRUY7SUFBQTtLQVdDOzJEQURZLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGtCQVRyQjtnQkFDUCxjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsYUFBYTthQUNkOzhCQWpCSDtDQXVCQyxBQVhELElBV0M7U0FEWSxtQkFBbUI7d0ZBQW5CLG1CQUFtQixtQkFiOUIsb0JBQW9CLGFBS2xCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYSxhQVBmLG9CQUFvQjtrREFhVCxtQkFBbUI7Y0FWL0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJhZGdlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0JhZGdlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2JhZGdlLW92ZXJ2aWV3L2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge0JhZGdlT3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJhZGdlT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=