import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Basic slider
 */
class SliderOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SliderOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SliderOverviewExample, isStandalone: true, selector: "slider-overview-example", ngImport: i0, template: "<mat-slider>\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
export { SliderOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SliderOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-overview-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider>\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLW92ZXJ2aWV3L3NsaWRlci1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1vdmVydmlldy9zbGlkZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7QUFFekQ7O0dBRUc7QUFDSCxNQU9hLHFCQUFxQjs4R0FBckIscUJBQXFCO2tHQUFyQixxQkFBcUIsbUZDYmxDLHlEQUdBLDJGRFFZLGVBQWU7O1NBRWQscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBUGpDLFNBQVM7K0JBQ0UseUJBQXlCLGNBR3ZCLElBQUksV0FDUCxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBzbGlkZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGVyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTbGlkZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtc2xpZGVyPlxuICA8aW5wdXQgbWF0U2xpZGVyVGh1bWI+XG48L21hdC1zbGlkZXI+XG4iXX0=