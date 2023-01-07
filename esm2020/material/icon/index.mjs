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
IconExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: IconExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IconExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.0-rc.0", ngImport: i0, type: IconExamplesModule, declarations: [IconHarnessExample, IconOverviewExample, IconSvgExample], imports: [MatIconModule], exports: [IconHarnessExample, IconOverviewExample, IconSvgExample] });
IconExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: IconExamplesModule, imports: [MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: IconExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pY29uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBQyxDQUFDO0FBRWpFLE1BQU0sUUFBUSxHQUFHLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFPM0UsTUFBTSxPQUFPLGtCQUFrQjs7b0hBQWxCLGtCQUFrQjtxSEFBbEIsa0JBQWtCLGlCQVBiLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsYUFHN0QsYUFBYSxhQUhQLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWM7cUhBTzVELGtCQUFrQixZQUpuQixhQUFhO2dHQUlaLGtCQUFrQjtrQkFMOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0ljb25PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vaWNvbi1vdmVydmlldy9pY29uLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtJY29uU3ZnRXhhbXBsZX0gZnJvbSAnLi9pY29uLXN2Zy9pY29uLXN2Zy1leGFtcGxlJztcbmltcG9ydCB7SWNvbkhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2ljb24taGFybmVzcy9pY29uLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7SWNvbkhhcm5lc3NFeGFtcGxlLCBJY29uT3ZlcnZpZXdFeGFtcGxlLCBJY29uU3ZnRXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW0ljb25IYXJuZXNzRXhhbXBsZSwgSWNvbk92ZXJ2aWV3RXhhbXBsZSwgSWNvblN2Z0V4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0SWNvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==