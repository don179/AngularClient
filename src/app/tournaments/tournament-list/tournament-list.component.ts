import { Component, OnInit } from '@angular/core';
import { TournamentsService } from 'src/app/shared/tournaments.service';
import { Tournament } from 'src/app/shared/tournament.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs"; 

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})



export class TournamentListComponent implements OnInit {
  p3: number = 1;
  searchTextf: string;

  constructor(public service: TournamentsService,

    private toastr: ToastrService) { }

    ngOnInit() {

      this.service.refreshList();
  
    }
  
    populateForm(tourn: Tournament) {
      this.service.formData = Object.assign({}, tourn);
    }

  
    onDelete(id: number) {
  
      if (confirm('Are you sure to delete this record?')) {
        this.service.deleteTournament(id).subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Tournament Register');
        });

      }
    }

    onRefresh(id: number) {

      this.service.refreshList();

      }
    }
