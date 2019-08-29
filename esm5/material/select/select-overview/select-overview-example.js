import { Component } from '@angular/core';
/**
 * @title Basic select
 */
var SelectOverviewExample = /** @class */ (function () {
    function SelectOverviewExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    SelectOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-overview-example',
                    template: "<h4>Basic mat-select</h4>\n<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>Basic native select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl required>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return SelectOverviewExample;
}());
export { SelectOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vdmVydmlldy9zZWxlY3Qtb3ZlcnZpZXctZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT3hDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFVBQUssR0FBVztZQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7SUFDSixDQUFDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsaWxCQUEyQzs7aUJBRTVDOztJQU9ELDRCQUFDO0NBQUEsQUFYRCxJQVdDO1NBTlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvb2Qge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgc2VsZWN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RPdmVydmlld0V4YW1wbGUge1xuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9XG4gIF07XG59XG4iXX0=