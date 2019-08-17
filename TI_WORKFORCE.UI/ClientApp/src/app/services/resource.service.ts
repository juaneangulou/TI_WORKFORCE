import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl: string = "/api/v1/resources"
  constructor(private _http: HttpClient) { }

  addResource(resource) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.apiUrl, JSON.stringify(resource), { headers: headers });
  }
  updateResource(resource) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(this.apiUrl+'/'+resource.Idresource, JSON.stringify(resource), { headers: headers });
  }
  deleteResource(idresource) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.delete(this.apiUrl+'/'+idresource, { headers: headers });
  }
  getAllResources() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get(this.apiUrl, { headers: headers });
  }
  getResourceById(id) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get(this.apiUrl + '/' + id, { headers: headers });
  }
//   getAllresourcesByName(name) {
//     let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this._http.get('http://localhost:51741/api/resources/GetresourceByName/' + name, { headers: headers });
//   }

}
