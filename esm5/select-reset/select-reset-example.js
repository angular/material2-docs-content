import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
    SelectResetExample = tslib_1.__decorate([
        Component({
            selector: 'select-reset-example',
            template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], SelectResetExample);
    return SelectResetExample;
}());
export { SelectResetExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLHNDQUFzQztBQU10QztJQUxBO1FBTUUsV0FBTSxHQUFhO1lBQ2pCLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxVQUFVO1lBQy9GLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVTtZQUM1RixXQUFXLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhO1lBQ3pGLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVk7WUFDeEYsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjO1lBQzFGLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUztZQUN6RixVQUFVLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsU0FBUztTQUNsRSxDQUFDO0lBQ0osQ0FBQztJQVZZLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLG1wQkFBd0M7O1NBRXpDLENBQUM7T0FDVyxrQkFBa0IsQ0FVOUI7SUFBRCx5QkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCByZXNldCBvcHRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1yZXNldC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1yZXNldC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RSZXNldEV4YW1wbGUge1xuICBzdGF0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLFxuICAgICdGbG9yaWRhJywgJ0dlb3JnaWEnLCAnSGF3YWlpJywgJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsICdLYW5zYXMnLCAnS2VudHVja3knLFxuICAgICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLFxuICAgICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsXG4gICAgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJywgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLFxuICAgICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJywgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXG4gIF07XG59XG4iXX0=