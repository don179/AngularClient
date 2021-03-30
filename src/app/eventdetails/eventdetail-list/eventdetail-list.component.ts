import { Component, OnInit } from '@angular/core';
import { EventdetailsService } from 'src/app/shared/eventdetails.service';
import { Eventdetail } from 'src/app/shared/eventdetail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventdetail-list',
  templateUrl: './eventdetail-list.component.html',
  styleUrls: ['./eventdetail-list.component.css']
})


export class EventdetailListComponent implements OnInit {
  p: number = 1;
  searchText: string;

  constructor(public service: EventdetailsService,
  
      private toastr: ToastrService) { }
  
      ngOnInit() {
  
        this.service.refreshList();
    
      }
    
      populateForm(_eventDetail: Eventdetail) {
        this.service.formData = Object.assign({}, _eventDetail);
      }
  
    
      onDelete(id: number) {
    
        if (confirm('Are you sure to delete this record?')) {
          this.service.deleteEventDetail(id).subscribe(res => {
            this.service.refreshList();
            this.toastr.warning('Deleted successfully', 'Event Detail Register');
          });
  
        }
      }

      onRefresh(id: number) {

        this.service.refreshList();
  
        }
    }