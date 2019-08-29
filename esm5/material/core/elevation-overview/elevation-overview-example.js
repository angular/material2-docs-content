import { Component } from '@angular/core';
/**
 * @title Elevation CSS classes
 */
var ElevationOverviewExample = /** @class */ (function () {
    function ElevationOverviewExample() {
        this.isActive = false;
    }
    ElevationOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'elevation-overview-example',
                    template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n",
                    styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"]
                }] }
    ];
    return ElevationOverviewExample;
}());
export { ElevationOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvY29yZS9lbGV2YXRpb24tb3ZlcnZpZXcvZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUV0QywwT0FBOEM7O2lCQUMvQzs7SUFHRCwrQkFBQztDQUFBLEFBUEQsSUFPQztTQUZZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgRWxldmF0aW9uIENTUyBjbGFzc2VzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFbGV2YXRpb25PdmVydmlld0V4YW1wbGUge1xuICBpc0FjdGl2ZSA9IGZhbHNlO1xufVxuIl19