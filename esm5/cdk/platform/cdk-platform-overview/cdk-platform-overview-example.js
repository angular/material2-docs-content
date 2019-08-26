import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';
/**
 * @title Platform overview
 */
var CdkPlatformOverviewExample = /** @class */ (function () {
    function CdkPlatformOverviewExample(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
    CdkPlatformOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-platform-overview-example',
            template: "<h3>Platform information:</h3>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [Platform])
    ], CdkPlatformOverviewExample);
    return CdkPlatformOverviewExample;
}());
export { CdkPlatformOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFFBQVEsRUFDUiw2QkFBNkIsRUFDN0Isc0JBQXNCLEdBQ3ZCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0I7O0dBRUc7QUFNSDtJQUtFLG9DQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSnJDLHdCQUFtQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxrQ0FBNkIsR0FBRyw2QkFBNkIsRUFBRSxDQUFDO1FBQ2hFLDJCQUFzQixHQUFHLHNCQUFzQixFQUFFLENBQUM7SUFFVixDQUFDO0lBTDlCLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLHVmQUFpRDs7U0FFbEQsQ0FBQztpREFNNkIsUUFBUTtPQUwxQiwwQkFBMEIsQ0FNdEM7SUFBRCxpQ0FBQztDQUFBLEFBTkQsSUFNQztTQU5ZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldFN1cHBvcnRlZElucHV0VHlwZXMsXG4gIFBsYXRmb3JtLFxuICBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyxcbiAgc3VwcG9ydHNTY3JvbGxCZWhhdmlvcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcblxuLyoqXG4gKiBAdGl0bGUgUGxhdGZvcm0gb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka1BsYXRmb3JtT3ZlcnZpZXdFeGFtcGxlIHtcbiAgc3VwcG9ydGVkSW5wdXRUeXBlcyA9IEFycmF5LmZyb20oZ2V0U3VwcG9ydGVkSW5wdXRUeXBlcygpKS5qb2luKCcsICcpO1xuICBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IgPSBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cbn1cbiJdfQ==