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

  public resource: ResourceModel = new ResourceModel(0, "", "", "", "");
  public resourceList: Array<any> = [];
  public searchResourceList: Array<any> = [];
  idResource = 0;
  lastName = "";
  modalRef = null;


  ngOnInit() {
    this.getAllResources();
  }

  getAllResources(){
    this._resourceService.getAllResources().subscribe((data) => {
      var result;
      result = data;
      this.resourceList = [];
      this.resourceList = result;
    })
  }


  onClickEdit(singleSource) {
    this.resource.Id = singleSource.Id;
    this.resource.FirstName = singleSource.FirstName;
    this.resource.LastName = singleSource.LastName;
    this.resource.DateOfBirth = singleSource.DateOfBirth;
    this.resource.Address = singleSource.Address;
  }

  onClickDelete(singleSource) {
    this.deleteResource(singleSource);
  }

  deleteResource(sourceData) {
    try {
      let confirmResponse = confirm("¿Are you sure to delete this resource?");
      if (confirmResponse) {
        this._resourceService.deleteResource(sourceData.Id).subscribe((data) => {
          this._toastr.success('The resource was deleted successfully', 'Ok');
          this.resourceList = this.resourceList.filter((item) => {
            return item.Id !== sourceData.Id;
          })
        }, (err) => {
          this._toastr.error('An error occurs deleting the resource!', 'Error')
        })
      }
    } catch (error) {
      this._toastr.error('An error occurs deleting the resource!', 'Error')
    }
  }

  insertResource() {
    if (this.resource.Id > 0) {
      this.updateResource();
    } else {
      this.addResource();
    }
  }

  addResource() {
    try {
      this._resourceService.addResource(this.resource).subscribe((data) => {
        this._toastr.success('Resource saved successfully', 'Ok');
        this.getAllResources();
        this.cleanForm();
      }, (err) => {
        this._toastr.error('An error occurs saving the resource!', 'Error')
      });
    } catch (error) {
      this._toastr.error('An error occurs saving the resource!', 'Error')
    }
  }

  updateResource() {
    try {
      this._resourceService.updateResource(this.resource).subscribe((data) => {
        this._toastr.success('Resource updated successfully', 'Ok');
        this.getAllResources();
        this.cleanForm();
      }, (err) => {
        this._toastr.error('An error occurs updating the resource!', 'Error')
      });
    } catch (error) {
      this._toastr.error('An error occurs updating the resource!', 'Error')
    }
  }


  cleanForm() {
    this.resource = new ResourceModel(0, "", "", "", "");

  }

}
