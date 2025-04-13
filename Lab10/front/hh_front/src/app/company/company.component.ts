import { Component, OnInit } from '@angular/core';
import { Company } from '../../models';
import { CompaniesService } from '../companies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  companies: Company[] = []
  loaded: boolean = false;

  constructor(private companiesService: CompaniesService){}



  ngOnInit(): void {
      this.getCompanies()
  }

  getCompanies(){
    this.companiesService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      this.loaded = true;
    });
  }


}
