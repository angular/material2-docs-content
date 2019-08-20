import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Sorting overview
 */
var SortOverviewExample = /** @class */ (function () {
    function SortOverviewExample() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    SortOverviewExample.prototype.sortData = function (sort) {
        var data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    };
    SortOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'sort-overview-example',
            template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n",
            styles: [".mat-sort-header-container {\n  align-items: center;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SortOverviewExample);
    return SortOverviewExample;
}());
export { SortOverviewExample };
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1vdmVydmlldy9zb3J0LW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFXeEM7O0dBRUc7QUFNSDtJQVdFO1FBVkEsYUFBUSxHQUFjO1lBQ3BCLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO1lBQ3JFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDMUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7U0FDckUsQ0FBQztRQUtBLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztZQUN2QyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuRCxLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDL0QsS0FBSyxLQUFLLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN0RCxLQUFLLFNBQVMsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQ1UsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsdWpCQUF5Qzs7U0FFMUMsQ0FBQzs7T0FDVyxtQkFBbUIsQ0FrQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSxtQkFBbUI7QUFvQ2hDLFNBQVMsT0FBTyxDQUFDLENBQWtCLEVBQUUsQ0FBa0IsRUFBRSxLQUFjO0lBQ3JFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcblxuZXhwb3J0IGludGVyZmFjZSBEZXNzZXJ0IHtcbiAgY2Fsb3JpZXM6IG51bWJlcjtcbiAgY2FyYnM6IG51bWJlcjtcbiAgZmF0OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJvdGVpbjogbnVtYmVyO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTb3J0aW5nIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvcnQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc29ydC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc29ydC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0T3ZlcnZpZXdFeGFtcGxlIHtcbiAgZGVzc2VydHM6IERlc3NlcnRbXSA9IFtcbiAgICB7bmFtZTogJ0Zyb3plbiB5b2d1cnQnLCBjYWxvcmllczogMTU5LCBmYXQ6IDYsIGNhcmJzOiAyNCwgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdJY2UgY3JlYW0gc2FuZHdpY2gnLCBjYWxvcmllczogMjM3LCBmYXQ6IDksIGNhcmJzOiAzNywgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdFY2xhaXInLCBjYWxvcmllczogMjYyLCBmYXQ6IDE2LCBjYXJiczogMjQsIHByb3RlaW46IDZ9LFxuICAgIHtuYW1lOiAnQ3VwY2FrZScsIGNhbG9yaWVzOiAzMDUsIGZhdDogNCwgY2FyYnM6IDY3LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0dpbmdlcmJyZWFkJywgY2Fsb3JpZXM6IDM1NiwgZmF0OiAxNiwgY2FyYnM6IDQ5LCBwcm90ZWluOiA0fSxcbiAgXTtcblxuICBzb3J0ZWREYXRhOiBEZXNzZXJ0W107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb3J0ZWREYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuICB9XG5cbiAgc29ydERhdGEoc29ydDogU29ydCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRlc3NlcnRzLnNsaWNlKCk7XG4gICAgaWYgKCFzb3J0LmFjdGl2ZSB8fCBzb3J0LmRpcmVjdGlvbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGE7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBpc0FzYyA9IHNvcnQuZGlyZWN0aW9uID09PSAnYXNjJztcbiAgICAgIHN3aXRjaCAoc29ydC5hY3RpdmUpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6IHJldHVybiBjb21wYXJlKGEubmFtZSwgYi5uYW1lLCBpc0FzYyk7XG4gICAgICAgIGNhc2UgJ2NhbG9yaWVzJzogcmV0dXJuIGNvbXBhcmUoYS5jYWxvcmllcywgYi5jYWxvcmllcywgaXNBc2MpO1xuICAgICAgICBjYXNlICdmYXQnOiByZXR1cm4gY29tcGFyZShhLmZhdCwgYi5mYXQsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAnY2FyYnMnOiByZXR1cm4gY29tcGFyZShhLmNhcmJzLCBiLmNhcmJzLCBpc0FzYyk7XG4gICAgICAgIGNhc2UgJ3Byb3RlaW4nOiByZXR1cm4gY29tcGFyZShhLnByb3RlaW4sIGIucHJvdGVpbiwgaXNBc2MpO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlKGE6IG51bWJlciB8IHN0cmluZywgYjogbnVtYmVyIHwgc3RyaW5nLCBpc0FzYzogYm9vbGVhbikge1xuICByZXR1cm4gKGEgPCBiID8gLTEgOiAxKSAqIChpc0FzYyA/IDEgOiAtMSk7XG59XG4iXX0=