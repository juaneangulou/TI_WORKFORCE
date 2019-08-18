import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  private apiUrl: string = "/api/v1/timesheets"
  constructor(private _http: HttpClient) { }

  addTimesheet(timesheet) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.apiUrl, JSON.stringify(timesheet), { headers: headers });
  }
  updateTimesheet(timesheet) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(this.apiUrl+'/'+timesheet.Id, JSON.stringify(timesheet), { headers: headers });
  }
  deleteTimesheet(idtimesheet) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.delete(this.apiUrl+'/'+idtimesheet, { headers: headers });
  }
  getAllTimesheets() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get(this.apiUrl, { headers: headers });
  }
  getTimesheetById(id) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get(this.apiUrl + '/' + id, { headers: headers });
  }
}
