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
    SortOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sort-overview-example',
                    template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n",
                    styles: [".mat-sort-header-container {\n  align-items: center;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    SortOverviewExample.ctorParameters = function () { return []; };
    return SortOverviewExample;
}());
export { SortOverviewExample };
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1vdmVydmlldy9zb3J0LW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVd4Qzs7R0FFRztBQUNIO0lBZ0JFO1FBVkEsYUFBUSxHQUFjO1lBQ3BCLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO1lBQ3JFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDMUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7U0FDckUsQ0FBQztRQUtBLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztZQUN2QyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuRCxLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDL0QsS0FBSyxLQUFLLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN0RCxLQUFLLFNBQVMsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsdWpCQUF5Qzs7aUJBRTFDOzs7O0lBbUNELDBCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0FsQ1ksbUJBQW1CO0FBb0NoQyxTQUFTLE9BQU8sQ0FBQyxDQUFrQixFQUFFLENBQWtCLEVBQUUsS0FBYztJQUNyRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzc2VydCB7XG4gIGNhbG9yaWVzOiBudW1iZXI7XG4gIGNhcmJzOiBudW1iZXI7XG4gIGZhdDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByb3RlaW46IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgU29ydGluZyBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb3J0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NvcnQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NvcnQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU29ydE92ZXJ2aWV3RXhhbXBsZSB7XG4gIGRlc3NlcnRzOiBEZXNzZXJ0W10gPSBbXG4gICAge25hbWU6ICdGcm96ZW4geW9ndXJ0JywgY2Fsb3JpZXM6IDE1OSwgZmF0OiA2LCBjYXJiczogMjQsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnSWNlIGNyZWFtIHNhbmR3aWNoJywgY2Fsb3JpZXM6IDIzNywgZmF0OiA5LCBjYXJiczogMzcsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnRWNsYWlyJywgY2Fsb3JpZXM6IDI2MiwgZmF0OiAxNiwgY2FyYnM6IDI0LCBwcm90ZWluOiA2fSxcbiAgICB7bmFtZTogJ0N1cGNha2UnLCBjYWxvcmllczogMzA1LCBmYXQ6IDQsIGNhcmJzOiA2NywgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdHaW5nZXJicmVhZCcsIGNhbG9yaWVzOiAzNTYsIGZhdDogMTYsIGNhcmJzOiA0OSwgcHJvdGVpbjogNH0sXG4gIF07XG5cbiAgc29ydGVkRGF0YTogRGVzc2VydFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc29ydGVkRGF0YSA9IHRoaXMuZGVzc2VydHMuc2xpY2UoKTtcbiAgfVxuXG4gIHNvcnREYXRhKHNvcnQ6IFNvcnQpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuICAgIGlmICghc29ydC5hY3RpdmUgfHwgc29ydC5kaXJlY3Rpb24gPT09ICcnKSB7XG4gICAgICB0aGlzLnNvcnRlZERhdGEgPSBkYXRhO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgaXNBc2MgPSBzb3J0LmRpcmVjdGlvbiA9PT0gJ2FzYyc7XG4gICAgICBzd2l0Y2ggKHNvcnQuYWN0aXZlKSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOiByZXR1cm4gY29tcGFyZShhLm5hbWUsIGIubmFtZSwgaXNBc2MpO1xuICAgICAgICBjYXNlICdjYWxvcmllcyc6IHJldHVybiBjb21wYXJlKGEuY2Fsb3JpZXMsIGIuY2Fsb3JpZXMsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAnZmF0JzogcmV0dXJuIGNvbXBhcmUoYS5mYXQsIGIuZmF0LCBpc0FzYyk7XG4gICAgICAgIGNhc2UgJ2NhcmJzJzogcmV0dXJuIGNvbXBhcmUoYS5jYXJicywgYi5jYXJicywgaXNBc2MpO1xuICAgICAgICBjYXNlICdwcm90ZWluJzogcmV0dXJuIGNvbXBhcmUoYS5wcm90ZWluLCBiLnByb3RlaW4sIGlzQXNjKTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZShhOiBudW1iZXIgfCBzdHJpbmcsIGI6IG51bWJlciB8IHN0cmluZywgaXNBc2M6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIChhIDwgYiA/IC0xIDogMSkgKiAoaXNBc2MgPyAxIDogLTEpO1xufVxuIl19