import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
export var _filter = function (opt, value) {
    var filterValue = value.toLowerCase();
    return opt.filter(function (item) { return item.toLowerCase().indexOf(filterValue) === 0; });
};
/**
 * @title Option groups autocomplete
 */
var AutocompleteOptgroupExample = /** @class */ (function () {
    function AutocompleteOptgroupExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.stateForm = this._formBuilder.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
    }
    AutocompleteOptgroupExample.prototype.ngOnInit = function () {
        var _this = this;
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filterGroup(value); }));
    };
    AutocompleteOptgroupExample.prototype._filterGroup = function (value) {
        if (value) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    AutocompleteOptgroupExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-optgroup-example',
                    template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    /** @nocollapse */
    AutocompleteOptgroupExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    return AutocompleteOptgroupExample;
}());
export { AutocompleteOptgroupExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTzlDLE1BQU0sQ0FBQyxJQUFNLE9BQU8sR0FBRyxVQUFDLEdBQWEsRUFBRSxLQUFhO0lBQ2xELElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV4QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO0FBQzNFLENBQUMsQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUEwRUUscUNBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBbkU3QyxjQUFTLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDN0MsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDLENBQUM7UUFFSCxnQkFBVyxHQUFpQixDQUFDO2dCQUMzQixNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7YUFDcEQsRUFBRTtnQkFDRCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQzthQUNqRCxFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUNwQixFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQzthQUNuQixFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQzthQUNuQixFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUNsQixFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQzthQUNoRCxFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUM7YUFDOUIsRUFBRTtnQkFDRCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDckIsRUFBRTtnQkFDRCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxVQUFVO29CQUN0RCxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7YUFDckQsRUFBRTtnQkFDRCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxZQUFZO29CQUN6RCxZQUFZLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQzthQUM5RCxFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDO2FBQ3RDLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQ3hCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQ3hCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO2FBQzFDLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQzthQUM5QixFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNoQixFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7YUFDL0IsRUFBRTtnQkFDRCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7YUFDL0QsQ0FBQyxDQUFDO0lBSTZDLENBQUM7SUFFakQsOENBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRSxDQUFDLFlBQVk7YUFDcEUsSUFBSSxDQUNILFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQ3ZDLENBQUM7SUFDTixDQUFDO0lBRU8sa0RBQVksR0FBcEIsVUFBcUIsS0FBYTtRQUNoQyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLFdBQVc7aUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUE1RCxDQUE0RCxDQUFDO2lCQUMxRSxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOztnQkE1RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLGdqQkFBbUQ7O2lCQUVwRDs7OztnQkF0Qk8sV0FBVzs7SUErR25CLGtDQUFDO0NBQUEsQUE3RkQsSUE2RkM7U0F2RlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVHcm91cCB7XG4gIGxldHRlcjogc3RyaW5nO1xuICBuYW1lczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBfZmlsdGVyID0gKG9wdDogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gb3B0LmZpbHRlcihpdGVtID0+IGl0ZW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSA9PT0gMCk7XG59O1xuXG4vKipcbiAqIEB0aXRsZSBPcHRpb24gZ3JvdXBzIGF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGVGb3JtOiBGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgc3RhdGVHcm91cDogJycsXG4gIH0pO1xuXG4gIHN0YXRlR3JvdXBzOiBTdGF0ZUdyb3VwW10gPSBbe1xuICAgIGxldHRlcjogJ0EnLFxuICAgIG5hbWVzOiBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnQycsXG4gICAgbmFtZXM6IFsnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsICdDb25uZWN0aWN1dCddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdEJyxcbiAgICBuYW1lczogWydEZWxhd2FyZSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdGJyxcbiAgICBuYW1lczogWydGbG9yaWRhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0cnLFxuICAgIG5hbWVzOiBbJ0dlb3JnaWEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnSCcsXG4gICAgbmFtZXM6IFsnSGF3YWlpJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0knLFxuICAgIG5hbWVzOiBbJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdLJyxcbiAgICBuYW1lczogWydLYW5zYXMnLCAnS2VudHVja3knXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnTCcsXG4gICAgbmFtZXM6IFsnTG91aXNpYW5hJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ00nLFxuICAgIG5hbWVzOiBbJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLFxuICAgICAgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ04nLFxuICAgIG5hbWVzOiBbJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLFxuICAgICAgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnTm9ydGggRGFrb3RhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ08nLFxuICAgIG5hbWVzOiBbJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1AnLFxuICAgIG5hbWVzOiBbJ1Blbm5zeWx2YW5pYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdSJyxcbiAgICBuYW1lczogWydSaG9kZSBJc2xhbmQnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnUycsXG4gICAgbmFtZXM6IFsnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1QnLFxuICAgIG5hbWVzOiBbJ1Rlbm5lc3NlZScsICdUZXhhcyddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdVJyxcbiAgICBuYW1lczogWydVdGFoJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1YnLFxuICAgIG5hbWVzOiBbJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnVycsXG4gICAgbmFtZXM6IFsnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ11cbiAgfV07XG5cbiAgc3RhdGVHcm91cE9wdGlvbnM6IE9ic2VydmFibGU8U3RhdGVHcm91cFtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMuc3RhdGVGb3JtLmdldCgnc3RhdGVHcm91cCcpIS52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckdyb3VwKHZhbHVlOiBzdHJpbmcpOiBTdGF0ZUdyb3VwW10ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHNcbiAgICAgICAgLm1hcChncm91cCA9PiAoe2xldHRlcjogZ3JvdXAubGV0dGVyLCBuYW1lczogX2ZpbHRlcihncm91cC5uYW1lcywgdmFsdWUpfSkpXG4gICAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAubmFtZXMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHM7XG4gIH1cbn1cbiJdfQ==