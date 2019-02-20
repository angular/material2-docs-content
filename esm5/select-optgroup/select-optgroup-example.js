import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/** @title Select with option groups */
var SelectOptgroupExample = /** @class */ (function () {
    function SelectOptgroupExample() {
        this.pokemonControl = new FormControl();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
    SelectOptgroupExample = tslib_1.__decorate([
        Component({
            selector: 'select-optgroup-example',
            template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], SelectOptgroupExample);
    return SelectOptgroupExample;
}());
export { SelectOptgroupExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQWEzQyx1Q0FBdUM7QUFNdkM7SUFMQTtRQU1FLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFtQjtZQUM5QjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7b0JBQzlDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO29CQUN4QyxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQztpQkFDakQ7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztvQkFDNUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7b0JBQzFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUN6QzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO29CQUNoRCxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztvQkFDeEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7aUJBQzNDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7b0JBQ2xDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFwQ1kscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsMDZCQUEyQzs7U0FFNUMsQ0FBQztPQUNXLHFCQUFxQixDQW9DakM7SUFBRCw0QkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9rZW1vbkdyb3VwIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBva2Vtb246IFBva2Vtb25bXTtcbn1cblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBvcHRpb24gZ3JvdXBzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0Z3JvdXBFeGFtcGxlIHtcbiAgcG9rZW1vbkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcG9rZW1vbkdyb3VwczogUG9rZW1vbkdyb3VwW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0dyYXNzJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnYnVsYmFzYXVyLTAnLCB2aWV3VmFsdWU6ICdCdWxiYXNhdXInfSxcbiAgICAgICAge3ZhbHVlOiAnb2RkaXNoLTEnLCB2aWV3VmFsdWU6ICdPZGRpc2gnfSxcbiAgICAgICAge3ZhbHVlOiAnYmVsbHNwcm91dC0yJywgdmlld1ZhbHVlOiAnQmVsbHNwcm91dCd9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV2F0ZXInLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdzcXVpcnRsZS0zJywgdmlld1ZhbHVlOiAnU3F1aXJ0bGUnfSxcbiAgICAgICAge3ZhbHVlOiAncHN5ZHVjay00Jywgdmlld1ZhbHVlOiAnUHN5ZHVjayd9LFxuICAgICAgICB7dmFsdWU6ICdob3JzZWEtNScsIHZpZXdWYWx1ZTogJ0hvcnNlYSd9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRmlyZScsXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnY2hhcm1hbmRlci02Jywgdmlld1ZhbHVlOiAnQ2hhcm1hbmRlcid9LFxuICAgICAgICB7dmFsdWU6ICd2dWxwaXgtNycsIHZpZXdWYWx1ZTogJ1Z1bHBpeCd9LFxuICAgICAgICB7dmFsdWU6ICdmbGFyZW9uLTgnLCB2aWV3VmFsdWU6ICdGbGFyZW9uJ31cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQc3ljaGljJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnbWV3LTknLCB2aWV3VmFsdWU6ICdNZXcnfSxcbiAgICAgICAge3ZhbHVlOiAnbWV3dHdvLTEwJywgdmlld1ZhbHVlOiAnTWV3dHdvJ30sXG4gICAgICBdXG4gICAgfVxuICBdO1xufVxuIl19