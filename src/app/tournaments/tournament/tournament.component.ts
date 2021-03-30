import { Component, OnInit, NgModule } from '@angular/core';
import { TournamentsService } from 'src/app/shared/tournaments.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})

export class TournamentComponent implements OnInit {

  constructor(public service: TournamentsService,
    private toastr: ToastrService     
    ) { }

  ngOnInit() {
    this.resetForm();
  }
 


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      TournamentID: null,
      TournamentName: null 
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.TournamentID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postTournament(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Tournament Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putTournament(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Tournament Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}