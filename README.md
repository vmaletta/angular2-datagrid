# angular2-datagrid
Angular2-datagrid provides functionality to create tables, image grid, etc.
It allows developer to create desired template.

# Demo
See [demo](https://jmvtrinidad.github.io/angular2-datagrid/) here.

##Getting started

1. Install package.

    ```
    npm i angular2-datagrid
    ```

2. Specify your template. This is sample template to view data on [table]().

    ```html
    <section>
        <h1>Table Demo</h1>
        <div class="row">
            <div class="col-xs-12">
                <div class="form-inline">
                    <div class="form-group">
                        <label class="" for="Search">Search</label>
                        <input type="text" name="Search" class="form-control" title="Search" 
                            [(ngModel)]="table.searchValue.username"/>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success"
                            (click)="addRecordPlugin()">Add record</button>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-warning" 
                            (click)="removeAllEvenIdPlugin()">Remove all even Id</button>
                    </div>
                    <div class="form-group pull-right">
                        <label class="" for="PageSize">Page Size</label>
                        <select class="form-control" name="pageSize" 
                            [(ngModel)]="table.pageSize">
                            <option [ngValue]="5">5</option>
                            <option [ngValue]="10">10</option>
                            <option [ngValue]="15">15</option>
                        </select>
                    </div>
                </div>
        </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox"
                                        (change)="changedActiveStatus($event)"
                                        [checked]="true">
                                    Active
                                </label>
                            </div>
                            </th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngIf="!table.totalFilteredRows">
                            <td colspan="4" class="text-center">No records found.</td>
                        </tr>
                        <tr *ngFor="let user of table.itemsOnCurrentPage">
                            <td>
                                <div class="checkbox">
                                    <label>
                                    <input type="checkbox" 
                                        [(ngModel)]="user.active">
                                </label>
                                </div>
                            </td>
                            <td>{{user.username}}</td>
                            <td>{{user.name}}</td>
                            <td>
                                <button class="btn btn-danger"
                                    (click)="removeRecordPlugin(user)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <pagination [maxPageIndex]="table.maxPageIndex" 
                    (pageNumberChanged)="table.currentPageIndex = $event">
        </pagination>

        <div class="row">
            <div class="col-xs-12">            
                <pre>
                    <h3>Recently deleted users</h3>{{recentlyRemoveUsers | json}}
                </pre>
            </div>
        </div>
    </section>
    ```

3. Instantiate ng2-datagrid [class]().

    ```TypeScript
    
    this.table = new NgDataGridModel<User>([]);
    ```

5. [demo](http://jmvtrinidad.github.io/angular2-datagrid/)

# Webpack-starter
Based on [webpack-starter](https://github.com/AngularClass/angular2-webpack-starter).

# License
 [MIT](/LICENSE)
