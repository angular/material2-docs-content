import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
function SelectResetExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var state_r24 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r24);
} }
/** @title Select with reset option */
var SelectResetExample = /** @class */ (function () {
    function SelectResetExample() {
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
    SelectResetExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-reset-example',
                    templateUrl: 'select-reset-example.html',
                    styleUrls: ['select-reset-example.css'],
                },] },
    ];
    SelectResetExample.ɵfac = function SelectResetExample_Factory(t) { return new (t || SelectResetExample)(); };
    SelectResetExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectResetExample, selectors: [["select-reset-example"]], decls: 24, vars: 1, consts: [[3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "id", "mySelectId"], ["value", "", "disabled", "", "selected", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectResetExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1, "mat-select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "State");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select");
            i0.ɵɵelementStart(6, "mat-option");
            i0.ɵɵtext(7, "None");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, SelectResetExample_mat_option_8_Template, 2, 2, "mat-option", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "h4");
            i0.ɵɵtext(10, "native html select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-form-field");
            i0.ɵɵelementStart(12, "mat-label");
            i0.ɵɵtext(13, "Select your car");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "select", 1);
            i0.ɵɵelement(15, "option", 2);
            i0.ɵɵelementStart(16, "option", 3);
            i0.ɵɵtext(17, "Volvo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option", 4);
            i0.ɵɵtext(19, "Saab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "option", 5);
            i0.ɵɵtext(21, "Mercedes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "option", 6);
            i0.ɵɵtext(23, "Audi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.states);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.NgForOf, i5.MatInput, i6.NgSelectOption, i6.ɵangular_packages_forms_forms_x], styles: [""] });
    return SelectResetExample;
}());
export { SelectResetExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectResetExample, [{
        type: Component,
        args: [{
                selector: 'select-reset-example',
                templateUrl: 'select-reset-example.html',
                styleUrls: ['select-reset-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0twQyxxQ0FBeUQ7SUFBQSxZQUFTO0lBQUEsaUJBQWE7OztJQUF0QyxpQ0FBZTtJQUFDLGVBQVM7SUFBVCwrQkFBUzs7QURIdEUsc0NBQXNDO0FBQ3RDO0lBQUE7UUFNRSxXQUFNLEdBQWE7WUFDakIsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFVBQVU7WUFDL0YsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVO1lBQzVGLFdBQVcsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWE7WUFDekYsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWTtZQUN4RixVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWM7WUFDMUYsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTO1lBQ3pGLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTO1NBQ2xFLENBQUM7S0FDSDs7Z0JBZkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUN4Qzs7d0ZBQ1ksa0JBQWtCOzJEQUFsQixrQkFBa0I7WUNSL0IsMEJBQUk7WUFBQSwwQkFBVTtZQUFBLGlCQUFLO1lBQ25CLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxxQkFBSztZQUFBLGlCQUFZO1lBQzVCLGtDQUNFO1lBQUEsa0NBQVk7WUFBQSxvQkFBSTtZQUFBLGlCQUFhO1lBQzdCLGlGQUF5RDtZQUMzRCxpQkFBYTtZQUNmLGlCQUFpQjtZQUVqQiwwQkFBSTtZQUFBLG1DQUFrQjtZQUFBLGlCQUFLO1lBQzNCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSxnQ0FBZTtZQUFBLGlCQUFZO1lBQ3RDLGtDQUNFO1lBQUEsNkJBQTRDO1lBQzVDLGtDQUFzQjtZQUFBLHNCQUFLO1lBQUEsaUJBQVM7WUFDcEMsa0NBQXFCO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNsQyxrQ0FBeUI7WUFBQSx5QkFBUTtZQUFBLGlCQUFTO1lBQzFDLGtDQUFxQjtZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDcEMsaUJBQVM7WUFDWCxpQkFBaUI7O1lBZEQsZUFBNEI7WUFBNUIsb0NBQTRCOzs2QkRMNUM7Q0FrQkMsQUFmRCxJQWVDO1NBVlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIHJlc2V0IG9wdGlvbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXJlc2V0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1yZXNldC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LXJlc2V0LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFJlc2V0RXhhbXBsZSB7XG4gIHN0YXRlczogc3RyaW5nW10gPSBbXG4gICAgJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnLCAnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsICdDb25uZWN0aWN1dCcsICdEZWxhd2FyZScsXG4gICAgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJywgJ0thbnNhcycsICdLZW50dWNreScsXG4gICAgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsXG4gICAgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLCAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJyxcbiAgICAnTmV3IFlvcmsnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnTm9ydGggRGFrb3RhJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsXG4gICAgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJywgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsXG4gICAgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLCAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcbiAgXTtcbn1cbiIsIjxoND5tYXQtc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TdGF0ZTwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdD5cbiAgICA8bWF0LW9wdGlvbj5Ob25lPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzdGF0ZSBvZiBzdGF0ZXNcIiBbdmFsdWVdPVwic3RhdGVcIj57e3N0YXRlfX08L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNlbGVjdCB5b3VyIGNhcjwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgaWQ9XCJteVNlbGVjdElkXCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPlZvbHZvPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19