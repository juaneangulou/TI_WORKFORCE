import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { ResourceModel } from 'src/app/models/resource-model';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  constructor(private _resourceService: ResourceService, private _toastr: ToastrService) { }

  public resource: ResourceModel =new ResourceModel(0,"","","","");
  public resourceList: Array<any> = [];

  ngOnInit() {
  this._resourceService.getAllResources().subscribe((data)=>{
    var result;
    result = data;
    this.resourceList = [];
    this.resourceList=result;
  })
  }

  insertResource() {
    try {
      this._resourceService.addResource(this.resource).subscribe((data) => {
        this._toastr.success('Resource saved successfully', 'Ok');
        this.cleanForm();
      }, (err) => {
        this._toastr.error('An error occurs saving the resource!', 'Error')
      });
    } catch (error) {
      this._toastr.error('An error occurs saving the resource!', 'Error')
    }
  }

  cleanForm() {
    this.resource =new ResourceModel(0,"","","","");

  }

}
