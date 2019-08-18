import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { TimesheetModel } from 'src/app/models/timesheet-model';
import * as moment from 'moment';
import { ToastrService } from "ngx-toastr";
import { TimesheetService } from 'src/app/services/timesheet.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  public timesheet: TimesheetModel = new TimesheetModel(0, 0, "", 0, "");
  public resourceList: Array<any> = [];
  public timesheetList: Array<any> = [];

  constructor(private _resourceService: ResourceService, private _toastr: ToastrService, private _timesheetService:TimesheetService) { }

  ngOnInit() {
    this.getAllResources();
    this.getAllTimesheet();
  }

  onClickEdit(singleSource) {
    this.timesheet.Id = singleSource.Id;
    this.timesheet.Date = singleSource.Date;
    this.timesheet.ResourceId = singleSource.ResourceId;
    this.timesheet.DateReported = moment().format("YYYY-MM-DD hh:mm:ss").toString();;
    this.timesheet.HoursWorked = singleSource.HoursWorked;
  }
 
  getAllResources(){
    this._resourceService.getAllResources().subscribe((data) => {
      var result;
      result = data;
      this.resourceList = [];
      this.resourceList = result;
    })
  }


  getAllTimesheet(){
    this._timesheetService.getAllTimesheets().subscribe((data) => {
      var result;
      result = data;
      this.timesheetList = [];
      this.timesheetList = result;
    })
  }

  insertResource() {
    this.timesheet.DateReported= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    if (this.timesheet.Id > 0) {
      this.updateResource();
    } else {
      this.addResource();
    }
  }

  addResource() {
    try {
      this._timesheetService.addTimesheet(this.timesheet).subscribe((data) => {
        this._toastr.success('Timesheet successfully', 'Ok');
        this.getAllTimesheet();
        this.cleanForm();
      }, (err) => {
        this._toastr.error('An error occurs inserting the timesheet!', 'Error')
      });
    } catch (error) {
      this._toastr.error('An error occurs inserting the timesheet!', 'Error')
    }
  }

  updateResource() {
    try {
      this._timesheetService.updateTimesheet(this.timesheet).subscribe((data) => {
        this._toastr.success('Timesheet updated successfully', 'Ok');
        this.getAllTimesheet();
        this.cleanForm();
      }, (err) => {
        this._toastr.error('An error occurs updating the timesheet!', 'Error')
      });
    } catch (error) {
      this._toastr.error('An error occurs updating the timesheet!', 'Error')
    }
  }
  onClickDelete(singleSource) {
    this.deleteResource(singleSource);
  }

  deleteResource(sourceData) {
    try {
      let confirmResponse = confirm("¿Are you sure to delete this timesheet?");
      if (confirmResponse) {
        this._timesheetService.deleteTimesheet(sourceData.Id).subscribe((data) => {
          this._toastr.success('The timesheet was deleted successfully', 'Ok');
          this.timesheetList = this.timesheetList.filter((item) => {
            return item.Id !== sourceData.Id;
          })
        }, (err) => {
          this._toastr.error('An error occurs deleting the timesheet!', 'Error')
        })
      }
    } catch (error) {
      this._toastr.error('An error occurs deleting the timesheet!', 'Error')
    }
  }

  cleanForm() {
    this.timesheet = new TimesheetModel(0, 0, "", 0, "");

  }

}
