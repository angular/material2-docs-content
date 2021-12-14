import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconOverviewExample } from './icon-overview/icon-overview-example';
import { IconSvgExample } from './icon-svg/icon-svg-example';
import { IconHarnessExample } from './icon-harness/icon-harness-example';
import * as i0 from "@angular/core";
export { IconHarnessExample, IconOverviewExample, IconSvgExample };
const EXAMPLES = [IconHarnessExample, IconOverviewExample, IconSvgExample];
export class IconExamplesModule {
}
IconExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IconExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IconExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IconExamplesModule, declarations: [IconHarnessExample, IconOverviewExample, IconSvgExample], imports: [MatIconModule], exports: [IconHarnessExample, IconOverviewExample, IconSvgExample] });
IconExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IconExamplesModule, imports: [[MatIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IconExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pY29uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBQyxDQUFDO0FBRWpFLE1BQU0sUUFBUSxHQUFHLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFPM0UsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGlCQVBiLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsYUFHN0QsYUFBYSxhQUhQLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWM7Z0hBTzVELGtCQUFrQixZQUpwQixDQUFDLGFBQWEsQ0FBQzsyRkFJYixrQkFBa0I7a0JBTDlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUN4QixZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtJY29uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2ljb24tb3ZlcnZpZXcvaWNvbi1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7SWNvblN2Z0V4YW1wbGV9IGZyb20gJy4vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZSc7XG5pbXBvcnQge0ljb25IYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9pY29uLWhhcm5lc3MvaWNvbi1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0ljb25IYXJuZXNzRXhhbXBsZSwgSWNvbk92ZXJ2aWV3RXhhbXBsZSwgSWNvblN2Z0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtJY29uSGFybmVzc0V4YW1wbGUsIEljb25PdmVydmlld0V4YW1wbGUsIEljb25TdmdFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdEljb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=